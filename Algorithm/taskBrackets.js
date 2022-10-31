function checkBracketsOneType(str) {
  const stack = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i])
    } else {
      const lastEl = stack.pop()
      if (lastEl === undefined) {
        return false
      }
    }
  }
  return stack.length === 0 ? true : false
}

function checkBracketsThreeType(str) {
  const braces = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  const stack = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push(str[i])
    } else {
      const lastEl = stack.pop()
      if (str[i] !== braces[lastEl]) {
        return false
      }
    }
  }

  return stack.length === 0 ? true : false
}

//* Тесты
console.log(checkBracketsOneType('((()))')) //TRUE
console.log(checkBracketsOneType('()()()')) //TRUE
console.log(checkBracketsOneType('(()))')) //FALSE
console.log(checkBracketsOneType('()()())')) //FALSE
console.log(checkBracketsOneType('()))')) //FALSE

console.log(checkBracketsThreeType('([)]')) //FALSE
console.log(checkBracketsThreeType('{([])}')) //TRUE
console.log(checkBracketsThreeType('()[]{}')) //TRUE
