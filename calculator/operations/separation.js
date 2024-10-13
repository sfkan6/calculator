

class ExpressionSeparator {
  getArgs = (expression, index) => {}
}

class UnarySeparator extends ExpressionSeparator {
  getArgs = (expression, index) => [[expression[index + 1]]]
}

class BinarySeparator extends ExpressionSeparator {
  getArgs = (expression, index) => [expression.slice(0, index), expression.slice(index + 1)]
}

export {ExpressionSeparator, UnarySeparator, BinarySeparator}
