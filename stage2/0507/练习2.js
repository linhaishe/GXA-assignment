var addBtn = document.querySelectorAll(".add");
var clearAllBtn = document.querySelector("#allclear");
var oLi = document.querySelectorAll("li");
var textAreaDiv = document.querySelector("#textArea");

//console.log(addBtn[1]);

for (var i = 0; i < oLi.length; i++) {
  addBtn[i].onclick = function () {
    var btn = event.target;
    //获得文本内容
    // console.log(btn.parentNode.childNodes[0].nodeValue);
    var text = btn.parentNode.childNodes[0].nodeValue;
    //创建节点
    var newDiv = document.createElement("div");
    var newALink = document.createElement("a");

    //创建内容
    var textNode = document.createTextNode(text);
    var deleteNode = document.createTextNode(" x");

    //div添加class属性
    newDiv.className = "textArea-list";

    //div添加内容节点
    newDiv.appendChild(textNode);

    //a节点添加内容
    newALink.appendChild(deleteNode);

    //a 节点添加属性
    newALink.href = "javascript:;";

    //div内添加a节点
    newDiv.appendChild(newALink);

    //区域内添加文本
    textAreaDiv.appendChild(newDiv);
  };

  //   var aLink = document.querySelectorAll("a");

  //   for (var j = 0; j < aLink.length; j++) {
  //     aLink[j].onclick = function () {
  //       // var parentNode = this.parentNode;
  //       console.log(11111);
  //     };
  //   }
}

clearAllBtn.onclick = function () {
  textAreaDiv.innerHTML = "";
};
