"use strict";
var _index = require("../../npm/@tarojs/taro-weapp/index.js"),
    _index2 = _interopRequireDefault(_index);function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}function setStorageSync(e, t) {
  _index2.default.setStorageSync(e, t);
}function getStorageSync(e) {
  return _index2.default.setStorageSync(e);
}function request() {
  var e = 0 < arguments.length && undefined !== arguments[0] ? arguments[0] : {};return _index2.default.request(e);
}function createIntersectionObserver() {
  var e = 0 < arguments.length && undefined !== arguments[0] ? arguments[0] : {};return _index2.default.createIntersectionObserver(this, e);
}module.exports = { setStorageSync: setStorageSync, getStorageSync: getStorageSync, request: request, createIntersectionObserver: createIntersectionObserver };