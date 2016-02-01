function unite (argument) {
  var returnVal = []
  for (var i = 0; i < arguments.length; i++) {
    returnVal = concatWithSortedOrder(returnVal, arguments[i])
  }
  return returnVal
}

function concatWithSortedOrder (arr1, arr2) {
  return arr2.reduce((previousElement, currentValue) => {
    if (previousElement.indexOf(currentValue) === -1) {
      return previousElement.concat([currentValue])
    } else {
      return previousElement
    }
  }, arr1)
}

console.log(unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
