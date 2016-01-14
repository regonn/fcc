'use strict';

function fearNotLetter(str) {
  var codeNumbers = str.split('').map(function (element) {
    return element.charCodeAt(0);
  });
  var minNumber = Math.min.apply(null, codeNumbers);
  var maxNumber = Math.max.apply(null, codeNumbers);
  for (var i = minNumber; i < maxNumber; i++) {
    if (codeNumbers.indexOf(i) === -1) {
      return String.fromCharCode(i);
    }
  }
  return undefined;
}

console.log(fearNotLetter('abce'));