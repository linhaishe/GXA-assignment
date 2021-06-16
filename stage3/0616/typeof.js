testObj = (obj) => {
  if (typeof obj === "string") {
    return "String";
  }
  if (typeof obj === "number") {
    return "Number";
  }
  if (typeof obj === "boolean") {
    return "Boolean";
  }
  if (Object.prototype.toString.call(obj) === "[object Array]") {
    return "Array";
  }
  if (typeof obj === "function") {
    return "Function";
  }
  if (Object.prototype.toString.call(obj) === "[object Object]") {
    return "Object";
  }
  if (Object.prototype.toString.call(obj) === "[object RegExp]") {
    return "RegExp";
  }
};
console.log(testObj("test"));
console.log(testObj(123));
console.log(testObj(true));
console.log(testObj([1, 2, 3]));
console.log(testObj(function () {}));
console.log(testObj({}));
console.log(testObj(/\d|X|x/));
