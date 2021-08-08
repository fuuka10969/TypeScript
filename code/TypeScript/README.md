
## 使用webpack打包ts代码

### 安装

```
npm init -y
npm install i -D webpack webpack-cli typescript ts-loader
```


### 添加配置文件
1. 配置 webpack.config.js
2. 配置 tsconfig.json
3. 修改 package.json
```
"build": "webpack"
```

### 安装插件
1. 自动生成html文件的插件
```
npm i -D html-webpack-plugin
```
配置 webpack.config.js


2. 根据项目改变自动打开并刷新浏览器页面
```
npm i -D webpack-dev-server
```

修改 package.json
```
"start": "webpack serve --open chrome.exe" // windows
"start": "webpack serve --open" // ios
```

3. build时先清除dist目录
```
npm i -D clean-webpack-plugin
```
配置 webpack.config.js

4. babel
```
npm i -D @babel/core @babel/preset-env babel-loader core-js
```
配置 webpack.config.js