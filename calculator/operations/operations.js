import { Sine, Cosine, Plus, Minus, Multiply, Divide, Degree } from './functions.js'
import { UnarySeparator, BinarySeparator } from './separation.js'


class Operation {
  constructor(symbol, expressionSeparator, func) {
    this.symbol = symbol
    this.expressionSeparator = expressionSeparator
    this.func = func
  }
  
  getArgs = (expression, index) => this.expressionSeparator.getArgs(expression, index)

  eval = (...args) => this.func.eval(...args)
}

class UnaryOperation extends Operation {
  constructor(symbol, func) {
    super(symbol, new UnarySeparator(), func)
  }
}
class Sin extends UnaryOperation {
  constructor() {
    super('sin', new Sine())
  }
}
class Cos extends UnaryOperation {
  constructor() {
    super('cos', new Cosine())
  }
}

class BinaryOperation extends Operation{
  constructor(symbol, func) {
    super(symbol, new BinarySeparator(), func)
  }
}
class Addition extends BinaryOperation {
  constructor() {
    super('+', new Plus())
  }
}
class Difference extends BinaryOperation {
  constructor() {
    super('-', new Minus())
  }
}
class Multiplication extends BinaryOperation {
  constructor() {
    super('*', new Multiply())
  }
}
class Division extends BinaryOperation {
  constructor() {
    super('/', new Divide())
  }
} 
class Exponentiation extends BinaryOperation {
  constructor() {
    super('**', new Degree())
  }
} 


export {Cos, Sin, Addition, Difference, Multiplication, Division, Exponentiation}
