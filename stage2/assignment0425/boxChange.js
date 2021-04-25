const box = document.getElementById("box1");

const changeWidth = function () {
  box.style.width = "200px";
};

const changeHeight = function () {
  box.style.height = "200px";
};

const showHide = function () {
  box.style.display == "none"
    ? (box.style.display = "block")
    : (box.style.display = "none");
};

const transform = function () {
  box.className = "translate";
};

const turnGreen = function () {
  box.style.background = "green";
};

// const dropdown = document.getElementById("menu");

// window.onload = function () {
//   //获取需要悬浮的对象
//   let show = document.getElementById("show");
//   //获取被隐藏的菜单
//   let menu = document.getElementById("menu");
//   //给show添加鼠标悬浮事件
//   show.onmouseover = function () {
//     //改变菜单的内联样式display为block
//     menu.style.display = "block";
//   };

//   //
//   show.onmouseout = function () {
//     //获取菜单栏的坐标值
//     let menux = menu.offsetLeft;
//     let menuy = menu.offsetTop;
//     let menuX = menu.offsetLeft + menu.offsetWidth;
//     let menuY = menu.offsetTop + menu.offsetHeight;
//     //获取鼠标的坐标值
//     let event = window.event;
//     let mouseX = event.clientX;
//     let mouseY = event.clientY;
//     if (mouseX < menux || mouseX > menuX || mouseY < menuY || mouseY > menuY) {
//       menu.style.display = "none";
//     }
//   };
//   //分别给menu对象绑定鼠标悬浮和鼠标离开事件
//   menu.onmouseover = function () {
//     menu.style.display = "block";
//   };
//   menu.onmouseleave = function () {
//     menu.style.display = "none";
//   };
// };
