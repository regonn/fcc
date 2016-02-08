// TODO 再帰的に書けるように
function addFibs (arr) {
  if (arr.length >= 2) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    return arr
  } else {
    arr.push(1)
    return arr
  }
}

function makeFibsUnder (num) {
  if (num > 1) {
    var fibs = [1]
    while (fibs[fibs.length - 1] <= num) {
      fibs = addFibs(fibs)
    }
    fibs.pop()
    return fibs
  } else {
    return [num]
  }
}

function sumFibs (num) {
  return makeFibsUnder(num).filter((fibNum) => {
    return fibNum % 2 === 1
  }).reduce((previousVal, currentVal) => {
    return previousVal + currentVal
  })
}

console.log(sumFibs(75025))
