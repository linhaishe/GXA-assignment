//双色球
//获取随机整数

// const randomNum = function (n, m) {
//   return parseInt(Math.random() * (m - n) + n);
// };

// const noEqual = function (num, arr) {
//   return arr.includes(num);
// };

const randomNum = (n, m) => parseInt(Math.random() * (m - n) + n);
const noEqual = (num, arr) => arr.includes(num);

const arr = [];

while (arr.length < 6) {
  const num = randomNum(1, 34);
  if (noEqual(num, arr) == false) {
    arr.push(num);
  }
}

console.log(arr);
