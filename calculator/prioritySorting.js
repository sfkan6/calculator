
class PrioritySorter {
  constructor(prioritiesOfSymbols) {
    this.prioritiesOfSymbols = prioritiesOfSymbols 
  }

  getSorted = (operations) => {
    let indexes = operations.map(operation => [this.prioritiesOfSymbols[operation.symbol], operation])
    indexes.sort((a, b) => a[0] - b[0])
    return indexes.map(([priority, operation]) => operation)
  }
}

export { PrioritySorter }
