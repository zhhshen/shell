import moment from 'moment'
const date = moment().format('YYYY-MM-DD HH:mm:ss')
import _ from 'lodash'
console.log('第三个入口文件', date + _.join(['third', 'file'], '-'))