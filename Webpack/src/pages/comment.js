import React, { Component } from 'react'
import moment from 'moment'
import _ from 'lodash'
export default class comment extends Component {
  componentDidMount() {
    console.log('comment', moment().format('YYYY-MM-DD HH:mm:ss'))
    console.log(_.join(['comment', 'list'], '/'))
  }
  
  render() {
    return (
      <div>
        <h1>评论页面</h1>
      </div>
    )
  }
}
