function rnd(n, m) {
  return Math.floor(Math.random() * (m - n) + n);
}
function check(obj1, obj2) {
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
var oStart = document.querySelector("#start");
var oExit = document.querySelector("#exit");
var welcome = document.querySelector("#welcome");
var planeBox = document.querySelector("#planeBox");
var num = document.querySelector("#num");
var scoreBox = document.querySelector("#score");
var myPlane;
var bTop = false;
var bLeft = false;
var bRight = false;
var bBottom = false;
var bulletArr = [];
var enemyArr = [];
var timer1;
var timer2;
var timer3;
var timer4;
var timer5;
var score = 0;
var isStart = false;
var enemy = [
  {
    level: 1,
    src: "images/enemy1_fly_1.png",
    blood: 1,
    width: 34,
    height: 24,
    dieSrc: "images/小飞机爆炸.gif",
    speed: 1,
    score: 1,
  },
  {
    level: 2,
    src: "images/enemy2_fly_1.png",
    blood: 4,
    width: 110,
    height: 164,
    dieSrc: "images/大飞机爆炸.gif",
    speed: 1,
    score: 5,
  },
];

//开始功能
function start() {
  console.log(isStart);

  if (isStart) {
    //暂停
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
    if (oDiv) {
      planeBox.removeChild(oDiv);
    }
    if (!myPlane) {
      //1、开始的界面消失
      welcome.style.display = "none";
      //2、游戏页面显示出来
      planeBox.style.display = "block";
      //分数显式score
      scoreBox.style.display = "block";
      //3、玩家飞机出现
      myPlane = new MyPlane(
        "images/myplane.gif",
        planeBox.offsetWidth / 2 - 33,
        planeBox.offsetHeight - 80,
        2,
        1
      );
    }
    //4、让玩家飞机启动
    timer1 = setInterval(playerMove, 30);
    //5、让子弹飞起来
    timer2 = setInterval(bulletMove, 30);
    //6、敌机不断出现
    timer3 = setInterval(function () {
      new EnemyPlane(enemy[rnd(0, enemy.length)]);
    }, 200);
    //7、让敌机不断的运动
    timer4 = setInterval(enemyMove, 60);
    //8、检测是否产生碰撞
    timer5 = setInterval(checkCollision, 200);
  }
  isStart = !isStart;
}
oStart.onclick = start;

//推出功能  点击后页面关闭
oExit.onclick = function () {
  close();
};
//玩家飞机的构造函数
function MyPlane(src, x, y, speed, blood) {
  this.src = src;
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.blood = blood;
  this.node = document.createElement("img");

  this.init();
}
MyPlane.prototype.init = function () {
  this.node.src = this.src;
  this.node.style.position = "absolute";
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
  planeBox.appendChild(this.node);
};
MyPlane.prototype.toTop = function () {
  var t = this.node.offsetTop - this.speed;
  if (t <= 0) {
    t = 0;
  }
  this.node.style.top = t + "px";
};
MyPlane.prototype.toLeft = function () {
  var l = this.node.offsetLeft - this.speed;
  if (l <= 0) {
    l = 0;
  }
  this.node.style.left = l + "px";
};
MyPlane.prototype.toRight = function () {
  var l = this.node.offsetLeft + this.speed;
  if (l >= planeBox.offsetWidth - 66) {
    l = planeBox.offsetWidth - 66;
  }
  this.node.style.left = l + "px";
};
MyPlane.prototype.toBottom = function () {
  var t = this.node.offsetTop + this.speed;
  if (t >= planeBox.offsetHeight - 80) {
    t = planeBox.offsetHeight - 80;
  }
  this.node.style.top = t + "px";
};
MyPlane.prototype.shoot = function () {
  new Bullet(
    "images/bullet1.png",
    myPlane.node.offsetLeft + 30,
    myPlane.node.offsetTop - 14,
    3
  );
};
//定时器里面飞机移动的函数
function playerMove() {
  if (bTop) {
    myPlane.toTop();
  }
  if (bLeft) {
    myPlane.toLeft();
  }
  if (bRight) {
    myPlane.toRight();
  }
  if (bBottom) {
    myPlane.toBottom();
  }
}
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
  planeBox.appendChild(this.node);
  bulletArr.push(this);
};
Bullet.prototype.move = function () {
  this.node.style.top = this.node.offsetTop - this.speed + "px";
};
//定时器让子弹飞
function bulletMove() {
  for (var i = 0; i < bulletArr.length; i++) {
    if (bulletArr[i].node.offsetTop <= -bulletArr[i].node.offsetHeight) {
      //超出范围的消失
      //1、页面节点消失
      planeBox.removeChild(bulletArr[i].node);
      //2、飞机数组里面的值消失
      bulletArr.splice(i, 1);
    } else {
      //屏幕范围内的运动
      bulletArr[i].move();
    }
  }
}
//敌机的构造函数
function EnemyPlane(obj) {
  this.src = obj.src;
  this.x = rnd(0, planeBox.offsetWidth - obj.width);
  this.y = -obj.height;
  this.blood = obj.blood;
  this.speed = obj.speed;
  this.isdead = false;
  this.level = obj.level;
  this.score = obj.score;
  this.node = document.createElement("img");
  this.init();
}
EnemyPlane.prototype.init = function () {
  this.node.src = this.src;
  this.node.style.position = "absolute";
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
  planeBox.appendChild(this.node);
  enemyArr.push(this);
};
EnemyPlane.prototype.move = function () {
  this.node.style.top = this.node.offsetTop + this.speed + "px";
};
function enemyMove() {
  for (var i = 0; i < enemyArr.length; i++) {
    if (enemyArr[i].node.offsetTop >= planeBox.offsetHeight) {
      //超出范围
      planeBox.removeChild(enemyArr[i].node);
      enemyArr.splice(i, 1);
      break;
    } else {
      if (enemyArr[i].isdead) {
        console.log(enemyArr);
        planeBox.removeChild(enemyArr[i].node);
        enemyArr.splice(i, 1);
        break;
      } else {
        enemyArr[i].move();
      }
    }
  }
}
//键盘功能
document.onkeydown = function () {
  switch (event.keyCode) {
    case 37:
      bLeft = true;
      break;
    case 38:
      bTop = true;
      break;
    case 39:
      bRight = true;
      break;
    case 40:
      bBottom = true;
      break;
    case 32:
      if (isStart) {
        myPlane.shoot();
      }
      break;
    case 13:
      start();
      break;
  }
};
document.onkeyup = function () {
  switch (event.keyCode) {
    case 37:
      bLeft = false;
      break;
    case 38:
      bTop = false;
      break;
    case 39:
      bRight = false;
      break;
    case 40:
      bBottom = false;
      break;
  }
};
function checkCollision() {
  //子弹和敌机
  for (var i = 0; i < enemyArr.length; i++) {
    for (var j = 0; j < bulletArr.length; j++) {
      //看敌机是否已经死了
      if (!enemyArr[i].isdead) {
        if (check(enemyArr[i].node, bulletArr[j].node)) {
          //碰到了
          //减少血量
          enemyArr[i].blood--;

          if (enemyArr[i].blood == 0) {
            //换图
            if (enemyArr[i].level == 1) {
              enemyArr[i].node.src = "images/小飞机爆炸.gif";
            } else if (enemyArr[i].level == 2) {
              enemyArr[i].node.src = "images/大飞机爆炸.gif";
            }

            //改变死亡状态
            enemyArr[i].isdead = true;
            //统计分数
            score += enemyArr[i].score;
            console.log(enemyArr[i].score);
            num.innerHTML = score;
            //当分数大于xxx的时候，出现大飞机
            if (score % 10 == 0) {
              new EnemyPlane(enemy[1]);
            }
          }

          //子弹
          planeBox.removeChild(bulletArr[j].node);
          bulletArr.splice(j, 1);
          break;
          // //敌机
          // planeBox.removeChild(enemyArr[index].node);
          // enemyArr.splice(index,1);
        } else {
          //没碰到
        }
      }
    }
  }

  //玩家飞机和敌机
  for (var i = 0; i < enemyArr.length; i++) {
    if (check(enemyArr[i].node, myPlane.node)) {
      myPlane.node.src = "images/本方飞机爆炸.gif";
      gameover();
    }
  }
}
function gameover() {
  clearInterval(timer1);
  clearInterval(timer2);
  clearInterval(timer3);
  clearInterval(timer4);
  clearInterval(timer5);
  setTimeout(function () {
    //1、开始的界面出现
    welcome.style.display = "block";
    //2、游戏页面隐藏
    planeBox.style.display = "none";
    //3、游戏界面的所有飞机清除
    planeBox.innerHTML = "";
    //分数隐藏
    scoreBox.style.display = "none";
    //分数清0
    score = 0;
    //页面分数归0
    num.innerHTML = "0";
    //是否开始变成false
    isStart = false;
    //敌机数组清空
    enemyArr = [];
    //子弹数组清空
    bulletArr = [];
    //玩家飞机清空
    myPlane = null;
  }, 1000);
}
