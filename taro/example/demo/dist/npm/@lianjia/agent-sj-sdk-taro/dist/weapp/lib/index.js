"use strict";
var $ULog = require("./ulog/index.js"),
    _require = require("./common/index.weapp.js"),
    createIntersectionObserver = _require.createIntersectionObserver;function log(e, i) {
  var r = i.globalData,
      a = i.digV,
      o = r && r.cityId,
      t = r && r.userInfo.wxData.openid;delete i.globalData;var n = { e_plan: a, open_id: t };for (var c in i) n[c] = i[c];$ULog.send({ evt: e, key: e, pid: "shangyehua_pc_sdk", cid: o, city_code: o, action: n });
}var avatarClick = function (e) {
  log("13755", e);
},
    imClick = function (e) {
  log("13756", e);
},
    phoneClick = function (e) {
  log("13757", e);
},
    observerArr = [];function setObserver(e) {
  e.forEach(function (r) {
    var a = "." + r,
        o = createIntersectionObserver();if (-1 === observerArr.indexOf(r)) {
      observerArr.push(r);new Promise(function (i, e) {
        o.relativeToViewport().observe(a, function (e) {
          console.log("relativeView", e), 0 < e.intersectionRatio && i(e);
        });
      }).then(function (e) {
        o.disconnect(), e.dataset && "{}" !== JSON.stringify(e.dataset) && e.dataset.digV && log("13750", { digV: e.dataset.digV });var i = observerArr.indexOf(r);observerArr.splice(i, 1);
      }).catch(function (e) {
        console.log(e);
      });
    }
  });
}function automaticPageView(e) {
  observerArr = [], setObserver(e);
}function manualPageView(e) {
  log("13750", e);
}module.exports = { avatarClick: avatarClick, imClick: imClick, phoneClick: phoneClick, automaticPageView: automaticPageView, manualPageView: manualPageView };