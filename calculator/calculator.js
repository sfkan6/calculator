import {ConvenientOperationManager} from './operationManager.js'


class Calculator {
  
  constructor(listOfBracketsCutter, operationManager, expressionAnalyzer) {
    this.listOfBracketsCutter = listOfBracketsCutter
    this.operationManager = operationManager
    this.expressionAnalyzer = expressionAnalyzer
  }

  eval = (expression) => this.calculate(this.expressionAnalyzer.getTokens(expression))
 
  calculate = (expression) => {
    if (expression.length == 1) return expression[0]
    else {
      expression = this._getSimplifiedExpression(expression)
      const [symbol, subExpressions] = this.operationManager.getSymbolAndSubExpressions(expression)
      const args = subExpressions.map(subExpression => this.calculate(subExpression))
      return this.operationManager.execute(symbol, args)
    }
  }

  _getSimplifiedExpression = (expression) => {
    for (let i = 0; i < expression.length; i++) {
      for (let bracketsCutter of this.listOfBracketsCutter) {
        if (bracketsCutter.isOpeningBracket(expression[i])) {
          const subExpression = bracketsCutter.getSubExpression(expression, i)
          expression.splice(i, subExpression.length + 2, this.calculate(subExpression))
        }
      }
    }
    return expression
  }
}


class ConvenientCalculator extends Calculator {
  constructor(listOfBracketsCutter, listOfOperations, expressionAnalyzer) {
    const operationManager = new ConvenientOperationManager(listOfOperations)
    super(listOfBracketsCutter, operationManager, expressionAnalyzer)
  }
}

export { ConvenientCalculator, Calculator }
