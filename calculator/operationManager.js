import { TranslatorOfOperations } from './operationTranslation.js'
import { PrioritySorter } from './prioritySorting.js'


class OperationManager {
  constructor(translatorOfOperations, prioritySorter) {
    this.translatorOfOperations = translatorOfOperations
    this.prioritySorter = prioritySorter
  }

  execute = (symbol, args) => {
    const operation = this.translatorOfOperations.getOperationBySymbol(symbol)
    return operation.eval(...args)
  }
 
  getSymbolAndSubExpressions = (expression) => {
    const {symbol, index} = this.getOperationRercords(expression).at(-1)
    const operation = this.translatorOfOperations.getOperationBySymbol(symbol)
    return [symbol, operation.getArgs(expression, index)]
  }

  getOperationRercords = (expression) => {
    const operationRecords = this._getOperationRercords(expression)
    return this.prioritySorter.getSorted(operationRecords)
  }

  _getOperationRercords = (expression) => {
    const validSymbols = this.translatorOfOperations.getSymbols()
    let operationRecords = []

    expression.forEach((symbol, index) => {
      if (validSymbols.includes(symbol)) {
        operationRecords.push({symbol, index})
      }
    })
    return operationRecords
  }

}

class ConvenientOperationManager extends OperationManager {
  constructor(listOfOperations) {
    const prioritiesOfSymbols = Object.fromEntries(listOfOperations.map((operation, i) => [operation.symbol, parseInt(i)]))
    super(new TranslatorOfOperations(listOfOperations), new PrioritySorter(prioritiesOfSymbols))
  }
}

export {ConvenientOperationManager, OperationManager}
