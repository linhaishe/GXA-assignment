var oStrat = document.querySelector("#strat");
var oExit = document.querySelector("#exit");
var oPlayBox = document.querySelector("#planeBox");
//var mainBody = document.querySelector("#mainBody");
var welcomePage = document.querySelector("#welcomepage");
var scoreDiv = document.querySelector("#score");
var scoreValue = document.querySelector("#num");
var myPlane;
var toLeft = false;
var toTop = false;
var toRight = false;
var toBottom = false;
var bulletArr = [];
var enemyArr = [];
var isDead = false;
var timer1;
var timer2;
var timer3;
var timer4;
var timer5;
var score = 0;
var isStart = false;

//未完成功能：
//1.玩家飞机和敌机碰撞检测
//游戏结束函数：定时器清除
//积分
function getRandomPlace(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function checkIfCrash(obj1, obj2) {
  var t1 = obj1.offsetTop;
  var b1 = obj1.offsetTop + obj1.offsetHeight;
  var l1 = obj1.offsetLeft;
  var r1 = obj1.offsetLeft + obj1.offsetWidth;

  var t2 = obj2.offsetTop;
  var b2 = obj2.offsetTop + obj2.offsetHeight;
  var l2 = obj2.offsetLeft;
  var r2 = obj2.offsetLeft + obj2.offsetWidth;

  if (r2 < l1 || l2 > r1 || t2 > b1 || b2 < t1) {
    return false;
  } else {
    return true;
  }
}

// oStrat.onclick = function () {
//   welcomePage.style.display = "none";
//   //   welcomepage.style.display = "none";
//   oPlayBox.style.backgroundImage = "url('images/background_1.png')";

//   myPlane = new NewPlane(
//     "images/myplane.gif",
//     mainBody.offsetWidth / 2 - 33,
//     mainBody.offsetHeight - 80,
//     8,
//     1
//   );
//   setInterval(playerMove, 30);
// };

//开始功能
function startGame() {
  //游戏开始之后设置isStart取反
  if (isStart) {
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);
    clearInterval(timer4);
    clearInterval(timer5);
    //<div id="stop">暂停</div>
    var oDiv = document.createElement("div");
    oDiv.innerHTML = "暂停";
    oDiv.id = "stop";
    planeBox.appendChild(oDiv);
  } else {
    var oDiv = document.getElementById("stop");
    //游戏开始时获取暂停标签元素，并移除
    var oDiv = document.getElementById("stop");
    if (oDiv) {
      planeBox.removeChild(oDiv);
    }
    //判断自己的飞机是否出现，如果出现，则开始游戏，myPlane声明时候咩有赋值，则值为null,为flase,当游戏开始时，飞机已经被构造函数构造出，则已存在，取反变成true
    if (!myPlane) {
      welcomePage.style.display = "none";
      oPlayBox.style.display = "block";
      // oPlayBox.style.backgroundImage = "url('images/background_1.png')";
      scoreDiv.style.display = "block";

      myPlane = new NewPlane(
        "images/myplane.gif",
        oPlayBox.offsetWidth / 2 - 33,
        oPlayBox.offsetHeight - 80,
        8,
        1
      );
    }
  }

  //玩家飞机启动
  timer1 = setInterval(playerMove, 30);
  //子弹设计
  timer2 = setInterval(bulletMove, 30);
  //敌机运动
  timer3 = setInterval(enemyMove, 60);
  //检查飞机是否相撞
  timer4 = setInterval(checkCrash, 80);
  timer5 = setInterval(function () {
    new EnemyPlane(
      "images/enemy1_fly_1.png",
      getRandomPlace(0, oPlayBox.offsetWidth - 34),
      -24,
      4,
      1,
      1
    );
  }, 500);
  isStart = !isStart;
  // setInterval(playerMove, 30);
  // setInterval(bulletMove, 30);
  // setInterval(enemyMove, 60);
  // //之前事件设置为200，事件定时过长，导致碰撞事件未被检测，时间改到50左右即可
  // setInterval(checkCrash, 80);
  // setInterval(function () {
  //   new EnemyPlane(
  //     "images/enemy1_fly_1.png",
  //     getRandomPlace(0, oPlayBox.offsetWidth - 34),
  //     -24,
  //     4,
  //     1
  //   );
  // }, 500);
}

oStrat.addEventListener("click", startGame, false);

oExit.onclick = function () {
  close();
};

function NewPlane(src, x, y, speed, blood) {
  this.src = src;
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.blood = blood;
  this.node = document.createElement("img");

  this.init();
}

NewPlane.prototype.init = function () {
  this.node.src = this.src;
  this.node.style.position = "absolute";
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
  oPlayBox.appendChild(this.node);
};

//控制飞机上下左右飞行

NewPlane.prototype.toTop = function () {
  var t = this.node.offsetTop - this.speed;
  if (t <= 0) {
    t = 0;
  }

  this.node.style.top = t + "px";
};

NewPlane.prototype.toRight = function () {
  var r = this.node.offsetLeft + this.speed;
  if (r >= oPlayBox.offsetWidth - 66) {
    r = oPlayBox.offsetWidth - 66;
  }

  this.node.style.left = r + "px";
};

NewPlane.prototype.toBottom = function () {
  var btm = this.node.offsetTop + this.speed;
  if (btm >= oPlaneBox.node.offsetHeight - 80) {
    btm = oPlaneBox.node.offsetHeight - 80;
  }

  this.node.style.top = btm + "px";
};

NewPlane.prototype.toLeft = function () {
  var l = this.node.offsetLeft - this.speed;
  if (l <= 0) {
    l = 0;
  }

  this.node.style.left = l + "px";
};

//子弹射击

NewPlane.prototype.shoot = function () {
  new Bullet(
    "images/bullet1.png",
    //不是myPlane.offsetLe，是myPlane.node.offsetLeft,node是img object
    myPlane.node.offsetLeft + 30,
    myPlane.node.offsetTop - 14,
    11
  );
};

//子弹的构造函数
function Bullet(src, x, y, speed) {
  this.src = src;
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.node = document.createElement("img");

  this.init();
}

Bullet.prototype.init = function () {
  this.node.src = this.src;
  this.node.style.position = "absolute";
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
  oPlayBox.appendChild(this.node);
  bulletArr.push(this);
};

//子弹移动
Bullet.prototype.move = function () {
  //子弹消失
  //此方法只是让界面的图片消失，没有消除节点和数组内的节点，节点会不断增加，需要实现子弹节点消失和节点移除两部分内容
  // var t = this.node.offsetTop - this.speed;
  // if (t <= -14) {
  //   this.node.style.display = "none";
  // }
  // this.node.style.top = t + "px";
  this.node.style.top = this.node.offsetTop - this.speed + "px";
};

function bulletMove() {
  for (var j = 0; j < bulletArr.length; j++) {
    if (bulletArr[j].node.offsetTop <= -bulletArr[j].node.offsetHeight) {
      oPlayBox.removeChild(bulletArr[j].node);
      bulletArr.splice(j, 1);
    } else {
      bulletArr[j].move();
    }
  }
}

function playerMove() {
  if (toLeft) {
    myPlane.toLeft();
  }
  if (toTop) {
    myPlane.toTop();
  }
  if (toRight) {
    myPlane.toRight();
  }
  if (toBottom) {
    myPlane.toBottom();
  }
}

//敌机构造函数
function EnemyPlane(src, x, y, speed, blood, score) {
  this.src = src;
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.blood = blood;
  this.isDead = false;
  this.score = score;
  this.node = document.createElement("img");

  this.init();
}

EnemyPlane.prototype.init = function () {
  this.node.src = this.src;
  this.node.style.position = "absolute";
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
  oPlayBox.appendChild(this.node);
  enemyArr.push(this);
};

EnemyPlane.prototype.move = function () {
  this.node.style.top = this.node.offsetTop + this.speed + "px";
};

function enemyMove() {
  for (var i = 0; i < enemyArr.length; i++) {
    if (enemyArr[i].node.offsetTop >= oPlayBox.offsetHeight + 24) {
      oPlayBox.removeChild(enemyArr[i].node);
      enemyArr.splice(i, 1);
    } else {
      if (enemyArr[i].isDead) {
        oPlayBox.removeChild(enemyArr[i].node);
        enemyArr.splice(i, 1);
      } else {
        enemyArr[i].move();
      }
    }
  }
}

document.onkeydown = function () {
  switch (event.keyCode) {
    case 37:
      toLeft = true;
      break;
    case 38:
      toTop = true;
      break;
    case 39:
      toRight = true;
      break;
    case 40:
      toBottom = true;
      break;
    case 13:
      startGame();
      break;
    case 87:
      if (isStart) {
        myPlane.shoot();
      }
      break;
  }
};

document.onkeyup = function () {
  switch (event.keyCode) {
    case 37:
      toLeft = false;
      break;
    case 38:
      toTop = false;
      break;
    case 39:
      toRight = false;
      break;
    case 40:
      toBottom = false;
      break;
  }
};

//碰撞检测

function checkCrash() {
  for (var i = 0; i < enemyArr.length; i++) {
    for (var j = 0; j < bulletArr.length; j++) {
      //是enemyArr[i].node, bulletArr[j].node!!!不是enemyArr[i],bulletArr[j]
      if (!enemyArr[i].isDead) {
        //敌机和子弹碰撞
        if (checkIfCrash(enemyArr[i].node, bulletArr[j].node)) {
          enemyArr[i].blood--;
          if (enemyArr[i].blood == 0) {
            enemyArr[i].node.src = "images/小飞机爆炸.gif";
            //将判断放入enemyMove()函数中
            // planeBox.removeChild(enemyArr[i].node);
            // enemyArr.splice(i, 1);
            enemyArr[i].isDead = true;
            //统计分数
            score += enemyArr[i].score;
            console.log(enemyArr[i].score);
            scoreValue.innerHTML = score;
          }
          oPlayBox.removeChild(bulletArr[j].node);
          bulletArr.splice(j, 1);
        }
      }
    }
  }
  //飞机和敌机相撞

  for (var i = 0; i < enemyArr.length; i++) {
    if (checkIfCrash(enemyArr[i].node, myPlane.node)) {
      myPlane.node.src = "images/本方飞机爆炸.gif";
      gameOver();
    }
  }
}

function gameOver() {
  //清除定时器
  clearInterval(timer1);
  clearInterval(timer2);
  clearInterval(timer3);
  clearInterval(timer4);
  clearInterval(timer5);

  //setTimeout和setInterval 用法不一样，使用setInterval之后会不断调用游戏结束后重新开始会不断卡页面，修改为setTimeout则问题解除
  setTimeout(function () {
    welcomePage.style.display = "block";
    oPlayBox.style.display = "none";
    oPlayBox.innerHTML = "";
    scoreDiv.style.display = "none";
    score = 0;
    scoreValue.innerHTML = "0";
    isStart = false;
    //敌机数组清空
    enemyArr = [];
    //子弹数组清空
    bulletArr = [];
    //玩家飞机清空
    myPlane = null;
  }, 1000);
}

//276 80
