function setFont() {
  document.documentElement.style.fontSize =
    (document.documentElement.clientWidth * 50) / 320 + "px";
}
setFont();
window.onresize = setFont;
