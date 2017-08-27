/* global Function */
const ofType = require('of-type');
const cliColor = require('cli-color');
const error = cliColor.red;
const warn = cliColor.blue.bgYellow;

module.exports = function(getArgumentsObject,getExpectedArray,callbackFunction){
  const clb = ofType(callbackFunction,'function');
  validateArguments(getArgumentsObject,getExpectedArray);
  for(let item in getExpectedArray){
    if(!ofType(getArgumentsObject[item],getExpectedArray[item])){
      var actual = getActualType(getArgumentsObject[item]);
      var types = getExpectedTypes(getExpectedArray[item]);
      var message = `Invalid argument [${item}]. The [${actual}] ${types.truthness}argument has been passed, while the ${types.message} is expected.`;
      if(clb){
        callbackFunction({actual:actual,expected:types.expected,message:message,index:Number(item)});
        return false;
      } else {
        var err = new TypeError(message);
        throw err;
      }
    }
  }
  return true;
};

function validateArguments(a,o){
  const errActual = warn('typeof-arguments')+': '+error('Invalid module argument. The first argument must be [arguments] Object.');
  const errExpected = warn('typeof-arguments')+': '+error('Invalid module argument. The second argument must be of type [Array].');
  const isActualArguments = ofType(a,'arguments');
  const isExpectedArray = ofType(o,Array);
  if(!isActualArguments){
    var err = new TypeError(errActual);
    throw err;
  }
  if(!isExpectedArray){
    var err = new TypeError(errExpected);
    throw err;
  }
}

function getActualType(actualValue){
  if(ofType(actualValue,null)) return "null";
  if(ofType(actualValue,undefined)) return "undefined";
  if(ofType(actualValue,'arguments')) return "arguments";
  return actualValue.constructor.name;
}

function getExpectedTypes(expectedType){
  var types = [whenString,whenRegExp,whenObject,whenArray];
  for(var i in types){
    var check = types[i](expectedType);
    if(check) return check;
  }
  const err = warn('typeof-arguments')+': '+error(`The expected type is not callable.`);
  throw new TypeError(err);
}

function whenString(stringType){
  if(!ofType(stringType,String)) return null;
  var msg = `argument of type matching string expression "${stringType}"`;
  var truthness = '';
  stringType.split('|').forEach((i)=>{
    if(i.toLowerCase()==='truthy') truthness = '<<falsy>> ';
    if(i.toLowerCase()==='falsy') truthness = '<<truthy>> ';
  });
  return {message:msg,truthness:truthness,expected:stringType};
}

function whenRegExp(regType){
  if(!ofType(regType,RegExp)) return null;
  var msg = `argument of type matching regular expression ${regType}`;
  return {message:msg,truthness:truthness(regType),expected:regType.toString()};

  function truthness(regType){
    var isCaseInsensitive = regType.flags.match(/i/);
    var str = regType.toString();
    str = isCaseInsensitive ? str.toLowerCase():str;
    if(str.match(/truthy/)) return '<<falsy>> ';
    if(str.match(/falsy/)) return '<<truthy>> ';
    return '';
  };
}

function whenObject(objectType){
  if(ofType(objectType,null)) return {message:`argument of type [null]`,truthness:'',expected:'null'};
  if(ofType(objectType,undefined)) return {message:`argument of type [undefined]`,truthness:'',expected:'undefined'};
  if(ofType(objectType,Function)) return {message:`argument of type [${objectType.name}]`,truthness:'',expected:objectType.name};
  return null;
}

function whenArray(arrayTypes){
  if(!ofType(arrayTypes,Array)) return null;
  var types = {};
  for(var i in arrayTypes){
    var exp = whenObject(arrayTypes[i]);
    if(ofType(exp,null)) return null;
    types[exp.expected] = exp.expected;
  }
  var expected = Object.getOwnPropertyNames(types).join('|');
  return {message:`argument of type [${expected}]`,truthness:'',expected:expected};
}