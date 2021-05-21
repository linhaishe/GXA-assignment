var addBtn = document.querySelectorAll(".add");
var clearAllBtn = document.querySelector("#allclear");
var oLi = document.querySelectorAll("li");
var textAreaDiv = document.querySelector("#textArea");
//var aLink = document.querySelectorAll("a");
var aLink = document.getElementsByTagName("a");
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

    //创建事件监听,删除节点
    newALink.addEventListener("click", function () {
      textAreaDiv.removeChild(this.parentNode);
    });

    //div内添加a节点
    newDiv.appendChild(newALink);

    //区域内添加文本
    textAreaDiv.appendChild(newDiv);
  };
}

clearAllBtn.onclick = function () {
  textAreaDiv.innerHTML = "";
};

//因为页面已经将JS加载完毕，此时新增请求动态添加节点，自然获取不到。
//解决办法，直接在创建的时候添加事件监听事件即可
// for (var j = 0; j < aLink.length; j++) {
//   aLink[j].onclick = function () {
//     // var parentNode = this.parentNode;
//     console.log(11111);
//   };
// }
