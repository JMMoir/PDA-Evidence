var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  // it should be able to add numbers
  it('it should add numbers', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(5, calculator.runningTotal)
  })

  // it should be able to subtract number
  it('it should subtract numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal)
  })

  // it should be able to muilply numbers
  it('it should multiply numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal)
  })

  // it should be able to divide numbers
  it('it should divide numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal)
  })

  // it should be able to deal with multiple number inputs
  it('it should concatenate numbers', function(){
    calculator.numberClick(2);
    calculator.numberClick(2);
    assert.equal(22, calculator.runningTotal)
  })

  // it should be able to handle multiple operations together
  it('it should handle multiple functions', function(){
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("*");
    calculator.numberClick(3);
    calculator.operatorClick('=')
    assert.equal(12, calculator.runningTotal)
  })

  // it should be able to clear the running total but not effect the calculation.
  it('it should clear the runningtotal', function(){
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.numberClick(5);
    calculator.operatorClick('=')
    assert.equal(7, calculator.runningTotal)
  })
});
