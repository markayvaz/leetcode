/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  const x2 = parseInt(x.toString().split("").reverse().join(""));

  if (x === x2 || x / x2 === 1) {
    return true;
  }

  return false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
