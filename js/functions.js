/* eslint-disable no-unused-vars */

function checkStrLen(str, len) {
  return str.length <= len;
}

// console.log(checkStrLen('строка строка строка строка', 20));
// console.log(checkStrLen('строка', 3));
// console.log(checkStrLen('строка', 15));

function isPalindrome(str) {
  const normalizedStr = str.toLowerCase().replaceAll(" ", "");
  return normalizedStr === normalizedStr.split("").reverse().join("");
}

// console.log(isPalindrome('Лёша на полке клопа нашёл '));
// console.log(isPalindrome('топот'));
// console.log(isPalindrome('ДовОд'));
// console.log(isPalindrome('Кекс'));


function toNum(inputValue) {
  const str = inputValue.toString();
  let newNum = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i], 10))) {
      newNum += str[i];
    }
  }
  return newNum !== "" ? parseInt(newNum, 10) : NaN;
}

//console.log(toNum('2023 год'));
// console.log(toNum('ECMAScript 2022'));
// console.log(toNum('1 кефир, 0.5 батона'));
// console.log(toNum('агент 007'));
// console.log(toNum('2023 год'));
// console.log(toNum(2023));
// console.log(toNum(-1));
// console.log(toNum(1.5))
