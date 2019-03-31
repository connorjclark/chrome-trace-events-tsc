/**
 * Simple object check.
 * @param {*} item
 * @returns {r is Object}
 */
function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
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
   * TODO: use array for path instead of string. "..." instead of "." because
   * some properties in the the trace data have a "."
   * @param {*} object
   * @param {Function} fn
   */
  function traverse(object, fn, path = '') {
    if (typeof object !== 'object') return;

    for (const [key, value] of Object.entries(object)) {
      if (Array.isArray(value)) {
        fn(path + '...' + key, value);
        traverse(value[0], fn, path + '...' + key);
      } else if (value && typeof value === 'object') {
        fn(path + '...' + key, value);
        traverse(value, fn, path + '...' + key);
      } else {
        fn(path + '...' + key, value);
      }
    }
  }

  /**
   * @param {*} object
   * @param {string[]} pathComponents
   */
  function hasPath(object, pathComponents) {
    let cur = object;
    for (let i = 0; i < pathComponents.length; i++) {
      const key = pathComponents[i];
      if (!isObject(cur) || !(key in cur)) return false;
      cur = cur[key];
      if (Array.isArray(cur)) cur = cur[0]; // skip into array
    }
    return true;
  }

  /**
   * @param {string[]} pathComponents
   * @param {*} value
   */
  function set(pathComponents, value) {
    let cur = combined;
    for (let i = 0; i < pathComponents.length - 1; i++) {
      const key = pathComponents[i];
      if (cur[key] === undefined) {
        cur[key] = {};
      }
      cur = cur[key];
    }
    if (Array.isArray(cur)) {
      if (cur.length === 0) cur[0] = {};
      cur = cur[0];
    }
    if (Array.isArray(value)) {
      cur[pathComponents[pathComponents.length - 1]] = value;
    } else if (isObject(value)) {
      cur[pathComponents[pathComponents.length - 1]] = mergeDeep({}, cur[pathComponents[pathComponents.length - 1]], value);
    } else {
      cur[pathComponents[pathComponents.length - 1]] = value;
    }
  }

  /** @type {Map<string, number>} */
  const pathCounts = new Map();

  for (const object of objects) {
    traverse(object, (path, value) => {
      const pathComponents = path.substring(3).split('...');

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
    const pathComponents = path.substring(3).split('...');

    // Assume top level properties are required.
    if (pathComponents.length === 1) continue;

    const parentPath = '...' + pathComponents.slice(0, pathComponents.length - 1).join('...');
    const isOptional = pathCounts.get(parentPath) > pathCounts.get(path);
    if (isOptional) optionalPathComponents.push(pathComponents);
  }

  return {
    combined,
    optionalPathComponents,
  };
}

/**
 * Deep merge two objects.
 * @param {*} target
 * @param {Array<*>} sources
 * @return {*}
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

module.exports = {
  combineObjects,
  isObject,
}
