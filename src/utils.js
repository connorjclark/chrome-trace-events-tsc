/**
 * Combines properties found in all objects. Also return paths
 * to properties only found in a subset of objects.
 * @param {Array<*>} objects
 * @return {{combined: *, optionalPathComponents: string[][]}}
 */
function combineObjects(objects) {
  const state = {
    combined: {},
    optionalPathComponents: [],
    pathPrefix: [],
    processedSubObject: new Set(),
  }
  combineObjectsImpl(objects, state);
  const { combined, optionalPathComponents } = state;
  return { combined, optionalPathComponents };
}

/**
 * @param {Array<*>} objects
 * @param {{combined: *, optionalPathComponents: string[][], pathPrefix: string[], processedSubObject: Set<string>}} state
 */
function combineObjectsImpl(objects, state) {
  const { combined, optionalPathComponents, pathPrefix, processedSubObject } = state;
  /** @type {Map<string, number>} */
  const keyCount = new Map();
  for (const object of objects) {
    for (const [key, value] of Object.entries(object)) {
      const cur = keyCount.get(key);
      const seenKey = Boolean(cur);
      keyCount.set(key, (cur || 0) + 1);

      if (Array.isArray(value)) {
        if (value.length === 0) continue;
        const subObjectPath = [...pathPrefix, key].join('.');
        if (processedSubObject.has(subObjectPath)) continue;
        processedSubObject.add(subObjectPath);

        const subObjects = objects.map(o => o[key] && o[key][0]).filter(Boolean);
        combined[key] = [];
        if (Array.isArray(value[0])) {
          // ... ?
          combined[key][0] = value[0];
        } else if (isObject(value[0])) {
          combined[key][0] = {};
        } else {
          combined[key][0] = value[0];
        }
        combineObjectsImpl(subObjects, {
          combined: combined[key][0],
          optionalPathComponents,
          pathPrefix: [...pathPrefix, key, '[]'],
          processedSubObject,
        });
      } else if (isObject(value)) {
        const subObjectPath = [...pathPrefix, key].join('.');
        if (processedSubObject.has(subObjectPath)) continue;
        processedSubObject.add(subObjectPath);

        const subObjects = objects.map(o => o[key]).filter(Boolean);
        combineObjectsImpl(subObjects, {
          combined: combined[key] = {},
          optionalPathComponents,
          pathPrefix: [...pathPrefix, key],
          processedSubObject,
        });
      } else {
        if (!seenKey) combined[key] = value;
      }
    }
  }

  for (const [key, count] of keyCount.entries()) {
    if (count !== objects.length) {
      optionalPathComponents.push([...pathPrefix, key]);
    }
  }
}

/**
 * Simple object check.
 * @param {*} item
 * @returns {r is Object}
 */
function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

module.exports = {
  combineObjects,
  isObject,
}
