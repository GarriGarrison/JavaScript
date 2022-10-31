const arr = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 7, 8, 9] // => [2, 3, 5, 8, 9]

//* Сложность O(n), т.к. два цикла -> 2n -> n
function filterRepeat(array) {
  const dictionary = {}
  const uniqueValue = []

  for (const el of array) {
    if (!(el in dictionary)) {
      dictionary[el] = 1
    } else {
      dictionary[el] += 1
    }
  }

  const keys = Object.keys(dictionary)
  keys.forEach((key) => {
    if (dictionary[key] === 1) {
      uniqueValue.push(key)
    }
  })

  return uniqueValue
}

//* Тест
console.log(filterRepeat(arr)) // => [2, 3, 5, 8, 9]
