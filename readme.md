# Description
`typeof-arguments` validates the arguments' types passed through the enclosing function.

* Also see [`of-type`](https://www.npmjs.com/package/of-type) package to check if the given value|object is of expected type.
* Also see [`typeof-properties`](https://www.npmjs.com/package/typeof-properties) to validate the object's properties' type.
* Also see [`typeof-items`](https://www.npmjs.com/package/typeof-items) to validate the array's items' type

# Implementation

#### with NodeJS
`npm install typeof-arguments`

```javascript
const type = require('typeof-arguments');
```

#### with Browser

#### Add `typeof-arguments.js` library to the HTML file.
The library is located in `./dist/typeof-arguments.js` directory.  
It is a webpack&babel bundled cross-browser library version.  
The library is accessible as `typeofArguments` variable in the global *(window)* scope.

```html
<head>
  <script src='typeof-arguments.js'></script>
  <script>
    function test(name, age) {
      typeofArguments(arguments, ['string', 'number|string|null']);
    }
    test('Nikola', 26);
  </script>
</head>
```

# Tests
```
> git clone https://github.com/devrafalko/typeof-arguments.git
> cd typeof-arguments
> npm install
> npm test        //run tests in node
> npm test deep   //run tests in node with errors shown
```

# Usage
### `type(actual, expected[, callback])`
### `actual` **[Object]**
It should always indicate the enclosing function **`arguments`** object.

### `expected` **[Array]**
* It should contain the [Array] list of **expected types** for each subsequent argument passed through the enclosing function.
* The [Array] `expected` item's index coheres with the index of `actual` argument item passed through the enclosing function.
* The values of [Array] `expected` items indicate the expected types of the coherent `actual` arguments passed through the enclosing function.

```javascript
test('Nikola', 26);

function test(name, age) {
  //the name should be of [String] type
  //and the age should be of [Number|String|null] type
  type(arguments, ['string', 'number|string|null']);
}
```

###  The `expected` Types
There are four ways to check the type of the arguments:
* by **string expression** values
* by **regular expression** values
* by **constructor functions**, `null` or `undefined` values
* by some of supported custom types

> Mind, that the `typeof-arguments` library uses the `of-type` library as the dependency, to validate the types. If you feel confused how to use the types, see more samples [here](https://www.npmjs.com/package/of-type#samples).

`[String]`
* Possible values:  
  * `'null'`, `'undefined'`  
  * any value that equals to argument's `constructor.name`, eg:  
  `'string'`, `'number'`, `'regexp'`, `'array'`, `'object'`, `'boolean'`,`'buffer'`, etc.
* The [String] type is case insensitive:
  * `'String'`, `'string'`, `'StRiNg'` checks if the argument is of `[String]` type
  * `'RegExp'`, `'REGEXP'`, `'regexp'` checks if the argument is of `[RegExp]` type
* The [String] type can contain multiple types, separated with `|`:
  * `'array|object'` checks if the argument is of `[Array]` **`OR`** `[Object]` type
  * `'undefined|null'` checks if the argument is of `undefined` **`OR`** `null` type

```javascript
test('Nikola', 26);

function test() {
  type(arguments, ['string', 'number|string|null']);
}
```

`[RegExp]`
* Possible values: 
  * `/null/`, `/undefined/`
  * any value matching the argument's `constructor.name`, eg: `/String/`, `/Number/`, `/RegExp/`, `/Array/`, `/Object/`, `/Boolean/`,`/Buffer/`, `/Promise/`, etc.
* Use all regular expression's features to match the type in a desired way:
  * `/Str/`, `/Err/`, `/Reg/`, `/B/`
  * `/.+Error$/`, `/^RegExp$/`, 
  * `/^[A-Z][a-z]+$/`
* For the case insensitivity use `i` flag:
  * `/string/i`, `/regexp/i`, `/TYPEERROR/i`
* For multiple values use regexp `(x|y)` expression:
  * `/String|Number/`, `/TypeError|Error/`, `/(obj|str)/i`

```javascript
test('Nikola', 26);

function test() {
  type(arguments, [/string/i, /number|string|null/i]);
}
```

`[Function|Array|null|undefined]`
* Possible values:
  * `null`, `undefined`
  * any `[Function]` constructor, eg: `String`, `TypeError`, `Promise`, `Array`, etc.
* For multiple values use array:
  * `[String, Object, Array, null]`
  * `[null, undefined, Boolean]`

```javascript
test('Nikola', 26);

function test() {
  type(arguments, [String, [Number, String, null]]);
}
```

> When you use **bundlers** or **minifiers**, use `[String|RegExp]` type **wisely** as bundlers may change the names of functions|constructors|classes in the output file and eg. `type(arguments, ['MyClass']);` that returns `true` before compilation, may return `false` after compilation, if the bundler minifies the `'MyClass'` constructor name.

### Extra types:

`[String] 'arguments'` | `[RegExp] /arguments/`

* The type `'arguments'` or `/arguments/` expects the passed argument to be the function's `arguments` object

`[String] 'instance'` | `[RegExp] /instance/`
* The type `'instance'` or `/instance/` expects the passed argument to be the instance of the user's class|constructor
* It fails when the passed argument is an instance of built-in *(native)* constructor
  * `[]`, `'hello world'`, `{}`
* It fails for instances that are the `global`|`window`'s properties

`[String] 'objectable'` | `[RegExp] /objectable/`
* The type `'objectable'` or `/objectable/` expects the passed argument to be the object that is the instance of the `Object` constructor
  * `{}`, `[]`, `new String('hello world')`, `new Boolean(1)`
* It fails when the passed argument is a primitive value or a simple value
  * `'hello world'`, `true`, `10`, `null`, `undefined`

`[String] 'truthy'` | `[RegExp] /truthy/`
* The type `'truthy'` or `/truthy/` expects the passed argument to be like:
  * `'abc'`, `true`, `1`, `-1`, `{}`, `[]`, `function(){}`

`[String] 'falsy'` | `[RegExp] /falsy/`
* The type `'falsy'` or `/falsy/` expects the passed argument to be like:
  * `''`, `false`, `0`, `null`, `undefined`, `NaN`

`[String] 'any'` | `[RegExp] /any/` | `[Array] []` | `[String] ""`
* The `type` `'any'` or `/any/` or empty array `[]` or empty string `""` expects the passed argument to be of any type

### `callback` **[Function]** *(optional)*
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
  * **`textActual`**  
    indicates the [String] textual actual type, eg. `"[undefined] <<falsy>> argument"`
  * **`textExpected`**  
    indicates the [String] textual expected type, eg. `"argument of type matching regular expression /String|null/"`

```javascript
const type = require('typeof-arguments');

hello('Nikola', 26);

function hello(name, age) {
  type(arguments, [String, 'string|number'], (o) => {
    console.error(o.message);
    /*
    console.error('Not good! Use ' + o.expected + ' instead of ' + o.actual + ' for argument ' + o.index);
    throw new Error("Aborted! " + o.message);
    */
  });
}
```

### Return value
The function `type()` returns `true` when all arguments passed through the enclosing function are of **valid** types.  
The function `type()` returns `false` when at least **one** of the arguments passed through the enclosing function is of **invalid** type.

```javascript
const type = require('typeof-arguments');

hello('hello', 'world!');

function hello(paramA, paramB) {
  const valid = type(arguments, ['string', 'string'], () => { });
  if (!valid) return; //stop executing code if at least one argument is of invalid type
  //your code here...
}
```

# Samples
```javascript
const type = require('typeof-arguments');

function test(paramA, paramB, paramC) {
  type(arguments, ['number|string', 'any', 'null|array']);
}

test('hello', 'it\'s me!', null);
//no errors

test(10, 20, [1, 2, 3]);
//no errors

test(true, 20, null);
//Invalid argument [0]. The [Boolean] argument has been passed, while the argument of type matching string expression "number|string" is expected.

test({ name: 'Nikola' }, false, /test/);
//Invalid argument [0]. The [Object] argument has been passed, while the argument of type matching string expression "number|string" is expected.
//Invalid argument [2]. The [RegExp] argument has been passed, while the argument of type matching string expression "null|array" is expected.

test(10, 20, null, 30, 40, 50, 60, 70);
//no errors

test(10);
//Invalid argument [2]. The [undefined] argument has been passed, while the argument of type matching string expression "null|array" is expected.
```

```javascript
const type = require('typeof-arguments');

function test(paramA, paramB) {
  type(arguments, ['truthy|string', /(regexp|falsy)/i]);
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

```javascript
const type = require('typeof-arguments');

function test(paramA, paramB) {
  type(arguments, [String, 'any', 'any', Number, /((syntax|type)error)|falsy/i]);
}

test();
//Invalid argument [0]. The [undefined] argument has been passed, while the argument of type [String] is expected.

test('Nikola', null, false, 10);
//no errors

test('Nikola', null, false, 10, new TypeError('error'));
//no errors

test('Nikola', null, false, 10, false);
//no errors

test('Nikola');
//Invalid argument [3]. The [undefined] argument has been passed, while the argument of type [Number] is expected.

test('Nikola', true, true, 10, new Error('error'));
//Invalid argument [4]. The [Error] <<truthy>> argument has been passed, while the argument of type matching regular expression /((syntax|type)error)|falsy/i is expected.
```

```javascript
const type = require('typeof-arguments');

function test(paramA, paramB) {
  type(arguments, ['instance', 'Name', 'object', 'falsy']);
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