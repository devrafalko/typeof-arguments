# Description
`typeof-arguments` is a module that validates arguments' types passed to the enclosing function.
* Any bugs found? Give me to know on dev.rafalko@gmail.com or on [GitHub](https://github.com/devrafalko/typeof-arguments)
* Also check out [**`of-type`**](https://www.npmjs.com/package/of-type) package that checks whether the given value is of particular type *(`typeof-arguments` is based on `of-type` package)*.

# Installation
`npm install typeof-arguments`

```javascript
var args = require('typeof-arguments');
```

# Usage
### `args(arguments,types[,callback])`
##### `arguments` **[Object]**
* It should always indicate the enclosing function **`arguments`** object
##### `types` **[Array]** of **[String|RegExp]** items.
* It should contain the list of **expected types** for each *(or chosen)* enclosing function parameter. The **`types[2]`** specifies the expected type(s) of **`arguments[2]`**, etc.
* Possible values: `'null'`, `'undefined'`, or any value equal to `constructor.name`, eg. `'string'`, `'number'`, `'regexp'`, `'array'`, `'object'`, `'boolean'`,`'buffer'`, etc.
* The **`types`** [String] is case insensitive: `'String'`, `'string'`, `'StRiNg'` checks if the **`arguments`** item is of type [String]. For **`types`** [RegExp] case insensitivity use `i` flag, eg.: `/String/`, `/string/i`, `/sTrInG/i`
* The **`types`** [String] can contain multiple allowed types, separated with `|`, eg: `'array|object'`, `'boolean|number|null|undefined'`, `string|number`. For **`types`** [RegExp] multiple values use `(x|y)` expression, eg: `/(string|number)/i`

##### Extra types:
* The **`types`** can contain the value: `'arguments'`. It returns `true` for the `arguments` Object
* The **`types`** can contain the value: `'truthy'`. It returns `true` for the **`arguments`** item's values like: `"abc"`, `true`, `1`, `{}`, `[]`,`function(){}`, etc.
* The **`types`** can contain the value: `'falsy'`. It returns `true` for the **`arguments`** item's values like: `""`, `false`, `0`, `null`, `undefined`, etc.
* The **`types`** can contain the value: `''` or `'any'`, then it returns `true` for the **`arguments`** item of **any type**. Use it if you do not want to check the type of the particular **`arguments`** item, eg. `['string','any','object|array']`

```javascript
var args = require('typeof-arguments');

hello('hello', "world!");

function hello(paramA,paramB){
  args(arguments,['string','string']);
}
```

##### `callback` **[Function]** *(optional)*
* if **not passed**, the **TypeError** with **default message** will be **thrown** to the console, if the argument passed to the function is invalid.
* The TypeError default message is eg.: 
  * `Invalid argument [0]. The [String] argument has been passed, while the [Number] one is expected.`
  * `Invalid argument [2]. The [undefined] argument has been passed, while the argument of the type matching the regular expression: /array|object/i is expected.`
  * `Invalid argument [1]. The [Number] <<truthy>> argument has been passed, while the [falsy|String] one is expected.`
* if **passed**, the default TypeError **will not be thrown** to the console and the user can decide what to do inside the `callback` function.
* Use callback function if you don't want to stop your code execution by default *(no callback)* **`throw`** statement!
* the `callback` function is executed **only** if at least one argument passed through the enclosing function is of invalid type.
* The one [Object] argument is passed through `callback` function with the following properties:
  * `index` indicates the [Number] index of the incorrect argument passed through the enclosing function, eg. `0`, `1`
  * `actual` indicates the actual type of the argument passed through the enclosing function, eg. `'[String]'`
  * `expected` indicates the type(s) expected by the user, eg. `'[Array]'`, `'[Boolean|Number]'`, `/array|object/i`
  * `message` is the default error [String] message, that you can use for example to throw an error in the callback function


```javascript
var args = require('typeof-arguments');

hello(10, "hello!");

function hello(paramA,paramB){
  args(arguments,['any','string|number'],(o)=>{
    console.error(o.message);
    //console.error('Not good! Use ' + o.expected + ' instead of ' + o.actual + ' for argument ' + o.index);
    //throw new Error("Aborted! " + o.message);
  });
}
```

#### Return value
The function `args()` returns `true` when all arguments passed through the enclosing function are of **valid** types.  
The function `args()` returns `false` when at least **one** of the arguments passed through the enclosing function is of **invalid** type.

```javascript
var args = require('typeof-arguments');

hello("hello","world!");

function hello(paramA,paramB){
  var areValid = args(arguments,['string','string']);
  if(!areValid) return; //stop executing code if at least one argument is of invalid type
  //your code here...
}
```

# Samples
```javascript
var args = require('typeof-arguments');

function hello(paramA,paramB,paramC){
  args(arguments,['number|string','any','null|array']);
}

hello("hello", "it's me!", null);
//no errors

hello(10, 20, [1,2,3]);
//no errors

hello(true,20,null);
//Invalid argument [0]. The [Boolean] argument has been passed, while the [Number|String] one is expected.

hello({name:'Paul'},false,/test/);
//Invalid argument [0]. The [Object] argument has been passed, while the [Number|String] one is expected.
//Invalid argument [2]. The [RegExp] argument has been passed, while the [null|Array] one is expected.

hello(10,20,null,30,40,50,60,70);
//no errors

hello(10);
//Invalid argument [2]. The [undefined] argument has been passed, while the [null|Array] one is expected.
```

### more samples
```javascript
var args = require('typeof-arguments');

function hello(paramA,paramB){
  args(arguments,['truthy|string',/(regexp|falsy)/i]);
}

hello();
//Invalid argument [0]. The [undefined] <<falsy>> argument has been passed, while the [truthy|String] one is expected.

hello('','');
//Invalid argument [0]. The [String] <<falsy>> argument has been passed, while the [truthy|String] one is expected.

hello(1,0);
//no errors

hello(0,1);
//Invalid argument [0]. The [Number] <<falsy>> argument has been passed, while the [truthy|String] one is expected.
//Invalid argument [1]. The [Number] <<truthy>> argument has been passed, while the argument of the type matching the regular expression: /(regexp|falsy)/i is expected.

hello([1,2,3],/test/);
//no errors

hello('hello',null);
//no errors
```

### more samples
```javascript
var args = require('typeof-arguments');

function hello(paramA,paramB,paramC){
  args(arguments,[/date|object|array/i,/^html.*element$/i,/^html(ul|li)element/i]);
}

var div = document.createElement('DIV');
var ul = document.createElement('UL');
var li = document.createElement('LI');
var a = document.createElement('A');

hello([1,2,3],null);
//Invalid argument [1]. The [null] argument has been passed, while the argument of the type matching the regular expression: /^html.*element$/i is expected.

hello([1,2,3],div,ol);
//no errors

hello([1,2,3],div,ul);
//no errors

hello(new Date(),a,div);
//Invalid argument [2]. The [HTMLDivElement] argument has been passed, while the argument of the type matching the regular expression: /^html[uo]listelement/i is expected.
```

### more samples
```javascript
var args = require('typeof-arguments');

function hello(paramA,paramB){
  args(arguments,['arguments|falsy',/((syntax|type)error)|falsy/i]);
}

function returnArguments(){
  return arguments;
}

hello(null,new TypeError());
//no errors

hello(false,new SyntaxError());
//no errors

hello(0,new Error());
//Invalid argument [1]. The [Error] argument has been passed, while the argument of the type matching the regular expression: /((syntax|type)error)|boolean/i is expected.

hello(1,false);
//Invalid argument [0]. The [Number] <<truthy>> argument has been passed, while the [arguments|falsy] one is expected.

hello(returnArguments,new TypeError());
//Invalid argument [0]. The [Function] <<truthy>> argument has been passed, while the [arguments|falsy] one is expected.

hello(returnArguments(),new TypeError());
//no errors
```