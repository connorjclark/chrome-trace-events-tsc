const fs = require('fs');

const traceLog = JSON.parse(fs.readFileSync('trace.json', 'utf-8'));

const traceEventTypes = new Map();

/**
 * @param {*} event 
 */
function getTypeId(event) {
    return event.name.replace(/\s/g, '') + '_' + event.ph;
}

for (const event of traceLog.traceEvents) {
    if (event.name !== 'EvaluateScript') continue;
    if (!event.args.data || !event.args.data.stackTrace) continue;
    const typeId = getTypeId(event);
    if (traceEventTypes.has(typeId)) continue;

    traceEventTypes.set(typeId, event);
    // console.log(typeId, event);
}

/** @typedef {{type: 'string' | 'number' | 'boolean' | TypeDef | TypeInfo, array?: boolean}} TypeDef */
/** @typedef {Record<string, TypeDef>} TypeInfo */
/** @typedef {{typeId: string, parent?: Type, info: TypeInfo}} Type */

/**
 * @param {*} object
 */
function getTypeInfo(object) {
    /** @type {TypeInfo} */
    const info = {};
    for (const [key, value] of Object.entries(object)) {
        if (Array.isArray(value)) {
            info[key] = {
                type: getTypeInfo(value[0]), // maybe good enough.
                array: true,
            };
        } else if (typeof value === 'object') {
            info[key] = { type: getTypeInfo(value) };
        } else if (typeof value === 'string') {
            info[key] = { type: 'string' };
        } else if (typeof value === 'number') {
            info[key] = { type: 'number' };
        } else if (typeof value === 'boolean') {
            info[key] = { type: 'boolean' };
        } else {
            throw new Error('what was that? ' + value);
        }
    }

    /** @type {TypeInfo} */
    const ordered = {};
    Object.keys(info).sort().forEach(function (key) {
        ordered[key] = info[key];
    });

    return ordered;
}

/**
 * Assume no object properties
 * @param {TypeInfo[]} typeInfos
 * @return {Type}
 */
function findCommonType(typeInfos) {
    /** @type {TypeInfo} */
    const commonInfo = {};
    const processed = new Set();

    for (const info of typeInfos) {
        for (const [key, typeDef] of Object.entries(info)) {
            if (processed.has(key) || typeof typeDef.type === 'object') continue;
            processed.add(key);

            if (typeInfos.every(info => key in info)) commonInfo[key] = typeDef;
        }
    }

    return {
        typeId: 'Base',
        info: commonInfo,
    };
}

/** @type {Type[]} */
const types = [];
for (const [typeId, sampleEvent] of traceEventTypes.entries()) {
    const info = getTypeInfo(sampleEvent);
    types.push({
        typeId,
        info,
    });
    console.log(typeId, JSON.stringify(info, null, 2));

    // console.log(JSON.stringify(sampleEvent));
}
types.sort((a, b) => a.typeId.localeCompare(b.typeId));

const baseType = findCommonType(types.map(t => t.info));

for (const type of types) {
    // TODO remove base props
    type.parent = baseType;
}

console.log('baseType', baseType);

/**
 * @param {Type[]} types 
 */
function print(types) {
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
     * @param {TypeDef} typeDef
     */
    function printProperty(key, typeDef) {
        if (debugPrint) console.log('printProperty', indentation, key, typeDef);
        if (typeDef.type && typeof typeDef.type === 'object') {
            // @ts-ignore - it's a TypeInfo
            return indent(`${key}: ${printObject(typeDef.type)};`);
        } else {
            return indent(`${key}: ${typeDef.type};`);
        }
    }

    /**
     * @param {TypeInfo} info 
     */
    function printObject(info) {
        if (debugPrint) console.log('printObject', indentation, info);
        return I(() => {
            return `{\n${Object.entries(info).map(([key, type]) => {
                return printProperty(key, type);
            }).join('\n')}\n}`;
        });
    }

    /**
     * @param {Type} type 
     */
    function printInterface(type) {
        return `interface ${type.typeId}${type.parent ? ' extends ' + type.parent.typeId : ''} ${printObject(type.info)}`;
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

    for (const type of types) {
        output += printInterface(type) + "\n";
    }

    return output;
}

const result = print([baseType, ...types]);
console.log(result);
