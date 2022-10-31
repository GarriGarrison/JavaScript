//* Сложность O(n*log(n)), т.к. это сложность функции sort
function anagramI(word1, word2) {
  if (word1.length !== word2.length) return false

  return word1.split('').sort().join() === word2.split('').sort().join()
}

//* Сложность O(n), т.к. три цикла -> 3n -> n
function anagramII(word1, word2) {
  if (word1.length !== word2.length) return false

  const table1 = {}
  const table2 = {}
  let counter = 0

  for (const char of word1) {
    if (table1[char]) table1[char]++
    else table1[char] = 1
  }

  for (const char of word2) {
    if (table2[char]) table2[char]++
    else table2[char] = 1
  }

  for (const key in table1) {
    if (table1[key] !== table2[key]) return false
    else counter += table1[key]
  }

  return counter === word1.length
}

//* Сложность O(n), тоже самое что и II, только сборка hex-таблицы через метод Reduce
function anagramIII(word1, word2) {
  if (word1.length !== word2.length) return false

  let counter = 0

  const table1 = word1.split('').reduce((acc, el) => {
    acc[el] ? acc[el]++ : (acc[el] = 1)
    return acc
  }, {})

  const table2 = word2.split('').reduce((acc, el) => {
    acc[el] ? acc[el]++ : (acc[el] = 1)
    return acc
  }, {})

  for (const key in table1) {
    if (table1[key] !== table2[key]) return false
    else counter += table1[key]
  }

  return counter === word1.length
}

//* Тесты
console.log(anagramIII('lemon', 'melon')) //TRUE
console.log(anagramIII('false', 'fallse')) //FALSE
console.log(anagramIII('улица', 'луция')) //FALSE
console.log(anagramIII('приказ', 'каприз')) //TRUE
console.log(anagramIII('атлас', 'салат')) //TRUE
console.log(anagramIII('класс', 'слакс')) //TRUE
