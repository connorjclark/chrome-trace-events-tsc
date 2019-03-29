const utils = require('./utils');

/**
 * @param {Type} type
 * @return {Node}
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
 * @param {Type} type
 * @return {Node}
 */
function makePropertyNode(key, type) {
  return { type: 'Property', data: { key }, children: [makeTypeNode(type)] };
}

/**
 * @param {ObjectType} objectType
 * @return {Node}
 */
function makeObjectNode(objectType) {
  const propertyNodes = [];

  Object.entries(objectType).map(([key, type]) => {
    propertyNodes.push(makePropertyNode(key, type));
  });

  return { type: 'Object', data: {}, children: propertyNodes };
}

/**
 * @param {*} typeUnion
 * @return {Node}
 */
function makeTypeUnionNode(typeUnion) {
  const typeIds = typeUnion.types.map(t => t.id);
  return { type: 'TypeUnion', data: { name: typeUnion.name, typeIds }, children: [] };
}


/** @typedef {'Namespace' | 'Interface' | 'Object' | 'Property' | 'Type' | 'TypeUnion'} NodeType */
/** @typedef {{type: NodeType, data: *, children: Node[]}} Node */

/**
 * @param {NodeType} type
 * @param {*} data
 * @return {Node}
 */
function makeNode(type, data) {
  return { type, data, children: [] };
}

module.exports = {
  makeNode,
  makeObjectNode,
  makePropertyNode,
  makeTypeUnionNode,
}