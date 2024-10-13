import {DigitAnalyzer, SymbolAnalyzer, EmptyAnalyzer} from './characterAnalysis.js'


class LexicalAnalyzer {
  constructor(listOfAnalyzers) {
    this.listOfAnalyzers = listOfAnalyzers
  }

  getTokens = (expression) => {
    expression = this.getClearedExpression(expression)
    const tokens = []

    for (let i = 0; i < expression.length; i++) {
      const token = this.getToken(expression, i)
      tokens.push(token)
      i += token.toString().length - 1
    }
    return tokens
  }

  getClearedExpression = (expression) => expression.replaceAll(' ', '').split('')

  getToken = (expression, i) => {
    for (let analyzer of this.listOfAnalyzers) {
      if (analyzer.isStart(expression[i])) {
        const token = analyzer.getResult(expression, i)
        if (token.length == 0) {
          continue
        }
        return token
      }
    }
  }

}

class MathLexicalAnalyzer extends LexicalAnalyzer{
  constructor(validSymbols) {
    const listOfAnalyzers = [new DigitAnalyzer(), new SymbolAnalyzer(validSymbols), new EmptyAnalyzer()]
    super(listOfAnalyzers)
  }
}

export {MathLexicalAnalyzer, LexicalAnalyzer}
