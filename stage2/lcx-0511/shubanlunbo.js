var oTop = document.getElementById("up");
var oDown = document.getElementById("down");
var oUl = document.querySelector("ul");
var oDiv = document.querySelector("div");
var aLi = document.querySelectorAll("ol li");

var n = 0;

//图片移动

function move() {
  for (var i = 0; i < aLi.length; i++) {
    //清除所有样式
    aLi[i].className = "";
  }
  aLi[n].className = "active";
  //区分childrennodes and children
  oUl.style.top = -n * oUl.children[0].offsetHeight + "px";
}

function toTop() {
  n++;
  if (n >= oUl.children.length) {
    n = 0;
  }
  move();
}

oTop.onclick = toTop;

oDown.onclick = function () {
  n--;
  if (n <= -1) {
    n = oUl.children.length - 1;
  }
  move();
};

var timer = setInterval(toTop, 2000);
oDiv.onmouseover = function () {
  clearInterval(timer);
};
oDiv.onmouseout = function () {
  timer = setInterval(toTop, 2000);
};
for (var i = 0; i < aLi.length; i++) {
  aLi[i].dataset.index = i;
  aLi[i].onclick = function () {
    n = this.dataset.index;
    move();
  };
}
