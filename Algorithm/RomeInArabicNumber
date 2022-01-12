// Сложность O(n), т.к. цикл -> n
function romeInArabicNumner(romeNum)
{
  const romeCount = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let result = 0
  let preNum = romeCount[romeNum[romeNum.length - 1]]

  result += preNum 

  for (let i = 1; i < romeNum.length; i++) {
    const num = romeCount[romeNum[romeNum.length - 1 - i]]

    if (num >= preNum)
      result += num
    else
      result -= num
    
    preNum = num
  }

  return result
}



//Тесты 
console.log(romeInArabicNumner('XVI'))
console.log(romeInArabicNumner('XIIV'))
console.log(romeInArabicNumner('VXIVVIX'))
console.log(romeInArabicNumner('CXLVLXC'))
console.log(romeInArabicNumner('CLXXVII'))
console.log(romeInArabicNumner('VLMIXCD'))
