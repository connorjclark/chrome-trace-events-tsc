const fs = require('fs');

const traceLog = JSON.parse(fs.readFileSync('trace.json', 'utf-8'));

const eventsByTypeId = new Map();

/**
 * @param {*} event 
 */
function getId(event) {
  // TODO add "data.type"?
  return event.name.replace(/\s/g, '') + '_' + event.ph;
}

for (const event of traceLog.traceEvents) {
  if (event.name !== 'EvaluateScript') continue;
  // if (!event.args || !event.args.data || !event.args.data.stackTrace) continue;

  const id = getId(event);
  if (!eventsByTypeId.has(id)) eventsByTypeId.set(id, []);
  const events = eventsByTypeId.get(id);
  events.push(event);
}

/** @typedef {{type: 'string' | 'number' | 'boolean' | Type | ObjectType | LiteralType, array?: boolean, optional?: boolean}} Type */
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

/**
 * Simple object check.
 * @param {*} item
 * @returns {boolean}
 */
function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 * @param {*} target
 * @param {Array<*>} sources
 */
function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

/**
 * Combines properties found in all objects. Also return paths
 * to properties only found in a subset of objects.
 * @param {Array<*>} objects
 * @return {{combined: *, optionalPathComponents: string[][]}}
 */
function combineObjects(objects) {
  const combined = {};
  const optionalPathComponents = [];

  const pathsProcessed = new Set();

  /**
   * @param {*} object
   */
  function traverse(object, fn, path = '') {
    if (typeof object !== 'object') return;

    for (const [key, value] of Object.entries(object)) {
      if (Array.isArray(value)) {
        fn(path + '.' + key, value);
        traverse(value[0], fn, path + '.' + key);
      } else if (value && typeof value === 'object') {
        fn(path + '.' + key, value);
        traverse(value, fn, path + '.' + key);
      } else {
        fn(path + '.' + key, value);
      }
    }
  }

  function hasPath(object, pathComponents) {
    let cur = object;
    for (let i = 0; i < pathComponents.length; i++) {
      const key = pathComponents[i];
      if (!cur || !(key in cur)) return false;
      cur = cur[key];
      if (Array.isArray(cur)) cur = cur[0]; // skip into array
    }
    return true;
  }

  function set(pathComponents, value) {
    let cur = combined;
    for (let i = 0; i < pathComponents.length - 1; i++) {
      const key = pathComponents[i];
      cur = cur[key];
    }
    if (Array.isArray(value)) {
      cur[pathComponents[pathComponents.length - 1]] = value;
    } else if (value && typeof value === 'object') {
      cur[pathComponents[pathComponents.length - 1]] = mergeDeep({}, cur[pathComponents[pathComponents.length - 1]], value);
    } else {
      cur[pathComponents[pathComponents.length - 1]] = value;
    }
  }

  /** @type {Map<string, number>} */
  const pathCounts = new Map();

  for (const object of objects) {
    traverse(object, (path, value) => {
      const pathComponents = path.substring(1).split('.');

      // Merge into the combined object.
      set(pathComponents, value);

      // Just once for each path, count occurrences across all objects.
      if (!pathsProcessed.has(path)) {
        pathsProcessed.add(path);
        pathCounts.set(path, objects.filter(o => hasPath(o, pathComponents)).length);
      }
    });
  }

  // If a path has fewer occurrences than its parent, it's optional.
  for (const path of pathCounts.keys()) {
    const pathComponents = path.substring(1).split('.');

    // Assume top level properties are required.
    if (pathComponents.length === 1) continue;

    const parentPath = '.' + pathComponents.slice(0, pathComponents.length - 1).join('.');
    const isOptional = pathCounts.get(parentPath) > pathCounts.get(path);
    if (isOptional) optionalPathComponents.push(pathComponents);
  }

  return {
    combined,
    optionalPathComponents,
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
  const { combined, optionalPathComponents } = combineObjects(events);
  const objectType = getObjectType(combined);
  // console.log(JSON.stringify(combined, null, 2))

  for (const pathComponents of optionalPathComponents) {
    setOptional(objectType, pathComponents);
  }

  objectType.name.type = { literal: `'${events[0].name}'` };
  objectType.ph.type = { literal: `'${events[0].ph}'` };
  objectType.cat.type = { literal: `'${events[0].cat}'` };

  interfaces.push({
    id,
    objectType,
  });

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

    return indent(`${key}${type.optional ? '?' : ''}: ${rhs}${type.array ? '[]' : ''};`);
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
