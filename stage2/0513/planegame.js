var oStrat = document.querySelector("#strat");
var oExit = document.querySelector("#exit");
var oPlayBox = document.querySelector("#mainBody");
var welcomePage = document.querySelector("#welcomepage");
var myPlane;
var toLeft = false;
var toTop = false;
var toRight = false;
var toBottom = false;
var bulletArr = [];
var enemyArr = [];
var isDead = false;

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

function startGame() {
  welcomePage.style.display = "none";
  //   welcomepage.style.display = "none";
  oPlayBox.style.backgroundImage = "url('images/background_1.png')";

  myPlane = new NewPlane(
    "images/myplane.gif",
    mainBody.offsetWidth / 2 - 33,
    mainBody.offsetHeight - 80,
    8,
    1
  );
  setInterval(playerMove, 30);
  setInterval(bulletMove, 30);
  setInterval(enemyMove, 60);
  //之前事件设置为200，事件定时过长，导致碰撞事件未被检测，时间改到50左右即可
  setInterval(checkCrash, 50);

  setInterval(function () {
    new EnemyPlane(
      "images/enemy1_fly_1.png",
      getRandomPlace(0, oPlayBox.offsetWidth - 34),
      -24,
      4,
      1
    );
  }, 500);
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
  mainBody.appendChild(this.node);
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
  if (r >= 254) {
    r = 254;
  }

  this.node.style.left = r + "px";
};

NewPlane.prototype.toBottom = function () {
  var btm = this.node.offsetTop + this.speed;
  if (btm >= 488) {
    btm = 488;
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
function EnemyPlane(src, x, y, speed, blood) {
  this.src = src;
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.blood = blood;
  this.isDead = false;
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
      myPlane.shoot();
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

function checkCrash() {
  for (var i = 0; i < enemyArr.length; i++) {
    for (var j = 0; j < bulletArr.length; j++) {
      //是enemyArr[i].node, bulletArr[j].node!!!不是enemyArr[i],bulletArr[j]
      if (!enemyArr[i].isDead) {
        if (checkIfCrash(enemyArr[i].node, bulletArr[j].node)) {
          enemyArr[i].blood--;
          if (enemyArr[i].blood == 0) {
            enemyArr[i].node.src = "images/小飞机爆炸.gif";
            //将判断放入enemyMove()函数中
            // planeBox.removeChild(enemyArr[i].node);
            // enemyArr.splice(i, 1);
            enemyArr[i].isDead = true;
          }
          oPlayBox.removeChild(bulletArr[j].node);
          bulletArr.splice(j, 1);
        }
      }
    }
  }
}
