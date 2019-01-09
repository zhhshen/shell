import React, { Component } from 'react'
import Loadable from "react-loadable"
import moment from 'moment'
// import Comment from './comment'
const Comment = Loadable({
  loader: () => import('./comment'),
  loading: () => <div>加载中。。。</div>
})
export default class base extends Component {
  componentDidMount() {
    console.log('base')
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
  }
  
  render() {
    return (
      <div>
        <h1>基础页面</h1>
        <Comment />
      </div>
    )
  }
}
