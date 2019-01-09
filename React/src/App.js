import React from 'react'
import Hidden from './Hidden'
const App = () => {
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
          {
            record.toFang && record.toKe && record.toSecondHand
            && <span>
              <a style={{padding: 20}} href="https://bj.ke.com">贝壳首页</a>
              <a style={{padding: 20}} href="https://bj.ke.com/ershoufang/">二手房</a>
              <a style={{padding: 20}} href="https://bj.fang.ke.com/loupan/">新房</a>
            </span>
          }
          <Hidden 
            visible={record.toFang && record.toKe && record.toSecondHand} 
            tag='span'>
            <a href="https://bj.ke.com">贝壳首页</a>
            <a style={{padding: 20}} href="https://bj.ke.com/ershoufang/">二手房</a>
            <a style={{padding: 20}} href="https://bj.fang.ke.com/loupan/">新房</a>
          </Hidden>
        </li>
        <li>
          <h3>react模拟实现vue中v-if指令</h3>
          <Hidden visible={record.toKe} tag='span'>
            <a href="https://bj.ke.com">贝壳首页</a>
            <a href="https://bj.ke.com">贝壳首页</a>
          </Hidden>
          <Hidden visible={record.toSecondHand} tag='span' style={{padding: 20}}>
            <a href="https://bj.ke.com/ershoufang/">二手房</a>
            <a href="https://bj.ke.com/ershoufang/">二手房</a>
            <a href="https://bj.ke.com/ershoufang/">二手房</a>
          </Hidden>
          <Hidden visible={record.toFang} tag='p'>
            <a href="https://bj.fang.ke.com/loupan/">新房</a>
            <a href="https://bj.fang.ke.com/loupan/">新房</a>
            <a href="https://bj.fang.ke.com/loupan/">新房</a>
          </Hidden>
        </li>
      </ul>
    </div>
  )
}
export default App
