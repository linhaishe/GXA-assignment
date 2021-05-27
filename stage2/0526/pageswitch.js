var imgs = $("#imgs");
var liPic = imgs.children().eq(0);
var picWidth = liPic.outerWidth();
var firstPicClone = imgs.children().eq(0).clone(true);
var n = 0;
var timer;
//将第一张图片添加在最后
imgs.append(firstPicClone);

//设置总图片的总宽度
imgs.width(picWidth * imgs.children().length);
//console.log(picWidth * imgs.children().length);

// $("#imgs").on(
//   "transitionend",
//   function () {
//     console.log("过渡运动完成");
//     if (n == imgs.children.length - 1) {
//       $(this).removeClass("move");
//       $(this).css("left", 0);
//       n = 0;
//     }
//   },
//   false
// );

//移动函数
function move() {
  n++;
  //小圆点移动事件
  for (var i = 0; i < $("#point li").length - 1; i++) {
    $("#point li").removeClass("active");
  }
  if (n >= imgs.children().length) {
    $("#imgs").removeClass("move");
    $("#imgs").css("left", 0);
    $("#point li").eq(0).addClass("active");
    n = 0;
  } else {
    $("#imgs").addClass("move");
    $("#imgs").css("left", -n * picWidth);
    $("#point li")
      .eq(n % $("#point li").length)
      .addClass("active");
  }
}

timer = setInterval(move, 1000);

// 思路，当到最后一张图片的时候，过渡动画删除，并图片跳转到第一张图片，实现无缝连接
//监听事件不起作用
// var oImgs = document.getElementById("imgs");

// oImgs.addEventListener(
//   "transitionend",
//   function () {
//     if (n == imgs.children.length - 1) {
//       oImgs.className = "";
//       oImgs.style.left = 0;
//       n = 0;
//     }
//   },
//   false
// );
$("div").on({
  mouseenter: function () {
    clearInterval(timer);
  },
  mouseleave: function () {
    //这里必须整个复制过来，否则会出问题，不知道是什么问题，图片速度会越来越快
    //setInterval(move, 1000);如果单独这样写就会让图片速度越来越快
    timer = setInterval(move, 1000);
  },
});

//点击小点点
for (var i = 0; i < $("#point li").length; i++) {
  $("#point li").eq(i).attr("data-index", i);
  $("#point li")
    .eq(i)
    .on("click", function () {
      console.log($(this).attr("data-index"));
      n = $(this).attr("data-index");
      $("#imgs").css("left", -n * picWidth);
      $("#point li").removeClass("active");
      $(this).addClass("active");
    });
  move();
}
