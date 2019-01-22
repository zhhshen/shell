import React, { Component } from 'react'
import moment from 'moment'

export default class base extends Component {
  componentDidMount() {
    console.log('help--', moment().format('YYYY-MM-DD HH:mm:ss'))
  }
  
  render() {
    return (
      <div>
        <h1>帮助页面</h1>
      </div>
    )
  }
}
