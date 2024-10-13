
class Analyzer {
  isStart = (char) => {}
  getResult = (expression, index) => {}
}

class DigitAnalyzer extends Analyzer {
  isDigit = (char) => /^\d$/.test(char)

  isDecimalSeparator = (char) => ['.', ','].includes(char)

  isStart = (char) => this.isDigit(char)

  getResult = (expression, index) => {
    let currentNumber = ''
    let point = false
    let i = index
    while (this.isDigit(expression[i]) || this.isDecimalSeparator(expression[i])) {
      if (this.isDecimalSeparator(expression[i])) {
        if (point) throw new Error('More than one point in the number!')
        point = true
      }
      currentNumber += expression[i]
      i += 1
    }
    return parseFloat(currentNumber)

  }
}

class SymbolAnalyzer extends Analyzer {

  constructor(validSymbols) {
    super()
    this.validSymbols = validSymbols
    this.symbolString = validSymbols.join(' ')
  }

  isOperation = (char) => this.validSymbols.includes(char)

  isOperationPossible = (symbol) => this.symbolString.includes(symbol)

  isStart = (char) => this.isOperationPossible(char)

  getResult = (expression, index) => {
    let lastSymbol = ''
    let currentSymbol = expression[index]
    let i = index + 1
    while (this.isOperationPossible(currentSymbol + expression[i])) {
      if (this.isOperation(currentSymbol)) lastSymbol = currentSymbol
      currentSymbol += expression[i]
      i += 1
    }
    if (this.isOperation(currentSymbol)) return currentSymbol
    return lastSymbol
  }
}

class EmptyAnalyzer extends Analyzer {

  isStart = (char) => true

  getResult = (expression, index) => expression[index]
}

export {DigitAnalyzer, SymbolAnalyzer, EmptyAnalyzer}
