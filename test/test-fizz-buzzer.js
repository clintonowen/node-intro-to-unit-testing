'use strict';

// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the case of a number not divisible by 3 or 5
  it('should return the input number', function() {
    // range of inputs which should return
    // the input itself, including notable
    // cases like negative numbers
    const normalCases = [-28, -8, -1, 1, 8, 31];
    // for each input, `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal(input);
    });
  });

  // test the case of numbers divisible by 3
  it('should return `fizz`', function(){
    // range of inputs which should return
    // the string `fizz`, including notable
    // cases like negative numbers
    const fizzCases = [-27, -9, -3, 3, 6, 9, 12, 18];
    // for each input, `fizzBuzzer` should
    // produce the expected value
    fizzCases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz');
    });
  });

  // test the case of numbers divisible by 5
  it('should return `buzz`', function(){
    // range of inputs which should return
    // the string `buzz`, including notable
    // cases like negative numbers
    const buzzCases = [-35, -10, -5, 5, 10, 25];
    // for each input, `fizzBuzzer` should
    // produce the expected value
    buzzCases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('buzz');
    });
  });

  // test the case of numbers divisible by both 3 and 5
  it('should return `fizz-buzz`', function(){
    // range of inputs which should return
    // the string `fizz-buzz`, including notable
    // cases like 0 and negative numbers
    const fizzBuzzCases = [-30, -15, 0, 15, 30];
    // for each input, `fizzBuzzer` should
    // produce the expected value
    fizzBuzzCases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    });
  });
});