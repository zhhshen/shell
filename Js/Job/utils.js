// 获取当前浏览器支持的transform兼容写法
export const getTransform = () => {
  let transform = ''
  let divStyle = document.createElement('div').style
  let transformArr = ['transform', 'webkitTransform', 'MozTransform', 'msTransform', 'OTransform']
  transformArr.forEach(item => {
    if (transformArr[item] in transformArr) {
      return transform = transformArr[item]
    }
  })
  for(i = 0; i < transformArr.length; i++)  {
    if(transformArr[i] in divStyle) {
        // 找到之后立即返回，结束函数
        return transform = transformArr[i];
    }
  }
  return transform
}
// 获取元素的样式
export const getStyle = (elem, attr) => {
  return elem.currentStyle ? elem.currentStyle[attr] : window.getComputedStyle(elem, null)[attr]
}

