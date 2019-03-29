const fs = require('fs');

const traceLog = JSON.parse(fs.readFileSync('trace.json', 'utf-8'));

const traceEventTypes = new Map();

function getTypeId(event) {
    return event.name.replace(/\s/g, '') + '_' + event.ph;
}

for (const event of traceLog.traceEvents) {
    if (event.name !== 'EvaluateScript') continue;
    const typeId = getTypeId(event);
    if (traceEventTypes.has(typeId)) continue;

    traceEventTypes.set(typeId, event);
    // console.log(typeId, event);
}

function getTypeInfo(object) {
    const info = {};
    for (const [key, value] of Object.entries(object)) {
        if (typeof value === 'object') {
            info[key] = getTypeInfo(value);
        } else if (typeof value === 'string') {
            info[key] = 'string';
        } else if (typeof value === 'number') {
            info[key] = 'number';
        } else if (typeof value === 'boolean') {
            info[key] = 'boolean';
        } else {
            throw new Error('what was that? ' + value);
        }
    }

    const ordered = {};
    Object.keys(info).sort().forEach(function(key) {
        ordered[key] = info[key];
    });

    return ordered;
}

// assume no object properties
function findCommonType(typeInfos) {
    const commonInfo = {};
    const processed = new Set();

    for (const info of typeInfos) {
        for (const [key, value] of Object.entries(info)) {
            if (processed.has(key) || typeof value === 'object') continue;
            processed.add(key);

            if (typeInfos.every(info => key in info)) commonInfo[key] = value;
        }
    }

    return {
        typeId: 'Base',
        info: commonInfo,
    };
}

const types = [];
for (const [typeId, sampleEvent] of traceEventTypes.entries()) {
    const info = getTypeInfo(sampleEvent);
    types.push({
        typeId,
        info,
    });
    console.log(typeId, info);

    // console.log(JSON.stringify(sampleEvent));
}
types.sort((a, b) => a.typeId.localeCompare(b.typeId));

const baseType = findCommonType(types.map(t => t.info));

for (const type of types) {
    // TODO remove base props
    type.parent = 'Base';
}

console.log('baseType', baseType);

function print(types) {
    let output = '';
    let indentation = 0;

    // function normalize(code) {
    //     // const lines = code.split('\n');
    //     // const minLeadingWs = lines.reduce((acc, line) => {
    //     //     return Math.min(acc, line.search(/\S|$/));
    //     // }, Number.POSITIVE_INFINITY);
    //     // return lines.map(line => line.substring(minLeadingWs)).join('\n');
    //     const lines = code.split('\n');
    //     return lines.map(line => line.trim()).join('\n');
    // }

    // function normalizeFirstLine(code) {
    //     const lines = code.split('\n');
    //     lines[0] = lines[0].trim();
    //     return lines.join('\n');
    // }

    function indent(code) {
        return code.split('\n')
            .map(line => '  ' + line)
            .join('\n');
    }

    function printProperty(key, type) {
        console.log('printProperty', indentation, key, type);
        if (type && typeof type === 'object') {
            return indent(`${key}: ${printObject(type)};`);
        } else {
            return indent(`${key}: ${type};`);
        }
    }

    function printObject(type) {
        console.log('printObject', indentation, type);
        return I(() => {
            return `{\n${Object.entries(type).map(([key, type]) => {
                return printProperty(key, type);
            }).join('\n')}\n}`;
        });
    }

    function printInterface({typeId, info, parent}) {
        return `interface ${typeId}${parent ? ' extends ' + parent : ''} ${printObject(info)}`;
    }

    function I(fn) {
        indentation += 1;
        const result = fn();
        indentation -= 1;
        return result;
    }

    for (const type of types) {
        output += printInterface(type) + "\n";
    }

    return (output);
}

const result = print([baseType, ...types]);
console.log(result);
