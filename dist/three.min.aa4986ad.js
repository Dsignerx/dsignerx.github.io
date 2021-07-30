// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"three.min.js":[function(require,module,exports) {
var define;
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e307) { throw _e307; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e308) { didErr = true; err = _e308; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).THREE = {});
}(this, function (t) {
  "use strict";

  var _Bh;

  var e = "129",
      n = 100,
      i = 300,
      r = 301,
      s = 302,
      a = 303,
      o = 304,
      l = 306,
      c = 307,
      h = 1e3,
      u = 1001,
      d = 1002,
      p = 1003,
      m = 1004,
      f = 1005,
      g = 1006,
      v = 1007,
      y = 1008,
      x = 1009,
      _ = 1012,
      w = 1014,
      b = 1015,
      M = 1016,
      S = 1020,
      T = 1022,
      E = 1023,
      A = 1026,
      L = 1027,
      R = 33776,
      C = 33777,
      P = 33778,
      D = 33779,
      I = 35840,
      N = 35841,
      B = 35842,
      z = 35843,
      F = 37492,
      O = 37496,
      H = 2300,
      G = 2301,
      U = 2302,
      k = 2400,
      V = 2401,
      W = 2402,
      j = 2500,
      q = 2501,
      X = 3e3,
      Y = 3001,
      Z = 3007,
      J = 3002,
      Q = 3004,
      K = 3005,
      $ = 3006,
      tt = 7680,
      et = 35044,
      nt = 35048,
      it = "300 es";

  var rt = /*#__PURE__*/function () {
    function rt() {
      _classCallCheck(this, rt);
    }

    _createClass(rt, [{
      key: "addEventListener",
      value: function addEventListener(t, e) {
        void 0 === this._listeners && (this._listeners = {});
        var n = this._listeners;
        void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
      }
    }, {
      key: "hasEventListener",
      value: function hasEventListener(t, e) {
        if (void 0 === this._listeners) return !1;
        var n = this._listeners;
        return void 0 !== n[t] && -1 !== n[t].indexOf(e);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(t, e) {
        if (void 0 === this._listeners) return;
        var n = this._listeners[t];

        if (void 0 !== n) {
          var _t2 = n.indexOf(e);

          -1 !== _t2 && n.splice(_t2, 1);
        }
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(t) {
        if (void 0 === this._listeners) return;
        var e = this._listeners[t.type];

        if (void 0 !== e) {
          t.target = this;

          var _n2 = e.slice(0);

          for (var _e2 = 0, _i2 = _n2.length; _e2 < _i2; _e2++) {
            _n2[_e2].call(this, t);
          }

          t.target = null;
        }
      }
    }]);

    return rt;
  }();

  var st = [];

  for (var _t3 = 0; _t3 < 256; _t3++) {
    st[_t3] = (_t3 < 16 ? "0" : "") + _t3.toString(16);
  }

  var at = 1234567;
  var ot = Math.PI / 180,
      lt = 180 / Math.PI;

  function ct() {
    var t = 4294967295 * Math.random() | 0,
        e = 4294967295 * Math.random() | 0,
        n = 4294967295 * Math.random() | 0,
        i = 4294967295 * Math.random() | 0;
    return (st[255 & t] + st[t >> 8 & 255] + st[t >> 16 & 255] + st[t >> 24 & 255] + "-" + st[255 & e] + st[e >> 8 & 255] + "-" + st[e >> 16 & 15 | 64] + st[e >> 24 & 255] + "-" + st[63 & n | 128] + st[n >> 8 & 255] + "-" + st[n >> 16 & 255] + st[n >> 24 & 255] + st[255 & i] + st[i >> 8 & 255] + st[i >> 16 & 255] + st[i >> 24 & 255]).toUpperCase();
  }

  function ht(t, e, n) {
    return Math.max(e, Math.min(n, t));
  }

  function ut(t, e) {
    return (t % e + e) % e;
  }

  function dt(t, e, n) {
    return (1 - n) * t + n * e;
  }

  function pt(t) {
    return 0 == (t & t - 1) && 0 !== t;
  }

  function mt(t) {
    return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
  }

  function ft(t) {
    return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
  }

  var gt = Object.freeze({
    __proto__: null,
    DEG2RAD: ot,
    RAD2DEG: lt,
    generateUUID: ct,
    clamp: ht,
    euclideanModulo: ut,
    mapLinear: function mapLinear(t, e, n, i, r) {
      return i + (t - e) * (r - i) / (n - e);
    },
    inverseLerp: function inverseLerp(t, e, n) {
      return t !== e ? (n - t) / (e - t) : 0;
    },
    lerp: dt,
    damp: function damp(t, e, n, i) {
      return dt(t, e, 1 - Math.exp(-n * i));
    },
    pingpong: function pingpong(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return e - Math.abs(ut(t, 2 * e) - e);
    },
    smoothstep: function smoothstep(t, e, n) {
      return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t);
    },
    smootherstep: function smootherstep(t, e, n) {
      return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
    },
    randInt: function randInt(t, e) {
      return t + Math.floor(Math.random() * (e - t + 1));
    },
    randFloat: function randFloat(t, e) {
      return t + Math.random() * (e - t);
    },
    randFloatSpread: function randFloatSpread(t) {
      return t * (.5 - Math.random());
    },
    seededRandom: function seededRandom(t) {
      return void 0 !== t && (at = t % 2147483647), at = 16807 * at % 2147483647, (at - 1) / 2147483646;
    },
    degToRad: function degToRad(t) {
      return t * ot;
    },
    radToDeg: function radToDeg(t) {
      return t * lt;
    },
    isPowerOfTwo: pt,
    ceilPowerOfTwo: mt,
    floorPowerOfTwo: ft,
    setQuaternionFromProperEuler: function setQuaternionFromProperEuler(t, e, n, i, r) {
      var s = Math.cos,
          a = Math.sin,
          o = s(n / 2),
          l = a(n / 2),
          c = s((e + i) / 2),
          h = a((e + i) / 2),
          u = s((e - i) / 2),
          d = a((e - i) / 2),
          p = s((i - e) / 2),
          m = a((i - e) / 2);

      switch (r) {
        case "XYX":
          t.set(o * h, l * u, l * d, o * c);
          break;

        case "YZY":
          t.set(l * d, o * h, l * u, o * c);
          break;

        case "ZXZ":
          t.set(l * u, l * d, o * h, o * c);
          break;

        case "XZX":
          t.set(o * h, l * m, l * p, o * c);
          break;

        case "YXY":
          t.set(l * p, o * h, l * m, o * c);
          break;

        case "ZYZ":
          t.set(l * m, l * p, o * h, o * c);
          break;

        default:
          console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
      }
    }
  });

  var vt = /*#__PURE__*/function () {
    function vt() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, vt);

      this.x = t, this.y = e;
    }

    _createClass(vt, [{
      key: "width",
      get: function get() {
        return this.x;
      },
      set: function set(t) {
        this.x = t;
      }
    }, {
      key: "height",
      get: function get() {
        return this.y;
      },
      set: function set(t) {
        this.y = t;
      }
    }, {
      key: "set",
      value: function set(t, e) {
        return this.x = t, this.y = e, this;
      }
    }, {
      key: "setScalar",
      value: function setScalar(t) {
        return this.x = t, this.y = t, this;
      }
    }, {
      key: "setX",
      value: function setX(t) {
        return this.x = t, this;
      }
    }, {
      key: "setY",
      value: function setY(t) {
        return this.y = t, this;
      }
    }, {
      key: "setComponent",
      value: function setComponent(t, e) {
        switch (t) {
          case 0:
            this.x = e;
            break;

          case 1:
            this.y = e;
            break;

          default:
            throw new Error("index is out of range: " + t);
        }

        return this;
      }
    }, {
      key: "getComponent",
      value: function getComponent(t) {
        switch (t) {
          case 0:
            return this.x;

          case 1:
            return this.y;

          default:
            throw new Error("index is out of range: " + t);
        }
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this.x, this.y);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.x = t.x, this.y = t.y, this;
      }
    }, {
      key: "add",
      value: function add(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this);
      }
    }, {
      key: "addScalar",
      value: function addScalar(t) {
        return this.x += t, this.y += t, this;
      }
    }, {
      key: "addVectors",
      value: function addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this;
      }
    }, {
      key: "addScaledVector",
      value: function addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this;
      }
    }, {
      key: "sub",
      value: function sub(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this);
      }
    }, {
      key: "subScalar",
      value: function subScalar(t) {
        return this.x -= t, this.y -= t, this;
      }
    }, {
      key: "subVectors",
      value: function subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this;
      }
    }, {
      key: "multiply",
      value: function multiply(t) {
        return this.x *= t.x, this.y *= t.y, this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(t) {
        return this.x *= t, this.y *= t, this;
      }
    }, {
      key: "divide",
      value: function divide(t) {
        return this.x /= t.x, this.y /= t.y, this;
      }
    }, {
      key: "divideScalar",
      value: function divideScalar(t) {
        return this.multiplyScalar(1 / t);
      }
    }, {
      key: "applyMatrix3",
      value: function applyMatrix3(t) {
        var e = this.x,
            n = this.y,
            i = t.elements;
        return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
      }
    }, {
      key: "min",
      value: function min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
      }
    }, {
      key: "max",
      value: function max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
      }
    }, {
      key: "clamp",
      value: function clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
      }
    }, {
      key: "clampScalar",
      value: function clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
      }
    }, {
      key: "clampLength",
      value: function clampLength(t, e) {
        var n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
      }
    }, {
      key: "floor",
      value: function floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      }
    }, {
      key: "ceil",
      value: function ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      }
    }, {
      key: "round",
      value: function round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      }
    }, {
      key: "roundToZero",
      value: function roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
      }
    }, {
      key: "negate",
      value: function negate() {
        return this.x = -this.x, this.y = -this.y, this;
      }
    }, {
      key: "dot",
      value: function dot(t) {
        return this.x * t.x + this.y * t.y;
      }
    }, {
      key: "cross",
      value: function cross(t) {
        return this.x * t.y - this.y * t.x;
      }
    }, {
      key: "lengthSq",
      value: function lengthSq() {
        return this.x * this.x + this.y * this.y;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
    }, {
      key: "manhattanLength",
      value: function manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y);
      }
    }, {
      key: "normalize",
      value: function normalize() {
        return this.divideScalar(this.length() || 1);
      }
    }, {
      key: "angle",
      value: function angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI;
      }
    }, {
      key: "distanceTo",
      value: function distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t));
      }
    }, {
      key: "distanceToSquared",
      value: function distanceToSquared(t) {
        var e = this.x - t.x,
            n = this.y - t.y;
        return e * e + n * n;
      }
    }, {
      key: "manhattanDistanceTo",
      value: function manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
      }
    }, {
      key: "setLength",
      value: function setLength(t) {
        return this.normalize().multiplyScalar(t);
      }
    }, {
      key: "lerp",
      value: function lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
      }
    }, {
      key: "lerpVectors",
      value: function lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.x === this.x && t.y === this.y;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.x = t[e], this.y = t[e + 1], this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return t[e] = this.x, t[e + 1] = this.y, t;
      }
    }, {
      key: "fromBufferAttribute",
      value: function fromBufferAttribute(t, e, n) {
        return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this;
      }
    }, {
      key: "rotateAround",
      value: function rotateAround(t, e) {
        var n = Math.cos(e),
            i = Math.sin(e),
            r = this.x - t.x,
            s = this.y - t.y;
        return this.x = r * n - s * i + t.x, this.y = r * i + s * n + t.y, this;
      }
    }, {
      key: "random",
      value: function random() {
        return this.x = Math.random(), this.y = Math.random(), this;
      }
    }]);

    return vt;
  }();

  vt.prototype.isVector2 = !0;

  var yt = /*#__PURE__*/function () {
    function yt() {
      _classCallCheck(this, yt);

      this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
    }

    _createClass(yt, [{
      key: "set",
      value: function set(t, e, n, i, r, s, a, o, l) {
        var c = this.elements;
        return c[0] = t, c[1] = i, c[2] = a, c[3] = e, c[4] = r, c[5] = o, c[6] = n, c[7] = s, c[8] = l, this;
      }
    }, {
      key: "identity",
      value: function identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        var e = this.elements,
            n = t.elements;
        return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
      }
    }, {
      key: "extractBasis",
      value: function extractBasis(t, e, n) {
        return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
      }
    }, {
      key: "setFromMatrix4",
      value: function setFromMatrix4(t) {
        var e = t.elements;
        return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
      }
    }, {
      key: "multiply",
      value: function multiply(t) {
        return this.multiplyMatrices(this, t);
      }
    }, {
      key: "premultiply",
      value: function premultiply(t) {
        return this.multiplyMatrices(t, this);
      }
    }, {
      key: "multiplyMatrices",
      value: function multiplyMatrices(t, e) {
        var n = t.elements,
            i = e.elements,
            r = this.elements,
            s = n[0],
            a = n[3],
            o = n[6],
            l = n[1],
            c = n[4],
            h = n[7],
            u = n[2],
            d = n[5],
            p = n[8],
            m = i[0],
            f = i[3],
            g = i[6],
            v = i[1],
            y = i[4],
            x = i[7],
            _ = i[2],
            w = i[5],
            b = i[8];
        return r[0] = s * m + a * v + o * _, r[3] = s * f + a * y + o * w, r[6] = s * g + a * x + o * b, r[1] = l * m + c * v + h * _, r[4] = l * f + c * y + h * w, r[7] = l * g + c * x + h * b, r[2] = u * m + d * v + p * _, r[5] = u * f + d * y + p * w, r[8] = u * g + d * x + p * b, this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(t) {
        var e = this.elements;
        return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
      }
    }, {
      key: "determinant",
      value: function determinant() {
        var t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            c = t[8];
        return e * s * c - e * a * l - n * r * c + n * a * o + i * r * l - i * s * o;
      }
    }, {
      key: "invert",
      value: function invert() {
        var t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            c = t[8],
            h = c * s - a * l,
            u = a * o - c * r,
            d = l * r - s * o,
            p = e * h + n * u + i * d;
        if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var m = 1 / p;
        return t[0] = h * m, t[1] = (i * l - c * n) * m, t[2] = (a * n - i * s) * m, t[3] = u * m, t[4] = (c * e - i * o) * m, t[5] = (i * r - a * e) * m, t[6] = d * m, t[7] = (n * o - l * e) * m, t[8] = (s * e - n * r) * m, this;
      }
    }, {
      key: "transpose",
      value: function transpose() {
        var t;
        var e = this.elements;
        return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
      }
    }, {
      key: "getNormalMatrix",
      value: function getNormalMatrix(t) {
        return this.setFromMatrix4(t).invert().transpose();
      }
    }, {
      key: "transposeIntoArray",
      value: function transposeIntoArray(t) {
        var e = this.elements;
        return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
      }
    }, {
      key: "setUvTransform",
      value: function setUvTransform(t, e, n, i, r, s, a) {
        var o = Math.cos(r),
            l = Math.sin(r);
        return this.set(n * o, n * l, -n * (o * s + l * a) + s + t, -i * l, i * o, -i * (-l * s + o * a) + a + e, 0, 0, 1), this;
      }
    }, {
      key: "scale",
      value: function scale(t, e) {
        var n = this.elements;
        return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this;
      }
    }, {
      key: "rotate",
      value: function rotate(t) {
        var e = Math.cos(t),
            n = Math.sin(t),
            i = this.elements,
            r = i[0],
            s = i[3],
            a = i[6],
            o = i[1],
            l = i[4],
            c = i[7];
        return i[0] = e * r + n * o, i[3] = e * s + n * l, i[6] = e * a + n * c, i[1] = -n * r + e * o, i[4] = -n * s + e * l, i[7] = -n * a + e * c, this;
      }
    }, {
      key: "translate",
      value: function translate(t, e) {
        var n = this.elements;
        return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        var e = this.elements,
            n = t.elements;

        for (var _t4 = 0; _t4 < 9; _t4++) {
          if (e[_t4] !== n[_t4]) return !1;
        }

        return !0;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        for (var _n3 = 0; _n3 < 9; _n3++) {
          this.elements[_n3] = t[_n3 + e];
        }

        return this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = this.elements;
        return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().fromArray(this.elements);
      }
    }]);

    return yt;
  }();

  var xt;
  yt.prototype.isMatrix3 = !0;

  var _t = /*#__PURE__*/function () {
    function _t() {
      _classCallCheck(this, _t);
    }

    _createClass(_t, null, [{
      key: "getDataURL",
      value: function getDataURL(t) {
        if (/^data:/i.test(t.src)) return t.src;
        if ("undefined" == typeof HTMLCanvasElement) return t.src;
        var e;
        if (t instanceof HTMLCanvasElement) e = t;else {
          void 0 === xt && (xt = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), xt.width = t.width, xt.height = t.height;

          var _n4 = xt.getContext("2d");

          t instanceof ImageData ? _n4.putImageData(t, 0, 0) : _n4.drawImage(t, 0, 0, t.width, t.height), e = xt;
        }
        return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png");
      }
    }]);

    return _t;
  }();

  var wt = 0;

  var bt = /*#__PURE__*/function (_rt) {
    _inherits(bt, _rt);

    var _super = _createSuper(bt);

    function bt() {
      var _this;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : bt.DEFAULT_IMAGE;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : bt.DEFAULT_MAPPING;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1001;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1001;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1006;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1008;
      var a = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1023;
      var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1009;
      var l = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
      var c = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 3e3;

      _classCallCheck(this, bt);

      _this = _super.call(this), Object.defineProperty(_assertThisInitialized(_this), "id", {
        value: wt++
      }), _this.uuid = ct(), _this.name = "", _this.image = t, _this.mipmaps = [], _this.mapping = e, _this.wrapS = n, _this.wrapT = i, _this.magFilter = r, _this.minFilter = s, _this.anisotropy = l, _this.format = a, _this.internalFormat = null, _this.type = o, _this.offset = new vt(0, 0), _this.repeat = new vt(1, 1), _this.center = new vt(0, 0), _this.rotation = 0, _this.matrixAutoUpdate = !0, _this.matrix = new yt(), _this.generateMipmaps = !0, _this.premultiplyAlpha = !1, _this.flipY = !0, _this.unpackAlignment = 4, _this.encoding = c, _this.version = 0, _this.onUpdate = null;
      return _this;
    }

    _createClass(bt, [{
      key: "updateMatrix",
      value: function updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = void 0 === t || "string" == typeof t;
        if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
        var n = {
          metadata: {
            version: 4.5,
            type: "Texture",
            generator: "Texture.toJSON"
          },
          uuid: this.uuid,
          name: this.name,
          mapping: this.mapping,
          repeat: [this.repeat.x, this.repeat.y],
          offset: [this.offset.x, this.offset.y],
          center: [this.center.x, this.center.y],
          rotation: this.rotation,
          wrap: [this.wrapS, this.wrapT],
          format: this.format,
          type: this.type,
          encoding: this.encoding,
          minFilter: this.minFilter,
          magFilter: this.magFilter,
          anisotropy: this.anisotropy,
          flipY: this.flipY,
          premultiplyAlpha: this.premultiplyAlpha,
          unpackAlignment: this.unpackAlignment
        };

        if (void 0 !== this.image) {
          var _i3 = this.image;

          if (void 0 === _i3.uuid && (_i3.uuid = ct()), !e && void 0 === t.images[_i3.uuid]) {
            var _e3;

            if (Array.isArray(_i3)) {
              _e3 = [];

              for (var _t5 = 0, _n5 = _i3.length; _t5 < _n5; _t5++) {
                _i3[_t5].isDataTexture ? _e3.push(Mt(_i3[_t5].image)) : _e3.push(Mt(_i3[_t5]));
              }
            } else _e3 = Mt(_i3);

            t.images[_i3.uuid] = {
              uuid: _i3.uuid,
              url: _e3
            };
          }

          n.image = _i3.uuid;
        }

        return e || (t.textures[this.uuid] = n), n;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.dispatchEvent({
          type: "dispose"
        });
      }
    }, {
      key: "transformUv",
      value: function transformUv(t) {
        if (this.mapping !== i) return t;
        if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
          case h:
            t.x = t.x - Math.floor(t.x);
            break;

          case u:
            t.x = t.x < 0 ? 0 : 1;
            break;

          case d:
            1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
        }
        if (t.y < 0 || t.y > 1) switch (this.wrapT) {
          case h:
            t.y = t.y - Math.floor(t.y);
            break;

          case u:
            t.y = t.y < 0 ? 0 : 1;
            break;

          case d:
            1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
        }
        return this.flipY && (t.y = 1 - t.y), t;
      }
    }, {
      key: "needsUpdate",
      set: function set(t) {
        !0 === t && this.version++;
      }
    }]);

    return bt;
  }(rt);

  function Mt(t) {
    return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? _t.getDataURL(t) : t.data ? {
      data: Array.prototype.slice.call(t.data),
      width: t.width,
      height: t.height,
      type: t.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }

  bt.DEFAULT_IMAGE = void 0, bt.DEFAULT_MAPPING = i, bt.prototype.isTexture = !0;

  var St = /*#__PURE__*/function () {
    function St() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, St);

      this.x = t, this.y = e, this.z = n, this.w = i;
    }

    _createClass(St, [{
      key: "width",
      get: function get() {
        return this.z;
      },
      set: function set(t) {
        this.z = t;
      }
    }, {
      key: "height",
      get: function get() {
        return this.w;
      },
      set: function set(t) {
        this.w = t;
      }
    }, {
      key: "set",
      value: function set(t, e, n, i) {
        return this.x = t, this.y = e, this.z = n, this.w = i, this;
      }
    }, {
      key: "setScalar",
      value: function setScalar(t) {
        return this.x = t, this.y = t, this.z = t, this.w = t, this;
      }
    }, {
      key: "setX",
      value: function setX(t) {
        return this.x = t, this;
      }
    }, {
      key: "setY",
      value: function setY(t) {
        return this.y = t, this;
      }
    }, {
      key: "setZ",
      value: function setZ(t) {
        return this.z = t, this;
      }
    }, {
      key: "setW",
      value: function setW(t) {
        return this.w = t, this;
      }
    }, {
      key: "setComponent",
      value: function setComponent(t, e) {
        switch (t) {
          case 0:
            this.x = e;
            break;

          case 1:
            this.y = e;
            break;

          case 2:
            this.z = e;
            break;

          case 3:
            this.w = e;
            break;

          default:
            throw new Error("index is out of range: " + t);
        }

        return this;
      }
    }, {
      key: "getComponent",
      value: function getComponent(t) {
        switch (t) {
          case 0:
            return this.x;

          case 1:
            return this.y;

          case 2:
            return this.z;

          case 3:
            return this.w;

          default:
            throw new Error("index is out of range: " + t);
        }
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this.x, this.y, this.z, this.w);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this;
      }
    }, {
      key: "add",
      value: function add(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this);
      }
    }, {
      key: "addScalar",
      value: function addScalar(t) {
        return this.x += t, this.y += t, this.z += t, this.w += t, this;
      }
    }, {
      key: "addVectors",
      value: function addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
      }
    }, {
      key: "addScaledVector",
      value: function addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
      }
    }, {
      key: "sub",
      value: function sub(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this);
      }
    }, {
      key: "subScalar",
      value: function subScalar(t) {
        return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
      }
    }, {
      key: "subVectors",
      value: function subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
      }
    }, {
      key: "multiply",
      value: function multiply(t) {
        return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(t) {
        return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        var e = this.x,
            n = this.y,
            i = this.z,
            r = this.w,
            s = t.elements;
        return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r, this;
      }
    }, {
      key: "divideScalar",
      value: function divideScalar(t) {
        return this.multiplyScalar(1 / t);
      }
    }, {
      key: "setAxisAngleFromQuaternion",
      value: function setAxisAngleFromQuaternion(t) {
        this.w = 2 * Math.acos(t.w);
        var e = Math.sqrt(1 - t.w * t.w);
        return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
      }
    }, {
      key: "setAxisAngleFromRotationMatrix",
      value: function setAxisAngleFromRotationMatrix(t) {
        var e, n, i, r;
        var s = .01,
            a = .1,
            o = t.elements,
            l = o[0],
            c = o[4],
            h = o[8],
            u = o[1],
            d = o[5],
            p = o[9],
            m = o[2],
            f = o[6],
            g = o[10];

        if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
          if (Math.abs(c + u) < a && Math.abs(h + m) < a && Math.abs(p + f) < a && Math.abs(l + d + g - 3) < a) return this.set(1, 0, 0, 0), this;
          e = Math.PI;

          var _t6 = (l + 1) / 2,
              _o2 = (d + 1) / 2,
              _v = (g + 1) / 2,
              _y = (c + u) / 4,
              _x = (h + m) / 4,
              _2 = (p + f) / 4;

          return _t6 > _o2 && _t6 > _v ? _t6 < s ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(_t6), i = _y / n, r = _x / n) : _o2 > _v ? _o2 < s ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(_o2), n = _y / i, r = _2 / i) : _v < s ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(_v), n = _x / r, i = _2 / r), this.set(n, i, r, e), this;
        }

        var v = Math.sqrt((f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c));
        return Math.abs(v) < .001 && (v = 1), this.x = (f - p) / v, this.y = (h - m) / v, this.z = (u - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this;
      }
    }, {
      key: "min",
      value: function min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
      }
    }, {
      key: "max",
      value: function max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
      }
    }, {
      key: "clamp",
      value: function clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
      }
    }, {
      key: "clampScalar",
      value: function clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
      }
    }, {
      key: "clampLength",
      value: function clampLength(t, e) {
        var n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
      }
    }, {
      key: "floor",
      value: function floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
      }
    }, {
      key: "ceil",
      value: function ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
      }
    }, {
      key: "round",
      value: function round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
      }
    }, {
      key: "roundToZero",
      value: function roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
      }
    }, {
      key: "negate",
      value: function negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
      }
    }, {
      key: "dot",
      value: function dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
      }
    }, {
      key: "lengthSq",
      value: function lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
      }
    }, {
      key: "manhattanLength",
      value: function manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
      }
    }, {
      key: "normalize",
      value: function normalize() {
        return this.divideScalar(this.length() || 1);
      }
    }, {
      key: "setLength",
      value: function setLength(t) {
        return this.normalize().multiplyScalar(t);
      }
    }, {
      key: "lerp",
      value: function lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
      }
    }, {
      key: "lerpVectors",
      value: function lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
      }
    }, {
      key: "fromBufferAttribute",
      value: function fromBufferAttribute(t, e, n) {
        return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
      }
    }, {
      key: "random",
      value: function random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
      }
    }]);

    return St;
  }();

  St.prototype.isVector4 = !0;

  var Tt = /*#__PURE__*/function (_rt2) {
    _inherits(Tt, _rt2);

    var _super2 = _createSuper(Tt);

    function Tt(t, e, n) {
      var _this2;

      _classCallCheck(this, Tt);

      _this2 = _super2.call(this), _this2.width = t, _this2.height = e, _this2.depth = 1, _this2.scissor = new St(0, 0, t, e), _this2.scissorTest = !1, _this2.viewport = new St(0, 0, t, e), n = n || {}, _this2.texture = new bt(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), _this2.texture.image = {}, _this2.texture.image.width = t, _this2.texture.image.height = e, _this2.texture.image.depth = 1, _this2.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, _this2.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : g, _this2.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, _this2.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, _this2.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null;
      return _this2;
    }

    _createClass(Tt, [{
      key: "setTexture",
      value: function setTexture(t) {
        t.image = {
          width: this.width,
          height: this.height,
          depth: this.depth
        }, this.texture = t;
      }
    }, {
      key: "setSize",
      value: function setSize(t, e) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        this.width === t && this.height === e && this.depth === n || (this.width = t, this.height = e, this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.image = _objectSpread({}, this.texture.image), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.dispatchEvent({
          type: "dispose"
        });
      }
    }]);

    return Tt;
  }(rt);

  Tt.prototype.isWebGLRenderTarget = !0;

  var Et = /*#__PURE__*/function (_Tt) {
    _inherits(Et, _Tt);

    var _super3 = _createSuper(Et);

    function Et(t, e, n) {
      var _this3;

      _classCallCheck(this, Et);

      _this3 = _super3.call(this, t, e);
      var i = _this3.texture;
      _this3.texture = [];

      for (var _t7 = 0; _t7 < n; _t7++) {
        _this3.texture[_t7] = i.clone();
      }

      return _this3;
    }

    _createClass(Et, [{
      key: "setSize",
      value: function setSize(t, e) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

        if (this.width !== t || this.height !== e || this.depth !== n) {
          this.width = t, this.height = e, this.depth = n;

          for (var _i4 = 0, _r2 = this.texture.length; _i4 < _r2; _i4++) {
            this.texture[_i4].image.width = t, this.texture[_i4].image.height = e, this.texture[_i4].image.depth = n;
          }

          this.dispose();
        }

        return this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        this.dispose(), this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this.texture.length = 0;

        for (var _e4 = 0, _n6 = t.texture.length; _e4 < _n6; _e4++) {
          this.texture[_e4] = t.texture[_e4].clone();
        }

        return this;
      }
    }]);

    return Et;
  }(Tt);

  Et.prototype.isWebGLMultipleRenderTargets = !0;

  var At = /*#__PURE__*/function (_Tt2) {
    _inherits(At, _Tt2);

    var _super4 = _createSuper(At);

    function At(t, e, n) {
      var _this4;

      _classCallCheck(this, At);

      _this4 = _super4.call(this, t, e, n), _this4.samples = 4;
      return _this4;
    }

    _createClass(At, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(At.prototype), "copy", this).call(this, t), this.samples = t.samples, this;
      }
    }]);

    return At;
  }(Tt);

  At.prototype.isWebGLMultisampleRenderTarget = !0;

  var Lt = /*#__PURE__*/function () {
    function Lt() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, Lt);

      this._x = t, this._y = e, this._z = n, this._w = i;
    }

    _createClass(Lt, [{
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(t) {
        this._x = t, this._onChangeCallback();
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(t) {
        this._y = t, this._onChangeCallback();
      }
    }, {
      key: "z",
      get: function get() {
        return this._z;
      },
      set: function set(t) {
        this._z = t, this._onChangeCallback();
      }
    }, {
      key: "w",
      get: function get() {
        return this._w;
      },
      set: function set(t) {
        this._w = t, this._onChangeCallback();
      }
    }, {
      key: "set",
      value: function set(t, e, n, i) {
        return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this._x, this._y, this._z, this._w);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
      }
    }, {
      key: "setFromEuler",
      value: function setFromEuler(t, e) {
        if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
        var n = t._x,
            i = t._y,
            r = t._z,
            s = t._order,
            a = Math.cos,
            o = Math.sin,
            l = a(n / 2),
            c = a(i / 2),
            h = a(r / 2),
            u = o(n / 2),
            d = o(i / 2),
            p = o(r / 2);

        switch (s) {
          case "XYZ":
            this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
            break;

          case "YXZ":
            this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
            break;

          case "ZXY":
            this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
            break;

          case "ZYX":
            this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
            break;

          case "YZX":
            this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
            break;

          case "XZY":
            this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p;
            break;

          default:
            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
        }

        return !1 !== e && this._onChangeCallback(), this;
      }
    }, {
      key: "setFromAxisAngle",
      value: function setFromAxisAngle(t, e) {
        var n = e / 2,
            i = Math.sin(n);
        return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
      }
    }, {
      key: "setFromRotationMatrix",
      value: function setFromRotationMatrix(t) {
        var e = t.elements,
            n = e[0],
            i = e[4],
            r = e[8],
            s = e[1],
            a = e[5],
            o = e[9],
            l = e[2],
            c = e[6],
            h = e[10],
            u = n + a + h;

        if (u > 0) {
          var _t8 = .5 / Math.sqrt(u + 1);

          this._w = .25 / _t8, this._x = (c - o) * _t8, this._y = (r - l) * _t8, this._z = (s - i) * _t8;
        } else if (n > a && n > h) {
          var _t9 = 2 * Math.sqrt(1 + n - a - h);

          this._w = (c - o) / _t9, this._x = .25 * _t9, this._y = (i + s) / _t9, this._z = (r + l) / _t9;
        } else if (a > h) {
          var _t10 = 2 * Math.sqrt(1 + a - n - h);

          this._w = (r - l) / _t10, this._x = (i + s) / _t10, this._y = .25 * _t10, this._z = (o + c) / _t10;
        } else {
          var _t11 = 2 * Math.sqrt(1 + h - n - a);

          this._w = (s - i) / _t11, this._x = (r + l) / _t11, this._y = (o + c) / _t11, this._z = .25 * _t11;
        }

        return this._onChangeCallback(), this;
      }
    }, {
      key: "setFromUnitVectors",
      value: function setFromUnitVectors(t, e) {
        var n = t.dot(e) + 1;
        return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
      }
    }, {
      key: "angleTo",
      value: function angleTo(t) {
        return 2 * Math.acos(Math.abs(ht(this.dot(t), -1, 1)));
      }
    }, {
      key: "rotateTowards",
      value: function rotateTowards(t, e) {
        var n = this.angleTo(t);
        if (0 === n) return this;
        var i = Math.min(1, e / n);
        return this.slerp(t, i), this;
      }
    }, {
      key: "identity",
      value: function identity() {
        return this.set(0, 0, 0, 1);
      }
    }, {
      key: "invert",
      value: function invert() {
        return this.conjugate();
      }
    }, {
      key: "conjugate",
      value: function conjugate() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
      }
    }, {
      key: "dot",
      value: function dot(t) {
        return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
      }
    }, {
      key: "lengthSq",
      value: function lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
      }
    }, {
      key: "normalize",
      value: function normalize() {
        var t = this.length();
        return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
      }
    }, {
      key: "multiply",
      value: function multiply(t, e) {
        return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t);
      }
    }, {
      key: "premultiply",
      value: function premultiply(t) {
        return this.multiplyQuaternions(t, this);
      }
    }, {
      key: "multiplyQuaternions",
      value: function multiplyQuaternions(t, e) {
        var n = t._x,
            i = t._y,
            r = t._z,
            s = t._w,
            a = e._x,
            o = e._y,
            l = e._z,
            c = e._w;
        return this._x = n * c + s * a + i * l - r * o, this._y = i * c + s * o + r * a - n * l, this._z = r * c + s * l + n * o - i * a, this._w = s * c - n * a - i * o - r * l, this._onChangeCallback(), this;
      }
    }, {
      key: "slerp",
      value: function slerp(t, e) {
        if (0 === e) return this;
        if (1 === e) return this.copy(t);
        var n = this._x,
            i = this._y,
            r = this._z,
            s = this._w;
        var a = s * t._w + n * t._x + i * t._y + r * t._z;
        if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = s, this._x = n, this._y = i, this._z = r, this;
        var o = 1 - a * a;

        if (o <= Number.EPSILON) {
          var _t12 = 1 - e;

          return this._w = _t12 * s + e * this._w, this._x = _t12 * n + e * this._x, this._y = _t12 * i + e * this._y, this._z = _t12 * r + e * this._z, this.normalize(), this._onChangeCallback(), this;
        }

        var l = Math.sqrt(o),
            c = Math.atan2(l, a),
            h = Math.sin((1 - e) * c) / l,
            u = Math.sin(e * c) / l;
        return this._w = s * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this;
      }
    }, {
      key: "slerpQuaternions",
      value: function slerpQuaternions(t, e, n) {
        this.copy(t).slerp(e, n);
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
      }
    }, {
      key: "fromBufferAttribute",
      value: function fromBufferAttribute(t, e) {
        return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this;
      }
    }, {
      key: "_onChange",
      value: function _onChange(t) {
        return this._onChangeCallback = t, this;
      }
    }, {
      key: "_onChangeCallback",
      value: function _onChangeCallback() {}
    }], [{
      key: "slerp",
      value: function slerp(t, e, n, i) {
        return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(t, e, i);
      }
    }, {
      key: "slerpFlat",
      value: function slerpFlat(t, e, n, i, r, s, a) {
        var o = n[i + 0],
            l = n[i + 1],
            c = n[i + 2],
            h = n[i + 3];
        var u = r[s + 0],
            d = r[s + 1],
            p = r[s + 2],
            m = r[s + 3];
        if (0 === a) return t[e + 0] = o, t[e + 1] = l, t[e + 2] = c, void (t[e + 3] = h);
        if (1 === a) return t[e + 0] = u, t[e + 1] = d, t[e + 2] = p, void (t[e + 3] = m);

        if (h !== m || o !== u || l !== d || c !== p) {
          var _t13 = 1 - a;

          var _e5 = o * u + l * d + c * p + h * m,
              _n7 = _e5 >= 0 ? 1 : -1,
              _i5 = 1 - _e5 * _e5;

          if (_i5 > Number.EPSILON) {
            var _r4 = Math.sqrt(_i5),
                _s2 = Math.atan2(_r4, _e5 * _n7);

            _t13 = Math.sin(_t13 * _s2) / _r4, a = Math.sin(a * _s2) / _r4;
          }

          var _r3 = a * _n7;

          if (o = o * _t13 + u * _r3, l = l * _t13 + d * _r3, c = c * _t13 + p * _r3, h = h * _t13 + m * _r3, _t13 === 1 - a) {
            var _t14 = 1 / Math.sqrt(o * o + l * l + c * c + h * h);

            o *= _t14, l *= _t14, c *= _t14, h *= _t14;
          }
        }

        t[e] = o, t[e + 1] = l, t[e + 2] = c, t[e + 3] = h;
      }
    }, {
      key: "multiplyQuaternionsFlat",
      value: function multiplyQuaternionsFlat(t, e, n, i, r, s) {
        var a = n[i],
            o = n[i + 1],
            l = n[i + 2],
            c = n[i + 3],
            h = r[s],
            u = r[s + 1],
            d = r[s + 2],
            p = r[s + 3];
        return t[e] = a * p + c * h + o * d - l * u, t[e + 1] = o * p + c * u + l * h - a * d, t[e + 2] = l * p + c * d + a * u - o * h, t[e + 3] = c * p - a * h - o * u - l * d, t;
      }
    }]);

    return Lt;
  }();

  Lt.prototype.isQuaternion = !0;

  var Rt = /*#__PURE__*/function () {
    function Rt() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, Rt);

      this.x = t, this.y = e, this.z = n;
    }

    _createClass(Rt, [{
      key: "set",
      value: function set(t, e, n) {
        return void 0 === n && (n = this.z), this.x = t, this.y = e, this.z = n, this;
      }
    }, {
      key: "setScalar",
      value: function setScalar(t) {
        return this.x = t, this.y = t, this.z = t, this;
      }
    }, {
      key: "setX",
      value: function setX(t) {
        return this.x = t, this;
      }
    }, {
      key: "setY",
      value: function setY(t) {
        return this.y = t, this;
      }
    }, {
      key: "setZ",
      value: function setZ(t) {
        return this.z = t, this;
      }
    }, {
      key: "setComponent",
      value: function setComponent(t, e) {
        switch (t) {
          case 0:
            this.x = e;
            break;

          case 1:
            this.y = e;
            break;

          case 2:
            this.z = e;
            break;

          default:
            throw new Error("index is out of range: " + t);
        }

        return this;
      }
    }, {
      key: "getComponent",
      value: function getComponent(t) {
        switch (t) {
          case 0:
            return this.x;

          case 1:
            return this.y;

          case 2:
            return this.z;

          default:
            throw new Error("index is out of range: " + t);
        }
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this.x, this.y, this.z);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this;
      }
    }, {
      key: "add",
      value: function add(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this);
      }
    }, {
      key: "addScalar",
      value: function addScalar(t) {
        return this.x += t, this.y += t, this.z += t, this;
      }
    }, {
      key: "addVectors",
      value: function addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
      }
    }, {
      key: "addScaledVector",
      value: function addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
      }
    }, {
      key: "sub",
      value: function sub(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this);
      }
    }, {
      key: "subScalar",
      value: function subScalar(t) {
        return this.x -= t, this.y -= t, this.z -= t, this;
      }
    }, {
      key: "subVectors",
      value: function subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
      }
    }, {
      key: "multiply",
      value: function multiply(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this);
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(t) {
        return this.x *= t, this.y *= t, this.z *= t, this;
      }
    }, {
      key: "multiplyVectors",
      value: function multiplyVectors(t, e) {
        return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
      }
    }, {
      key: "applyEuler",
      value: function applyEuler(t) {
        return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(Pt.setFromEuler(t));
      }
    }, {
      key: "applyAxisAngle",
      value: function applyAxisAngle(t, e) {
        return this.applyQuaternion(Pt.setFromAxisAngle(t, e));
      }
    }, {
      key: "applyMatrix3",
      value: function applyMatrix3(t) {
        var e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
        return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this;
      }
    }, {
      key: "applyNormalMatrix",
      value: function applyNormalMatrix(t) {
        return this.applyMatrix3(t).normalize();
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        var e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements,
            s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
        return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s, this;
      }
    }, {
      key: "applyQuaternion",
      value: function applyQuaternion(t) {
        var e = this.x,
            n = this.y,
            i = this.z,
            r = t.x,
            s = t.y,
            a = t.z,
            o = t.w,
            l = o * e + s * i - a * n,
            c = o * n + a * e - r * i,
            h = o * i + r * n - s * e,
            u = -r * e - s * n - a * i;
        return this.x = l * o + u * -r + c * -a - h * -s, this.y = c * o + u * -s + h * -r - l * -a, this.z = h * o + u * -a + l * -s - c * -r, this;
      }
    }, {
      key: "project",
      value: function project(t) {
        return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
      }
    }, {
      key: "unproject",
      value: function unproject(t) {
        return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
      }
    }, {
      key: "transformDirection",
      value: function transformDirection(t) {
        var e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
        return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize();
      }
    }, {
      key: "divide",
      value: function divide(t) {
        return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
      }
    }, {
      key: "divideScalar",
      value: function divideScalar(t) {
        return this.multiplyScalar(1 / t);
      }
    }, {
      key: "min",
      value: function min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
      }
    }, {
      key: "max",
      value: function max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
      }
    }, {
      key: "clamp",
      value: function clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
      }
    }, {
      key: "clampScalar",
      value: function clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
      }
    }, {
      key: "clampLength",
      value: function clampLength(t, e) {
        var n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
      }
    }, {
      key: "floor",
      value: function floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
      }
    }, {
      key: "ceil",
      value: function ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
      }
    }, {
      key: "round",
      value: function round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
      }
    }, {
      key: "roundToZero",
      value: function roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
      }
    }, {
      key: "negate",
      value: function negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
      }
    }, {
      key: "dot",
      value: function dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z;
      }
    }, {
      key: "lengthSq",
      value: function lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      }
    }, {
      key: "manhattanLength",
      value: function manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
      }
    }, {
      key: "normalize",
      value: function normalize() {
        return this.divideScalar(this.length() || 1);
      }
    }, {
      key: "setLength",
      value: function setLength(t) {
        return this.normalize().multiplyScalar(t);
      }
    }, {
      key: "lerp",
      value: function lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
      }
    }, {
      key: "lerpVectors",
      value: function lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
      }
    }, {
      key: "cross",
      value: function cross(t, e) {
        return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t);
      }
    }, {
      key: "crossVectors",
      value: function crossVectors(t, e) {
        var n = t.x,
            i = t.y,
            r = t.z,
            s = e.x,
            a = e.y,
            o = e.z;
        return this.x = i * o - r * a, this.y = r * s - n * o, this.z = n * a - i * s, this;
      }
    }, {
      key: "projectOnVector",
      value: function projectOnVector(t) {
        var e = t.lengthSq();
        if (0 === e) return this.set(0, 0, 0);
        var n = t.dot(this) / e;
        return this.copy(t).multiplyScalar(n);
      }
    }, {
      key: "projectOnPlane",
      value: function projectOnPlane(t) {
        return Ct.copy(this).projectOnVector(t), this.sub(Ct);
      }
    }, {
      key: "reflect",
      value: function reflect(t) {
        return this.sub(Ct.copy(t).multiplyScalar(2 * this.dot(t)));
      }
    }, {
      key: "angleTo",
      value: function angleTo(t) {
        var e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (0 === e) return Math.PI / 2;
        var n = this.dot(t) / e;
        return Math.acos(ht(n, -1, 1));
      }
    }, {
      key: "distanceTo",
      value: function distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t));
      }
    }, {
      key: "distanceToSquared",
      value: function distanceToSquared(t) {
        var e = this.x - t.x,
            n = this.y - t.y,
            i = this.z - t.z;
        return e * e + n * n + i * i;
      }
    }, {
      key: "manhattanDistanceTo",
      value: function manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
      }
    }, {
      key: "setFromSpherical",
      value: function setFromSpherical(t) {
        return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
      }
    }, {
      key: "setFromSphericalCoords",
      value: function setFromSphericalCoords(t, e, n) {
        var i = Math.sin(e) * t;
        return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this;
      }
    }, {
      key: "setFromCylindrical",
      value: function setFromCylindrical(t) {
        return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
      }
    }, {
      key: "setFromCylindricalCoords",
      value: function setFromCylindricalCoords(t, e, n) {
        return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
      }
    }, {
      key: "setFromMatrixPosition",
      value: function setFromMatrixPosition(t) {
        var e = t.elements;
        return this.x = e[12], this.y = e[13], this.z = e[14], this;
      }
    }, {
      key: "setFromMatrixScale",
      value: function setFromMatrixScale(t) {
        var e = this.setFromMatrixColumn(t, 0).length(),
            n = this.setFromMatrixColumn(t, 1).length(),
            i = this.setFromMatrixColumn(t, 2).length();
        return this.x = e, this.y = n, this.z = i, this;
      }
    }, {
      key: "setFromMatrixColumn",
      value: function setFromMatrixColumn(t, e) {
        return this.fromArray(t.elements, 4 * e);
      }
    }, {
      key: "setFromMatrix3Column",
      value: function setFromMatrix3Column(t, e) {
        return this.fromArray(t.elements, 3 * e);
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
      }
    }, {
      key: "fromBufferAttribute",
      value: function fromBufferAttribute(t, e, n) {
        return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
      }
    }, {
      key: "random",
      value: function random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
      }
    }]);

    return Rt;
  }();

  Rt.prototype.isVector3 = !0;
  var Ct = new Rt(),
      Pt = new Lt();

  var Dt = /*#__PURE__*/function () {
    function Dt() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Rt(1 / 0, 1 / 0, 1 / 0);
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Rt(-1 / 0, -1 / 0, -1 / 0);

      _classCallCheck(this, Dt);

      this.min = t, this.max = e;
    }

    _createClass(Dt, [{
      key: "set",
      value: function set(t, e) {
        return this.min.copy(t), this.max.copy(e), this;
      }
    }, {
      key: "setFromArray",
      value: function setFromArray(t) {
        var e = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            s = -1 / 0,
            a = -1 / 0;

        for (var _o3 = 0, _l2 = t.length; _o3 < _l2; _o3 += 3) {
          var _l3 = t[_o3],
              _c2 = t[_o3 + 1],
              _h2 = t[_o3 + 2];
          _l3 < e && (e = _l3), _c2 < n && (n = _c2), _h2 < i && (i = _h2), _l3 > r && (r = _l3), _c2 > s && (s = _c2), _h2 > a && (a = _h2);
        }

        return this.min.set(e, n, i), this.max.set(r, s, a), this;
      }
    }, {
      key: "setFromBufferAttribute",
      value: function setFromBufferAttribute(t) {
        var e = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            s = -1 / 0,
            a = -1 / 0;

        for (var _o4 = 0, _l4 = t.count; _o4 < _l4; _o4++) {
          var _l5 = t.getX(_o4),
              _c3 = t.getY(_o4),
              _h3 = t.getZ(_o4);

          _l5 < e && (e = _l5), _c3 < n && (n = _c3), _h3 < i && (i = _h3), _l5 > r && (r = _l5), _c3 > s && (s = _c3), _h3 > a && (a = _h3);
        }

        return this.min.set(e, n, i), this.max.set(r, s, a), this;
      }
    }, {
      key: "setFromPoints",
      value: function setFromPoints(t) {
        this.makeEmpty();

        for (var _e6 = 0, _n8 = t.length; _e6 < _n8; _e6++) {
          this.expandByPoint(t[_e6]);
        }

        return this;
      }
    }, {
      key: "setFromCenterAndSize",
      value: function setFromCenterAndSize(t, e) {
        var n = Nt.copy(e).multiplyScalar(.5);
        return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
      }
    }, {
      key: "setFromObject",
      value: function setFromObject(t) {
        return this.makeEmpty(), this.expandByObject(t);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.min.copy(t.min), this.max.copy(t.max), this;
      }
    }, {
      key: "makeEmpty",
      value: function makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
      }
    }, {
      key: "getCenter",
      value: function getCenter(t) {
        return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new Rt()), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
      }
    }, {
      key: "getSize",
      value: function getSize(t) {
        return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new Rt()), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
      }
    }, {
      key: "expandByPoint",
      value: function expandByPoint(t) {
        return this.min.min(t), this.max.max(t), this;
      }
    }, {
      key: "expandByVector",
      value: function expandByVector(t) {
        return this.min.sub(t), this.max.add(t), this;
      }
    }, {
      key: "expandByScalar",
      value: function expandByScalar(t) {
        return this.min.addScalar(-t), this.max.addScalar(t), this;
      }
    }, {
      key: "expandByObject",
      value: function expandByObject(t) {
        t.updateWorldMatrix(!1, !1);
        var e = t.geometry;
        void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(), Bt.copy(e.boundingBox), Bt.applyMatrix4(t.matrixWorld), this.union(Bt));
        var n = t.children;

        for (var _t15 = 0, _e7 = n.length; _t15 < _e7; _t15++) {
          this.expandByObject(n[_t15]);
        }

        return this;
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(t) {
        return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
      }
    }, {
      key: "containsBox",
      value: function containsBox(t) {
        return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
      }
    }, {
      key: "getParameter",
      value: function getParameter(t, e) {
        return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new Rt()), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(t) {
        return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
      }
    }, {
      key: "intersectsSphere",
      value: function intersectsSphere(t) {
        return this.clampPoint(t.center, Nt), Nt.distanceToSquared(t.center) <= t.radius * t.radius;
      }
    }, {
      key: "intersectsPlane",
      value: function intersectsPlane(t) {
        var e, n;
        return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
      }
    }, {
      key: "intersectsTriangle",
      value: function intersectsTriangle(t) {
        if (this.isEmpty()) return !1;
        this.getCenter(kt), Vt.subVectors(this.max, kt), zt.subVectors(t.a, kt), Ft.subVectors(t.b, kt), Ot.subVectors(t.c, kt), Ht.subVectors(Ft, zt), Gt.subVectors(Ot, Ft), Ut.subVectors(zt, Ot);
        var e = [0, -Ht.z, Ht.y, 0, -Gt.z, Gt.y, 0, -Ut.z, Ut.y, Ht.z, 0, -Ht.x, Gt.z, 0, -Gt.x, Ut.z, 0, -Ut.x, -Ht.y, Ht.x, 0, -Gt.y, Gt.x, 0, -Ut.y, Ut.x, 0];
        return !!qt(e, zt, Ft, Ot, Vt) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!qt(e, zt, Ft, Ot, Vt) && (Wt.crossVectors(Ht, Gt), e = [Wt.x, Wt.y, Wt.z], qt(e, zt, Ft, Ot, Vt)));
      }
    }, {
      key: "clampPoint",
      value: function clampPoint(t, e) {
        return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new Rt()), e.copy(t).clamp(this.min, this.max);
      }
    }, {
      key: "distanceToPoint",
      value: function distanceToPoint(t) {
        return Nt.copy(t).clamp(this.min, this.max).sub(t).length();
      }
    }, {
      key: "getBoundingSphere",
      value: function getBoundingSphere(t) {
        return void 0 === t && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(t.center), t.radius = .5 * this.getSize(Nt).length(), t;
      }
    }, {
      key: "intersect",
      value: function intersect(t) {
        return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
      }
    }, {
      key: "union",
      value: function union(t) {
        return this.min.min(t.min), this.max.max(t.max), this;
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        return this.isEmpty() || (It[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), It[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), It[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), It[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), It[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), It[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), It[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), It[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(It)), this;
      }
    }, {
      key: "translate",
      value: function translate(t) {
        return this.min.add(t), this.max.add(t), this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.min.equals(this.min) && t.max.equals(this.max);
      }
    }]);

    return Dt;
  }();

  Dt.prototype.isBox3 = !0;
  var It = [new Rt(), new Rt(), new Rt(), new Rt(), new Rt(), new Rt(), new Rt(), new Rt()],
      Nt = new Rt(),
      Bt = new Dt(),
      zt = new Rt(),
      Ft = new Rt(),
      Ot = new Rt(),
      Ht = new Rt(),
      Gt = new Rt(),
      Ut = new Rt(),
      kt = new Rt(),
      Vt = new Rt(),
      Wt = new Rt(),
      jt = new Rt();

  function qt(t, e, n, i, r) {
    for (var _s3 = 0, _a2 = t.length - 3; _s3 <= _a2; _s3 += 3) {
      jt.fromArray(t, _s3);

      var _a3 = r.x * Math.abs(jt.x) + r.y * Math.abs(jt.y) + r.z * Math.abs(jt.z),
          _o5 = e.dot(jt),
          _l6 = n.dot(jt),
          _c4 = i.dot(jt);

      if (Math.max(-Math.max(_o5, _l6, _c4), Math.min(_o5, _l6, _c4)) > _a3) return !1;
    }

    return !0;
  }

  var Xt = new Dt(),
      Yt = new Rt(),
      Zt = new Rt(),
      Jt = new Rt();

  var Qt = /*#__PURE__*/function () {
    function Qt() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Rt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      _classCallCheck(this, Qt);

      this.center = t, this.radius = e;
    }

    _createClass(Qt, [{
      key: "set",
      value: function set(t, e) {
        return this.center.copy(t), this.radius = e, this;
      }
    }, {
      key: "setFromPoints",
      value: function setFromPoints(t, e) {
        var n = this.center;
        void 0 !== e ? n.copy(e) : Xt.setFromPoints(t).getCenter(n);
        var i = 0;

        for (var _e8 = 0, _r5 = t.length; _e8 < _r5; _e8++) {
          i = Math.max(i, n.distanceToSquared(t[_e8]));
        }

        return this.radius = Math.sqrt(i), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.center.copy(t.center), this.radius = t.radius, this;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this.radius < 0;
      }
    }, {
      key: "makeEmpty",
      value: function makeEmpty() {
        return this.center.set(0, 0, 0), this.radius = -1, this;
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(t) {
        return t.distanceToSquared(this.center) <= this.radius * this.radius;
      }
    }, {
      key: "distanceToPoint",
      value: function distanceToPoint(t) {
        return t.distanceTo(this.center) - this.radius;
      }
    }, {
      key: "intersectsSphere",
      value: function intersectsSphere(t) {
        var e = this.radius + t.radius;
        return t.center.distanceToSquared(this.center) <= e * e;
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(t) {
        return t.intersectsSphere(this);
      }
    }, {
      key: "intersectsPlane",
      value: function intersectsPlane(t) {
        return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
      }
    }, {
      key: "clampPoint",
      value: function clampPoint(t, e) {
        var n = this.center.distanceToSquared(t);
        return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new Rt()), e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
      }
    }, {
      key: "getBoundingBox",
      value: function getBoundingBox(t) {
        return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new Dt()), this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
      }
    }, {
      key: "translate",
      value: function translate(t) {
        return this.center.add(t), this;
      }
    }, {
      key: "expandByPoint",
      value: function expandByPoint(t) {
        Jt.subVectors(t, this.center);
        var e = Jt.lengthSq();

        if (e > this.radius * this.radius) {
          var _t16 = Math.sqrt(e),
              _n9 = .5 * (_t16 - this.radius);

          this.center.add(Jt.multiplyScalar(_n9 / _t16)), this.radius += _n9;
        }

        return this;
      }
    }, {
      key: "union",
      value: function union(t) {
        return Zt.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius), this.expandByPoint(Yt.copy(t.center).add(Zt)), this.expandByPoint(Yt.copy(t.center).sub(Zt)), this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.center.equals(this.center) && t.radius === this.radius;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return Qt;
  }();

  var Kt = new Rt(),
      $t = new Rt(),
      te = new Rt(),
      ee = new Rt(),
      ne = new Rt(),
      ie = new Rt(),
      re = new Rt();

  var se = /*#__PURE__*/function () {
    function se() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Rt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Rt(0, 0, -1);

      _classCallCheck(this, se);

      this.origin = t, this.direction = e;
    }

    _createClass(se, [{
      key: "set",
      value: function set(t, e) {
        return this.origin.copy(t), this.direction.copy(e), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
      }
    }, {
      key: "at",
      value: function at(t, e) {
        return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new Rt()), e.copy(this.direction).multiplyScalar(t).add(this.origin);
      }
    }, {
      key: "lookAt",
      value: function lookAt(t) {
        return this.direction.copy(t).sub(this.origin).normalize(), this;
      }
    }, {
      key: "recast",
      value: function recast(t) {
        return this.origin.copy(this.at(t, Kt)), this;
      }
    }, {
      key: "closestPointToPoint",
      value: function closestPointToPoint(t, e) {
        void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new Rt()), e.subVectors(t, this.origin);
        var n = e.dot(this.direction);
        return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin);
      }
    }, {
      key: "distanceToPoint",
      value: function distanceToPoint(t) {
        return Math.sqrt(this.distanceSqToPoint(t));
      }
    }, {
      key: "distanceSqToPoint",
      value: function distanceSqToPoint(t) {
        var e = Kt.subVectors(t, this.origin).dot(this.direction);
        return e < 0 ? this.origin.distanceToSquared(t) : (Kt.copy(this.direction).multiplyScalar(e).add(this.origin), Kt.distanceToSquared(t));
      }
    }, {
      key: "distanceSqToSegment",
      value: function distanceSqToSegment(t, e, n, i) {
        $t.copy(t).add(e).multiplyScalar(.5), te.copy(e).sub(t).normalize(), ee.copy(this.origin).sub($t);
        var r = .5 * t.distanceTo(e),
            s = -this.direction.dot(te),
            a = ee.dot(this.direction),
            o = -ee.dot(te),
            l = ee.lengthSq(),
            c = Math.abs(1 - s * s);
        var h, u, d, p;
        if (c > 0) {
          if (h = s * o - a, u = s * a - o, p = r * c, h >= 0) {
            if (u >= -p) {
              if (u <= p) {
                var _t17 = 1 / c;

                h *= _t17, u *= _t17, d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l;
              } else u = r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
            } else u = -r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
          } else u <= -p ? (h = Math.max(0, -(-s * r + a)), u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)), u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l);
        } else u = s > 0 ? -r : r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
        return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(te).multiplyScalar(u).add($t), d;
      }
    }, {
      key: "intersectSphere",
      value: function intersectSphere(t, e) {
        Kt.subVectors(t.center, this.origin);
        var n = Kt.dot(this.direction),
            i = Kt.dot(Kt) - n * n,
            r = t.radius * t.radius;
        if (i > r) return null;
        var s = Math.sqrt(r - i),
            a = n - s,
            o = n + s;
        return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
      }
    }, {
      key: "intersectsSphere",
      value: function intersectsSphere(t) {
        return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
      }
    }, {
      key: "distanceToPlane",
      value: function distanceToPlane(t) {
        var e = t.normal.dot(this.direction);
        if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
        var n = -(this.origin.dot(t.normal) + t.constant) / e;
        return n >= 0 ? n : null;
      }
    }, {
      key: "intersectPlane",
      value: function intersectPlane(t, e) {
        var n = this.distanceToPlane(t);
        return null === n ? null : this.at(n, e);
      }
    }, {
      key: "intersectsPlane",
      value: function intersectsPlane(t) {
        var e = t.distanceToPoint(this.origin);
        if (0 === e) return !0;
        return t.normal.dot(this.direction) * e < 0;
      }
    }, {
      key: "intersectBox",
      value: function intersectBox(t, e) {
        var n, i, r, s, a, o;
        var l = 1 / this.direction.x,
            c = 1 / this.direction.y,
            h = 1 / this.direction.z,
            u = this.origin;
        return l >= 0 ? (n = (t.min.x - u.x) * l, i = (t.max.x - u.x) * l) : (n = (t.max.x - u.x) * l, i = (t.min.x - u.x) * l), c >= 0 ? (r = (t.min.y - u.y) * c, s = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, s = (t.min.y - u.y) * c), n > s || r > i ? null : ((r > n || n != n) && (n = r), (s < i || i != i) && (i = s), h >= 0 ? (a = (t.min.z - u.z) * h, o = (t.max.z - u.z) * h) : (a = (t.max.z - u.z) * h, o = (t.min.z - u.z) * h), n > o || a > i ? null : ((a > n || n != n) && (n = a), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)));
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(t) {
        return null !== this.intersectBox(t, Kt);
      }
    }, {
      key: "intersectTriangle",
      value: function intersectTriangle(t, e, n, i, r) {
        ne.subVectors(e, t), ie.subVectors(n, t), re.crossVectors(ne, ie);
        var s,
            a = this.direction.dot(re);

        if (a > 0) {
          if (i) return null;
          s = 1;
        } else {
          if (!(a < 0)) return null;
          s = -1, a = -a;
        }

        ee.subVectors(this.origin, t);
        var o = s * this.direction.dot(ie.crossVectors(ee, ie));
        if (o < 0) return null;
        var l = s * this.direction.dot(ne.cross(ee));
        if (l < 0) return null;
        if (o + l > a) return null;
        var c = -s * ee.dot(re);
        return c < 0 ? null : this.at(c / a, r);
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.origin.equals(this.origin) && t.direction.equals(this.direction);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return se;
  }();

  var ae = /*#__PURE__*/function () {
    function ae() {
      _classCallCheck(this, ae);

      this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
    }

    _createClass(ae, [{
      key: "set",
      value: function set(t, e, n, i, r, s, a, o, l, c, h, u, d, p, m, f) {
        var g = this.elements;
        return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = m, g[15] = f, this;
      }
    }, {
      key: "identity",
      value: function identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new ae().fromArray(this.elements);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        var e = this.elements,
            n = t.elements;
        return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
      }
    }, {
      key: "copyPosition",
      value: function copyPosition(t) {
        var e = this.elements,
            n = t.elements;
        return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
      }
    }, {
      key: "setFromMatrix3",
      value: function setFromMatrix3(t) {
        var e = t.elements;
        return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "extractBasis",
      value: function extractBasis(t, e, n) {
        return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
      }
    }, {
      key: "makeBasis",
      value: function makeBasis(t, e, n) {
        return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "extractRotation",
      value: function extractRotation(t) {
        var e = this.elements,
            n = t.elements,
            i = 1 / oe.setFromMatrixColumn(t, 0).length(),
            r = 1 / oe.setFromMatrixColumn(t, 1).length(),
            s = 1 / oe.setFromMatrixColumn(t, 2).length();
        return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * s, e[9] = n[9] * s, e[10] = n[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
      }
    }, {
      key: "makeRotationFromEuler",
      value: function makeRotationFromEuler(t) {
        t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z,
            s = Math.cos(n),
            a = Math.sin(n),
            o = Math.cos(i),
            l = Math.sin(i),
            c = Math.cos(r),
            h = Math.sin(r);

        if ("XYZ" === t.order) {
          var _t18 = s * c,
              _n10 = s * h,
              _i6 = a * c,
              _r6 = a * h;

          e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = _n10 + _i6 * l, e[5] = _t18 - _r6 * l, e[9] = -a * o, e[2] = _r6 - _t18 * l, e[6] = _i6 + _n10 * l, e[10] = s * o;
        } else if ("YXZ" === t.order) {
          var _t19 = o * c,
              _n11 = o * h,
              _i7 = l * c,
              _r7 = l * h;

          e[0] = _t19 + _r7 * a, e[4] = _i7 * a - _n11, e[8] = s * l, e[1] = s * h, e[5] = s * c, e[9] = -a, e[2] = _n11 * a - _i7, e[6] = _r7 + _t19 * a, e[10] = s * o;
        } else if ("ZXY" === t.order) {
          var _t20 = o * c,
              _n12 = o * h,
              _i8 = l * c,
              _r8 = l * h;

          e[0] = _t20 - _r8 * a, e[4] = -s * h, e[8] = _i8 + _n12 * a, e[1] = _n12 + _i8 * a, e[5] = s * c, e[9] = _r8 - _t20 * a, e[2] = -s * l, e[6] = a, e[10] = s * o;
        } else if ("ZYX" === t.order) {
          var _t21 = s * c,
              _n13 = s * h,
              _i9 = a * c,
              _r9 = a * h;

          e[0] = o * c, e[4] = _i9 * l - _n13, e[8] = _t21 * l + _r9, e[1] = o * h, e[5] = _r9 * l + _t21, e[9] = _n13 * l - _i9, e[2] = -l, e[6] = a * o, e[10] = s * o;
        } else if ("YZX" === t.order) {
          var _t22 = s * o,
              _n14 = s * l,
              _i10 = a * o,
              _r10 = a * l;

          e[0] = o * c, e[4] = _r10 - _t22 * h, e[8] = _i10 * h + _n14, e[1] = h, e[5] = s * c, e[9] = -a * c, e[2] = -l * c, e[6] = _n14 * h + _i10, e[10] = _t22 - _r10 * h;
        } else if ("XZY" === t.order) {
          var _t23 = s * o,
              _n15 = s * l,
              _i11 = a * o,
              _r11 = a * l;

          e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = _t23 * h + _r11, e[5] = s * c, e[9] = _n15 * h - _i11, e[2] = _i11 * h - _n15, e[6] = a * c, e[10] = _r11 * h + _t23;
        }

        return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
      }
    }, {
      key: "makeRotationFromQuaternion",
      value: function makeRotationFromQuaternion(t) {
        return this.compose(ce, t, he);
      }
    }, {
      key: "lookAt",
      value: function lookAt(t, e, n) {
        var i = this.elements;
        return pe.subVectors(t, e), 0 === pe.lengthSq() && (pe.z = 1), pe.normalize(), ue.crossVectors(n, pe), 0 === ue.lengthSq() && (1 === Math.abs(n.z) ? pe.x += 1e-4 : pe.z += 1e-4, pe.normalize(), ue.crossVectors(n, pe)), ue.normalize(), de.crossVectors(pe, ue), i[0] = ue.x, i[4] = de.x, i[8] = pe.x, i[1] = ue.y, i[5] = de.y, i[9] = pe.y, i[2] = ue.z, i[6] = de.z, i[10] = pe.z, this;
      }
    }, {
      key: "multiply",
      value: function multiply(t, e) {
        return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t);
      }
    }, {
      key: "premultiply",
      value: function premultiply(t) {
        return this.multiplyMatrices(t, this);
      }
    }, {
      key: "multiplyMatrices",
      value: function multiplyMatrices(t, e) {
        var n = t.elements,
            i = e.elements,
            r = this.elements,
            s = n[0],
            a = n[4],
            o = n[8],
            l = n[12],
            c = n[1],
            h = n[5],
            u = n[9],
            d = n[13],
            p = n[2],
            m = n[6],
            f = n[10],
            g = n[14],
            v = n[3],
            y = n[7],
            x = n[11],
            _ = n[15],
            w = i[0],
            b = i[4],
            M = i[8],
            S = i[12],
            T = i[1],
            E = i[5],
            A = i[9],
            L = i[13],
            R = i[2],
            C = i[6],
            P = i[10],
            D = i[14],
            I = i[3],
            N = i[7],
            B = i[11],
            z = i[15];
        return r[0] = s * w + a * T + o * R + l * I, r[4] = s * b + a * E + o * C + l * N, r[8] = s * M + a * A + o * P + l * B, r[12] = s * S + a * L + o * D + l * z, r[1] = c * w + h * T + u * R + d * I, r[5] = c * b + h * E + u * C + d * N, r[9] = c * M + h * A + u * P + d * B, r[13] = c * S + h * L + u * D + d * z, r[2] = p * w + m * T + f * R + g * I, r[6] = p * b + m * E + f * C + g * N, r[10] = p * M + m * A + f * P + g * B, r[14] = p * S + m * L + f * D + g * z, r[3] = v * w + y * T + x * R + _ * I, r[7] = v * b + y * E + x * C + _ * N, r[11] = v * M + y * A + x * P + _ * B, r[15] = v * S + y * L + x * D + _ * z, this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(t) {
        var e = this.elements;
        return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
      }
    }, {
      key: "determinant",
      value: function determinant() {
        var t = this.elements,
            e = t[0],
            n = t[4],
            i = t[8],
            r = t[12],
            s = t[1],
            a = t[5],
            o = t[9],
            l = t[13],
            c = t[2],
            h = t[6],
            u = t[10],
            d = t[14];
        return t[3] * (+r * o * h - i * l * h - r * a * u + n * l * u + i * a * d - n * o * d) + t[7] * (+e * o * d - e * l * u + r * s * u - i * s * d + i * l * c - r * o * c) + t[11] * (+e * l * h - e * a * d - r * s * h + n * s * d + r * a * c - n * l * c) + t[15] * (-i * a * c - e * o * h + e * a * u + i * s * h - n * s * u + n * o * c);
      }
    }, {
      key: "transpose",
      value: function transpose() {
        var t = this.elements;
        var e;
        return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
      }
    }, {
      key: "setPosition",
      value: function setPosition(t, e, n) {
        var i = this.elements;
        return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this;
      }
    }, {
      key: "invert",
      value: function invert() {
        var t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            c = t[8],
            h = t[9],
            u = t[10],
            d = t[11],
            p = t[12],
            m = t[13],
            f = t[14],
            g = t[15],
            v = h * f * l - m * u * l + m * o * d - a * f * d - h * o * g + a * u * g,
            y = p * u * l - c * f * l - p * o * d + s * f * d + c * o * g - s * u * g,
            x = c * m * l - p * h * l + p * a * d - s * m * d - c * a * g + s * h * g,
            _ = p * h * o - c * m * o - p * a * u + s * m * u + c * a * f - s * h * f,
            w = e * v + n * y + i * x + r * _;

        if (0 === w) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        var b = 1 / w;
        return t[0] = v * b, t[1] = (m * u * r - h * f * r - m * i * d + n * f * d + h * i * g - n * u * g) * b, t[2] = (a * f * r - m * o * r + m * i * l - n * f * l - a * i * g + n * o * g) * b, t[3] = (h * o * r - a * u * r - h * i * l + n * u * l + a * i * d - n * o * d) * b, t[4] = y * b, t[5] = (c * f * r - p * u * r + p * i * d - e * f * d - c * i * g + e * u * g) * b, t[6] = (p * o * r - s * f * r - p * i * l + e * f * l + s * i * g - e * o * g) * b, t[7] = (s * u * r - c * o * r + c * i * l - e * u * l - s * i * d + e * o * d) * b, t[8] = x * b, t[9] = (p * h * r - c * m * r - p * n * d + e * m * d + c * n * g - e * h * g) * b, t[10] = (s * m * r - p * a * r + p * n * l - e * m * l - s * n * g + e * a * g) * b, t[11] = (c * a * r - s * h * r - c * n * l + e * h * l + s * n * d - e * a * d) * b, t[12] = _ * b, t[13] = (c * m * i - p * h * i + p * n * u - e * m * u - c * n * f + e * h * f) * b, t[14] = (p * a * i - s * m * i - p * n * o + e * m * o + s * n * f - e * a * f) * b, t[15] = (s * h * i - c * a * i + c * n * o - e * h * o - s * n * u + e * a * u) * b, this;
      }
    }, {
      key: "scale",
      value: function scale(t) {
        var e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z;
        return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this;
      }
    }, {
      key: "getMaxScaleOnAxis",
      value: function getMaxScaleOnAxis() {
        var t = this.elements,
            e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
            n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
            i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
        return Math.sqrt(Math.max(e, n, i));
      }
    }, {
      key: "makeTranslation",
      value: function makeTranslation(t, e, n) {
        return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeRotationX",
      value: function makeRotationX(t) {
        var e = Math.cos(t),
            n = Math.sin(t);
        return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeRotationY",
      value: function makeRotationY(t) {
        var e = Math.cos(t),
            n = Math.sin(t);
        return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeRotationZ",
      value: function makeRotationZ(t) {
        var e = Math.cos(t),
            n = Math.sin(t);
        return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeRotationAxis",
      value: function makeRotationAxis(t, e) {
        var n = Math.cos(e),
            i = Math.sin(e),
            r = 1 - n,
            s = t.x,
            a = t.y,
            o = t.z,
            l = r * s,
            c = r * a;
        return this.set(l * s + n, l * a - i * o, l * o + i * a, 0, l * a + i * o, c * a + n, c * o - i * s, 0, l * o - i * a, c * o + i * s, r * o * o + n, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeScale",
      value: function makeScale(t, e, n) {
        return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "makeShear",
      value: function makeShear(t, e, n, i, r, s) {
        return this.set(1, n, r, 0, t, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this;
      }
    }, {
      key: "compose",
      value: function compose(t, e, n) {
        var i = this.elements,
            r = e._x,
            s = e._y,
            a = e._z,
            o = e._w,
            l = r + r,
            c = s + s,
            h = a + a,
            u = r * l,
            d = r * c,
            p = r * h,
            m = s * c,
            f = s * h,
            g = a * h,
            v = o * l,
            y = o * c,
            x = o * h,
            _ = n.x,
            w = n.y,
            b = n.z;
        return i[0] = (1 - (m + g)) * _, i[1] = (d + x) * _, i[2] = (p - y) * _, i[3] = 0, i[4] = (d - x) * w, i[5] = (1 - (u + g)) * w, i[6] = (f + v) * w, i[7] = 0, i[8] = (p + y) * b, i[9] = (f - v) * b, i[10] = (1 - (u + m)) * b, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
      }
    }, {
      key: "decompose",
      value: function decompose(t, e, n) {
        var i = this.elements;
        var r = oe.set(i[0], i[1], i[2]).length();
        var s = oe.set(i[4], i[5], i[6]).length(),
            a = oe.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], le.copy(this);
        var o = 1 / r,
            l = 1 / s,
            c = 1 / a;
        return le.elements[0] *= o, le.elements[1] *= o, le.elements[2] *= o, le.elements[4] *= l, le.elements[5] *= l, le.elements[6] *= l, le.elements[8] *= c, le.elements[9] *= c, le.elements[10] *= c, e.setFromRotationMatrix(le), n.x = r, n.y = s, n.z = a, this;
      }
    }, {
      key: "makePerspective",
      value: function makePerspective(t, e, n, i, r, s) {
        void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
        var a = this.elements,
            o = 2 * r / (e - t),
            l = 2 * r / (n - i),
            c = (e + t) / (e - t),
            h = (n + i) / (n - i),
            u = -(s + r) / (s - r),
            d = -2 * s * r / (s - r);
        return a[0] = o, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = l, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
      }
    }, {
      key: "makeOrthographic",
      value: function makeOrthographic(t, e, n, i, r, s) {
        var a = this.elements,
            o = 1 / (e - t),
            l = 1 / (n - i),
            c = 1 / (s - r),
            h = (e + t) * o,
            u = (n + i) * l,
            d = (s + r) * c;
        return a[0] = 2 * o, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * c, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        var e = this.elements,
            n = t.elements;

        for (var _t24 = 0; _t24 < 16; _t24++) {
          if (e[_t24] !== n[_t24]) return !1;
        }

        return !0;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        for (var _n16 = 0; _n16 < 16; _n16++) {
          this.elements[_n16] = t[_n16 + e];
        }

        return this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = this.elements;
        return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
      }
    }]);

    return ae;
  }();

  ae.prototype.isMatrix4 = !0;
  var oe = new Rt(),
      le = new ae(),
      ce = new Rt(0, 0, 0),
      he = new Rt(1, 1, 1),
      ue = new Rt(),
      de = new Rt(),
      pe = new Rt(),
      me = new ae(),
      fe = new Lt();

  var ge = /*#__PURE__*/function () {
    function ge() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ge.DefaultOrder;

      _classCallCheck(this, ge);

      this._x = t, this._y = e, this._z = n, this._order = i;
    }

    _createClass(ge, [{
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(t) {
        this._x = t, this._onChangeCallback();
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(t) {
        this._y = t, this._onChangeCallback();
      }
    }, {
      key: "z",
      get: function get() {
        return this._z;
      },
      set: function set(t) {
        this._z = t, this._onChangeCallback();
      }
    }, {
      key: "order",
      get: function get() {
        return this._order;
      },
      set: function set(t) {
        this._order = t, this._onChangeCallback();
      }
    }, {
      key: "set",
      value: function set(t, e, n, i) {
        return this._x = t, this._y = e, this._z = n, this._order = i || this._order, this._onChangeCallback(), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this._x, this._y, this._z, this._order);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
      }
    }, {
      key: "setFromRotationMatrix",
      value: function setFromRotationMatrix(t, e, n) {
        var i = t.elements,
            r = i[0],
            s = i[4],
            a = i[8],
            o = i[1],
            l = i[5],
            c = i[9],
            h = i[2],
            u = i[6],
            d = i[10];

        switch (e = e || this._order) {
          case "XYZ":
            this._y = Math.asin(ht(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u, l), this._z = 0);
            break;

          case "YXZ":
            this._x = Math.asin(-ht(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
            break;

          case "ZXY":
            this._x = Math.asin(ht(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(o, r));
            break;

          case "ZYX":
            this._y = Math.asin(-ht(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l));
            break;

          case "YZX":
            this._z = Math.asin(ht(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, d));
            break;

          case "XZY":
            this._z = Math.asin(-ht(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c, d), this._y = 0);
            break;

          default:
            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
        }

        return this._order = e, !1 !== n && this._onChangeCallback(), this;
      }
    }, {
      key: "setFromQuaternion",
      value: function setFromQuaternion(t, e, n) {
        return me.makeRotationFromQuaternion(t), this.setFromRotationMatrix(me, e, n);
      }
    }, {
      key: "setFromVector3",
      value: function setFromVector3(t, e) {
        return this.set(t.x, t.y, t.z, e || this._order);
      }
    }, {
      key: "reorder",
      value: function reorder(t) {
        return fe.setFromEuler(this), this.setFromQuaternion(fe, t);
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
      }
    }, {
      key: "toVector3",
      value: function toVector3(t) {
        return t ? t.set(this._x, this._y, this._z) : new Rt(this._x, this._y, this._z);
      }
    }, {
      key: "_onChange",
      value: function _onChange(t) {
        return this._onChangeCallback = t, this;
      }
    }, {
      key: "_onChangeCallback",
      value: function _onChangeCallback() {}
    }]);

    return ge;
  }();

  ge.prototype.isEuler = !0, ge.DefaultOrder = "XYZ", ge.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];

  var ve = /*#__PURE__*/function () {
    function ve() {
      _classCallCheck(this, ve);

      this.mask = 1;
    }

    _createClass(ve, [{
      key: "set",
      value: function set(t) {
        this.mask = 1 << t | 0;
      }
    }, {
      key: "enable",
      value: function enable(t) {
        this.mask |= 1 << t | 0;
      }
    }, {
      key: "enableAll",
      value: function enableAll() {
        this.mask = -1;
      }
    }, {
      key: "toggle",
      value: function toggle(t) {
        this.mask ^= 1 << t | 0;
      }
    }, {
      key: "disable",
      value: function disable(t) {
        this.mask &= ~(1 << t | 0);
      }
    }, {
      key: "disableAll",
      value: function disableAll() {
        this.mask = 0;
      }
    }, {
      key: "test",
      value: function test(t) {
        return 0 != (this.mask & t.mask);
      }
    }]);

    return ve;
  }();

  var ye = 0;

  var xe = new Rt(),
      _e = new Lt(),
      we = new ae(),
      be = new Rt(),
      Me = new Rt(),
      Se = new Rt(),
      Te = new Lt(),
      Ee = new Rt(1, 0, 0),
      Ae = new Rt(0, 1, 0),
      Le = new Rt(0, 0, 1),
      Re = {
    type: "added"
  },
      Ce = {
    type: "removed"
  };

  var Pe = /*#__PURE__*/function (_rt3) {
    _inherits(Pe, _rt3);

    var _super5 = _createSuper(Pe);

    function Pe() {
      var _this5;

      _classCallCheck(this, Pe);

      _this5 = _super5.call(this), Object.defineProperty(_assertThisInitialized(_this5), "id", {
        value: ye++
      }), _this5.uuid = ct(), _this5.name = "", _this5.type = "Object3D", _this5.parent = null, _this5.children = [], _this5.up = Pe.DefaultUp.clone();
      var t = new Rt(),
          e = new ge(),
          n = new Lt(),
          i = new Rt(1, 1, 1);
      e._onChange(function () {
        n.setFromEuler(e, !1);
      }), n._onChange(function () {
        e.setFromQuaternion(n, void 0, !1);
      }), Object.defineProperties(_assertThisInitialized(_this5), {
        position: {
          configurable: !0,
          enumerable: !0,
          value: t
        },
        rotation: {
          configurable: !0,
          enumerable: !0,
          value: e
        },
        quaternion: {
          configurable: !0,
          enumerable: !0,
          value: n
        },
        scale: {
          configurable: !0,
          enumerable: !0,
          value: i
        },
        modelViewMatrix: {
          value: new ae()
        },
        normalMatrix: {
          value: new yt()
        }
      }), _this5.matrix = new ae(), _this5.matrixWorld = new ae(), _this5.matrixAutoUpdate = Pe.DefaultMatrixAutoUpdate, _this5.matrixWorldNeedsUpdate = !1, _this5.layers = new ve(), _this5.visible = !0, _this5.castShadow = !1, _this5.receiveShadow = !1, _this5.frustumCulled = !0, _this5.renderOrder = 0, _this5.animations = [], _this5.userData = {};
      return _this5;
    }

    _createClass(Pe, [{
      key: "onBeforeRender",
      value: function onBeforeRender() {}
    }, {
      key: "onAfterRender",
      value: function onAfterRender() {}
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
      }
    }, {
      key: "applyQuaternion",
      value: function applyQuaternion(t) {
        return this.quaternion.premultiply(t), this;
      }
    }, {
      key: "setRotationFromAxisAngle",
      value: function setRotationFromAxisAngle(t, e) {
        this.quaternion.setFromAxisAngle(t, e);
      }
    }, {
      key: "setRotationFromEuler",
      value: function setRotationFromEuler(t) {
        this.quaternion.setFromEuler(t, !0);
      }
    }, {
      key: "setRotationFromMatrix",
      value: function setRotationFromMatrix(t) {
        this.quaternion.setFromRotationMatrix(t);
      }
    }, {
      key: "setRotationFromQuaternion",
      value: function setRotationFromQuaternion(t) {
        this.quaternion.copy(t);
      }
    }, {
      key: "rotateOnAxis",
      value: function rotateOnAxis(t, e) {
        return _e.setFromAxisAngle(t, e), this.quaternion.multiply(_e), this;
      }
    }, {
      key: "rotateOnWorldAxis",
      value: function rotateOnWorldAxis(t, e) {
        return _e.setFromAxisAngle(t, e), this.quaternion.premultiply(_e), this;
      }
    }, {
      key: "rotateX",
      value: function rotateX(t) {
        return this.rotateOnAxis(Ee, t);
      }
    }, {
      key: "rotateY",
      value: function rotateY(t) {
        return this.rotateOnAxis(Ae, t);
      }
    }, {
      key: "rotateZ",
      value: function rotateZ(t) {
        return this.rotateOnAxis(Le, t);
      }
    }, {
      key: "translateOnAxis",
      value: function translateOnAxis(t, e) {
        return xe.copy(t).applyQuaternion(this.quaternion), this.position.add(xe.multiplyScalar(e)), this;
      }
    }, {
      key: "translateX",
      value: function translateX(t) {
        return this.translateOnAxis(Ee, t);
      }
    }, {
      key: "translateY",
      value: function translateY(t) {
        return this.translateOnAxis(Ae, t);
      }
    }, {
      key: "translateZ",
      value: function translateZ(t) {
        return this.translateOnAxis(Le, t);
      }
    }, {
      key: "localToWorld",
      value: function localToWorld(t) {
        return t.applyMatrix4(this.matrixWorld);
      }
    }, {
      key: "worldToLocal",
      value: function worldToLocal(t) {
        return t.applyMatrix4(we.copy(this.matrixWorld).invert());
      }
    }, {
      key: "lookAt",
      value: function lookAt(t, e, n) {
        t.isVector3 ? be.copy(t) : be.set(t, e, n);
        var i = this.parent;
        this.updateWorldMatrix(!0, !1), Me.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? we.lookAt(Me, be, this.up) : we.lookAt(be, Me, this.up), this.quaternion.setFromRotationMatrix(we), i && (we.extractRotation(i.matrixWorld), _e.setFromRotationMatrix(we), this.quaternion.premultiply(_e.invert()));
      }
    }, {
      key: "add",
      value: function add(t) {
        if (arguments.length > 1) {
          for (var _t25 = 0; _t25 < arguments.length; _t25++) {
            this.add(arguments[_t25]);
          }

          return this;
        }

        return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(Re)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
      }
    }, {
      key: "remove",
      value: function remove(t) {
        if (arguments.length > 1) {
          for (var _t26 = 0; _t26 < arguments.length; _t26++) {
            this.remove(arguments[_t26]);
          }

          return this;
        }

        var e = this.children.indexOf(t);
        return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Ce)), this;
      }
    }, {
      key: "removeFromParent",
      value: function removeFromParent() {
        var t = this.parent;
        return null !== t && t.remove(this), this;
      }
    }, {
      key: "clear",
      value: function clear() {
        for (var _t27 = 0; _t27 < this.children.length; _t27++) {
          var _e9 = this.children[_t27];
          _e9.parent = null, _e9.dispatchEvent(Ce);
        }

        return this.children.length = 0, this;
      }
    }, {
      key: "attach",
      value: function attach(t) {
        return this.updateWorldMatrix(!0, !1), we.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), we.multiply(t.parent.matrixWorld)), t.applyMatrix4(we), this.add(t), t.updateWorldMatrix(!1, !0), this;
      }
    }, {
      key: "getObjectById",
      value: function getObjectById(t) {
        return this.getObjectByProperty("id", t);
      }
    }, {
      key: "getObjectByName",
      value: function getObjectByName(t) {
        return this.getObjectByProperty("name", t);
      }
    }, {
      key: "getObjectByProperty",
      value: function getObjectByProperty(t, e) {
        if (this[t] === e) return this;

        for (var _n17 = 0, _i12 = this.children.length; _n17 < _i12; _n17++) {
          var _i13 = this.children[_n17].getObjectByProperty(t, e);

          if (void 0 !== _i13) return _i13;
        }
      }
    }, {
      key: "getWorldPosition",
      value: function getWorldPosition(t) {
        return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new Rt()), this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
      }
    }, {
      key: "getWorldQuaternion",
      value: function getWorldQuaternion(t) {
        return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), t = new Lt()), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Me, t, Se), t;
      }
    }, {
      key: "getWorldScale",
      value: function getWorldScale(t) {
        return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), t = new Rt()), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Me, Te, t), t;
      }
    }, {
      key: "getWorldDirection",
      value: function getWorldDirection(t) {
        void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new Rt()), this.updateWorldMatrix(!0, !1);
        var e = this.matrixWorld.elements;
        return t.set(e[8], e[9], e[10]).normalize();
      }
    }, {
      key: "raycast",
      value: function raycast() {}
    }, {
      key: "traverse",
      value: function traverse(t) {
        t(this);
        var e = this.children;

        for (var _n18 = 0, _i14 = e.length; _n18 < _i14; _n18++) {
          e[_n18].traverse(t);
        }
      }
    }, {
      key: "traverseVisible",
      value: function traverseVisible(t) {
        if (!1 === this.visible) return;
        t(this);
        var e = this.children;

        for (var _n19 = 0, _i15 = e.length; _n19 < _i15; _n19++) {
          e[_n19].traverseVisible(t);
        }
      }
    }, {
      key: "traverseAncestors",
      value: function traverseAncestors(t) {
        var e = this.parent;
        null !== e && (t(e), e.traverseAncestors(t));
      }
    }, {
      key: "updateMatrix",
      value: function updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
      }
    }, {
      key: "updateMatrixWorld",
      value: function updateMatrixWorld(t) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
        var e = this.children;

        for (var _n20 = 0, _i16 = e.length; _n20 < _i16; _n20++) {
          e[_n20].updateMatrixWorld(t);
        }
      }
    }, {
      key: "updateWorldMatrix",
      value: function updateWorldMatrix(t, e) {
        var n = this.parent;

        if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
          var _t28 = this.children;

          for (var _e10 = 0, _n21 = _t28.length; _e10 < _n21; _e10++) {
            _t28[_e10].updateWorldMatrix(!1, !0);
          }
        }
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = void 0 === t || "string" == typeof t,
            n = {};
        e && (t = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {}
        }, n.metadata = {
          version: 4.5,
          type: "Object",
          generator: "Object3D.toJSON"
        });
        var i = {};

        function r(e, n) {
          return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
        }

        if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isMesh || this.isLine || this.isPoints) {
          i.geometry = r(t.geometries, this.geometry);
          var _e11 = this.geometry.parameters;

          if (void 0 !== _e11 && void 0 !== _e11.shapes) {
            var _n22 = _e11.shapes;
            if (Array.isArray(_n22)) for (var _e12 = 0, _i17 = _n22.length; _e12 < _i17; _e12++) {
              var _i18 = _n22[_e12];
              r(t.shapes, _i18);
            } else r(t.shapes, _n22);
          }
        }

        if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material) if (Array.isArray(this.material)) {
          var _e13 = [];

          for (var _n23 = 0, _i19 = this.material.length; _n23 < _i19; _n23++) {
            _e13.push(r(t.materials, this.material[_n23]));
          }

          i.material = _e13;
        } else i.material = r(t.materials, this.material);

        if (this.children.length > 0) {
          i.children = [];

          for (var _e14 = 0; _e14 < this.children.length; _e14++) {
            i.children.push(this.children[_e14].toJSON(t).object);
          }
        }

        if (this.animations.length > 0) {
          i.animations = [];

          for (var _e15 = 0; _e15 < this.animations.length; _e15++) {
            var _n24 = this.animations[_e15];
            i.animations.push(r(t.animations, _n24));
          }
        }

        if (e) {
          var _e16 = s(t.geometries),
              _i20 = s(t.materials),
              _r12 = s(t.textures),
              _a4 = s(t.images),
              _o6 = s(t.shapes),
              _l7 = s(t.skeletons),
              _c5 = s(t.animations);

          _e16.length > 0 && (n.geometries = _e16), _i20.length > 0 && (n.materials = _i20), _r12.length > 0 && (n.textures = _r12), _a4.length > 0 && (n.images = _a4), _o6.length > 0 && (n.shapes = _o6), _l7.length > 0 && (n.skeletons = _l7), _c5.length > 0 && (n.animations = _c5);
        }

        return n.object = i, n;

        function s(t) {
          var e = [];

          for (var _n25 in t) {
            var _i21 = t[_n25];
            delete _i21.metadata, e.push(_i21);
          }

          return e;
        }
      }
    }, {
      key: "clone",
      value: function clone(t) {
        return new this.constructor().copy(this, t);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e) for (var _e17 = 0; _e17 < t.children.length; _e17++) {
          var _n26 = t.children[_e17];
          this.add(_n26.clone());
        }
        return this;
      }
    }]);

    return Pe;
  }(rt);

  Pe.DefaultUp = new Rt(0, 1, 0), Pe.DefaultMatrixAutoUpdate = !0, Pe.prototype.isObject3D = !0;
  var De = new Rt(),
      Ie = new Rt(),
      Ne = new yt();

  var Be = /*#__PURE__*/function () {
    function Be() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Rt(1, 0, 0);
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, Be);

      this.normal = t, this.constant = e;
    }

    _createClass(Be, [{
      key: "set",
      value: function set(t, e) {
        return this.normal.copy(t), this.constant = e, this;
      }
    }, {
      key: "setComponents",
      value: function setComponents(t, e, n, i) {
        return this.normal.set(t, e, n), this.constant = i, this;
      }
    }, {
      key: "setFromNormalAndCoplanarPoint",
      value: function setFromNormalAndCoplanarPoint(t, e) {
        return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
      }
    }, {
      key: "setFromCoplanarPoints",
      value: function setFromCoplanarPoints(t, e, n) {
        var i = De.subVectors(n, e).cross(Ie.subVectors(t, e)).normalize();
        return this.setFromNormalAndCoplanarPoint(i, t), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.normal.copy(t.normal), this.constant = t.constant, this;
      }
    }, {
      key: "normalize",
      value: function normalize() {
        var t = 1 / this.normal.length();
        return this.normal.multiplyScalar(t), this.constant *= t, this;
      }
    }, {
      key: "negate",
      value: function negate() {
        return this.constant *= -1, this.normal.negate(), this;
      }
    }, {
      key: "distanceToPoint",
      value: function distanceToPoint(t) {
        return this.normal.dot(t) + this.constant;
      }
    }, {
      key: "distanceToSphere",
      value: function distanceToSphere(t) {
        return this.distanceToPoint(t.center) - t.radius;
      }
    }, {
      key: "projectPoint",
      value: function projectPoint(t, e) {
        return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new Rt()), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
      }
    }, {
      key: "intersectLine",
      value: function intersectLine(t, e) {
        void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"), e = new Rt());
        var n = t.delta(De),
            i = this.normal.dot(n);
        if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
        var r = -(t.start.dot(this.normal) + this.constant) / i;
        return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start);
      }
    }, {
      key: "intersectsLine",
      value: function intersectsLine(t) {
        var e = this.distanceToPoint(t.start),
            n = this.distanceToPoint(t.end);
        return e < 0 && n > 0 || n < 0 && e > 0;
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(t) {
        return t.intersectsPlane(this);
      }
    }, {
      key: "intersectsSphere",
      value: function intersectsSphere(t) {
        return t.intersectsPlane(this);
      }
    }, {
      key: "coplanarPoint",
      value: function coplanarPoint(t) {
        return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new Rt()), t.copy(this.normal).multiplyScalar(-this.constant);
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t, e) {
        var n = e || Ne.getNormalMatrix(t),
            i = this.coplanarPoint(De).applyMatrix4(t),
            r = this.normal.applyMatrix3(n).normalize();
        return this.constant = -i.dot(r), this;
      }
    }, {
      key: "translate",
      value: function translate(t) {
        return this.constant -= t.dot(this.normal), this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.normal.equals(this.normal) && t.constant === this.constant;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return Be;
  }();

  Be.prototype.isPlane = !0;
  var ze = new Rt(),
      Fe = new Rt(),
      Oe = new Rt(),
      He = new Rt(),
      Ge = new Rt(),
      Ue = new Rt(),
      ke = new Rt(),
      Ve = new Rt(),
      We = new Rt(),
      je = new Rt();

  var qe = /*#__PURE__*/function () {
    function qe() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Rt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Rt();
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Rt();

      _classCallCheck(this, qe);

      this.a = t, this.b = e, this.c = n;
    }

    _createClass(qe, [{
      key: "set",
      value: function set(t, e, n) {
        return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
      }
    }, {
      key: "setFromPointsAndIndices",
      value: function setFromPointsAndIndices(t, e, n, i) {
        return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
      }
    }, {
      key: "getArea",
      value: function getArea() {
        return ze.subVectors(this.c, this.b), Fe.subVectors(this.a, this.b), .5 * ze.cross(Fe).length();
      }
    }, {
      key: "getMidpoint",
      value: function getMidpoint(t) {
        return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new Rt()), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
      }
    }, {
      key: "getNormal",
      value: function getNormal(t) {
        return qe.getNormal(this.a, this.b, this.c, t);
      }
    }, {
      key: "getPlane",
      value: function getPlane(t) {
        return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new Be()), t.setFromCoplanarPoints(this.a, this.b, this.c);
      }
    }, {
      key: "getBarycoord",
      value: function getBarycoord(t, e) {
        return qe.getBarycoord(t, this.a, this.b, this.c, e);
      }
    }, {
      key: "getUV",
      value: function getUV(t, e, n, i, r) {
        return qe.getUV(t, this.a, this.b, this.c, e, n, i, r);
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(t) {
        return qe.containsPoint(t, this.a, this.b, this.c);
      }
    }, {
      key: "isFrontFacing",
      value: function isFrontFacing(t) {
        return qe.isFrontFacing(this.a, this.b, this.c, t);
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(t) {
        return t.intersectsTriangle(this);
      }
    }, {
      key: "closestPointToPoint",
      value: function closestPointToPoint(t, e) {
        void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), e = new Rt());
        var n = this.a,
            i = this.b,
            r = this.c;
        var s, a;
        Ge.subVectors(i, n), Ue.subVectors(r, n), Ve.subVectors(t, n);
        var o = Ge.dot(Ve),
            l = Ue.dot(Ve);
        if (o <= 0 && l <= 0) return e.copy(n);
        We.subVectors(t, i);
        var c = Ge.dot(We),
            h = Ue.dot(We);
        if (c >= 0 && h <= c) return e.copy(i);
        var u = o * h - c * l;
        if (u <= 0 && o >= 0 && c <= 0) return s = o / (o - c), e.copy(n).addScaledVector(Ge, s);
        je.subVectors(t, r);
        var d = Ge.dot(je),
            p = Ue.dot(je);
        if (p >= 0 && d <= p) return e.copy(r);
        var m = d * l - o * p;
        if (m <= 0 && l >= 0 && p <= 0) return a = l / (l - p), e.copy(n).addScaledVector(Ue, a);
        var f = c * p - d * h;
        if (f <= 0 && h - c >= 0 && d - p >= 0) return ke.subVectors(r, i), a = (h - c) / (h - c + (d - p)), e.copy(i).addScaledVector(ke, a);
        var g = 1 / (f + m + u);
        return s = m * g, a = u * g, e.copy(n).addScaledVector(Ge, s).addScaledVector(Ue, a);
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
      }
    }], [{
      key: "getNormal",
      value: function getNormal(t, e, n, i) {
        void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new Rt()), i.subVectors(n, e), ze.subVectors(t, e), i.cross(ze);
        var r = i.lengthSq();
        return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
      }
    }, {
      key: "getBarycoord",
      value: function getBarycoord(t, e, n, i, r) {
        ze.subVectors(i, e), Fe.subVectors(n, e), Oe.subVectors(t, e);
        var s = ze.dot(ze),
            a = ze.dot(Fe),
            o = ze.dot(Oe),
            l = Fe.dot(Fe),
            c = Fe.dot(Oe),
            h = s * l - a * a;
        if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), r = new Rt()), 0 === h) return r.set(-2, -1, -1);
        var u = 1 / h,
            d = (l * o - a * c) * u,
            p = (s * c - a * o) * u;
        return r.set(1 - d - p, p, d);
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(t, e, n, i) {
        return this.getBarycoord(t, e, n, i, He), He.x >= 0 && He.y >= 0 && He.x + He.y <= 1;
      }
    }, {
      key: "getUV",
      value: function getUV(t, e, n, i, r, s, a, o) {
        return this.getBarycoord(t, e, n, i, He), o.set(0, 0), o.addScaledVector(r, He.x), o.addScaledVector(s, He.y), o.addScaledVector(a, He.z), o;
      }
    }, {
      key: "isFrontFacing",
      value: function isFrontFacing(t, e, n, i) {
        return ze.subVectors(n, e), Fe.subVectors(t, e), ze.cross(Fe).dot(i) < 0;
      }
    }]);

    return qe;
  }();

  var Xe = 0;

  var Ye = /*#__PURE__*/function (_rt4) {
    _inherits(Ye, _rt4);

    var _super6 = _createSuper(Ye);

    function Ye() {
      var _this6;

      _classCallCheck(this, Ye);

      _this6 = _super6.call(this), Object.defineProperty(_assertThisInitialized(_this6), "id", {
        value: Xe++
      }), _this6.uuid = ct(), _this6.name = "", _this6.type = "Material", _this6.fog = !0, _this6.blending = 1, _this6.side = 0, _this6.vertexColors = !1, _this6.opacity = 1, _this6.transparent = !1, _this6.blendSrc = 204, _this6.blendDst = 205, _this6.blendEquation = n, _this6.blendSrcAlpha = null, _this6.blendDstAlpha = null, _this6.blendEquationAlpha = null, _this6.depthFunc = 3, _this6.depthTest = !0, _this6.depthWrite = !0, _this6.stencilWriteMask = 255, _this6.stencilFunc = 519, _this6.stencilRef = 0, _this6.stencilFuncMask = 255, _this6.stencilFail = tt, _this6.stencilZFail = tt, _this6.stencilZPass = tt, _this6.stencilWrite = !1, _this6.clippingPlanes = null, _this6.clipIntersection = !1, _this6.clipShadows = !1, _this6.shadowSide = null, _this6.colorWrite = !0, _this6.precision = null, _this6.polygonOffset = !1, _this6.polygonOffsetFactor = 0, _this6.polygonOffsetUnits = 0, _this6.dithering = !1, _this6.alphaTest = 0, _this6.alphaToCoverage = !1, _this6.premultipliedAlpha = !1, _this6.visible = !0, _this6.toneMapped = !0, _this6.userData = {}, _this6.version = 0;
      return _this6;
    }

    _createClass(Ye, [{
      key: "onBuild",
      value: function onBuild() {}
    }, {
      key: "onBeforeCompile",
      value: function onBeforeCompile() {}
    }, {
      key: "customProgramCacheKey",
      value: function customProgramCacheKey() {
        return this.onBeforeCompile.toString();
      }
    }, {
      key: "setValues",
      value: function setValues(t) {
        if (void 0 !== t) for (var _e18 in t) {
          var _n27 = t[_e18];

          if (void 0 === _n27) {
            console.warn("THREE.Material: '" + _e18 + "' parameter is undefined.");
            continue;
          }

          if ("shading" === _e18) {
            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === _n27;
            continue;
          }

          var _i22 = this[_e18];
          void 0 !== _i22 ? _i22 && _i22.isColor ? _i22.set(_n27) : _i22 && _i22.isVector3 && _n27 && _n27.isVector3 ? _i22.copy(_n27) : this[_e18] = _n27 : console.warn("THREE." + this.type + ": '" + _e18 + "' is not a property of this material.");
        }
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = void 0 === t || "string" == typeof t;
        e && (t = {
          textures: {},
          images: {}
        });
        var n = {
          metadata: {
            version: 4.5,
            type: "Material",
            generator: "Material.toJSON"
          }
        };

        function i(t) {
          var e = [];

          for (var _n28 in t) {
            var _i23 = t[_n28];
            delete _i23.metadata, e.push(_i23);
          }

          return e;
        }

        if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), void 0 !== this.attenuationDistance && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.morphNormals && (n.morphNormals = !0), !0 === this.flatShading && (n.flatShading = this.flatShading), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) {
          var _e19 = i(t.textures),
              _r13 = i(t.images);

          _e19.length > 0 && (n.textures = _e19), _r13.length > 0 && (n.images = _r13);
        }

        return n;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        this.name = t.name, this.fog = t.fog, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
        var e = t.clippingPlanes;
        var n = null;

        if (null !== e) {
          var _t29 = e.length;
          n = new Array(_t29);

          for (var _i24 = 0; _i24 !== _t29; ++_i24) {
            n[_i24] = e[_i24].clone();
          }
        }

        return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.dispatchEvent({
          type: "dispose"
        });
      }
    }, {
      key: "needsUpdate",
      set: function set(t) {
        !0 === t && this.version++;
      }
    }]);

    return Ye;
  }(rt);

  Ye.prototype.isMaterial = !0;
  var Ze = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  },
      Je = {
    h: 0,
    s: 0,
    l: 0
  },
      Qe = {
    h: 0,
    s: 0,
    l: 0
  };

  function Ke(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t;
  }

  function $e(t) {
    return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4);
  }

  function tn(t) {
    return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055;
  }

  var en = /*#__PURE__*/function () {
    function en(t, e, n) {
      _classCallCheck(this, en);

      return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n);
    }

    _createClass(en, [{
      key: "set",
      value: function set(t) {
        return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this;
      }
    }, {
      key: "setScalar",
      value: function setScalar(t) {
        return this.r = t, this.g = t, this.b = t, this;
      }
    }, {
      key: "setHex",
      value: function setHex(t) {
        return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this;
      }
    }, {
      key: "setRGB",
      value: function setRGB(t, e, n) {
        return this.r = t, this.g = e, this.b = n, this;
      }
    }, {
      key: "setHSL",
      value: function setHSL(t, e, n) {
        if (t = ut(t, 1), e = ht(e, 0, 1), n = ht(n, 0, 1), 0 === e) this.r = this.g = this.b = n;else {
          var _i25 = n <= .5 ? n * (1 + e) : n + e - n * e,
              _r14 = 2 * n - _i25;

          this.r = Ke(_r14, _i25, t + 1 / 3), this.g = Ke(_r14, _i25, t), this.b = Ke(_r14, _i25, t - 1 / 3);
        }
        return this;
      }
    }, {
      key: "setStyle",
      value: function setStyle(t) {
        function e(e) {
          void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
        }

        var n;

        if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
          var _t30;

          var _i26 = n[1],
              _r15 = n[2];

          switch (_i26) {
            case "rgb":
            case "rgba":
              if (_t30 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(_r15)) return this.r = Math.min(255, parseInt(_t30[1], 10)) / 255, this.g = Math.min(255, parseInt(_t30[2], 10)) / 255, this.b = Math.min(255, parseInt(_t30[3], 10)) / 255, e(_t30[4]), this;
              if (_t30 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(_r15)) return this.r = Math.min(100, parseInt(_t30[1], 10)) / 100, this.g = Math.min(100, parseInt(_t30[2], 10)) / 100, this.b = Math.min(100, parseInt(_t30[3], 10)) / 100, e(_t30[4]), this;
              break;

            case "hsl":
            case "hsla":
              if (_t30 = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(_r15)) {
                var _n29 = parseFloat(_t30[1]) / 360,
                    _i27 = parseInt(_t30[2], 10) / 100,
                    _r16 = parseInt(_t30[3], 10) / 100;

                return e(_t30[4]), this.setHSL(_n29, _i27, _r16);
              }

          }
        } else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
          var _t31 = n[1],
              _e20 = _t31.length;
          if (3 === _e20) return this.r = parseInt(_t31.charAt(0) + _t31.charAt(0), 16) / 255, this.g = parseInt(_t31.charAt(1) + _t31.charAt(1), 16) / 255, this.b = parseInt(_t31.charAt(2) + _t31.charAt(2), 16) / 255, this;
          if (6 === _e20) return this.r = parseInt(_t31.charAt(0) + _t31.charAt(1), 16) / 255, this.g = parseInt(_t31.charAt(2) + _t31.charAt(3), 16) / 255, this.b = parseInt(_t31.charAt(4) + _t31.charAt(5), 16) / 255, this;
        }

        return t && t.length > 0 ? this.setColorName(t) : this;
      }
    }, {
      key: "setColorName",
      value: function setColorName(t) {
        var e = Ze[t.toLowerCase()];
        return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this.r, this.g, this.b);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.r = t.r, this.g = t.g, this.b = t.b, this;
      }
    }, {
      key: "copyGammaToLinear",
      value: function copyGammaToLinear(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        return this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this;
      }
    }, {
      key: "copyLinearToGamma",
      value: function copyLinearToGamma(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        var n = e > 0 ? 1 / e : 1;
        return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this;
      }
    }, {
      key: "convertGammaToLinear",
      value: function convertGammaToLinear(t) {
        return this.copyGammaToLinear(this, t), this;
      }
    }, {
      key: "convertLinearToGamma",
      value: function convertLinearToGamma(t) {
        return this.copyLinearToGamma(this, t), this;
      }
    }, {
      key: "copySRGBToLinear",
      value: function copySRGBToLinear(t) {
        return this.r = $e(t.r), this.g = $e(t.g), this.b = $e(t.b), this;
      }
    }, {
      key: "copyLinearToSRGB",
      value: function copyLinearToSRGB(t) {
        return this.r = tn(t.r), this.g = tn(t.g), this.b = tn(t.b), this;
      }
    }, {
      key: "convertSRGBToLinear",
      value: function convertSRGBToLinear() {
        return this.copySRGBToLinear(this), this;
      }
    }, {
      key: "convertLinearToSRGB",
      value: function convertLinearToSRGB() {
        return this.copyLinearToSRGB(this), this;
      }
    }, {
      key: "getHex",
      value: function getHex() {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
      }
    }, {
      key: "getHexString",
      value: function getHexString() {
        return ("000000" + this.getHex().toString(16)).slice(-6);
      }
    }, {
      key: "getHSL",
      value: function getHSL(t) {
        void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = {
          h: 0,
          s: 0,
          l: 0
        });
        var e = this.r,
            n = this.g,
            i = this.b,
            r = Math.max(e, n, i),
            s = Math.min(e, n, i);
        var a, o;
        var l = (s + r) / 2;
        if (s === r) a = 0, o = 0;else {
          var _t32 = r - s;

          switch (o = l <= .5 ? _t32 / (r + s) : _t32 / (2 - r - s), r) {
            case e:
              a = (n - i) / _t32 + (n < i ? 6 : 0);
              break;

            case n:
              a = (i - e) / _t32 + 2;
              break;

            case i:
              a = (e - n) / _t32 + 4;
          }

          a /= 6;
        }
        return t.h = a, t.s = o, t.l = l, t;
      }
    }, {
      key: "getStyle",
      value: function getStyle() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")";
      }
    }, {
      key: "offsetHSL",
      value: function offsetHSL(t, e, n) {
        return this.getHSL(Je), Je.h += t, Je.s += e, Je.l += n, this.setHSL(Je.h, Je.s, Je.l), this;
      }
    }, {
      key: "add",
      value: function add(t) {
        return this.r += t.r, this.g += t.g, this.b += t.b, this;
      }
    }, {
      key: "addColors",
      value: function addColors(t, e) {
        return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
      }
    }, {
      key: "addScalar",
      value: function addScalar(t) {
        return this.r += t, this.g += t, this.b += t, this;
      }
    }, {
      key: "sub",
      value: function sub(t) {
        return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
      }
    }, {
      key: "multiply",
      value: function multiply(t) {
        return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(t) {
        return this.r *= t, this.g *= t, this.b *= t, this;
      }
    }, {
      key: "lerp",
      value: function lerp(t, e) {
        return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
      }
    }, {
      key: "lerpColors",
      value: function lerpColors(t, e, n) {
        return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
      }
    }, {
      key: "lerpHSL",
      value: function lerpHSL(t, e) {
        this.getHSL(Je), t.getHSL(Qe);
        var n = dt(Je.h, Qe.h, e),
            i = dt(Je.s, Qe.s, e),
            r = dt(Je.l, Qe.l, e);
        return this.setHSL(n, i, r), this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.r === this.r && t.g === this.g && t.b === this.b;
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
      }
    }, {
      key: "fromBufferAttribute",
      value: function fromBufferAttribute(t, e) {
        return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), !0 === t.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.getHex();
      }
    }]);

    return en;
  }();

  en.NAMES = Ze, en.prototype.isColor = !0, en.prototype.r = 1, en.prototype.g = 1, en.prototype.b = 1;

  var nn = /*#__PURE__*/function (_Ye) {
    _inherits(nn, _Ye);

    var _super7 = _createSuper(nn);

    function nn(t) {
      var _this7;

      _classCallCheck(this, nn);

      _this7 = _super7.call(this), _this7.type = "MeshBasicMaterial", _this7.color = new en(16777215), _this7.map = null, _this7.lightMap = null, _this7.lightMapIntensity = 1, _this7.aoMap = null, _this7.aoMapIntensity = 1, _this7.specularMap = null, _this7.alphaMap = null, _this7.envMap = null, _this7.combine = 0, _this7.reflectivity = 1, _this7.refractionRatio = .98, _this7.wireframe = !1, _this7.wireframeLinewidth = 1, _this7.wireframeLinecap = "round", _this7.wireframeLinejoin = "round", _this7.morphTargets = !1, _this7.setValues(t);
      return _this7;
    }

    _createClass(nn, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(nn.prototype), "copy", this).call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.morphTargets = t.morphTargets, this;
      }
    }]);

    return nn;
  }(Ye);

  nn.prototype.isMeshBasicMaterial = !0;
  var rn = new Rt(),
      sn = new vt();

  var an = /*#__PURE__*/function () {
    function an(t, e, n) {
      _classCallCheck(this, an);

      if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.usage = et, this.updateRange = {
        offset: 0,
        count: -1
      }, this.version = 0;
    }

    _createClass(an, [{
      key: "onUploadCallback",
      value: function onUploadCallback() {}
    }, {
      key: "needsUpdate",
      set: function set(t) {
        !0 === t && this.version++;
      }
    }, {
      key: "setUsage",
      value: function setUsage(t) {
        return this.usage = t, this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this;
      }
    }, {
      key: "copyAt",
      value: function copyAt(t, e, n) {
        t *= this.itemSize, n *= e.itemSize;

        for (var _i28 = 0, _r17 = this.itemSize; _i28 < _r17; _i28++) {
          this.array[t + _i28] = e.array[n + _i28];
        }

        return this;
      }
    }, {
      key: "copyArray",
      value: function copyArray(t) {
        return this.array.set(t), this;
      }
    }, {
      key: "copyColorsArray",
      value: function copyColorsArray(t) {
        var e = this.array;
        var n = 0;

        for (var _i29 = 0, _r18 = t.length; _i29 < _r18; _i29++) {
          var _r19 = t[_i29];
          void 0 === _r19 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", _i29), _r19 = new en()), e[n++] = _r19.r, e[n++] = _r19.g, e[n++] = _r19.b;
        }

        return this;
      }
    }, {
      key: "copyVector2sArray",
      value: function copyVector2sArray(t) {
        var e = this.array;
        var n = 0;

        for (var _i30 = 0, _r20 = t.length; _i30 < _r20; _i30++) {
          var _r21 = t[_i30];
          void 0 === _r21 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", _i30), _r21 = new vt()), e[n++] = _r21.x, e[n++] = _r21.y;
        }

        return this;
      }
    }, {
      key: "copyVector3sArray",
      value: function copyVector3sArray(t) {
        var e = this.array;
        var n = 0;

        for (var _i31 = 0, _r22 = t.length; _i31 < _r22; _i31++) {
          var _r23 = t[_i31];
          void 0 === _r23 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", _i31), _r23 = new Rt()), e[n++] = _r23.x, e[n++] = _r23.y, e[n++] = _r23.z;
        }

        return this;
      }
    }, {
      key: "copyVector4sArray",
      value: function copyVector4sArray(t) {
        var e = this.array;
        var n = 0;

        for (var _i32 = 0, _r24 = t.length; _i32 < _r24; _i32++) {
          var _r25 = t[_i32];
          void 0 === _r25 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", _i32), _r25 = new St()), e[n++] = _r25.x, e[n++] = _r25.y, e[n++] = _r25.z, e[n++] = _r25.w;
        }

        return this;
      }
    }, {
      key: "applyMatrix3",
      value: function applyMatrix3(t) {
        if (2 === this.itemSize) for (var _e21 = 0, _n30 = this.count; _e21 < _n30; _e21++) {
          sn.fromBufferAttribute(this, _e21), sn.applyMatrix3(t), this.setXY(_e21, sn.x, sn.y);
        } else if (3 === this.itemSize) for (var _e22 = 0, _n31 = this.count; _e22 < _n31; _e22++) {
          rn.fromBufferAttribute(this, _e22), rn.applyMatrix3(t), this.setXYZ(_e22, rn.x, rn.y, rn.z);
        }
        return this;
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        for (var _e23 = 0, _n32 = this.count; _e23 < _n32; _e23++) {
          rn.x = this.getX(_e23), rn.y = this.getY(_e23), rn.z = this.getZ(_e23), rn.applyMatrix4(t), this.setXYZ(_e23, rn.x, rn.y, rn.z);
        }

        return this;
      }
    }, {
      key: "applyNormalMatrix",
      value: function applyNormalMatrix(t) {
        for (var _e24 = 0, _n33 = this.count; _e24 < _n33; _e24++) {
          rn.x = this.getX(_e24), rn.y = this.getY(_e24), rn.z = this.getZ(_e24), rn.applyNormalMatrix(t), this.setXYZ(_e24, rn.x, rn.y, rn.z);
        }

        return this;
      }
    }, {
      key: "transformDirection",
      value: function transformDirection(t) {
        for (var _e25 = 0, _n34 = this.count; _e25 < _n34; _e25++) {
          rn.x = this.getX(_e25), rn.y = this.getY(_e25), rn.z = this.getZ(_e25), rn.transformDirection(t), this.setXYZ(_e25, rn.x, rn.y, rn.z);
        }

        return this;
      }
    }, {
      key: "set",
      value: function set(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.array.set(t, e), this;
      }
    }, {
      key: "getX",
      value: function getX(t) {
        return this.array[t * this.itemSize];
      }
    }, {
      key: "setX",
      value: function setX(t, e) {
        return this.array[t * this.itemSize] = e, this;
      }
    }, {
      key: "getY",
      value: function getY(t) {
        return this.array[t * this.itemSize + 1];
      }
    }, {
      key: "setY",
      value: function setY(t, e) {
        return this.array[t * this.itemSize + 1] = e, this;
      }
    }, {
      key: "getZ",
      value: function getZ(t) {
        return this.array[t * this.itemSize + 2];
      }
    }, {
      key: "setZ",
      value: function setZ(t, e) {
        return this.array[t * this.itemSize + 2] = e, this;
      }
    }, {
      key: "getW",
      value: function getW(t) {
        return this.array[t * this.itemSize + 3];
      }
    }, {
      key: "setW",
      value: function setW(t, e) {
        return this.array[t * this.itemSize + 3] = e, this;
      }
    }, {
      key: "setXY",
      value: function setXY(t, e, n) {
        return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this;
      }
    }, {
      key: "setXYZ",
      value: function setXYZ(t, e, n, i) {
        return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this;
      }
    }, {
      key: "setXYZW",
      value: function setXYZW(t, e, n, i, r) {
        return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this;
      }
    }, {
      key: "onUpload",
      value: function onUpload(t) {
        return this.onUploadCallback = t, this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor(this.array, this.itemSize).copy(this);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: Array.prototype.slice.call(this.array),
          normalized: this.normalized
        };
        return "" !== this.name && (t.name = this.name), this.usage !== et && (t.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), t;
      }
    }]);

    return an;
  }();

  an.prototype.isBufferAttribute = !0;

  var on = /*#__PURE__*/function (_an) {
    _inherits(on, _an);

    var _super8 = _createSuper(on);

    function on(t, e, n) {
      _classCallCheck(this, on);

      return _super8.call(this, new Int8Array(t), e, n);
    }

    return on;
  }(an);

  var ln = /*#__PURE__*/function (_an2) {
    _inherits(ln, _an2);

    var _super9 = _createSuper(ln);

    function ln(t, e, n) {
      _classCallCheck(this, ln);

      return _super9.call(this, new Uint8Array(t), e, n);
    }

    return ln;
  }(an);

  var cn = /*#__PURE__*/function (_an3) {
    _inherits(cn, _an3);

    var _super10 = _createSuper(cn);

    function cn(t, e, n) {
      _classCallCheck(this, cn);

      return _super10.call(this, new Uint8ClampedArray(t), e, n);
    }

    return cn;
  }(an);

  var hn = /*#__PURE__*/function (_an4) {
    _inherits(hn, _an4);

    var _super11 = _createSuper(hn);

    function hn(t, e, n) {
      _classCallCheck(this, hn);

      return _super11.call(this, new Int16Array(t), e, n);
    }

    return hn;
  }(an);

  var un = /*#__PURE__*/function (_an5) {
    _inherits(un, _an5);

    var _super12 = _createSuper(un);

    function un(t, e, n) {
      _classCallCheck(this, un);

      return _super12.call(this, new Uint16Array(t), e, n);
    }

    return un;
  }(an);

  var dn = /*#__PURE__*/function (_an6) {
    _inherits(dn, _an6);

    var _super13 = _createSuper(dn);

    function dn(t, e, n) {
      _classCallCheck(this, dn);

      return _super13.call(this, new Int32Array(t), e, n);
    }

    return dn;
  }(an);

  var pn = /*#__PURE__*/function (_an7) {
    _inherits(pn, _an7);

    var _super14 = _createSuper(pn);

    function pn(t, e, n) {
      _classCallCheck(this, pn);

      return _super14.call(this, new Uint32Array(t), e, n);
    }

    return pn;
  }(an);

  var mn = /*#__PURE__*/function (_an8) {
    _inherits(mn, _an8);

    var _super15 = _createSuper(mn);

    function mn(t, e, n) {
      _classCallCheck(this, mn);

      return _super15.call(this, new Uint16Array(t), e, n);
    }

    return mn;
  }(an);

  mn.prototype.isFloat16BufferAttribute = !0;

  var fn = /*#__PURE__*/function (_an9) {
    _inherits(fn, _an9);

    var _super16 = _createSuper(fn);

    function fn(t, e, n) {
      _classCallCheck(this, fn);

      return _super16.call(this, new Float32Array(t), e, n);
    }

    return fn;
  }(an);

  var gn = /*#__PURE__*/function (_an10) {
    _inherits(gn, _an10);

    var _super17 = _createSuper(gn);

    function gn(t, e, n) {
      _classCallCheck(this, gn);

      return _super17.call(this, new Float64Array(t), e, n);
    }

    return gn;
  }(an);

  function vn(t) {
    if (0 === t.length) return -1 / 0;
    var e = t[0];

    for (var _n35 = 1, _i33 = t.length; _n35 < _i33; ++_n35) {
      t[_n35] > e && (e = t[_n35]);
    }

    return e;
  }

  var yn = {
    Int8Array: Int8Array,
    Uint8Array: Uint8Array,
    Uint8ClampedArray: Uint8ClampedArray,
    Int16Array: Int16Array,
    Uint16Array: Uint16Array,
    Int32Array: Int32Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array
  };

  function xn(t, e) {
    return new yn[t](e);
  }

  var _n = 0;
  var wn = new ae(),
      bn = new Pe(),
      Mn = new Rt(),
      Sn = new Dt(),
      Tn = new Dt(),
      En = new Rt();

  var An = /*#__PURE__*/function (_rt5) {
    _inherits(An, _rt5);

    var _super18 = _createSuper(An);

    function An() {
      var _this8;

      _classCallCheck(this, An);

      _this8 = _super18.call(this), Object.defineProperty(_assertThisInitialized(_this8), "id", {
        value: _n++
      }), _this8.uuid = ct(), _this8.name = "", _this8.type = "BufferGeometry", _this8.index = null, _this8.attributes = {}, _this8.morphAttributes = {}, _this8.morphTargetsRelative = !1, _this8.groups = [], _this8.boundingBox = null, _this8.boundingSphere = null, _this8.drawRange = {
        start: 0,
        count: 1 / 0
      }, _this8.userData = {};
      return _this8;
    }

    _createClass(An, [{
      key: "getIndex",
      value: function getIndex() {
        return this.index;
      }
    }, {
      key: "setIndex",
      value: function setIndex(t) {
        return Array.isArray(t) ? this.index = new (vn(t) > 65535 ? pn : un)(t, 1) : this.index = t, this;
      }
    }, {
      key: "getAttribute",
      value: function getAttribute(t) {
        return this.attributes[t];
      }
    }, {
      key: "setAttribute",
      value: function setAttribute(t, e) {
        return this.attributes[t] = e, this;
      }
    }, {
      key: "deleteAttribute",
      value: function deleteAttribute(t) {
        return delete this.attributes[t], this;
      }
    }, {
      key: "hasAttribute",
      value: function hasAttribute(t) {
        return void 0 !== this.attributes[t];
      }
    }, {
      key: "addGroup",
      value: function addGroup(t, e) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        this.groups.push({
          start: t,
          count: e,
          materialIndex: n
        });
      }
    }, {
      key: "clearGroups",
      value: function clearGroups() {
        this.groups = [];
      }
    }, {
      key: "setDrawRange",
      value: function setDrawRange(t, e) {
        this.drawRange.start = t, this.drawRange.count = e;
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        var e = this.attributes.position;
        void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
        var n = this.attributes.normal;

        if (void 0 !== n) {
          var _e26 = new yt().getNormalMatrix(t);

          n.applyNormalMatrix(_e26), n.needsUpdate = !0;
        }

        var i = this.attributes.tangent;
        return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
      }
    }, {
      key: "applyQuaternion",
      value: function applyQuaternion(t) {
        return wn.makeRotationFromQuaternion(t), this.applyMatrix4(wn), this;
      }
    }, {
      key: "rotateX",
      value: function rotateX(t) {
        return wn.makeRotationX(t), this.applyMatrix4(wn), this;
      }
    }, {
      key: "rotateY",
      value: function rotateY(t) {
        return wn.makeRotationY(t), this.applyMatrix4(wn), this;
      }
    }, {
      key: "rotateZ",
      value: function rotateZ(t) {
        return wn.makeRotationZ(t), this.applyMatrix4(wn), this;
      }
    }, {
      key: "translate",
      value: function translate(t, e, n) {
        return wn.makeTranslation(t, e, n), this.applyMatrix4(wn), this;
      }
    }, {
      key: "scale",
      value: function scale(t, e, n) {
        return wn.makeScale(t, e, n), this.applyMatrix4(wn), this;
      }
    }, {
      key: "lookAt",
      value: function lookAt(t) {
        return bn.lookAt(t), bn.updateMatrix(), this.applyMatrix4(bn.matrix), this;
      }
    }, {
      key: "center",
      value: function center() {
        return this.computeBoundingBox(), this.boundingBox.getCenter(Mn).negate(), this.translate(Mn.x, Mn.y, Mn.z), this;
      }
    }, {
      key: "setFromPoints",
      value: function setFromPoints(t) {
        var e = [];

        for (var _n36 = 0, _i34 = t.length; _n36 < _i34; _n36++) {
          var _i35 = t[_n36];
          e.push(_i35.x, _i35.y, _i35.z || 0);
        }

        return this.setAttribute("position", new fn(e, 3)), this;
      }
    }, {
      key: "computeBoundingBox",
      value: function computeBoundingBox() {
        null === this.boundingBox && (this.boundingBox = new Dt());
        var t = this.attributes.position,
            e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new Rt(-1 / 0, -1 / 0, -1 / 0), new Rt(1 / 0, 1 / 0, 1 / 0));

        if (void 0 !== t) {
          if (this.boundingBox.setFromBufferAttribute(t), e) for (var _t33 = 0, _n37 = e.length; _t33 < _n37; _t33++) {
            var _n38 = e[_t33];
            Sn.setFromBufferAttribute(_n38), this.morphTargetsRelative ? (En.addVectors(this.boundingBox.min, Sn.min), this.boundingBox.expandByPoint(En), En.addVectors(this.boundingBox.max, Sn.max), this.boundingBox.expandByPoint(En)) : (this.boundingBox.expandByPoint(Sn.min), this.boundingBox.expandByPoint(Sn.max));
          }
        } else this.boundingBox.makeEmpty();

        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
      }
    }, {
      key: "computeBoundingSphere",
      value: function computeBoundingSphere() {
        null === this.boundingSphere && (this.boundingSphere = new Qt());
        var t = this.attributes.position,
            e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new Rt(), 1 / 0);

        if (t) {
          var _n39 = this.boundingSphere.center;
          if (Sn.setFromBufferAttribute(t), e) for (var _t34 = 0, _n40 = e.length; _t34 < _n40; _t34++) {
            var _n41 = e[_t34];
            Tn.setFromBufferAttribute(_n41), this.morphTargetsRelative ? (En.addVectors(Sn.min, Tn.min), Sn.expandByPoint(En), En.addVectors(Sn.max, Tn.max), Sn.expandByPoint(En)) : (Sn.expandByPoint(Tn.min), Sn.expandByPoint(Tn.max));
          }
          Sn.getCenter(_n39);
          var _i36 = 0;

          for (var _e27 = 0, _r26 = t.count; _e27 < _r26; _e27++) {
            En.fromBufferAttribute(t, _e27), _i36 = Math.max(_i36, _n39.distanceToSquared(En));
          }

          if (e) for (var _r27 = 0, _s4 = e.length; _r27 < _s4; _r27++) {
            var _s5 = e[_r27],
                _a5 = this.morphTargetsRelative;

            for (var _e28 = 0, _r28 = _s5.count; _e28 < _r28; _e28++) {
              En.fromBufferAttribute(_s5, _e28), _a5 && (Mn.fromBufferAttribute(t, _e28), En.add(Mn)), _i36 = Math.max(_i36, _n39.distanceToSquared(En));
            }
          }
          this.boundingSphere.radius = Math.sqrt(_i36), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
        }
      }
    }, {
      key: "computeFaceNormals",
      value: function computeFaceNormals() {}
    }, {
      key: "computeTangents",
      value: function computeTangents() {
        var t = this.index,
            e = this.attributes;
        if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        var n = t.array,
            i = e.position.array,
            r = e.normal.array,
            s = e.uv.array,
            a = i.length / 3;
        void 0 === e.tangent && this.setAttribute("tangent", new an(new Float32Array(4 * a), 4));
        var o = e.tangent.array,
            l = [],
            c = [];

        for (var _t35 = 0; _t35 < a; _t35++) {
          l[_t35] = new Rt(), c[_t35] = new Rt();
        }

        var h = new Rt(),
            u = new Rt(),
            d = new Rt(),
            p = new vt(),
            m = new vt(),
            f = new vt(),
            g = new Rt(),
            v = new Rt();

        function y(t, e, n) {
          h.fromArray(i, 3 * t), u.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(s, 2 * t), m.fromArray(s, 2 * e), f.fromArray(s, 2 * n), u.sub(h), d.sub(h), m.sub(p), f.sub(p);
          var r = 1 / (m.x * f.y - f.x * m.y);
          isFinite(r) && (g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(r), v.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(r), l[t].add(g), l[e].add(g), l[n].add(g), c[t].add(v), c[e].add(v), c[n].add(v));
        }

        var x = this.groups;
        0 === x.length && (x = [{
          start: 0,
          count: n.length
        }]);

        for (var _t36 = 0, _e29 = x.length; _t36 < _e29; ++_t36) {
          var _e30 = x[_t36],
              _i37 = _e30.start;

          for (var _t37 = _i37, _r29 = _i37 + _e30.count; _t37 < _r29; _t37 += 3) {
            y(n[_t37 + 0], n[_t37 + 1], n[_t37 + 2]);
          }
        }

        var _ = new Rt(),
            w = new Rt(),
            b = new Rt(),
            M = new Rt();

        function S(t) {
          b.fromArray(r, 3 * t), M.copy(b);
          var e = l[t];
          _.copy(e), _.sub(b.multiplyScalar(b.dot(e))).normalize(), w.crossVectors(M, e);
          var n = w.dot(c[t]) < 0 ? -1 : 1;
          o[4 * t] = _.x, o[4 * t + 1] = _.y, o[4 * t + 2] = _.z, o[4 * t + 3] = n;
        }

        for (var _t38 = 0, _e31 = x.length; _t38 < _e31; ++_t38) {
          var _e32 = x[_t38],
              _i38 = _e32.start;

          for (var _t39 = _i38, _r30 = _i38 + _e32.count; _t39 < _r30; _t39 += 3) {
            S(n[_t39 + 0]), S(n[_t39 + 1]), S(n[_t39 + 2]);
          }
        }
      }
    }, {
      key: "computeVertexNormals",
      value: function computeVertexNormals() {
        var t = this.index,
            e = this.getAttribute("position");

        if (void 0 !== e) {
          var _n42 = this.getAttribute("normal");

          if (void 0 === _n42) _n42 = new an(new Float32Array(3 * e.count), 3), this.setAttribute("normal", _n42);else for (var _t40 = 0, _e33 = _n42.count; _t40 < _e33; _t40++) {
            _n42.setXYZ(_t40, 0, 0, 0);
          }

          var _i39 = new Rt(),
              _r31 = new Rt(),
              _s6 = new Rt(),
              _a6 = new Rt(),
              _o7 = new Rt(),
              _l8 = new Rt(),
              _c6 = new Rt(),
              _h4 = new Rt();

          if (t) for (var _u = 0, _d = t.count; _u < _d; _u += 3) {
            var _d2 = t.getX(_u + 0),
                _p = t.getX(_u + 1),
                _m = t.getX(_u + 2);

            _i39.fromBufferAttribute(e, _d2), _r31.fromBufferAttribute(e, _p), _s6.fromBufferAttribute(e, _m), _c6.subVectors(_s6, _r31), _h4.subVectors(_i39, _r31), _c6.cross(_h4), _a6.fromBufferAttribute(_n42, _d2), _o7.fromBufferAttribute(_n42, _p), _l8.fromBufferAttribute(_n42, _m), _a6.add(_c6), _o7.add(_c6), _l8.add(_c6), _n42.setXYZ(_d2, _a6.x, _a6.y, _a6.z), _n42.setXYZ(_p, _o7.x, _o7.y, _o7.z), _n42.setXYZ(_m, _l8.x, _l8.y, _l8.z);
          } else for (var _t41 = 0, _a7 = e.count; _t41 < _a7; _t41 += 3) {
            _i39.fromBufferAttribute(e, _t41 + 0), _r31.fromBufferAttribute(e, _t41 + 1), _s6.fromBufferAttribute(e, _t41 + 2), _c6.subVectors(_s6, _r31), _h4.subVectors(_i39, _r31), _c6.cross(_h4), _n42.setXYZ(_t41 + 0, _c6.x, _c6.y, _c6.z), _n42.setXYZ(_t41 + 1, _c6.x, _c6.y, _c6.z), _n42.setXYZ(_t41 + 2, _c6.x, _c6.y, _c6.z);
          }
          this.normalizeNormals(), _n42.needsUpdate = !0;
        }
      }
    }, {
      key: "merge",
      value: function merge(t, e) {
        if (!t || !t.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
        void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
        var n = this.attributes;

        for (var _i40 in n) {
          if (void 0 === t.attributes[_i40]) continue;

          var _r32 = n[_i40].array,
              _s7 = t.attributes[_i40],
              _a8 = _s7.array,
              _o8 = _s7.itemSize * e,
              _l9 = Math.min(_a8.length, _r32.length - _o8);

          for (var _t42 = 0, _e34 = _o8; _t42 < _l9; _t42++, _e34++) {
            _r32[_e34] = _a8[_t42];
          }
        }

        return this;
      }
    }, {
      key: "normalizeNormals",
      value: function normalizeNormals() {
        var t = this.attributes.normal;

        for (var _e35 = 0, _n43 = t.count; _e35 < _n43; _e35++) {
          En.fromBufferAttribute(t, _e35), En.normalize(), t.setXYZ(_e35, En.x, En.y, En.z);
        }
      }
    }, {
      key: "toNonIndexed",
      value: function toNonIndexed() {
        function t(t, e) {
          var n = t.array,
              i = t.itemSize,
              r = t.normalized,
              s = new n.constructor(e.length * i);
          var a = 0,
              o = 0;

          for (var _t43 = 0, _r33 = e.length; _t43 < _r33; _t43++) {
            a = e[_t43] * i;

            for (var _t44 = 0; _t44 < i; _t44++) {
              s[o++] = n[a++];
            }
          }

          return new an(s, i, r);
        }

        if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
        var e = new An(),
            n = this.index.array,
            i = this.attributes;

        for (var _r34 in i) {
          var _s8 = t(i[_r34], n);

          e.setAttribute(_r34, _s8);
        }

        var r = this.morphAttributes;

        for (var _i41 in r) {
          var _s9 = [],
              _a9 = r[_i41];

          for (var _e36 = 0, _i42 = _a9.length; _e36 < _i42; _e36++) {
            var _i43 = t(_a9[_e36], n);

            _s9.push(_i43);
          }

          e.morphAttributes[_i41] = _s9;
        }

        e.morphTargetsRelative = this.morphTargetsRelative;
        var s = this.groups;

        for (var _t45 = 0, _n44 = s.length; _t45 < _n44; _t45++) {
          var _n45 = s[_t45];
          e.addGroup(_n45.start, _n45.count, _n45.materialIndex);
        }

        return e;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = {
          metadata: {
            version: 4.5,
            type: "BufferGeometry",
            generator: "BufferGeometry.toJSON"
          }
        };

        if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
          var _e37 = this.parameters;

          for (var _n46 in _e37) {
            void 0 !== _e37[_n46] && (t[_n46] = _e37[_n46]);
          }

          return t;
        }

        t.data = {
          attributes: {}
        };
        var e = this.index;
        null !== e && (t.data.index = {
          type: e.array.constructor.name,
          array: Array.prototype.slice.call(e.array)
        });
        var n = this.attributes;

        for (var _e38 in n) {
          var _i44 = n[_e38];
          t.data.attributes[_e38] = _i44.toJSON(t.data);
        }

        var i = {};
        var r = !1;

        for (var _e39 in this.morphAttributes) {
          var _n47 = this.morphAttributes[_e39],
              _s10 = [];

          for (var _e40 = 0, _i45 = _n47.length; _e40 < _i45; _e40++) {
            var _i46 = _n47[_e40];

            _s10.push(_i46.toJSON(t.data));
          }

          _s10.length > 0 && (i[_e39] = _s10, r = !0);
        }

        r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
        var s = this.groups;
        s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
        var a = this.boundingSphere;
        return null !== a && (t.data.boundingSphere = {
          center: a.center.toArray(),
          radius: a.radius
        }), t;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new An().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
        var e = {};
        this.name = t.name;
        var n = t.index;
        null !== n && this.setIndex(n.clone(e));
        var i = t.attributes;

        for (var _t46 in i) {
          var _n48 = i[_t46];
          this.setAttribute(_t46, _n48.clone(e));
        }

        var r = t.morphAttributes;

        for (var _t47 in r) {
          var _n49 = [],
              _i47 = r[_t47];

          for (var _t48 = 0, _r35 = _i47.length; _t48 < _r35; _t48++) {
            _n49.push(_i47[_t48].clone(e));
          }

          this.morphAttributes[_t47] = _n49;
        }

        this.morphTargetsRelative = t.morphTargetsRelative;
        var s = t.groups;

        for (var _t49 = 0, _e41 = s.length; _t49 < _e41; _t49++) {
          var _e42 = s[_t49];
          this.addGroup(_e42.start, _e42.count, _e42.materialIndex);
        }

        var a = t.boundingBox;
        null !== a && (this.boundingBox = a.clone());
        var o = t.boundingSphere;
        return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.dispatchEvent({
          type: "dispose"
        });
      }
    }]);

    return An;
  }(rt);

  An.prototype.isBufferGeometry = !0;
  var Ln = new ae(),
      Rn = new se(),
      Cn = new Qt(),
      Pn = new Rt(),
      Dn = new Rt(),
      In = new Rt(),
      Nn = new Rt(),
      Bn = new Rt(),
      zn = new Rt(),
      Fn = new Rt(),
      On = new Rt(),
      Hn = new Rt(),
      Gn = new vt(),
      Un = new vt(),
      kn = new vt(),
      Vn = new Rt(),
      Wn = new Rt();

  var jn = /*#__PURE__*/function (_Pe) {
    _inherits(jn, _Pe);

    var _super19 = _createSuper(jn);

    function jn() {
      var _this9;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new An();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new nn();

      _classCallCheck(this, jn);

      _this9 = _super19.call(this), _this9.type = "Mesh", _this9.geometry = t, _this9.material = e, _this9.updateMorphTargets();
      return _this9;
    }

    _createClass(jn, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(jn.prototype), "copy", this).call(this, t), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this;
      }
    }, {
      key: "updateMorphTargets",
      value: function updateMorphTargets() {
        var t = this.geometry;

        if (t.isBufferGeometry) {
          var _e43 = t.morphAttributes,
              _n50 = Object.keys(_e43);

          if (_n50.length > 0) {
            var _t50 = _e43[_n50[0]];

            if (void 0 !== _t50) {
              this.morphTargetInfluences = [], this.morphTargetDictionary = {};

              for (var _e44 = 0, _n51 = _t50.length; _e44 < _n51; _e44++) {
                var _n52 = _t50[_e44].name || String(_e44);

                this.morphTargetInfluences.push(0), this.morphTargetDictionary[_n52] = _e44;
              }
            }
          }
        } else {
          var _e45 = t.morphTargets;
          void 0 !== _e45 && _e45.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
      }
    }, {
      key: "raycast",
      value: function raycast(t, e) {
        var n = this.geometry,
            i = this.material,
            r = this.matrixWorld;
        if (void 0 === i) return;
        if (null === n.boundingSphere && n.computeBoundingSphere(), Cn.copy(n.boundingSphere), Cn.applyMatrix4(r), !1 === t.ray.intersectsSphere(Cn)) return;
        if (Ln.copy(r).invert(), Rn.copy(t.ray).applyMatrix4(Ln), null !== n.boundingBox && !1 === Rn.intersectsBox(n.boundingBox)) return;
        var s;

        if (n.isBufferGeometry) {
          var _r36 = n.index,
              _a10 = n.attributes.position,
              _o9 = n.morphAttributes.position,
              _l10 = n.morphTargetsRelative,
              _c7 = n.attributes.uv,
              _h5 = n.attributes.uv2,
              _u2 = n.groups,
              _d3 = n.drawRange;
          if (null !== _r36) {
            if (Array.isArray(i)) for (var _n53 = 0, _p2 = _u2.length; _n53 < _p2; _n53++) {
              var _p3 = _u2[_n53],
                  _m2 = i[_p3.materialIndex];

              for (var _n54 = Math.max(_p3.start, _d3.start), _i48 = Math.min(_p3.start + _p3.count, _d3.start + _d3.count); _n54 < _i48; _n54 += 3) {
                var _i49 = _r36.getX(_n54),
                    _u3 = _r36.getX(_n54 + 1),
                    _d4 = _r36.getX(_n54 + 2);

                s = qn(this, _m2, t, Rn, _a10, _o9, _l10, _c7, _h5, _i49, _u3, _d4), s && (s.faceIndex = Math.floor(_n54 / 3), s.face.materialIndex = _p3.materialIndex, e.push(s));
              }
            } else {
              for (var _n55 = Math.max(0, _d3.start), _u4 = Math.min(_r36.count, _d3.start + _d3.count); _n55 < _u4; _n55 += 3) {
                var _u5 = _r36.getX(_n55),
                    _d5 = _r36.getX(_n55 + 1),
                    _p4 = _r36.getX(_n55 + 2);

                s = qn(this, i, t, Rn, _a10, _o9, _l10, _c7, _h5, _u5, _d5, _p4), s && (s.faceIndex = Math.floor(_n55 / 3), e.push(s));
              }
            }
          } else if (void 0 !== _a10) if (Array.isArray(i)) for (var _n56 = 0, _r37 = _u2.length; _n56 < _r37; _n56++) {
            var _r38 = _u2[_n56],
                _p5 = i[_r38.materialIndex];

            for (var _n57 = Math.max(_r38.start, _d3.start), _i50 = Math.min(_r38.start + _r38.count, _d3.start + _d3.count); _n57 < _i50; _n57 += 3) {
              s = qn(this, _p5, t, Rn, _a10, _o9, _l10, _c7, _h5, _n57, _n57 + 1, _n57 + 2), s && (s.faceIndex = Math.floor(_n57 / 3), s.face.materialIndex = _r38.materialIndex, e.push(s));
            }
          } else {
            for (var _n58 = Math.max(0, _d3.start), _r39 = Math.min(_a10.count, _d3.start + _d3.count); _n58 < _r39; _n58 += 3) {
              s = qn(this, i, t, Rn, _a10, _o9, _l10, _c7, _h5, _n58, _n58 + 1, _n58 + 2), s && (s.faceIndex = Math.floor(_n58 / 3), e.push(s));
            }
          }
        } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    }]);

    return jn;
  }(Pe);

  function qn(t, e, n, i, r, s, a, o, l, c, h, u) {
    Pn.fromBufferAttribute(r, c), Dn.fromBufferAttribute(r, h), In.fromBufferAttribute(r, u);
    var d = t.morphTargetInfluences;

    if (e.morphTargets && s && d) {
      Fn.set(0, 0, 0), On.set(0, 0, 0), Hn.set(0, 0, 0);

      for (var _t51 = 0, _e46 = s.length; _t51 < _e46; _t51++) {
        var _e47 = d[_t51],
            _n59 = s[_t51];
        0 !== _e47 && (Nn.fromBufferAttribute(_n59, c), Bn.fromBufferAttribute(_n59, h), zn.fromBufferAttribute(_n59, u), a ? (Fn.addScaledVector(Nn, _e47), On.addScaledVector(Bn, _e47), Hn.addScaledVector(zn, _e47)) : (Fn.addScaledVector(Nn.sub(Pn), _e47), On.addScaledVector(Bn.sub(Dn), _e47), Hn.addScaledVector(zn.sub(In), _e47)));
      }

      Pn.add(Fn), Dn.add(On), In.add(Hn);
    }

    t.isSkinnedMesh && (t.boneTransform(c, Pn), t.boneTransform(h, Dn), t.boneTransform(u, In));

    var p = function (t, e, n, i, r, s, a, o) {
      var l;
      if (l = 1 === e.side ? i.intersectTriangle(a, s, r, !0, o) : i.intersectTriangle(r, s, a, 2 !== e.side, o), null === l) return null;
      Wn.copy(o), Wn.applyMatrix4(t.matrixWorld);
      var c = n.ray.origin.distanceTo(Wn);
      return c < n.near || c > n.far ? null : {
        distance: c,
        point: Wn.clone(),
        object: t
      };
    }(t, e, n, i, Pn, Dn, In, Vn);

    if (p) {
      o && (Gn.fromBufferAttribute(o, c), Un.fromBufferAttribute(o, h), kn.fromBufferAttribute(o, u), p.uv = qe.getUV(Vn, Pn, Dn, In, Gn, Un, kn, new vt())), l && (Gn.fromBufferAttribute(l, c), Un.fromBufferAttribute(l, h), kn.fromBufferAttribute(l, u), p.uv2 = qe.getUV(Vn, Pn, Dn, In, Gn, Un, kn, new vt()));
      var _t52 = {
        a: c,
        b: h,
        c: u,
        normal: new Rt(),
        materialIndex: 0
      };
      qe.getNormal(Pn, Dn, In, _t52.normal), p.face = _t52;
    }

    return p;
  }

  jn.prototype.isMesh = !0;

  var Xn = /*#__PURE__*/function (_An) {
    _inherits(Xn, _An);

    var _super20 = _createSuper(Xn);

    function Xn() {
      var _this10;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

      _classCallCheck(this, Xn);

      _this10 = _super20.call(this), _this10.type = "BoxGeometry", _this10.parameters = {
        width: t,
        height: e,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: s
      };

      var a = _assertThisInitialized(_this10);

      i = Math.floor(i), r = Math.floor(r), s = Math.floor(s);
      var o = [],
          l = [],
          c = [],
          h = [];
      var u = 0,
          d = 0;

      function p(t, e, n, i, r, s, p, m, f, g, v) {
        var y = s / f,
            x = p / g,
            _ = s / 2,
            w = p / 2,
            b = m / 2,
            M = f + 1,
            S = g + 1;

        var T = 0,
            E = 0;
        var A = new Rt();

        for (var _s11 = 0; _s11 < S; _s11++) {
          var _a11 = _s11 * x - w;

          for (var _o10 = 0; _o10 < M; _o10++) {
            var _u6 = _o10 * y - _;

            A[t] = _u6 * i, A[e] = _a11 * r, A[n] = b, l.push(A.x, A.y, A.z), A[t] = 0, A[e] = 0, A[n] = m > 0 ? 1 : -1, c.push(A.x, A.y, A.z), h.push(_o10 / f), h.push(1 - _s11 / g), T += 1;
          }
        }

        for (var _t53 = 0; _t53 < g; _t53++) {
          for (var _e48 = 0; _e48 < f; _e48++) {
            var _n60 = u + _e48 + M * _t53,
                _i51 = u + _e48 + M * (_t53 + 1),
                _r40 = u + (_e48 + 1) + M * (_t53 + 1),
                _s12 = u + (_e48 + 1) + M * _t53;

            o.push(_n60, _i51, _s12), o.push(_i51, _r40, _s12), E += 6;
          }
        }

        a.addGroup(d, E, v), d += E, u += T;
      }

      p("z", "y", "x", -1, -1, n, e, t, s, r, 0), p("z", "y", "x", 1, -1, n, e, -t, s, r, 1), p("x", "z", "y", 1, 1, t, n, e, i, s, 2), p("x", "z", "y", 1, -1, t, n, -e, i, s, 3), p("x", "y", "z", 1, -1, t, e, n, i, r, 4), p("x", "y", "z", -1, -1, t, e, -n, i, r, 5), _this10.setIndex(o), _this10.setAttribute("position", new fn(l, 3)), _this10.setAttribute("normal", new fn(c, 3)), _this10.setAttribute("uv", new fn(h, 2));
      return _this10;
    }

    return Xn;
  }(An);

  function Yn(t) {
    var e = {};

    for (var _n61 in t) {
      e[_n61] = {};

      for (var _i52 in t[_n61]) {
        var _r41 = t[_n61][_i52];
        _r41 && (_r41.isColor || _r41.isMatrix3 || _r41.isMatrix4 || _r41.isVector2 || _r41.isVector3 || _r41.isVector4 || _r41.isTexture || _r41.isQuaternion) ? e[_n61][_i52] = _r41.clone() : Array.isArray(_r41) ? e[_n61][_i52] = _r41.slice() : e[_n61][_i52] = _r41;
      }
    }

    return e;
  }

  function Zn(t) {
    var e = {};

    for (var _n62 = 0; _n62 < t.length; _n62++) {
      var _i53 = Yn(t[_n62]);

      for (var _t54 in _i53) {
        e[_t54] = _i53[_t54];
      }
    }

    return e;
  }

  var Jn = {
    clone: Yn,
    merge: Zn
  };

  var Qn = /*#__PURE__*/function (_Ye2) {
    _inherits(Qn, _Ye2);

    var _super21 = _createSuper(Qn);

    function Qn(t) {
      var _this11;

      _classCallCheck(this, Qn);

      _this11 = _super21.call(this), _this11.type = "ShaderMaterial", _this11.defines = {}, _this11.uniforms = {}, _this11.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", _this11.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", _this11.linewidth = 1, _this11.wireframe = !1, _this11.wireframeLinewidth = 1, _this11.fog = !1, _this11.lights = !1, _this11.clipping = !1, _this11.morphTargets = !1, _this11.morphNormals = !1, _this11.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1
      }, _this11.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0]
      }, _this11.index0AttributeName = void 0, _this11.uniformsNeedUpdate = !1, _this11.glslVersion = null, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), _this11.setValues(t));
      return _this11;
    }

    _createClass(Qn, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Qn.prototype), "copy", this).call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Yn(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = _get(_getPrototypeOf(Qn.prototype), "toJSON", this).call(this, t);

        e.glslVersion = this.glslVersion, e.uniforms = {};

        for (var _n63 in this.uniforms) {
          var _i54 = this.uniforms[_n63].value;
          _i54 && _i54.isTexture ? e.uniforms[_n63] = {
            type: "t",
            value: _i54.toJSON(t).uuid
          } : _i54 && _i54.isColor ? e.uniforms[_n63] = {
            type: "c",
            value: _i54.getHex()
          } : _i54 && _i54.isVector2 ? e.uniforms[_n63] = {
            type: "v2",
            value: _i54.toArray()
          } : _i54 && _i54.isVector3 ? e.uniforms[_n63] = {
            type: "v3",
            value: _i54.toArray()
          } : _i54 && _i54.isVector4 ? e.uniforms[_n63] = {
            type: "v4",
            value: _i54.toArray()
          } : _i54 && _i54.isMatrix3 ? e.uniforms[_n63] = {
            type: "m3",
            value: _i54.toArray()
          } : _i54 && _i54.isMatrix4 ? e.uniforms[_n63] = {
            type: "m4",
            value: _i54.toArray()
          } : e.uniforms[_n63] = {
            value: _i54
          };
        }

        Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
        var n = {};

        for (var _t55 in this.extensions) {
          !0 === this.extensions[_t55] && (n[_t55] = !0);
        }

        return Object.keys(n).length > 0 && (e.extensions = n), e;
      }
    }]);

    return Qn;
  }(Ye);

  Qn.prototype.isShaderMaterial = !0;

  var Kn = /*#__PURE__*/function (_Pe2) {
    _inherits(Kn, _Pe2);

    var _super22 = _createSuper(Kn);

    function Kn() {
      var _this12;

      _classCallCheck(this, Kn);

      _this12 = _super22.call(this), _this12.type = "Camera", _this12.matrixWorldInverse = new ae(), _this12.projectionMatrix = new ae(), _this12.projectionMatrixInverse = new ae();
      return _this12;
    }

    _createClass(Kn, [{
      key: "copy",
      value: function copy(t, e) {
        return _get(_getPrototypeOf(Kn.prototype), "copy", this).call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this;
      }
    }, {
      key: "getWorldDirection",
      value: function getWorldDirection(t) {
        void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new Rt()), this.updateWorldMatrix(!0, !1);
        var e = this.matrixWorld.elements;
        return t.set(-e[8], -e[9], -e[10]).normalize();
      }
    }, {
      key: "updateMatrixWorld",
      value: function updateMatrixWorld(t) {
        _get(_getPrototypeOf(Kn.prototype), "updateMatrixWorld", this).call(this, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
      }
    }, {
      key: "updateWorldMatrix",
      value: function updateWorldMatrix(t, e) {
        _get(_getPrototypeOf(Kn.prototype), "updateWorldMatrix", this).call(this, t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return Kn;
  }(Pe);

  Kn.prototype.isCamera = !0;

  var $n = /*#__PURE__*/function (_Kn) {
    _inherits($n, _Kn);

    var _super23 = _createSuper($n);

    function $n() {
      var _this13;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2e3;

      _classCallCheck(this, $n);

      _this13 = _super23.call(this), _this13.type = "PerspectiveCamera", _this13.fov = t, _this13.zoom = 1, _this13.near = n, _this13.far = i, _this13.focus = 10, _this13.aspect = e, _this13.view = null, _this13.filmGauge = 35, _this13.filmOffset = 0, _this13.updateProjectionMatrix();
      return _this13;
    }

    _createClass($n, [{
      key: "copy",
      value: function copy(t, e) {
        return _get(_getPrototypeOf($n.prototype), "copy", this).call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
      }
    }, {
      key: "setFocalLength",
      value: function setFocalLength(t) {
        var e = .5 * this.getFilmHeight() / t;
        this.fov = 2 * lt * Math.atan(e), this.updateProjectionMatrix();
      }
    }, {
      key: "getFocalLength",
      value: function getFocalLength() {
        var t = Math.tan(.5 * ot * this.fov);
        return .5 * this.getFilmHeight() / t;
      }
    }, {
      key: "getEffectiveFOV",
      value: function getEffectiveFOV() {
        return 2 * lt * Math.atan(Math.tan(.5 * ot * this.fov) / this.zoom);
      }
    }, {
      key: "getFilmWidth",
      value: function getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1);
      }
    }, {
      key: "getFilmHeight",
      value: function getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1);
      }
    }, {
      key: "setViewOffset",
      value: function setViewOffset(t, e, n, i, r, s) {
        this.aspect = t / e, null === this.view && (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1
        }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
      }
    }, {
      key: "clearViewOffset",
      value: function clearViewOffset() {
        null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
      }
    }, {
      key: "updateProjectionMatrix",
      value: function updateProjectionMatrix() {
        var t = this.near;
        var e = t * Math.tan(.5 * ot * this.fov) / this.zoom,
            n = 2 * e,
            i = this.aspect * n,
            r = -.5 * i;
        var s = this.view;

        if (null !== this.view && this.view.enabled) {
          var _t56 = s.fullWidth,
              _a12 = s.fullHeight;
          r += s.offsetX * i / _t56, e -= s.offsetY * n / _a12, i *= s.width / _t56, n *= s.height / _a12;
        }

        var a = this.filmOffset;
        0 !== a && (r += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = _get(_getPrototypeOf($n.prototype), "toJSON", this).call(this, t);

        return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
      }
    }]);

    return $n;
  }(Kn);

  $n.prototype.isPerspectiveCamera = !0;
  var ti = 90;

  var ei = /*#__PURE__*/function (_Pe3) {
    _inherits(ei, _Pe3);

    var _super24 = _createSuper(ei);

    function ei(t, e, n) {
      var _this14;

      _classCallCheck(this, ei);

      if (_this14 = _super24.call(this), _this14.type = "CubeCamera", !0 !== n.isWebGLCubeRenderTarget) return _possibleConstructorReturn(_this14, void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."));
      _this14.renderTarget = n;
      var i = new $n(ti, 1, t, e);
      i.layers = _this14.layers, i.up.set(0, -1, 0), i.lookAt(new Rt(1, 0, 0)), _this14.add(i);
      var r = new $n(ti, 1, t, e);
      r.layers = _this14.layers, r.up.set(0, -1, 0), r.lookAt(new Rt(-1, 0, 0)), _this14.add(r);
      var s = new $n(ti, 1, t, e);
      s.layers = _this14.layers, s.up.set(0, 0, 1), s.lookAt(new Rt(0, 1, 0)), _this14.add(s);
      var a = new $n(ti, 1, t, e);
      a.layers = _this14.layers, a.up.set(0, 0, -1), a.lookAt(new Rt(0, -1, 0)), _this14.add(a);
      var o = new $n(ti, 1, t, e);
      o.layers = _this14.layers, o.up.set(0, -1, 0), o.lookAt(new Rt(0, 0, 1)), _this14.add(o);
      var l = new $n(ti, 1, t, e);
      l.layers = _this14.layers, l.up.set(0, -1, 0), l.lookAt(new Rt(0, 0, -1)), _this14.add(l);
      return _possibleConstructorReturn(_this14);
    }

    _createClass(ei, [{
      key: "update",
      value: function update(t, e) {
        null === this.parent && this.updateMatrixWorld();

        var n = this.renderTarget,
            _this$children = _slicedToArray(this.children, 6),
            i = _this$children[0],
            r = _this$children[1],
            s = _this$children[2],
            a = _this$children[3],
            o = _this$children[4],
            l = _this$children[5],
            c = t.xr.enabled,
            h = t.getRenderTarget();

        t.xr.enabled = !1;
        var u = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), t.render(e, r), t.setRenderTarget(n, 2), t.render(e, s), t.setRenderTarget(n, 3), t.render(e, a), t.setRenderTarget(n, 4), t.render(e, o), n.texture.generateMipmaps = u, t.setRenderTarget(n, 5), t.render(e, l), t.setRenderTarget(h), t.xr.enabled = c;
      }
    }]);

    return ei;
  }(Pe);

  var ni = /*#__PURE__*/function (_bt) {
    _inherits(ni, _bt);

    var _super25 = _createSuper(ni);

    function ni(t, e, n, i, s, a, o, l, c, h) {
      var _this15;

      _classCallCheck(this, ni);

      _this15 = _super25.call(this, t = void 0 !== t ? t : [], e = void 0 !== e ? e : r, n, i, s, a, o = void 0 !== o ? o : T, l, c, h), _this15._needsFlipEnvMap = !0, _this15.flipY = !1;
      return _this15;
    }

    _createClass(ni, [{
      key: "images",
      get: function get() {
        return this.image;
      },
      set: function set(t) {
        this.image = t;
      }
    }]);

    return ni;
  }(bt);

  ni.prototype.isCubeTexture = !0;

  var ii = /*#__PURE__*/function (_Tt3) {
    _inherits(ii, _Tt3);

    var _super26 = _createSuper(ii);

    function ii(t, e, n) {
      var _this16;

      _classCallCheck(this, ii);

      Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), e = n), _this16 = _super26.call(this, t, t, e), e = e || {}, _this16.texture = new ni(void 0, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), _this16.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, _this16.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : g, _this16.texture._needsFlipEnvMap = !1;
      return _this16;
    }

    _createClass(ii, [{
      key: "fromEquirectangularTexture",
      value: function fromEquirectangularTexture(t, e) {
        this.texture.type = e.type, this.texture.format = E, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
        var n = {
          uniforms: {
            tEquirect: {
              value: null
            }
          },
          vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
          fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
        },
            i = new Xn(5, 5, 5),
            r = new Qn({
          name: "CubemapFromEquirect",
          uniforms: Yn(n.uniforms),
          vertexShader: n.vertexShader,
          fragmentShader: n.fragmentShader,
          side: 1,
          blending: 0
        });
        r.uniforms.tEquirect.value = e;
        var s = new jn(i, r),
            a = e.minFilter;
        e.minFilter === y && (e.minFilter = g);
        return new ei(1, 10, this).update(t, s), e.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
      }
    }, {
      key: "clear",
      value: function clear(t, e, n, i) {
        var r = t.getRenderTarget();

        for (var _r42 = 0; _r42 < 6; _r42++) {
          t.setRenderTarget(this, _r42), t.clear(e, n, i);
        }

        t.setRenderTarget(r);
      }
    }]);

    return ii;
  }(Tt);

  ii.prototype.isWebGLCubeRenderTarget = !0;
  var ri = new Qt(),
      si = new Rt();

  var ai = /*#__PURE__*/function () {
    function ai() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Be();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Be();
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Be();
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Be();
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new Be();
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : new Be();

      _classCallCheck(this, ai);

      this.planes = [t, e, n, i, r, s];
    }

    _createClass(ai, [{
      key: "set",
      value: function set(t, e, n, i, r, s) {
        var a = this.planes;
        return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        var e = this.planes;

        for (var _n64 = 0; _n64 < 6; _n64++) {
          e[_n64].copy(t.planes[_n64]);
        }

        return this;
      }
    }, {
      key: "setFromProjectionMatrix",
      value: function setFromProjectionMatrix(t) {
        var e = this.planes,
            n = t.elements,
            i = n[0],
            r = n[1],
            s = n[2],
            a = n[3],
            o = n[4],
            l = n[5],
            c = n[6],
            h = n[7],
            u = n[8],
            d = n[9],
            p = n[10],
            m = n[11],
            f = n[12],
            g = n[13],
            v = n[14],
            y = n[15];
        return e[0].setComponents(a - i, h - o, m - u, y - f).normalize(), e[1].setComponents(a + i, h + o, m + u, y + f).normalize(), e[2].setComponents(a + r, h + l, m + d, y + g).normalize(), e[3].setComponents(a - r, h - l, m - d, y - g).normalize(), e[4].setComponents(a - s, h - c, m - p, y - v).normalize(), e[5].setComponents(a + s, h + c, m + p, y + v).normalize(), this;
      }
    }, {
      key: "intersectsObject",
      value: function intersectsObject(t) {
        var e = t.geometry;
        return null === e.boundingSphere && e.computeBoundingSphere(), ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(ri);
      }
    }, {
      key: "intersectsSprite",
      value: function intersectsSprite(t) {
        return ri.center.set(0, 0, 0), ri.radius = .7071067811865476, ri.applyMatrix4(t.matrixWorld), this.intersectsSphere(ri);
      }
    }, {
      key: "intersectsSphere",
      value: function intersectsSphere(t) {
        var e = this.planes,
            n = t.center,
            i = -t.radius;

        for (var _t57 = 0; _t57 < 6; _t57++) {
          if (e[_t57].distanceToPoint(n) < i) return !1;
        }

        return !0;
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(t) {
        var e = this.planes;

        for (var _n65 = 0; _n65 < 6; _n65++) {
          var _i55 = e[_n65];
          if (si.x = _i55.normal.x > 0 ? t.max.x : t.min.x, si.y = _i55.normal.y > 0 ? t.max.y : t.min.y, si.z = _i55.normal.z > 0 ? t.max.z : t.min.z, _i55.distanceToPoint(si) < 0) return !1;
        }

        return !0;
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(t) {
        var e = this.planes;

        for (var _n66 = 0; _n66 < 6; _n66++) {
          if (e[_n66].distanceToPoint(t) < 0) return !1;
        }

        return !0;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return ai;
  }();

  function oi() {
    var t = null,
        e = !1,
        n = null,
        i = null;

    function r(e, s) {
      n(e, s), i = t.requestAnimationFrame(r);
    }

    return {
      start: function start() {
        !0 !== e && null !== n && (i = t.requestAnimationFrame(r), e = !0);
      },
      stop: function stop() {
        t.cancelAnimationFrame(i), e = !1;
      },
      setAnimationLoop: function setAnimationLoop(t) {
        n = t;
      },
      setContext: function setContext(e) {
        t = e;
      }
    };
  }

  function li(t, e) {
    var n = e.isWebGL2,
        i = new WeakMap();
    return {
      get: function get(t) {
        return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
      },
      remove: function remove(e) {
        e.isInterleavedBufferAttribute && (e = e.data);
        var n = i.get(e);
        n && (t.deleteBuffer(n.buffer), i.delete(e));
      },
      update: function update(e, r) {
        if (e.isGLBufferAttribute) {
          var _t58 = i.get(e);

          return void ((!_t58 || _t58.version < e.version) && i.set(e, {
            buffer: e.buffer,
            type: e.type,
            bytesPerElement: e.elementSize,
            version: e.version
          }));
        }

        e.isInterleavedBufferAttribute && (e = e.data);
        var s = i.get(e);
        void 0 === s ? i.set(e, function (e, i) {
          var r = e.array,
              s = e.usage,
              a = t.createBuffer();
          t.bindBuffer(i, a), t.bufferData(i, r, s), e.onUploadCallback();
          var o = 5126;
          return r instanceof Float32Array ? o = 5126 : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? e.isFloat16BufferAttribute ? n ? o = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : o = 5123 : r instanceof Int16Array ? o = 5122 : r instanceof Uint32Array ? o = 5125 : r instanceof Int32Array ? o = 5124 : r instanceof Int8Array ? o = 5120 : (r instanceof Uint8Array || r instanceof Uint8ClampedArray) && (o = 5121), {
            buffer: a,
            type: o,
            bytesPerElement: r.BYTES_PER_ELEMENT,
            version: e.version
          };
        }(e, r)) : s.version < e.version && (!function (e, i, r) {
          var s = i.array,
              a = i.updateRange;
          t.bindBuffer(r, e), -1 === a.count ? t.bufferSubData(r, 0, s) : (n ? t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)), a.count = -1);
        }(s.buffer, e, r), s.version = e.version);
      }
    };
  }

  var ci = /*#__PURE__*/function (_An2) {
    _inherits(ci, _An2);

    var _super27 = _createSuper(ci);

    function ci() {
      var _this17;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, ci);

      _this17 = _super27.call(this), _this17.type = "PlaneGeometry", _this17.parameters = {
        width: t,
        height: e,
        widthSegments: n,
        heightSegments: i
      };
      var r = t / 2,
          s = e / 2,
          a = Math.floor(n),
          o = Math.floor(i),
          l = a + 1,
          c = o + 1,
          h = t / a,
          u = e / o,
          d = [],
          p = [],
          m = [],
          f = [];

      for (var _t59 = 0; _t59 < c; _t59++) {
        var _e49 = _t59 * u - s;

        for (var _n67 = 0; _n67 < l; _n67++) {
          var _i56 = _n67 * h - r;

          p.push(_i56, -_e49, 0), m.push(0, 0, 1), f.push(_n67 / a), f.push(1 - _t59 / o);
        }
      }

      for (var _t60 = 0; _t60 < o; _t60++) {
        for (var _e50 = 0; _e50 < a; _e50++) {
          var _n68 = _e50 + l * _t60,
              _i57 = _e50 + l * (_t60 + 1),
              _r43 = _e50 + 1 + l * (_t60 + 1),
              _s13 = _e50 + 1 + l * _t60;

          d.push(_n68, _i57, _s13), d.push(_i57, _r43, _s13);
        }
      }

      _this17.setIndex(d), _this17.setAttribute("position", new fn(p, 3)), _this17.setAttribute("normal", new fn(m, 3)), _this17.setAttribute("uv", new fn(f, 2));
      return _this17;
    }

    return ci;
  }(An);

  var hi = {
    alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
    alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
    aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
    aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
    begin_vertex: "vec3 transformed = vec3( position );",
    beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
    bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
    bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
    clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
    clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
    clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
    color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
    color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
    common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
    cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
    defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
    displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
    displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
    emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
    encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
    envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
    envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
    envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
    envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
    envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
    fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
    fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
    gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
    lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
    lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
    lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
    lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
    lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
    lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
    lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
    lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), rawDiffuseColor, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), rawDiffuseColor, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
    lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(\t\t0, 1,\t\t0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
    lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
    lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
    lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
    logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
    logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
    logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
    map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
    map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
    map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
    morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
    normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
    normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
    clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
    clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
    clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
    packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
    premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
    project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
    dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
    dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
    roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
    shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
    shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
    skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
    skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
    skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
    specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
    tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
    tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(\t1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,\t1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,\t1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
    transmission_fragment: "#ifdef USE_TRANSMISSION\n\t#ifdef USE_TRANSMISSIONMAP\n\t\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSNMAP\n\t\tthicknessFactor *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition.xyz / vWorldPosition.w;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n\tfloat ior = ( 1.0 + 0.4 * reflectivity ) / ( 1.0 - 0.4 * reflectivity );\n\tvec3 f0 = vec3( pow( ior - 1.0, 2.0 ) / pow( ior + 1.0, 2.0 ) );\n\tvec3 f90 = vec3( 1.0 );\n\tvec3 f_transmission = totalTransmission * getIBLVolumeRefraction(\n\t\tnormal, v, viewDir, roughnessFactor, diffuseColor.rgb, f0, f90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n\t\tattenuationColor, attenuationDistance);\n\tdiffuseColor.rgb = mix( diffuseColor.rgb, f_transmission, totalTransmission );\n#endif",
    transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec4 vWorldPosition;\n\tvec3 getVolumeTransmissionRay(vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix) {\n\t\tvec3 refractionVector = refract(-v, normalize(n), 1.0 / ior);\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length(vec3(modelMatrix[0].xyz));\n\t\tmodelScale.y = length(vec3(modelMatrix[1].xyz));\n\t\tmodelScale.z = length(vec3(modelMatrix[2].xyz));\n\t\treturn normalize(refractionVector) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness(float roughness, float ior) {\n\t\treturn roughness * clamp(ior * 2.0 - 2.0, 0.0, 1.0);\n\t}\n\tvec3 getTransmissionSample(vec2 fragCoord, float roughness, float ior) {\n\t\tfloat framebufferLod = log2(transmissionSamplerSize.x) * applyIorToRoughness(roughness, ior);\n\t\treturn texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod).rgb;\n\t}\n\tvec3 applyVolumeAttenuation(vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance) {\n\t\tif (attenuationDistance == 0.0) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log(attenuationColor) / attenuationDistance;\n\t\t\tvec3 transmittance = exp(-attenuationCoefficient * transmissionDistance);\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec3 getIBLVolumeRefraction(vec3 n, vec3 v, vec3 viewDir, float perceptualRoughness, vec3 baseColor, vec3 f0, vec3 f90,\n\t\tvec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness, vec3 attenuationColor, float attenuationDistance) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay(n, v, thickness, ior, modelMatrix);\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4(refractedRayExit, 1.0);\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec3 transmittedLight = getTransmissionSample(refractionCoords, perceptualRoughness, ior);\n\t\tvec3 attenuatedColor = applyVolumeAttenuation(transmittedLight, length(transmissionRay), attenuationColor, attenuationDistance);\n\t\tfloat NdotV = saturate(dot(n, viewDir));\n\t\tvec2 brdf = integrateSpecularBRDF(NdotV, perceptualRoughness);\n\t\tvec3 specularColor = f0 * brdf.x + f90 * brdf.y;\n\t\treturn (1.0 - specularColor) * attenuatedColor * baseColor;\n\t}\n#endif",
    uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
    uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
    uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
    uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
    uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
    uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
    worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
    background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
    depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
    distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
    distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
    equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
    linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
    meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
    meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform vec3 attenuationColor;\n\tuniform float attenuationDistance;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <transmission_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef USE_TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t\tfloat thicknessFactor = thickness;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\tvec3 rawDiffuseColor = diffuseColor.rgb;\n\t#include <transmission_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#ifdef USE_TRANSMISSION\n\tvarying vec4 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition;\n#endif\n}",
    normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
    normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
    points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
    shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
  },
      ui = {
    common: {
      diffuse: {
        value: new en(16777215)
      },
      opacity: {
        value: 1
      },
      map: {
        value: null
      },
      uvTransform: {
        value: new yt()
      },
      uv2Transform: {
        value: new yt()
      },
      alphaMap: {
        value: null
      }
    },
    specularmap: {
      specularMap: {
        value: null
      }
    },
    envmap: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      },
      reflectivity: {
        value: 1
      },
      refractionRatio: {
        value: .98
      },
      maxMipLevel: {
        value: 0
      }
    },
    aomap: {
      aoMap: {
        value: null
      },
      aoMapIntensity: {
        value: 1
      }
    },
    lightmap: {
      lightMap: {
        value: null
      },
      lightMapIntensity: {
        value: 1
      }
    },
    emissivemap: {
      emissiveMap: {
        value: null
      }
    },
    bumpmap: {
      bumpMap: {
        value: null
      },
      bumpScale: {
        value: 1
      }
    },
    normalmap: {
      normalMap: {
        value: null
      },
      normalScale: {
        value: new vt(1, 1)
      }
    },
    displacementmap: {
      displacementMap: {
        value: null
      },
      displacementScale: {
        value: 1
      },
      displacementBias: {
        value: 0
      }
    },
    roughnessmap: {
      roughnessMap: {
        value: null
      }
    },
    metalnessmap: {
      metalnessMap: {
        value: null
      }
    },
    gradientmap: {
      gradientMap: {
        value: null
      }
    },
    fog: {
      fogDensity: {
        value: 25e-5
      },
      fogNear: {
        value: 1
      },
      fogFar: {
        value: 2e3
      },
      fogColor: {
        value: new en(16777215)
      }
    },
    lights: {
      ambientLightColor: {
        value: []
      },
      lightProbe: {
        value: []
      },
      directionalLights: {
        value: [],
        properties: {
          direction: {},
          color: {}
        }
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      directionalShadowMap: {
        value: []
      },
      directionalShadowMatrix: {
        value: []
      },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {}
        }
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      spotShadowMap: {
        value: []
      },
      spotShadowMatrix: {
        value: []
      },
      pointLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          decay: {},
          distance: {}
        }
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {}
        }
      },
      pointShadowMap: {
        value: []
      },
      pointShadowMatrix: {
        value: []
      },
      hemisphereLights: {
        value: [],
        properties: {
          direction: {},
          skyColor: {},
          groundColor: {}
        }
      },
      rectAreaLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          width: {},
          height: {}
        }
      },
      ltc_1: {
        value: null
      },
      ltc_2: {
        value: null
      }
    },
    points: {
      diffuse: {
        value: new en(16777215)
      },
      opacity: {
        value: 1
      },
      size: {
        value: 1
      },
      scale: {
        value: 1
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      uvTransform: {
        value: new yt()
      }
    },
    sprite: {
      diffuse: {
        value: new en(16777215)
      },
      opacity: {
        value: 1
      },
      center: {
        value: new vt(.5, .5)
      },
      rotation: {
        value: 0
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      uvTransform: {
        value: new yt()
      }
    }
  },
      di = {
    basic: {
      uniforms: Zn([ui.common, ui.specularmap, ui.envmap, ui.aomap, ui.lightmap, ui.fog]),
      vertexShader: hi.meshbasic_vert,
      fragmentShader: hi.meshbasic_frag
    },
    lambert: {
      uniforms: Zn([ui.common, ui.specularmap, ui.envmap, ui.aomap, ui.lightmap, ui.emissivemap, ui.fog, ui.lights, {
        emissive: {
          value: new en(0)
        }
      }]),
      vertexShader: hi.meshlambert_vert,
      fragmentShader: hi.meshlambert_frag
    },
    phong: {
      uniforms: Zn([ui.common, ui.specularmap, ui.envmap, ui.aomap, ui.lightmap, ui.emissivemap, ui.bumpmap, ui.normalmap, ui.displacementmap, ui.fog, ui.lights, {
        emissive: {
          value: new en(0)
        },
        specular: {
          value: new en(1118481)
        },
        shininess: {
          value: 30
        }
      }]),
      vertexShader: hi.meshphong_vert,
      fragmentShader: hi.meshphong_frag
    },
    standard: {
      uniforms: Zn([ui.common, ui.envmap, ui.aomap, ui.lightmap, ui.emissivemap, ui.bumpmap, ui.normalmap, ui.displacementmap, ui.roughnessmap, ui.metalnessmap, ui.fog, ui.lights, {
        emissive: {
          value: new en(0)
        },
        roughness: {
          value: 1
        },
        metalness: {
          value: 0
        },
        envMapIntensity: {
          value: 1
        }
      }]),
      vertexShader: hi.meshphysical_vert,
      fragmentShader: hi.meshphysical_frag
    },
    toon: {
      uniforms: Zn([ui.common, ui.aomap, ui.lightmap, ui.emissivemap, ui.bumpmap, ui.normalmap, ui.displacementmap, ui.gradientmap, ui.fog, ui.lights, {
        emissive: {
          value: new en(0)
        }
      }]),
      vertexShader: hi.meshtoon_vert,
      fragmentShader: hi.meshtoon_frag
    },
    matcap: {
      uniforms: Zn([ui.common, ui.bumpmap, ui.normalmap, ui.displacementmap, ui.fog, {
        matcap: {
          value: null
        }
      }]),
      vertexShader: hi.meshmatcap_vert,
      fragmentShader: hi.meshmatcap_frag
    },
    points: {
      uniforms: Zn([ui.points, ui.fog]),
      vertexShader: hi.points_vert,
      fragmentShader: hi.points_frag
    },
    dashed: {
      uniforms: Zn([ui.common, ui.fog, {
        scale: {
          value: 1
        },
        dashSize: {
          value: 1
        },
        totalSize: {
          value: 2
        }
      }]),
      vertexShader: hi.linedashed_vert,
      fragmentShader: hi.linedashed_frag
    },
    depth: {
      uniforms: Zn([ui.common, ui.displacementmap]),
      vertexShader: hi.depth_vert,
      fragmentShader: hi.depth_frag
    },
    normal: {
      uniforms: Zn([ui.common, ui.bumpmap, ui.normalmap, ui.displacementmap, {
        opacity: {
          value: 1
        }
      }]),
      vertexShader: hi.normal_vert,
      fragmentShader: hi.normal_frag
    },
    sprite: {
      uniforms: Zn([ui.sprite, ui.fog]),
      vertexShader: hi.sprite_vert,
      fragmentShader: hi.sprite_frag
    },
    background: {
      uniforms: {
        uvTransform: {
          value: new yt()
        },
        t2D: {
          value: null
        }
      },
      vertexShader: hi.background_vert,
      fragmentShader: hi.background_frag
    },
    cube: {
      uniforms: Zn([ui.envmap, {
        opacity: {
          value: 1
        }
      }]),
      vertexShader: hi.cube_vert,
      fragmentShader: hi.cube_frag
    },
    equirect: {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: hi.equirect_vert,
      fragmentShader: hi.equirect_frag
    },
    distanceRGBA: {
      uniforms: Zn([ui.common, ui.displacementmap, {
        referencePosition: {
          value: new Rt()
        },
        nearDistance: {
          value: 1
        },
        farDistance: {
          value: 1e3
        }
      }]),
      vertexShader: hi.distanceRGBA_vert,
      fragmentShader: hi.distanceRGBA_frag
    },
    shadow: {
      uniforms: Zn([ui.lights, ui.fog, {
        color: {
          value: new en(0)
        },
        opacity: {
          value: 1
        }
      }]),
      vertexShader: hi.shadow_vert,
      fragmentShader: hi.shadow_frag
    }
  };

  function pi(t, e, n, i, r) {
    var s = new en(0);
    var a,
        o,
        c = 0,
        h = null,
        u = 0,
        d = null;

    function p(t, e) {
      n.buffers.color.setClear(t.r, t.g, t.b, e, r);
    }

    return {
      getClearColor: function getClearColor() {
        return s;
      },
      setClearColor: function setClearColor(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        s.set(t), c = e, p(s, c);
      },
      getClearAlpha: function getClearAlpha() {
        return c;
      },
      setClearAlpha: function setClearAlpha(t) {
        c = t, p(s, c);
      },
      render: function render(n, r) {
        var m = !1,
            f = !0 === r.isScene ? r.background : null;
        f && f.isTexture && (f = e.get(f));
        var g = t.xr,
            v = g.getSession && g.getSession();
        v && "additive" === v.environmentBlendMode && (f = null), null === f ? p(s, c) : f && f.isColor && (p(f, 1), m = !0), (t.autoClear || m) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), f && (f.isCubeTexture || f.mapping === l) ? (void 0 === o && (o = new jn(new Xn(1, 1, 1), new Qn({
          name: "BackgroundCubeMaterial",
          uniforms: Yn(di.cube.uniforms),
          vertexShader: di.cube.vertexShader,
          fragmentShader: di.cube.fragmentShader,
          side: 1,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })), o.geometry.deleteAttribute("normal"), o.geometry.deleteAttribute("uv"), o.onBeforeRender = function (t, e, n) {
          this.matrixWorld.copyPosition(n.matrixWorld);
        }, Object.defineProperty(o.material, "envMap", {
          get: function get() {
            return this.uniforms.envMap.value;
          }
        }), i.update(o)), o.material.uniforms.envMap.value = f, o.material.uniforms.flipEnvMap.value = f.isCubeTexture && f._needsFlipEnvMap ? -1 : 1, h === f && u === f.version && d === t.toneMapping || (o.material.needsUpdate = !0, h = f, u = f.version, d = t.toneMapping), n.unshift(o, o.geometry, o.material, 0, 0, null)) : f && f.isTexture && (void 0 === a && (a = new jn(new ci(2, 2), new Qn({
          name: "BackgroundMaterial",
          uniforms: Yn(di.background.uniforms),
          vertexShader: di.background.vertexShader,
          fragmentShader: di.background.fragmentShader,
          side: 0,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })), a.geometry.deleteAttribute("normal"), Object.defineProperty(a.material, "map", {
          get: function get() {
            return this.uniforms.t2D.value;
          }
        }), i.update(a)), a.material.uniforms.t2D.value = f, !0 === f.matrixAutoUpdate && f.updateMatrix(), a.material.uniforms.uvTransform.value.copy(f.matrix), h === f && u === f.version && d === t.toneMapping || (a.material.needsUpdate = !0, h = f, u = f.version, d = t.toneMapping), n.unshift(a, a.geometry, a.material, 0, 0, null));
      }
    };
  }

  function mi(t, e, n, i) {
    var r = t.getParameter(34921),
        s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
        a = i.isWebGL2 || null !== s,
        o = {},
        l = d(null);
    var c = l;

    function h(e) {
      return i.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e);
    }

    function u(e) {
      return i.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e);
    }

    function d(t) {
      var e = [],
          n = [],
          i = [];

      for (var _t61 = 0; _t61 < r; _t61++) {
        e[_t61] = 0, n[_t61] = 0, i[_t61] = 0;
      }

      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: e,
        enabledAttributes: n,
        attributeDivisors: i,
        object: t,
        attributes: {},
        index: null
      };
    }

    function p() {
      var t = c.newAttributes;

      for (var _e51 = 0, _n69 = t.length; _e51 < _n69; _e51++) {
        t[_e51] = 0;
      }
    }

    function m(t) {
      f(t, 0);
    }

    function f(n, r) {
      var s = c.newAttributes,
          a = c.enabledAttributes,
          o = c.attributeDivisors;

      if (s[n] = 1, 0 === a[n] && (t.enableVertexAttribArray(n), a[n] = 1), o[n] !== r) {
        (i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), o[n] = r;
      }
    }

    function g() {
      var e = c.newAttributes,
          n = c.enabledAttributes;

      for (var _i58 = 0, _r44 = n.length; _i58 < _r44; _i58++) {
        n[_i58] !== e[_i58] && (t.disableVertexAttribArray(_i58), n[_i58] = 0);
      }
    }

    function v(e, n, r, s, a, o) {
      !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, n, r, s, a, o) : t.vertexAttribIPointer(e, n, r, a, o);
    }

    function y() {
      x(), c !== l && (c = l, h(c.object));
    }

    function x() {
      l.geometry = null, l.program = null, l.wireframe = !1;
    }

    return {
      setup: function setup(r, l, u, y, x) {
        var _ = !1;

        if (a) {
          var _e52 = function (e, n, r) {
            var a = !0 === r.wireframe;
            var l = o[e.id];
            void 0 === l && (l = {}, o[e.id] = l);
            var c = l[n.id];
            void 0 === c && (c = {}, l[n.id] = c);
            var h = c[a];
            void 0 === h && (h = d(i.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES()), c[a] = h);
            return h;
          }(y, u, l);

          c !== _e52 && (c = _e52, h(c.object)), _ = function (t, e) {
            var n = c.attributes,
                i = t.attributes;
            var r = 0;

            for (var _t62 in i) {
              var _e53 = n[_t62],
                  _s14 = i[_t62];
              if (void 0 === _e53) return !0;
              if (_e53.attribute !== _s14) return !0;
              if (_e53.data !== _s14.data) return !0;
              r++;
            }

            return c.attributesNum !== r || c.index !== e;
          }(y, x), _ && function (t, e) {
            var n = {},
                i = t.attributes;
            var r = 0;

            for (var _t63 in i) {
              var _e54 = i[_t63],
                  _s15 = {};
              _s15.attribute = _e54, _e54.data && (_s15.data = _e54.data), n[_t63] = _s15, r++;
            }

            c.attributes = n, c.attributesNum = r, c.index = e;
          }(y, x);
        } else {
          var _t64 = !0 === l.wireframe;

          c.geometry === y.id && c.program === u.id && c.wireframe === _t64 || (c.geometry = y.id, c.program = u.id, c.wireframe = _t64, _ = !0);
        }

        !0 === r.isInstancedMesh && (_ = !0), null !== x && n.update(x, 34963), _ && (!function (r, s, a, o) {
          if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
          p();
          var l = o.attributes,
              c = a.getAttributes(),
              h = s.defaultAttributeValues;

          for (var _e55 in c) {
            var _i59 = c[_e55];

            if (_i59 >= 0) {
              var _s16 = l[_e55];

              if (void 0 !== _s16) {
                var _e56 = _s16.normalized,
                    _r45 = _s16.itemSize,
                    _a13 = n.get(_s16);

                if (void 0 === _a13) continue;
                var _l11 = _a13.buffer,
                    _c8 = _a13.type,
                    _h6 = _a13.bytesPerElement;

                if (_s16.isInterleavedBufferAttribute) {
                  var _n70 = _s16.data,
                      _a14 = _n70.stride,
                      _u7 = _s16.offset;
                  _n70 && _n70.isInstancedInterleavedBuffer ? (f(_i59, _n70.meshPerAttribute), void 0 === o._maxInstanceCount && (o._maxInstanceCount = _n70.meshPerAttribute * _n70.count)) : m(_i59), t.bindBuffer(34962, _l11), v(_i59, _r45, _c8, _e56, _a14 * _h6, _u7 * _h6);
                } else _s16.isInstancedBufferAttribute ? (f(_i59, _s16.meshPerAttribute), void 0 === o._maxInstanceCount && (o._maxInstanceCount = _s16.meshPerAttribute * _s16.count)) : m(_i59), t.bindBuffer(34962, _l11), v(_i59, _r45, _c8, _e56, 0, 0);
              } else if ("instanceMatrix" === _e55) {
                var _e57 = n.get(r.instanceMatrix);

                if (void 0 === _e57) continue;
                var _s17 = _e57.buffer,
                    _a15 = _e57.type;
                f(_i59 + 0, 1), f(_i59 + 1, 1), f(_i59 + 2, 1), f(_i59 + 3, 1), t.bindBuffer(34962, _s17), t.vertexAttribPointer(_i59 + 0, 4, _a15, !1, 64, 0), t.vertexAttribPointer(_i59 + 1, 4, _a15, !1, 64, 16), t.vertexAttribPointer(_i59 + 2, 4, _a15, !1, 64, 32), t.vertexAttribPointer(_i59 + 3, 4, _a15, !1, 64, 48);
              } else if ("instanceColor" === _e55) {
                var _e58 = n.get(r.instanceColor);

                if (void 0 === _e58) continue;
                var _s18 = _e58.buffer,
                    _a16 = _e58.type;
                f(_i59, 1), t.bindBuffer(34962, _s18), t.vertexAttribPointer(_i59, 3, _a16, !1, 12, 0);
              } else if (void 0 !== h) {
                var _n71 = h[_e55];
                if (void 0 !== _n71) switch (_n71.length) {
                  case 2:
                    t.vertexAttrib2fv(_i59, _n71);
                    break;

                  case 3:
                    t.vertexAttrib3fv(_i59, _n71);
                    break;

                  case 4:
                    t.vertexAttrib4fv(_i59, _n71);
                    break;

                  default:
                    t.vertexAttrib1fv(_i59, _n71);
                }
              }
            }
          }

          g();
        }(r, l, u, y), null !== x && t.bindBuffer(34963, n.get(x).buffer));
      },
      reset: y,
      resetDefaultState: x,
      dispose: function dispose() {
        y();

        for (var _t65 in o) {
          var _e59 = o[_t65];

          for (var _t66 in _e59) {
            var _n72 = _e59[_t66];

            for (var _t67 in _n72) {
              u(_n72[_t67].object), delete _n72[_t67];
            }

            delete _e59[_t66];
          }

          delete o[_t65];
        }
      },
      releaseStatesOfGeometry: function releaseStatesOfGeometry(t) {
        if (void 0 === o[t.id]) return;
        var e = o[t.id];

        for (var _t68 in e) {
          var _n73 = e[_t68];

          for (var _t69 in _n73) {
            u(_n73[_t69].object), delete _n73[_t69];
          }

          delete e[_t68];
        }

        delete o[t.id];
      },
      releaseStatesOfProgram: function releaseStatesOfProgram(t) {
        for (var _e60 in o) {
          var _n74 = o[_e60];
          if (void 0 === _n74[t.id]) continue;
          var _i60 = _n74[t.id];

          for (var _t70 in _i60) {
            u(_i60[_t70].object), delete _i60[_t70];
          }

          delete _n74[t.id];
        }
      },
      initAttributes: p,
      enableAttribute: m,
      disableUnusedAttributes: g
    };
  }

  function fi(t, e, n, i) {
    var r = i.isWebGL2;
    var s;
    this.setMode = function (t) {
      s = t;
    }, this.render = function (e, i) {
      t.drawArrays(s, e, i), n.update(i, s, 1);
    }, this.renderInstances = function (i, a, o) {
      if (0 === o) return;
      var l, c;
      if (r) l = t, c = "drawArraysInstanced";else if (l = e.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      l[c](s, i, a, o), n.update(a, s, o);
    };
  }

  function gi(t, e, n) {
    var i;

    function r(e) {
      if ("highp" === e) {
        if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
        e = "mediump";
      }

      return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
    }

    var s = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
    var a = void 0 !== n.precision ? n.precision : "highp";
    var o = r(a);
    o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
    var l = s || e.has("WEBGL_draw_buffers"),
        c = !0 === n.logarithmicDepthBuffer,
        h = t.getParameter(34930),
        u = t.getParameter(35660),
        d = t.getParameter(3379),
        p = t.getParameter(34076),
        m = t.getParameter(34921),
        f = t.getParameter(36347),
        g = t.getParameter(36348),
        v = t.getParameter(36349),
        y = u > 0,
        x = s || e.has("OES_texture_float");
    return {
      isWebGL2: s,
      drawBuffers: l,
      getMaxAnisotropy: function getMaxAnisotropy() {
        if (void 0 !== i) return i;

        if (!0 === e.has("EXT_texture_filter_anisotropic")) {
          var _n75 = e.get("EXT_texture_filter_anisotropic");

          i = t.getParameter(_n75.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        } else i = 0;

        return i;
      },
      getMaxPrecision: r,
      precision: a,
      logarithmicDepthBuffer: c,
      maxTextures: h,
      maxVertexTextures: u,
      maxTextureSize: d,
      maxCubemapSize: p,
      maxAttributes: m,
      maxVertexUniforms: f,
      maxVaryings: g,
      maxFragmentUniforms: v,
      vertexTextures: y,
      floatFragmentTextures: x,
      floatVertexTextures: y && x,
      maxSamples: s ? t.getParameter(36183) : 0
    };
  }

  function vi(t) {
    var e = this;
    var n = null,
        i = 0,
        r = !1,
        s = !1;
    var a = new Be(),
        o = new yt(),
        l = {
      value: null,
      needsUpdate: !1
    };

    function c() {
      l.value !== n && (l.value = n, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0;
    }

    function h(t, n, i, r) {
      var s = null !== t ? t.length : 0;
      var c = null;

      if (0 !== s) {
        if (c = l.value, !0 !== r || null === c) {
          var _e61 = i + 4 * s,
              _r46 = n.matrixWorldInverse;

          o.getNormalMatrix(_r46), (null === c || c.length < _e61) && (c = new Float32Array(_e61));

          for (var _e62 = 0, _n76 = i; _e62 !== s; ++_e62, _n76 += 4) {
            a.copy(t[_e62]).applyMatrix4(_r46, o), a.normal.toArray(c, _n76), c[_n76 + 3] = a.constant;
          }
        }

        l.value = c, l.needsUpdate = !0;
      }

      return e.numPlanes = s, e.numIntersection = 0, c;
    }

    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (t, e, s) {
      var a = 0 !== t.length || e || 0 !== i || r;
      return r = e, n = h(t, s, 0), i = t.length, a;
    }, this.beginShadows = function () {
      s = !0, h(null);
    }, this.endShadows = function () {
      s = !1, c();
    }, this.setState = function (e, a, o) {
      var u = e.clippingPlanes,
          d = e.clipIntersection,
          p = e.clipShadows,
          m = t.get(e);
      if (!r || null === u || 0 === u.length || s && !p) s ? h(null) : c();else {
        var _t71 = s ? 0 : i,
            _e63 = 4 * _t71;

        var _r47 = m.clippingState || null;

        l.value = _r47, _r47 = h(u, a, _e63, o);

        for (var _t72 = 0; _t72 !== _e63; ++_t72) {
          _r47[_t72] = n[_t72];
        }

        m.clippingState = _r47, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += _t71;
      }
    };
  }

  function yi(t) {
    var e = new WeakMap();

    function n(t, e) {
      return e === a ? t.mapping = r : e === o && (t.mapping = s), t;
    }

    function i(t) {
      var n = t.target;
      n.removeEventListener("dispose", i);
      var r = e.get(n);
      void 0 !== r && (e.delete(n), r.dispose());
    }

    return {
      get: function get(r) {
        if (r && r.isTexture) {
          var _s19 = r.mapping;

          if (_s19 === a || _s19 === o) {
            if (e.has(r)) {
              return n(e.get(r).texture, r.mapping);
            }

            {
              var _s20 = r.image;

              if (_s20 && _s20.height > 0) {
                var _a17 = t.getRenderTarget(),
                    _o11 = new ii(_s20.height / 2);

                return _o11.fromEquirectangularTexture(t, r), e.set(r, _o11), t.setRenderTarget(_a17), r.addEventListener("dispose", i), n(_o11.texture, r.mapping);
              }

              return null;
            }
          }
        }

        return r;
      },
      dispose: function dispose() {
        e = new WeakMap();
      }
    };
  }

  function xi(t) {
    var e = {};

    function n(n) {
      if (void 0 !== e[n]) return e[n];
      var i;

      switch (n) {
        case "WEBGL_depth_texture":
          i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
          break;

        case "EXT_texture_filter_anisotropic":
          i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;

        case "WEBGL_compressed_texture_s3tc":
          i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;

        case "WEBGL_compressed_texture_pvrtc":
          i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;

        default:
          i = t.getExtension(n);
      }

      return e[n] = i, i;
    }

    return {
      has: function has(t) {
        return null !== n(t);
      },
      init: function init(t) {
        t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float");
      },
      get: function get(t) {
        var e = n(t);
        return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e;
      }
    };
  }

  function _i(t, e, n, i) {
    var r = {},
        s = new WeakMap();

    function a(t) {
      var o = t.target;
      null !== o.index && e.remove(o.index);

      for (var _t73 in o.attributes) {
        e.remove(o.attributes[_t73]);
      }

      o.removeEventListener("dispose", a), delete r[o.id];
      var l = s.get(o);
      l && (e.remove(l), s.delete(o)), i.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, n.memory.geometries--;
    }

    function o(t) {
      var n = [],
          i = t.index,
          r = t.attributes.position;
      var a = 0;

      if (null !== i) {
        var _t74 = i.array;
        a = i.version;

        for (var _e64 = 0, _i61 = _t74.length; _e64 < _i61; _e64 += 3) {
          var _i62 = _t74[_e64 + 0],
              _r48 = _t74[_e64 + 1],
              _s21 = _t74[_e64 + 2];
          n.push(_i62, _r48, _r48, _s21, _s21, _i62);
        }
      } else {
        var _t75 = r.array;
        a = r.version;

        for (var _e65 = 0, _i63 = _t75.length / 3 - 1; _e65 < _i63; _e65 += 3) {
          var _t76 = _e65 + 0,
              _i64 = _e65 + 1,
              _r49 = _e65 + 2;

          n.push(_t76, _i64, _i64, _r49, _r49, _t76);
        }
      }

      var o = new (vn(n) > 65535 ? pn : un)(n, 1);
      o.version = a;
      var l = s.get(t);
      l && e.remove(l), s.set(t, o);
    }

    return {
      get: function get(t, e) {
        return !0 === r[e.id] || (e.addEventListener("dispose", a), r[e.id] = !0, n.memory.geometries++), e;
      },
      update: function update(t) {
        var n = t.attributes;

        for (var _t77 in n) {
          e.update(n[_t77], 34962);
        }

        var i = t.morphAttributes;

        for (var _t78 in i) {
          var _n77 = i[_t78];

          for (var _t79 = 0, _i65 = _n77.length; _t79 < _i65; _t79++) {
            e.update(_n77[_t79], 34962);
          }
        }
      },
      getWireframeAttribute: function getWireframeAttribute(t) {
        var e = s.get(t);

        if (e) {
          var _n78 = t.index;
          null !== _n78 && e.version < _n78.version && o(t);
        } else o(t);

        return s.get(t);
      }
    };
  }

  function wi(t, e, n, i) {
    var r = i.isWebGL2;
    var s, a, o;
    this.setMode = function (t) {
      s = t;
    }, this.setIndex = function (t) {
      a = t.type, o = t.bytesPerElement;
    }, this.render = function (e, i) {
      t.drawElements(s, i, a, e * o), n.update(i, s, 1);
    }, this.renderInstances = function (i, l, c) {
      if (0 === c) return;
      var h, u;
      if (r) h = t, u = "drawElementsInstanced";else if (h = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      h[u](s, l, a, i * o, c), n.update(l, s, c);
    };
  }

  function bi(t) {
    var e = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
    return {
      memory: {
        geometries: 0,
        textures: 0
      },
      render: e,
      programs: null,
      autoReset: !0,
      reset: function reset() {
        e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
      },
      update: function update(t, n, i) {
        switch (e.calls++, n) {
          case 4:
            e.triangles += i * (t / 3);
            break;

          case 1:
            e.lines += i * (t / 2);
            break;

          case 3:
            e.lines += i * (t - 1);
            break;

          case 2:
            e.lines += i * t;
            break;

          case 0:
            e.points += i * t;
            break;

          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", n);
        }
      }
    };
  }

  function Mi(t, e) {
    return t[0] - e[0];
  }

  function Si(t, e) {
    return Math.abs(e[1]) - Math.abs(t[1]);
  }

  function Ti(t) {
    var e = {},
        n = new Float32Array(8),
        i = [];

    for (var _t80 = 0; _t80 < 8; _t80++) {
      i[_t80] = [_t80, 0];
    }

    return {
      update: function update(r, s, a, o) {
        var l = r.morphTargetInfluences,
            c = void 0 === l ? 0 : l.length;
        var h = e[s.id];

        if (void 0 === h) {
          h = [];

          for (var _t81 = 0; _t81 < c; _t81++) {
            h[_t81] = [_t81, 0];
          }

          e[s.id] = h;
        }

        for (var _t82 = 0; _t82 < c; _t82++) {
          var _e66 = h[_t82];
          _e66[0] = _t82, _e66[1] = l[_t82];
        }

        h.sort(Si);

        for (var _t83 = 0; _t83 < 8; _t83++) {
          _t83 < c && h[_t83][1] ? (i[_t83][0] = h[_t83][0], i[_t83][1] = h[_t83][1]) : (i[_t83][0] = Number.MAX_SAFE_INTEGER, i[_t83][1] = 0);
        }

        i.sort(Mi);
        var u = a.morphTargets && s.morphAttributes.position,
            d = a.morphNormals && s.morphAttributes.normal;
        var p = 0;

        for (var _t84 = 0; _t84 < 8; _t84++) {
          var _e67 = i[_t84],
              _r50 = _e67[0],
              _a18 = _e67[1];
          _r50 !== Number.MAX_SAFE_INTEGER && _a18 ? (u && s.getAttribute("morphTarget" + _t84) !== u[_r50] && s.setAttribute("morphTarget" + _t84, u[_r50]), d && s.getAttribute("morphNormal" + _t84) !== d[_r50] && s.setAttribute("morphNormal" + _t84, d[_r50]), n[_t84] = _a18, p += _a18) : (u && !0 === s.hasAttribute("morphTarget" + _t84) && s.deleteAttribute("morphTarget" + _t84), d && !0 === s.hasAttribute("morphNormal" + _t84) && s.deleteAttribute("morphNormal" + _t84), n[_t84] = 0);
        }

        var m = s.morphTargetsRelative ? 1 : 1 - p;
        o.getUniforms().setValue(t, "morphTargetBaseInfluence", m), o.getUniforms().setValue(t, "morphTargetInfluences", n);
      }
    };
  }

  function Ei(t, e, n, i) {
    var r = new WeakMap();

    function s(t) {
      var e = t.target;
      e.removeEventListener("dispose", s), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor);
    }

    return {
      update: function update(t) {
        var a = i.render.frame,
            o = t.geometry,
            l = e.get(t, o);
        return r.get(l) !== a && (e.update(l), r.set(l, a)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s), n.update(t.instanceMatrix, 34962), null !== t.instanceColor && n.update(t.instanceColor, 34962)), l;
      },
      dispose: function dispose() {
        r = new WeakMap();
      }
    };
  }

  di.physical = {
    uniforms: Zn([di.standard.uniforms, {
      clearcoat: {
        value: 0
      },
      clearcoatMap: {
        value: null
      },
      clearcoatRoughness: {
        value: 0
      },
      clearcoatRoughnessMap: {
        value: null
      },
      clearcoatNormalScale: {
        value: new vt(1, 1)
      },
      clearcoatNormalMap: {
        value: null
      },
      sheen: {
        value: new en(0)
      },
      transmission: {
        value: 0
      },
      transmissionMap: {
        value: null
      },
      transmissionSamplerSize: {
        value: new vt()
      },
      transmissionSamplerMap: {
        value: null
      },
      thickness: {
        value: 0
      },
      thicknessMap: {
        value: null
      },
      attenuationDistance: {
        value: 0
      },
      attenuationColor: {
        value: new en(0)
      }
    }]),
    vertexShader: hi.meshphysical_vert,
    fragmentShader: hi.meshphysical_frag
  };

  var Ai = /*#__PURE__*/function (_bt2) {
    _inherits(Ai, _bt2);

    var _super28 = _createSuper(Ai);

    function Ai() {
      var _this18;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, Ai);

      _this18 = _super28.call(this, null), _this18.image = {
        data: t,
        width: e,
        height: n,
        depth: i
      }, _this18.magFilter = p, _this18.minFilter = p, _this18.wrapR = u, _this18.generateMipmaps = !1, _this18.flipY = !1, _this18.unpackAlignment = 1, _this18.needsUpdate = !0;
      return _this18;
    }

    return Ai;
  }(bt);

  Ai.prototype.isDataTexture2DArray = !0;

  var Li = /*#__PURE__*/function (_bt3) {
    _inherits(Li, _bt3);

    var _super29 = _createSuper(Li);

    function Li() {
      var _this19;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, Li);

      _this19 = _super29.call(this, null), _this19.image = {
        data: t,
        width: e,
        height: n,
        depth: i
      }, _this19.magFilter = p, _this19.minFilter = p, _this19.wrapR = u, _this19.generateMipmaps = !1, _this19.flipY = !1, _this19.unpackAlignment = 1, _this19.needsUpdate = !0;
      return _this19;
    }

    return Li;
  }(bt);

  Li.prototype.isDataTexture3D = !0;
  var Ri = new bt(),
      Ci = new Ai(),
      Pi = new Li(),
      Di = new ni(),
      Ii = [],
      Ni = [],
      Bi = new Float32Array(16),
      zi = new Float32Array(9),
      Fi = new Float32Array(4);

  function Oi(t, e, n) {
    var i = t[0];
    if (i <= 0 || i > 0) return t;
    var r = e * n;
    var s = Ii[r];

    if (void 0 === s && (s = new Float32Array(r), Ii[r] = s), 0 !== e) {
      i.toArray(s, 0);

      for (var _i66 = 1, _r51 = 0; _i66 !== e; ++_i66) {
        _r51 += n, t[_i66].toArray(s, _r51);
      }
    }

    return s;
  }

  function Hi(t, e) {
    if (t.length !== e.length) return !1;

    for (var _n79 = 0, _i67 = t.length; _n79 < _i67; _n79++) {
      if (t[_n79] !== e[_n79]) return !1;
    }

    return !0;
  }

  function Gi(t, e) {
    for (var _n80 = 0, _i68 = e.length; _n80 < _i68; _n80++) {
      t[_n80] = e[_n80];
    }
  }

  function Ui(t, e) {
    var n = Ni[e];
    void 0 === n && (n = new Int32Array(e), Ni[e] = n);

    for (var _i69 = 0; _i69 !== e; ++_i69) {
      n[_i69] = t.allocateTextureUnit();
    }

    return n;
  }

  function ki(t, e) {
    var n = this.cache;
    n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e);
  }

  function Vi(t, e) {
    var n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);else {
      if (Hi(n, e)) return;
      t.uniform2fv(this.addr, e), Gi(n, e);
    }
  }

  function Wi(t, e) {
    var n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);else {
      if (Hi(n, e)) return;
      t.uniform3fv(this.addr, e), Gi(n, e);
    }
  }

  function ji(t, e) {
    var n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);else {
      if (Hi(n, e)) return;
      t.uniform4fv(this.addr, e), Gi(n, e);
    }
  }

  function qi(t, e) {
    var n = this.cache,
        i = e.elements;

    if (void 0 === i) {
      if (Hi(n, e)) return;
      t.uniformMatrix2fv(this.addr, !1, e), Gi(n, e);
    } else {
      if (Hi(n, i)) return;
      Fi.set(i), t.uniformMatrix2fv(this.addr, !1, Fi), Gi(n, i);
    }
  }

  function Xi(t, e) {
    var n = this.cache,
        i = e.elements;

    if (void 0 === i) {
      if (Hi(n, e)) return;
      t.uniformMatrix3fv(this.addr, !1, e), Gi(n, e);
    } else {
      if (Hi(n, i)) return;
      zi.set(i), t.uniformMatrix3fv(this.addr, !1, zi), Gi(n, i);
    }
  }

  function Yi(t, e) {
    var n = this.cache,
        i = e.elements;

    if (void 0 === i) {
      if (Hi(n, e)) return;
      t.uniformMatrix4fv(this.addr, !1, e), Gi(n, e);
    } else {
      if (Hi(n, i)) return;
      Bi.set(i), t.uniformMatrix4fv(this.addr, !1, Bi), Gi(n, i);
    }
  }

  function Zi(t, e) {
    var n = this.cache;
    n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e);
  }

  function Ji(t, e) {
    var n = this.cache;
    Hi(n, e) || (t.uniform2iv(this.addr, e), Gi(n, e));
  }

  function Qi(t, e) {
    var n = this.cache;
    Hi(n, e) || (t.uniform3iv(this.addr, e), Gi(n, e));
  }

  function Ki(t, e) {
    var n = this.cache;
    Hi(n, e) || (t.uniform4iv(this.addr, e), Gi(n, e));
  }

  function $i(t, e) {
    var n = this.cache;
    n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e);
  }

  function tr(t, e) {
    var n = this.cache;
    Hi(n, e) || (t.uniform2uiv(this.addr, e), Gi(n, e));
  }

  function er(t, e) {
    var n = this.cache;
    Hi(n, e) || (t.uniform3uiv(this.addr, e), Gi(n, e));
  }

  function nr(t, e) {
    var n = this.cache;
    Hi(n, e) || (t.uniform4uiv(this.addr, e), Gi(n, e));
  }

  function ir(t, e, n) {
    var i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTexture2D(e || Ri, r);
  }

  function rr(t, e, n) {
    var i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || Pi, r);
  }

  function sr(t, e, n) {
    var i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTextureCube(e || Di, r);
  }

  function ar(t, e, n) {
    var i = this.cache,
        r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || Ci, r);
  }

  function or(t, e) {
    t.uniform1fv(this.addr, e);
  }

  function lr(t, e) {
    var n = Oi(e, this.size, 2);
    t.uniform2fv(this.addr, n);
  }

  function cr(t, e) {
    var n = Oi(e, this.size, 3);
    t.uniform3fv(this.addr, n);
  }

  function hr(t, e) {
    var n = Oi(e, this.size, 4);
    t.uniform4fv(this.addr, n);
  }

  function ur(t, e) {
    var n = Oi(e, this.size, 4);
    t.uniformMatrix2fv(this.addr, !1, n);
  }

  function dr(t, e) {
    var n = Oi(e, this.size, 9);
    t.uniformMatrix3fv(this.addr, !1, n);
  }

  function pr(t, e) {
    var n = Oi(e, this.size, 16);
    t.uniformMatrix4fv(this.addr, !1, n);
  }

  function mr(t, e) {
    t.uniform1iv(this.addr, e);
  }

  function fr(t, e) {
    t.uniform2iv(this.addr, e);
  }

  function gr(t, e) {
    t.uniform3iv(this.addr, e);
  }

  function vr(t, e) {
    t.uniform4iv(this.addr, e);
  }

  function yr(t, e) {
    t.uniform1uiv(this.addr, e);
  }

  function xr(t, e) {
    t.uniform2uiv(this.addr, e);
  }

  function _r(t, e) {
    t.uniform3uiv(this.addr, e);
  }

  function wr(t, e) {
    t.uniform4uiv(this.addr, e);
  }

  function br(t, e, n) {
    var i = e.length,
        r = Ui(n, i);
    t.uniform1iv(this.addr, r);

    for (var _t85 = 0; _t85 !== i; ++_t85) {
      n.safeSetTexture2D(e[_t85] || Ri, r[_t85]);
    }
  }

  function Mr(t, e, n) {
    var i = e.length,
        r = Ui(n, i);
    t.uniform1iv(this.addr, r);

    for (var _t86 = 0; _t86 !== i; ++_t86) {
      n.safeSetTextureCube(e[_t86] || Di, r[_t86]);
    }
  }

  function Sr(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.setValue = function (t) {
      switch (t) {
        case 5126:
          return ki;

        case 35664:
          return Vi;

        case 35665:
          return Wi;

        case 35666:
          return ji;

        case 35674:
          return qi;

        case 35675:
          return Xi;

        case 35676:
          return Yi;

        case 5124:
        case 35670:
          return Zi;

        case 35667:
        case 35671:
          return Ji;

        case 35668:
        case 35672:
          return Qi;

        case 35669:
        case 35673:
          return Ki;

        case 5125:
          return $i;

        case 36294:
          return tr;

        case 36295:
          return er;

        case 36296:
          return nr;

        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return ir;

        case 35679:
        case 36299:
        case 36307:
          return rr;

        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return sr;

        case 36289:
        case 36303:
        case 36311:
        case 36292:
          return ar;
      }
    }(e.type);
  }

  function Tr(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function (t) {
      switch (t) {
        case 5126:
          return or;

        case 35664:
          return lr;

        case 35665:
          return cr;

        case 35666:
          return hr;

        case 35674:
          return ur;

        case 35675:
          return dr;

        case 35676:
          return pr;

        case 5124:
        case 35670:
          return mr;

        case 35667:
        case 35671:
          return fr;

        case 35668:
        case 35672:
          return gr;

        case 35669:
        case 35673:
          return vr;

        case 5125:
          return yr;

        case 36294:
          return xr;

        case 36295:
          return _r;

        case 36296:
          return wr;

        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return br;

        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return Mr;
      }
    }(e.type);
  }

  function Er(t) {
    this.id = t, this.seq = [], this.map = {};
  }

  Tr.prototype.updateCache = function (t) {
    var e = this.cache;
    t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), Gi(e, t);
  }, Er.prototype.setValue = function (t, e, n) {
    var i = this.seq;

    for (var _r52 = 0, _s22 = i.length; _r52 !== _s22; ++_r52) {
      var _s23 = i[_r52];

      _s23.setValue(t, e[_s23.id], n);
    }
  };
  var Ar = /(\w+)(\])?(\[|\.)?/g;

  function Lr(t, e) {
    t.seq.push(e), t.map[e.id] = e;
  }

  function Rr(t, e, n) {
    var i = t.name,
        r = i.length;

    for (Ar.lastIndex = 0;;) {
      var _s24 = Ar.exec(i),
          _a19 = Ar.lastIndex;

      var _o12 = _s24[1];

      var _l12 = "]" === _s24[2],
          _c9 = _s24[3];

      if (_l12 && (_o12 |= 0), void 0 === _c9 || "[" === _c9 && _a19 + 2 === r) {
        Lr(n, void 0 === _c9 ? new Sr(_o12, t, e) : new Tr(_o12, t, e));
        break;
      }

      {
        var _t87 = n.map[_o12];
        void 0 === _t87 && (_t87 = new Er(_o12), Lr(n, _t87)), n = _t87;
      }
    }
  }

  function Cr(t, e) {
    this.seq = [], this.map = {};
    var n = t.getProgramParameter(e, 35718);

    for (var _i70 = 0; _i70 < n; ++_i70) {
      var _n81 = t.getActiveUniform(e, _i70);

      Rr(_n81, t.getUniformLocation(e, _n81.name), this);
    }
  }

  function Pr(t, e, n) {
    var i = t.createShader(e);
    return t.shaderSource(i, n), t.compileShader(i), i;
  }

  Cr.prototype.setValue = function (t, e, n, i) {
    var r = this.map[e];
    void 0 !== r && r.setValue(t, n, i);
  }, Cr.prototype.setOptional = function (t, e, n) {
    var i = e[n];
    void 0 !== i && this.setValue(t, n, i);
  }, Cr.upload = function (t, e, n, i) {
    for (var _r53 = 0, _s25 = e.length; _r53 !== _s25; ++_r53) {
      var _s26 = e[_r53],
          _a20 = n[_s26.id];
      !1 !== _a20.needsUpdate && _s26.setValue(t, _a20.value, i);
    }
  }, Cr.seqWithValue = function (t, e) {
    var n = [];

    for (var _i71 = 0, _r54 = t.length; _i71 !== _r54; ++_i71) {
      var _r55 = t[_i71];
      _r55.id in e && n.push(_r55);
    }

    return n;
  };
  var Dr = 0;

  function Ir(t) {
    switch (t) {
      case X:
        return ["Linear", "( value )"];

      case Y:
        return ["sRGB", "( value )"];

      case J:
        return ["RGBE", "( value )"];

      case Q:
        return ["RGBM", "( value, 7.0 )"];

      case K:
        return ["RGBM", "( value, 16.0 )"];

      case $:
        return ["RGBD", "( value, 256.0 )"];

      case Z:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];

      case 3003:
        return ["LogLuv", "( value )"];

      default:
        return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"];
    }
  }

  function Nr(t, e, n) {
    var i = t.getShaderParameter(e, 35713),
        r = t.getShaderInfoLog(e).trim();
    if (i && "" === r) return "";
    return "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function (t) {
      var e = t.split("\n");

      for (var _t88 = 0; _t88 < e.length; _t88++) {
        e[_t88] = _t88 + 1 + ": " + e[_t88];
      }

      return e.join("\n");
    }(t.getShaderSource(e));
  }

  function Br(t, e) {
    var n = Ir(e);
    return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }";
  }

  function zr(t, e) {
    var n = Ir(e);
    return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }";
  }

  function Fr(t, e) {
    var n;

    switch (e) {
      case 1:
        n = "Linear";
        break;

      case 2:
        n = "Reinhard";
        break;

      case 3:
        n = "OptimizedCineon";
        break;

      case 4:
        n = "ACESFilmic";
        break;

      case 5:
        n = "Custom";
        break;

      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear";
    }

    return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
  }

  function Or(t) {
    return "" !== t;
  }

  function Hr(t, e) {
    return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }

  function Gr(t, e) {
    return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
  }

  var Ur = /^[ \t]*#include +<([\w\d./]+)>/gm;

  function kr(t) {
    return t.replace(Ur, Vr);
  }

  function Vr(t, e) {
    var n = hi[e];
    if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
    return kr(n);
  }

  var Wr = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
      jr = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

  function qr(t) {
    return t.replace(jr, Yr).replace(Wr, Xr);
  }

  function Xr(t, e, n, i) {
    return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Yr(t, e, n, i);
  }

  function Yr(t, e, n, i) {
    var r = "";

    for (var _t89 = parseInt(e); _t89 < parseInt(n); _t89++) {
      r += i.replace(/\[\s*i\s*\]/g, "[ " + _t89 + " ]").replace(/UNROLLED_LOOP_INDEX/g, _t89);
    }

    return r;
  }

  function Zr(t) {
    var e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
    return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e;
  }

  function Jr(t, e, n, i) {
    var a = t.getContext(),
        o = n.defines;
    var h = n.vertexShader,
        u = n.fragmentShader;

    var d = function (t) {
      var e = "SHADOWMAP_TYPE_BASIC";
      return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e;
    }(n),
        p = function (t) {
      var e = "ENVMAP_TYPE_CUBE";
      if (t.envMap) switch (t.envMapMode) {
        case r:
        case s:
          e = "ENVMAP_TYPE_CUBE";
          break;

        case l:
        case c:
          e = "ENVMAP_TYPE_CUBE_UV";
      }
      return e;
    }(n),
        m = function (t) {
      var e = "ENVMAP_MODE_REFLECTION";
      if (t.envMap) switch (t.envMapMode) {
        case s:
        case c:
          e = "ENVMAP_MODE_REFRACTION";
      }
      return e;
    }(n),
        f = function (t) {
      var e = "ENVMAP_BLENDING_NONE";
      if (t.envMap) switch (t.combine) {
        case 0:
          e = "ENVMAP_BLENDING_MULTIPLY";
          break;

        case 1:
          e = "ENVMAP_BLENDING_MIX";
          break;

        case 2:
          e = "ENVMAP_BLENDING_ADD";
      }
      return e;
    }(n),
        g = t.gammaFactor > 0 ? t.gammaFactor : 1,
        v = n.isWebGL2 ? "" : function (t) {
      return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap || t.transmission > 0) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Or).join("\n");
    }(n),
        y = function (t) {
      var e = [];

      for (var _n82 in t) {
        var _i72 = t[_n82];
        !1 !== _i72 && e.push("#define " + _n82 + " " + _i72);
      }

      return e.join("\n");
    }(o),
        x = a.createProgram();

    var _,
        w,
        b = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";

    n.isRawShaderMaterial ? (_ = [y].filter(Or).join("\n"), _.length > 0 && (_ += "\n"), w = [v, y].filter(Or).join("\n"), w.length > 0 && (w += "\n")) : (_ = [Zr(n), "#define SHADER_NAME " + n.shaderName, y, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + g, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + m : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + d : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Or).join("\n"), w = [v, Zr(n), "#define SHADER_NAME " + n.shaderName, y, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + g, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + p : "", n.envMap ? "#define " + m : "", n.envMap ? "#define " + f : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + d : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? hi.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? Fr("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", hi.encodings_pars_fragment, n.map ? Br("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? Br("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? Br("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? Br("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMap ? Br("lightMapTexelToLinear", n.lightMapEncoding) : "", zr("linearToOutputTexel", n.outputEncoding), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Or).join("\n")), h = kr(h), h = Hr(h, n), h = Gr(h, n), u = kr(u), u = Hr(u, n), u = Gr(u, n), h = qr(h), u = qr(u), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (b = "#version 300 es\n", _ = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + _, w = ["#define varying in", n.glslVersion === it ? "" : "out highp vec4 pc_fragColor;", n.glslVersion === it ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + w);
    var M = b + w + u,
        S = Pr(a, 35633, b + _ + h),
        T = Pr(a, 35632, M);

    if (a.attachShader(x, S), a.attachShader(x, T), void 0 !== n.index0AttributeName ? a.bindAttribLocation(x, 0, n.index0AttributeName) : !0 === n.morphTargets && a.bindAttribLocation(x, 0, "position"), a.linkProgram(x), t.debug.checkShaderErrors) {
      var _t90 = a.getProgramInfoLog(x).trim(),
          _e68 = a.getShaderInfoLog(S).trim(),
          _n83 = a.getShaderInfoLog(T).trim();

      var _i73 = !0,
          _r56 = !0;

      if (!1 === a.getProgramParameter(x, 35714)) {
        _i73 = !1;

        var _e69 = Nr(a, S, "vertex"),
            _n84 = Nr(a, T, "fragment");

        console.error("THREE.WebGLProgram: shader error: ", a.getError(), "35715", a.getProgramParameter(x, 35715), "gl.getProgramInfoLog", _t90, _e69, _n84);
      } else "" !== _t90 ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", _t90) : "" !== _e68 && "" !== _n83 || (_r56 = !1);

      _r56 && (this.diagnostics = {
        runnable: _i73,
        programLog: _t90,
        vertexShader: {
          log: _e68,
          prefix: _
        },
        fragmentShader: {
          log: _n83,
          prefix: w
        }
      });
    }

    var E, A;
    return a.deleteShader(S), a.deleteShader(T), this.getUniforms = function () {
      return void 0 === E && (E = new Cr(a, x)), E;
    }, this.getAttributes = function () {
      return void 0 === A && (A = function (t, e) {
        var n = {},
            i = t.getProgramParameter(e, 35721);

        for (var _r57 = 0; _r57 < i; _r57++) {
          var _i74 = t.getActiveAttrib(e, _r57).name;
          n[_i74] = t.getAttribLocation(e, _i74);
        }

        return n;
      }(a, x)), A;
    }, this.destroy = function () {
      i.releaseStatesOfProgram(this), a.deleteProgram(x), this.program = void 0;
    }, this.name = n.shaderName, this.id = Dr++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = S, this.fragmentShader = T, this;
  }

  function Qr(t, e, n, i, r, s) {
    var a = [],
        o = i.isWebGL2,
        h = i.logarithmicDepthBuffer,
        u = i.floatVertexTextures,
        d = i.maxVertexUniforms,
        p = i.vertexTextures;
    var m = i.precision;
    var f = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite"
    },
        g = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexAlphas", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmission", "transmissionMap", "thicknessMap"];

    function v(t) {
      var e;
      return t && t.isTexture ? e = t.encoding : t && t.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), e = t.texture.encoding) : e = X, e;
    }

    return {
      getParameters: function getParameters(r, a, g, y, x) {
        var _ = y.fog,
            w = r.isMeshStandardMaterial ? y.environment : null,
            b = e.get(r.envMap || w),
            M = f[r.type],
            S = x.isSkinnedMesh ? function (t) {
          var e = t.skeleton.bones;
          if (u) return 1024;
          {
            var _t91 = d,
                _n85 = Math.floor((_t91 - 20) / 4),
                _i75 = Math.min(_n85, e.length);

            return _i75 < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + _i75 + "."), 0) : _i75;
          }
        }(x) : 0;
        var T, E;

        if (null !== r.precision && (m = i.getMaxPrecision(r.precision), m !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", m, "instead.")), M) {
          var _t92 = di[M];
          T = _t92.vertexShader, E = _t92.fragmentShader;
        } else T = r.vertexShader, E = r.fragmentShader;

        var A = t.getRenderTarget();
        return {
          isWebGL2: o,
          shaderID: M,
          shaderName: r.type,
          vertexShader: T,
          fragmentShader: E,
          defines: r.defines,
          isRawShaderMaterial: !0 === r.isRawShaderMaterial,
          glslVersion: r.glslVersion,
          precision: m,
          instancing: !0 === x.isInstancedMesh,
          instancingColor: !0 === x.isInstancedMesh && null !== x.instanceColor,
          supportsVertexTextures: p,
          outputEncoding: null !== A ? v(A.texture) : t.outputEncoding,
          map: !!r.map,
          mapEncoding: v(r.map),
          matcap: !!r.matcap,
          matcapEncoding: v(r.matcap),
          envMap: !!b,
          envMapMode: b && b.mapping,
          envMapEncoding: v(b),
          envMapCubeUV: !!b && (b.mapping === l || b.mapping === c),
          lightMap: !!r.lightMap,
          lightMapEncoding: v(r.lightMap),
          aoMap: !!r.aoMap,
          emissiveMap: !!r.emissiveMap,
          emissiveMapEncoding: v(r.emissiveMap),
          bumpMap: !!r.bumpMap,
          normalMap: !!r.normalMap,
          objectSpaceNormalMap: 1 === r.normalMapType,
          tangentSpaceNormalMap: 0 === r.normalMapType,
          clearcoatMap: !!r.clearcoatMap,
          clearcoatRoughnessMap: !!r.clearcoatRoughnessMap,
          clearcoatNormalMap: !!r.clearcoatNormalMap,
          displacementMap: !!r.displacementMap,
          roughnessMap: !!r.roughnessMap,
          metalnessMap: !!r.metalnessMap,
          specularMap: !!r.specularMap,
          alphaMap: !!r.alphaMap,
          gradientMap: !!r.gradientMap,
          sheen: !!r.sheen,
          transmission: !!r.transmission,
          transmissionMap: !!r.transmissionMap,
          thicknessMap: !!r.thicknessMap,
          combine: r.combine,
          vertexTangents: r.normalMap && r.vertexTangents,
          vertexColors: r.vertexColors,
          vertexAlphas: !0 === r.vertexColors && x.geometry && x.geometry.attributes.color && 4 === x.geometry.attributes.color.itemSize,
          vertexUvs: !!(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatMap || r.clearcoatRoughnessMap || r.clearcoatNormalMap || r.displacementMap || r.transmission || r.transmissionMap || r.thicknessMap),
          uvsVertexOnly: !(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatNormalMap || r.transmission || r.transmissionMap || r.thicknessMap || !r.displacementMap),
          fog: !!_,
          useFog: r.fog,
          fogExp2: _ && _.isFogExp2,
          flatShading: !!r.flatShading,
          sizeAttenuation: r.sizeAttenuation,
          logarithmicDepthBuffer: h,
          skinning: !0 === x.isSkinnedMesh && S > 0,
          maxBones: S,
          useVertexTexture: u,
          morphTargets: r.morphTargets,
          morphNormals: r.morphNormals,
          numDirLights: a.directional.length,
          numPointLights: a.point.length,
          numSpotLights: a.spot.length,
          numRectAreaLights: a.rectArea.length,
          numHemiLights: a.hemi.length,
          numDirLightShadows: a.directionalShadowMap.length,
          numPointLightShadows: a.pointShadowMap.length,
          numSpotLightShadows: a.spotShadowMap.length,
          numClippingPlanes: s.numPlanes,
          numClipIntersection: s.numIntersection,
          dithering: r.dithering,
          shadowMapEnabled: t.shadowMap.enabled && g.length > 0,
          shadowMapType: t.shadowMap.type,
          toneMapping: r.toneMapped ? t.toneMapping : 0,
          physicallyCorrectLights: t.physicallyCorrectLights,
          premultipliedAlpha: r.premultipliedAlpha,
          alphaTest: r.alphaTest,
          doubleSided: 2 === r.side,
          flipSided: 1 === r.side,
          depthPacking: void 0 !== r.depthPacking && r.depthPacking,
          index0AttributeName: r.index0AttributeName,
          extensionDerivatives: r.extensions && r.extensions.derivatives,
          extensionFragDepth: r.extensions && r.extensions.fragDepth,
          extensionDrawBuffers: r.extensions && r.extensions.drawBuffers,
          extensionShaderTextureLOD: r.extensions && r.extensions.shaderTextureLOD,
          rendererExtensionFragDepth: o || n.has("EXT_frag_depth"),
          rendererExtensionDrawBuffers: o || n.has("WEBGL_draw_buffers"),
          rendererExtensionShaderTextureLod: o || n.has("EXT_shader_texture_lod"),
          customProgramCacheKey: r.customProgramCacheKey()
        };
      },
      getProgramCacheKey: function getProgramCacheKey(e) {
        var n = [];
        if (e.shaderID ? n.push(e.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines) for (var _t93 in e.defines) {
          n.push(_t93), n.push(e.defines[_t93]);
        }

        if (!1 === e.isRawShaderMaterial) {
          for (var _t94 = 0; _t94 < g.length; _t94++) {
            n.push(e[g[_t94]]);
          }

          n.push(t.outputEncoding), n.push(t.gammaFactor);
        }

        return n.push(e.customProgramCacheKey), n.join();
      },
      getUniforms: function getUniforms(t) {
        var e = f[t.type];
        var n;

        if (e) {
          var _t95 = di[e];
          n = Jn.clone(_t95.uniforms);
        } else n = t.uniforms;

        return n;
      },
      acquireProgram: function acquireProgram(e, n) {
        var i;

        for (var _t96 = 0, _e70 = a.length; _t96 < _e70; _t96++) {
          var _e71 = a[_t96];

          if (_e71.cacheKey === n) {
            i = _e71, ++i.usedTimes;
            break;
          }
        }

        return void 0 === i && (i = new Jr(t, n, e, r), a.push(i)), i;
      },
      releaseProgram: function releaseProgram(t) {
        if (0 == --t.usedTimes) {
          var _e72 = a.indexOf(t);

          a[_e72] = a[a.length - 1], a.pop(), t.destroy();
        }
      },
      programs: a
    };
  }

  function Kr() {
    var t = new WeakMap();
    return {
      get: function get(e) {
        var n = t.get(e);
        return void 0 === n && (n = {}, t.set(e, n)), n;
      },
      remove: function remove(e) {
        t.delete(e);
      },
      update: function update(e, n, i) {
        t.get(e)[n] = i;
      },
      dispose: function dispose() {
        t = new WeakMap();
      }
    };
  }

  function $r(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id;
  }

  function ts(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id;
  }

  function es(t) {
    var e = [];
    var n = 0;
    var i = [],
        r = [],
        s = [],
        a = {
      id: -1
    };

    function o(i, r, s, o, l, c) {
      var h = e[n];
      var u = t.get(s);
      return void 0 === h ? (h = {
        id: i.id,
        object: i,
        geometry: r,
        material: s,
        program: u.program || a,
        groupOrder: o,
        renderOrder: i.renderOrder,
        z: l,
        group: c
      }, e[n] = h) : (h.id = i.id, h.object = i, h.geometry = r, h.material = s, h.program = u.program || a, h.groupOrder = o, h.renderOrder = i.renderOrder, h.z = l, h.group = c), n++, h;
    }

    return {
      opaque: i,
      transmissive: r,
      transparent: s,
      init: function init() {
        n = 0, i.length = 0, r.length = 0, s.length = 0;
      },
      push: function push(t, e, n, a, l, c) {
        var h = o(t, e, n, a, l, c);
        n.transmission > 0 ? r.push(h) : !0 === n.transparent ? s.push(h) : i.push(h);
      },
      unshift: function unshift(t, e, n, a, l, c) {
        var h = o(t, e, n, a, l, c);
        n.transmission > 0 ? r.unshift(h) : !0 === n.transparent ? s.unshift(h) : i.unshift(h);
      },
      finish: function finish() {
        for (var _t97 = n, _i76 = e.length; _t97 < _i76; _t97++) {
          var _n86 = e[_t97];
          if (null === _n86.id) break;
          _n86.id = null, _n86.object = null, _n86.geometry = null, _n86.material = null, _n86.program = null, _n86.group = null;
        }
      },
      sort: function sort(t, e) {
        i.length > 1 && i.sort(t || $r), r.length > 1 && r.sort(e || ts), s.length > 1 && s.sort(e || ts);
      }
    };
  }

  function ns(t) {
    var e = new WeakMap();
    return {
      get: function get(n, i) {
        var r;
        return !1 === e.has(n) ? (r = new es(t), e.set(n, [r])) : i >= e.get(n).length ? (r = new es(t), e.get(n).push(r)) : r = e.get(n)[i], r;
      },
      dispose: function dispose() {
        e = new WeakMap();
      }
    };
  }

  function is() {
    var t = {};
    return {
      get: function get(e) {
        if (void 0 !== t[e.id]) return t[e.id];
        var n;

        switch (e.type) {
          case "DirectionalLight":
            n = {
              direction: new Rt(),
              color: new en()
            };
            break;

          case "SpotLight":
            n = {
              position: new Rt(),
              direction: new Rt(),
              color: new en(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0
            };
            break;

          case "PointLight":
            n = {
              position: new Rt(),
              color: new en(),
              distance: 0,
              decay: 0
            };
            break;

          case "HemisphereLight":
            n = {
              direction: new Rt(),
              skyColor: new en(),
              groundColor: new en()
            };
            break;

          case "RectAreaLight":
            n = {
              color: new en(),
              position: new Rt(),
              halfWidth: new Rt(),
              halfHeight: new Rt()
            };
        }

        return t[e.id] = n, n;
      }
    };
  }

  var rs = 0;

  function ss(t, e) {
    return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
  }

  function as(t, e) {
    var n = new is(),
        i = function () {
      var t = {};
      return {
        get: function get(e) {
          if (void 0 !== t[e.id]) return t[e.id];
          var n;

          switch (e.type) {
            case "DirectionalLight":
            case "SpotLight":
              n = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new vt()
              };
              break;

            case "PointLight":
              n = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new vt(),
                shadowCameraNear: 1,
                shadowCameraFar: 1e3
              };
          }

          return t[e.id] = n, n;
        }
      };
    }(),
        r = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: []
    };

    for (var _t98 = 0; _t98 < 9; _t98++) {
      r.probe.push(new Rt());
    }

    var s = new Rt(),
        a = new ae(),
        o = new ae();
    return {
      setup: function setup(s) {
        var a = 0,
            o = 0,
            l = 0;

        for (var _t99 = 0; _t99 < 9; _t99++) {
          r.probe[_t99].set(0, 0, 0);
        }

        var c = 0,
            h = 0,
            u = 0,
            d = 0,
            p = 0,
            m = 0,
            f = 0,
            g = 0;
        s.sort(ss);

        for (var _t100 = 0, _e73 = s.length; _t100 < _e73; _t100++) {
          var _e74 = s[_t100],
              _v2 = _e74.color,
              _y2 = _e74.intensity,
              _x2 = _e74.distance,
              _3 = _e74.shadow && _e74.shadow.map ? _e74.shadow.map.texture : null;

          if (_e74.isAmbientLight) a += _v2.r * _y2, o += _v2.g * _y2, l += _v2.b * _y2;else if (_e74.isLightProbe) for (var _t101 = 0; _t101 < 9; _t101++) {
            r.probe[_t101].addScaledVector(_e74.sh.coefficients[_t101], _y2);
          } else if (_e74.isDirectionalLight) {
            var _t102 = n.get(_e74);

            if (_t102.color.copy(_e74.color).multiplyScalar(_e74.intensity), _e74.castShadow) {
              var _t103 = _e74.shadow,
                  _n87 = i.get(_e74);

              _n87.shadowBias = _t103.bias, _n87.shadowNormalBias = _t103.normalBias, _n87.shadowRadius = _t103.radius, _n87.shadowMapSize = _t103.mapSize, r.directionalShadow[c] = _n87, r.directionalShadowMap[c] = _3, r.directionalShadowMatrix[c] = _e74.shadow.matrix, m++;
            }

            r.directional[c] = _t102, c++;
          } else if (_e74.isSpotLight) {
            var _t104 = n.get(_e74);

            if (_t104.position.setFromMatrixPosition(_e74.matrixWorld), _t104.color.copy(_v2).multiplyScalar(_y2), _t104.distance = _x2, _t104.coneCos = Math.cos(_e74.angle), _t104.penumbraCos = Math.cos(_e74.angle * (1 - _e74.penumbra)), _t104.decay = _e74.decay, _e74.castShadow) {
              var _t105 = _e74.shadow,
                  _n88 = i.get(_e74);

              _n88.shadowBias = _t105.bias, _n88.shadowNormalBias = _t105.normalBias, _n88.shadowRadius = _t105.radius, _n88.shadowMapSize = _t105.mapSize, r.spotShadow[u] = _n88, r.spotShadowMap[u] = _3, r.spotShadowMatrix[u] = _e74.shadow.matrix, g++;
            }

            r.spot[u] = _t104, u++;
          } else if (_e74.isRectAreaLight) {
            var _t106 = n.get(_e74);

            _t106.color.copy(_v2).multiplyScalar(_y2), _t106.halfWidth.set(.5 * _e74.width, 0, 0), _t106.halfHeight.set(0, .5 * _e74.height, 0), r.rectArea[d] = _t106, d++;
          } else if (_e74.isPointLight) {
            var _t107 = n.get(_e74);

            if (_t107.color.copy(_e74.color).multiplyScalar(_e74.intensity), _t107.distance = _e74.distance, _t107.decay = _e74.decay, _e74.castShadow) {
              var _t108 = _e74.shadow,
                  _n89 = i.get(_e74);

              _n89.shadowBias = _t108.bias, _n89.shadowNormalBias = _t108.normalBias, _n89.shadowRadius = _t108.radius, _n89.shadowMapSize = _t108.mapSize, _n89.shadowCameraNear = _t108.camera.near, _n89.shadowCameraFar = _t108.camera.far, r.pointShadow[h] = _n89, r.pointShadowMap[h] = _3, r.pointShadowMatrix[h] = _e74.shadow.matrix, f++;
            }

            r.point[h] = _t107, h++;
          } else if (_e74.isHemisphereLight) {
            var _t109 = n.get(_e74);

            _t109.skyColor.copy(_e74.color).multiplyScalar(_y2), _t109.groundColor.copy(_e74.groundColor).multiplyScalar(_y2), r.hemi[p] = _t109, p++;
          }
        }

        d > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = ui.LTC_FLOAT_1, r.rectAreaLTC2 = ui.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = ui.LTC_HALF_1, r.rectAreaLTC2 = ui.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = a, r.ambient[1] = o, r.ambient[2] = l;
        var v = r.hash;
        v.directionalLength === c && v.pointLength === h && v.spotLength === u && v.rectAreaLength === d && v.hemiLength === p && v.numDirectionalShadows === m && v.numPointShadows === f && v.numSpotShadows === g || (r.directional.length = c, r.spot.length = u, r.rectArea.length = d, r.point.length = h, r.hemi.length = p, r.directionalShadow.length = m, r.directionalShadowMap.length = m, r.pointShadow.length = f, r.pointShadowMap.length = f, r.spotShadow.length = g, r.spotShadowMap.length = g, r.directionalShadowMatrix.length = m, r.pointShadowMatrix.length = f, r.spotShadowMatrix.length = g, v.directionalLength = c, v.pointLength = h, v.spotLength = u, v.rectAreaLength = d, v.hemiLength = p, v.numDirectionalShadows = m, v.numPointShadows = f, v.numSpotShadows = g, r.version = rs++);
      },
      setupView: function setupView(t, e) {
        var n = 0,
            i = 0,
            l = 0,
            c = 0,
            h = 0;
        var u = e.matrixWorldInverse;

        for (var _e75 = 0, _d6 = t.length; _e75 < _d6; _e75++) {
          var _d7 = t[_e75];

          if (_d7.isDirectionalLight) {
            var _t110 = r.directional[n];
            _t110.direction.setFromMatrixPosition(_d7.matrixWorld), s.setFromMatrixPosition(_d7.target.matrixWorld), _t110.direction.sub(s), _t110.direction.transformDirection(u), n++;
          } else if (_d7.isSpotLight) {
            var _t111 = r.spot[l];
            _t111.position.setFromMatrixPosition(_d7.matrixWorld), _t111.position.applyMatrix4(u), _t111.direction.setFromMatrixPosition(_d7.matrixWorld), s.setFromMatrixPosition(_d7.target.matrixWorld), _t111.direction.sub(s), _t111.direction.transformDirection(u), l++;
          } else if (_d7.isRectAreaLight) {
            var _t112 = r.rectArea[c];
            _t112.position.setFromMatrixPosition(_d7.matrixWorld), _t112.position.applyMatrix4(u), o.identity(), a.copy(_d7.matrixWorld), a.premultiply(u), o.extractRotation(a), _t112.halfWidth.set(.5 * _d7.width, 0, 0), _t112.halfHeight.set(0, .5 * _d7.height, 0), _t112.halfWidth.applyMatrix4(o), _t112.halfHeight.applyMatrix4(o), c++;
          } else if (_d7.isPointLight) {
            var _t113 = r.point[i];
            _t113.position.setFromMatrixPosition(_d7.matrixWorld), _t113.position.applyMatrix4(u), i++;
          } else if (_d7.isHemisphereLight) {
            var _t114 = r.hemi[h];
            _t114.direction.setFromMatrixPosition(_d7.matrixWorld), _t114.direction.transformDirection(u), _t114.direction.normalize(), h++;
          }
        }
      },
      state: r
    };
  }

  function os(t, e) {
    var n = new as(t, e),
        i = [],
        r = [];
    return {
      init: function init() {
        i.length = 0, r.length = 0;
      },
      state: {
        lightsArray: i,
        shadowsArray: r,
        lights: n
      },
      setupLights: function setupLights() {
        n.setup(i);
      },
      setupLightsView: function setupLightsView(t) {
        n.setupView(i, t);
      },
      pushLight: function pushLight(t) {
        i.push(t);
      },
      pushShadow: function pushShadow(t) {
        r.push(t);
      }
    };
  }

  function ls(t, e) {
    var n = new WeakMap();
    return {
      get: function get(i) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var s;
        return !1 === n.has(i) ? (s = new os(t, e), n.set(i, [s])) : r >= n.get(i).length ? (s = new os(t, e), n.get(i).push(s)) : s = n.get(i)[r], s;
      },
      dispose: function dispose() {
        n = new WeakMap();
      }
    };
  }

  var cs = /*#__PURE__*/function (_Ye3) {
    _inherits(cs, _Ye3);

    var _super30 = _createSuper(cs);

    function cs(t) {
      var _this20;

      _classCallCheck(this, cs);

      _this20 = _super30.call(this), _this20.type = "MeshDepthMaterial", _this20.depthPacking = 3200, _this20.morphTargets = !1, _this20.map = null, _this20.alphaMap = null, _this20.displacementMap = null, _this20.displacementScale = 1, _this20.displacementBias = 0, _this20.wireframe = !1, _this20.wireframeLinewidth = 1, _this20.fog = !1, _this20.setValues(t);
      return _this20;
    }

    _createClass(cs, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(cs.prototype), "copy", this).call(this, t), this.depthPacking = t.depthPacking, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
      }
    }]);

    return cs;
  }(Ye);

  cs.prototype.isMeshDepthMaterial = !0;

  var hs = /*#__PURE__*/function (_Ye4) {
    _inherits(hs, _Ye4);

    var _super31 = _createSuper(hs);

    function hs(t) {
      var _this21;

      _classCallCheck(this, hs);

      _this21 = _super31.call(this), _this21.type = "MeshDistanceMaterial", _this21.referencePosition = new Rt(), _this21.nearDistance = 1, _this21.farDistance = 1e3, _this21.morphTargets = !1, _this21.map = null, _this21.alphaMap = null, _this21.displacementMap = null, _this21.displacementScale = 1, _this21.displacementBias = 0, _this21.fog = !1, _this21.setValues(t);
      return _this21;
    }

    _createClass(hs, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(hs.prototype), "copy", this).call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
      }
    }]);

    return hs;
  }(Ye);

  hs.prototype.isMeshDistanceMaterial = !0;

  function us(t, e, n) {
    var i = new ai();
    var r = new vt(),
        s = new vt(),
        a = new St(),
        o = [],
        l = [],
        c = {},
        h = n.maxTextureSize,
        u = {
      0: 1,
      1: 0,
      2: 2
    },
        d = new Qn({
      defines: {
        SAMPLE_RATE: 2 / 8,
        HALF_SAMPLE_RATE: 1 / 8
      },
      uniforms: {
        shadow_pass: {
          value: null
        },
        resolution: {
          value: new vt()
        },
        radius: {
          value: 4
        }
      },
      vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
      fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
    }),
        m = d.clone();
    m.defines.HORIZONTAL_PASS = 1;
    var f = new An();
    f.setAttribute("position", new an(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
    var v = new jn(f, d),
        y = this;

    function x(n, i) {
      var r = e.update(v);
      d.uniforms.shadow_pass.value = n.map.texture, d.uniforms.resolution.value = n.mapSize, d.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(i, null, r, d, v, null), m.uniforms.shadow_pass.value = n.mapPass.texture, m.uniforms.resolution.value = n.mapSize, m.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(i, null, r, m, v, null);
    }

    function _(t) {
      var e = t << 0;
      var n = o[e];
      return void 0 === n && (n = new cs({
        depthPacking: 3201,
        morphTargets: t
      }), o[e] = n), n;
    }

    function w(t) {
      var e = t << 0;
      var n = l[e];
      return void 0 === n && (n = new hs({
        morphTargets: t
      }), l[e] = n), n;
    }

    function b(e, n, i, r, s, a, o) {
      var l = null,
          h = _,
          d = e.customDepthMaterial;

      if (!0 === r.isPointLight && (h = w, d = e.customDistanceMaterial), void 0 === d) {
        var _t115 = !1;

        !0 === i.morphTargets && (_t115 = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0), l = h(_t115);
      } else l = d;

      if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
        var _t116 = l.uuid,
            _e76 = i.uuid;
        var _n90 = c[_t116];
        void 0 === _n90 && (_n90 = {}, c[_t116] = _n90);
        var _r58 = _n90[_e76];
        void 0 === _r58 && (_r58 = l.clone(), _n90[_e76] = _r58), l = _r58;
      }

      return l.visible = i.visible, l.wireframe = i.wireframe, l.side = 3 === o ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : u[i.side], l.clipShadows = i.clipShadows, l.clippingPlanes = i.clippingPlanes, l.clipIntersection = i.clipIntersection, l.wireframeLinewidth = i.wireframeLinewidth, l.linewidth = i.linewidth, !0 === r.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(r.matrixWorld), l.nearDistance = s, l.farDistance = a), l;
    }

    function M(n, r, s, a, o) {
      if (!1 === n.visible) return;

      if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === o) && (!n.frustumCulled || i.intersectsObject(n))) {
        n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);

        var _i77 = e.update(n),
            _r59 = n.material;

        if (Array.isArray(_r59)) {
          var _e77 = _i77.groups;

          for (var _l13 = 0, _c10 = _e77.length; _l13 < _c10; _l13++) {
            var _c11 = _e77[_l13],
                _h7 = _r59[_c11.materialIndex];

            if (_h7 && _h7.visible) {
              var _e78 = b(n, _i77, _h7, a, s.near, s.far, o);

              t.renderBufferDirect(s, null, _i77, _e78, n, _c11);
            }
          }
        } else if (_r59.visible) {
          var _e79 = b(n, _i77, _r59, a, s.near, s.far, o);

          t.renderBufferDirect(s, null, _i77, _e79, n, null);
        }
      }

      var l = n.children;

      for (var _t117 = 0, _e80 = l.length; _t117 < _e80; _t117++) {
        M(l[_t117], r, s, a, o);
      }
    }

    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function (e, n, o) {
      if (!1 === y.enabled) return;
      if (!1 === y.autoUpdate && !1 === y.needsUpdate) return;
      if (0 === e.length) return;
      var l = t.getRenderTarget(),
          c = t.getActiveCubeFace(),
          u = t.getActiveMipmapLevel(),
          d = t.state;
      d.setBlending(0), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);

      for (var _l14 = 0, _c12 = e.length; _l14 < _c12; _l14++) {
        var _c13 = e[_l14],
            _u8 = _c13.shadow;

        if (void 0 === _u8) {
          console.warn("THREE.WebGLShadowMap:", _c13, "has no shadow.");
          continue;
        }

        if (!1 === _u8.autoUpdate && !1 === _u8.needsUpdate) continue;
        r.copy(_u8.mapSize);

        var _m3 = _u8.getFrameExtents();

        if (r.multiply(_m3), s.copy(_u8.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / _m3.x), r.x = s.x * _m3.x, _u8.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / _m3.y), r.y = s.y * _m3.y, _u8.mapSize.y = s.y)), null === _u8.map && !_u8.isPointLightShadow && 3 === this.type) {
          var _t118 = {
            minFilter: g,
            magFilter: g,
            format: E
          };
          _u8.map = new Tt(r.x, r.y, _t118), _u8.map.texture.name = _c13.name + ".shadowMap", _u8.mapPass = new Tt(r.x, r.y, _t118), _u8.camera.updateProjectionMatrix();
        }

        if (null === _u8.map) {
          var _t119 = {
            minFilter: p,
            magFilter: p,
            format: E
          };
          _u8.map = new Tt(r.x, r.y, _t119), _u8.map.texture.name = _c13.name + ".shadowMap", _u8.camera.updateProjectionMatrix();
        }

        t.setRenderTarget(_u8.map), t.clear();

        var _f = _u8.getViewportCount();

        for (var _t120 = 0; _t120 < _f; _t120++) {
          var _e81 = _u8.getViewport(_t120);

          a.set(s.x * _e81.x, s.y * _e81.y, s.x * _e81.z, s.y * _e81.w), d.viewport(a), _u8.updateMatrices(_c13, _t120), i = _u8.getFrustum(), M(n, o, _u8.camera, _c13, this.type);
        }

        _u8.isPointLightShadow || 3 !== this.type || x(_u8, o), _u8.needsUpdate = !1;
      }

      y.needsUpdate = !1, t.setRenderTarget(l, c, u);
    };
  }

  function ds(t, e, i) {
    var _G;

    var r = i.isWebGL2;
    var s = new function () {
      var e = !1;
      var n = new St();
      var i = null;
      var r = new St(0, 0, 0, 0);
      return {
        setMask: function setMask(n) {
          i === n || e || (t.colorMask(n, n, n, n), i = n);
        },
        setLocked: function setLocked(t) {
          e = t;
        },
        setClear: function setClear(e, i, s, a, o) {
          !0 === o && (e *= a, i *= a, s *= a), n.set(e, i, s, a), !1 === r.equals(n) && (t.clearColor(e, i, s, a), r.copy(n));
        },
        reset: function reset() {
          e = !1, i = null, r.set(-1, 0, 0, 0);
        }
      };
    }(),
        a = new function () {
      var e = !1,
          n = null,
          i = null,
          r = null;
      return {
        setTest: function setTest(t) {
          t ? O(2929) : H(2929);
        },
        setMask: function setMask(i) {
          n === i || e || (t.depthMask(i), n = i);
        },
        setFunc: function setFunc(e) {
          if (i !== e) {
            if (e) switch (e) {
              case 0:
                t.depthFunc(512);
                break;

              case 1:
                t.depthFunc(519);
                break;

              case 2:
                t.depthFunc(513);
                break;

              case 3:
                t.depthFunc(515);
                break;

              case 4:
                t.depthFunc(514);
                break;

              case 5:
                t.depthFunc(518);
                break;

              case 6:
                t.depthFunc(516);
                break;

              case 7:
                t.depthFunc(517);
                break;

              default:
                t.depthFunc(515);
            } else t.depthFunc(515);
            i = e;
          }
        },
        setLocked: function setLocked(t) {
          e = t;
        },
        setClear: function setClear(e) {
          r !== e && (t.clearDepth(e), r = e);
        },
        reset: function reset() {
          e = !1, n = null, i = null, r = null;
        }
      };
    }(),
        o = new function () {
      var e = !1,
          n = null,
          i = null,
          r = null,
          s = null,
          a = null,
          o = null,
          l = null,
          c = null;
      return {
        setTest: function setTest(t) {
          e || (t ? O(2960) : H(2960));
        },
        setMask: function setMask(i) {
          n === i || e || (t.stencilMask(i), n = i);
        },
        setFunc: function setFunc(e, n, a) {
          i === e && r === n && s === a || (t.stencilFunc(e, n, a), i = e, r = n, s = a);
        },
        setOp: function setOp(e, n, i) {
          a === e && o === n && l === i || (t.stencilOp(e, n, i), a = e, o = n, l = i);
        },
        setLocked: function setLocked(t) {
          e = t;
        },
        setClear: function setClear(e) {
          c !== e && (t.clearStencil(e), c = e);
        },
        reset: function reset() {
          e = !1, n = null, i = null, r = null, s = null, a = null, o = null, l = null, c = null;
        }
      };
    }();

    var l = {},
        c = null,
        h = {},
        u = null,
        d = !1,
        p = null,
        m = null,
        f = null,
        g = null,
        v = null,
        y = null,
        x = null,
        _ = !1,
        w = null,
        b = null,
        M = null,
        S = null,
        T = null;

    var E = t.getParameter(35661);
    var A = !1,
        L = 0;
    var R = t.getParameter(7938);
    -1 !== R.indexOf("WebGL") ? (L = parseFloat(/^WebGL (\d)/.exec(R)[1]), A = L >= 1) : -1 !== R.indexOf("OpenGL ES") && (L = parseFloat(/^OpenGL ES (\d)/.exec(R)[1]), A = L >= 2);
    var C = null,
        P = {};
    var D = t.getParameter(3088),
        I = t.getParameter(2978),
        N = new St().fromArray(D),
        B = new St().fromArray(I);

    function z(e, n, i) {
      var r = new Uint8Array(4),
          s = t.createTexture();
      t.bindTexture(e, s), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);

      for (var _e82 = 0; _e82 < i; _e82++) {
        t.texImage2D(n + _e82, 0, 6408, 1, 1, 0, 6408, 5121, r);
      }

      return s;
    }

    var F = {};

    function O(e) {
      !0 !== l[e] && (t.enable(e), l[e] = !0);
    }

    function H(e) {
      !1 !== l[e] && (t.disable(e), l[e] = !1);
    }

    F[3553] = z(3553, 3553, 1), F[34067] = z(34067, 34069, 6), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), O(2929), a.setFunc(3), V(!1), W(1), O(2884), k(0);
    var G = (_G = {}, _defineProperty(_G, n, 32774), _defineProperty(_G, 101, 32778), _defineProperty(_G, 102, 32779), _G);
    if (r) G[103] = 32775, G[104] = 32776;else {
      var _t121 = e.get("EXT_blend_minmax");

      null !== _t121 && (G[103] = _t121.MIN_EXT, G[104] = _t121.MAX_EXT);
    }
    var U = {
      200: 0,
      201: 1,
      202: 768,
      204: 770,
      210: 776,
      208: 774,
      206: 772,
      203: 769,
      205: 771,
      209: 775,
      207: 773
    };

    function k(e, i, r, s, a, o, l, c) {
      if (0 !== e) {
        if (!1 === d && (O(3042), d = !0), 5 === e) a = a || i, o = o || r, l = l || s, i === m && a === v || (t.blendEquationSeparate(G[i], G[a]), m = i, v = a), r === f && s === g && o === y && l === x || (t.blendFuncSeparate(U[r], U[s], U[o], U[l]), f = r, g = s, y = o, x = l), p = e, _ = null;else if (e !== p || c !== _) {
          if (m === n && v === n || (t.blendEquation(32774), m = n, v = n), c) switch (e) {
            case 1:
              t.blendFuncSeparate(1, 771, 1, 771);
              break;

            case 2:
              t.blendFunc(1, 1);
              break;

            case 3:
              t.blendFuncSeparate(0, 0, 769, 771);
              break;

            case 4:
              t.blendFuncSeparate(0, 768, 0, 770);
              break;

            default:
              console.error("THREE.WebGLState: Invalid blending: ", e);
          } else switch (e) {
            case 1:
              t.blendFuncSeparate(770, 771, 1, 771);
              break;

            case 2:
              t.blendFunc(770, 1);
              break;

            case 3:
              t.blendFunc(0, 769);
              break;

            case 4:
              t.blendFunc(0, 768);
              break;

            default:
              console.error("THREE.WebGLState: Invalid blending: ", e);
          }
          f = null, g = null, y = null, x = null, p = e, _ = c;
        }
      } else !0 === d && (H(3042), d = !1);
    }

    function V(e) {
      w !== e && (e ? t.frontFace(2304) : t.frontFace(2305), w = e);
    }

    function W(e) {
      0 !== e ? (O(2884), e !== b && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : H(2884), b = e;
    }

    function j(e, n, i) {
      e ? (O(32823), S === n && T === i || (t.polygonOffset(n, i), S = n, T = i)) : H(32823);
    }

    function q(e) {
      void 0 === e && (e = 33984 + E - 1), C !== e && (t.activeTexture(e), C = e);
    }

    return {
      buffers: {
        color: s,
        depth: a,
        stencil: o
      },
      enable: O,
      disable: H,
      bindFramebuffer: function bindFramebuffer(e, n) {
        return null === n && null !== c && (n = c), h[e] !== n && (t.bindFramebuffer(e, n), h[e] = n, r && (36009 === e && (h[36160] = n), 36160 === e && (h[36009] = n)), !0);
      },
      bindXRFramebuffer: function bindXRFramebuffer(e) {
        e !== c && (t.bindFramebuffer(36160, e), c = e);
      },
      useProgram: function useProgram(e) {
        return u !== e && (t.useProgram(e), u = e, !0);
      },
      setBlending: k,
      setMaterial: function setMaterial(t, e) {
        2 === t.side ? H(2884) : O(2884);
        var n = 1 === t.side;
        e && (n = !n), V(n), 1 === t.blending && !1 === t.transparent ? k(0) : k(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), a.setFunc(t.depthFunc), a.setTest(t.depthTest), a.setMask(t.depthWrite), s.setMask(t.colorWrite);
        var i = t.stencilWrite;
        o.setTest(i), i && (o.setMask(t.stencilWriteMask), o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), j(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? O(32926) : H(32926);
      },
      setFlipSided: V,
      setCullFace: W,
      setLineWidth: function setLineWidth(e) {
        e !== M && (A && t.lineWidth(e), M = e);
      },
      setPolygonOffset: j,
      setScissorTest: function setScissorTest(t) {
        t ? O(3089) : H(3089);
      },
      activeTexture: q,
      bindTexture: function bindTexture(e, n) {
        null === C && q();
        var i = P[C];
        void 0 === i && (i = {
          type: void 0,
          texture: void 0
        }, P[C] = i), i.type === e && i.texture === n || (t.bindTexture(e, n || F[e]), i.type = e, i.texture = n);
      },
      unbindTexture: function unbindTexture() {
        var e = P[C];
        void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0);
      },
      compressedTexImage2D: function compressedTexImage2D() {
        try {
          t.compressedTexImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage2D: function texImage2D() {
        try {
          t.texImage2D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      texImage3D: function texImage3D() {
        try {
          t.texImage3D.apply(t, arguments);
        } catch (t) {
          console.error("THREE.WebGLState:", t);
        }
      },
      scissor: function scissor(e) {
        !1 === N.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), N.copy(e));
      },
      viewport: function viewport(e) {
        !1 === B.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), B.copy(e));
      },
      reset: function reset() {
        t.disable(3042), t.disable(2884), t.disable(2929), t.disable(32823), t.disable(3089), t.disable(2960), t.disable(32926), t.blendEquation(32774), t.blendFunc(1, 0), t.blendFuncSeparate(1, 0, 1, 0), t.colorMask(!0, !0, !0, !0), t.clearColor(0, 0, 0, 0), t.depthMask(!0), t.depthFunc(513), t.clearDepth(1), t.stencilMask(4294967295), t.stencilFunc(519, 0, 4294967295), t.stencilOp(7680, 7680, 7680), t.clearStencil(0), t.cullFace(1029), t.frontFace(2305), t.polygonOffset(0, 0), t.activeTexture(33984), t.bindFramebuffer(36160, null), !0 === r && (t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)), t.useProgram(null), t.lineWidth(1), t.scissor(0, 0, t.canvas.width, t.canvas.height), t.viewport(0, 0, t.canvas.width, t.canvas.height), l = {}, C = null, P = {}, c = null, h = {}, u = null, d = !1, p = null, m = null, f = null, g = null, v = null, y = null, x = null, _ = !1, w = null, b = null, M = null, S = null, T = null, N.set(0, 0, t.canvas.width, t.canvas.height), B.set(0, 0, t.canvas.width, t.canvas.height), s.reset(), a.reset(), o.reset();
      }
    };
  }

  function ps(t, e, n, i, r, s, a) {
    var _j, _q;

    var o = r.isWebGL2,
        l = r.maxTextures,
        c = r.maxCubemapSize,
        x = r.maxTextureSize,
        R = r.maxSamples,
        C = new WeakMap();
    var P,
        D = !1;

    try {
      D = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (t) {}

    function I(t, e) {
      return D ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    }

    function N(t, e, n, i) {
      var r = 1;

      if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
        if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
          var _i78 = e ? ft : Math.floor,
              _s27 = _i78(r * t.width),
              _a21 = _i78(r * t.height);

          void 0 === P && (P = I(_s27, _a21));

          var _o13 = n ? I(_s27, _a21) : P;

          _o13.width = _s27, _o13.height = _a21;
          return _o13.getContext("2d").drawImage(t, 0, 0, _s27, _a21), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + _s27 + "x" + _a21 + ")."), _o13;
        }

        return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t;
      }

      return t;
    }

    function B(t) {
      return pt(t.width) && pt(t.height);
    }

    function z(t, e) {
      return t.generateMipmaps && e && t.minFilter !== p && t.minFilter !== g;
    }

    function F(e, n, r, s) {
      t.generateMipmap(e);
      i.get(n).__maxMipLevel = Math.log2(Math.max(r, s));
    }

    function O(n, i, r) {
      if (!1 === o) return i;

      if (null !== n) {
        if (void 0 !== t[n]) return t[n];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
      }

      var s = i;
      return 6403 === i && (5126 === r && (s = 33326), 5131 === r && (s = 33325), 5121 === r && (s = 33321)), 6407 === i && (5126 === r && (s = 34837), 5131 === r && (s = 34843), 5121 === r && (s = 32849)), 6408 === i && (5126 === r && (s = 34836), 5131 === r && (s = 34842), 5121 === r && (s = 32856)), 33325 !== s && 33326 !== s && 34842 !== s && 34836 !== s || e.get("EXT_color_buffer_float"), s;
    }

    function H(t) {
      return t === p || t === m || t === f ? 9728 : 9729;
    }

    function G(e) {
      var n = e.target;
      n.removeEventListener("dispose", G), function (e) {
        var n = i.get(e);
        if (void 0 === n.__webglInit) return;
        t.deleteTexture(n.__webglTexture), i.remove(e);
      }(n), n.isVideoTexture && C.delete(n), a.memory.textures--;
    }

    function U(e) {
      var n = e.target;
      n.removeEventListener("dispose", U), function (e) {
        var n = e.texture,
            r = i.get(e),
            s = i.get(n);
        if (!e) return;
        void 0 !== s.__webglTexture && (t.deleteTexture(s.__webglTexture), a.memory.textures--);
        e.depthTexture && e.depthTexture.dispose();
        if (e.isWebGLCubeRenderTarget) for (var _e83 = 0; _e83 < 6; _e83++) {
          t.deleteFramebuffer(r.__webglFramebuffer[_e83]), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[_e83]);
        } else t.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer && t.deleteRenderbuffer(r.__webglColorRenderbuffer), r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
        if (e.isWebGLMultipleRenderTargets) for (var _e84 = 0, _r60 = n.length; _e84 < _r60; _e84++) {
          var _r61 = i.get(n[_e84]);

          _r61.__webglTexture && (t.deleteTexture(_r61.__webglTexture), a.memory.textures--), i.remove(n[_e84]);
        }
        i.remove(n), i.remove(e);
      }(n);
    }

    var k = 0;

    function V(t, e) {
      var r = i.get(t);

      if (t.isVideoTexture && function (t) {
        var e = a.render.frame;
        C.get(t) !== e && (C.set(t, e), t.update());
      }(t), t.version > 0 && r.__version !== t.version) {
        var _n91 = t.image;
        if (void 0 === _n91) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else {
          if (!1 !== _n91.complete) return void Z(r, t, e);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        }
      }

      n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture);
    }

    function W(e, r) {
      var a = i.get(e);
      e.version > 0 && a.__version !== e.version ? function (e, i, r) {
        if (6 !== i.image.length) return;
        Y(e, i), n.activeTexture(33984 + r), n.bindTexture(34067, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment), t.pixelStorei(37443, 0);
        var a = i && (i.isCompressedTexture || i.image[0].isCompressedTexture),
            l = i.image[0] && i.image[0].isDataTexture,
            h = [];

        for (var _t122 = 0; _t122 < 6; _t122++) {
          h[_t122] = a || l ? l ? i.image[_t122].image : i.image[_t122] : N(i.image[_t122], !1, !0, c);
        }

        var u = h[0],
            d = B(u) || o,
            p = s.convert(i.format),
            m = s.convert(i.type),
            f = O(i.internalFormat, p, m);
        var g;

        if (X(34067, i, d), a) {
          for (var _t123 = 0; _t123 < 6; _t123++) {
            g = h[_t123].mipmaps;

            for (var _e85 = 0; _e85 < g.length; _e85++) {
              var _r62 = g[_e85];
              i.format !== E && i.format !== T ? null !== p ? n.compressedTexImage2D(34069 + _t123, _e85, f, _r62.width, _r62.height, 0, _r62.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + _t123, _e85, f, _r62.width, _r62.height, 0, p, m, _r62.data);
            }
          }

          e.__maxMipLevel = g.length - 1;
        } else {
          g = i.mipmaps;

          for (var _t124 = 0; _t124 < 6; _t124++) {
            if (l) {
              n.texImage2D(34069 + _t124, 0, f, h[_t124].width, h[_t124].height, 0, p, m, h[_t124].data);

              for (var _e86 = 0; _e86 < g.length; _e86++) {
                var _i79 = g[_e86].image[_t124].image;
                n.texImage2D(34069 + _t124, _e86 + 1, f, _i79.width, _i79.height, 0, p, m, _i79.data);
              }
            } else {
              n.texImage2D(34069 + _t124, 0, f, p, m, h[_t124]);

              for (var _e87 = 0; _e87 < g.length; _e87++) {
                var _i80 = g[_e87];
                n.texImage2D(34069 + _t124, _e87 + 1, f, p, m, _i80.image[_t124]);
              }
            }
          }

          e.__maxMipLevel = g.length;
        }

        z(i, d) && F(34067, i, u.width, u.height);
        e.__version = i.version, i.onUpdate && i.onUpdate(i);
      }(a, e, r) : (n.activeTexture(33984 + r), n.bindTexture(34067, a.__webglTexture));
    }

    var j = (_j = {}, _defineProperty(_j, h, 10497), _defineProperty(_j, u, 33071), _defineProperty(_j, d, 33648), _j),
        q = (_q = {}, _defineProperty(_q, p, 9728), _defineProperty(_q, m, 9984), _defineProperty(_q, f, 9986), _defineProperty(_q, g, 9729), _defineProperty(_q, v, 9985), _defineProperty(_q, y, 9987), _q);

    function X(n, s, a) {
      if (a ? (t.texParameteri(n, 10242, j[s.wrapS]), t.texParameteri(n, 10243, j[s.wrapT]), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, j[s.wrapR]), t.texParameteri(n, 10240, q[s.magFilter]), t.texParameteri(n, 10241, q[s.minFilter])) : (t.texParameteri(n, 10242, 33071), t.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071), s.wrapS === u && s.wrapT === u || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(n, 10240, H(s.magFilter)), t.texParameteri(n, 10241, H(s.minFilter)), s.minFilter !== p && s.minFilter !== g && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === e.has("EXT_texture_filter_anisotropic")) {
        var _a22 = e.get("EXT_texture_filter_anisotropic");

        if (s.type === b && !1 === e.has("OES_texture_float_linear")) return;
        if (!1 === o && s.type === M && !1 === e.has("OES_texture_half_float_linear")) return;
        (s.anisotropy > 1 || i.get(s).__currentAnisotropy) && (t.texParameterf(n, _a22.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())), i.get(s).__currentAnisotropy = s.anisotropy);
      }
    }

    function Y(e, n) {
      void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", G), e.__webglTexture = t.createTexture(), a.memory.textures++);
    }

    function Z(e, i, r) {
      var a = 3553;
      i.isDataTexture2DArray && (a = 35866), i.isDataTexture3D && (a = 32879), Y(e, i), n.activeTexture(33984 + r), n.bindTexture(a, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment), t.pixelStorei(37443, 0);

      var l = function (t) {
        return !o && (t.wrapS !== u || t.wrapT !== u || t.minFilter !== p && t.minFilter !== g);
      }(i) && !1 === B(i.image),
          c = N(i.image, l, !1, x),
          h = B(c) || o,
          d = s.convert(i.format);

      var m,
          f = s.convert(i.type),
          v = O(i.internalFormat, d, f);
      X(a, i, h);
      var y = i.mipmaps;
      if (i.isDepthTexture) v = 6402, o ? v = i.type === b ? 36012 : i.type === w ? 33190 : i.type === S ? 35056 : 33189 : i.type === b && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), i.format === A && 6402 === v && i.type !== _ && i.type !== w && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = _, f = s.convert(i.type)), i.format === L && 6402 === v && (v = 34041, i.type !== S && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = S, f = s.convert(i.type))), n.texImage2D(3553, 0, v, c.width, c.height, 0, d, f, null);else if (i.isDataTexture) {
        if (y.length > 0 && h) {
          for (var _t125 = 0, _e88 = y.length; _t125 < _e88; _t125++) {
            m = y[_t125], n.texImage2D(3553, _t125, v, m.width, m.height, 0, d, f, m.data);
          }

          i.generateMipmaps = !1, e.__maxMipLevel = y.length - 1;
        } else n.texImage2D(3553, 0, v, c.width, c.height, 0, d, f, c.data), e.__maxMipLevel = 0;
      } else if (i.isCompressedTexture) {
        for (var _t126 = 0, _e89 = y.length; _t126 < _e89; _t126++) {
          m = y[_t126], i.format !== E && i.format !== T ? null !== d ? n.compressedTexImage2D(3553, _t126, v, m.width, m.height, 0, m.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, _t126, v, m.width, m.height, 0, d, f, m.data);
        }

        e.__maxMipLevel = y.length - 1;
      } else if (i.isDataTexture2DArray) n.texImage3D(35866, 0, v, c.width, c.height, c.depth, 0, d, f, c.data), e.__maxMipLevel = 0;else if (i.isDataTexture3D) n.texImage3D(32879, 0, v, c.width, c.height, c.depth, 0, d, f, c.data), e.__maxMipLevel = 0;else if (y.length > 0 && h) {
        for (var _t127 = 0, _e90 = y.length; _t127 < _e90; _t127++) {
          m = y[_t127], n.texImage2D(3553, _t127, v, d, f, m);
        }

        i.generateMipmaps = !1, e.__maxMipLevel = y.length - 1;
      } else n.texImage2D(3553, 0, v, d, f, c), e.__maxMipLevel = 0;
      z(i, h) && F(a, i, c.width, c.height), e.__version = i.version, i.onUpdate && i.onUpdate(i);
    }

    function J(e, r, a, o, l) {
      var c = s.convert(a.format),
          h = s.convert(a.type),
          u = O(a.internalFormat, c, h);
      32879 === l || 35866 === l ? n.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null) : n.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null), n.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, o, l, i.get(a).__webglTexture, 0), n.bindFramebuffer(36160, null);
    }

    function Q(e, n, i) {
      if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
        var _r63 = 33189;

        if (i) {
          var _e91 = n.depthTexture;
          _e91 && _e91.isDepthTexture && (_e91.type === b ? _r63 = 36012 : _e91.type === w && (_r63 = 33190));

          var _i81 = $(n);

          t.renderbufferStorageMultisample(36161, _i81, _r63, n.width, n.height);
        } else t.renderbufferStorage(36161, _r63, n.width, n.height);

        t.framebufferRenderbuffer(36160, 36096, 36161, e);
      } else if (n.depthBuffer && n.stencilBuffer) {
        if (i) {
          var _e92 = $(n);

          t.renderbufferStorageMultisample(36161, _e92, 35056, n.width, n.height);
        } else t.renderbufferStorage(36161, 34041, n.width, n.height);

        t.framebufferRenderbuffer(36160, 33306, 36161, e);
      } else {
        var _e93 = !0 === n.isWebGLMultipleRenderTargets ? n.texture[0] : n.texture,
            _r64 = s.convert(_e93.format),
            _a23 = s.convert(_e93.type),
            _o14 = O(_e93.internalFormat, _r64, _a23);

        if (i) {
          var _e94 = $(n);

          t.renderbufferStorageMultisample(36161, _e94, _o14, n.width, n.height);
        } else t.renderbufferStorage(36161, _o14, n.width, n.height);
      }

      t.bindRenderbuffer(36161, null);
    }

    function K(e) {
      var r = i.get(e),
          s = !0 === e.isWebGLCubeRenderTarget;

      if (e.depthTexture) {
        if (s) throw new Error("target.depthTexture not supported in Cube render targets");
        !function (e, r) {
          if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
          if (n.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), V(r.depthTexture, 0);

          var s = i.get(r.depthTexture).__webglTexture;

          if (r.depthTexture.format === A) t.framebufferTexture2D(36160, 36096, 3553, s, 0);else {
            if (r.depthTexture.format !== L) throw new Error("Unknown depthTexture format");
            t.framebufferTexture2D(36160, 33306, 3553, s, 0);
          }
        }(r.__webglFramebuffer, e);
      } else if (s) {
        r.__webglDepthbuffer = [];

        for (var _i82 = 0; _i82 < 6; _i82++) {
          n.bindFramebuffer(36160, r.__webglFramebuffer[_i82]), r.__webglDepthbuffer[_i82] = t.createRenderbuffer(), Q(r.__webglDepthbuffer[_i82], e, !1);
        }
      } else n.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), Q(r.__webglDepthbuffer, e, !1);

      n.bindFramebuffer(36160, null);
    }

    function $(t) {
      return o && t.isWebGLMultisampleRenderTarget ? Math.min(R, t.samples) : 0;
    }

    var tt = !1,
        et = !1;
    this.allocateTextureUnit = function () {
      var t = k;
      return t >= l && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + l), k += 1, t;
    }, this.resetTextureUnits = function () {
      k = 0;
    }, this.setTexture2D = V, this.setTexture2DArray = function (t, e) {
      var r = i.get(t);
      t.version > 0 && r.__version !== t.version ? Z(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(35866, r.__webglTexture));
    }, this.setTexture3D = function (t, e) {
      var r = i.get(t);
      t.version > 0 && r.__version !== t.version ? Z(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(32879, r.__webglTexture));
    }, this.setTextureCube = W, this.setupRenderTarget = function (e) {
      var l = e.texture,
          c = i.get(e),
          h = i.get(l);
      e.addEventListener("dispose", U), !0 !== e.isWebGLMultipleRenderTargets && (h.__webglTexture = t.createTexture(), h.__version = l.version, a.memory.textures++);
      var u = !0 === e.isWebGLCubeRenderTarget,
          d = !0 === e.isWebGLMultipleRenderTargets,
          p = !0 === e.isWebGLMultisampleRenderTarget,
          m = l.isDataTexture3D || l.isDataTexture2DArray,
          f = B(e) || o;

      if (!o || l.format !== T || l.type !== b && l.type !== M || (l.format = E, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), u) {
        c.__webglFramebuffer = [];

        for (var _e95 = 0; _e95 < 6; _e95++) {
          c.__webglFramebuffer[_e95] = t.createFramebuffer();
        }
      } else if (c.__webglFramebuffer = t.createFramebuffer(), d) {
        if (r.drawBuffers) {
          var _n92 = e.texture;

          for (var _e96 = 0, _r65 = _n92.length; _e96 < _r65; _e96++) {
            var _r66 = i.get(_n92[_e96]);

            void 0 === _r66.__webglTexture && (_r66.__webglTexture = t.createTexture(), a.memory.textures++);
          }
        } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      } else if (p) if (o) {
        c.__webglMultisampledFramebuffer = t.createFramebuffer(), c.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, c.__webglColorRenderbuffer);

        var _i83 = s.convert(l.format),
            _r67 = s.convert(l.type),
            _a24 = O(l.internalFormat, _i83, _r67),
            _o15 = $(e);

        t.renderbufferStorageMultisample(36161, _o15, _a24, e.width, e.height), n.bindFramebuffer(36160, c.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, c.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (c.__webglDepthRenderbuffer = t.createRenderbuffer(), Q(c.__webglDepthRenderbuffer, e, !0)), n.bindFramebuffer(36160, null);
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");

      if (u) {
        n.bindTexture(34067, h.__webglTexture), X(34067, l, f);

        for (var _t128 = 0; _t128 < 6; _t128++) {
          J(c.__webglFramebuffer[_t128], e, l, 36064, 34069 + _t128);
        }

        z(l, f) && F(34067, l, e.width, e.height), n.bindTexture(34067, null);
      } else if (d) {
        var _t129 = e.texture;

        for (var _r68 = 0, _s28 = _t129.length; _r68 < _s28; _r68++) {
          var _s29 = _t129[_r68],
              _a25 = i.get(_s29);

          n.bindTexture(3553, _a25.__webglTexture), X(3553, _s29, f), J(c.__webglFramebuffer, e, _s29, 36064 + _r68, 3553), z(_s29, f) && F(3553, _s29, e.width, e.height);
        }

        n.bindTexture(3553, null);
      } else {
        var _t130 = 3553;
        if (m) if (o) {
          _t130 = l.isDataTexture3D ? 32879 : 35866;
        } else console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.");
        n.bindTexture(_t130, h.__webglTexture), X(_t130, l, f), J(c.__webglFramebuffer, e, l, 36064, _t130), z(l, f) && F(3553, l, e.width, e.height), n.bindTexture(3553, null);
      }

      e.depthBuffer && K(e);
    }, this.updateRenderTargetMipmap = function (t) {
      var e = B(t) || o,
          r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [t.texture];

      for (var _s30 = 0, _a26 = r.length; _s30 < _a26; _s30++) {
        var _a27 = r[_s30];

        if (z(_a27, e)) {
          var _e97 = t.isWebGLCubeRenderTarget ? 34067 : 3553,
              _r69 = i.get(_a27).__webglTexture;

          n.bindTexture(_e97, _r69), F(_e97, _a27, t.width, t.height), n.bindTexture(_e97, null);
        }
      }
    }, this.updateMultisampleRenderTarget = function (e) {
      if (e.isWebGLMultisampleRenderTarget) if (o) {
        var _r70 = e.width,
            _s31 = e.height;
        var _a28 = 16384;
        e.depthBuffer && (_a28 |= 256), e.stencilBuffer && (_a28 |= 1024);

        var _o16 = i.get(e);

        n.bindFramebuffer(36008, _o16.__webglMultisampledFramebuffer), n.bindFramebuffer(36009, _o16.__webglFramebuffer), t.blitFramebuffer(0, 0, _r70, _s31, 0, 0, _r70, _s31, _a28, 9728), n.bindFramebuffer(36008, null), n.bindFramebuffer(36009, _o16.__webglMultisampledFramebuffer);
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
    }, this.safeSetTexture2D = function (t, e) {
      t && t.isWebGLRenderTarget && (!1 === tt && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), tt = !0), t = t.texture), V(t, e);
    }, this.safeSetTextureCube = function (t, e) {
      t && t.isWebGLCubeRenderTarget && (!1 === et && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), et = !0), t = t.texture), W(t, e);
    };
  }

  function ms(t, e, n) {
    var i = n.isWebGL2;
    return {
      convert: function convert(t) {
        var n;
        if (t === x) return 5121;
        if (1017 === t) return 32819;
        if (1018 === t) return 32820;
        if (1019 === t) return 33635;
        if (1010 === t) return 5120;
        if (1011 === t) return 5122;
        if (t === _) return 5123;
        if (1013 === t) return 5124;
        if (t === w) return 5125;
        if (t === b) return 5126;
        if (t === M) return i ? 5131 : (n = e.get("OES_texture_half_float"), null !== n ? n.HALF_FLOAT_OES : null);
        if (1021 === t) return 6406;
        if (t === T) return 6407;
        if (t === E) return 6408;
        if (1024 === t) return 6409;
        if (1025 === t) return 6410;
        if (t === A) return 6402;
        if (t === L) return 34041;
        if (1028 === t) return 6403;
        if (1029 === t) return 36244;
        if (1030 === t) return 33319;
        if (1031 === t) return 33320;
        if (1032 === t) return 36248;
        if (1033 === t) return 36249;

        if (t === R || t === C || t === P || t === D) {
          if (n = e.get("WEBGL_compressed_texture_s3tc"), null === n) return null;
          if (t === R) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (t === C) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (t === P) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (t === D) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }

        if (t === I || t === N || t === B || t === z) {
          if (n = e.get("WEBGL_compressed_texture_pvrtc"), null === n) return null;
          if (t === I) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (t === N) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (t === B) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (t === z) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }

        if (36196 === t) return n = e.get("WEBGL_compressed_texture_etc1"), null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null;

        if ((t === F || t === O) && (n = e.get("WEBGL_compressed_texture_etc"), null !== n)) {
          if (t === F) return n.COMPRESSED_RGB8_ETC2;
          if (t === O) return n.COMPRESSED_RGBA8_ETC2_EAC;
        }

        return 37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t || 37840 === t || 37841 === t || 37842 === t || 37843 === t || 37844 === t || 37845 === t || 37846 === t || 37847 === t || 37848 === t || 37849 === t || 37850 === t || 37851 === t || 37852 === t || 37853 === t ? (n = e.get("WEBGL_compressed_texture_astc"), null !== n ? t : null) : 36492 === t ? (n = e.get("EXT_texture_compression_bptc"), null !== n ? t : null) : t === S ? i ? 34042 : (n = e.get("WEBGL_depth_texture"), null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null) : void 0;
      }
    };
  }

  var fs = /*#__PURE__*/function (_$n) {
    _inherits(fs, _$n);

    var _super32 = _createSuper(fs);

    function fs() {
      var _this22;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      _classCallCheck(this, fs);

      _this22 = _super32.call(this), _this22.cameras = t;
      return _this22;
    }

    return fs;
  }($n);

  fs.prototype.isArrayCamera = !0;

  var gs = /*#__PURE__*/function (_Pe4) {
    _inherits(gs, _Pe4);

    var _super33 = _createSuper(gs);

    function gs() {
      var _this23;

      _classCallCheck(this, gs);

      _this23 = _super33.call(this), _this23.type = "Group";
      return _this23;
    }

    return gs;
  }(Pe);

  gs.prototype.isGroup = !0;
  var vs = {
    type: "move"
  };

  var ys = /*#__PURE__*/function () {
    function ys() {
      _classCallCheck(this, ys);

      this._targetRay = null, this._grip = null, this._hand = null;
    }

    _createClass(ys, [{
      key: "getHandSpace",
      value: function getHandSpace() {
        return null === this._hand && (this._hand = new gs(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
          pinching: !1
        }), this._hand;
      }
    }, {
      key: "getTargetRaySpace",
      value: function getTargetRaySpace() {
        return null === this._targetRay && (this._targetRay = new gs(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new Rt(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new Rt()), this._targetRay;
      }
    }, {
      key: "getGripSpace",
      value: function getGripSpace() {
        return null === this._grip && (this._grip = new gs(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new Rt(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new Rt()), this._grip;
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(t) {
        return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this;
      }
    }, {
      key: "disconnect",
      value: function disconnect(t) {
        return this.dispatchEvent({
          type: "disconnected",
          data: t
        }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this;
      }
    }, {
      key: "update",
      value: function update(t, e, n) {
        var i = null,
            r = null,
            s = null;
        var a = this._targetRay,
            o = this._grip,
            l = this._hand;
        if (t && "visible-blurred" !== e.session.visibilityState) if (null !== a && (i = e.getPose(t.targetRaySpace, n), null !== i && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(vs))), l && t.hand) {
          s = !0;

          var _iterator = _createForOfIteratorHelper(t.hand.values()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _i85 = _step.value;

              var _t131 = e.getJointPose(_i85, n);

              if (void 0 === l.joints[_i85.jointName]) {
                var _t132 = new gs();

                _t132.matrixAutoUpdate = !1, _t132.visible = !1, l.joints[_i85.jointName] = _t132, l.add(_t132);
              }

              var _r72 = l.joints[_i85.jointName];
              null !== _t131 && (_r72.matrix.fromArray(_t131.transform.matrix), _r72.matrix.decompose(_r72.position, _r72.rotation, _r72.scale), _r72.jointRadius = _t131.radius), _r72.visible = null !== _t131;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var _i84 = l.joints["index-finger-tip"],
              _r71 = l.joints["thumb-tip"],
              _a29 = _i84.position.distanceTo(_r71.position),
              _o17 = .02,
              _c14 = .005;

          l.inputState.pinching && _a29 > _o17 + _c14 ? (l.inputState.pinching = !1, this.dispatchEvent({
            type: "pinchend",
            handedness: t.handedness,
            target: this
          })) : !l.inputState.pinching && _a29 <= _o17 - _c14 && (l.inputState.pinching = !0, this.dispatchEvent({
            type: "pinchstart",
            handedness: t.handedness,
            target: this
          }));
        } else null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
        return null !== a && (a.visible = null !== i), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this;
      }
    }]);

    return ys;
  }();

  var xs = /*#__PURE__*/function (_rt6) {
    _inherits(xs, _rt6);

    var _super34 = _createSuper(xs);

    function xs(t, e) {
      var _this24;

      _classCallCheck(this, xs);

      _this24 = _super34.call(this);

      var n = _assertThisInitialized(_this24),
          i = t.state;

      var r = null,
          s = 1,
          a = null,
          o = "local-floor",
          l = null;
      var c = [],
          h = new Map(),
          u = new $n();
      u.layers.enable(1), u.viewport = new St();
      var d = new $n();
      d.layers.enable(2), d.viewport = new St();
      var p = [u, d],
          m = new fs();
      m.layers.enable(1), m.layers.enable(2);
      var f = null,
          g = null;

      function v(t) {
        var e = h.get(t.inputSource);
        e && e.dispatchEvent({
          type: t.type,
          data: t.inputSource
        });
      }

      function y() {
        h.forEach(function (t, e) {
          t.disconnect(e);
        }), h.clear(), f = null, g = null, i.bindXRFramebuffer(null), t.setRenderTarget(t.getRenderTarget()), S.stop(), n.isPresenting = !1, n.dispatchEvent({
          type: "sessionend"
        });
      }

      function x(t) {
        var e = r.inputSources;

        for (var _t133 = 0; _t133 < c.length; _t133++) {
          h.set(e[_t133], c[_t133]);
        }

        for (var _e98 = 0; _e98 < t.removed.length; _e98++) {
          var _n93 = t.removed[_e98],
              _i86 = h.get(_n93);

          _i86 && (_i86.dispatchEvent({
            type: "disconnected",
            data: _n93
          }), h.delete(_n93));
        }

        for (var _e99 = 0; _e99 < t.added.length; _e99++) {
          var _n94 = t.added[_e99],
              _i87 = h.get(_n94);

          _i87 && _i87.dispatchEvent({
            type: "connected",
            data: _n94
          });
        }
      }

      _this24.cameraAutoUpdate = !0, _this24.enabled = !1, _this24.isPresenting = !1, _this24.getController = function (t) {
        var e = c[t];
        return void 0 === e && (e = new ys(), c[t] = e), e.getTargetRaySpace();
      }, _this24.getControllerGrip = function (t) {
        var e = c[t];
        return void 0 === e && (e = new ys(), c[t] = e), e.getGripSpace();
      }, _this24.getHand = function (t) {
        var e = c[t];
        return void 0 === e && (e = new ys(), c[t] = e), e.getHandSpace();
      }, _this24.setFramebufferScaleFactor = function (t) {
        s = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
      }, _this24.setReferenceSpaceType = function (t) {
        o = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
      }, _this24.getReferenceSpace = function () {
        return a;
      }, _this24.getSession = function () {
        return r;
      }, _this24.setSession = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t) {
          var _t134, _i88, _l15;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(r = t, null !== r)) {
                    _context.next = 16;
                    break;
                  }

                  r.addEventListener("select", v), r.addEventListener("selectstart", v), r.addEventListener("selectend", v), r.addEventListener("squeeze", v), r.addEventListener("squeezestart", v), r.addEventListener("squeezeend", v), r.addEventListener("end", y), r.addEventListener("inputsourceschange", x);
                  _t134 = e.getContextAttributes();
                  _context.t0 = !0 !== _t134.xrCompatible;

                  if (!_context.t0) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 7;
                  return e.makeXRCompatible();

                case 7:
                  _i88 = {
                    antialias: _t134.antialias,
                    alpha: _t134.alpha,
                    depth: _t134.depth,
                    stencil: _t134.stencil,
                    framebufferScaleFactor: s
                  }, _l15 = new XRWebGLLayer(r, e, _i88);
                  r.updateRenderState({
                    baseLayer: _l15
                  });
                  _context.next = 11;
                  return r.requestReferenceSpace(o);

                case 11:
                  a = _context.sent;
                  S.setContext(r);
                  S.start();
                  n.isPresenting = !0;
                  n.dispatchEvent({
                    type: "sessionstart"
                  });

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x3) {
          return _ref.apply(this, arguments);
        };
      }();

      var _ = new Rt(),
          w = new Rt();

      function b(t, e) {
        null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert();
      }

      _this24.updateCamera = function (t) {
        if (null === r) return;
        m.near = d.near = u.near = t.near, m.far = d.far = u.far = t.far, f === m.near && g === m.far || (r.updateRenderState({
          depthNear: m.near,
          depthFar: m.far
        }), f = m.near, g = m.far);
        var e = t.parent,
            n = m.cameras;
        b(m, e);

        for (var _t135 = 0; _t135 < n.length; _t135++) {
          b(n[_t135], e);
        }

        t.matrixWorld.copy(m.matrixWorld), t.matrix.copy(m.matrix), t.matrix.decompose(t.position, t.quaternion, t.scale);
        var i = t.children;

        for (var _t136 = 0, _e100 = i.length; _t136 < _e100; _t136++) {
          i[_t136].updateMatrixWorld(!0);
        }

        2 === n.length ? function (t, e, n) {
          _.setFromMatrixPosition(e.matrixWorld), w.setFromMatrixPosition(n.matrixWorld);

          var i = _.distanceTo(w),
              r = e.projectionMatrix.elements,
              s = n.projectionMatrix.elements,
              a = r[14] / (r[10] - 1),
              o = r[14] / (r[10] + 1),
              l = (r[9] + 1) / r[5],
              c = (r[9] - 1) / r[5],
              h = (r[8] - 1) / r[0],
              u = (s[8] + 1) / s[0],
              d = a * h,
              p = a * u,
              m = i / (-h + u),
              f = m * -h;

          e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(f), t.translateZ(m), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
          var g = a + m,
              v = o + m,
              y = d - f,
              x = p + (i - f),
              b = l * o / v * g,
              M = c * o / v * g;
          t.projectionMatrix.makePerspective(y, x, b, M, g, v);
        }(m, u, d) : m.projectionMatrix.copy(u.projectionMatrix);
      }, _this24.getCamera = function () {
        return m;
      };
      var M = null;
      var S = new oi();
      S.setAnimationLoop(function (t, e) {
        if (l = e.getViewerPose(a), null !== l) {
          var _t137 = l.views,
              _e101 = r.renderState.baseLayer;
          i.bindXRFramebuffer(_e101.framebuffer);

          var _n95 = !1;

          _t137.length !== m.cameras.length && (m.cameras.length = 0, _n95 = !0);

          for (var _i89 = 0; _i89 < _t137.length; _i89++) {
            var _r73 = _t137[_i89],
                _s32 = _e101.getViewport(_r73),
                _a30 = p[_i89];

            _a30.matrix.fromArray(_r73.transform.matrix), _a30.projectionMatrix.fromArray(_r73.projectionMatrix), _a30.viewport.set(_s32.x, _s32.y, _s32.width, _s32.height), 0 === _i89 && m.matrix.copy(_a30.matrix), !0 === _n95 && m.cameras.push(_a30);
          }
        }

        var n = r.inputSources;

        for (var _t138 = 0; _t138 < c.length; _t138++) {
          var _i90 = c[_t138],
              _r74 = n[_t138];

          _i90.update(_r74, e, a);
        }

        M && M(t, e);
      }), _this24.setAnimationLoop = function (t) {
        M = t;
      }, _this24.dispose = function () {};
      return _this24;
    }

    return xs;
  }(rt);

  function _s(t) {
    function e(e, n) {
      e.opacity.value = n.opacity, n.color && e.diffuse.value.copy(n.color), n.emissive && e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (e.map.value = n.map), n.alphaMap && (e.alphaMap.value = n.alphaMap), n.specularMap && (e.specularMap.value = n.specularMap);
      var i = t.get(n).envMap;

      if (i) {
        e.envMap.value = i, e.flipEnvMap.value = i.isCubeTexture && i._needsFlipEnvMap ? -1 : 1, e.reflectivity.value = n.reflectivity, e.refractionRatio.value = n.refractionRatio;

        var _r75 = t.get(i).__maxMipLevel;

        void 0 !== _r75 && (e.maxMipLevel.value = _r75);
      }

      var r, s;
      n.lightMap && (e.lightMap.value = n.lightMap, e.lightMapIntensity.value = n.lightMapIntensity), n.aoMap && (e.aoMap.value = n.aoMap, e.aoMapIntensity.value = n.aoMapIntensity), n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), e.uvTransform.value.copy(r.matrix)), n.aoMap ? s = n.aoMap : n.lightMap && (s = n.lightMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), e.uv2Transform.value.copy(s.matrix));
    }

    function n(e, n) {
      e.roughness.value = n.roughness, e.metalness.value = n.metalness, n.roughnessMap && (e.roughnessMap.value = n.roughnessMap), n.metalnessMap && (e.metalnessMap.value = n.metalnessMap), n.emissiveMap && (e.emissiveMap.value = n.emissiveMap), n.bumpMap && (e.bumpMap.value = n.bumpMap, e.bumpScale.value = n.bumpScale, 1 === n.side && (e.bumpScale.value *= -1)), n.normalMap && (e.normalMap.value = n.normalMap, e.normalScale.value.copy(n.normalScale), 1 === n.side && e.normalScale.value.negate()), n.displacementMap && (e.displacementMap.value = n.displacementMap, e.displacementScale.value = n.displacementScale, e.displacementBias.value = n.displacementBias);
      t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity);
    }

    return {
      refreshFogUniforms: function refreshFogUniforms(t, e) {
        t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density);
      },
      refreshMaterialUniforms: function refreshMaterialUniforms(t, i, r, s, a) {
        i.isMeshBasicMaterial ? e(t, i) : i.isMeshLambertMaterial ? (e(t, i), function (t, e) {
          e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
        }(t, i)) : i.isMeshToonMaterial ? (e(t, i), function (t, e) {
          e.gradientMap && (t.gradientMap.value = e.gradientMap);
          e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
          e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, i)) : i.isMeshPhongMaterial ? (e(t, i), function (t, e) {
          t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
          e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, i)) : i.isMeshStandardMaterial ? (e(t, i), i.isMeshPhysicalMaterial ? function (t, e, i) {
          n(t, e), t.reflectivity.value = e.reflectivity, t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.sheen && t.sheen.value.copy(e.sheen);
          e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
          e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
          e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate());
          t.transmission.value = e.transmission, e.transmissionMap && (t.transmissionMap.value = e.transmissionMap);
          e.transmission > 0 && (t.transmissionSamplerMap.value = i.texture, t.transmissionSamplerSize.value.set(i.width, i.height));
          t.thickness.value = e.thickness, e.thicknessMap && (t.thicknessMap.value = e.thicknessMap);
          t.attenuationDistance.value = e.attenuationDistance, t.attenuationColor.value.copy(e.attenuationColor);
        }(t, i, a) : n(t, i)) : i.isMeshMatcapMaterial ? (e(t, i), function (t, e) {
          e.matcap && (t.matcap.value = e.matcap);
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
          e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, i)) : i.isMeshDepthMaterial ? (e(t, i), function (t, e) {
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, i)) : i.isMeshDistanceMaterial ? (e(t, i), function (t, e) {
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
          t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance;
        }(t, i)) : i.isMeshNormalMaterial ? (e(t, i), function (t, e) {
          e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1));
          e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate());
          e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
        }(t, i)) : i.isLineBasicMaterial ? (function (t, e) {
          t.diffuse.value.copy(e.color), t.opacity.value = e.opacity;
        }(t, i), i.isLineDashedMaterial && function (t, e) {
          t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale;
        }(t, i)) : i.isPointsMaterial ? function (t, e, n, i) {
          t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * n, t.scale.value = .5 * i, e.map && (t.map.value = e.map);
          e.alphaMap && (t.alphaMap.value = e.alphaMap);
          var r;
          e.map ? r = e.map : e.alphaMap && (r = e.alphaMap);
          void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix));
        }(t, i, r, s) : i.isSpriteMaterial ? function (t, e) {
          t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map);
          e.alphaMap && (t.alphaMap.value = e.alphaMap);
          var n;
          e.map ? n = e.map : e.alphaMap && (n = e.alphaMap);
          void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix));
        }(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color), t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
      }
    };
  }

  function ws(t) {
    var e = void 0 !== (t = t || {}).canvas ? t.canvas : function () {
      var t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
      return t.style.display = "block", t;
    }(),
        n = void 0 !== t.context ? t.context : null,
        i = void 0 !== t.alpha && t.alpha,
        r = void 0 === t.depth || t.depth,
        s = void 0 === t.stencil || t.stencil,
        a = void 0 !== t.antialias && t.antialias,
        o = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
        l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
        c = void 0 !== t.powerPreference ? t.powerPreference : "default",
        h = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
    var d = null,
        m = null;
    var f = [],
        g = [];
    this.domElement = e, this.debug = {
      checkShaderErrors: !0
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = X, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
    var v = this;

    var _ = !1,
        w = 0,
        S = 0,
        T = null,
        A = -1,
        L = null;

    var R = new St(),
        C = new St();
    var P = null,
        D = e.width,
        I = e.height,
        N = 1,
        B = null,
        z = null;
    var F = new St(0, 0, D, I),
        O = new St(0, 0, D, I);
    var H = !1;
    var G = [],
        U = new ai();
    var k = !1,
        V = !1,
        W = null;
    var j = new ae(),
        q = new Rt(),
        Y = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0
    };

    function Z() {
      return null === T ? N : 1;
    }

    var J,
        Q,
        K,
        $,
        tt,
        et,
        nt,
        it,
        rt,
        st,
        at,
        ot,
        lt,
        ct,
        ht,
        ut,
        dt,
        pt,
        mt,
        ft,
        gt,
        yt,
        xt = n;

    function _t(t, n) {
      for (var _i91 = 0; _i91 < t.length; _i91++) {
        var _r76 = t[_i91],
            _s33 = e.getContext(_r76, n);

        if (null !== _s33) return _s33;
      }

      return null;
    }

    try {
      var _t139 = {
        alpha: i,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: o,
        preserveDrawingBuffer: l,
        powerPreference: c,
        failIfMajorPerformanceCaveat: h
      };

      if (e.addEventListener("webglcontextlost", Mt, !1), e.addEventListener("webglcontextrestored", Et, !1), null === xt) {
        var _e102 = ["webgl2", "webgl", "experimental-webgl"];
        if (!0 === v.isWebGL1Renderer && _e102.shift(), xt = _t(_e102, _t139), null === xt) throw _t(_e102) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }

      void 0 === xt.getShaderPrecisionFormat && (xt.getShaderPrecisionFormat = function () {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1
        };
      });
    } catch (t) {
      throw console.error("THREE.WebGLRenderer: " + t.message), t;
    }

    function wt() {
      J = new xi(xt), Q = new gi(xt, J, t), J.init(Q), gt = new ms(xt, J, Q), K = new ds(xt, J, Q), G[0] = 1029, $ = new bi(xt), tt = new Kr(), et = new ps(xt, J, K, tt, Q, gt, $), nt = new yi(v), it = new li(xt, Q), yt = new mi(xt, J, it, Q), rt = new _i(xt, it, $, yt), st = new Ei(xt, rt, it, $), pt = new Ti(xt), ht = new vi(tt), at = new Qr(v, nt, J, Q, yt, ht), ot = new _s(tt), lt = new ns(tt), ct = new ls(J, Q), dt = new pi(v, nt, K, st, o), ut = new us(v, st, Q), mt = new fi(xt, J, $, Q), ft = new wi(xt, J, $, Q), $.programs = at.programs, v.capabilities = Q, v.extensions = J, v.properties = tt, v.renderLists = lt, v.shadowMap = ut, v.state = K, v.info = $;
    }

    wt();
    var bt = new xs(v, xt);

    function Mt(t) {
      t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), _ = !0;
    }

    function Et() {
      console.log("THREE.WebGLRenderer: Context Restored."), _ = !1;
      var t = $.autoReset,
          e = ut.enabled,
          n = ut.autoUpdate,
          i = ut.needsUpdate,
          r = ut.type;
      wt(), $.autoReset = t, ut.enabled = e, ut.autoUpdate = n, ut.needsUpdate = i, ut.type = r;
    }

    function At(t) {
      var e = t.target;
      e.removeEventListener("dispose", At), function (t) {
        (function (t) {
          var e = tt.get(t).programs;
          void 0 !== e && e.forEach(function (t) {
            at.releaseProgram(t);
          });
        })(t), tt.remove(t);
      }(e);
    }

    this.xr = bt, this.getContext = function () {
      return xt;
    }, this.getContextAttributes = function () {
      return xt.getContextAttributes();
    }, this.forceContextLoss = function () {
      var t = J.get("WEBGL_lose_context");
      t && t.loseContext();
    }, this.forceContextRestore = function () {
      var t = J.get("WEBGL_lose_context");
      t && t.restoreContext();
    }, this.getPixelRatio = function () {
      return N;
    }, this.setPixelRatio = function (t) {
      void 0 !== t && (N = t, this.setSize(D, I, !1));
    }, this.getSize = function (t) {
      return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), t = new vt()), t.set(D, I);
    }, this.setSize = function (t, n, i) {
      bt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (D = t, I = n, e.width = Math.floor(t * N), e.height = Math.floor(n * N), !1 !== i && (e.style.width = t + "px", e.style.height = n + "px"), this.setViewport(0, 0, t, n));
    }, this.getDrawingBufferSize = function (t) {
      return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), t = new vt()), t.set(D * N, I * N).floor();
    }, this.setDrawingBufferSize = function (t, n, i) {
      D = t, I = n, N = i, e.width = Math.floor(t * i), e.height = Math.floor(n * i), this.setViewport(0, 0, t, n);
    }, this.getCurrentViewport = function (t) {
      return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), t = new St()), t.copy(R);
    }, this.getViewport = function (t) {
      return t.copy(F);
    }, this.setViewport = function (t, e, n, i) {
      t.isVector4 ? F.set(t.x, t.y, t.z, t.w) : F.set(t, e, n, i), K.viewport(R.copy(F).multiplyScalar(N).floor());
    }, this.getScissor = function (t) {
      return t.copy(O);
    }, this.setScissor = function (t, e, n, i) {
      t.isVector4 ? O.set(t.x, t.y, t.z, t.w) : O.set(t, e, n, i), K.scissor(C.copy(O).multiplyScalar(N).floor());
    }, this.getScissorTest = function () {
      return H;
    }, this.setScissorTest = function (t) {
      K.setScissorTest(H = t);
    }, this.setOpaqueSort = function (t) {
      B = t;
    }, this.setTransparentSort = function (t) {
      z = t;
    }, this.getClearColor = function (t) {
      return void 0 === t && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"), t = new en()), t.copy(dt.getClearColor());
    }, this.setClearColor = function () {
      dt.setClearColor.apply(dt, arguments);
    }, this.getClearAlpha = function () {
      return dt.getClearAlpha();
    }, this.setClearAlpha = function () {
      dt.setClearAlpha.apply(dt, arguments);
    }, this.clear = function (t, e, n) {
      var i = 0;
      (void 0 === t || t) && (i |= 16384), (void 0 === e || e) && (i |= 256), (void 0 === n || n) && (i |= 1024), xt.clear(i);
    }, this.clearColor = function () {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }, this.dispose = function () {
      e.removeEventListener("webglcontextlost", Mt, !1), e.removeEventListener("webglcontextrestored", Et, !1), lt.dispose(), ct.dispose(), tt.dispose(), nt.dispose(), st.dispose(), yt.dispose(), bt.dispose(), bt.removeEventListener("sessionstart", Ct), bt.removeEventListener("sessionend", Pt), W && (W.dispose(), W = null), Dt.stop();
    }, this.renderBufferImmediate = function (t, e) {
      yt.initAttributes();
      var n = tt.get(t);
      t.hasPositions && !n.position && (n.position = xt.createBuffer()), t.hasNormals && !n.normal && (n.normal = xt.createBuffer()), t.hasUvs && !n.uv && (n.uv = xt.createBuffer()), t.hasColors && !n.color && (n.color = xt.createBuffer());
      var i = e.getAttributes();
      t.hasPositions && (xt.bindBuffer(34962, n.position), xt.bufferData(34962, t.positionArray, 35048), yt.enableAttribute(i.position), xt.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)), t.hasNormals && (xt.bindBuffer(34962, n.normal), xt.bufferData(34962, t.normalArray, 35048), yt.enableAttribute(i.normal), xt.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (xt.bindBuffer(34962, n.uv), xt.bufferData(34962, t.uvArray, 35048), yt.enableAttribute(i.uv), xt.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)), t.hasColors && (xt.bindBuffer(34962, n.color), xt.bufferData(34962, t.colorArray, 35048), yt.enableAttribute(i.color), xt.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)), yt.disableUnusedAttributes(), xt.drawArrays(4, 0, t.count), t.count = 0;
    }, this.renderBufferDirect = function (t, e, n, i, r, s) {
      null === e && (e = Y);
      var a = r.isMesh && r.matrixWorld.determinant() < 0,
          o = Ot(t, e, i, r);
      K.setMaterial(i, a);
      var l = n.index;
      var c = n.attributes.position;

      if (null === l) {
        if (void 0 === c || 0 === c.count) return;
      } else if (0 === l.count) return;

      var h,
          u = 1;
      !0 === i.wireframe && (l = rt.getWireframeAttribute(n), u = 2), (i.morphTargets || i.morphNormals) && pt.update(r, n, i, o), yt.setup(r, i, o, n, l);
      var d = mt;
      null !== l && (h = it.get(l), d = ft, d.setIndex(h));

      var p = null !== l ? l.count : c.count,
          m = n.drawRange.start * u,
          f = n.drawRange.count * u,
          g = null !== s ? s.start * u : 0,
          v = null !== s ? s.count * u : 1 / 0,
          y = Math.max(m, g),
          x = Math.min(p, m + f, g + v) - 1,
          _ = Math.max(0, x - y + 1);

      if (0 !== _) {
        if (r.isMesh) !0 === i.wireframe ? (K.setLineWidth(i.wireframeLinewidth * Z()), d.setMode(1)) : d.setMode(4);else if (r.isLine) {
          var _t140 = i.linewidth;
          void 0 === _t140 && (_t140 = 1), K.setLineWidth(_t140 * Z()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3);
        } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
        if (r.isInstancedMesh) d.renderInstances(y, _, r.count);else if (n.isInstancedBufferGeometry) {
          var _t141 = Math.min(n.instanceCount, n._maxInstanceCount);

          d.renderInstances(y, _, _t141);
        } else d.render(y, _);
      }
    }, this.compile = function (t, e) {
      m = ct.get(t), m.init(), t.traverseVisible(function (t) {
        t.isLight && t.layers.test(e.layers) && (m.pushLight(t), t.castShadow && m.pushShadow(t));
      }), m.setupLights(), t.traverse(function (e) {
        var n = e.material;
        if (n) if (Array.isArray(n)) for (var _i92 = 0; _i92 < n.length; _i92++) {
          zt(n[_i92], t, e);
        } else zt(n, t, e);
      });
    };
    var Lt = null;

    function Ct() {
      Dt.stop();
    }

    function Pt() {
      Dt.start();
    }

    var Dt = new oi();

    function It(t, e, n, i) {
      if (!1 === t.visible) return;
      if (t.layers.test(e.layers)) if (t.isGroup) n = t.renderOrder;else if (t.isLOD) !0 === t.autoUpdate && t.update(e);else if (t.isLight) m.pushLight(t), t.castShadow && m.pushShadow(t);else if (t.isSprite) {
        if (!t.frustumCulled || U.intersectsSprite(t)) {
          i && q.setFromMatrixPosition(t.matrixWorld).applyMatrix4(j);

          var _e103 = st.update(t),
              _r77 = t.material;

          _r77.visible && d.push(t, _e103, _r77, n, q.z, null);
        }
      } else if (t.isImmediateRenderObject) i && q.setFromMatrixPosition(t.matrixWorld).applyMatrix4(j), d.push(t, null, t.material, n, q.z, null);else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== $.render.frame && (t.skeleton.update(), t.skeleton.frame = $.render.frame), !t.frustumCulled || U.intersectsObject(t))) {
        i && q.setFromMatrixPosition(t.matrixWorld).applyMatrix4(j);

        var _e104 = st.update(t),
            _r78 = t.material;

        if (Array.isArray(_r78)) {
          var _i93 = _e104.groups;

          for (var _s34 = 0, _a31 = _i93.length; _s34 < _a31; _s34++) {
            var _a32 = _i93[_s34],
                _o18 = _r78[_a32.materialIndex];
            _o18 && _o18.visible && d.push(t, _e104, _o18, n, q.z, _a32);
          }
        } else _r78.visible && d.push(t, _e104, _r78, n, q.z, null);
      }
      var r = t.children;

      for (var _t142 = 0, _s35 = r.length; _t142 < _s35; _t142++) {
        It(r[_t142], e, n, i);
      }
    }

    function Nt(t, e, n) {
      var i = !0 === e.isScene ? e.overrideMaterial : null;

      for (var _r79 = 0, _s36 = t.length; _r79 < _s36; _r79++) {
        var _s37 = t[_r79],
            _a33 = _s37.object,
            _o19 = _s37.geometry,
            _l16 = null === i ? _s37.material : i,
            _c15 = _s37.group;

        if (n.isArrayCamera) {
          var _t143 = n.cameras;

          for (var _n96 = 0, _i94 = _t143.length; _n96 < _i94; _n96++) {
            var _i95 = _t143[_n96];
            _a33.layers.test(_i95.layers) && (K.viewport(R.copy(_i95.viewport)), m.setupLightsView(_i95), Bt(_a33, e, _i95, _o19, _l16, _c15));
          }
        } else Bt(_a33, e, n, _o19, _l16, _c15);
      }
    }

    function Bt(t, e, n, i, r, s) {
      if (t.onBeforeRender(v, e, n, i, r, s), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
        var _i96 = Ot(n, e, r, t);

        K.setMaterial(r), yt.reset(), function (t, e) {
          t.render(function (t) {
            v.renderBufferImmediate(t, e);
          });
        }(t, _i96);
      } else v.renderBufferDirect(n, e, i, r, t, s);

      t.onAfterRender(v, e, n, i, r, s);
    }

    function zt(t, e, n) {
      !0 !== e.isScene && (e = Y);
      var i = tt.get(t),
          r = m.state.lights,
          s = m.state.shadowsArray,
          a = r.state.version,
          o = at.getParameters(t, r.state, s, e, n),
          l = at.getProgramCacheKey(o);
      var c = i.programs;
      i.environment = t.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.envMap = nt.get(t.envMap || i.environment), void 0 === c && (t.addEventListener("dispose", At), c = new Map(), i.programs = c);
      var h = c.get(l);

      if (void 0 !== h) {
        if (i.currentProgram === h && i.lightsStateVersion === a) return Ft(t, o), h;
      } else o.uniforms = at.getUniforms(t), t.onBuild(o, v), t.onBeforeCompile(o, v), h = at.acquireProgram(o, l), c.set(l, h), i.uniforms = o.uniforms;

      var u = i.uniforms;
      (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (u.clippingPlanes = ht.uniform), Ft(t, o), i.needsLights = function (t) {
        return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights;
      }(t), i.lightsStateVersion = a, i.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotShadowMatrix.value = r.state.spotShadowMatrix, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
      var d = h.getUniforms(),
          p = Cr.seqWithValue(d.seq, u);
      return i.currentProgram = h, i.uniformsList = p, h;
    }

    function Ft(t, e) {
      var n = tt.get(t);
      n.outputEncoding = e.outputEncoding, n.instancing = e.instancing, n.skinning = e.skinning, n.numClippingPlanes = e.numClippingPlanes, n.numIntersection = e.numClipIntersection, n.vertexAlphas = e.vertexAlphas;
    }

    function Ot(t, e, n, i) {
      !0 !== e.isScene && (e = Y), et.resetTextureUnits();
      var r = e.fog,
          s = n.isMeshStandardMaterial ? e.environment : null,
          a = null === T ? v.outputEncoding : T.texture.encoding,
          o = nt.get(n.envMap || s),
          l = !0 === n.vertexColors && i.geometry && i.geometry.attributes.color && 4 === i.geometry.attributes.color.itemSize,
          c = tt.get(n),
          h = m.state.lights;

      if (!0 === k && (!0 === V || t !== L)) {
        var _e105 = t === L && n.id === A;

        ht.setState(n, t, _e105);
      }

      var u = !1;
      n.version === c.__version ? c.needsLights && c.lightsStateVersion !== h.state.version || c.outputEncoding !== a || i.isInstancedMesh && !1 === c.instancing ? u = !0 : i.isInstancedMesh || !0 !== c.instancing ? i.isSkinnedMesh && !1 === c.skinning ? u = !0 : i.isSkinnedMesh || !0 !== c.skinning ? c.envMap !== o || n.fog && c.fog !== r ? u = !0 : void 0 === c.numClippingPlanes || c.numClippingPlanes === ht.numPlanes && c.numIntersection === ht.numIntersection ? c.vertexAlphas !== l && (u = !0) : u = !0 : u = !0 : u = !0 : (u = !0, c.__version = n.version);
      var d = c.currentProgram;
      !0 === u && (d = zt(n, e, i));
      var p = !1,
          f = !1,
          g = !1;
      var y = d.getUniforms(),
          x = c.uniforms;

      if (K.useProgram(d.program) && (p = !0, f = !0, g = !0), n.id !== A && (A = n.id, f = !0), p || L !== t) {
        if (y.setValue(xt, "projectionMatrix", t.projectionMatrix), Q.logarithmicDepthBuffer && y.setValue(xt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), L !== t && (L = t, f = !0, g = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
          var _e106 = y.map.cameraPosition;
          void 0 !== _e106 && _e106.setValue(xt, q.setFromMatrixPosition(t.matrixWorld));
        }

        (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && y.setValue(xt, "isOrthographic", !0 === t.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || i.isSkinnedMesh) && y.setValue(xt, "viewMatrix", t.matrixWorldInverse);
      }

      if (i.isSkinnedMesh) {
        y.setOptional(xt, i, "bindMatrix"), y.setOptional(xt, i, "bindMatrixInverse");
        var _t144 = i.skeleton;
        _t144 && (Q.floatVertexTextures ? (null === _t144.boneTexture && _t144.computeBoneTexture(), y.setValue(xt, "boneTexture", _t144.boneTexture, et), y.setValue(xt, "boneTextureSize", _t144.boneTextureSize)) : y.setOptional(xt, _t144, "boneMatrices"));
      }

      var _, w;

      return (f || c.receiveShadow !== i.receiveShadow) && (c.receiveShadow = i.receiveShadow, y.setValue(xt, "receiveShadow", i.receiveShadow)), f && (y.setValue(xt, "toneMappingExposure", v.toneMappingExposure), c.needsLights && (w = g, (_ = x).ambientLightColor.needsUpdate = w, _.lightProbe.needsUpdate = w, _.directionalLights.needsUpdate = w, _.directionalLightShadows.needsUpdate = w, _.pointLights.needsUpdate = w, _.pointLightShadows.needsUpdate = w, _.spotLights.needsUpdate = w, _.spotLightShadows.needsUpdate = w, _.rectAreaLights.needsUpdate = w, _.hemisphereLights.needsUpdate = w), r && n.fog && ot.refreshFogUniforms(x, r), ot.refreshMaterialUniforms(x, n, N, I, W), Cr.upload(xt, c.uniformsList, x, et)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Cr.upload(xt, c.uniformsList, x, et), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && y.setValue(xt, "center", i.center), y.setValue(xt, "modelViewMatrix", i.modelViewMatrix), y.setValue(xt, "normalMatrix", i.normalMatrix), y.setValue(xt, "modelMatrix", i.matrixWorld), d;
    }

    Dt.setAnimationLoop(function (t) {
      Lt && Lt(t);
    }), "undefined" != typeof window && Dt.setContext(window), this.setAnimationLoop = function (t) {
      Lt = t, bt.setAnimationLoop(t), null === t ? Dt.stop() : Dt.start();
    }, bt.addEventListener("sessionstart", Ct), bt.addEventListener("sessionend", Pt), this.render = function (t, e) {
      if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      if (!0 === _) return;
      !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === bt.enabled && !0 === bt.isPresenting && (!0 === bt.cameraAutoUpdate && bt.updateCamera(e), e = bt.getCamera()), !0 === t.isScene && t.onBeforeRender(v, t, e, T), m = ct.get(t, g.length), m.init(), g.push(m), j.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), U.setFromProjectionMatrix(j), V = this.localClippingEnabled, k = ht.init(this.clippingPlanes, V, e), d = lt.get(t, f.length), d.init(), f.push(d), It(t, e, 0, v.sortObjects), d.finish(), !0 === v.sortObjects && d.sort(B, z), !0 === k && ht.beginShadows();
      var n = m.state.shadowsArray;
      ut.render(n, t, e), m.setupLights(), m.setupLightsView(e), !0 === k && ht.endShadows(), !0 === this.info.autoReset && this.info.reset(), dt.render(d, t);
      var i = d.opaque,
          r = d.transmissive,
          s = d.transparent;
      i.length > 0 && Nt(i, t, e), r.length > 0 && function (t, e, n, i) {
        null === W && (W = new Tt(1024, 1024, {
          generateMipmaps: !0,
          minFilter: y,
          magFilter: p,
          wrapS: u,
          wrapT: u
        }));
        var r = v.getRenderTarget();
        v.setRenderTarget(W), v.clear(), Nt(t, n, i), et.updateRenderTargetMipmap(W), v.setRenderTarget(r), Nt(e, n, i);
      }(i, r, t, e), s.length > 0 && Nt(s, t, e), null !== T && (et.updateRenderTargetMipmap(T), et.updateMultisampleRenderTarget(T)), !0 === t.isScene && t.onAfterRender(v, t, e), K.buffers.depth.setTest(!0), K.buffers.depth.setMask(!0), K.buffers.color.setMask(!0), K.setPolygonOffset(!1), yt.resetDefaultState(), A = -1, L = null, g.pop(), m = g.length > 0 ? g[g.length - 1] : null, f.pop(), d = f.length > 0 ? f[f.length - 1] : null;
    }, this.getActiveCubeFace = function () {
      return w;
    }, this.getActiveMipmapLevel = function () {
      return S;
    }, this.getRenderTarget = function () {
      return T;
    }, this.setRenderTarget = function (t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      T = t, w = e, S = n, t && void 0 === tt.get(t).__webglFramebuffer && et.setupRenderTarget(t);
      var i = null,
          r = !1,
          s = !1;

      if (t) {
        var _n97 = t.texture;
        (_n97.isDataTexture3D || _n97.isDataTexture2DArray) && (s = !0);

        var _a34 = tt.get(t).__webglFramebuffer;

        t.isWebGLCubeRenderTarget ? (i = _a34[e], r = !0) : i = t.isWebGLMultisampleRenderTarget ? tt.get(t).__webglMultisampledFramebuffer : _a34, R.copy(t.viewport), C.copy(t.scissor), P = t.scissorTest;
      } else R.copy(F).multiplyScalar(N).floor(), C.copy(O).multiplyScalar(N).floor(), P = H;

      if (K.bindFramebuffer(36160, i) && Q.drawBuffers) {
        var _e107 = !1;

        if (t) {
          if (t.isWebGLMultipleRenderTargets) {
            var _n98 = t.texture;

            if (G.length !== _n98.length || 36064 !== G[0]) {
              for (var _t145 = 0, _e108 = _n98.length; _t145 < _e108; _t145++) {
                G[_t145] = 36064 + _t145;
              }

              G.length = _n98.length, _e107 = !0;
            }
          } else 1 === G.length && 36064 === G[0] || (G[0] = 36064, G.length = 1, _e107 = !0);
        } else 1 === G.length && 1029 === G[0] || (G[0] = 1029, G.length = 1, _e107 = !0);
        _e107 && (Q.isWebGL2 ? xt.drawBuffers(G) : J.get("WEBGL_draw_buffers").drawBuffersWEBGL(G));
      }

      if (K.viewport(R), K.scissor(C), K.setScissorTest(P), r) {
        var _i97 = tt.get(t.texture);

        xt.framebufferTexture2D(36160, 36064, 34069 + e, _i97.__webglTexture, n);
      } else if (s) {
        var _i98 = tt.get(t.texture),
            _r80 = e || 0;

        xt.framebufferTextureLayer(36160, 36064, _i98.__webglTexture, n || 0, _r80);
      }
    }, this.readRenderTargetPixels = function (t, e, n, i, r, s, a) {
      if (!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");

      var o = tt.get(t).__webglFramebuffer;

      if (t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o) {
        K.bindFramebuffer(36160, o);

        try {
          var _a35 = t.texture,
              _o20 = _a35.format,
              _l17 = _a35.type;
          if (_o20 !== E && gt.convert(_o20) !== xt.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");

          var _c16 = _l17 === M && (J.has("EXT_color_buffer_half_float") || Q.isWebGL2 && J.has("EXT_color_buffer_float"));

          if (!(_l17 === x || gt.convert(_l17) === xt.getParameter(35738) || _l17 === b && (Q.isWebGL2 || J.has("OES_texture_float") || J.has("WEBGL_color_buffer_float")) || _c16)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          36053 === xt.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && xt.readPixels(e, n, i, r, gt.convert(_o20), gt.convert(_l17), s) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
        } finally {
          var _t146 = null !== T ? tt.get(T).__webglFramebuffer : null;

          K.bindFramebuffer(36160, _t146);
        }
      }
    }, this.copyFramebufferToTexture = function (t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = Math.pow(2, -n),
          r = Math.floor(e.image.width * i),
          s = Math.floor(e.image.height * i);
      var a = gt.convert(e.format);
      Q.isWebGL2 && (6407 === a && (a = 32849), 6408 === a && (a = 32856)), et.setTexture2D(e, 0), xt.copyTexImage2D(3553, n, a, t.x, t.y, r, s, 0), K.unbindTexture();
    }, this.copyTextureToTexture = function (t, e, n) {
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var r = e.image.width,
          s = e.image.height,
          a = gt.convert(n.format),
          o = gt.convert(n.type);
      et.setTexture2D(n, 0), xt.pixelStorei(37440, n.flipY), xt.pixelStorei(37441, n.premultiplyAlpha), xt.pixelStorei(3317, n.unpackAlignment), e.isDataTexture ? xt.texSubImage2D(3553, i, t.x, t.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? xt.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : xt.texSubImage2D(3553, i, t.x, t.y, a, o, e.image), 0 === i && n.generateMipmaps && xt.generateMipmap(3553), K.unbindTexture();
    }, this.copyTextureToTexture3D = function (t, e, n, i) {
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      if (v.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      var _n$image = n.image,
          s = _n$image.width,
          a = _n$image.height,
          o = _n$image.data,
          l = gt.convert(i.format),
          c = gt.convert(i.type);
      var h;
      if (i.isDataTexture3D) et.setTexture3D(i, 0), h = 32879;else {
        if (!i.isDataTexture2DArray) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        et.setTexture2DArray(i, 0), h = 35866;
      }
      xt.pixelStorei(37440, i.flipY), xt.pixelStorei(37441, i.premultiplyAlpha), xt.pixelStorei(3317, i.unpackAlignment);
      var u = xt.getParameter(3314),
          d = xt.getParameter(32878),
          p = xt.getParameter(3316),
          m = xt.getParameter(3315),
          f = xt.getParameter(32877);
      xt.pixelStorei(3314, s), xt.pixelStorei(32878, a), xt.pixelStorei(3316, t.min.x), xt.pixelStorei(3315, t.min.y), xt.pixelStorei(32877, t.min.z), xt.texSubImage3D(h, r, e.x, e.y, e.z, t.max.x - t.min.x + 1, t.max.y - t.min.y + 1, t.max.z - t.min.z + 1, l, c, o), xt.pixelStorei(3314, u), xt.pixelStorei(32878, d), xt.pixelStorei(3316, p), xt.pixelStorei(3315, m), xt.pixelStorei(32877, f), 0 === r && i.generateMipmaps && xt.generateMipmap(h), K.unbindTexture();
    }, this.initTexture = function (t) {
      et.setTexture2D(t, 0), K.unbindTexture();
    }, this.resetState = function () {
      w = 0, S = 0, T = null, K.reset(), yt.reset();
    }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
      detail: this
    }));
  }

  var bs = /*#__PURE__*/function (_ws) {
    _inherits(bs, _ws);

    var _super35 = _createSuper(bs);

    function bs() {
      _classCallCheck(this, bs);

      return _super35.apply(this, arguments);
    }

    return bs;
  }(ws);

  bs.prototype.isWebGL1Renderer = !0;

  var Ms = /*#__PURE__*/function () {
    function Ms(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25e-5;

      _classCallCheck(this, Ms);

      this.name = "", this.color = new en(t), this.density = e;
    }

    _createClass(Ms, [{
      key: "clone",
      value: function clone() {
        return new Ms(this.color, this.density);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          type: "FogExp2",
          color: this.color.getHex(),
          density: this.density
        };
      }
    }]);

    return Ms;
  }();

  Ms.prototype.isFogExp2 = !0;

  var Ss = /*#__PURE__*/function () {
    function Ss(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1e3;

      _classCallCheck(this, Ss);

      this.name = "", this.color = new en(t), this.near = e, this.far = n;
    }

    _createClass(Ss, [{
      key: "clone",
      value: function clone() {
        return new Ss(this.color, this.near, this.far);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          type: "Fog",
          color: this.color.getHex(),
          near: this.near,
          far: this.far
        };
      }
    }]);

    return Ss;
  }();

  Ss.prototype.isFog = !0;

  var Ts = /*#__PURE__*/function (_Pe5) {
    _inherits(Ts, _Pe5);

    var _super36 = _createSuper(Ts);

    function Ts() {
      var _this25;

      _classCallCheck(this, Ts);

      _this25 = _super36.call(this), _this25.type = "Scene", _this25.background = null, _this25.environment = null, _this25.fog = null, _this25.overrideMaterial = null, _this25.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: _assertThisInitialized(_this25)
      }));
      return _this25;
    }

    _createClass(Ts, [{
      key: "copy",
      value: function copy(t, e) {
        return _get(_getPrototypeOf(Ts.prototype), "copy", this).call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = _get(_getPrototypeOf(Ts.prototype), "toJSON", this).call(this, t);

        return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.environment && (e.object.environment = this.environment.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e;
      }
    }]);

    return Ts;
  }(Pe);

  Ts.prototype.isScene = !0;

  var Es = /*#__PURE__*/function () {
    function Es(t, e) {
      _classCallCheck(this, Es);

      this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = et, this.updateRange = {
        offset: 0,
        count: -1
      }, this.version = 0, this.uuid = ct();
    }

    _createClass(Es, [{
      key: "onUploadCallback",
      value: function onUploadCallback() {}
    }, {
      key: "needsUpdate",
      set: function set(t) {
        !0 === t && this.version++;
      }
    }, {
      key: "setUsage",
      value: function setUsage(t) {
        return this.usage = t, this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
      }
    }, {
      key: "copyAt",
      value: function copyAt(t, e, n) {
        t *= this.stride, n *= e.stride;

        for (var _i99 = 0, _r81 = this.stride; _i99 < _r81; _i99++) {
          this.array[t + _i99] = e.array[n + _i99];
        }

        return this;
      }
    }, {
      key: "set",
      value: function set(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this.array.set(t, e), this;
      }
    }, {
      key: "clone",
      value: function clone(t) {
        void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = ct()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
        var e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),
            n = new this.constructor(e, this.stride);
        return n.setUsage(this.usage), n;
      }
    }, {
      key: "onUpload",
      value: function onUpload(t) {
        return this.onUploadCallback = t, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = ct()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
          uuid: this.uuid,
          buffer: this.array.buffer._uuid,
          type: this.array.constructor.name,
          stride: this.stride
        };
      }
    }]);

    return Es;
  }();

  Es.prototype.isInterleavedBuffer = !0;
  var As = new Rt();

  var Ls = /*#__PURE__*/function () {
    function Ls(t, e, n, i) {
      _classCallCheck(this, Ls);

      this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === i;
    }

    _createClass(Ls, [{
      key: "count",
      get: function get() {
        return this.data.count;
      }
    }, {
      key: "array",
      get: function get() {
        return this.data.array;
      }
    }, {
      key: "needsUpdate",
      set: function set(t) {
        this.data.needsUpdate = t;
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        for (var _e109 = 0, _n99 = this.data.count; _e109 < _n99; _e109++) {
          As.x = this.getX(_e109), As.y = this.getY(_e109), As.z = this.getZ(_e109), As.applyMatrix4(t), this.setXYZ(_e109, As.x, As.y, As.z);
        }

        return this;
      }
    }, {
      key: "applyNormalMatrix",
      value: function applyNormalMatrix(t) {
        for (var _e110 = 0, _n100 = this.count; _e110 < _n100; _e110++) {
          As.x = this.getX(_e110), As.y = this.getY(_e110), As.z = this.getZ(_e110), As.applyNormalMatrix(t), this.setXYZ(_e110, As.x, As.y, As.z);
        }

        return this;
      }
    }, {
      key: "transformDirection",
      value: function transformDirection(t) {
        for (var _e111 = 0, _n101 = this.count; _e111 < _n101; _e111++) {
          As.x = this.getX(_e111), As.y = this.getY(_e111), As.z = this.getZ(_e111), As.transformDirection(t), this.setXYZ(_e111, As.x, As.y, As.z);
        }

        return this;
      }
    }, {
      key: "setX",
      value: function setX(t, e) {
        return this.data.array[t * this.data.stride + this.offset] = e, this;
      }
    }, {
      key: "setY",
      value: function setY(t, e) {
        return this.data.array[t * this.data.stride + this.offset + 1] = e, this;
      }
    }, {
      key: "setZ",
      value: function setZ(t, e) {
        return this.data.array[t * this.data.stride + this.offset + 2] = e, this;
      }
    }, {
      key: "setW",
      value: function setW(t, e) {
        return this.data.array[t * this.data.stride + this.offset + 3] = e, this;
      }
    }, {
      key: "getX",
      value: function getX(t) {
        return this.data.array[t * this.data.stride + this.offset];
      }
    }, {
      key: "getY",
      value: function getY(t) {
        return this.data.array[t * this.data.stride + this.offset + 1];
      }
    }, {
      key: "getZ",
      value: function getZ(t) {
        return this.data.array[t * this.data.stride + this.offset + 2];
      }
    }, {
      key: "getW",
      value: function getW(t) {
        return this.data.array[t * this.data.stride + this.offset + 3];
      }
    }, {
      key: "setXY",
      value: function setXY(t, e, n) {
        return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
      }
    }, {
      key: "setXYZ",
      value: function setXYZ(t, e, n, i) {
        return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this;
      }
    }, {
      key: "setXYZW",
      value: function setXYZW(t, e, n, i, r) {
        return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this;
      }
    }, {
      key: "clone",
      value: function clone(t) {
        if (void 0 === t) {
          console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
          var _t147 = [];

          for (var _e112 = 0; _e112 < this.count; _e112++) {
            var _n102 = _e112 * this.data.stride + this.offset;

            for (var _e113 = 0; _e113 < this.itemSize; _e113++) {
              _t147.push(this.data.array[_n102 + _e113]);
            }
          }

          return new an(new this.array.constructor(_t147), this.itemSize, this.normalized);
        }

        return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new Ls(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        if (void 0 === t) {
          console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
          var _t148 = [];

          for (var _e114 = 0; _e114 < this.count; _e114++) {
            var _n103 = _e114 * this.data.stride + this.offset;

            for (var _e115 = 0; _e115 < this.itemSize; _e115++) {
              _t148.push(this.data.array[_n103 + _e115]);
            }
          }

          return {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: _t148,
            normalized: this.normalized
          };
        }

        return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized
        };
      }
    }]);

    return Ls;
  }();

  Ls.prototype.isInterleavedBufferAttribute = !0;

  var Rs = /*#__PURE__*/function (_Ye5) {
    _inherits(Rs, _Ye5);

    var _super37 = _createSuper(Rs);

    function Rs(t) {
      var _this26;

      _classCallCheck(this, Rs);

      _this26 = _super37.call(this), _this26.type = "SpriteMaterial", _this26.color = new en(16777215), _this26.map = null, _this26.alphaMap = null, _this26.rotation = 0, _this26.sizeAttenuation = !0, _this26.transparent = !0, _this26.setValues(t);
      return _this26;
    }

    _createClass(Rs, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Rs.prototype), "copy", this).call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this;
      }
    }]);

    return Rs;
  }(Ye);

  var Cs;
  Rs.prototype.isSpriteMaterial = !0;
  var Ps = new Rt(),
      Ds = new Rt(),
      Is = new Rt(),
      Ns = new vt(),
      Bs = new vt(),
      zs = new ae(),
      Fs = new Rt(),
      Os = new Rt(),
      Hs = new Rt(),
      Gs = new vt(),
      Us = new vt(),
      ks = new vt();

  var Vs = /*#__PURE__*/function (_Pe6) {
    _inherits(Vs, _Pe6);

    var _super38 = _createSuper(Vs);

    function Vs(t) {
      var _this27;

      _classCallCheck(this, Vs);

      if (_this27 = _super38.call(this), _this27.type = "Sprite", void 0 === Cs) {
        Cs = new An();

        var _t149 = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),
            _e116 = new Es(_t149, 5);

        Cs.setIndex([0, 1, 2, 0, 2, 3]), Cs.setAttribute("position", new Ls(_e116, 3, 0, !1)), Cs.setAttribute("uv", new Ls(_e116, 2, 3, !1));
      }

      _this27.geometry = Cs, _this27.material = void 0 !== t ? t : new Rs(), _this27.center = new vt(.5, .5);
      return _possibleConstructorReturn(_this27);
    }

    _createClass(Vs, [{
      key: "raycast",
      value: function raycast(t, e) {
        null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Ds.setFromMatrixScale(this.matrixWorld), zs.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), Is.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && Ds.multiplyScalar(-Is.z);
        var n = this.material.rotation;
        var i, r;
        0 !== n && (r = Math.cos(n), i = Math.sin(n));
        var s = this.center;
        Ws(Fs.set(-.5, -.5, 0), Is, s, Ds, i, r), Ws(Os.set(.5, -.5, 0), Is, s, Ds, i, r), Ws(Hs.set(.5, .5, 0), Is, s, Ds, i, r), Gs.set(0, 0), Us.set(1, 0), ks.set(1, 1);
        var a = t.ray.intersectTriangle(Fs, Os, Hs, !1, Ps);
        if (null === a && (Ws(Os.set(-.5, .5, 0), Is, s, Ds, i, r), Us.set(0, 1), a = t.ray.intersectTriangle(Fs, Hs, Os, !1, Ps), null === a)) return;
        var o = t.ray.origin.distanceTo(Ps);
        o < t.near || o > t.far || e.push({
          distance: o,
          point: Ps.clone(),
          uv: qe.getUV(Ps, Fs, Os, Hs, Gs, Us, ks, new vt()),
          face: null,
          object: this
        });
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Vs.prototype), "copy", this).call(this, t), void 0 !== t.center && this.center.copy(t.center), this.material = t.material, this;
      }
    }]);

    return Vs;
  }(Pe);

  function Ws(t, e, n, i, r, s) {
    Ns.subVectors(t, n).addScalar(.5).multiply(i), void 0 !== r ? (Bs.x = s * Ns.x - r * Ns.y, Bs.y = r * Ns.x + s * Ns.y) : Bs.copy(Ns), t.copy(e), t.x += Bs.x, t.y += Bs.y, t.applyMatrix4(zs);
  }

  Vs.prototype.isSprite = !0;
  var js = new Rt(),
      qs = new Rt();

  var Xs = /*#__PURE__*/function (_Pe7) {
    _inherits(Xs, _Pe7);

    var _super39 = _createSuper(Xs);

    function Xs() {
      var _this28;

      _classCallCheck(this, Xs);

      _this28 = _super39.call(this), _this28._currentLevel = 0, _this28.type = "LOD", Object.defineProperties(_assertThisInitialized(_this28), {
        levels: {
          enumerable: !0,
          value: []
        },
        isLOD: {
          value: !0
        }
      }), _this28.autoUpdate = !0;
      return _this28;
    }

    _createClass(Xs, [{
      key: "copy",
      value: function copy(t) {
        _get(_getPrototypeOf(Xs.prototype), "copy", this).call(this, t, !1);

        var e = t.levels;

        for (var _t150 = 0, _n104 = e.length; _t150 < _n104; _t150++) {
          var _n105 = e[_t150];
          this.addLevel(_n105.object.clone(), _n105.distance);
        }

        return this.autoUpdate = t.autoUpdate, this;
      }
    }, {
      key: "addLevel",
      value: function addLevel(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        e = Math.abs(e);
        var n = this.levels;
        var i;

        for (i = 0; i < n.length && !(e < n[i].distance); i++) {
          ;
        }

        return n.splice(i, 0, {
          distance: e,
          object: t
        }), this.add(t), this;
      }
    }, {
      key: "getCurrentLevel",
      value: function getCurrentLevel() {
        return this._currentLevel;
      }
    }, {
      key: "getObjectForDistance",
      value: function getObjectForDistance(t) {
        var e = this.levels;

        if (e.length > 0) {
          var _n106, _i100;

          for (_n106 = 1, _i100 = e.length; _n106 < _i100 && !(t < e[_n106].distance); _n106++) {
            ;
          }

          return e[_n106 - 1].object;
        }

        return null;
      }
    }, {
      key: "raycast",
      value: function raycast(t, e) {
        if (this.levels.length > 0) {
          js.setFromMatrixPosition(this.matrixWorld);

          var _n107 = t.ray.origin.distanceTo(js);

          this.getObjectForDistance(_n107).raycast(t, e);
        }
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this.levels;

        if (e.length > 1) {
          js.setFromMatrixPosition(t.matrixWorld), qs.setFromMatrixPosition(this.matrixWorld);

          var _n108 = js.distanceTo(qs) / t.zoom;

          var _i101, _r82;

          for (e[0].object.visible = !0, _i101 = 1, _r82 = e.length; _i101 < _r82 && _n108 >= e[_i101].distance; _i101++) {
            e[_i101 - 1].object.visible = !1, e[_i101].object.visible = !0;
          }

          for (this._currentLevel = _i101 - 1; _i101 < _r82; _i101++) {
            e[_i101].object.visible = !1;
          }
        }
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = _get(_getPrototypeOf(Xs.prototype), "toJSON", this).call(this, t);

        !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = [];
        var n = this.levels;

        for (var _t151 = 0, _i102 = n.length; _t151 < _i102; _t151++) {
          var _i103 = n[_t151];
          e.object.levels.push({
            object: _i103.object.uuid,
            distance: _i103.distance
          });
        }

        return e;
      }
    }]);

    return Xs;
  }(Pe);

  var Ys = new Rt(),
      Zs = new St(),
      Js = new St(),
      Qs = new Rt(),
      Ks = new ae();

  var $s = /*#__PURE__*/function (_jn) {
    _inherits($s, _jn);

    var _super40 = _createSuper($s);

    function $s(t, e) {
      var _this29;

      _classCallCheck(this, $s);

      _this29 = _super40.call(this, t, e), _this29.type = "SkinnedMesh", _this29.bindMode = "attached", _this29.bindMatrix = new ae(), _this29.bindMatrixInverse = new ae();
      return _this29;
    }

    _createClass($s, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf($s.prototype), "copy", this).call(this, t), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this;
      }
    }, {
      key: "bind",
      value: function bind(t, e) {
        this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
      }
    }, {
      key: "pose",
      value: function pose() {
        this.skeleton.pose();
      }
    }, {
      key: "normalizeSkinWeights",
      value: function normalizeSkinWeights() {
        var t = new St(),
            e = this.geometry.attributes.skinWeight;

        for (var _n109 = 0, _i104 = e.count; _n109 < _i104; _n109++) {
          t.x = e.getX(_n109), t.y = e.getY(_n109), t.z = e.getZ(_n109), t.w = e.getW(_n109);

          var _i105 = 1 / t.manhattanLength();

          _i105 !== 1 / 0 ? t.multiplyScalar(_i105) : t.set(1, 0, 0, 0), e.setXYZW(_n109, t.x, t.y, t.z, t.w);
        }
      }
    }, {
      key: "updateMatrixWorld",
      value: function updateMatrixWorld(t) {
        _get(_getPrototypeOf($s.prototype), "updateMatrixWorld", this).call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
      }
    }, {
      key: "boneTransform",
      value: function boneTransform(t, e) {
        var n = this.skeleton,
            i = this.geometry;
        Zs.fromBufferAttribute(i.attributes.skinIndex, t), Js.fromBufferAttribute(i.attributes.skinWeight, t), Ys.fromBufferAttribute(i.attributes.position, t).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);

        for (var _t152 = 0; _t152 < 4; _t152++) {
          var _i106 = Js.getComponent(_t152);

          if (0 !== _i106) {
            var _r83 = Zs.getComponent(_t152);

            Ks.multiplyMatrices(n.bones[_r83].matrixWorld, n.boneInverses[_r83]), e.addScaledVector(Qs.copy(Ys).applyMatrix4(Ks), _i106);
          }
        }

        return e.applyMatrix4(this.bindMatrixInverse);
      }
    }]);

    return $s;
  }(jn);

  $s.prototype.isSkinnedMesh = !0;

  var ta = /*#__PURE__*/function (_Pe8) {
    _inherits(ta, _Pe8);

    var _super41 = _createSuper(ta);

    function ta() {
      var _this30;

      _classCallCheck(this, ta);

      _this30 = _super41.call(this), _this30.type = "Bone";
      return _this30;
    }

    return ta;
  }(Pe);

  ta.prototype.isBone = !0;

  var ea = /*#__PURE__*/function (_bt4) {
    _inherits(ea, _bt4);

    var _super42 = _createSuper(ea);

    function ea(t, e, n, i, r, s, a, o, l, c, h, u) {
      var _this31;

      _classCallCheck(this, ea);

      _this31 = _super42.call(this, null, s, a, o, l, c, i, r, h, u), _this31.image = {
        data: t || null,
        width: e || 1,
        height: n || 1
      }, _this31.magFilter = void 0 !== l ? l : p, _this31.minFilter = void 0 !== c ? c : p, _this31.generateMipmaps = !1, _this31.flipY = !1, _this31.unpackAlignment = 1, _this31.needsUpdate = !0;
      return _this31;
    }

    return ea;
  }(bt);

  ea.prototype.isDataTexture = !0;
  var na = new ae(),
      ia = new ae();

  var ra = /*#__PURE__*/function () {
    function ra() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      _classCallCheck(this, ra);

      this.uuid = ct(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
    }

    _createClass(ra, [{
      key: "init",
      value: function init() {
        var t = this.bones,
            e = this.boneInverses;
        if (this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length) this.calculateInverses();else if (t.length !== e.length) {
          console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];

          for (var _t153 = 0, _e117 = this.bones.length; _t153 < _e117; _t153++) {
            this.boneInverses.push(new ae());
          }
        }
      }
    }, {
      key: "calculateInverses",
      value: function calculateInverses() {
        this.boneInverses.length = 0;

        for (var _t154 = 0, _e118 = this.bones.length; _t154 < _e118; _t154++) {
          var _e119 = new ae();

          this.bones[_t154] && _e119.copy(this.bones[_t154].matrixWorld).invert(), this.boneInverses.push(_e119);
        }
      }
    }, {
      key: "pose",
      value: function pose() {
        for (var _t155 = 0, _e120 = this.bones.length; _t155 < _e120; _t155++) {
          var _e121 = this.bones[_t155];
          _e121 && _e121.matrixWorld.copy(this.boneInverses[_t155]).invert();
        }

        for (var _t156 = 0, _e122 = this.bones.length; _t156 < _e122; _t156++) {
          var _e123 = this.bones[_t156];
          _e123 && (_e123.parent && _e123.parent.isBone ? (_e123.matrix.copy(_e123.parent.matrixWorld).invert(), _e123.matrix.multiply(_e123.matrixWorld)) : _e123.matrix.copy(_e123.matrixWorld), _e123.matrix.decompose(_e123.position, _e123.quaternion, _e123.scale));
        }
      }
    }, {
      key: "update",
      value: function update() {
        var t = this.bones,
            e = this.boneInverses,
            n = this.boneMatrices,
            i = this.boneTexture;

        for (var _i107 = 0, _r84 = t.length; _i107 < _r84; _i107++) {
          var _r85 = t[_i107] ? t[_i107].matrixWorld : ia;

          na.multiplyMatrices(_r85, e[_i107]), na.toArray(n, 16 * _i107);
        }

        null !== i && (i.needsUpdate = !0);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new ra(this.bones, this.boneInverses);
      }
    }, {
      key: "computeBoneTexture",
      value: function computeBoneTexture() {
        var t = Math.sqrt(4 * this.bones.length);
        t = mt(t), t = Math.max(t, 4);
        var e = new Float32Array(t * t * 4);
        e.set(this.boneMatrices);
        var n = new ea(e, t, t, E, b);
        return this.boneMatrices = e, this.boneTexture = n, this.boneTextureSize = t, this;
      }
    }, {
      key: "getBoneByName",
      value: function getBoneByName(t) {
        for (var _e124 = 0, _n110 = this.bones.length; _e124 < _n110; _e124++) {
          var _n111 = this.bones[_e124];
          if (_n111.name === t) return _n111;
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null);
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t, e) {
        this.uuid = t.uuid;

        for (var _n112 = 0, _i108 = t.bones.length; _n112 < _i108; _n112++) {
          var _i109 = t.bones[_n112];
          var _r86 = e[_i109];
          void 0 === _r86 && (console.warn("THREE.Skeleton: No bone found with UUID:", _i109), _r86 = new ta()), this.bones.push(_r86), this.boneInverses.push(new ae().fromArray(t.boneInverses[_n112]));
        }

        return this.init(), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = {
          metadata: {
            version: 4.5,
            type: "Skeleton",
            generator: "Skeleton.toJSON"
          },
          bones: [],
          boneInverses: []
        };
        t.uuid = this.uuid;
        var e = this.bones,
            n = this.boneInverses;

        for (var _i110 = 0, _r87 = e.length; _i110 < _r87; _i110++) {
          var _r88 = e[_i110];
          t.bones.push(_r88.uuid);
          var _s38 = n[_i110];
          t.boneInverses.push(_s38.toArray());
        }

        return t;
      }
    }]);

    return ra;
  }();

  var sa = new ae(),
      aa = new ae(),
      oa = [],
      la = new jn();

  var ca = /*#__PURE__*/function (_jn2) {
    _inherits(ca, _jn2);

    var _super43 = _createSuper(ca);

    function ca(t, e, n) {
      var _this32;

      _classCallCheck(this, ca);

      _this32 = _super43.call(this, t, e), _this32.instanceMatrix = new an(new Float32Array(16 * n), 16), _this32.instanceColor = null, _this32.count = n, _this32.frustumCulled = !1;
      return _this32;
    }

    _createClass(ca, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(ca.prototype), "copy", this).call(this, t), this.instanceMatrix.copy(t.instanceMatrix), null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, this;
      }
    }, {
      key: "getColorAt",
      value: function getColorAt(t, e) {
        e.fromArray(this.instanceColor.array, 3 * t);
      }
    }, {
      key: "getMatrixAt",
      value: function getMatrixAt(t, e) {
        e.fromArray(this.instanceMatrix.array, 16 * t);
      }
    }, {
      key: "raycast",
      value: function raycast(t, e) {
        var n = this.matrixWorld,
            i = this.count;
        if (la.geometry = this.geometry, la.material = this.material, void 0 !== la.material) for (var _r89 = 0; _r89 < i; _r89++) {
          this.getMatrixAt(_r89, sa), aa.multiplyMatrices(n, sa), la.matrixWorld = aa, la.raycast(t, oa);

          for (var _t157 = 0, _n113 = oa.length; _t157 < _n113; _t157++) {
            var _n114 = oa[_t157];
            _n114.instanceId = _r89, _n114.object = this, e.push(_n114);
          }

          oa.length = 0;
        }
      }
    }, {
      key: "setColorAt",
      value: function setColorAt(t, e) {
        null === this.instanceColor && (this.instanceColor = new an(new Float32Array(3 * this.count), 3)), e.toArray(this.instanceColor.array, 3 * t);
      }
    }, {
      key: "setMatrixAt",
      value: function setMatrixAt(t, e) {
        e.toArray(this.instanceMatrix.array, 16 * t);
      }
    }, {
      key: "updateMorphTargets",
      value: function updateMorphTargets() {}
    }, {
      key: "dispose",
      value: function dispose() {
        this.dispatchEvent({
          type: "dispose"
        });
      }
    }]);

    return ca;
  }(jn);

  ca.prototype.isInstancedMesh = !0;

  var ha = /*#__PURE__*/function (_Ye6) {
    _inherits(ha, _Ye6);

    var _super44 = _createSuper(ha);

    function ha(t) {
      var _this33;

      _classCallCheck(this, ha);

      _this33 = _super44.call(this), _this33.type = "LineBasicMaterial", _this33.color = new en(16777215), _this33.linewidth = 1, _this33.linecap = "round", _this33.linejoin = "round", _this33.morphTargets = !1, _this33.setValues(t);
      return _this33;
    }

    _createClass(ha, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(ha.prototype), "copy", this).call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.morphTargets = t.morphTargets, this;
      }
    }]);

    return ha;
  }(Ye);

  ha.prototype.isLineBasicMaterial = !0;
  var ua = new Rt(),
      da = new Rt(),
      pa = new ae(),
      ma = new se(),
      fa = new Qt();

  var ga = /*#__PURE__*/function (_Pe9) {
    _inherits(ga, _Pe9);

    var _super45 = _createSuper(ga);

    function ga() {
      var _this34;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new An();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new ha();

      _classCallCheck(this, ga);

      _this34 = _super45.call(this), _this34.type = "Line", _this34.geometry = t, _this34.material = e, _this34.updateMorphTargets();
      return _this34;
    }

    _createClass(ga, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(ga.prototype), "copy", this).call(this, t), this.material = t.material, this.geometry = t.geometry, this;
      }
    }, {
      key: "computeLineDistances",
      value: function computeLineDistances() {
        var t = this.geometry;
        if (t.isBufferGeometry) {
          if (null === t.index) {
            var _e125 = t.attributes.position,
                _n115 = [0];

            for (var _t158 = 1, _i111 = _e125.count; _t158 < _i111; _t158++) {
              ua.fromBufferAttribute(_e125, _t158 - 1), da.fromBufferAttribute(_e125, _t158), _n115[_t158] = _n115[_t158 - 1], _n115[_t158] += ua.distanceTo(da);
            }

            t.setAttribute("lineDistance", new fn(_n115, 1));
          } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        } else t.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        return this;
      }
    }, {
      key: "raycast",
      value: function raycast(t, e) {
        var n = this.geometry,
            i = this.matrixWorld,
            r = t.params.Line.threshold,
            s = n.drawRange;
        if (null === n.boundingSphere && n.computeBoundingSphere(), fa.copy(n.boundingSphere), fa.applyMatrix4(i), fa.radius += r, !1 === t.ray.intersectsSphere(fa)) return;
        pa.copy(i).invert(), ma.copy(t.ray).applyMatrix4(pa);
        var a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = a * a,
            l = new Rt(),
            c = new Rt(),
            h = new Rt(),
            u = new Rt(),
            d = this.isLineSegments ? 2 : 1;

        if (n.isBufferGeometry) {
          var _i112 = n.index,
              _r90 = n.attributes.position;

          if (null !== _i112) {
            for (var _n116 = Math.max(0, s.start), _a36 = Math.min(_i112.count, s.start + s.count) - 1; _n116 < _a36; _n116 += d) {
              var _s39 = _i112.getX(_n116),
                  _a37 = _i112.getX(_n116 + 1);

              l.fromBufferAttribute(_r90, _s39), c.fromBufferAttribute(_r90, _a37);
              if (ma.distanceSqToSegment(l, c, u, h) > o) continue;
              u.applyMatrix4(this.matrixWorld);

              var _d8 = t.ray.origin.distanceTo(u);

              _d8 < t.near || _d8 > t.far || e.push({
                distance: _d8,
                point: h.clone().applyMatrix4(this.matrixWorld),
                index: _n116,
                face: null,
                faceIndex: null,
                object: this
              });
            }
          } else {
            for (var _n117 = Math.max(0, s.start), _i113 = Math.min(_r90.count, s.start + s.count) - 1; _n117 < _i113; _n117 += d) {
              l.fromBufferAttribute(_r90, _n117), c.fromBufferAttribute(_r90, _n117 + 1);
              if (ma.distanceSqToSegment(l, c, u, h) > o) continue;
              u.applyMatrix4(this.matrixWorld);

              var _i114 = t.ray.origin.distanceTo(u);

              _i114 < t.near || _i114 > t.far || e.push({
                distance: _i114,
                point: h.clone().applyMatrix4(this.matrixWorld),
                index: _n117,
                face: null,
                faceIndex: null,
                object: this
              });
            }
          }
        } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    }, {
      key: "updateMorphTargets",
      value: function updateMorphTargets() {
        var t = this.geometry;

        if (t.isBufferGeometry) {
          var _e126 = t.morphAttributes,
              _n118 = Object.keys(_e126);

          if (_n118.length > 0) {
            var _t159 = _e126[_n118[0]];

            if (void 0 !== _t159) {
              this.morphTargetInfluences = [], this.morphTargetDictionary = {};

              for (var _e127 = 0, _n119 = _t159.length; _e127 < _n119; _e127++) {
                var _n120 = _t159[_e127].name || String(_e127);

                this.morphTargetInfluences.push(0), this.morphTargetDictionary[_n120] = _e127;
              }
            }
          }
        } else {
          var _e128 = t.morphTargets;
          void 0 !== _e128 && _e128.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
      }
    }]);

    return ga;
  }(Pe);

  ga.prototype.isLine = !0;
  var va = new Rt(),
      ya = new Rt();

  var xa = /*#__PURE__*/function (_ga) {
    _inherits(xa, _ga);

    var _super46 = _createSuper(xa);

    function xa(t, e) {
      var _this35;

      _classCallCheck(this, xa);

      _this35 = _super46.call(this, t, e), _this35.type = "LineSegments";
      return _this35;
    }

    _createClass(xa, [{
      key: "computeLineDistances",
      value: function computeLineDistances() {
        var t = this.geometry;
        if (t.isBufferGeometry) {
          if (null === t.index) {
            var _e129 = t.attributes.position,
                _n121 = [];

            for (var _t160 = 0, _i115 = _e129.count; _t160 < _i115; _t160 += 2) {
              va.fromBufferAttribute(_e129, _t160), ya.fromBufferAttribute(_e129, _t160 + 1), _n121[_t160] = 0 === _t160 ? 0 : _n121[_t160 - 1], _n121[_t160 + 1] = _n121[_t160] + va.distanceTo(ya);
            }

            t.setAttribute("lineDistance", new fn(_n121, 1));
          } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        } else t.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        return this;
      }
    }]);

    return xa;
  }(ga);

  xa.prototype.isLineSegments = !0;

  var _a = /*#__PURE__*/function (_ga2) {
    _inherits(_a, _ga2);

    var _super47 = _createSuper(_a);

    function _a(t, e) {
      var _this36;

      _classCallCheck(this, _a);

      _this36 = _super47.call(this, t, e), _this36.type = "LineLoop";
      return _this36;
    }

    return _a;
  }(ga);

  _a.prototype.isLineLoop = !0;

  var wa = /*#__PURE__*/function (_Ye7) {
    _inherits(wa, _Ye7);

    var _super48 = _createSuper(wa);

    function wa(t) {
      var _this37;

      _classCallCheck(this, wa);

      _this37 = _super48.call(this), _this37.type = "PointsMaterial", _this37.color = new en(16777215), _this37.map = null, _this37.alphaMap = null, _this37.size = 1, _this37.sizeAttenuation = !0, _this37.morphTargets = !1, _this37.setValues(t);
      return _this37;
    }

    _createClass(wa, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(wa.prototype), "copy", this).call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this;
      }
    }]);

    return wa;
  }(Ye);

  wa.prototype.isPointsMaterial = !0;
  var ba = new ae(),
      Ma = new se(),
      Sa = new Qt(),
      Ta = new Rt();

  var Ea = /*#__PURE__*/function (_Pe10) {
    _inherits(Ea, _Pe10);

    var _super49 = _createSuper(Ea);

    function Ea() {
      var _this38;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new An();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new wa();

      _classCallCheck(this, Ea);

      _this38 = _super49.call(this), _this38.type = "Points", _this38.geometry = t, _this38.material = e, _this38.updateMorphTargets();
      return _this38;
    }

    _createClass(Ea, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Ea.prototype), "copy", this).call(this, t), this.material = t.material, this.geometry = t.geometry, this;
      }
    }, {
      key: "raycast",
      value: function raycast(t, e) {
        var n = this.geometry,
            i = this.matrixWorld,
            r = t.params.Points.threshold,
            s = n.drawRange;
        if (null === n.boundingSphere && n.computeBoundingSphere(), Sa.copy(n.boundingSphere), Sa.applyMatrix4(i), Sa.radius += r, !1 === t.ray.intersectsSphere(Sa)) return;
        ba.copy(i).invert(), Ma.copy(t.ray).applyMatrix4(ba);
        var a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = a * a;

        if (n.isBufferGeometry) {
          var _r91 = n.index,
              _a38 = n.attributes.position;

          if (null !== _r91) {
            for (var _n122 = Math.max(0, s.start), _l18 = Math.min(_r91.count, s.start + s.count); _n122 < _l18; _n122++) {
              var _s40 = _r91.getX(_n122);

              Ta.fromBufferAttribute(_a38, _s40), Aa(Ta, _s40, o, i, t, e, this);
            }
          } else {
            for (var _n123 = Math.max(0, s.start), _r92 = Math.min(_a38.count, s.start + s.count); _n123 < _r92; _n123++) {
              Ta.fromBufferAttribute(_a38, _n123), Aa(Ta, _n123, o, i, t, e, this);
            }
          }
        } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    }, {
      key: "updateMorphTargets",
      value: function updateMorphTargets() {
        var t = this.geometry;

        if (t.isBufferGeometry) {
          var _e130 = t.morphAttributes,
              _n124 = Object.keys(_e130);

          if (_n124.length > 0) {
            var _t161 = _e130[_n124[0]];

            if (void 0 !== _t161) {
              this.morphTargetInfluences = [], this.morphTargetDictionary = {};

              for (var _e131 = 0, _n125 = _t161.length; _e131 < _n125; _e131++) {
                var _n126 = _t161[_e131].name || String(_e131);

                this.morphTargetInfluences.push(0), this.morphTargetDictionary[_n126] = _e131;
              }
            }
          }
        } else {
          var _e132 = t.morphTargets;
          void 0 !== _e132 && _e132.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
      }
    }]);

    return Ea;
  }(Pe);

  function Aa(t, e, n, i, r, s, a) {
    var o = Ma.distanceSqToPoint(t);

    if (o < n) {
      var _n127 = new Rt();

      Ma.closestPointToPoint(t, _n127), _n127.applyMatrix4(i);

      var _l19 = r.ray.origin.distanceTo(_n127);

      if (_l19 < r.near || _l19 > r.far) return;
      s.push({
        distance: _l19,
        distanceToRay: Math.sqrt(o),
        point: _n127,
        index: e,
        face: null,
        object: a
      });
    }
  }

  Ea.prototype.isPoints = !0;

  var La = /*#__PURE__*/function (_bt5) {
    _inherits(La, _bt5);

    var _super50 = _createSuper(La);

    function La(t, e, n, i, r, s, a, o, l) {
      var _this39;

      _classCallCheck(this, La);

      _this39 = _super50.call(this, t, e, n, i, r, s, a, o, l), _this39.format = void 0 !== a ? a : T, _this39.minFilter = void 0 !== s ? s : g, _this39.magFilter = void 0 !== r ? r : g, _this39.generateMipmaps = !1;

      var c = _assertThisInitialized(_this39);

      "requestVideoFrameCallback" in t && t.requestVideoFrameCallback(function e() {
        c.needsUpdate = !0, t.requestVideoFrameCallback(e);
      });
      return _this39;
    }

    _createClass(La, [{
      key: "clone",
      value: function clone() {
        return new this.constructor(this.image).copy(this);
      }
    }, {
      key: "update",
      value: function update() {
        var t = this.image;
        !1 === "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
      }
    }]);

    return La;
  }(bt);

  La.prototype.isVideoTexture = !0;

  var Ra = /*#__PURE__*/function (_bt6) {
    _inherits(Ra, _bt6);

    var _super51 = _createSuper(Ra);

    function Ra(t, e, n, i, r, s, a, o, l, c, h, u) {
      var _this40;

      _classCallCheck(this, Ra);

      _this40 = _super51.call(this, null, s, a, o, l, c, i, r, h, u), _this40.image = {
        width: e,
        height: n
      }, _this40.mipmaps = t, _this40.flipY = !1, _this40.generateMipmaps = !1;
      return _this40;
    }

    return Ra;
  }(bt);

  Ra.prototype.isCompressedTexture = !0;

  var Ca = /*#__PURE__*/function (_bt7) {
    _inherits(Ca, _bt7);

    var _super52 = _createSuper(Ca);

    function Ca(t, e, n, i, r, s, a, o, l) {
      var _this41;

      _classCallCheck(this, Ca);

      _this41 = _super52.call(this, t, e, n, i, r, s, a, o, l), _this41.needsUpdate = !0;
      return _this41;
    }

    return Ca;
  }(bt);

  Ca.prototype.isCanvasTexture = !0;

  var Pa = /*#__PURE__*/function (_bt8) {
    _inherits(Pa, _bt8);

    var _super53 = _createSuper(Pa);

    function Pa(t, e, n, i, r, s, a, o, l, c) {
      var _this42;

      _classCallCheck(this, Pa);

      if ((c = void 0 !== c ? c : A) !== A && c !== L) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      void 0 === n && c === A && (n = _), void 0 === n && c === L && (n = S), _this42 = _super53.call(this, null, i, r, s, a, o, c, n, l), _this42.image = {
        width: t,
        height: e
      }, _this42.magFilter = void 0 !== a ? a : p, _this42.minFilter = void 0 !== o ? o : p, _this42.flipY = !1, _this42.generateMipmaps = !1;
      return _this42;
    }

    return Pa;
  }(bt);

  Pa.prototype.isDepthTexture = !0;

  var Da = /*#__PURE__*/function (_An3) {
    _inherits(Da, _An3);

    var _super54 = _createSuper(Da);

    function Da() {
      var _this43;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2 * Math.PI;

      _classCallCheck(this, Da);

      _this43 = _super54.call(this), _this43.type = "CircleGeometry", _this43.parameters = {
        radius: t,
        segments: e,
        thetaStart: n,
        thetaLength: i
      }, e = Math.max(3, e);
      var r = [],
          s = [],
          a = [],
          o = [],
          l = new Rt(),
          c = new vt();
      s.push(0, 0, 0), a.push(0, 0, 1), o.push(.5, .5);

      for (var _r93 = 0, _h8 = 3; _r93 <= e; _r93++, _h8 += 3) {
        var _u9 = n + _r93 / e * i;

        l.x = t * Math.cos(_u9), l.y = t * Math.sin(_u9), s.push(l.x, l.y, l.z), a.push(0, 0, 1), c.x = (s[_h8] / t + 1) / 2, c.y = (s[_h8 + 1] / t + 1) / 2, o.push(c.x, c.y);
      }

      for (var _t162 = 1; _t162 <= e; _t162++) {
        r.push(_t162, _t162 + 1, 0);
      }

      _this43.setIndex(r), _this43.setAttribute("position", new fn(s, 3)), _this43.setAttribute("normal", new fn(a, 3)), _this43.setAttribute("uv", new fn(o, 2));
      return _this43;
    }

    return Da;
  }(An);

  var Ia = /*#__PURE__*/function (_An4) {
    _inherits(Ia, _An4);

    var _super55 = _createSuper(Ia);

    function Ia() {
      var _this44;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
      var a = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 2 * Math.PI;

      _classCallCheck(this, Ia);

      _this44 = _super55.call(this), _this44.type = "CylinderGeometry", _this44.parameters = {
        radiusTop: t,
        radiusBottom: e,
        height: n,
        radialSegments: i,
        heightSegments: r,
        openEnded: s,
        thetaStart: a,
        thetaLength: o
      };

      var l = _assertThisInitialized(_this44);

      i = Math.floor(i), r = Math.floor(r);
      var c = [],
          h = [],
          u = [],
          d = [];
      var p = 0;
      var m = [],
          f = n / 2;
      var g = 0;

      function v(n) {
        var r = p,
            s = new vt(),
            m = new Rt();
        var v = 0;
        var y = !0 === n ? t : e,
            x = !0 === n ? 1 : -1;

        for (var _t163 = 1; _t163 <= i; _t163++) {
          h.push(0, f * x, 0), u.push(0, x, 0), d.push(.5, .5), p++;
        }

        var _ = p;

        for (var _t164 = 0; _t164 <= i; _t164++) {
          var _e133 = _t164 / i * o + a,
              _n128 = Math.cos(_e133),
              _r94 = Math.sin(_e133);

          m.x = y * _r94, m.y = f * x, m.z = y * _n128, h.push(m.x, m.y, m.z), u.push(0, x, 0), s.x = .5 * _n128 + .5, s.y = .5 * _r94 * x + .5, d.push(s.x, s.y), p++;
        }

        for (var _t165 = 0; _t165 < i; _t165++) {
          var _e134 = r + _t165,
              _i116 = _ + _t165;

          !0 === n ? c.push(_i116, _i116 + 1, _e134) : c.push(_i116 + 1, _i116, _e134), v += 3;
        }

        l.addGroup(g, v, !0 === n ? 1 : 2), g += v;
      }

      !function () {
        var s = new Rt(),
            v = new Rt();
        var y = 0;
        var x = (e - t) / n;

        for (var _l20 = 0; _l20 <= r; _l20++) {
          var _c17 = [],
              _g = _l20 / r,
              _y3 = _g * (e - t) + t;

          for (var _t166 = 0; _t166 <= i; _t166++) {
            var _e135 = _t166 / i,
                _r95 = _e135 * o + a,
                _l21 = Math.sin(_r95),
                _m4 = Math.cos(_r95);

            v.x = _y3 * _l21, v.y = -_g * n + f, v.z = _y3 * _m4, h.push(v.x, v.y, v.z), s.set(_l21, x, _m4).normalize(), u.push(s.x, s.y, s.z), d.push(_e135, 1 - _g), _c17.push(p++);
          }

          m.push(_c17);
        }

        for (var _t167 = 0; _t167 < i; _t167++) {
          for (var _e136 = 0; _e136 < r; _e136++) {
            var _n129 = m[_e136][_t167],
                _i117 = m[_e136 + 1][_t167],
                _r96 = m[_e136 + 1][_t167 + 1],
                _s41 = m[_e136][_t167 + 1];
            c.push(_n129, _i117, _s41), c.push(_i117, _r96, _s41), y += 6;
          }
        }

        l.addGroup(g, y, 0), g += y;
      }(), !1 === s && (t > 0 && v(!0), e > 0 && v(!1)), _this44.setIndex(c), _this44.setAttribute("position", new fn(h, 3)), _this44.setAttribute("normal", new fn(u, 3)), _this44.setAttribute("uv", new fn(d, 2));
      return _this44;
    }

    return Ia;
  }(An);

  var Na = /*#__PURE__*/function (_Ia) {
    _inherits(Na, _Ia);

    var _super56 = _createSuper(Na);

    function Na() {
      var _this45;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var a = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 2 * Math.PI;

      _classCallCheck(this, Na);

      _this45 = _super56.call(this, 0, t, e, n, i, r, s, a), _this45.type = "ConeGeometry", _this45.parameters = {
        radius: t,
        height: e,
        radialSegments: n,
        heightSegments: i,
        openEnded: r,
        thetaStart: s,
        thetaLength: a
      };
      return _this45;
    }

    return Na;
  }(Ia);

  var Ba = /*#__PURE__*/function (_An5) {
    _inherits(Ba, _An5);

    var _super57 = _createSuper(Ba);

    function Ba(t, e) {
      var _this46;

      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      _classCallCheck(this, Ba);

      _this46 = _super57.call(this), _this46.type = "PolyhedronGeometry", _this46.parameters = {
        vertices: t,
        indices: e,
        radius: n,
        detail: i
      };
      var r = [],
          s = [];

      function a(t, e, n, i) {
        var r = i + 1,
            s = [];

        for (var _i118 = 0; _i118 <= r; _i118++) {
          s[_i118] = [];

          var _a39 = t.clone().lerp(n, _i118 / r),
              _o21 = e.clone().lerp(n, _i118 / r),
              _l22 = r - _i118;

          for (var _t168 = 0; _t168 <= _l22; _t168++) {
            s[_i118][_t168] = 0 === _t168 && _i118 === r ? _a39 : _a39.clone().lerp(_o21, _t168 / _l22);
          }
        }

        for (var _t169 = 0; _t169 < r; _t169++) {
          for (var _e137 = 0; _e137 < 2 * (r - _t169) - 1; _e137++) {
            var _n130 = Math.floor(_e137 / 2);

            _e137 % 2 == 0 ? (o(s[_t169][_n130 + 1]), o(s[_t169 + 1][_n130]), o(s[_t169][_n130])) : (o(s[_t169][_n130 + 1]), o(s[_t169 + 1][_n130 + 1]), o(s[_t169 + 1][_n130]));
          }
        }
      }

      function o(t) {
        r.push(t.x, t.y, t.z);
      }

      function l(e, n) {
        var i = 3 * e;
        n.x = t[i + 0], n.y = t[i + 1], n.z = t[i + 2];
      }

      function c(t, e, n, i) {
        i < 0 && 1 === t.x && (s[e] = t.x - 1), 0 === n.x && 0 === n.z && (s[e] = i / 2 / Math.PI + .5);
      }

      function h(t) {
        return Math.atan2(t.z, -t.x);
      }

      !function (t) {
        var n = new Rt(),
            i = new Rt(),
            r = new Rt();

        for (var _s42 = 0; _s42 < e.length; _s42 += 3) {
          l(e[_s42 + 0], n), l(e[_s42 + 1], i), l(e[_s42 + 2], r), a(n, i, r, t);
        }
      }(i), function (t) {
        var e = new Rt();

        for (var _n131 = 0; _n131 < r.length; _n131 += 3) {
          e.x = r[_n131 + 0], e.y = r[_n131 + 1], e.z = r[_n131 + 2], e.normalize().multiplyScalar(t), r[_n131 + 0] = e.x, r[_n131 + 1] = e.y, r[_n131 + 2] = e.z;
        }
      }(n), function () {
        var t = new Rt();

        for (var _n132 = 0; _n132 < r.length; _n132 += 3) {
          t.x = r[_n132 + 0], t.y = r[_n132 + 1], t.z = r[_n132 + 2];

          var _i119 = h(t) / 2 / Math.PI + .5,
              _a40 = (e = t, Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5);

          s.push(_i119, 1 - _a40);
        }

        var e;
        (function () {
          var t = new Rt(),
              e = new Rt(),
              n = new Rt(),
              i = new Rt(),
              a = new vt(),
              o = new vt(),
              l = new vt();

          for (var _u10 = 0, _d9 = 0; _u10 < r.length; _u10 += 9, _d9 += 6) {
            t.set(r[_u10 + 0], r[_u10 + 1], r[_u10 + 2]), e.set(r[_u10 + 3], r[_u10 + 4], r[_u10 + 5]), n.set(r[_u10 + 6], r[_u10 + 7], r[_u10 + 8]), a.set(s[_d9 + 0], s[_d9 + 1]), o.set(s[_d9 + 2], s[_d9 + 3]), l.set(s[_d9 + 4], s[_d9 + 5]), i.copy(t).add(e).add(n).divideScalar(3);

            var _p6 = h(i);

            c(a, _d9 + 0, t, _p6), c(o, _d9 + 2, e, _p6), c(l, _d9 + 4, n, _p6);
          }
        })(), function () {
          for (var _t170 = 0; _t170 < s.length; _t170 += 6) {
            var _e138 = s[_t170 + 0],
                _n133 = s[_t170 + 2],
                _i120 = s[_t170 + 4],
                _r97 = Math.max(_e138, _n133, _i120),
                _a41 = Math.min(_e138, _n133, _i120);

            _r97 > .9 && _a41 < .1 && (_e138 < .2 && (s[_t170 + 0] += 1), _n133 < .2 && (s[_t170 + 2] += 1), _i120 < .2 && (s[_t170 + 4] += 1));
          }
        }();
      }(), _this46.setAttribute("position", new fn(r, 3)), _this46.setAttribute("normal", new fn(r.slice(), 3)), _this46.setAttribute("uv", new fn(s, 2)), 0 === i ? _this46.computeVertexNormals() : _this46.normalizeNormals();
      return _this46;
    }

    return Ba;
  }(An);

  var za = /*#__PURE__*/function (_Ba) {
    _inherits(za, _Ba);

    var _super58 = _createSuper(za);

    function za() {
      var _this47;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, za);

      var n = (1 + Math.sqrt(5)) / 2,
          i = 1 / n;
      _this47 = _super58.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), _this47.type = "DodecahedronGeometry", _this47.parameters = {
        radius: t,
        detail: e
      };
      return _this47;
    }

    return za;
  }(Ba);

  var Fa = new Rt(),
      Oa = new Rt(),
      Ha = new Rt(),
      Ga = new qe();

  var Ua = /*#__PURE__*/function (_An6) {
    _inherits(Ua, _An6);

    var _super59 = _createSuper(Ua);

    function Ua(t, e) {
      var _this48;

      _classCallCheck(this, Ua);

      if (_this48 = _super59.call(this), _this48.type = "EdgesGeometry", _this48.parameters = {
        thresholdAngle: e
      }, e = void 0 !== e ? e : 1, !0 === t.isGeometry) return _possibleConstructorReturn(_this48, void console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."));
      var n = Math.pow(10, 4),
          i = Math.cos(ot * e),
          r = t.getIndex(),
          s = t.getAttribute("position"),
          a = r ? r.count : s.count,
          o = [0, 0, 0],
          l = ["a", "b", "c"],
          c = new Array(3),
          h = {},
          u = [];

      for (var _t171 = 0; _t171 < a; _t171 += 3) {
        r ? (o[0] = r.getX(_t171), o[1] = r.getX(_t171 + 1), o[2] = r.getX(_t171 + 2)) : (o[0] = _t171, o[1] = _t171 + 1, o[2] = _t171 + 2);
        var _e139 = Ga.a,
            _a42 = Ga.b,
            _d10 = Ga.c;
        if (_e139.fromBufferAttribute(s, o[0]), _a42.fromBufferAttribute(s, o[1]), _d10.fromBufferAttribute(s, o[2]), Ga.getNormal(Ha), c[0] = "".concat(Math.round(_e139.x * n), ",").concat(Math.round(_e139.y * n), ",").concat(Math.round(_e139.z * n)), c[1] = "".concat(Math.round(_a42.x * n), ",").concat(Math.round(_a42.y * n), ",").concat(Math.round(_a42.z * n)), c[2] = "".concat(Math.round(_d10.x * n), ",").concat(Math.round(_d10.y * n), ",").concat(Math.round(_d10.z * n)), c[0] !== c[1] && c[1] !== c[2] && c[2] !== c[0]) for (var _t172 = 0; _t172 < 3; _t172++) {
          var _e140 = (_t172 + 1) % 3,
              _n134 = c[_t172],
              _r98 = c[_e140],
              _s43 = Ga[l[_t172]],
              _a43 = Ga[l[_e140]],
              _d11 = "".concat(_n134, "_").concat(_r98),
              _p7 = "".concat(_r98, "_").concat(_n134);

          _p7 in h && h[_p7] ? (Ha.dot(h[_p7].normal) <= i && (u.push(_s43.x, _s43.y, _s43.z), u.push(_a43.x, _a43.y, _a43.z)), h[_p7] = null) : _d11 in h || (h[_d11] = {
            index0: o[_t172],
            index1: o[_e140],
            normal: Ha.clone()
          });
        }
      }

      for (var _t173 in h) {
        if (h[_t173]) {
          var _h$_t = h[_t173],
              _e141 = _h$_t.index0,
              _n135 = _h$_t.index1;
          Fa.fromBufferAttribute(s, _e141), Oa.fromBufferAttribute(s, _n135), u.push(Fa.x, Fa.y, Fa.z), u.push(Oa.x, Oa.y, Oa.z);
        }
      }

      _this48.setAttribute("position", new fn(u, 3));

      return _possibleConstructorReturn(_this48);
    }

    return Ua;
  }(An);

  var ka = function ka(t, e, n) {
    n = n || 2;
    var i = e && e.length,
        r = i ? e[0] * n : t.length;
    var s = Va(t, 0, r, n, !0);
    var a = [];
    if (!s || s.next === s.prev) return a;
    var o, l, c, h, u, d, p;

    if (i && (s = function (t, e, n, i) {
      var r = [];
      var s, a, o, l, c;

      for (s = 0, a = e.length; s < a; s++) {
        o = e[s] * i, l = s < a - 1 ? e[s + 1] * i : t.length, c = Va(t, o, l, i, !1), c === c.next && (c.steiner = !0), r.push(to(c));
      }

      for (r.sort(Ja), s = 0; s < r.length; s++) {
        Qa(r[s], n), n = Wa(n, n.next);
      }

      return n;
    }(t, e, s, n)), t.length > 80 * n) {
      o = c = t[0], l = h = t[1];

      for (var _e142 = n; _e142 < r; _e142 += n) {
        u = t[_e142], d = t[_e142 + 1], u < o && (o = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
      }

      p = Math.max(c - o, h - l), p = 0 !== p ? 1 / p : 0;
    }

    return ja(s, a, n, o, l, p), a;
  };

  function Va(t, e, n, i, r) {
    var s, a;
    if (r === function (t, e, n, i) {
      var r = 0;

      for (var _s44 = e, _a44 = n - i; _s44 < n; _s44 += i) {
        r += (t[_a44] - t[_s44]) * (t[_s44 + 1] + t[_a44 + 1]), _a44 = _s44;
      }

      return r;
    }(t, e, n, i) > 0) for (s = e; s < n; s += i) {
      a = ho(s, t[s], t[s + 1], a);
    } else for (s = n - i; s >= e; s -= i) {
      a = ho(s, t[s], t[s + 1], a);
    }
    return a && ro(a, a.next) && (uo(a), a = a.next), a;
  }

  function Wa(t, e) {
    if (!t) return t;
    e || (e = t);
    var n,
        i = t;

    do {
      if (n = !1, i.steiner || !ro(i, i.next) && 0 !== io(i.prev, i, i.next)) i = i.next;else {
        if (uo(i), i = e = i.prev, i === i.next) break;
        n = !0;
      }
    } while (n || i !== e);

    return e;
  }

  function ja(t, e, n, i, r, s, a) {
    if (!t) return;
    !a && s && function (t, e, n, i) {
      var r = t;

      do {
        null === r.z && (r.z = $a(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
      } while (r !== t);

      r.prevZ.nextZ = null, r.prevZ = null, function (t) {
        var e,
            n,
            i,
            r,
            s,
            a,
            o,
            l,
            c = 1;

        do {
          for (n = t, t = null, s = null, a = 0; n;) {
            for (a++, i = n, o = 0, e = 0; e < c && (o++, i = i.nextZ, i); e++) {
              ;
            }

            for (l = c; o > 0 || l > 0 && i;) {
              0 !== o && (0 === l || !i || n.z <= i.z) ? (r = n, n = n.nextZ, o--) : (r = i, i = i.nextZ, l--), s ? s.nextZ = r : t = r, r.prevZ = s, s = r;
            }

            n = i;
          }

          s.nextZ = null, c *= 2;
        } while (a > 1);
      }(r);
    }(t, i, r, s);
    var o,
        l,
        c = t;

    for (; t.prev !== t.next;) {
      if (o = t.prev, l = t.next, s ? Xa(t, i, r, s) : qa(t)) e.push(o.i / n), e.push(t.i / n), e.push(l.i / n), uo(t), t = l.next, c = l.next;else if ((t = l) === c) {
        a ? 1 === a ? ja(t = Ya(Wa(t), e, n), e, n, i, r, s, 2) : 2 === a && Za(t, e, n, i, r, s) : ja(Wa(t), e, n, i, r, s, 1);
        break;
      }
    }
  }

  function qa(t) {
    var e = t.prev,
        n = t,
        i = t.next;
    if (io(e, n, i) >= 0) return !1;
    var r = t.next.next;

    for (; r !== t.prev;) {
      if (eo(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && io(r.prev, r, r.next) >= 0) return !1;
      r = r.next;
    }

    return !0;
  }

  function Xa(t, e, n, i) {
    var r = t.prev,
        s = t,
        a = t.next;
    if (io(r, s, a) >= 0) return !1;
    var o = r.x < s.x ? r.x < a.x ? r.x : a.x : s.x < a.x ? s.x : a.x,
        l = r.y < s.y ? r.y < a.y ? r.y : a.y : s.y < a.y ? s.y : a.y,
        c = r.x > s.x ? r.x > a.x ? r.x : a.x : s.x > a.x ? s.x : a.x,
        h = r.y > s.y ? r.y > a.y ? r.y : a.y : s.y > a.y ? s.y : a.y,
        u = $a(o, l, e, n, i),
        d = $a(c, h, e, n, i);
    var p = t.prevZ,
        m = t.nextZ;

    for (; p && p.z >= u && m && m.z <= d;) {
      if (p !== t.prev && p !== t.next && eo(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && io(p.prev, p, p.next) >= 0) return !1;
      if (p = p.prevZ, m !== t.prev && m !== t.next && eo(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && io(m.prev, m, m.next) >= 0) return !1;
      m = m.nextZ;
    }

    for (; p && p.z >= u;) {
      if (p !== t.prev && p !== t.next && eo(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && io(p.prev, p, p.next) >= 0) return !1;
      p = p.prevZ;
    }

    for (; m && m.z <= d;) {
      if (m !== t.prev && m !== t.next && eo(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && io(m.prev, m, m.next) >= 0) return !1;
      m = m.nextZ;
    }

    return !0;
  }

  function Ya(t, e, n) {
    var i = t;

    do {
      var _r99 = i.prev,
          _s45 = i.next.next;
      !ro(_r99, _s45) && so(_r99, i, i.next, _s45) && lo(_r99, _s45) && lo(_s45, _r99) && (e.push(_r99.i / n), e.push(i.i / n), e.push(_s45.i / n), uo(i), uo(i.next), i = t = _s45), i = i.next;
    } while (i !== t);

    return Wa(i);
  }

  function Za(t, e, n, i, r, s) {
    var a = t;

    do {
      var _t174 = a.next.next;

      for (; _t174 !== a.prev;) {
        if (a.i !== _t174.i && no(a, _t174)) {
          var _o22 = co(a, _t174);

          return a = Wa(a, a.next), _o22 = Wa(_o22, _o22.next), ja(a, e, n, i, r, s), void ja(_o22, e, n, i, r, s);
        }

        _t174 = _t174.next;
      }

      a = a.next;
    } while (a !== t);
  }

  function Ja(t, e) {
    return t.x - e.x;
  }

  function Qa(t, e) {
    if (e = function (t, e) {
      var n = e;
      var i = t.x,
          r = t.y;
      var s,
          a = -1 / 0;

      do {
        if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
          var _t175 = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);

          if (_t175 <= i && _t175 > a) {
            if (a = _t175, _t175 === i) {
              if (r === n.y) return n;
              if (r === n.next.y) return n.next;
            }

            s = n.x < n.next.x ? n : n.next;
          }
        }

        n = n.next;
      } while (n !== e);

      if (!s) return null;
      if (i === a) return s;
      var o = s,
          l = s.x,
          c = s.y;
      var h,
          u = 1 / 0;
      n = s;

      do {
        i >= n.x && n.x >= l && i !== n.x && eo(r < c ? i : a, r, l, c, r < c ? a : i, r, n.x, n.y) && (h = Math.abs(r - n.y) / (i - n.x), lo(n, t) && (h < u || h === u && (n.x > s.x || n.x === s.x && Ka(s, n))) && (s = n, u = h)), n = n.next;
      } while (n !== o);

      return s;
    }(t, e)) {
      var _n136 = co(e, t);

      Wa(e, e.next), Wa(_n136, _n136.next);
    }
  }

  function Ka(t, e) {
    return io(t.prev, t, e.prev) < 0 && io(e.next, t, t.next) < 0;
  }

  function $a(t, e, n, i, r) {
    return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
  }

  function to(t) {
    var e = t,
        n = t;

    do {
      (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next;
    } while (e !== t);

    return n;
  }

  function eo(t, e, n, i, r, s, a, o) {
    return (r - a) * (e - o) - (t - a) * (s - o) >= 0 && (t - a) * (i - o) - (n - a) * (e - o) >= 0 && (n - a) * (s - o) - (r - a) * (i - o) >= 0;
  }

  function no(t, e) {
    return t.next.i !== e.i && t.prev.i !== e.i && !function (t, e) {
      var n = t;

      do {
        if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && so(n, n.next, t, e)) return !0;
        n = n.next;
      } while (n !== t);

      return !1;
    }(t, e) && (lo(t, e) && lo(e, t) && function (t, e) {
      var n = t,
          i = !1;
      var r = (t.x + e.x) / 2,
          s = (t.y + e.y) / 2;

      do {
        n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next;
      } while (n !== t);

      return i;
    }(t, e) && (io(t.prev, t, e.prev) || io(t, e.prev, e)) || ro(t, e) && io(t.prev, t, t.next) > 0 && io(e.prev, e, e.next) > 0);
  }

  function io(t, e, n) {
    return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
  }

  function ro(t, e) {
    return t.x === e.x && t.y === e.y;
  }

  function so(t, e, n, i) {
    var r = oo(io(t, e, n)),
        s = oo(io(t, e, i)),
        a = oo(io(n, i, t)),
        o = oo(io(n, i, e));
    return r !== s && a !== o || !(0 !== r || !ao(t, n, e)) || !(0 !== s || !ao(t, i, e)) || !(0 !== a || !ao(n, t, i)) || !(0 !== o || !ao(n, e, i));
  }

  function ao(t, e, n) {
    return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y);
  }

  function oo(t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0;
  }

  function lo(t, e) {
    return io(t.prev, t, t.next) < 0 ? io(t, e, t.next) >= 0 && io(t, t.prev, e) >= 0 : io(t, e, t.prev) < 0 || io(t, t.next, e) < 0;
  }

  function co(t, e) {
    var n = new po(t.i, t.x, t.y),
        i = new po(e.i, e.x, e.y),
        r = t.next,
        s = e.prev;
    return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i;
  }

  function ho(t, e, n, i) {
    var r = new po(t, e, n);
    return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
  }

  function uo(t) {
    t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ);
  }

  function po(t, e, n) {
    this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
  }

  var mo = /*#__PURE__*/function () {
    function mo() {
      _classCallCheck(this, mo);
    }

    _createClass(mo, null, [{
      key: "area",
      value: function area(t) {
        var e = t.length;
        var n = 0;

        for (var _i121 = e - 1, _r100 = 0; _r100 < e; _i121 = _r100++) {
          n += t[_i121].x * t[_r100].y - t[_r100].x * t[_i121].y;
        }

        return .5 * n;
      }
    }, {
      key: "isClockWise",
      value: function isClockWise(t) {
        return mo.area(t) < 0;
      }
    }, {
      key: "triangulateShape",
      value: function triangulateShape(t, e) {
        var n = [],
            i = [],
            r = [];
        fo(t), go(n, t);
        var s = t.length;
        e.forEach(fo);

        for (var _t176 = 0; _t176 < e.length; _t176++) {
          i.push(s), s += e[_t176].length, go(n, e[_t176]);
        }

        var a = ka(n, i);

        for (var _t177 = 0; _t177 < a.length; _t177 += 3) {
          r.push(a.slice(_t177, _t177 + 3));
        }

        return r;
      }
    }]);

    return mo;
  }();

  function fo(t) {
    var e = t.length;
    e > 2 && t[e - 1].equals(t[0]) && t.pop();
  }

  function go(t, e) {
    for (var _n137 = 0; _n137 < e.length; _n137++) {
      t.push(e[_n137].x), t.push(e[_n137].y);
    }
  }

  var vo = /*#__PURE__*/function (_An7) {
    _inherits(vo, _An7);

    var _super60 = _createSuper(vo);

    function vo(t, e) {
      var _this49;

      _classCallCheck(this, vo);

      _this49 = _super60.call(this), _this49.type = "ExtrudeGeometry", _this49.parameters = {
        shapes: t,
        options: e
      }, t = Array.isArray(t) ? t : [t];

      var n = _assertThisInitialized(_this49),
          i = [],
          r = [];

      for (var _e143 = 0, _n138 = t.length; _e143 < _n138; _e143++) {
        s(t[_e143]);
      }

      function s(t) {
        var s = [],
            a = void 0 !== e.curveSegments ? e.curveSegments : 12,
            o = void 0 !== e.steps ? e.steps : 1;
        var l = void 0 !== e.depth ? e.depth : 100,
            c = void 0 === e.bevelEnabled || e.bevelEnabled,
            h = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
            u = void 0 !== e.bevelSize ? e.bevelSize : h - 2,
            d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
            p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
        var m = e.extrudePath,
            f = void 0 !== e.UVGenerator ? e.UVGenerator : yo;
        void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), l = e.amount);

        var g,
            v,
            y,
            x,
            _,
            w = !1;

        m && (g = m.getSpacedPoints(o), w = !0, c = !1, v = m.computeFrenetFrames(o, !1), y = new Rt(), x = new Rt(), _ = new Rt()), c || (p = 0, h = 0, u = 0, d = 0);
        var b = t.extractPoints(a);
        var M = b.shape;
        var S = b.holes;

        if (!mo.isClockWise(M)) {
          M = M.reverse();

          for (var _t178 = 0, _e144 = S.length; _t178 < _e144; _t178++) {
            var _e145 = S[_t178];
            mo.isClockWise(_e145) && (S[_t178] = _e145.reverse());
          }
        }

        var T = mo.triangulateShape(M, S),
            E = M;

        for (var _t179 = 0, _e146 = S.length; _t179 < _e146; _t179++) {
          var _e147 = S[_t179];
          M = M.concat(_e147);
        }

        function A(t, e, n) {
          return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t);
        }

        var L = M.length,
            R = T.length;

        function C(t, e, n) {
          var i, r, s;
          var a = t.x - e.x,
              o = t.y - e.y,
              l = n.x - t.x,
              c = n.y - t.y,
              h = a * a + o * o,
              u = a * c - o * l;

          if (Math.abs(u) > Number.EPSILON) {
            var _u11 = Math.sqrt(h),
                _d12 = Math.sqrt(l * l + c * c),
                _p8 = e.x - o / _u11,
                _m5 = e.y + a / _u11,
                _f2 = ((n.x - c / _d12 - _p8) * c - (n.y + l / _d12 - _m5) * l) / (a * c - o * l);

            i = _p8 + a * _f2 - t.x, r = _m5 + o * _f2 - t.y;

            var _g2 = i * i + r * r;

            if (_g2 <= 2) return new vt(i, r);
            s = Math.sqrt(_g2 / 2);
          } else {
            var _t180 = !1;

            a > Number.EPSILON ? l > Number.EPSILON && (_t180 = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (_t180 = !0) : Math.sign(o) === Math.sign(c) && (_t180 = !0), _t180 ? (i = -o, r = a, s = Math.sqrt(h)) : (i = a, r = o, s = Math.sqrt(h / 2));
          }

          return new vt(i / s, r / s);
        }

        var P = [];

        for (var _t181 = 0, _e148 = E.length, _n139 = _e148 - 1, _i122 = _t181 + 1; _t181 < _e148; _t181++, _n139++, _i122++) {
          _n139 === _e148 && (_n139 = 0), _i122 === _e148 && (_i122 = 0), P[_t181] = C(E[_t181], E[_n139], E[_i122]);
        }

        var D = [];
        var I,
            N = P.concat();

        for (var _t182 = 0, _e149 = S.length; _t182 < _e149; _t182++) {
          var _e150 = S[_t182];
          I = [];

          for (var _t183 = 0, _n140 = _e150.length, _i123 = _n140 - 1, _r101 = _t183 + 1; _t183 < _n140; _t183++, _i123++, _r101++) {
            _i123 === _n140 && (_i123 = 0), _r101 === _n140 && (_r101 = 0), I[_t183] = C(_e150[_t183], _e150[_i123], _e150[_r101]);
          }

          D.push(I), N = N.concat(I);
        }

        for (var _t184 = 0; _t184 < p; _t184++) {
          var _e151 = _t184 / p,
              _n141 = h * Math.cos(_e151 * Math.PI / 2),
              _i124 = u * Math.sin(_e151 * Math.PI / 2) + d;

          for (var _t185 = 0, _e152 = E.length; _t185 < _e152; _t185++) {
            var _e153 = A(E[_t185], P[_t185], _i124);

            F(_e153.x, _e153.y, -_n141);
          }

          for (var _t186 = 0, _e154 = S.length; _t186 < _e154; _t186++) {
            var _e155 = S[_t186];
            I = D[_t186];

            for (var _t187 = 0, _r102 = _e155.length; _t187 < _r102; _t187++) {
              var _r103 = A(_e155[_t187], I[_t187], _i124);

              F(_r103.x, _r103.y, -_n141);
            }
          }
        }

        var B = u + d;

        for (var _t188 = 0; _t188 < L; _t188++) {
          var _e156 = c ? A(M[_t188], N[_t188], B) : M[_t188];

          w ? (x.copy(v.normals[0]).multiplyScalar(_e156.x), y.copy(v.binormals[0]).multiplyScalar(_e156.y), _.copy(g[0]).add(x).add(y), F(_.x, _.y, _.z)) : F(_e156.x, _e156.y, 0);
        }

        for (var _t189 = 1; _t189 <= o; _t189++) {
          for (var _e157 = 0; _e157 < L; _e157++) {
            var _n142 = c ? A(M[_e157], N[_e157], B) : M[_e157];

            w ? (x.copy(v.normals[_t189]).multiplyScalar(_n142.x), y.copy(v.binormals[_t189]).multiplyScalar(_n142.y), _.copy(g[_t189]).add(x).add(y), F(_.x, _.y, _.z)) : F(_n142.x, _n142.y, l / o * _t189);
          }
        }

        for (var _t190 = p - 1; _t190 >= 0; _t190--) {
          var _e158 = _t190 / p,
              _n143 = h * Math.cos(_e158 * Math.PI / 2),
              _i125 = u * Math.sin(_e158 * Math.PI / 2) + d;

          for (var _t191 = 0, _e159 = E.length; _t191 < _e159; _t191++) {
            var _e160 = A(E[_t191], P[_t191], _i125);

            F(_e160.x, _e160.y, l + _n143);
          }

          for (var _t192 = 0, _e161 = S.length; _t192 < _e161; _t192++) {
            var _e162 = S[_t192];
            I = D[_t192];

            for (var _t193 = 0, _r104 = _e162.length; _t193 < _r104; _t193++) {
              var _r105 = A(_e162[_t193], I[_t193], _i125);

              w ? F(_r105.x, _r105.y + g[o - 1].y, g[o - 1].x + _n143) : F(_r105.x, _r105.y, l + _n143);
            }
          }
        }

        function z(t, e) {
          var n = t.length;

          for (; --n >= 0;) {
            var _i126 = n;

            var _r106 = n - 1;

            _r106 < 0 && (_r106 = t.length - 1);

            for (var _t194 = 0, _n144 = o + 2 * p; _t194 < _n144; _t194++) {
              var _n145 = L * _t194,
                  _s46 = L * (_t194 + 1);

              H(e + _i126 + _n145, e + _r106 + _n145, e + _r106 + _s46, e + _i126 + _s46);
            }
          }
        }

        function F(t, e, n) {
          s.push(t), s.push(e), s.push(n);
        }

        function O(t, e, r) {
          G(t), G(e), G(r);
          var s = i.length / 3,
              a = f.generateTopUV(n, i, s - 3, s - 2, s - 1);
          U(a[0]), U(a[1]), U(a[2]);
        }

        function H(t, e, r, s) {
          G(t), G(e), G(s), G(e), G(r), G(s);
          var a = i.length / 3,
              o = f.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
          U(o[0]), U(o[1]), U(o[3]), U(o[1]), U(o[2]), U(o[3]);
        }

        function G(t) {
          i.push(s[3 * t + 0]), i.push(s[3 * t + 1]), i.push(s[3 * t + 2]);
        }

        function U(t) {
          r.push(t.x), r.push(t.y);
        }

        !function () {
          var t = i.length / 3;

          if (c) {
            var _t195 = 0,
                _e163 = L * _t195;

            for (var _t196 = 0; _t196 < R; _t196++) {
              var _n146 = T[_t196];
              O(_n146[2] + _e163, _n146[1] + _e163, _n146[0] + _e163);
            }

            _t195 = o + 2 * p, _e163 = L * _t195;

            for (var _t197 = 0; _t197 < R; _t197++) {
              var _n147 = T[_t197];
              O(_n147[0] + _e163, _n147[1] + _e163, _n147[2] + _e163);
            }
          } else {
            for (var _t198 = 0; _t198 < R; _t198++) {
              var _e164 = T[_t198];
              O(_e164[2], _e164[1], _e164[0]);
            }

            for (var _t199 = 0; _t199 < R; _t199++) {
              var _e165 = T[_t199];
              O(_e165[0] + L * o, _e165[1] + L * o, _e165[2] + L * o);
            }
          }

          n.addGroup(t, i.length / 3 - t, 0);
        }(), function () {
          var t = i.length / 3;
          var e = 0;
          z(E, e), e += E.length;

          for (var _t200 = 0, _n148 = S.length; _t200 < _n148; _t200++) {
            var _n149 = S[_t200];
            z(_n149, e), e += _n149.length;
          }

          n.addGroup(t, i.length / 3 - t, 1);
        }();
      }

      _this49.setAttribute("position", new fn(i, 3)), _this49.setAttribute("uv", new fn(r, 2)), _this49.computeVertexNormals();
      return _this49;
    }

    _createClass(vo, [{
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(vo.prototype), "toJSON", this).call(this);

        return function (t, e, n) {
          if (n.shapes = [], Array.isArray(t)) for (var _e166 = 0, _i127 = t.length; _e166 < _i127; _e166++) {
            var _i128 = t[_e166];
            n.shapes.push(_i128.uuid);
          } else n.shapes.push(t.uuid);
          void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON());
          return n;
        }(this.parameters.shapes, this.parameters.options, t);
      }
    }]);

    return vo;
  }(An);

  var yo = {
    generateTopUV: function generateTopUV(t, e, n, i, r) {
      var s = e[3 * n],
          a = e[3 * n + 1],
          o = e[3 * i],
          l = e[3 * i + 1],
          c = e[3 * r],
          h = e[3 * r + 1];
      return [new vt(s, a), new vt(o, l), new vt(c, h)];
    },
    generateSideWallUV: function generateSideWallUV(t, e, n, i, r, s) {
      var a = e[3 * n],
          o = e[3 * n + 1],
          l = e[3 * n + 2],
          c = e[3 * i],
          h = e[3 * i + 1],
          u = e[3 * i + 2],
          d = e[3 * r],
          p = e[3 * r + 1],
          m = e[3 * r + 2],
          f = e[3 * s],
          g = e[3 * s + 1],
          v = e[3 * s + 2];
      return Math.abs(o - h) < Math.abs(a - c) ? [new vt(a, 1 - l), new vt(c, 1 - u), new vt(d, 1 - m), new vt(f, 1 - v)] : [new vt(o, 1 - l), new vt(h, 1 - u), new vt(p, 1 - m), new vt(g, 1 - v)];
    }
  };

  var xo = /*#__PURE__*/function (_Ba2) {
    _inherits(xo, _Ba2);

    var _super61 = _createSuper(xo);

    function xo() {
      var _this50;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, xo);

      var n = (1 + Math.sqrt(5)) / 2;
      _this50 = _super61.call(this, [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), _this50.type = "IcosahedronGeometry", _this50.parameters = {
        radius: t,
        detail: e
      };
      return _this50;
    }

    return xo;
  }(Ba);

  var _o = /*#__PURE__*/function (_An8) {
    _inherits(_o, _An8);

    var _super62 = _createSuper(_o);

    function _o(t) {
      var _this51;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2 * Math.PI;

      _classCallCheck(this, _o);

      _this51 = _super62.call(this), _this51.type = "LatheGeometry", _this51.parameters = {
        points: t,
        segments: e,
        phiStart: n,
        phiLength: i
      }, e = Math.floor(e), i = ht(i, 0, 2 * Math.PI);
      var r = [],
          s = [],
          a = [],
          o = 1 / e,
          l = new Rt(),
          c = new vt();

      for (var _r107 = 0; _r107 <= e; _r107++) {
        var _h9 = n + _r107 * o * i,
            _u12 = Math.sin(_h9),
            _d13 = Math.cos(_h9);

        for (var _n150 = 0; _n150 <= t.length - 1; _n150++) {
          l.x = t[_n150].x * _u12, l.y = t[_n150].y, l.z = t[_n150].x * _d13, s.push(l.x, l.y, l.z), c.x = _r107 / e, c.y = _n150 / (t.length - 1), a.push(c.x, c.y);
        }
      }

      for (var _n151 = 0; _n151 < e; _n151++) {
        for (var _e167 = 0; _e167 < t.length - 1; _e167++) {
          var _i129 = _e167 + _n151 * t.length,
              _s47 = _i129,
              _a45 = _i129 + t.length,
              _o23 = _i129 + t.length + 1,
              _l23 = _i129 + 1;

          r.push(_s47, _a45, _l23), r.push(_a45, _o23, _l23);
        }
      }

      if (_this51.setIndex(r), _this51.setAttribute("position", new fn(s, 3)), _this51.setAttribute("uv", new fn(a, 2)), _this51.computeVertexNormals(), i === 2 * Math.PI) {
        var _n152 = _this51.attributes.normal.array,
            _i130 = new Rt(),
            _r108 = new Rt(),
            _s48 = new Rt(),
            _a46 = e * t.length * 3;

        for (var _e168 = 0, _o24 = 0; _e168 < t.length; _e168++, _o24 += 3) {
          _i130.x = _n152[_o24 + 0], _i130.y = _n152[_o24 + 1], _i130.z = _n152[_o24 + 2], _r108.x = _n152[_a46 + _o24 + 0], _r108.y = _n152[_a46 + _o24 + 1], _r108.z = _n152[_a46 + _o24 + 2], _s48.addVectors(_i130, _r108).normalize(), _n152[_o24 + 0] = _n152[_a46 + _o24 + 0] = _s48.x, _n152[_o24 + 1] = _n152[_a46 + _o24 + 1] = _s48.y, _n152[_o24 + 2] = _n152[_a46 + _o24 + 2] = _s48.z;
        }
      }

      return _this51;
    }

    return _o;
  }(An);

  var wo = /*#__PURE__*/function (_Ba3) {
    _inherits(wo, _Ba3);

    var _super63 = _createSuper(wo);

    function wo() {
      var _this52;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, wo);

      _this52 = _super63.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), _this52.type = "OctahedronGeometry", _this52.parameters = {
        radius: t,
        detail: e
      };
      return _this52;
    }

    return wo;
  }(Ba);

  var bo = /*#__PURE__*/function (_An9) {
    _inherits(bo, _An9);

    var _super64 = _createSuper(bo);

    function bo(t, e, n) {
      var _this53;

      _classCallCheck(this, bo);

      _this53 = _super64.call(this), _this53.type = "ParametricGeometry", _this53.parameters = {
        func: t,
        slices: e,
        stacks: n
      };
      var i = [],
          r = [],
          s = [],
          a = [],
          o = 1e-5,
          l = new Rt(),
          c = new Rt(),
          h = new Rt(),
          u = new Rt(),
          d = new Rt();
      t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
      var p = e + 1;

      for (var _i131 = 0; _i131 <= n; _i131++) {
        var _p9 = _i131 / n;

        for (var _n153 = 0; _n153 <= e; _n153++) {
          var _i132 = _n153 / e;

          t(_i132, _p9, c), r.push(c.x, c.y, c.z), _i132 - o >= 0 ? (t(_i132 - o, _p9, h), u.subVectors(c, h)) : (t(_i132 + o, _p9, h), u.subVectors(h, c)), _p9 - o >= 0 ? (t(_i132, _p9 - o, h), d.subVectors(c, h)) : (t(_i132, _p9 + o, h), d.subVectors(h, c)), l.crossVectors(u, d).normalize(), s.push(l.x, l.y, l.z), a.push(_i132, _p9);
        }
      }

      for (var _t201 = 0; _t201 < n; _t201++) {
        for (var _n154 = 0; _n154 < e; _n154++) {
          var _e169 = _t201 * p + _n154,
              _r109 = _t201 * p + _n154 + 1,
              _s49 = (_t201 + 1) * p + _n154 + 1,
              _a47 = (_t201 + 1) * p + _n154;

          i.push(_e169, _r109, _a47), i.push(_r109, _s49, _a47);
        }
      }

      _this53.setIndex(i), _this53.setAttribute("position", new fn(r, 3)), _this53.setAttribute("normal", new fn(s, 3)), _this53.setAttribute("uv", new fn(a, 2));
      return _this53;
    }

    return bo;
  }(An);

  var Mo = /*#__PURE__*/function (_An10) {
    _inherits(Mo, _An10);

    var _super65 = _createSuper(Mo);

    function Mo() {
      var _this54;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .5;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2 * Math.PI;

      _classCallCheck(this, Mo);

      _this54 = _super65.call(this), _this54.type = "RingGeometry", _this54.parameters = {
        innerRadius: t,
        outerRadius: e,
        thetaSegments: n,
        phiSegments: i,
        thetaStart: r,
        thetaLength: s
      }, n = Math.max(3, n);
      var a = [],
          o = [],
          l = [],
          c = [];
      var h = t;
      var u = (e - t) / (i = Math.max(1, i)),
          d = new Rt(),
          p = new vt();

      for (var _t202 = 0; _t202 <= i; _t202++) {
        for (var _t203 = 0; _t203 <= n; _t203++) {
          var _i133 = r + _t203 / n * s;

          d.x = h * Math.cos(_i133), d.y = h * Math.sin(_i133), o.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (d.x / e + 1) / 2, p.y = (d.y / e + 1) / 2, c.push(p.x, p.y);
        }

        h += u;
      }

      for (var _t204 = 0; _t204 < i; _t204++) {
        var _e170 = _t204 * (n + 1);

        for (var _t205 = 0; _t205 < n; _t205++) {
          var _i134 = _t205 + _e170,
              _r110 = _i134,
              _s50 = _i134 + n + 1,
              _o25 = _i134 + n + 2,
              _l24 = _i134 + 1;

          a.push(_r110, _s50, _l24), a.push(_s50, _o25, _l24);
        }
      }

      _this54.setIndex(a), _this54.setAttribute("position", new fn(o, 3)), _this54.setAttribute("normal", new fn(l, 3)), _this54.setAttribute("uv", new fn(c, 2));
      return _this54;
    }

    return Mo;
  }(An);

  var So = /*#__PURE__*/function (_An11) {
    _inherits(So, _An11);

    var _super66 = _createSuper(So);

    function So(t) {
      var _this55;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;

      _classCallCheck(this, So);

      _this55 = _super66.call(this), _this55.type = "ShapeGeometry", _this55.parameters = {
        shapes: t,
        curveSegments: e
      };
      var n = [],
          i = [],
          r = [],
          s = [];
      var a = 0,
          o = 0;
      if (!1 === Array.isArray(t)) l(t);else for (var _e171 = 0; _e171 < t.length; _e171++) {
        l(t[_e171]), _this55.addGroup(a, o, _e171), a += o, o = 0;
      }

      function l(t) {
        var a = i.length / 3,
            l = t.extractPoints(e);
        var c = l.shape;
        var h = l.holes;
        !1 === mo.isClockWise(c) && (c = c.reverse());

        for (var _t206 = 0, _e172 = h.length; _t206 < _e172; _t206++) {
          var _e173 = h[_t206];
          !0 === mo.isClockWise(_e173) && (h[_t206] = _e173.reverse());
        }

        var u = mo.triangulateShape(c, h);

        for (var _t207 = 0, _e174 = h.length; _t207 < _e174; _t207++) {
          var _e175 = h[_t207];
          c = c.concat(_e175);
        }

        for (var _t208 = 0, _e176 = c.length; _t208 < _e176; _t208++) {
          var _e177 = c[_t208];
          i.push(_e177.x, _e177.y, 0), r.push(0, 0, 1), s.push(_e177.x, _e177.y);
        }

        for (var _t209 = 0, _e178 = u.length; _t209 < _e178; _t209++) {
          var _e179 = u[_t209],
              _i135 = _e179[0] + a,
              _r111 = _e179[1] + a,
              _s51 = _e179[2] + a;

          n.push(_i135, _r111, _s51), o += 3;
        }
      }

      _this55.setIndex(n), _this55.setAttribute("position", new fn(i, 3)), _this55.setAttribute("normal", new fn(r, 3)), _this55.setAttribute("uv", new fn(s, 2));
      return _this55;
    }

    _createClass(So, [{
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(So.prototype), "toJSON", this).call(this);

        return function (t, e) {
          if (e.shapes = [], Array.isArray(t)) for (var _n155 = 0, _i136 = t.length; _n155 < _i136; _n155++) {
            var _i137 = t[_n155];
            e.shapes.push(_i137.uuid);
          } else e.shapes.push(t.uuid);
          return e;
        }(this.parameters.shapes, t);
      }
    }]);

    return So;
  }(An);

  var To = /*#__PURE__*/function (_An12) {
    _inherits(To, _An12);

    var _super67 = _createSuper(To);

    function To() {
      var _this56;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2 * Math.PI;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var a = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : Math.PI;

      _classCallCheck(this, To);

      _this56 = _super67.call(this), _this56.type = "SphereGeometry", _this56.parameters = {
        radius: t,
        widthSegments: e,
        heightSegments: n,
        phiStart: i,
        phiLength: r,
        thetaStart: s,
        thetaLength: a
      }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
      var o = Math.min(s + a, Math.PI);
      var l = 0;
      var c = [],
          h = new Rt(),
          u = new Rt(),
          d = [],
          p = [],
          m = [],
          f = [];

      for (var _d14 = 0; _d14 <= n; _d14++) {
        var _g3 = [],
            _v3 = _d14 / n;

        var _y4 = 0;
        0 == _d14 && 0 == s ? _y4 = .5 / e : _d14 == n && o == Math.PI && (_y4 = -.5 / e);

        for (var _n156 = 0; _n156 <= e; _n156++) {
          var _o26 = _n156 / e;

          h.x = -t * Math.cos(i + _o26 * r) * Math.sin(s + _v3 * a), h.y = t * Math.cos(s + _v3 * a), h.z = t * Math.sin(i + _o26 * r) * Math.sin(s + _v3 * a), p.push(h.x, h.y, h.z), u.copy(h).normalize(), m.push(u.x, u.y, u.z), f.push(_o26 + _y4, 1 - _v3), _g3.push(l++);
        }

        c.push(_g3);
      }

      for (var _t210 = 0; _t210 < n; _t210++) {
        for (var _i138 = 0; _i138 < e; _i138++) {
          var _e180 = c[_t210][_i138 + 1],
              _r112 = c[_t210][_i138],
              _a48 = c[_t210 + 1][_i138],
              _l25 = c[_t210 + 1][_i138 + 1];
          (0 !== _t210 || s > 0) && d.push(_e180, _r112, _l25), (_t210 !== n - 1 || o < Math.PI) && d.push(_r112, _a48, _l25);
        }
      }

      _this56.setIndex(d), _this56.setAttribute("position", new fn(p, 3)), _this56.setAttribute("normal", new fn(m, 3)), _this56.setAttribute("uv", new fn(f, 2));
      return _this56;
    }

    return To;
  }(An);

  var Eo = /*#__PURE__*/function (_Ba4) {
    _inherits(Eo, _Ba4);

    var _super68 = _createSuper(Eo);

    function Eo() {
      var _this57;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, Eo);

      _this57 = _super68.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), _this57.type = "TetrahedronGeometry", _this57.parameters = {
        radius: t,
        detail: e
      };
      return _this57;
    }

    return Eo;
  }(Ba);

  var Ao = /*#__PURE__*/function (_vo) {
    _inherits(Ao, _vo);

    var _super69 = _createSuper(Ao);

    function Ao(t) {
      var _this58;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Ao);

      var n = e.font;
      if (!n || !n.isFont) return _possibleConstructorReturn(_this58, (console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new An()));
      var i = n.generateShapes(t, e.size);
      e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), _this58 = _super69.call(this, i, e), _this58.type = "TextGeometry";
      return _this58;
    }

    return Ao;
  }(vo);

  var Lo = /*#__PURE__*/function (_An13) {
    _inherits(Lo, _An13);

    var _super70 = _createSuper(Lo);

    function Lo() {
      var _this59;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .4;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 6;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2 * Math.PI;

      _classCallCheck(this, Lo);

      _this59 = _super70.call(this), _this59.type = "TorusGeometry", _this59.parameters = {
        radius: t,
        tube: e,
        radialSegments: n,
        tubularSegments: i,
        arc: r
      }, n = Math.floor(n), i = Math.floor(i);
      var s = [],
          a = [],
          o = [],
          l = [],
          c = new Rt(),
          h = new Rt(),
          u = new Rt();

      for (var _s52 = 0; _s52 <= n; _s52++) {
        for (var _d15 = 0; _d15 <= i; _d15++) {
          var _p10 = _d15 / i * r,
              _m6 = _s52 / n * Math.PI * 2;

          h.x = (t + e * Math.cos(_m6)) * Math.cos(_p10), h.y = (t + e * Math.cos(_m6)) * Math.sin(_p10), h.z = e * Math.sin(_m6), a.push(h.x, h.y, h.z), c.x = t * Math.cos(_p10), c.y = t * Math.sin(_p10), u.subVectors(h, c).normalize(), o.push(u.x, u.y, u.z), l.push(_d15 / i), l.push(_s52 / n);
        }
      }

      for (var _t211 = 1; _t211 <= n; _t211++) {
        for (var _e181 = 1; _e181 <= i; _e181++) {
          var _n157 = (i + 1) * _t211 + _e181 - 1,
              _r113 = (i + 1) * (_t211 - 1) + _e181 - 1,
              _a49 = (i + 1) * (_t211 - 1) + _e181,
              _o27 = (i + 1) * _t211 + _e181;

          s.push(_n157, _r113, _o27), s.push(_r113, _a49, _o27);
        }
      }

      _this59.setIndex(s), _this59.setAttribute("position", new fn(a, 3)), _this59.setAttribute("normal", new fn(o, 3)), _this59.setAttribute("uv", new fn(l, 2));
      return _this59;
    }

    return Lo;
  }(An);

  var Ro = /*#__PURE__*/function (_An14) {
    _inherits(Ro, _An14);

    var _super71 = _createSuper(Ro);

    function Ro() {
      var _this60;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .4;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 64;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;

      _classCallCheck(this, Ro);

      _this60 = _super71.call(this), _this60.type = "TorusKnotGeometry", _this60.parameters = {
        radius: t,
        tube: e,
        tubularSegments: n,
        radialSegments: i,
        p: r,
        q: s
      }, n = Math.floor(n), i = Math.floor(i);
      var a = [],
          o = [],
          l = [],
          c = [],
          h = new Rt(),
          u = new Rt(),
          d = new Rt(),
          p = new Rt(),
          m = new Rt(),
          f = new Rt(),
          g = new Rt();

      for (var _a50 = 0; _a50 <= n; ++_a50) {
        var _y5 = _a50 / n * r * Math.PI * 2;

        v(_y5, r, s, t, d), v(_y5 + .01, r, s, t, p), f.subVectors(p, d), g.addVectors(p, d), m.crossVectors(f, g), g.crossVectors(m, f), m.normalize(), g.normalize();

        for (var _t212 = 0; _t212 <= i; ++_t212) {
          var _r114 = _t212 / i * Math.PI * 2,
              _s53 = -e * Math.cos(_r114),
              _p11 = e * Math.sin(_r114);

          h.x = d.x + (_s53 * g.x + _p11 * m.x), h.y = d.y + (_s53 * g.y + _p11 * m.y), h.z = d.z + (_s53 * g.z + _p11 * m.z), o.push(h.x, h.y, h.z), u.subVectors(h, d).normalize(), l.push(u.x, u.y, u.z), c.push(_a50 / n), c.push(_t212 / i);
        }
      }

      for (var _t213 = 1; _t213 <= n; _t213++) {
        for (var _e182 = 1; _e182 <= i; _e182++) {
          var _n158 = (i + 1) * (_t213 - 1) + (_e182 - 1),
              _r115 = (i + 1) * _t213 + (_e182 - 1),
              _s54 = (i + 1) * _t213 + _e182,
              _o28 = (i + 1) * (_t213 - 1) + _e182;

          a.push(_n158, _r115, _o28), a.push(_r115, _s54, _o28);
        }
      }

      function v(t, e, n, i, r) {
        var s = Math.cos(t),
            a = Math.sin(t),
            o = n / e * t,
            l = Math.cos(o);
        r.x = i * (2 + l) * .5 * s, r.y = i * (2 + l) * a * .5, r.z = i * Math.sin(o) * .5;
      }

      _this60.setIndex(a), _this60.setAttribute("position", new fn(o, 3)), _this60.setAttribute("normal", new fn(l, 3)), _this60.setAttribute("uv", new fn(c, 2));
      return _this60;
    }

    return Ro;
  }(An);

  var Co = /*#__PURE__*/function (_An15) {
    _inherits(Co, _An15);

    var _super72 = _createSuper(Co);

    function Co(t) {
      var _this61;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 64;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;

      _classCallCheck(this, Co);

      _this61 = _super72.call(this), _this61.type = "TubeGeometry", _this61.parameters = {
        path: t,
        tubularSegments: e,
        radius: n,
        radialSegments: i,
        closed: r
      };
      var s = t.computeFrenetFrames(e, r);
      _this61.tangents = s.tangents, _this61.normals = s.normals, _this61.binormals = s.binormals;
      var a = new Rt(),
          o = new Rt(),
          l = new vt();
      var c = new Rt();
      var h = [],
          u = [],
          d = [],
          p = [];

      function m(r) {
        c = t.getPointAt(r / e, c);
        var l = s.normals[r],
            d = s.binormals[r];

        for (var _t214 = 0; _t214 <= i; _t214++) {
          var _e183 = _t214 / i * Math.PI * 2,
              _r116 = Math.sin(_e183),
              _s55 = -Math.cos(_e183);

          o.x = _s55 * l.x + _r116 * d.x, o.y = _s55 * l.y + _r116 * d.y, o.z = _s55 * l.z + _r116 * d.z, o.normalize(), u.push(o.x, o.y, o.z), a.x = c.x + n * o.x, a.y = c.y + n * o.y, a.z = c.z + n * o.z, h.push(a.x, a.y, a.z);
        }
      }

      !function () {
        for (var _t215 = 0; _t215 < e; _t215++) {
          m(_t215);
        }

        m(!1 === r ? e : 0), function () {
          for (var _t216 = 0; _t216 <= e; _t216++) {
            for (var _n159 = 0; _n159 <= i; _n159++) {
              l.x = _t216 / e, l.y = _n159 / i, d.push(l.x, l.y);
            }
          }
        }(), function () {
          for (var _t217 = 1; _t217 <= e; _t217++) {
            for (var _e184 = 1; _e184 <= i; _e184++) {
              var _n160 = (i + 1) * (_t217 - 1) + (_e184 - 1),
                  _r117 = (i + 1) * _t217 + (_e184 - 1),
                  _s56 = (i + 1) * _t217 + _e184,
                  _a51 = (i + 1) * (_t217 - 1) + _e184;

              p.push(_n160, _r117, _a51), p.push(_r117, _s56, _a51);
            }
          }
        }();
      }(), _this61.setIndex(p), _this61.setAttribute("position", new fn(h, 3)), _this61.setAttribute("normal", new fn(u, 3)), _this61.setAttribute("uv", new fn(d, 2));
      return _this61;
    }

    _createClass(Co, [{
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(Co.prototype), "toJSON", this).call(this);

        return t.path = this.parameters.path.toJSON(), t;
      }
    }]);

    return Co;
  }(An);

  var Po = /*#__PURE__*/function (_An16) {
    _inherits(Po, _An16);

    var _super73 = _createSuper(Po);

    function Po(t) {
      var _this62;

      _classCallCheck(this, Po);

      if (_this62 = _super73.call(this), _this62.type = "WireframeGeometry", !0 === t.isGeometry) return _possibleConstructorReturn(_this62, void console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."));
      var e = [],
          n = [0, 0],
          i = {},
          r = new Rt();

      if (null !== t.index) {
        var _s57 = t.attributes.position,
            _a52 = t.index;
        var _o29 = t.groups;
        0 === _o29.length && (_o29 = [{
          start: 0,
          count: _a52.count,
          materialIndex: 0
        }]);

        for (var _t218 = 0, _e185 = _o29.length; _t218 < _e185; ++_t218) {
          var _e186 = _o29[_t218],
              _r118 = _e186.start;

          for (var _t219 = _r118, _s58 = _r118 + _e186.count; _t219 < _s58; _t219 += 3) {
            for (var _e187 = 0; _e187 < 3; _e187++) {
              var _r119 = _a52.getX(_t219 + _e187),
                  _s59 = _a52.getX(_t219 + (_e187 + 1) % 3);

              n[0] = Math.min(_r119, _s59), n[1] = Math.max(_r119, _s59);

              var _o30 = n[0] + "," + n[1];

              void 0 === i[_o30] && (i[_o30] = {
                index1: n[0],
                index2: n[1]
              });
            }
          }
        }

        for (var _t220 in i) {
          var _n161 = i[_t220];
          r.fromBufferAttribute(_s57, _n161.index1), e.push(r.x, r.y, r.z), r.fromBufferAttribute(_s57, _n161.index2), e.push(r.x, r.y, r.z);
        }
      } else {
        var _n162 = t.attributes.position;

        for (var _t221 = 0, _i139 = _n162.count / 3; _t221 < _i139; _t221++) {
          for (var _i140 = 0; _i140 < 3; _i140++) {
            var _s60 = 3 * _t221 + _i140;

            r.fromBufferAttribute(_n162, _s60), e.push(r.x, r.y, r.z);

            var _a53 = 3 * _t221 + (_i140 + 1) % 3;

            r.fromBufferAttribute(_n162, _a53), e.push(r.x, r.y, r.z);
          }
        }
      }

      _this62.setAttribute("position", new fn(e, 3));

      return _possibleConstructorReturn(_this62);
    }

    return Po;
  }(An);

  var Do = Object.freeze({
    __proto__: null,
    BoxGeometry: Xn,
    BoxBufferGeometry: Xn,
    CircleGeometry: Da,
    CircleBufferGeometry: Da,
    ConeGeometry: Na,
    ConeBufferGeometry: Na,
    CylinderGeometry: Ia,
    CylinderBufferGeometry: Ia,
    DodecahedronGeometry: za,
    DodecahedronBufferGeometry: za,
    EdgesGeometry: Ua,
    ExtrudeGeometry: vo,
    ExtrudeBufferGeometry: vo,
    IcosahedronGeometry: xo,
    IcosahedronBufferGeometry: xo,
    LatheGeometry: _o,
    LatheBufferGeometry: _o,
    OctahedronGeometry: wo,
    OctahedronBufferGeometry: wo,
    ParametricGeometry: bo,
    ParametricBufferGeometry: bo,
    PlaneGeometry: ci,
    PlaneBufferGeometry: ci,
    PolyhedronGeometry: Ba,
    PolyhedronBufferGeometry: Ba,
    RingGeometry: Mo,
    RingBufferGeometry: Mo,
    ShapeGeometry: So,
    ShapeBufferGeometry: So,
    SphereGeometry: To,
    SphereBufferGeometry: To,
    TetrahedronGeometry: Eo,
    TetrahedronBufferGeometry: Eo,
    TextGeometry: Ao,
    TextBufferGeometry: Ao,
    TorusGeometry: Lo,
    TorusBufferGeometry: Lo,
    TorusKnotGeometry: Ro,
    TorusKnotBufferGeometry: Ro,
    TubeGeometry: Co,
    TubeBufferGeometry: Co,
    WireframeGeometry: Po
  });

  var Io = /*#__PURE__*/function (_Ye8) {
    _inherits(Io, _Ye8);

    var _super74 = _createSuper(Io);

    function Io(t) {
      var _this63;

      _classCallCheck(this, Io);

      _this63 = _super74.call(this), _this63.type = "ShadowMaterial", _this63.color = new en(0), _this63.transparent = !0, _this63.setValues(t);
      return _this63;
    }

    _createClass(Io, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Io.prototype), "copy", this).call(this, t), this.color.copy(t.color), this;
      }
    }]);

    return Io;
  }(Ye);

  Io.prototype.isShadowMaterial = !0;

  var No = /*#__PURE__*/function (_Qn) {
    _inherits(No, _Qn);

    var _super75 = _createSuper(No);

    function No(t) {
      var _this64;

      _classCallCheck(this, No);

      _this64 = _super75.call(this, t), _this64.type = "RawShaderMaterial";
      return _this64;
    }

    return No;
  }(Qn);

  No.prototype.isRawShaderMaterial = !0;

  var Bo = /*#__PURE__*/function (_Ye9) {
    _inherits(Bo, _Ye9);

    var _super76 = _createSuper(Bo);

    function Bo(t) {
      var _this65;

      _classCallCheck(this, Bo);

      _this65 = _super76.call(this), _this65.defines = {
        STANDARD: ""
      }, _this65.type = "MeshStandardMaterial", _this65.color = new en(16777215), _this65.roughness = 1, _this65.metalness = 0, _this65.map = null, _this65.lightMap = null, _this65.lightMapIntensity = 1, _this65.aoMap = null, _this65.aoMapIntensity = 1, _this65.emissive = new en(0), _this65.emissiveIntensity = 1, _this65.emissiveMap = null, _this65.bumpMap = null, _this65.bumpScale = 1, _this65.normalMap = null, _this65.normalMapType = 0, _this65.normalScale = new vt(1, 1), _this65.displacementMap = null, _this65.displacementScale = 1, _this65.displacementBias = 0, _this65.roughnessMap = null, _this65.metalnessMap = null, _this65.alphaMap = null, _this65.envMap = null, _this65.envMapIntensity = 1, _this65.refractionRatio = .98, _this65.wireframe = !1, _this65.wireframeLinewidth = 1, _this65.wireframeLinecap = "round", _this65.wireframeLinejoin = "round", _this65.morphTargets = !1, _this65.morphNormals = !1, _this65.flatShading = !1, _this65.vertexTangents = !1, _this65.setValues(t);
      return _this65;
    }

    _createClass(Bo, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Bo.prototype), "copy", this).call(this, t), this.defines = {
          STANDARD: ""
        }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this.vertexTangents = t.vertexTangents, this;
      }
    }]);

    return Bo;
  }(Ye);

  Bo.prototype.isMeshStandardMaterial = !0;

  var zo = /*#__PURE__*/function (_Bo) {
    _inherits(zo, _Bo);

    var _super77 = _createSuper(zo);

    function zo(t) {
      var _this66;

      _classCallCheck(this, zo);

      _this66 = _super77.call(this), _this66.defines = {
        STANDARD: "",
        PHYSICAL: ""
      }, _this66.type = "MeshPhysicalMaterial", _this66.clearcoat = 0, _this66.clearcoatMap = null, _this66.clearcoatRoughness = 0, _this66.clearcoatRoughnessMap = null, _this66.clearcoatNormalScale = new vt(1, 1), _this66.clearcoatNormalMap = null, _this66.reflectivity = .5, Object.defineProperty(_assertThisInitialized(_this66), "ior", {
        get: function get() {
          return (1 + .4 * this.reflectivity) / (1 - .4 * this.reflectivity);
        },
        set: function set(t) {
          this.reflectivity = ht(2.5 * (t - 1) / (t + 1), 0, 1);
        }
      }), _this66.sheen = null, _this66.transmission = 0, _this66.transmissionMap = null, _this66.thickness = .01, _this66.thicknessMap = null, _this66.attenuationDistance = 0, _this66.attenuationColor = new en(1, 1, 1), _this66.setValues(t);
      return _this66;
    }

    _createClass(zo, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(zo.prototype), "copy", this).call(this, t), this.defines = {
          STANDARD: "",
          PHYSICAL: ""
        }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.reflectivity = t.reflectivity, t.sheen ? this.sheen = (this.sheen || new en()).copy(t.sheen) : this.sheen = null, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this;
      }
    }]);

    return zo;
  }(Bo);

  zo.prototype.isMeshPhysicalMaterial = !0;

  var Fo = /*#__PURE__*/function (_Ye10) {
    _inherits(Fo, _Ye10);

    var _super78 = _createSuper(Fo);

    function Fo(t) {
      var _this67;

      _classCallCheck(this, Fo);

      _this67 = _super78.call(this), _this67.type = "MeshPhongMaterial", _this67.color = new en(16777215), _this67.specular = new en(1118481), _this67.shininess = 30, _this67.map = null, _this67.lightMap = null, _this67.lightMapIntensity = 1, _this67.aoMap = null, _this67.aoMapIntensity = 1, _this67.emissive = new en(0), _this67.emissiveIntensity = 1, _this67.emissiveMap = null, _this67.bumpMap = null, _this67.bumpScale = 1, _this67.normalMap = null, _this67.normalMapType = 0, _this67.normalScale = new vt(1, 1), _this67.displacementMap = null, _this67.displacementScale = 1, _this67.displacementBias = 0, _this67.specularMap = null, _this67.alphaMap = null, _this67.envMap = null, _this67.combine = 0, _this67.reflectivity = 1, _this67.refractionRatio = .98, _this67.wireframe = !1, _this67.wireframeLinewidth = 1, _this67.wireframeLinecap = "round", _this67.wireframeLinejoin = "round", _this67.morphTargets = !1, _this67.morphNormals = !1, _this67.flatShading = !1, _this67.setValues(t);
      return _this67;
    }

    _createClass(Fo, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Fo.prototype), "copy", this).call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this;
      }
    }]);

    return Fo;
  }(Ye);

  Fo.prototype.isMeshPhongMaterial = !0;

  var Oo = /*#__PURE__*/function (_Ye11) {
    _inherits(Oo, _Ye11);

    var _super79 = _createSuper(Oo);

    function Oo(t) {
      var _this68;

      _classCallCheck(this, Oo);

      _this68 = _super79.call(this), _this68.defines = {
        TOON: ""
      }, _this68.type = "MeshToonMaterial", _this68.color = new en(16777215), _this68.map = null, _this68.gradientMap = null, _this68.lightMap = null, _this68.lightMapIntensity = 1, _this68.aoMap = null, _this68.aoMapIntensity = 1, _this68.emissive = new en(0), _this68.emissiveIntensity = 1, _this68.emissiveMap = null, _this68.bumpMap = null, _this68.bumpScale = 1, _this68.normalMap = null, _this68.normalMapType = 0, _this68.normalScale = new vt(1, 1), _this68.displacementMap = null, _this68.displacementScale = 1, _this68.displacementBias = 0, _this68.alphaMap = null, _this68.wireframe = !1, _this68.wireframeLinewidth = 1, _this68.wireframeLinecap = "round", _this68.wireframeLinejoin = "round", _this68.morphTargets = !1, _this68.morphNormals = !1, _this68.setValues(t);
      return _this68;
    }

    _createClass(Oo, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Oo.prototype), "copy", this).call(this, t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this;
      }
    }]);

    return Oo;
  }(Ye);

  Oo.prototype.isMeshToonMaterial = !0;

  var Ho = /*#__PURE__*/function (_Ye12) {
    _inherits(Ho, _Ye12);

    var _super80 = _createSuper(Ho);

    function Ho(t) {
      var _this69;

      _classCallCheck(this, Ho);

      _this69 = _super80.call(this), _this69.type = "MeshNormalMaterial", _this69.bumpMap = null, _this69.bumpScale = 1, _this69.normalMap = null, _this69.normalMapType = 0, _this69.normalScale = new vt(1, 1), _this69.displacementMap = null, _this69.displacementScale = 1, _this69.displacementBias = 0, _this69.wireframe = !1, _this69.wireframeLinewidth = 1, _this69.fog = !1, _this69.morphTargets = !1, _this69.morphNormals = !1, _this69.flatShading = !1, _this69.setValues(t);
      return _this69;
    }

    _createClass(Ho, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Ho.prototype), "copy", this).call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this;
      }
    }]);

    return Ho;
  }(Ye);

  Ho.prototype.isMeshNormalMaterial = !0;

  var Go = /*#__PURE__*/function (_Ye13) {
    _inherits(Go, _Ye13);

    var _super81 = _createSuper(Go);

    function Go(t) {
      var _this70;

      _classCallCheck(this, Go);

      _this70 = _super81.call(this), _this70.type = "MeshLambertMaterial", _this70.color = new en(16777215), _this70.map = null, _this70.lightMap = null, _this70.lightMapIntensity = 1, _this70.aoMap = null, _this70.aoMapIntensity = 1, _this70.emissive = new en(0), _this70.emissiveIntensity = 1, _this70.emissiveMap = null, _this70.specularMap = null, _this70.alphaMap = null, _this70.envMap = null, _this70.combine = 0, _this70.reflectivity = 1, _this70.refractionRatio = .98, _this70.wireframe = !1, _this70.wireframeLinewidth = 1, _this70.wireframeLinecap = "round", _this70.wireframeLinejoin = "round", _this70.morphTargets = !1, _this70.morphNormals = !1, _this70.setValues(t);
      return _this70;
    }

    _createClass(Go, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Go.prototype), "copy", this).call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this;
      }
    }]);

    return Go;
  }(Ye);

  Go.prototype.isMeshLambertMaterial = !0;

  var Uo = /*#__PURE__*/function (_Ye14) {
    _inherits(Uo, _Ye14);

    var _super82 = _createSuper(Uo);

    function Uo(t) {
      var _this71;

      _classCallCheck(this, Uo);

      _this71 = _super82.call(this), _this71.defines = {
        MATCAP: ""
      }, _this71.type = "MeshMatcapMaterial", _this71.color = new en(16777215), _this71.matcap = null, _this71.map = null, _this71.bumpMap = null, _this71.bumpScale = 1, _this71.normalMap = null, _this71.normalMapType = 0, _this71.normalScale = new vt(1, 1), _this71.displacementMap = null, _this71.displacementScale = 1, _this71.displacementBias = 0, _this71.alphaMap = null, _this71.morphTargets = !1, _this71.morphNormals = !1, _this71.flatShading = !1, _this71.setValues(t);
      return _this71;
    }

    _createClass(Uo, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Uo.prototype), "copy", this).call(this, t), this.defines = {
          MATCAP: ""
        }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.flatShading = t.flatShading, this;
      }
    }]);

    return Uo;
  }(Ye);

  Uo.prototype.isMeshMatcapMaterial = !0;

  var ko = /*#__PURE__*/function (_ha) {
    _inherits(ko, _ha);

    var _super83 = _createSuper(ko);

    function ko(t) {
      var _this72;

      _classCallCheck(this, ko);

      _this72 = _super83.call(this), _this72.type = "LineDashedMaterial", _this72.scale = 1, _this72.dashSize = 3, _this72.gapSize = 1, _this72.setValues(t);
      return _this72;
    }

    _createClass(ko, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(ko.prototype), "copy", this).call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this;
      }
    }]);

    return ko;
  }(ha);

  ko.prototype.isLineDashedMaterial = !0;
  var Vo = Object.freeze({
    __proto__: null,
    ShadowMaterial: Io,
    SpriteMaterial: Rs,
    RawShaderMaterial: No,
    ShaderMaterial: Qn,
    PointsMaterial: wa,
    MeshPhysicalMaterial: zo,
    MeshStandardMaterial: Bo,
    MeshPhongMaterial: Fo,
    MeshToonMaterial: Oo,
    MeshNormalMaterial: Ho,
    MeshLambertMaterial: Go,
    MeshDepthMaterial: cs,
    MeshDistanceMaterial: hs,
    MeshBasicMaterial: nn,
    MeshMatcapMaterial: Uo,
    LineDashedMaterial: ko,
    LineBasicMaterial: ha,
    Material: Ye
  });
  var Wo = {
    arraySlice: function arraySlice(t, e, n) {
      return Wo.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n);
    },
    convertArray: function convertArray(t, e, n) {
      return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t);
    },
    isTypedArray: function isTypedArray(t) {
      return ArrayBuffer.isView(t) && !(t instanceof DataView);
    },
    getKeyframeOrder: function getKeyframeOrder(t) {
      var e = t.length,
          n = new Array(e);

      for (var _t222 = 0; _t222 !== e; ++_t222) {
        n[_t222] = _t222;
      }

      return n.sort(function (e, n) {
        return t[e] - t[n];
      }), n;
    },
    sortedArray: function sortedArray(t, e, n) {
      var i = t.length,
          r = new t.constructor(i);

      for (var _s61 = 0, _a54 = 0; _a54 !== i; ++_s61) {
        var _i141 = n[_s61] * e;

        for (var _n163 = 0; _n163 !== e; ++_n163) {
          r[_a54++] = t[_i141 + _n163];
        }
      }

      return r;
    },
    flattenJSON: function flattenJSON(t, e, n, i) {
      var r = 1,
          s = t[0];

      for (; void 0 !== s && void 0 === s[i];) {
        s = t[r++];
      }

      if (void 0 === s) return;
      var a = s[i];
      if (void 0 !== a) if (Array.isArray(a)) do {
        a = s[i], void 0 !== a && (e.push(s.time), n.push.apply(n, a)), s = t[r++];
      } while (void 0 !== s);else if (void 0 !== a.toArray) do {
        a = s[i], void 0 !== a && (e.push(s.time), a.toArray(n, n.length)), s = t[r++];
      } while (void 0 !== s);else do {
        a = s[i], void 0 !== a && (e.push(s.time), n.push(a)), s = t[r++];
      } while (void 0 !== s);
    },
    subclip: function subclip(t, e, n, i) {
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 30;
      var s = t.clone();
      s.name = e;
      var a = [];

      for (var _t223 = 0; _t223 < s.tracks.length; ++_t223) {
        var _e188 = s.tracks[_t223],
            _o31 = _e188.getValueSize(),
            _l26 = [],
            _c18 = [];

        for (var _t224 = 0; _t224 < _e188.times.length; ++_t224) {
          var _s62 = _e188.times[_t224] * r;

          if (!(_s62 < n || _s62 >= i)) {
            _l26.push(_e188.times[_t224]);

            for (var _n164 = 0; _n164 < _o31; ++_n164) {
              _c18.push(_e188.values[_t224 * _o31 + _n164]);
            }
          }
        }

        0 !== _l26.length && (_e188.times = Wo.convertArray(_l26, _e188.times.constructor), _e188.values = Wo.convertArray(_c18, _e188.values.constructor), a.push(_e188));
      }

      s.tracks = a;
      var o = 1 / 0;

      for (var _t225 = 0; _t225 < s.tracks.length; ++_t225) {
        o > s.tracks[_t225].times[0] && (o = s.tracks[_t225].times[0]);
      }

      for (var _t226 = 0; _t226 < s.tracks.length; ++_t226) {
        s.tracks[_t226].shift(-1 * o);
      }

      return s.resetDuration(), s;
    },
    makeClipAdditive: function makeClipAdditive(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
      i <= 0 && (i = 30);
      var r = n.tracks.length,
          s = e / i;

      var _loop = function _loop(_e189) {
        var i = n.tracks[_e189],
            r = i.ValueTypeName;
        if ("bool" === r || "string" === r) return "continue";
        var a = t.tracks.find(function (t) {
          return t.name === i.name && t.ValueTypeName === r;
        });
        if (void 0 === a) return "continue";
        var o = 0;
        var l = i.getValueSize();
        i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
        var c = 0;
        var h = a.getValueSize();
        a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
        var u = i.times.length - 1;
        var d = void 0;

        if (s <= i.times[0]) {
          var _t227 = o,
              _e190 = l - o;

          d = Wo.arraySlice(i.values, _t227, _e190);
        } else if (s >= i.times[u]) {
          var _t228 = u * l + o,
              _e191 = _t228 + l - o;

          d = Wo.arraySlice(i.values, _t228, _e191);
        } else {
          var _t229 = i.createInterpolant(),
              _e192 = o,
              _n165 = l - o;

          _t229.evaluate(s), d = Wo.arraySlice(_t229.resultBuffer, _e192, _n165);
        }

        if ("quaternion" === r) {
          new Lt().fromArray(d).normalize().conjugate().toArray(d);
        }

        var p = a.times.length;

        for (var _t230 = 0; _t230 < p; ++_t230) {
          var _e193 = _t230 * h + c;

          if ("quaternion" === r) Lt.multiplyQuaternionsFlat(a.values, _e193, d, 0, a.values, _e193);else {
            var _t231 = h - 2 * c;

            for (var _n166 = 0; _n166 < _t231; ++_n166) {
              a.values[_e193 + _n166] -= d[_n166];
            }
          }
        }
      };

      for (var _e189 = 0; _e189 < r; ++_e189) {
        var _ret = _loop(_e189);

        if (_ret === "continue") continue;
      }

      return t.blendMode = q, t;
    }
  };

  var jo = /*#__PURE__*/function () {
    function jo(t, e, n, i) {
      _classCallCheck(this, jo);

      this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
    }

    _createClass(jo, [{
      key: "evaluate",
      value: function evaluate(t) {
        var e = this.parameterPositions;
        var n = this._cachedIndex,
            i = e[n],
            r = e[n - 1];

        t: {
          e: {
            var _s63;

            n: {
              i: if (!(t < i)) {
                for (var _s64 = n + 2;;) {
                  if (void 0 === i) {
                    if (t < r) break i;
                    return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, r);
                  }

                  if (n === _s64) break;
                  if (r = i, i = e[++n], t < i) break e;
                }

                _s63 = e.length;
                break n;
              }

              if (t >= r) break t;
              {
                var _a55 = e[1];
                t < _a55 && (n = 2, r = _a55);

                for (var _s65 = n - 2;;) {
                  if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
                  if (n === _s65) break;
                  if (i = r, r = e[--n - 1], t >= r) break e;
                }

                _s63 = n, n = 0;
              }
            }

            for (; n < _s63;) {
              var _i142 = n + _s63 >>> 1;

              t < e[_i142] ? _s63 = _i142 : n = _i142 + 1;
            }

            if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
            if (void 0 === i) return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, r, t);
          }

          this._cachedIndex = n, this.intervalChanged_(n, r, i);
        }

        return this.interpolate_(n, r, t, i);
      }
    }, {
      key: "getSettings_",
      value: function getSettings_() {
        return this.settings || this.DefaultSettings_;
      }
    }, {
      key: "copySampleValue_",
      value: function copySampleValue_(t) {
        var e = this.resultBuffer,
            n = this.sampleValues,
            i = this.valueSize,
            r = t * i;

        for (var _t232 = 0; _t232 !== i; ++_t232) {
          e[_t232] = n[r + _t232];
        }

        return e;
      }
    }, {
      key: "interpolate_",
      value: function interpolate_() {
        throw new Error("call to abstract method");
      }
    }, {
      key: "intervalChanged_",
      value: function intervalChanged_() {}
    }]);

    return jo;
  }();

  jo.prototype.beforeStart_ = jo.prototype.copySampleValue_, jo.prototype.afterEnd_ = jo.prototype.copySampleValue_;

  var qo = /*#__PURE__*/function (_jo) {
    _inherits(qo, _jo);

    var _super84 = _createSuper(qo);

    function qo(t, e, n, i) {
      var _this73;

      _classCallCheck(this, qo);

      _this73 = _super84.call(this, t, e, n, i), _this73._weightPrev = -0, _this73._offsetPrev = -0, _this73._weightNext = -0, _this73._offsetNext = -0, _this73.DefaultSettings_ = {
        endingStart: k,
        endingEnd: k
      };
      return _this73;
    }

    _createClass(qo, [{
      key: "intervalChanged_",
      value: function intervalChanged_(t, e, n) {
        var i = this.parameterPositions;
        var r = t - 2,
            s = t + 1,
            a = i[r],
            o = i[s];
        if (void 0 === a) switch (this.getSettings_().endingStart) {
          case V:
            r = t, a = 2 * e - n;
            break;

          case W:
            r = i.length - 2, a = e + i[r] - i[r + 1];
            break;

          default:
            r = t, a = n;
        }
        if (void 0 === o) switch (this.getSettings_().endingEnd) {
          case V:
            s = t, o = 2 * n - e;
            break;

          case W:
            s = 1, o = n + i[1] - i[0];
            break;

          default:
            s = t - 1, o = e;
        }
        var l = .5 * (n - e),
            c = this.valueSize;
        this._weightPrev = l / (e - a), this._weightNext = l / (o - n), this._offsetPrev = r * c, this._offsetNext = s * c;
      }
    }, {
      key: "interpolate_",
      value: function interpolate_(t, e, n, i) {
        var r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = t * a,
            l = o - a,
            c = this._offsetPrev,
            h = this._offsetNext,
            u = this._weightPrev,
            d = this._weightNext,
            p = (n - e) / (i - e),
            m = p * p,
            f = m * p,
            g = -u * f + 2 * u * m - u * p,
            v = (1 + u) * f + (-1.5 - 2 * u) * m + (-.5 + u) * p + 1,
            y = (-1 - d) * f + (1.5 + d) * m + .5 * p,
            x = d * f - d * m;

        for (var _t233 = 0; _t233 !== a; ++_t233) {
          r[_t233] = g * s[c + _t233] + v * s[l + _t233] + y * s[o + _t233] + x * s[h + _t233];
        }

        return r;
      }
    }]);

    return qo;
  }(jo);

  var Xo = /*#__PURE__*/function (_jo2) {
    _inherits(Xo, _jo2);

    var _super85 = _createSuper(Xo);

    function Xo(t, e, n, i) {
      _classCallCheck(this, Xo);

      return _super85.call(this, t, e, n, i);
    }

    _createClass(Xo, [{
      key: "interpolate_",
      value: function interpolate_(t, e, n, i) {
        var r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = t * a,
            l = o - a,
            c = (n - e) / (i - e),
            h = 1 - c;

        for (var _t234 = 0; _t234 !== a; ++_t234) {
          r[_t234] = s[l + _t234] * h + s[o + _t234] * c;
        }

        return r;
      }
    }]);

    return Xo;
  }(jo);

  var Yo = /*#__PURE__*/function (_jo3) {
    _inherits(Yo, _jo3);

    var _super86 = _createSuper(Yo);

    function Yo(t, e, n, i) {
      _classCallCheck(this, Yo);

      return _super86.call(this, t, e, n, i);
    }

    _createClass(Yo, [{
      key: "interpolate_",
      value: function interpolate_(t) {
        return this.copySampleValue_(t - 1);
      }
    }]);

    return Yo;
  }(jo);

  var Zo = /*#__PURE__*/function () {
    function Zo(t, e, n, i) {
      _classCallCheck(this, Zo);

      if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
      this.name = t, this.times = Wo.convertArray(e, this.TimeBufferType), this.values = Wo.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
    }

    _createClass(Zo, [{
      key: "InterpolantFactoryMethodDiscrete",
      value: function InterpolantFactoryMethodDiscrete(t) {
        return new Yo(this.times, this.values, this.getValueSize(), t);
      }
    }, {
      key: "InterpolantFactoryMethodLinear",
      value: function InterpolantFactoryMethodLinear(t) {
        return new Xo(this.times, this.values, this.getValueSize(), t);
      }
    }, {
      key: "InterpolantFactoryMethodSmooth",
      value: function InterpolantFactoryMethodSmooth(t) {
        return new qo(this.times, this.values, this.getValueSize(), t);
      }
    }, {
      key: "setInterpolation",
      value: function setInterpolation(t) {
        var e;

        switch (t) {
          case H:
            e = this.InterpolantFactoryMethodDiscrete;
            break;

          case G:
            e = this.InterpolantFactoryMethodLinear;
            break;

          case U:
            e = this.InterpolantFactoryMethodSmooth;
        }

        if (void 0 === e) {
          var _e194 = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;

          if (void 0 === this.createInterpolant) {
            if (t === this.DefaultInterpolation) throw new Error(_e194);
            this.setInterpolation(this.DefaultInterpolation);
          }

          return console.warn("THREE.KeyframeTrack:", _e194), this;
        }

        return this.createInterpolant = e, this;
      }
    }, {
      key: "getInterpolation",
      value: function getInterpolation() {
        switch (this.createInterpolant) {
          case this.InterpolantFactoryMethodDiscrete:
            return H;

          case this.InterpolantFactoryMethodLinear:
            return G;

          case this.InterpolantFactoryMethodSmooth:
            return U;
        }
      }
    }, {
      key: "getValueSize",
      value: function getValueSize() {
        return this.values.length / this.times.length;
      }
    }, {
      key: "shift",
      value: function shift(t) {
        if (0 !== t) {
          var _e195 = this.times;

          for (var _n167 = 0, _i143 = _e195.length; _n167 !== _i143; ++_n167) {
            _e195[_n167] += t;
          }
        }

        return this;
      }
    }, {
      key: "scale",
      value: function scale(t) {
        if (1 !== t) {
          var _e196 = this.times;

          for (var _n168 = 0, _i144 = _e196.length; _n168 !== _i144; ++_n168) {
            _e196[_n168] *= t;
          }
        }

        return this;
      }
    }, {
      key: "trim",
      value: function trim(t, e) {
        var n = this.times,
            i = n.length;
        var r = 0,
            s = i - 1;

        for (; r !== i && n[r] < t;) {
          ++r;
        }

        for (; -1 !== s && n[s] > e;) {
          --s;
        }

        if (++s, 0 !== r || s !== i) {
          r >= s && (s = Math.max(s, 1), r = s - 1);

          var _t235 = this.getValueSize();

          this.times = Wo.arraySlice(n, r, s), this.values = Wo.arraySlice(this.values, r * _t235, s * _t235);
        }

        return this;
      }
    }, {
      key: "validate",
      value: function validate() {
        var t = !0;
        var e = this.getValueSize();
        e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
        var n = this.times,
            i = this.values,
            r = n.length;
        0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
        var s = null;

        for (var _e197 = 0; _e197 !== r; _e197++) {
          var _i145 = n[_e197];

          if ("number" == typeof _i145 && isNaN(_i145)) {
            console.error("THREE.KeyframeTrack: Time is not a valid number.", this, _e197, _i145), t = !1;
            break;
          }

          if (null !== s && s > _i145) {
            console.error("THREE.KeyframeTrack: Out of order keys.", this, _e197, _i145, s), t = !1;
            break;
          }

          s = _i145;
        }

        if (void 0 !== i && Wo.isTypedArray(i)) for (var _e198 = 0, _n169 = i.length; _e198 !== _n169; ++_e198) {
          var _n170 = i[_e198];

          if (isNaN(_n170)) {
            console.error("THREE.KeyframeTrack: Value is not a valid number.", this, _e198, _n170), t = !1;
            break;
          }
        }
        return t;
      }
    }, {
      key: "optimize",
      value: function optimize() {
        var t = Wo.arraySlice(this.times),
            e = Wo.arraySlice(this.values),
            n = this.getValueSize(),
            i = this.getInterpolation() === U,
            r = t.length - 1;
        var s = 1;

        for (var _a56 = 1; _a56 < r; ++_a56) {
          var _r120 = !1;

          var _o32 = t[_a56];
          if (_o32 !== t[_a56 + 1] && (1 !== _a56 || _o32 !== t[0])) if (i) _r120 = !0;else {
            var _t236 = _a56 * n,
                _i146 = _t236 - n,
                _s66 = _t236 + n;

            for (var _a57 = 0; _a57 !== n; ++_a57) {
              var _n171 = e[_t236 + _a57];

              if (_n171 !== e[_i146 + _a57] || _n171 !== e[_s66 + _a57]) {
                _r120 = !0;
                break;
              }
            }
          }

          if (_r120) {
            if (_a56 !== s) {
              t[s] = t[_a56];

              var _i147 = _a56 * n,
                  _r121 = s * n;

              for (var _t237 = 0; _t237 !== n; ++_t237) {
                e[_r121 + _t237] = e[_i147 + _t237];
              }
            }

            ++s;
          }
        }

        if (r > 0) {
          t[s] = t[r];

          for (var _t238 = r * n, _i148 = s * n, _a58 = 0; _a58 !== n; ++_a58) {
            e[_i148 + _a58] = e[_t238 + _a58];
          }

          ++s;
        }

        return s !== t.length ? (this.times = Wo.arraySlice(t, 0, s), this.values = Wo.arraySlice(e, 0, s * n)) : (this.times = t, this.values = e), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        var t = Wo.arraySlice(this.times, 0),
            e = Wo.arraySlice(this.values, 0),
            n = new (0, this.constructor)(this.name, t, e);
        return n.createInterpolant = this.createInterpolant, n;
      }
    }], [{
      key: "toJSON",
      value: function toJSON(t) {
        var e = t.constructor;
        var n;
        if (e.toJSON !== this.toJSON) n = e.toJSON(t);else {
          n = {
            name: t.name,
            times: Wo.convertArray(t.times, Array),
            values: Wo.convertArray(t.values, Array)
          };

          var _e199 = t.getInterpolation();

          _e199 !== t.DefaultInterpolation && (n.interpolation = _e199);
        }
        return n.type = t.ValueTypeName, n;
      }
    }]);

    return Zo;
  }();

  Zo.prototype.TimeBufferType = Float32Array, Zo.prototype.ValueBufferType = Float32Array, Zo.prototype.DefaultInterpolation = G;

  var Jo = /*#__PURE__*/function (_Zo) {
    _inherits(Jo, _Zo);

    var _super87 = _createSuper(Jo);

    function Jo() {
      _classCallCheck(this, Jo);

      return _super87.apply(this, arguments);
    }

    return Jo;
  }(Zo);

  Jo.prototype.ValueTypeName = "bool", Jo.prototype.ValueBufferType = Array, Jo.prototype.DefaultInterpolation = H, Jo.prototype.InterpolantFactoryMethodLinear = void 0, Jo.prototype.InterpolantFactoryMethodSmooth = void 0;

  var Qo = /*#__PURE__*/function (_Zo2) {
    _inherits(Qo, _Zo2);

    var _super88 = _createSuper(Qo);

    function Qo() {
      _classCallCheck(this, Qo);

      return _super88.apply(this, arguments);
    }

    return Qo;
  }(Zo);

  Qo.prototype.ValueTypeName = "color";

  var Ko = /*#__PURE__*/function (_Zo3) {
    _inherits(Ko, _Zo3);

    var _super89 = _createSuper(Ko);

    function Ko() {
      _classCallCheck(this, Ko);

      return _super89.apply(this, arguments);
    }

    return Ko;
  }(Zo);

  Ko.prototype.ValueTypeName = "number";

  var $o = /*#__PURE__*/function (_jo4) {
    _inherits($o, _jo4);

    var _super90 = _createSuper($o);

    function $o(t, e, n, i) {
      _classCallCheck(this, $o);

      return _super90.call(this, t, e, n, i);
    }

    _createClass($o, [{
      key: "interpolate_",
      value: function interpolate_(t, e, n, i) {
        var r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = (n - e) / (i - e);
        var l = t * a;

        for (var _t239 = l + a; l !== _t239; l += 4) {
          Lt.slerpFlat(r, 0, s, l - a, s, l, o);
        }

        return r;
      }
    }]);

    return $o;
  }(jo);

  var tl = /*#__PURE__*/function (_Zo4) {
    _inherits(tl, _Zo4);

    var _super91 = _createSuper(tl);

    function tl() {
      _classCallCheck(this, tl);

      return _super91.apply(this, arguments);
    }

    _createClass(tl, [{
      key: "InterpolantFactoryMethodLinear",
      value: function InterpolantFactoryMethodLinear(t) {
        return new $o(this.times, this.values, this.getValueSize(), t);
      }
    }]);

    return tl;
  }(Zo);

  tl.prototype.ValueTypeName = "quaternion", tl.prototype.DefaultInterpolation = G, tl.prototype.InterpolantFactoryMethodSmooth = void 0;

  var el = /*#__PURE__*/function (_Zo5) {
    _inherits(el, _Zo5);

    var _super92 = _createSuper(el);

    function el() {
      _classCallCheck(this, el);

      return _super92.apply(this, arguments);
    }

    return el;
  }(Zo);

  el.prototype.ValueTypeName = "string", el.prototype.ValueBufferType = Array, el.prototype.DefaultInterpolation = H, el.prototype.InterpolantFactoryMethodLinear = void 0, el.prototype.InterpolantFactoryMethodSmooth = void 0;

  var nl = /*#__PURE__*/function (_Zo6) {
    _inherits(nl, _Zo6);

    var _super93 = _createSuper(nl);

    function nl() {
      _classCallCheck(this, nl);

      return _super93.apply(this, arguments);
    }

    return nl;
  }(Zo);

  nl.prototype.ValueTypeName = "vector";

  var il = /*#__PURE__*/function () {
    function il(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var n = arguments.length > 2 ? arguments[2] : undefined;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2500;

      _classCallCheck(this, il);

      this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = ct(), this.duration < 0 && this.resetDuration();
    }

    _createClass(il, [{
      key: "resetDuration",
      value: function resetDuration() {
        var t = 0;

        for (var _e200 = 0, _n172 = this.tracks.length; _e200 !== _n172; ++_e200) {
          var _n173 = this.tracks[_e200];
          t = Math.max(t, _n173.times[_n173.times.length - 1]);
        }

        return this.duration = t, this;
      }
    }, {
      key: "trim",
      value: function trim() {
        for (var _t240 = 0; _t240 < this.tracks.length; _t240++) {
          this.tracks[_t240].trim(0, this.duration);
        }

        return this;
      }
    }, {
      key: "validate",
      value: function validate() {
        var t = !0;

        for (var _e201 = 0; _e201 < this.tracks.length; _e201++) {
          t = t && this.tracks[_e201].validate();
        }

        return t;
      }
    }, {
      key: "optimize",
      value: function optimize() {
        for (var _t241 = 0; _t241 < this.tracks.length; _t241++) {
          this.tracks[_t241].optimize();
        }

        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        var t = [];

        for (var _e202 = 0; _e202 < this.tracks.length; _e202++) {
          t.push(this.tracks[_e202].clone());
        }

        return new this.constructor(this.name, this.duration, t, this.blendMode);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.constructor.toJSON(this);
      }
    }], [{
      key: "parse",
      value: function parse(t) {
        var e = [],
            n = t.tracks,
            i = 1 / (t.fps || 1);

        for (var _t242 = 0, _r122 = n.length; _t242 !== _r122; ++_t242) {
          e.push(rl(n[_t242]).scale(i));
        }

        var r = new this(t.name, t.duration, e, t.blendMode);
        return r.uuid = t.uuid, r;
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = [],
            n = t.tracks,
            i = {
          name: t.name,
          duration: t.duration,
          tracks: e,
          uuid: t.uuid,
          blendMode: t.blendMode
        };

        for (var _t243 = 0, _i149 = n.length; _t243 !== _i149; ++_t243) {
          e.push(Zo.toJSON(n[_t243]));
        }

        return i;
      }
    }, {
      key: "CreateFromMorphTargetSequence",
      value: function CreateFromMorphTargetSequence(t, e, n, i) {
        var r = e.length,
            s = [];

        for (var _t244 = 0; _t244 < r; _t244++) {
          var _a59 = [],
              _o33 = [];
          _a59.push((_t244 + r - 1) % r, _t244, (_t244 + 1) % r), _o33.push(0, 1, 0);

          var _l27 = Wo.getKeyframeOrder(_a59);

          _a59 = Wo.sortedArray(_a59, 1, _l27), _o33 = Wo.sortedArray(_o33, 1, _l27), i || 0 !== _a59[0] || (_a59.push(r), _o33.push(_o33[0])), s.push(new Ko(".morphTargetInfluences[" + e[_t244].name + "]", _a59, _o33).scale(1 / n));
        }

        return new this(t, -1, s);
      }
    }, {
      key: "findByName",
      value: function findByName(t, e) {
        var n = t;

        if (!Array.isArray(t)) {
          var _e203 = t;
          n = _e203.geometry && _e203.geometry.animations || _e203.animations;
        }

        for (var _t245 = 0; _t245 < n.length; _t245++) {
          if (n[_t245].name === e) return n[_t245];
        }

        return null;
      }
    }, {
      key: "CreateClipsFromMorphTargetSequences",
      value: function CreateClipsFromMorphTargetSequences(t, e, n) {
        var i = {},
            r = /^([\w-]*?)([\d]+)$/;

        for (var _e204 = 0, _n174 = t.length; _e204 < _n174; _e204++) {
          var _n175 = t[_e204],
              _s67 = _n175.name.match(r);

          if (_s67 && _s67.length > 1) {
            var _t246 = _s67[1];
            var _e205 = i[_t246];
            _e205 || (i[_t246] = _e205 = []), _e205.push(_n175);
          }
        }

        var s = [];

        for (var _t247 in i) {
          s.push(this.CreateFromMorphTargetSequence(_t247, i[_t247], e, n));
        }

        return s;
      }
    }, {
      key: "parseAnimation",
      value: function parseAnimation(t, e) {
        if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;

        var n = function n(t, e, _n176, i, r) {
          if (0 !== _n176.length) {
            var _s68 = [],
                _a60 = [];
            Wo.flattenJSON(_n176, _s68, _a60, i), 0 !== _s68.length && r.push(new t(e, _s68, _a60));
          }
        },
            i = [],
            r = t.name || "default",
            s = t.fps || 30,
            a = t.blendMode;

        var o = t.length || -1;
        var l = t.hierarchy || [];

        for (var _t248 = 0; _t248 < l.length; _t248++) {
          var _r123 = l[_t248].keys;
          if (_r123 && 0 !== _r123.length) if (_r123[0].morphTargets) {
            var _t249 = {};

            var _e206 = void 0;

            for (_e206 = 0; _e206 < _r123.length; _e206++) {
              if (_r123[_e206].morphTargets) for (var _n177 = 0; _n177 < _r123[_e206].morphTargets.length; _n177++) {
                _t249[_r123[_e206].morphTargets[_n177]] = -1;
              }
            }

            for (var _n178 in _t249) {
              var _t250 = [],
                  _s69 = [];

              for (var _i150 = 0; _i150 !== _r123[_e206].morphTargets.length; ++_i150) {
                var _i151 = _r123[_e206];
                _t250.push(_i151.time), _s69.push(_i151.morphTarget === _n178 ? 1 : 0);
              }

              i.push(new Ko(".morphTargetInfluence[" + _n178 + "]", _t250, _s69));
            }

            o = _t249.length * (s || 1);
          } else {
            var _s70 = ".bones[" + e[_t248].name + "]";

            n(nl, _s70 + ".position", _r123, "pos", i), n(tl, _s70 + ".quaternion", _r123, "rot", i), n(nl, _s70 + ".scale", _r123, "scl", i);
          }
        }

        if (0 === i.length) return null;
        return new this(r, o, i, a);
      }
    }]);

    return il;
  }();

  function rl(t) {
    if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");

    var e = function (t) {
      switch (t.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
          return Ko;

        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
          return nl;

        case "color":
          return Qo;

        case "quaternion":
          return tl;

        case "bool":
        case "boolean":
          return Jo;

        case "string":
          return el;
      }

      throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
    }(t.type);

    if (void 0 === t.times) {
      var _e207 = [],
          _n179 = [];
      Wo.flattenJSON(t.keys, _e207, _n179, "value"), t.times = _e207, t.values = _n179;
    }

    return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation);
  }

  var sl = {
    enabled: !1,
    files: {},
    add: function add(t, e) {
      !1 !== this.enabled && (this.files[t] = e);
    },
    get: function get(t) {
      if (!1 !== this.enabled) return this.files[t];
    },
    remove: function remove(t) {
      delete this.files[t];
    },
    clear: function clear() {
      this.files = {};
    }
  };

  var al = function al(t, e, n) {
    _classCallCheck(this, al);

    var i = this;
    var r,
        s = !1,
        a = 0,
        o = 0;
    var l = [];
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function (t) {
      o++, !1 === s && void 0 !== i.onStart && i.onStart(t, a, o), s = !0;
    }, this.itemEnd = function (t) {
      a++, void 0 !== i.onProgress && i.onProgress(t, a, o), a === o && (s = !1, void 0 !== i.onLoad && i.onLoad());
    }, this.itemError = function (t) {
      void 0 !== i.onError && i.onError(t);
    }, this.resolveURL = function (t) {
      return r ? r(t) : t;
    }, this.setURLModifier = function (t) {
      return r = t, this;
    }, this.addHandler = function (t, e) {
      return l.push(t, e), this;
    }, this.removeHandler = function (t) {
      var e = l.indexOf(t);
      return -1 !== e && l.splice(e, 2), this;
    }, this.getHandler = function (t) {
      for (var _e208 = 0, _n180 = l.length; _e208 < _n180; _e208 += 2) {
        var _n181 = l[_e208],
            _i152 = l[_e208 + 1];
        if (_n181.global && (_n181.lastIndex = 0), _n181.test(t)) return _i152;
      }

      return null;
    };
  };

  var ol = new al();

  var ll = /*#__PURE__*/function () {
    function ll(t) {
      _classCallCheck(this, ll);

      this.manager = void 0 !== t ? t : ol, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
    }

    _createClass(ll, [{
      key: "load",
      value: function load() {}
    }, {
      key: "loadAsync",
      value: function loadAsync(t, e) {
        var n = this;
        return new Promise(function (i, r) {
          n.load(t, i, e, r);
        });
      }
    }, {
      key: "parse",
      value: function parse() {}
    }, {
      key: "setCrossOrigin",
      value: function setCrossOrigin(t) {
        return this.crossOrigin = t, this;
      }
    }, {
      key: "setWithCredentials",
      value: function setWithCredentials(t) {
        return this.withCredentials = t, this;
      }
    }, {
      key: "setPath",
      value: function setPath(t) {
        return this.path = t, this;
      }
    }, {
      key: "setResourcePath",
      value: function setResourcePath(t) {
        return this.resourcePath = t, this;
      }
    }, {
      key: "setRequestHeader",
      value: function setRequestHeader(t) {
        return this.requestHeader = t, this;
      }
    }]);

    return ll;
  }();

  var cl = {};

  var hl = /*#__PURE__*/function (_ll) {
    _inherits(hl, _ll);

    var _super94 = _createSuper(hl);

    function hl(t) {
      _classCallCheck(this, hl);

      return _super94.call(this, t);
    }

    _createClass(hl, [{
      key: "load",
      value: function load(t, e, n, i) {
        void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
        var r = this,
            s = sl.get(t);
        if (void 0 !== s) return r.manager.itemStart(t), setTimeout(function () {
          e && e(s), r.manager.itemEnd(t);
        }, 0), s;
        if (void 0 !== cl[t]) return void cl[t].push({
          onLoad: e,
          onProgress: n,
          onError: i
        });
        var a = t.match(/^data:(.*?)(;base64)?,(.*)$/);
        var o;

        if (a) {
          var _n182 = a[1],
              _s71 = !!a[2];

          var _o34 = a[3];
          _o34 = decodeURIComponent(_o34), _s71 && (_o34 = atob(_o34));

          try {
            var _i153;

            var _s72 = (this.responseType || "").toLowerCase();

            switch (_s72) {
              case "arraybuffer":
              case "blob":
                var _t251 = new Uint8Array(_o34.length);

                for (var _e210 = 0; _e210 < _o34.length; _e210++) {
                  _t251[_e210] = _o34.charCodeAt(_e210);
                }

                _i153 = "blob" === _s72 ? new Blob([_t251.buffer], {
                  type: _n182
                }) : _t251.buffer;
                break;

              case "document":
                var _e209 = new DOMParser();

                _i153 = _e209.parseFromString(_o34, _n182);
                break;

              case "json":
                _i153 = JSON.parse(_o34);
                break;

              default:
                _i153 = _o34;
            }

            setTimeout(function () {
              e && e(_i153), r.manager.itemEnd(t);
            }, 0);
          } catch (e) {
            setTimeout(function () {
              i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
            }, 0);
          }
        } else {
          cl[t] = [], cl[t].push({
            onLoad: e,
            onProgress: n,
            onError: i
          }), o = new XMLHttpRequest(), o.open("GET", t, !0), o.addEventListener("load", function (e) {
            var n = this.response,
                i = cl[t];

            if (delete cl[t], 200 === this.status || 0 === this.status) {
              0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), sl.add(t, n);

              for (var _t252 = 0, _e211 = i.length; _t252 < _e211; _t252++) {
                var _e212 = i[_t252];
                _e212.onLoad && _e212.onLoad(n);
              }

              r.manager.itemEnd(t);
            } else {
              for (var _t253 = 0, _n183 = i.length; _t253 < _n183; _t253++) {
                var _n184 = i[_t253];
                _n184.onError && _n184.onError(e);
              }

              r.manager.itemError(t), r.manager.itemEnd(t);
            }
          }, !1), o.addEventListener("progress", function (e) {
            var n = cl[t];

            for (var _t254 = 0, _i154 = n.length; _t254 < _i154; _t254++) {
              var _i155 = n[_t254];
              _i155.onProgress && _i155.onProgress(e);
            }
          }, !1), o.addEventListener("error", function (e) {
            var n = cl[t];
            delete cl[t];

            for (var _t255 = 0, _i156 = n.length; _t255 < _i156; _t255++) {
              var _i157 = n[_t255];
              _i157.onError && _i157.onError(e);
            }

            r.manager.itemError(t), r.manager.itemEnd(t);
          }, !1), o.addEventListener("abort", function (e) {
            var n = cl[t];
            delete cl[t];

            for (var _t256 = 0, _i158 = n.length; _t256 < _i158; _t256++) {
              var _i159 = n[_t256];
              _i159.onError && _i159.onError(e);
            }

            r.manager.itemError(t), r.manager.itemEnd(t);
          }, !1), void 0 !== this.responseType && (o.responseType = this.responseType), void 0 !== this.withCredentials && (o.withCredentials = this.withCredentials), o.overrideMimeType && o.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");

          for (var _t257 in this.requestHeader) {
            o.setRequestHeader(_t257, this.requestHeader[_t257]);
          }

          o.send(null);
        }

        return r.manager.itemStart(t), o;
      }
    }, {
      key: "setResponseType",
      value: function setResponseType(t) {
        return this.responseType = t, this;
      }
    }, {
      key: "setMimeType",
      value: function setMimeType(t) {
        return this.mimeType = t, this;
      }
    }]);

    return hl;
  }(ll);

  var ul = /*#__PURE__*/function (_ll2) {
    _inherits(ul, _ll2);

    var _super95 = _createSuper(ul);

    function ul(t) {
      _classCallCheck(this, ul);

      return _super95.call(this, t);
    }

    _createClass(ul, [{
      key: "load",
      value: function load(t, e, n, i) {
        void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
        var r = this,
            s = sl.get(t);
        if (void 0 !== s) return r.manager.itemStart(t), setTimeout(function () {
          e && e(s), r.manager.itemEnd(t);
        }, 0), s;
        var a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

        function o() {
          a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1), sl.add(t, this), e && e(this), r.manager.itemEnd(t);
        }

        function l(e) {
          a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
        }

        return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a;
      }
    }]);

    return ul;
  }(ll);

  var dl = /*#__PURE__*/function (_ll3) {
    _inherits(dl, _ll3);

    var _super96 = _createSuper(dl);

    function dl(t) {
      _classCallCheck(this, dl);

      return _super96.call(this, t);
    }

    _createClass(dl, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = new ni(),
            s = new ul(this.manager);
        s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
        var a = 0;

        function o(n) {
          s.load(t[n], function (t) {
            r.images[n] = t, a++, 6 === a && (r.needsUpdate = !0, e && e(r));
          }, void 0, i);
        }

        for (var _e213 = 0; _e213 < t.length; ++_e213) {
          o(_e213);
        }

        return r;
      }
    }]);

    return dl;
  }(ll);

  var pl = /*#__PURE__*/function (_ll4) {
    _inherits(pl, _ll4);

    var _super97 = _createSuper(pl);

    function pl(t) {
      _classCallCheck(this, pl);

      return _super97.call(this, t);
    }

    _createClass(pl, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = this,
            s = new ea(),
            a = new hl(this.manager);
        return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(r.withCredentials), a.load(t, function (t) {
          var n = r.parse(t);
          n && (void 0 !== n.image ? s.image = n.image : void 0 !== n.data && (s.image.width = n.width, s.image.height = n.height, s.image.data = n.data), s.wrapS = void 0 !== n.wrapS ? n.wrapS : u, s.wrapT = void 0 !== n.wrapT ? n.wrapT : u, s.magFilter = void 0 !== n.magFilter ? n.magFilter : g, s.minFilter = void 0 !== n.minFilter ? n.minFilter : g, s.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.encoding && (s.encoding = n.encoding), void 0 !== n.flipY && (s.flipY = n.flipY), void 0 !== n.format && (s.format = n.format), void 0 !== n.type && (s.type = n.type), void 0 !== n.mipmaps && (s.mipmaps = n.mipmaps, s.minFilter = y), 1 === n.mipmapCount && (s.minFilter = g), void 0 !== n.generateMipmaps && (s.generateMipmaps = n.generateMipmaps), s.needsUpdate = !0, e && e(s, n));
        }, n, i), s;
      }
    }]);

    return pl;
  }(ll);

  var ml = /*#__PURE__*/function (_ll5) {
    _inherits(ml, _ll5);

    var _super98 = _createSuper(ml);

    function ml(t) {
      _classCallCheck(this, ml);

      return _super98.call(this, t);
    }

    _createClass(ml, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = new bt(),
            s = new ul(this.manager);
        return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t, function (n) {
          r.image = n;
          var i = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
          r.format = i ? T : E, r.needsUpdate = !0, void 0 !== e && e(r);
        }, n, i), r;
      }
    }]);

    return ml;
  }(ll);

  var fl = /*#__PURE__*/function () {
    function fl() {
      _classCallCheck(this, fl);

      this.type = "Curve", this.arcLengthDivisions = 200;
    }

    _createClass(fl, [{
      key: "getPoint",
      value: function getPoint() {
        return console.warn("THREE.Curve: .getPoint() not implemented."), null;
      }
    }, {
      key: "getPointAt",
      value: function getPointAt(t, e) {
        var n = this.getUtoTmapping(t);
        return this.getPoint(n, e);
      }
    }, {
      key: "getPoints",
      value: function getPoints() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
        var e = [];

        for (var _n185 = 0; _n185 <= t; _n185++) {
          e.push(this.getPoint(_n185 / t));
        }

        return e;
      }
    }, {
      key: "getSpacedPoints",
      value: function getSpacedPoints() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
        var e = [];

        for (var _n186 = 0; _n186 <= t; _n186++) {
          e.push(this.getPointAt(_n186 / t));
        }

        return e;
      }
    }, {
      key: "getLength",
      value: function getLength() {
        var t = this.getLengths();
        return t[t.length - 1];
      }
    }, {
      key: "getLengths",
      value: function getLengths() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.arcLengthDivisions;
        if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1;
        var e = [];
        var n,
            i = this.getPoint(0),
            r = 0;
        e.push(0);

        for (var _s73 = 1; _s73 <= t; _s73++) {
          n = this.getPoint(_s73 / t), r += n.distanceTo(i), e.push(r), i = n;
        }

        return this.cacheArcLengths = e, e;
      }
    }, {
      key: "updateArcLengths",
      value: function updateArcLengths() {
        this.needsUpdate = !0, this.getLengths();
      }
    }, {
      key: "getUtoTmapping",
      value: function getUtoTmapping(t, e) {
        var n = this.getLengths();
        var i = 0;
        var r = n.length;
        var s;
        s = e || t * n[r - 1];
        var a,
            o = 0,
            l = r - 1;

        for (; o <= l;) {
          if (i = Math.floor(o + (l - o) / 2), a = n[i] - s, a < 0) o = i + 1;else {
            if (!(a > 0)) {
              l = i;
              break;
            }

            l = i - 1;
          }
        }

        if (i = l, n[i] === s) return i / (r - 1);
        var c = n[i];
        return (i + (s - c) / (n[i + 1] - c)) / (r - 1);
      }
    }, {
      key: "getTangent",
      value: function getTangent(t, e) {
        var n = 1e-4;
        var i = t - n,
            r = t + n;
        i < 0 && (i = 0), r > 1 && (r = 1);
        var s = this.getPoint(i),
            a = this.getPoint(r),
            o = e || (s.isVector2 ? new vt() : new Rt());
        return o.copy(a).sub(s).normalize(), o;
      }
    }, {
      key: "getTangentAt",
      value: function getTangentAt(t, e) {
        var n = this.getUtoTmapping(t);
        return this.getTangent(n, e);
      }
    }, {
      key: "computeFrenetFrames",
      value: function computeFrenetFrames(t, e) {
        var n = new Rt(),
            i = [],
            r = [],
            s = [],
            a = new Rt(),
            o = new ae();

        for (var _e214 = 0; _e214 <= t; _e214++) {
          var _n187 = _e214 / t;

          i[_e214] = this.getTangentAt(_n187, new Rt()), i[_e214].normalize();
        }

        r[0] = new Rt(), s[0] = new Rt();
        var l = Number.MAX_VALUE;
        var c = Math.abs(i[0].x),
            h = Math.abs(i[0].y),
            u = Math.abs(i[0].z);
        c <= l && (l = c, n.set(1, 0, 0)), h <= l && (l = h, n.set(0, 1, 0)), u <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]);

        for (var _e215 = 1; _e215 <= t; _e215++) {
          if (r[_e215] = r[_e215 - 1].clone(), s[_e215] = s[_e215 - 1].clone(), a.crossVectors(i[_e215 - 1], i[_e215]), a.length() > Number.EPSILON) {
            a.normalize();

            var _t258 = Math.acos(ht(i[_e215 - 1].dot(i[_e215]), -1, 1));

            r[_e215].applyMatrix4(o.makeRotationAxis(a, _t258));
          }

          s[_e215].crossVectors(i[_e215], r[_e215]);
        }

        if (!0 === e) {
          var _e216 = Math.acos(ht(r[0].dot(r[t]), -1, 1));

          _e216 /= t, i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (_e216 = -_e216);

          for (var _n188 = 1; _n188 <= t; _n188++) {
            r[_n188].applyMatrix4(o.makeRotationAxis(i[_n188], _e216 * _n188)), s[_n188].crossVectors(i[_n188], r[_n188]);
          }
        }

        return {
          tangents: i,
          normals: r,
          binormals: s
        };
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.arcLengthDivisions = t.arcLengthDivisions, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = {
          metadata: {
            version: 4.5,
            type: "Curve",
            generator: "Curve.toJSON"
          }
        };
        return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return this.arcLengthDivisions = t.arcLengthDivisions, this;
      }
    }]);

    return fl;
  }();

  var gl = /*#__PURE__*/function (_fl) {
    _inherits(gl, _fl);

    var _super99 = _createSuper(gl);

    function gl() {
      var _this74;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2 * Math.PI;
      var a = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
      var o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

      _classCallCheck(this, gl);

      _this74 = _super99.call(this), _this74.type = "EllipseCurve", _this74.aX = t, _this74.aY = e, _this74.xRadius = n, _this74.yRadius = i, _this74.aStartAngle = r, _this74.aEndAngle = s, _this74.aClockwise = a, _this74.aRotation = o;
      return _this74;
    }

    _createClass(gl, [{
      key: "getPoint",
      value: function getPoint(t, e) {
        var n = e || new vt(),
            i = 2 * Math.PI;
        var r = this.aEndAngle - this.aStartAngle;
        var s = Math.abs(r) < Number.EPSILON;

        for (; r < 0;) {
          r += i;
        }

        for (; r > i;) {
          r -= i;
        }

        r < Number.EPSILON && (r = s ? 0 : i), !0 !== this.aClockwise || s || (r === i ? r = -i : r -= i);
        var a = this.aStartAngle + t * r;
        var o = this.aX + this.xRadius * Math.cos(a),
            l = this.aY + this.yRadius * Math.sin(a);

        if (0 !== this.aRotation) {
          var _t259 = Math.cos(this.aRotation),
              _e217 = Math.sin(this.aRotation),
              _n189 = o - this.aX,
              _i160 = l - this.aY;

          o = _n189 * _t259 - _i160 * _e217 + this.aX, l = _n189 * _e217 + _i160 * _t259 + this.aY;
        }

        return n.set(o, l);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(gl.prototype), "copy", this).call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(gl.prototype), "toJSON", this).call(this);

        return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return _get(_getPrototypeOf(gl.prototype), "fromJSON", this).call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
      }
    }]);

    return gl;
  }(fl);

  gl.prototype.isEllipseCurve = !0;

  var vl = /*#__PURE__*/function (_gl) {
    _inherits(vl, _gl);

    var _super100 = _createSuper(vl);

    function vl(t, e, n, i, r, s) {
      var _this75;

      _classCallCheck(this, vl);

      _this75 = _super100.call(this, t, e, n, n, i, r, s), _this75.type = "ArcCurve";
      return _this75;
    }

    return vl;
  }(gl);

  function yl() {
    var t = 0,
        e = 0,
        n = 0,
        i = 0;

    function r(r, s, a, o) {
      t = r, e = a, n = -3 * r + 3 * s - 2 * a - o, i = 2 * r - 2 * s + a + o;
    }

    return {
      initCatmullRom: function initCatmullRom(t, e, n, i, s) {
        r(e, n, s * (n - t), s * (i - e));
      },
      initNonuniformCatmullRom: function initNonuniformCatmullRom(t, e, n, i, s, a, o) {
        var l = (e - t) / s - (n - t) / (s + a) + (n - e) / a,
            c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
        l *= a, c *= a, r(e, n, l, c);
      },
      calc: function calc(r) {
        var s = r * r;
        return t + e * r + n * s + i * (s * r);
      }
    };
  }

  vl.prototype.isArcCurve = !0;

  var xl = new Rt(),
      _l = new yl(),
      wl = new yl(),
      bl = new yl();

  var Ml = /*#__PURE__*/function (_fl2) {
    _inherits(Ml, _fl2);

    var _super101 = _createSuper(Ml);

    function Ml() {
      var _this76;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "centripetal";
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : .5;

      _classCallCheck(this, Ml);

      _this76 = _super101.call(this), _this76.type = "CatmullRomCurve3", _this76.points = t, _this76.closed = e, _this76.curveType = n, _this76.tension = i;
      return _this76;
    }

    _createClass(Ml, [{
      key: "getPoint",
      value: function getPoint(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Rt();
        var n = e,
            i = this.points,
            r = i.length,
            s = (r - (this.closed ? 0 : 1)) * t;
        var a,
            o,
            l = Math.floor(s),
            c = s - l;
        this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2, c = 1), this.closed || l > 0 ? a = i[(l - 1) % r] : (xl.subVectors(i[0], i[1]).add(i[0]), a = xl);
        var h = i[l % r],
            u = i[(l + 1) % r];

        if (this.closed || l + 2 < r ? o = i[(l + 2) % r] : (xl.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), o = xl), "centripetal" === this.curveType || "chordal" === this.curveType) {
          var _t260 = "chordal" === this.curveType ? .5 : .25;

          var _e218 = Math.pow(a.distanceToSquared(h), _t260),
              _n190 = Math.pow(h.distanceToSquared(u), _t260),
              _i161 = Math.pow(u.distanceToSquared(o), _t260);

          _n190 < 1e-4 && (_n190 = 1), _e218 < 1e-4 && (_e218 = _n190), _i161 < 1e-4 && (_i161 = _n190), _l.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, _e218, _n190, _i161), wl.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, _e218, _n190, _i161), bl.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, _e218, _n190, _i161);
        } else "catmullrom" === this.curveType && (_l.initCatmullRom(a.x, h.x, u.x, o.x, this.tension), wl.initCatmullRom(a.y, h.y, u.y, o.y, this.tension), bl.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));

        return n.set(_l.calc(c), wl.calc(c), bl.calc(c)), n;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        _get(_getPrototypeOf(Ml.prototype), "copy", this).call(this, t), this.points = [];

        for (var _e219 = 0, _n191 = t.points.length; _e219 < _n191; _e219++) {
          var _n192 = t.points[_e219];
          this.points.push(_n192.clone());
        }

        return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(Ml.prototype), "toJSON", this).call(this);

        t.points = [];

        for (var _e220 = 0, _n193 = this.points.length; _e220 < _n193; _e220++) {
          var _n194 = this.points[_e220];
          t.points.push(_n194.toArray());
        }

        return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        _get(_getPrototypeOf(Ml.prototype), "fromJSON", this).call(this, t), this.points = [];

        for (var _e221 = 0, _n195 = t.points.length; _e221 < _n195; _e221++) {
          var _n196 = t.points[_e221];
          this.points.push(new Rt().fromArray(_n196));
        }

        return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
      }
    }]);

    return Ml;
  }(fl);

  function Sl(t, e, n, i, r) {
    var s = .5 * (i - e),
        a = .5 * (r - n),
        o = t * t;
    return (2 * n - 2 * i + s + a) * (t * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t + n;
  }

  function Tl(t, e, n, i) {
    return function (t, e) {
      var n = 1 - t;
      return n * n * e;
    }(t, e) + function (t, e) {
      return 2 * (1 - t) * t * e;
    }(t, n) + function (t, e) {
      return t * t * e;
    }(t, i);
  }

  function El(t, e, n, i, r) {
    return function (t, e) {
      var n = 1 - t;
      return n * n * n * e;
    }(t, e) + function (t, e) {
      var n = 1 - t;
      return 3 * n * n * t * e;
    }(t, n) + function (t, e) {
      return 3 * (1 - t) * t * t * e;
    }(t, i) + function (t, e) {
      return t * t * t * e;
    }(t, r);
  }

  Ml.prototype.isCatmullRomCurve3 = !0;

  var Al = /*#__PURE__*/function (_fl3) {
    _inherits(Al, _fl3);

    var _super102 = _createSuper(Al);

    function Al() {
      var _this77;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new vt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new vt();
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new vt();
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new vt();

      _classCallCheck(this, Al);

      _this77 = _super102.call(this), _this77.type = "CubicBezierCurve", _this77.v0 = t, _this77.v1 = e, _this77.v2 = n, _this77.v3 = i;
      return _this77;
    }

    _createClass(Al, [{
      key: "getPoint",
      value: function getPoint(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new vt();
        var n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2,
            a = this.v3;
        return n.set(El(t, i.x, r.x, s.x, a.x), El(t, i.y, r.y, s.y, a.y)), n;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Al.prototype), "copy", this).call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(Al.prototype), "toJSON", this).call(this);

        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return _get(_getPrototypeOf(Al.prototype), "fromJSON", this).call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
      }
    }]);

    return Al;
  }(fl);

  Al.prototype.isCubicBezierCurve = !0;

  var Ll = /*#__PURE__*/function (_fl4) {
    _inherits(Ll, _fl4);

    var _super103 = _createSuper(Ll);

    function Ll() {
      var _this78;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Rt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Rt();
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Rt();
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Rt();

      _classCallCheck(this, Ll);

      _this78 = _super103.call(this), _this78.type = "CubicBezierCurve3", _this78.v0 = t, _this78.v1 = e, _this78.v2 = n, _this78.v3 = i;
      return _this78;
    }

    _createClass(Ll, [{
      key: "getPoint",
      value: function getPoint(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Rt();
        var n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2,
            a = this.v3;
        return n.set(El(t, i.x, r.x, s.x, a.x), El(t, i.y, r.y, s.y, a.y), El(t, i.z, r.z, s.z, a.z)), n;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Ll.prototype), "copy", this).call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(Ll.prototype), "toJSON", this).call(this);

        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return _get(_getPrototypeOf(Ll.prototype), "fromJSON", this).call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
      }
    }]);

    return Ll;
  }(fl);

  Ll.prototype.isCubicBezierCurve3 = !0;

  var Rl = /*#__PURE__*/function (_fl5) {
    _inherits(Rl, _fl5);

    var _super104 = _createSuper(Rl);

    function Rl() {
      var _this79;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new vt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new vt();

      _classCallCheck(this, Rl);

      _this79 = _super104.call(this), _this79.type = "LineCurve", _this79.v1 = t, _this79.v2 = e;
      return _this79;
    }

    _createClass(Rl, [{
      key: "getPoint",
      value: function getPoint(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new vt();
        var n = e;
        return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
      }
    }, {
      key: "getPointAt",
      value: function getPointAt(t, e) {
        return this.getPoint(t, e);
      }
    }, {
      key: "getTangent",
      value: function getTangent(t, e) {
        var n = e || new vt();
        return n.copy(this.v2).sub(this.v1).normalize(), n;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Rl.prototype), "copy", this).call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(Rl.prototype), "toJSON", this).call(this);

        return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return _get(_getPrototypeOf(Rl.prototype), "fromJSON", this).call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
      }
    }]);

    return Rl;
  }(fl);

  Rl.prototype.isLineCurve = !0;

  var Cl = /*#__PURE__*/function (_fl6) {
    _inherits(Cl, _fl6);

    var _super105 = _createSuper(Cl);

    function Cl() {
      var _this80;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Rt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Rt();

      _classCallCheck(this, Cl);

      _this80 = _super105.call(this), _this80.type = "LineCurve3", _this80.isLineCurve3 = !0, _this80.v1 = t, _this80.v2 = e;
      return _this80;
    }

    _createClass(Cl, [{
      key: "getPoint",
      value: function getPoint(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Rt();
        var n = e;
        return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
      }
    }, {
      key: "getPointAt",
      value: function getPointAt(t, e) {
        return this.getPoint(t, e);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Cl.prototype), "copy", this).call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(Cl.prototype), "toJSON", this).call(this);

        return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return _get(_getPrototypeOf(Cl.prototype), "fromJSON", this).call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
      }
    }]);

    return Cl;
  }(fl);

  var Pl = /*#__PURE__*/function (_fl7) {
    _inherits(Pl, _fl7);

    var _super106 = _createSuper(Pl);

    function Pl() {
      var _this81;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new vt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new vt();
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new vt();

      _classCallCheck(this, Pl);

      _this81 = _super106.call(this), _this81.type = "QuadraticBezierCurve", _this81.v0 = t, _this81.v1 = e, _this81.v2 = n;
      return _this81;
    }

    _createClass(Pl, [{
      key: "getPoint",
      value: function getPoint(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new vt();
        var n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2;
        return n.set(Tl(t, i.x, r.x, s.x), Tl(t, i.y, r.y, s.y)), n;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Pl.prototype), "copy", this).call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(Pl.prototype), "toJSON", this).call(this);

        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return _get(_getPrototypeOf(Pl.prototype), "fromJSON", this).call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
      }
    }]);

    return Pl;
  }(fl);

  Pl.prototype.isQuadraticBezierCurve = !0;

  var Dl = /*#__PURE__*/function (_fl8) {
    _inherits(Dl, _fl8);

    var _super107 = _createSuper(Dl);

    function Dl() {
      var _this82;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Rt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Rt();
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Rt();

      _classCallCheck(this, Dl);

      _this82 = _super107.call(this), _this82.type = "QuadraticBezierCurve3", _this82.v0 = t, _this82.v1 = e, _this82.v2 = n;
      return _this82;
    }

    _createClass(Dl, [{
      key: "getPoint",
      value: function getPoint(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Rt();
        var n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2;
        return n.set(Tl(t, i.x, r.x, s.x), Tl(t, i.y, r.y, s.y), Tl(t, i.z, r.z, s.z)), n;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Dl.prototype), "copy", this).call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(Dl.prototype), "toJSON", this).call(this);

        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return _get(_getPrototypeOf(Dl.prototype), "fromJSON", this).call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
      }
    }]);

    return Dl;
  }(fl);

  Dl.prototype.isQuadraticBezierCurve3 = !0;

  var Il = /*#__PURE__*/function (_fl9) {
    _inherits(Il, _fl9);

    var _super108 = _createSuper(Il);

    function Il() {
      var _this83;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      _classCallCheck(this, Il);

      _this83 = _super108.call(this), _this83.type = "SplineCurve", _this83.points = t;
      return _this83;
    }

    _createClass(Il, [{
      key: "getPoint",
      value: function getPoint(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new vt();
        var n = e,
            i = this.points,
            r = (i.length - 1) * t,
            s = Math.floor(r),
            a = r - s,
            o = i[0 === s ? s : s - 1],
            l = i[s],
            c = i[s > i.length - 2 ? i.length - 1 : s + 1],
            h = i[s > i.length - 3 ? i.length - 1 : s + 2];
        return n.set(Sl(a, o.x, l.x, c.x, h.x), Sl(a, o.y, l.y, c.y, h.y)), n;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        _get(_getPrototypeOf(Il.prototype), "copy", this).call(this, t), this.points = [];

        for (var _e222 = 0, _n197 = t.points.length; _e222 < _n197; _e222++) {
          var _n198 = t.points[_e222];
          this.points.push(_n198.clone());
        }

        return this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(Il.prototype), "toJSON", this).call(this);

        t.points = [];

        for (var _e223 = 0, _n199 = this.points.length; _e223 < _n199; _e223++) {
          var _n200 = this.points[_e223];
          t.points.push(_n200.toArray());
        }

        return t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        _get(_getPrototypeOf(Il.prototype), "fromJSON", this).call(this, t), this.points = [];

        for (var _e224 = 0, _n201 = t.points.length; _e224 < _n201; _e224++) {
          var _n202 = t.points[_e224];
          this.points.push(new vt().fromArray(_n202));
        }

        return this;
      }
    }]);

    return Il;
  }(fl);

  Il.prototype.isSplineCurve = !0;
  var Nl = Object.freeze({
    __proto__: null,
    ArcCurve: vl,
    CatmullRomCurve3: Ml,
    CubicBezierCurve: Al,
    CubicBezierCurve3: Ll,
    EllipseCurve: gl,
    LineCurve: Rl,
    LineCurve3: Cl,
    QuadraticBezierCurve: Pl,
    QuadraticBezierCurve3: Dl,
    SplineCurve: Il
  });

  var Bl = /*#__PURE__*/function (_fl10) {
    _inherits(Bl, _fl10);

    var _super109 = _createSuper(Bl);

    function Bl() {
      var _this84;

      _classCallCheck(this, Bl);

      _this84 = _super109.call(this), _this84.type = "CurvePath", _this84.curves = [], _this84.autoClose = !1;
      return _this84;
    }

    _createClass(Bl, [{
      key: "add",
      value: function add(t) {
        this.curves.push(t);
      }
    }, {
      key: "closePath",
      value: function closePath() {
        var t = this.curves[0].getPoint(0),
            e = this.curves[this.curves.length - 1].getPoint(1);
        t.equals(e) || this.curves.push(new Rl(e, t));
      }
    }, {
      key: "getPoint",
      value: function getPoint(t) {
        var e = t * this.getLength(),
            n = this.getCurveLengths();
        var i = 0;

        for (; i < n.length;) {
          if (n[i] >= e) {
            var _t261 = n[i] - e,
                _r124 = this.curves[i],
                _s74 = _r124.getLength(),
                _a61 = 0 === _s74 ? 0 : 1 - _t261 / _s74;

            return _r124.getPointAt(_a61);
          }

          i++;
        }

        return null;
      }
    }, {
      key: "getLength",
      value: function getLength() {
        var t = this.getCurveLengths();
        return t[t.length - 1];
      }
    }, {
      key: "updateArcLengths",
      value: function updateArcLengths() {
        this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
      }
    }, {
      key: "getCurveLengths",
      value: function getCurveLengths() {
        if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
        var t = [];
        var e = 0;

        for (var _n203 = 0, _i162 = this.curves.length; _n203 < _i162; _n203++) {
          e += this.curves[_n203].getLength(), t.push(e);
        }

        return this.cacheLengths = t, t;
      }
    }, {
      key: "getSpacedPoints",
      value: function getSpacedPoints() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40;
        var e = [];

        for (var _n204 = 0; _n204 <= t; _n204++) {
          e.push(this.getPoint(_n204 / t));
        }

        return this.autoClose && e.push(e[0]), e;
      }
    }, {
      key: "getPoints",
      value: function getPoints() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
        var e = [];
        var n;

        for (var _i163 = 0, _r125 = this.curves; _i163 < _r125.length; _i163++) {
          var _s75 = _r125[_i163],
              _a62 = _s75 && _s75.isEllipseCurve ? 2 * t : _s75 && (_s75.isLineCurve || _s75.isLineCurve3) ? 1 : _s75 && _s75.isSplineCurve ? t * _s75.points.length : t,
              _o35 = _s75.getPoints(_a62);

          for (var _t262 = 0; _t262 < _o35.length; _t262++) {
            var _i164 = _o35[_t262];
            n && n.equals(_i164) || (e.push(_i164), n = _i164);
          }
        }

        return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        _get(_getPrototypeOf(Bl.prototype), "copy", this).call(this, t), this.curves = [];

        for (var _e225 = 0, _n205 = t.curves.length; _e225 < _n205; _e225++) {
          var _n206 = t.curves[_e225];
          this.curves.push(_n206.clone());
        }

        return this.autoClose = t.autoClose, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(Bl.prototype), "toJSON", this).call(this);

        t.autoClose = this.autoClose, t.curves = [];

        for (var _e226 = 0, _n207 = this.curves.length; _e226 < _n207; _e226++) {
          var _n208 = this.curves[_e226];
          t.curves.push(_n208.toJSON());
        }

        return t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        _get(_getPrototypeOf(Bl.prototype), "fromJSON", this).call(this, t), this.autoClose = t.autoClose, this.curves = [];

        for (var _e227 = 0, _n209 = t.curves.length; _e227 < _n209; _e227++) {
          var _n210 = t.curves[_e227];
          this.curves.push(new Nl[_n210.type]().fromJSON(_n210));
        }

        return this;
      }
    }]);

    return Bl;
  }(fl);

  var zl = /*#__PURE__*/function (_Bl) {
    _inherits(zl, _Bl);

    var _super110 = _createSuper(zl);

    function zl(t) {
      var _this85;

      _classCallCheck(this, zl);

      _this85 = _super110.call(this), _this85.type = "Path", _this85.currentPoint = new vt(), t && _this85.setFromPoints(t);
      return _this85;
    }

    _createClass(zl, [{
      key: "setFromPoints",
      value: function setFromPoints(t) {
        this.moveTo(t[0].x, t[0].y);

        for (var _e228 = 1, _n211 = t.length; _e228 < _n211; _e228++) {
          this.lineTo(t[_e228].x, t[_e228].y);
        }

        return this;
      }
    }, {
      key: "moveTo",
      value: function moveTo(t, e) {
        return this.currentPoint.set(t, e), this;
      }
    }, {
      key: "lineTo",
      value: function lineTo(t, e) {
        var n = new Rl(this.currentPoint.clone(), new vt(t, e));
        return this.curves.push(n), this.currentPoint.set(t, e), this;
      }
    }, {
      key: "quadraticCurveTo",
      value: function quadraticCurveTo(t, e, n, i) {
        var r = new Pl(this.currentPoint.clone(), new vt(t, e), new vt(n, i));
        return this.curves.push(r), this.currentPoint.set(n, i), this;
      }
    }, {
      key: "bezierCurveTo",
      value: function bezierCurveTo(t, e, n, i, r, s) {
        var a = new Al(this.currentPoint.clone(), new vt(t, e), new vt(n, i), new vt(r, s));
        return this.curves.push(a), this.currentPoint.set(r, s), this;
      }
    }, {
      key: "splineThru",
      value: function splineThru(t) {
        var e = [this.currentPoint.clone()].concat(t),
            n = new Il(e);
        return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
      }
    }, {
      key: "arc",
      value: function arc(t, e, n, i, r, s) {
        var a = this.currentPoint.x,
            o = this.currentPoint.y;
        return this.absarc(t + a, e + o, n, i, r, s), this;
      }
    }, {
      key: "absarc",
      value: function absarc(t, e, n, i, r, s) {
        return this.absellipse(t, e, n, n, i, r, s), this;
      }
    }, {
      key: "ellipse",
      value: function ellipse(t, e, n, i, r, s, a, o) {
        var l = this.currentPoint.x,
            c = this.currentPoint.y;
        return this.absellipse(t + l, e + c, n, i, r, s, a, o), this;
      }
    }, {
      key: "absellipse",
      value: function absellipse(t, e, n, i, r, s, a, o) {
        var l = new gl(t, e, n, i, r, s, a, o);

        if (this.curves.length > 0) {
          var _t263 = l.getPoint(0);

          _t263.equals(this.currentPoint) || this.lineTo(_t263.x, _t263.y);
        }

        this.curves.push(l);
        var c = l.getPoint(1);
        return this.currentPoint.copy(c), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(zl.prototype), "copy", this).call(this, t), this.currentPoint.copy(t.currentPoint), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(zl.prototype), "toJSON", this).call(this);

        return t.currentPoint = this.currentPoint.toArray(), t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return _get(_getPrototypeOf(zl.prototype), "fromJSON", this).call(this, t), this.currentPoint.fromArray(t.currentPoint), this;
      }
    }]);

    return zl;
  }(Bl);

  var Fl = /*#__PURE__*/function (_zl) {
    _inherits(Fl, _zl);

    var _super111 = _createSuper(Fl);

    function Fl(t) {
      var _this86;

      _classCallCheck(this, Fl);

      _this86 = _super111.call(this, t), _this86.uuid = ct(), _this86.type = "Shape", _this86.holes = [];
      return _this86;
    }

    _createClass(Fl, [{
      key: "getPointsHoles",
      value: function getPointsHoles(t) {
        var e = [];

        for (var _n212 = 0, _i165 = this.holes.length; _n212 < _i165; _n212++) {
          e[_n212] = this.holes[_n212].getPoints(t);
        }

        return e;
      }
    }, {
      key: "extractPoints",
      value: function extractPoints(t) {
        return {
          shape: this.getPoints(t),
          holes: this.getPointsHoles(t)
        };
      }
    }, {
      key: "copy",
      value: function copy(t) {
        _get(_getPrototypeOf(Fl.prototype), "copy", this).call(this, t), this.holes = [];

        for (var _e229 = 0, _n213 = t.holes.length; _e229 < _n213; _e229++) {
          var _n214 = t.holes[_e229];
          this.holes.push(_n214.clone());
        }

        return this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(Fl.prototype), "toJSON", this).call(this);

        t.uuid = this.uuid, t.holes = [];

        for (var _e230 = 0, _n215 = this.holes.length; _e230 < _n215; _e230++) {
          var _n216 = this.holes[_e230];
          t.holes.push(_n216.toJSON());
        }

        return t;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        _get(_getPrototypeOf(Fl.prototype), "fromJSON", this).call(this, t), this.uuid = t.uuid, this.holes = [];

        for (var _e231 = 0, _n217 = t.holes.length; _e231 < _n217; _e231++) {
          var _n218 = t.holes[_e231];
          this.holes.push(new zl().fromJSON(_n218));
        }

        return this;
      }
    }]);

    return Fl;
  }(zl);

  var Ol = /*#__PURE__*/function (_Pe11) {
    _inherits(Ol, _Pe11);

    var _super112 = _createSuper(Ol);

    function Ol(t) {
      var _this87;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      _classCallCheck(this, Ol);

      _this87 = _super112.call(this), _this87.type = "Light", _this87.color = new en(t), _this87.intensity = e;
      return _this87;
    }

    _createClass(Ol, [{
      key: "dispose",
      value: function dispose() {}
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Ol.prototype), "copy", this).call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = _get(_getPrototypeOf(Ol.prototype), "toJSON", this).call(this, t);

        return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e;
      }
    }]);

    return Ol;
  }(Pe);

  Ol.prototype.isLight = !0;

  var Hl = /*#__PURE__*/function (_Ol) {
    _inherits(Hl, _Ol);

    var _super113 = _createSuper(Hl);

    function Hl(t, e, n) {
      var _this88;

      _classCallCheck(this, Hl);

      _this88 = _super113.call(this, t, n), _this88.type = "HemisphereLight", _this88.position.copy(Pe.DefaultUp), _this88.updateMatrix(), _this88.groundColor = new en(e);
      return _this88;
    }

    _createClass(Hl, [{
      key: "copy",
      value: function copy(t) {
        return Ol.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this;
      }
    }]);

    return Hl;
  }(Ol);

  Hl.prototype.isHemisphereLight = !0;
  var Gl = new ae(),
      Ul = new Rt(),
      kl = new Rt();

  var Vl = /*#__PURE__*/function () {
    function Vl(t) {
      _classCallCheck(this, Vl);

      this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new vt(512, 512), this.map = null, this.mapPass = null, this.matrix = new ae(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ai(), this._frameExtents = new vt(1, 1), this._viewportCount = 1, this._viewports = [new St(0, 0, 1, 1)];
    }

    _createClass(Vl, [{
      key: "getViewportCount",
      value: function getViewportCount() {
        return this._viewportCount;
      }
    }, {
      key: "getFrustum",
      value: function getFrustum() {
        return this._frustum;
      }
    }, {
      key: "updateMatrices",
      value: function updateMatrices(t) {
        var e = this.camera,
            n = this.matrix;
        Ul.setFromMatrixPosition(t.matrixWorld), e.position.copy(Ul), kl.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(kl), e.updateMatrixWorld(), Gl.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Gl), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(e.projectionMatrix), n.multiply(e.matrixWorldInverse);
      }
    }, {
      key: "getViewport",
      value: function getViewport(t) {
        return this._viewports[t];
      }
    }, {
      key: "getFrameExtents",
      value: function getFrameExtents() {
        return this._frameExtents;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = {};
        return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t;
      }
    }]);

    return Vl;
  }();

  var Wl = /*#__PURE__*/function (_Vl) {
    _inherits(Wl, _Vl);

    var _super114 = _createSuper(Wl);

    function Wl() {
      var _this89;

      _classCallCheck(this, Wl);

      _this89 = _super114.call(this, new $n(50, 1, .5, 500)), _this89.focus = 1;
      return _this89;
    }

    _createClass(Wl, [{
      key: "updateMatrices",
      value: function updateMatrices(t) {
        var e = this.camera,
            n = 2 * lt * t.angle * this.focus,
            i = this.mapSize.width / this.mapSize.height,
            r = t.distance || e.far;
        n === e.fov && i === e.aspect && r === e.far || (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), _get(_getPrototypeOf(Wl.prototype), "updateMatrices", this).call(this, t);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Wl.prototype), "copy", this).call(this, t), this.focus = t.focus, this;
      }
    }]);

    return Wl;
  }(Vl);

  Wl.prototype.isSpotLightShadow = !0;

  var jl = /*#__PURE__*/function (_Ol2) {
    _inherits(jl, _Ol2);

    var _super115 = _createSuper(jl);

    function jl(t, e) {
      var _this90;

      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Math.PI / 3;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

      _classCallCheck(this, jl);

      _this90 = _super115.call(this, t, e), _this90.type = "SpotLight", _this90.position.copy(Pe.DefaultUp), _this90.updateMatrix(), _this90.target = new Pe(), _this90.distance = n, _this90.angle = i, _this90.penumbra = r, _this90.decay = s, _this90.shadow = new Wl();
      return _this90;
    }

    _createClass(jl, [{
      key: "power",
      get: function get() {
        return this.intensity * Math.PI;
      },
      set: function set(t) {
        this.intensity = t / Math.PI;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.shadow.dispose();
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(jl.prototype), "copy", this).call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
      }
    }]);

    return jl;
  }(Ol);

  jl.prototype.isSpotLight = !0;
  var ql = new ae(),
      Xl = new Rt(),
      Yl = new Rt();

  var Zl = /*#__PURE__*/function (_Vl2) {
    _inherits(Zl, _Vl2);

    var _super116 = _createSuper(Zl);

    function Zl() {
      var _this91;

      _classCallCheck(this, Zl);

      _this91 = _super116.call(this, new $n(90, 1, .5, 500)), _this91._frameExtents = new vt(4, 2), _this91._viewportCount = 6, _this91._viewports = [new St(2, 1, 1, 1), new St(0, 1, 1, 1), new St(3, 1, 1, 1), new St(1, 1, 1, 1), new St(3, 0, 1, 1), new St(1, 0, 1, 1)], _this91._cubeDirections = [new Rt(1, 0, 0), new Rt(-1, 0, 0), new Rt(0, 0, 1), new Rt(0, 0, -1), new Rt(0, 1, 0), new Rt(0, -1, 0)], _this91._cubeUps = [new Rt(0, 1, 0), new Rt(0, 1, 0), new Rt(0, 1, 0), new Rt(0, 1, 0), new Rt(0, 0, 1), new Rt(0, 0, -1)];
      return _this91;
    }

    _createClass(Zl, [{
      key: "updateMatrices",
      value: function updateMatrices(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = this.camera,
            i = this.matrix,
            r = t.distance || n.far;
        r !== n.far && (n.far = r, n.updateProjectionMatrix()), Xl.setFromMatrixPosition(t.matrixWorld), n.position.copy(Xl), Yl.copy(n.position), Yl.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(Yl), n.updateMatrixWorld(), i.makeTranslation(-Xl.x, -Xl.y, -Xl.z), ql.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ql);
      }
    }]);

    return Zl;
  }(Vl);

  Zl.prototype.isPointLightShadow = !0;

  var Jl = /*#__PURE__*/function (_Ol3) {
    _inherits(Jl, _Ol3);

    var _super117 = _createSuper(Jl);

    function Jl(t, e) {
      var _this92;

      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      _classCallCheck(this, Jl);

      _this92 = _super117.call(this, t, e), _this92.type = "PointLight", _this92.distance = n, _this92.decay = i, _this92.shadow = new Zl();
      return _this92;
    }

    _createClass(Jl, [{
      key: "power",
      get: function get() {
        return 4 * this.intensity * Math.PI;
      },
      set: function set(t) {
        this.intensity = t / (4 * Math.PI);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.shadow.dispose();
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Jl.prototype), "copy", this).call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this;
      }
    }]);

    return Jl;
  }(Ol);

  Jl.prototype.isPointLight = !0;

  var Ql = /*#__PURE__*/function (_Kn2) {
    _inherits(Ql, _Kn2);

    var _super118 = _createSuper(Ql);

    function Ql() {
      var _this93;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : .1;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2e3;

      _classCallCheck(this, Ql);

      _this93 = _super118.call(this), _this93.type = "OrthographicCamera", _this93.zoom = 1, _this93.view = null, _this93.left = t, _this93.right = e, _this93.top = n, _this93.bottom = i, _this93.near = r, _this93.far = s, _this93.updateProjectionMatrix();
      return _this93;
    }

    _createClass(Ql, [{
      key: "copy",
      value: function copy(t, e) {
        return _get(_getPrototypeOf(Ql.prototype), "copy", this).call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this;
      }
    }, {
      key: "setViewOffset",
      value: function setViewOffset(t, e, n, i, r, s) {
        null === this.view && (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1
        }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
      }
    }, {
      key: "clearViewOffset",
      value: function clearViewOffset() {
        null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
      }
    }, {
      key: "updateProjectionMatrix",
      value: function updateProjectionMatrix() {
        var t = (this.right - this.left) / (2 * this.zoom),
            e = (this.top - this.bottom) / (2 * this.zoom),
            n = (this.right + this.left) / 2,
            i = (this.top + this.bottom) / 2;
        var r = n - t,
            s = n + t,
            a = i + e,
            o = i - e;

        if (null !== this.view && this.view.enabled) {
          var _t264 = (this.right - this.left) / this.view.fullWidth / this.zoom,
              _e232 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;

          r += _t264 * this.view.offsetX, s = r + _t264 * this.view.width, a -= _e232 * this.view.offsetY, o = a - _e232 * this.view.height;
        }

        this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = _get(_getPrototypeOf(Ql.prototype), "toJSON", this).call(this, t);

        return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e;
      }
    }]);

    return Ql;
  }(Kn);

  Ql.prototype.isOrthographicCamera = !0;

  var Kl = /*#__PURE__*/function (_Vl3) {
    _inherits(Kl, _Vl3);

    var _super119 = _createSuper(Kl);

    function Kl() {
      _classCallCheck(this, Kl);

      return _super119.call(this, new Ql(-5, 5, 5, -5, .5, 500));
    }

    return Kl;
  }(Vl);

  Kl.prototype.isDirectionalLightShadow = !0;

  var $l = /*#__PURE__*/function (_Ol4) {
    _inherits($l, _Ol4);

    var _super120 = _createSuper($l);

    function $l(t, e) {
      var _this94;

      _classCallCheck(this, $l);

      _this94 = _super120.call(this, t, e), _this94.type = "DirectionalLight", _this94.position.copy(Pe.DefaultUp), _this94.updateMatrix(), _this94.target = new Pe(), _this94.shadow = new Kl();
      return _this94;
    }

    _createClass($l, [{
      key: "dispose",
      value: function dispose() {
        this.shadow.dispose();
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf($l.prototype), "copy", this).call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
      }
    }]);

    return $l;
  }(Ol);

  $l.prototype.isDirectionalLight = !0;

  var tc = /*#__PURE__*/function (_Ol5) {
    _inherits(tc, _Ol5);

    var _super121 = _createSuper(tc);

    function tc(t, e) {
      var _this95;

      _classCallCheck(this, tc);

      _this95 = _super121.call(this, t, e), _this95.type = "AmbientLight";
      return _this95;
    }

    return tc;
  }(Ol);

  tc.prototype.isAmbientLight = !0;

  var ec = /*#__PURE__*/function (_Ol6) {
    _inherits(ec, _Ol6);

    var _super122 = _createSuper(ec);

    function ec(t, e) {
      var _this96;

      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

      _classCallCheck(this, ec);

      _this96 = _super122.call(this, t, e), _this96.type = "RectAreaLight", _this96.width = n, _this96.height = i;
      return _this96;
    }

    _createClass(ec, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(ec.prototype), "copy", this).call(this, t), this.width = t.width, this.height = t.height, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = _get(_getPrototypeOf(ec.prototype), "toJSON", this).call(this, t);

        return e.object.width = this.width, e.object.height = this.height, e;
      }
    }]);

    return ec;
  }(Ol);

  ec.prototype.isRectAreaLight = !0;

  var nc = /*#__PURE__*/function () {
    function nc() {
      _classCallCheck(this, nc);

      this.coefficients = [];

      for (var _t265 = 0; _t265 < 9; _t265++) {
        this.coefficients.push(new Rt());
      }
    }

    _createClass(nc, [{
      key: "set",
      value: function set(t) {
        for (var _e233 = 0; _e233 < 9; _e233++) {
          this.coefficients[_e233].copy(t[_e233]);
        }

        return this;
      }
    }, {
      key: "zero",
      value: function zero() {
        for (var _t266 = 0; _t266 < 9; _t266++) {
          this.coefficients[_t266].set(0, 0, 0);
        }

        return this;
      }
    }, {
      key: "getAt",
      value: function getAt(t, e) {
        var n = t.x,
            i = t.y,
            r = t.z,
            s = this.coefficients;
        return e.copy(s[0]).multiplyScalar(.282095), e.addScaledVector(s[1], .488603 * i), e.addScaledVector(s[2], .488603 * r), e.addScaledVector(s[3], .488603 * n), e.addScaledVector(s[4], n * i * 1.092548), e.addScaledVector(s[5], i * r * 1.092548), e.addScaledVector(s[6], .315392 * (3 * r * r - 1)), e.addScaledVector(s[7], n * r * 1.092548), e.addScaledVector(s[8], .546274 * (n * n - i * i)), e;
      }
    }, {
      key: "getIrradianceAt",
      value: function getIrradianceAt(t, e) {
        var n = t.x,
            i = t.y,
            r = t.z,
            s = this.coefficients;
        return e.copy(s[0]).multiplyScalar(.886227), e.addScaledVector(s[1], 1.023328 * i), e.addScaledVector(s[2], 1.023328 * r), e.addScaledVector(s[3], 1.023328 * n), e.addScaledVector(s[4], .858086 * n * i), e.addScaledVector(s[5], .858086 * i * r), e.addScaledVector(s[6], .743125 * r * r - .247708), e.addScaledVector(s[7], .858086 * n * r), e.addScaledVector(s[8], .429043 * (n * n - i * i)), e;
      }
    }, {
      key: "add",
      value: function add(t) {
        for (var _e234 = 0; _e234 < 9; _e234++) {
          this.coefficients[_e234].add(t.coefficients[_e234]);
        }

        return this;
      }
    }, {
      key: "addScaledSH",
      value: function addScaledSH(t, e) {
        for (var _n219 = 0; _n219 < 9; _n219++) {
          this.coefficients[_n219].addScaledVector(t.coefficients[_n219], e);
        }

        return this;
      }
    }, {
      key: "scale",
      value: function scale(t) {
        for (var _e235 = 0; _e235 < 9; _e235++) {
          this.coefficients[_e235].multiplyScalar(t);
        }

        return this;
      }
    }, {
      key: "lerp",
      value: function lerp(t, e) {
        for (var _n220 = 0; _n220 < 9; _n220++) {
          this.coefficients[_n220].lerp(t.coefficients[_n220], e);
        }

        return this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        for (var _e236 = 0; _e236 < 9; _e236++) {
          if (!this.coefficients[_e236].equals(t.coefficients[_e236])) return !1;
        }

        return !0;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.set(t.coefficients);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "fromArray",
      value: function fromArray(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = this.coefficients;

        for (var _i166 = 0; _i166 < 9; _i166++) {
          n[_i166].fromArray(t, e + 3 * _i166);
        }

        return this;
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = this.coefficients;

        for (var _i167 = 0; _i167 < 9; _i167++) {
          n[_i167].toArray(t, e + 3 * _i167);
        }

        return t;
      }
    }], [{
      key: "getBasisAt",
      value: function getBasisAt(t, e) {
        var n = t.x,
            i = t.y,
            r = t.z;
        e[0] = .282095, e[1] = .488603 * i, e[2] = .488603 * r, e[3] = .488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * n * r, e[8] = .546274 * (n * n - i * i);
      }
    }]);

    return nc;
  }();

  nc.prototype.isSphericalHarmonics3 = !0;

  var ic = /*#__PURE__*/function (_Ol7) {
    _inherits(ic, _Ol7);

    var _super123 = _createSuper(ic);

    function ic() {
      var _this97;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new nc();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      _classCallCheck(this, ic);

      _this97 = _super123.call(this, void 0, e), _this97.sh = t;
      return _this97;
    }

    _createClass(ic, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(ic.prototype), "copy", this).call(this, t), this.sh.copy(t.sh), this;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(t) {
        return this.intensity = t.intensity, this.sh.fromArray(t.sh), this;
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = _get(_getPrototypeOf(ic.prototype), "toJSON", this).call(this, t);

        return e.object.sh = this.sh.toArray(), e;
      }
    }]);

    return ic;
  }(Ol);

  ic.prototype.isLightProbe = !0;

  var rc = /*#__PURE__*/function (_ll6) {
    _inherits(rc, _ll6);

    var _super124 = _createSuper(rc);

    function rc(t) {
      var _this98;

      _classCallCheck(this, rc);

      _this98 = _super124.call(this, t), _this98.textures = {};
      return _this98;
    }

    _createClass(rc, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = this,
            s = new hl(r.manager);
        s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, function (n) {
          try {
            e(r.parse(JSON.parse(n)));
          } catch (e) {
            i ? i(e) : console.error(e), r.manager.itemError(t);
          }
        }, n, i);
      }
    }, {
      key: "parse",
      value: function parse(t) {
        var e = this.textures;

        function n(t) {
          return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t];
        }

        var i = new Vo[t.type]();
        if (void 0 !== t.uuid && (i.uuid = t.uuid), void 0 !== t.name && (i.name = t.name), void 0 !== t.color && void 0 !== i.color && i.color.setHex(t.color), void 0 !== t.roughness && (i.roughness = t.roughness), void 0 !== t.metalness && (i.metalness = t.metalness), void 0 !== t.sheen && (i.sheen = new en().setHex(t.sheen)), void 0 !== t.emissive && void 0 !== i.emissive && i.emissive.setHex(t.emissive), void 0 !== t.specular && void 0 !== i.specular && i.specular.setHex(t.specular), void 0 !== t.shininess && (i.shininess = t.shininess), void 0 !== t.clearcoat && (i.clearcoat = t.clearcoat), void 0 !== t.clearcoatRoughness && (i.clearcoatRoughness = t.clearcoatRoughness), void 0 !== t.transmission && (i.transmission = t.transmission), void 0 !== t.thickness && (i.thickness = t.thickness), void 0 !== t.attenuationDistance && (i.attenuationDistance = t.attenuationDistance), void 0 !== t.attenuationColor && void 0 !== i.attenuationColor && i.attenuationColor.setHex(t.attenuationColor), void 0 !== t.fog && (i.fog = t.fog), void 0 !== t.flatShading && (i.flatShading = t.flatShading), void 0 !== t.blending && (i.blending = t.blending), void 0 !== t.combine && (i.combine = t.combine), void 0 !== t.side && (i.side = t.side), void 0 !== t.shadowSide && (i.shadowSide = t.shadowSide), void 0 !== t.opacity && (i.opacity = t.opacity), void 0 !== t.transparent && (i.transparent = t.transparent), void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest), void 0 !== t.depthTest && (i.depthTest = t.depthTest), void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite), void 0 !== t.stencilWrite && (i.stencilWrite = t.stencilWrite), void 0 !== t.stencilWriteMask && (i.stencilWriteMask = t.stencilWriteMask), void 0 !== t.stencilFunc && (i.stencilFunc = t.stencilFunc), void 0 !== t.stencilRef && (i.stencilRef = t.stencilRef), void 0 !== t.stencilFuncMask && (i.stencilFuncMask = t.stencilFuncMask), void 0 !== t.stencilFail && (i.stencilFail = t.stencilFail), void 0 !== t.stencilZFail && (i.stencilZFail = t.stencilZFail), void 0 !== t.stencilZPass && (i.stencilZPass = t.stencilZPass), void 0 !== t.wireframe && (i.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (i.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (i.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (i.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (i.rotation = t.rotation), 1 !== t.linewidth && (i.linewidth = t.linewidth), void 0 !== t.dashSize && (i.dashSize = t.dashSize), void 0 !== t.gapSize && (i.gapSize = t.gapSize), void 0 !== t.scale && (i.scale = t.scale), void 0 !== t.polygonOffset && (i.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (i.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (i.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.morphTargets && (i.morphTargets = t.morphTargets), void 0 !== t.morphNormals && (i.morphNormals = t.morphNormals), void 0 !== t.dithering && (i.dithering = t.dithering), void 0 !== t.alphaToCoverage && (i.alphaToCoverage = t.alphaToCoverage), void 0 !== t.premultipliedAlpha && (i.premultipliedAlpha = t.premultipliedAlpha), void 0 !== t.vertexTangents && (i.vertexTangents = t.vertexTangents), void 0 !== t.visible && (i.visible = t.visible), void 0 !== t.toneMapped && (i.toneMapped = t.toneMapped), void 0 !== t.userData && (i.userData = t.userData), void 0 !== t.vertexColors && ("number" == typeof t.vertexColors ? i.vertexColors = t.vertexColors > 0 : i.vertexColors = t.vertexColors), void 0 !== t.uniforms) for (var _e237 in t.uniforms) {
          var _r126 = t.uniforms[_e237];

          switch (i.uniforms[_e237] = {}, _r126.type) {
            case "t":
              i.uniforms[_e237].value = n(_r126.value);
              break;

            case "c":
              i.uniforms[_e237].value = new en().setHex(_r126.value);
              break;

            case "v2":
              i.uniforms[_e237].value = new vt().fromArray(_r126.value);
              break;

            case "v3":
              i.uniforms[_e237].value = new Rt().fromArray(_r126.value);
              break;

            case "v4":
              i.uniforms[_e237].value = new St().fromArray(_r126.value);
              break;

            case "m3":
              i.uniforms[_e237].value = new yt().fromArray(_r126.value);
              break;

            case "m4":
              i.uniforms[_e237].value = new ae().fromArray(_r126.value);
              break;

            default:
              i.uniforms[_e237].value = _r126.value;
          }
        }
        if (void 0 !== t.defines && (i.defines = t.defines), void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (i.fragmentShader = t.fragmentShader), void 0 !== t.extensions) for (var _e238 in t.extensions) {
          i.extensions[_e238] = t.extensions[_e238];
        }

        if (void 0 !== t.shading && (i.flatShading = 1 === t.shading), void 0 !== t.size && (i.size = t.size), void 0 !== t.sizeAttenuation && (i.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (i.map = n(t.map)), void 0 !== t.matcap && (i.matcap = n(t.matcap)), void 0 !== t.alphaMap && (i.alphaMap = n(t.alphaMap)), void 0 !== t.bumpMap && (i.bumpMap = n(t.bumpMap)), void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale), void 0 !== t.normalMap && (i.normalMap = n(t.normalMap)), void 0 !== t.normalMapType && (i.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
          var _e239 = t.normalScale;
          !1 === Array.isArray(_e239) && (_e239 = [_e239, _e239]), i.normalScale = new vt().fromArray(_e239);
        }

        return void 0 !== t.displacementMap && (i.displacementMap = n(t.displacementMap)), void 0 !== t.displacementScale && (i.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (i.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (i.roughnessMap = n(t.roughnessMap)), void 0 !== t.metalnessMap && (i.metalnessMap = n(t.metalnessMap)), void 0 !== t.emissiveMap && (i.emissiveMap = n(t.emissiveMap)), void 0 !== t.emissiveIntensity && (i.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (i.specularMap = n(t.specularMap)), void 0 !== t.envMap && (i.envMap = n(t.envMap)), void 0 !== t.envMapIntensity && (i.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity), void 0 !== t.refractionRatio && (i.refractionRatio = t.refractionRatio), void 0 !== t.lightMap && (i.lightMap = n(t.lightMap)), void 0 !== t.lightMapIntensity && (i.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (i.aoMap = n(t.aoMap)), void 0 !== t.aoMapIntensity && (i.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (i.gradientMap = n(t.gradientMap)), void 0 !== t.clearcoatMap && (i.clearcoatMap = n(t.clearcoatMap)), void 0 !== t.clearcoatRoughnessMap && (i.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap)), void 0 !== t.clearcoatNormalMap && (i.clearcoatNormalMap = n(t.clearcoatNormalMap)), void 0 !== t.clearcoatNormalScale && (i.clearcoatNormalScale = new vt().fromArray(t.clearcoatNormalScale)), void 0 !== t.transmissionMap && (i.transmissionMap = n(t.transmissionMap)), void 0 !== t.thicknessMap && (i.thicknessMap = n(t.thicknessMap)), i;
      }
    }, {
      key: "setTextures",
      value: function setTextures(t) {
        return this.textures = t, this;
      }
    }]);

    return rc;
  }(ll);

  var sc = /*#__PURE__*/function () {
    function sc() {
      _classCallCheck(this, sc);
    }

    _createClass(sc, null, [{
      key: "decodeText",
      value: function decodeText(t) {
        if ("undefined" != typeof TextDecoder) return new TextDecoder().decode(t);
        var e = "";

        for (var _n221 = 0, _i168 = t.length; _n221 < _i168; _n221++) {
          e += String.fromCharCode(t[_n221]);
        }

        try {
          return decodeURIComponent(escape(e));
        } catch (t) {
          return e;
        }
      }
    }, {
      key: "extractUrlBase",
      value: function extractUrlBase(t) {
        var e = t.lastIndexOf("/");
        return -1 === e ? "./" : t.substr(0, e + 1);
      }
    }]);

    return sc;
  }();

  var ac = /*#__PURE__*/function (_An17) {
    _inherits(ac, _An17);

    var _super125 = _createSuper(ac);

    function ac() {
      var _this99;

      _classCallCheck(this, ac);

      _this99 = _super125.call(this), _this99.type = "InstancedBufferGeometry", _this99.instanceCount = 1 / 0;
      return _this99;
    }

    _createClass(ac, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(ac.prototype), "copy", this).call(this, t), this.instanceCount = t.instanceCount, this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(ac.prototype), "toJSON", this).call(this, this);

        return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t;
      }
    }]);

    return ac;
  }(An);

  ac.prototype.isInstancedBufferGeometry = !0;

  var oc = /*#__PURE__*/function (_an11) {
    _inherits(oc, _an11);

    var _super126 = _createSuper(oc);

    function oc(t, e, n, i) {
      var _this100;

      _classCallCheck(this, oc);

      "number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), _this100 = _super126.call(this, t, e, n), _this100.meshPerAttribute = i || 1;
      return _this100;
    }

    _createClass(oc, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(oc.prototype), "copy", this).call(this, t), this.meshPerAttribute = t.meshPerAttribute, this;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var t = _get(_getPrototypeOf(oc.prototype), "toJSON", this).call(this);

        return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t;
      }
    }]);

    return oc;
  }(an);

  oc.prototype.isInstancedBufferAttribute = !0;

  var lc = /*#__PURE__*/function (_ll7) {
    _inherits(lc, _ll7);

    var _super127 = _createSuper(lc);

    function lc(t) {
      _classCallCheck(this, lc);

      return _super127.call(this, t);
    }

    _createClass(lc, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = this,
            s = new hl(r.manager);
        s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, function (n) {
          try {
            e(r.parse(JSON.parse(n)));
          } catch (e) {
            i ? i(e) : console.error(e), r.manager.itemError(t);
          }
        }, n, i);
      }
    }, {
      key: "parse",
      value: function parse(t) {
        var e = {},
            n = {};

        function i(t, i) {
          if (void 0 !== e[i]) return e[i];

          var r = t.interleavedBuffers[i],
              s = function (t, e) {
            if (void 0 !== n[e]) return n[e];
            var i = t.arrayBuffers[e],
                r = new Uint32Array(i).buffer;
            return n[e] = r, r;
          }(t, r.buffer),
              a = xn(r.type, s),
              o = new Es(a, r.stride);

          return o.uuid = r.uuid, e[i] = o, o;
        }

        var r = t.isInstancedBufferGeometry ? new ac() : new An(),
            s = t.data.index;

        if (void 0 !== s) {
          var _t267 = xn(s.type, s.array);

          r.setIndex(new an(_t267, 1));
        }

        var a = t.data.attributes;

        for (var _e240 in a) {
          var _n222 = a[_e240];

          var _s76 = void 0;

          if (_n222.isInterleavedBufferAttribute) {
            var _e241 = i(t.data, _n222.data);

            _s76 = new Ls(_e241, _n222.itemSize, _n222.offset, _n222.normalized);
          } else {
            var _t268 = xn(_n222.type, _n222.array);

            _s76 = new (_n222.isInstancedBufferAttribute ? oc : an)(_t268, _n222.itemSize, _n222.normalized);
          }

          void 0 !== _n222.name && (_s76.name = _n222.name), void 0 !== _n222.usage && _s76.setUsage(_n222.usage), void 0 !== _n222.updateRange && (_s76.updateRange.offset = _n222.updateRange.offset, _s76.updateRange.count = _n222.updateRange.count), r.setAttribute(_e240, _s76);
        }

        var o = t.data.morphAttributes;
        if (o) for (var _e242 in o) {
          var _n223 = o[_e242],
              _s77 = [];

          for (var _e243 = 0, _r127 = _n223.length; _e243 < _r127; _e243++) {
            var _r128 = _n223[_e243];

            var _a63 = void 0;

            if (_r128.isInterleavedBufferAttribute) {
              var _e244 = i(t.data, _r128.data);

              _a63 = new Ls(_e244, _r128.itemSize, _r128.offset, _r128.normalized);
            } else {
              var _t269 = xn(_r128.type, _r128.array);

              _a63 = new an(_t269, _r128.itemSize, _r128.normalized);
            }

            void 0 !== _r128.name && (_a63.name = _r128.name), _s77.push(_a63);
          }

          r.morphAttributes[_e242] = _s77;
        }
        t.data.morphTargetsRelative && (r.morphTargetsRelative = !0);
        var l = t.data.groups || t.data.drawcalls || t.data.offsets;
        if (void 0 !== l) for (var _t270 = 0, _e245 = l.length; _t270 !== _e245; ++_t270) {
          var _e246 = l[_t270];
          r.addGroup(_e246.start, _e246.count, _e246.materialIndex);
        }
        var c = t.data.boundingSphere;

        if (void 0 !== c) {
          var _t271 = new Rt();

          void 0 !== c.center && _t271.fromArray(c.center), r.boundingSphere = new Qt(_t271, c.radius);
        }

        return t.name && (r.name = t.name), t.userData && (r.userData = t.userData), r;
      }
    }]);

    return lc;
  }(ll);

  var cc = {
    UVMapping: i,
    CubeReflectionMapping: r,
    CubeRefractionMapping: s,
    EquirectangularReflectionMapping: a,
    EquirectangularRefractionMapping: o,
    CubeUVReflectionMapping: l,
    CubeUVRefractionMapping: c
  },
      hc = {
    RepeatWrapping: h,
    ClampToEdgeWrapping: u,
    MirroredRepeatWrapping: d
  },
      uc = {
    NearestFilter: p,
    NearestMipmapNearestFilter: m,
    NearestMipmapLinearFilter: f,
    LinearFilter: g,
    LinearMipmapNearestFilter: v,
    LinearMipmapLinearFilter: y
  };

  var dc = /*#__PURE__*/function (_ll8) {
    _inherits(dc, _ll8);

    var _super128 = _createSuper(dc);

    function dc(t) {
      var _this101;

      _classCallCheck(this, dc);

      _this101 = _super128.call(this, t), "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), _this101.options = {
        premultiplyAlpha: "none"
      };
      return _this101;
    }

    _createClass(dc, [{
      key: "setOptions",
      value: function setOptions(t) {
        return this.options = t, this;
      }
    }, {
      key: "load",
      value: function load(t, e, n, i) {
        void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
        var r = this,
            s = sl.get(t);
        if (void 0 !== s) return r.manager.itemStart(t), setTimeout(function () {
          e && e(s), r.manager.itemEnd(t);
        }, 0), s;
        var a = {};
        a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a.headers = this.requestHeader, fetch(t, a).then(function (t) {
          return t.blob();
        }).then(function (t) {
          return createImageBitmap(t, Object.assign(r.options, {
            colorSpaceConversion: "none"
          }));
        }).then(function (n) {
          sl.add(t, n), e && e(n), r.manager.itemEnd(t);
        }).catch(function (e) {
          i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
        }), r.manager.itemStart(t);
      }
    }]);

    return dc;
  }(ll);

  dc.prototype.isImageBitmapLoader = !0;

  var pc = /*#__PURE__*/function () {
    function pc() {
      _classCallCheck(this, pc);

      this.type = "ShapePath", this.color = new en(), this.subPaths = [], this.currentPath = null;
    }

    _createClass(pc, [{
      key: "moveTo",
      value: function moveTo(t, e) {
        return this.currentPath = new zl(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this;
      }
    }, {
      key: "lineTo",
      value: function lineTo(t, e) {
        return this.currentPath.lineTo(t, e), this;
      }
    }, {
      key: "quadraticCurveTo",
      value: function quadraticCurveTo(t, e, n, i) {
        return this.currentPath.quadraticCurveTo(t, e, n, i), this;
      }
    }, {
      key: "bezierCurveTo",
      value: function bezierCurveTo(t, e, n, i, r, s) {
        return this.currentPath.bezierCurveTo(t, e, n, i, r, s), this;
      }
    }, {
      key: "splineThru",
      value: function splineThru(t) {
        return this.currentPath.splineThru(t), this;
      }
    }, {
      key: "toShapes",
      value: function toShapes(t, e) {
        function n(t) {
          var e = [];

          for (var _n224 = 0, _i169 = t.length; _n224 < _i169; _n224++) {
            var _i170 = t[_n224],
                _r129 = new Fl();

            _r129.curves = _i170.curves, e.push(_r129);
          }

          return e;
        }

        function i(t, e) {
          var n = e.length;
          var i = !1;

          for (var _r130 = n - 1, _s78 = 0; _s78 < n; _r130 = _s78++) {
            var _n225 = e[_r130],
                _a64 = e[_s78],
                _o36 = _a64.x - _n225.x,
                _l28 = _a64.y - _n225.y;

            if (Math.abs(_l28) > Number.EPSILON) {
              if (_l28 < 0 && (_n225 = e[_s78], _o36 = -_o36, _a64 = e[_r130], _l28 = -_l28), t.y < _n225.y || t.y > _a64.y) continue;

              if (t.y === _n225.y) {
                if (t.x === _n225.x) return !0;
              } else {
                var _e247 = _l28 * (t.x - _n225.x) - _o36 * (t.y - _n225.y);

                if (0 === _e247) return !0;
                if (_e247 < 0) continue;
                i = !i;
              }
            } else {
              if (t.y !== _n225.y) continue;
              if (_a64.x <= t.x && t.x <= _n225.x || _n225.x <= t.x && t.x <= _a64.x) return !0;
            }
          }

          return i;
        }

        var r = mo.isClockWise,
            s = this.subPaths;
        if (0 === s.length) return [];
        if (!0 === e) return n(s);
        var a, o, l;
        var c = [];
        if (1 === s.length) return o = s[0], l = new Fl(), l.curves = o.curves, c.push(l), c;
        var h = !r(s[0].getPoints());
        h = t ? !h : h;
        var u = [],
            d = [];
        var p,
            m,
            f = [],
            g = 0;
        d[g] = void 0, f[g] = [];

        for (var _e248 = 0, _n226 = s.length; _e248 < _n226; _e248++) {
          o = s[_e248], p = o.getPoints(), a = r(p), a = t ? !a : a, a ? (!h && d[g] && g++, d[g] = {
            s: new Fl(),
            p: p
          }, d[g].s.curves = o.curves, h && g++, f[g] = []) : f[g].push({
            h: o,
            p: p[0]
          });
        }

        if (!d[0]) return n(s);

        if (d.length > 1) {
          var _t272 = !1;

          var _e249 = [];

          for (var _t273 = 0, _e250 = d.length; _t273 < _e250; _t273++) {
            u[_t273] = [];
          }

          for (var _n227 = 0, _r131 = d.length; _n227 < _r131; _n227++) {
            var _r132 = f[_n227];

            for (var _s79 = 0; _s79 < _r132.length; _s79++) {
              var _a65 = _r132[_s79];

              var _o37 = !0;

              for (var _r133 = 0; _r133 < d.length; _r133++) {
                i(_a65.p, d[_r133].p) && (_n227 !== _r133 && _e249.push({
                  froms: _n227,
                  tos: _r133,
                  hole: _s79
                }), _o37 ? (_o37 = !1, u[_r133].push(_a65)) : _t272 = !0);
              }

              _o37 && u[_n227].push(_a65);
            }
          }

          _e249.length > 0 && (_t272 || (f = u));
        }

        for (var _t274 = 0, _e251 = d.length; _t274 < _e251; _t274++) {
          l = d[_t274].s, c.push(l), m = f[_t274];

          for (var _t275 = 0, _e252 = m.length; _t275 < _e252; _t275++) {
            l.holes.push(m[_t275].h);
          }
        }

        return c;
      }
    }]);

    return pc;
  }();

  var mc = /*#__PURE__*/function () {
    function mc(t) {
      _classCallCheck(this, mc);

      this.type = "Font", this.data = t;
    }

    _createClass(mc, [{
      key: "generateShapes",
      value: function generateShapes(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

        var n = [],
            i = function (t, e, n) {
          var i = Array.from(t),
              r = e / n.resolution,
              s = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r,
              a = [];
          var o = 0,
              l = 0;

          for (var _t276 = 0; _t276 < i.length; _t276++) {
            var _e253 = i[_t276];
            if ("\n" === _e253) o = 0, l -= s;else {
              var _t277 = fc(_e253, r, o, l, n);

              o += _t277.offsetX, a.push(_t277.path);
            }
          }

          return a;
        }(t, e, this.data);

        for (var _t278 = 0, _e254 = i.length; _t278 < _e254; _t278++) {
          Array.prototype.push.apply(n, i[_t278].toShapes());
        }

        return n;
      }
    }]);

    return mc;
  }();

  function fc(t, e, n, i, r) {
    var s = r.glyphs[t] || r.glyphs["?"];
    if (!s) return void console.error('THREE.Font: character "' + t + '" does not exists in font family ' + r.familyName + ".");
    var a = new pc();
    var o, l, c, h, u, d, p, m;

    if (s.o) {
      var _t279 = s._cachedOutline || (s._cachedOutline = s.o.split(" "));

      for (var _r134 = 0, _s80 = _t279.length; _r134 < _s80;) {
        switch (_t279[_r134++]) {
          case "m":
            o = _t279[_r134++] * e + n, l = _t279[_r134++] * e + i, a.moveTo(o, l);
            break;

          case "l":
            o = _t279[_r134++] * e + n, l = _t279[_r134++] * e + i, a.lineTo(o, l);
            break;

          case "q":
            c = _t279[_r134++] * e + n, h = _t279[_r134++] * e + i, u = _t279[_r134++] * e + n, d = _t279[_r134++] * e + i, a.quadraticCurveTo(u, d, c, h);
            break;

          case "b":
            c = _t279[_r134++] * e + n, h = _t279[_r134++] * e + i, u = _t279[_r134++] * e + n, d = _t279[_r134++] * e + i, p = _t279[_r134++] * e + n, m = _t279[_r134++] * e + i, a.bezierCurveTo(u, d, p, m, c, h);
        }
      }
    }

    return {
      offsetX: s.ha * e,
      path: a
    };
  }

  mc.prototype.isFont = !0;
  var gc;
  var vc = {
    getContext: function getContext() {
      return void 0 === gc && (gc = new (window.AudioContext || window.webkitAudioContext)()), gc;
    },
    setContext: function setContext(t) {
      gc = t;
    }
  };

  var yc = /*#__PURE__*/function (_ll9) {
    _inherits(yc, _ll9);

    var _super129 = _createSuper(yc);

    function yc(t) {
      _classCallCheck(this, yc);

      return _super129.call(this, t);
    }

    _createClass(yc, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = this,
            s = new hl(this.manager);
        s.setResponseType("arraybuffer"), s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, function (n) {
          try {
            var _t280 = n.slice(0);

            vc.getContext().decodeAudioData(_t280, function (t) {
              e(t);
            });
          } catch (e) {
            i ? i(e) : console.error(e), r.manager.itemError(t);
          }
        }, n, i);
      }
    }]);

    return yc;
  }(ll);

  var xc = /*#__PURE__*/function (_ic) {
    _inherits(xc, _ic);

    var _super130 = _createSuper(xc);

    function xc(t, e) {
      var _this102;

      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      _classCallCheck(this, xc);

      _this102 = _super130.call(this, void 0, n);
      var i = new en().set(t),
          r = new en().set(e),
          s = new Rt(i.r, i.g, i.b),
          a = new Rt(r.r, r.g, r.b),
          o = Math.sqrt(Math.PI),
          l = o * Math.sqrt(.75);
      _this102.sh.coefficients[0].copy(s).add(a).multiplyScalar(o), _this102.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l);
      return _this102;
    }

    return xc;
  }(ic);

  xc.prototype.isHemisphereLightProbe = !0;

  var _c = /*#__PURE__*/function (_ic2) {
    _inherits(_c, _ic2);

    var _super131 = _createSuper(_c);

    function _c(t) {
      var _this103;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      _classCallCheck(this, _c);

      _this103 = _super131.call(this, void 0, e);
      var n = new en().set(t);

      _this103.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));

      return _this103;
    }

    return _c;
  }(ic);

  _c.prototype.isAmbientLightProbe = !0;
  var wc = new ae(),
      bc = new ae();

  var Mc = /*#__PURE__*/function () {
    function Mc() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;

      _classCallCheck(this, Mc);

      this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
    }

    _createClass(Mc, [{
      key: "start",
      value: function start() {
        this.startTime = Sc(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.getElapsedTime(), this.running = !1, this.autoStart = !1;
      }
    }, {
      key: "getElapsedTime",
      value: function getElapsedTime() {
        return this.getDelta(), this.elapsedTime;
      }
    }, {
      key: "getDelta",
      value: function getDelta() {
        var t = 0;
        if (this.autoStart && !this.running) return this.start(), 0;

        if (this.running) {
          var _e255 = Sc();

          t = (_e255 - this.oldTime) / 1e3, this.oldTime = _e255, this.elapsedTime += t;
        }

        return t;
      }
    }]);

    return Mc;
  }();

  function Sc() {
    return ("undefined" == typeof performance ? Date : performance).now();
  }

  var Tc = new Rt(),
      Ec = new Lt(),
      Ac = new Rt(),
      Lc = new Rt();

  var Rc = /*#__PURE__*/function (_Pe12) {
    _inherits(Rc, _Pe12);

    var _super132 = _createSuper(Rc);

    function Rc(t) {
      var _this104;

      _classCallCheck(this, Rc);

      _this104 = _super132.call(this), _this104.type = "Audio", _this104.listener = t, _this104.context = t.context, _this104.gain = _this104.context.createGain(), _this104.gain.connect(t.getInput()), _this104.autoplay = !1, _this104.buffer = null, _this104.detune = 0, _this104.loop = !1, _this104.loopStart = 0, _this104.loopEnd = 0, _this104.offset = 0, _this104.duration = void 0, _this104.playbackRate = 1, _this104.isPlaying = !1, _this104.hasPlaybackControl = !0, _this104.source = null, _this104.sourceType = "empty", _this104._startedAt = 0, _this104._progress = 0, _this104._connected = !1, _this104.filters = [];
      return _this104;
    }

    _createClass(Rc, [{
      key: "getOutput",
      value: function getOutput() {
        return this.gain;
      }
    }, {
      key: "setNodeSource",
      value: function setNodeSource(t) {
        return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this;
      }
    }, {
      key: "setMediaElementSource",
      value: function setMediaElementSource(t) {
        return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this;
      }
    }, {
      key: "setMediaStreamSource",
      value: function setMediaStreamSource(t) {
        return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this;
      }
    }, {
      key: "setBuffer",
      value: function setBuffer(t) {
        return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this;
      }
    }, {
      key: "play",
      value: function play() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
        if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
        this._startedAt = this.context.currentTime + t;
        var e = this.context.createBufferSource();
        return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
      }
    }, {
      key: "pause",
      value: function pause() {
        if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
        console.warn("THREE.Audio: this Audio has no playback control.");
      }
    }, {
      key: "stop",
      value: function stop() {
        if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
        console.warn("THREE.Audio: this Audio has no playback control.");
      }
    }, {
      key: "connect",
      value: function connect() {
        if (this.filters.length > 0) {
          this.source.connect(this.filters[0]);

          for (var _t281 = 1, _e256 = this.filters.length; _t281 < _e256; _t281++) {
            this.filters[_t281 - 1].connect(this.filters[_t281]);
          }

          this.filters[this.filters.length - 1].connect(this.getOutput());
        } else this.source.connect(this.getOutput());

        return this._connected = !0, this;
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        if (this.filters.length > 0) {
          this.source.disconnect(this.filters[0]);

          for (var _t282 = 1, _e257 = this.filters.length; _t282 < _e257; _t282++) {
            this.filters[_t282 - 1].disconnect(this.filters[_t282]);
          }

          this.filters[this.filters.length - 1].disconnect(this.getOutput());
        } else this.source.disconnect(this.getOutput());

        return this._connected = !1, this;
      }
    }, {
      key: "getFilters",
      value: function getFilters() {
        return this.filters;
      }
    }, {
      key: "setFilters",
      value: function setFilters(t) {
        return t || (t = []), !0 === this._connected ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this;
      }
    }, {
      key: "setDetune",
      value: function setDetune(t) {
        if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this;
      }
    }, {
      key: "getDetune",
      value: function getDetune() {
        return this.detune;
      }
    }, {
      key: "getFilter",
      value: function getFilter() {
        return this.getFilters()[0];
      }
    }, {
      key: "setFilter",
      value: function setFilter(t) {
        return this.setFilters(t ? [t] : []);
      }
    }, {
      key: "setPlaybackRate",
      value: function setPlaybackRate(t) {
        if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
        console.warn("THREE.Audio: this Audio has no playback control.");
      }
    }, {
      key: "getPlaybackRate",
      value: function getPlaybackRate() {
        return this.playbackRate;
      }
    }, {
      key: "onEnded",
      value: function onEnded() {
        this.isPlaying = !1;
      }
    }, {
      key: "getLoop",
      value: function getLoop() {
        return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
      }
    }, {
      key: "setLoop",
      value: function setLoop(t) {
        if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
        console.warn("THREE.Audio: this Audio has no playback control.");
      }
    }, {
      key: "setLoopStart",
      value: function setLoopStart(t) {
        return this.loopStart = t, this;
      }
    }, {
      key: "setLoopEnd",
      value: function setLoopEnd(t) {
        return this.loopEnd = t, this;
      }
    }, {
      key: "getVolume",
      value: function getVolume() {
        return this.gain.gain.value;
      }
    }, {
      key: "setVolume",
      value: function setVolume(t) {
        return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this;
      }
    }]);

    return Rc;
  }(Pe);

  var Cc = new Rt(),
      Pc = new Lt(),
      Dc = new Rt(),
      Ic = new Rt();

  var Nc = /*#__PURE__*/function () {
    function Nc(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2048;

      _classCallCheck(this, Nc);

      this.analyser = t.context.createAnalyser(), this.analyser.fftSize = e, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser);
    }

    _createClass(Nc, [{
      key: "getFrequencyData",
      value: function getFrequencyData() {
        return this.analyser.getByteFrequencyData(this.data), this.data;
      }
    }, {
      key: "getAverageFrequency",
      value: function getAverageFrequency() {
        var t = 0;
        var e = this.getFrequencyData();

        for (var _n228 = 0; _n228 < e.length; _n228++) {
          t += e[_n228];
        }

        return t / e.length;
      }
    }]);

    return Nc;
  }();

  var Bc = /*#__PURE__*/function () {
    function Bc(t, e, n) {
      _classCallCheck(this, Bc);

      var i, r, s;

      switch (this.binding = t, this.valueSize = n, e) {
        case "quaternion":
          i = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * n), this._workIndex = 5;
          break;

        case "string":
        case "bool":
          i = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * n);
          break;

        default:
          i = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * n);
      }

      this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
    }

    _createClass(Bc, [{
      key: "accumulate",
      value: function accumulate(t, e) {
        var n = this.buffer,
            i = this.valueSize,
            r = t * i + i;
        var s = this.cumulativeWeight;

        if (0 === s) {
          for (var _t283 = 0; _t283 !== i; ++_t283) {
            n[r + _t283] = n[_t283];
          }

          s = e;
        } else {
          s += e;

          var _t284 = e / s;

          this._mixBufferRegion(n, r, 0, _t284, i);
        }

        this.cumulativeWeight = s;
      }
    }, {
      key: "accumulateAdditive",
      value: function accumulateAdditive(t) {
        var e = this.buffer,
            n = this.valueSize,
            i = n * this._addIndex;
        0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t, n), this.cumulativeWeightAdditive += t;
      }
    }, {
      key: "apply",
      value: function apply(t) {
        var e = this.valueSize,
            n = this.buffer,
            i = t * e + e,
            r = this.cumulativeWeight,
            s = this.cumulativeWeightAdditive,
            a = this.binding;

        if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
          var _t285 = e * this._origIndex;

          this._mixBufferRegion(n, i, _t285, 1 - r, e);
        }

        s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);

        for (var _t286 = e, _r135 = e + e; _t286 !== _r135; ++_t286) {
          if (n[_t286] !== n[_t286 + e]) {
            a.setValue(n, i);
            break;
          }
        }
      }
    }, {
      key: "saveOriginalState",
      value: function saveOriginalState() {
        var t = this.binding,
            e = this.buffer,
            n = this.valueSize,
            i = n * this._origIndex;
        t.getValue(e, i);

        for (var _t287 = n, _r136 = i; _t287 !== _r136; ++_t287) {
          e[_t287] = e[i + _t287 % n];
        }

        this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
      }
    }, {
      key: "restoreOriginalState",
      value: function restoreOriginalState() {
        var t = 3 * this.valueSize;
        this.binding.setValue(this.buffer, t);
      }
    }, {
      key: "_setAdditiveIdentityNumeric",
      value: function _setAdditiveIdentityNumeric() {
        var t = this._addIndex * this.valueSize,
            e = t + this.valueSize;

        for (var _n229 = t; _n229 < e; _n229++) {
          this.buffer[_n229] = 0;
        }
      }
    }, {
      key: "_setAdditiveIdentityQuaternion",
      value: function _setAdditiveIdentityQuaternion() {
        this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
      }
    }, {
      key: "_setAdditiveIdentityOther",
      value: function _setAdditiveIdentityOther() {
        var t = this._origIndex * this.valueSize,
            e = this._addIndex * this.valueSize;

        for (var _n230 = 0; _n230 < this.valueSize; _n230++) {
          this.buffer[e + _n230] = this.buffer[t + _n230];
        }
      }
    }, {
      key: "_select",
      value: function _select(t, e, n, i, r) {
        if (i >= .5) for (var _i171 = 0; _i171 !== r; ++_i171) {
          t[e + _i171] = t[n + _i171];
        }
      }
    }, {
      key: "_slerp",
      value: function _slerp(t, e, n, i) {
        Lt.slerpFlat(t, e, t, e, t, n, i);
      }
    }, {
      key: "_slerpAdditive",
      value: function _slerpAdditive(t, e, n, i, r) {
        var s = this._workIndex * r;
        Lt.multiplyQuaternionsFlat(t, s, t, e, t, n), Lt.slerpFlat(t, e, t, e, t, s, i);
      }
    }, {
      key: "_lerp",
      value: function _lerp(t, e, n, i, r) {
        var s = 1 - i;

        for (var _a66 = 0; _a66 !== r; ++_a66) {
          var _r137 = e + _a66;

          t[_r137] = t[_r137] * s + t[n + _a66] * i;
        }
      }
    }, {
      key: "_lerpAdditive",
      value: function _lerpAdditive(t, e, n, i, r) {
        for (var _s81 = 0; _s81 !== r; ++_s81) {
          var _r138 = e + _s81;

          t[_r138] = t[_r138] + t[n + _s81] * i;
        }
      }
    }]);

    return Bc;
  }();

  var zc = "\\[\\]\\.:\\/",
      Fc = new RegExp("[\\[\\]\\.:\\/]", "g"),
      Oc = "[^\\[\\]\\.:\\/]",
      Hc = "[^" + zc.replace("\\.", "") + "]",
      Gc = /((?:WC+[\/:])*)/.source.replace("WC", Oc),
      Uc = /(WCOD+)?/.source.replace("WCOD", Hc),
      kc = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Oc),
      Vc = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Oc),
      Wc = new RegExp("^" + Gc + Uc + kc + Vc + "$"),
      jc = ["material", "materials", "bones"];

  var qc = /*#__PURE__*/function () {
    function qc(t, e, n) {
      _classCallCheck(this, qc);

      this.path = e, this.parsedPath = n || qc.parseTrackName(e), this.node = qc.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }

    _createClass(qc, [{
      key: "_getValue_unavailable",
      value: function _getValue_unavailable() {}
    }, {
      key: "_setValue_unavailable",
      value: function _setValue_unavailable() {}
    }, {
      key: "_getValue_direct",
      value: function _getValue_direct(t, e) {
        t[e] = this.node[this.propertyName];
      }
    }, {
      key: "_getValue_array",
      value: function _getValue_array(t, e) {
        var n = this.resolvedProperty;

        for (var _i172 = 0, _r139 = n.length; _i172 !== _r139; ++_i172) {
          t[e++] = n[_i172];
        }
      }
    }, {
      key: "_getValue_arrayElement",
      value: function _getValue_arrayElement(t, e) {
        t[e] = this.resolvedProperty[this.propertyIndex];
      }
    }, {
      key: "_getValue_toArray",
      value: function _getValue_toArray(t, e) {
        this.resolvedProperty.toArray(t, e);
      }
    }, {
      key: "_setValue_direct",
      value: function _setValue_direct(t, e) {
        this.targetObject[this.propertyName] = t[e];
      }
    }, {
      key: "_setValue_direct_setNeedsUpdate",
      value: function _setValue_direct_setNeedsUpdate(t, e) {
        this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0;
      }
    }, {
      key: "_setValue_direct_setMatrixWorldNeedsUpdate",
      value: function _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
        this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
      }
    }, {
      key: "_setValue_array",
      value: function _setValue_array(t, e) {
        var n = this.resolvedProperty;

        for (var _i173 = 0, _r140 = n.length; _i173 !== _r140; ++_i173) {
          n[_i173] = t[e++];
        }
      }
    }, {
      key: "_setValue_array_setNeedsUpdate",
      value: function _setValue_array_setNeedsUpdate(t, e) {
        var n = this.resolvedProperty;

        for (var _i174 = 0, _r141 = n.length; _i174 !== _r141; ++_i174) {
          n[_i174] = t[e++];
        }

        this.targetObject.needsUpdate = !0;
      }
    }, {
      key: "_setValue_array_setMatrixWorldNeedsUpdate",
      value: function _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
        var n = this.resolvedProperty;

        for (var _i175 = 0, _r142 = n.length; _i175 !== _r142; ++_i175) {
          n[_i175] = t[e++];
        }

        this.targetObject.matrixWorldNeedsUpdate = !0;
      }
    }, {
      key: "_setValue_arrayElement",
      value: function _setValue_arrayElement(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e];
      }
    }, {
      key: "_setValue_arrayElement_setNeedsUpdate",
      value: function _setValue_arrayElement_setNeedsUpdate(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0;
      }
    }, {
      key: "_setValue_arrayElement_setMatrixWorldNeedsUpdate",
      value: function _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
      }
    }, {
      key: "_setValue_fromArray",
      value: function _setValue_fromArray(t, e) {
        this.resolvedProperty.fromArray(t, e);
      }
    }, {
      key: "_setValue_fromArray_setNeedsUpdate",
      value: function _setValue_fromArray_setNeedsUpdate(t, e) {
        this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0;
      }
    }, {
      key: "_setValue_fromArray_setMatrixWorldNeedsUpdate",
      value: function _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
        this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0;
      }
    }, {
      key: "_getValue_unbound",
      value: function _getValue_unbound(t, e) {
        this.bind(), this.getValue(t, e);
      }
    }, {
      key: "_setValue_unbound",
      value: function _setValue_unbound(t, e) {
        this.bind(), this.setValue(t, e);
      }
    }, {
      key: "bind",
      value: function bind() {
        var t = this.node;
        var e = this.parsedPath,
            n = e.objectName,
            i = e.propertyName;
        var r = e.propertyIndex;
        if (t || (t = qc.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");

        if (n) {
          var _i176 = e.objectIndex;

          switch (n) {
            case "materials":
              if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
              if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
              t = t.material.materials;
              break;

            case "bones":
              if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
              t = t.skeleton.bones;

              for (var _e258 = 0; _e258 < t.length; _e258++) {
                if (t[_e258].name === _i176) {
                  _i176 = _e258;
                  break;
                }
              }

              break;

            default:
              if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
              t = t[n];
          }

          if (void 0 !== _i176) {
            if (void 0 === t[_i176]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
            t = t[_i176];
          }
        }

        var s = t[i];

        if (void 0 === s) {
          var _n231 = e.nodeName;
          return void console.error("THREE.PropertyBinding: Trying to update property for track: " + _n231 + "." + i + " but it wasn't found.", t);
        }

        var a = this.Versioning.None;
        this.targetObject = t, void 0 !== t.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
        var o = this.BindingType.Direct;

        if (void 0 !== r) {
          if ("morphTargetInfluences" === i) {
            if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
            if (!t.geometry.isBufferGeometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
            if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
            void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r]);
          }

          o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r;
        } else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;

        this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a];
      }
    }, {
      key: "unbind",
      value: function unbind() {
        this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
      }
    }], [{
      key: "create",
      value: function create(t, e, n) {
        return t && t.isAnimationObjectGroup ? new qc.Composite(t, e, n) : new qc(t, e, n);
      }
    }, {
      key: "sanitizeNodeName",
      value: function sanitizeNodeName(t) {
        return t.replace(/\s/g, "_").replace(Fc, "");
      }
    }, {
      key: "parseTrackName",
      value: function parseTrackName(t) {
        var e = Wc.exec(t);
        if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
        var n = {
          nodeName: e[2],
          objectName: e[3],
          objectIndex: e[4],
          propertyName: e[5],
          propertyIndex: e[6]
        },
            i = n.nodeName && n.nodeName.lastIndexOf(".");

        if (void 0 !== i && -1 !== i) {
          var _t288 = n.nodeName.substring(i + 1);

          -1 !== jc.indexOf(_t288) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = _t288);
        }

        if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
        return n;
      }
    }, {
      key: "findNode",
      value: function findNode(t, e) {
        if (!e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;

        if (t.skeleton) {
          var _n232 = t.skeleton.getBoneByName(e);

          if (void 0 !== _n232) return _n232;
        }

        if (t.children) {
          var _n233 = function _n233(t) {
            for (var _i178 = 0; _i178 < t.length; _i178++) {
              var _r143 = t[_i178];
              if (_r143.name === e || _r143.uuid === e) return _r143;

              var _s82 = _n233(_r143.children);

              if (_s82) return _s82;
            }

            return null;
          },
              _i177 = _n233(t.children);

          if (_i177) return _i177;
        }

        return null;
      }
    }]);

    return qc;
  }();

  qc.Composite = /*#__PURE__*/function () {
    function _class(t, e, n) {
      _classCallCheck(this, _class);

      var i = n || qc.parseTrackName(e);
      this._targetGroup = t, this._bindings = t.subscribe_(e, i);
    }

    _createClass(_class, [{
      key: "getValue",
      value: function getValue(t, e) {
        this.bind();
        var n = this._targetGroup.nCachedObjects_,
            i = this._bindings[n];
        void 0 !== i && i.getValue(t, e);
      }
    }, {
      key: "setValue",
      value: function setValue(t, e) {
        var n = this._bindings;

        for (var _i179 = this._targetGroup.nCachedObjects_, _r144 = n.length; _i179 !== _r144; ++_i179) {
          n[_i179].setValue(t, e);
        }
      }
    }, {
      key: "bind",
      value: function bind() {
        var t = this._bindings;

        for (var _e259 = this._targetGroup.nCachedObjects_, _n234 = t.length; _e259 !== _n234; ++_e259) {
          t[_e259].bind();
        }
      }
    }, {
      key: "unbind",
      value: function unbind() {
        var t = this._bindings;

        for (var _e260 = this._targetGroup.nCachedObjects_, _n235 = t.length; _e260 !== _n235; ++_e260) {
          t[_e260].unbind();
        }
      }
    }]);

    return _class;
  }(), qc.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
  }, qc.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
  }, qc.prototype.GetterByBindingType = [qc.prototype._getValue_direct, qc.prototype._getValue_array, qc.prototype._getValue_arrayElement, qc.prototype._getValue_toArray], qc.prototype.SetterByBindingTypeAndVersioning = [[qc.prototype._setValue_direct, qc.prototype._setValue_direct_setNeedsUpdate, qc.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [qc.prototype._setValue_array, qc.prototype._setValue_array_setNeedsUpdate, qc.prototype._setValue_array_setMatrixWorldNeedsUpdate], [qc.prototype._setValue_arrayElement, qc.prototype._setValue_arrayElement_setNeedsUpdate, qc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [qc.prototype._setValue_fromArray, qc.prototype._setValue_fromArray_setNeedsUpdate, qc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];

  var Xc = /*#__PURE__*/function () {
    function Xc() {
      _classCallCheck(this, Xc);

      this.uuid = ct(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
      var t = {};
      this._indicesByUUID = t;

      for (var _e261 = 0, _n236 = arguments.length; _e261 !== _n236; ++_e261) {
        t[arguments[_e261].uuid] = _e261;
      }

      this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
      var e = this;
      this.stats = {
        objects: {
          get total() {
            return e._objects.length;
          },

          get inUse() {
            return this.total - e.nCachedObjects_;
          }

        },

        get bindingsPerObject() {
          return e._bindings.length;
        }

      };
    }

    _createClass(Xc, [{
      key: "add",
      value: function add() {
        var t = this._objects,
            e = this._indicesByUUID,
            n = this._paths,
            i = this._parsedPaths,
            r = this._bindings,
            s = r.length;
        var a,
            o = t.length,
            l = this.nCachedObjects_;

        for (var _c19 = 0, _h10 = arguments.length; _c19 !== _h10; ++_c19) {
          var _h11 = arguments[_c19],
              _u13 = _h11.uuid;
          var _d16 = e[_u13];

          if (void 0 === _d16) {
            _d16 = o++, e[_u13] = _d16, t.push(_h11);

            for (var _t289 = 0, _e262 = s; _t289 !== _e262; ++_t289) {
              r[_t289].push(new qc(_h11, n[_t289], i[_t289]));
            }
          } else if (_d16 < l) {
            a = t[_d16];

            var _o38 = --l,
                _c20 = t[_o38];

            e[_c20.uuid] = _d16, t[_d16] = _c20, e[_u13] = _o38, t[_o38] = _h11;

            for (var _t290 = 0, _e263 = s; _t290 !== _e263; ++_t290) {
              var _e264 = r[_t290],
                  _s83 = _e264[_o38];
              var _a67 = _e264[_d16];
              _e264[_d16] = _s83, void 0 === _a67 && (_a67 = new qc(_h11, n[_t290], i[_t290])), _e264[_o38] = _a67;
            }
          } else t[_d16] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
        }

        this.nCachedObjects_ = l;
      }
    }, {
      key: "remove",
      value: function remove() {
        var t = this._objects,
            e = this._indicesByUUID,
            n = this._bindings,
            i = n.length;
        var r = this.nCachedObjects_;

        for (var _s84 = 0, _a68 = arguments.length; _s84 !== _a68; ++_s84) {
          var _a69 = arguments[_s84],
              _o39 = _a69.uuid,
              _l29 = e[_o39];

          if (void 0 !== _l29 && _l29 >= r) {
            var _s85 = r++,
                _c21 = t[_s85];

            e[_c21.uuid] = _l29, t[_l29] = _c21, e[_o39] = _s85, t[_s85] = _a69;

            for (var _t291 = 0, _e265 = i; _t291 !== _e265; ++_t291) {
              var _e266 = n[_t291],
                  _i180 = _e266[_s85],
                  _r145 = _e266[_l29];
              _e266[_l29] = _i180, _e266[_s85] = _r145;
            }
          }
        }

        this.nCachedObjects_ = r;
      }
    }, {
      key: "uncache",
      value: function uncache() {
        var t = this._objects,
            e = this._indicesByUUID,
            n = this._bindings,
            i = n.length;
        var r = this.nCachedObjects_,
            s = t.length;

        for (var _a70 = 0, _o40 = arguments.length; _a70 !== _o40; ++_a70) {
          var _o41 = arguments[_a70].uuid,
              _l30 = e[_o41];
          if (void 0 !== _l30) if (delete e[_o41], _l30 < r) {
            var _a71 = --r,
                _o42 = t[_a71],
                _c22 = --s,
                _h12 = t[_c22];

            e[_o42.uuid] = _l30, t[_l30] = _o42, e[_h12.uuid] = _a71, t[_a71] = _h12, t.pop();

            for (var _t292 = 0, _e267 = i; _t292 !== _e267; ++_t292) {
              var _e268 = n[_t292],
                  _i181 = _e268[_a71],
                  _r146 = _e268[_c22];
              _e268[_l30] = _i181, _e268[_a71] = _r146, _e268.pop();
            }
          } else {
            var _r147 = --s,
                _a72 = t[_r147];

            _r147 > 0 && (e[_a72.uuid] = _l30), t[_l30] = _a72, t.pop();

            for (var _t293 = 0, _e269 = i; _t293 !== _e269; ++_t293) {
              var _e270 = n[_t293];
              _e270[_l30] = _e270[_r147], _e270.pop();
            }
          }
        }

        this.nCachedObjects_ = r;
      }
    }, {
      key: "subscribe_",
      value: function subscribe_(t, e) {
        var n = this._bindingsIndicesByPath;
        var i = n[t];
        var r = this._bindings;
        if (void 0 !== i) return r[i];
        var s = this._paths,
            a = this._parsedPaths,
            o = this._objects,
            l = o.length,
            c = this.nCachedObjects_,
            h = new Array(l);
        i = r.length, n[t] = i, s.push(t), a.push(e), r.push(h);

        for (var _n237 = c, _i182 = o.length; _n237 !== _i182; ++_n237) {
          var _i183 = o[_n237];
          h[_n237] = new qc(_i183, t, e);
        }

        return h;
      }
    }, {
      key: "unsubscribe_",
      value: function unsubscribe_(t) {
        var e = this._bindingsIndicesByPath,
            n = e[t];

        if (void 0 !== n) {
          var _i184 = this._paths,
              _r148 = this._parsedPaths,
              _s86 = this._bindings,
              _a73 = _s86.length - 1,
              _o43 = _s86[_a73];

          e[t[_a73]] = n, _s86[n] = _o43, _s86.pop(), _r148[n] = _r148[_a73], _r148.pop(), _i184[n] = _i184[_a73], _i184.pop();
        }
      }
    }]);

    return Xc;
  }();

  Xc.prototype.isAnimationObjectGroup = !0;

  var Yc = /*#__PURE__*/function () {
    function Yc(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.blendMode;

      _classCallCheck(this, Yc);

      this._mixer = t, this._clip = e, this._localRoot = n, this.blendMode = i;
      var r = e.tracks,
          s = r.length,
          a = new Array(s),
          o = {
        endingStart: k,
        endingEnd: k
      };

      for (var _t294 = 0; _t294 !== s; ++_t294) {
        var _e271 = r[_t294].createInterpolant(null);

        a[_t294] = _e271, _e271.settings = o;
      }

      this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
    }

    _createClass(Yc, [{
      key: "play",
      value: function play() {
        return this._mixer._activateAction(this), this;
      }
    }, {
      key: "stop",
      value: function stop() {
        return this._mixer._deactivateAction(this), this.reset();
      }
    }, {
      key: "reset",
      value: function reset() {
        return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
      }
    }, {
      key: "isScheduled",
      value: function isScheduled() {
        return this._mixer._isActiveAction(this);
      }
    }, {
      key: "startAt",
      value: function startAt(t) {
        return this._startTime = t, this;
      }
    }, {
      key: "setLoop",
      value: function setLoop(t, e) {
        return this.loop = t, this.repetitions = e, this;
      }
    }, {
      key: "setEffectiveWeight",
      value: function setEffectiveWeight(t) {
        return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading();
      }
    }, {
      key: "getEffectiveWeight",
      value: function getEffectiveWeight() {
        return this._effectiveWeight;
      }
    }, {
      key: "fadeIn",
      value: function fadeIn(t) {
        return this._scheduleFading(t, 0, 1);
      }
    }, {
      key: "fadeOut",
      value: function fadeOut(t) {
        return this._scheduleFading(t, 1, 0);
      }
    }, {
      key: "crossFadeFrom",
      value: function crossFadeFrom(t, e, n) {
        if (t.fadeOut(e), this.fadeIn(e), n) {
          var _n238 = this._clip.duration,
              _i185 = t._clip.duration,
              _r149 = _i185 / _n238,
              _s87 = _n238 / _i185;

          t.warp(1, _r149, e), this.warp(_s87, 1, e);
        }

        return this;
      }
    }, {
      key: "crossFadeTo",
      value: function crossFadeTo(t, e, n) {
        return t.crossFadeFrom(this, e, n);
      }
    }, {
      key: "stopFading",
      value: function stopFading() {
        var t = this._weightInterpolant;
        return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
      }
    }, {
      key: "setEffectiveTimeScale",
      value: function setEffectiveTimeScale(t) {
        return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping();
      }
    }, {
      key: "getEffectiveTimeScale",
      value: function getEffectiveTimeScale() {
        return this._effectiveTimeScale;
      }
    }, {
      key: "setDuration",
      value: function setDuration(t) {
        return this.timeScale = this._clip.duration / t, this.stopWarping();
      }
    }, {
      key: "syncWith",
      value: function syncWith(t) {
        return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping();
      }
    }, {
      key: "halt",
      value: function halt(t) {
        return this.warp(this._effectiveTimeScale, 0, t);
      }
    }, {
      key: "warp",
      value: function warp(t, e, n) {
        var i = this._mixer,
            r = i.time,
            s = this.timeScale;
        var a = this._timeScaleInterpolant;
        null === a && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
        var o = a.parameterPositions,
            l = a.sampleValues;
        return o[0] = r, o[1] = r + n, l[0] = t / s, l[1] = e / s, this;
      }
    }, {
      key: "stopWarping",
      value: function stopWarping() {
        var t = this._timeScaleInterpolant;
        return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
      }
    }, {
      key: "getMixer",
      value: function getMixer() {
        return this._mixer;
      }
    }, {
      key: "getClip",
      value: function getClip() {
        return this._clip;
      }
    }, {
      key: "getRoot",
      value: function getRoot() {
        return this._localRoot || this._mixer._root;
      }
    }, {
      key: "_update",
      value: function _update(t, e, n, i) {
        if (!this.enabled) return void this._updateWeight(t);
        var r = this._startTime;

        if (null !== r) {
          var _i186 = (t - r) * n;

          if (_i186 < 0 || 0 === n) return;
          this._startTime = null, e = n * _i186;
        }

        e *= this._updateTimeScale(t);

        var s = this._updateTime(e),
            a = this._updateWeight(t);

        if (a > 0) {
          var _t295 = this._interpolants,
              _e272 = this._propertyBindings;

          switch (this.blendMode) {
            case q:
              for (var _n239 = 0, _i187 = _t295.length; _n239 !== _i187; ++_n239) {
                _t295[_n239].evaluate(s), _e272[_n239].accumulateAdditive(a);
              }

              break;

            case j:
            default:
              for (var _n240 = 0, _r150 = _t295.length; _n240 !== _r150; ++_n240) {
                _t295[_n240].evaluate(s), _e272[_n240].accumulate(i, a);
              }

          }
        }
      }
    }, {
      key: "_updateWeight",
      value: function _updateWeight(t) {
        var e = 0;

        if (this.enabled) {
          e = this.weight;
          var _n241 = this._weightInterpolant;

          if (null !== _n241) {
            var _i188 = _n241.evaluate(t)[0];

            e *= _i188, t > _n241.parameterPositions[1] && (this.stopFading(), 0 === _i188 && (this.enabled = !1));
          }
        }

        return this._effectiveWeight = e, e;
      }
    }, {
      key: "_updateTimeScale",
      value: function _updateTimeScale(t) {
        var e = 0;

        if (!this.paused) {
          e = this.timeScale;
          var _n242 = this._timeScaleInterpolant;

          if (null !== _n242) {
            e *= _n242.evaluate(t)[0], t > _n242.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e);
          }
        }

        return this._effectiveTimeScale = e, e;
      }
    }, {
      key: "_updateTime",
      value: function _updateTime(t) {
        var e = this._clip.duration,
            n = this.loop;
        var i = this.time + t,
            r = this._loopCount;
        var s = 2202 === n;
        if (0 === t) return -1 === r ? i : s && 1 == (1 & r) ? e - i : i;

        if (2200 === n) {
          -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));

          t: {
            if (i >= e) i = e;else {
              if (!(i < 0)) {
                this.time = i;
                break t;
              }

              i = 0;
            }
            this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: t < 0 ? -1 : 1
            });
          }
        } else {
          if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), i >= e || i < 0) {
            var _n243 = Math.floor(i / e);

            i -= e * _n243, r += Math.abs(_n243);

            var _a74 = this.repetitions - r;

            if (_a74 <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = t > 0 ? e : 0, this.time = i, this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: t > 0 ? 1 : -1
            });else {
              if (1 === _a74) {
                var _e273 = t < 0;

                this._setEndings(_e273, !_e273, s);
              } else this._setEndings(!1, !1, s);

              this._loopCount = r, this.time = i, this._mixer.dispatchEvent({
                type: "loop",
                action: this,
                loopDelta: _n243
              });
            }
          } else this.time = i;

          if (s && 1 == (1 & r)) return e - i;
        }

        return i;
      }
    }, {
      key: "_setEndings",
      value: function _setEndings(t, e, n) {
        var i = this._interpolantSettings;
        n ? (i.endingStart = V, i.endingEnd = V) : (i.endingStart = t ? this.zeroSlopeAtStart ? V : k : W, i.endingEnd = e ? this.zeroSlopeAtEnd ? V : k : W);
      }
    }, {
      key: "_scheduleFading",
      value: function _scheduleFading(t, e, n) {
        var i = this._mixer,
            r = i.time;
        var s = this._weightInterpolant;
        null === s && (s = i._lendControlInterpolant(), this._weightInterpolant = s);
        var a = s.parameterPositions,
            o = s.sampleValues;
        return a[0] = r, o[0] = e, a[1] = r + t, o[1] = n, this;
      }
    }]);

    return Yc;
  }();

  var Zc = /*#__PURE__*/function (_rt7) {
    _inherits(Zc, _rt7);

    var _super133 = _createSuper(Zc);

    function Zc(t) {
      var _this105;

      _classCallCheck(this, Zc);

      _this105 = _super133.call(this), _this105._root = t, _this105._initMemoryManager(), _this105._accuIndex = 0, _this105.time = 0, _this105.timeScale = 1;
      return _this105;
    }

    _createClass(Zc, [{
      key: "_bindAction",
      value: function _bindAction(t, e) {
        var n = t._localRoot || this._root,
            i = t._clip.tracks,
            r = i.length,
            s = t._propertyBindings,
            a = t._interpolants,
            o = n.uuid,
            l = this._bindingsByRootAndName;
        var c = l[o];
        void 0 === c && (c = {}, l[o] = c);

        for (var _t296 = 0; _t296 !== r; ++_t296) {
          var _r151 = i[_t296],
              _l31 = _r151.name;
          var _h13 = c[_l31];
          if (void 0 !== _h13) s[_t296] = _h13;else {
            if (_h13 = s[_t296], void 0 !== _h13) {
              null === _h13._cacheIndex && (++_h13.referenceCount, this._addInactiveBinding(_h13, o, _l31));
              continue;
            }

            var _i189 = e && e._propertyBindings[_t296].binding.parsedPath;

            _h13 = new Bc(qc.create(n, _l31, _i189), _r151.ValueTypeName, _r151.getValueSize()), ++_h13.referenceCount, this._addInactiveBinding(_h13, o, _l31), s[_t296] = _h13;
          }
          a[_t296].resultBuffer = _h13.buffer;
        }
      }
    }, {
      key: "_activateAction",
      value: function _activateAction(t) {
        if (!this._isActiveAction(t)) {
          if (null === t._cacheIndex) {
            var _e275 = (t._localRoot || this._root).uuid,
                _n244 = t._clip.uuid,
                _i190 = this._actionsByClip[_n244];
            this._bindAction(t, _i190 && _i190.knownActions[0]), this._addInactiveAction(t, _n244, _e275);
          }

          var _e274 = t._propertyBindings;

          for (var _t297 = 0, _n245 = _e274.length; _t297 !== _n245; ++_t297) {
            var _n246 = _e274[_t297];
            0 == _n246.useCount++ && (this._lendBinding(_n246), _n246.saveOriginalState());
          }

          this._lendAction(t);
        }
      }
    }, {
      key: "_deactivateAction",
      value: function _deactivateAction(t) {
        if (this._isActiveAction(t)) {
          var _e276 = t._propertyBindings;

          for (var _t298 = 0, _n247 = _e276.length; _t298 !== _n247; ++_t298) {
            var _n248 = _e276[_t298];
            0 == --_n248.useCount && (_n248.restoreOriginalState(), this._takeBackBinding(_n248));
          }

          this._takeBackAction(t);
        }
      }
    }, {
      key: "_initMemoryManager",
      value: function _initMemoryManager() {
        this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
        var t = this;
        this.stats = {
          actions: {
            get total() {
              return t._actions.length;
            },

            get inUse() {
              return t._nActiveActions;
            }

          },
          bindings: {
            get total() {
              return t._bindings.length;
            },

            get inUse() {
              return t._nActiveBindings;
            }

          },
          controlInterpolants: {
            get total() {
              return t._controlInterpolants.length;
            },

            get inUse() {
              return t._nActiveControlInterpolants;
            }

          }
        };
      }
    }, {
      key: "_isActiveAction",
      value: function _isActiveAction(t) {
        var e = t._cacheIndex;
        return null !== e && e < this._nActiveActions;
      }
    }, {
      key: "_addInactiveAction",
      value: function _addInactiveAction(t, e, n) {
        var i = this._actions,
            r = this._actionsByClip;
        var s = r[e];
        if (void 0 === s) s = {
          knownActions: [t],
          actionByRoot: {}
        }, t._byClipCacheIndex = 0, r[e] = s;else {
          var _e277 = s.knownActions;
          t._byClipCacheIndex = _e277.length, _e277.push(t);
        }
        t._cacheIndex = i.length, i.push(t), s.actionByRoot[n] = t;
      }
    }, {
      key: "_removeInactiveAction",
      value: function _removeInactiveAction(t) {
        var e = this._actions,
            n = e[e.length - 1],
            i = t._cacheIndex;
        n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null;
        var r = t._clip.uuid,
            s = this._actionsByClip,
            a = s[r],
            o = a.knownActions,
            l = o[o.length - 1],
            c = t._byClipCacheIndex;
        l._byClipCacheIndex = c, o[c] = l, o.pop(), t._byClipCacheIndex = null;
        delete a.actionByRoot[(t._localRoot || this._root).uuid], 0 === o.length && delete s[r], this._removeInactiveBindingsForAction(t);
      }
    }, {
      key: "_removeInactiveBindingsForAction",
      value: function _removeInactiveBindingsForAction(t) {
        var e = t._propertyBindings;

        for (var _t299 = 0, _n249 = e.length; _t299 !== _n249; ++_t299) {
          var _n250 = e[_t299];
          0 == --_n250.referenceCount && this._removeInactiveBinding(_n250);
        }
      }
    }, {
      key: "_lendAction",
      value: function _lendAction(t) {
        var e = this._actions,
            n = t._cacheIndex,
            i = this._nActiveActions++,
            r = e[i];
        t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
      }
    }, {
      key: "_takeBackAction",
      value: function _takeBackAction(t) {
        var e = this._actions,
            n = t._cacheIndex,
            i = --this._nActiveActions,
            r = e[i];
        t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
      }
    }, {
      key: "_addInactiveBinding",
      value: function _addInactiveBinding(t, e, n) {
        var i = this._bindingsByRootAndName,
            r = this._bindings;
        var s = i[e];
        void 0 === s && (s = {}, i[e] = s), s[n] = t, t._cacheIndex = r.length, r.push(t);
      }
    }, {
      key: "_removeInactiveBinding",
      value: function _removeInactiveBinding(t) {
        var e = this._bindings,
            n = t.binding,
            i = n.rootNode.uuid,
            r = n.path,
            s = this._bindingsByRootAndName,
            a = s[i],
            o = e[e.length - 1],
            l = t._cacheIndex;
        o._cacheIndex = l, e[l] = o, e.pop(), delete a[r], 0 === Object.keys(a).length && delete s[i];
      }
    }, {
      key: "_lendBinding",
      value: function _lendBinding(t) {
        var e = this._bindings,
            n = t._cacheIndex,
            i = this._nActiveBindings++,
            r = e[i];
        t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
      }
    }, {
      key: "_takeBackBinding",
      value: function _takeBackBinding(t) {
        var e = this._bindings,
            n = t._cacheIndex,
            i = --this._nActiveBindings,
            r = e[i];
        t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
      }
    }, {
      key: "_lendControlInterpolant",
      value: function _lendControlInterpolant() {
        var t = this._controlInterpolants,
            e = this._nActiveControlInterpolants++;
        var n = t[e];
        return void 0 === n && (n = new Xo(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = e, t[e] = n), n;
      }
    }, {
      key: "_takeBackControlInterpolant",
      value: function _takeBackControlInterpolant(t) {
        var e = this._controlInterpolants,
            n = t.__cacheIndex,
            i = --this._nActiveControlInterpolants,
            r = e[i];
        t.__cacheIndex = i, e[i] = t, r.__cacheIndex = n, e[n] = r;
      }
    }, {
      key: "clipAction",
      value: function clipAction(t, e, n) {
        var i = e || this._root,
            r = i.uuid;
        var s = "string" == typeof t ? il.findByName(i, t) : t;
        var a = null !== s ? s.uuid : t,
            o = this._actionsByClip[a];
        var l = null;

        if (void 0 === n && (n = null !== s ? s.blendMode : j), void 0 !== o) {
          var _t300 = o.actionByRoot[r];
          if (void 0 !== _t300 && _t300.blendMode === n) return _t300;
          l = o.knownActions[0], null === s && (s = l._clip);
        }

        if (null === s) return null;
        var c = new Yc(this, s, e, n);
        return this._bindAction(c, l), this._addInactiveAction(c, a, r), c;
      }
    }, {
      key: "existingAction",
      value: function existingAction(t, e) {
        var n = e || this._root,
            i = n.uuid,
            r = "string" == typeof t ? il.findByName(n, t) : t,
            s = r ? r.uuid : t,
            a = this._actionsByClip[s];
        return void 0 !== a && a.actionByRoot[i] || null;
      }
    }, {
      key: "stopAllAction",
      value: function stopAllAction() {
        var t = this._actions;

        for (var _e278 = this._nActiveActions - 1; _e278 >= 0; --_e278) {
          t[_e278].stop();
        }

        return this;
      }
    }, {
      key: "update",
      value: function update(t) {
        t *= this.timeScale;
        var e = this._actions,
            n = this._nActiveActions,
            i = this.time += t,
            r = Math.sign(t),
            s = this._accuIndex ^= 1;

        for (var _a75 = 0; _a75 !== n; ++_a75) {
          e[_a75]._update(i, t, r, s);
        }

        var a = this._bindings,
            o = this._nActiveBindings;

        for (var _t301 = 0; _t301 !== o; ++_t301) {
          a[_t301].apply(s);
        }

        return this;
      }
    }, {
      key: "setTime",
      value: function setTime(t) {
        this.time = 0;

        for (var _t302 = 0; _t302 < this._actions.length; _t302++) {
          this._actions[_t302].time = 0;
        }

        return this.update(t);
      }
    }, {
      key: "getRoot",
      value: function getRoot() {
        return this._root;
      }
    }, {
      key: "uncacheClip",
      value: function uncacheClip(t) {
        var e = this._actions,
            n = t.uuid,
            i = this._actionsByClip,
            r = i[n];

        if (void 0 !== r) {
          var _t303 = r.knownActions;

          for (var _n251 = 0, _i191 = _t303.length; _n251 !== _i191; ++_n251) {
            var _i192 = _t303[_n251];

            this._deactivateAction(_i192);

            var _r152 = _i192._cacheIndex,
                _s88 = e[e.length - 1];
            _i192._cacheIndex = null, _i192._byClipCacheIndex = null, _s88._cacheIndex = _r152, e[_r152] = _s88, e.pop(), this._removeInactiveBindingsForAction(_i192);
          }

          delete i[n];
        }
      }
    }, {
      key: "uncacheRoot",
      value: function uncacheRoot(t) {
        var e = t.uuid,
            n = this._actionsByClip;

        for (var _t304 in n) {
          var _i193 = n[_t304].actionByRoot[e];
          void 0 !== _i193 && (this._deactivateAction(_i193), this._removeInactiveAction(_i193));
        }

        var i = this._bindingsByRootAndName[e];
        if (void 0 !== i) for (var _t305 in i) {
          var _e279 = i[_t305];
          _e279.restoreOriginalState(), this._removeInactiveBinding(_e279);
        }
      }
    }, {
      key: "uncacheAction",
      value: function uncacheAction(t, e) {
        var n = this.existingAction(t, e);
        null !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
      }
    }]);

    return Zc;
  }(rt);

  Zc.prototype._controlInterpolantsResultBuffer = new Float32Array(1);

  var Jc = /*#__PURE__*/function () {
    function Jc(t) {
      _classCallCheck(this, Jc);

      "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t;
    }

    _createClass(Jc, [{
      key: "clone",
      value: function clone() {
        return new Jc(void 0 === this.value.clone ? this.value : this.value.clone());
      }
    }]);

    return Jc;
  }();

  var Qc = /*#__PURE__*/function (_Es) {
    _inherits(Qc, _Es);

    var _super134 = _createSuper(Qc);

    function Qc(t, e) {
      var _this106;

      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      _classCallCheck(this, Qc);

      _this106 = _super134.call(this, t, e), _this106.meshPerAttribute = n || 1;
      return _this106;
    }

    _createClass(Qc, [{
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(Qc.prototype), "copy", this).call(this, t), this.meshPerAttribute = t.meshPerAttribute, this;
      }
    }, {
      key: "clone",
      value: function clone(t) {
        var e = _get(_getPrototypeOf(Qc.prototype), "clone", this).call(this, t);

        return e.meshPerAttribute = this.meshPerAttribute, e;
      }
    }, {
      key: "toJSON",
      value: function toJSON(t) {
        var e = _get(_getPrototypeOf(Qc.prototype), "toJSON", this).call(this, t);

        return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e;
      }
    }]);

    return Qc;
  }(Es);

  Qc.prototype.isInstancedInterleavedBuffer = !0;

  var Kc = /*#__PURE__*/function () {
    function Kc(t, e, n, i, r) {
      _classCallCheck(this, Kc);

      this.buffer = t, this.type = e, this.itemSize = n, this.elementSize = i, this.count = r, this.version = 0;
    }

    _createClass(Kc, [{
      key: "needsUpdate",
      set: function set(t) {
        !0 === t && this.version++;
      }
    }, {
      key: "setBuffer",
      value: function setBuffer(t) {
        return this.buffer = t, this;
      }
    }, {
      key: "setType",
      value: function setType(t, e) {
        return this.type = t, this.elementSize = e, this;
      }
    }, {
      key: "setItemSize",
      value: function setItemSize(t) {
        return this.itemSize = t, this;
      }
    }, {
      key: "setCount",
      value: function setCount(t) {
        return this.count = t, this;
      }
    }]);

    return Kc;
  }();

  Kc.prototype.isGLBufferAttribute = !0;

  function $c(t, e) {
    return t.distance - e.distance;
  }

  function th(t, e, n, i) {
    if (t.layers.test(e.layers) && t.raycast(e, n), !0 === i) {
      var _i194 = t.children;

      for (var _t306 = 0, _r153 = _i194.length; _t306 < _r153; _t306++) {
        th(_i194[_t306], e, n, !0);
      }
    }
  }

  var eh = new vt();

  var nh = /*#__PURE__*/function () {
    function nh() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new vt(1 / 0, 1 / 0);
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new vt(-1 / 0, -1 / 0);

      _classCallCheck(this, nh);

      this.min = t, this.max = e;
    }

    _createClass(nh, [{
      key: "set",
      value: function set(t, e) {
        return this.min.copy(t), this.max.copy(e), this;
      }
    }, {
      key: "setFromPoints",
      value: function setFromPoints(t) {
        this.makeEmpty();

        for (var _e280 = 0, _n252 = t.length; _e280 < _n252; _e280++) {
          this.expandByPoint(t[_e280]);
        }

        return this;
      }
    }, {
      key: "setFromCenterAndSize",
      value: function setFromCenterAndSize(t, e) {
        var n = eh.copy(e).multiplyScalar(.5);
        return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.min.copy(t.min), this.max.copy(t.max), this;
      }
    }, {
      key: "makeEmpty",
      value: function makeEmpty() {
        return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y;
      }
    }, {
      key: "getCenter",
      value: function getCenter(t) {
        return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new vt()), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
      }
    }, {
      key: "getSize",
      value: function getSize(t) {
        return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new vt()), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
      }
    }, {
      key: "expandByPoint",
      value: function expandByPoint(t) {
        return this.min.min(t), this.max.max(t), this;
      }
    }, {
      key: "expandByVector",
      value: function expandByVector(t) {
        return this.min.sub(t), this.max.add(t), this;
      }
    }, {
      key: "expandByScalar",
      value: function expandByScalar(t) {
        return this.min.addScalar(-t), this.max.addScalar(t), this;
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(t) {
        return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y);
      }
    }, {
      key: "containsBox",
      value: function containsBox(t) {
        return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y;
      }
    }, {
      key: "getParameter",
      value: function getParameter(t, e) {
        return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new vt()), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y));
      }
    }, {
      key: "intersectsBox",
      value: function intersectsBox(t) {
        return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y);
      }
    }, {
      key: "clampPoint",
      value: function clampPoint(t, e) {
        return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new vt()), e.copy(t).clamp(this.min, this.max);
      }
    }, {
      key: "distanceToPoint",
      value: function distanceToPoint(t) {
        return eh.copy(t).clamp(this.min, this.max).sub(t).length();
      }
    }, {
      key: "intersect",
      value: function intersect(t) {
        return this.min.max(t.min), this.max.min(t.max), this;
      }
    }, {
      key: "union",
      value: function union(t) {
        return this.min.min(t.min), this.max.max(t.max), this;
      }
    }, {
      key: "translate",
      value: function translate(t) {
        return this.min.add(t), this.max.add(t), this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.min.equals(this.min) && t.max.equals(this.max);
      }
    }]);

    return nh;
  }();

  nh.prototype.isBox2 = !0;
  var ih = new Rt(),
      rh = new Rt();

  var sh = /*#__PURE__*/function () {
    function sh() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Rt();
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Rt();

      _classCallCheck(this, sh);

      this.start = t, this.end = e;
    }

    _createClass(sh, [{
      key: "set",
      value: function set(t, e) {
        return this.start.copy(t), this.end.copy(e), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.start.copy(t.start), this.end.copy(t.end), this;
      }
    }, {
      key: "getCenter",
      value: function getCenter(t) {
        return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"), t = new Rt()), t.addVectors(this.start, this.end).multiplyScalar(.5);
      }
    }, {
      key: "delta",
      value: function delta(t) {
        return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"), t = new Rt()), t.subVectors(this.end, this.start);
      }
    }, {
      key: "distanceSq",
      value: function distanceSq() {
        return this.start.distanceToSquared(this.end);
      }
    }, {
      key: "distance",
      value: function distance() {
        return this.start.distanceTo(this.end);
      }
    }, {
      key: "at",
      value: function at(t, e) {
        return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"), e = new Rt()), this.delta(e).multiplyScalar(t).add(this.start);
      }
    }, {
      key: "closestPointToPointParameter",
      value: function closestPointToPointParameter(t, e) {
        ih.subVectors(t, this.start), rh.subVectors(this.end, this.start);
        var n = rh.dot(rh);
        var i = rh.dot(ih) / n;
        return e && (i = ht(i, 0, 1)), i;
      }
    }, {
      key: "closestPointToPoint",
      value: function closestPointToPoint(t, e, n) {
        var i = this.closestPointToPointParameter(t, e);
        return void 0 === n && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new Rt()), this.delta(n).multiplyScalar(i).add(this.start);
      }
    }, {
      key: "applyMatrix4",
      value: function applyMatrix4(t) {
        return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t.start.equals(this.start) && t.end.equals(this.end);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return sh;
  }();

  var ah = /*#__PURE__*/function (_Pe13) {
    _inherits(ah, _Pe13);

    var _super135 = _createSuper(ah);

    function ah(t) {
      var _this107;

      _classCallCheck(this, ah);

      _this107 = _super135.call(this), _this107.material = t, _this107.render = function () {}, _this107.hasPositions = !1, _this107.hasNormals = !1, _this107.hasColors = !1, _this107.hasUvs = !1, _this107.positionArray = null, _this107.normalArray = null, _this107.colorArray = null, _this107.uvArray = null, _this107.count = 0;
      return _this107;
    }

    return ah;
  }(Pe);

  ah.prototype.isImmediateRenderObject = !0;
  var oh = new Rt();
  var lh = new Rt(),
      ch = new ae(),
      hh = new ae();

  var uh = /*#__PURE__*/function (_xa) {
    _inherits(uh, _xa);

    var _super136 = _createSuper(uh);

    function uh(t) {
      var _this108;

      _classCallCheck(this, uh);

      var e = dh(t),
          n = new An(),
          i = [],
          r = [],
          s = new en(0, 0, 1),
          a = new en(0, 1, 0);

      for (var _t307 = 0; _t307 < e.length; _t307++) {
        var _n253 = e[_t307];
        _n253.parent && _n253.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(a.r, a.g, a.b));
      }

      n.setAttribute("position", new fn(i, 3)), n.setAttribute("color", new fn(r, 3));
      _this108 = _super136.call(this, n, new ha({
        vertexColors: !0,
        depthTest: !1,
        depthWrite: !1,
        toneMapped: !1,
        transparent: !0
      })), _this108.type = "SkeletonHelper", _this108.isSkeletonHelper = !0, _this108.root = t, _this108.bones = e, _this108.matrix = t.matrixWorld, _this108.matrixAutoUpdate = !1;
      return _this108;
    }

    _createClass(uh, [{
      key: "updateMatrixWorld",
      value: function updateMatrixWorld(t) {
        var e = this.bones,
            n = this.geometry,
            i = n.getAttribute("position");
        hh.copy(this.root.matrixWorld).invert();

        for (var _t308 = 0, _n254 = 0; _t308 < e.length; _t308++) {
          var _r154 = e[_t308];
          _r154.parent && _r154.parent.isBone && (ch.multiplyMatrices(hh, _r154.matrixWorld), lh.setFromMatrixPosition(ch), i.setXYZ(_n254, lh.x, lh.y, lh.z), ch.multiplyMatrices(hh, _r154.parent.matrixWorld), lh.setFromMatrixPosition(ch), i.setXYZ(_n254 + 1, lh.x, lh.y, lh.z), _n254 += 2);
        }

        n.getAttribute("position").needsUpdate = !0, _get(_getPrototypeOf(uh.prototype), "updateMatrixWorld", this).call(this, t);
      }
    }]);

    return uh;
  }(xa);

  function dh(t) {
    var e = [];
    t && t.isBone && e.push(t);

    for (var _n255 = 0; _n255 < t.children.length; _n255++) {
      e.push.apply(e, dh(t.children[_n255]));
    }

    return e;
  }

  var ph = new Rt(),
      mh = new en(),
      fh = new en();

  var gh = /*#__PURE__*/function (_xa2) {
    _inherits(gh, _xa2);

    var _super137 = _createSuper(gh);

    function gh() {
      var _this109;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4473924;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8947848;

      _classCallCheck(this, gh);

      n = new en(n), i = new en(i);
      var r = e / 2,
          s = t / e,
          a = t / 2,
          o = [],
          l = [];

      for (var _t309 = 0, _c23 = 0, _h14 = -a; _t309 <= e; _t309++, _h14 += s) {
        o.push(-a, 0, _h14, a, 0, _h14), o.push(_h14, 0, -a, _h14, 0, a);

        var _e281 = _t309 === r ? n : i;

        _e281.toArray(l, _c23), _c23 += 3, _e281.toArray(l, _c23), _c23 += 3, _e281.toArray(l, _c23), _c23 += 3, _e281.toArray(l, _c23), _c23 += 3;
      }

      var c = new An();
      c.setAttribute("position", new fn(o, 3)), c.setAttribute("color", new fn(l, 3));
      _this109 = _super137.call(this, c, new ha({
        vertexColors: !0,
        toneMapped: !1
      })), _this109.type = "GridHelper";
      return _this109;
    }

    return gh;
  }(xa);

  var vh = new Rt(),
      yh = new Rt(),
      xh = new Rt();

  var _h = new Rt(),
      wh = new Kn();

  function bh(t, e, n, i, r, s, a) {
    _h.set(r, s, a).unproject(i);

    var o = e[t];

    if (void 0 !== o) {
      var _t310 = n.getAttribute("position");

      for (var _e282 = 0, _n256 = o.length; _e282 < _n256; _e282++) {
        _t310.setXYZ(o[_e282], _h.x, _h.y, _h.z);
      }
    }
  }

  var Mh = new Dt();

  var Sh = /*#__PURE__*/function (_xa3) {
    _inherits(Sh, _xa3);

    var _super138 = _createSuper(Sh);

    function Sh(t) {
      var _this110;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16776960;

      _classCallCheck(this, Sh);

      var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
          i = new Float32Array(24),
          r = new An();
      r.setIndex(new an(n, 1)), r.setAttribute("position", new an(i, 3)), _this110 = _super138.call(this, r, new ha({
        color: e,
        toneMapped: !1
      })), _this110.object = t, _this110.type = "BoxHelper", _this110.matrixAutoUpdate = !1, _this110.update();
      return _this110;
    }

    _createClass(Sh, [{
      key: "update",
      value: function update(t) {
        if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && Mh.setFromObject(this.object), Mh.isEmpty()) return;
        var e = Mh.min,
            n = Mh.max,
            i = this.geometry.attributes.position,
            r = i.array;
        r[0] = n.x, r[1] = n.y, r[2] = n.z, r[3] = e.x, r[4] = n.y, r[5] = n.z, r[6] = e.x, r[7] = e.y, r[8] = n.z, r[9] = n.x, r[10] = e.y, r[11] = n.z, r[12] = n.x, r[13] = n.y, r[14] = e.z, r[15] = e.x, r[16] = n.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = n.x, r[22] = e.y, r[23] = e.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere();
      }
    }, {
      key: "setFromObject",
      value: function setFromObject(t) {
        return this.object = t, this.update(), this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return xa.prototype.copy.call(this, t), this.object = t.object, this;
      }
    }]);

    return Sh;
  }(xa);

  var Th = new Rt();
  var Eh, Ah;

  var Lh = /*#__PURE__*/function (_xa4) {
    _inherits(Lh, _xa4);

    var _super139 = _createSuper(Lh);

    function Lh() {
      var _this111;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      _classCallCheck(this, Lh);

      var e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
          n = new An();
      n.setAttribute("position", new fn(e, 3)), n.setAttribute("color", new fn([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
      _this111 = _super139.call(this, n, new ha({
        vertexColors: !0,
        toneMapped: !1
      })), _this111.type = "AxesHelper";
      return _this111;
    }

    _createClass(Lh, [{
      key: "dispose",
      value: function dispose() {
        this.geometry.dispose(), this.material.dispose();
      }
    }]);

    return Lh;
  }(xa);

  var Rh = new Float32Array(1),
      Ch = new Int32Array(Rh.buffer);

  var Ph = Math.pow(2, 8),
      Dh = [.125, .215, .35, .446, .526, .582],
      Ih = 5 + Dh.length,
      Nh = 20,
      Bh = (_Bh = {}, _defineProperty(_Bh, X, 0), _defineProperty(_Bh, Y, 1), _defineProperty(_Bh, J, 2), _defineProperty(_Bh, Q, 3), _defineProperty(_Bh, K, 4), _defineProperty(_Bh, $, 5), _defineProperty(_Bh, Z, 6), _Bh),
      zh = new nn({
    side: 1,
    depthWrite: !1,
    depthTest: !1
  }),
      Fh = new jn(new Xn(), zh),
      Oh = new Ql(),
      _Zh = Zh(),
      Hh = _Zh._lodPlanes,
      Gh = _Zh._sizeLods,
      Uh = _Zh._sigmas,
      kh = new en();

  var Vh = null;
  var Wh = (1 + Math.sqrt(5)) / 2,
      jh = 1 / Wh,
      qh = [new Rt(1, 1, 1), new Rt(-1, 1, 1), new Rt(1, 1, -1), new Rt(-1, 1, -1), new Rt(0, Wh, jh), new Rt(0, Wh, -jh), new Rt(jh, 0, Wh), new Rt(-jh, 0, Wh), new Rt(Wh, jh, 0), new Rt(-Wh, jh, 0)];

  function Xh(t) {
    var e = Math.max(t.r, t.g, t.b),
        n = Math.min(Math.max(Math.ceil(Math.log2(e)), -128), 127);
    t.multiplyScalar(Math.pow(2, -n));
    return (n + 128) / 255;
  }

  function Yh(t) {
    return void 0 !== t && t.type === x && (t.encoding === X || t.encoding === Y || t.encoding === Z);
  }

  function Zh() {
    var t = [],
        e = [],
        n = [];
    var i = 8;

    for (var _r155 = 0; _r155 < Ih; _r155++) {
      var _s89 = Math.pow(2, i);

      e.push(_s89);

      var _a76 = 1 / _s89;

      _r155 > 4 ? _a76 = Dh[_r155 - 8 + 4 - 1] : 0 == _r155 && (_a76 = 0), n.push(_a76);

      var _o44 = 1 / (_s89 - 1),
          _l32 = -_o44 / 2,
          _c24 = 1 + _o44 / 2,
          _h15 = [_l32, _l32, _c24, _l32, _c24, _c24, _l32, _l32, _c24, _c24, _l32, _c24],
          _u14 = 6,
          _d17 = 6,
          _p12 = 3,
          _m7 = 2,
          _f3 = 1,
          _g4 = new Float32Array(_p12 * _d17 * _u14),
          _v4 = new Float32Array(_m7 * _d17 * _u14),
          _y6 = new Float32Array(_f3 * _d17 * _u14);

      for (var _t311 = 0; _t311 < _u14; _t311++) {
        var _e283 = _t311 % 3 * 2 / 3 - 1,
            _n257 = _t311 > 2 ? 0 : -1,
            _i195 = [_e283, _n257, 0, _e283 + 2 / 3, _n257, 0, _e283 + 2 / 3, _n257 + 1, 0, _e283, _n257, 0, _e283 + 2 / 3, _n257 + 1, 0, _e283, _n257 + 1, 0];

        _g4.set(_i195, _p12 * _d17 * _t311), _v4.set(_h15, _m7 * _d17 * _t311);
        var _r156 = [_t311, _t311, _t311, _t311, _t311, _t311];

        _y6.set(_r156, _f3 * _d17 * _t311);
      }

      var _x4 = new An();

      _x4.setAttribute("position", new an(_g4, _p12)), _x4.setAttribute("uv", new an(_v4, _m7)), _x4.setAttribute("faceIndex", new an(_y6, _f3)), t.push(_x4), i > 4 && i--;
    }

    return {
      _lodPlanes: t,
      _sizeLods: e,
      _sigmas: n
    };
  }

  function Jh(t) {
    var e = new Tt(3 * Ph, 3 * Ph, t);
    return e.texture.mapping = l, e.texture.name = "PMREM.cubeUv", e.scissorTest = !0, e;
  }

  function Qh(t, e, n, i, r) {
    t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
  }

  function Kh() {
    var t = new vt(1, 1);
    return new No({
      name: "EquirectangularToCubeUV",
      uniforms: {
        envMap: {
          value: null
        },
        texelSize: {
          value: t
        },
        inputEncoding: {
          value: Bh[3e3]
        },
        outputEncoding: {
          value: Bh[3e3]
        }
      },
      vertexShader: tu(),
      fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t".concat(eu(), "\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t"),
      blending: 0,
      depthTest: !1,
      depthWrite: !1
    });
  }

  function $h() {
    return new No({
      name: "CubemapToCubeUV",
      uniforms: {
        envMap: {
          value: null
        },
        inputEncoding: {
          value: Bh[3e3]
        },
        outputEncoding: {
          value: Bh[3e3]
        }
      },
      vertexShader: tu(),
      fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t".concat(eu(), "\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t"),
      blending: 0,
      depthTest: !1,
      depthWrite: !1
    });
  }

  function tu() {
    return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
  }

  function eu() {
    return "\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t";
  }

  fl.create = function (t, e) {
    return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(fl.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t;
  }, zl.prototype.fromPoints = function (t) {
    return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t);
  }, gh.prototype.setColors = function () {
    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
  }, uh.prototype.update = function () {
    console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
  }, ll.prototype.extractUrlBase = function (t) {
    return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), sc.extractUrlBase(t);
  }, ll.Handlers = {
    add: function add() {
      console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
    },
    get: function get() {
      console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
    }
  }, nh.prototype.center = function (t) {
    return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t);
  }, nh.prototype.empty = function () {
    return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty();
  }, nh.prototype.isIntersectionBox = function (t) {
    return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
  }, nh.prototype.size = function (t) {
    return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t);
  }, Dt.prototype.center = function (t) {
    return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t);
  }, Dt.prototype.empty = function () {
    return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
  }, Dt.prototype.isIntersectionBox = function (t) {
    return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
  }, Dt.prototype.isIntersectionSphere = function (t) {
    return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t);
  }, Dt.prototype.size = function (t) {
    return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t);
  }, Qt.prototype.empty = function () {
    return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty();
  }, ai.prototype.setFromMatrix = function (t) {
    return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(t);
  }, sh.prototype.center = function (t) {
    return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t);
  }, yt.prototype.flattenToArrayOffset = function (t, e) {
    return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e);
  }, yt.prototype.multiplyVector3 = function (t) {
    return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this);
  }, yt.prototype.multiplyVector3Array = function () {
    console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
  }, yt.prototype.applyToBufferAttribute = function (t) {
    return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), t.applyMatrix3(this);
  }, yt.prototype.applyToVector3Array = function () {
    console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
  }, yt.prototype.getInverse = function (t) {
    return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert();
  }, ae.prototype.extractPosition = function (t) {
    return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t);
  }, ae.prototype.flattenToArrayOffset = function (t, e) {
    return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e);
  }, ae.prototype.getPosition = function () {
    return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new Rt().setFromMatrixColumn(this, 3);
  }, ae.prototype.setRotationFromQuaternion = function (t) {
    return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t);
  }, ae.prototype.multiplyToArray = function () {
    console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
  }, ae.prototype.multiplyVector3 = function (t) {
    return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
  }, ae.prototype.multiplyVector4 = function (t) {
    return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
  }, ae.prototype.multiplyVector3Array = function () {
    console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
  }, ae.prototype.rotateAxis = function (t) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this);
  }, ae.prototype.crossVector = function (t) {
    return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
  }, ae.prototype.translate = function () {
    console.error("THREE.Matrix4: .translate() has been removed.");
  }, ae.prototype.rotateX = function () {
    console.error("THREE.Matrix4: .rotateX() has been removed.");
  }, ae.prototype.rotateY = function () {
    console.error("THREE.Matrix4: .rotateY() has been removed.");
  }, ae.prototype.rotateZ = function () {
    console.error("THREE.Matrix4: .rotateZ() has been removed.");
  }, ae.prototype.rotateByAxis = function () {
    console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
  }, ae.prototype.applyToBufferAttribute = function (t) {
    return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), t.applyMatrix4(this);
  }, ae.prototype.applyToVector3Array = function () {
    console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
  }, ae.prototype.makeFrustum = function (t, e, n, i, r, s) {
    return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, i, n, r, s);
  }, ae.prototype.getInverse = function (t) {
    return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert();
  }, Be.prototype.isIntersectionLine = function (t) {
    return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t);
  }, Lt.prototype.multiplyVector3 = function (t) {
    return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this);
  }, Lt.prototype.inverse = function () {
    return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert();
  }, se.prototype.isIntersectionBox = function (t) {
    return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t);
  }, se.prototype.isIntersectionPlane = function (t) {
    return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t);
  }, se.prototype.isIntersectionSphere = function (t) {
    return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t);
  }, qe.prototype.area = function () {
    return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
  }, qe.prototype.barycoordFromPoint = function (t, e) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e);
  }, qe.prototype.midpoint = function (t) {
    return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t);
  }, qe.prototypenormal = function (t) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t);
  }, qe.prototype.plane = function (t) {
    return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t);
  }, qe.barycoordFromPoint = function (t, e, n, i, r) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), qe.getBarycoord(t, e, n, i, r);
  }, qe.normal = function (t, e, n, i) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), qe.getNormal(t, e, n, i);
  }, Fl.prototype.extractAllPoints = function (t) {
    return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t);
  }, Fl.prototype.extrude = function (t) {
    return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new vo(this, t);
  }, Fl.prototype.makeGeometry = function (t) {
    return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new So(this, t);
  }, vt.prototype.fromAttribute = function (t, e, n) {
    return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
  }, vt.prototype.distanceToManhattan = function (t) {
    return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t);
  }, vt.prototype.lengthManhattan = function () {
    return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
  }, Rt.prototype.setEulerFromRotationMatrix = function () {
    console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
  }, Rt.prototype.setEulerFromQuaternion = function () {
    console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
  }, Rt.prototype.getPositionFromMatrix = function (t) {
    return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t);
  }, Rt.prototype.getScaleFromMatrix = function (t) {
    return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t);
  }, Rt.prototype.getColumnFromMatrix = function (t, e) {
    return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t);
  }, Rt.prototype.applyProjection = function (t) {
    return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t);
  }, Rt.prototype.fromAttribute = function (t, e, n) {
    return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
  }, Rt.prototype.distanceToManhattan = function (t) {
    return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t);
  }, Rt.prototype.lengthManhattan = function () {
    return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
  }, St.prototype.fromAttribute = function (t, e, n) {
    return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n);
  }, St.prototype.lengthManhattan = function () {
    return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
  }, Pe.prototype.getChildByName = function (t) {
    return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t);
  }, Pe.prototype.renderDepth = function () {
    console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
  }, Pe.prototype.translate = function (t, e) {
    return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t);
  }, Pe.prototype.getWorldRotation = function () {
    console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
  }, Pe.prototype.applyMatrix = function (t) {
    return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t);
  }, Object.defineProperties(Pe.prototype, {
    eulerOrder: {
      get: function get() {
        return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order;
      },
      set: function set(t) {
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t;
      }
    },
    useQuaternion: {
      get: function get() {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
      },
      set: function set() {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
      }
    }
  }), jn.prototype.setDrawMode = function () {
    console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
  }, Object.defineProperties(jn.prototype, {
    drawMode: {
      get: function get() {
        return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0;
      },
      set: function set() {
        console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
      }
    }
  }), $s.prototype.initBones = function () {
    console.error("THREE.SkinnedMesh: initBones() has been removed.");
  }, $n.prototype.setLens = function (t, e) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t);
  }, Object.defineProperties(Ol.prototype, {
    onlyShadow: {
      set: function set() {
        console.warn("THREE.Light: .onlyShadow has been removed.");
      }
    },
    shadowCameraFov: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t;
      }
    },
    shadowCameraLeft: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t;
      }
    },
    shadowCameraRight: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t;
      }
    },
    shadowCameraTop: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t;
      }
    },
    shadowCameraBottom: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t;
      }
    },
    shadowCameraNear: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t;
      }
    },
    shadowCameraFar: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t;
      }
    },
    shadowCameraVisible: {
      set: function set() {
        console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
      }
    },
    shadowBias: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t;
      }
    },
    shadowDarkness: {
      set: function set() {
        console.warn("THREE.Light: .shadowDarkness has been removed.");
      }
    },
    shadowMapWidth: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t;
      }
    },
    shadowMapHeight: {
      set: function set(t) {
        console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t;
      }
    }
  }), Object.defineProperties(an.prototype, {
    length: {
      get: function get() {
        return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length;
      }
    },
    dynamic: {
      get: function get() {
        return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === nt;
      },
      set: function set() {
        console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(nt);
      }
    }
  }), an.prototype.setDynamic = function (t) {
    return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? nt : et), this;
  }, an.prototype.copyIndicesArray = function () {
    console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
  }, an.prototype.setArray = function () {
    console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
  }, An.prototype.addIndex = function (t) {
    console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t);
  }, An.prototype.addAttribute = function (t, e) {
    return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(t, new an(arguments[1], arguments[2])));
  }, An.prototype.addDrawCall = function (t, e, n) {
    void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e);
  }, An.prototype.clearDrawCalls = function () {
    console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
  }, An.prototype.computeOffsets = function () {
    console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
  }, An.prototype.removeAttribute = function (t) {
    return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(t);
  }, An.prototype.applyMatrix = function (t) {
    return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t);
  }, Object.defineProperties(An.prototype, {
    drawcalls: {
      get: function get() {
        return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups;
      }
    },
    offsets: {
      get: function get() {
        return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups;
      }
    }
  }), Es.prototype.setDynamic = function (t) {
    return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? nt : et), this;
  }, Es.prototype.setArray = function () {
    console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
  }, vo.prototype.getArrays = function () {
    console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
  }, vo.prototype.addShapeList = function () {
    console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
  }, vo.prototype.addShape = function () {
    console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
  }, Ts.prototype.dispose = function () {
    console.error("THREE.Scene: .dispose() has been removed.");
  }, Jc.prototype.onUpdate = function () {
    return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this;
  }, Object.defineProperties(Ye.prototype, {
    wrapAround: {
      get: function get() {
        console.warn("THREE.Material: .wrapAround has been removed.");
      },
      set: function set() {
        console.warn("THREE.Material: .wrapAround has been removed.");
      }
    },
    overdraw: {
      get: function get() {
        console.warn("THREE.Material: .overdraw has been removed.");
      },
      set: function set() {
        console.warn("THREE.Material: .overdraw has been removed.");
      }
    },
    wrapRGB: {
      get: function get() {
        return console.warn("THREE.Material: .wrapRGB has been removed."), new en();
      }
    },
    shading: {
      get: function get() {
        console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
      },
      set: function set(t) {
        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t;
      }
    },
    stencilMask: {
      get: function get() {
        return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask;
      },
      set: function set(t) {
        console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = t;
      }
    }
  }), Object.defineProperties(Qn.prototype, {
    derivatives: {
      get: function get() {
        return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives;
      },
      set: function set(t) {
        console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t;
      }
    }
  }), ws.prototype.clearTarget = function (t, e, n, i) {
    console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, n, i);
  }, ws.prototype.animate = function (t) {
    console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t);
  }, ws.prototype.getCurrentRenderTarget = function () {
    return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget();
  }, ws.prototype.getMaxAnisotropy = function () {
    return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy();
  }, ws.prototype.getPrecision = function () {
    return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision;
  }, ws.prototype.resetGLState = function () {
    return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset();
  }, ws.prototype.supportsFloatTextures = function () {
    return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float");
  }, ws.prototype.supportsHalfFloatTextures = function () {
    return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float");
  }, ws.prototype.supportsStandardDerivatives = function () {
    return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives");
  }, ws.prototype.supportsCompressedTextureS3TC = function () {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc");
  }, ws.prototype.supportsCompressedTexturePVRTC = function () {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc");
  }, ws.prototype.supportsBlendMinMax = function () {
    return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax");
  }, ws.prototype.supportsVertexTextures = function () {
    return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures;
  }, ws.prototype.supportsInstancedArrays = function () {
    return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays");
  }, ws.prototype.enableScissorTest = function (t) {
    console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t);
  }, ws.prototype.initMaterial = function () {
    console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
  }, ws.prototype.addPrePlugin = function () {
    console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
  }, ws.prototype.addPostPlugin = function () {
    console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
  }, ws.prototype.updateShadowMap = function () {
    console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
  }, ws.prototype.setFaceCulling = function () {
    console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
  }, ws.prototype.allocTextureUnit = function () {
    console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
  }, ws.prototype.setTexture = function () {
    console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
  }, ws.prototype.setTexture2D = function () {
    console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
  }, ws.prototype.setTextureCube = function () {
    console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
  }, ws.prototype.getActiveMipMapLevel = function () {
    return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel();
  }, Object.defineProperties(ws.prototype, {
    shadowMapEnabled: {
      get: function get() {
        return this.shadowMap.enabled;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t;
      }
    },
    shadowMapType: {
      get: function get() {
        return this.shadowMap.type;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t;
      }
    },
    shadowMapCullFace: {
      get: function get() {
        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
      }
    },
    context: {
      get: function get() {
        return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext();
      }
    },
    vr: {
      get: function get() {
        return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr;
      }
    },
    gammaInput: {
      get: function get() {
        return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1;
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
      }
    },
    gammaOutput: {
      get: function get() {
        return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === t ? Y : X;
      }
    },
    toneMappingWhitePoint: {
      get: function get() {
        return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1;
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
      }
    }
  }), Object.defineProperties(us.prototype, {
    cullFace: {
      get: function get() {
        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
      }
    },
    renderReverseSided: {
      get: function get() {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
      }
    },
    renderSingleSided: {
      get: function get() {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
      },
      set: function set() {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
      }
    }
  }), Object.defineProperties(Tt.prototype, {
    wrapS: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t;
      }
    },
    wrapT: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t;
      }
    },
    magFilter: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t;
      }
    },
    minFilter: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t;
      }
    },
    anisotropy: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t;
      }
    },
    offset: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t;
      }
    },
    repeat: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t;
      }
    },
    format: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t;
      }
    },
    type: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t;
      }
    },
    generateMipmaps: {
      get: function get() {
        return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps;
      },
      set: function set(t) {
        console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t;
      }
    }
  }), Rc.prototype.load = function (t) {
    console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
    var e = this;
    return new yc().load(t, function (t) {
      e.setBuffer(t);
    }), this;
  }, Nc.prototype.getData = function () {
    return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData();
  }, ei.prototype.updateCubeMap = function (t, e) {
    return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e);
  }, ei.prototype.clear = function (t, e, n, i) {
    return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(t, e, n, i);
  }, _t.crossOrigin = void 0, _t.loadTexture = function (t, e, n, i) {
    console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
    var r = new ml();
    r.setCrossOrigin(this.crossOrigin);
    var s = r.load(t, n, void 0, i);
    return e && (s.mapping = e), s;
  }, _t.loadTextureCube = function (t, e, n, i) {
    console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
    var r = new dl();
    r.setCrossOrigin(this.crossOrigin);
    var s = r.load(t, n, void 0, i);
    return e && (s.mapping = e), s;
  }, _t.loadCompressedTexture = function () {
    console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
  }, _t.loadCompressedTextureCube = function () {
    console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
  };
  var nu = {
    createMultiMaterialObject: function createMultiMaterialObject() {
      console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
    },
    detach: function detach() {
      console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
    },
    attach: function attach() {
      console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");
    }
  };
  "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
      revision: e
    }
  })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = e), t.ACESFilmicToneMapping = 4, t.AddEquation = n, t.AddOperation = 2, t.AdditiveAnimationBlendMode = q, t.AdditiveBlending = 2, t.AlphaFormat = 1021, t.AlwaysDepth = 1, t.AlwaysStencilFunc = 519, t.AmbientLight = tc, t.AmbientLightProbe = _c, t.AnimationClip = il, t.AnimationLoader = /*#__PURE__*/function (_ll10) {
    _inherits(_class2, _ll10);

    var _super140 = _createSuper(_class2);

    function _class2(t) {
      _classCallCheck(this, _class2);

      return _super140.call(this, t);
    }

    _createClass(_class2, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = this,
            s = new hl(this.manager);
        s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, function (n) {
          try {
            e(r.parse(JSON.parse(n)));
          } catch (e) {
            i ? i(e) : console.error(e), r.manager.itemError(t);
          }
        }, n, i);
      }
    }, {
      key: "parse",
      value: function parse(t) {
        var e = [];

        for (var _n258 = 0; _n258 < t.length; _n258++) {
          var _i196 = il.parse(t[_n258]);

          e.push(_i196);
        }

        return e;
      }
    }]);

    return _class2;
  }(ll), t.AnimationMixer = Zc, t.AnimationObjectGroup = Xc, t.AnimationUtils = Wo, t.ArcCurve = vl, t.ArrayCamera = fs, t.ArrowHelper = /*#__PURE__*/function (_Pe14) {
    _inherits(_class3, _Pe14);

    var _super141 = _createSuper(_class3);

    function _class3() {
      var _this112;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Rt(0, 0, 1);
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Rt(0, 0, 0);
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 16776960;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : .2 * n;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : .2 * r;

      _classCallCheck(this, _class3);

      _this112 = _super141.call(this), _this112.type = "ArrowHelper", void 0 === Eh && (Eh = new An(), Eh.setAttribute("position", new fn([0, 0, 0, 0, 1, 0], 3)), Ah = new Ia(0, .5, 1, 5, 1), Ah.translate(0, -.5, 0)), _this112.position.copy(e), _this112.line = new ga(Eh, new ha({
        color: i,
        toneMapped: !1
      })), _this112.line.matrixAutoUpdate = !1, _this112.add(_this112.line), _this112.cone = new jn(Ah, new nn({
        color: i,
        toneMapped: !1
      })), _this112.cone.matrixAutoUpdate = !1, _this112.add(_this112.cone), _this112.setDirection(t), _this112.setLength(n, r, s);
      return _this112;
    }

    _createClass(_class3, [{
      key: "setDirection",
      value: function setDirection(t) {
        if (t.y > .99999) this.quaternion.set(0, 0, 0, 1);else if (t.y < -.99999) this.quaternion.set(1, 0, 0, 0);else {
          Th.set(t.z, 0, -t.x).normalize();

          var _e284 = Math.acos(t.y);

          this.quaternion.setFromAxisAngle(Th, _e284);
        }
      }
    }, {
      key: "setLength",
      value: function setLength(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .2 * t;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .2 * e;
        this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix();
      }
    }, {
      key: "setColor",
      value: function setColor(t) {
        this.line.material.color.set(t), this.cone.material.color.set(t);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return _get(_getPrototypeOf(_class3.prototype), "copy", this).call(this, t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this;
      }
    }]);

    return _class3;
  }(Pe), t.Audio = Rc, t.AudioAnalyser = Nc, t.AudioContext = vc, t.AudioListener = /*#__PURE__*/function (_Pe15) {
    _inherits(_class4, _Pe15);

    var _super142 = _createSuper(_class4);

    function _class4() {
      var _this113;

      _classCallCheck(this, _class4);

      _this113 = _super142.call(this), _this113.type = "AudioListener", _this113.context = vc.getContext(), _this113.gain = _this113.context.createGain(), _this113.gain.connect(_this113.context.destination), _this113.filter = null, _this113.timeDelta = 0, _this113._clock = new Mc();
      return _this113;
    }

    _createClass(_class4, [{
      key: "getInput",
      value: function getInput() {
        return this.gain;
      }
    }, {
      key: "removeFilter",
      value: function removeFilter() {
        return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
      }
    }, {
      key: "getFilter",
      value: function getFilter() {
        return this.filter;
      }
    }, {
      key: "setFilter",
      value: function setFilter(t) {
        return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
      }
    }, {
      key: "getMasterVolume",
      value: function getMasterVolume() {
        return this.gain.gain.value;
      }
    }, {
      key: "setMasterVolume",
      value: function setMasterVolume(t) {
        return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this;
      }
    }, {
      key: "updateMatrixWorld",
      value: function updateMatrixWorld(t) {
        _get(_getPrototypeOf(_class4.prototype), "updateMatrixWorld", this).call(this, t);

        var e = this.context.listener,
            n = this.up;

        if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(Tc, Ec, Ac), Lc.set(0, 0, -1).applyQuaternion(Ec), e.positionX) {
          var _t312 = this.context.currentTime + this.timeDelta;

          e.positionX.linearRampToValueAtTime(Tc.x, _t312), e.positionY.linearRampToValueAtTime(Tc.y, _t312), e.positionZ.linearRampToValueAtTime(Tc.z, _t312), e.forwardX.linearRampToValueAtTime(Lc.x, _t312), e.forwardY.linearRampToValueAtTime(Lc.y, _t312), e.forwardZ.linearRampToValueAtTime(Lc.z, _t312), e.upX.linearRampToValueAtTime(n.x, _t312), e.upY.linearRampToValueAtTime(n.y, _t312), e.upZ.linearRampToValueAtTime(n.z, _t312);
        } else e.setPosition(Tc.x, Tc.y, Tc.z), e.setOrientation(Lc.x, Lc.y, Lc.z, n.x, n.y, n.z);
      }
    }]);

    return _class4;
  }(Pe), t.AudioLoader = yc, t.AxesHelper = Lh, t.AxisHelper = function (t) {
    return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new Lh(t);
  }, t.BackSide = 1, t.BasicDepthPacking = 3200, t.BasicShadowMap = 0, t.BinaryTextureLoader = function (t) {
    return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new pl(t);
  }, t.Bone = ta, t.BooleanKeyframeTrack = Jo, t.BoundingBoxHelper = function (t, e) {
    return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new Sh(t, e);
  }, t.Box2 = nh, t.Box3 = Dt, t.Box3Helper = /*#__PURE__*/function (_xa5) {
    _inherits(_class5, _xa5);

    var _super143 = _createSuper(_class5);

    function _class5(t) {
      var _this114;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16776960;

      _classCallCheck(this, _class5);

      var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
          i = new An();
      i.setIndex(new an(n, 1)), i.setAttribute("position", new fn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), _this114 = _super143.call(this, i, new ha({
        color: e,
        toneMapped: !1
      })), _this114.box = t, _this114.type = "Box3Helper", _this114.geometry.computeBoundingSphere();
      return _this114;
    }

    _createClass(_class5, [{
      key: "updateMatrixWorld",
      value: function updateMatrixWorld(t) {
        var e = this.box;
        e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), _get(_getPrototypeOf(_class5.prototype), "updateMatrixWorld", this).call(this, t));
      }
    }]);

    return _class5;
  }(xa), t.BoxBufferGeometry = Xn, t.BoxGeometry = Xn, t.BoxHelper = Sh, t.BufferAttribute = an, t.BufferGeometry = An, t.BufferGeometryLoader = lc, t.ByteType = 1010, t.Cache = sl, t.Camera = Kn, t.CameraHelper = /*#__PURE__*/function (_xa6) {
    _inherits(_class6, _xa6);

    var _super144 = _createSuper(_class6);

    function _class6(t) {
      var _this115;

      _classCallCheck(this, _class6);

      var e = new An(),
          n = new ha({
        color: 16777215,
        vertexColors: !0,
        toneMapped: !1
      }),
          i = [],
          r = [],
          s = {},
          a = new en(16755200),
          o = new en(16711680),
          l = new en(43775),
          c = new en(16777215),
          h = new en(3355443);

      function u(t, e, n) {
        d(t, n), d(e, n);
      }

      function d(t, e) {
        i.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === s[t] && (s[t] = []), s[t].push(i.length / 3 - 1);
      }

      u("n1", "n2", a), u("n2", "n4", a), u("n4", "n3", a), u("n3", "n1", a), u("f1", "f2", a), u("f2", "f4", a), u("f4", "f3", a), u("f3", "f1", a), u("n1", "f1", a), u("n2", "f2", a), u("n3", "f3", a), u("n4", "f4", a), u("p", "n1", o), u("p", "n2", o), u("p", "n3", o), u("p", "n4", o), u("u1", "u2", l), u("u2", "u3", l), u("u3", "u1", l), u("c", "t", c), u("p", "c", h), u("cn1", "cn2", h), u("cn3", "cn4", h), u("cf1", "cf2", h), u("cf3", "cf4", h), e.setAttribute("position", new fn(i, 3)), e.setAttribute("color", new fn(r, 3)), _this115 = _super144.call(this, e, n), _this115.type = "CameraHelper", _this115.camera = t, _this115.camera.updateProjectionMatrix && _this115.camera.updateProjectionMatrix(), _this115.matrix = t.matrixWorld, _this115.matrixAutoUpdate = !1, _this115.pointMap = s, _this115.update();
      return _this115;
    }

    _createClass(_class6, [{
      key: "update",
      value: function update() {
        var t = this.geometry,
            e = this.pointMap;
        wh.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), bh("c", e, t, wh, 0, 0, -1), bh("t", e, t, wh, 0, 0, 1), bh("n1", e, t, wh, -1, -1, -1), bh("n2", e, t, wh, 1, -1, -1), bh("n3", e, t, wh, -1, 1, -1), bh("n4", e, t, wh, 1, 1, -1), bh("f1", e, t, wh, -1, -1, 1), bh("f2", e, t, wh, 1, -1, 1), bh("f3", e, t, wh, -1, 1, 1), bh("f4", e, t, wh, 1, 1, 1), bh("u1", e, t, wh, .7, 1.1, -1), bh("u2", e, t, wh, -.7, 1.1, -1), bh("u3", e, t, wh, 0, 2, -1), bh("cf1", e, t, wh, -1, 0, 1), bh("cf2", e, t, wh, 1, 0, 1), bh("cf3", e, t, wh, 0, -1, 1), bh("cf4", e, t, wh, 0, 1, 1), bh("cn1", e, t, wh, -1, 0, -1), bh("cn2", e, t, wh, 1, 0, -1), bh("cn3", e, t, wh, 0, -1, -1), bh("cn4", e, t, wh, 0, 1, -1), t.getAttribute("position").needsUpdate = !0;
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.geometry.dispose(), this.material.dispose();
      }
    }]);

    return _class6;
  }(xa), t.CanvasRenderer = function () {
    console.error("THREE.CanvasRenderer has been removed");
  }, t.CanvasTexture = Ca, t.CatmullRomCurve3 = Ml, t.CineonToneMapping = 3, t.CircleBufferGeometry = Da, t.CircleGeometry = Da, t.ClampToEdgeWrapping = u, t.Clock = Mc, t.Color = en, t.ColorKeyframeTrack = Qo, t.CompressedTexture = Ra, t.CompressedTextureLoader = /*#__PURE__*/function (_ll11) {
    _inherits(_class7, _ll11);

    var _super145 = _createSuper(_class7);

    function _class7(t) {
      _classCallCheck(this, _class7);

      return _super145.call(this, t);
    }

    _createClass(_class7, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = this,
            s = [],
            a = new Ra(),
            o = new hl(this.manager);
        o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(r.withCredentials);
        var l = 0;

        function c(c) {
          o.load(t[c], function (t) {
            var n = r.parse(t, !0);
            s[c] = {
              width: n.width,
              height: n.height,
              format: n.format,
              mipmaps: n.mipmaps
            }, l += 1, 6 === l && (1 === n.mipmapCount && (a.minFilter = g), a.image = s, a.format = n.format, a.needsUpdate = !0, e && e(a));
          }, n, i);
        }

        if (Array.isArray(t)) for (var _e285 = 0, _n259 = t.length; _e285 < _n259; ++_e285) {
          c(_e285);
        } else o.load(t, function (t) {
          var n = r.parse(t, !0);

          if (n.isCubemap) {
            var _t313 = n.mipmaps.length / n.mipmapCount;

            for (var _e286 = 0; _e286 < _t313; _e286++) {
              s[_e286] = {
                mipmaps: []
              };

              for (var _t314 = 0; _t314 < n.mipmapCount; _t314++) {
                s[_e286].mipmaps.push(n.mipmaps[_e286 * n.mipmapCount + _t314]), s[_e286].format = n.format, s[_e286].width = n.width, s[_e286].height = n.height;
              }
            }

            a.image = s;
          } else a.image.width = n.width, a.image.height = n.height, a.mipmaps = n.mipmaps;

          1 === n.mipmapCount && (a.minFilter = g), a.format = n.format, a.needsUpdate = !0, e && e(a);
        }, n, i);
        return a;
      }
    }]);

    return _class7;
  }(ll), t.ConeBufferGeometry = Na, t.ConeGeometry = Na, t.CubeCamera = ei, t.CubeReflectionMapping = r, t.CubeRefractionMapping = s, t.CubeTexture = ni, t.CubeTextureLoader = dl, t.CubeUVReflectionMapping = l, t.CubeUVRefractionMapping = c, t.CubicBezierCurve = Al, t.CubicBezierCurve3 = Ll, t.CubicInterpolant = qo, t.CullFaceBack = 1, t.CullFaceFront = 2, t.CullFaceFrontBack = 3, t.CullFaceNone = 0, t.Curve = fl, t.CurvePath = Bl, t.CustomBlending = 5, t.CustomToneMapping = 5, t.CylinderBufferGeometry = Ia, t.CylinderGeometry = Ia, t.Cylindrical = /*#__PURE__*/function () {
    function _class8() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, _class8);

      return this.radius = t, this.theta = e, this.y = n, this;
    }

    _createClass(_class8, [{
      key: "set",
      value: function set(t, e, n) {
        return this.radius = t, this.theta = e, this.y = n, this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this;
      }
    }, {
      key: "setFromVector3",
      value: function setFromVector3(t) {
        return this.setFromCartesianCoords(t.x, t.y, t.z);
      }
    }, {
      key: "setFromCartesianCoords",
      value: function setFromCartesianCoords(t, e, n) {
        return this.radius = Math.sqrt(t * t + n * n), this.theta = Math.atan2(t, n), this.y = e, this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return _class8;
  }(), t.DataTexture = ea, t.DataTexture2DArray = Ai, t.DataTexture3D = Li, t.DataTextureLoader = pl, t.DataUtils = /*#__PURE__*/function () {
    function _class9() {
      _classCallCheck(this, _class9);
    }

    _createClass(_class9, null, [{
      key: "toHalfFloat",
      value: function toHalfFloat(t) {
        Rh[0] = t;
        var e = Ch[0];
        var n = e >> 16 & 32768,
            i = e >> 12 & 2047;
        var r = e >> 23 & 255;
        return r < 103 ? n : r > 142 ? (n |= 31744, n |= (255 == r ? 0 : 1) && 8388607 & e, n) : r < 113 ? (i |= 2048, n |= (i >> 114 - r) + (i >> 113 - r & 1), n) : (n |= r - 112 << 10 | i >> 1, n += 1 & i, n);
      }
    }]);

    return _class9;
  }(), t.DecrementStencilOp = 7683, t.DecrementWrapStencilOp = 34056, t.DefaultLoadingManager = ol, t.DepthFormat = A, t.DepthStencilFormat = L, t.DepthTexture = Pa, t.DirectionalLight = $l, t.DirectionalLightHelper = /*#__PURE__*/function (_Pe16) {
    _inherits(_class10, _Pe16);

    var _super146 = _createSuper(_class10);

    function _class10(t, e, n) {
      var _this116;

      _classCallCheck(this, _class10);

      _this116 = _super146.call(this), _this116.light = t, _this116.light.updateMatrixWorld(), _this116.matrix = t.matrixWorld, _this116.matrixAutoUpdate = !1, _this116.color = n, void 0 === e && (e = 1);
      var i = new An();
      i.setAttribute("position", new fn([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
      var r = new ha({
        fog: !1,
        toneMapped: !1
      });
      _this116.lightPlane = new ga(i, r), _this116.add(_this116.lightPlane), i = new An(), i.setAttribute("position", new fn([0, 0, 0, 0, 0, 1], 3)), _this116.targetLine = new ga(i, r), _this116.add(_this116.targetLine), _this116.update();
      return _this116;
    }

    _createClass(_class10, [{
      key: "dispose",
      value: function dispose() {
        this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
      }
    }, {
      key: "update",
      value: function update() {
        vh.setFromMatrixPosition(this.light.matrixWorld), yh.setFromMatrixPosition(this.light.target.matrixWorld), xh.subVectors(yh, vh), this.lightPlane.lookAt(yh), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(yh), this.targetLine.scale.z = xh.length();
      }
    }]);

    return _class10;
  }(Pe), t.DiscreteInterpolant = Yo, t.DodecahedronBufferGeometry = za, t.DodecahedronGeometry = za, t.DoubleSide = 2, t.DstAlphaFactor = 206, t.DstColorFactor = 208, t.DynamicBufferAttribute = function (t, e) {
    return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."), new an(t, e).setUsage(nt);
  }, t.DynamicCopyUsage = 35050, t.DynamicDrawUsage = nt, t.DynamicReadUsage = 35049, t.EdgesGeometry = Ua, t.EdgesHelper = function (t, e) {
    return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new xa(new Ua(t.geometry), new ha({
      color: void 0 !== e ? e : 16777215
    }));
  }, t.EllipseCurve = gl, t.EqualDepth = 4, t.EqualStencilFunc = 514, t.EquirectangularReflectionMapping = a, t.EquirectangularRefractionMapping = o, t.Euler = ge, t.EventDispatcher = rt, t.ExtrudeBufferGeometry = vo, t.ExtrudeGeometry = vo, t.FaceColors = 1, t.FileLoader = hl, t.FlatShading = 1, t.Float16BufferAttribute = mn, t.Float32Attribute = function (t, e) {
    return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new fn(t, e);
  }, t.Float32BufferAttribute = fn, t.Float64Attribute = function (t, e) {
    return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new gn(t, e);
  }, t.Float64BufferAttribute = gn, t.FloatType = b, t.Fog = Ss, t.FogExp2 = Ms, t.Font = mc, t.FontLoader = /*#__PURE__*/function (_ll12) {
    _inherits(_class11, _ll12);

    var _super147 = _createSuper(_class11);

    function _class11(t) {
      _classCallCheck(this, _class11);

      return _super147.call(this, t);
    }

    _createClass(_class11, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = this,
            s = new hl(this.manager);
        s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, function (t) {
          var n;

          try {
            n = JSON.parse(t);
          } catch (e) {
            console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(t.substring(65, t.length - 2));
          }

          var i = r.parse(n);
          e && e(i);
        }, n, i);
      }
    }, {
      key: "parse",
      value: function parse(t) {
        return new mc(t);
      }
    }]);

    return _class11;
  }(ll), t.FrontSide = 0, t.Frustum = ai, t.GLBufferAttribute = Kc, t.GLSL1 = "100", t.GLSL3 = it, t.GammaEncoding = Z, t.GreaterDepth = 6, t.GreaterEqualDepth = 5, t.GreaterEqualStencilFunc = 518, t.GreaterStencilFunc = 516, t.GridHelper = gh, t.Group = gs, t.HalfFloatType = M, t.HemisphereLight = Hl, t.HemisphereLightHelper = /*#__PURE__*/function (_Pe17) {
    _inherits(_class12, _Pe17);

    var _super148 = _createSuper(_class12);

    function _class12(t, e, n) {
      var _this117;

      _classCallCheck(this, _class12);

      _this117 = _super148.call(this), _this117.light = t, _this117.light.updateMatrixWorld(), _this117.matrix = t.matrixWorld, _this117.matrixAutoUpdate = !1, _this117.color = n;
      var i = new wo(e);
      i.rotateY(.5 * Math.PI), _this117.material = new nn({
        wireframe: !0,
        fog: !1,
        toneMapped: !1
      }), void 0 === _this117.color && (_this117.material.vertexColors = !0);
      var r = i.getAttribute("position"),
          s = new Float32Array(3 * r.count);
      i.setAttribute("color", new an(s, 3)), _this117.add(new jn(i, _this117.material)), _this117.update();
      return _this117;
    }

    _createClass(_class12, [{
      key: "dispose",
      value: function dispose() {
        this.children[0].geometry.dispose(), this.children[0].material.dispose();
      }
    }, {
      key: "update",
      value: function update() {
        var t = this.children[0];
        if (void 0 !== this.color) this.material.color.set(this.color);else {
          var _e287 = t.geometry.getAttribute("color");

          mh.copy(this.light.color), fh.copy(this.light.groundColor);

          for (var _t315 = 0, _n260 = _e287.count; _t315 < _n260; _t315++) {
            var _i197 = _t315 < _n260 / 2 ? mh : fh;

            _e287.setXYZ(_t315, _i197.r, _i197.g, _i197.b);
          }

          _e287.needsUpdate = !0;
        }
        t.lookAt(ph.setFromMatrixPosition(this.light.matrixWorld).negate());
      }
    }]);

    return _class12;
  }(Pe), t.HemisphereLightProbe = xc, t.IcosahedronBufferGeometry = xo, t.IcosahedronGeometry = xo, t.ImageBitmapLoader = dc, t.ImageLoader = ul, t.ImageUtils = _t, t.ImmediateRenderObject = ah, t.IncrementStencilOp = 7682, t.IncrementWrapStencilOp = 34055, t.InstancedBufferAttribute = oc, t.InstancedBufferGeometry = ac, t.InstancedInterleavedBuffer = Qc, t.InstancedMesh = ca, t.Int16Attribute = function (t, e) {
    return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new hn(t, e);
  }, t.Int16BufferAttribute = hn, t.Int32Attribute = function (t, e) {
    return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new dn(t, e);
  }, t.Int32BufferAttribute = dn, t.Int8Attribute = function (t, e) {
    return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new on(t, e);
  }, t.Int8BufferAttribute = on, t.IntType = 1013, t.InterleavedBuffer = Es, t.InterleavedBufferAttribute = Ls, t.Interpolant = jo, t.InterpolateDiscrete = H, t.InterpolateLinear = G, t.InterpolateSmooth = U, t.InvertStencilOp = 5386, t.JSONLoader = function () {
    console.error("THREE.JSONLoader has been removed.");
  }, t.KeepStencilOp = tt, t.KeyframeTrack = Zo, t.LOD = Xs, t.LatheBufferGeometry = _o, t.LatheGeometry = _o, t.Layers = ve, t.LensFlare = function () {
    console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js");
  }, t.LessDepth = 2, t.LessEqualDepth = 3, t.LessEqualStencilFunc = 515, t.LessStencilFunc = 513, t.Light = Ol, t.LightProbe = ic, t.Line = ga, t.Line3 = sh, t.LineBasicMaterial = ha, t.LineCurve = Rl, t.LineCurve3 = Cl, t.LineDashedMaterial = ko, t.LineLoop = _a, t.LinePieces = 1, t.LineSegments = xa, t.LineStrip = 0, t.LinearEncoding = X, t.LinearFilter = g, t.LinearInterpolant = Xo, t.LinearMipMapLinearFilter = 1008, t.LinearMipMapNearestFilter = 1007, t.LinearMipmapLinearFilter = y, t.LinearMipmapNearestFilter = v, t.LinearToneMapping = 1, t.Loader = ll, t.LoaderUtils = sc, t.LoadingManager = al, t.LogLuvEncoding = 3003, t.LoopOnce = 2200, t.LoopPingPong = 2202, t.LoopRepeat = 2201, t.LuminanceAlphaFormat = 1025, t.LuminanceFormat = 1024, t.MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
  }, t.Material = Ye, t.MaterialLoader = rc, t.Math = gt, t.MathUtils = gt, t.Matrix3 = yt, t.Matrix4 = ae, t.MaxEquation = 104, t.Mesh = jn, t.MeshBasicMaterial = nn, t.MeshDepthMaterial = cs, t.MeshDistanceMaterial = hs, t.MeshFaceMaterial = function (t) {
    return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), t;
  }, t.MeshLambertMaterial = Go, t.MeshMatcapMaterial = Uo, t.MeshNormalMaterial = Ho, t.MeshPhongMaterial = Fo, t.MeshPhysicalMaterial = zo, t.MeshStandardMaterial = Bo, t.MeshToonMaterial = Oo, t.MinEquation = 103, t.MirroredRepeatWrapping = d, t.MixOperation = 1, t.MultiMaterial = function () {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), t.isMultiMaterial = !0, t.materials = t, t.clone = function () {
      return t.slice();
    }, t;
  }, t.MultiplyBlending = 4, t.MultiplyOperation = 0, t.NearestFilter = p, t.NearestMipMapLinearFilter = 1005, t.NearestMipMapNearestFilter = 1004, t.NearestMipmapLinearFilter = f, t.NearestMipmapNearestFilter = m, t.NeverDepth = 0, t.NeverStencilFunc = 512, t.NoBlending = 0, t.NoColors = 0, t.NoToneMapping = 0, t.NormalAnimationBlendMode = j, t.NormalBlending = 1, t.NotEqualDepth = 7, t.NotEqualStencilFunc = 517, t.NumberKeyframeTrack = Ko, t.Object3D = Pe, t.ObjectLoader = /*#__PURE__*/function (_ll13) {
    _inherits(_class13, _ll13);

    var _super149 = _createSuper(_class13);

    function _class13(t) {
      _classCallCheck(this, _class13);

      return _super149.call(this, t);
    }

    _createClass(_class13, [{
      key: "load",
      value: function load(t, e, n, i) {
        var r = this,
            s = "" === this.path ? sc.extractUrlBase(t) : this.path;
        this.resourcePath = this.resourcePath || s;
        var a = new hl(this.manager);
        a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t, function (n) {
          var s = null;

          try {
            s = JSON.parse(n);
          } catch (e) {
            return void 0 !== i && i(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message);
          }

          var a = s.metadata;
          void 0 !== a && void 0 !== a.type && "geometry" !== a.type.toLowerCase() ? r.parse(s, e) : console.error("THREE.ObjectLoader: Can't load " + t);
        }, n, i);
      }
    }, {
      key: "parse",
      value: function parse(t, e) {
        var n = this.parseAnimations(t.animations),
            i = this.parseShapes(t.shapes),
            r = this.parseGeometries(t.geometries, i),
            s = this.parseImages(t.images, function () {
          void 0 !== e && e(l);
        }),
            a = this.parseTextures(t.textures, s),
            o = this.parseMaterials(t.materials, a),
            l = this.parseObject(t.object, r, o, n),
            c = this.parseSkeletons(t.skeletons, l);

        if (this.bindSkeletons(l, c), void 0 !== e) {
          var _t316 = !1;

          for (var _e288 in s) {
            if (s[_e288] instanceof HTMLImageElement) {
              _t316 = !0;
              break;
            }
          }

          !1 === _t316 && e(l);
        }

        return l;
      }
    }, {
      key: "parseShapes",
      value: function parseShapes(t) {
        var e = {};
        if (void 0 !== t) for (var _n261 = 0, _i198 = t.length; _n261 < _i198; _n261++) {
          var _i199 = new Fl().fromJSON(t[_n261]);

          e[_i199.uuid] = _i199;
        }
        return e;
      }
    }, {
      key: "parseSkeletons",
      value: function parseSkeletons(t, e) {
        var n = {},
            i = {};
        if (e.traverse(function (t) {
          t.isBone && (i[t.uuid] = t);
        }), void 0 !== t) for (var _e289 = 0, _r157 = t.length; _e289 < _r157; _e289++) {
          var _r158 = new ra().fromJSON(t[_e289], i);

          n[_r158.uuid] = _r158;
        }
        return n;
      }
    }, {
      key: "parseGeometries",
      value: function parseGeometries(t, e) {
        var n = {};
        var i;

        if (void 0 !== t) {
          var _r159 = new lc();

          for (var _s90 = 0, _a77 = t.length; _s90 < _a77; _s90++) {
            var _a78 = void 0;

            var _o45 = t[_s90];

            switch (_o45.type) {
              case "PlaneGeometry":
              case "PlaneBufferGeometry":
                _a78 = new Do[_o45.type](_o45.width, _o45.height, _o45.widthSegments, _o45.heightSegments);
                break;

              case "BoxGeometry":
              case "BoxBufferGeometry":
                _a78 = new Do[_o45.type](_o45.width, _o45.height, _o45.depth, _o45.widthSegments, _o45.heightSegments, _o45.depthSegments);
                break;

              case "CircleGeometry":
              case "CircleBufferGeometry":
                _a78 = new Do[_o45.type](_o45.radius, _o45.segments, _o45.thetaStart, _o45.thetaLength);
                break;

              case "CylinderGeometry":
              case "CylinderBufferGeometry":
                _a78 = new Do[_o45.type](_o45.radiusTop, _o45.radiusBottom, _o45.height, _o45.radialSegments, _o45.heightSegments, _o45.openEnded, _o45.thetaStart, _o45.thetaLength);
                break;

              case "ConeGeometry":
              case "ConeBufferGeometry":
                _a78 = new Do[_o45.type](_o45.radius, _o45.height, _o45.radialSegments, _o45.heightSegments, _o45.openEnded, _o45.thetaStart, _o45.thetaLength);
                break;

              case "SphereGeometry":
              case "SphereBufferGeometry":
                _a78 = new Do[_o45.type](_o45.radius, _o45.widthSegments, _o45.heightSegments, _o45.phiStart, _o45.phiLength, _o45.thetaStart, _o45.thetaLength);
                break;

              case "DodecahedronGeometry":
              case "DodecahedronBufferGeometry":
              case "IcosahedronGeometry":
              case "IcosahedronBufferGeometry":
              case "OctahedronGeometry":
              case "OctahedronBufferGeometry":
              case "TetrahedronGeometry":
              case "TetrahedronBufferGeometry":
                _a78 = new Do[_o45.type](_o45.radius, _o45.detail);
                break;

              case "RingGeometry":
              case "RingBufferGeometry":
                _a78 = new Do[_o45.type](_o45.innerRadius, _o45.outerRadius, _o45.thetaSegments, _o45.phiSegments, _o45.thetaStart, _o45.thetaLength);
                break;

              case "TorusGeometry":
              case "TorusBufferGeometry":
                _a78 = new Do[_o45.type](_o45.radius, _o45.tube, _o45.radialSegments, _o45.tubularSegments, _o45.arc);
                break;

              case "TorusKnotGeometry":
              case "TorusKnotBufferGeometry":
                _a78 = new Do[_o45.type](_o45.radius, _o45.tube, _o45.tubularSegments, _o45.radialSegments, _o45.p, _o45.q);
                break;

              case "TubeGeometry":
              case "TubeBufferGeometry":
                _a78 = new Do[_o45.type](new Nl[_o45.path.type]().fromJSON(_o45.path), _o45.tubularSegments, _o45.radius, _o45.radialSegments, _o45.closed);
                break;

              case "LatheGeometry":
              case "LatheBufferGeometry":
                _a78 = new Do[_o45.type](_o45.points, _o45.segments, _o45.phiStart, _o45.phiLength);
                break;

              case "PolyhedronGeometry":
              case "PolyhedronBufferGeometry":
                _a78 = new Do[_o45.type](_o45.vertices, _o45.indices, _o45.radius, _o45.details);
                break;

              case "ShapeGeometry":
              case "ShapeBufferGeometry":
                i = [];

                for (var _t318 = 0, _n262 = _o45.shapes.length; _t318 < _n262; _t318++) {
                  var _n263 = e[_o45.shapes[_t318]];
                  i.push(_n263);
                }

                _a78 = new Do[_o45.type](i, _o45.curveSegments);
                break;

              case "ExtrudeGeometry":
              case "ExtrudeBufferGeometry":
                i = [];

                for (var _t319 = 0, _n264 = _o45.shapes.length; _t319 < _n264; _t319++) {
                  var _n265 = e[_o45.shapes[_t319]];
                  i.push(_n265);
                }

                var _t317 = _o45.options.extrudePath;
                void 0 !== _t317 && (_o45.options.extrudePath = new Nl[_t317.type]().fromJSON(_t317)), _a78 = new Do[_o45.type](i, _o45.options);
                break;

              case "BufferGeometry":
              case "InstancedBufferGeometry":
                _a78 = _r159.parse(_o45);
                break;

              case "Geometry":
                console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');
                break;

              default:
                console.warn('THREE.ObjectLoader: Unsupported geometry type "' + _o45.type + '"');
                continue;
            }

            _a78.uuid = _o45.uuid, void 0 !== _o45.name && (_a78.name = _o45.name), !0 === _a78.isBufferGeometry && void 0 !== _o45.userData && (_a78.userData = _o45.userData), n[_o45.uuid] = _a78;
          }
        }

        return n;
      }
    }, {
      key: "parseMaterials",
      value: function parseMaterials(t, e) {
        var n = {},
            i = {};

        if (void 0 !== t) {
          var _r160 = new rc();

          _r160.setTextures(e);

          for (var _e290 = 0, _s91 = t.length; _e290 < _s91; _e290++) {
            var _s92 = t[_e290];

            if ("MultiMaterial" === _s92.type) {
              var _t320 = [];

              for (var _e291 = 0; _e291 < _s92.materials.length; _e291++) {
                var _i200 = _s92.materials[_e291];
                void 0 === n[_i200.uuid] && (n[_i200.uuid] = _r160.parse(_i200)), _t320.push(n[_i200.uuid]);
              }

              i[_s92.uuid] = _t320;
            } else void 0 === n[_s92.uuid] && (n[_s92.uuid] = _r160.parse(_s92)), i[_s92.uuid] = n[_s92.uuid];
          }
        }

        return i;
      }
    }, {
      key: "parseAnimations",
      value: function parseAnimations(t) {
        var e = {};
        if (void 0 !== t) for (var _n266 = 0; _n266 < t.length; _n266++) {
          var _i201 = t[_n266],
              _r161 = il.parse(_i201);

          e[_r161.uuid] = _r161;
        }
        return e;
      }
    }, {
      key: "parseImages",
      value: function parseImages(t, e) {
        var n = this,
            i = {};
        var r;

        function s(t) {
          if ("string" == typeof t) {
            var _e292 = t;
            return function (t) {
              return n.manager.itemStart(t), r.load(t, function () {
                n.manager.itemEnd(t);
              }, void 0, function () {
                n.manager.itemError(t), n.manager.itemEnd(t);
              });
            }(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(_e292) ? _e292 : n.resourcePath + _e292);
          }

          return t.data ? {
            data: xn(t.type, t.data),
            width: t.width,
            height: t.height
          } : null;
        }

        if (void 0 !== t && t.length > 0) {
          var _n267 = new al(e);

          r = new ul(_n267), r.setCrossOrigin(this.crossOrigin);

          for (var _e293 = 0, _n268 = t.length; _e293 < _n268; _e293++) {
            var _n269 = t[_e293],
                _r162 = _n269.url;

            if (Array.isArray(_r162)) {
              i[_n269.uuid] = [];

              for (var _t321 = 0, _e294 = _r162.length; _t321 < _e294; _t321++) {
                var _e295 = s(_r162[_t321]);

                null !== _e295 && (_e295 instanceof HTMLImageElement ? i[_n269.uuid].push(_e295) : i[_n269.uuid].push(new ea(_e295.data, _e295.width, _e295.height)));
              }
            } else {
              var _t322 = s(_n269.url);

              null !== _t322 && (i[_n269.uuid] = _t322);
            }
          }
        }

        return i;
      }
    }, {
      key: "parseTextures",
      value: function parseTextures(t, e) {
        function n(t, e) {
          return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t]);
        }

        var i = {};
        if (void 0 !== t) for (var _r163 = 0, _s93 = t.length; _r163 < _s93; _r163++) {
          var _s94 = t[_r163];

          var _a79 = void 0;

          void 0 === _s94.image && console.warn('THREE.ObjectLoader: No "image" specified for', _s94.uuid), void 0 === e[_s94.image] && console.warn("THREE.ObjectLoader: Undefined image", _s94.image);
          var _o46 = e[_s94.image];
          Array.isArray(_o46) ? (_a79 = new ni(_o46), 6 === _o46.length && (_a79.needsUpdate = !0)) : (_a79 = _o46 && _o46.data ? new ea(_o46.data, _o46.width, _o46.height) : new bt(_o46), _o46 && (_a79.needsUpdate = !0)), _a79.uuid = _s94.uuid, void 0 !== _s94.name && (_a79.name = _s94.name), void 0 !== _s94.mapping && (_a79.mapping = n(_s94.mapping, cc)), void 0 !== _s94.offset && _a79.offset.fromArray(_s94.offset), void 0 !== _s94.repeat && _a79.repeat.fromArray(_s94.repeat), void 0 !== _s94.center && _a79.center.fromArray(_s94.center), void 0 !== _s94.rotation && (_a79.rotation = _s94.rotation), void 0 !== _s94.wrap && (_a79.wrapS = n(_s94.wrap[0], hc), _a79.wrapT = n(_s94.wrap[1], hc)), void 0 !== _s94.format && (_a79.format = _s94.format), void 0 !== _s94.type && (_a79.type = _s94.type), void 0 !== _s94.encoding && (_a79.encoding = _s94.encoding), void 0 !== _s94.minFilter && (_a79.minFilter = n(_s94.minFilter, uc)), void 0 !== _s94.magFilter && (_a79.magFilter = n(_s94.magFilter, uc)), void 0 !== _s94.anisotropy && (_a79.anisotropy = _s94.anisotropy), void 0 !== _s94.flipY && (_a79.flipY = _s94.flipY), void 0 !== _s94.premultiplyAlpha && (_a79.premultiplyAlpha = _s94.premultiplyAlpha), void 0 !== _s94.unpackAlignment && (_a79.unpackAlignment = _s94.unpackAlignment), i[_s94.uuid] = _a79;
        }
        return i;
      }
    }, {
      key: "parseObject",
      value: function parseObject(t, e, n, i) {
        var r, s, a;

        function o(t) {
          return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t];
        }

        function l(t) {
          if (void 0 !== t) {
            if (Array.isArray(t)) {
              var _e296 = [];

              for (var _i202 = 0, _r164 = t.length; _i202 < _r164; _i202++) {
                var _r165 = t[_i202];
                void 0 === n[_r165] && console.warn("THREE.ObjectLoader: Undefined material", _r165), _e296.push(n[_r165]);
              }

              return _e296;
            }

            return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t), n[t];
          }
        }

        switch (t.type) {
          case "Scene":
            r = new Ts(), void 0 !== t.background && Number.isInteger(t.background) && (r.background = new en(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? r.fog = new Ss(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (r.fog = new Ms(t.fog.color, t.fog.density)));
            break;

          case "PerspectiveCamera":
            r = new $n(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (r.focus = t.focus), void 0 !== t.zoom && (r.zoom = t.zoom), void 0 !== t.filmGauge && (r.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (r.filmOffset = t.filmOffset), void 0 !== t.view && (r.view = Object.assign({}, t.view));
            break;

          case "OrthographicCamera":
            r = new Ql(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (r.zoom = t.zoom), void 0 !== t.view && (r.view = Object.assign({}, t.view));
            break;

          case "AmbientLight":
            r = new tc(t.color, t.intensity);
            break;

          case "DirectionalLight":
            r = new $l(t.color, t.intensity);
            break;

          case "PointLight":
            r = new Jl(t.color, t.intensity, t.distance, t.decay);
            break;

          case "RectAreaLight":
            r = new ec(t.color, t.intensity, t.width, t.height);
            break;

          case "SpotLight":
            r = new jl(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
            break;

          case "HemisphereLight":
            r = new Hl(t.color, t.groundColor, t.intensity);
            break;

          case "LightProbe":
            r = new ic().fromJSON(t);
            break;

          case "SkinnedMesh":
            s = o(t.geometry), a = l(t.material), r = new $s(s, a), void 0 !== t.bindMode && (r.bindMode = t.bindMode), void 0 !== t.bindMatrix && r.bindMatrix.fromArray(t.bindMatrix), void 0 !== t.skeleton && (r.skeleton = t.skeleton);
            break;

          case "Mesh":
            s = o(t.geometry), a = l(t.material), r = new jn(s, a);
            break;

          case "InstancedMesh":
            s = o(t.geometry), a = l(t.material);
            var _e297 = t.count,
                _n270 = t.instanceMatrix,
                _i203 = t.instanceColor;
            r = new ca(s, a, _e297), r.instanceMatrix = new an(new Float32Array(_n270.array), 16), void 0 !== _i203 && (r.instanceColor = new an(new Float32Array(_i203.array), _i203.itemSize));
            break;

          case "LOD":
            r = new Xs();
            break;

          case "Line":
            r = new ga(o(t.geometry), l(t.material));
            break;

          case "LineLoop":
            r = new _a(o(t.geometry), l(t.material));
            break;

          case "LineSegments":
            r = new xa(o(t.geometry), l(t.material));
            break;

          case "PointCloud":
          case "Points":
            r = new Ea(o(t.geometry), l(t.material));
            break;

          case "Sprite":
            r = new Vs(l(t.material));
            break;

          case "Group":
            r = new gs();
            break;

          case "Bone":
            r = new ta();
            break;

          default:
            r = new Pe();
        }

        if (r.uuid = t.uuid, void 0 !== t.name && (r.name = t.name), void 0 !== t.matrix ? (r.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (r.matrixAutoUpdate = t.matrixAutoUpdate), r.matrixAutoUpdate && r.matrix.decompose(r.position, r.quaternion, r.scale)) : (void 0 !== t.position && r.position.fromArray(t.position), void 0 !== t.rotation && r.rotation.fromArray(t.rotation), void 0 !== t.quaternion && r.quaternion.fromArray(t.quaternion), void 0 !== t.scale && r.scale.fromArray(t.scale)), void 0 !== t.castShadow && (r.castShadow = t.castShadow), void 0 !== t.receiveShadow && (r.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (r.shadow.bias = t.shadow.bias), void 0 !== t.shadow.normalBias && (r.shadow.normalBias = t.shadow.normalBias), void 0 !== t.shadow.radius && (r.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && r.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (r.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (r.visible = t.visible), void 0 !== t.frustumCulled && (r.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (r.renderOrder = t.renderOrder), void 0 !== t.userData && (r.userData = t.userData), void 0 !== t.layers && (r.layers.mask = t.layers), void 0 !== t.children) {
          var _s95 = t.children;

          for (var _t323 = 0; _t323 < _s95.length; _t323++) {
            r.add(this.parseObject(_s95[_t323], e, n, i));
          }
        }

        if (void 0 !== t.animations) {
          var _e298 = t.animations;

          for (var _t324 = 0; _t324 < _e298.length; _t324++) {
            var _n271 = _e298[_t324];
            r.animations.push(i[_n271]);
          }
        }

        if ("LOD" === t.type) {
          void 0 !== t.autoUpdate && (r.autoUpdate = t.autoUpdate);
          var _e299 = t.levels;

          for (var _t325 = 0; _t325 < _e299.length; _t325++) {
            var _n272 = _e299[_t325],
                _i204 = r.getObjectByProperty("uuid", _n272.object);

            void 0 !== _i204 && r.addLevel(_i204, _n272.distance);
          }
        }

        return r;
      }
    }, {
      key: "bindSkeletons",
      value: function bindSkeletons(t, e) {
        0 !== Object.keys(e).length && t.traverse(function (t) {
          if (!0 === t.isSkinnedMesh && void 0 !== t.skeleton) {
            var _n273 = e[t.skeleton];
            void 0 === _n273 ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", t.skeleton) : t.bind(_n273, t.bindMatrix);
          }
        });
      }
    }, {
      key: "setTexturePath",
      value: function setTexturePath(t) {
        return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t);
      }
    }]);

    return _class13;
  }(ll), t.ObjectSpaceNormalMap = 1, t.OctahedronBufferGeometry = wo, t.OctahedronGeometry = wo, t.OneFactor = 201, t.OneMinusDstAlphaFactor = 207, t.OneMinusDstColorFactor = 209, t.OneMinusSrcAlphaFactor = 205, t.OneMinusSrcColorFactor = 203, t.OrthographicCamera = Ql, t.PCFShadowMap = 1, t.PCFSoftShadowMap = 2, t.PMREMGenerator = /*#__PURE__*/function () {
    function _class14(t) {
      _classCallCheck(this, _class14);

      this._renderer = t, this._pingPongRenderTarget = null, this._blurMaterial = function (t) {
        var e = new Float32Array(t),
            n = new Rt(0, 1, 0);
        return new No({
          name: "SphericalGaussianBlur",
          defines: {
            n: t
          },
          uniforms: {
            envMap: {
              value: null
            },
            samples: {
              value: 1
            },
            weights: {
              value: e
            },
            latitudinal: {
              value: !1
            },
            dTheta: {
              value: 0
            },
            mipInt: {
              value: 0
            },
            poleAxis: {
              value: n
            },
            inputEncoding: {
              value: Bh[3e3]
            },
            outputEncoding: {
              value: Bh[3e3]
            }
          },
          vertexShader: tu(),
          fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t".concat(eu(), "\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t"),
          blending: 0,
          depthTest: !1,
          depthWrite: !1
        });
      }(Nh), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial);
    }

    _createClass(_class14, [{
      key: "fromScene",
      value: function fromScene(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .1;
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
        Vh = this._renderer.getRenderTarget();

        var r = this._allocateTargets();

        return this._sceneToCubeUV(t, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
      }
    }, {
      key: "fromEquirectangular",
      value: function fromEquirectangular(t) {
        return this._fromTexture(t);
      }
    }, {
      key: "fromCubemap",
      value: function fromCubemap(t) {
        return this._fromTexture(t);
      }
    }, {
      key: "compileCubemapShader",
      value: function compileCubemapShader() {
        null === this._cubemapShader && (this._cubemapShader = $h(), this._compileMaterial(this._cubemapShader));
      }
    }, {
      key: "compileEquirectangularShader",
      value: function compileEquirectangularShader() {
        null === this._equirectShader && (this._equirectShader = Kh(), this._compileMaterial(this._equirectShader));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._blurMaterial.dispose(), null !== this._cubemapShader && this._cubemapShader.dispose(), null !== this._equirectShader && this._equirectShader.dispose();

        for (var _t326 = 0; _t326 < Hh.length; _t326++) {
          Hh[_t326].dispose();
        }
      }
    }, {
      key: "_cleanup",
      value: function _cleanup(t) {
        this._pingPongRenderTarget.dispose(), this._renderer.setRenderTarget(Vh), t.scissorTest = !1, Qh(t, 0, 0, t.width, t.height);
      }
    }, {
      key: "_fromTexture",
      value: function _fromTexture(t) {
        Vh = this._renderer.getRenderTarget();

        var e = this._allocateTargets(t);

        return this._textureToCubeUV(t, e), this._applyPMREM(e), this._cleanup(e), e;
      }
    }, {
      key: "_allocateTargets",
      value: function _allocateTargets(t) {
        var e = {
          magFilter: p,
          minFilter: p,
          generateMipmaps: !1,
          type: x,
          format: 1023,
          encoding: Yh(t) ? t.encoding : J,
          depthBuffer: !1
        },
            n = Jh(e);
        return n.depthBuffer = !t, this._pingPongRenderTarget = Jh(e), n;
      }
    }, {
      key: "_compileMaterial",
      value: function _compileMaterial(t) {
        var e = new jn(Hh[0], t);

        this._renderer.compile(e, Oh);
      }
    }, {
      key: "_sceneToCubeUV",
      value: function _sceneToCubeUV(t, e, n, i) {
        var r = new $n(90, 1, e, n),
            s = [1, -1, 1, 1, 1, 1],
            a = [1, 1, 1, -1, -1, -1],
            o = this._renderer,
            l = o.autoClear,
            c = o.outputEncoding,
            h = o.toneMapping;
        o.getClearColor(kh), o.toneMapping = 0, o.outputEncoding = X, o.autoClear = !1;
        var u = !1;
        var d = t.background;

        if (d) {
          if (d.isColor) {
            zh.color.copy(d).convertSRGBToLinear(), t.background = null;

            var _e300 = Xh(zh.color);

            zh.opacity = _e300, u = !0;
          }
        } else {
          zh.color.copy(kh).convertSRGBToLinear();

          var _t327 = Xh(zh.color);

          zh.opacity = _t327, u = !0;
        }

        for (var _e301 = 0; _e301 < 6; _e301++) {
          var _n274 = _e301 % 3;

          0 == _n274 ? (r.up.set(0, s[_e301], 0), r.lookAt(a[_e301], 0, 0)) : 1 == _n274 ? (r.up.set(0, 0, s[_e301]), r.lookAt(0, a[_e301], 0)) : (r.up.set(0, s[_e301], 0), r.lookAt(0, 0, a[_e301])), Qh(i, _n274 * Ph, _e301 > 2 ? Ph : 0, Ph, Ph), o.setRenderTarget(i), u && o.render(Fh, r), o.render(t, r);
        }

        o.toneMapping = h, o.outputEncoding = c, o.autoClear = l;
      }
    }, {
      key: "_textureToCubeUV",
      value: function _textureToCubeUV(t, e) {
        var n = this._renderer;
        t.isCubeTexture ? null == this._cubemapShader && (this._cubemapShader = $h()) : null == this._equirectShader && (this._equirectShader = Kh());
        var i = t.isCubeTexture ? this._cubemapShader : this._equirectShader,
            r = new jn(Hh[0], i),
            s = i.uniforms;
        s.envMap.value = t, t.isCubeTexture || s.texelSize.value.set(1 / t.image.width, 1 / t.image.height), s.inputEncoding.value = Bh[t.encoding], s.outputEncoding.value = Bh[e.texture.encoding], Qh(e, 0, 0, 3 * Ph, 2 * Ph), n.setRenderTarget(e), n.render(r, Oh);
      }
    }, {
      key: "_applyPMREM",
      value: function _applyPMREM(t) {
        var e = this._renderer,
            n = e.autoClear;
        e.autoClear = !1;

        for (var _e302 = 1; _e302 < Ih; _e302++) {
          var _n275 = Math.sqrt(Uh[_e302] * Uh[_e302] - Uh[_e302 - 1] * Uh[_e302 - 1]),
              _i205 = qh[(_e302 - 1) % qh.length];

          this._blur(t, _e302 - 1, _e302, _n275, _i205);
        }

        e.autoClear = n;
      }
    }, {
      key: "_blur",
      value: function _blur(t, e, n, i, r) {
        var s = this._pingPongRenderTarget;
        this._halfBlur(t, s, e, n, i, "latitudinal", r), this._halfBlur(s, t, n, n, i, "longitudinal", r);
      }
    }, {
      key: "_halfBlur",
      value: function _halfBlur(t, e, n, i, r, s, a) {
        var o = this._renderer,
            l = this._blurMaterial;
        "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
        var c = new jn(Hh[i], l),
            h = l.uniforms,
            u = Gh[n] - 1,
            d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39,
            p = r / d,
            m = isFinite(r) ? 1 + Math.floor(3 * p) : Nh;
        m > Nh && console.warn("sigmaRadians, ".concat(r, ", is too large and will clip, as it requested ").concat(m, " samples when the maximum is set to 20"));
        var f = [];
        var g = 0;

        for (var _t328 = 0; _t328 < Nh; ++_t328) {
          var _e303 = _t328 / p,
              _n276 = Math.exp(-_e303 * _e303 / 2);

          f.push(_n276), 0 == _t328 ? g += _n276 : _t328 < m && (g += 2 * _n276);
        }

        for (var _t329 = 0; _t329 < f.length; _t329++) {
          f[_t329] = f[_t329] / g;
        }

        h.envMap.value = t.texture, h.samples.value = m, h.weights.value = f, h.latitudinal.value = "latitudinal" === s, a && (h.poleAxis.value = a), h.dTheta.value = d, h.mipInt.value = 8 - n, h.inputEncoding.value = Bh[t.texture.encoding], h.outputEncoding.value = Bh[t.texture.encoding];
        var v = Gh[i];
        Qh(e, 3 * Math.max(0, Ph - 2 * v), (0 === i ? 0 : 2 * Ph) + 2 * v * (i > 4 ? i - 8 + 4 : 0), 3 * v, 2 * v), o.setRenderTarget(e), o.render(c, Oh);
      }
    }]);

    return _class14;
  }(), t.ParametricBufferGeometry = bo, t.ParametricGeometry = bo, t.Particle = function (t) {
    return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new Vs(t);
  }, t.ParticleBasicMaterial = function (t) {
    return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new wa(t);
  }, t.ParticleSystem = function (t, e) {
    return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new Ea(t, e);
  }, t.ParticleSystemMaterial = function (t) {
    return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new wa(t);
  }, t.Path = zl, t.PerspectiveCamera = $n, t.Plane = Be, t.PlaneBufferGeometry = ci, t.PlaneGeometry = ci, t.PlaneHelper = /*#__PURE__*/function (_ga3) {
    _inherits(_class15, _ga3);

    var _super150 = _createSuper(_class15);

    function _class15(t) {
      var _this118;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 16776960;

      _classCallCheck(this, _class15);

      var i = n,
          r = new An();
      r.setAttribute("position", new fn([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), r.computeBoundingSphere(), _this118 = _super150.call(this, r, new ha({
        color: i,
        toneMapped: !1
      })), _this118.type = "PlaneHelper", _this118.plane = t, _this118.size = e;
      var s = new An();
      s.setAttribute("position", new fn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), s.computeBoundingSphere(), _this118.add(new jn(s, new nn({
        color: i,
        opacity: .2,
        transparent: !0,
        depthWrite: !1,
        toneMapped: !1
      })));
      return _this118;
    }

    _createClass(_class15, [{
      key: "updateMatrixWorld",
      value: function updateMatrixWorld(t) {
        var e = -this.plane.constant;
        Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? 1 : 0, this.lookAt(this.plane.normal), _get(_getPrototypeOf(_class15.prototype), "updateMatrixWorld", this).call(this, t);
      }
    }]);

    return _class15;
  }(ga), t.PointCloud = function (t, e) {
    return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new Ea(t, e);
  }, t.PointCloudMaterial = function (t) {
    return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new wa(t);
  }, t.PointLight = Jl, t.PointLightHelper = /*#__PURE__*/function (_jn3) {
    _inherits(_class16, _jn3);

    var _super151 = _createSuper(_class16);

    function _class16(t, e, n) {
      var _this119;

      _classCallCheck(this, _class16);

      _this119 = _super151.call(this, new To(e, 4, 2), new nn({
        wireframe: !0,
        fog: !1,
        toneMapped: !1
      })), _this119.light = t, _this119.light.updateMatrixWorld(), _this119.color = n, _this119.type = "PointLightHelper", _this119.matrix = _this119.light.matrixWorld, _this119.matrixAutoUpdate = !1, _this119.update();
      return _this119;
    }

    _createClass(_class16, [{
      key: "dispose",
      value: function dispose() {
        this.geometry.dispose(), this.material.dispose();
      }
    }, {
      key: "update",
      value: function update() {
        void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
      }
    }]);

    return _class16;
  }(jn), t.Points = Ea, t.PointsMaterial = wa, t.PolarGridHelper = /*#__PURE__*/function (_xa7) {
    _inherits(_class17, _xa7);

    var _super152 = _createSuper(_class17);

    function _class17() {
      var _this120;

      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 64;
      var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 4473924;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 8947848;

      _classCallCheck(this, _class17);

      r = new en(r), s = new en(s);
      var a = [],
          o = [];

      for (var _n277 = 0; _n277 <= e; _n277++) {
        var _i206 = _n277 / e * (2 * Math.PI),
            _l33 = Math.sin(_i206) * t,
            _c25 = Math.cos(_i206) * t;

        a.push(0, 0, 0), a.push(_l33, 0, _c25);

        var _h16 = 1 & _n277 ? r : s;

        o.push(_h16.r, _h16.g, _h16.b), o.push(_h16.r, _h16.g, _h16.b);
      }

      for (var _e304 = 0; _e304 <= n; _e304++) {
        var _l34 = 1 & _e304 ? r : s,
            _c26 = t - t / n * _e304;

        for (var _t330 = 0; _t330 < i; _t330++) {
          var _e305 = _t330 / i * (2 * Math.PI),
              _n278 = Math.sin(_e305) * _c26,
              _r166 = Math.cos(_e305) * _c26;

          a.push(_n278, 0, _r166), o.push(_l34.r, _l34.g, _l34.b), _e305 = (_t330 + 1) / i * (2 * Math.PI), _n278 = Math.sin(_e305) * _c26, _r166 = Math.cos(_e305) * _c26, a.push(_n278, 0, _r166), o.push(_l34.r, _l34.g, _l34.b);
        }
      }

      var l = new An();
      l.setAttribute("position", new fn(a, 3)), l.setAttribute("color", new fn(o, 3));
      _this120 = _super152.call(this, l, new ha({
        vertexColors: !0,
        toneMapped: !1
      })), _this120.type = "PolarGridHelper";
      return _this120;
    }

    return _class17;
  }(xa), t.PolyhedronBufferGeometry = Ba, t.PolyhedronGeometry = Ba, t.PositionalAudio = /*#__PURE__*/function (_Rc) {
    _inherits(_class18, _Rc);

    var _super153 = _createSuper(_class18);

    function _class18(t) {
      var _this121;

      _classCallCheck(this, _class18);

      _this121 = _super153.call(this, t), _this121.panner = _this121.context.createPanner(), _this121.panner.panningModel = "HRTF", _this121.panner.connect(_this121.gain);
      return _this121;
    }

    _createClass(_class18, [{
      key: "getOutput",
      value: function getOutput() {
        return this.panner;
      }
    }, {
      key: "getRefDistance",
      value: function getRefDistance() {
        return this.panner.refDistance;
      }
    }, {
      key: "setRefDistance",
      value: function setRefDistance(t) {
        return this.panner.refDistance = t, this;
      }
    }, {
      key: "getRolloffFactor",
      value: function getRolloffFactor() {
        return this.panner.rolloffFactor;
      }
    }, {
      key: "setRolloffFactor",
      value: function setRolloffFactor(t) {
        return this.panner.rolloffFactor = t, this;
      }
    }, {
      key: "getDistanceModel",
      value: function getDistanceModel() {
        return this.panner.distanceModel;
      }
    }, {
      key: "setDistanceModel",
      value: function setDistanceModel(t) {
        return this.panner.distanceModel = t, this;
      }
    }, {
      key: "getMaxDistance",
      value: function getMaxDistance() {
        return this.panner.maxDistance;
      }
    }, {
      key: "setMaxDistance",
      value: function setMaxDistance(t) {
        return this.panner.maxDistance = t, this;
      }
    }, {
      key: "setDirectionalCone",
      value: function setDirectionalCone(t, e, n) {
        return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = n, this;
      }
    }, {
      key: "updateMatrixWorld",
      value: function updateMatrixWorld(t) {
        if (_get(_getPrototypeOf(_class18.prototype), "updateMatrixWorld", this).call(this, t), !0 === this.hasPlaybackControl && !1 === this.isPlaying) return;
        this.matrixWorld.decompose(Cc, Pc, Dc), Ic.set(0, 0, 1).applyQuaternion(Pc);
        var e = this.panner;

        if (e.positionX) {
          var _t331 = this.context.currentTime + this.listener.timeDelta;

          e.positionX.linearRampToValueAtTime(Cc.x, _t331), e.positionY.linearRampToValueAtTime(Cc.y, _t331), e.positionZ.linearRampToValueAtTime(Cc.z, _t331), e.orientationX.linearRampToValueAtTime(Ic.x, _t331), e.orientationY.linearRampToValueAtTime(Ic.y, _t331), e.orientationZ.linearRampToValueAtTime(Ic.z, _t331);
        } else e.setPosition(Cc.x, Cc.y, Cc.z), e.setOrientation(Ic.x, Ic.y, Ic.z);
      }
    }]);

    return _class18;
  }(Rc), t.PropertyBinding = qc, t.PropertyMixer = Bc, t.QuadraticBezierCurve = Pl, t.QuadraticBezierCurve3 = Dl, t.Quaternion = Lt, t.QuaternionKeyframeTrack = tl, t.QuaternionLinearInterpolant = $o, t.REVISION = e, t.RGBADepthPacking = 3201, t.RGBAFormat = E, t.RGBAIntegerFormat = 1033, t.RGBA_ASTC_10x10_Format = 37819, t.RGBA_ASTC_10x5_Format = 37816, t.RGBA_ASTC_10x6_Format = 37817, t.RGBA_ASTC_10x8_Format = 37818, t.RGBA_ASTC_12x10_Format = 37820, t.RGBA_ASTC_12x12_Format = 37821, t.RGBA_ASTC_4x4_Format = 37808, t.RGBA_ASTC_5x4_Format = 37809, t.RGBA_ASTC_5x5_Format = 37810, t.RGBA_ASTC_6x5_Format = 37811, t.RGBA_ASTC_6x6_Format = 37812, t.RGBA_ASTC_8x5_Format = 37813, t.RGBA_ASTC_8x6_Format = 37814, t.RGBA_ASTC_8x8_Format = 37815, t.RGBA_BPTC_Format = 36492, t.RGBA_ETC2_EAC_Format = O, t.RGBA_PVRTC_2BPPV1_Format = z, t.RGBA_PVRTC_4BPPV1_Format = B, t.RGBA_S3TC_DXT1_Format = C, t.RGBA_S3TC_DXT3_Format = P, t.RGBA_S3TC_DXT5_Format = D, t.RGBDEncoding = $, t.RGBEEncoding = J, t.RGBEFormat = 1023, t.RGBFormat = T, t.RGBIntegerFormat = 1032, t.RGBM16Encoding = K, t.RGBM7Encoding = Q, t.RGB_ETC1_Format = 36196, t.RGB_ETC2_Format = F, t.RGB_PVRTC_2BPPV1_Format = N, t.RGB_PVRTC_4BPPV1_Format = I, t.RGB_S3TC_DXT1_Format = R, t.RGFormat = 1030, t.RGIntegerFormat = 1031, t.RawShaderMaterial = No, t.Ray = se, t.Raycaster = /*#__PURE__*/function () {
    function _class19(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1 / 0;

      _classCallCheck(this, _class19);

      this.ray = new se(t, e), this.near = n, this.far = i, this.camera = null, this.layers = new ve(), this.params = {
        Mesh: {},
        Line: {
          threshold: 1
        },
        LOD: {},
        Points: {
          threshold: 1
        },
        Sprite: {}
      };
    }

    _createClass(_class19, [{
      key: "set",
      value: function set(t, e) {
        this.ray.set(t, e);
      }
    }, {
      key: "setFromCamera",
      value: function setFromCamera(t, e) {
        e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
      }
    }, {
      key: "intersectObject",
      value: function intersectObject(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        return th(t, this, n, e), n.sort($c), n;
      }
    }, {
      key: "intersectObjects",
      value: function intersectObjects(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        for (var _i207 = 0, _r167 = t.length; _i207 < _r167; _i207++) {
          th(t[_i207], this, n, e);
        }

        return n.sort($c), n;
      }
    }]);

    return _class19;
  }(), t.RectAreaLight = ec, t.RedFormat = 1028, t.RedIntegerFormat = 1029, t.ReinhardToneMapping = 2, t.RepeatWrapping = h, t.ReplaceStencilOp = 7681, t.ReverseSubtractEquation = 102, t.RingBufferGeometry = Mo, t.RingGeometry = Mo, t.SRGB8_ALPHA8_ASTC_10x10_Format = 37851, t.SRGB8_ALPHA8_ASTC_10x5_Format = 37848, t.SRGB8_ALPHA8_ASTC_10x6_Format = 37849, t.SRGB8_ALPHA8_ASTC_10x8_Format = 37850, t.SRGB8_ALPHA8_ASTC_12x10_Format = 37852, t.SRGB8_ALPHA8_ASTC_12x12_Format = 37853, t.SRGB8_ALPHA8_ASTC_4x4_Format = 37840, t.SRGB8_ALPHA8_ASTC_5x4_Format = 37841, t.SRGB8_ALPHA8_ASTC_5x5_Format = 37842, t.SRGB8_ALPHA8_ASTC_6x5_Format = 37843, t.SRGB8_ALPHA8_ASTC_6x6_Format = 37844, t.SRGB8_ALPHA8_ASTC_8x5_Format = 37845, t.SRGB8_ALPHA8_ASTC_8x6_Format = 37846, t.SRGB8_ALPHA8_ASTC_8x8_Format = 37847, t.Scene = Ts, t.SceneUtils = nu, t.ShaderChunk = hi, t.ShaderLib = di, t.ShaderMaterial = Qn, t.ShadowMaterial = Io, t.Shape = Fl, t.ShapeBufferGeometry = So, t.ShapeGeometry = So, t.ShapePath = pc, t.ShapeUtils = mo, t.ShortType = 1011, t.Skeleton = ra, t.SkeletonHelper = uh, t.SkinnedMesh = $s, t.SmoothShading = 2, t.Sphere = Qt, t.SphereBufferGeometry = To, t.SphereGeometry = To, t.Spherical = /*#__PURE__*/function () {
    function _class20() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      _classCallCheck(this, _class20);

      return this.radius = t, this.phi = e, this.theta = n, this;
    }

    _createClass(_class20, [{
      key: "set",
      value: function set(t, e, n) {
        return this.radius = t, this.phi = e, this.theta = n, this;
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
      }
    }, {
      key: "makeSafe",
      value: function makeSafe() {
        var t = 1e-6;
        return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this;
      }
    }, {
      key: "setFromVector3",
      value: function setFromVector3(t) {
        return this.setFromCartesianCoords(t.x, t.y, t.z);
      }
    }, {
      key: "setFromCartesianCoords",
      value: function setFromCartesianCoords(t, e, n) {
        return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(ht(e / this.radius, -1, 1))), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return _class20;
  }(), t.SphericalHarmonics3 = nc, t.SplineCurve = Il, t.SpotLight = jl, t.SpotLightHelper = /*#__PURE__*/function (_Pe18) {
    _inherits(_class21, _Pe18);

    var _super154 = _createSuper(_class21);

    function _class21(t, e) {
      var _this122;

      _classCallCheck(this, _class21);

      _this122 = _super154.call(this), _this122.light = t, _this122.light.updateMatrixWorld(), _this122.matrix = t.matrixWorld, _this122.matrixAutoUpdate = !1, _this122.color = e;
      var n = new An(),
          i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1];

      for (var _t332 = 0, _e306 = 1, _n279 = 32; _t332 < _n279; _t332++, _e306++) {
        var _r168 = _t332 / _n279 * Math.PI * 2,
            _s96 = _e306 / _n279 * Math.PI * 2;

        i.push(Math.cos(_r168), Math.sin(_r168), 1, Math.cos(_s96), Math.sin(_s96), 1);
      }

      n.setAttribute("position", new fn(i, 3));
      var r = new ha({
        fog: !1,
        toneMapped: !1
      });
      _this122.cone = new xa(n, r), _this122.add(_this122.cone), _this122.update();
      return _this122;
    }

    _createClass(_class21, [{
      key: "dispose",
      value: function dispose() {
        this.cone.geometry.dispose(), this.cone.material.dispose();
      }
    }, {
      key: "update",
      value: function update() {
        this.light.updateMatrixWorld();
        var t = this.light.distance ? this.light.distance : 1e3,
            e = t * Math.tan(this.light.angle);
        this.cone.scale.set(e, e, t), oh.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(oh), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
      }
    }]);

    return _class21;
  }(Pe), t.Sprite = Vs, t.SpriteMaterial = Rs, t.SrcAlphaFactor = 204, t.SrcAlphaSaturateFactor = 210, t.SrcColorFactor = 202, t.StaticCopyUsage = 35046, t.StaticDrawUsage = et, t.StaticReadUsage = 35045, t.StereoCamera = /*#__PURE__*/function () {
    function _class22() {
      _classCallCheck(this, _class22);

      this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new $n(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new $n(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
        focus: null,
        fov: null,
        aspect: null,
        near: null,
        far: null,
        zoom: null,
        eyeSep: null
      };
    }

    _createClass(_class22, [{
      key: "update",
      value: function update(t) {
        var e = this._cache;

        if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
          e.focus = t.focus, e.fov = t.fov, e.aspect = t.aspect * this.aspect, e.near = t.near, e.far = t.far, e.zoom = t.zoom, e.eyeSep = this.eyeSep;

          var _n280 = t.projectionMatrix.clone(),
              _i208 = e.eyeSep / 2,
              _r169 = _i208 * e.near / e.focus,
              _s97 = e.near * Math.tan(ot * e.fov * .5) / e.zoom;

          var _a80, _o47;

          bc.elements[12] = -_i208, wc.elements[12] = _i208, _a80 = -_s97 * e.aspect + _r169, _o47 = _s97 * e.aspect + _r169, _n280.elements[0] = 2 * e.near / (_o47 - _a80), _n280.elements[8] = (_o47 + _a80) / (_o47 - _a80), this.cameraL.projectionMatrix.copy(_n280), _a80 = -_s97 * e.aspect - _r169, _o47 = _s97 * e.aspect - _r169, _n280.elements[0] = 2 * e.near / (_o47 - _a80), _n280.elements[8] = (_o47 + _a80) / (_o47 - _a80), this.cameraR.projectionMatrix.copy(_n280);
        }

        this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(bc), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(wc);
      }
    }]);

    return _class22;
  }(), t.StreamCopyUsage = 35042, t.StreamDrawUsage = 35040, t.StreamReadUsage = 35041, t.StringKeyframeTrack = el, t.SubtractEquation = 101, t.SubtractiveBlending = 3, t.TOUCH = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
  }, t.TangentSpaceNormalMap = 0, t.TetrahedronBufferGeometry = Eo, t.TetrahedronGeometry = Eo, t.TextBufferGeometry = Ao, t.TextGeometry = Ao, t.Texture = bt, t.TextureLoader = ml, t.TorusBufferGeometry = Lo, t.TorusGeometry = Lo, t.TorusKnotBufferGeometry = Ro, t.TorusKnotGeometry = Ro, t.Triangle = qe, t.TriangleFanDrawMode = 2, t.TriangleStripDrawMode = 1, t.TrianglesDrawMode = 0, t.TubeBufferGeometry = Co, t.TubeGeometry = Co, t.UVMapping = i, t.Uint16Attribute = function (t, e) {
    return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new un(t, e);
  }, t.Uint16BufferAttribute = un, t.Uint32Attribute = function (t, e) {
    return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new pn(t, e);
  }, t.Uint32BufferAttribute = pn, t.Uint8Attribute = function (t, e) {
    return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new ln(t, e);
  }, t.Uint8BufferAttribute = ln, t.Uint8ClampedAttribute = function (t, e) {
    return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new cn(t, e);
  }, t.Uint8ClampedBufferAttribute = cn, t.Uniform = Jc, t.UniformsLib = ui, t.UniformsUtils = Jn, t.UnsignedByteType = x, t.UnsignedInt248Type = S, t.UnsignedIntType = w, t.UnsignedShort4444Type = 1017, t.UnsignedShort5551Type = 1018, t.UnsignedShort565Type = 1019, t.UnsignedShortType = _, t.VSMShadowMap = 3, t.Vector2 = vt, t.Vector3 = Rt, t.Vector4 = St, t.VectorKeyframeTrack = nl, t.Vertex = function (t, e, n) {
    return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new Rt(t, e, n);
  }, t.VertexColors = 2, t.VideoTexture = La, t.WebGL1Renderer = bs, t.WebGLCubeRenderTarget = ii, t.WebGLMultipleRenderTargets = Et, t.WebGLMultisampleRenderTarget = At, t.WebGLRenderTarget = Tt, t.WebGLRenderTargetCube = function (t, e, n) {
    return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."), new ii(t, n);
  }, t.WebGLRenderer = ws, t.WebGLUtils = ms, t.WireframeGeometry = Po, t.WireframeHelper = function (t, e) {
    return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new xa(new Po(t.geometry), new ha({
      color: void 0 !== e ? e : 16777215
    }));
  }, t.WrapAroundEnding = W, t.XHRLoader = function (t) {
    return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new hl(t);
  }, t.ZeroCurvatureEnding = k, t.ZeroFactor = 200, t.ZeroSlopeEnding = V, t.ZeroStencilOp = 0, t.sRGBEncoding = Y, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56255" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","three.min.js"], null)
//# sourceMappingURL=/three.min.aa4986ad.js.map