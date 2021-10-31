const readline = require('readline');
class View {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
  }

  printInput(str) {
    return new Promise((resolve, reject) => {
      this.rl.question(`${str}\n`, (answer) => {
        resolve(answer)
      })
    })
  }

  printOutput(isTrue){
    if (isTrue)
      console.log('Правильный ответ!💪')
    else
      console.log('Не правильный ответ!🤦')
  }

  printResults(str) {
    console.log('\n\nИгра окончена, ваш счет:  '.toUpperCase() + str + '\n\n')
    this.rl.close()
  }
}

module.exports = View
