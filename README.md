## 自定义工具函数库

### 1.1创建项目
  - 创建空文件夹base-utils
  - 在文件夹下执行命令，生成package.json文件
    + npm init -y

### 1.2下载依赖包
  - npm i webpack webpack-cli

### 1.3配置webpack
  - webpack.config.js
  ```js
    const path = require('path')
    module.exports = {
      // 模式
      mode: 'development', // 也可以使用 production
      // 入口
      entry: './src/index.js', 
      // 出口
      output: {
        // 打包文件夹
        path: path.resolve(__dirname, 'dist'),
        // 打包文件，引用路径
        filename: 'base-utils.js', 
        // 向外暴露的对象的名称，调用方法的对象
        library: 'bUtils',
        // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
        libraryTarget: 'umd', 
      },
    }
  ```

### 1.4在入口js中暴露功能
  - src/index.js
  ```js
    export test = () => {
      console.log('test')
    }
  ```

### 1.5配置打包命令
  - package.json
  ```js
    "scripts": {
      "build:watch": "webpack --watch"
    },
  ```

### 1.6进行打包
  - npm run build:watch

### 1.7测试使用自定义包
  - test/index.html
  ```js
    <body>
      <script src="../dist/base-utils.js"></script>
      <script>
        bUtils.test()
      </script>
    </body>
  ```
  - 打印'test'
