const fs = require('fs').promises

class Model {
  constructor(){
    this.gamesWay = './topics'
    this.gamesFile = {}
  }

  readTopics() {
    return fs.readdir(this.gamesWay).then((data) => {
      for (let i = 1; i <= data.length; i++) {
        this.gamesFile[i] = data[i-1]
      }
      
      let themeStr = ''
      for (let i = 0; i < data.length; i++) {
        themeStr += `${i+1}. ${data[i].replace(/_flashcard_data.txt/gim, '')}\n`
      }
      return themeStr
    })
  }

  playGame(numGame) {
    let playGame = this.gamesFile[numGame]

    return fs.readFile(`${this.gamesWay}/${playGame}`, 'utf8').then((data) => {
      let arr = data.split('\n')
      let arr2 = []
      let result = []
      let obj2 = {}
      for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] != undefined && arr[i + 1] != undefined) {
          arr2.push([arr[i], arr[i + 1]])
        }
      }
      
      for (let i = 0; i < arr2.length; i++) {
        let newOb = {
          question: arr2[i][0],
          answer: arr2[i][1],
        }
        result.push(newOb)
      }   
      return result
    })
  }
}

module.exports = Model
