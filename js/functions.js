/* eslint-disable no-unused-vars */

function checkStrLen(str, len) {
  return str.length <= len;
}

function isPalindrome(str) {
  const normalizedStr = str.toLowerCase().replaceAll(" ", "");
  return normalizedStr === normalizedStr.split("").reverse().join("");
}

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

