const assert = require('assert');

/**
 * @param {Gen.Node} rootNode
 */
function print(rootNode) {
  const debugPrint = process.env.DEBUG_PRINT === '1';
  let indentation = 0;

  /**
   * @param {string} code
   */
  function indent(code) {
    if (indentation === 0) return code;
    return code.split('\n')
      .map(line => '  ' + line)
      .join('\n');
  }

  /**
   * @param {string} key 
   */
  function printSafeKey(key) {
    if (key.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/)) {
      return key;
    } else {
      return `'${key}'`;
    }
  }

  /**
   * @param {Gen.Node} node
   */
  function printType(node) {
    assert(node.type === 'Type');
    if (debugPrint) console.log('printType', node);

    if (node.children.length === 1) {
      return printObject(node.children[0]);
    } else {
      return node.data.type;
    }
  }

  /**
   * @param {Gen.Node} node
   */
  function printProperty(node) {
    assert(node.type === 'Property');
    if (debugPrint) console.log('printProperty', node.data);

    const rhs = printType(node.children[0]);
    const { optional, array } = node.children[0].data;
    return indent(`${printSafeKey(node.data.key)}${optional ? '?' : ''}: ${rhs}${array ? '[]' : ''};`);
  }

  /**
   * @param {Gen.Node} node 
   */
  function printObject(node) {
    assert(node.type === 'Object');
    if (debugPrint) console.log('printObject', node);

    return I(() => {
      return `{\n${node.children.map(printProperty).join('\n')}\n}`;
    });
  }

  /**
   * @param {Gen.Node} node
   */
  function printInterface(node) {
    assert(node.type === 'Interface');
    return indent(`interface ${node.data.name}${node.data.parentId ? ' extends ' + node.data.parentId : ''} ${printObject(node.children[0])}`);
  }

  /**
   * @param {Gen.Node} node 
   */
  function printTypeUnion(node) {
    assert(node.type === 'TypeUnion');
    return indent(`type ${node.data.name} = \n${node.data.typeIds.map(id => '  ' + id).join(' |\n')};`);
  }

  /**
   * @param {Gen.Node} node
   */
  function printNamespace(node) {
    assert(node.type === 'Namespace');
    return indent(I(() => `namespace ${node.data.name} {\n${node.children.map(printNode).join('\n\n')}\n}`));
  }

  /**
   * @param {Gen.Node} node
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
