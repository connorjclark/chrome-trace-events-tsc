const utils = require('./src/utils');

describe('utils', () => {
  describe('combineObjects', () => {
    const testCases = [
      [
        {}, // 1+ objects
        {}, // expected combined object
        [] // expected optional paths
      ],
      [
        { a: 1 },
        { a: 1 },
        []
      ],
      // [
      //   { a: 1 },
      //   { b: 1 },
      //   { a: 1, b: 1 },
      //   ['a', 'b']
      // ],
      [
        { nested: { a: 1 } },
        { nested: { b: 1 } },
        { nested: { a: 1, b: 1 } },
        ['nested.a', 'nested.b']
      ],
      [
        { nested: { a: 1, c: 1 } },
        { nested: { b: 1, c: 1 } },
        { nested: { a: 1, b: 1, c: 1 } },
        ['nested.a', 'nested.b']
      ],
      // [
      //   { nested: { a: 1, c: 1 } },
      //   { nested: { b: 1, c: 1 } },
      //   {},
      //   { nested: { a: 1, b: 1, c: 1 } },
      //   ['nested', 'nested.a', 'nested.b', 'nested.c']
      // ],
      [
        { nested: { nested2: { a: 1 } } },
        { nested: { nested2: { b: 1 } } },
        { nested: { nested2: { a: 1, b: 1 } } },
        ['nested.nested2.a', 'nested.nested2.b']
      ],
      // [
      //   { nested: { nested2: { a: 1 } } },
      //   { nested: { nested2: { b: 1 } } },
      //   { },
      //   { nested: { nested2: { a: 1, b: 1 } } },
      //   ['nested', 'nested.nested2', 'nested.nested2.a', 'nested.nested2.b']
      // ],
      // [
      //   { nested: { nested2: { a: 1 } } },
      //   { nested: { nested2: { b: 1 } } },
      //   { nested: { } },
      //   { nested: { nested2: { a: 1, b: 1 } } },
      //   ['nested.nested2.a', 'nested.nested2.b']
      // ],
      [
        { nested: { nested2: { array: [{a: 1}] } } },
        { nested: { nested2: { array: [{a: 1, b:1}] } } },
        { nested: { nested2: { array: [{a: 1, b:1}] } } },
        ['nested.nested2.array.b']
      ],
    ];

    for (let i = 0; i < testCases.length; i++) {
      test(`test case ${i + 1}`, () => {
        const testCase = testCases[i];
        const objects = testCase.slice(0, testCase.length - 2);
        const expectedCombined = testCase[testCase.length - 2];
        /** @type {string[]} */
        // @ts-ignore
        const expectedOptionalPaths = testCase[testCase.length - 1];

        const actual = utils.combineObjects(objects);
        expect(actual).toEqual({
          combined: expectedCombined,
          optionalPathComponents: expectedOptionalPaths.map(p => p.split('.')),
        });
      });
    }
  });
});
