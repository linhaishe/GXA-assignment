var oDiv = document.querySelector("div");
var imgs = document.querySelectorAll("img");
var oLi = document.querySelectorAll("li");
var n = 0;

function showOff() {
  imgs[n].className = "";
  oLi[n].className = "";
}

function showOn() {
  imgs[n].className = "active";
  for (var i = 0; i < oLi.length; i++) {
    oLi[i].className = "";
  }
  oLi[n].className = "active";
}

function showFn() {
  showOff();
  n++;
  if (n >= 5) {
    n = 0;
  }
  showOn();
}

var timer = setInterval(showFn, 2000);

oDiv.onmouseover = function () {
  clearInterval(timer);
};

oDiv.onmouseout = function () {
  timer = setInterval(showFn, 2000);
};

//点击事件未完成

for (var j = 0; j < oLi.length; j++) {
  oLi[j].dataset.index = j;
  oLi[j].onclick = function () {
    showOff(); //图片淡出
    n = this.dataset.index;
    showOn(); //图片淡出
  };
}
