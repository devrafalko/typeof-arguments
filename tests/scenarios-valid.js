module.exports = [
  {
    actual: ['Paul',26,'Warsaw',['js','mongodb','nodejs']],
    expected: [String,'any',/string|null/i,[Array,null]]
  },
  {
    actual: [null,26,'Warsaw',null],
    expected: ['truthy|null',/TRUTHY/i,[String,String,String,Array,null,undefined],[Array,null]]
  },
  {
    actual: ['Warsaw',52.229676,21.012229,new Date('2017-08-22'),{day:24,night:18},.71,{kph:18,mph:11.3}],
    expected: ['string','number',Number,[Date,String],/object|number/i,'number|falsy',/truthy|null/]
  },
  {
    actual: ['Warsaw',52.229676,21.012229,new Date('2017-08-22'),{day:24,night:18},.71,{kph:18,mph:11.3}],
    expected: ['truthy']
  },
  {
    actual: ['Warsaw',52.229676,21.012229,new Date('2017-08-22'),{day:24,night:18},.71,{kph:18,mph:11.3}],
    expected: ['truthy','any',/any/,Date,/obj/i]
  },
  {
    actual:[(()=>new (class Name{}))(),(()=>new (class Age{}))(), {}],
    expected:['instance', /instance/, Object]
  },
  {
    actual:[(()=>new (class Name{}))(),(()=>new (class Age{}))(), {}],
    expected:['name', /Age/, Object]
  },
  {
    actual:[(()=>new (class Name{}))(),(()=>new (class Age{}))(), {}],
    expected:['any', /truthy/, Object]
  }
];