//双色球

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

//单词变驼峰

var str = "hello world yoyo";
var arr = str.split(" "); //['hello','world']
var res = "";
for (var i = 0; i < arr.length; i++) {
  if (i == 0) {
    res += arr[i];
  } else {
    res = res + arr[i][0].toUpperCase() + arr[i].substring(1);
  }
}
console.log(res);
