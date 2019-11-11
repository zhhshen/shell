import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
// 测试代码
const env = process.env.TARO_ENV
console.log(env)
const SJLog = require('@lianjia/agent-sj-sdk-taro/dist/'+ env)
let app = getApp()
let globalData = app.globalData
let digV = {"adid": "100003075040"}
console.log('SJLog', SJLog)
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  handleClickAvatar = (e) => {
    e.stopPropagation()
    SJLog.avatarClick({
      globalData,
      digV, // 经纪人接口数据返回
    })
  }

  componentWillMount () { }

  componentDidMount () {
    // 经纪人接口数据返回
    SJLog.manualPageView({
      globalData,
      digV,
    })
    console.log('2')
    const sjClasses = ['SJPAGECLASS', 'SJPAGECLASS2']
    SJLog.automaticPageView(sjClasses)
  }

  componentWillUnmount () { }

  componentDidShow () {
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <View className='SJPAGECLASS' data-dig-v='{adid: 100003075040}'>1</View>
        <View className='SJPAGECLASS2' data-dig-v='{adid: 100003075041}'>2</View>
        <Button onClick={this.handleClickAvatar}>点击头像</Button>
      </View>
    )
  }
}
