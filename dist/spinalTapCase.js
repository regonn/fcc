'use strict';

var replaceSpaceReg = /(\w)\s(\w)/g;
function replaceSpace(_, firstChar, secondChar) {
  return [firstChar, secondChar].join('-');
}

var replaceUpperReg = /([A-Z])/g;
function replaceUpper(_, upperChar) {
  return upperChar.toLowerCase();
}

var replaceCamelReg = /([a-z])([A-Z])/g;
function replaceCamel(_, firstChar, secondChar) {
  return [firstChar, secondChar].join('-');
}

var replaceUnderBarReg = /(\w)_(\w)/g;
function replaceUnderBar(_, firstChar, secondChar) {
  return [firstChar, secondChar].join('-');
}

function spinalCase(str) {
  return str.replace(replaceSpaceReg, replaceSpace).replace(replaceCamelReg, replaceCamel).replace(replaceUnderBarReg, replaceUnderBar).replace(replaceUpperReg, replaceUpper);
}

console.log(spinalCase('This Is Spinal Tap'));