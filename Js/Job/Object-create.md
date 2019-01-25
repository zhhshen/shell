# Object create的理解
---
Object.create(proto,[propertiesobject]):创建一个拥有指定原型和若干个指定属性的对象。

经常碰到的是

Object.create(null) 这个是什么意思？

Object.create(null) 创建的对象是一个空对象，在该对象上没有继承 Object.prototype 原型链上的属性或者方法,例如：toString(), hasOwnProperty()等方法

模拟实现Object.create的方法

关键代码如下, 只考虑一个参数的情况：
```javascript
Object.create = function(o) {
  var F = function () {}
  F.prototype = o
  return new F()
}
```
```javascript
function create(proto, options) {
    // 创建一个空对象
    var tmp = {};

    // 让这个新的空对象成为父类对象的实例
    tmp.__proto__ = proto;

    // 传入的方法都挂载到新对象上，新的对象将作为子类对象的原型
    Object.defineProperties(tmp, options);
    return tmp;
}
```
上述2段代码的核心实现逻辑是相同的，



