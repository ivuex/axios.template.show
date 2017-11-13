# vue-sass-that-all-webpack

## **特性**
##### 为每个vue子组件生成独立的hmtl;
##### 可以在任意子组件的根目录开启一个独立的webpack-dev-server服务;

## 目录结构

## usage: 

#### 开发
##### 在根目录递归监听所有子组件,并在内存中编译多个html
``` lang=shell
$ npm start

# OR

$ npm run dev
```
##### 在任意子组件根目录中监听所有子组件,并编译html
``` lang=shell
$ npm run that -- --root=`pwd`

# OR

$ npm run that -- --root=$(pwd)
```

#### vue-sass-cli生成配套的vue子组件目录结构
``` lang=shell
$ npm i vue-sass-cli -g
$ vue-sass ${component-name}
```
> 更多详情： npm: https://www.npmjs.com/package/vue-sass-cli
>          github: https://github.com/ivuex/vue-sass-cli

#### 打包静态文件
``` lang=shell
$ npm run build
```


## 目录介绍
#### $root/package.json: 项目中会用到的依赖
#### $root/package.lock.js: 项目依赖锁文件
#### $root/webpack.config.js:  webpack(-dev-server)递归监听配置文件
#### $root/that.webpack.config.js:  webpack-dev-server独立组件配置文件
#### $root/config: 配置文件
###### $root/config/all.entryObj.js: 递归获取vue组件入口资源的脚本
###### $root/config/that.js: webpack-dev-server独立组件配置文件的参数处理和入口目录路径输出脚本
###### $root/config/that-root-data.js: 导出webpack-dev-server独立组件配置文件的参数处理和入口目录路径的js文件, 由that.js动态生成;
#### $root/node_modules: 依赖库目录
#### $root/main.js: 入口文件
#### $root/index.html: 模板文件
#### $root/src:　正在或者将要开发的源文件根目录, 这里边的文件可以全部删除，可以用vue-sass-cli脚手架生成
#### $root/dist: 将生成的或者已生成的静态文件根目录

# ENJOY IT ! 
 
#### By doc2git 
#### 写于: 2017.11.01 
        

