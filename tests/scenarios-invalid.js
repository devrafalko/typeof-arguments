module.exports = [
  {
    actual:[null],
    expected:[String],
    oActual:'null',
    oExpected:'String',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [null] argument has been passed, while the argument of type [String] is expected.'
  },
  {
    actual:[20,'Paul'],
    expected:[Number,null],
    oActual:'String',
    oExpected:'null',
    oIndex:1,
    oMessage:'Invalid argument [1]. The [String] argument has been passed, while the argument of type [null] is expected.'
  },
  {
    actual:[],
    expected:[String],
    oActual:'undefined',
    oExpected:'String',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [undefined] argument has been passed, while the argument of type [String] is expected.'
  },
  {
    actual:[null],
    expected:['string'],
    oActual:'null',
    oExpected:'string',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [null] argument has been passed, while the argument of type matching string expression "string" is expected.'
  },
  {
    actual:[null],
    expected:['STRING'],
    oActual:'null',
    oExpected:'STRING',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [null] argument has been passed, while the argument of type matching string expression "STRING" is expected.'
  },
  {
    actual:[null],
    expected:['number|string|undefined'],
    oActual:'null',
    oExpected:'number|string|undefined',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [null] argument has been passed, while the argument of type matching string expression "number|string|undefined" is expected.'
  },
  {
    actual:[null],
    expected:['truthy|undefined'],
    oActual:'null',
    oExpected:'truthy|undefined',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [null] <<falsy>> argument has been passed, while the argument of type matching string expression "truthy|undefined" is expected.'
  },
  {
    actual:[10,10,'Paul'],
    expected:['any','ANY','falsy|number'],
    oActual:'String',
    oExpected:'falsy|number',
    oIndex:2,
    oMessage:'Invalid argument [2]. The [String] <<truthy>> argument has been passed, while the argument of type matching string expression "falsy|number" is expected.'
  },
  {
    actual:[null,false],
    expected:[/string/i,String],
    oActual:'null',
    oExpected:'/string/i',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [null] argument has been passed, while the argument of type matching regular expression /string/i is expected.'
  },
  {
    actual:[null],
    expected:[/truthy/],
    oActual:'null',
    oExpected:'/truthy/',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [null] <<falsy>> argument has been passed, while the argument of type matching regular expression /truthy/ is expected.'
  },
  {
    actual:[null],
    expected:[/truthy|undefined|String/],
    oActual:'null',
    oExpected:'/truthy|undefined|String/',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [null] <<falsy>> argument has been passed, while the argument of type matching regular expression /truthy|undefined|String/ is expected.'
  },
  {
    actual:['Paul'],
    expected:[/falsy/],
    oActual:'String',
    oExpected:'/falsy/',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [String] <<truthy>> argument has been passed, while the argument of type matching regular expression /falsy/ is expected.'
  },
  {
    actual:[new Date()],
    expected:[/falsy|Array/],
    oActual:'Date',
    oExpected:'/falsy|Array/',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [Date] <<truthy>> argument has been passed, while the argument of type matching regular expression /falsy|Array/ is expected.'
  },
  {
    actual:['Warsaw',22,false],
    expected:[String,/num/i,/TrUtHy/],
    oActual:'Boolean',
    oExpected:'/TrUtHy/',
    oIndex:2,
    oMessage:'Invalid argument [2]. The [Boolean] argument has been passed, while the argument of type matching regular expression /TrUtHy/ is expected.'
  },
  {
    actual:['Paul'],
    expected:[/FaLsY/],
    oActual:'String',
    oExpected:'/FaLsY/',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [String] argument has been passed, while the argument of type matching regular expression /FaLsY/ is expected.'
  },
  {
    actual:['Paul'],
    expected:[/FaLsY/i],
    oActual:'String',
    oExpected:'/FaLsY/i',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [String] <<truthy>> argument has been passed, while the argument of type matching regular expression /FaLsY/i is expected.'
  },
  {
    actual:['Warsaw',null],
    expected:[[Array,Array,Array,null,undefined,String],[String,Array,undefined,Boolean]],
    oActual:'null',
    oExpected:'String|Array|undefined|Boolean',
    oIndex:1,
    oMessage:'Invalid argument [1]. The [null] argument has been passed, while the argument of type [String|Array|undefined|Boolean] is expected.'
  },
  {
    actual:[new Date()],
    expected:[[Array,undefined,undefined,Array]],
    oActual:'Date',
    oExpected:'Array|undefined',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [Date] argument has been passed, while the argument of type [Array|undefined] is expected.'
  },
  {
    actual:[Infinity],
    expected:[[Array,undefined,undefined,Array]],
    oActual:'Number',
    oExpected:'Array|undefined',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [Number] argument has been passed, while the argument of type [Array|undefined] is expected.'
  },
  {
    actual:['Paul'],
    expected:[null],
    oActual:'String',
    oExpected:'null',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [String] argument has been passed, while the argument of type [null] is expected.'
  },
  {
    actual:['Paul',22],
    expected:[[String],'number',/string/i],
    oActual:'undefined',
    oExpected:'/string/i',
    oIndex:2,
    oMessage:'Invalid argument [2]. The [undefined] argument has been passed, while the argument of type matching regular expression /string/i is expected.'
  },
  {
    actual:[(()=>new (class Name{}))()],
    expected:[/name/],
    oActual:'Name',
    oExpected:'/name/',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [Name] argument has been passed, while the argument of type matching regular expression /name/ is expected.'
  },
  {
    actual:[(()=>new (class Name{}))()],
    expected:[Object],
    oActual:'Name',
    oExpected:'Object',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [Name] argument has been passed, while the argument of type [Object] is expected.'
  },
  {
    actual:[(()=>new (class Name{}))()],
    expected:['Age'],
    oActual:'Name',
    oExpected:'Age',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [Name] argument has been passed, while the argument of type matching string expression "Age" is expected.'
  },
  {
    actual:[{}],
    expected:['Name'],
    oActual:'Object',
    oExpected:'Name',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [Object] argument has been passed, while the argument of type matching string expression "Name" is expected.'
  },
  {
    actual:[{}],
    expected:['instance'],
    oActual:'Object',
    oExpected:'instance',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [Object] argument has been passed, while the argument of type matching string expression "instance" is expected.'
  },
  {
    actual:[{}],
    expected:[/instance/],
    oActual:'Object',
    oExpected:'/instance/',
    oIndex:0,
    oMessage:'Invalid argument [0]. The [Object] argument has been passed, while the argument of type matching regular expression /instance/ is expected.'
  }
];