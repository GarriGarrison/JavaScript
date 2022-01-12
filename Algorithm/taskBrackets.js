function isValid(s) {
    const braces = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) stack.push(s[i])
        else if (s[i] in braces) stack.push(s[i])
        else if (braces[stack[stack.length - 1]] === s[i]) stack.pop()
        else return false
    }
  
    return stack.length === 0 ? true : false
}



//Тесты
console.log(isValid("([)]"))
console.log(isValid("{([])}"))
console.log(isValid("()[]{}"))
