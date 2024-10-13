import { Cos, Sin, Addition, Difference, Division, Multiplication, Exponentiation } from './operations/index.js'
import { MathLexicalAnalyzer } from './lexicalAnalysis/index.js'
import { BracketsCutter } from './bracketsCutting.js'
import { ConvenientCalculator } from './calculator.js'


class DefaultCalculator extends ConvenientCalculator {
  constructor() {
    const listOfOperations = [
      new Cos(),
      new Sin(),
      new Exponentiation(),
      new Multiplication(),
      new Division(),
      new Addition(),
      new Difference(),
    ]
    super(
      [new BracketsCutter('(', ')'), new BracketsCutter('[', ']')], 
      listOfOperations,
      new MathLexicalAnalyzer(listOfOperations.map(operation => operation.symbol)),
    )
  }
}

export { DefaultCalculator }
