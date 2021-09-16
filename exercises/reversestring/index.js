// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Array Solution #1
// function reverse(str) {
//   const arr = str.split("");
//   arr.reverse();
//   return arr.join("");
// }
// Short syntax - ^
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// For of loop Solution #2
// function reverse(str) {
//   let reversed = "";
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// Reduce solution #3
// function reverse(str) {
//  return str.split("").reduce((reversed, character) => {
//       return character + reversed
//   }, "");
// }

// Solution #4 favorite
function reverse(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}

module.exports = reverse;
