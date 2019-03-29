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

/** @typedef {{type: 'string' | 'number' | 'boolean' | Type | ObjectType | LiteralType, array?: boolean, optional?: boolean}} Type */
/** @typedef {{literal: *}} LiteralType */
/** @typedef {Record<string, Type>} ObjectType */
/** @typedef {{id: string, parent?: Interface, objectType: ObjectType}} Interface */
/** @typedef {{name: string, interfaces: Interface[]}} Namespace */

/**
 * @param {*} object
 */
function getObjectType(object) {
  /** @type {ObjectType} */
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

  /** @type {ObjectType} */
  const ordered = {};
  Object.keys(objectType).sort().forEach(function (key) {
    ordered[key] = objectType[key];
  });

  return ordered;
}

/**
 * Assume no object properties
 * @param {ObjectType[]} objectTypes
 * @return {Interface}
 */
function findCommonInterface(objectTypes) {
  /** @type {ObjectType} */
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
 * @param {ObjectType} objectType 
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

/** @type {Interface[]} */
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

for (const interface of interfaces) {
  interface.parent = baseInterface;

  // Remove base props.
  for (const key of Object.keys(baseInterface.objectType)) {
    delete interface.objectType[key];
  }
}

const namespace = {
  name: '_TraceEvent',
  interfaces: [baseInterface, ...interfaces],
};
const rootNode = graph.makeNode('Namespace', { name: namespace.name });

const traceEventTypeUnion = {
  name: 'TraceEvent',
  types: interfaces,
};
rootNode.children.push(graph.makeTypeUnionNode(traceEventTypeUnion));

for (const interface of namespace.interfaces) {
  const interfaceNode = graph.makeNode('Interface', {
    id: interface.id,
    parentId: interface.parent && interface.parent.id,
  });
  interfaceNode.children = [graph.makeObjectNode(interface.objectType)];
  rootNode.children.push(interfaceNode);
}

const result = print(rootNode);
console.log(result);
