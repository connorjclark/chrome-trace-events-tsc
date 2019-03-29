const fs = require('fs');

const traceLog = JSON.parse(fs.readFileSync('trace.json', 'utf-8'));

const traceEventTypes = new Map();

/**
 * @param {*} event 
 */
function getId(event) {
  return event.name.replace(/\s/g, '') + '_' + event.ph;
}

for (const event of traceLog.traceEvents) {
  if (event.name !== 'EvaluateScript') continue;
  if (!event.args.data || !event.args.data.stackTrace) continue;
  const id = getId(event);
  if (traceEventTypes.has(id)) continue;

  traceEventTypes.set(id, event);
  // console.log(id, event);
}

/** @typedef {{type: 'string' | 'number' | 'boolean' | Type | ObjectType | LiteralType, array?: boolean}} Type */
/** @typedef {{literal: *}} LiteralType */
/** @typedef {Record<string, Type>} ObjectType */
/** @typedef {{id: string, parent?: Interface, objectType: ObjectType}} Interface */

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

/** @type {Interface[]} */
const interfaces = [];
for (const [id, sampleEvent] of traceEventTypes.entries()) {
  const objectType = getObjectType(sampleEvent);

  objectType.name.type = { literal: `'${sampleEvent.name}'` };
  objectType.ph.type = { literal: `'${sampleEvent.ph}'` };

  interfaces.push({
    id,
    objectType,
  });
  console.log(id, JSON.stringify(objectType, null, 2));

  // console.log(JSON.stringify(sampleEvent));
}
interfaces.sort((a, b) => a.id.localeCompare(b.id));

const baseInterface = findCommonInterface(interfaces.map(t => t.objectType));

for (const interface of interfaces) {
  // TODO remove base props
  interface.parent = baseInterface;
}

console.log('baseInterface', baseInterface);

/**
 * @param {Interface[]} interfaces
 */
function print(interfaces) {
  const debugPrint = process.env.DEBUG_PRINT === '1';
  let output = '';
  let indentation = 0;

  /**
   * @param {string} code
   */
  function indent(code) {
    return code.split('\n')
      .map(line => '  ' + line)
      .join('\n');
  }

  /**
   * @param {string} key
   * @param {Type} type
   */
  function printProperty(key, type) {
    if (debugPrint) console.log('printProperty', indentation, key, type);
    let rhs = '';
    if (type.type && typeof type.type === 'object') {
      if ('literal' in type.type) {
        rhs = type.type.literal;
      } else {
        // @ts-ignore - it's an ObjectType
        rhs = printObject(type.type);
      }
    } else if (type.type && typeof type.type === 'string') {
      rhs = type.type;
    }

    return indent(`${key}: ${rhs}${type.array ? '[]' : ''};`);
  }

  /**
   * @param {ObjectType} objectType 
   */
  function printObject(objectType) {
    if (debugPrint) console.log('printObject', indentation, objectType);
    return I(() => {
      return `{\n${Object.entries(objectType).map(([key, type]) => {
        return printProperty(key, type);
      }).join('\n')}\n}`;
    });
  }

  /**
   * @param {Interface} interface 
   */
  function printInterface(interface) {
    return `interface ${interface.id}${interface.parent ? ' extends ' + interface.parent.id : ''} ${printObject(interface.objectType)}`;
  }

  /**
   * @param {Function} fn 
   */
  function I(fn) {
    indentation += 1;
    const result = fn();
    indentation -= 1;
    return result;
  }

  for (const interface of interfaces) {
    output += printInterface(interface) + "\n";
  }

  return output;
}

const result = print([baseInterface, ...interfaces]);
console.log(result);
