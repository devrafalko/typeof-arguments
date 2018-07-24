/* global jasmine, describe, expect, it */
const path = require('path');
const type = require(path.resolve('./index.js'));
const scenario = require('./scenarios-invalid.js');

describe('When the argument is of invalid type, the module function',function(){
  describe('when callback is not defined, should throw TypeError with message',function(){
    for(let i in scenario){
      let {actual,expected,oMessage} = scenario[i];
      it(`"${oMessage}"`,function(){
        let binded = test.apply.bind(test,this,actual);
        expect(binded).toThrowError(TypeError,oMessage);
        function test(){
          type(arguments,expected);
        }
      });
    }
  });
  describe('when callback is defined, should return false and run callback with object',function(){
    for(let i in scenario){
      let {actual,expected,oActual,oExpected,oIndex,oMessage} = scenario[i];
      it(`{actual:${oActual},expected:${oExpected},index:${oIndex},message:${oMessage}}`,function(){
        let clb = jasmine.createSpy('clb');
        let binded = test.apply.bind(test,this,actual);
        expect(binded()).toBe(false);
        expect(binded).not.toThrowError();
        expect(clb).toHaveBeenCalledTimes(2);
        expect(clb).toHaveBeenCalledWith(jasmine.objectContaining({
          actual:oActual,
          expected:oExpected,
          index:oIndex,
          message:oMessage
        }));
        function test(){
          return type(arguments,expected,clb);
        }
      });
    }
  });
});