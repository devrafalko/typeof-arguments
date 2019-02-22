/* global jasmine, describe, expect, it */
import scenario from './data/scenarios-valid.js';

describe('The module function should not throw error and run callback function', function () {
  it('when the expected array is empty', function () {
    let clb = jasmine.createSpy('clb');
    let binded = test.bind(this, 'Paul', 22);
    expect(binded()).toBe(true);
    expect(binded).not.toThrowError();
    expect(clb).not.toHaveBeenCalled();
    function test() {
      return this.type(arguments, [], clb);
    }
  });
});

describe('The module function should not throw error and run callback function', function () {
  for (let i in scenario) {
    it(`when the arguments passed through function are correct and the validation has passed [Nb. ${i}]`, function () {
      let { actual, expected } = scenario[i];
      let clb = jasmine.createSpy('clb');
      let binded = test.apply.bind(test, this, actual);
      expect(binded()).toBe(true);
      expect(binded).not.toThrowError();
      expect(clb).not.toHaveBeenCalled();
      function test() {
        return this.type(arguments, expected, clb);
      }
    });
  }
});