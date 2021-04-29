//作业1：打印4行 第一行1个星星 第二行2个
document.write("<h1>作业1：打印4行 第一行1个星星 第二行2个<h1/>" + "<hr/>");

// for (let i = 0; i < 5; i++) {
//   switch (i) {
//     case 1:
//       document.write("*" + "<br />");
//       break;
//     case 2:
//       document.write("**" + "<br />");
//       break;
//     case 3:
//       document.write("***" + "<br />");
//       break;
//     case 4:
//       document.write("****" + "<br />");
//       break;
//   }
// }

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    document.write("*");
    if (i == j) {
      document.write("<br/>");
    }
  }
}

//作业2：打印4行 第一行4个星星 第二行3个
document.write("<h1>作业2：打印4行 第一行4个星星 第二行3个<h1/>" + "<hr/>");

for (let i = 0; i < 5; i++) {
  switch (i) {
    case 1:
      document.write("****" + "<br />");
      break;
    case 2:
      document.write("***" + "<br />");
      break;
    case 3:
      document.write("**" + "<br />");
      break;
    case 4:
      document.write("*" + "<br />");
      break;
  }
}

//作业3：输入几行打印几行星星
const task3Btn = document.getElementById("task3Btn");
const task3Inp = document.getElementById("task3Inp");

const starFunc = function (n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      document.write("*");
    }
    document.write("<br />");
  }
};

task3Btn.onclick = function () {
  const task3InpValue = document.getElementById("task3Inp").value;

  if (isNaN(task3InpValue)) {
    alert("请输入数字");
  }
  starFunc(task3InpValue);
};

// window.onload = function () {
//   //tab选项卡
//   const taskTabBtn = document
//     .getElementById("taskTab")
//     .getElementsByTagName("button");
//   const taskTabDiv = document
//     .getElementById("taskTab")
//     .getElementsByTagName("div");
//   for (let i = 0; i < taskTabBtn.length; i++) {
//     taskTabDiv[i].className = "hide";
//   }

//   for (let j = 0; j < taskTabBtn.length; j++) {
//     taskTabBtn[j].onclick = function () {
//       for (let k = 0; k < taskTabBtn.length; k++) {
//         taskTabDiv[k].className = "hide";
//       }
//       taskTabDiv[k].className = "show";
//     };
//   }
// };

//tab选项卡

const taskTabBtn = document
  .getElementById("taskTab")
  .getElementsByTagName("button");
const taskTabDiv = document
  .getElementById("taskTab")
  .getElementsByTagName("div");

for (var i = 0; i < taskTabBtn.length; i++) {
  //给每个btn加自定义属性
  taskTabBtn[i].dataset.index = i;
  //给每一个加事件
  taskTabBtn[i].onclick = function () {
    for (var j = 0; j < taskTabBtn.length; j++) {
      taskTabBtn[j].style.background = "";
      taskTabDiv[j].style.display = "none";
    }
    this.style.background = "red";
    taskTabDiv[this.dataset.index].style.display = "block";
  };
}

//双色球
//获得1-34范围内的随机数
//将随机数存储在空数组内
//判断随机数字是否和数组里的内容相同
document.write("<h1>作业：双色球</h1>" + "<hr/>");
var arr = [];
var num7 = getRandomArbitrary(1, 17);

//获得随机整数
function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

function findInArr(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < 6; i++) {
  var randomValue = getRandomArbitrary(1, 34);
  //传参顺序不对应，会导致查重失败
  //  if (findInArr(arr, randomValue) == true)
  if (findInArr(randomValue, arr) == true) {
    arr.push(randomValue);
  } else {
    i--;
  }
}

const sortArr = arr.sort(function (a, b) {
  return a - b;
});

console.log(sortArr);
document.write("<span>红球</span>" + sortArr);

document.write("<span>蓝球</span>" + num7);

console.log(arr);
