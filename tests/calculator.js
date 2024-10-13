import test from 'node:test';
import { Calculator } from "../calculator/index.js"



const calculator = new Calculator()


const isEquals = (result, expectedResult) => {
  if (result !== expectedResult) {
      throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
}


test('addition', (t) => {
  const expression = '2 + 3'
  const result = calculator.eval(expression), expectedResult = 5;
  isEquals(result, expectedResult)
});


test('difference', (t) => {
  const expression = '2 - 3'
  const result = calculator.eval(expression), expectedResult = -1;
  isEquals(result, expectedResult)
});


test('multiplication', (t) => {
  const expression = '2 * 3'
  const result = calculator.eval(expression), expectedResult = 6;
  isEquals(result, expectedResult)
});

test('division', (t) => {
  const expression = '6 / 2'
  const result = calculator.eval(expression), expectedResult = 3;
  isEquals(result, expectedResult)
});

test('mixed', (t) => {
  const expression = '2 + 3 * 4 - 6 / 3'
  const result = calculator.eval(expression), expectedResult = 12;
  isEquals(result, expectedResult)
});

test('brackets', (t) => {
  const expression = '(2 + 3) * 4 - 6 / (2 - 5)'
  const result = calculator.eval(expression), expectedResult = 22;
  isEquals(result, expectedResult)
});


test('exponentiation', (t) => {
  const expression = '(2 + 3)**2 + 2**(3 + 1)'
  const result = calculator.eval(expression), expectedResult = 41;
  isEquals(result, expectedResult)
});

test('unary functions', (t) => {
  const expression = '2 + sin(0) - cos(0)'
  const result = calculator.eval(expression), expectedResult = 1;
  isEquals(result, expectedResult)
});

test('functions', (t) => {
  const expression = '2 + log(8, 2) - pow(2, 3)'
  const result = calculator.eval(expression), expectedResult = -3;
  isEquals(result, expectedResult)
});

test('constants', (t) => {
  const expression = 'sin(pi) + ln(e)'
  const result = calculator.eval(expression), expectedResult = 1;
  isEquals(result, expectedResult)
});

