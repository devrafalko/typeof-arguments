module.exports=function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=1)}([function(module,exports){module.exports=require("of-type")},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return typeofArguments});var of_type__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),of_type__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(of_type__WEBPACK_IMPORTED_MODULE_0__);function _construct(Parent,args,Class){return(_construct=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(Parent,args,Class){var a=[null];a.push.apply(a,args);var instance=new(Function.bind.apply(Parent,a));return Class&&_setPrototypeOf(instance,Class.prototype),instance}).apply(null,arguments)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var TypeofArguments=function(){function TypeofArguments(getArgumentsObject,getExpectedArray,callbackFunction){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TypeofArguments),this.validateArguments(getArgumentsObject,getExpectedArray);for(var i=0;i<getExpectedArray.length;i++)if(!of_type__WEBPACK_IMPORTED_MODULE_0___default()(getArgumentsObject[i],getExpectedArray[i])){var actual=this.getActualType(getArgumentsObject[i]),types=this.getExpectedTypes(getExpectedArray[i]),message="Invalid argument [".concat(i,"]. The [").concat(actual,"] ").concat(types.truthness,"argument has been passed, while the ").concat(types.message," is expected.");if(of_type__WEBPACK_IMPORTED_MODULE_0___default()(callbackFunction,"function"))return callbackFunction({actual:actual,expected:types.expected,message:message,index:Number(i)}),function(){return!1};throw new TypeError(message)}return function(){return!0}}var Constructor,protoProps,staticProps;return Constructor=TypeofArguments,(protoProps=[{key:"validateArguments",value:function(actual,expected){if(!of_type__WEBPACK_IMPORTED_MODULE_0___default()(actual,"arguments"))throw new TypeError("typeof-arguments: Invalid module argument. The first argument must be [arguments] Object.");if(!of_type__WEBPACK_IMPORTED_MODULE_0___default()(expected,Array))throw new TypeError("typeof-arguments: Invalid module argument. The second argument must be of type [Array].")}},{key:"getActualType",value:function(actualValue){return of_type__WEBPACK_IMPORTED_MODULE_0___default()(actualValue,null)?"null":of_type__WEBPACK_IMPORTED_MODULE_0___default()(actualValue,void 0)?"undefined":of_type__WEBPACK_IMPORTED_MODULE_0___default()(actualValue,"arguments")?"arguments":actualValue.constructor.name}},{key:"getExpectedTypes",value:function(expectedType){for(var types=["whenString","whenRegExp","whenObject","whenArray"],_i=0;_i<types.length;_i++){var check=this[types[_i]](expectedType);if(check)return check}throw new TypeError("typeof-arguments: The expected type is not callable.")}},{key:"whenString",value:function(stringType){if(!of_type__WEBPACK_IMPORTED_MODULE_0___default()(stringType,String))return null;var msg='argument of type matching string expression "'.concat(stringType,'"'),truthness="";return stringType.split("|").forEach(function(i){"truthy"===i.toLowerCase()&&(truthness="<<falsy>> "),"falsy"===i.toLowerCase()&&(truthness="<<truthy>> ")}),{message:msg,truthness:truthness,expected:stringType}}},{key:"whenRegExp",value:function(regType){return of_type__WEBPACK_IMPORTED_MODULE_0___default()(regType,RegExp)?{message:"argument of type matching regular expression ".concat(regType),truthness:function(regType){var isCaseInsensitive=regType.flags.match(/i/),str=regType.toString();return(str=isCaseInsensitive?str.toLowerCase():str).match(/truthy/)?"<<falsy>> ":str.match(/falsy/)?"<<truthy>> ":""}(regType),expected:regType.toString()}:null}},{key:"whenObject",value:function(objectType){return of_type__WEBPACK_IMPORTED_MODULE_0___default()(objectType,null)?{message:"argument of type [null]",truthness:"",expected:"null"}:of_type__WEBPACK_IMPORTED_MODULE_0___default()(objectType,void 0)?{message:"argument of type [undefined]",truthness:"",expected:"undefined"}:of_type__WEBPACK_IMPORTED_MODULE_0___default()(objectType,Function)?{message:"argument of type [".concat(objectType.name,"]"),truthness:"",expected:objectType.name}:null}},{key:"whenArray",value:function(arrayTypes){if(!of_type__WEBPACK_IMPORTED_MODULE_0___default()(arrayTypes,Array))return null;var types={},_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=arrayTypes[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var type=_step.value,exp=this.whenObject(type);if(of_type__WEBPACK_IMPORTED_MODULE_0___default()(exp,null))return null;types[exp.expected]=exp.expected}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}var expected=Object.getOwnPropertyNames(types).join("|");return{message:"argument of type [".concat(expected,"]"),truthness:"",expected:expected}}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),TypeofArguments}();function typeofArguments(){return _construct(TypeofArguments,Array.prototype.slice.call(arguments))()}}]).default;