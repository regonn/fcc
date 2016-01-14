//TODO 引数が複数対応
function unite (arr1, arr2, arr3) {
  var concat1And2 = concatWithSortedOrder(arr1, arr2)
  return concatWithSortedOrder(concat1And2, arr3)
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

console.log(unite([1, 3, 2], [5, 2, 1, 4], [2, 1]))
