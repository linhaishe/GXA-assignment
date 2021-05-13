Drag.prototype.mouseDown = function () {
  this.disX = event.offsetX;
  this.disY = event.offsetY;
  var _this = this;
  document.onmousemove = function () {
    _this.mouseMove();
  };
  document.onmouseup = function () {
    _this.mouseUp();
  };
};

Drag.prototype.mouseMove = function () {
  var l = event.pageX - this.disX;
  var t = event.pageY - this.disY;

  this.node.style.left = l + "px";
  this.node.style.top = t + "px";
};

Drag.prototype.mouseUp = function () {
  document.onmousemove = null;
  document.onmouseup = null;
};

Drag.prototype.init = function () {
  var _this = this;
  this.node.onmousedown = function () {
    _this.mouseDown();
  };
};

function Drag(elmnt) {
  this.node = document.querySelector(elmnt);
  this.disX = 0;
  this.disY = 0;
  this.init();
}

new Drag("#div1");

// var oDiv = document.querySelector("div");
// oDiv.onmousedown = function () {
//   var disX = event.offsetX;
//   var disY = event.offsetY;

//   document.onmousemove = function () {
//     var l = event.pageX - disX;
//     var t = event.pageY - disY;

//     oDiv.style.left = l + "px";
//     oDiv.style.top = t + "px";
//   };

//   document.onmouseup = function () {
//     document.onmousemove = null;
//     document.onmouseup = null;
//   };
// };
