/// <reference path="../types/index.d.ts" />

const fs = require('fs');
const graph = require('./graph');
const print = require('./print');
const utils = require('./utils');

const traceLog = JSON.parse(fs.readFileSync('trace.json', 'utf-8'));

const eventsByTypeId = new Map();

/**
 * @param {*} event 
 */
function getId(event) {
  // TODO add "data.type"?

  return (event.name[0].toUpperCase() + event.name.slice(1))
    .replace(/\s/g, '')
    .replace(/%/g, '')
    // TODO use as a namepsace delim
    .replace(/[.:]/g, '')
    + '_' + event.ph;
}

for (const event of traceLog.traceEvents) {
  if (process.env.DEBUG_EVENT && !event.name.match(process.env.DEBUG_EVENT)) continue;

  const id = getId(event);
  if (!eventsByTypeId.has(id)) eventsByTypeId.set(id, []);
  const events = eventsByTypeId.get(id);
  events.push(event);
}

/**
 * @param {*} object
 */
function getObjectType(object) {
  /** @type {Gen.ObjectType} */
  const objectType = {};
  for (const [key, value] of Object.entries(object)) {
    if (Array.isArray(value)) {
      objectType[key] = {
        type: getObjectType(value[0]), // maybe good enough.
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
    cur = cur[key].type;
  }
  cur[pathComponents[pathComponents.length - 1]].optional = true;
}

/** @type {Gen.Interface[]} */
const interfaces = [];
for (const [id, events] of eventsByTypeId.entries()) {
  const { combined, optionalPathComponents } = utils.combineObjects(events);
  const objectType = getObjectType(combined);
  // console.log(JSON.stringify(combined, null, 2))

  for (const pathComponents of optionalPathComponents) {
    setOptional(objectType, pathComponents);
  }

  objectType.name.type = { literal: `'${events[0].name}'` };
  objectType.ph.type = { literal: `'${events[0].ph}'` };
  // objectType.cat.type = { literal: `'${events[0].cat}'` };

  interfaces.push({
    id,
    objectType,
  });

  // console.log(JSON.stringify(sampleEvent));
}
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
  name: '_TraceEvent',
  interfaces: [],
  namespaces: [],
};

// Group some interfaces into their own namespace.
/** @type {Gen.Namespace} */
const v8Namespace = {
  name: 'V8',
  interfaces: [],
  namespaces: [],
};
topLevelNamespace.namespaces.push(v8Namespace);
for (const _interface of interfaces) {
  // if (_interface.id.startsWith('V8')) {
  //   v8Namespace.interfaces.push(_interface);
  // } else {
  //   topLevelNamespace.interfaces.push(_interface);
  // }
  topLevelNamespace.interfaces.push(_interface);
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
