export default [
  {
    actual: [null],
    expected: [String],
    oActual: 'null',
    oExpected: 'String',
    oIndex: 0,
    oTextActual: '[null] argument',
    oTextExpected: 'argument of type [String]',
    oMessage: 'Invalid argument [0]. The [null] argument has been passed, while the argument of type [String] is expected.'
  },
  {
    actual: [20, 'Paul'],
    expected: [Number, null],
    oActual: 'String',
    oExpected: 'null',
    oIndex: 1,
    oTextActual: '[String] argument',
    oTextExpected: 'argument of type [null]',
    oMessage: 'Invalid argument [1]. The [String] argument has been passed, while the argument of type [null] is expected.'
  },
  {
    actual: [],
    expected: [String],
    oActual: 'undefined',
    oExpected: 'String',
    oIndex: 0,
    oTextActual: '[undefined] argument',
    oTextExpected: 'argument of type [String]',
    oMessage: 'Invalid argument [0]. The [undefined] argument has been passed, while the argument of type [String] is expected.'
  },
  {
    actual: [null],
    expected: ['string'],
    oActual: 'null',
    oExpected: 'string',
    oIndex: 0,
    oTextActual: '[null] argument',
    oTextExpected: 'argument of type matching string expression "string"',
    oMessage: 'Invalid argument [0]. The [null] argument has been passed, while the argument of type matching string expression "string" is expected.'
  },
  {
    actual: [null],
    expected: ['STRING'],
    oActual: 'null',
    oExpected: 'STRING',
    oIndex: 0,
    oTextActual: '[null] argument',
    oTextExpected: 'argument of type matching string expression "STRING"',
    oMessage: 'Invalid argument [0]. The [null] argument has been passed, while the argument of type matching string expression "STRING" is expected.'
  },
  {
    actual: [null],
    expected: ['number|string|undefined'],
    oActual: 'null',
    oExpected: 'number|string|undefined',
    oIndex: 0,
    oTextActual: '[null] argument',
    oTextExpected: 'argument of type matching string expression "number|string|undefined"',
    oMessage: 'Invalid argument [0]. The [null] argument has been passed, while the argument of type matching string expression "number|string|undefined" is expected.'
  },
  {
    actual: [null],
    expected: ['truthy|undefined'],
    oActual: 'null',
    oExpected: 'truthy|undefined',
    oIndex: 0,
    oTextActual: '[null] <<falsy>> argument',
    oTextExpected: 'argument of type matching string expression "truthy|undefined"',
    oMessage: 'Invalid argument [0]. The [null] <<falsy>> argument has been passed, while the argument of type matching string expression "truthy|undefined" is expected.'
  },
  {
    actual: [10, 10, 'Paul'],
    expected: ['any', 'ANY', 'falsy|number'],
    oActual: 'String',
    oExpected: 'falsy|number',
    oIndex: 2,
    oTextActual: '[String] <<truthy>> argument',
    oTextExpected: 'argument of type matching string expression "falsy|number"',
    oMessage: 'Invalid argument [2]. The [String] <<truthy>> argument has been passed, while the argument of type matching string expression "falsy|number" is expected.'
  },
  {
    actual: [null, false],
    expected: [/string/i, String],
    oActual: 'null',
    oExpected: '/string/i',
    oIndex: 0,
    oTextActual: '[null] argument',
    oTextExpected: 'argument of type matching regular expression /string/i',
    oMessage: 'Invalid argument [0]. The [null] argument has been passed, while the argument of type matching regular expression /string/i is expected.'
  },
  {
    actual: [null],
    expected: [/truthy/],
    oActual: 'null',
    oExpected: '/truthy/',
    oIndex: 0,
    oTextActual: '[null] <<falsy>> argument',
    oTextExpected: 'argument of type matching regular expression /truthy/',
    oMessage: 'Invalid argument [0]. The [null] <<falsy>> argument has been passed, while the argument of type matching regular expression /truthy/ is expected.'
  },
  {
    actual: [null],
    expected: [/truthy|undefined|String/],
    oActual: 'null',
    oExpected: '/truthy|undefined|String/',
    oIndex: 0,
    oTextActual: '[null] <<falsy>> argument',
    oTextExpected: 'argument of type matching regular expression /truthy|undefined|String/',
    oMessage: 'Invalid argument [0]. The [null] <<falsy>> argument has been passed, while the argument of type matching regular expression /truthy|undefined|String/ is expected.'
  },
  {
    actual: ['Paul'],
    expected: [/falsy/],
    oActual: 'String',
    oExpected: '/falsy/',
    oIndex: 0,
    oTextActual: '[String] <<truthy>> argument',
    oTextExpected: 'argument of type matching regular expression /falsy/',
    oMessage: 'Invalid argument [0]. The [String] <<truthy>> argument has been passed, while the argument of type matching regular expression /falsy/ is expected.'
  },
  {
    actual: [new Date()],
    expected: [/falsy|Array/],
    oActual: 'Date',
    oExpected: '/falsy|Array/',
    oIndex: 0,
    oTextActual: '[Date] <<truthy>> argument',
    oTextExpected: 'argument of type matching regular expression /falsy|Array/',
    oMessage: 'Invalid argument [0]. The [Date] <<truthy>> argument has been passed, while the argument of type matching regular expression /falsy|Array/ is expected.'
  },
  {
    actual: ['Warsaw', 22, false],
    expected: [String, /num/i, /TrUtHy/],
    oActual: 'Boolean',
    oExpected: '/TrUtHy/',
    oIndex: 2,
    oTextActual: '[Boolean] argument',
    oTextExpected: 'argument of type matching regular expression /TrUtHy/',
    oMessage: 'Invalid argument [2]. The [Boolean] argument has been passed, while the argument of type matching regular expression /TrUtHy/ is expected.'
  },
  {
    actual: ['Paul'],
    expected: [/FaLsY/],
    oActual: 'String',
    oExpected: '/FaLsY/',
    oIndex: 0,
    oTextActual: '[String] argument',
    oTextExpected: 'argument of type matching regular expression /FaLsY/',
    oMessage: 'Invalid argument [0]. The [String] argument has been passed, while the argument of type matching regular expression /FaLsY/ is expected.'
  },
  {
    actual: ['Paul'],
    expected: [/FaLsY/i],
    oActual: 'String',
    oExpected: '/FaLsY/i',
    oIndex: 0,
    oTextActual: '[String] <<truthy>> argument',
    oTextExpected: 'argument of type matching regular expression /FaLsY/i',
    oMessage: 'Invalid argument [0]. The [String] <<truthy>> argument has been passed, while the argument of type matching regular expression /FaLsY/i is expected.'
  },
  {
    actual: ['Warsaw', null],
    expected: [[Array, Array, Array, null, undefined, String], [String, Array, undefined, Boolean]],
    oActual: 'null',
    oExpected: 'String|Array|undefined|Boolean',
    oIndex: 1,
    oTextActual: '[null] argument',
    oTextExpected: 'argument of type [String|Array|undefined|Boolean]',
    oMessage: 'Invalid argument [1]. The [null] argument has been passed, while the argument of type [String|Array|undefined|Boolean] is expected.'
  },
  {
    actual: [new Date()],
    expected: [[Array, undefined, undefined, Array]],
    oActual: 'Date',
    oExpected: 'Array|undefined',
    oIndex: 0,
    oTextActual: '[Date] argument',
    oTextExpected: 'argument of type [Array|undefined]',
    oMessage: 'Invalid argument [0]. The [Date] argument has been passed, while the argument of type [Array|undefined] is expected.'
  },
  {
    actual: [Infinity],
    expected: [[Array, undefined, undefined, Array]],
    oActual: 'Number',
    oExpected: 'Array|undefined',
    oIndex: 0,
    oTextActual: '[Number] argument',
    oTextExpected: 'argument of type [Array|undefined]',
    oMessage: 'Invalid argument [0]. The [Number] argument has been passed, while the argument of type [Array|undefined] is expected.'
  },
  {
    actual: ['Paul'],
    expected: [null],
    oActual: 'String',
    oExpected: 'null',
    oIndex: 0,
    oTextActual: '[String] argument',
    oTextExpected: 'argument of type [null]',
    oMessage: 'Invalid argument [0]. The [String] argument has been passed, while the argument of type [null] is expected.'
  },
  {
    actual: ['Paul', 22],
    expected: [[String], 'number', /string/i],
    oActual: 'undefined',
    oExpected: '/string/i',
    oIndex: 2,
    oTextActual: '[undefined] argument',
    oTextExpected: 'argument of type matching regular expression /string/i',
    oMessage: 'Invalid argument [2]. The [undefined] argument has been passed, while the argument of type matching regular expression /string/i is expected.'
  },
  {
    actual: [(() => new (class Name { }))()],
    expected: [/name/],
    oActual: 'Name',
    oExpected: '/name/',
    oIndex: 0,
    oTextActual: '[Name] argument',
    oTextExpected: 'argument of type matching regular expression /name/',
    oMessage: 'Invalid argument [0]. The [Name] argument has been passed, while the argument of type matching regular expression /name/ is expected.'
  },
  {
    actual: [(() => new (class Name { }))()],
    expected: [Object],
    oActual: 'Name',
    oExpected: 'Object',
    oIndex: 0,
    oTextActual: '[Name] argument',
    oTextExpected: 'argument of type [Object]',
    oMessage: 'Invalid argument [0]. The [Name] argument has been passed, while the argument of type [Object] is expected.'
  },
  {
    actual: [(() => new (class Name { }))()],
    expected: ['Age'],
    oActual: 'Name',
    oExpected: 'Age',
    oIndex: 0,
    oTextActual: '[Name] argument',
    oTextExpected: 'argument of type matching string expression "Age"',
    oMessage: 'Invalid argument [0]. The [Name] argument has been passed, while the argument of type matching string expression "Age" is expected.'
  },
  {
    actual: [{}],
    expected: ['Name'],
    oActual: 'Object',
    oExpected: 'Name',
    oIndex: 0,
    oTextActual: '[Object] argument',
    oTextExpected: 'argument of type matching string expression "Name"',
    oMessage: 'Invalid argument [0]. The [Object] argument has been passed, while the argument of type matching string expression "Name" is expected.'
  },
  {
    actual: [{}],
    expected: ['instance'],
    oActual: 'Object',
    oExpected: 'instance',
    oIndex: 0,
    oTextActual: '[Object] argument',
    oTextExpected: 'argument of type matching string expression "instance"',
    oMessage: 'Invalid argument [0]. The [Object] argument has been passed, while the argument of type matching string expression "instance" is expected.'
  },
  {
    actual: [{}],
    expected: [/instance/],
    oActual: 'Object',
    oExpected: '/instance/',
    oIndex: 0,
    oTextActual: '[Object] argument',
    oTextExpected: 'argument of type matching regular expression /instance/',
    oMessage: 'Invalid argument [0]. The [Object] argument has been passed, while the argument of type matching regular expression /instance/ is expected.'
  },
  {
    actual: [(function () { return arguments; })()],
    expected: [/instance/],
    oActual: 'arguments',
    oExpected: '/instance/',
    oIndex: 0,
    oTextActual: '[arguments] argument',
    oTextExpected: 'argument of type matching regular expression /instance/',
    oMessage: 'Invalid argument [0]. The [arguments] argument has been passed, while the argument of type matching regular expression /instance/ is expected.'
  },
  {
    actual: [[1, 2, 3]],
    expected: [/arguments/],
    oActual: 'Array',
    oExpected: '/arguments/',
    oIndex: 0,
    oTextActual: '[Array] argument',
    oTextExpected: 'argument of type matching regular expression /arguments/',
    oMessage: 'Invalid argument [0]. The [Array] argument has been passed, while the argument of type matching regular expression /arguments/ is expected.'
  },
  {
    actual: [function () { }],
    expected: ['arguments|instance'],
    oActual: 'Function',
    oExpected: 'arguments|instance',
    oIndex: 0,
    oTextActual: '[Function] argument',
    oTextExpected: 'argument of type matching string expression "arguments|instance"',
    oMessage: 'Invalid argument [0]. The [Function] argument has been passed, while the argument of type matching string expression "arguments|instance" is expected.'
  },
  {
    actual: [10, new String('hello world'), true],
    expected: [Number, 'falsy|objectable', 'falsy|objectable'],
    oActual: 'Boolean',
    oExpected: 'falsy|objectable',
    oIndex: 2,
    oTextActual: '[Boolean] <<truthy>> <<non-objectable>> argument',
    oTextExpected: 'argument of type matching string expression "falsy|objectable"',
    oMessage: 'Invalid argument [2]. The [Boolean] <<truthy>> <<non-objectable>> argument has been passed, while the argument of type matching string expression "falsy|objectable" is expected.'
  },
  {
    actual: [null, new String('hello world'), ''],
    expected: [[Number, null], 'falsy|objectable', 'truthy|objectable'],
    oActual: 'String',
    oExpected: 'truthy|objectable',
    oIndex: 2,
    oTextActual: '[String] <<falsy>> <<non-objectable>> argument',
    oTextExpected: 'argument of type matching string expression "truthy|objectable"',
    oMessage: 'Invalid argument [2]. The [String] <<falsy>> <<non-objectable>> argument has been passed, while the argument of type matching string expression "truthy|objectable" is expected.'
  },
  {
    actual: [[1, 2, 3], undefined],
    expected: [/arr/i, /truthy|objectable/],
    oActual: 'undefined',
    oExpected: '/truthy|objectable/',
    oIndex: 1,
    oTextActual: '[undefined] <<falsy>> <<non-objectable>> argument',
    oTextExpected: 'argument of type matching regular expression /truthy|objectable/',
    oMessage: 'Invalid argument [1]. The [undefined] <<falsy>> <<non-objectable>> argument has been passed, while the argument of type matching regular expression /truthy|objectable/ is expected.'
  },
  {
    actual: [{}, 492],
    expected: [/objectable/, /falsy|objectable/],
    oActual: 'Number',
    oExpected: '/falsy|objectable/',
    oIndex: 1,
    oTextActual: '[Number] <<truthy>> <<non-objectable>> argument',
    oTextExpected: 'argument of type matching regular expression /falsy|objectable/',
    oMessage: 'Invalid argument [1]. The [Number] <<truthy>> <<non-objectable>> argument has been passed, while the argument of type matching regular expression /falsy|objectable/ is expected.'
  },
  {
    actual: ['hello world', 0, new Number(0), null],
    expected: ['truthy|objectable', 'falsy|objectable', 'truthy|objectable', /objectable/],
    oActual: 'null',
    oExpected: '/objectable/',
    oIndex: 3,
    oTextActual: '[null] <<non-objectable>> argument',
    oTextExpected: 'argument of type matching regular expression /objectable/',
    oMessage: 'Invalid argument [3]. The [null] <<non-objectable>> argument has been passed, while the argument of type matching regular expression /objectable/ is expected.'
  },
];