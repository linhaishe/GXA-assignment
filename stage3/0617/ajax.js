//原生ajax封装

function json2url(json) {
  var arr = [];
  for (var name in json) {
    arr.push(name + "=" + json[name]);
  }
  return arr.join("&");
}
function ajax(json) {
  if (!json.url) {
    alert("必须要地址");
    return;
  }

  json.type = json.type || "get";
  json.data = json.data || {};

  //1、准备一个ajax
  var oAjax = new XMLHttpRequest();
  //2、通过ajax，和后台建立联系
  switch (json.type) {
    case "get":
      //oAjax.open(请求的方式,请求的地址,是否异步)
      oAjax.open(json.type, json.url + "?" + json2url(json.data), true);
      //3、通过ajax发送数据
      oAjax.send();
      break;
    case "post":
      oAjax.open(json.type, json.url, true);
      //把请求头设置成form表单的post请求类型
      oAjax.setRequestHeader(
        "content-type",
        "application/x-www-form-urlencoded"
      );
      oAjax.send(json2url(json.data));
  }

  //4、通过ajax接收数据
  oAjax.onreadystatechange = function () {
    //这里是异步的处理，所以不能直接return出结果，强制使用return的话返回的是undefined，因为异步处理的请求需要时间。
    console.log(oAjax.readyState);
    if (oAjax.readyState == 4) {
      //数据完全到了
      if ((oAjax.status >= 200 && oAjax.status < 300) || oAjax.status == 304) {
        //console.log(oAjax.responseText)
        //成功了
        json.success && json.success(oAjax.responseText);
        //return this.responseText;
      }
    }
  };
}
