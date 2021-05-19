// Array.prototype.myMap = function (callback) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(callback(this[i], i, this));
//   }
//   return arr;
// };

// arr.myMap((x) => x);
// console.log(arr.myMap((x) => x + 3));
// [1, 2, 3, 4, 5]

var arr2 = [1, 2, 3, 4, 4, 5, 5];

function mapFunc(arr, fnMap) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    res.push(fnMap(arr[i], i, arr));
  }
  return res;
}

var ans = mapFunc(arr2, function (x) {
  return x + 3;
});

console.log(ans);
