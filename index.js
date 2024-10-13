import * as readline from 'node:readline';
import { Calculator } from './calculator/index.js'
import {
  stdin as input,
  stdout as output,
} from 'node:process';



class RecursiveCalculator {
  constructor(calculator) {
    this.calculator = calculator
  }

  eval = (expression) => this.calculator.eval(expression)

  run = () => {
    const rl = readline.createInterface({ input, output });
    this.recursiveCalculation(rl)
  }

  recursiveCalculation = (rl) => {
    rl.question('>>> ', (expression) => {
      if (expression == 'q') {
        rl.close()
        return
      }
      console.log(this.eval(expression))
      this.recursiveCalculation(rl)
    });
  }

}



const app = (args) => {
  const calculator = new Calculator()
  
  if (args[0] == '-i') {
    new RecursiveCalculator(calculator).run()
  }
  else {
    console.log(calculator.eval(args[0]))
  }
}

app(process.argv.slice(2))
