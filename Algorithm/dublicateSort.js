const words = [
  'banana',
  'grapefruit',
  'banana',
  'grapefruit',
  'banana',
  'orange',
  'banana',
]
// => ['banana', 'grapefruit', 'orange']  -- сортировка по кол-ву повторений


//* Сложность O(n), т.к. два цикла -> 2n -> n
function sortRepeat(array) {
  const dictionary = array.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  }, {})

  const keys = Object.keys(dictionary)
  return keys.sort((a, b) => dictionary[b] - dictionary[a])
}

//* Тест
console.log(sortRepeat(words)) // ['banana', 'grapefruit', 'orange']
