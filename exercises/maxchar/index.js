// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0;
  let maxKey = "";
  let obj = {};

  for (let char of str) {
    if (!obj[char]) {
      obj[char] = 1;
    } else obj[char]++;
  }
  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      maxKey = char;
    }
  }
  return maxKey;
}

module.exports = maxChar;
