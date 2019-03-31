const utils = require('./src/utils');

describe('utils', () => {
  describe('combineObjects', () => {
    const testCases = [
      [
        {}, // 1+ objects
        {}, // expected combined object
        [], // expected optional paths
      ],
      [
        { a: 1 },
        { a: 1 },
        [],
      ],
      [
        { a: 1 },
        { b: 1 },
        { a: 1, b: 1 },
        ['a', 'b'].map(p => p.split('.')),
      ],
      [
        { nested: { a: 1 } },
        { nested: { b: 1 } },
        { nested: { a: 1, b: 1 } },
        ['nested.a', 'nested.b'].map(p => p.split('.'))
      ],
      [
        { nested: { a: 1, c: 1 } },
        { nested: { b: 1, c: 1 } },
        { nested: { a: 1, b: 1, c: 1 } },
        ['nested.a', 'nested.b'].map(p => p.split('.')),
      ],
      [
        { nested: { a: 1, c: 1 } },
        { nested: { b: 1, c: 1 } },
        {},
        { nested: { a: 1, b: 1, c: 1 } },
        ['nested', 'nested.a', 'nested.b'].map(p => p.split('.')),
      ],
      [
        { nested: { nested2: { a: 1 } } },
        { nested: { nested2: { b: 1 } } },
        { nested: { nested2: { a: 1, b: 1 } } },
        ['nested.nested2.a', 'nested.nested2.b'].map(p => p.split('.')),
      ],
      [
        { nested: { nested2: { a: 1 } } },
        { nested: { nested2: { b: 1 } } },
        {},
        { nested: { nested2: { a: 1, b: 1 } } },
        ['nested', 'nested.nested2.a', 'nested.nested2.b'].map(p => p.split('.')),
      ],
      [
        { nested: { nested2: { a: 1 } } },
        { nested: { nested2: { b: 1 } } },
        { nested: {} },
        { nested: { nested2: { a: 1, b: 1 } } },
        ['nested.nested2', 'nested.nested2.a', 'nested.nested2.b'].map(p => p.split('.')),
      ],
      [
        { nested: { nested2: { array: [{ a: 1 }] } } },
        { nested: { nested2: { array: [{ a: 1, b: 1 }] } } },
        { nested: { nested2: { array: [{ a: 1, b: 1 }] } } },
        ['nested.nested2.array.b'].map(p => p.split('.')),
      ],
      [
        { array: [1] },
        { array: [1, 2] },
        { array: [1] },
        [],
      ],
      [
        { array: [] },
        { array: [1] },
        { array: [1] },
        [],
      ],
      [
        { array: [1] },
        {},
        { array: [1] },
        ['array'].map(p => p.split('.')),
      ],
      [
        { nested: { 'prop.with.dot': 1 } },
        { nested: { 'prop.with.dot.2': 1 } },
        { nested: { 'prop.with.dot': 1, 'prop.with.dot.2': 1 } },
        [['nested', 'prop.with.dot'], ['nested', 'prop.with.dot.2']],
      ],
    ];

    for (let i = 0; i < testCases.length; i++) {
      test(`test case ${i + 1}`, () => {
        const testCase = testCases[i];
        const objects = testCase.slice(0, testCase.length - 2);
        const expectedCombined = testCase[testCase.length - 2];
        /** @type {string[][]} */
        // @ts-ignore
        const expectedOptionalPathComponents = testCase[testCase.length - 1];

        const actual = utils.combineObjects(objects);

        // don't care about order
        expectedOptionalPathComponents.sort((a, b) => a.join('.').localeCompare(b.join('.')));
        actual.optionalPathComponents.sort((a, b) => a.join('.').localeCompare(b.join('.')));

        expect(actual).toEqual({
          combined: expectedCombined,
          optionalPathComponents: expectedOptionalPathComponents,
        });
      });
    }
  });
});
