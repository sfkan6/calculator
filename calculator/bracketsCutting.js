

class BracketsCutter {

  constructor(openingBracket, closingBracket) {
    this.openingBracket = openingBracket
    this.closingBracket = closingBracket
  }

  getSubExpression = (expression, openingBracketIndex) => {
    const closingBracketIndex = this.getClosingBracketIndex(expression, openingBracketIndex)
    return expression.slice(openingBracketIndex + 1, closingBracketIndex)
  }

  isOpeningBracket = (char) => char == this.openingBracket

  getClosingBracketIndex = (expression, openingBracketIndex) => {
    let count = 1
    for (let i = openingBracketIndex + 1; i < expression.length; i++) {
      if (expression[i] === this.openingBracket) count++
      else if (expression[i] === this.closingBracket) count--
      if (count === 0) return i
    }
    return 0
  }
}


export {BracketsCutter}
