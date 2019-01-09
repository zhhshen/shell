import React, { Component } from 'react'
import Loadable from "react-loadable"
import moment from 'moment'
// import Base from './base'
const Base = Loadable({
  loader: () => import('./base'),
  loading: () => <div>加载中。。。</div>
})
export default class home extends Component {
  componentDidMount() {
    console.log('home')
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
  }
  
  render() {
    return (
      <div>
        <h3>主页面</h3>
        <Base />
      </div>
    )
  }
}
