// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // reverse the number - turn into array - reverse array - join back into string
  let reversedInt = "";
  const num = n.toString().split("");
  for (let i = 0; i < num.length; i++) {
    reversedInt = num[i] + reversedInt;
  }
  return parseInt(reversedInt) * Math.sign(n);
}
// function reverseInt(n) {
//   // reverse the number - turn into array - reverse array - join back into string
//   const reversed = n.toString().split("").reverse().join("");
//   return parseInt(reversed) * Math.sign(n);
// }
module.exports = reverseInt;
clearInterval;
