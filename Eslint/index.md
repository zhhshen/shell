# 搞懂eslint
---
先看一个例子
```json
{
  "extends": [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "airbnb-base",
    "plugin:vue/recommended"
  ],
  "plugins": [
    "vue"
  ],
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true
  },
  "globals": {
    "gon": false,
    "__webpack_public_path__": true,
  },
  "rules": {
    "no-console": "off",
    "no-tabs": "off",
    // "indent": ["error", 2],
    // "semi": ["error", "never"],
    // "curly":["error","all"],
    // "import/no-extraneous-dependencies":"off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    // "no-param-reassign": ["error", {"props": false}]
  }
```
我们通过例子去分析eslint的配置项

什么是eslint, 有什么用？有什么特点？

ESLint 是一个开源的 JavaScript 代码检查工具。代码检查是一种静态的分析，常用于寻找有问题的模式或者代码，并且不依赖于具体的编码风格。对大多数编程语言来说都会有代码检查，一般来说编译程序会内置检查工具。

因为js是一种动态的弱类型语言。没有编译的过程，所以开发过程中很容易出现代码错误，代码检查可以大大减少开发中的常用错误，提高开发调试效率。

eslint的配置规则很多， 可以参考这个表 [eslint规则表](http://eslint.cn/docs/rules/)

### 配置eslint

有2中方式配置eslint

1. 配置注释- 使用 JavaScript 注释把配置信息直接嵌入到一个代码源文件中。
2. 配置文件- 使用 JavaScript、JSON 或者 YAML 文件为整个目录（处理你的主目录）和它的子目录指定配置信息

使用配置文件配置有3中方式

- 使用.eslintrc.*文件
- 直接在package.json文件里eslintConfig字段指定配置，eslint会查找和自动读取它们。
- 在命令行中指定一个任意的配置文件

**常用的配置项**

1 Parser Options

```json
{
    "parserOptions": {
        "ecmaVersion": 6, // 默认设置为3，5（默认）， 你可以使用 6、7、8 或 9 来指定你想要使用的 ECMAScript 版本。你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）
        "sourceType": "module", // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
        "ecmaFeatures": {
            "globalReturn": false, // 允许在全局作用域下使用 return 语句
            "impliedStrict": false, // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
            "jsx": true, // 启用 JSX
        }
    },
    "rules": {
        "semi": 2
    }
}
```
2 Parser 
ESLint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器，只要该解析器符合下列要求：

- 它必须是本地安装的一个 npm 模块。
- 它必须有兼容 Esprima 的接口（它必须输出一个 parse() 方法）
- 它必须产出兼容 Esprima 的 AST 和 token 对象。

以下解析器与 ESLint 兼容：

- Esprima
- Babel-ESLint - 一个对Babel解析器的包装，使其能够与 ESLint 兼容。
- typescript-eslint-parser(实验) - 一个把 TypeScript 转换为 ESTree 兼容格式的解析器，这样它就可以在 ESLint 中使用了。这样做的目的是通过 ESLint 来解析 TypeScript 文件（尽管不一定必须通过所有的 ESLint 规则）。

3 Environments

```javascript
{
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true
    ....
  },
}
```
可以在源文件里、在配置文件中或使用 命令行 的 --env 选项来指定环境。

（1）文件中指定
> /* eslint-env node, mocha */
该设置启用了 Node.js 和 Mocha 环境。

（2）配置文件中指定

```javascript
{
    "env": {
        "browser": true,
        "node": true
    }
}
```
(3) package.json中指定

```javascript
{
    "name": "mypackage",
    "version": "0.0.1",
    "eslintConfig": {
        "env": {
            "browser": true,
            "node": true
        }
    }
}
```
(4) 在 YAML 文件中：

```javascript
---
  env:
    brower: true
    node: true
```
(5) 如果你想在一个特定的插件中使用一种环境，确保提前在 plugins 数组里指定了插件名，然后在 env 配置中不带前缀的插件名后跟一个 / ，紧随着环境名。custom为环境名称，例如：

```javascript
// 配置文件中
{
    "plugins": ["example"],
    "env": {
        "example/node": true,
        "example/browser": true,
    }
}
// package.json文件中
{
    "name": "mypackage",
    "version": "0.0.1",
    "eslintConfig": {
        "plugins": ["example"],
        "env": {
            "example/node": true
        }
    }
}
// 在 YAML 文件中：
---
  plugins:
    - example
  env:
    example/node: true
```
4  Globals
当访问当前源文件内未定义的变量时，no-undef 规则将发出警告。如果你想在一个源文件里使用全局变量，推荐你在 ESLint 中定义这些全局变量，这样 ESLint 就不会发出警告了。你可以使用注释或在配置文件中定义全局变量。

要在你的 JavaScript 文件中，用注释指定全局变量，格式如下：
> /* global var1, var2 */

在配置文件里配置全局变量时，使用 globals 指出你要使用的全局变量。将变量设置为 true 将允许变量被重写，或 false 将不允许被重写。比如：

```javascript
{
    "globals": {
        "var1": true,
        "var2": false
    }
}
```
注意：要启用no-global-assign规则来禁止对只读的全局变量进行修改。

5 plugins

在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。

```javascript
{
    "plugins": [
        "plugin1",
        "eslint-plugin-plugin2"
    ]
}
```
注意：由于 Node.js 的 require 函数的行为，全局安装的 ESLint 实例只能使用全局安装的 ESLint 插件，本地安装的版本，只能用 本地安装 的插件。不支持混合本地和全局插件。

6 rules

ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：
- "off" 或 0 - 关闭规则
- "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
- "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

```javascript
{
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"]
    }
}
```
配置定义在插件中的一个规则的时候，你必须使用 插件名/规则ID 的形式。比如：

```javascipt
{
    "plugins": [
        "plugin1"
    ],
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"],
        "plugin1/rule1": "error"
    }
}
```
注意：当指定来自插件的规则时，确保删除 eslint-plugin- 前缀。ESLint 在内部只使用没有前缀的名称去定位规则。

7 行内注释规则失效

可以在你的文件中使用以下格式的**块注释**来临时禁止规则出现警告：

快注释

```javascript

/* eslint-disable */

alert('foo');

/* eslint-enable */
```
你也可以对指定的规则启用或禁用警告:

```javascript
/* eslint-disable no-alert, no-console */

alert('foo');
console.log('bar');

/* eslint-enable no-alert, no-console */
```
如果在整个文件范围内禁止规则出现警告，将 /* eslint-disable */ 块注释放在文件顶部：

```javascript
/* eslint-disable */
alert('foo');
```

你也可以对整个文件启用或禁用警告:

```javascript
/* eslint-disable no-alert */
// Disables no-alert for the rest of the file
alert('foo');
```

可以在你的文件中使用以下格式的行注释或块注释在某一特定的行上禁用所有规则：

```javascript
alert('foo'); // eslint-disable-line

// eslint-disable-next-line
alert('foo');

/* eslint-disable-next-line */
alert('foo');

alert('foo'); /* eslint-disable-line */
```
在某一特定的行上禁用某个指定的规则：

```javascript
alert('foo'); // eslint-disable-line no-alert

// eslint-disable-next-line no-alert
alert('foo');

alert('foo'); /* eslint-disable-line no-alert */

/* eslint-disable-next-line no-alert */
alert('foo');
```
在某个特定的行上禁用多个规则：

```javascript
alert('foo'); // eslint-disable-line no-alert, quotes, semi

// eslint-disable-next-line no-alert, quotes, semi
alert('foo');

alert('foo'); /* eslint-disable-line no-alert, quotes, semi */

/* eslint-disable-next-line no-alert, quotes, semi */
alert('foo');
```
8 extends (一个配置文件可以被基础配置中的已启用的规则继承。)

extends 属性值可以是：
- 在配置中指定的一个字符串
- 字符串数组：每个配置继承它前面的配置



9 配置文件格式

ESLint 支持几种格式的配置文件：
- javascript - 使用.eslintrc.js，然后输出一个配置对象
- YMAL - 使用.eslintrc.yaml或.eslintrc.yml去定义配置的结构
- JSON - 使用.eslintrc.json去定义配置的结构，Eslint的JSON文件允许Javascript风格的注释
- package.json - 在 package.json 里创建一个 eslintConfig属性，在那里定义你的配置。

如果同一个目录下有多个配置文件，ESLint 只会使用一个。优先级顺序如下：

- .eslintrc.js
- .eslintrc.yaml
- .eslintrc.yml
- .eslintrc.json
- .eslintrc
- package.json

完整的配置层次结构，从最高优先级最低的优先级

1 行内配置
- /*eslint-disable*/ 和 /*eslint-enable*/
- /*global*/
- /*eslint*/
- /*eslint-env*/

2 命令行选项
- --global
- --rule
- --env
- -c、--config

3 项目级配置
- 与要检测的文件在同一目录下的 .eslintrc.* 或 package.json 文件
- 继续在父级目录寻找 .eslintrc 或 package.json文件，直到根目录（包括根目录）或直到发现一个有"root": true的配置。

总结：(1) 就近原则，和是否配置 root: true
(2) 如果同一目录下 .eslintrc 和 package.json 同时存在，.eslintrc 优先级高会被使用，package.json 文件将不会被使用。
(3) 为了将 ESLint 限制到一个特定的项目，在你项目根目录下的 package.json 文件或者 .eslintrc.* 文件里的 eslintConfig 字段下设置 "root": true。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。

4 如果不是（1）到（3）中的任何一种情况，退回到 ~/.eslintrc 中自定义的默认配置。


10 使用一个共享的配置包

可共享的配置 是一个 npm 包，它输出一个配置对象。要确保这个包安装在 ESLint 能请求到的目录下。
extends 属性值可以省略包名的前缀 eslint-config-。
eslint --init 命令可以创建一个配置，这样你就可以扩展一个流行的风格指南（比如，eslint-config-standard）。

11 从plugins中使用配置项

插件 是一个 npm 包，通常输出规则。一些插件也可以输出一个或多个命名的 配置。要确保这个包安装在 ESLint 能请求到的目录下。
plugins 属性值 可以省略包名的前缀 eslint-plugin-。

extends 属性值可以由以下组成：
- plugin:
- 包名（省略了前缀，比如，react）
- /
- 配置名称（比如recommended）

例子
```
{
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
       "no-set-state": "off"
    }
}
```
extends 属性值可以是基本配置文件的绝对路径或相对路径。

```
{
    "extends": [
        "./node_modules/coding-standard/eslintDefaults.js",
        "./node_modules/coding-standard/.eslintrc-es6",
        "./node_modules/coding-standard/.eslintrc-jsx"
    ],
    "rules": {
        "eqeqeq": "warn"
    }
}
```

12 ignore 文件和目录

你可以通过在项目根目录创建一个 .eslintignore 文件告诉 ESLint 去忽略特定的文件和目录。.eslintignore 文件是一个纯文本文件，其中的每一行都是一个 glob 模式表明哪些路径应该忽略检测。例如，以下将忽略所有的 JavaScript 文件：

```
**/*.js
```
当 ESLint 运行时，在确定哪些文件要检测之前，它会在当前工作目录中查找一个 .eslintignore 文件。如果发现了这个文件，当遍历目录时，将会应用这些偏好设置。一次只有一个 .eslintignore 文件会被使用，所以，不是当前工作目录下的 .eslintignore 文件将不会被用到。

Globs 匹配使用 node-ignore，所以大量可用的特性有：
- 以 # 开头的行被当作注释，不影响忽略模式。
- 路径是相对于 .eslintignore 的位置或当前工作目录。这也会影响通过 --ignore-pattern传递的路径。
- 忽略模式同 .gitignore 规范
- 以 ! 开头的行是否定模式，它将会重新包含一个之前被忽略的模式。

除了 .eslintignore 文件中的模式，ESLint总是忽略 /node_modules/* 和 /bower_components/* 中的文件。
例如：把下面 .eslintignore 文件放到当前工作目录里，将忽略项目根目录下的 node_modules，bower_components 以及 build/ 目录下除了 build/index.js 的所有文件。

```
# /node_modules/* and /bower_components/* in the project root are ignored by default

# Ignore built files except build/index.js
build/*
!build/index.js
```
重要：注意代码库的 node_modules 目录，比如，一个 packages 目录，默认情况下不会被忽略，需要手动添加到 .eslintignore。








