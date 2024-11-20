function str_len(str, len) {
  return str.length <= len ? true : false;
};

// console.log(str_len('строка строка строка строка', 20));
// console.log(str_len('строка', 3));
// console.log(str_len('строка', 15));

function isPalindrome(str) {
  str = str.toLowerCase().replaceAll(' ', '');
  return str === str.split('').reverse().join('') ? true : false;
}

// console.log(isPalindrome('Лёша на полке клопа нашёл '));
// console.log(isPalindrome('топот'));
// console.log(isPalindrome('ДовОд'));
// console.log(isPalindrome('Кекс'));


function to_Num (str) {
  str = str.toString();
  let new_num = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i])) && !(str[i] == "0" && new_num == "")) {
      new_num += str[i];
    }
  }
  return new_num != "" ? new_num : NaN;
}

// console.log(to_Num('2023 год'));
// console.log(to_Num('ECMAScript 2022'));
// console.log(to_Num('1 кефир, 0.5 батона'));
// console.log(to_Num('агент 007'));
// console.log(to_Num('2023 год'));
// console.log(to_Num(2023));
// console.log(to_Num(-1));
// console.log(to_Num(1.5))
