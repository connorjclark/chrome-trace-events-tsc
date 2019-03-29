const assert = require('assert');

/**
 * @param {Node} rootNode
 */
function print(rootNode) {
  const debugPrint = process.env.DEBUG_PRINT === '1';
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
   */
  function printSafeKey(key) {
    if (key.match(/[^a-zA-Z0-9_]/)) {
      return `'${key}'`;
    } else {
      return key;
    }
  }

  /**
   * @param {Node} node
   */
  function printType(node) {
    assert(node.type === 'Type');
    if (debugPrint) console.log('printType', indentation, node);

    if (node.children.length === 1) {
      return printObject(node.children[0]);
    } else {
      return node.data.type;
    }
  }

  /**
   * @param {Node} node
   */
  function printProperty(node) {
    assert(node.type === 'Property');
    if (debugPrint) console.log('printProperty', indentation, node.data);

    const rhs = printType(node.children[0]);
    const { optional, array } = node.children[0].data;
    return indent(`${printSafeKey(node.data.key)}${optional ? '?' : ''}: ${rhs}${array ? '[]' : ''};`);
  }

  /**
   * @param {Node} node 
   */
  function printObject(node) {
    assert(node.type === 'Object');
    if (debugPrint) console.log('printObject', indentation, node);

    return I(() => {
      return `{\n${node.children.map(printProperty).join('\n')}\n}`;
    });
  }

  /**
   * @param {Node} node
   */
  function printInterface(node) {
    assert(node.type === 'Interface');
    return indent(`interface ${node.data.id}${node.data.parentId ? ' extends ' + node.data.parentId : ''} ${printObject(node.children[0])}`);
  }

  /**
   * @param {Node} node 
   */
  function printTypeUnion(node) {
    assert(node.type === 'TypeUnion');
    return indent(`type ${node.data.name} = \n${node.data.typeIds.map(id => '  ' + id).join(' |\n')};`);
  }

  /**
   * @param {Node} node
   */
  function printNamespace(node) {
    assert(node.type === 'Namespace');
    return I(() => `namespace ${node.data.name} {\n${node.children.map(printNode).join('\n\n')}\n}`);
  }

  /**
   * @param {Node} node
   */
  function printNode(node) {
    switch (node.type) {
      case 'Interface': return printInterface(node);
      case 'Namespace': return printNamespace(node);
      case 'Type': return printType(node);
      case 'TypeUnion': return printTypeUnion(node);
    }
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

  return printNode(rootNode);
}

module.exports = print;
