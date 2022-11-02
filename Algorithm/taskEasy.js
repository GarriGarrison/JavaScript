/**
 * 1. Определить являются ли сторки анаграммой
 * Состояь из одних и тех же символов
 *  listen -> silent
 */
function isAnagram(str1, str2) {
  //* Сложность O(n), т.к. три цикла -> 3n -> n
  if (str1.length !== str2.length) {
    return false
  }
  const dict1 = str1.split('').reduce((acc, char) => {
    acc[char] ? acc[char]++ : (acc[char] = 1)
    return acc
  }, {})

  const dict2 = str2.split('').reduce((acc, char) => {
    acc[char] ? acc[char]++ : (acc[char] = 1)
    return acc
  }, {})

  for (const key in dict1) {
    if (dict1[key] !== dict2[key]) {
      return false
    }
  }

  return true

  //* 2-й способ
  //* Сложность O(n*log(n)), т.к. это сложность функции sort
  //return str1.split('').sort().join() === str2.split('').sort().join()
}

//* Тесты
console.log('isAnagram')
console.log(isAnagram('listen', 'silent')) //TRUE
console.log(isAnagram('listen', 'siwent')) //FALSE
console.log('---------------------')

/**
 * Определить является ли строка полиндромом
 * Последовотельность символов, которая одинаково читается в обоих направлениях
 */
function isPolindrom(str1, str2) {
  //* Сложность O(n), один цикл
  if (str1.length !== str2.length) {
    return false
  }

  const pos_end = str1.length - 1
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[pos_end - i]) {
      return false
    }
  }

  return true

  //* 2-й способ
  //* Сложность O(n), один цикл
  return str1 === str2.split('').reverse().join('')
}

//* Тесты
console.log('isPolindrom')
console.log(isPolindrom('lemon', 'nomel')) //TRUE
console.log(isPolindrom('lemon', 'melon')) //FALSE
console.log('---------------------')

/**
 * Вывести n-е числи Фибоначи
 * Это ряд чисел, где каждое последующее является суммой двух преведущих
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
 */
//* Сложность O(n), один цикл
function fibRes(num) {
  if (num === 0) {
    return 0
  }

  if (num === 1 || num === 2) {
    return 1
  }

  let a = 1
  let b = 1

  for (let i = 3; i < num; i++) {
    const c = a + b
    a = b
    b = c
  }

  return b

  //* Рекурсия
  //return num <= 1 ? num : fib(num - 1) + fib(num - 2)
}

function fibInterval(num) {
  if (num === 0) {
    return [0]
  }

  if (num === 1) {
    return [0, 1]
  }

  const fib = [0, 1]

  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }

  return fib
}

//* Тесты
console.log('fibonacci')
console.log(fibRes(3)) // 3
console.log(fibInterval(3)) //[0, 1, 1, 2]
console.log(fibRes(8)) // 13
console.log(fibInterval(8)) //[0, 1, 1, 2, 3, 5, 8, 13]
console.log('---------------------')

/**
 * Найти самый длинный префикс среди заданных строк
 * [line, listen, library] -> li
 */
//* Сложность O(n), один цикл
function prefix(array) {
  array.sort()

  if (array[0] === array[array.length - 1]) {
    return array[0]
  }

  const word1 = array[0]
  const word2 = array[[array.length - 1]]
  const result = []

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] === word2[i]) {
      result.push(word1[i])
    } else {
      break
    }
  }

  return result.join('')
}

//* Тесты
console.log('prefix')
console.log(prefix(['line', 'listen', 'library'])) //li
console.log(prefix(['abc123', 'abcde123', 'abcdefg123'])) //abc
console.log(prefix(['abc123', 'abcde123', 'abcdefg123', 'ab'])) //ab
console.log('---------------------')
