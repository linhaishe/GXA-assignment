var oH2 = document.querySelector("h2");
var oUl = document.querySelector("ul");
var oLi = document.querySelectorAll("li");

//原生方法

// oH2.addEventListener("mouseenter", mouseEnter);
// oUl.addEventListener("mouseleave", mouseLeave);

// function mouseEnter() {
//   oUl.style.display = "block";
// }

// function mouseLeave() {
//   oUl.style.display = "none";
// }

// for (var i = 0; i < oLi.length; i++) {
//   oLi[i].onclick = function () {
//     oUl.style.display = "none";
//     var str = this.innerHTML;
//     oH2.innerHTML = str;
//     //oH2.innerHTML = this.innerHTML;
//   };
// }

//错误记录

// for (var i = 0; i < oLi.length; i++) {
//   oLi[i].onclick = function () {
//     oUl.style.display = "none";
//     //下面要用this才能生效
//     var str = oLi[i].innerHTML;
//     oH2.innerHTML = str;
//     //oH2.innerHTML = this.innerHTML;
//   };
// }

//jq方法

var jqH2 = $("h2");
var jqUl = $("ul");
var jqLi = $("li");

jqH2.on("mouseenter", function () {
  jqUl.css("display", "block");
});

jqUl.on("mouseleave", function () {
  jqUl.css("display", "none");
});

console.log(jqUl.children().length);

for (var i = 0; i < jqUl.children().length; i++) {
  jqUl
    .children()
    .eq(i)
    .on("click", function () {
      jqH2.text($(this).text());
    });
}
