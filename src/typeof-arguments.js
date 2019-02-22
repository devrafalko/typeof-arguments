import type from 'of-type';

class TypeofArguments {
  constructor(getArgumentsObject, getExpectedArray, callbackFunction) {
    if (!type(getArgumentsObject, 'arguments')) throw new TypeError('typeof-arguments: The [0] argument must be the [arguments] Object.');
    if (!type(getExpectedArray, Array)) throw new TypeError('typeof-arguments: The [1] argument must be of type [Array].');
    for (let index = 0; index < getExpectedArray.length; index++) {
      if (!type(getArgumentsObject[index], getExpectedArray[index])) {
        let actual = this.getActualType(getArgumentsObject[index]);
        let types = this.getExpectedTypes(getExpectedArray[index]);
        let textActual = `[${actual}] ${types.addons}argument`;
        let textExpected = types.message;
        let message = `Invalid argument [${index}]. The ${textActual} has been passed, while the ${textExpected} is expected.`;
        if (type(callbackFunction, 'function')) {
          callbackFunction({ index, actual, expected: types.expected, message, textActual, textExpected });
          return () => false;
        } else {
          throw new TypeError(message);
        }
      }
    }
    return () => true;
  }

  getActualType(actualValue) {
    if (type(actualValue, null)) return 'null';
    if (type(actualValue, undefined)) return 'undefined';
    if (type(actualValue, 'arguments')) return 'arguments';
    return actualValue.constructor.name;
  }

  getExpectedTypes(expectedType) {
    const types = ['whenString', 'whenRegExp', 'whenObject', 'whenArray'];
    for (let _type of types) {
      let check = this[_type](expectedType);
      if (check) return check;
    }
    throw new TypeError('typeof-arguments: The expected type is not callable.');
  }

  whenString(stringType) {
    if (!type(stringType, String)) return null;
    const msg = `argument of type matching string expression "${stringType}"`;
    let truthness = '', objectable = '';
    stringType.split('|').forEach((i) => {
      if (i.toLowerCase() === 'truthy') truthness = '<<falsy>> ';
      if (i.toLowerCase() === 'falsy') truthness = '<<truthy>> ';
      if (i.toLowerCase() === 'objectable') objectable = '<<non-objectable>> ';
    });
    return { message: msg, addons: truthness + objectable, expected: stringType };
  }

  whenRegExp(regType) {
    if (!type(regType, RegExp)) return null;
    const msg = `argument of type matching regular expression ${regType}`;
    return { message: msg, addons: addons(regType), expected: regType.toString() };

    function addons(regType) {
      const isCaseInsensitive = regType.flags.match(/i/);
      let str = regType.toString();
      str = isCaseInsensitive ? str.toLowerCase() : str;
      let truthness = '', objectable = '';
      if (str.match(/truthy/)) truthness = '<<falsy>> ';
      if (str.match(/falsy/)) truthness = '<<truthy>> ';
      if (str.match(/objectable/)) objectable = '<<non-objectable>> ';
      return truthness + objectable;
    }
  }

  whenObject(objectType) {
    if (type(objectType, null)) return { message: 'argument of type [null]', addons: '', expected: 'null' };
    if (type(objectType, undefined)) return { message: 'argument of type [undefined]', addons: '', expected: 'undefined' };
    if (type(objectType, Function)) return { message: `argument of type [${objectType.name}]`, addons: '', expected: objectType.name };
    return null;
  }

  whenArray(arrayTypes) {
    if (!type(arrayTypes, Array)) return null;
    const types = {};
    for (let _type of arrayTypes) {
      let exp = this.whenObject(_type);
      if (type(exp, null)) return null;
      types[exp.expected] = exp.expected;
    }
    const expected = Object.getOwnPropertyNames(types).join('|');
    return { message: `argument of type [${expected}]`, addons: '', expected };
  }
}

export default function typeofArguments() {
  return new TypeofArguments(...arguments)();
}