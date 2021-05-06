var aInp = document.getElementsByTagName("input");
var oForm = document.getElementById("form");
var aSpan = document.getElementsByTagName("span");

var reg = {
  tel: /^1[3-9]\d{9}$/,
  psw: /^[A-Z][0-9a-zA-Z~!$]{5,11}$/,
  username: /^[\u4e00-\u9fa5]{2,6}$/,
  qq: /^[1-9]\d{4,9}$/,
};

var regTest = { tel: false, pass: false, user: false, qq: false };

for (var i = 0; i < aInp.length; i++) {
  aInp[i].dataset.index = i;
  aInp[i].onblur = function () {
    console.log(this.name);
    var str = this.value;
    if (str.trim() == "") {
      aSpan[this.dataset.index].innerHTML = this.dataset.null;
      aSpan[this.dataset.index].className = "red";
      regTest[this.name] = false;
    } else if (reg[this.name].test(str)) {
      aSpan[this.dataset.index].innerHTML = "right";
      aSpan[this.dataset.index].className = "green";
      regTest[this.name] = true;
    } else {
      aSpan[this.dataset.index].innerHTML = this.dataset.error;
      aSpan[this.dataset.index].className = "red";
      regTest[this.name] = false;
    }
  };
}

function submitFunc() {
  if (
    isTest.tel == false ||
    isTest.user == false ||
    isTest.pass == false ||
    isTest.qq == false
  ) {
    return false;
  }
}

function myFunction() {
  var node = document.createElement("LI");
  var txt = document.getElementById("example").value;
  var textnode = document.createTextNode(txt);
  node.appendChild(textnode);
  document.getElementById("para").appendChild(node);
}
