class Chart {
  constructor(name, json) {
    this.box = document.querySelector(name);
    this.json = json;
    //获取轮播图的属性
    this.outer = document.querySelector(name + " .outer"); //注意加空格
    this.left = document.querySelector(name + " .left");
    this.right = document.querySelector(name + " .right");
    //初始化
    this.timer = null; //自动播放
    this.iNow = 0;
    this.init();
  }

  init() {
    const that = this; //保存一个this

    console.log(this.json.a);
    if (this.json.a) {
      console.log(1);
    }

    //克隆第一张放到最后
    let uLi = that.outer.children[0].cloneNode(true);
    that.outer.appendChild(uLi);

    that.outer.style.width =
      that.outer.children.length * that.outer.children[0].offsetWidth + "px";

    //点击左右滑动
    if (that.json.slide) {
      that.left.style.display = "block";
      that.right.style.display = "block";

      this.left.onclick = () => {
        that.leftGo();
      };
      this.right.onclick = () => {
        that.rightGo();
      };
    }

    //自动播放
    if (that.json.move) {
      that.moveGo();

      //鼠标移入移出
      if (that.json.loop) {
        that.box.onmousemove = () => {
          clearInterval(that.timer);
        };
        that.box.onmouseout = () => {
          that.moveGo();
        };
      }
    }

    //展示小圆点
    if (that.json.nav) {
      let oOL = document.createElement("ol");
      oOL.className = "oOl";
      oOL.style.left = that.json.distanceLeft + "px";
      that.box.appendChild(oOL);
      for (let i = 0; i < that.outer.children.length - 1; i++) {
        let oLi = document.createElement("li");
        oLi.className = "oLi";
        oLi.style.marginLeft = that.json.distance + "px";
        oOL.appendChild(oLi);
      }
      oOL.style.width =
        (that.outer.children.length - 1) *
          document.querySelector(".oLi").offsetWidth +
        that.json.distance * that.outer.children.length +
        "px";

      that.alike();
    }
  }

  leftGo() {
    this.iNow++;

    if (this.iNow >= this.outer.children.length) {
      this.iNow = 1;
      this.outer.style.transition = "0s all linear";
      this.outer.style.left = 0;
    }

    this.outer.style.left =
      -this.iNow * this.outer.children[0].offsetWidth + "px";
    this.outer.style.transition = ".3s all linear";

    this.alike();
  }

  rightGo() {
    this.iNow--;
    if (this.iNow <= -1) {
      this.iNow = this.outer.children.length - 1;
      this.outer.style.transition = "0s all linear";
      this.outer.style.left =
        -(this.outer.children.length - 1) * this.outer.children[0].offsetWidth +
        "px";
      this.iNow = this.outer.children.length - 2;
    }
    this.outer.style.left =
      -this.iNow * this.outer.children[0].offsetWidth + "px";
    this.outer.style.transition = "0.3s all linear";
  }

  moveGo() {
    const that = this;
    this.timer = setInterval(() => {
      that.leftGo();
    }, that.json.speed || 1500);
  }

  //圆点对应每张图片
  alike() {
    let li = document.querySelectorAll(".oLi");
    for (let i = 0; i < li.length; i++) {
      li[i].classList.remove("color");
      if (i == this.iNow) {
        li[i].classList.add("color");
      } else {
        li[i].classList.remove("color");
      }
      //特殊：最后一张的时候是第一个
      if (this.iNow == li.length) {
        li[0].classList.add("color");
      }

      //小圆点点击事件
      if (this.json.event) {
        li[i].onclick = () => {
          for (let i = 0; i < li.length; i++) {
            li[i].classList.remove("color");
          }
          li[i].classList.add("color");
          this.outer.style.left =
            -i * this.outer.children[0].offsetWidth + "px";
        };
      }
    }
  }
}

new Chart(".box", {
  move: true, //自动轮播
  speed: 1500, //轮播速度
  loop: true, //鼠标移入移出效果
  slide: true, //点击左右滑动效果
  nav: true, //展示小圆点
  distanceLeft: 76, //小圆点距离左边的距离
  distance: 20, //小圆点间距
  event: true, //小圆点事件
});
