/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let res = 0;

  const symbols = new Map();

  symbols.set("I", 1);
  symbols.set("IV", 4);
  symbols.set("V", 5);
  symbols.set("IX", 9);
  symbols.set("X", 10);
  symbols.set("XL", 40);
  symbols.set("L", 50);
  symbols.set("XC", 90);
  symbols.set("C", 100);
  symbols.set("CD", 400);
  symbols.set("D", 500);
  symbols.set("CM", 900);
  symbols.set("M", 1000);

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && symbols.has(`${s[i]}${s[i + 1]}`)) {
      console.log(`Read: ${s[i]}${s[i + 1]}`);
      res += symbols.get(`${s[i]}${s[i + 1]}`);
      i++;
    } else {
      console.log(`Read: ${s[i]}`);
      res += symbols.get(s[i]);
    }
  }

  return res;
};

console.log(romanToInt("MCMXCIV"));
