# node-start
学习 舒适的前端开发环境是怎样一种体验？
#webpack
webpack它是一个模块打包器。也就是俗称的构建工具，之前的Grunt，Gulp也都是构建工具。webpack的可扩展性和可插件化。以及把任何文件都视为模块的概念得到了前端社区的一致推崇，而且在打包效率和按需分割文件上都是其他几个构建工具无法相比较的。
## webpack-dev-server
想要在浏览器访问还得有一个本地服务器。好在webpack都帮我们想到了，可以安装一个webpack：
```javascript
    npm install --save-dev webpack-dev-server
```
## 增加npm scritps
```javascript
"scripts":{
    "start": "webpack-dev-server --port 端口号"
}
```
## html-webpack-plugin
这个就是告诉webpack，你的bundle(打包后的js)要插到哪个html模板，webpack是插件化的，它把很多功能开放给了第三方来实现，他只是来拼装的。
```javascript
    npm install --save-dev html
```
## babel-loader babel-core
使用ES6时需要考虑那些没有支持ES6的旧浏览器，虽然现在Chrome或者其他高级浏览器中没有出现问题，但不能保证在其他浏览器中能正常运行。为了确保万无一失，需要将ES6转换为ES5，也就是js代码转换器。
```javascript
    npm install --save-dev babel-loader bable-core babel-preset-env
```
## 安装参数 --save和--save dev
```javascript
    npm install <package_name> --save表示将这个包名及对应的版本添加到package.json的dependencies
```
```javascript
    npm install <package_name> --save-dev 表示将这个包名及对应的版本添加到package.json的devDependencies
```
## 配置热更新
```javascript
    "scripts": {
        "start": "webpack-dev-server --hot --line --port 8800"
    }
```
