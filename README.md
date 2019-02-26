# ele

## 安装项目依赖
```
npm install
```

### 运行项目
```
npm run serve
```

### 项目打包
```
npm run build
```


### 预览地址

See [https://carry1111.github.io/ele/dist/index.html#/](https://carry1111.github.io/ele/dist/index.html#/).（请用chrome手机模式预览）
 

### 项目布局
```
├── dist                                        // 上线项目文件，放在服务器即可正常访问
├── public
│   ├── favicon.ico                             // 图标
│   ├── index.html                              // 入口html文件                              
├── src                                         // 源码目录
│   ├── api                                     // 数据接口
│   ├── assets                                  // 资源文件
│   ├── components                              // 组件
│   │   ├── basic                               // 公共组件
│   │   │   ├── count.vue                       // 计数组件
│   │   ├── home                                // 点餐页面组件
│   ├── mock                                    // 模拟数据
│   ├── views                                   // 页面
│   │   ├── Home.vue                            // 点餐页
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
│   ├── router.js                               // 路由配置文件
│   ├── store.js                                // 状态管理文件
├── .browserslistrc                             // 支持的浏览器版本
├── .eslintrc.js                                // ESLint配置
├── .gitignore                                  // git上传需要忽略的文件配置
├── babel.config.js                             // babel配置文件
├── package-lock.json                           // 锁定安装时的包的版本号
├── package.json                                // 项目及工具的依赖配置文件。
├── postcss.config.js                           // 转换css的工具
├── README.md                                   // 项目说明
├── vue.config.js                               // 是一个可选的配置文件
```