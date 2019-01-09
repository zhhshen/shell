## 代码分离
---
解释：此特性能够把代码分离到不同的 bundle 中，然后可以**按需加载**或**并行加载**这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大**影响加载时间**。

### 三种方法

* 入口文件： 使用**entry**配置手动分离
* 防止重复：使用**SplitChunks**去重和分离
* 动态导入：通过模块的内联函数调用来分离代码。


第一种方法
缺点：代码会重复，不够灵活
第二种方法

#### 动态导入
* import()(webpack推荐的方法)
* require.ensure  

1 import 动态地加载模块。调用 import() 之处，被作为分离的模块起点，意思是，被请求的模块和它引用的所有子模块，会分离到一个单独的 chunk 中。

import() 返回一个promise

```
import('lodash').then(_ => {
  // do something
  
})
```

2 
```
require.ensure(
  dependencies: String[],
  callback: function(require),
  errorCallback: function(error),
  chunkName: String
)
```
给定 dependencies 参数，将其对应的文件拆分到一个单独的 bundle 中，此 bundle 会被异步加载

```
require.ensure(['b'], function(require) {
  var c = require('c')
  // Do something
});
```
## 懒加载或者按需加载

是一种很好的优化网页或应用的方式。这种方式实际上是先把你的代码在一些**逻辑断点处分**离开，然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。

