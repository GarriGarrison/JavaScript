class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
    this.newGame = '0'
    this.game = []
    this.score = 0
    this.totalScore = 0
  }

  async run() {
    await this.topicsMenu()  
    this.game = await this.model.playGame(this.newGame)
    this.totalScore = this.game.length

    for (let i = 0; i < this.game.length; i++) {
      const answer = await this.view.printInput('\n' + this.game[i].question)
      if (answer.toLowerCase() === this.game[i].answer.toLowerCase()) {
        this.score++
        this.view.printOutput(true)
      }
      else
        this.view.printOutput(false)
    }
    this.printEnd()
  }

  async topicsMenu() {
    let themeList = await this.model.readTopics()
    this.newGame = await this.view.printInput('Выберите тему: \n' + themeList)
  }

  printEnd() {
    let percent = Math.floor(this.score * 100 / this.totalScore)
    this.view.printResults(`${percent}`)
  }

}

module.exports = Controller
