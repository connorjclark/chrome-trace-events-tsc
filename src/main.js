/// <reference path="../types/index.d.ts" />

const assert = require('assert');
const fs = require('fs');
const graph = require('./graph');
const print = require('./print');
const utils = require('./utils');

const traceLog = JSON.parse(fs.readFileSync('trace.json', 'utf-8'));

const eventsByTypeId = new Map();

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
  // TODO add "data.type"?
  return (event.name + ':' + event.ph).split(/[.:]/g)
    .filter(Boolean)
    .map(upper)
    .map(str => str.replace(/[\s%]/g, ''));
}

for (const event of traceLog.traceEvents) {
  if (process.env.DEBUG_EVENT && !event.name.match(process.env.DEBUG_EVENT)) continue;

  const idPath = getIdPath(event);
  const id = idPath.join('.');
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
    // @ts-ignore
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

  const idPath = id.split('.');
  interfaces.push({
    id,
    idPath,
    name: idPath[idPath.length - 1],
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
