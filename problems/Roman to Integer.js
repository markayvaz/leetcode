/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbolCount = s.length;
  let res = 0;

  let symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const map = new Map();

  for (let i = 0; i < symbolCount; i++) {
        char = s.charAt(i);
  }
};

let res = romanToInt("IIII");

console.log(res);
