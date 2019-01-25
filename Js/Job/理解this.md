# 理解this


结论：在一个函数上下文中，this有**调用者**提供，根据调用函数的方式来决定。**在函数执行过程中，this一旦被确定，就不可更改了**

- 如果调用者函数，被某一个对象所拥有，那么该函数在调用时，内部的this指向该对象
- 如果函数独立调用，那么该函数内部的this, 则指向undefined
- 在非严格模式下，当this指向undefined时，它会被自动指向全局对象、

我们看一个例子

```javascript
var a = 20

var obj = {
  a: 10,
  c: this.a + 20,
  fn: function () => {
    return this.a
  }
}

console.log(obj.c)
console.log(obj.fn())
```
有的同学对obj.c中的this的指向还有些疑惑，这里明确下，**单独的{}是不会形成新的作用域的，因此这里的this.a，由于并没有作用域的限制，所以它仍然处于全局作用域之中。所以这里的this其实是指向的window对象。**

另一个例子
```javascript
var a = 20;
var foo = {
    a: 10,
    getA: function () {
        return this.a;
    }
}
console.log(foo.getA()); // 10

var test = foo.getA;
console.log(test());  // 20
```
foo.getA()中，getA是调用者，他不是独立调用，被对象foo所拥有，因此它的this指向了foo。而test()作为调用者，尽管他与foo.getA的引用相同，但是它是独立调用的，因此this指向undefined，在非严格模式，自动转向全局window。

```javascript
var a = 20;
function getA() {
    return this.a;
}
var foo = {
    a: 10,
    getA: getA
}
console.log(foo.getA());  // 10
```
```javascript
function foo() {
    console.log(this.a)
}

function active(fn) {
    fn(); // 真实调用者，为独立调用
}

var a = 20;
var obj = {
    a: 10,
    getA: foo
}

active(obj.getA);
```
### 使用call、apply修改指定this

所有的函数都有这2个方法，，
- 第一个是this将要指向的对象
- 后面的参数是向函数传递的参数，call为一个一个的形式传递，apply以数组的形式传递

常用的面试题：
(1) 自定义实现一个bind方法(call, apply, 闭包、函数柯里化)

```javascript
if (!Function.prototype.bind) {
  Function.prototype.bind = function (obj) {
    // 获取除了obj以外的参数
    var args = [].slice.call(arguments, 1)
    var self = this
    return function () {
      var newArgs = args.concat([].slice.call(arguments))
      return self.apply(obj, newArgs)
    }
  }
}
```
(2) 关于bind()的一道面试题

```javascript
var allWrite = document.write
allWrite('hello')
//结果：  Uncaught TypeError: Illegal invocation
// 原因：altwrite()函数改变this的指向global或window对象，导致执行时提示非法调用异常， 正确得方法是适用bind()方法
// 修改为： allWrite.bind(document)('hello') 或者  allWrite.call(document, 'hello')
```
上面的例子可以通过另一个例子解释：
```javascript

this.num = 9; 
var mymodule = {
  num: 81,
  getNum: function() { 
    return this.num; 
  }
};
 
module.getNum(); // 81
 
var getNum = module.getNum;
getNum(); // 9, 因为在这个例子中，"this"指向全局对象
 
// 创建一个'this'绑定到module的函数
var boundGetNum = getNum.bind(module);
boundGetNum(); // 81
```
call和apply的适用场景：

1 将类数组对象转换为数组
```javascript
function exam(a, b, c) {
  console.log(arguments)

  var arr = [].slice.call(arguments)
  console.log(arr)
}
exam(1, 2, 3)
```
2 修改this的指向

```javascript
var foo = {
    name: 'joker',
    showName: function() {
      console.log(this.name);
    }
}
var bar = {
    name: 'rose'
}
foo.showName.call(bar);
```
3 实现继承

```javascript
// 定义父级的构造函数
var Person = function(name, age) {
    this.name = name;
    this.age  = age;
    this.gender = ['man', 'woman'];
}

// 定义子类的构造函数
var Student = function(name, age, high) {

    // use call
    Person.call(this, name, age);
    this.high = high;
}
Student.prototype.message = function() {
    console.log('name:'+this.name+', age:'+this.age+', high:'+this.high+', gender:'+this.gender[0]+';');
}

new Student('xiaom', 12, '150cm').message();
```
### 构造函数和原型方法上的this

第一个问题，new 操作到底干了什么事？

- 创建一个新的对象
- 将构造函数的this指向这个新对象
- 指向构造函数的代码，为这个对象添加属性和方法
- 返回这个新对象

```javascript
function Person(name, age) {

    // 这里的this指向了谁?
    this.name = name;
    this.age = age; 
    console.log(this)  
}

Person.prototype.getName = function() {

    // 这里的this又指向了谁？
    console.log(this)
    return this.name;
}

// 上面的2个this，是同一个吗，他们是否指向了原型对象？

var p1 = new Person('Nick', 20);
p1.getName();
```
如何结合new 操作的定义理解this的指向？

