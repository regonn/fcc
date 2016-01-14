'use strict';

function translate(str) {
  var separetedStrings = separateTopConsonant(str);
  if (separetedStrings[0]) {
    return separetedStrings.reverse().join('') + 'ay';
  } else {
    return separetedStrings.reverse().join('') + 'way';
  }
}

function separateTopConsonant(str) {
  var strings = str.split('');
  var consonants = [];
  var vowels = ['a', 'i', 'u', 'e', 'o'];
  while (vowels.indexOf(strings[0]) === -1) {
    consonants.push(strings.shift());
  }
  return [consonants.join(''), strings.join('')];
}

console.log(translate('consonant'));