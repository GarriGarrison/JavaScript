/*
Напишите функцию с именем sumIntervals/ sum_intervals(), которая принимает массив интервалов и возвращает сумму всех длин интервалов. Перекрывающиеся интервалы следует учитывать только один раз.

Интервалы
Интервалы представлены парой целых чисел в виде массива. Первое значение интервала всегда будет меньше второго значения. Пример интервала: [1, 5]это интервал от 1 до 5. Длина этого интервала равна 4.

Перекрывающиеся интервалы
Список, содержащий перекрывающиеся интервалы:

[
   [1,4],
   [7, 10],
   [3, 5]
]
Сумма длин этих интервалов равна 7. Поскольку [1, 4] и [3, 5] перекрываются, мы можем рассматривать интервал как [1, 5], длина которого равна 4.

Примеры:
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ) => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ) => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ) => 19

sumIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] ) => 100000030

*/

/**
 * Вспомогательная функция для получения уникальных отрезков
 * @param {Array<pair-number>} intervals - массив отрезков
 * @returns {Array<pair-number>} uniqueIntervals - массив уникальных отрезков
 */
function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  let uniqueIntervals = [intervals[0]]

  for (const interval of intervals) {
    let recent = uniqueIntervals.at(-1) // uniqueIntervals[uniqueIntervals.length - 1]

    if (recent[1] >= interval[0]) {
      recent[1] = Math.max(recent[1], interval[1])
    } else {
      uniqueIntervals.push(interval)
    }
  }

  return uniqueIntervals
}

/**
 * Расчёт суммарной длинны отрезков
 * @param {Array<pair-number>} intervals - массив отрезков
 * @returns {number} - суммарная длина отрезков
 */
function sumIntervals(intervals) {
  if (intervals.length < 2) {
    return intervals
  }

  const uniqueIntervals = mergeIntervals(intervals)

  let sum = 0

  for (const interval of uniqueIntervals) {
    sum += interval[1] - interval[0]
  }

  return sum
}

//* Проверка функции mergeIntervals
console.log('Проверка функции mergeIntervals')
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
) //[1, 6] [8, 10] [15, 18]

console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ])
) //[1, 5]

console.log(
  mergeIntervals([
    [11, 12],
    [2, 3],
    [5, 7],
    [1, 4],
    [8, 10],
    [6, 8],
  ])
) //[1, 4] [5, 10] [11, 12]

//* Проверка функции sumIntervals
console.log('\nПроверка функции sumIntervals')
console.log(
  sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15],
  ])
) // 9

console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ])
) // 19

console.log(
  sumIntervals([
    [0, 20],
    [-100000000, 10],
    [30, 40],
  ])
) // 100000030
