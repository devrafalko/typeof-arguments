module.exports = [
  {
    actual:null,
    expected:{name:10},
    oActual:'null',
    oExpected:'{name:10}',
    message:/Invalid module argument. The first argument must be \[arguments\] Object./
  },
  {
    actual:undefined,
    expected:undefined,
    oActual:'undefined',
    oExpected:'undefined',
    message:/Invalid module argument. The first argument must be \[arguments\] Object./
  },
  {
    actual:[1,2,3],
    expected:undefined,
    oActual:'[1,2,3]',
    oExpected:'undefined',
    message:/Invalid module argument. The first argument must be \[arguments\] Object./
  },
  {
    actual:(function(){return arguments;})(),
    expected:null,
    oActual:'(function(){return arguments;})()',
    oExpected:'null',
    message:/Invalid module argument. The second argument must be of type \[Array\]./
  },
  {
    actual:(function(){return arguments;})(),
    expected:null,
    oActual:'(function(){return arguments;})()',
    oExpected:'null',
    message:/Invalid module argument. The second argument must be of type \[Array\]./
  },
  {
    actual:(function(){return arguments;})(),
    expected:Number,
    oActual:'(function(){return arguments;})()',
    oExpected:'Number',
    message:/Invalid module argument. The second argument must be of type \[Array\]./
  },
  {
    actual:(function(){return arguments;})(),
    expected:null,
    oActual:'(function(){return arguments;})()',
    oExpected:'null',
    message:/Invalid module argument. The second argument must be of type \[Array\]./
  },
  {
    actual:(function(){return arguments;})(),
    expected:(function(){return arguments;})(),
    oActual:'(function(){return arguments;})()',
    oExpected:'(function(){return arguments;})()',
    message:/Invalid module argument. The second argument must be of type \[Array\]./
  },
  {
    actual:(function(){return arguments;})(),
    expected:[false],
    oActual:'(function(){return arguments;})()',
    oExpected:'[false]',
    message:/The expected type is not callable./
  },
  {
    actual:(function(){return arguments;})(),
    expected:[{}],
    oActual:'(function(){return arguments;})()',
    oExpected:'[{}]',
    message:/The expected type is not callable./
  },
  {
    actual:(function(){return arguments;})(),
    expected:[new Date()],
    oActual:'(function(){return arguments;})()',
    oExpected:'[new Date()]',
    message:/The expected type is not callable./
  },
  {
    actual:(function(){return arguments;})(),
    expected:[[1,2,3]],
    oActual:'(function(){return arguments;})()',
    oExpected:'[[1,2,3]]',
    message:/The expected type is not callable./
  },
  {
    actual:(function(){return arguments;})(),
    expected:[[Number,null,true]],
    oActual:'(function(){return arguments;})()',
    oExpected:'[[Number,null,true]]',
    message:/The expected type is not callable./
  },
  {
    actual:(function(){return arguments;})(),
    expected:[['string']],
    oActual:'(function(){return arguments;})()',
    oExpected:"[['string']]",
    message:/The expected type is not callable./
  },
  {
    actual:(function(){return arguments;})(),
    expected:[[/string/]],
    oActual:'(function(){return arguments;})()',
    oExpected:'[[/string/]]',
    message:/The expected type is not callable./
  },
  {
    actual:(function(){return arguments;})(),
    expected:[[/string/,'string',null,Number,Boolean]],
    oActual:'(function(){return arguments;})()',
    oExpected:"[[/string/,'string',null,Number,Boolean]]",
    message:/The expected type is not callable./
  }
];
