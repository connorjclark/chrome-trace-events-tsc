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
  const propertyNodes = [];

  Object.entries(objectType).map(([key, type]) => {
    propertyNodes.push(makePropertyNode(key, type));
  });

  return { type: 'Object', data: {}, children: propertyNodes };
}

/**
 * @param {*} typeUnion
 * @return {Gen.Node}
 */
function makeTypeUnionNode(typeUnion) {
  const typeIds = typeUnion.types.map(t => t.id);
  return { type: 'TypeUnion', data: { name: typeUnion.name, typeIds }, children: [] };
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
  makeNode,
  makeObjectNode,
  makePropertyNode,
  makeTypeUnionNode,
}