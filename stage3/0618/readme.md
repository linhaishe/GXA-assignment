## 使用 ES6 模块时提示 Must use import to load ES Module

问题描述
模块中的内容如下：

//export.js 中的文件

```
var firstName = "Michael";
var lastName = "Jackson";
var year = 1958;

export { firstName, lastName, year };
```

//main.js 中的文件

```
// var a = require("./export");

import * as familyModule from "./public/export.js";

// const { myArr } = require("./public/export..js");

console.log(familyModule.firstName);

```

当运行 main.js 时会报错： Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /Users/chenruo/Documents/GitHub/GXA-assignment/stage3/0618/main.js

解决方法
运行时加入参数 --experimental-modules

node --experimental-modules main.mjs

扩展
Since Node 13, you can use either the .mjs extension or set "type": "module" in your package.json. You don't need to use the --experimental-modules flag.

Since Node 12, you can use either the .mjs extension or set "type": "module" in your package.json. And you need to run node with the --experimental-modules flag.

In Node 9, it is enabled behind a flag, and uses the .mjs extension. node --experimental-modules my-app.mjs
