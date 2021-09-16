// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// For of loop solution #1
// function palindrome(str) {
//     let reverse = "";
//     for (character of str) {
//       reverse = character + reverse;
//     }
//     if (reverse === str) {
//       return true;
//     } else return false;
//   }

// Array Method Solution #2
// function palindrome(str) {
//   const reverse = str.split("").reverse().join("");
//   return str === reverse;
// }

// Array .every() Solution #3
// function palindrome(str) {
//     return str.split("").every((character, index) => {
//       return character === str[str.length - index - 1];
//     });
//   }

// Favorite Solution #4
function palindrome(str) {
  let reverse = "";
  for (let i = 0; i < str.length; i++) {
    reverse = str[i] + reverse;
  }
  if (reverse === str) {
    return true;
  } else return false;
}

module.exports = palindrome;
