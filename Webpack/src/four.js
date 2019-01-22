let element = document.createElement('button')
element.innerHTML = '加载lodash'
element.onclick = async () => {
  const moment = await import('moment')
  const _ = await import('lodash')  
  const date = moment().format('YYYY-MM-DD HH:mm:ss')
  console.log('第三个入口文件', date + _.join(['third', 'file'], '-'))
}
document.getElementById('app').appendChild(element)