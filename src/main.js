/// <reference path="../types/index.d.ts" />

const assert = require('assert');
const fs = require('fs');
const graph = require('./graph');
const print = require('./print');
const utils = require('./utils');

const eventFilter = process.env.EVENT_FILTER ? process.env.EVENT_FILTER.split(',') : null;
const topLevelNamespaceName = 'TraceEvent';

/**
 * @param {string} path
 * @param {boolean} lineByLine
 * @returns 
 */
function loadTraceLog(path, lineByLine) {
  /**
   * @param {string} val
   */
  function shouldKeep(val) {
    if (!process.env.DEBUG_GREP) return true;
    return val.match(process.env.DEBUG_GREP);
  }

  if (!lineByLine) {
    return JSON.parse(fs.readFileSync(path, 'utf-8')).traceEvents.filter(e => shouldKeep(e.name));
  }

  const lineReader = require('readline').createInterface({
    input: fs.createReadStream(path)
  });
  return new Promise(resolve => {
    const events = [];

    lineReader.on('line', function (line) {
      if (!shouldKeep(line)) return;

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
  const idPath = [topLevelNamespaceName];

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
    .filter(Boolean));

  // Uppercase each component but the last - the phase character
  // has semantics pertaining to case.
  for (let i = 0; i < idPath.length - 1; i++) {
    idPath[i] = upper(idPath[i]);
  }

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
    id: `${topLevelNamespaceName}.Base`,
    idPath: [topLevelNamespaceName, 'Base'],
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

    if (key === '[]') {
      continue;
    }
    if (cur[key].array) {
      assert(pathComponents[i + 1] === '[]');
    }

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
  const traceFilePaths = fs.readdirSync('./traces').map(p => `./traces/${p}`);
  const events = [];
  for (const traceFilePath of traceFilePaths) {
    if (!fs.existsSync(traceFilePath)) {
      console.warn('missing trace', traceFilePath);
      continue;
    }

    const lineByLine = traceFilePath === './traces/trace-5.json';
    const traceEvents = await loadTraceLog(traceFilePath, lineByLine);
    for (const traceEvent of traceEvents) events.push(traceEvent);
  }

  if (!events.length) throw new Error('no events');

  /** @type {Map<string, Array<*>>} */
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

    // These are dynamically named.
    if ([
      'RenderCompositor',
    ].some(substring => event.name.includes(substring))) continue;

    if (process.env.DEBUG_GREP && !event.name.match(process.env.DEBUG_GREP)) continue;
    if (eventFilter && !eventFilter.includes(event.name)) continue;

    const idPath = getIdPath(event);
    const id = idPath.join('.');
    if (!eventsByTypeId.has(id)) eventsByTypeId.set(id, []);
    const events = eventsByTypeId.get(id);
    if (!events) throw new Error();
    events.push(event);
  }

  /** @type {Gen.Interface[]} */
  const interfaces = [];
  /** @type {Map<string, Gen.Interface>} */
  const interfaceById = new Map();

  for (const [id, events] of eventsByTypeId.entries()) {
    const { combined, optionalPathComponents } = utils.combineObjects(events);
    const objectType = getObjectType(combined);

    for (const pathComponents of optionalPathComponents) {
      setOptional(objectType, pathComponents);
    }

    objectType.name.type = { literal: `'${events[0].name}'` };
    objectType.ph.type = { literal: `'${events[0].ph}'` };
    // objectType.cat.type = { literal: `'${events[0].cat}'` };

    const idPath = id.split('.');
    const _interface = {
      id,
      idPath,
      name: idPath[idPath.length - 1],
      objectType,
    };
    interfaces.push(_interface);
    interfaceById.set(id, _interface);
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
  interfaceById.set(baseInterface.id, baseInterface);

  for (const _interface of interfaces) {
    _interface.parent = baseInterface;

    // Remove base props.
    for (const key of Object.keys(baseInterface.objectType)) {
      delete _interface.objectType[key];
    }
  }

  // Group interfaces into namespaces based off idPath.
  /** @type {Map<string, Gen.Namespace>} */
  const namespaceById = new Map();

  // /** @type {Gen.Namespace} */
  // const topLevelNamespace = {
  //   idPath: ['TraceEvent'],
  //   name: 'TraceEvent',
  //   interfaces: [],
  //   unions: [],
  //   namespaces: [],
  // };

  // namespaceById.set(topLevelNamespace.name, topLevelNamespace);

  for (const _interface of interfaces) {
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
        unions: [],
        namespaces: [],
      };
      namespaceById.set(namespaceId, namespace);

      if (namespaceIdPath.length > 1) {
        const grandNamespaceId = namespaceIdPath.slice(0, namespaceIdPath.length - 1).join('.');
        const grandNamespace = namespaceById.get(grandNamespaceId);
        if (!grandNamespace) throw new Error();
        grandNamespace.namespaces.push(namespace);
      }
    }

    const namespace = namespaceById.get(namespaceId);
    if (!namespace) throw new Error();
    namespace.interfaces.push(_interface);
  }

  // Make a union (over all phases) for each TraceEvent.
  /** @type {Gen.TypeUnion[]} */
  const traceEventUnions = [];
  for (const namespace of namespaceById.values()) {
    if (namespace.namespaces.length > 0) {
      continue;
    }

    const grandNamespaceId = namespace.idPath.slice(0, namespace.idPath.length - 1).join('.');
    const grandNamespace = namespaceById.get(grandNamespaceId);
    if (!grandNamespace) throw new Error();

    /** @type {Gen.TypeUnion} */
    const union = {
      id: namespace.idPath.join('.'),
      name: namespace.name,
      types: namespace.interfaces,
    };
    grandNamespace.unions.push(union);
    traceEventUnions.push(union);
  }

  // Add comments.
  const commentsByType = {
    'TraceEvent.Base': {
      cat: 'Comma-separated list of category names.',
      pid: 'Process id of the process that generated the event.',
      tid: 'Thread id of the thread that generated the event.',
      ts: 'Timestamp of the event. This value is monotonically increasing among all events generated in the same thread.',
    },
  };
  /**
   * @callback Commenter
   * @param {Gen.Interface} interface
   * @param {Gen.Type} type
   * @return {string}
   */
  /** @type {Record<string, string | Commenter>} */
  const commentsByKey = {
    dur: 'Duration.',
    ph: (_interface, prop) => {
      const eventName = _interface.idPath[_interface.idPath.length - 2];
      // src/base/trace_event/common/trace_event_common.h
      switch (prop.type.literal.replace(/[^a-zA-Z0-9()]/g, '')) {
        case 'B': return `Denotes the beginning of the event ${eventName}.`;
        case 'E': return `Denotes the ending of the event ${eventName}.`;
        case 'S': return `Denotes the beginning of the async event ${eventName}.`;
        case 'T': return `Denotes a step into the async event ${eventName}.`;
        case 'F': return `Denotes the ending of the async event ${eventName}.`;
        case 's': return `Denotes the beginning of the async flow event ${eventName}.`;
        case 't': return `Denotes a step into the async flow event ${eventName}.`;
        case 'f': return `Denotes the ending of the async flow event ${eventName}.`;
        case 'b': return `Denotes the beginning of the nestable async flow event ${eventName}.`;
        case 'e': return `Denotes a step into the nestable async flow event ${eventName}.`;
        case 'n': return `Denotes the ending of the nestable async flow event ${eventName}.`;
        case 'I': return `Denotes an event ${eventName}. There are no begining/ending phases.`;
        case 'M': return `Denotes metadata for the event ${eventName}.`;
        case 'C': return `Denotes a counter for the event ${eventName}.`;
        case 'X': return `Denotes the end of the event ${eventName}.`;
        case 'N': return `Denotes a create object of the event ${eventName}.`;
        case 'O': return `Denotes a snapshot object of the event ${eventName}.`;
        case 'D': return `Denotes a delete object of the event ${eventName}.`;
        case '(': return `Denotes entering a context of the event ${eventName}.`;
        case ')': return `Denotes leaving a context of the event ${eventName}.`;
        case 'R': return `Denotes a mark of the event ${eventName}.`;
        case 'P': return `Denotes a sample of the event ${eventName}.`;
        case '=': return `Denotes a link ids of the event ${eventName}.`;
        default: return `Denotes an unknown phase of the event ${eventName}.`;
      }
    },
    tts: 'Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.',
  };
  for (const [id, propertyComments] of Object.entries(commentsByType)) {
    const _interface = interfaceById.get(id);
    if (!_interface) throw new Error();
    for (const [key, comment] of Object.entries(propertyComments)) {
      const prop = _interface.objectType[key];
      if (!prop) {
        console.warn(`no key ${key} for ${id}`);
        continue;
      }

      prop.comment = comment;
    }
  }
  for (const [key, comment] of Object.entries(commentsByKey)) {
    for (const _interface of interfaceById.values()) {
      const prop = _interface.objectType[key];
      if (!prop) continue;
      if (typeof comment === 'string') {
        prop.comment = comment;
      } else {
        prop.comment = comment(_interface, prop);
      }
    }
  }

  debugger;

  // Create union that encompasses all trace events. Use the unioned types create above.
  /** @type {Gen.TypeUnion} */
  const traceEventTypeUnion = {
    id: 'TraceEvent.TraceEvent',
    name: 'TraceEvent',
    types: traceEventUnions,
  };
  const topLevelNamespace = namespaceById.get(topLevelNamespaceName);
  if (!topLevelNamespace) throw new Error();
  topLevelNamespace.unions.unshift(traceEventTypeUnion);

  const rootNode = graph.makeNamespaceNode(topLevelNamespace);
  rootNode.children.unshift(graph.makeInterfaceNode(baseInterface));

  const result = print(rootNode);
  console.log('export ' + result);
}

run();
