// foreach函数封装
function forEach(array, fn) {
  for (var i = 0; i < array.length; i++) {
    fn(array[i], i);
  }
}

var arr = [1, 2, 3, 3, 4, 4, 5];

forEach(arr, function (v, i) {
  console.log(v, i);
});

// map(arr, function (v, i) {});
// filter(arr, function (v, i) {});
// var arr2=arr.map(function(v,i){
//     console.log(v,i)
//     return i+v;
// })
// console.log(arr2);

// var arr2 = arr.filter(function (v, i) {
//   console.log(v, i);
//   return i < 3;
// });
// console.log(arr2);
