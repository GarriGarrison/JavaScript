const inc = (function () {
  let counter = 0
  return function () {
    return counter += 1
  }
})()

//* Тесты
console.log(inc()) // 1
console.log(inc()) // 2
