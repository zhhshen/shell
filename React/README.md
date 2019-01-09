#  开发小结

### 基于photoswipe封装的图片预览组件

### React模拟vue中的v-if指令

react开发中， 经常会使用三目表示去判断是否渲染某块dom结构

例如，如下的代码

```
const record = {
    toKe: true, // 贝壳首页
    toSecondHand: true, // 二手房
    toFang: true, // 新房
  }
  return (
    <div style={{width: 600, margin: '50px auto'}}>
      <ul>
        <li>
          <h3>react常规写法</h3>
          {
            record.toKe
            ? <a style={{padding: 20}} href="https://bj.ke.com">贝壳首页</a>
            : null
          }
          {
            record.toSecondHand
            ? <a style={{padding: 20}} href="https://bj.ke.com/ershoufang/">二手房</a>
            : null
          }
          {
            record.toFang
            ? <a style={{padding: 20}} href="https://bj.fang.ke.com/loupan/">新房</a>
            : null
          }
        </li>
      </ul>
    </div>
```
功能上没有问题，代码结构上稍显混乱。用过vue的同学，会发现vue中的v-if指令简单好用，能否在react中实现类似的功能。这里通过一个组件去实现这个功能

问题：通过自定义的Hidden虽然替代了常用的三目判断, 减少了几行代码，也带来了一个问题？ 如何自定义tag ?

### curl命令查看接口数据

```bash
curl 'https://banner-storage-ms.juejin.im/v1/web/page/aanner?position=hero&platform=web&page=0&pageSize=20&src=web' -H 'Pragma: no-cache' -H 'Origin: https://juejin.im' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36' -H 'Accept: */*' -H 'Referer: https://juejin.im/?utm_source=gold_browser_extension' -H 'Connection: keep-alive' -H 'Cache-Control: no-cache' --compressed
```

通过json格式化接口数据

```
npm install json -g
```
### 生成结构目录树

```
brew install tree
```
```
tree -L 3 -I "node_modules" >tree.txt
```
.
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── App.js
│   ├── Hidden.js
│   ├── index.html
│   └── index.js
├── tree.txt
└── webpack.config.js

