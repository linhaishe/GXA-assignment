var arr2 = [1, 2, 3, 4, 4, 5, 5];

// Array.prototype.myFilter = function (callback) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// };

// arr.myFilter((item) => {
//   return item > 3;
// });

function filterFunc(arr, fnFilter) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (fnFilter(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
}

var ans = filterFunc(arr2, function (item) {
  return item > 3;
});

console.log(ans);
