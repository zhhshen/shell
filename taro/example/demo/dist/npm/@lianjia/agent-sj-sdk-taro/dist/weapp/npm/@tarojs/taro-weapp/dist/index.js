"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var taro = require("../npm/@tarojs/taro/index.js"),
    objectIs = Object.is || function (e, t) {
  return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
};function shallowEqual(e, t) {
  if (null === e && null === t) return true;if (null === e || null === t) return false;if (objectIs(e, t)) return true;var n = e ? Object.keys(e) : [],
      r = t ? Object.keys(t) : [];if (n.length !== r.length) return false;for (var o = 0; o < n.length; o++) {
    var a = n[o];if (!t.hasOwnProperty(a) || !objectIs(e[a], t[a])) return false;
  }return true;
}function addLeadingSlash(e) {
  return "/" === e.charAt(0) ? e : "/" + e;
}function getCurrentPageUrl() {
  var e = getCurrentPages(),
      t = e[e.length - 1];return addLeadingSlash(t.route || t.__route__);
}function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r);
  }
}function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: true, configurable: true, writable: true }) : e[t] = n, e;
}function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable;
    }))), r.forEach(function (e) {
      _defineProperty(t, e, n[e]);
    });
  }return t;
}function _inherits(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: true, configurable: true } }), t && _setPrototypeOf(e, t);
}function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  })(e);
}function _setPrototypeOf(e, t) {
  return (_setPrototypeOf = Object.setPrototypeOf || function (e, t) {
    return e.__proto__ = t, e;
  })(e, t);
}function _assertThisInitialized(e) {
  if (undefined === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;
}function _possibleConstructorReturn(e, t) {
  return !t || "object" != typeof t && "function" != typeof t ? _assertThisInitialized(e) : t;
}function _toConsumableArray(e) {
  return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread();
}function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];return n;
  }
}function _iterableToArray(e) {
  if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
}function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}var nextTick = function (e) {
  for (var t, n = arguments.length, r = new Array(1 < n ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];e = "function" == typeof e ? (t = e).bind.apply(t, [null].concat(r)) : e, (wx.nextTick ? wx.nextTick : setTimeout)(e);
},
    commonjsGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};function createCommonjsModule(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}var getOwnPropertySymbols = Object.getOwnPropertySymbols,
    hasOwnProperty = Object.prototype.hasOwnProperty,
    propIsEnumerable = Object.prototype.propertyIsEnumerable;function toObject(e) {
  if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e);
}function shouldUseNative() {
  try {
    if (!Object.assign) return false;var e = new String("abc");if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return false;for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
      return t[e];
    }).join("")) return false;var r = {};return "abcdefghijklmnopqrst".split("").forEach(function (e) {
      r[e] = e;
    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
  } catch (e) {
    return false;
  }
}var objectAssign = shouldUseNative() ? Object.assign : function (e, t) {
  for (var n, r, o = toObject(e), a = 1; a < arguments.length; a++) {
    for (var i in n = Object(arguments[a])) hasOwnProperty.call(n, i) && (o[i] = n[i]);if (getOwnPropertySymbols) {
      r = getOwnPropertySymbols(n);for (var s = 0; s < r.length; s++) propIsEnumerable.call(n, r[s]) && (o[r[s]] = n[r[s]]);
    }
  }return o;
},
    ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    ReactPropTypesSecret_1 = ReactPropTypesSecret,
    printWarning = function () {};function checkPropTypes(e, t, n, r, o) {}var checkPropTypes_1 = checkPropTypes,
    printWarning$1 = function () {};function emptyFunctionThatReturnsNull() {
  return null;
}var factoryWithTypeCheckers = function (i, p) {
  var a = "function" == typeof Symbol && Symbol.iterator,
      s = "@@iterator";var u = "<<anonymous>>",
      e = { array: t("array"), bool: t("boolean"), func: t("function"), number: t("number"), object: t("object"), string: t("string"), symbol: t("symbol"), any: n(emptyFunctionThatReturnsNull), arrayOf: function (c) {
      return n(function (e, t, n, r, o) {
        if ("function" != typeof c) return new f("Property `" + o + "` of component `" + n + "` has invalid PropType notation inside arrayOf.");var a = e[t];if (!Array.isArray(a)) return new f("Invalid " + r + " `" + o + "` of type `" + d(a) + "` supplied to `" + n + "`, expected an array.");for (var i = 0; i < a.length; i++) {
          var s = c(a, i, n, r, o + "[" + i + "]", ReactPropTypesSecret_1);if (s instanceof Error) return s;
        }return null;
      });
    }, element: n(function (e, t, n, r, o) {
      var a = e[t];return i(a) ? null : new f("Invalid " + r + " `" + o + "` of type `" + d(a) + "` supplied to `" + n + "`, expected a single ReactElement.");
    }), instanceOf: function (i) {
      return n(function (e, t, n, r, o) {
        if (e[t] instanceof i) return null;var a = i.name || u;return new f("Invalid " + r + " `" + o + "` of type `" + function (e) {
          return e.constructor && e.constructor.name ? e.constructor.name : u;
        }(e[t]) + "` supplied to `" + n + "`, expected instance of `" + a + "`.");
      });
    }, node: n(function (e, t, n, r, o) {
      return l(e[t]) ? null : new f("Invalid " + r + " `" + o + "` supplied to `" + n + "`, expected a ReactNode.");
    }), objectOf: function (p) {
      return n(function (e, t, n, r, o) {
        if ("function" != typeof p) return new f("Property `" + o + "` of component `" + n + "` has invalid PropType notation inside objectOf.");var a = e[t],
            i = d(a);if ("object" !== i) return new f("Invalid " + r + " `" + o + "` of type `" + i + "` supplied to `" + n + "`, expected an object.");for (var s in a) if (a.hasOwnProperty(s)) {
          var c = p(a, s, n, r, o + "." + s, ReactPropTypesSecret_1);if (c instanceof Error) return c;
        }return null;
      });
    }, oneOf: function (s) {
      if (!Array.isArray(s)) return emptyFunctionThatReturnsNull;return n(function (e, t, n, r, o) {
        for (var a = e[t], i = 0; i < s.length; i++) if (c(a, s[i])) return null;return new f("Invalid " + r + " `" + o + "` of value `" + a + "` supplied to `" + n + "`, expected one of " + JSON.stringify(s) + ".");
      });
    }, oneOfType: function (i) {
      if (!Array.isArray(i)) return emptyFunctionThatReturnsNull;for (var e = 0; e < i.length; e++) {
        var t = i[e];if ("function" != typeof t) return printWarning$1("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + r(t) + " at index " + e + "."), emptyFunctionThatReturnsNull;
      }return n(function (e, t, n, r, o) {
        for (var a = 0; a < i.length; a++) {
          if (null == (0, i[a])(e, t, n, r, o, ReactPropTypesSecret_1)) return null;
        }return new f("Invalid " + r + " `" + o + "` supplied to `" + n + "`.");
      });
    }, shape: function (u) {
      return n(function (e, t, n, r, o) {
        var a = e[t],
            i = d(a);if ("object" !== i) return new f("Invalid " + r + " `" + o + "` of type `" + i + "` supplied to `" + n + "`, expected `object`.");for (var s in u) {
          var c = u[s];if (c) {
            var p = c(a, s, n, r, o + "." + s, ReactPropTypesSecret_1);if (p) return p;
          }
        }return null;
      });
    }, exact: function (l) {
      return n(function (e, t, n, r, o) {
        var a = e[t],
            i = d(a);if ("object" !== i) return new f("Invalid " + r + " `" + o + "` of type `" + i + "` supplied to `" + n + "`, expected `object`.");var s = objectAssign({}, e[t], l);for (var c in s) {
          var p = l[c];if (!p) return new f("Invalid " + r + " `" + o + "` key `" + c + "` supplied to `" + n + "`.\nBad object: " + JSON.stringify(e[t], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(l), null, "  "));var u = p(a, c, n, r, o + "." + c, ReactPropTypesSecret_1);if (u) return u;
        }return null;
      });
    } };function c(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
  }function f(e) {
    this.message = e, this.stack = "";
  }function n(c) {
    function e(e, t, n, r, o, a, i) {
      if (r = r || u, a = a || n, i !== ReactPropTypesSecret_1 && p) {
        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw s.name = "Invariant Violation", s;
      }return null == t[n] ? e ? null === t[n] ? new f("The " + o + " `" + a + "` is marked as required in `" + r + "`, but its value is `null`.") : new f("The " + o + " `" + a + "` is marked as required in `" + r + "`, but its value is `undefined`.") : null : c(t, n, r, o, a);
    }var t = e.bind(null, false);return t.isRequired = e.bind(null, true), t;
  }function t(s) {
    return n(function (e, t, n, r, o, a) {
      var i = e[t];return d(i) === s ? null : new f("Invalid " + r + " `" + o + "` of type `" + y(i) + "` supplied to `" + n + "`, expected `" + s + "`.");
    });
  }function l(e) {
    switch (_typeof(e)) {case "number":case "string":case "undefined":
        return true;case "boolean":
        return !e;case "object":
        if (Array.isArray(e)) return e.every(l);if (null === e || i(e)) return true;var t = function (e) {
          var t = e && (a && e[a] || e[s]);if ("function" == typeof t) return t;
        }(e);if (!t) return false;var n,
            r = t.call(e);if (t !== e.entries) {
          for (; !(n = r.next()).done;) if (!l(n.value)) return false;
        } else for (; !(n = r.next()).done;) {
          var o = n.value;if (o && !l(o[1])) return false;
        }return true;default:
        return false;}
  }function d(e) {
    var t = _typeof(e);return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : function (e, t) {
      return "symbol" === e || "Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol;
    }(t, e) ? "symbol" : t;
  }function y(e) {
    if (null == e) return "" + e;var t = d(e);if ("object" === t) {
      if (e instanceof Date) return "date";if (e instanceof RegExp) return "regexp";
    }return t;
  }function r(e) {
    var t = y(e);switch (t) {case "array":case "object":
        return "an " + t;case "boolean":case "date":case "regexp":
        return "a " + t;default:
        return t;}
  }return f.prototype = Error.prototype, e.checkPropTypes = checkPropTypes_1, e.PropTypes = e;
};function emptyFunction() {}var factoryWithThrowingShims = function () {
  function e(e, t, n, r, o, a) {
    if (a !== ReactPropTypesSecret_1) {
      var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name = "Invariant Violation", i;
    }
  }function t() {
    return e;
  }var n = { array: e.isRequired = e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t };return n.checkPropTypes = emptyFunction, n.PropTypes = n;
},
    propTypes = createCommonjsModule(function (e) {
  e.exports = factoryWithThrowingShims();
}),
    freeGlobal = "object" == _typeof(commonjsGlobal) && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal,
    _freeGlobal = freeGlobal,
    freeSelf = "object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
    root = _freeGlobal || freeSelf || Function("return this")(),
    _root = root,
    _Symbol2 = _root.Symbol,
    _Symbol = _Symbol2,
    objectProto = Object.prototype,
    hasOwnProperty$1 = objectProto.hasOwnProperty,
    nativeObjectToString = objectProto.toString,
    symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;function getRawTag(e) {
  var t = hasOwnProperty$1.call(e, symToStringTag),
      n = e[symToStringTag];try {
    e[symToStringTag] = undefined;
  } catch (e) {}var r = nativeObjectToString.call(e);return t ? e[symToStringTag] = n : delete e[symToStringTag], r;
}var _getRawTag = getRawTag,
    objectProto$1 = Object.prototype,
    nativeObjectToString$1 = objectProto$1.toString;function objectToString(e) {
  return nativeObjectToString$1.call(e);
}var _objectToString = objectToString,
    nullTag = "[object Null]",
    undefinedTag = "[object Undefined]",
    symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;function baseGetTag(e) {
  return null == e ? undefined === e ? undefinedTag : nullTag : symToStringTag$1 && symToStringTag$1 in Object(e) ? _getRawTag(e) : _objectToString(e);
}var _baseGetTag = baseGetTag;function overArg(t, n) {
  return function (e) {
    return t(n(e));
  };
}var _overArg = overArg,
    getPrototype = _overArg(Object.getPrototypeOf, Object),
    _getPrototype = getPrototype;function isObjectLike(e) {
  return null != e && "object" == _typeof(e);
}var isObjectLike_1 = isObjectLike,
    objectTag = "[object Object]",
    funcProto = Function.prototype,
    objectProto$2 = Object.prototype,
    funcToString = funcProto.toString,
    hasOwnProperty$2 = objectProto$2.hasOwnProperty,
    objectCtorString = funcToString.call(Object);function isPlainObject(e) {
  if (!isObjectLike_1(e) || _baseGetTag(e) != objectTag) return false;var t = _getPrototype(e);if (null === t) return true;var n = hasOwnProperty$2.call(t, "constructor") && t.constructor;return "function" == typeof n && n instanceof n && funcToString.call(n) == objectCtorString;
}var isPlainObject_1 = isPlainObject;function isEmptyObject(e) {
  if (!e || !isPlainObject_1(e)) return false;for (var t in e) if (e.hasOwnProperty(t)) return false;return true;
}function isUndefined(e) {
  return undefined === e;
}function isFunction(e) {
  return "function" == typeof e;
}function isArray(e) {
  return Array.isArray(e);
}function shakeFnFromObject(e) {
  var t;if (isArray(e)) {
    t = [];for (var n = e.length, r = 0; r < n; r++) t.push(shakeFnFromObject(e[r]));
  } else {
    if (!isPlainObject_1(e)) return e;for (var o in t = {}, e) if (!isFunction(e[o])) {
      var a = shakeFnFromObject(e[o]);t[o] = a;
    }
  }return t;
}var keyList = Object.keys,
    hasProp = Object.prototype.hasOwnProperty;function diffArrToPath(s, c) {
  for (var p = 2 < arguments.length && undefined !== arguments[2] ? arguments[2] : {}, u = 3 < arguments.length && undefined !== arguments[3] ? arguments[3] : "", e = s.length, t = function (e) {
    var t = s[e],
        n = c[e],
        r = "".concat(u, "[").concat(e, "]");if (t === n) return "continue";if (_typeof(t) !== _typeof(n)) p[r] = t;else if ("object" !== _typeof(t)) p[r] = t;else {
      var o = isArray(t),
          a = isArray(n);if (o !== a) p[r] = t;else if (o && a) t.length < n.length ? p[r] = t : diffArrToPath(t, n, p, "".concat(r));else if (!t || !n || keyList(t).length < keyList(n).length) p[r] = t;else {
        var i = true;Object.keys(n).some(function (e) {
          if (undefined === t[e] && undefined !== n[e]) return !(i = false);
        }), i ? diffObjToPath(t, n, p, "".concat(r, ".")) : p[r] = t;
      }
    }
  }, n = 0; n < e; n++) t(n);return p;
}function diffObjToPath(c, p) {
  for (var u = 2 < arguments.length && undefined !== arguments[2] ? arguments[2] : {}, l = 3 < arguments.length && undefined !== arguments[3] ? arguments[3] : "", f = keyList(c), e = f.length, t = function (e) {
    var t = f[e],
        n = c[t],
        r = p[t],
        o = "".concat(l).concat(t);if (n === r) return "continue";if (hasProp.call(p, t)) {
      if (_typeof(n) !== _typeof(r)) u[o] = n;else if ("object" !== _typeof(n)) u[o] = n;else {
        var a = isArray(n),
            i = isArray(r);if (a !== i) u[o] = n;else if (a && i) n.length < r.length ? u[o] = n : diffArrToPath(n, r, u, "".concat(o));else if (n && r) {
          var s = true;Object.keys(r).some(function (e) {
            if (undefined === n[e] && undefined !== r[e]) return !(s = false);
          }), s ? diffObjToPath(n, r, u, "".concat(o, ".")) : u[o] = n;
        } else u[o] = n;
      }
    } else u[o] = n;
  }, n = 0; n < e; n++) t(n);return u;
}function queryToJson(e) {
  for (var t, n, r, o = decodeURIComponent, a = e.split("&"), i = {}, s = 0, c = a.length; s < c; ++s) if ((r = a[s]).length) {
    var p = r.indexOf("=");n = p < 0 ? (t = o(r), "") : (t = o(r.slice(0, p)), o(r.slice(p + 1))), "string" == typeof i[t] && (i[t] = [i[t]]), isArray(i[t]) ? i[t].push(n) : i[t] = n;
  }return i;
}var _loadTime = new Date().getTime().toString(),
    _i = 1;function getUniqueKey() {
  return _loadTime + _i++;
}function getElementById(e, t, n) {
  if (!e) return null;var r;"component" === n ? r = (r = e.selectComponent(t)) ? r.$component || r : null : r = wx.createSelectorQuery().in(e).select(t);return r || null;
}var id$1 = 0;function genId() {
  return String(id$1++);
}var compIdsMapper = new Map();function genCompid(e) {
  if (taro.Current && taro.Current.current && taro.Current.current.$scope) {
    var t = compIdsMapper.get(e),
        n = t || genId();return t || compIdsMapper.set(e, n), n;
  }
}var prefix = 0;function genCompPrefix() {
  return String(prefix++);
}var data = {};function cacheDataSet(e, t) {
  data[e] = t;
}function cacheDataGet(e, t) {
  var n = data[e];return t && delete data[e], n;
}function cacheDataHas(e) {
  return e in data;
}var Manager = function () {
  function e() {
    _classCallCheck(this, e), _defineProperty(this, "map", {}), _defineProperty(this, "observers", {});
  }return _createClass(e, [{ key: "set", value: function (e, t) {
      var n = 0 < arguments.length && undefined !== e ? e : {},
          a = 1 < arguments.length ? t : undefined;if (a) {
        var i = this.observers;this.map[a] || Object.defineProperty(this.map, a, { configurable: true, get: function () {
            return this["__".concat(a)];
          }, set: function (e) {
            this["__".concat(a)] = e;var t = i[a] && i[a].component,
                n = i[a] && i[a].ComponentClass;if (t && n && t.__isReady) {
              var r = t.$scope && t.$scope.data && t.$scope.data.extraProps || null,
                  o = filterProps(n.defaultProps, e, t.props, r);t.props = o, nextTick(function () {
                t._unsafeCallUpdate = true, updateComponent(t), t._unsafeCallUpdate = false;
              });
            }
          } }), this.map[a] = n;
      }
    } }, { key: "delete", value: function (e) {
      delete this.map[e], delete this.map["__".concat(e)], delete this.observers[e];
    } }]), e;
}(),
    propsManager = new Manager(),
    anonymousFnNamePreffix = "funPrivate",
    routerParamsPrivateKey = "__key_",
    preloadPrivateKey = "__preload_",
    PRELOAD_DATA_KEY = "preload",
    preloadInitedComponent = "$preloadComponent",
    pageExtraFns = ["onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap", "onResize"];function bindProperties(e, n, t) {
  if (e.properties = {}, t) {
    e.properties[routerParamsPrivateKey] = { type: null, value: null }, e.properties[preloadPrivateKey] = { type: null, value: null };var r = n.defaultParams || {};for (var o in r) r.hasOwnProperty(o) && (e.properties[o] = { type: null, value: null });
  }e.properties.compid = { type: null, value: null, observer: function () {
      initComponent.apply(this, [n, t]);
    } }, e.properties.extraProps = { type: null, value: null, observer: function () {
      var e = this;if (this.$component && this.$component.__isReady) {
        var t = filterProps(n.defaultProps, {}, this.$component.props, this.data.extraProps);this.$component.props = t, nextTick(function () {
          e.$component._unsafeCallUpdate = true, updateComponent(e.$component), e.$component._unsafeCallUpdate = false;
        });
      }
    } };
}function bindBehaviors(e, t) {
  t.behaviors && (e.behaviors = t.behaviors);
}function bindStaticOptions(e, t) {
  t.options && (e.options = t.options);
}function bindMultipleSlots(e, t) {
  var n = t.multipleSlots;n && (e.options = _objectSpread({}, e.options, { multipleSlots: n }));
}function bindStaticFns(t, n) {
  for (var e in n) "function" == typeof n[e] && (t[e] = n[e]);Object.getOwnPropertyNames(n).forEach(function (e) {
    ["arguments", "caller", "length", "name", "prototype"].indexOf(e) < 0 && "function" == typeof n[e] && (t[e] = n[e]);
  });
}function processEvent(f, e) {
  e[f] || (e[f] = function (e) {
    e && (e.preventDefault = function () {}, e.stopPropagation = function () {}, e.currentTarget = e.currentTarget || e.target || {}, e.target && Object.assign(e.target, e.detail), Object.assign(e.currentTarget, e.detail));var t = this.$component,
        n = t,
        r = -1 < f.indexOf(anonymousFnNamePreffix),
        o = [],
        a = [],
        i = [],
        s = false,
        c = e.currentTarget.dataset || {},
        p = {},
        u = e.type.toLocaleLowerCase();if (Object.keys(c).forEach(function (e) {
      var t = e.toLocaleLowerCase();if (/^e/.test(t) && 0 <= (t = t.replace(/^e/, "")).indexOf(u)) {
        var n = t.replace(u, "");/^(a[a-z]|so)$/.test(n) && (p[n] = c[e]);
      }
    }), e.detail && e.detail.__arguments && 0 < e.detail.__arguments.length && (a = e.detail.__arguments), r) {
      var l = null;"so" in p && ("this" !== p.so && (l = p.so), s = true, delete p.so), 0 < a.length && (!s && a[0] && (n = a[0]), a.shift()), isEmptyObject(p) || (i = Object.keys(p).sort().map(function (e) {
        return p[e];
      })), o = [l].concat(_toConsumableArray(i), _toConsumableArray(a), [e]);
    } else "so" in p && ("this" !== p.so && (n = p.so), s = true, delete p.so), 0 < a.length && (!s && a[0] && (n = a[0]), a.shift()), isEmptyObject(p) || (i = Object.keys(p).sort().map(function (e) {
      return p[e];
    })), o = _toConsumableArray(i).concat(_toConsumableArray(a), [e]);return t[f].apply(n, o);
  });
}function bindEvents(e, t, n) {
  e.methods = e.methods || {};var r = e.methods;t.forEach(function (e) {
    processEvent(e, r);
  });
}function filterProps() {
  var e = 0 < arguments.length && undefined !== arguments[0] ? arguments[0] : {},
      t = 1 < arguments.length && undefined !== arguments[1] ? arguments[1] : {},
      n = 2 < arguments.length && undefined !== arguments[2] ? arguments[2] : {},
      r = 3 < arguments.length ? arguments[3] : undefined,
      o = Object.assign({}, n, t);if (!isEmptyObject(e)) for (var a in e) undefined === o[a] && (o[a] = e[a]);return r && (o = Object.assign({}, o, r)), o;
}function filterParams(e) {
  var t = 1 < arguments.length && undefined !== arguments[1] ? arguments[1] : {},
      n = {};for (var r in t) n[r] = r in e ? e[r] : t[r];return n;
}function componentTrigger(n, e, t) {
  var r;if (t = t || [], "componentDidMount" === e) {
    if (n.$$refs && 0 < n.$$refs.length) {
      var o = {};n.$$refs.forEach(function (e) {
        var t;"component" === e.type ? t = (t = n.$scope.selectComponent("#".concat(e.id))) ? t.$component || t : null : t = wx.createSelectorQuery().in(n.$scope).select("#".concat(e.id));taro.commitAttachRef(e, t, n, o, true), e.target = t;
      }), n.refs = Object.assign({}, n.refs || {}, o);
    }n.$$hasLoopRef && ((taro.Current.current = n)._disableEffect = true, n._createData(n.state, n.props, true), n._disableEffect = false, taro.Current.current = null);
  }if ("componentWillUnmount" === e) {
    var a = n.$scope.data.compid;a && propsManager.delete(a);
  }n[e] && "function" == typeof n[e] && (r = n[e]).call.apply(r, [n].concat(_toConsumableArray(t))), "componentWillMount" === e && (n._dirty = false, n._disable = false, n.state = n.getState()), "componentWillUnmount" === e && (n._dirty = true, n._disable = true, n.$router = { params: {}, path: "" }, n._pendingStates = [], n._pendingCallbacks = [], taro.detachAllRef(n));
}function initComponent(e, t) {
  if (!this.$component.__isReady) {
    if (this.$component.__isReady = true, t) this.$component.$router.path = getCurrentPageUrl();else {
      var n = this.data.compid;n && (propsManager.observers[n] = { component: this.$component, ComponentClass: e });var r = filterProps(e.defaultProps, propsManager.map[n], this.$component.props, this.data.extraProps);this.$component.props = r;
    }mountComponent(this.$component);
  }
}function createComponent(r, o) {
  var e = {},
      t = filterProps(r.defaultProps),
      a = new r(t);a._constructor && a._constructor(t);try {
    taro.Current.current = a, taro.Current.index = 0, a.state = a._createData() || a.state;
  } catch (e) {
    o ? console.warn("[Taro warn] 请给页面提供初始 `state` 以提高初次渲染性能！") : console.warn("[Taro warn] 请给组件提供一个 `defaultProps` 以提高初次渲染性能！"), console.warn(e);
  }var i = { data: e = Object.assign({}, e, a.props, a.state), created: function (e) {
      var t = 0 < arguments.length && undefined !== e ? e : {};o && cacheDataHas(preloadInitedComponent) ? this.$component = cacheDataGet(preloadInitedComponent, true) : this.$component = new r({}, o), this.$component._init(this), this.$component.render = this.$component._createData, this.$component.__propTypes = r.propTypes, Object.assign(this.$component.$router.params, t);
    }, attached: function () {
      var e;if (o) {
        var t = {};if (t = (e = cacheDataHas(this.data[routerParamsPrivateKey])) ? Object.assign({}, r.defaultParams, cacheDataGet(this.data[routerParamsPrivateKey], true)) : filterParams(this.data, r.defaultParams), cacheDataHas(PRELOAD_DATA_KEY)) {
          var n = cacheDataGet(PRELOAD_DATA_KEY, true);this.$component.$router.preload = n;
        }Object.assign(this.$component.$router.params, t), cacheDataHas(this.data[preloadPrivateKey]) ? this.$component.$preloadData = cacheDataGet(this.data[preloadPrivateKey], true) : this.$component.$preloadData = null;
      }!e && o || initComponent.apply(this, [r, o]);
    }, ready: function () {
      o || this.$component.__mounted || (this.$component.__mounted = true, componentTrigger(this.$component, "componentDidMount"));
    }, detached: function () {
      var e = this.$component;componentTrigger(e, "componentWillUnmount"), e.hooks.forEach(function (e) {
        isFunction(e.cleanup) && e.cleanup();
      });var t = e.$$renderPropsEvents;isArray(t) && t.forEach(function (e) {
        return taro.eventCenter.off(e);
      });
    } };return o ? (i.methods = i.methods || {}, i.methods.onLoad = function () {
    var e = 0 < arguments.length && undefined !== arguments[0] ? arguments[0] : {};this.$component.__isReady || (Object.assign(this.$component.$router.params, e), initComponent.apply(this, [r, o]));
  }, i.methods.onReady = function () {
    this.$component.__mounted = true, componentTrigger(this.$component, "componentDidMount");
  }, i.methods.onShow = function () {
    componentTrigger(this.$component, "componentDidShow");
  }, i.methods.onHide = function () {
    componentTrigger(this.$component, "componentDidHide");
  }, pageExtraFns.forEach(function (n) {
    a[n] && "function" == typeof a[n] && (i.methods[n] = function () {
      var e,
          t = this.$component;if (t[n] && "function" == typeof t[n]) return (e = t[n]).call.apply(e, [t].concat(Array.prototype.slice.call(arguments)));
    });
  }), __wxRoute && cacheDataSet(__wxRoute, r)) : (i.pageLifetimes = i.pageLifetimes || {}, i.pageLifetimes.show = function () {
    componentTrigger(this.$component, "componentDidShow");
  }, i.pageLifetimes.hide = function () {
    componentTrigger(this.$component, "componentDidHide");
  }, i.pageLifetimes.resize = function () {
    componentTrigger(this.$component, "onResize");
  }), bindProperties(i, r, o), bindBehaviors(i, r), bindStaticFns(i, r), bindStaticOptions(i, r), bindMultipleSlots(i, r), r.$$events && bindEvents(i, r.$$events, o), r.externalClasses && r.externalClasses.length && (i.externalClasses = r.externalClasses), i;
}var isDEV = "undefined" == typeof process || !process.env || false;function hasNewLifecycle(e) {
  var t = e.constructor.getDerivedStateFromProps,
      n = e.getSnapshotBeforeUpdate;return isFunction(t) || isFunction(n);
}function callGetDerivedStateFromProps(e, t, n) {
  var r,
      o = e.constructor.getDerivedStateFromProps;if (isFunction(o)) {
    var a = o(t, n);isUndefined(a) ? console.warn("getDerivedStateFromProps 没有返回任何内容，这个生命周期必须返回 null 或一个新对象。") : r = Object.assign({}, n, a);
  }return r;
}function callGetSnapshotBeforeUpdate(e, t, n) {
  var r,
      o = e.getSnapshotBeforeUpdate;return isFunction(o) && (r = o.call(e, t, n)), r;
}function updateComponent(e) {
  var t = e.props,
      n = e.__propTypes;if (isDEV && n) {
    var r = e.constructor.name;if (isUndefined(r)) {
      var o = e.constructor.toString().match(/^function\s*([^\s(]+)/);r = isArray(o) ? o[0] : "Component";
    }propTypes.checkPropTypes(n, t, "prop", r);
  }var a = e.prevProps || t;e.props = a, e.__mounted && true === e._unsafeCallUpdate && !hasNewLifecycle(e) && e.componentWillReceiveProps && (e._disable = true, e.componentWillReceiveProps(t), e._disable = false);var i = e.getState(),
      s = e.prevState || i,
      c = callGetDerivedStateFromProps(e, t, i);isUndefined(c) || (i = c);var p = false;e.__mounted && ("function" != typeof e.shouldComponentUpdate || e._isForceUpdate || false !== e.shouldComponentUpdate(t, i) ? !hasNewLifecycle(e) && isFunction(e.componentWillUpdate) && e.componentWillUpdate(t, i) : p = true), e.props = t, e.state = i, e._dirty = false, e._isForceUpdate = false, p || doUpdate(e, a, s), e.prevProps = e.props, e.prevState = e.state;
}function mountComponent(e) {
  var t = e.props;e.__componentWillMountTriggered || e._constructor && e._constructor(t);var n = callGetDerivedStateFromProps(e, t, e.state);isUndefined(n) || (e.state = n), e._dirty = false, e._disable = false, e._isForceUpdate = false, e.__componentWillMountTriggered || (e.__componentWillMountTriggered = true, hasNewLifecycle(e) || componentTrigger(e, "componentWillMount")), doUpdate(e, t, e.state), e.prevProps = e.props, e.prevState = e.state;
}function injectContextType(t) {
  var e = t.constructor.contextType;if (e) {
    var n = e.context,
        r = n.emiter;if (null === r) return undefined;t._hasContext || (t._hasContext = true, r.on(function (e) {
      return enqueueRender(t);
    })), t.context = r.value;
  }
}function doUpdate(n, t, r) {
  var e = n.state,
      o = n.props,
      a = undefined === o ? {} : o,
      i = e || {};if (n._createData && (n.__isReady && (injectContextType(n), taro.Current.current = n, taro.Current.index = 0, taro.invokeEffects(n, true)), i = n._createData(e, a) || i, n.__isReady && (taro.Current.current = null)), i = Object.assign({}, a, i), n.$usedState && n.$usedState.length) {
    var s = {};n.$usedState.forEach(function (e) {
      var t = taro.internal_safe_get(i, e);if (undefined !== t) if ("object" === _typeof(t)) {
        if (isEmptyObject(t)) return taro.internal_safe_set(s, e, {});isEmptyObject(t = shakeFnFromObject(t)) || taro.internal_safe_set(s, e, t);
      } else taro.internal_safe_set(s, e, t);
    }), i = s;
  }i.$taroCompReady = true;var c,
      p = diffObjToPath(i, n.$scope.data),
      u = n.__mounted;u && (c = callGetSnapshotBeforeUpdate(n, t, r));var l = [];n._pendingCallbacks && n._pendingCallbacks.length && (l = n._pendingCallbacks, n._pendingCallbacks = []);function f() {
    if (u && (taro.invokeEffects(n), n.$$refs && 0 < n.$$refs.length && n.$$refs.forEach(function (e) {
      if ("component" === e.type) {
        var t = n.$scope.selectComponent("#".concat(e.id));(t = t ? t.$component || t : null) !== e.target && (taro.commitAttachRef(e, t, n, n.refs), e.target = t);
      }
    }), n.$$hasLoopRef && ((taro.Current.current = n)._disableEffect = true, n._createData(n.state, n.props, true), n._disableEffect = false, taro.Current.current = null), isFunction(n.componentDidUpdate) && n.componentDidUpdate(t, r, c)), l.length) for (var e = l.length; 0 <= --e;) "function" == typeof l[e] && l[e].call(n);
  }0 === Object.keys(p).length ? f() : n.$scope.setData(p, f);
}var items = [];function enqueueRender(e) {
  var t = 1 < arguments.length && undefined !== arguments[1] && arguments[1];!e._dirty && (e._dirty = true) && 1 === items.push(e) && nextTick(function () {
    e._isForceUpdate = t, rerender();
  });
}function rerender() {
  var e,
      t = items;for (items = []; e = t.pop();) e._dirty && updateComponent(e, true);
}var PRELOAD_DATA_KEY$1 = "preload",
    BaseComponent = function () {
  function n() {
    var e = 0 < arguments.length && undefined !== arguments[0] ? arguments[0] : {},
        t = 1 < arguments.length ? arguments[1] : undefined;_classCallCheck(this, n), _defineProperty(this, "__computed", {}), _defineProperty(this, "__props", {}), _defineProperty(this, "__isReady", false), _defineProperty(this, "__mounted", false), _defineProperty(this, "nextProps", {}), _defineProperty(this, "context", {}), _defineProperty(this, "_dirty", true), _defineProperty(this, "_disable", true), _defineProperty(this, "_isForceUpdate", false), _defineProperty(this, "_pendingStates", []), _defineProperty(this, "_pendingCallbacks", []), _defineProperty(this, "$componentType", ""), _defineProperty(this, "$router", { params: {}, path: "" }), _defineProperty(this, "_afterScheduleEffect", false), _defineProperty(this, "_disableEffect", false), _defineProperty(this, "hooks", []), _defineProperty(this, "effects", []), _defineProperty(this, "layoutEffects", []), this.state = {}, this.props = e, this.$componentType = t ? "PAGE" : "COMPONENT", this.$prefix = genCompPrefix(), this.isTaroComponent = this.$componentType && this.$router && this._pendingStates;
  }return _createClass(n, [{ key: "_constructor", value: function (e) {
      this.props = e || {};
    } }, { key: "_init", value: function (e) {
      this.$scope = e;
    } }, { key: "setState", value: function (e, t) {
      e && (this._pendingStates = this._pendingStates || []).push(e), isFunction(t) && (this._pendingCallbacks = this._pendingCallbacks || []).push(t), this._disable || enqueueRender(this, t === taro.internal_force_update);
    } }, { key: "getState", value: function () {
      var t = this,
          e = this._pendingStates,
          n = this.state,
          r = this.props,
          o = Object.assign({}, n);if (delete o.__data, !e.length) return o;var a = e.concat();return this._pendingStates.length = 0, a.forEach(function (e) {
        isFunction(e) && (e = e.call(t, o, r)), Object.assign(o, e);
      }), o;
    } }, { key: "forceUpdate", value: function (e) {
      isFunction(e) && (this._pendingCallbacks = this._pendingCallbacks || []).push(e), this._isForceUpdate = true, updateComponent(this);
    } }, { key: "$preload", value: function (e, t) {
      var n = cacheDataGet(PRELOAD_DATA_KEY$1) || {};if ("object" === _typeof(e)) for (var r in e) n[r] = e[r];else n[e] = t;cacheDataSet(PRELOAD_DATA_KEY$1, n);
    } }, { key: "__triggerPropsFn", value: function (e, t) {
      var n = e.split("."),
          r = "__event_" + n.shift();if (r in this) {
        var o = t.shift();(0 < n.length ? taro.internal_safe_get(this[r], n.join(".")) : this[r]).apply(o, t);
      } else {
        var a = e.toLocaleLowerCase(),
            i = { __isCustomEvt: true, __arguments: t };0 < t.length && (i.value = t.slice(1)), this.$scope.triggerEvent(a, i);
      }
    } }]), n;
}(),
    PureComponent = function () {
  function a() {
    var e, t;_classCallCheck(this, a);for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];return _defineProperty(_assertThisInitialized(_assertThisInitialized(t = _possibleConstructorReturn(this, (e = _getPrototypeOf(a)).call.apply(e, [this].concat(r))))), "isPureComponent", true), t;
  }return _inherits(a, BaseComponent), _createClass(a, [{ key: "shouldComponentUpdate", value: function (e, t) {
      return !shallowEqual(this.props, e) || !shallowEqual(this.state, t);
    } }]), a;
}();function createApp(e) {
  var t = new e(),
      n = { onLaunch: function (e) {
      t.$app = this, t.$app.$router = t.$router = { params: e }, t.componentWillMount && t.componentWillMount(), t.componentDidMount && t.componentDidMount();
    }, onShow: function (e) {
      Object.assign(t.$router.params, e), t.componentDidShow && t.componentDidShow();
    }, onHide: function () {
      t.componentDidHide && t.componentDidHide();
    }, onError: function (e) {
      t.componentDidCatchError && t.componentDidCatchError(e);
    }, onPageNotFound: function (e) {
      t.componentDidNotFound && t.componentDidNotFound(e);
    } };return Object.assign(n, t);
}var RequestQueue = { MAX_REQUEST: 5, queue: [], request: function (e) {
    return this.push(e), this.run();
  }, push: function (e) {
    this.queue.push(e);
  }, run: function () {
    var r = this;if (this.queue.length && this.queue.length <= this.MAX_REQUEST) {
      var o = this.queue.shift(),
          a = o.complete;return o.complete = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];a && a.apply(o, t), r.run();
      }, wx.request(o);
    }
  } };function taroInterceptor(e) {
  return request(e.requestParams);
}var link = new taro.Link(taroInterceptor);function request(e) {
  "string" == typeof (e = e || {}) && (e = { url: e });var r,
      o = e.success,
      a = e.fail,
      i = e.complete,
      t = new Promise(function (t, n) {
    e.success = function (e) {
      o && o(e), t(e);
    }, e.fail = function (e) {
      a && a(e), n(e);
    }, e.complete = function (e) {
      i && i(e);
    }, r = RequestQueue.request(e);
  });return t.abort = function (e) {
    return e && e(), r && r.abort(), t;
  }, t;
}function processApis(e) {
  var t = Object.assign({}, taro.onAndSyncApis, taro.noPromiseApis, taro.otherApis),
      P = { navigateTo: true, redirectTo: true, reLaunch: true };Object.keys(t).forEach(function (b) {
    b in wx ? taro.onAndSyncApis[b] || taro.noPromiseApis[b] ? e[b] = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];var r = t.length,
          o = t.concat(),
          a = o[r - 1];return a && a.isTaroComponent && a.$scope && o.splice(r - 1, 1, a.$scope), wx[b].apply(wx, o);
    } : e[b] = function (o) {
      for (var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) t[n - 1] = arguments[n];o = o || {};var r,
          a = null,
          i = Object.assign({}, o);if ("string" == typeof o) return t.length ? (r = wx)[b].apply(r, [o].concat(t)) : wx[b](o);if ("navigateTo" === b || "redirectTo" === b || "switchTab" === b) {
        var s = i.url ? i.url.replace(/^\//, "") : "";-1 < s.indexOf("?") && (s = s.split("?")[0]);var c = cacheDataGet(s);if (c) {
          var p = new c();if (p.componentWillPreload) {
            var u = getUniqueKey(),
                l = i.url.indexOf("?"),
                f = -1 < l,
                d = queryToJson(f ? i.url.substring(l + 1, i.url.length) : "");i.url += (f ? "&" : "?") + "".concat("__preload_", "=").concat(u), cacheDataSet(u, p.componentWillPreload(d)), cacheDataSet("$preloadComponent", p);
          }
        }
      }if (P[b]) {
        var y = i.url = i.url || "",
            h = y.indexOf("?"),
            m = -1 < h,
            g = queryToJson(m ? y.substring(h + 1, y.length) : ""),
            v = getUniqueKey();i.url += (m ? "&" : "?") + "".concat("__key_", "=").concat(v), cacheDataSet(v, g);
      }var _ = new Promise(function (n, r) {
        var e;(["fail", "success", "complete"].forEach(function (t) {
          i[t] = function (e) {
            o[t] && o[t](e), "success" === t ? n("connectSocket" === b ? Promise.resolve().then(function () {
              return Object.assign(a, e);
            }) : e) : "fail" === t && r(e);
          };
        }), t.length) ? a = (e = wx)[b].apply(e, [i].concat(t)) : a = wx[b](i);
      });return "uploadFile" !== b && "downloadFile" !== b || (_.progress = function (e) {
        return a && a.onProgressUpdate(e), _;
      }, _.abort = function (e) {
        return e && e(), a && a.abort(), _;
      }), _;
    } : e[b] = function () {
      console.warn("微信小程序暂不支持 ".concat(b));
    };
  });
}function pxTransform(e) {
  var t = this.config,
      n = t.designWidth,
      r = t.deviceRatio;if (!(n in r)) throw new Error("deviceRatio 配置中不存在 ".concat(n, " 的设置！"));return parseInt(e, 10) / r[n] + "rpx";
}function canIUseWebp() {
  var e = wx.getSystemInfoSync().platform.toLowerCase();return "android" === e || "devtools" === e;
}function wxCloud(e) {
  var t = wx.cloud || {},
      n = {};["init", "database", "uploadFile", "downloadFile", "getTempFileURL", "deleteFile", "callFunction", "CloudID"].forEach(function (e) {
    n[e] = t[e];
  }), e.cloud = n;
}function initNativeApi(e) {
  processApis(e), e.request = link.request.bind(link), e.addInterceptor = link.addInterceptor.bind(link), e.cleanInterceptors = link.cleanInterceptors.bind(link), e.getCurrentPages = getCurrentPages, e.getApp = getApp, e.requirePlugin = requirePlugin, e.initPxTransform = taro.initPxTransform.bind(e), e.pxTransform = pxTransform.bind(e), e.canIUseWebp = canIUseWebp, wxCloud(e);
}var Taro = { Component: BaseComponent, PureComponent: PureComponent, createApp: createApp, initNativeApi: initNativeApi, Events: taro.Events, eventCenter: taro.eventCenter, getEnv: taro.getEnv, createRef: taro.createRef, render: taro.render, ENV_TYPE: taro.ENV_TYPE, internal_safe_get: taro.internal_safe_get, internal_safe_set: taro.internal_safe_set, internal_inline_style: taro.internal_inline_style, createComponent: createComponent, internal_get_original: taro.internal_get_original, getElementById: getElementById, propsManager: propsManager, interceptors: taro.interceptors, genCompid: genCompid, useEffect: taro.useEffect, useLayoutEffect: taro.useLayoutEffect, useReducer: taro.useReducer, useState: taro.useState, useRef: taro.useRef, useCallback: taro.useCallback, useMemo: taro.useMemo, useImperativeHandle: taro.useImperativeHandle, useContext: taro.useContext, createContext: taro.createContext, memo: taro.memo, shallowEqual: shallowEqual };initNativeApi(Taro), exports.Taro = Taro, exports.default = Taro;