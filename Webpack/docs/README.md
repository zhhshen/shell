## **代码分割**

---
解释：此特性能够把代码分离到不同的 bundle 中，然后可以**按需加载**或**并行加载**这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大**影响加载时间**。

这里主要介绍webpack中如何进行代码分割, webpack中主要有三种方法

* 入口文件： 使用**entry**配置手动分离
* 防止重复：使用**SplitChunks**去重和分离
* 动态导入：通过模块的内联函数调用来分离代码。

**多个入口文件**
```javascript
  ......
  mode: "development",
  entry: {
    first: './src/first.js',
    second: './src/second.js',
    third: './src/third.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  ......
```
**抽离重复的chunk**
```
......
optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
......
```

### 动态导入

---
* import() (webpack推荐的方法)
* require.ensure

**import()**

1 import 动态地加载模块。调用 import() 之处，被作为分离的模块起点，意思是，被请求的模块和它引用的所有子模块，会分离到一个单独的 chunk 中。

import() 返回一个promise

```
import('lodash').then(_ => {
  // do something 
})
```

**webpack自带的require.ensure**

语法
```
require.ensure(
  dependencies: String[],
  callback: function(require),
  errorCallback: function(error),
  chunkName: String
)
```
给定 dependencies 参数，将其对应的文件拆分到一个单独的 bundle 中，此 bundle 会被异步加载
例子：
```
require.ensure(['b'], function(require) {
  var c = require('c')
  // Do something
});
```
如果使用babel 的话，你需要确保 Babel 能够解析动态引入语法而不是将其进行转换。对于这一要求你需要 **[babel-plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/#installation)**。

```javascript
// third.js
import moment from 'moment'
// import _ from 'lodash'
const date = moment().format('YYYY-MM-DD HH:mm:ss')
import('lodash').then(_ => {
  console.log('第三个入口文件', date + _.join(['third', 'file'], '-'))
})
// 结合async函数
const _ = async import('lodash')
const date = moment().format('YYYY-MM-DD HH:mm:ss')
const moment = async import('moment')
console.log('第三个入口文件', date + _.join(['third', 'file'], '-'))

```

## 懒加载

懒加载（或者是按需加载）是一种很好的优化网页或应用的方式。这种方式实际上是先把你的代码在一些**逻辑断点处分**离开，然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。


### react中实现懒加载

---

借助[babel-plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/) 和第三方库 [react-loadable](https://github.com/jamiebuilds/react-loadable)
 **库**
 **React Loadable**

React Loadable 将动态引入(dynamic import)封装成了一个对 React 友好的 API 来在特定组件下引入代码分割的功能。

**之前**
```
import OtherComponent from './OtherComponent';

const MyComponent = () => (
  <OtherComponent/>
)
```
**之后**
```javascript

import Loadable from "react-loadable"
const Loading = () => <div>加载中....</div>

const LoadableComponent = Loadable({
  loader: () => import("./OtherComponent"),
  loading: Loading
});
```

**基于路由的代码分隔**

决定在哪引入代码分割则需要一些技巧。你需要确保选择的位置能够均匀地分割代码包而不会影响用户体验。

一般情况下，我们结合React Router 和 React Loadable库进行基于路由的代码分割

```javascript
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routes/Home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./routes/About'),
  loading: Loading,
});

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Switch>
  </BrowserRouter>
)
```

### vue中实现懒加载

----

**vue中异步组件**

1 全局注册

```
Vue.component("AsyncCmp", () => import("./AsyncCmp"))
```
2 局部注册

```
nnew Vue({
  // ...
  components: {
    AsyncCmp: () => import("./AsyncCmp"),
    Button: () => import('antd').then(({ Button }) => Button),
    Modal: () => import('antd').then(({ Modal }) => Modal)
  }
});
```
3 结合vue-router实现懒加载

``` javascript
const Foo = () => import('./Foo.vue')
const Bar = () => import('./Bar.vue')
const router = new VueRouter({
  routes: [
    { 
      path: '/foo', 
      component: Foo 
    },
    {
      path: '/bar',
      component: Bar
    }
  ]
})
```