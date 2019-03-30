/// <reference path="../types/index.d.ts" />

const assert = require('assert');
const fs = require('fs');
const graph = require('./graph');
const print = require('./print');
const utils = require('./utils');

function loadTraceLog(path) {
  const lineReader = require('readline').createInterface({
    input: fs.createReadStream(path)
  });
  return new Promise(resolve => {
    const events = [];

    lineReader.on('line', function (line) {
      if (process.env.DEBUG_GREP && !line.match(process.env.DEBUG_GREP)) return;

      events.push(
        ...JSON.parse('[' + line.replace(/,$/, '') + ']')
      );
    });

    lineReader.on('close', () => resolve(events));
  });
}

/**
 * @param {string} str 
 */
function upper(str) {
  return str[0].toUpperCase() + str.slice(1);
}

/**
 * @param {{name: string, ph: string}} event 
 */
function getIdPath(event) {
  const idPath = [];

  // TODO add "data.type"?
  let safePhase = event.ph;
  if (safePhase === ')') safePhase = 'RP';
  if (safePhase === '(') safePhase = 'LP';

  let safeName = event.name
    // transform @../../cc/scheduler/scheduler.cc:38 to @../../cc/scheduler/scheduler:L38
    .replace('.cc:', ':L')
    // transform v3.1.2 to v3_1_2. ignore "V8."
    .replace(/(.?\d)\./g, (substring, group1) => {
      return substring.match(/v8/i) ? substring : group1 + '_';
    })
    // Remove various cpp keywords.
    .replace(/\*/g, '')
    .replace(/(\(|^| |,)(const|int|void|anonymous|namespace)(\)| |$|,)|/g, '');

  // Consume the tag part of an event name and use as a namespace
  // "[ADFUEL] some event name"
  const tagMatch = safeName.match(/^\[.*?\]/);
  if (tagMatch) {
    const tag = tagMatch[0].slice(1, tagMatch[0].length - 1);
    idPath.push(tag);
    safeName = safeName.substr(tagMatch[0].length);
  }

  idPath.push(...(safeName + ':' + safePhase)
    .split(/[.:]+/g)
    .map(str => str.replace(/\./g, '_'))
    .map(str => str.replace(/[^a-zA-Z0-9_]/g, ''))
    .filter(Boolean)
    .map(upper));

  return idPath;
}

/**
 * @param {*} object
 * @return {Gen.ObjectType}
 */
function getObjectType(object) {
  /** @type {Gen.ObjectType} */
  const objectType = {};
  for (const [key, value] of Object.entries(object)) {
    if (Array.isArray(value)) {
      objectType[key] = {
        type: getObjectType(value[0] || {}), // maybe good enough.
        array: true,
      };
    } else if (typeof value === 'object') {
      objectType[key] = { type: getObjectType(value) };
    } else if (typeof value === 'string') {
      objectType[key] = { type: 'string' };
    } else if (typeof value === 'number') {
      objectType[key] = { type: 'number' };
    } else if (typeof value === 'boolean') {
      objectType[key] = { type: 'boolean' };
    } else {
      throw new Error('what was that? ' + value);
    }
  }

  /** @type {Gen.ObjectType} */
  const ordered = {};
  Object.keys(objectType).sort().forEach(function (key) {
    ordered[key] = objectType[key];
  });

  return ordered;
}

/**
 * Assume no object properties
 * @param {Gen.ObjectType[]} objectTypes
 * @return {Gen.Interface}
 */
function findCommonInterface(objectTypes) {
  /** @type {Gen.ObjectType} */
  const common = {};
  const processed = new Set();

  for (const objectType of objectTypes) {
    for (const [key, typeDef] of Object.entries(objectType)) {
      if (processed.has(key) || typeof typeDef.type === 'object') continue;
      processed.add(key);

      if (objectTypes.every(type => key in type)) common[key] = typeDef;
    }
  }

  return {
    id: 'Base',
    idPath: ['Base'],
    name: 'Base',
    objectType: common,
  };
}

/**
 * @param {Gen.ObjectType} objectType 
 * @param {string[]} pathComponents 
 */
function setOptional(objectType, pathComponents) {
  let cur = objectType;
  for (let i = 0; i < pathComponents.length - 1; i++) {
    const key = pathComponents[i];
    if (!(key in cur)) {
      cur[key] = {
        type: {},
        optional: true,
      };
    }
    // @ts-ignore
    cur = cur[key].type;
  }
  if (cur[pathComponents[pathComponents.length - 1]] === undefined) {
    cur[pathComponents[pathComponents.length - 1]] = {
      type: {},
      optional: true,
    };
  } else {
    cur[pathComponents[pathComponents.length - 1]].optional = true;
  }
}

async function run() {
  const events = [
    ...JSON.parse(fs.readFileSync('./trace.json', 'utf-8')).traceEvents,
    // very large trace, not checked in.
    // ...await loadTraceLog('/Users/cjamcl/Downloads/trace_Fri_Mar_29_2019_7.41.58_PM.json'),
  ]

  const eventsByTypeId = new Map();

  for (const event of events) {
    if (!event.name) {
      // get outta here you rascal.
      continue;
    }

    // These types are bugged.
    if ([
      'CERT_CT_COMPLIANCE_CHECKED',
      'CERT_VERIFIER_JOB',
      'FrameLayoutJank',
      'LayoutTree',
      'MainThreadScheduler',
      'periodic_interval',
      'RendererMainThreadLoad',
      'SSL_CERTIFICATES_RECEIVED',
      'StyleInvalidatorInvalidationTracking',
      'V8.Execute',
      'V8.RunMicrotasks',
    ].includes(event.name)) continue;

    // // These are dynamically named.
    if ([
      'RenderCompositor',
    ].some(substring => event.name.includes(substring))) continue;

    if (process.env.DEBUG_GREP && !event.name.match(process.env.DEBUG_GREP)) continue;

    const idPath = getIdPath(event);
    const id = idPath.join('.');
    if (!eventsByTypeId.has(id)) eventsByTypeId.set(id, []);
    const events = eventsByTypeId.get(id);
    events.push(event);
  }

  /** @type {Gen.Interface[]} */
  const interfaces = [];
  for (const [id, events] of eventsByTypeId.entries()) {
    // console.log(id);
    const { combined, optionalPathComponents } = utils.combineObjects(events);
    // console.log('combined', JSON.stringify(combined, null, 2));
    // console.log('optionalPathComponents', JSON.stringify(optionalPathComponents, null, 2));
    const objectType = getObjectType(combined);
    // console.log(JSON.stringify(combined, null, 2))

    for (const pathComponents of optionalPathComponents) {
      setOptional(objectType, pathComponents);
    }

    // console.log('objectType', objectType);
    objectType.name.type = { literal: `'${events[0].name}'` };
    objectType.ph.type = { literal: `'${events[0].ph}'` };
    // objectType.cat.type = { literal: `'${events[0].cat}'` };

    const idPath = id.split('.');
    interfaces.push({
      id,
      idPath,
      name: idPath[idPath.length - 1],
      objectType,
    });

    // console.log(JSON.stringify(sampleEvent));
  }

  // WIP
  // Dedupe common object types.
  // {
  //   /**
  //    * @callback TraverseCallback
  //    * @param {string} key
  //    * @param {Gen.ObjectType} objectType
  //    */
  //   /**
  //    * @param {Gen.ObjectType} objectType
  //    * @param {TraverseCallback} fn
  //    */
  //   function traverse(objectType, fn) {
  //     for (const [key, value] of Object.entries(objectType)) {
  //       if (utils.isObject(value.type) && !('literal' in value.type)) {
  //         fn(key, objectType);
  //         traverse(value.type, fn);
  //       }
  //     }
  //   }

  //   const objectTypeCounts = new Map();
  //   const objectTypeKey = new Map();
  //   for (const _interface of interfaces) {
  //     traverse(_interface.objectType, (key, objectType) => {
  //       // Can't make a useful name out of that.
  //       if (key === 'data') return;

  //       const data = JSON.stringify(objectType);
  //       const cur = objectTypeCounts.get(data) || 0;
  //       objectTypeCounts.set(data, cur + 1);

  //       if (!objectTypeKey.has(data)) objectTypeKey.set(data, key);
  //     });
  //   }
  //   for (const [objectTypeData, count] of objectTypeCounts) {
  //     if (count === 1) continue;

  //     const key = objectTypeKey.get(objectTypeData);
  //     // console.log(count, key, objectTypeData);
  //   }
  //   process.exit();
  // }

  interfaces.sort((a, b) => a.id.localeCompare(b.id));

  const baseInterface = findCommonInterface(interfaces.map(t => t.objectType));

  for (const _interface of interfaces) {
    _interface.parent = baseInterface;

    // Remove base props.
    for (const key of Object.keys(baseInterface.objectType)) {
      delete _interface.objectType[key];
    }
  }

  /** @type {Gen.Namespace} */
  const topLevelNamespace = {
    idPath: ['_TraceEvent'],
    name: '_TraceEvent',
    interfaces: [],
    namespaces: [],
  };

  // Group interfaces into namespaces based off idPath.
  /** @type {Map<string, Gen.Namespace>} */
  const namespaceById = new Map();
  for (const _interface of interfaces) {
    if (_interface.idPath.length === 1) {
      topLevelNamespace.interfaces.push(_interface);
      continue;
    }

    const namespaceId = _interface.idPath.slice(0, _interface.idPath.length - 1).join('.');

    // create namespaces as necessary
    for (let i = 0; i < _interface.idPath.length - 1; i++) {
      const namespaceIdPath = _interface.idPath.slice(0, i + 1);
      const namespaceId = namespaceIdPath.join('.');
      if (namespaceById.has(namespaceId)) continue;

      const name = namespaceIdPath[namespaceIdPath.length - 1];
      const namespace = {
        idPath: namespaceIdPath,
        name,
        interfaces: [],
        namespaces: [],
      };
      namespaceById.set(namespaceId, namespace);

      let grandNamespace;
      if (namespaceIdPath.length === 1) {
        grandNamespace = topLevelNamespace;
      } else {
        const grandNamespaceId = namespaceIdPath.slice(0, namespaceIdPath.length - 1).join('.');
        grandNamespace = namespaceById.get(grandNamespaceId);
      }
      assert(grandNamespace);
      grandNamespace && grandNamespace.namespaces.push(namespace);
    }

    const namespace = namespaceById.get(namespaceId);
    assert(namespace);
    namespace && namespace.interfaces.push(_interface);
  }

  const rootNode = graph.makeNamespaceNode(topLevelNamespace);

  /** @type {Gen.TypeUnion} */
  const traceEventTypeUnion = {
    name: 'TraceEvent',
    interfaces,
  };
  rootNode.children.unshift(graph.makeTypeUnionNode(traceEventTypeUnion));
  rootNode.children.unshift(graph.makeInterfaceNode(baseInterface));

  const result = print(rootNode);
  console.log('export ' + result);
}

run();
