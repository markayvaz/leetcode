/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbolCount = s.length;
  let res = 0;

  const symbols = new Map();

  symbols.set("I", 1);
  symbols.set("V", 5);
  symbols.set("X", 10);
  symbols.set("L", 50);
  symbols.set("C", 100);
  symbols.set("D", 500);
  symbols.set("M", 1000);

  const map = new Map();

  for (let i = 0; i < symbolCount; i++) {
    char = s.charAt(i);

    val = symbols.get(char);

    res += val;
  }

  return res;
};

let res = romanToInt("IIII");

console.log(res);
