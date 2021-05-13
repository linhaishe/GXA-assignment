var oStrat = document.querySelector("#strat");
var oExit = document.querySelector("#exit");
var oPlayBox = document.querySelector("#mainBody");
var welcomePage = document.querySelector("#welcomepage");

oStrat.onclick = function () {
  welcomePage.style.display = "none";
  //   welcomepage.style.display = "none";
  oPlayBox.style.backgroundImage = "url('images/background_1.png')";

  new NewPlane(
    "images/myplane.gif",
    mainBody.offsetWidth / 2 - 33,
    mainBody.offsetHeight - 80,
    1,
    1
  );
};

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
