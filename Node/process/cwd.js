const fs = require('fs')
const path = require('path')
/**
 * 获取package.json的内容
 */
const getPackage = (appPath = process.cwd()) => {
  appPath = path.join('/', appPath)
  while(appPath !== '/') {
    const pkgPath = path.join(appPath, 'package.json')
    if (fs.existsSync(pkgPath)) return require(pkgPath)
    appPath = path.dirname(appPath)
  }
  return null
}
module.exports = getPackage