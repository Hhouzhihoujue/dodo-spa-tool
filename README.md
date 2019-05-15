# dodo-spa-tool

## 此工具集成常用webpack配置，便于日常开发使用，集中处理webpack配置所以当项目变多并且需要升级版本时可凸显其用处

1. 执行 npm install dodo-spa-tool -D 或 yarn add dodo-spa-tool -D

1. 此工具的配置在根目录package.json中的dodo字段, 支持0配置运行默认参数如下

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

2. 在项目根目录下package.json的script字段中添加如下字段

```
{
  script: {
    "dev": "dodo-dev"
  }
}
```

4. 执行 npm run dev 并在浏览器打开 http://localhost:8080 (换成你自己的端口哦)


## TODO 

1. 实现build命令
2. 实现analyze命令