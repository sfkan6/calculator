
class Function {
  eval = (...args) => {}
}

class Sine extends Function {
  eval = (a) => Math.sin(a)
}

class Cosine extends Function {
  eval = (a) => Math.cos(a)
}

class Plus extends Function {
  eval = (a, b) => a + b
}
class Minus extends Function {
  eval = (a, b) => a - b
}
class Multiply extends Function {
  eval = (a, b) => a * b
}
class Divide extends Function {
  eval = (a, b) => a / b
}
class Degree extends Function {
  eval = (a, b) => a**b
}

export {Function, Sine, Cosine, Plus, Minus, Multiply, Divide, Degree}
