function curry(func, length = func.length) {
  return (...args) => {
    if (args.length < length) {
      return curry(
        (...otherArgs) => func(...args, ...otherArgs),
        length - args.length
      )
    }

    return func(...args)
  }
}

function add(a, b, c) {
  return a + b + c
}

const curriedAdd = curry(add)

//* Тесты
console.log(curriedAdd(1)(2)(3)) // 6
console.log(curriedAdd(1, 2)(3)) // 6
console.log(curriedAdd(1)(2, 3)) // 6
console.log(curriedAdd(1, 2, 3)) // 6
