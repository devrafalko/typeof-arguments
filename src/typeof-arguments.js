import ofType from 'of-type';

class TypeofArguments {
  constructor(getArgumentsObject, getExpectedArray, callbackFunction) {
    this.validateArguments(getArgumentsObject, getExpectedArray);
    for (let i = 0; i < getExpectedArray.length; i++) {
      if (!ofType(getArgumentsObject[i], getExpectedArray[i])) {
        let actual = this.getActualType(getArgumentsObject[i]);
        let types = this.getExpectedTypes(getExpectedArray[i]);
        let message = `Invalid argument [${i}]. The [${actual}] ${types.truthness}argument has been passed, while the ${types.message} is expected.`;
        if (ofType(callbackFunction, 'function')) {
          callbackFunction({ actual: actual, expected: types.expected, message: message, index: Number(i) });
          return () => false;
        } else {
          throw new TypeError(message);
        }
      }
    }
    return () => true;
  }

  validateArguments(actual, expected) {
    if (!ofType(actual, 'arguments')) throw new TypeError('typeof-arguments: Invalid module argument. The first argument must be [arguments] Object.');
    if (!ofType(expected, Array)) throw new TypeError('typeof-arguments: Invalid module argument. The second argument must be of type [Array].');
  }

  getActualType(actualValue) {
    if (ofType(actualValue, null)) return 'null';
    if (ofType(actualValue, undefined)) return 'undefined';
    if (ofType(actualValue, 'arguments')) return 'arguments';
    return actualValue.constructor.name;
  }

  getExpectedTypes(expectedType) {
    const types = ['whenString', 'whenRegExp', 'whenObject', 'whenArray'];
    for (let type of types) {
      let check = this[type](expectedType);
      if (check) return check;
    }
    throw new TypeError('typeof-arguments: The expected type is not callable.');
  }

  whenString(stringType) {
    if (!ofType(stringType, String)) return null;
    const msg = `argument of type matching string expression "${stringType}"`;
    let truthness = '';
    stringType.split('|').forEach((i) => {
      if (i.toLowerCase() === 'truthy') truthness = '<<falsy>> ';
      if (i.toLowerCase() === 'falsy') truthness = '<<truthy>> ';
    });
    return { message: msg, truthness: truthness, expected: stringType };
  }

  whenRegExp(regType) {
    if (!ofType(regType, RegExp)) return null;
    const msg = `argument of type matching regular expression ${regType}`;
    return { message: msg, truthness: truthness(regType), expected: regType.toString() };

    function truthness(regType) {
      const isCaseInsensitive = regType.flags.match(/i/);
      let str = regType.toString();
      str = isCaseInsensitive ? str.toLowerCase() : str;
      if (str.match(/truthy/)) return '<<falsy>> ';
      if (str.match(/falsy/)) return '<<truthy>> ';
      return '';
    }
  }

  whenObject(objectType) {
    if (ofType(objectType, null)) return { message: 'argument of type [null]', truthness: '', expected: 'null' };
    if (ofType(objectType, undefined)) return { message: 'argument of type [undefined]', truthness: '', expected: 'undefined' };
    if (ofType(objectType, Function)) return { message: `argument of type [${objectType.name}]`, truthness: '', expected: objectType.name };
    return null;
  }

  whenArray(arrayTypes) {
    if (!ofType(arrayTypes, Array)) return null;
    const types = {};
    for (let type of arrayTypes) {
      let exp = this.whenObject(type);
      if (ofType(exp, null)) return null;
      types[exp.expected] = exp.expected;
    }
    const expected = Object.getOwnPropertyNames(types).join('|');
    return { message: `argument of type [${expected}]`, truthness: '', expected };
  }
}

export default function typeofArguments() {
  return new TypeofArguments(...arguments)();
}