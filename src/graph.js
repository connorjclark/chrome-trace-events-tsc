const utils = require('./utils');

/**
 * @param {Gen.Type} type
 * @return {Gen.Node}
 */
function makeTypeNode(type) {
  const literal = utils.isObject(type.type) && 'literal' in type.type && type.type.literal;
  const data = { array: type.array, optional: type.optional };

  if (utils.isObject(type.type) && !literal) {
    return { type: 'Type', data, children: [makeObjectNode(type.type)] };
  } else {
    data.type = literal || type.type;
    return { type: 'Type', data, children: [] };
  }
}

/**
 * @param {string} key
 * @param {Gen.Type} type
 * @return {Gen.Node}
 */
function makePropertyNode(key, type) {
  return { type: 'Property', data: { key }, children: [makeTypeNode(type)] };
}

/**
 * @param {Gen.ObjectType} objectType
 * @return {Gen.Node}
 */
function makeObjectNode(objectType) {
  /** @type {Gen.Node[]} */
  const propertyNodes = [];

  Object.entries(objectType).map(([key, type]) => {
    propertyNodes.push(makePropertyNode(key, type));
  });

  return { type: 'Object', data: {}, children: propertyNodes };
}

/**
 * @param {Gen.TypeUnion} typeUnion
 * @return {Gen.Node}
 */
function makeTypeUnionNode(typeUnion) {
  const typeIds = typeUnion.interfaces.map(i => i.id);
  return { type: 'TypeUnion', data: { name: typeUnion.name, typeIds }, children: [] };
}

/**
 * @param {Gen.Interface} _interface
 * @return {Gen.Node}
 */
function makeInterfaceNode(_interface) {
  const data = {
    id: _interface.id,
    name: _interface.name,
    parentId: _interface.parent && _interface.parent.id,
  };
  const children = [makeObjectNode(_interface.objectType)];
  return { type: 'Interface', data, children };
}

/**
 * @param {Gen.Namespace} namespace
 * @return {Gen.Node}
 */
function makeNamespaceNode(namespace) {
  const children = [
    ...namespace.namespaces.map(makeNamespaceNode),
    ...namespace.interfaces.map(makeInterfaceNode),
  ];
  return { type: 'Namespace', data: { name: namespace.name }, children };
}

/**
 * @param {Gen.NodeType} type
 * @param {*} data
 * @return {Gen.Node}
 */
function makeNode(type, data) {
  return { type, data, children: [] };
}

module.exports = {
  makeInterfaceNode,
  makeNamespaceNode,
  makeNode,
  makeObjectNode,
  makePropertyNode,
  makeTypeUnionNode,
}