// 1. 点击一堆div变色，其他不变作业部分

const aDiv = document
  .getElementById("assignment1-box")
  .getElementsByTagName("div");

//option 1

// for(let i=0;i<aDiv.length;i++){
//   aDiv[i].onclick=function(){
//     //需要实现点击元素变成绿色，其他颜色变成粉色
//     for(let j=0;j<aDiv.length;j++){
//       //所有颜色变成粉色
//       aDiv[j].style.background="darkgreen";
//     }
//     //当前元素变成绿色
//     this.style.background='pink';
//   }
// }

//option 2

for (let i = 0; i < aDiv.length; i++) {
  aDiv[i].onmouseover = function () {
    this.style.background = "pink";
  };
  aDiv[i].onmouseleave = function () {
    this.style.background = "darkgreen";
  };
}

//2. 利用传参，让物体，变宽变高，变色作业部分

const changeFunc = function (sName, sValue) {
  document.getElementById("assignment2-box").style[sName] = sValue;
};

//3. 全选、反选、全不选

const allSelectBtn = document.getElementById("allSelect");
const noSelectBtn = document.getElementById("noSelect");
const invertSelectBtn = document.getElementById("invertSelect");

const oInp = document
  .getElementById("assignment3-box")
  .getElementsByTagName("input");

allSelectBtn.onclick = function () {
  for (let i = 0; i < oInp.length; i++) {
    oInp[i].checked = true;
  }
};

noSelectBtn.onclick = function () {
  for (let i = 0; i < oInp.length; i++) {
    oInp[i].checked = false;
  }
};

invertSelectBtn.onclick = function () {
  for (let i = 0; i < oInp.length; i++) {
    if (oInp[i].checked == true) {
      oInp[i].checked = false;
    } else {
      oInp[i].checked = true;
    }
    // oInp[i].checked == true
    //   ? (oInp[i].checked = false)
    //   : (oInp[i].checked = true);
  }
};

//4. 模拟select下拉框

// 获取元素;
// 给h6加事件;
// 让ul显示出来;
// 给li加事件;
// 隐藏ul;
// H6里面的文本变成li里面的文本;

//选中按钮
const droplistBtn = document.getElementById("dropbtn");

console.log(droplistBtn.innerHTML);

//选中下拉内容
const listContent = document
  .getElementById("shoplist")
  .getElementsByTagName("a");

//点击事件
for (let i = 0; i < listContent.length; i++) {
  console.log(listContent[i].innerHTML);
  const listHtml = listContent[i].innerHTML;
  listContent[i].onclick = function () {
    droplistBtn.innerHTML = listHtml;
  };
}

//6.（选做）联动全选作业内容

const singleInp = document
  .getElementById("single-inp")
  .getElementsByTagName("input");

const multiInp = document
  .getElementById("multi-inp")
  .getElementsByTagName("input");

//上方按钮选中后下方按钮自动全选

singleInp[0].onclick = function () {
  for (let i = 0; i < multiInp.length; i++) {
    if (singleInp[0].checked == true) {
      multiInp[i].checked = true;
    } else {
      multiInp[i].checked = false;
    }
  }
};

//下方按钮全选后上方按钮自动选中

for (let i = 0; i < multiInp.length; i++) {
  multiInp[i].onclick = function () {
    const selectedBoxNum = document
      .getElementById("multi-inp")
      .querySelectorAll('input[type="checkbox"]:checked');
    if (selectedBoxNum.length == multiInp.length) {
      singleInp[0].checked = true;
    }
  };
}
