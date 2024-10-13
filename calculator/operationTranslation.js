
class TranslatorOfOperations {
  constructor(listOfOperations) {
    this.accordance = this._getDictionary(listOfOperations)
  }

  _getDictionary = (listOfOperations) => Object.fromEntries(listOfOperations.map(operation => [operation.symbol, operation]))

  getOperationBySymbol = (symbol) => this.accordance[symbol]

  getSymbols = () => Object.keys(this.accordance)
}

export {TranslatorOfOperations}
