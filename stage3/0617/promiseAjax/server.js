var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("promiseAjax"));

//主页面信息查询

app.listen(3000);
console.log("listening to port 3000");
