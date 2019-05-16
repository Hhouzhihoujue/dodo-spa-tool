# dodo-spa-tool

## 此工具集成常用webpack配置，便于日常开发使用
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
  } 
}
```

3. 在项目根目录下package.json的script字段中添加如下字段

```
{
  script: {
    "dev": "dodo-dev",
    "build": "dodo-build"
  }
}
```

4. 开发执行 npm run dev 并在浏览器打开 http://localhost:8080

5. 打包执行 npm run build

## TODO 
1. 实现analyze命令