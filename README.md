# dodo-spa-tool

## 此工具集成react常用webpack配置，可安装后直接开发业务代码
## 集中处理webpack配置所以当项目变多并且需要升级版本时可凸显其用处

1. 安装
```
npm install dodo-spa-tool -D 
或
yarn add dodo-spa-tool -D
```

2. 此工具的配置在根目录package.json中的dodo字段, 支持0配置运行默认参数如下

```
{
  "dodo": {
    "entry": ["./src/index.js"],   // 项目入口
    "output": "dist",              // 编译输出目录
    "template": "src/index.html",  // 模版文件路径
    "port": 8080                   // 服务端口
    "analysis": false              // 打包大小分析
  } 
}
```

3. 在项目根目录下package.json的script字段中添加如下字段

```javascript
// NODE_ENV 即 process.env.NODE_ENV 开发环境默认不开启优化
// window 用户需要安装 corss-env 模块来设置 NODE_ENV 区分不同环境
{
  script: {
    "dev": "NODE_ENV=development dodo-dev", 
    "build": "NODE_ENV=production dodo-build",
    "lint": "dodo-lint --fix"
  }
}
```

4. 开发执行 npm run dev 并在浏览器打开 http://localhost:8080

5. 打包执行 npm run build

6. 格式化代码 npm run lint

7. 如需编辑器代码eslint错误提示，需在根目录创建.eslintrc.js和.prettierrc.js

```javascript
const { eslintrc, prettierrc } = require('dodo-spa-tool')
module.exports = eslintrc // module.exports = prettierrc
```
