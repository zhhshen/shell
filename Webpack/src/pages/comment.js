import React, { Component } from 'react'
import moment from 'moment'
export default class comment extends Component {
  componentDidMount() {
    console.log('comment')
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
  }
  
  render() {
    return (
      <div>
        <h1>评论页面</h1>
      </div>
    )
  }
}
