var addBtn = document.querySelectorAll(".add");
var clearAllBtn = document.querySelectorAll("#allclear");
var oLi = document.querySelectorAll("li");

for (var i = 0; i < oLi.length; i++) {
  addBtn[i].onclick = function () {
    var newDiv = document.createElement("div");
    var newALink = document.createElement("a");
    var text = this[i].parentNode.innerHTML;
    console.log(text);
    var addText = document.createTextNode("This is new.");
  };
}
