/* global jasmine, describe, expect, it */
import scenario from './data/scenarios-invalid.js';

describe('When the argument is of invalid type, the module function', function () {
  describe('when callback is not defined, should throw TypeError with message', function () {
    for (let i in scenario) {
      let { actual, expected, oMessage } = scenario[i];
      it(`"${oMessage}"`, function () {
        let binded = test.apply.bind(test, this, actual);
        expect(binded).toThrowError(TypeError, oMessage);
        function test() {
          this.type(arguments, expected);
        }
      });
    }
  });
  describe('when callback is defined, should return false and run callback with object', function () {
    for (let i in scenario) {
      let { actual, expected, oActual, oExpected, oIndex, oMessage, oTextActual, oTextExpected } = scenario[i];
      it(`{ actual: ${oActual}, expected: ${oExpected}, index: ${oIndex}, message: ${oMessage}, textActual: ${oTextActual}, textExpected: ${oTextExpected} }`, function () {
        let clb = jasmine.createSpy('clb');
        let binded = test.apply.bind(test, this, actual);
        expect(binded()).toBe(false);
        expect(binded).not.toThrowError();
        expect(clb).toHaveBeenCalledTimes(2);
        expect(clb).toHaveBeenCalledWith(jasmine.objectContaining({
          actual: oActual,
          expected: oExpected,
          index: oIndex,
          message: oMessage,
          textActual: oTextActual,
          textExpected: oTextExpected
        }));
        function test() {
          return this.type(arguments, expected, clb);
        }
      });
    }
  });
});