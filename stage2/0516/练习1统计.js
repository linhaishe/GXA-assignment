var textValue = document.querySelector("#txt1").value.split(" ");
var textAreaInput = document.querySelector("#txt2");
var btn = document.querySelector("input");
var price = {
  运动鞋: 10,
  篮球鞋: 20,
  足球鞋: 30,
  衣服: 40,
  休闲鞋: 50,
  帆布鞋: 60,
  跑步鞋: 70,
};
console.log("price", price);
//获得产品数量对象的方法

function getWordCnt(arr) {
  var obj = {};
  //var itemArr = [];
  for (var i = 0, l = arr.length; i < l; i++) {
    var item = arr[i];
    obj[item] = obj[item] + 1 || 1;
  }

  //itemArr.push(obj);
  return obj;
}

//获得产品数量对象

var item = getWordCnt(textValue);
console.log("item", item);

// var item = { 休闲鞋: 4, 帆布鞋: 4, 篮球鞋: 1, 衣服: 4, 足球鞋: 1 };

//根据对象属性值排序
var itemObj = Object.keys(item).sort(function (a, b) {
  return item[a] - item[b];
});

console.log("itemObj", itemObj);

var itemString = "";
var itemTotalPrice = "";

// for (i in itemObj) {
//   itemString += itemObj[i] + ":" + item[itemObj[i]] + ",";
// }

for (var i = 0; i < itemObj.length; i++) {
  itemString += itemObj[i] + ":" + item[itemObj[i]] + ",";
  itemTotalPrice +=
    itemObj[i] + ":" + price[itemObj[i]] * item[itemObj[i]] + ",";
}
console.log("itemString", itemString);
console.log("itemTotalPrice", itemTotalPrice);

btn.onclick = function () {
  textAreaInput.innerHTML =
    "数量计算为:\n\n" + itemString + "\n\n总价格计算:\n\n" + itemTotalPrice;
};

//价格计算
