import React, { Component } from 'react'
import moment from 'moment'
export default class home extends Component {
  componentDidMount() {
    console.log('home--', moment().format('YYYY-MM-DD HH:mm:ss'))
  }
  
  render() {
    return (
      <div>
        <h2>home页面</h2>
      </div>
    )
  }
}
