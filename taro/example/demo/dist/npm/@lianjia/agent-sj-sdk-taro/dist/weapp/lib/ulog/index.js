"use strict";
var _require = require("../common/index.weapp.js"),
    getStorageSync = _require.getStorageSync,
    setStorageSync = _require.setStorageSync,
    request = _require.request,
    requestUrl = "https://dig.lianjia.com/c.gif";module.exports = { requestUrl: requestUrl, storageKey: "SJLogData", checkSSID: function () {
    var e = getStorageSync(this.storageKey) || "";e = JSON.parse(e);var t = parseInt(e.first_ssid_time),
        r = new Date().getTime();return 30 < parseInt(r - t) / 1e3 / 60;
  }, getUUID: function () {
    var r = new Date().getTime();return "xxxyxxxx-xxxx-xxxx-yxxx-xxxxxxx4xxxx".replace(/[xy]/g, function (e) {
      var t = (r + 16 * Math.random()) % 16 | 0;return r = Math.floor(r / 16), ("x" == e ? t : 10 & t | 8).toString(16);
    });
  }, saveSJLogData: function (e) {
    setStorageSync(this.storageKey, JSON.stringify(e));
  }, makePublicParams: function () {
    var e = {},
        t = getStorageSync(this.storageKey) || "",
        r = new Date().getTime();return t ? (t = JSON.parse(t), e.uuid = t.uuid, this.checkSSID() ? e.ssid = this.getUUID() : (e.ssid = t.ssid, r = t.first_ssid_time)) : (e.uuid = this.getUUID(), e.ssid = this.getUUID()), this.saveSJLogData({ uuid: e.uuid, ssid: e.ssid, first_ssid_time: r }), e;
  }, send: function (e) {
    var t = this.makePublicParams(),
        r = {};for (var s in e) r[s] = e[s];for (var s in t) r[s] = t[s];e = encodeURIComponent(JSON.stringify(r));var i = [];i.push("r=" + +new Date()), i.push("d=" + e), request({ url: this.requestUrl + "?" + i.join("&"), method: "GET", data: this.data, complete: function () {} });
  } };