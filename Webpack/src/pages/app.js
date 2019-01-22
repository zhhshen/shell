import React, { Component } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Loadable from "react-loadable"
import { Layout, Menu } from 'antd'
const {  Header, Content, Sider } = Layout
// 静态引入
import Home from './home'
import Help from './help'
import Comment from './comment'
// 按需加载
// const Loading = () => <div>加载中。。。</div>
// const Home = Loadable({
//   loader: () => import('./home'),
//   loading: Loading
// })
// const Help = Loadable({
//   loader: () => import('./help'),
//   loading: Loading
// })
// const Comment = Loadable({
//   loader: () => import('./comment'),
//   loading: Loading
// })
export default class Index extends Component {
  componentDidMount() {
    // console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
  }
  
  render() {
    return (
      <div>
        <Layout>
          <Header>
            <div className="logo">
              <h1>欢迎页</h1>
            </div>
            <ul>
              <li><Link to="/home">主页</Link></li>
              <li><Link to="/help">帮助页</Link></li>
              <li><Link to="/comment">评论页</Link></li>
            </ul>
          </Header>
          <Content>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/help" component={Help} />
              <Route path="/comment" component={Comment} />
            </Switch>
          </Content>
        </Layout>
      </div>
    )
  }
}
