Date.prototype.getCNDay = function () {
  var day = this.getDay();
  if (day == 0) {
    return "星期日";
  }

  if (day == 1) {
    return "星期一";
  }

  if (day == 2) {
    return "星期二";
  }

  if (day == 3) {
    return "星期三";
  }

  if (day == 4) {
    return "星期四";
  }

  if (day == 5) {
    return "星期五";
  }

  if (day == 6) {
    return "星期六";
  }
};

Date.prototype.getCNDay2 = function () {
  return "星期" + "日一二三四五六".charAt(this.getDay());
};

var oDate = new Date();
//oDate.getCNDay();
oDate.getDay();
console.log(oDate.getCNDay());
console.log(oDate.getCNDay2());

//toString,检测数据类型

function testType(val) {
  let str = Object.prototype.toString.call(val).split(" ")[1];
  return str.substring(0, str.length - 1);
}

console.log(testType([1223]));
