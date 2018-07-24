# Description
`typeof-arguments` is a module that validates arguments' types passed to the enclosing function.
* Any bugs found? Give me to know on [GitHub](https://github.com/devrafalko/typeof-arguments)
* Also check out [**`of-type`**](https://www.npmjs.com/package/of-type) package that checks whether the given value is of particular type *(`typeof-arguments` is based on `of-type` package)*.
* Also check out [**`typeof-properties`**](https://www.npmjs.com/package/typeof-properties) to validate value types of the properties of objects.

# Installation
`npm install typeof-arguments`

```javascript
const argType = require('typeof-arguments');
```

# Usage
### `argType(actual, expected[, callback])`
##### `actual` **[Object]**
* It should always indicate the enclosing function **`arguments`** object

##### `expected` **[Array]**
* It should contain the [Array] list of **expected types** for each subsequent argument passed through the enclosing function.
* The [Array] `expected` item's index coheres with the index of `actual` argument item passed through the enclosing function.
* The values of [Array] `expected` items indicate the expected types of the coherent `actual` arguments passed through the enclosing function.

```javascript
test('Paul', 26);

function test(name, age) {
  //the name should be of [String] type
  //and the age should be of [Number|String|null] type
  argType(arguments, ['string', 'number|string|null']);
}
```

#####  The `expected` Types
There are three ways to check the type of the arguments:
* by **string expression** values
* by **regular expression** values
* by **constructor functions**, `null` or `undefined` values

##### 1. [String] expressions
* Possible values: `'null'`, `'undefined'`, or any value equal to `constructor.name`, eg: `'string'`, `'number'`, `'regexp'`, `'array'`, `'object'`, `'boolean'`,`'buffer'`, etc.
* The [String] value is case insensitive: `'String'`, `'string'`, `'StRiNg'` checks if the argument is of type [String].
* The [String] value can contain **multiple** allowed types, separated with `|`. eg: `'array|object'` checks if the argument is of type [Array] **`OR`** of type [Object].

```javascript
test('Paul', 26);

function test() {
  argType(arguments, ['string', 'number|string|null']);
}
```

##### 2. [RegExp] expressions
* Possible values: `/null/`, `/undefined/`, or any value matching the `constructor.name`, eg: `/String/`, `/Number/`, `/RegExp/`, `/Array/`, `/Object/`, `/Boolean/`,`/Buffer/`, `/Promise/`, etc.
* For the case insensitivity use `i` flag, eg: `/string/i`, `/regexp/i`, `/typeerror/i`
* For **multiple** values use regexp `(x|y)` expression, eg: `/String|Number/`, `/TypeError|Error/`
* Use another regexp features:
  * eg. `/(Type|Range|Syntax)Error/` will match `TypeError`, `RangeError` and `SyntaxError`
  * eg. `/[A-Z].+/` will match `String`, `Array`, but will not match `undefined`, `null`, etc.

```javascript
test('Paul', 26);

function test() {
  argType(arguments, [/string/i, /number|string|null/i]);
}
```

##### 3. [null|undefined|Function] expressions
* Possible values: `null`, `undefined` or any **constructor** object, eg: `String`, `TypeError`, `Promise`, `Array`, etc.
* For **multiple** values use **array**, eg: `[String,Object,Array,null]`

```javascript
test('Paul', 26);

function test() {
  argType(arguments, [String, [Number, String, null]]);
}
```

##### Extra types:
* The value can be: `'arguments'` or `/arguments/`. It returns `true` if the argument is defined as the `arguments` Object
* The value can be : 'instance' or /instance/. It returns `true` for the **instances** of user **classes** or **constructors**. It returns `false` for instances of built-in *(native)* constructors, *eg. for [], "hello world", {}*
* The value can be: `'truthy'` or `/truthy/`. It returns `true` if the argument has the value like: `"abc"`, `true`, `1`, `{}`, `[]`,`function(){}`, etc.
* The value can be: `'falsy'` or `/falsy/`. It returns `true` if the argument has the value like: `""`, `false`, `0`, `null`, `undefined`, `NaN`, etc.
* The value can be: `''` or `'any'` or `/any/` or `[]`, It returns `true` if the argument is of **any type**.

##### `callback` **[Function]** *(optional)*
* if **not passed**, the **TypeError** with **default message** will be **thrown** to the console, if the argument passed to the function is invalid.
* The TypeError default message is eg.: 
  * `Invalid argument [0]. The [Number] argument has been passed, while the argument of type [String] is expected.`
  * `Invalid argument [2]. The [null] argument has been passed, while the argument of type matching string expression "boolean" is expected.`
  * `Invalid argument [1]. The [null] <<falsy>> argument has been passed, while the argument of type matching string expression "truthy|undefined" is expected.`
  * `Invalid argument [0]. The [undefined] argument has been passed, while the argument of type matching regular expression /string/i is expected.`
* if **passed**, the default TypeError **will not be thrown** to the console and the user can decide what to do inside the `callback` function.
* Use callback function if you don't want to stop your code execution by default *(no callback)* **`throw`** statement!
* the `callback` function is executed **only** if at least one argument passed through the enclosing function is of invalid type.
* The one [Object] argument is passed through `callback` function with the following properties:
  * **`index`**  
    indicates the [Number] index of the incorrect argument passed through the enclosing function, eg. `0`, `1`
  * **`actual`**  
    indicates the actual type of the argument passed through the enclosing function, eg. `"String"`
  * **`expected`**  
    indicates the type(s) expected by the user, eg. `"Array"`, `"Boolean|Number"`, `"/array|object/i"`
  * **`message`**  
    is the default error [String] message, that you can use eg. to log in the console

```javascript
const argType = require('typeof-arguments');

hello('Paul', 26);

function hello(name, age) {
  argType(arguments, [String, 'string|number'], (o) => {
    console.error(o.message);
    //console.error('Not good! Use ' + o.expected + ' instead of ' + o.actual + ' for argument ' + o.index);
    //throw new Error("Aborted! " + o.message);
  });
}
```

#### Return value
The function `argType()` returns `true` when all arguments passed through the enclosing function are of **valid** types.  
The function `argType()` returns `false` when at least **one** of the arguments passed through the enclosing function is of **invalid** type.

```javascript
const argType = require('typeof-arguments');

hello('hello', 'world!');

function hello(paramA, paramB) {
  const valid = argType(arguments, ['string', 'string'], () => { });
  if (!valid) return; //stop executing code if at least one argument is of invalid type
  //your code here...
}
```

# Tests
```
> git clone https://github.com/devrafalko/typeof-arguments.git
> cd typeof-arguments
> npm install
> npm test
> npm test deep //displays error messages
```

# Samples
```javascript
const argType = require('typeof-arguments');

function test(paramA, paramB, paramC) {
  argType(arguments, ['number|string', 'any', 'null|array']);
}

test('hello', 'it\'s me!', null);
//no errors

test(10, 20, [1, 2, 3]);
//no errors

test(true, 20, null);
//Invalid argument [0]. The [Boolean] argument has been passed, while the argument of type matching string expression "number|string" is expected.

test({ name: 'Paul' }, false, /test/);
//Invalid argument [0]. The [Object] argument has been passed, while the argument of type matching string expression "number|string" is expected.
//Invalid argument [2]. The [RegExp] argument has been passed, while the argument of type matching string expression "null|array" is expected.

test(10, 20, null, 30, 40, 50, 60, 70);
//no errors

test(10);
//Invalid argument [2]. The [undefined] argument has been passed, while the argument of type matching string expression "null|array" is expected.
```

### more samples
```javascript
const argType = require('typeof-arguments');

function test(paramA, paramB) {
  argType(arguments, ['truthy|string', /(regexp|falsy)/i]);
}

test();
//Invalid argument [0]. The [undefined] <<falsy>> argument has been passed, while the argument of type matching string expression "truthy" is expected.

test('', '');
//Invalid argument [0]. The [String] <<falsy>> argument has been passed, while the argument of type matching string expression "truthy" is expected.

test(1, 0);
//no errors

test(0, 1);
//Invalid argument [0]. The [Number] <<falsy>> argument has been passed, while the argument of type matching string expression "truthy" is expected.
//Invalid argument [1]. The [Number] <<truthy>> argument has been passed, while the argument of type matching regular expression /(regexp|falsy)/i is expected.

test([1, 2, 3], /test/);
//no errors

test('hello', null);
//no errors
```

### more samples
```javascript
const argType = require('typeof-arguments');

function test(paramA, paramB) {
  argType(arguments, [String, 'any', 'any', Number, /((syntax|type)error)|falsy/i]);
}

test();
//Invalid argument [0]. The [undefined] argument has been passed, while the argument of type [String] is expected.

test('Paul', null, false, 10);
//no errors

test('Paul', null, false, 10, new TypeError('error'));
//no errors

test('Paul', null, false, 10, false);
//no errors

test('Paul');
//Invalid argument [3]. The [undefined] argument has been passed, while the argument of type [Number] is expected.

test('Paul', true, true, 10, new Error('error'));
//Invalid argument [4]. The [Error] <<truthy>> argument has been passed, while the argument of type matching regular expression /((syntax|type)error)|falsy/i is expected.
```

### more samples
```javascript
const argType = require('typeof-arguments');

function test(paramA, paramB) {
  argType(arguments, ['instance', 'Name', 'object', 'falsy']);
}

class Name{}
class Age{}
const name = new Name();
const age = new Age();

test();
//Invalid argument [0]. The [undefined] argument has been passed, while the argument of type matching string expression "instance" is expected.

test(name, name, {}, null);
//no errors

test(age, name, {}, NaN);
//no errors

test(age, age, {}, false);
//Invalid argument [1]. The [Age] argument has been passed, while the argument of type matching string expression "Name" is expected.

test({}, name, {}, NaN);
//Invalid argument [0]. The [Object] argument has been passed, while the argument of type matching string expression "instance" is expected.

test(name, {}, {}, 0);
//Invalid argument [1]. The [Object] argument has been passed, while the argument of type matching string expression "Name" is expected.

test(age, name, age, NaN);
//Invalid argument [2]. The [Age] argument has been passed, while the argument of type matching string expression "object" is expected.
```