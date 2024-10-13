import { Calculator } from './calculator/index.js'



const main = () => {
  const calculator = new Calculator()
  const expression = '2 + 3 * 4 - 6 / 3'
  console.log(calculator.eval(expression))
}

main()
