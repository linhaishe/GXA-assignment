var oDiv = document.querySelector("div");
var imgs = document.querySelectorAll("img");
var oLi = document.querySelectorAll("li");
var n = 0;

function showOff() {
  oLi[n].className = "";
  imgs[n].className = "";
}

function showOn() {
  imgs[n].className = "active";
  oLi[n].className = "active";
}

function showFn() {
  showOn();
  n++;
  if (n >= 5) {
    n = 0;
  }
  showOff();
}

var timer = setInterval(showFn, 2000);

oDiv.onmouseover = function () {
  clearInterval(timer);
};
oDiv.onmouseout = function () {
  slideon = setInterval(showFn, 2000);
};
