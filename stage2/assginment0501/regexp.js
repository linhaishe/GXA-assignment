/*
表单验证
汉字名字
手机号
qq
密码    字母 + 数字 +首字母大写 + 6-12位  可以有$~!这三个特殊字符
非空验证
*/

//表单验证
var oInp = document.getElementsByTagName("input")[0];
var reg = /[^0-9]/;
oInp.onblur = function () {
  var str = this.value;
  alert(reg.test(str));
};

// 汉字名字

var chineseName = document.getElementById("chineseName");
var chineseNameReg = /^[\u4e00-\u9fa5]{2,6}$/;
chineseName.onblur = function () {
  var str = chineseName.value;
  alert(chineseNameReg.test(str));
};
// 手机号
var phoneNum = document.getElementById("phoneNum");
var phoneNumReg = /^1[3-9]\d{9}$/;
phoneNum.onblur = function () {
  var str = phoneNum.value;
  alert(phoneNumReg.test(str));
};

//qq

var qqNum = document.getElementById("qqNum");
var qqNummReg = /^[1-9]\d{4,9}$/;

qqNum.onblur = function () {
  var str = qqNum.value;
  alert(qqNummReg.test(str));
};

//密码
var psw = document.getElementById("psw");
var pswReg = /^[1-9]\d{4,9}$/;

psw.onblur = function () {
  var str = psw.value;
  alert(pswReg.test(str));
};

//非空验证
var content = document.getElementById("content");
var contentReg；

content.onblur = function () {
  var str = content.value;
  alert(contentReg.test(str));
};
