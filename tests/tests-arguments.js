/* global describe, expect, it */
const path = require('path');
const type = require(path.resolve('./index.js'));
const scenario = require('./scenarios-arguments.js');

describe('When the module function type() is called',function(){
  describe('with callback defined and the arguments',function(){
    for(let i in scenario){
      it(`type(${scenario[i].oActual},${scenario[i].oExpected}), it should throw TypeError with message "${scenario[i].message}"`,function(){
        let binded = type.bind(this,scenario[i].actual,scenario[i].expected,()=>{});
        expect(binded).toThrowError(TypeError,scenario[i].message);
      });
    }
  });
  describe('without callback defined and the arguments',function(){
    for(let i in scenario){
      it(`type(${scenario[i].oActual},${scenario[i].oExpected}), it should throw TypeError with message "${scenario[i].message}"`,function(){
        let binded = type.bind(this,scenario[i].actual,scenario[i].expected,()=>{});
        expect(binded).toThrowError(TypeError,scenario[i].message);
      });
    }
  });
});