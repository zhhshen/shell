# 抽象相等比较算法

---

Js 的数据类型值有 2 种类型：原始类型（primitive type）。引用类型（Object）

## 数据类型

---

### 原始类型

- Undefined(只有一个值 undefined)  // typeOf(Undefined) === 'undefined'
- Null(只有一个值 null)  // typeOf(Null) === 'object'
- Boolean(有 2 种 true 和 false) // typeOf(Boolean) === 'boolean'
- String // typeOf(String) === 'string'
- Number // typeOf(Null) === 'number'

### 引用类型

- Object   // typeOf(引用类型) === 'object'

原始类型和引用类型分别称为**原始值**和**复杂值**；

原始值是固定而简单的值,是存放在栈(stack)中的简单数据段,也就是说,

## 抽象相等比较算法

```javascript
用Type(z)代表z的数据类型，比较运算 x==y，其中x和y是值，产生true或false。
1. Type(x)与Type(y)类型相同
  a. 如果Type(x)为Undefined或Null,则返回true 
    undefined == undefined // true
    null == null // true

  b. 如果Type(x)为Number, 如果x或者y为NaN, 返回false
    i. 如果x或者y有一个为NaN, 返回false
    ii. 如果x与y数值相等，返回true
    iii. 若x为+0，y为-0，返回true
    iv. 若x为-0，y为+0，返回true
    v. 返回false

  c. 如果Type(x)为String,则x和y对应位置的字符完全一样才返回true,否则返回false
  d. 如果Type(x)为Boolean,则相同值返回true,否则false
  f. 当x和y引用同一对象时，返回true，否则，返回false
    var a = { m: 1 }
    var b = { m: 1 }
    console.log(a == b) // false, a, b不是相同的引用
    var a = { m: 1 }
    b = a
    console.log(a == b) // true
  
2. x为undefined,y为null,返回true，反之亦然
3. Type(x)为String,Type(y)为Number,则返回比较ToNumber(x) == y，反之亦然
4. Type(x)为Boolean,则返回比较ToNumber(x)==y的结果，反之亦然
5. Type(x)为String或Number,Type(y)为Object,则返回比较ToPrimitive(y) == x
   1 == new String('1') // true
   '2' == new Number(2) // true
6. 返回false
```
## 严格相等 ===

```javascript
1. 如果 Type(x) 与 Type(y) 的结果不一致，返回 false，即只要类型不一样，则返回false
2. 如果Type(x)是Number,如果x或y为NaN,返回false
  NaN === NaN  // false
  x与y数值相等或-0与+0均返回true, 否则返回false
3. 如果x和y 结果为 Undefined，返回 true
   如果 Type(x) 结果为 Null，返回 true
  如果Type(x)为Object,则相同引用返回true,否则false
  如果Type(x)为String,则x和y对应位置的字符完全一样才返回true,否则返回false
  如果Type(x)为Boolean,则相同值返回true,否则false
```
一些注意的点：
```javascript
1 NaN不与任何数相等， isNaN()是判断一个数能否转换为数字而不是判断一个数是不是NaN：
  isNaN("123")  //false  能转化为数字为false
  isNaN("abc")  //true   不能转换为数字为true
  isNaN(NaN)    //true
2 Object类型要通过引用是否相同判断，Object和String的比较是通过将Object转化为基本类型：
> "ab"  == new String("ab")              //true
> new String("ab")  == new String("ab")  //false  

### toBoolean

输入类型 | 结果
---| ---



