# base-utils-js
## 自定义工具函数库

安装
------
    npm install base-utils-js --save

示例
------
```javascript
// 网页中引用
<script src="./node_modules/base-utils-js/dist/base-utils.js"></script>
<script>
  bUtils.test()
</script>

// 使用ESM引入
import {test} from 'base-utils-js'
test()

// 使用commonjs引入
const {test} = require('base-utils-js')
test()
```