//task1-联动全选作业内容

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

//task2-tab选项卡

const oBtn = document.getElementById("task2").getElementsByTagName("button");
const oDiv = document.getElementById("task2").getElementsByTagName("div");

console.log("oBtn", oBtn.length);
console.log("oDiv", oDiv[0].innerHtml);

for (let i = 0; i < oBtn.length; i++) {
  oBtn[i].onclick = function () {
    for (let j = 0; j < oDiv.length; j++) {
      oBtn[j].className = "";
      oDiv[j].className = "";
    }
    this.className = "btnColor";
    oDiv[this.dataset.index].className = "show";
    // oDiv[this.dataset.index].style.display = "block";
  };
}

//task3-简易计算器
const oBtn3 = document.getElementById("task3").getElementsByTagName("button");
const inp1 = document.getElementById("ip1");
const inp2 = document.getElementById("ip2");
const ans = document.getElementById("result");

oBtn3[0].onclick = function () {
  const val1 = parseInt(inp1.value);
  const val2 = parseInt(inp2.value);
  const operation = document.getElementById("selectId").value;

  console.log("operation", operation);
  if (isNaN(val1) || isNaN(val2)) {
    alert("请输入数字");
  }
  ans.innerHTML = eval(parseInt(val1) + operation + parseInt(val2));
};

//task4-购物车加减
const oBtn4 = document.getElementById("minus");
const oBtn5 = document.getElementById("plus");
const inpTask4 = document.getElementById("task4").getElementsByTagName("input");

oBtn4.onclick = function () {
  //   let shopValue = inpTask4[0].value;
  //   console.log("shopValue", shopValue);
  if (inpTask4[0].value > 0) {
    inpTask4[0].value = inpTask4[0].value - 1;
  }
  inpTask4[0].value;
};

oBtn5.onclick = function () {
  //   let shopValue = inpTask4[0].value;

  inpTask4[0].value = Number(inpTask4[0].value) + 1;
};

//5、两个框弹输入数字，弹出比较大的数字
const task5Btn = document.getElementById("task5Btn");

task5Btn.onclick = function () {
  const task5inp1 = document.getElementById("task5inp1").value;
  const task5inp2 = document.getElementById("task5inp2").value;
  const task5Span = document.getElementById("task5Span");
  const cal = task5inp1 - task5inp2;
  console.log("task5inp", task5inp1, task5inp2);
  //Assignment to constant variable.
  if (isNaN(task5inp1) && isNaN(task5inp2)) {
    alert("请输入数字");
  } else if (cal == 0) {
    //不能将操作节点的值声明变量
    // const spaninnerHtml = task5Span.innerHTML;
    task5Span.innerHTML = "两者数值相同";
    // spaninnerHtml = "两者数值相同";
  } else if (cal > 0) {
    task5Span.innerHTML = "较大的数字为: " + task5inp1;
    // spaninnerHtml = "较大的数字为: " + task5inp1;
  } else {
    task5Span.innerHTML = "较大的数字为: " + task5inp2;
    // spaninnerHtml = "较大的数字为: " + task5inp2;
  }
};

//6、两个框弹输入数字，弹出比较大的数字
const task6Inp = document.getElementById("task6Inp");
const task6Span = document.getElementById("task6Span");
const task6Btn = document.getElementById("task6Btn");

task6Btn.onclick = function () {
  const task6InpValue = document.getElementById("task6Inp").value;
  const task6InpValueNum = Number(task6InpValue);
  if (isNaN(task6InpValueNum)) {
    alert("请输入数字");
  }
  task6Span.innerHTML = parseInt(task6InpValue).toString().length + "位";
};
