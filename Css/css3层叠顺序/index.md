## css3层叠顺序
---

在css中，每一个盒模型的位置都是三维的，x轴和y轴定位，还有盒与盒之间的层叠关系。
定位元素，可以通过z-index属性来确定它们之间的相互层叠关系


![](assets/images/2016-01-09_211116.png)

上面的图片表示不同类型盒层叠级别的高低，下面由低到高进行一下说明:

- 背景和边框:建立当前层叠上下文元素的背景和边框。

- 负的z-index:当前层叠上下文中，z-index属性值为负的元素。

- 块级盒:文档流内非行内级非定位后代元素。

- 浮动盒:非定位浮动元素。

- 行内盒:文档流内行内级非定位后代元素。

- z-index:0：层叠级数为0的定位元素。

- 正z-index:z-index属性值为正的定位元素。

注：当定位元素z-index:auto，生成盒在当前层叠上下文中的层级为 0，不会建立新的层叠上下文，除非是根元素。

### 创建层叠上下文（stack-context）
只要满足一定的条件，元素就可以创建一个层叠上下文，概括为三类

* 根元素 (HTML)会天然创建一个层叠上下文，无需特殊条件，称之为“根层叠上下文”。
* z-index值为数值(不为auto)的绝对定位或者相对定位元素的传统层叠上下文
* 其他css属性

其他css属性包含下面的这些：

- 一个 z-index 值不为 "auto"的 flex 项目 (flex item)，即：父元素 display: flex|inline-flex，。
- opacity 属性值小于 1 的元素
- mix-blend-mode 属性值不为 "normal"的元素
- filter值不为“none”的元素，
- perspective值不为“none”的元素，
- isolation 属性被设置为 "isolate"的元素，
- position: fixed
- 在 will-change 中指定了任意 CSS 属性，即便你没有直接指定这些属性的值。
- -webkit-overflow-scrolling 属性被设置 "touch"的元素


#### 包含z-index的堆叠

- z-index只针对指定了position属性的元素有效
- 当没有指定z-index的时候， 所有元素都在会被渲染在默认层(0层)
- 当多个元素的z-index属性相同的时候(在同一个层里面)


看一个例子 **d1.html**


#### 不包含z-index的堆叠

看一个例子 **d2.html**

当没有元素包含z-index属性时，元素按照如下元素堆叠（从底到顶顺序）
1 根元素的背景和边界
2 普通流（无定位）里的块元素（没有position或者position:static）,按HTML中的顺序堆叠
3 定位元素按HTML中的出现顺序堆叠

注：子元素的z-index值只在父级层叠上下文中有意义


参考资料：https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/