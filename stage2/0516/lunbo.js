window.onload = function () {
  var container = document.getElementById("container");
  var list = document.getElementById("list");
  var buttons = document.getElementById("buttons").getElementsByTagName("span");
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  var index = 1;
  var len = 5;
  //
  var animated = false;
  var interval = 3000;
  var timer;
  function animate(offset) {
    //如果偏移量为0，则不进行轮播
    if (offset == 0) {
      return;
    }
    animated = true;
    var time = 300;
    var inteval = 10;
    var speed = offset / (time / inteval);
    var left = parseInt(list.style.left) + offset;
    //go()函数是开始轮播
    var go = function () {
      if (
        (speed > 0 && parseInt(list.style.left) < left) ||
        (speed < 0 && parseInt(list.style.left) > left)
      ) {
        list.style.left = parseInt(list.style.left) + speed + "px";
        setTimeout(go, inteval);
      } else {
        list.style.left = left + "px";
        //如果为第一幅图片，再按<<的按钮，直接跳到最后一个图片
        if (left > -300) {
          list.style.left = -300 * len + "px";
        }
        //如果为最后一幅图片，再按>>的按钮，直接跳到第一个图片
        if (left < -300 * len) {
          list.style.left = "-300px";
        }
        animated = false;
      }
    };
    go();
  }
  //小圆点的设计
  function showButton() {
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].className == "on") {
        buttons[i].className = "";
        break;
      }
    }
    buttons[index - 1].className = "on";
  }
  //自动播放，设置定时器，相当于没3秒点击>>按钮
  function play() {
    timer = setTimeout(function () {
      next.onclick();
      play();
    }, interval);
  }
  //清除定时器
  function stop() {
    clearTimeout(timer);
  }

  next.onclick = function () {
    if (animated) {
      return;
    }
    if (index == 5) {
      index = 1;
    } else {
      index += 1;
    }
    animate(-300);
    showButton();
  };
  //点击向前的箭头，执行animate函数，翻页
  prev.onclick = function () {
    if (animated) {
      return;
    }
    if (index == 1) {
      index = 5;
    } else {
      index -= 1;
    }
    animate(300);
    showButton();
  };
  // 图片滚动，小圆点要相应的变化
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      if (animated) {
        return;
      }
      if (this.className == "on") {
        return;
      }
      var myIndex = parseInt(this.getAttribute("index"));
      var offset = -300 * (myIndex - index);

      animate(offset);
      index = myIndex;
      showButton();
    };
  }
  //鼠标放到轮播图上，动画停止
  container.onmouseover = stop;
  //鼠标移开，动画开始
  container.onmouseout = play;

  play();
};
