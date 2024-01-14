function gm(e, t) {
  for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
          for (const o in r)
              if (o !== "default" && !(o in e)) {
                  const l = Object.getOwnPropertyDescriptor(r, o);
                  l && Object.defineProperty(e, o, l.get ? l : { enumerable: !0, get: () => r[o] });
              }
      }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
      for (const l of o) if (l.type === "childList") for (const i of l.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
      const l = {};
      return (
          o.integrity && (l.integrity = o.integrity),
          o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
          o.crossOrigin === "use-credentials" ? (l.credentials = "include") : o.crossOrigin === "anonymous" ? (l.credentials = "omit") : (l.credentials = "same-origin"),
          l
      );
  }
  function r(o) {
      if (o.ep) return;
      o.ep = !0;
      const l = n(o);
      fetch(o.href, l);
  }
})();
function ym(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var od = { exports: {} },
  li = {},
  ld = { exports: {} },
  V = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/ var zo = Symbol.for("react.element"),
  xm = Symbol.for("react.portal"),
  wm = Symbol.for("react.fragment"),
  Sm = Symbol.for("react.strict_mode"),
  km = Symbol.for("react.profiler"),
  Em = Symbol.for("react.provider"),
  Cm = Symbol.for("react.context"),
  Pm = Symbol.for("react.forward_ref"),
  jm = Symbol.for("react.suspense"),
  Nm = Symbol.for("react.memo"),
  Rm = Symbol.for("react.lazy"),
  cc = Symbol.iterator;
function _m(e) {
  return e === null || typeof e != "object" ? null : ((e = (cc && e[cc]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var id = {
      isMounted: function () {
          return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
  },
  ad = Object.assign,
  ud = {};
function Or(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = ud), (this.updater = n || id);
}
Or.prototype.isReactComponent = {};
Or.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Or.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sd() {}
sd.prototype = Or.prototype;
function Bu(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = ud), (this.updater = n || id);
}
var Wu = (Bu.prototype = new sd());
Wu.constructor = Bu;
ad(Wu, Or.prototype);
Wu.isPureReactComponent = !0;
var fc = Array.isArray,
  cd = Object.prototype.hasOwnProperty,
  Vu = { current: null },
  fd = { key: !0, ref: !0, __self: !0, __source: !0 };
function dd(e, t, n) {
  var r,
      o = {},
      l = null,
      i = null;
  if (t != null) for (r in (t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)) cd.call(t, r) && !fd.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
      for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
      o.children = u;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: zo, type: e, key: l, ref: i, props: o, _owner: Vu.current };
}
function Lm(e, t) {
  return { $$typeof: zo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Hu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zo;
}
function Tm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
      "$" +
      e.replace(/[=:]/g, function (n) {
          return t[n];
      })
  );
}
var dc = /\/+/g;
function ea(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Tm("" + e.key) : t.toString(36);
}
function dl(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
      switch (l) {
          case "string":
          case "number":
              i = !0;
              break;
          case "object":
              switch (e.$$typeof) {
                  case zo:
                  case xm:
                      i = !0;
              }
      }
  if (i)
      return (
          (i = e),
          (o = o(i)),
          (e = r === "" ? "." + ea(i, 0) : r),
          fc(o)
              ? ((n = ""),
                e != null && (n = e.replace(dc, "$&/") + "/"),
                dl(o, t, n, "", function (s) {
                    return s;
                }))
              : o != null && (Hu(o) && (o = Lm(o, n + (!o.key || (i && i.key === o.key) ? "" : ("" + o.key).replace(dc, "$&/") + "/") + e)), t.push(o)),
          1
      );
  if (((i = 0), (r = r === "" ? "." : r + ":"), fc(e)))
      for (var a = 0; a < e.length; a++) {
          l = e[a];
          var u = r + ea(l, a);
          i += dl(l, t, n, u, o);
      }
  else if (((u = _m(e)), typeof u == "function")) for (e = u.call(e), a = 0; !(l = e.next()).done; ) (l = l.value), (u = r + ea(l, a++)), (i += dl(l, t, n, u, o));
  else if (l === "object")
      throw (
          ((t = String(e)),
          Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."))
      );
  return i;
}
function Ko(e, t, n) {
  if (e == null) return e;
  var r = [],
      o = 0;
  return (
      dl(e, r, "", "", function (l) {
          return t.call(n, l, o++);
      }),
      r
  );
}
function Om(e) {
  if (e._status === -1) {
      var t = e._result;
      (t = t()),
          t.then(
              function (n) {
                  (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
              },
              function (n) {
                  (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
              }
          ),
          e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ze = { current: null },
  pl = { transition: null },
  $m = { ReactCurrentDispatcher: ze, ReactCurrentBatchConfig: pl, ReactCurrentOwner: Vu };
V.Children = {
  map: Ko,
  forEach: function (e, t, n) {
      Ko(
          e,
          function () {
              t.apply(this, arguments);
          },
          n
      );
  },
  count: function (e) {
      var t = 0;
      return (
          Ko(e, function () {
              t++;
          }),
          t
      );
  },
  toArray: function (e) {
      return (
          Ko(e, function (t) {
              return t;
          }) || []
      );
  },
  only: function (e) {
      if (!Hu(e)) throw Error("React.Children.only expected to receive a single React element child.");
      return e;
  },
};
V.Component = Or;
V.Fragment = wm;
V.Profiler = km;
V.PureComponent = Bu;
V.StrictMode = Sm;
V.Suspense = jm;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $m;
V.cloneElement = function (e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ad({}, e.props),
      o = e.key,
      l = e.ref,
      i = e._owner;
  if (t != null) {
      if ((t.ref !== void 0 && ((l = t.ref), (i = Vu.current)), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)) var a = e.type.defaultProps;
      for (u in t) cd.call(t, u) && !fd.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
      a = Array(u);
      for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
      r.children = a;
  }
  return { $$typeof: zo, type: e.type, key: o, ref: l, props: r, _owner: i };
};
V.createContext = function (e) {
  return (e = { $$typeof: Cm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }), (e.Provider = { $$typeof: Em, _context: e }), (e.Consumer = e);
};
V.createElement = dd;
V.createFactory = function (e) {
  var t = dd.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: Pm, render: e };
};
V.isValidElement = Hu;
V.lazy = function (e) {
  return { $$typeof: Rm, _payload: { _status: -1, _result: e }, _init: Om };
};
V.memo = function (e, t) {
  return { $$typeof: Nm, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = pl.transition;
  pl.transition = {};
  try {
      e();
  } finally {
      pl.transition = t;
  }
};
V.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
V.useCallback = function (e, t) {
  return ze.current.useCallback(e, t);
};
V.useContext = function (e) {
  return ze.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return ze.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return ze.current.useEffect(e, t);
};
V.useId = function () {
  return ze.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return ze.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return ze.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return ze.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return ze.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return ze.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return ze.current.useRef(e);
};
V.useState = function (e) {
  return ze.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return ze.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return ze.current.useTransition();
};
V.version = "18.2.0";
ld.exports = V;
var C = ld.exports;
const pd = ym(C),
  Mm = gm({ __proto__: null, default: pd }, [C]);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/ var Dm = C,
  zm = Symbol.for("react.element"),
  Im = Symbol.for("react.fragment"),
  Am = Object.prototype.hasOwnProperty,
  bm = Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Fm = { key: !0, ref: !0, __self: !0, __source: !0 };
function hd(e, t, n) {
  var r,
      o = {},
      l = null,
      i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Am.call(t, r) && !Fm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: zm, type: e, key: l, ref: i, props: o, _owner: bm.current };
}
li.Fragment = Im;
li.jsx = hd;
li.jsxs = hd;
od.exports = li;
var w = od.exports,
  za = {},
  md = { exports: {} },
  Ge = {},
  vd = { exports: {} },
  gd = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/ (function (e) {
  function t(L, I) {
      var U = L.length;
      L.push(I);
      e: for (; 0 < U; ) {
          var ae = (U - 1) >>> 1,
              me = L[ae];
          if (0 < o(me, I)) (L[ae] = I), (L[U] = me), (U = ae);
          else break e;
      }
  }
  function n(L) {
      return L.length === 0 ? null : L[0];
  }
  function r(L) {
      if (L.length === 0) return null;
      var I = L[0],
          U = L.pop();
      if (U !== I) {
          L[0] = U;
          e: for (var ae = 0, me = L.length, Kn = me >>> 1; ae < Kn; ) {
              var q = 2 * (ae + 1) - 1,
                  Nt = L[q],
                  xt = q + 1,
                  Yn = L[xt];
              if (0 > o(Nt, U)) xt < me && 0 > o(Yn, Nt) ? ((L[ae] = Yn), (L[xt] = U), (ae = xt)) : ((L[ae] = Nt), (L[q] = U), (ae = q));
              else if (xt < me && 0 > o(Yn, U)) (L[ae] = Yn), (L[xt] = U), (ae = xt);
              else break e;
          }
      }
      return I;
  }
  function o(L, I) {
      var U = L.sortIndex - I.sortIndex;
      return U !== 0 ? U : L.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
      var l = performance;
      e.unstable_now = function () {
          return l.now();
      };
  } else {
      var i = Date,
          a = i.now();
      e.unstable_now = function () {
          return i.now() - a;
      };
  }
  var u = [],
      s = [],
      c = 1,
      p = null,
      d = 3,
      v = !1,
      y = !1,
      x = !1,
      E = typeof setTimeout == "function" ? setTimeout : null,
      h = typeof clearTimeout == "function" ? clearTimeout : null,
      f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(L) {
      for (var I = n(s); I !== null; ) {
          if (I.callback === null) r(s);
          else if (I.startTime <= L) r(s), (I.sortIndex = I.expirationTime), t(u, I);
          else break;
          I = n(s);
      }
  }
  function m(L) {
      if (((x = !1), g(L), !y))
          if (n(u) !== null) (y = !0), Ve(P);
          else {
              var I = n(s);
              I !== null && yt(m, I.startTime - L);
          }
  }
  function P(L, I) {
      (y = !1), x && ((x = !1), h(T), (T = -1)), (v = !0);
      var U = d;
      try {
          for (g(I), p = n(u); p !== null && (!(p.expirationTime > I) || (L && !re())); ) {
              var ae = p.callback;
              if (typeof ae == "function") {
                  (p.callback = null), (d = p.priorityLevel);
                  var me = ae(p.expirationTime <= I);
                  (I = e.unstable_now()), typeof me == "function" ? (p.callback = me) : p === n(u) && r(u), g(I);
              } else r(u);
              p = n(u);
          }
          if (p !== null) var Kn = !0;
          else {
              var q = n(s);
              q !== null && yt(m, q.startTime - I), (Kn = !1);
          }
          return Kn;
      } finally {
          (p = null), (d = U), (v = !1);
      }
  }
  var _ = !1,
      R = null,
      T = -1,
      B = 5,
      M = -1;
  function re() {
      return !(e.unstable_now() - M < B);
  }
  function J() {
      if (R !== null) {
          var L = e.unstable_now();
          M = L;
          var I = !0;
          try {
              I = R(!0, L);
          } finally {
              I ? gt() : ((_ = !1), (R = null));
          }
      } else _ = !1;
  }
  var gt;
  if (typeof f == "function")
      gt = function () {
          f(J);
      };
  else if (typeof MessageChannel < "u") {
      var Ht = new MessageChannel(),
          Qt = Ht.port2;
      (Ht.port1.onmessage = J),
          (gt = function () {
              Qt.postMessage(null);
          });
  } else
      gt = function () {
          E(J, 0);
      };
  function Ve(L) {
      (R = L), _ || ((_ = !0), gt());
  }
  function yt(L, I) {
      T = E(function () {
          L(e.unstable_now());
      }, I);
  }
  (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (L) {
          L.callback = null;
      }),
      (e.unstable_continueExecution = function () {
          y || v || ((y = !0), Ve(P));
      }),
      (e.unstable_forceFrameRate = function (L) {
          0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (B = 0 < L ? Math.floor(1e3 / L) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
          return d;
      }),
      (e.unstable_getFirstCallbackNode = function () {
          return n(u);
      }),
      (e.unstable_next = function (L) {
          switch (d) {
              case 1:
              case 2:
              case 3:
                  var I = 3;
                  break;
              default:
                  I = d;
          }
          var U = d;
          d = I;
          try {
              return L();
          } finally {
              d = U;
          }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (L, I) {
          switch (L) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                  break;
              default:
                  L = 3;
          }
          var U = d;
          d = L;
          try {
              return I();
          } finally {
              d = U;
          }
      }),
      (e.unstable_scheduleCallback = function (L, I, U) {
          var ae = e.unstable_now();
          switch ((typeof U == "object" && U !== null ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? ae + U : ae)) : (U = ae), L)) {
              case 1:
                  var me = -1;
                  break;
              case 2:
                  me = 250;
                  break;
              case 5:
                  me = 1073741823;
                  break;
              case 4:
                  me = 1e4;
                  break;
              default:
                  me = 5e3;
          }
          return (
              (me = U + me),
              (L = { id: c++, callback: I, priorityLevel: L, startTime: U, expirationTime: me, sortIndex: -1 }),
              U > ae ? ((L.sortIndex = U), t(s, L), n(u) === null && L === n(s) && (x ? (h(T), (T = -1)) : (x = !0), yt(m, U - ae))) : ((L.sortIndex = me), t(u, L), y || v || ((y = !0), Ve(P))),
              L
          );
      }),
      (e.unstable_shouldYield = re),
      (e.unstable_wrapCallback = function (L) {
          var I = d;
          return function () {
              var U = d;
              d = I;
              try {
                  return L.apply(this, arguments);
              } finally {
                  d = U;
              }
          };
      });
})(gd);
vd.exports = gd;
var Um = vd.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/ var yd = C,
  Ye = Um;
function N(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var xd = new Set(),
  mo = {};
function Wn(e, t) {
  Sr(e, t), Sr(e + "Capture", t);
}
function Sr(e, t) {
  for (mo[e] = t, e = 0; e < t.length; e++) xd.add(t[e]);
}
var It = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Ia = Object.prototype.hasOwnProperty,
  Bm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  pc = {},
  hc = {};
function Wm(e) {
  return Ia.call(hc, e) ? !0 : Ia.call(pc, e) ? !1 : Bm.test(e) ? (hc[e] = !0) : ((pc[e] = !0), !1);
}
function Vm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
      case "function":
      case "symbol":
          return !0;
      case "boolean":
          return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
          return !1;
  }
}
function Hm(e, t, n, r) {
  if (t === null || typeof t > "u" || Vm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
      switch (n.type) {
          case 3:
              return !t;
          case 4:
              return t === !1;
          case 5:
              return isNaN(t);
          case 6:
              return isNaN(t) || 1 > t;
      }
  return !1;
}
function Ie(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4), (this.attributeName = r), (this.attributeNamespace = o), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = l), (this.removeEmptyString = i);
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  Re[e] = new Ie(e, 0, !1, e, null, !1, !1);
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Re[t] = new Ie(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Re[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  Re[e] = new Ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
      Re[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Re[e] = new Ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Re[e] = new Ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Re[e] = new Ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Re[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qu = /[\-:]([a-z])/g;
function Ku(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
      var t = e.replace(Qu, Ku);
      Re[t] = new Ie(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Qu, Ku);
  Re[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Qu, Ku);
  Re[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Re[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Re.xlinkHref = new Ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  Re[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yu(e, t, n, r) {
  var o = Re.hasOwnProperty(t) ? Re[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (Hm(t, n, o, r) && (n = null),
      r || o === null
          ? Wm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
          : o.mustUseProperty
          ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
          : ((t = o.attributeName), (r = o.attributeNamespace), n === null ? e.removeAttribute(t) : ((o = o.type), (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Wt = yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Yo = Symbol.for("react.element"),
  Jn = Symbol.for("react.portal"),
  qn = Symbol.for("react.fragment"),
  Xu = Symbol.for("react.strict_mode"),
  Aa = Symbol.for("react.profiler"),
  wd = Symbol.for("react.provider"),
  Sd = Symbol.for("react.context"),
  Gu = Symbol.for("react.forward_ref"),
  ba = Symbol.for("react.suspense"),
  Fa = Symbol.for("react.suspense_list"),
  Zu = Symbol.for("react.memo"),
  Zt = Symbol.for("react.lazy"),
  kd = Symbol.for("react.offscreen"),
  mc = Symbol.iterator;
function Ur(e) {
  return e === null || typeof e != "object" ? null : ((e = (mc && e[mc]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var ce = Object.assign,
  ta;
function qr(e) {
  if (ta === void 0)
      try {
          throw Error();
      } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          ta = (t && t[1]) || "";
      }
  return (
      `
` +
      ta +
      e
  );
}
var na = !1;
function ra(e, t) {
  if (!e || na) return "";
  na = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
      if (t)
          if (
              ((t = function () {
                  throw Error();
              }),
              Object.defineProperty(t.prototype, "props", {
                  set: function () {
                      throw Error();
                  },
              }),
              typeof Reflect == "object" && Reflect.construct)
          ) {
              try {
                  Reflect.construct(t, []);
              } catch (s) {
                  var r = s;
              }
              Reflect.construct(e, [], t);
          } else {
              try {
                  t.call();
              } catch (s) {
                  r = s;
              }
              e.call(t.prototype);
          }
      else {
          try {
              throw Error();
          } catch (s) {
              r = s;
          }
          e();
      }
  } catch (s) {
      if (s && r && typeof s.stack == "string") {
          for (
              var o = s.stack.split(`
`),
                  l = r.stack.split(`
`),
                  i = o.length - 1,
                  a = l.length - 1;
              1 <= i && 0 <= a && o[i] !== l[a];

          )
              a--;
          for (; 1 <= i && 0 <= a; i--, a--)
              if (o[i] !== l[a]) {
                  if (i !== 1 || a !== 1)
                      do
                          if ((i--, a--, 0 > a || o[i] !== l[a])) {
                              var u =
                                  `
` + o[i].replace(" at new ", " at ");
                              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
                          }
                      while (1 <= i && 0 <= a);
                  break;
              }
      }
  } finally {
      (na = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? qr(e) : "";
}
function Qm(e) {
  switch (e.tag) {
      case 5:
          return qr(e.type);
      case 16:
          return qr("Lazy");
      case 13:
          return qr("Suspense");
      case 19:
          return qr("SuspenseList");
      case 0:
      case 2:
      case 15:
          return (e = ra(e.type, !1)), e;
      case 11:
          return (e = ra(e.type.render, !1)), e;
      case 1:
          return (e = ra(e.type, !0)), e;
      default:
          return "";
  }
}
function Ua(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
      case qn:
          return "Fragment";
      case Jn:
          return "Portal";
      case Aa:
          return "Profiler";
      case Xu:
          return "StrictMode";
      case ba:
          return "Suspense";
      case Fa:
          return "SuspenseList";
  }
  if (typeof e == "object")
      switch (e.$$typeof) {
          case Sd:
              return (e.displayName || "Context") + ".Consumer";
          case wd:
              return (e._context.displayName || "Context") + ".Provider";
          case Gu:
              var t = e.render;
              return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
          case Zu:
              return (t = e.displayName || null), t !== null ? t : Ua(e.type) || "Memo";
          case Zt:
              (t = e._payload), (e = e._init);
              try {
                  return Ua(e(t));
              } catch {}
      }
  return null;
}
function Km(e) {
  var t = e.type;
  switch (e.tag) {
      case 24:
          return "Cache";
      case 9:
          return (t.displayName || "Context") + ".Consumer";
      case 10:
          return (t._context.displayName || "Context") + ".Provider";
      case 18:
          return "DehydratedFragment";
      case 11:
          return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
          return "Fragment";
      case 5:
          return t;
      case 4:
          return "Portal";
      case 3:
          return "Root";
      case 6:
          return "Text";
      case 16:
          return Ua(t);
      case 8:
          return t === Xu ? "StrictMode" : "Mode";
      case 22:
          return "Offscreen";
      case 12:
          return "Profiler";
      case 21:
          return "Scope";
      case 13:
          return "Suspense";
      case 19:
          return "SuspenseList";
      case 25:
          return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
          if (typeof t == "function") return t.displayName || t.name || null;
          if (typeof t == "string") return t;
  }
  return null;
}
function vn(e) {
  switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
          return e;
      case "object":
          return e;
      default:
          return "";
  }
}
function Ed(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ym(e) {
  var t = Ed(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get,
          l = n.set;
      return (
          Object.defineProperty(e, t, {
              configurable: !0,
              get: function () {
                  return o.call(this);
              },
              set: function (i) {
                  (r = "" + i), l.call(this, i);
              },
          }),
          Object.defineProperty(e, t, { enumerable: n.enumerable }),
          {
              getValue: function () {
                  return r;
              },
              setValue: function (i) {
                  r = "" + i;
              },
              stopTracking: function () {
                  (e._valueTracker = null), delete e[t];
              },
          }
      );
  }
}
function Xo(e) {
  e._valueTracker || (e._valueTracker = Ym(e));
}
function Cd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
      r = "";
  return e && (r = Ed(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Nl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
      return e.activeElement || e.body;
  } catch {
      return e.body;
  }
}
function Ba(e, t) {
  var n = t.checked;
  return ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function vc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vn(t.value != null ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null });
}
function Pd(e, t) {
  (t = t.checked), t != null && Yu(e, "checked", t, !1);
}
function Wa(e, t) {
  Pd(e, t);
  var n = vn(t.value),
      r = t.type;
  if (n != null) r === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
  }
  t.hasOwnProperty("value") ? Va(e, t.type, n) : t.hasOwnProperty("defaultValue") && Va(e, t.type, vn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function gc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
      (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n);
}
function Va(e, t, n) {
  (t !== "number" || Nl(e.ownerDocument) !== e) && (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var eo = Array.isArray;
function dr(e, t, n, r) {
  if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++) (o = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
      for (n = "" + vn(n), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === n) {
              (e[o].selected = !0), r && (e[o].defaultSelected = !0);
              return;
          }
          t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
  }
}
function Ha(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function yc(e, t) {
  var n = t.value;
  if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
          if (t != null) throw Error(N(92));
          if (eo(n)) {
              if (1 < n.length) throw Error(N(93));
              n = n[0];
          }
          t = n;
      }
      t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: vn(n) };
}
function jd(e, t) {
  var n = vn(t.value),
      r = vn(t.defaultValue);
  n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function xc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Nd(e) {
  switch (e) {
      case "svg":
          return "http://www.w3.org/2000/svg";
      case "math":
          return "http://www.w3.org/1998/Math/MathML";
      default:
          return "http://www.w3.org/1999/xhtml";
  }
}
function Qa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Nd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Go,
  Rd = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, o) {
                MSApp.execUnsafeLocalFunction(function () {
                    return e(t, n, r, o);
                });
            }
          : e;
  })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
      else {
          for (Go = Go || document.createElement("div"), Go.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Go.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
  });
function vo(e, t) {
  if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
      }
  }
  e.textContent = t;
}
var oo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
  },
  Xm = ["Webkit", "ms", "Moz", "O"];
Object.keys(oo).forEach(function (e) {
  Xm.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (oo[t] = oo[e]);
  });
});
function _d(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || (oo.hasOwnProperty(e) && oo[e]) ? ("" + t).trim() : t + "px";
}
function Ld(e, t) {
  e = e.style;
  for (var n in t)
      if (t.hasOwnProperty(n)) {
          var r = n.indexOf("--") === 0,
              o = _d(n, t[n], r);
          n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
      }
}
var Gm = ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ka(e, t) {
  if (t) {
      if (Gm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
      if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(N(60));
          if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Ya(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
          return !1;
      default:
          return !0;
  }
}
var Xa = null;
function Ju(e) {
  return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ga = null,
  pr = null,
  hr = null;
function wc(e) {
  if ((e = bo(e))) {
      if (typeof Ga != "function") throw Error(N(280));
      var t = e.stateNode;
      t && ((t = ci(t)), Ga(e.stateNode, e.type, t));
  }
}
function Td(e) {
  pr ? (hr ? hr.push(e) : (hr = [e])) : (pr = e);
}
function Od() {
  if (pr) {
      var e = pr,
          t = hr;
      if (((hr = pr = null), wc(e), t)) for (e = 0; e < t.length; e++) wc(t[e]);
  }
}
function $d(e, t) {
  return e(t);
}
function Md() {}
var oa = !1;
function Dd(e, t, n) {
  if (oa) return e(t, n);
  oa = !0;
  try {
      return $d(e, t, n);
  } finally {
      (oa = !1), (pr !== null || hr !== null) && (Md(), Od());
  }
}
function go(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ci(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
          (r = !r.disabled) || ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !r);
          break e;
      default:
          e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Za = !1;
if (It)
  try {
      var Br = {};
      Object.defineProperty(Br, "passive", {
          get: function () {
              Za = !0;
          },
      }),
          window.addEventListener("test", Br, Br),
          window.removeEventListener("test", Br, Br);
  } catch {
      Za = !1;
  }
function Zm(e, t, n, r, o, l, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
      t.apply(n, s);
  } catch (c) {
      this.onError(c);
  }
}
var lo = !1,
  Rl = null,
  _l = !1,
  Ja = null,
  Jm = {
      onError: function (e) {
          (lo = !0), (Rl = e);
      },
  };
function qm(e, t, n, r, o, l, i, a, u) {
  (lo = !1), (Rl = null), Zm.apply(Jm, arguments);
}
function e0(e, t, n, r, o, l, i, a, u) {
  if ((qm.apply(this, arguments), lo)) {
      if (lo) {
          var s = Rl;
          (lo = !1), (Rl = null);
      } else throw Error(N(198));
      _l || ((_l = !0), (Ja = s));
  }
}
function Vn(e) {
  var t = e,
      n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
  }
  return t.tag === 3 ? n : null;
}
function zd(e) {
  if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Sc(e) {
  if (Vn(e) !== e) throw Error(N(188));
}
function t0(e) {
  var t = e.alternate;
  if (!t) {
      if (((t = Vn(e)), t === null)) throw Error(N(188));
      return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var l = o.alternate;
      if (l === null) {
          if (((r = o.return), r !== null)) {
              n = r;
              continue;
          }
          break;
      }
      if (o.child === l.child) {
          for (l = o.child; l; ) {
              if (l === n) return Sc(o), e;
              if (l === r) return Sc(o), t;
              l = l.sibling;
          }
          throw Error(N(188));
      }
      if (n.return !== r.return) (n = o), (r = l);
      else {
          for (var i = !1, a = o.child; a; ) {
              if (a === n) {
                  (i = !0), (n = o), (r = l);
                  break;
              }
              if (a === r) {
                  (i = !0), (r = o), (n = l);
                  break;
              }
              a = a.sibling;
          }
          if (!i) {
              for (a = l.child; a; ) {
                  if (a === n) {
                      (i = !0), (n = l), (r = o);
                      break;
                  }
                  if (a === r) {
                      (i = !0), (r = l), (n = o);
                      break;
                  }
                  a = a.sibling;
              }
              if (!i) throw Error(N(189));
          }
      }
      if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Id(e) {
  return (e = t0(e)), e !== null ? Ad(e) : null;
}
function Ad(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
      var t = Ad(e);
      if (t !== null) return t;
      e = e.sibling;
  }
  return null;
}
var bd = Ye.unstable_scheduleCallback,
  kc = Ye.unstable_cancelCallback,
  n0 = Ye.unstable_shouldYield,
  r0 = Ye.unstable_requestPaint,
  he = Ye.unstable_now,
  o0 = Ye.unstable_getCurrentPriorityLevel,
  qu = Ye.unstable_ImmediatePriority,
  Fd = Ye.unstable_UserBlockingPriority,
  Ll = Ye.unstable_NormalPriority,
  l0 = Ye.unstable_LowPriority,
  Ud = Ye.unstable_IdlePriority,
  ii = null,
  Ct = null;
function i0(e) {
  if (Ct && typeof Ct.onCommitFiberRoot == "function")
      try {
          Ct.onCommitFiberRoot(ii, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
}
var ht = Math.clz32 ? Math.clz32 : s0,
  a0 = Math.log,
  u0 = Math.LN2;
function s0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((a0(e) / u0) | 0)) | 0;
}
var Zo = 64,
  Jo = 4194304;
function to(e) {
  switch (e & -e) {
      case 1:
          return 1;
      case 2:
          return 2;
      case 4:
          return 4;
      case 8:
          return 8;
      case 16:
          return 16;
      case 32:
          return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
          return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
          return e & 130023424;
      case 134217728:
          return 134217728;
      case 268435456:
          return 268435456;
      case 536870912:
          return 536870912;
      case 1073741824:
          return 1073741824;
      default:
          return e;
  }
}
function Tl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
      o = e.suspendedLanes,
      l = e.pingedLanes,
      i = n & 268435455;
  if (i !== 0) {
      var a = i & ~o;
      a !== 0 ? (r = to(a)) : ((l &= i), l !== 0 && (r = to(l)));
  } else (i = n & ~o), i !== 0 ? (r = to(i)) : l !== 0 && (r = to(l));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))) return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - ht(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function c0(e, t) {
  switch (e) {
      case 1:
      case 2:
      case 4:
          return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
          return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
          return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
          return -1;
      default:
          return -1;
  }
}
function f0(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
      var i = 31 - ht(l),
          a = 1 << i,
          u = o[i];
      u === -1 ? (!(a & n) || a & r) && (o[i] = c0(a, t)) : u <= t && (e.expiredLanes |= a), (l &= ~a);
  }
}
function qa(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Bd() {
  var e = Zo;
  return (Zo <<= 1), !(Zo & 4194240) && (Zo = 64), e;
}
function la(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Io(e, t, n) {
  (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - ht(t)), (e[t] = n);
}
function d0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - ht(n),
          l = 1 << o;
      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function es(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
      var r = 31 - ht(n),
          o = 1 << r;
      (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Q = 0;
function Wd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Vd,
  ts,
  Hd,
  Qd,
  Kd,
  eu = !1,
  qo = [],
  ln = null,
  an = null,
  un = null,
  yo = new Map(),
  xo = new Map(),
  qt = [],
  p0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
  );
function Ec(e, t) {
  switch (e) {
      case "focusin":
      case "focusout":
          ln = null;
          break;
      case "dragenter":
      case "dragleave":
          an = null;
          break;
      case "mouseover":
      case "mouseout":
          un = null;
          break;
      case "pointerover":
      case "pointerout":
          yo.delete(t.pointerId);
          break;
      case "gotpointercapture":
      case "lostpointercapture":
          xo.delete(t.pointerId);
  }
}
function Wr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
      ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }), t !== null && ((t = bo(t)), t !== null && ts(t)), e)
      : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function h0(e, t, n, r, o) {
  switch (t) {
      case "focusin":
          return (ln = Wr(ln, e, t, n, r, o)), !0;
      case "dragenter":
          return (an = Wr(an, e, t, n, r, o)), !0;
      case "mouseover":
          return (un = Wr(un, e, t, n, r, o)), !0;
      case "pointerover":
          var l = o.pointerId;
          return yo.set(l, Wr(yo.get(l) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
          return (l = o.pointerId), xo.set(l, Wr(xo.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Yd(e) {
  var t = Ln(e.target);
  if (t !== null) {
      var n = Vn(t);
      if (n !== null) {
          if (((t = n.tag), t === 13)) {
              if (((t = zd(n)), t !== null)) {
                  (e.blockedOn = t),
                      Kd(e.priority, function () {
                          Hd(n);
                      });
                  return;
              }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
              e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
              return;
          }
      }
  }
  e.blockedOn = null;
}
function hl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
      var n = tu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          (Xa = r), n.target.dispatchEvent(r), (Xa = null);
      } else return (t = bo(n)), t !== null && ts(t), (e.blockedOn = n), !1;
      t.shift();
  }
  return !0;
}
function Cc(e, t, n) {
  hl(e) && n.delete(t);
}
function m0() {
  (eu = !1), ln !== null && hl(ln) && (ln = null), an !== null && hl(an) && (an = null), un !== null && hl(un) && (un = null), yo.forEach(Cc), xo.forEach(Cc);
}
function Vr(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), eu || ((eu = !0), Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, m0)));
}
function wo(e) {
  function t(o) {
      return Vr(o, e);
  }
  if (0 < qo.length) {
      Vr(qo[0], e);
      for (var n = 1; n < qo.length; n++) {
          var r = qo[n];
          r.blockedOn === e && (r.blockedOn = null);
      }
  }
  for (ln !== null && Vr(ln, e), an !== null && Vr(an, e), un !== null && Vr(un, e), yo.forEach(t), xo.forEach(t), n = 0; n < qt.length; n++) (r = qt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qt.length && ((n = qt[0]), n.blockedOn === null); ) Yd(n), n.blockedOn === null && qt.shift();
}
var mr = Wt.ReactCurrentBatchConfig,
  Ol = !0;
function v0(e, t, n, r) {
  var o = Q,
      l = mr.transition;
  mr.transition = null;
  try {
      (Q = 1), ns(e, t, n, r);
  } finally {
      (Q = o), (mr.transition = l);
  }
}
function g0(e, t, n, r) {
  var o = Q,
      l = mr.transition;
  mr.transition = null;
  try {
      (Q = 4), ns(e, t, n, r);
  } finally {
      (Q = o), (mr.transition = l);
  }
}
function ns(e, t, n, r) {
  if (Ol) {
      var o = tu(e, t, n, r);
      if (o === null) ma(e, t, r, $l, n), Ec(e, r);
      else if (h0(o, e, t, n, r)) r.stopPropagation();
      else if ((Ec(e, r), t & 4 && -1 < p0.indexOf(e))) {
          for (; o !== null; ) {
              var l = bo(o);
              if ((l !== null && Vd(l), (l = tu(e, t, n, r)), l === null && ma(e, t, r, $l, n), l === o)) break;
              o = l;
          }
          o !== null && r.stopPropagation();
      } else ma(e, t, r, null, n);
  }
}
var $l = null;
function tu(e, t, n, r) {
  if ((($l = null), (e = Ju(r)), (e = Ln(e)), e !== null))
      if (((t = Vn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
          if (((e = zd(t)), e !== null)) return e;
          e = null;
      } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
      } else t !== e && (e = null);
  return ($l = e), null;
}
function Xd(e) {
  switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
          return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
          return 4;
      case "message":
          switch (o0()) {
              case qu:
                  return 1;
              case Fd:
                  return 4;
              case Ll:
              case l0:
                  return 16;
              case Ud:
                  return 536870912;
              default:
                  return 16;
          }
      default:
          return 16;
  }
}
var rn = null,
  rs = null,
  ml = null;
function Gd() {
  if (ml) return ml;
  var e,
      t = rs,
      n = t.length,
      r,
      o = "value" in rn ? rn.value : rn.textContent,
      l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (ml = o.slice(e, 1 < r ? 1 - r : void 0));
}
function vl(e) {
  var t = e.keyCode;
  return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function el() {
  return !0;
}
function Pc() {
  return !1;
}
function Ze(e) {
  function t(n, r, o, l, i) {
      (this._reactName = n), (this._targetInst = o), (this.type = r), (this.nativeEvent = l), (this.target = i), (this.currentTarget = null);
      for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
      return (this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? el : Pc), (this.isPropagationStopped = Pc), this;
  }
  return (
      ce(t.prototype, {
          preventDefault: function () {
              this.defaultPrevented = !0;
              var n = this.nativeEvent;
              n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), (this.isDefaultPrevented = el));
          },
          stopPropagation: function () {
              var n = this.nativeEvent;
              n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), (this.isPropagationStopped = el));
          },
          persist: function () {},
          isPersistent: el,
      }),
      t
  );
}
var $r = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
          return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
  },
  os = Ze($r),
  Ao = ce({}, $r, { view: 0, detail: 0 }),
  y0 = Ze(Ao),
  ia,
  aa,
  Hr,
  ai = ce({}, Ao, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ls,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
          return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
      },
      movementX: function (e) {
          return "movementX" in e ? e.movementX : (e !== Hr && (Hr && e.type === "mousemove" ? ((ia = e.screenX - Hr.screenX), (aa = e.screenY - Hr.screenY)) : (aa = ia = 0), (Hr = e)), ia);
      },
      movementY: function (e) {
          return "movementY" in e ? e.movementY : aa;
      },
  }),
  jc = Ze(ai),
  x0 = ce({}, ai, { dataTransfer: 0 }),
  w0 = Ze(x0),
  S0 = ce({}, Ao, { relatedTarget: 0 }),
  ua = Ze(S0),
  k0 = ce({}, $r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  E0 = Ze(k0),
  C0 = ce({}, $r, {
      clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
  }),
  P0 = Ze(C0),
  j0 = ce({}, $r, { data: 0 }),
  Nc = Ze(j0),
  N0 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
  R0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
  },
  _0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function L0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _0[e]) ? !!t[e] : !1;
}
function ls() {
  return L0;
}
var T0 = ce({}, Ao, {
      key: function (e) {
          if (e.key) {
              var t = N0[e.key] || e.key;
              if (t !== "Unidentified") return t;
          }
          return e.type === "keypress" ? ((e = vl(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? R0[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ls,
      charCode: function (e) {
          return e.type === "keypress" ? vl(e) : 0;
      },
      keyCode: function (e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
          return e.type === "keypress" ? vl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
  }),
  O0 = Ze(T0),
  $0 = ce({}, ai, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
  Rc = Ze($0),
  M0 = ce({}, Ao, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ls }),
  D0 = Ze(M0),
  z0 = ce({}, $r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  I0 = Ze(z0),
  A0 = ce({}, ai, {
      deltaX: function (e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
  }),
  b0 = Ze(A0),
  F0 = [9, 13, 27, 32],
  is = It && "CompositionEvent" in window,
  io = null;
It && "documentMode" in document && (io = document.documentMode);
var U0 = It && "TextEvent" in window && !io,
  Zd = It && (!is || (io && 8 < io && 11 >= io)),
  _c = String.fromCharCode(32),
  Lc = !1;
function Jd(e, t) {
  switch (e) {
      case "keyup":
          return F0.indexOf(t.keyCode) !== -1;
      case "keydown":
          return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
          return !0;
      default:
          return !1;
  }
}
function qd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var er = !1;
function B0(e, t) {
  switch (e) {
      case "compositionend":
          return qd(t);
      case "keypress":
          return t.which !== 32 ? null : ((Lc = !0), _c);
      case "textInput":
          return (e = t.data), e === _c && Lc ? null : e;
      default:
          return null;
  }
}
function W0(e, t) {
  if (er) return e === "compositionend" || (!is && Jd(e, t)) ? ((e = Gd()), (ml = rs = rn = null), (er = !1), e) : null;
  switch (e) {
      case "paste":
          return null;
      case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
              if (t.char && 1 < t.char.length) return t.char;
              if (t.which) return String.fromCharCode(t.which);
          }
          return null;
      case "compositionend":
          return Zd && t.locale !== "ko" ? null : t.data;
      default:
          return null;
  }
}
var V0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Tc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!V0[e.type] : t === "textarea";
}
function ep(e, t, n, r) {
  Td(r), (t = Ml(t, "onChange")), 0 < t.length && ((n = new os("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var ao = null,
  So = null;
function H0(e) {
  fp(e, 0);
}
function ui(e) {
  var t = rr(e);
  if (Cd(t)) return e;
}
function Q0(e, t) {
  if (e === "change") return t;
}
var tp = !1;
if (It) {
  var sa;
  if (It) {
      var ca = "oninput" in document;
      if (!ca) {
          var Oc = document.createElement("div");
          Oc.setAttribute("oninput", "return;"), (ca = typeof Oc.oninput == "function");
      }
      sa = ca;
  } else sa = !1;
  tp = sa && (!document.documentMode || 9 < document.documentMode);
}
function $c() {
  ao && (ao.detachEvent("onpropertychange", np), (So = ao = null));
}
function np(e) {
  if (e.propertyName === "value" && ui(So)) {
      var t = [];
      ep(t, So, e, Ju(e)), Dd(H0, t);
  }
}
function K0(e, t, n) {
  e === "focusin" ? ($c(), (ao = t), (So = n), ao.attachEvent("onpropertychange", np)) : e === "focusout" && $c();
}
function Y0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ui(So);
}
function X0(e, t) {
  if (e === "click") return ui(t);
}
function G0(e, t) {
  if (e === "input" || e === "change") return ui(t);
}
function Z0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var vt = typeof Object.is == "function" ? Object.is : Z0;
function ko(e, t) {
  if (vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
      r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!Ia.call(t, o) || !vt(e[o], t[o])) return !1;
  }
  return !0;
}
function Mc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Dc(e, t) {
  var n = Mc(e);
  e = 0;
  for (var r; n; ) {
      if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
          e = r;
      }
      e: {
          for (; n; ) {
              if (n.nextSibling) {
                  n = n.nextSibling;
                  break e;
              }
              n = n.parentNode;
          }
          n = void 0;
      }
      n = Mc(n);
  }
}
function rp(e, t) {
  return e && t ? (e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? rp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1) : !1;
}
function op() {
  for (var e = window, t = Nl(); t instanceof e.HTMLIFrameElement; ) {
      try {
          var n = typeof t.contentWindow.location.href == "string";
      } catch {
          n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Nl(e.document);
  }
  return t;
}
function as(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) || t === "textarea" || e.contentEditable === "true");
}
function J0(e) {
  var t = op(),
      n = e.focusedElem,
      r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && rp(n.ownerDocument.documentElement, n)) {
      if (r !== null && as(n)) {
          if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
          else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
              e = e.getSelection();
              var o = n.textContent.length,
                  l = Math.min(r.start, o);
              (r = r.end === void 0 ? l : Math.min(r.end, o)), !e.extend && l > r && ((o = r), (r = l), (l = o)), (o = Dc(n, l));
              var i = Dc(n, r);
              o &&
                  i &&
                  (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) &&
                  ((t = t.createRange()), t.setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
          }
      }
      for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var q0 = It && "documentMode" in document && 11 >= document.documentMode,
  tr = null,
  nu = null,
  uo = null,
  ru = !1;
function zc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ru ||
      tr == null ||
      tr !== Nl(r) ||
      ((r = tr),
      "selectionStart" in r && as(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()), (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
      (uo && ko(uo, r)) || ((uo = r), (r = Ml(nu, "onSelect")), 0 < r.length && ((t = new os("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = tr))));
}
function tl(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var nr = { animationend: tl("Animation", "AnimationEnd"), animationiteration: tl("Animation", "AnimationIteration"), animationstart: tl("Animation", "AnimationStart"), transitionend: tl("Transition", "TransitionEnd") },
  fa = {},
  lp = {};
It &&
  ((lp = document.createElement("div").style),
  "AnimationEvent" in window || (delete nr.animationend.animation, delete nr.animationiteration.animation, delete nr.animationstart.animation),
  "TransitionEvent" in window || delete nr.transitionend.transition);
function si(e) {
  if (fa[e]) return fa[e];
  if (!nr[e]) return e;
  var t = nr[e],
      n;
  for (n in t) if (t.hasOwnProperty(n) && n in lp) return (fa[e] = t[n]);
  return e;
}
var ip = si("animationend"),
  ap = si("animationiteration"),
  up = si("animationstart"),
  sp = si("transitionend"),
  cp = new Map(),
  Ic = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
  );
function wn(e, t) {
  cp.set(e, t), Wn(t, [e]);
}
for (var da = 0; da < Ic.length; da++) {
  var pa = Ic[da],
      ev = pa.toLowerCase(),
      tv = pa[0].toUpperCase() + pa.slice(1);
  wn(ev, "on" + tv);
}
wn(ip, "onAnimationEnd");
wn(ap, "onAnimationIteration");
wn(up, "onAnimationStart");
wn("dblclick", "onDoubleClick");
wn("focusin", "onFocus");
wn("focusout", "onBlur");
wn(sp, "onTransitionEnd");
Sr("onMouseEnter", ["mouseout", "mouseover"]);
Sr("onMouseLeave", ["mouseout", "mouseover"]);
Sr("onPointerEnter", ["pointerout", "pointerover"]);
Sr("onPointerLeave", ["pointerout", "pointerover"]);
Wn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Wn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Wn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Wn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var no = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
  ),
  nv = new Set("cancel close invalid load scroll toggle".split(" ").concat(no));
function Ac(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), e0(r, t, void 0, e), (e.currentTarget = null);
}
function fp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
      var r = e[n],
          o = r.event;
      r = r.listeners;
      e: {
          var l = void 0;
          if (t)
              for (var i = r.length - 1; 0 <= i; i--) {
                  var a = r[i],
                      u = a.instance,
                      s = a.currentTarget;
                  if (((a = a.listener), u !== l && o.isPropagationStopped())) break e;
                  Ac(o, a, s), (l = u);
              }
          else
              for (i = 0; i < r.length; i++) {
                  if (((a = r[i]), (u = a.instance), (s = a.currentTarget), (a = a.listener), u !== l && o.isPropagationStopped())) break e;
                  Ac(o, a, s), (l = u);
              }
      }
  }
  if (_l) throw ((e = Ja), (_l = !1), (Ja = null), e);
}
function te(e, t) {
  var n = t[uu];
  n === void 0 && (n = t[uu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (dp(t, e, 2, !1), n.add(r));
}
function ha(e, t, n) {
  var r = 0;
  t && (r |= 4), dp(n, e, r, t);
}
var nl = "_reactListening" + Math.random().toString(36).slice(2);
function Eo(e) {
  if (!e[nl]) {
      (e[nl] = !0),
          xd.forEach(function (n) {
              n !== "selectionchange" && (nv.has(n) || ha(n, !1, e), ha(n, !0, e));
          });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[nl] || ((t[nl] = !0), ha("selectionchange", !1, t));
  }
}
function dp(e, t, n, r) {
  switch (Xd(t)) {
      case 1:
          var o = v0;
          break;
      case 4:
          o = g0;
          break;
      default:
          o = ns;
  }
  (n = o.bind(null, t, n, e)),
      (o = void 0),
      !Za || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
      r ? (o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0)) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function ma(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
          if (r === null) return;
          var i = r.tag;
          if (i === 3 || i === 4) {
              var a = r.stateNode.containerInfo;
              if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
              if (i === 4)
                  for (i = r.return; i !== null; ) {
                      var u = i.tag;
                      if ((u === 3 || u === 4) && ((u = i.stateNode.containerInfo), u === o || (u.nodeType === 8 && u.parentNode === o))) return;
                      i = i.return;
                  }
              for (; a !== null; ) {
                  if (((i = Ln(a)), i === null)) return;
                  if (((u = i.tag), u === 5 || u === 6)) {
                      r = l = i;
                      continue e;
                  }
                  a = a.parentNode;
              }
          }
          r = r.return;
      }
  Dd(function () {
      var s = l,
          c = Ju(n),
          p = [];
      e: {
          var d = cp.get(e);
          if (d !== void 0) {
              var v = os,
                  y = e;
              switch (e) {
                  case "keypress":
                      if (vl(n) === 0) break e;
                  case "keydown":
                  case "keyup":
                      v = O0;
                      break;
                  case "focusin":
                      (y = "focus"), (v = ua);
                      break;
                  case "focusout":
                      (y = "blur"), (v = ua);
                      break;
                  case "beforeblur":
                  case "afterblur":
                      v = ua;
                      break;
                  case "click":
                      if (n.button === 2) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                      v = jc;
                      break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                      v = w0;
                      break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                      v = D0;
                      break;
                  case ip:
                  case ap:
                  case up:
                      v = E0;
                      break;
                  case sp:
                      v = I0;
                      break;
                  case "scroll":
                      v = y0;
                      break;
                  case "wheel":
                      v = b0;
                      break;
                  case "copy":
                  case "cut":
                  case "paste":
                      v = P0;
                      break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                      v = Rc;
              }
              var x = (t & 4) !== 0,
                  E = !x && e === "scroll",
                  h = x ? (d !== null ? d + "Capture" : null) : d;
              x = [];
              for (var f = s, g; f !== null; ) {
                  g = f;
                  var m = g.stateNode;
                  if ((g.tag === 5 && m !== null && ((g = m), h !== null && ((m = go(f, h)), m != null && x.push(Co(f, m, g)))), E)) break;
                  f = f.return;
              }
              0 < x.length && ((d = new v(d, y, null, n, c)), p.push({ event: d, listeners: x }));
          }
      }
      if (!(t & 7)) {
          e: {
              if (((d = e === "mouseover" || e === "pointerover"), (v = e === "mouseout" || e === "pointerout"), d && n !== Xa && (y = n.relatedTarget || n.fromElement) && (Ln(y) || y[At]))) break e;
              if (
                  (v || d) &&
                  ((d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window),
                  v ? ((y = n.relatedTarget || n.toElement), (v = s), (y = y ? Ln(y) : null), y !== null && ((E = Vn(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) && (y = null)) : ((v = null), (y = s)),
                  v !== y)
              ) {
                  if (
                      ((x = jc),
                      (m = "onMouseLeave"),
                      (h = "onMouseEnter"),
                      (f = "mouse"),
                      (e === "pointerout" || e === "pointerover") && ((x = Rc), (m = "onPointerLeave"), (h = "onPointerEnter"), (f = "pointer")),
                      (E = v == null ? d : rr(v)),
                      (g = y == null ? d : rr(y)),
                      (d = new x(m, f + "leave", v, n, c)),
                      (d.target = E),
                      (d.relatedTarget = g),
                      (m = null),
                      Ln(c) === s && ((x = new x(h, f + "enter", y, n, c)), (x.target = g), (x.relatedTarget = E), (m = x)),
                      (E = m),
                      v && y)
                  )
                      t: {
                          for (x = v, h = y, f = 0, g = x; g; g = Xn(g)) f++;
                          for (g = 0, m = h; m; m = Xn(m)) g++;
                          for (; 0 < f - g; ) (x = Xn(x)), f--;
                          for (; 0 < g - f; ) (h = Xn(h)), g--;
                          for (; f--; ) {
                              if (x === h || (h !== null && x === h.alternate)) break t;
                              (x = Xn(x)), (h = Xn(h));
                          }
                          x = null;
                      }
                  else x = null;
                  v !== null && bc(p, d, v, x, !1), y !== null && E !== null && bc(p, E, y, x, !0);
              }
          }
          e: {
              if (((d = s ? rr(s) : window), (v = d.nodeName && d.nodeName.toLowerCase()), v === "select" || (v === "input" && d.type === "file"))) var P = Q0;
              else if (Tc(d))
                  if (tp) P = G0;
                  else {
                      P = Y0;
                      var _ = K0;
                  }
              else (v = d.nodeName) && v.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (P = X0);
              if (P && (P = P(e, s))) {
                  ep(p, P, n, c);
                  break e;
              }
              _ && _(e, d, s), e === "focusout" && (_ = d._wrapperState) && _.controlled && d.type === "number" && Va(d, "number", d.value);
          }
          switch (((_ = s ? rr(s) : window), e)) {
              case "focusin":
                  (Tc(_) || _.contentEditable === "true") && ((tr = _), (nu = s), (uo = null));
                  break;
              case "focusout":
                  uo = nu = tr = null;
                  break;
              case "mousedown":
                  ru = !0;
                  break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                  (ru = !1), zc(p, n, c);
                  break;
              case "selectionchange":
                  if (q0) break;
              case "keydown":
              case "keyup":
                  zc(p, n, c);
          }
          var R;
          if (is)
              e: {
                  switch (e) {
                      case "compositionstart":
                          var T = "onCompositionStart";
                          break e;
                      case "compositionend":
                          T = "onCompositionEnd";
                          break e;
                      case "compositionupdate":
                          T = "onCompositionUpdate";
                          break e;
                  }
                  T = void 0;
              }
          else er ? Jd(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
          T &&
              (Zd && n.locale !== "ko" && (er || T !== "onCompositionStart" ? T === "onCompositionEnd" && er && (R = Gd()) : ((rn = c), (rs = "value" in rn ? rn.value : rn.textContent), (er = !0))),
              (_ = Ml(s, T)),
              0 < _.length && ((T = new Nc(T, e, null, n, c)), p.push({ event: T, listeners: _ }), R ? (T.data = R) : ((R = qd(n)), R !== null && (T.data = R)))),
              (R = U0 ? B0(e, n) : W0(e, n)) && ((s = Ml(s, "onBeforeInput")), 0 < s.length && ((c = new Nc("onBeforeInput", "beforeinput", null, n, c)), p.push({ event: c, listeners: s }), (c.data = R)));
      }
      fp(p, t);
  });
}
function Co(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ml(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e,
          l = o.stateNode;
      o.tag === 5 && l !== null && ((o = l), (l = go(e, n)), l != null && r.unshift(Co(e, l, o)), (l = go(e, t)), l != null && r.push(Co(e, l, o))), (e = e.return);
  }
  return r;
}
function Xn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function bc(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
      var a = n,
          u = a.alternate,
          s = a.stateNode;
      if (u !== null && u === r) break;
      a.tag === 5 && s !== null && ((a = s), o ? ((u = go(n, l)), u != null && i.unshift(Co(n, u, a))) : o || ((u = go(n, l)), u != null && i.push(Co(n, u, a)))), (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var rv = /\r\n?/g,
  ov = /\u0000|\uFFFD/g;
function Fc(e) {
  return (typeof e == "string" ? e : "" + e)
      .replace(
          rv,
          `
`
      )
      .replace(ov, "");
}
function rl(e, t, n) {
  if (((t = Fc(t)), Fc(e) !== t && n)) throw Error(N(425));
}
function Dl() {}
var ou = null,
  lu = null;
function iu(e, t) {
  return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
  );
}
var au = typeof setTimeout == "function" ? setTimeout : void 0,
  lv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Uc = typeof Promise == "function" ? Promise : void 0,
  iv =
      typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof Uc < "u"
          ? function (e) {
                return Uc.resolve(null).then(e).catch(av);
            }
          : au;
function av(e) {
  setTimeout(function () {
      throw e;
  });
}
function va(e, t) {
  var n = t,
      r = 0;
  do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
          if (((n = o.data), n === "/$")) {
              if (r === 0) {
                  e.removeChild(o), wo(t);
                  return;
              }
              r--;
          } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = o;
  } while (n);
  wo(t);
}
function sn(e) {
  for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
          if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
          if (t === "/$") return null;
      }
  }
  return e;
}
function Bc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
      if (e.nodeType === 8) {
          var n = e.data;
          if (n === "$" || n === "$!" || n === "$?") {
              if (t === 0) return e;
              t--;
          } else n === "/$" && t++;
      }
      e = e.previousSibling;
  }
  return null;
}
var Mr = Math.random().toString(36).slice(2),
  Et = "__reactFiber$" + Mr,
  Po = "__reactProps$" + Mr,
  At = "__reactContainer$" + Mr,
  uu = "__reactEvents$" + Mr,
  uv = "__reactListeners$" + Mr,
  sv = "__reactHandles$" + Mr;
function Ln(e) {
  var t = e[Et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
      if ((t = n[At] || n[Et])) {
          if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
              for (e = Bc(e); e !== null; ) {
                  if ((n = e[Et])) return n;
                  e = Bc(e);
              }
          return t;
      }
      (e = n), (n = e.parentNode);
  }
  return null;
}
function bo(e) {
  return (e = e[Et] || e[At]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function rr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function ci(e) {
  return e[Po] || null;
}
var su = [],
  or = -1;
function Sn(e) {
  return { current: e };
}
function ne(e) {
  0 > or || ((e.current = su[or]), (su[or] = null), or--);
}
function ee(e, t) {
  or++, (su[or] = e.current), (e.current = t);
}
var gn = {},
  $e = Sn(gn),
  Ue = Sn(!1),
  zn = gn;
function kr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
      l;
  for (l in n) o[l] = t[l];
  return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = o)), o;
}
function Be(e) {
  return (e = e.childContextTypes), e != null;
}
function zl() {
  ne(Ue), ne($e);
}
function Wc(e, t, n) {
  if ($e.current !== gn) throw Error(N(168));
  ee($e, t), ee(Ue, n);
}
function pp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, Km(e) || "Unknown", o));
  return ce({}, n, r);
}
function Il(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gn), (zn = $e.current), ee($e, e), ee(Ue, Ue.current), !0;
}
function Vc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n ? ((e = pp(e, t, zn)), (r.__reactInternalMemoizedMergedChildContext = e), ne(Ue), ne($e), ee($e, e)) : ne(Ue), ee(Ue, n);
}
var Ot = null,
  fi = !1,
  ga = !1;
function hp(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
function cv(e) {
  (fi = !0), hp(e);
}
function kn() {
  if (!ga && Ot !== null) {
      ga = !0;
      var e = 0,
          t = Q;
      try {
          var n = Ot;
          for (Q = 1; e < n.length; e++) {
              var r = n[e];
              do r = r(!0);
              while (r !== null);
          }
          (Ot = null), (fi = !1);
      } catch (o) {
          throw (Ot !== null && (Ot = Ot.slice(e + 1)), bd(qu, kn), o);
      } finally {
          (Q = t), (ga = !1);
      }
  }
  return null;
}
var lr = [],
  ir = 0,
  Al = null,
  bl = 0,
  et = [],
  tt = 0,
  In = null,
  $t = 1,
  Mt = "";
function Nn(e, t) {
  (lr[ir++] = bl), (lr[ir++] = Al), (Al = e), (bl = t);
}
function mp(e, t, n) {
  (et[tt++] = $t), (et[tt++] = Mt), (et[tt++] = In), (In = e);
  var r = $t;
  e = Mt;
  var o = 32 - ht(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - ht(t) + o;
  if (30 < l) {
      var i = o - (o % 5);
      (l = (r & ((1 << i) - 1)).toString(32)), (r >>= i), (o -= i), ($t = (1 << (32 - ht(t) + o)) | (n << o) | r), (Mt = l + e);
  } else ($t = (1 << l) | (n << o) | r), (Mt = e);
}
function us(e) {
  e.return !== null && (Nn(e, 1), mp(e, 1, 0));
}
function ss(e) {
  for (; e === Al; ) (Al = lr[--ir]), (lr[ir] = null), (bl = lr[--ir]), (lr[ir] = null);
  for (; e === In; ) (In = et[--tt]), (et[tt] = null), (Mt = et[--tt]), (et[tt] = null), ($t = et[--tt]), (et[tt] = null);
}
var Ke = null,
  Qe = null,
  ie = !1,
  dt = null;
function vp(e, t) {
  var n = nt(5, null, null, 0);
  (n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Hc(e, t) {
  switch (e.tag) {
      case 5:
          var n = e.type;
          return (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (Ke = e), (Qe = sn(t.firstChild)), !0) : !1;
      case 6:
          return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (Ke = e), (Qe = null), !0) : !1;
      case 13:
          return (
              (t = t.nodeType !== 8 ? null : t),
              t !== null
                  ? ((n = In !== null ? { id: $t, overflow: Mt } : null),
                    (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                    (n = nt(18, null, null, 0)),
                    (n.stateNode = t),
                    (n.return = e),
                    (e.child = n),
                    (Ke = e),
                    (Qe = null),
                    !0)
                  : !1
          );
      default:
          return !1;
  }
}
function cu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fu(e) {
  if (ie) {
      var t = Qe;
      if (t) {
          var n = t;
          if (!Hc(e, t)) {
              if (cu(e)) throw Error(N(418));
              t = sn(n.nextSibling);
              var r = Ke;
              t && Hc(e, t) ? vp(r, n) : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ke = e));
          }
      } else {
          if (cu(e)) throw Error(N(418));
          (e.flags = (e.flags & -4097) | 2), (ie = !1), (Ke = e);
      }
  }
}
function Qc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ke = e;
}
function ol(e) {
  if (e !== Ke) return !1;
  if (!ie) return Qc(e), (ie = !0), !1;
  var t;
  if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !iu(e.type, e.memoizedProps))), t && (t = Qe))) {
      if (cu(e)) throw (gp(), Error(N(418)));
      for (; t; ) vp(e, t), (t = sn(t.nextSibling));
  }
  if ((Qc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(N(317));
      e: {
          for (e = e.nextSibling, t = 0; e; ) {
              if (e.nodeType === 8) {
                  var n = e.data;
                  if (n === "/$") {
                      if (t === 0) {
                          Qe = sn(e.nextSibling);
                          break e;
                      }
                      t--;
                  } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
              }
              e = e.nextSibling;
          }
          Qe = null;
      }
  } else Qe = Ke ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function gp() {
  for (var e = Qe; e; ) e = sn(e.nextSibling);
}
function Er() {
  (Qe = Ke = null), (ie = !1);
}
function cs(e) {
  dt === null ? (dt = [e]) : dt.push(e);
}
var fv = Wt.ReactCurrentBatchConfig;
function st(e, t) {
  if (e && e.defaultProps) {
      (t = ce({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
  }
  return t;
}
var Fl = Sn(null),
  Ul = null,
  ar = null,
  fs = null;
function ds() {
  fs = ar = Ul = null;
}
function ps(e) {
  var t = Fl.current;
  ne(Fl), (e._currentValue = t);
}
function du(e, t, n) {
  for (; e !== null; ) {
      var r = e.alternate;
      if (((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
      e = e.return;
  }
}
function vr(e, t) {
  (Ul = e), (fs = ar = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (be = !0), (e.firstContext = null));
}
function ot(e) {
  var t = e._currentValue;
  if (fs !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), ar === null)) {
          if (Ul === null) throw Error(N(308));
          (ar = e), (Ul.dependencies = { lanes: 0, firstContext: e });
      } else ar = ar.next = e;
  return t;
}
var Tn = null;
function hs(e) {
  Tn === null ? (Tn = [e]) : Tn.push(e);
}
function yp(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? ((n.next = n), hs(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), bt(e, r);
}
function bt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Jt = !1;
function ms(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function xp(e, t) {
  (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function cn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
      var o = r.pending;
      return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), bt(e, n);
  }
  return (o = r.interleaved), o === null ? ((t.next = t), hs(r)) : ((t.next = o.next), (o.next = t)), (r.interleaved = t), bt(e, n);
}
function gl(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), es(e, n);
  }
}
function Kc(e, t) {
  var n = e.updateQueue,
      r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
      var o = null,
          l = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
          do {
              var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
              l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
          } while (n !== null);
          l === null ? (o = l = t) : (l = l.next = t);
      } else o = l = t;
      (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: l, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
      return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Bl(e, t, n, r) {
  var o = e.updateQueue;
  Jt = !1;
  var l = o.firstBaseUpdate,
      i = o.lastBaseUpdate,
      a = o.shared.pending;
  if (a !== null) {
      o.shared.pending = null;
      var u = a,
          s = u.next;
      (u.next = null), i === null ? (l = s) : (i.next = s), (i = u);
      var c = e.alternate;
      c !== null && ((c = c.updateQueue), (a = c.lastBaseUpdate), a !== i && (a === null ? (c.firstBaseUpdate = s) : (a.next = s), (c.lastBaseUpdate = u)));
  }
  if (l !== null) {
      var p = o.baseState;
      (i = 0), (c = s = u = null), (a = l);
      do {
          var d = a.lane,
              v = a.eventTime;
          if ((r & d) === d) {
              c !== null && (c = c.next = { eventTime: v, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
              e: {
                  var y = e,
                      x = a;
                  switch (((d = t), (v = n), x.tag)) {
                      case 1:
                          if (((y = x.payload), typeof y == "function")) {
                              p = y.call(v, p, d);
                              break e;
                          }
                          p = y;
                          break e;
                      case 3:
                          y.flags = (y.flags & -65537) | 128;
                      case 0:
                          if (((y = x.payload), (d = typeof y == "function" ? y.call(v, p, d) : y), d == null)) break e;
                          p = ce({}, p, d);
                          break e;
                      case 2:
                          Jt = !0;
                  }
              }
              a.callback !== null && a.lane !== 0 && ((e.flags |= 64), (d = o.effects), d === null ? (o.effects = [a]) : d.push(a));
          } else (v = { eventTime: v, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }), c === null ? ((s = c = v), (u = p)) : (c = c.next = v), (i |= d);
          if (((a = a.next), a === null)) {
              if (((a = o.shared.pending), a === null)) break;
              (d = a), (a = d.next), (d.next = null), (o.lastBaseUpdate = d), (o.shared.pending = null);
          }
      } while (1);
      if ((c === null && (u = p), (o.baseState = u), (o.firstBaseUpdate = s), (o.lastBaseUpdate = c), (t = o.shared.interleaved), t !== null)) {
          o = t;
          do (i |= o.lane), (o = o.next);
          while (o !== t);
      } else l === null && (o.shared.lanes = 0);
      (bn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Yc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
          var r = e[t],
              o = r.callback;
          if (o !== null) {
              if (((r.callback = null), (r = n), typeof o != "function")) throw Error(N(191, o));
              o.call(r);
          }
      }
}
var wp = new yd.Component().refs;
function pu(e, t, n, r) {
  (t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : ce({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
}
var di = {
  isMounted: function (e) {
      return (e = e._reactInternals) ? Vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = De(),
          o = dn(e),
          l = Dt(r, o);
      (l.payload = t), n != null && (l.callback = n), (t = cn(e, l, o)), t !== null && (mt(t, e, o, r), gl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = De(),
          o = dn(e),
          l = Dt(r, o);
      (l.tag = 1), (l.payload = t), n != null && (l.callback = n), (t = cn(e, l, o)), t !== null && (mt(t, e, o, r), gl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = De(),
          r = dn(e),
          o = Dt(n, r);
      (o.tag = 2), t != null && (o.callback = t), (t = cn(e, o, r)), t !== null && (mt(t, e, r, n), gl(t, e, r));
  },
};
function Xc(e, t, n, r, o, l, i) {
  return (e = e.stateNode), typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !ko(n, r) || !ko(o, l) : !0;
}
function Sp(e, t, n) {
  var r = !1,
      o = gn,
      l = t.contextType;
  return (
      typeof l == "object" && l !== null ? (l = ot(l)) : ((o = Be(t) ? zn : $e.current), (r = t.contextTypes), (l = (r = r != null) ? kr(e, o) : gn)),
      (t = new t(n, l)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = di),
      (e.stateNode = t),
      (t._reactInternals = e),
      r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = o), (e.__reactInternalMemoizedMaskedChildContext = l)),
      t
  );
}
function Gc(e, t, n, r) {
  (e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && di.enqueueReplaceState(t, t.state, null);
}
function hu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = wp), ms(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? (o.context = ot(l)) : ((l = Be(t) ? zn : $e.current), (o.context = kr(e, l))),
      (o.state = e.memoizedState),
      (l = t.getDerivedStateFromProps),
      typeof l == "function" && (pu(e, t, l, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
          ((t = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
          t !== o.state && di.enqueueReplaceState(o, o.state, null),
          Bl(e, n, o, r),
          (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Qr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (n._owner) {
          if (((n = n._owner), n)) {
              if (n.tag !== 1) throw Error(N(309));
              var r = n.stateNode;
          }
          if (!r) throw Error(N(147, e));
          var o = r,
              l = "" + e;
          return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l
              ? t.ref
              : ((t = function (i) {
                    var a = o.refs;
                    a === wp && (a = o.refs = {}), i === null ? delete a[l] : (a[l] = i);
                }),
                (t._stringRef = l),
                t);
      }
      if (typeof e != "string") throw Error(N(284));
      if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function ll(e, t) {
  throw ((e = Object.prototype.toString.call(t)), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function Zc(e) {
  var t = e._init;
  return t(e._payload);
}
function kp(e) {
  function t(h, f) {
      if (e) {
          var g = h.deletions;
          g === null ? ((h.deletions = [f]), (h.flags |= 16)) : g.push(f);
      }
  }
  function n(h, f) {
      if (!e) return null;
      for (; f !== null; ) t(h, f), (f = f.sibling);
      return null;
  }
  function r(h, f) {
      for (h = new Map(); f !== null; ) f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
      return h;
  }
  function o(h, f) {
      return (h = pn(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function l(h, f, g) {
      return (h.index = g), e ? ((g = h.alternate), g !== null ? ((g = g.index), g < f ? ((h.flags |= 2), f) : g) : ((h.flags |= 2), f)) : ((h.flags |= 1048576), f);
  }
  function i(h) {
      return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, f, g, m) {
      return f === null || f.tag !== 6 ? ((f = Ca(g, h.mode, m)), (f.return = h), f) : ((f = o(f, g)), (f.return = h), f);
  }
  function u(h, f, g, m) {
      var P = g.type;
      return P === qn
          ? c(h, f, g.props.children, m, g.key)
          : f !== null && (f.elementType === P || (typeof P == "object" && P !== null && P.$$typeof === Zt && Zc(P) === f.type))
          ? ((m = o(f, g.props)), (m.ref = Qr(h, f, g)), (m.return = h), m)
          : ((m = El(g.type, g.key, g.props, null, h.mode, m)), (m.ref = Qr(h, f, g)), (m.return = h), m);
  }
  function s(h, f, g, m) {
      return f === null || f.tag !== 4 || f.stateNode.containerInfo !== g.containerInfo || f.stateNode.implementation !== g.implementation ? ((f = Pa(g, h.mode, m)), (f.return = h), f) : ((f = o(f, g.children || [])), (f.return = h), f);
  }
  function c(h, f, g, m, P) {
      return f === null || f.tag !== 7 ? ((f = Dn(g, h.mode, m, P)), (f.return = h), f) : ((f = o(f, g)), (f.return = h), f);
  }
  function p(h, f, g) {
      if ((typeof f == "string" && f !== "") || typeof f == "number") return (f = Ca("" + f, h.mode, g)), (f.return = h), f;
      if (typeof f == "object" && f !== null) {
          switch (f.$$typeof) {
              case Yo:
                  return (g = El(f.type, f.key, f.props, null, h.mode, g)), (g.ref = Qr(h, null, f)), (g.return = h), g;
              case Jn:
                  return (f = Pa(f, h.mode, g)), (f.return = h), f;
              case Zt:
                  var m = f._init;
                  return p(h, m(f._payload), g);
          }
          if (eo(f) || Ur(f)) return (f = Dn(f, h.mode, g, null)), (f.return = h), f;
          ll(h, f);
      }
      return null;
  }
  function d(h, f, g, m) {
      var P = f !== null ? f.key : null;
      if ((typeof g == "string" && g !== "") || typeof g == "number") return P !== null ? null : a(h, f, "" + g, m);
      if (typeof g == "object" && g !== null) {
          switch (g.$$typeof) {
              case Yo:
                  return g.key === P ? u(h, f, g, m) : null;
              case Jn:
                  return g.key === P ? s(h, f, g, m) : null;
              case Zt:
                  return (P = g._init), d(h, f, P(g._payload), m);
          }
          if (eo(g) || Ur(g)) return P !== null ? null : c(h, f, g, m, null);
          ll(h, g);
      }
      return null;
  }
  function v(h, f, g, m, P) {
      if ((typeof m == "string" && m !== "") || typeof m == "number") return (h = h.get(g) || null), a(f, h, "" + m, P);
      if (typeof m == "object" && m !== null) {
          switch (m.$$typeof) {
              case Yo:
                  return (h = h.get(m.key === null ? g : m.key) || null), u(f, h, m, P);
              case Jn:
                  return (h = h.get(m.key === null ? g : m.key) || null), s(f, h, m, P);
              case Zt:
                  var _ = m._init;
                  return v(h, f, g, _(m._payload), P);
          }
          if (eo(m) || Ur(m)) return (h = h.get(g) || null), c(f, h, m, P, null);
          ll(f, m);
      }
      return null;
  }
  function y(h, f, g, m) {
      for (var P = null, _ = null, R = f, T = (f = 0), B = null; R !== null && T < g.length; T++) {
          R.index > T ? ((B = R), (R = null)) : (B = R.sibling);
          var M = d(h, R, g[T], m);
          if (M === null) {
              R === null && (R = B);
              break;
          }
          e && R && M.alternate === null && t(h, R), (f = l(M, f, T)), _ === null ? (P = M) : (_.sibling = M), (_ = M), (R = B);
      }
      if (T === g.length) return n(h, R), ie && Nn(h, T), P;
      if (R === null) {
          for (; T < g.length; T++) (R = p(h, g[T], m)), R !== null && ((f = l(R, f, T)), _ === null ? (P = R) : (_.sibling = R), (_ = R));
          return ie && Nn(h, T), P;
      }
      for (R = r(h, R); T < g.length; T++) (B = v(R, h, T, g[T], m)), B !== null && (e && B.alternate !== null && R.delete(B.key === null ? T : B.key), (f = l(B, f, T)), _ === null ? (P = B) : (_.sibling = B), (_ = B));
      return (
          e &&
              R.forEach(function (re) {
                  return t(h, re);
              }),
          ie && Nn(h, T),
          P
      );
  }
  function x(h, f, g, m) {
      var P = Ur(g);
      if (typeof P != "function") throw Error(N(150));
      if (((g = P.call(g)), g == null)) throw Error(N(151));
      for (var _ = (P = null), R = f, T = (f = 0), B = null, M = g.next(); R !== null && !M.done; T++, M = g.next()) {
          R.index > T ? ((B = R), (R = null)) : (B = R.sibling);
          var re = d(h, R, M.value, m);
          if (re === null) {
              R === null && (R = B);
              break;
          }
          e && R && re.alternate === null && t(h, R), (f = l(re, f, T)), _ === null ? (P = re) : (_.sibling = re), (_ = re), (R = B);
      }
      if (M.done) return n(h, R), ie && Nn(h, T), P;
      if (R === null) {
          for (; !M.done; T++, M = g.next()) (M = p(h, M.value, m)), M !== null && ((f = l(M, f, T)), _ === null ? (P = M) : (_.sibling = M), (_ = M));
          return ie && Nn(h, T), P;
      }
      for (R = r(h, R); !M.done; T++, M = g.next()) (M = v(R, h, T, M.value, m)), M !== null && (e && M.alternate !== null && R.delete(M.key === null ? T : M.key), (f = l(M, f, T)), _ === null ? (P = M) : (_.sibling = M), (_ = M));
      return (
          e &&
              R.forEach(function (J) {
                  return t(h, J);
              }),
          ie && Nn(h, T),
          P
      );
  }
  function E(h, f, g, m) {
      if ((typeof g == "object" && g !== null && g.type === qn && g.key === null && (g = g.props.children), typeof g == "object" && g !== null)) {
          switch (g.$$typeof) {
              case Yo:
                  e: {
                      for (var P = g.key, _ = f; _ !== null; ) {
                          if (_.key === P) {
                              if (((P = g.type), P === qn)) {
                                  if (_.tag === 7) {
                                      n(h, _.sibling), (f = o(_, g.props.children)), (f.return = h), (h = f);
                                      break e;
                                  }
                              } else if (_.elementType === P || (typeof P == "object" && P !== null && P.$$typeof === Zt && Zc(P) === _.type)) {
                                  n(h, _.sibling), (f = o(_, g.props)), (f.ref = Qr(h, _, g)), (f.return = h), (h = f);
                                  break e;
                              }
                              n(h, _);
                              break;
                          } else t(h, _);
                          _ = _.sibling;
                      }
                      g.type === qn ? ((f = Dn(g.props.children, h.mode, m, g.key)), (f.return = h), (h = f)) : ((m = El(g.type, g.key, g.props, null, h.mode, m)), (m.ref = Qr(h, f, g)), (m.return = h), (h = m));
                  }
                  return i(h);
              case Jn:
                  e: {
                      for (_ = g.key; f !== null; ) {
                          if (f.key === _)
                              if (f.tag === 4 && f.stateNode.containerInfo === g.containerInfo && f.stateNode.implementation === g.implementation) {
                                  n(h, f.sibling), (f = o(f, g.children || [])), (f.return = h), (h = f);
                                  break e;
                              } else {
                                  n(h, f);
                                  break;
                              }
                          else t(h, f);
                          f = f.sibling;
                      }
                      (f = Pa(g, h.mode, m)), (f.return = h), (h = f);
                  }
                  return i(h);
              case Zt:
                  return (_ = g._init), E(h, f, _(g._payload), m);
          }
          if (eo(g)) return y(h, f, g, m);
          if (Ur(g)) return x(h, f, g, m);
          ll(h, g);
      }
      return (typeof g == "string" && g !== "") || typeof g == "number"
          ? ((g = "" + g), f !== null && f.tag === 6 ? (n(h, f.sibling), (f = o(f, g)), (f.return = h), (h = f)) : (n(h, f), (f = Ca(g, h.mode, m)), (f.return = h), (h = f)), i(h))
          : n(h, f);
  }
  return E;
}
var Cr = kp(!0),
  Ep = kp(!1),
  Fo = {},
  Pt = Sn(Fo),
  jo = Sn(Fo),
  No = Sn(Fo);
function On(e) {
  if (e === Fo) throw Error(N(174));
  return e;
}
function vs(e, t) {
  switch ((ee(No, t), ee(jo, e), ee(Pt, Fo), (e = t.nodeType), e)) {
      case 9:
      case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Qa(null, "");
          break;
      default:
          (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Qa(t, e));
  }
  ne(Pt), ee(Pt, t);
}
function Pr() {
  ne(Pt), ne(jo), ne(No);
}
function Cp(e) {
  On(No.current);
  var t = On(Pt.current),
      n = Qa(t, e.type);
  t !== n && (ee(jo, e), ee(Pt, n));
}
function gs(e) {
  jo.current === e && (ne(Pt), ne(jo));
}
var ue = Sn(0);
function Wl(e) {
  for (var t = e; t !== null; ) {
      if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
      } else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ya = [];
function ys() {
  for (var e = 0; e < ya.length; e++) ya[e]._workInProgressVersionPrimary = null;
  ya.length = 0;
}
var yl = Wt.ReactCurrentDispatcher,
  xa = Wt.ReactCurrentBatchConfig,
  An = 0,
  se = null,
  xe = null,
  ke = null,
  Vl = !1,
  so = !1,
  Ro = 0,
  dv = 0;
function _e() {
  throw Error(N(321));
}
function xs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!vt(e[n], t[n])) return !1;
  return !0;
}
function ws(e, t, n, r, o, l) {
  if (((An = l), (se = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (yl.current = e === null || e.memoizedState === null ? vv : gv), (e = n(r, o)), so)) {
      l = 0;
      do {
          if (((so = !1), (Ro = 0), 25 <= l)) throw Error(N(301));
          (l += 1), (ke = xe = null), (t.updateQueue = null), (yl.current = yv), (e = n(r, o));
      } while (so);
  }
  if (((yl.current = Hl), (t = xe !== null && xe.next !== null), (An = 0), (ke = xe = se = null), (Vl = !1), t)) throw Error(N(300));
  return e;
}
function Ss() {
  var e = Ro !== 0;
  return (Ro = 0), e;
}
function kt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ke === null ? (se.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function lt() {
  if (xe === null) {
      var e = se.alternate;
      e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = ke === null ? se.memoizedState : ke.next;
  if (t !== null) (ke = t), (xe = e);
  else {
      if (e === null) throw Error(N(310));
      (xe = e), (e = { memoizedState: xe.memoizedState, baseState: xe.baseState, baseQueue: xe.baseQueue, queue: xe.queue, next: null }), ke === null ? (se.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function _o(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wa(e) {
  var t = lt(),
      n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = xe,
      o = r.baseQueue,
      l = n.pending;
  if (l !== null) {
      if (o !== null) {
          var i = o.next;
          (o.next = l.next), (l.next = i);
      }
      (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
      (l = o.next), (r = r.baseState);
      var a = (i = null),
          u = null,
          s = l;
      do {
          var c = s.lane;
          if ((An & c) === c) u !== null && (u = u.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), (r = s.hasEagerState ? s.eagerState : e(r, s.action));
          else {
              var p = { lane: c, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null };
              u === null ? ((a = u = p), (i = r)) : (u = u.next = p), (se.lanes |= c), (bn |= c);
          }
          s = s.next;
      } while (s !== null && s !== l);
      u === null ? (i = r) : (u.next = a), vt(r, t.memoizedState) || (be = !0), (t.memoizedState = r), (t.baseState = i), (t.baseQueue = u), (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
      o = e;
      do (l = o.lane), (se.lanes |= l), (bn |= l), (o = o.next);
      while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Sa(e) {
  var t = lt(),
      n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
      o = n.pending,
      l = t.memoizedState;
  if (o !== null) {
      n.pending = null;
      var i = (o = o.next);
      do (l = e(l, i.action)), (i = i.next);
      while (i !== o);
      vt(l, t.memoizedState) || (be = !0), (t.memoizedState = l), t.baseQueue === null && (t.baseState = l), (n.lastRenderedState = l);
  }
  return [l, r];
}
function Pp() {}
function jp(e, t) {
  var n = se,
      r = lt(),
      o = t(),
      l = !vt(r.memoizedState, o);
  if ((l && ((r.memoizedState = o), (be = !0)), (r = r.queue), ks(_p.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || (ke !== null && ke.memoizedState.tag & 1))) {
      if (((n.flags |= 2048), Lo(9, Rp.bind(null, n, r, o, t), void 0, null), Ee === null)) throw Error(N(349));
      An & 30 || Np(n, t, o);
  }
  return o;
}
function Np(e, t, n) {
  (e.flags |= 16384), (e = { getSnapshot: t, value: n }), (t = se.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (se.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Rp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Lp(t) && Tp(e);
}
function _p(e, t, n) {
  return n(function () {
      Lp(t) && Tp(e);
  });
}
function Lp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
      var n = t();
      return !vt(e, n);
  } catch {
      return !0;
  }
}
function Tp(e) {
  var t = bt(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function Jc(e) {
  var t = kt();
  return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: _o, lastRenderedState: e }),
      (t.queue = e),
      (e = e.dispatch = mv.bind(null, se, e)),
      [t.memoizedState, e]
  );
}
function Lo(e, t, n, r) {
  return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = se.updateQueue),
      t === null
          ? ((t = { lastEffect: null, stores: null }), (se.updateQueue = t), (t.lastEffect = e.next = e))
          : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
  );
}
function Op() {
  return lt().memoizedState;
}
function xl(e, t, n, r) {
  var o = kt();
  (se.flags |= e), (o.memoizedState = Lo(1 | t, n, void 0, r === void 0 ? null : r));
}
function pi(e, t, n, r) {
  var o = lt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (xe !== null) {
      var i = xe.memoizedState;
      if (((l = i.destroy), r !== null && xs(r, i.deps))) {
          o.memoizedState = Lo(t, n, l, r);
          return;
      }
  }
  (se.flags |= e), (o.memoizedState = Lo(1 | t, n, l, r));
}
function qc(e, t) {
  return xl(8390656, 8, e, t);
}
function ks(e, t) {
  return pi(2048, 8, e, t);
}
function $p(e, t) {
  return pi(4, 2, e, t);
}
function Mp(e, t) {
  return pi(4, 4, e, t);
}
function Dp(e, t) {
  if (typeof t == "function")
      return (
          (e = e()),
          t(e),
          function () {
              t(null);
          }
      );
  if (t != null)
      return (
          (e = e()),
          (t.current = e),
          function () {
              t.current = null;
          }
      );
}
function zp(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), pi(4, 4, Dp.bind(null, t, e), n);
}
function Es() {}
function Ip(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xs(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Ap(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xs(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function bp(e, t, n) {
  return An & 21 ? (vt(n, t) || ((n = Bd()), (se.lanes |= n), (bn |= n), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (be = !0)), (e.memoizedState = n));
}
function pv(e, t) {
  var n = Q;
  (Q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = xa.transition;
  xa.transition = {};
  try {
      e(!1), t();
  } finally {
      (Q = n), (xa.transition = r);
  }
}
function Fp() {
  return lt().memoizedState;
}
function hv(e, t, n) {
  var r = dn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Up(e))) Bp(t, n);
  else if (((n = yp(e, t, n, r)), n !== null)) {
      var o = De();
      mt(n, e, r, o), Wp(n, t, r);
  }
}
function mv(e, t, n) {
  var r = dn(e),
      o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Up(e)) Bp(t, o);
  else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && ((l = t.lastRenderedReducer), l !== null))
          try {
              var i = t.lastRenderedState,
                  a = l(i, n);
              if (((o.hasEagerState = !0), (o.eagerState = a), vt(a, i))) {
                  var u = t.interleaved;
                  u === null ? ((o.next = o), hs(t)) : ((o.next = u.next), (u.next = o)), (t.interleaved = o);
                  return;
              }
          } catch {
          } finally {
          }
      (n = yp(e, t, o, r)), n !== null && ((o = De()), mt(n, e, r, o), Wp(n, t, r));
  }
}
function Up(e) {
  var t = e.alternate;
  return e === se || (t !== null && t === se);
}
function Bp(e, t) {
  so = Vl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Wp(e, t, n) {
  if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), es(e, n);
  }
}
var Hl = {
      readContext: ot,
      useCallback: _e,
      useContext: _e,
      useEffect: _e,
      useImperativeHandle: _e,
      useInsertionEffect: _e,
      useLayoutEffect: _e,
      useMemo: _e,
      useReducer: _e,
      useRef: _e,
      useState: _e,
      useDebugValue: _e,
      useDeferredValue: _e,
      useTransition: _e,
      useMutableSource: _e,
      useSyncExternalStore: _e,
      useId: _e,
      unstable_isNewReconciler: !1,
  },
  vv = {
      readContext: ot,
      useCallback: function (e, t) {
          return (kt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ot,
      useEffect: qc,
      useImperativeHandle: function (e, t, n) {
          return (n = n != null ? n.concat([e]) : null), xl(4194308, 4, Dp.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
          return xl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
          return xl(4, 2, e, t);
      },
      useMemo: function (e, t) {
          var n = kt();
          return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
      },
      useReducer: function (e, t, n) {
          var r = kt();
          return (
              (t = n !== void 0 ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
              (r.queue = e),
              (e = e.dispatch = hv.bind(null, se, e)),
              [r.memoizedState, e]
          );
      },
      useRef: function (e) {
          var t = kt();
          return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Jc,
      useDebugValue: Es,
      useDeferredValue: function (e) {
          return (kt().memoizedState = e);
      },
      useTransition: function () {
          var e = Jc(!1),
              t = e[0];
          return (e = pv.bind(null, e[1])), (kt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
          var r = se,
              o = kt();
          if (ie) {
              if (n === void 0) throw Error(N(407));
              n = n();
          } else {
              if (((n = t()), Ee === null)) throw Error(N(349));
              An & 30 || Np(r, t, n);
          }
          o.memoizedState = n;
          var l = { value: n, getSnapshot: t };
          return (o.queue = l), qc(_p.bind(null, r, l, e), [e]), (r.flags |= 2048), Lo(9, Rp.bind(null, r, l, n, t), void 0, null), n;
      },
      useId: function () {
          var e = kt(),
              t = Ee.identifierPrefix;
          if (ie) {
              var n = Mt,
                  r = $t;
              (n = (r & ~(1 << (32 - ht(r) - 1))).toString(32) + n), (t = ":" + t + "R" + n), (n = Ro++), 0 < n && (t += "H" + n.toString(32)), (t += ":");
          } else (n = dv++), (t = ":" + t + "r" + n.toString(32) + ":");
          return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
  },
  gv = {
      readContext: ot,
      useCallback: Ip,
      useContext: ot,
      useEffect: ks,
      useImperativeHandle: zp,
      useInsertionEffect: $p,
      useLayoutEffect: Mp,
      useMemo: Ap,
      useReducer: wa,
      useRef: Op,
      useState: function () {
          return wa(_o);
      },
      useDebugValue: Es,
      useDeferredValue: function (e) {
          var t = lt();
          return bp(t, xe.memoizedState, e);
      },
      useTransition: function () {
          var e = wa(_o)[0],
              t = lt().memoizedState;
          return [e, t];
      },
      useMutableSource: Pp,
      useSyncExternalStore: jp,
      useId: Fp,
      unstable_isNewReconciler: !1,
  },
  yv = {
      readContext: ot,
      useCallback: Ip,
      useContext: ot,
      useEffect: ks,
      useImperativeHandle: zp,
      useInsertionEffect: $p,
      useLayoutEffect: Mp,
      useMemo: Ap,
      useReducer: Sa,
      useRef: Op,
      useState: function () {
          return Sa(_o);
      },
      useDebugValue: Es,
      useDeferredValue: function (e) {
          var t = lt();
          return xe === null ? (t.memoizedState = e) : bp(t, xe.memoizedState, e);
      },
      useTransition: function () {
          var e = Sa(_o)[0],
              t = lt().memoizedState;
          return [e, t];
      },
      useMutableSource: Pp,
      useSyncExternalStore: jp,
      useId: Fp,
      unstable_isNewReconciler: !1,
  };
function jr(e, t) {
  try {
      var n = "",
          r = t;
      do (n += Qm(r)), (r = r.return);
      while (r);
      var o = n;
  } catch (l) {
      o =
          `
Error generating stack: ` +
          l.message +
          `
` +
          l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ka(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function mu(e, t) {
  try {
      console.error(t.value);
  } catch (n) {
      setTimeout(function () {
          throw n;
      });
  }
}
var xv = typeof WeakMap == "function" ? WeakMap : Map;
function Vp(e, t, n) {
  (n = Dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
      (n.callback = function () {
          Kl || ((Kl = !0), (Pu = r)), mu(e, t);
      }),
      n
  );
}
function Hp(e, t, n) {
  (n = Dt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
      var o = t.value;
      (n.payload = function () {
          return r(o);
      }),
          (n.callback = function () {
              mu(e, t);
          });
  }
  var l = e.stateNode;
  return (
      l !== null &&
          typeof l.componentDidCatch == "function" &&
          (n.callback = function () {
              mu(e, t), typeof r != "function" && (fn === null ? (fn = new Set([this])) : fn.add(this));
              var i = t.stack;
              this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
          }),
      n
  );
}
function ef(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
      r = e.pingCache = new xv();
      var o = new Set();
      r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = $v.bind(null, e, t, n)), t.then(e, e));
}
function tf(e) {
  do {
      var t;
      if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
      e = e.return;
  } while (e !== null);
  return null;
}
function nf(e, t, n, r, o) {
  return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = o), e)
      : (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Dt(-1, 1)), (t.tag = 2), cn(n, t, 1))), (n.lanes |= 1)), e);
}
var wv = Wt.ReactCurrentOwner,
  be = !1;
function Me(e, t, n, r) {
  t.child = e === null ? Ep(t, null, n, r) : Cr(t, e.child, n, r);
}
function rf(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return vr(t, o), (r = ws(e, t, n, r, l, o)), (n = Ss()), e !== null && !be ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Ft(e, t, o)) : (ie && n && us(t), (t.flags |= 1), Me(e, t, r, o), t.child);
}
function of(e, t, n, r, o) {
  if (e === null) {
      var l = n.type;
      return typeof l == "function" && !Ts(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
          ? ((t.tag = 15), (t.type = l), Qp(e, t, l, r, o))
          : ((e = El(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
      var i = l.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : ko), n(i, r) && e.ref === t.ref)) return Ft(e, t, o);
  }
  return (t.flags |= 1), (e = pn(l, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Qp(e, t, n, r, o) {
  if (e !== null) {
      var l = e.memoizedProps;
      if (ko(l, r) && e.ref === t.ref)
          if (((be = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0)) e.flags & 131072 && (be = !0);
          else return (t.lanes = e.lanes), Ft(e, t, o);
  }
  return vu(e, t, n, r, o);
}
function Kp(e, t, n) {
  var r = t.pendingProps,
      o = r.children,
      l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
      if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ee(sr, He), (He |= n);
      else {
          if (!(n & 1073741824))
              return (e = l !== null ? l.baseLanes | n : n), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (t.updateQueue = null), ee(sr, He), (He |= e), null;
          (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = l !== null ? l.baseLanes : n), ee(sr, He), (He |= r);
      }
  else l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n), ee(sr, He), (He |= r);
  return Me(e, t, o, n), t.child;
}
function Yp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function vu(e, t, n, r, o) {
  var l = Be(n) ? zn : $e.current;
  return (
      (l = kr(t, l)), vr(t, o), (n = ws(e, t, n, r, l, o)), (r = Ss()), e !== null && !be ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), Ft(e, t, o)) : (ie && r && us(t), (t.flags |= 1), Me(e, t, n, o), t.child)
  );
}
function lf(e, t, n, r, o) {
  if (Be(n)) {
      var l = !0;
      Il(t);
  } else l = !1;
  if ((vr(t, o), t.stateNode === null)) wl(e, t), Sp(t, n, r), hu(t, n, r, o), (r = !0);
  else if (e === null) {
      var i = t.stateNode,
          a = t.memoizedProps;
      i.props = a;
      var u = i.context,
          s = n.contextType;
      typeof s == "object" && s !== null ? (s = ot(s)) : ((s = Be(n) ? zn : $e.current), (s = kr(t, s)));
      var c = n.getDerivedStateFromProps,
          p = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      p || (typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function") || ((a !== r || u !== s) && Gc(t, i, r, s)), (Jt = !1);
      var d = t.memoizedState;
      (i.state = d),
          Bl(t, r, i, o),
          (u = t.memoizedState),
          a !== r || d !== u || Ue.current || Jt
              ? (typeof c == "function" && (pu(t, n, c, r), (u = t.memoizedState)),
                (a = Jt || Xc(t, n, a, r, d, u, s))
                    ? (p ||
                          (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
                          (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
                      typeof i.componentDidMount == "function" && (t.flags |= 4194308))
                    : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = u)),
                (i.props = r),
                (i.state = u),
                (i.context = s),
                (r = a))
              : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
      (i = t.stateNode),
          xp(e, t),
          (a = t.memoizedProps),
          (s = t.type === t.elementType ? a : st(t.type, a)),
          (i.props = s),
          (p = t.pendingProps),
          (d = i.context),
          (u = n.contextType),
          typeof u == "object" && u !== null ? (u = ot(u)) : ((u = Be(n) ? zn : $e.current), (u = kr(t, u)));
      var v = n.getDerivedStateFromProps;
      (c = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function") ||
          ((a !== p || d !== u) && Gc(t, i, r, u)),
          (Jt = !1),
          (d = t.memoizedState),
          (i.state = d),
          Bl(t, r, i, o);
      var y = t.memoizedState;
      a !== p || d !== y || Ue.current || Jt
          ? (typeof v == "function" && (pu(t, n, v, r), (y = t.memoizedState)),
            (s = Jt || Xc(t, n, s, r, d, y, u) || !1)
                ? (c ||
                      (typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function") ||
                      (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, u)),
                  typeof i.componentDidUpdate == "function" && (t.flags |= 4),
                  typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                : (typeof i.componentDidUpdate != "function" || (a === e.memoizedProps && d === e.memoizedState) || (t.flags |= 4),
                  typeof i.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && d === e.memoizedState) || (t.flags |= 1024),
                  (t.memoizedProps = r),
                  (t.memoizedState = y)),
            (i.props = r),
            (i.state = y),
            (i.context = u),
            (r = s))
          : (typeof i.componentDidUpdate != "function" || (a === e.memoizedProps && d === e.memoizedState) || (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && d === e.memoizedState) || (t.flags |= 1024),
            (r = !1));
  }
  return gu(e, t, n, r, l, o);
}
function gu(e, t, n, r, o, l) {
  Yp(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Vc(t, n, !1), Ft(e, t, l);
  (r = t.stateNode), (wv.current = t);
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (t.flags |= 1), e !== null && i ? ((t.child = Cr(t, e.child, null, l)), (t.child = Cr(t, null, a, l))) : Me(e, t, a, l), (t.memoizedState = r.state), o && Vc(t, n, !0), t.child;
}
function Xp(e) {
  var t = e.stateNode;
  t.pendingContext ? Wc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Wc(e, t.context, !1), vs(e, t.containerInfo);
}
function af(e, t, n, r, o) {
  return Er(), cs(o), (t.flags |= 256), Me(e, t, n, r), t.child;
}
var yu = { dehydrated: null, treeContext: null, retryLane: 0 };
function xu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gp(e, t, n) {
  var r = t.pendingProps,
      o = ue.current,
      l = !1,
      i = (t.flags & 128) !== 0,
      a;
  if (((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? ((l = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1), ee(ue, o & 1), e === null))
      return (
          fu(t),
          (e = t.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)
              ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
              : ((i = r.children),
                (e = r.fallback),
                l
                    ? ((r = t.mode),
                      (l = t.child),
                      (i = { mode: "hidden", children: i }),
                      !(r & 1) && l !== null ? ((l.childLanes = 0), (l.pendingProps = i)) : (l = vi(i, r, 0, null)),
                      (e = Dn(e, r, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = xu(n)),
                      (t.memoizedState = yu),
                      e)
                    : Cs(t, i))
      );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null))) return Sv(e, t, i, r, a, o, n);
  if (l) {
      (l = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling);
      var u = { mode: "hidden", children: r.children };
      return (
          !(i & 1) && t.child !== o ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = u), (t.deletions = null)) : ((r = pn(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
          a !== null ? (l = pn(a, l)) : ((l = Dn(l, i, n, null)), (l.flags |= 2)),
          (l.return = t),
          (r.return = t),
          (r.sibling = l),
          (t.child = r),
          (r = l),
          (l = t.child),
          (i = e.child.memoizedState),
          (i = i === null ? xu(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
          (l.memoizedState = i),
          (l.childLanes = e.childLanes & ~n),
          (t.memoizedState = yu),
          r
      );
  }
  return (
      (l = e.child),
      (e = l.sibling),
      (r = pn(l, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
  );
}
function Cs(e, t) {
  return (t = vi({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function il(e, t, n, r) {
  return r !== null && cs(r), Cr(t, e.child, null, n), (e = Cs(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function Sv(e, t, n, r, o, l, i) {
  if (n)
      return t.flags & 256
          ? ((t.flags &= -257), (r = ka(Error(N(422)))), il(e, t, i, r))
          : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((l = r.fallback),
            (o = t.mode),
            (r = vi({ mode: "visible", children: r.children }, o, 0, null)),
            (l = Dn(l, o, i, null)),
            (l.flags |= 2),
            (r.return = t),
            (l.return = t),
            (r.sibling = l),
            (t.child = r),
            t.mode & 1 && Cr(t, e.child, null, i),
            (t.child.memoizedState = xu(i)),
            (t.memoizedState = yu),
            l);
  if (!(t.mode & 1)) return il(e, t, i, null);
  if (o.data === "$!") {
      if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
      return (r = a), (l = Error(N(419))), (r = ka(l, r, void 0)), il(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), be || a)) {
      if (((r = Ee), r !== null)) {
          switch (i & -i) {
              case 4:
                  o = 2;
                  break;
              case 16:
                  o = 8;
                  break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                  o = 32;
                  break;
              case 536870912:
                  o = 268435456;
                  break;
              default:
                  o = 0;
          }
          (o = o & (r.suspendedLanes | i) ? 0 : o), o !== 0 && o !== l.retryLane && ((l.retryLane = o), bt(e, o), mt(r, e, o, -1));
      }
      return Ls(), (r = ka(Error(N(421)))), il(e, t, i, r);
  }
  return o.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Mv.bind(null, e)), (o._reactRetry = t), null)
      : ((e = l.treeContext),
        (Qe = sn(o.nextSibling)),
        (Ke = t),
        (ie = !0),
        (dt = null),
        e !== null && ((et[tt++] = $t), (et[tt++] = Mt), (et[tt++] = In), ($t = e.id), (Mt = e.overflow), (In = t)),
        (t = Cs(t, r.children)),
        (t.flags |= 4096),
        t);
}
function uf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), du(e.return, t, n);
}
function Ea(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
      ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
      : ((l.isBackwards = t), (l.rendering = null), (l.renderingStartTime = 0), (l.last = r), (l.tail = n), (l.tailMode = o));
}
function Zp(e, t, n) {
  var r = t.pendingProps,
      o = r.revealOrder,
      l = r.tail;
  if ((Me(e, t, r.children, n), (r = ue.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
      if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
              if (e.tag === 13) e.memoizedState !== null && uf(e, n, t);
              else if (e.tag === 19) uf(e, n, t);
              else if (e.child !== null) {
                  (e.child.return = e), (e = e.child);
                  continue;
              }
              if (e === t) break e;
              for (; e.sibling === null; ) {
                  if (e.return === null || e.return === t) break e;
                  e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
          }
      r &= 1;
  }
  if ((ee(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
      switch (o) {
          case "forwards":
              for (n = t.child, o = null; n !== null; ) (e = n.alternate), e !== null && Wl(e) === null && (o = n), (n = n.sibling);
              (n = o), n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)), Ea(t, !1, o, n, l);
              break;
          case "backwards":
              for (n = null, o = t.child, t.child = null; o !== null; ) {
                  if (((e = o.alternate), e !== null && Wl(e) === null)) {
                      t.child = o;
                      break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
              }
              Ea(t, !0, n, null, l);
              break;
          case "together":
              Ea(t, !1, null, null, void 0);
              break;
          default:
              t.memoizedState = null;
      }
  return t.child;
}
function wl(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ft(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (bn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
      for (e = t.child, n = pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = pn(e, e.pendingProps)), (n.return = t);
      n.sibling = null;
  }
  return t.child;
}
function kv(e, t, n) {
  switch (t.tag) {
      case 3:
          Xp(t), Er();
          break;
      case 5:
          Cp(t);
          break;
      case 1:
          Be(t.type) && Il(t);
          break;
      case 4:
          vs(t, t.stateNode.containerInfo);
          break;
      case 10:
          var r = t.type._context,
              o = t.memoizedProps.value;
          ee(Fl, r._currentValue), (r._currentValue = o);
          break;
      case 13:
          if (((r = t.memoizedState), r !== null))
              return r.dehydrated !== null ? (ee(ue, ue.current & 1), (t.flags |= 128), null) : n & t.child.childLanes ? Gp(e, t, n) : (ee(ue, ue.current & 1), (e = Ft(e, t, n)), e !== null ? e.sibling : null);
          ee(ue, ue.current & 1);
          break;
      case 19:
          if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
              if (r) return Zp(e, t, n);
              t.flags |= 128;
          }
          if (((o = t.memoizedState), o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)), ee(ue, ue.current), r)) break;
          return null;
      case 22:
      case 23:
          return (t.lanes = 0), Kp(e, t, n);
  }
  return Ft(e, t, n);
}
var Jp, wu, qp, eh;
Jp = function (e, t) {
  for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
          (n.child.return = n), (n = n.child);
          continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return;
          n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
  }
};
wu = function () {};
qp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
      (e = t.stateNode), On(Pt.current);
      var l = null;
      switch (n) {
          case "input":
              (o = Ba(e, o)), (r = Ba(e, r)), (l = []);
              break;
          case "select":
              (o = ce({}, o, { value: void 0 })), (r = ce({}, r, { value: void 0 })), (l = []);
              break;
          case "textarea":
              (o = Ha(e, o)), (r = Ha(e, r)), (l = []);
              break;
          default:
              typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Dl);
      }
      Ka(n, r);
      var i;
      n = null;
      for (s in o)
          if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && o[s] != null)
              if (s === "style") {
                  var a = o[s];
                  for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
              } else
                  s !== "dangerouslySetInnerHTML" &&
                      s !== "children" &&
                      s !== "suppressContentEditableWarning" &&
                      s !== "suppressHydrationWarning" &&
                      s !== "autoFocus" &&
                      (mo.hasOwnProperty(s) ? l || (l = []) : (l = l || []).push(s, null));
      for (s in r) {
          var u = r[s];
          if (((a = o != null ? o[s] : void 0), r.hasOwnProperty(s) && u !== a && (u != null || a != null)))
              if (s === "style")
                  if (a) {
                      for (i in a) !a.hasOwnProperty(i) || (u && u.hasOwnProperty(i)) || (n || (n = {}), (n[i] = ""));
                      for (i in u) u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}), (n[i] = u[i]));
                  } else n || (l || (l = []), l.push(s, n)), (n = u);
              else
                  s === "dangerouslySetInnerHTML"
                      ? ((u = u ? u.__html : void 0), (a = a ? a.__html : void 0), u != null && a !== u && (l = l || []).push(s, u))
                      : s === "children"
                      ? (typeof u != "string" && typeof u != "number") || (l = l || []).push(s, "" + u)
                      : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (mo.hasOwnProperty(s) ? (u != null && s === "onScroll" && te("scroll", e), l || a === u || (l = [])) : (l = l || []).push(s, u));
      }
      n && (l = l || []).push("style", n);
      var s = l;
      (t.updateQueue = s) && (t.flags |= 4);
  }
};
eh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Kr(e, t) {
  if (!ie)
      switch (e.tailMode) {
          case "hidden":
              t = e.tail;
              for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
              n === null ? (e.tail = null) : (n.sibling = null);
              break;
          case "collapsed":
              n = e.tail;
              for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
              r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
      }
}
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
  if (t) for (var o = e.child; o !== null; ) (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags & 14680064), (r |= o.flags & 14680064), (o.return = e), (o = o.sibling);
  else for (o = e.child; o !== null; ) (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ev(e, t, n) {
  var r = t.pendingProps;
  switch ((ss(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
          return Le(t), null;
      case 1:
          return Be(t.type) && zl(), Le(t), null;
      case 3:
          return (
              (r = t.stateNode),
              Pr(),
              ne(Ue),
              ne($e),
              ys(),
              r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
              (e === null || e.child === null) && (ol(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), dt !== null && (Ru(dt), (dt = null)))),
              wu(e, t),
              Le(t),
              null
          );
      case 5:
          gs(t);
          var o = On(No.current);
          if (((n = t.type), e !== null && t.stateNode != null)) qp(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
          else {
              if (!r) {
                  if (t.stateNode === null) throw Error(N(166));
                  return Le(t), null;
              }
              if (((e = On(Pt.current)), ol(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[Et] = t), (r[Po] = l), (e = (t.mode & 1) !== 0), n)) {
                      case "dialog":
                          te("cancel", r), te("close", r);
                          break;
                      case "iframe":
                      case "object":
                      case "embed":
                          te("load", r);
                          break;
                      case "video":
                      case "audio":
                          for (o = 0; o < no.length; o++) te(no[o], r);
                          break;
                      case "source":
                          te("error", r);
                          break;
                      case "img":
                      case "image":
                      case "link":
                          te("error", r), te("load", r);
                          break;
                      case "details":
                          te("toggle", r);
                          break;
                      case "input":
                          vc(r, l), te("invalid", r);
                          break;
                      case "select":
                          (r._wrapperState = { wasMultiple: !!l.multiple }), te("invalid", r);
                          break;
                      case "textarea":
                          yc(r, l), te("invalid", r);
                  }
                  Ka(n, l), (o = null);
                  for (var i in l)
                      if (l.hasOwnProperty(i)) {
                          var a = l[i];
                          i === "children"
                              ? typeof a == "string"
                                  ? r.textContent !== a && (l.suppressHydrationWarning !== !0 && rl(r.textContent, a, e), (o = ["children", a]))
                                  : typeof a == "number" && r.textContent !== "" + a && (l.suppressHydrationWarning !== !0 && rl(r.textContent, a, e), (o = ["children", "" + a]))
                              : mo.hasOwnProperty(i) && a != null && i === "onScroll" && te("scroll", r);
                      }
                  switch (n) {
                      case "input":
                          Xo(r), gc(r, l, !0);
                          break;
                      case "textarea":
                          Xo(r), xc(r);
                          break;
                      case "select":
                      case "option":
                          break;
                      default:
                          typeof l.onClick == "function" && (r.onclick = Dl);
                  }
                  (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
              } else {
                  (i = o.nodeType === 9 ? o : o.ownerDocument),
                      e === "http://www.w3.org/1999/xhtml" && (e = Nd(n)),
                      e === "http://www.w3.org/1999/xhtml"
                          ? n === "script"
                              ? ((e = i.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                              : typeof r.is == "string"
                              ? (e = i.createElement(n, { is: r.is }))
                              : ((e = i.createElement(n)), n === "select" && ((i = e), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
                          : (e = i.createElementNS(e, n)),
                      (e[Et] = t),
                      (e[Po] = r),
                      Jp(e, t, !1, !1),
                      (t.stateNode = e);
                  e: {
                      switch (((i = Ya(n, r)), n)) {
                          case "dialog":
                              te("cancel", e), te("close", e), (o = r);
                              break;
                          case "iframe":
                          case "object":
                          case "embed":
                              te("load", e), (o = r);
                              break;
                          case "video":
                          case "audio":
                              for (o = 0; o < no.length; o++) te(no[o], e);
                              o = r;
                              break;
                          case "source":
                              te("error", e), (o = r);
                              break;
                          case "img":
                          case "image":
                          case "link":
                              te("error", e), te("load", e), (o = r);
                              break;
                          case "details":
                              te("toggle", e), (o = r);
                              break;
                          case "input":
                              vc(e, r), (o = Ba(e, r)), te("invalid", e);
                              break;
                          case "option":
                              o = r;
                              break;
                          case "select":
                              (e._wrapperState = { wasMultiple: !!r.multiple }), (o = ce({}, r, { value: void 0 })), te("invalid", e);
                              break;
                          case "textarea":
                              yc(e, r), (o = Ha(e, r)), te("invalid", e);
                              break;
                          default:
                              o = r;
                      }
                      Ka(n, o), (a = o);
                      for (l in a)
                          if (a.hasOwnProperty(l)) {
                              var u = a[l];
                              l === "style"
                                  ? Ld(e, u)
                                  : l === "dangerouslySetInnerHTML"
                                  ? ((u = u ? u.__html : void 0), u != null && Rd(e, u))
                                  : l === "children"
                                  ? typeof u == "string"
                                      ? (n !== "textarea" || u !== "") && vo(e, u)
                                      : typeof u == "number" && vo(e, "" + u)
                                  : l !== "suppressContentEditableWarning" &&
                                    l !== "suppressHydrationWarning" &&
                                    l !== "autoFocus" &&
                                    (mo.hasOwnProperty(l) ? u != null && l === "onScroll" && te("scroll", e) : u != null && Yu(e, l, u, i));
                          }
                      switch (n) {
                          case "input":
                              Xo(e), gc(e, r, !1);
                              break;
                          case "textarea":
                              Xo(e), xc(e);
                              break;
                          case "option":
                              r.value != null && e.setAttribute("value", "" + vn(r.value));
                              break;
                          case "select":
                              (e.multiple = !!r.multiple), (l = r.value), l != null ? dr(e, !!r.multiple, l, !1) : r.defaultValue != null && dr(e, !!r.multiple, r.defaultValue, !0);
                              break;
                          default:
                              typeof o.onClick == "function" && (e.onclick = Dl);
                      }
                      switch (n) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                              r = !!r.autoFocus;
                              break e;
                          case "img":
                              r = !0;
                              break e;
                          default:
                              r = !1;
                      }
                  }
                  r && (t.flags |= 4);
              }
              t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
          }
          return Le(t), null;
      case 6:
          if (e && t.stateNode != null) eh(e, t, e.memoizedProps, r);
          else {
              if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
              if (((n = On(No.current)), On(Pt.current), ol(t))) {
                  if (((r = t.stateNode), (n = t.memoizedProps), (r[Et] = t), (l = r.nodeValue !== n) && ((e = Ke), e !== null)))
                      switch (e.tag) {
                          case 3:
                              rl(r.nodeValue, n, (e.mode & 1) !== 0);
                              break;
                          case 5:
                              e.memoizedProps.suppressHydrationWarning !== !0 && rl(r.nodeValue, n, (e.mode & 1) !== 0);
                      }
                  l && (t.flags |= 4);
              } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Et] = t), (t.stateNode = r);
          }
          return Le(t), null;
      case 13:
          if ((ne(ue), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
              if (ie && Qe !== null && t.mode & 1 && !(t.flags & 128)) gp(), Er(), (t.flags |= 98560), (l = !1);
              else if (((l = ol(t)), r !== null && r.dehydrated !== null)) {
                  if (e === null) {
                      if (!l) throw Error(N(318));
                      if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(N(317));
                      l[Et] = t;
                  } else Er(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                  Le(t), (l = !1);
              } else dt !== null && (Ru(dt), (dt = null)), (l = !0);
              if (!l) return t.flags & 65536 ? t : null;
          }
          return t.flags & 128
              ? ((t.lanes = n), t)
              : ((r = r !== null),
                r !== (e !== null && e.memoizedState !== null) && r && ((t.child.flags |= 8192), t.mode & 1 && (e === null || ue.current & 1 ? we === 0 && (we = 3) : Ls())),
                t.updateQueue !== null && (t.flags |= 4),
                Le(t),
                null);
      case 4:
          return Pr(), wu(e, t), e === null && Eo(t.stateNode.containerInfo), Le(t), null;
      case 10:
          return ps(t.type._context), Le(t), null;
      case 17:
          return Be(t.type) && zl(), Le(t), null;
      case 19:
          if ((ne(ue), (l = t.memoizedState), l === null)) return Le(t), null;
          if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
              if (r) Kr(l, !1);
              else {
                  if (we !== 0 || (e !== null && e.flags & 128))
                      for (e = t.child; e !== null; ) {
                          if (((i = Wl(e)), i !== null)) {
                              for (t.flags |= 128, Kr(l, !1), r = i.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                                  (l = n),
                                      (e = r),
                                      (l.flags &= 14680066),
                                      (i = l.alternate),
                                      i === null
                                          ? ((l.childLanes = 0),
                                            (l.lanes = e),
                                            (l.child = null),
                                            (l.subtreeFlags = 0),
                                            (l.memoizedProps = null),
                                            (l.memoizedState = null),
                                            (l.updateQueue = null),
                                            (l.dependencies = null),
                                            (l.stateNode = null))
                                          : ((l.childLanes = i.childLanes),
                                            (l.lanes = i.lanes),
                                            (l.child = i.child),
                                            (l.subtreeFlags = 0),
                                            (l.deletions = null),
                                            (l.memoizedProps = i.memoizedProps),
                                            (l.memoizedState = i.memoizedState),
                                            (l.updateQueue = i.updateQueue),
                                            (l.type = i.type),
                                            (e = i.dependencies),
                                            (l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                                      (n = n.sibling);
                              return ee(ue, (ue.current & 1) | 2), t.child;
                          }
                          e = e.sibling;
                      }
                  l.tail !== null && he() > Nr && ((t.flags |= 128), (r = !0), Kr(l, !1), (t.lanes = 4194304));
              }
          else {
              if (!r)
                  if (((e = Wl(i)), e !== null)) {
                      if (((t.flags |= 128), (r = !0), (n = e.updateQueue), n !== null && ((t.updateQueue = n), (t.flags |= 4)), Kr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !ie)) return Le(t), null;
                  } else 2 * he() - l.renderingStartTime > Nr && n !== 1073741824 && ((t.flags |= 128), (r = !0), Kr(l, !1), (t.lanes = 4194304));
              l.isBackwards ? ((i.sibling = t.child), (t.child = i)) : ((n = l.last), n !== null ? (n.sibling = i) : (t.child = i), (l.last = i));
          }
          return l.tail !== null ? ((t = l.tail), (l.rendering = t), (l.tail = t.sibling), (l.renderingStartTime = he()), (t.sibling = null), (n = ue.current), ee(ue, r ? (n & 1) | 2 : n & 1), t) : (Le(t), null);
      case 22:
      case 23:
          return _s(), (r = t.memoizedState !== null), e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192), r && t.mode & 1 ? He & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t), null;
      case 24:
          return null;
      case 25:
          return null;
  }
  throw Error(N(156, t.tag));
}
function Cv(e, t) {
  switch ((ss(t), t.tag)) {
      case 1:
          return Be(t.type) && zl(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
          return Pr(), ne(Ue), ne($e), ys(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
      case 5:
          return gs(t), null;
      case 13:
          if ((ne(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
              if (t.alternate === null) throw Error(N(340));
              Er();
          }
          return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
          return ne(ue), null;
      case 4:
          return Pr(), null;
      case 10:
          return ps(t.type._context), null;
      case 22:
      case 23:
          return _s(), null;
      case 24:
          return null;
      default:
          return null;
  }
}
var al = !1,
  Oe = !1,
  Pv = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function ur(e, t) {
  var n = e.ref;
  if (n !== null)
      if (typeof n == "function")
          try {
              n(null);
          } catch (r) {
              fe(e, t, r);
          }
      else n.current = null;
}
function Su(e, t, n) {
  try {
      n();
  } catch (r) {
      fe(e, t, r);
  }
}
var sf = !1;
function jv(e, t) {
  if (((ou = Ol), (e = op()), as(e))) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
          e: {
              n = ((n = e.ownerDocument) && n.defaultView) || window;
              var r = n.getSelection && n.getSelection();
              if (r && r.rangeCount !== 0) {
                  n = r.anchorNode;
                  var o = r.anchorOffset,
                      l = r.focusNode;
                  r = r.focusOffset;
                  try {
                      n.nodeType, l.nodeType;
                  } catch {
                      n = null;
                      break e;
                  }
                  var i = 0,
                      a = -1,
                      u = -1,
                      s = 0,
                      c = 0,
                      p = e,
                      d = null;
                  t: for (;;) {
                      for (var v; p !== n || (o !== 0 && p.nodeType !== 3) || (a = i + o), p !== l || (r !== 0 && p.nodeType !== 3) || (u = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (v = p.firstChild) !== null; )
                          (d = p), (p = v);
                      for (;;) {
                          if (p === e) break t;
                          if ((d === n && ++s === o && (a = i), d === l && ++c === r && (u = i), (v = p.nextSibling) !== null)) break;
                          (p = d), (d = p.parentNode);
                      }
                      p = v;
                  }
                  n = a === -1 || u === -1 ? null : { start: a, end: u };
              } else n = null;
          }
      n = n || { start: 0, end: 0 };
  } else n = null;
  for (lu = { focusedElem: e, selectionRange: n }, Ol = !1, O = t; O !== null; )
      if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (O = e);
      else
          for (; O !== null; ) {
              t = O;
              try {
                  var y = t.alternate;
                  if (t.flags & 1024)
                      switch (t.tag) {
                          case 0:
                          case 11:
                          case 15:
                              break;
                          case 1:
                              if (y !== null) {
                                  var x = y.memoizedProps,
                                      E = y.memoizedState,
                                      h = t.stateNode,
                                      f = h.getSnapshotBeforeUpdate(t.elementType === t.type ? x : st(t.type, x), E);
                                  h.__reactInternalSnapshotBeforeUpdate = f;
                              }
                              break;
                          case 3:
                              var g = t.stateNode.containerInfo;
                              g.nodeType === 1 ? (g.textContent = "") : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                              break;
                          case 5:
                          case 6:
                          case 4:
                          case 17:
                              break;
                          default:
                              throw Error(N(163));
                      }
              } catch (m) {
                  fe(t, t.return, m);
              }
              if (((e = t.sibling), e !== null)) {
                  (e.return = t.return), (O = e);
                  break;
              }
              O = t.return;
          }
  return (y = sf), (sf = !1), y;
}
function co(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var o = (r = r.next);
      do {
          if ((o.tag & e) === e) {
              var l = o.destroy;
              (o.destroy = void 0), l !== void 0 && Su(t, n, l);
          }
          o = o.next;
      } while (o !== r);
  }
}
function hi(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var n = (t = t.next);
      do {
          if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r();
          }
          n = n.next;
      } while (n !== t);
  }
}
function ku(e) {
  var t = e.ref;
  if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
          case 5:
              e = n;
              break;
          default:
              e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
  }
}
function th(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), th(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Et], delete t[Po], delete t[uu], delete t[uv], delete t[sv])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
}
function nh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cf(e) {
  e: for (;;) {
      for (; e.sibling === null; ) {
          if (e.return === null || nh(e.return)) return null;
          e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
  }
}
function Eu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
      (e = e.stateNode),
          t
              ? n.nodeType === 8
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
              : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)), (n = n._reactRootContainer), n != null || t.onclick !== null || (t.onclick = Dl));
  else if (r !== 4 && ((e = e.child), e !== null)) for (Eu(e, t, n), e = e.sibling; e !== null; ) Eu(e, t, n), (e = e.sibling);
}
function Cu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null)) for (Cu(e, t, n), e = e.sibling; e !== null; ) Cu(e, t, n), (e = e.sibling);
}
var je = null,
  ct = !1;
function Gt(e, t, n) {
  for (n = n.child; n !== null; ) rh(e, t, n), (n = n.sibling);
}
function rh(e, t, n) {
  if (Ct && typeof Ct.onCommitFiberUnmount == "function")
      try {
          Ct.onCommitFiberUnmount(ii, n);
      } catch {}
  switch (n.tag) {
      case 5:
          Oe || ur(n, t);
      case 6:
          var r = je,
              o = ct;
          (je = null), Gt(e, t, n), (je = r), (ct = o), je !== null && (ct ? ((e = je), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : je.removeChild(n.stateNode));
          break;
      case 18:
          je !== null && (ct ? ((e = je), (n = n.stateNode), e.nodeType === 8 ? va(e.parentNode, n) : e.nodeType === 1 && va(e, n), wo(e)) : va(je, n.stateNode));
          break;
      case 4:
          (r = je), (o = ct), (je = n.stateNode.containerInfo), (ct = !0), Gt(e, t, n), (je = r), (ct = o);
          break;
      case 0:
      case 11:
      case 14:
      case 15:
          if (!Oe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
              o = r = r.next;
              do {
                  var l = o,
                      i = l.destroy;
                  (l = l.tag), i !== void 0 && (l & 2 || l & 4) && Su(n, t, i), (o = o.next);
              } while (o !== r);
          }
          Gt(e, t, n);
          break;
      case 1:
          if (!Oe && (ur(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
              try {
                  (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
              } catch (a) {
                  fe(n, t, a);
              }
          Gt(e, t, n);
          break;
      case 21:
          Gt(e, t, n);
          break;
      case 22:
          n.mode & 1 ? ((Oe = (r = Oe) || n.memoizedState !== null), Gt(e, t, n), (Oe = r)) : Gt(e, t, n);
          break;
      default:
          Gt(e, t, n);
  }
}
function ff(e) {
  var t = e.updateQueue;
  if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Pv()),
          t.forEach(function (r) {
              var o = Dv.bind(null, e, r);
              n.has(r) || (n.add(r), r.then(o, o));
          });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
      for (var r = 0; r < n.length; r++) {
          var o = n[r];
          try {
              var l = e,
                  i = t,
                  a = i;
              e: for (; a !== null; ) {
                  switch (a.tag) {
                      case 5:
                          (je = a.stateNode), (ct = !1);
                          break e;
                      case 3:
                          (je = a.stateNode.containerInfo), (ct = !0);
                          break e;
                      case 4:
                          (je = a.stateNode.containerInfo), (ct = !0);
                          break e;
                  }
                  a = a.return;
              }
              if (je === null) throw Error(N(160));
              rh(l, i, o), (je = null), (ct = !1);
              var u = o.alternate;
              u !== null && (u.return = null), (o.return = null);
          } catch (s) {
              fe(o, t, s);
          }
      }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) oh(t, e), (t = t.sibling);
}
function oh(e, t) {
  var n = e.alternate,
      r = e.flags;
  switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
          if ((ut(t, e), wt(e), r & 4)) {
              try {
                  co(3, e, e.return), hi(3, e);
              } catch (x) {
                  fe(e, e.return, x);
              }
              try {
                  co(5, e, e.return);
              } catch (x) {
                  fe(e, e.return, x);
              }
          }
          break;
      case 1:
          ut(t, e), wt(e), r & 512 && n !== null && ur(n, n.return);
          break;
      case 5:
          if ((ut(t, e), wt(e), r & 512 && n !== null && ur(n, n.return), e.flags & 32)) {
              var o = e.stateNode;
              try {
                  vo(o, "");
              } catch (x) {
                  fe(e, e.return, x);
              }
          }
          if (r & 4 && ((o = e.stateNode), o != null)) {
              var l = e.memoizedProps,
                  i = n !== null ? n.memoizedProps : l,
                  a = e.type,
                  u = e.updateQueue;
              if (((e.updateQueue = null), u !== null))
                  try {
                      a === "input" && l.type === "radio" && l.name != null && Pd(o, l), Ya(a, i);
                      var s = Ya(a, l);
                      for (i = 0; i < u.length; i += 2) {
                          var c = u[i],
                              p = u[i + 1];
                          c === "style" ? Ld(o, p) : c === "dangerouslySetInnerHTML" ? Rd(o, p) : c === "children" ? vo(o, p) : Yu(o, c, p, s);
                      }
                      switch (a) {
                          case "input":
                              Wa(o, l);
                              break;
                          case "textarea":
                              jd(o, l);
                              break;
                          case "select":
                              var d = o._wrapperState.wasMultiple;
                              o._wrapperState.wasMultiple = !!l.multiple;
                              var v = l.value;
                              v != null ? dr(o, !!l.multiple, v, !1) : d !== !!l.multiple && (l.defaultValue != null ? dr(o, !!l.multiple, l.defaultValue, !0) : dr(o, !!l.multiple, l.multiple ? [] : "", !1));
                      }
                      o[Po] = l;
                  } catch (x) {
                      fe(e, e.return, x);
                  }
          }
          break;
      case 6:
          if ((ut(t, e), wt(e), r & 4)) {
              if (e.stateNode === null) throw Error(N(162));
              (o = e.stateNode), (l = e.memoizedProps);
              try {
                  o.nodeValue = l;
              } catch (x) {
                  fe(e, e.return, x);
              }
          }
          break;
      case 3:
          if ((ut(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
              try {
                  wo(t.containerInfo);
              } catch (x) {
                  fe(e, e.return, x);
              }
          break;
      case 4:
          ut(t, e), wt(e);
          break;
      case 13:
          ut(t, e), wt(e), (o = e.child), o.flags & 8192 && ((l = o.memoizedState !== null), (o.stateNode.isHidden = l), !l || (o.alternate !== null && o.alternate.memoizedState !== null) || (Ns = he())), r & 4 && ff(e);
          break;
      case 22:
          if (((c = n !== null && n.memoizedState !== null), e.mode & 1 ? ((Oe = (s = Oe) || c), ut(t, e), (Oe = s)) : ut(t, e), wt(e), r & 8192)) {
              if (((s = e.memoizedState !== null), (e.stateNode.isHidden = s) && !c && e.mode & 1))
                  for (O = e, c = e.child; c !== null; ) {
                      for (p = O = c; O !== null; ) {
                          switch (((d = O), (v = d.child), d.tag)) {
                              case 0:
                              case 11:
                              case 14:
                              case 15:
                                  co(4, d, d.return);
                                  break;
                              case 1:
                                  ur(d, d.return);
                                  var y = d.stateNode;
                                  if (typeof y.componentWillUnmount == "function") {
                                      (r = d), (n = d.return);
                                      try {
                                          (t = r), (y.props = t.memoizedProps), (y.state = t.memoizedState), y.componentWillUnmount();
                                      } catch (x) {
                                          fe(r, n, x);
                                      }
                                  }
                                  break;
                              case 5:
                                  ur(d, d.return);
                                  break;
                              case 22:
                                  if (d.memoizedState !== null) {
                                      pf(p);
                                      continue;
                                  }
                          }
                          v !== null ? ((v.return = d), (O = v)) : pf(p);
                      }
                      c = c.sibling;
                  }
              e: for (c = null, p = e; ; ) {
                  if (p.tag === 5) {
                      if (c === null) {
                          c = p;
                          try {
                              (o = p.stateNode),
                                  s
                                      ? ((l = o.style), typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : (l.display = "none"))
                                      : ((a = p.stateNode), (u = p.memoizedProps.style), (i = u != null && u.hasOwnProperty("display") ? u.display : null), (a.style.display = _d("display", i)));
                          } catch (x) {
                              fe(e, e.return, x);
                          }
                      }
                  } else if (p.tag === 6) {
                      if (c === null)
                          try {
                              p.stateNode.nodeValue = s ? "" : p.memoizedProps;
                          } catch (x) {
                              fe(e, e.return, x);
                          }
                  } else if (((p.tag !== 22 && p.tag !== 23) || p.memoizedState === null || p === e) && p.child !== null) {
                      (p.child.return = p), (p = p.child);
                      continue;
                  }
                  if (p === e) break e;
                  for (; p.sibling === null; ) {
                      if (p.return === null || p.return === e) break e;
                      c === p && (c = null), (p = p.return);
                  }
                  c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling);
              }
          }
          break;
      case 19:
          ut(t, e), wt(e), r & 4 && ff(e);
          break;
      case 21:
          break;
      default:
          ut(t, e), wt(e);
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
      try {
          e: {
              for (var n = e.return; n !== null; ) {
                  if (nh(n)) {
                      var r = n;
                      break e;
                  }
                  n = n.return;
              }
              throw Error(N(160));
          }
          switch (r.tag) {
              case 5:
                  var o = r.stateNode;
                  r.flags & 32 && (vo(o, ""), (r.flags &= -33));
                  var l = cf(e);
                  Cu(e, l, o);
                  break;
              case 3:
              case 4:
                  var i = r.stateNode.containerInfo,
                      a = cf(e);
                  Eu(e, a, i);
                  break;
              default:
                  throw Error(N(161));
          }
      } catch (u) {
          fe(e, e.return, u);
      }
      e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Nv(e, t, n) {
  (O = e), lh(e);
}
function lh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
      var o = O,
          l = o.child;
      if (o.tag === 22 && r) {
          var i = o.memoizedState !== null || al;
          if (!i) {
              var a = o.alternate,
                  u = (a !== null && a.memoizedState !== null) || Oe;
              a = al;
              var s = Oe;
              if (((al = i), (Oe = u) && !s)) for (O = o; O !== null; ) (i = O), (u = i.child), i.tag === 22 && i.memoizedState !== null ? hf(o) : u !== null ? ((u.return = i), (O = u)) : hf(o);
              for (; l !== null; ) (O = l), lh(l), (l = l.sibling);
              (O = o), (al = a), (Oe = s);
          }
          df(e);
      } else o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (O = l)) : df(e);
  }
}
function df(e) {
  for (; O !== null; ) {
      var t = O;
      if (t.flags & 8772) {
          var n = t.alternate;
          try {
              if (t.flags & 8772)
                  switch (t.tag) {
                      case 0:
                      case 11:
                      case 15:
                          Oe || hi(5, t);
                          break;
                      case 1:
                          var r = t.stateNode;
                          if (t.flags & 4 && !Oe)
                              if (n === null) r.componentDidMount();
                              else {
                                  var o = t.elementType === t.type ? n.memoizedProps : st(t.type, n.memoizedProps);
                                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                              }
                          var l = t.updateQueue;
                          l !== null && Yc(t, l, r);
                          break;
                      case 3:
                          var i = t.updateQueue;
                          if (i !== null) {
                              if (((n = null), t.child !== null))
                                  switch (t.child.tag) {
                                      case 5:
                                          n = t.child.stateNode;
                                          break;
                                      case 1:
                                          n = t.child.stateNode;
                                  }
                              Yc(t, i, n);
                          }
                          break;
                      case 5:
                          var a = t.stateNode;
                          if (n === null && t.flags & 4) {
                              n = a;
                              var u = t.memoizedProps;
                              switch (t.type) {
                                  case "button":
                                  case "input":
                                  case "select":
                                  case "textarea":
                                      u.autoFocus && n.focus();
                                      break;
                                  case "img":
                                      u.src && (n.src = u.src);
                              }
                          }
                          break;
                      case 6:
                          break;
                      case 4:
                          break;
                      case 12:
                          break;
                      case 13:
                          if (t.memoizedState === null) {
                              var s = t.alternate;
                              if (s !== null) {
                                  var c = s.memoizedState;
                                  if (c !== null) {
                                      var p = c.dehydrated;
                                      p !== null && wo(p);
                                  }
                              }
                          }
                          break;
                      case 19:
                      case 17:
                      case 21:
                      case 22:
                      case 23:
                      case 25:
                          break;
                      default:
                          throw Error(N(163));
                  }
              Oe || (t.flags & 512 && ku(t));
          } catch (d) {
              fe(t, t.return, d);
          }
      }
      if (t === e) {
          O = null;
          break;
      }
      if (((n = t.sibling), n !== null)) {
          (n.return = t.return), (O = n);
          break;
      }
      O = t.return;
  }
}
function pf(e) {
  for (; O !== null; ) {
      var t = O;
      if (t === e) {
          O = null;
          break;
      }
      var n = t.sibling;
      if (n !== null) {
          (n.return = t.return), (O = n);
          break;
      }
      O = t.return;
  }
}
function hf(e) {
  for (; O !== null; ) {
      var t = O;
      try {
          switch (t.tag) {
              case 0:
              case 11:
              case 15:
                  var n = t.return;
                  try {
                      hi(4, t);
                  } catch (u) {
                      fe(t, n, u);
                  }
                  break;
              case 1:
                  var r = t.stateNode;
                  if (typeof r.componentDidMount == "function") {
                      var o = t.return;
                      try {
                          r.componentDidMount();
                      } catch (u) {
                          fe(t, o, u);
                      }
                  }
                  var l = t.return;
                  try {
                      ku(t);
                  } catch (u) {
                      fe(t, l, u);
                  }
                  break;
              case 5:
                  var i = t.return;
                  try {
                      ku(t);
                  } catch (u) {
                      fe(t, i, u);
                  }
          }
      } catch (u) {
          fe(t, t.return, u);
      }
      if (t === e) {
          O = null;
          break;
      }
      var a = t.sibling;
      if (a !== null) {
          (a.return = t.return), (O = a);
          break;
      }
      O = t.return;
  }
}
var Rv = Math.ceil,
  Ql = Wt.ReactCurrentDispatcher,
  Ps = Wt.ReactCurrentOwner,
  rt = Wt.ReactCurrentBatchConfig,
  H = 0,
  Ee = null,
  ge = null,
  Ne = 0,
  He = 0,
  sr = Sn(0),
  we = 0,
  To = null,
  bn = 0,
  mi = 0,
  js = 0,
  fo = null,
  Ae = null,
  Ns = 0,
  Nr = 1 / 0,
  Tt = null,
  Kl = !1,
  Pu = null,
  fn = null,
  ul = !1,
  on = null,
  Yl = 0,
  po = 0,
  ju = null,
  Sl = -1,
  kl = 0;
function De() {
  return H & 6 ? he() : Sl !== -1 ? Sl : (Sl = he());
}
function dn(e) {
  return e.mode & 1 ? (H & 2 && Ne !== 0 ? Ne & -Ne : fv.transition !== null ? (kl === 0 && (kl = Bd()), kl) : ((e = Q), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xd(e.type))), e)) : 1;
}
function mt(e, t, n, r) {
  if (50 < po) throw ((po = 0), (ju = null), Error(N(185)));
  Io(e, n, r), (!(H & 2) || e !== Ee) && (e === Ee && (!(H & 2) && (mi |= n), we === 4 && en(e, Ne)), We(e, r), n === 1 && H === 0 && !(t.mode & 1) && ((Nr = he() + 500), fi && kn()));
}
function We(e, t) {
  var n = e.callbackNode;
  f0(e, t);
  var r = Tl(e, e === Ee ? Ne : 0);
  if (r === 0) n !== null && kc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && kc(n), t === 1))
          e.tag === 0 ? cv(mf.bind(null, e)) : hp(mf.bind(null, e)),
              iv(function () {
                  !(H & 6) && kn();
              }),
              (n = null);
      else {
          switch (Wd(r)) {
              case 1:
                  n = qu;
                  break;
              case 4:
                  n = Fd;
                  break;
              case 16:
                  n = Ll;
                  break;
              case 536870912:
                  n = Ud;
                  break;
              default:
                  n = Ll;
          }
          n = ph(n, ih.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ih(e, t) {
  if (((Sl = -1), (kl = 0), H & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (gr() && e.callbackNode !== n) return null;
  var r = Tl(e, e === Ee ? Ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Xl(e, r);
  else {
      t = r;
      var o = H;
      H |= 2;
      var l = uh();
      (Ee !== e || Ne !== t) && ((Tt = null), (Nr = he() + 500), Mn(e, t));
      do
          try {
              Tv();
              break;
          } catch (a) {
              ah(e, a);
          }
      while (1);
      ds(), (Ql.current = l), (H = o), ge !== null ? (t = 0) : ((Ee = null), (Ne = 0), (t = we));
  }
  if (t !== 0) {
      if ((t === 2 && ((o = qa(e)), o !== 0 && ((r = o), (t = Nu(e, o)))), t === 1)) throw ((n = To), Mn(e, 0), en(e, r), We(e, he()), n);
      if (t === 6) en(e, r);
      else {
          if (((o = e.current.alternate), !(r & 30) && !_v(o) && ((t = Xl(e, r)), t === 2 && ((l = qa(e)), l !== 0 && ((r = l), (t = Nu(e, l)))), t === 1))) throw ((n = To), Mn(e, 0), en(e, r), We(e, he()), n);
          switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
              case 0:
              case 1:
                  throw Error(N(345));
              case 2:
                  Rn(e, Ae, Tt);
                  break;
              case 3:
                  if ((en(e, r), (r & 130023424) === r && ((t = Ns + 500 - he()), 10 < t))) {
                      if (Tl(e, 0) !== 0) break;
                      if (((o = e.suspendedLanes), (o & r) !== r)) {
                          De(), (e.pingedLanes |= e.suspendedLanes & o);
                          break;
                      }
                      e.timeoutHandle = au(Rn.bind(null, e, Ae, Tt), t);
                      break;
                  }
                  Rn(e, Ae, Tt);
                  break;
              case 4:
                  if ((en(e, r), (r & 4194240) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                      var i = 31 - ht(r);
                      (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
                  }
                  if (((r = o), (r = he() - r), (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Rv(r / 1960)) - r), 10 < r)) {
                      e.timeoutHandle = au(Rn.bind(null, e, Ae, Tt), r);
                      break;
                  }
                  Rn(e, Ae, Tt);
                  break;
              case 5:
                  Rn(e, Ae, Tt);
                  break;
              default:
                  throw Error(N(329));
          }
      }
  }
  return We(e, he()), e.callbackNode === n ? ih.bind(null, e) : null;
}
function Nu(e, t) {
  var n = fo;
  return e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256), (e = Xl(e, t)), e !== 2 && ((t = Ae), (Ae = n), t !== null && Ru(t)), e;
}
function Ru(e) {
  Ae === null ? (Ae = e) : Ae.push.apply(Ae, e);
}
function _v(e) {
  for (var t = e; ; ) {
      if (t.flags & 16384) {
          var n = t.updateQueue;
          if (n !== null && ((n = n.stores), n !== null))
              for (var r = 0; r < n.length; r++) {
                  var o = n[r],
                      l = o.getSnapshot;
                  o = o.value;
                  try {
                      if (!vt(l(), o)) return !1;
                  } catch {
                      return !1;
                  }
              }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
      else {
          if (t === e) break;
          for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) return !0;
              t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
      }
  }
  return !0;
}
function en(e, t) {
  for (t &= ~js, t &= ~mi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - ht(t),
          r = 1 << n;
      (e[n] = -1), (t &= ~r);
  }
}
function mf(e) {
  if (H & 6) throw Error(N(327));
  gr();
  var t = Tl(e, 0);
  if (!(t & 1)) return We(e, he()), null;
  var n = Xl(e, t);
  if (e.tag !== 0 && n === 2) {
      var r = qa(e);
      r !== 0 && ((t = r), (n = Nu(e, r)));
  }
  if (n === 1) throw ((n = To), Mn(e, 0), en(e, t), We(e, he()), n);
  if (n === 6) throw Error(N(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Rn(e, Ae, Tt), We(e, he()), null;
}
function Rs(e, t) {
  var n = H;
  H |= 1;
  try {
      return e(t);
  } finally {
      (H = n), H === 0 && ((Nr = he() + 500), fi && kn());
  }
}
function Fn(e) {
  on !== null && on.tag === 0 && !(H & 6) && gr();
  var t = H;
  H |= 1;
  var n = rt.transition,
      r = Q;
  try {
      if (((rt.transition = null), (Q = 1), e)) return e();
  } finally {
      (Q = r), (rt.transition = n), (H = t), !(H & 6) && kn();
  }
}
function _s() {
  (He = sr.current), ne(sr);
}
function Mn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), lv(n)), ge !== null))
      for (n = ge.return; n !== null; ) {
          var r = n;
          switch ((ss(r), r.tag)) {
              case 1:
                  (r = r.type.childContextTypes), r != null && zl();
                  break;
              case 3:
                  Pr(), ne(Ue), ne($e), ys();
                  break;
              case 5:
                  gs(r);
                  break;
              case 4:
                  Pr();
                  break;
              case 13:
                  ne(ue);
                  break;
              case 19:
                  ne(ue);
                  break;
              case 10:
                  ps(r.type._context);
                  break;
              case 22:
              case 23:
                  _s();
          }
          n = n.return;
      }
  if (((Ee = e), (ge = e = pn(e.current, null)), (Ne = He = t), (we = 0), (To = null), (js = mi = bn = 0), (Ae = fo = null), Tn !== null)) {
      for (t = 0; t < Tn.length; t++)
          if (((n = Tn[t]), (r = n.interleaved), r !== null)) {
              n.interleaved = null;
              var o = r.next,
                  l = n.pending;
              if (l !== null) {
                  var i = l.next;
                  (l.next = o), (r.next = i);
              }
              n.pending = r;
          }
      Tn = null;
  }
  return e;
}
function ah(e, t) {
  do {
      var n = ge;
      try {
          if ((ds(), (yl.current = Hl), Vl)) {
              for (var r = se.memoizedState; r !== null; ) {
                  var o = r.queue;
                  o !== null && (o.pending = null), (r = r.next);
              }
              Vl = !1;
          }
          if (((An = 0), (ke = xe = se = null), (so = !1), (Ro = 0), (Ps.current = null), n === null || n.return === null)) {
              (we = 1), (To = t), (ge = null);
              break;
          }
          e: {
              var l = e,
                  i = n.return,
                  a = n,
                  u = t;
              if (((t = Ne), (a.flags |= 32768), u !== null && typeof u == "object" && typeof u.then == "function")) {
                  var s = u,
                      c = a,
                      p = c.tag;
                  if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                      var d = c.alternate;
                      d ? ((c.updateQueue = d.updateQueue), (c.memoizedState = d.memoizedState), (c.lanes = d.lanes)) : ((c.updateQueue = null), (c.memoizedState = null));
                  }
                  var v = tf(i);
                  if (v !== null) {
                      (v.flags &= -257), nf(v, i, a, l, t), v.mode & 1 && ef(l, s, t), (t = v), (u = s);
                      var y = t.updateQueue;
                      if (y === null) {
                          var x = new Set();
                          x.add(u), (t.updateQueue = x);
                      } else y.add(u);
                      break e;
                  } else {
                      if (!(t & 1)) {
                          ef(l, s, t), Ls();
                          break e;
                      }
                      u = Error(N(426));
                  }
              } else if (ie && a.mode & 1) {
                  var E = tf(i);
                  if (E !== null) {
                      !(E.flags & 65536) && (E.flags |= 256), nf(E, i, a, l, t), cs(jr(u, a));
                      break e;
                  }
              }
              (l = u = jr(u, a)), we !== 4 && (we = 2), fo === null ? (fo = [l]) : fo.push(l), (l = i);
              do {
                  switch (l.tag) {
                      case 3:
                          (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                          var h = Vp(l, u, t);
                          Kc(l, h);
                          break e;
                      case 1:
                          a = u;
                          var f = l.type,
                              g = l.stateNode;
                          if (!(l.flags & 128) && (typeof f.getDerivedStateFromError == "function" || (g !== null && typeof g.componentDidCatch == "function" && (fn === null || !fn.has(g))))) {
                              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                              var m = Hp(l, a, t);
                              Kc(l, m);
                              break e;
                          }
                  }
                  l = l.return;
              } while (l !== null);
          }
          ch(n);
      } catch (P) {
          (t = P), ge === n && n !== null && (ge = n = n.return);
          continue;
      }
      break;
  } while (1);
}
function uh() {
  var e = Ql.current;
  return (Ql.current = Hl), e === null ? Hl : e;
}
function Ls() {
  (we === 0 || we === 3 || we === 2) && (we = 4), Ee === null || (!(bn & 268435455) && !(mi & 268435455)) || en(Ee, Ne);
}
function Xl(e, t) {
  var n = H;
  H |= 2;
  var r = uh();
  (Ee !== e || Ne !== t) && ((Tt = null), Mn(e, t));
  do
      try {
          Lv();
          break;
      } catch (o) {
          ah(e, o);
      }
  while (1);
  if ((ds(), (H = n), (Ql.current = r), ge !== null)) throw Error(N(261));
  return (Ee = null), (Ne = 0), we;
}
function Lv() {
  for (; ge !== null; ) sh(ge);
}
function Tv() {
  for (; ge !== null && !n0(); ) sh(ge);
}
function sh(e) {
  var t = dh(e.alternate, e, He);
  (e.memoizedProps = e.pendingProps), t === null ? ch(e) : (ge = t), (Ps.current = null);
}
function ch(e) {
  var t = e;
  do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
          if (((n = Cv(n, t)), n !== null)) {
              (n.flags &= 32767), (ge = n);
              return;
          }
          if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
          else {
              (we = 6), (ge = null);
              return;
          }
      } else if (((n = Ev(n, t, He)), n !== null)) {
          ge = n;
          return;
      }
      if (((t = t.sibling), t !== null)) {
          ge = t;
          return;
      }
      ge = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function Rn(e, t, n) {
  var r = Q,
      o = rt.transition;
  try {
      (rt.transition = null), (Q = 1), Ov(e, t, n, r);
  } finally {
      (rt.transition = o), (Q = r);
  }
  return null;
}
function Ov(e, t, n, r) {
  do gr();
  while (on !== null);
  if (H & 6) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
      (d0(e, l),
      e === Ee && ((ge = Ee = null), (Ne = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
          ul ||
          ((ul = !0),
          ph(Ll, function () {
              return gr(), null;
          })),
      (l = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || l)
  ) {
      (l = rt.transition), (rt.transition = null);
      var i = Q;
      Q = 1;
      var a = H;
      (H |= 4), (Ps.current = null), jv(e, n), oh(n, e), J0(lu), (Ol = !!ou), (lu = ou = null), (e.current = n), Nv(n), r0(), (H = a), (Q = i), (rt.transition = l);
  } else e.current = n;
  if ((ul && ((ul = !1), (on = e), (Yl = o)), (l = e.pendingLanes), l === 0 && (fn = null), i0(n.stateNode), We(e, he()), t !== null))
      for (r = e.onRecoverableError, n = 0; n < t.length; n++) (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Kl) throw ((Kl = !1), (e = Pu), (Pu = null), e);
  return Yl & 1 && e.tag !== 0 && gr(), (l = e.pendingLanes), l & 1 ? (e === ju ? po++ : ((po = 0), (ju = e))) : (po = 0), kn(), null;
}
function gr() {
  if (on !== null) {
      var e = Wd(Yl),
          t = rt.transition,
          n = Q;
      try {
          if (((rt.transition = null), (Q = 16 > e ? 16 : e), on === null)) var r = !1;
          else {
              if (((e = on), (on = null), (Yl = 0), H & 6)) throw Error(N(331));
              var o = H;
              for (H |= 4, O = e.current; O !== null; ) {
                  var l = O,
                      i = l.child;
                  if (O.flags & 16) {
                      var a = l.deletions;
                      if (a !== null) {
                          for (var u = 0; u < a.length; u++) {
                              var s = a[u];
                              for (O = s; O !== null; ) {
                                  var c = O;
                                  switch (c.tag) {
                                      case 0:
                                      case 11:
                                      case 15:
                                          co(8, c, l);
                                  }
                                  var p = c.child;
                                  if (p !== null) (p.return = c), (O = p);
                                  else
                                      for (; O !== null; ) {
                                          c = O;
                                          var d = c.sibling,
                                              v = c.return;
                                          if ((th(c), c === s)) {
                                              O = null;
                                              break;
                                          }
                                          if (d !== null) {
                                              (d.return = v), (O = d);
                                              break;
                                          }
                                          O = v;
                                      }
                              }
                          }
                          var y = l.alternate;
                          if (y !== null) {
                              var x = y.child;
                              if (x !== null) {
                                  y.child = null;
                                  do {
                                      var E = x.sibling;
                                      (x.sibling = null), (x = E);
                                  } while (x !== null);
                              }
                          }
                          O = l;
                      }
                  }
                  if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (O = i);
                  else
                      e: for (; O !== null; ) {
                          if (((l = O), l.flags & 2048))
                              switch (l.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                      co(9, l, l.return);
                              }
                          var h = l.sibling;
                          if (h !== null) {
                              (h.return = l.return), (O = h);
                              break e;
                          }
                          O = l.return;
                      }
              }
              var f = e.current;
              for (O = f; O !== null; ) {
                  i = O;
                  var g = i.child;
                  if (i.subtreeFlags & 2064 && g !== null) (g.return = i), (O = g);
                  else
                      e: for (i = f; O !== null; ) {
                          if (((a = O), a.flags & 2048))
                              try {
                                  switch (a.tag) {
                                      case 0:
                                      case 11:
                                      case 15:
                                          hi(9, a);
                                  }
                              } catch (P) {
                                  fe(a, a.return, P);
                              }
                          if (a === i) {
                              O = null;
                              break e;
                          }
                          var m = a.sibling;
                          if (m !== null) {
                              (m.return = a.return), (O = m);
                              break e;
                          }
                          O = a.return;
                      }
              }
              if (((H = o), kn(), Ct && typeof Ct.onPostCommitFiberRoot == "function"))
                  try {
                      Ct.onPostCommitFiberRoot(ii, e);
                  } catch {}
              r = !0;
          }
          return r;
      } finally {
          (Q = n), (rt.transition = t);
      }
  }
  return !1;
}
function vf(e, t, n) {
  (t = jr(n, t)), (t = Vp(e, t, 1)), (e = cn(e, t, 1)), (t = De()), e !== null && (Io(e, 1, t), We(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) vf(e, e, n);
  else
      for (; t !== null; ) {
          if (t.tag === 3) {
              vf(t, e, n);
              break;
          } else if (t.tag === 1) {
              var r = t.stateNode;
              if (typeof t.type.getDerivedStateFromError == "function" || (typeof r.componentDidCatch == "function" && (fn === null || !fn.has(r)))) {
                  (e = jr(n, e)), (e = Hp(t, e, 1)), (t = cn(t, e, 1)), (e = De()), t !== null && (Io(t, 1, e), We(t, e));
                  break;
              }
          }
          t = t.return;
      }
}
function $v(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), (t = De()), (e.pingedLanes |= e.suspendedLanes & n), Ee === e && (Ne & n) === n && (we === 4 || (we === 3 && (Ne & 130023424) === Ne && 500 > he() - Ns) ? Mn(e, 0) : (js |= n)), We(e, t);
}
function fh(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Jo), (Jo <<= 1), !(Jo & 130023424) && (Jo = 4194304)) : (t = 1));
  var n = De();
  (e = bt(e, t)), e !== null && (Io(e, t, n), We(e, n));
}
function Mv(e) {
  var t = e.memoizedState,
      n = 0;
  t !== null && (n = t.retryLane), fh(e, n);
}
function Dv(e, t) {
  var n = 0;
  switch (e.tag) {
      case 13:
          var r = e.stateNode,
              o = e.memoizedState;
          o !== null && (n = o.retryLane);
          break;
      case 19:
          r = e.stateNode;
          break;
      default:
          throw Error(N(314));
  }
  r !== null && r.delete(t), fh(e, n);
}
var dh;
dh = function (e, t, n) {
  if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ue.current) be = !0;
      else {
          if (!(e.lanes & n) && !(t.flags & 128)) return (be = !1), kv(e, t, n);
          be = !!(e.flags & 131072);
      }
  else (be = !1), ie && t.flags & 1048576 && mp(t, bl, t.index);
  switch (((t.lanes = 0), t.tag)) {
      case 2:
          var r = t.type;
          wl(e, t), (e = t.pendingProps);
          var o = kr(t, $e.current);
          vr(t, n), (o = ws(null, t, r, e, o, n));
          var l = Ss();
          return (
              (t.flags |= 1),
              typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Be(r) ? ((l = !0), Il(t)) : (l = !1),
                    (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
                    ms(t),
                    (o.updater = di),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    hu(t, r, e, n),
                    (t = gu(null, t, r, !0, l, n)))
                  : ((t.tag = 0), ie && l && us(t), Me(null, t, o, n), (t = t.child)),
              t
          );
      case 16:
          r = t.elementType;
          e: {
              switch ((wl(e, t), (e = t.pendingProps), (o = r._init), (r = o(r._payload)), (t.type = r), (o = t.tag = Iv(r)), (e = st(r, e)), o)) {
                  case 0:
                      t = vu(null, t, r, e, n);
                      break e;
                  case 1:
                      t = lf(null, t, r, e, n);
                      break e;
                  case 11:
                      t = rf(null, t, r, e, n);
                      break e;
                  case 14:
                      t = of(null, t, r, st(r.type, e), n);
                      break e;
              }
              throw Error(N(306, r, ""));
          }
          return t;
      case 0:
          return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : st(r, o)), vu(e, t, r, o, n);
      case 1:
          return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : st(r, o)), lf(e, t, r, o, n);
      case 3:
          e: {
              if ((Xp(t), e === null)) throw Error(N(387));
              (r = t.pendingProps), (l = t.memoizedState), (o = l.element), xp(e, t), Bl(t, r, null, n);
              var i = t.memoizedState;
              if (((r = i.element), l.isDehydrated))
                  if (((l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }), (t.updateQueue.baseState = l), (t.memoizedState = l), t.flags & 256)) {
                      (o = jr(Error(N(423)), t)), (t = af(e, t, r, n, o));
                      break e;
                  } else if (r !== o) {
                      (o = jr(Error(N(424)), t)), (t = af(e, t, r, n, o));
                      break e;
                  } else for (Qe = sn(t.stateNode.containerInfo.firstChild), Ke = t, ie = !0, dt = null, n = Ep(t, null, r, n), t.child = n; n; ) (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
              else {
                  if ((Er(), r === o)) {
                      t = Ft(e, t, n);
                      break e;
                  }
                  Me(e, t, r, n);
              }
              t = t.child;
          }
          return t;
      case 5:
          return (
              Cp(t),
              e === null && fu(t),
              (r = t.type),
              (o = t.pendingProps),
              (l = e !== null ? e.memoizedProps : null),
              (i = o.children),
              iu(r, o) ? (i = null) : l !== null && iu(r, l) && (t.flags |= 32),
              Yp(e, t),
              Me(e, t, i, n),
              t.child
          );
      case 6:
          return e === null && fu(t), null;
      case 13:
          return Gp(e, t, n);
      case 4:
          return vs(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = Cr(t, null, r, n)) : Me(e, t, r, n), t.child;
      case 11:
          return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : st(r, o)), rf(e, t, r, o, n);
      case 7:
          return Me(e, t, t.pendingProps, n), t.child;
      case 8:
          return Me(e, t, t.pendingProps.children, n), t.child;
      case 12:
          return Me(e, t, t.pendingProps.children, n), t.child;
      case 10:
          e: {
              if (((r = t.type._context), (o = t.pendingProps), (l = t.memoizedProps), (i = o.value), ee(Fl, r._currentValue), (r._currentValue = i), l !== null))
                  if (vt(l.value, i)) {
                      if (l.children === o.children && !Ue.current) {
                          t = Ft(e, t, n);
                          break e;
                      }
                  } else
                      for (l = t.child, l !== null && (l.return = t); l !== null; ) {
                          var a = l.dependencies;
                          if (a !== null) {
                              i = l.child;
                              for (var u = a.firstContext; u !== null; ) {
                                  if (u.context === r) {
                                      if (l.tag === 1) {
                                          (u = Dt(-1, n & -n)), (u.tag = 2);
                                          var s = l.updateQueue;
                                          if (s !== null) {
                                              s = s.shared;
                                              var c = s.pending;
                                              c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)), (s.pending = u);
                                          }
                                      }
                                      (l.lanes |= n), (u = l.alternate), u !== null && (u.lanes |= n), du(l.return, n, t), (a.lanes |= n);
                                      break;
                                  }
                                  u = u.next;
                              }
                          } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                          else if (l.tag === 18) {
                              if (((i = l.return), i === null)) throw Error(N(341));
                              (i.lanes |= n), (a = i.alternate), a !== null && (a.lanes |= n), du(i, n, t), (i = l.sibling);
                          } else i = l.child;
                          if (i !== null) i.return = l;
                          else
                              for (i = l; i !== null; ) {
                                  if (i === t) {
                                      i = null;
                                      break;
                                  }
                                  if (((l = i.sibling), l !== null)) {
                                      (l.return = i.return), (i = l);
                                      break;
                                  }
                                  i = i.return;
                              }
                          l = i;
                      }
              Me(e, t, o.children, n), (t = t.child);
          }
          return t;
      case 9:
          return (o = t.type), (r = t.pendingProps.children), vr(t, n), (o = ot(o)), (r = r(o)), (t.flags |= 1), Me(e, t, r, n), t.child;
      case 14:
          return (r = t.type), (o = st(r, t.pendingProps)), (o = st(r.type, o)), of(e, t, r, o, n);
      case 15:
          return Qp(e, t, t.type, t.pendingProps, n);
      case 17:
          return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : st(r, o)), wl(e, t), (t.tag = 1), Be(r) ? ((e = !0), Il(t)) : (e = !1), vr(t, n), Sp(t, r, o), hu(t, r, o, n), gu(null, t, r, !0, e, n);
      case 19:
          return Zp(e, t, n);
      case 22:
          return Kp(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function ph(e, t) {
  return bd(e, t);
}
function zv(e, t, n, r) {
  (this.tag = e),
      (this.key = n),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
}
function nt(e, t, n, r) {
  return new zv(e, t, n, r);
}
function Ts(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Iv(e) {
  if (typeof e == "function") return Ts(e) ? 1 : 0;
  if (e != null) {
      if (((e = e.$$typeof), e === Gu)) return 11;
      if (e === Zu) return 14;
  }
  return 2;
}
function pn(e, t) {
  var n = e.alternate;
  return (
      n === null
          ? ((n = nt(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
          : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
  );
}
function El(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ts(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
      e: switch (e) {
          case qn:
              return Dn(n.children, o, l, t);
          case Xu:
              (i = 8), (o |= 8);
              break;
          case Aa:
              return (e = nt(12, n, t, o | 2)), (e.elementType = Aa), (e.lanes = l), e;
          case ba:
              return (e = nt(13, n, t, o)), (e.elementType = ba), (e.lanes = l), e;
          case Fa:
              return (e = nt(19, n, t, o)), (e.elementType = Fa), (e.lanes = l), e;
          case kd:
              return vi(n, o, l, t);
          default:
              if (typeof e == "object" && e !== null)
                  switch (e.$$typeof) {
                      case wd:
                          i = 10;
                          break e;
                      case Sd:
                          i = 9;
                          break e;
                      case Gu:
                          i = 11;
                          break e;
                      case Zu:
                          i = 14;
                          break e;
                      case Zt:
                          (i = 16), (r = null);
                          break e;
                  }
              throw Error(N(130, e == null ? e : typeof e, ""));
      }
  return (t = nt(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t;
}
function Dn(e, t, n, r) {
  return (e = nt(7, e, r, t)), (e.lanes = n), e;
}
function vi(e, t, n, r) {
  return (e = nt(22, e, r, t)), (e.elementType = kd), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Ca(e, t, n) {
  return (e = nt(6, e, null, t)), (e.lanes = n), e;
}
function Pa(e, t, n) {
  return (t = nt(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
}
function Av(e, t, n, r, o) {
  (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = la(0)),
      (this.expirationTimes = la(-1)),
      (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
      (this.entanglements = la(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null);
}
function Os(e, t, n, r, o, l, i, a, u) {
  return (
      (e = new Av(e, t, n, a, u)),
      t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
      (l = nt(3, null, null, t)),
      (e.current = l),
      (l.stateNode = e),
      (l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
      ms(l),
      e
  );
}
function bv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Jn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function hh(e) {
  if (!e) return gn;
  e = e._reactInternals;
  e: {
      if (Vn(e) !== e || e.tag !== 1) throw Error(N(170));
      var t = e;
      do {
          switch (t.tag) {
              case 3:
                  t = t.stateNode.context;
                  break e;
              case 1:
                  if (Be(t.type)) {
                      t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                      break e;
                  }
          }
          t = t.return;
      } while (t !== null);
      throw Error(N(171));
  }
  if (e.tag === 1) {
      var n = e.type;
      if (Be(n)) return pp(e, n, t);
  }
  return t;
}
function mh(e, t, n, r, o, l, i, a, u) {
  return (e = Os(n, r, !0, e, o, l, i, a, u)), (e.context = hh(null)), (n = e.current), (r = De()), (o = dn(n)), (l = Dt(r, o)), (l.callback = t ?? null), cn(n, l, o), (e.current.lanes = o), Io(e, o, r), We(e, r), e;
}
function gi(e, t, n, r) {
  var o = t.current,
      l = De(),
      i = dn(o);
  return (
      (n = hh(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Dt(l, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = cn(o, t, i)),
      e !== null && (mt(e, o, i, l), gl(e, o, i)),
      i
  );
}
function Gl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
      case 5:
          return e.child.stateNode;
      default:
          return e.child.stateNode;
  }
}
function gf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $s(e, t) {
  gf(e, t), (e = e.alternate) && gf(e, t);
}
function Fv() {
  return null;
}
var vh =
  typeof reportError == "function"
      ? reportError
      : function (e) {
            console.error(e);
        };
function Ms(e) {
  this._internalRoot = e;
}
yi.prototype.render = Ms.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  gi(e, t, null, null);
};
yi.prototype.unmount = Ms.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Fn(function () {
          gi(null, e, null, null);
      }),
          (t[At] = null);
  }
};
function yi(e) {
  this._internalRoot = e;
}
yi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
      var t = Qd();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++);
      qt.splice(n, 0, e), n === 0 && Yd(e);
  }
};
function Ds(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function xi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function yf() {}
function Uv(e, t, n, r, o) {
  if (o) {
      if (typeof r == "function") {
          var l = r;
          r = function () {
              var s = Gl(i);
              l.call(s);
          };
      }
      var i = mh(t, r, e, 0, null, !1, !1, "", yf);
      return (e._reactRootContainer = i), (e[At] = i.current), Eo(e.nodeType === 8 ? e.parentNode : e), Fn(), i;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
      var a = r;
      r = function () {
          var s = Gl(u);
          a.call(s);
      };
  }
  var u = Os(e, 0, !1, null, null, !1, !1, "", yf);
  return (
      (e._reactRootContainer = u),
      (e[At] = u.current),
      Eo(e.nodeType === 8 ? e.parentNode : e),
      Fn(function () {
          gi(t, u, n, r);
      }),
      u
  );
}
function wi(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
      var i = l;
      if (typeof o == "function") {
          var a = o;
          o = function () {
              var u = Gl(i);
              a.call(u);
          };
      }
      gi(t, i, e, o);
  } else i = Uv(n, t, e, o, r);
  return Gl(i);
}
Vd = function (e) {
  switch (e.tag) {
      case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
              var n = to(t.pendingLanes);
              n !== 0 && (es(t, n | 1), We(t, he()), !(H & 6) && ((Nr = he() + 500), kn()));
          }
          break;
      case 13:
          Fn(function () {
              var r = bt(e, 1);
              if (r !== null) {
                  var o = De();
                  mt(r, e, 1, o);
              }
          }),
              $s(e, 1);
  }
};
ts = function (e) {
  if (e.tag === 13) {
      var t = bt(e, 134217728);
      if (t !== null) {
          var n = De();
          mt(t, e, 134217728, n);
      }
      $s(e, 134217728);
  }
};
Hd = function (e) {
  if (e.tag === 13) {
      var t = dn(e),
          n = bt(e, t);
      if (n !== null) {
          var r = De();
          mt(n, e, t, r);
      }
      $s(e, t);
  }
};
Qd = function () {
  return Q;
};
Kd = function (e, t) {
  var n = Q;
  try {
      return (Q = e), t();
  } finally {
      Q = n;
  }
};
Ga = function (e, t, n) {
  switch (t) {
      case "input":
          if ((Wa(e, n), (t = n.name), n.type === "radio" && t != null)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                      var o = ci(r);
                      if (!o) throw Error(N(90));
                      Cd(r), Wa(r, o);
                  }
              }
          }
          break;
      case "textarea":
          jd(e, n);
          break;
      case "select":
          (t = n.value), t != null && dr(e, !!n.multiple, t, !1);
  }
};
$d = Rs;
Md = Fn;
var Bv = { usingClientEntryPoint: !1, Events: [bo, rr, ci, Td, Od, Rs] },
  Yr = { findFiberByHostInstance: Ln, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
  Wv = {
      bundleType: Yr.bundleType,
      version: Yr.version,
      rendererPackageName: Yr.rendererPackageName,
      rendererConfig: Yr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Wt.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
          return (e = Id(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Yr.findFiberByHostInstance || Fv,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!sl.isDisabled && sl.supportsFiber)
      try {
          (ii = sl.inject(Wv)), (Ct = sl);
      } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bv;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ds(t)) throw Error(N(200));
  return bv(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!Ds(e)) throw Error(N(299));
  var n = !1,
      r = "",
      o = vh;
  return (
      t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
      (t = Os(e, 1, !1, null, null, n, !1, r, o)),
      (e[At] = t.current),
      Eo(e.nodeType === 8 ? e.parentNode : e),
      new Ms(t)
  );
};
Ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(N(188)) : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Id(t)), (e = e === null ? null : e.stateNode), e;
};
Ge.flushSync = function (e) {
  return Fn(e);
};
Ge.hydrate = function (e, t, n) {
  if (!xi(t)) throw Error(N(200));
  return wi(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!Ds(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
      o = !1,
      l = "",
      i = vh;
  if (
      (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
      (t = mh(t, null, e, 1, n ?? null, o, !1, l, i)),
      (e[At] = t.current),
      Eo(e),
      r)
  )
      for (e = 0; e < r.length; e++) (n = r[e]), (o = n._getVersion), (o = o(n._source)), t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, o]) : t.mutableSourceEagerHydrationData.push(n, o);
  return new yi(t);
};
Ge.render = function (e, t, n) {
  if (!xi(t)) throw Error(N(200));
  return wi(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!xi(e)) throw Error(N(40));
  return e._reactRootContainer
      ? (Fn(function () {
            wi(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[At] = null);
            });
        }),
        !0)
      : !1;
};
Ge.unstable_batchedUpdates = Rs;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!xi(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return wi(e, t, n, !1, r);
};
Ge.version = "18.2.0-next-9e3b772b8-20220608";
function gh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gh);
      } catch (e) {
          console.error(e);
      }
}
gh(), (md.exports = Ge);
var yh = md.exports,
  xf = yh;
(za.createRoot = xf.createRoot), (za.hydrateRoot = xf.hydrateRoot);
/**
* @remix-run/router v1.8.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/ function oe() {
  return (
      (oe = Object.assign
          ? Object.assign.bind()
          : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }),
      oe.apply(this, arguments)
  );
}
var ve;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ve || (ve = {}));
const wf = "popstate";
function Vv(e) {
  e === void 0 && (e = {});
  function t(r, o) {
      let { pathname: l, search: i, hash: a } = r.location;
      return Oo("", { pathname: l, search: i, hash: a }, (o.state && o.state.usr) || null, (o.state && o.state.key) || "default");
  }
  function n(r, o) {
      return typeof o == "string" ? o : Un(o);
  }
  return Qv(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Rr(e, t) {
  if (!e) {
      typeof console < "u" && console.warn(t);
      try {
          throw new Error(t);
      } catch {}
  }
}
function Hv() {
  return Math.random().toString(36).substr(2, 8);
}
function Sf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Oo(e, t, n, r) {
  return n === void 0 && (n = null), oe({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? Vt(t) : t, { state: n, key: (t && t.key) || r || Hv() });
}
function Un(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Vt(e) {
  let t = {};
  if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function Qv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: l = !1 } = r,
      i = o.history,
      a = ve.Pop,
      u = null,
      s = c();
  s == null && ((s = 0), i.replaceState(oe({}, i.state, { idx: s }), ""));
  function c() {
      return (i.state || { idx: null }).idx;
  }
  function p() {
      a = ve.Pop;
      let E = c(),
          h = E == null ? null : E - s;
      (s = E), u && u({ action: a, location: x.location, delta: h });
  }
  function d(E, h) {
      a = ve.Push;
      let f = Oo(x.location, E, h);
      n && n(f, E), (s = c() + 1);
      let g = Sf(f, s),
          m = x.createHref(f);
      try {
          i.pushState(g, "", m);
      } catch (P) {
          if (P instanceof DOMException && P.name === "DataCloneError") throw P;
          o.location.assign(m);
      }
      l && u && u({ action: a, location: x.location, delta: 1 });
  }
  function v(E, h) {
      a = ve.Replace;
      let f = Oo(x.location, E, h);
      n && n(f, E), (s = c());
      let g = Sf(f, s),
          m = x.createHref(f);
      i.replaceState(g, "", m), l && u && u({ action: a, location: x.location, delta: 0 });
  }
  function y(E) {
      let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
          f = typeof E == "string" ? E : Un(E);
      return W(h, "No window.location.(origin|href) available to create URL for href: " + f), new URL(f, h);
  }
  let x = {
      get action() {
          return a;
      },
      get location() {
          return e(o, i);
      },
      listen(E) {
          if (u) throw new Error("A history only accepts one active listener");
          return (
              o.addEventListener(wf, p),
              (u = E),
              () => {
                  o.removeEventListener(wf, p), (u = null);
              }
          );
      },
      createHref(E) {
          return t(o, E);
      },
      createURL: y,
      encodeLocation(E) {
          let h = y(E);
          return { pathname: h.pathname, search: h.search, hash: h.hash };
      },
      push: d,
      replace: v,
      go(E) {
          return i.go(E);
      },
  };
  return x;
}
var pe;
(function (e) {
  (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(pe || (pe = {}));
const Kv = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function Yv(e) {
  return e.index === !0;
}
function _u(e, t, n, r) {
  return (
      n === void 0 && (n = []),
      r === void 0 && (r = {}),
      e.map((o, l) => {
          let i = [...n, l],
              a = typeof o.id == "string" ? o.id : i.join("-");
          if ((W(o.index !== !0 || !o.children, "Cannot specify children on an index route"), W(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`), Yv(o))) {
              let u = oe({}, o, t(o), { id: a });
              return (r[a] = u), u;
          } else {
              let u = oe({}, o, t(o), { id: a, children: void 0 });
              return (r[a] = u), o.children && (u.children = _u(o.children, t, i, r)), u;
          }
      })
  );
}
function cr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Vt(t) : t,
      o = Dr(r.pathname || "/", n);
  if (o == null) return null;
  let l = xh(e);
  Xv(l);
  let i = null;
  for (let a = 0; i == null && a < l.length; ++a) i = og(l[a], ag(o));
  return i;
}
function xh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (l, i, a) => {
      let u = { relativePath: a === void 0 ? l.path || "" : a, caseSensitive: l.caseSensitive === !0, childrenIndex: i, route: l };
      u.relativePath.startsWith("/") &&
          (W(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
          (u.relativePath = u.relativePath.slice(r.length)));
      let s = zt([r, u.relativePath]),
          c = n.concat(u);
      l.children && l.children.length > 0 && (W(l.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')), xh(l.children, t, c, s)),
          !(l.path == null && !l.index) && t.push({ path: s, score: ng(s, l.index), routesMeta: c });
  };
  return (
      e.forEach((l, i) => {
          var a;
          if (l.path === "" || !((a = l.path) != null && a.includes("?"))) o(l, i);
          else for (let u of wh(l.path)) o(l, i, u);
      }),
      t
  );
}
function wh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
      o = n.endsWith("?"),
      l = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [l, ""] : [l];
  let i = wh(r.join("/")),
      a = [];
  return a.push(...i.map((u) => (u === "" ? l : [l, u].join("/")))), o && a.push(...i), a.map((u) => (e.startsWith("/") && u === "" ? "/" : u));
}
function Xv(e) {
  e.sort((t, n) =>
      t.score !== n.score
          ? n.score - t.score
          : rg(
                t.routesMeta.map((r) => r.childrenIndex),
                n.routesMeta.map((r) => r.childrenIndex)
            )
  );
}
const Gv = /^:\w+$/,
  Zv = 3,
  Jv = 2,
  qv = 1,
  eg = 10,
  tg = -2,
  kf = (e) => e === "*";
function ng(e, t) {
  let n = e.split("/"),
      r = n.length;
  return n.some(kf) && (r += tg), t && (r += Jv), n.filter((o) => !kf(o)).reduce((o, l) => o + (Gv.test(l) ? Zv : l === "" ? qv : eg), r);
}
function rg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function og(e, t) {
  let { routesMeta: n } = e,
      r = {},
      o = "/",
      l = [];
  for (let i = 0; i < n.length; ++i) {
      let a = n[i],
          u = i === n.length - 1,
          s = o === "/" ? t : t.slice(o.length) || "/",
          c = lg({ path: a.relativePath, caseSensitive: a.caseSensitive, end: u }, s);
      if (!c) return null;
      Object.assign(r, c.params);
      let p = a.route;
      l.push({ params: r, pathname: zt([o, c.pathname]), pathnameBase: fg(zt([o, c.pathnameBase])), route: p }), c.pathnameBase !== "/" && (o = zt([o, c.pathnameBase]));
  }
  return l;
}
function lg(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ig(e.path, e.caseSensitive, e.end),
      o = t.match(n);
  if (!o) return null;
  let l = o[0],
      i = l.replace(/(.)\/+$/, "$1"),
      a = o.slice(1);
  return {
      params: r.reduce((s, c, p) => {
          if (c === "*") {
              let d = a[p] || "";
              i = l.slice(0, l.length - d.length).replace(/(.)\/+$/, "$1");
          }
          return (s[c] = ug(a[p] || "", c)), s;
      }, {}),
      pathname: l,
      pathnameBase: i,
      pattern: e,
  };
}
function ig(e, t, n) {
  t === void 0 && (t = !1),
      n === void 0 && (n = !0),
      Rr(
          e === "*" || !e.endsWith("*") || e.endsWith("/*"),
          'Route path "' +
              e +
              '" will be treated as if it were ' +
              ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
              "always follow a `/` in the pattern. To get rid of this warning, " +
              ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
      );
  let r = [],
      o =
          "^" +
          e
              .replace(/\/*\*?$/, "")
              .replace(/^\/*/, "/")
              .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
              .replace(/\/:(\w+)/g, (i, a) => (r.push(a), "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push("*"), (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$")) : n ? (o += "\\/*$") : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r];
}
function ag(e) {
  try {
      return decodeURI(e);
  } catch (t) {
      return Rr(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function ug(e, t) {
  try {
      return decodeURIComponent(e);
  } catch (n) {
      return Rr(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e;
  }
}
function Dr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function sg(e, t) {
  t === void 0 && (t = "/");
  let { pathname: n, search: r = "", hash: o = "" } = typeof e == "string" ? Vt(e) : e;
  return { pathname: n ? (n.startsWith("/") ? n : cg(n, t)) : t, search: dg(r), hash: pg(o) };
}
function cg(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
      e.split("/").forEach((o) => {
          o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
      }),
      n.length > 1 ? n.join("/") : "/"
  );
}
function ja(e, t, n, r) {
  return (
      "Cannot include a '" +
      e +
      "' character in a manually specified " +
      ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
      ("`to." + n + "` field. Alternatively you may provide the full path as ") +
      'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Si(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function zs(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
      ? (o = Vt(e))
      : ((o = oe({}, e)),
        W(!o.pathname || !o.pathname.includes("?"), ja("?", "pathname", "search", o)),
        W(!o.pathname || !o.pathname.includes("#"), ja("#", "pathname", "hash", o)),
        W(!o.search || !o.search.includes("#"), ja("#", "search", "hash", o)));
  let l = e === "" || o.pathname === "",
      i = l ? "/" : o.pathname,
      a;
  if (r || i == null) a = n;
  else {
      let p = t.length - 1;
      if (i.startsWith("..")) {
          let d = i.split("/");
          for (; d[0] === ".."; ) d.shift(), (p -= 1);
          o.pathname = d.join("/");
      }
      a = p >= 0 ? t[p] : "/";
  }
  let u = sg(o, a),
      s = i && i !== "/" && i.endsWith("/"),
      c = (l || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"), u;
}
const zt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  fg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  dg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  pg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Is {
  constructor(t, n, r, o) {
      o === void 0 && (o = !1), (this.status = t), (this.statusText = n || ""), (this.internal = o), r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
  }
}
function Sh(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const kh = ["post", "put", "patch", "delete"],
  hg = new Set(kh),
  mg = ["get", ...kh],
  vg = new Set(mg),
  gg = new Set([301, 302, 303, 307, 308]),
  yg = new Set([307, 308]),
  Na = { state: "idle", location: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 },
  xg = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 },
  Xr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Eh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  wg = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function Sg(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
      n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
      r = !n;
  W(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
      let S = e.detectErrorBoundary;
      o = (k) => ({ hasErrorBoundary: S(k) });
  } else o = wg;
  let l = {},
      i = _u(e.routes, o, void 0, l),
      a,
      u = e.basename || "/",
      s = oe({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
      c = null,
      p = new Set(),
      d = null,
      v = null,
      y = null,
      x = e.hydrationData != null,
      E = cr(i, e.history.location, u),
      h = null;
  if (E == null) {
      let S = qe(404, { pathname: e.history.location.pathname }),
          { matches: k, route: j } = Lf(i);
      (E = k), (h = { [j.id]: S });
  }
  let f = !E.some((S) => S.route.lazy) && (!E.some((S) => S.route.loader) || e.hydrationData != null),
      g,
      m = {
          historyAction: e.history.action,
          location: e.history.location,
          matches: E,
          initialized: f,
          navigation: Na,
          restoreScrollPosition: e.hydrationData != null ? !1 : null,
          preventScrollReset: !1,
          revalidation: "idle",
          loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
          actionData: (e.hydrationData && e.hydrationData.actionData) || null,
          errors: (e.hydrationData && e.hydrationData.errors) || h,
          fetchers: new Map(),
          blockers: new Map(),
      },
      P = ve.Pop,
      _ = !1,
      R,
      T = !1,
      B = !1,
      M = [],
      re = [],
      J = new Map(),
      gt = 0,
      Ht = -1,
      Qt = new Map(),
      Ve = new Set(),
      yt = new Map(),
      L = new Map(),
      I = new Map(),
      U = !1;
  function ae() {
      return (
          (c = e.history.listen((S) => {
              let { action: k, location: j, delta: $ } = S;
              if (U) {
                  U = !1;
                  return;
              }
              Rr(
                  I.size === 0 || $ != null,
                  "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
              );
              let F = ic({ currentLocation: m.location, nextLocation: j, historyAction: k });
              if (F && $ != null) {
                  (U = !0),
                      e.history.go($ * -1),
                      Ho(F, {
                          state: "blocked",
                          location: j,
                          proceed() {
                              Ho(F, { state: "proceeding", proceed: void 0, reset: void 0, location: j }), e.history.go($);
                          },
                          reset() {
                              let A = new Map(m.blockers);
                              A.set(F, Xr), q({ blockers: A });
                          },
                      });
                  return;
              }
              return Kt(k, j);
          })),
          m.initialized || Kt(ve.Pop, m.location),
          g
      );
  }
  function me() {
      c && c(), p.clear(), R && R.abort(), m.fetchers.forEach((S, k) => Ki(k)), m.blockers.forEach((S, k) => lc(k));
  }
  function Kn(S) {
      return p.add(S), () => p.delete(S);
  }
  function q(S) {
      (m = oe({}, m, S)), p.forEach((k) => k(m));
  }
  function Nt(S, k) {
      var j, $;
      let F = m.actionData != null && m.navigation.formMethod != null && ft(m.navigation.formMethod) && m.navigation.state === "loading" && ((j = S.state) == null ? void 0 : j._isRedirect) !== !0,
          A;
      k.actionData ? (Object.keys(k.actionData).length > 0 ? (A = k.actionData) : (A = null)) : F ? (A = m.actionData) : (A = null);
      let b = k.loaderData ? _f(m.loaderData, k.loaderData, k.matches || [], k.errors) : m.loaderData,
          z = m.blockers;
      z.size > 0 && ((z = new Map(z)), z.forEach((Z, Pe) => z.set(Pe, Xr)));
      let D = _ === !0 || (m.navigation.formMethod != null && ft(m.navigation.formMethod) && (($ = S.state) == null ? void 0 : $._isRedirect) !== !0);
      a && ((i = a), (a = void 0)),
          T || P === ve.Pop || (P === ve.Push ? e.history.push(S, S.state) : P === ve.Replace && e.history.replace(S, S.state)),
          q(oe({}, k, { actionData: A, loaderData: b, historyAction: P, location: S, initialized: !0, navigation: Na, revalidation: "idle", restoreScrollPosition: uc(S, k.matches || m.matches), preventScrollReset: D, blockers: z })),
          (P = ve.Pop),
          (_ = !1),
          (T = !1),
          (B = !1),
          (M = []),
          (re = []);
  }
  async function xt(S, k) {
      if (typeof S == "number") {
          e.history.go(S);
          return;
      }
      let j = Lu(m.location, m.matches, u, s.v7_prependBasename, S, k == null ? void 0 : k.fromRouteId, k == null ? void 0 : k.relative),
          { path: $, submission: F, error: A } = Ef(s.v7_normalizeFormMethod, !1, j, k),
          b = m.location,
          z = Oo(m.location, $, k && k.state);
      z = oe({}, z, e.history.encodeLocation(z));
      let D = k && k.replace != null ? k.replace : void 0,
          Z = ve.Push;
      D === !0 ? (Z = ve.Replace) : D === !1 || (F != null && ft(F.formMethod) && F.formAction === m.location.pathname + m.location.search && (Z = ve.Replace));
      let Pe = k && "preventScrollReset" in k ? k.preventScrollReset === !0 : void 0,
          Y = ic({ currentLocation: b, nextLocation: z, historyAction: Z });
      if (Y) {
          Ho(Y, {
              state: "blocked",
              location: z,
              proceed() {
                  Ho(Y, { state: "proceeding", proceed: void 0, reset: void 0, location: z }), xt(S, k);
              },
              reset() {
                  let de = new Map(m.blockers);
                  de.set(Y, Xr), q({ blockers: de });
              },
          });
          return;
      }
      return await Kt(Z, z, { submission: F, pendingError: A, preventScrollReset: Pe, replace: k && k.replace });
  }
  function Yn() {
      if ((Qi(), q({ revalidation: "loading" }), m.navigation.state !== "submitting")) {
          if (m.navigation.state === "idle") {
              Kt(m.historyAction, m.location, { startUninterruptedRevalidation: !0 });
              return;
          }
          Kt(P || m.historyAction, m.navigation.location, { overrideNavigation: m.navigation });
      }
  }
  async function Kt(S, k, j) {
      R && R.abort(), (R = null), (P = S), (T = (j && j.startUninterruptedRevalidation) === !0), hm(m.location, m.matches), (_ = (j && j.preventScrollReset) === !0);
      let $ = a || i,
          F = j && j.overrideNavigation,
          A = cr($, k, u);
      if (!A) {
          let de = qe(404, { pathname: k.pathname }),
              { matches: Se, route: Pn } = Lf($);
          Yi(), Nt(k, { matches: Se, loaderData: {}, errors: { [Pn.id]: de } });
          return;
      }
      if (m.initialized && !B && jg(m.location, k) && !(j && j.submission && ft(j.submission.formMethod))) {
          Nt(k, { matches: A });
          return;
      }
      R = new AbortController();
      let b = Zr(e.history, k, R.signal, j && j.submission),
          z,
          D;
      if (j && j.pendingError) D = { [fr(A).route.id]: j.pendingError };
      else if (j && j.submission && ft(j.submission.formMethod)) {
          let de = await am(b, k, j.submission, A, { replace: j.replace });
          if (de.shortCircuited) return;
          (z = de.pendingActionData), (D = de.pendingActionError), (F = cl(k, j.submission)), (b = new Request(b.url, { signal: b.signal }));
      }
      let { shortCircuited: Z, loaderData: Pe, errors: Y } = await um(b, k, A, F, j && j.submission, j && j.fetcherSubmission, j && j.replace, z, D);
      Z || ((R = null), Nt(k, oe({ matches: A }, z ? { actionData: z } : {}, { loaderData: Pe, errors: Y })));
  }
  async function am(S, k, j, $, F) {
      F === void 0 && (F = {}), Qi();
      let A = Tg(k, j);
      q({ navigation: A });
      let b,
          z = Ou($, k);
      if (!z.route.action && !z.route.lazy) b = { type: pe.error, error: qe(405, { method: S.method, pathname: k.pathname, routeId: z.route.id }) };
      else if (((b = await Gr("action", S, z, $, l, o, u)), S.signal.aborted)) return { shortCircuited: !0 };
      if (yr(b)) {
          let D;
          return F && F.replace != null ? (D = F.replace) : (D = b.location === m.location.pathname + m.location.search), await Ar(m, b, { submission: j, replace: D }), { shortCircuited: !0 };
      }
      if (ho(b)) {
          let D = fr($, z.route.id);
          return (F && F.replace) !== !0 && (P = ve.Push), { pendingActionData: {}, pendingActionError: { [D.route.id]: b.error } };
      }
      if ($n(b)) throw qe(400, { type: "defer-action" });
      return { pendingActionData: { [z.route.id]: b.data } };
  }
  async function um(S, k, j, $, F, A, b, z, D) {
      let Z = $ || cl(k, F),
          Pe = F || A || $f(Z),
          Y = a || i,
          [de, Se] = Cf(e.history, m, j, Pe, k, B, M, re, yt, Ve, Y, u, z, D);
      if ((Yi((X) => !(j && j.some((at) => at.route.id === X)) || (de && de.some((at) => at.route.id === X))), (Ht = ++gt), de.length === 0 && Se.length === 0)) {
          let X = rc();
          return Nt(k, oe({ matches: j, loaderData: {}, errors: D || null }, z ? { actionData: z } : {}, X ? { fetchers: new Map(m.fetchers) } : {})), { shortCircuited: !0 };
      }
      if (!T) {
          Se.forEach((at) => {
              let Xt = m.fetchers.get(at.key),
                  qi = Jr(void 0, Xt ? Xt.data : void 0);
              m.fetchers.set(at.key, qi);
          });
          let X = z || m.actionData;
          q(oe({ navigation: Z }, X ? (Object.keys(X).length === 0 ? { actionData: null } : { actionData: X }) : {}, Se.length > 0 ? { fetchers: new Map(m.fetchers) } : {}));
      }
      Se.forEach((X) => {
          J.has(X.key) && Yt(X.key), X.controller && J.set(X.key, X.controller);
      });
      let Pn = () => Se.forEach((X) => Yt(X.key));
      R && R.signal.addEventListener("abort", Pn);
      let { results: jn, loaderResults: br, fetcherResults: Xi } = await tc(m.matches, j, de, Se, S);
      if (S.signal.aborted) return { shortCircuited: !0 };
      R && R.signal.removeEventListener("abort", Pn), Se.forEach((X) => J.delete(X.key));
      let Rt = Tf(jn);
      if (Rt) {
          if (Rt.idx >= de.length) {
              let X = Se[Rt.idx - de.length].key;
              Ve.add(X);
          }
          return await Ar(m, Rt.result, { replace: b }), { shortCircuited: !0 };
      }
      let { loaderData: _t, errors: Qo } = Rf(m, j, de, br, D, Se, Xi, L);
      L.forEach((X, at) => {
          X.subscribe((Xt) => {
              (Xt || X.done) && L.delete(at);
          });
      });
      let Gi = rc(),
          Zi = oc(Ht),
          Ji = Gi || Zi || Se.length > 0;
      return oe({ loaderData: _t, errors: Qo }, Ji ? { fetchers: new Map(m.fetchers) } : {});
  }
  function ec(S) {
      return m.fetchers.get(S) || xg;
  }
  function sm(S, k, j, $) {
      if (r) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
      J.has(S) && Yt(S);
      let F = a || i,
          A = Lu(m.location, m.matches, u, s.v7_prependBasename, j, k, $ == null ? void 0 : $.relative),
          b = cr(F, A, u);
      if (!b) {
          Vo(S, k, qe(404, { pathname: A }));
          return;
      }
      let { path: z, submission: D, error: Z } = Ef(s.v7_normalizeFormMethod, !0, A, $);
      if (Z) {
          Vo(S, k, Z);
          return;
      }
      let Pe = Ou(b, z);
      if (((_ = ($ && $.preventScrollReset) === !0), D && ft(D.formMethod))) {
          cm(S, k, z, Pe, b, D);
          return;
      }
      yt.set(S, { routeId: k, path: z }), fm(S, k, z, Pe, b, D);
  }
  async function cm(S, k, j, $, F, A) {
      if ((Qi(), yt.delete(S), !$.route.action && !$.route.lazy)) {
          let ye = qe(405, { method: A.formMethod, pathname: j, routeId: k });
          Vo(S, k, ye);
          return;
      }
      let b = m.fetchers.get(S),
          z = Og(A, b);
      m.fetchers.set(S, z), q({ fetchers: new Map(m.fetchers) });
      let D = new AbortController(),
          Z = Zr(e.history, j, D.signal, A);
      J.set(S, D);
      let Pe = gt,
          Y = await Gr("action", Z, $, F, l, o, u);
      if (Z.signal.aborted) {
          J.get(S) === D && J.delete(S);
          return;
      }
      if (yr(Y))
          if ((J.delete(S), Ht > Pe)) {
              let ye = Zn(void 0);
              m.fetchers.set(S, ye), q({ fetchers: new Map(m.fetchers) });
              return;
          } else {
              Ve.add(S);
              let ye = Jr(A);
              return m.fetchers.set(S, ye), q({ fetchers: new Map(m.fetchers) }), Ar(m, Y, { submission: A, isFetchActionRedirect: !0 });
          }
      if (ho(Y)) {
          Vo(S, k, Y.error);
          return;
      }
      if ($n(Y)) throw qe(400, { type: "defer-action" });
      let de = m.navigation.location || m.location,
          Se = Zr(e.history, de, D.signal),
          Pn = a || i,
          jn = m.navigation.state !== "idle" ? cr(Pn, m.navigation.location, u) : m.matches;
      W(jn, "Didn't find any matches after fetcher action");
      let br = ++gt;
      Qt.set(S, br);
      let Xi = Jr(A, Y.data);
      m.fetchers.set(S, Xi);
      let [Rt, _t] = Cf(e.history, m, jn, A, de, B, M, re, yt, Ve, Pn, u, { [$.route.id]: Y.data }, void 0);
      _t
          .filter((ye) => ye.key !== S)
          .forEach((ye) => {
              let Fr = ye.key,
                  sc = m.fetchers.get(Fr),
                  vm = Jr(void 0, sc ? sc.data : void 0);
              m.fetchers.set(Fr, vm), J.has(Fr) && Yt(Fr), ye.controller && J.set(Fr, ye.controller);
          }),
          q({ fetchers: new Map(m.fetchers) });
      let Qo = () => _t.forEach((ye) => Yt(ye.key));
      D.signal.addEventListener("abort", Qo);
      let { results: Gi, loaderResults: Zi, fetcherResults: Ji } = await tc(m.matches, jn, Rt, _t, Se);
      if (D.signal.aborted) return;
      D.signal.removeEventListener("abort", Qo), Qt.delete(S), J.delete(S), _t.forEach((ye) => J.delete(ye.key));
      let X = Tf(Gi);
      if (X) {
          if (X.idx >= Rt.length) {
              let ye = _t[X.idx - Rt.length].key;
              Ve.add(ye);
          }
          return Ar(m, X.result);
      }
      let { loaderData: at, errors: Xt } = Rf(m, m.matches, Rt, Zi, void 0, _t, Ji, L);
      if (m.fetchers.has(S)) {
          let ye = Zn(Y.data);
          m.fetchers.set(S, ye);
      }
      let qi = oc(br);
      m.navigation.state === "loading" && br > Ht
          ? (W(P, "Expected pending action"), R && R.abort(), Nt(m.navigation.location, { matches: jn, loaderData: at, errors: Xt, fetchers: new Map(m.fetchers) }))
          : (q(oe({ errors: Xt, loaderData: _f(m.loaderData, at, jn, Xt) }, qi || _t.length > 0 ? { fetchers: new Map(m.fetchers) } : {})), (B = !1));
  }
  async function fm(S, k, j, $, F, A) {
      let b = m.fetchers.get(S),
          z = Jr(A, b ? b.data : void 0);
      m.fetchers.set(S, z), q({ fetchers: new Map(m.fetchers) });
      let D = new AbortController(),
          Z = Zr(e.history, j, D.signal);
      J.set(S, D);
      let Pe = gt,
          Y = await Gr("loader", Z, $, F, l, o, u);
      if (($n(Y) && (Y = (await jh(Y, Z.signal, !0)) || Y), J.get(S) === D && J.delete(S), Z.signal.aborted)) return;
      if (yr(Y))
          if (Ht > Pe) {
              let Se = Zn(void 0);
              m.fetchers.set(S, Se), q({ fetchers: new Map(m.fetchers) });
              return;
          } else {
              Ve.add(S), await Ar(m, Y);
              return;
          }
      if (ho(Y)) {
          let Se = fr(m.matches, k);
          m.fetchers.delete(S), q({ fetchers: new Map(m.fetchers), errors: { [Se.route.id]: Y.error } });
          return;
      }
      W(!$n(Y), "Unhandled fetcher deferred data");
      let de = Zn(Y.data);
      m.fetchers.set(S, de), q({ fetchers: new Map(m.fetchers) });
  }
  async function Ar(S, k, j) {
      let { submission: $, replace: F, isFetchActionRedirect: A } = j === void 0 ? {} : j;
      k.revalidate && (B = !0);
      let b = Oo(S.location, k.location, oe({ _isRedirect: !0 }, A ? { _isFetchActionRedirect: !0 } : {}));
      if ((W(b, "Expected a location on the redirect navigation"), n)) {
          let Z = !1;
          if (k.reloadDocument) Z = !0;
          else if (Eh.test(k.location)) {
              const Pe = e.history.createURL(k.location);
              Z = Pe.origin !== t.location.origin || Dr(Pe.pathname, u) == null;
          }
          if (Z) {
              F ? t.location.replace(k.location) : t.location.assign(k.location);
              return;
          }
      }
      R = null;
      let z = F === !0 ? ve.Replace : ve.Push,
          D = $ || $f(S.navigation);
      if (yg.has(k.status) && D && ft(D.formMethod)) await Kt(z, b, { submission: oe({}, D, { formAction: k.location }), preventScrollReset: _ });
      else if (A) await Kt(z, b, { overrideNavigation: cl(b), fetcherSubmission: D, preventScrollReset: _ });
      else {
          let Z = cl(b, D);
          await Kt(z, b, { overrideNavigation: Z, preventScrollReset: _ });
      }
  }
  async function tc(S, k, j, $, F) {
      let A = await Promise.all([
              ...j.map((D) => Gr("loader", F, D, k, l, o, u)),
              ...$.map((D) => (D.matches && D.match && D.controller ? Gr("loader", Zr(e.history, D.path, D.controller.signal), D.match, D.matches, l, o, u) : { type: pe.error, error: qe(404, { pathname: D.path }) })),
          ]),
          b = A.slice(0, j.length),
          z = A.slice(j.length);
      return (
          await Promise.all([
              Of(
                  S,
                  j,
                  b,
                  b.map(() => F.signal),
                  !1,
                  m.loaderData
              ),
              Of(
                  S,
                  $.map((D) => D.match),
                  z,
                  $.map((D) => (D.controller ? D.controller.signal : null)),
                  !0
              ),
          ]),
          { results: A, loaderResults: b, fetcherResults: z }
      );
  }
  function Qi() {
      (B = !0),
          M.push(...Yi()),
          yt.forEach((S, k) => {
              J.has(k) && (re.push(k), Yt(k));
          });
  }
  function Vo(S, k, j) {
      let $ = fr(m.matches, k);
      Ki(S), q({ errors: { [$.route.id]: j }, fetchers: new Map(m.fetchers) });
  }
  function Ki(S) {
      let k = m.fetchers.get(S);
      J.has(S) && !(k && k.state === "loading" && Qt.has(S)) && Yt(S), yt.delete(S), Qt.delete(S), Ve.delete(S), m.fetchers.delete(S);
  }
  function Yt(S) {
      let k = J.get(S);
      W(k, "Expected fetch controller: " + S), k.abort(), J.delete(S);
  }
  function nc(S) {
      for (let k of S) {
          let j = ec(k),
              $ = Zn(j.data);
          m.fetchers.set(k, $);
      }
  }
  function rc() {
      let S = [],
          k = !1;
      for (let j of Ve) {
          let $ = m.fetchers.get(j);
          W($, "Expected fetcher: " + j), $.state === "loading" && (Ve.delete(j), S.push(j), (k = !0));
      }
      return nc(S), k;
  }
  function oc(S) {
      let k = [];
      for (let [j, $] of Qt)
          if ($ < S) {
              let F = m.fetchers.get(j);
              W(F, "Expected fetcher: " + j), F.state === "loading" && (Yt(j), Qt.delete(j), k.push(j));
          }
      return nc(k), k.length > 0;
  }
  function dm(S, k) {
      let j = m.blockers.get(S) || Xr;
      return I.get(S) !== k && I.set(S, k), j;
  }
  function lc(S) {
      m.blockers.delete(S), I.delete(S);
  }
  function Ho(S, k) {
      let j = m.blockers.get(S) || Xr;
      W(
          (j.state === "unblocked" && k.state === "blocked") ||
              (j.state === "blocked" && k.state === "blocked") ||
              (j.state === "blocked" && k.state === "proceeding") ||
              (j.state === "blocked" && k.state === "unblocked") ||
              (j.state === "proceeding" && k.state === "unblocked"),
          "Invalid blocker state transition: " + j.state + " -> " + k.state
      );
      let $ = new Map(m.blockers);
      $.set(S, k), q({ blockers: $ });
  }
  function ic(S) {
      let { currentLocation: k, nextLocation: j, historyAction: $ } = S;
      if (I.size === 0) return;
      I.size > 1 && Rr(!1, "A router only supports one blocker at a time");
      let F = Array.from(I.entries()),
          [A, b] = F[F.length - 1],
          z = m.blockers.get(A);
      if (!(z && z.state === "proceeding") && b({ currentLocation: k, nextLocation: j, historyAction: $ })) return A;
  }
  function Yi(S) {
      let k = [];
      return (
          L.forEach((j, $) => {
              (!S || S($)) && (j.cancel(), k.push($), L.delete($));
          }),
          k
      );
  }
  function pm(S, k, j) {
      if (((d = S), (y = k), (v = j || null), !x && m.navigation === Na)) {
          x = !0;
          let $ = uc(m.location, m.matches);
          $ != null && q({ restoreScrollPosition: $ });
      }
      return () => {
          (d = null), (y = null), (v = null);
      };
  }
  function ac(S, k) {
      return (
          (v &&
              v(
                  S,
                  k.map(($) => Lg($, m.loaderData))
              )) ||
          S.key
      );
  }
  function hm(S, k) {
      if (d && y) {
          let j = ac(S, k);
          d[j] = y();
      }
  }
  function uc(S, k) {
      if (d) {
          let j = ac(S, k),
              $ = d[j];
          if (typeof $ == "number") return $;
      }
      return null;
  }
  function mm(S) {
      (l = {}), (a = _u(S, o, void 0, l));
  }
  return (
      (g = {
          get basename() {
              return u;
          },
          get state() {
              return m;
          },
          get routes() {
              return i;
          },
          initialize: ae,
          subscribe: Kn,
          enableScrollRestoration: pm,
          navigate: xt,
          fetch: sm,
          revalidate: Yn,
          createHref: (S) => e.history.createHref(S),
          encodeLocation: (S) => e.history.encodeLocation(S),
          getFetcher: ec,
          deleteFetcher: Ki,
          dispose: me,
          getBlocker: dm,
          deleteBlocker: lc,
          _internalFetchControllers: J,
          _internalActiveDeferreds: L,
          _internalSetRoutes: mm,
      }),
      g
  );
}
function kg(e) {
  return e != null && (("formData" in e && e.formData != null) || ("body" in e && e.body !== void 0));
}
function Lu(e, t, n, r, o, l, i) {
  let a, u;
  if (l != null && i !== "path") {
      a = [];
      for (let c of t)
          if ((a.push(c), c.route.id === l)) {
              u = c;
              break;
          }
  } else (a = t), (u = t[t.length - 1]);
  let s = zs(
      o || ".",
      Si(a).map((c) => c.pathnameBase),
      Dr(e.pathname, n) || e.pathname,
      i === "path"
  );
  return (
      o == null && ((s.search = e.search), (s.hash = e.hash)),
      (o == null || o === "" || o === ".") && u && u.route.index && !As(s.search) && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
      r && n !== "/" && (s.pathname = s.pathname === "/" ? n : zt([n, s.pathname])),
      Un(s)
  );
}
function Ef(e, t, n, r) {
  if (!r || !kg(r)) return { path: n };
  if (r.formMethod && !_g(r.formMethod)) return { path: n, error: qe(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: qe(400, { type: "invalid-body" }) }),
      l = r.formMethod || "get",
      i = e ? l.toUpperCase() : l.toLowerCase(),
      a = Ph(n);
  if (r.body !== void 0) {
      if (r.formEncType === "text/plain") {
          if (!ft(i)) return o();
          let d =
              typeof r.body == "string"
                  ? r.body
                  : r.body instanceof FormData || r.body instanceof URLSearchParams
                  ? Array.from(r.body.entries()).reduce((v, y) => {
                        let [x, E] = y;
                        return (
                            "" +
                            v +
                            x +
                            "=" +
                            E +
                            `
`
                        );
                    }, "")
                  : String(r.body);
          return { path: n, submission: { formMethod: i, formAction: a, formEncType: r.formEncType, formData: void 0, json: void 0, text: d } };
      } else if (r.formEncType === "application/json") {
          if (!ft(i)) return o();
          try {
              let d = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
              return { path: n, submission: { formMethod: i, formAction: a, formEncType: r.formEncType, formData: void 0, json: d, text: void 0 } };
          } catch {
              return o();
          }
      }
  }
  W(typeof FormData == "function", "FormData is not available in this environment");
  let u, s;
  if (r.formData) (u = Tu(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = Tu(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = Nf(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
      try {
          (u = new URLSearchParams(r.body)), (s = Nf(u));
      } catch {
          return o();
      }
  let c = { formMethod: i, formAction: a, formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded", formData: s, json: void 0, text: void 0 };
  if (ft(c.formMethod)) return { path: n, submission: c };
  let p = Vt(n);
  return t && p.search && As(p.search) && u.append("index", ""), (p.search = "?" + u), { path: Un(p), submission: c };
}
function Eg(e, t) {
  let n = e;
  if (t) {
      let r = e.findIndex((o) => o.route.id === t);
      r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Cf(e, t, n, r, o, l, i, a, u, s, c, p, d, v) {
  let y = v ? Object.values(v)[0] : d ? Object.values(d)[0] : void 0,
      x = e.createURL(t.location),
      E = e.createURL(o),
      h = v ? Object.keys(v)[0] : void 0,
      g = Eg(n, h).filter((P, _) => {
          if (P.route.lazy) return !0;
          if (P.route.loader == null) return !1;
          if (Cg(t.loaderData, t.matches[_], P) || i.some((B) => B === P.route.id)) return !0;
          let R = t.matches[_],
              T = P;
          return Pf(
              P,
              oe({ currentUrl: x, currentParams: R.params, nextUrl: E, nextParams: T.params }, r, { actionResult: y, defaultShouldRevalidate: l || x.pathname + x.search === E.pathname + E.search || x.search !== E.search || Ch(R, T) })
          );
      }),
      m = [];
  return (
      u.forEach((P, _) => {
          if (!n.some((re) => re.route.id === P.routeId)) return;
          let R = cr(c, P.path, p);
          if (!R) {
              m.push({ key: _, routeId: P.routeId, path: P.path, matches: null, match: null, controller: null });
              return;
          }
          let T = t.fetchers.get(_),
              B = Ou(R, P.path),
              M = !1;
          s.has(_)
              ? (M = !1)
              : a.includes(_)
              ? (M = !0)
              : T && T.state !== "idle" && T.data === void 0
              ? (M = l)
              : (M = Pf(B, oe({ currentUrl: x, currentParams: t.matches[t.matches.length - 1].params, nextUrl: E, nextParams: n[n.length - 1].params }, r, { actionResult: y, defaultShouldRevalidate: l }))),
              M && m.push({ key: _, routeId: P.routeId, path: P.path, matches: R, match: B, controller: new AbortController() });
      }),
      [g, m]
  );
}
function Cg(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
      o = e[n.route.id] === void 0;
  return r || o;
}
function Ch(e, t) {
  let n = e.route.path;
  return e.pathname !== t.pathname || (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]);
}
function Pf(e, t) {
  if (e.route.shouldRevalidate) {
      let n = e.route.shouldRevalidate(t);
      if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function jf(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  W(o, "No route found in manifest");
  let l = {};
  for (let i in r) {
      let u = o[i] !== void 0 && i !== "hasErrorBoundary";
      Rr(!u, 'Route "' + o.id + '" has a static property "' + i + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + i + '" will be ignored.')),
          !u && !Kv.has(i) && (l[i] = r[i]);
  }
  Object.assign(o, l), Object.assign(o, oe({}, t(o), { lazy: void 0 }));
}
async function Gr(e, t, n, r, o, l, i, a) {
  a === void 0 && (a = {});
  let u,
      s,
      c,
      p = (y) => {
          let x,
              E = new Promise((h, f) => (x = f));
          return (c = () => x()), t.signal.addEventListener("abort", c), Promise.race([y({ request: t, params: n.params, context: a.requestContext }), E]);
      };
  try {
      let y = n.route[e];
      if (n.route.lazy)
          if (y) s = (await Promise.all([p(y), jf(n.route, l, o)]))[0];
          else if ((await jf(n.route, l, o), (y = n.route[e]), y)) s = await p(y);
          else if (e === "action") {
              let x = new URL(t.url),
                  E = x.pathname + x.search;
              throw qe(405, { method: t.method, pathname: E, routeId: n.route.id });
          } else return { type: pe.data, data: void 0 };
      else if (y) s = await p(y);
      else {
          let x = new URL(t.url),
              E = x.pathname + x.search;
          throw qe(404, { pathname: E });
      }
      W(s !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.");
  } catch (y) {
      (u = pe.error), (s = y);
  } finally {
      c && t.signal.removeEventListener("abort", c);
  }
  if (Rg(s)) {
      let y = s.status;
      if (gg.has(y)) {
          let h = s.headers.get("Location");
          if ((W(h, "Redirects returned/thrown from loaders/actions must have a Location header"), !Eh.test(h))) h = Lu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, h);
          else if (!a.isStaticRequest) {
              let f = new URL(t.url),
                  g = h.startsWith("//") ? new URL(f.protocol + h) : new URL(h),
                  m = Dr(g.pathname, i) != null;
              g.origin === f.origin && m && (h = g.pathname + g.search + g.hash);
          }
          if (a.isStaticRequest) throw (s.headers.set("Location", h), s);
          return { type: pe.redirect, status: y, location: h, revalidate: s.headers.get("X-Remix-Revalidate") !== null, reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null };
      }
      if (a.isRouteRequest) throw { type: u === pe.error ? pe.error : pe.data, response: s };
      let x,
          E = s.headers.get("Content-Type");
      return (
          E && /\bapplication\/json\b/.test(E) ? (x = await s.json()) : (x = await s.text()),
          u === pe.error ? { type: u, error: new Is(y, s.statusText, x), headers: s.headers } : { type: pe.data, data: x, statusCode: s.status, headers: s.headers }
      );
  }
  if (u === pe.error) return { type: u, error: s };
  if (Ng(s)) {
      var d, v;
      return { type: pe.deferred, deferredData: s, statusCode: (d = s.init) == null ? void 0 : d.status, headers: ((v = s.init) == null ? void 0 : v.headers) && new Headers(s.init.headers) };
  }
  return { type: pe.data, data: s };
}
function Zr(e, t, n, r) {
  let o = e.createURL(Ph(t)).toString(),
      l = { signal: n };
  if (r && ft(r.formMethod)) {
      let { formMethod: i, formEncType: a } = r;
      (l.method = i.toUpperCase()),
          a === "application/json"
              ? ((l.headers = new Headers({ "Content-Type": a })), (l.body = JSON.stringify(r.json)))
              : a === "text/plain"
              ? (l.body = r.text)
              : a === "application/x-www-form-urlencoded" && r.formData
              ? (l.body = Tu(r.formData))
              : (l.body = r.formData);
  }
  return new Request(o, l);
}
function Tu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Nf(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Pg(e, t, n, r, o) {
  let l = {},
      i = null,
      a,
      u = !1,
      s = {};
  return (
      n.forEach((c, p) => {
          let d = t[p].route.id;
          if ((W(!yr(c), "Cannot handle redirect results in processLoaderData"), ho(c))) {
              let v = fr(e, d),
                  y = c.error;
              r && ((y = Object.values(r)[0]), (r = void 0)), (i = i || {}), i[v.route.id] == null && (i[v.route.id] = y), (l[d] = void 0), u || ((u = !0), (a = Sh(c.error) ? c.error.status : 500)), c.headers && (s[d] = c.headers);
          } else $n(c) ? (o.set(d, c.deferredData), (l[d] = c.deferredData.data)) : (l[d] = c.data), c.statusCode != null && c.statusCode !== 200 && !u && (a = c.statusCode), c.headers && (s[d] = c.headers);
      }),
      r && ((i = r), (l[Object.keys(r)[0]] = void 0)),
      { loaderData: l, errors: i, statusCode: a || 200, loaderHeaders: s }
  );
}
function Rf(e, t, n, r, o, l, i, a) {
  let { loaderData: u, errors: s } = Pg(t, n, r, o, a);
  for (let c = 0; c < l.length; c++) {
      let { key: p, match: d, controller: v } = l[c];
      W(i !== void 0 && i[c] !== void 0, "Did not find corresponding fetcher result");
      let y = i[c];
      if (!(v && v.signal.aborted))
          if (ho(y)) {
              let x = fr(e.matches, d == null ? void 0 : d.route.id);
              (s && s[x.route.id]) || (s = oe({}, s, { [x.route.id]: y.error })), e.fetchers.delete(p);
          } else if (yr(y)) W(!1, "Unhandled fetcher revalidation redirect");
          else if ($n(y)) W(!1, "Unhandled fetcher deferred data");
          else {
              let x = Zn(y.data);
              e.fetchers.set(p, x);
          }
  }
  return { loaderData: u, errors: s };
}
function _f(e, t, n, r) {
  let o = oe({}, t);
  for (let l of n) {
      let i = l.route.id;
      if ((t.hasOwnProperty(i) ? t[i] !== void 0 && (o[i] = t[i]) : e[i] !== void 0 && l.route.loader && (o[i] = e[i]), r && r.hasOwnProperty(i))) break;
  }
  return o;
}
function fr(e, t) {
  return (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e]).reverse().find((r) => r.route.hasErrorBoundary === !0) || e[0];
}
function Lf(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || { id: "__shim-error-route__" };
  return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t };
}
function qe(e, t) {
  let { pathname: n, routeId: r, method: o, type: l } = t === void 0 ? {} : t,
      i = "Unknown Server Error",
      a = "Unknown @remix-run/router error";
  return (
      e === 400
          ? ((i = "Bad Request"),
            o && n && r
                ? (a = "You made a " + o + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request.")
                : l === "defer-action"
                ? (a = "defer() is not supported in actions")
                : l === "invalid-body" && (a = "Unable to encode submission body"))
          : e === 403
          ? ((i = "Forbidden"), (a = 'Route "' + r + '" does not match URL "' + n + '"'))
          : e === 404
          ? ((i = "Not Found"), (a = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((i = "Method Not Allowed"),
            o && n && r
                ? (a = "You made a " + o.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request.")
                : o && (a = 'Invalid request method "' + o.toUpperCase() + '"')),
      new Is(e || 500, i, new Error(a), !0)
  );
}
function Tf(e) {
  for (let t = e.length - 1; t >= 0; t--) {
      let n = e[t];
      if (yr(n)) return { result: n, idx: t };
  }
}
function Ph(e) {
  let t = typeof e == "string" ? Vt(e) : e;
  return Un(oe({}, t, { hash: "" }));
}
function jg(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function $n(e) {
  return e.type === pe.deferred;
}
function ho(e) {
  return e.type === pe.error;
}
function yr(e) {
  return (e && e.type) === pe.redirect;
}
function Ng(e) {
  let t = e;
  return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function";
}
function Rg(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function _g(e) {
  return vg.has(e.toLowerCase());
}
function ft(e) {
  return hg.has(e.toLowerCase());
}
async function Of(e, t, n, r, o, l) {
  for (let i = 0; i < n.length; i++) {
      let a = n[i],
          u = t[i];
      if (!u) continue;
      let s = e.find((p) => p.route.id === u.route.id),
          c = s != null && !Ch(s, u) && (l && l[u.route.id]) !== void 0;
      if ($n(a) && (o || c)) {
          let p = r[i];
          W(p, "Expected an AbortSignal for revalidating fetcher deferred result"),
              await jh(a, p, o).then((d) => {
                  d && (n[i] = d || n[i]);
              });
      }
  }
}
async function jh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
      if (n)
          try {
              return { type: pe.data, data: e.deferredData.unwrappedData };
          } catch (o) {
              return { type: pe.error, error: o };
          }
      return { type: pe.data, data: e.deferredData.data };
  }
}
function As(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Lg(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function Ou(e, t) {
  let n = typeof t == "string" ? Vt(t).search : t.search;
  if (e[e.length - 1].route.index && As(n || "")) return e[e.length - 1];
  let r = Si(e);
  return r[r.length - 1];
}
function $f(e) {
  let { formMethod: t, formAction: n, formEncType: r, text: o, formData: l, json: i } = e;
  if (!(!t || !n || !r)) {
      if (o != null) return { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: void 0, text: o };
      if (l != null) return { formMethod: t, formAction: n, formEncType: r, formData: l, json: void 0, text: void 0 };
      if (i !== void 0) return { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: i, text: void 0 };
  }
}
function cl(e, t) {
  return t
      ? { state: "loading", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text }
      : { state: "loading", location: e, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
}
function Tg(e, t) {
  return { state: "submitting", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text };
}
function Jr(e, t) {
  return e
      ? { state: "loading", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t, " _hasFetcherDoneAnything ": !0 }
      : { state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: t, " _hasFetcherDoneAnything ": !0 };
}
function Og(e, t) {
  return { state: "submitting", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t ? t.data : void 0, " _hasFetcherDoneAnything ": !0 };
}
function Zn(e) {
  return { state: "idle", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: e, " _hasFetcherDoneAnything ": !0 };
}
/**
* React Router v6.15.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/ function Zl() {
  return (
      (Zl = Object.assign
          ? Object.assign.bind()
          : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }),
      Zl.apply(this, arguments)
  );
}
const ki = C.createContext(null),
  bs = C.createContext(null),
  Hn = C.createContext(null),
  Ei = C.createContext(null),
  En = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Nh = C.createContext(null);
function $g(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Uo() || W(!1);
  let { basename: r, navigator: o } = C.useContext(Hn),
      { hash: l, pathname: i, search: a } = Fs(e, { relative: n }),
      u = i;
  return r !== "/" && (u = i === "/" ? r : zt([r, i])), o.createHref({ pathname: u, search: a, hash: l });
}
function Uo() {
  return C.useContext(Ei) != null;
}
function Bo() {
  return Uo() || W(!1), C.useContext(Ei).location;
}
function Rh(e) {
  C.useContext(Hn).static || C.useLayoutEffect(e);
}
function Mg() {
  let { isDataRoute: e } = C.useContext(En);
  return e ? Yg() : Dg();
}
function Dg() {
  Uo() || W(!1);
  let e = C.useContext(ki),
      { basename: t, navigator: n } = C.useContext(Hn),
      { matches: r } = C.useContext(En),
      { pathname: o } = Bo(),
      l = JSON.stringify(Si(r).map((u) => u.pathnameBase)),
      i = C.useRef(!1);
  return (
      Rh(() => {
          i.current = !0;
      }),
      C.useCallback(
          function (u, s) {
              if ((s === void 0 && (s = {}), !i.current)) return;
              if (typeof u == "number") {
                  n.go(u);
                  return;
              }
              let c = zs(u, JSON.parse(l), o, s.relative === "path");
              e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : zt([t, c.pathname])), (s.replace ? n.replace : n.push)(c, s.state, s);
          },
          [t, n, l, o, e]
      )
  );
}
const zg = C.createContext(null);
function Ig(e) {
  let t = C.useContext(En).outlet;
  return t && C.createElement(zg.Provider, { value: e }, t);
}
function Fs(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
      { matches: r } = C.useContext(En),
      { pathname: o } = Bo(),
      l = JSON.stringify(Si(r).map((i) => i.pathnameBase));
  return C.useMemo(() => zs(e, JSON.parse(l), o, n === "path"), [e, l, o, n]);
}
function Ag(e, t, n) {
  Uo() || W(!1);
  let { navigator: r } = C.useContext(Hn),
      { matches: o } = C.useContext(En),
      l = o[o.length - 1],
      i = l ? l.params : {};
  l && l.pathname;
  let a = l ? l.pathnameBase : "/";
  l && l.route;
  let u = Bo(),
      s;
  if (t) {
      var c;
      let x = typeof t == "string" ? Vt(t) : t;
      a === "/" || ((c = x.pathname) != null && c.startsWith(a)) || W(!1), (s = x);
  } else s = u;
  let p = s.pathname || "/",
      d = a === "/" ? p : p.slice(a.length) || "/",
      v = cr(e, { pathname: d }),
      y = Wg(
          v &&
              v.map((x) =>
                  Object.assign({}, x, {
                      params: Object.assign({}, i, x.params),
                      pathname: zt([a, r.encodeLocation ? r.encodeLocation(x.pathname).pathname : x.pathname]),
                      pathnameBase: x.pathnameBase === "/" ? a : zt([a, r.encodeLocation ? r.encodeLocation(x.pathnameBase).pathname : x.pathnameBase]),
                  })
              ),
          o,
          n
      );
  return t && y ? C.createElement(Ei.Provider, { value: { location: Zl({ pathname: "/", search: "", hash: "", state: null, key: "default" }, s), navigationType: ve.Pop } }, y) : y;
}
function bg() {
  let e = Kg(),
      t = Sh(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
      l = null;
  return C.createElement(C.Fragment, null, C.createElement("h2", null, "Unexpected Application Error!"), C.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? C.createElement("pre", { style: o }, n) : null, l);
}
const Fg = C.createElement(bg, null);
class Ug extends C.Component {
  constructor(t) {
      super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
      return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
      return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
          ? { error: t.error, location: t.location, revalidation: t.revalidation }
          : { error: t.error || n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
  }
  componentDidCatch(t, n) {
      console.error("React Router caught the following error during render", t, n);
  }
  render() {
      return this.state.error ? C.createElement(En.Provider, { value: this.props.routeContext }, C.createElement(Nh.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
  }
}
function Bg(e) {
  let { routeContext: t, match: n, children: r } = e,
      o = C.useContext(ki);
  return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), C.createElement(En.Provider, { value: t }, r);
}
function Wg(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
      var o;
      if ((o = n) != null && o.errors) e = n.matches;
      else return null;
  }
  let l = e,
      i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
      let a = l.findIndex((u) => u.route.id && (i == null ? void 0 : i[u.route.id]));
      a >= 0 || W(!1), (l = l.slice(0, Math.min(l.length, a + 1)));
  }
  return l.reduceRight((a, u, s) => {
      let c = u.route.id ? (i == null ? void 0 : i[u.route.id]) : null,
          p = null;
      n && (p = u.route.errorElement || Fg);
      let d = t.concat(l.slice(0, s + 1)),
          v = () => {
              let y;
              return (
                  c ? (y = p) : u.route.Component ? (y = C.createElement(u.route.Component, null)) : u.route.element ? (y = u.route.element) : (y = a),
                  C.createElement(Bg, { match: u, routeContext: { outlet: a, matches: d, isDataRoute: n != null }, children: y })
              );
          };
      return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0)
          ? C.createElement(Ug, { location: n.location, revalidation: n.revalidation, component: p, error: c, children: v(), routeContext: { outlet: null, matches: d, isDataRoute: !0 } })
          : v();
  }, null);
}
var _h = (function (e) {
      return (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator"), (e.UseNavigateStable = "useNavigate"), e;
  })(_h || {}),
  Jl = (function (e) {
      return (
          (e.UseBlocker = "useBlocker"),
          (e.UseLoaderData = "useLoaderData"),
          (e.UseActionData = "useActionData"),
          (e.UseRouteError = "useRouteError"),
          (e.UseNavigation = "useNavigation"),
          (e.UseRouteLoaderData = "useRouteLoaderData"),
          (e.UseMatches = "useMatches"),
          (e.UseRevalidator = "useRevalidator"),
          (e.UseNavigateStable = "useNavigate"),
          (e.UseRouteId = "useRouteId"),
          e
      );
  })(Jl || {});
function Vg(e) {
  let t = C.useContext(ki);
  return t || W(!1), t;
}
function Hg(e) {
  let t = C.useContext(bs);
  return t || W(!1), t;
}
function Qg(e) {
  let t = C.useContext(En);
  return t || W(!1), t;
}
function Lh(e) {
  let t = Qg(),
      n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function Kg() {
  var e;
  let t = C.useContext(Nh),
      n = Hg(Jl.UseRouteError),
      r = Lh(Jl.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Yg() {
  let { router: e } = Vg(_h.UseNavigateStable),
      t = Lh(Jl.UseNavigateStable),
      n = C.useRef(!1);
  return (
      Rh(() => {
          n.current = !0;
      }),
      C.useCallback(
          function (o, l) {
              l === void 0 && (l = {}), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Zl({ fromRouteId: t }, l)));
          },
          [e, t]
      )
  );
}
const Xg = "startTransition",
  Mf = Mm[Xg];
function Gg(e) {
  let { fallbackElement: t, router: n, future: r } = e,
      [o, l] = C.useState(n.state),
      { v7_startTransition: i } = r || {},
      a = C.useCallback(
          (p) => {
              i && Mf ? Mf(() => l(p)) : l(p);
          },
          [l, i]
      );
  C.useLayoutEffect(() => n.subscribe(a), [n, a]);
  let u = C.useMemo(
          () => ({
              createHref: n.createHref,
              encodeLocation: n.encodeLocation,
              go: (p) => n.navigate(p),
              push: (p, d, v) => n.navigate(p, { state: d, preventScrollReset: v == null ? void 0 : v.preventScrollReset }),
              replace: (p, d, v) => n.navigate(p, { replace: !0, state: d, preventScrollReset: v == null ? void 0 : v.preventScrollReset }),
          }),
          [n]
      ),
      s = n.basename || "/",
      c = C.useMemo(() => ({ router: n, navigator: u, static: !1, basename: s }), [n, u, s]);
  return C.createElement(
      C.Fragment,
      null,
      C.createElement(
          ki.Provider,
          { value: c },
          C.createElement(bs.Provider, { value: o }, C.createElement(qg, { basename: s, location: o.location, navigationType: o.historyAction, navigator: u }, o.initialized ? C.createElement(Zg, { routes: n.routes, state: o }) : t))
      ),
      null
  );
}
function Zg(e) {
  let { routes: t, state: n } = e;
  return Ag(t, void 0, n);
}
function Jg(e) {
  return Ig(e.context);
}
function qg(e) {
  let { basename: t = "/", children: n = null, location: r, navigationType: o = ve.Pop, navigator: l, static: i = !1 } = e;
  Uo() && W(!1);
  let a = t.replace(/^\/*/, "/"),
      u = C.useMemo(() => ({ basename: a, navigator: l, static: i }), [a, l, i]);
  typeof r == "string" && (r = Vt(r));
  let { pathname: s = "/", search: c = "", hash: p = "", state: d = null, key: v = "default" } = r,
      y = C.useMemo(() => {
          let x = Dr(s, a);
          return x == null ? null : { location: { pathname: x, search: c, hash: p, state: d, key: v }, navigationType: o };
      }, [a, s, c, p, d, v, o]);
  return y == null ? null : C.createElement(Hn.Provider, { value: u }, C.createElement(Ei.Provider, { children: n, value: y }));
}
new Promise(() => {});
function ey(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
  return e.Component && Object.assign(t, { element: C.createElement(e.Component), Component: void 0 }), e.ErrorBoundary && Object.assign(t, { errorElement: C.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }), t;
}
/**
* React Router DOM v6.15.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/ function _r() {
  return (
      (_r = Object.assign
          ? Object.assign.bind()
          : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }),
      _r.apply(this, arguments)
  );
}
function Th(e, t) {
  if (e == null) return {};
  var n = {},
      r = Object.keys(e),
      o,
      l;
  for (l = 0; l < r.length; l++) (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function ty(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ny(e, t) {
  return e.button === 0 && (!t || t === "_self") && !ty(e);
}
const ry = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
  oy = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
function ly(e, t) {
  return Sg({
      basename: t == null ? void 0 : t.basename,
      future: _r({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
      history: Vv({ window: t == null ? void 0 : t.window }),
      hydrationData: (t == null ? void 0 : t.hydrationData) || iy(),
      routes: e,
      mapRouteProperties: ey,
  }).initialize();
}
function iy() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = _r({}, t, { errors: ay(t.errors) })), t;
}
function ay(e) {
  if (!e) return null;
  let t = Object.entries(e),
      n = {};
  for (let [r, o] of t)
      if (o && o.__type === "RouteErrorResponse") n[r] = new Is(o.status, o.statusText, o.data, o.internal === !0);
      else if (o && o.__type === "Error") {
          if (o.__subType) {
              let l = window[o.__subType];
              if (typeof l == "function")
                  try {
                      let i = new l(o.message);
                      (i.stack = ""), (n[r] = i);
                  } catch {}
          }
          if (n[r] == null) {
              let l = new Error(o.message);
              (l.stack = ""), (n[r] = l);
          }
      } else n[r] = o;
  return n;
}
const uy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  sy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  cy = C.forwardRef(function (t, n) {
      let { onClick: r, relative: o, reloadDocument: l, replace: i, state: a, target: u, to: s, preventScrollReset: c } = t,
          p = Th(t, ry),
          { basename: d } = C.useContext(Hn),
          v,
          y = !1;
      if (typeof s == "string" && sy.test(s) && ((v = s), uy))
          try {
              let f = new URL(window.location.href),
                  g = s.startsWith("//") ? new URL(f.protocol + s) : new URL(s),
                  m = Dr(g.pathname, d);
              g.origin === f.origin && m != null ? (s = m + g.search + g.hash) : (y = !0);
          } catch {}
      let x = $g(s, { relative: o }),
          E = fy(s, { replace: i, state: a, target: u, preventScrollReset: c, relative: o });
      function h(f) {
          r && r(f), f.defaultPrevented || E(f);
      }
      return C.createElement("a", _r({}, p, { href: v || x, onClick: y || l ? r : h, ref: n, target: u }));
  }),
  Gn = C.forwardRef(function (t, n) {
      let { "aria-current": r = "page", caseSensitive: o = !1, className: l = "", end: i = !1, style: a, to: u, children: s } = t,
          c = Th(t, oy),
          p = Fs(u, { relative: c.relative }),
          d = Bo(),
          v = C.useContext(bs),
          { navigator: y } = C.useContext(Hn),
          x = y.encodeLocation ? y.encodeLocation(p).pathname : p.pathname,
          E = d.pathname,
          h = v && v.navigation && v.navigation.location ? v.navigation.location.pathname : null;
      o || ((E = E.toLowerCase()), (h = h ? h.toLowerCase() : null), (x = x.toLowerCase()));
      let f = E === x || (!i && E.startsWith(x) && E.charAt(x.length) === "/"),
          g = h != null && (h === x || (!i && h.startsWith(x) && h.charAt(x.length) === "/")),
          m = f ? r : void 0,
          P;
      typeof l == "function" ? (P = l({ isActive: f, isPending: g })) : (P = [l, f ? "active" : null, g ? "pending" : null].filter(Boolean).join(" "));
      let _ = typeof a == "function" ? a({ isActive: f, isPending: g }) : a;
      return C.createElement(cy, _r({}, c, { "aria-current": m, className: P, ref: n, style: _, to: u }), typeof s == "function" ? s({ isActive: f, isPending: g }) : s);
  });
var Df;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"), (e.UseSubmit = "useSubmit"), (e.UseSubmitFetcher = "useSubmitFetcher"), (e.UseFetcher = "useFetcher");
})(Df || (Df = {}));
var zf;
(function (e) {
  (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(zf || (zf = {}));
function fy(e, t) {
  let { target: n, replace: r, state: o, preventScrollReset: l, relative: i } = t === void 0 ? {} : t,
      a = Mg(),
      u = Bo(),
      s = Fs(e, { relative: i });
  return C.useCallback(
      (c) => {
          if (ny(c, n)) {
              c.preventDefault();
              let p = r !== void 0 ? r : Un(u) === Un(s);
              a(e, { replace: p, state: o, preventScrollReset: l, relative: i });
          }
      },
      [u, a, s, r, o, n, e, l, i]
  );
}
var Oh = { exports: {} },
  $h = {};
/**
* @license React
* use-sync-external-store-shim.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/ var Lr = C;
function dy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var py = typeof Object.is == "function" ? Object.is : dy,
  hy = Lr.useState,
  my = Lr.useEffect,
  vy = Lr.useLayoutEffect,
  gy = Lr.useDebugValue;
function yy(e, t) {
  var n = t(),
      r = hy({ inst: { value: n, getSnapshot: t } }),
      o = r[0].inst,
      l = r[1];
  return (
      vy(
          function () {
              (o.value = n), (o.getSnapshot = t), Ra(o) && l({ inst: o });
          },
          [e, n, t]
      ),
      my(
          function () {
              return (
                  Ra(o) && l({ inst: o }),
                  e(function () {
                      Ra(o) && l({ inst: o });
                  })
              );
          },
          [e]
      ),
      gy(n),
      n
  );
}
function Ra(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
      var n = t();
      return !py(e, n);
  } catch {
      return !0;
  }
}
function xy(e, t) {
  return t();
}
var wy = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? xy : yy;
$h.useSyncExternalStore = Lr.useSyncExternalStore !== void 0 ? Lr.useSyncExternalStore : wy;
Oh.exports = $h;
var Sy = Oh.exports,
  Mh = { exports: {} },
  Dh = {};
/**
* @license React
* use-sync-external-store-shim/with-selector.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/ var Ci = C,
  ky = Sy;
function Ey(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Cy = typeof Object.is == "function" ? Object.is : Ey,
  Py = ky.useSyncExternalStore,
  jy = Ci.useRef,
  Ny = Ci.useEffect,
  Ry = Ci.useMemo,
  _y = Ci.useDebugValue;
Dh.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var l = jy(null);
  if (l.current === null) {
      var i = { hasValue: !1, value: null };
      l.current = i;
  } else i = l.current;
  l = Ry(
      function () {
          function u(v) {
              if (!s) {
                  if (((s = !0), (c = v), (v = r(v)), o !== void 0 && i.hasValue)) {
                      var y = i.value;
                      if (o(y, v)) return (p = y);
                  }
                  return (p = v);
              }
              if (((y = p), Cy(c, v))) return y;
              var x = r(v);
              return o !== void 0 && o(y, x) ? y : ((c = v), (p = x));
          }
          var s = !1,
              c,
              p,
              d = n === void 0 ? null : n;
          return [
              function () {
                  return u(t());
              },
              d === null
                  ? void 0
                  : function () {
                        return u(d());
                    },
          ];
      },
      [t, n, r, o]
  );
  var a = Py(e, l[0], l[1]);
  return (
      Ny(
          function () {
              (i.hasValue = !0), (i.value = a);
          },
          [a]
      ),
      _y(a),
      a
  );
};
Mh.exports = Dh;
var Ly = Mh.exports;
function Ty(e) {
  e();
}
let zh = Ty;
const Oy = (e) => (zh = e),
  $y = () => zh,
  If = Symbol.for("react-redux-context"),
  Af = typeof globalThis < "u" ? globalThis : {};
function My() {
  var e;
  if (!C.createContext) return {};
  const t = (e = Af[If]) != null ? e : (Af[If] = new Map());
  let n = t.get(C.createContext);
  return n || ((n = C.createContext(null)), t.set(C.createContext, n)), n;
}
const yn = My();
function Us(e = yn) {
  return function () {
      return C.useContext(e);
  };
}
const Ih = Us(),
  Dy = () => {
      throw new Error("uSES not initialized!");
  };
let Ah = Dy;
const zy = (e) => {
      Ah = e;
  },
  Iy = (e, t) => e === t;
function Ay(e = yn) {
  const t = e === yn ? Ih : Us(e);
  return function (r, o = {}) {
      const { equalityFn: l = Iy, stabilityCheck: i = void 0, noopCheck: a = void 0 } = typeof o == "function" ? { equalityFn: o } : o,
          { store: u, subscription: s, getServerState: c, stabilityCheck: p, noopCheck: d } = t();
      C.useRef(!0);
      const v = C.useCallback(
              {
                  [r.name](x) {
                      return r(x);
                  },
              }[r.name],
              [r, p, i]
          ),
          y = Ah(s.addNestedSub, u.getState, c || u.getState, v, l);
      return C.useDebugValue(y), y;
  };
}
const by = Ay();
var bh = { exports: {} },
  K = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/ var Ce = typeof Symbol == "function" && Symbol.for,
  Bs = Ce ? Symbol.for("react.element") : 60103,
  Ws = Ce ? Symbol.for("react.portal") : 60106,
  Pi = Ce ? Symbol.for("react.fragment") : 60107,
  ji = Ce ? Symbol.for("react.strict_mode") : 60108,
  Ni = Ce ? Symbol.for("react.profiler") : 60114,
  Ri = Ce ? Symbol.for("react.provider") : 60109,
  _i = Ce ? Symbol.for("react.context") : 60110,
  Vs = Ce ? Symbol.for("react.async_mode") : 60111,
  Li = Ce ? Symbol.for("react.concurrent_mode") : 60111,
  Ti = Ce ? Symbol.for("react.forward_ref") : 60112,
  Oi = Ce ? Symbol.for("react.suspense") : 60113,
  Fy = Ce ? Symbol.for("react.suspense_list") : 60120,
  $i = Ce ? Symbol.for("react.memo") : 60115,
  Mi = Ce ? Symbol.for("react.lazy") : 60116,
  Uy = Ce ? Symbol.for("react.block") : 60121,
  By = Ce ? Symbol.for("react.fundamental") : 60117,
  Wy = Ce ? Symbol.for("react.responder") : 60118,
  Vy = Ce ? Symbol.for("react.scope") : 60119;
function Je(e) {
  if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
          case Bs:
              switch (((e = e.type), e)) {
                  case Vs:
                  case Li:
                  case Pi:
                  case Ni:
                  case ji:
                  case Oi:
                      return e;
                  default:
                      switch (((e = e && e.$$typeof), e)) {
                          case _i:
                          case Ti:
                          case Mi:
                          case $i:
                          case Ri:
                              return e;
                          default:
                              return t;
                      }
              }
          case Ws:
              return t;
      }
  }
}
function Fh(e) {
  return Je(e) === Li;
}
K.AsyncMode = Vs;
K.ConcurrentMode = Li;
K.ContextConsumer = _i;
K.ContextProvider = Ri;
K.Element = Bs;
K.ForwardRef = Ti;
K.Fragment = Pi;
K.Lazy = Mi;
K.Memo = $i;
K.Portal = Ws;
K.Profiler = Ni;
K.StrictMode = ji;
K.Suspense = Oi;
K.isAsyncMode = function (e) {
  return Fh(e) || Je(e) === Vs;
};
K.isConcurrentMode = Fh;
K.isContextConsumer = function (e) {
  return Je(e) === _i;
};
K.isContextProvider = function (e) {
  return Je(e) === Ri;
};
K.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Bs;
};
K.isForwardRef = function (e) {
  return Je(e) === Ti;
};
K.isFragment = function (e) {
  return Je(e) === Pi;
};
K.isLazy = function (e) {
  return Je(e) === Mi;
};
K.isMemo = function (e) {
  return Je(e) === $i;
};
K.isPortal = function (e) {
  return Je(e) === Ws;
};
K.isProfiler = function (e) {
  return Je(e) === Ni;
};
K.isStrictMode = function (e) {
  return Je(e) === ji;
};
K.isSuspense = function (e) {
  return Je(e) === Oi;
};
K.isValidElementType = function (e) {
  return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === Pi ||
      e === Li ||
      e === Ni ||
      e === ji ||
      e === Oi ||
      e === Fy ||
      (typeof e == "object" && e !== null && (e.$$typeof === Mi || e.$$typeof === $i || e.$$typeof === Ri || e.$$typeof === _i || e.$$typeof === Ti || e.$$typeof === By || e.$$typeof === Wy || e.$$typeof === Vy || e.$$typeof === Uy))
  );
};
K.typeOf = Je;
bh.exports = K;
var Hy = bh.exports,
  Uh = Hy,
  Qy = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  Ky = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  Bh = {};
Bh[Uh.ForwardRef] = Qy;
Bh[Uh.Memo] = Ky;
var G = {};
/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/ var Hs = Symbol.for("react.element"),
  Qs = Symbol.for("react.portal"),
  Di = Symbol.for("react.fragment"),
  zi = Symbol.for("react.strict_mode"),
  Ii = Symbol.for("react.profiler"),
  Ai = Symbol.for("react.provider"),
  bi = Symbol.for("react.context"),
  Yy = Symbol.for("react.server_context"),
  Fi = Symbol.for("react.forward_ref"),
  Ui = Symbol.for("react.suspense"),
  Bi = Symbol.for("react.suspense_list"),
  Wi = Symbol.for("react.memo"),
  Vi = Symbol.for("react.lazy"),
  Xy = Symbol.for("react.offscreen"),
  Wh;
Wh = Symbol.for("react.module.reference");
function it(e) {
  if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
          case Hs:
              switch (((e = e.type), e)) {
                  case Di:
                  case Ii:
                  case zi:
                  case Ui:
                  case Bi:
                      return e;
                  default:
                      switch (((e = e && e.$$typeof), e)) {
                          case Yy:
                          case bi:
                          case Fi:
                          case Vi:
                          case Wi:
                          case Ai:
                              return e;
                          default:
                              return t;
                      }
              }
          case Qs:
              return t;
      }
  }
}
G.ContextConsumer = bi;
G.ContextProvider = Ai;
G.Element = Hs;
G.ForwardRef = Fi;
G.Fragment = Di;
G.Lazy = Vi;
G.Memo = Wi;
G.Portal = Qs;
G.Profiler = Ii;
G.StrictMode = zi;
G.Suspense = Ui;
G.SuspenseList = Bi;
G.isAsyncMode = function () {
  return !1;
};
G.isConcurrentMode = function () {
  return !1;
};
G.isContextConsumer = function (e) {
  return it(e) === bi;
};
G.isContextProvider = function (e) {
  return it(e) === Ai;
};
G.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Hs;
};
G.isForwardRef = function (e) {
  return it(e) === Fi;
};
G.isFragment = function (e) {
  return it(e) === Di;
};
G.isLazy = function (e) {
  return it(e) === Vi;
};
G.isMemo = function (e) {
  return it(e) === Wi;
};
G.isPortal = function (e) {
  return it(e) === Qs;
};
G.isProfiler = function (e) {
  return it(e) === Ii;
};
G.isStrictMode = function (e) {
  return it(e) === zi;
};
G.isSuspense = function (e) {
  return it(e) === Ui;
};
G.isSuspenseList = function (e) {
  return it(e) === Bi;
};
G.isValidElementType = function (e) {
  return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === Di ||
      e === Ii ||
      e === zi ||
      e === Ui ||
      e === Bi ||
      e === Xy ||
      (typeof e == "object" && e !== null && (e.$$typeof === Vi || e.$$typeof === Wi || e.$$typeof === Ai || e.$$typeof === bi || e.$$typeof === Fi || e.$$typeof === Wh || e.getModuleId !== void 0))
  );
};
G.typeOf = it;
function Gy() {
  const e = $y();
  let t = null,
      n = null;
  return {
      clear() {
          (t = null), (n = null);
      },
      notify() {
          e(() => {
              let r = t;
              for (; r; ) r.callback(), (r = r.next);
          });
      },
      get() {
          let r = [],
              o = t;
          for (; o; ) r.push(o), (o = o.next);
          return r;
      },
      subscribe(r) {
          let o = !0,
              l = (n = { callback: r, next: null, prev: n });
          return (
              l.prev ? (l.prev.next = l) : (t = l),
              function () {
                  !o || t === null || ((o = !1), l.next ? (l.next.prev = l.prev) : (n = l.prev), l.prev ? (l.prev.next = l.next) : (t = l.next));
              }
          );
      },
  };
}
const bf = { notify() {}, get: () => [] };
function Zy(e, t) {
  let n,
      r = bf;
  function o(p) {
      return u(), r.subscribe(p);
  }
  function l() {
      r.notify();
  }
  function i() {
      c.onStateChange && c.onStateChange();
  }
  function a() {
      return !!n;
  }
  function u() {
      n || ((n = t ? t.addNestedSub(i) : e.subscribe(i)), (r = Gy()));
  }
  function s() {
      n && (n(), (n = void 0), r.clear(), (r = bf));
  }
  const c = { addNestedSub: o, notifyNestedSubs: l, handleChangeWrapper: i, isSubscribed: a, trySubscribe: u, tryUnsubscribe: s, getListeners: () => r };
  return c;
}
const Jy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  qy = Jy ? C.useLayoutEffect : C.useEffect;
function e1({ store: e, context: t, children: n, serverState: r, stabilityCheck: o = "once", noopCheck: l = "once" }) {
  const i = C.useMemo(() => {
          const s = Zy(e);
          return { store: e, subscription: s, getServerState: r ? () => r : void 0, stabilityCheck: o, noopCheck: l };
      }, [e, r, o, l]),
      a = C.useMemo(() => e.getState(), [e]);
  qy(() => {
      const { subscription: s } = i;
      return (
          (s.onStateChange = s.notifyNestedSubs),
          s.trySubscribe(),
          a !== e.getState() && s.notifyNestedSubs(),
          () => {
              s.tryUnsubscribe(), (s.onStateChange = void 0);
          }
      );
  }, [i, a]);
  const u = t || yn;
  return C.createElement(u.Provider, { value: i }, n);
}
function Vh(e = yn) {
  const t = e === yn ? Ih : Us(e);
  return function () {
      const { store: r } = t();
      return r;
  };
}
const t1 = Vh();
function n1(e = yn) {
  const t = e === yn ? t1 : Vh(e);
  return function () {
      return t().dispatch;
  };
}
const r1 = n1();
zy(Ly.useSyncExternalStoreWithSelector);
Oy(yh.unstable_batchedUpdates);
const zr = by,
  o1 = () => {
      const e = zr((t) => t.darkMode);
      return w.jsx("section", {
          className: `${e ? "lightTx" : "darkTx"} body-font font-mono ${e ? "darkBg" : "lightBg"} transition-bg duration-1000 transition-color-1000 pt-[30px]`,
          children: w.jsxs("div", {
              className: "container px-5 sm:pt-[200px] xs:py-8 mx-auto",
              children: [
                  w.jsxs("div", {
                      className: "flex flex-col text-center w-full mb-20",
                      children: [
                          w.jsx("h2", { className: `text-xl text-indigo-500 tracking-widest font-medium title-font mb-1 ${e ? "lightTx" : "darkTx"} duration-1000 transition-color-1000`, children: "InnovatorsGroup" }),
                          w.jsx("h1", { className: `sm:text-3xl text-2xl font-medium title-font text-gray-${e ? 50 : 900} transition-bg duration-1000 transition-color-1000`, children: "TOPARÍMÍZ BENEN TANÍSÍŃ" }),
                      ],
                  }),
                  w.jsxs("div", {
                      className: "flex flex-wrap m-4",
                      children: [
                          w.jsx("div", {
                              className: "p-4 md:w-1/2",
                              children: w.jsxs("div", {
                                  className: `flex rounded-lg h-full bg-slate-${e ? 900 : 100} border p-8 flex-col`,
                                  children: [
                                      w.jsxs("div", {
                                          className: "flex items-center mb-3",
                                          children: [
                                              w.jsx("div", {
                                                  className: "w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0",
                                                  children: w.jsxs("svg", {
                                                      fill: "none",
                                                      stroke: "currentColor",
                                                      strokeLinecap: "round",
                                                      strokeLinejoin: "round",
                                                      strokeWidth: "2",
                                                      className: "w-5 h-5",
                                                      viewBox: "0 0 24 24",
                                                      children: [w.jsx("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }), w.jsx("circle", { cx: "12", cy: "7", r: "4" })],
                                                  }),
                                              }),
                                              w.jsx("h2", { className: `${e ? "lightTx" : "darkTx"} sm:text-2xl xs:text-[18px] title-font font-medium duration-1000 transition-color-1000 mb-1`, children: "Elmuratov Salimbay" }),
                                          ],
                                      }),
                                      w.jsxs("div", {
                                          className: "flex-grow",
                                          children: [
                                              w.jsx("h2", { className: "sm:text-2xl xs:text-[13px] text-center mb-2", children: "⭐ Front-end Developer" }),
                                              w.jsxs("a", {
                                                  href: "https://t.me/YelimuratovSalimbay",
                                                  className: "scale mt-3 text-indigo-500 inline-flex items-center cursor-pointer",
                                                  children: [
                                                      "Learn More",
                                                      w.jsx("svg", {
                                                          fill: "none",
                                                          stroke: "currentColor",
                                                          strokeLinecap: "round",
                                                          strokeLinejoin: "round",
                                                          strokeWidth: "2",
                                                          className: "w-4 h-4 ml-2",
                                                          viewBox: "0 0 24 24",
                                                          children: w.jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                          w.jsx("div", {
                              className: "p-4 md:w-1/2",
                              children: w.jsxs("div", {
                                  className: `flex rounded-lg h-full bg-slate-${e ? 900 : 100} border p-8 flex-col`,
                                  children: [
                                      w.jsxs("div", {
                                          className: "flex items-center mb-3",
                                          children: [
                                              w.jsx("div", {
                                                  className: "w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0",
                                                  children: w.jsxs("svg", {
                                                      fill: "none",
                                                      stroke: "currentColor",
                                                      strokeLinecap: "round",
                                                      strokeLinejoin: "round",
                                                      strokeWidth: "2",
                                                      className: "w-5 h-5",
                                                      viewBox: "0 0 24 24",
                                                      children: [w.jsx("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }), w.jsx("circle", { cx: "12", cy: "7", r: "4" })],
                                                  }),
                                              }),
                                              w.jsx("h2", { className: `${e ? "lightTx" : "darkTx"} sm:text-2xl xs:text-[18px] title-font font-medium duration-1000 transition-color-1000 mb-1`, children: "Diyarbek Oralbaev" }),
                                          ],
                                      }),
                                      w.jsxs("div", {
                                          className: "flex-grow",
                                          children: [
                                              w.jsx("h2", { className: "sm:text-2xl xs:text-[13px] text-center mb-2", children: "⭐ Back-end Developer" }),
                                              w.jsxs("a", {
                                                  href: "https://t.me/Diyarbek_Dev",
                                                  className: "scale mt-3 text-indigo-500 inline-flex items-center cursor-pointer",
                                                  children: [
                                                      "Learn More",
                                                      w.jsx("svg", {
                                                          fill: "none",
                                                          stroke: "currentColor",
                                                          strokeLinecap: "round",
                                                          strokeLinejoin: "round",
                                                          strokeWidth: "2",
                                                          className: "w-4 h-4 ml-2",
                                                          viewBox: "0 0 24 24",
                                                          children: w.jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
                  w.jsxs("div", {
                      className: "flex flex-wrap m-4",
                      children: [
                          w.jsx("div", {
                              className: "p-4 md:w-1/2",
                              children: w.jsxs("div", {
                                  className: `flex rounded-lg h-full bg-slate-${e ? 900 : 100} border p-8 flex-col`,
                                  children: [
                                      w.jsxs("div", {
                                          className: "flex items-center mb-3",
                                          children: [
                                              w.jsx("div", {
                                                  className: "w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0",
                                                  children: w.jsxs("svg", {
                                                      fill: "none",
                                                      stroke: "currentColor",
                                                      strokeLinecap: "round",
                                                      strokeLinejoin: "round",
                                                      strokeWidth: "2",
                                                      className: "w-5 h-5",
                                                      viewBox: "0 0 24 24",
                                                      children: [w.jsx("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }), w.jsx("circle", { cx: "12", cy: "7", r: "4" })],
                                                  }),
                                              }),
                                              w.jsx("h2", { className: `${e ? "lightTx" : "darkTx"} sm:text-2xl xs:text-[18px] title-font font-medium duration-1000 transition-color-1000 mb-1`, children: "Sagidullaev Islam" }),
                                          ],
                                      }),
                                      w.jsxs("div", {
                                          className: "flex-grow",
                                          children: [
                                              w.jsx("h2", { className: "sm:text-2xl xs:text-[13px] text-center mb-2 md:mr-10", children: "⭐ Android Developer" }),
                                              w.jsxs("a", {
                                                  href: "https://t.me/deveIoper_android",
                                                  className: "scale mt-3 text-indigo-500 inline-flex items-center cursor-pointer",
                                                  children: [
                                                      "Learn More",
                                                      w.jsx("svg", {
                                                          fill: "none",
                                                          stroke: "currentColor",
                                                          strokeLinecap: "round",
                                                          strokeLinejoin: "round",
                                                          strokeWidth: "2",
                                                          className: "w-4 h-4 ml-2",
                                                          viewBox: "0 0 24 24",
                                                          children: w.jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                          w.jsx("div", {
                              className: "p-4 md:w-1/2",
                              children: w.jsxs("div", {
                                  className: `flex rounded-lg h-full bg-slate-${e ? 900 : 100} border p-8 flex-col`,
                                  children: [
                                      w.jsxs("div", {
                                          className: "flex items-center mb-3",
                                          children: [
                                              w.jsx("div", {
                                                  className: "w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0",
                                                  children: w.jsxs("svg", {
                                                      fill: "none",
                                                      stroke: "currentColor",
                                                      strokeLinecap: "round",
                                                      strokeLinejoin: "round",
                                                      strokeWidth: "2",
                                                      className: "w-5 h-5",
                                                      viewBox: "0 0 24 24",
                                                      children: [w.jsx("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }), w.jsx("circle", { cx: "12", cy: "7", r: "4" })],
                                                  }),
                                              }),
                                              w.jsx("h2", { className: `${e ? "lightTx" : "darkTx"} sm:text-2xl xs:text-[18px] title-font font-medium duration-1000 transition-color-1000 mb-1`, children: "Bayniyazov Baxıtjan" }),
                                          ],
                                      }),
                                      w.jsxs("div", {
                                          className: "flex-grow",
                                          children: [
                                              w.jsx("h2", { className: "sm:text-2xl xs:text-[13px] text-center mb-2 sm:mr-16 xs:mr-6", children: "⭐ Cyber Security" }),
                                              w.jsxs("a", {
                                                  href: "https://t.me/gnu_uzb",
                                                  className: "scale mt-3 text-indigo-500 inline-flex items-center cursor-pointer",
                                                  children: [
                                                      "Learn More",
                                                      w.jsx("svg", {
                                                          fill: "none",
                                                          stroke: "currentColor",
                                                          strokeLinecap: "round",
                                                          strokeLinejoin: "round",
                                                          strokeWidth: "2",
                                                          className: "w-4 h-4 ml-2",
                                                          viewBox: "0 0 24 24",
                                                          children: w.jsx("path", { d: "M5 12h14M12 5l7 7-7 7" }),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
              ],
          }),
      });
  };
let l1 = { data: "" },
  i1 = (e) => (typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || l1),
  a1 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  u1 = /\/\*[^]*?\*\/|  +/g,
  Ff = /\n+/g,
  tn = (e, t) => {
      let n = "",
          r = "",
          o = "";
      for (let l in e) {
          let i = e[l];
          l[0] == "@"
              ? l[1] == "i"
                  ? (n = l + " " + i + ";")
                  : (r += l[1] == "f" ? tn(i, l) : l + "{" + tn(i, l[1] == "k" ? "" : t) + "}")
              : typeof i == "object"
              ? (r += tn(i, t ? t.replace(/([^,])+/g, (a) => l.replace(/(^:.*)|([^,])+/g, (u) => (/&/.test(u) ? u.replace(/&/g, a) : a ? a + " " + u : u))) : l))
              : i != null && ((l = /^--/.test(l) ? l : l.replace(/[A-Z]/g, "-$&").toLowerCase()), (o += tn.p ? tn.p(l, i) : l + ":" + i + ";"));
      }
      return n + (t && o ? t + "{" + o + "}" : o) + r;
  },
  Lt = {},
  Hh = (e) => {
      if (typeof e == "object") {
          let t = "";
          for (let n in e) t += n + Hh(e[n]);
          return t;
      }
      return e;
  },
  s1 = (e, t, n, r, o) => {
      let l = Hh(e),
          i =
              Lt[l] ||
              (Lt[l] = ((u) => {
                  let s = 0,
                      c = 11;
                  for (; s < u.length; ) c = (101 * c + u.charCodeAt(s++)) >>> 0;
                  return "go" + c;
              })(l));
      if (!Lt[i]) {
          let u =
              l !== e
                  ? e
                  : ((s) => {
                        let c,
                            p,
                            d = [{}];
                        for (; (c = a1.exec(s.replace(u1, ""))); ) c[4] ? d.shift() : c[3] ? ((p = c[3].replace(Ff, " ").trim()), d.unshift((d[0][p] = d[0][p] || {}))) : (d[0][c[1]] = c[2].replace(Ff, " ").trim());
                        return d[0];
                    })(e);
          Lt[i] = tn(o ? { ["@keyframes " + i]: u } : u, n ? "" : "." + i);
      }
      let a = n && Lt.g ? Lt.g : null;
      return (
          n && (Lt.g = Lt[i]),
          ((u, s, c, p) => {
              p ? (s.data = s.data.replace(p, u)) : s.data.indexOf(u) === -1 && (s.data = c ? u + s.data : s.data + u);
          })(Lt[i], t, r, a),
          i
      );
  },
  c1 = (e, t, n) =>
      e.reduce((r, o, l) => {
          let i = t[l];
          if (i && i.call) {
              let a = i(n),
                  u = (a && a.props && a.props.className) || (/^go/.test(a) && a);
              i = u ? "." + u : a && typeof a == "object" ? (a.props ? "" : tn(a, "")) : a === !1 ? "" : a;
          }
          return r + o + (i ?? "");
      }, "");
function Hi(e) {
  let t = this || {},
      n = e.call ? e(t.p) : e;
  return s1(n.unshift ? (n.raw ? c1(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {})) : n, i1(t.target), t.g, t.o, t.k);
}
let Qh, $u, Mu;
Hi.bind({ g: 1 });
let Ut = Hi.bind({ k: 1 });
function f1(e, t, n, r) {
  (tn.p = t), (Qh = e), ($u = n), (Mu = r);
}
function Cn(e, t) {
  let n = this || {};
  return function () {
      let r = arguments;
      function o(l, i) {
          let a = Object.assign({}, l),
              u = a.className || o.className;
          (n.p = Object.assign({ theme: $u && $u() }, a)), (n.o = / *go\d+/.test(u)), (a.className = Hi.apply(n, r) + (u ? " " + u : "")), t && (a.ref = i);
          let s = e;
          return e[0] && ((s = a.as || e), delete a.as), Mu && s[0] && Mu(a), Qh(s, a);
      }
      return t ? t(o) : o;
  };
}
var d1 = (e) => typeof e == "function",
  ql = (e, t) => (d1(e) ? e(t) : e),
  p1 = (() => {
      let e = 0;
      return () => (++e).toString();
  })(),
  Kh = (() => {
      let e;
      return () => {
          if (e === void 0 && typeof window < "u") {
              let t = matchMedia("(prefers-reduced-motion: reduce)");
              e = !t || t.matches;
          }
          return e;
      };
  })(),
  h1 = 20,
  Cl = new Map(),
  m1 = 1e3,
  Uf = (e) => {
      if (Cl.has(e)) return;
      let t = setTimeout(() => {
          Cl.delete(e), Qn({ type: 4, toastId: e });
      }, m1);
      Cl.set(e, t);
  },
  v1 = (e) => {
      let t = Cl.get(e);
      t && clearTimeout(t);
  },
  Du = (e, t) => {
      switch (t.type) {
          case 0:
              return { ...e, toasts: [t.toast, ...e.toasts].slice(0, h1) };
          case 1:
              return t.toast.id && v1(t.toast.id), { ...e, toasts: e.toasts.map((l) => (l.id === t.toast.id ? { ...l, ...t.toast } : l)) };
          case 2:
              let { toast: n } = t;
              return e.toasts.find((l) => l.id === n.id) ? Du(e, { type: 1, toast: n }) : Du(e, { type: 0, toast: n });
          case 3:
              let { toastId: r } = t;
              return (
                  r
                      ? Uf(r)
                      : e.toasts.forEach((l) => {
                            Uf(l.id);
                        }),
                  { ...e, toasts: e.toasts.map((l) => (l.id === r || r === void 0 ? { ...l, visible: !1 } : l)) }
              );
          case 4:
              return t.toastId === void 0 ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((l) => l.id !== t.toastId) };
          case 5:
              return { ...e, pausedAt: t.time };
          case 6:
              let o = t.time - (e.pausedAt || 0);
              return { ...e, pausedAt: void 0, toasts: e.toasts.map((l) => ({ ...l, pauseDuration: l.pauseDuration + o })) };
      }
  },
  Pl = [],
  jl = { toasts: [], pausedAt: void 0 },
  Qn = (e) => {
      (jl = Du(jl, e)),
          Pl.forEach((t) => {
              t(jl);
          });
  },
  g1 = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  y1 = (e = {}) => {
      let [t, n] = C.useState(jl);
      C.useEffect(
          () => (
              Pl.push(n),
              () => {
                  let o = Pl.indexOf(n);
                  o > -1 && Pl.splice(o, 1);
              }
          ),
          [t]
      );
      let r = t.toasts.map((o) => {
          var l, i;
          return {
              ...e,
              ...e[o.type],
              ...o,
              duration: o.duration || ((l = e[o.type]) == null ? void 0 : l.duration) || (e == null ? void 0 : e.duration) || g1[o.type],
              style: { ...e.style, ...((i = e[o.type]) == null ? void 0 : i.style), ...o.style },
          };
      });
      return { ...t, toasts: r };
  },
  x1 = (e, t = "blank", n) => ({ createdAt: Date.now(), visible: !0, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...n, id: (n == null ? void 0 : n.id) || p1() }),
  Wo = (e) => (t, n) => {
      let r = x1(t, e, n);
      return Qn({ type: 2, toast: r }), r.id;
  },
  Fe = (e, t) => Wo("blank")(e, t);
Fe.error = Wo("error");
Fe.success = Wo("success");
Fe.loading = Wo("loading");
Fe.custom = Wo("custom");
Fe.dismiss = (e) => {
  Qn({ type: 3, toastId: e });
};
Fe.remove = (e) => Qn({ type: 4, toastId: e });
Fe.promise = (e, t, n) => {
  let r = Fe.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
      e
          .then((o) => (Fe.success(ql(t.success, o), { id: r, ...n, ...(n == null ? void 0 : n.success) }), o))
          .catch((o) => {
              Fe.error(ql(t.error, o), { id: r, ...n, ...(n == null ? void 0 : n.error) });
          }),
      e
  );
};
var w1 = (e, t) => {
      Qn({ type: 1, toast: { id: e, height: t } });
  },
  S1 = () => {
      Qn({ type: 5, time: Date.now() });
  },
  k1 = (e) => {
      let { toasts: t, pausedAt: n } = y1(e);
      C.useEffect(() => {
          if (n) return;
          let l = Date.now(),
              i = t.map((a) => {
                  if (a.duration === 1 / 0) return;
                  let u = (a.duration || 0) + a.pauseDuration - (l - a.createdAt);
                  if (u < 0) {
                      a.visible && Fe.dismiss(a.id);
                      return;
                  }
                  return setTimeout(() => Fe.dismiss(a.id), u);
              });
          return () => {
              i.forEach((a) => a && clearTimeout(a));
          };
      }, [t, n]);
      let r = C.useCallback(() => {
              n && Qn({ type: 6, time: Date.now() });
          }, [n]),
          o = C.useCallback(
              (l, i) => {
                  let { reverseOrder: a = !1, gutter: u = 8, defaultPosition: s } = i || {},
                      c = t.filter((v) => (v.position || s) === (l.position || s) && v.height),
                      p = c.findIndex((v) => v.id === l.id),
                      d = c.filter((v, y) => y < p && v.visible).length;
                  return c
                      .filter((v) => v.visible)
                      .slice(...(a ? [d + 1] : [0, d]))
                      .reduce((v, y) => v + (y.height || 0) + u, 0);
              },
              [t]
          );
      return { toasts: t, handlers: { updateHeight: w1, startPause: S1, endPause: r, calculateOffset: o } };
  },
  E1 = Ut`
from {
transform: scale(0) rotate(45deg);
opacity: 0;
}
to {
transform: scale(1) rotate(45deg);
opacity: 1;
}`,
  C1 = Ut`
from {
transform: scale(0);
opacity: 0;
}
to {
transform: scale(1);
opacity: 1;
}`,
  P1 = Ut`
from {
transform: scale(0) rotate(90deg);
opacity: 0;
}
to {
transform: scale(1) rotate(90deg);
opacity: 1;
}`,
  j1 = Cn("div")`
width: 20px;
opacity: 0;
height: 20px;
border-radius: 10px;
background: ${(e) => e.primary || "#ff4b4b"};
position: relative;
transform: rotate(45deg);

animation: ${E1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
  forwards;
animation-delay: 100ms;

&:after,
&:before {
  content: '';
  animation: ${C1} 0.15s ease-out forwards;
  animation-delay: 150ms;
  position: absolute;
  border-radius: 3px;
  opacity: 0;
  background: ${(e) => e.secondary || "#fff"};
  bottom: 9px;
  left: 4px;
  height: 2px;
  width: 12px;
}

&:before {
  animation: ${P1} 0.15s ease-out forwards;
  animation-delay: 180ms;
  transform: rotate(90deg);
}
`,
  N1 = Ut`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`,
  R1 = Cn("div")`
width: 12px;
height: 12px;
box-sizing: border-box;
border: 2px solid;
border-radius: 100%;
border-color: ${(e) => e.secondary || "#e0e0e0"};
border-right-color: ${(e) => e.primary || "#616161"};
animation: ${N1} 1s linear infinite;
`,
  _1 = Ut`
from {
transform: scale(0) rotate(45deg);
opacity: 0;
}
to {
transform: scale(1) rotate(45deg);
opacity: 1;
}`,
  L1 = Ut`
0% {
height: 0;
width: 0;
opacity: 0;
}
40% {
height: 0;
width: 6px;
opacity: 1;
}
100% {
opacity: 1;
height: 10px;
}`,
  T1 = Cn("div")`
width: 20px;
opacity: 0;
height: 20px;
border-radius: 10px;
background: ${(e) => e.primary || "#61d345"};
position: relative;
transform: rotate(45deg);

animation: ${_1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
  forwards;
animation-delay: 100ms;
&:after {
  content: '';
  box-sizing: border-box;
  animation: ${L1} 0.2s ease-out forwards;
  opacity: 0;
  animation-delay: 200ms;
  position: absolute;
  border-right: 2px solid;
  border-bottom: 2px solid;
  border-color: ${(e) => e.secondary || "#fff"};
  bottom: 6px;
  left: 6px;
  height: 10px;
  width: 6px;
}
`,
  O1 = Cn("div")`
position: absolute;
`,
  $1 = Cn("div")`
position: relative;
display: flex;
justify-content: center;
align-items: center;
min-width: 20px;
min-height: 20px;
`,
  M1 = Ut`
from {
transform: scale(0.6);
opacity: 0.4;
}
to {
transform: scale(1);
opacity: 1;
}`,
  D1 = Cn("div")`
position: relative;
transform: scale(0.6);
opacity: 0.4;
min-width: 20px;
animation: ${M1} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
  forwards;
`,
  z1 = ({ toast: e }) => {
      let { icon: t, type: n, iconTheme: r } = e;
      return t !== void 0
          ? typeof t == "string"
              ? C.createElement(D1, null, t)
              : t
          : n === "blank"
          ? null
          : C.createElement($1, null, C.createElement(R1, { ...r }), n !== "loading" && C.createElement(O1, null, n === "error" ? C.createElement(j1, { ...r }) : C.createElement(T1, { ...r })));
  },
  I1 = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  A1 = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  b1 = "0%{opacity:0;} 100%{opacity:1;}",
  F1 = "0%{opacity:1;} 100%{opacity:0;}",
  U1 = Cn("div")`
display: flex;
align-items: center;
background: #fff;
color: #363636;
line-height: 1.3;
will-change: transform;
box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
max-width: 350px;
pointer-events: auto;
padding: 8px 10px;
border-radius: 8px;
`,
  B1 = Cn("div")`
display: flex;
justify-content: center;
margin: 4px 10px;
color: inherit;
flex: 1 1 auto;
white-space: pre-line;
`,
  W1 = (e, t) => {
      let n = e.includes("top") ? 1 : -1,
          [r, o] = Kh() ? [b1, F1] : [I1(n), A1(n)];
      return { animation: t ? `${Ut(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${Ut(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
  },
  V1 = C.memo(({ toast: e, position: t, style: n, children: r }) => {
      let o = e.height ? W1(e.position || t || "top-center", e.visible) : { opacity: 0 },
          l = C.createElement(z1, { toast: e }),
          i = C.createElement(B1, { ...e.ariaProps }, ql(e.message, e));
      return C.createElement(U1, { className: e.className, style: { ...o, ...n, ...e.style } }, typeof r == "function" ? r({ icon: l, message: i }) : C.createElement(C.Fragment, null, l, i));
  });
f1(C.createElement);
var H1 = ({ id: e, className: t, style: n, onHeightUpdate: r, children: o }) => {
      let l = C.useCallback(
          (i) => {
              if (i) {
                  let a = () => {
                      let u = i.getBoundingClientRect().height;
                      r(e, u);
                  };
                  a(), new MutationObserver(a).observe(i, { subtree: !0, childList: !0, characterData: !0 });
              }
          },
          [e, r]
      );
      return C.createElement("div", { ref: l, className: t, style: n }, o);
  },
  Q1 = (e, t) => {
      let n = e.includes("top"),
          r = n ? { top: 0 } : { bottom: 0 },
          o = e.includes("center") ? { justifyContent: "center" } : e.includes("right") ? { justifyContent: "flex-end" } : {};
      return { left: 0, right: 0, display: "flex", position: "absolute", transition: Kh() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${t * (n ? 1 : -1)}px)`, ...r, ...o };
  },
  K1 = Hi`
z-index: 9999;
> * {
  pointer-events: auto;
}
`,
  fl = 16,
  Yh = ({ reverseOrder: e, position: t = "top-center", toastOptions: n, gutter: r, children: o, containerStyle: l, containerClassName: i }) => {
      let { toasts: a, handlers: u } = k1(n);
      return C.createElement(
          "div",
          { style: { position: "fixed", zIndex: 9999, top: fl, left: fl, right: fl, bottom: fl, pointerEvents: "none", ...l }, className: i, onMouseEnter: u.startPause, onMouseLeave: u.endPause },
          a.map((s) => {
              let c = s.position || t,
                  p = u.calculateOffset(s, { reverseOrder: e, gutter: r, defaultPosition: t }),
                  d = Q1(c, p);
              return C.createElement(
                  H1,
                  { id: s.id, key: s.id, onHeightUpdate: u.updateHeight, className: s.visible ? K1 : "", style: d },
                  s.type === "custom" ? ql(s.message, s) : o ? o(s) : C.createElement(V1, { toast: s, position: c })
              );
          })
      );
  };
const Y1 = () => {
  const e = zr((n) => n.darkMode),
      t = (n) => {
          n.preventDefault();
          const r = new FormData(n.currentTarget);
          console.log(Object.fromEntries(r.entries()));
      };
  return w.jsxs("section", {
      className: `${e ? "lightTx" : "darkTx"} body-font relative ${e ? "darkBg" : "lightBg"} transition-bg duration-1000 transition-color-1000 font-mono lg:pb-[330px] md:pb-[490px] xs:pb-[40px] pt-[105px]`,
      children: [
          w.jsxs("div", {
              className: `container px-5 xs:pb-[290px] xs:pt-12 sm:pb-0 sm:pt-0  mx-auto ${e ? "lightTx" : "darkTx"}`,
              children: [
                  w.jsxs("div", {
                      className: "flex flex-col text-center w-full mb-12",
                      children: [
                          w.jsx("h1", { className: "sm:text-3xl text-2xl font-medium title-font mb-4", children: "BIZ BENEN BAYLANISIW" }),
                          w.jsx("p", { className: "lg:w-2/3 mx-auto leading-relaxed text-base", children: "TUWRIDAN-TUWRI BAYLANISIW" }),
                      ],
                  }),
                  w.jsx("div", {
                      className: "lg:w-1/2 md:w-2/3 mx-auto",
                      children: w.jsxs("form", {
                          onSubmit: (n) => t(n),
                          className: "flex flex-wrap -m-2",
                          children: [
                              w.jsx("div", {
                                  className: "p-2 w-1/2",
                                  children: w.jsxs("div", {
                                      className: "relative",
                                      children: [
                                          w.jsx("label", { htmlFor: "name", className: "leading-7 text-sm", children: "Elektron pochta" }),
                                          w.jsx("input", {
                                              type: "email",
                                              id: "name",
                                              name: "name",
                                              className: `w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-gray-${
                                                  e ? 50 : 700
                                              } placeholder:opacity-75`,
                                              placeholder: "email@example.com",
                                          }),
                                      ],
                                  }),
                              }),
                              w.jsx("div", {
                                  className: "p-2 w-1/2",
                                  children: w.jsxs("div", {
                                      className: "relative",
                                      children: [
                                          w.jsx("label", { htmlFor: "email", className: "leading-7 text-sm", children: "Telefon" }),
                                          w.jsx("input", {
                                              type: "number",
                                              id: "email",
                                              name: "email",
                                              className: `w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 placeholder:text-gray-${
                                                  e ? 50 : 700
                                              }  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out remove-arrows opacity-75`,
                                              placeholder: "+9989",
                                          }),
                                      ],
                                  }),
                              }),
                              w.jsx("div", {
                                  className: "p-2 w-full",
                                  children: w.jsxs("div", {
                                      className: "relative",
                                      children: [
                                          w.jsx("label", { htmlFor: "message", className: "leading-7 text-sm", children: "Xabar" }),
                                          w.jsx("textarea", {
                                              id: "message",
                                              name: "message",
                                              className: `w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out placeholder:text-gray-${
                                                  e ? 50 : 700
                                              } opacity-75`,
                                              placeholder: "Xabarıńız",
                                          }),
                                      ],
                                  }),
                              }),
                              w.jsx("div", {
                                  className: "p-2 w-full",
                                  children: w.jsx("button", { type: "submit", className: "flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg", children: "Jiberiw" }),
                              }),
                          ],
                      }),
                  }),
              ],
          }),
          w.jsx(Yh, { position: "top-center", reverseOrder: !1 }),
      ],
  });
};
function pt(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  throw Error(
      "[Immer] minified error nr: " +
          e +
          (n.length
              ? " " +
                n
                    .map(function (o) {
                        return "'" + o + "'";
                    })
                    .join(",")
              : "") +
          ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function xn(e) {
  return !!e && !!e[le];
}
function Bt(e) {
  var t;
  return (
      !!e &&
      ((function (n) {
          if (!n || typeof n != "object") return !1;
          var r = Object.getPrototypeOf(n);
          if (r === null) return !0;
          var o = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
          return o === Object || (typeof o == "function" && Function.toString.call(o) === rx);
      })(e) ||
          Array.isArray(e) ||
          !!e[Yf] ||
          !!(!((t = e.constructor) === null || t === void 0) && t[Yf]) ||
          Ks(e) ||
          Ys(e))
  );
}
function Bn(e, t, n) {
  n === void 0 && (n = !1),
      Ir(e) === 0
          ? (n ? Object.keys : wr)(e).forEach(function (r) {
                (n && typeof r == "symbol") || t(r, e[r], e);
            })
          : e.forEach(function (r, o) {
                return t(o, r, e);
            });
}
function Ir(e) {
  var t = e[le];
  return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : Ks(e) ? 2 : Ys(e) ? 3 : 0;
}
function xr(e, t) {
  return Ir(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function X1(e, t) {
  return Ir(e) === 2 ? e.get(t) : e[t];
}
function Xh(e, t, n) {
  var r = Ir(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Gh(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Ks(e) {
  return tx && e instanceof Map;
}
function Ys(e) {
  return nx && e instanceof Set;
}
function _n(e) {
  return e.o || e.t;
}
function Xs(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Jh(e);
  delete t[le];
  for (var n = wr(t), r = 0; r < n.length; r++) {
      var o = n[r],
          l = t[o];
      l.writable === !1 && ((l.writable = !0), (l.configurable = !0)), (l.get || l.set) && (t[o] = { configurable: !0, writable: !0, enumerable: l.enumerable, value: e[o] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Gs(e, t) {
  return (
      t === void 0 && (t = !1),
      Zs(e) ||
          xn(e) ||
          !Bt(e) ||
          (Ir(e) > 1 && (e.set = e.add = e.clear = e.delete = G1),
          Object.freeze(e),
          t &&
              Bn(
                  e,
                  function (n, r) {
                      return Gs(r, !0);
                  },
                  !0
              )),
      e
  );
}
function G1() {
  pt(2);
}
function Zs(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function jt(e) {
  var t = bu[e];
  return t || pt(18, e), t;
}
function Z1(e, t) {
  bu[e] || (bu[e] = t);
}
function zu() {
  return $o;
}
function _a(e, t) {
  t && (jt("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function ei(e) {
  Iu(e), e.p.forEach(J1), (e.p = null);
}
function Iu(e) {
  e === $o && ($o = e.l);
}
function Bf(e) {
  return ($o = { p: [], l: $o, h: e, m: !0, _: 0 });
}
function J1(e) {
  var t = e[le];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function La(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
      r = e !== void 0 && e !== n;
  return t.h.O || jt("ES5").S(t, e, r), r ? (n[le].P && (ei(t), pt(4)), Bt(e) && ((e = ti(t, e)), t.l || ni(t, e)), t.u && jt("Patches").M(n[le].t, e, t.u, t.s)) : (e = ti(t, n, [])), ei(t), t.u && t.v(t.u, t.s), e !== Zh ? e : void 0;
}
function ti(e, t, n) {
  if (Zs(t)) return t;
  var r = t[le];
  if (!r)
      return (
          Bn(
              t,
              function (a, u) {
                  return Wf(e, r, t, a, u, n);
              },
              !0
          ),
          t
      );
  if (r.A !== e) return t;
  if (!r.P) return ni(e, r.t, !0), r.t;
  if (!r.I) {
      (r.I = !0), r.A._--;
      var o = r.i === 4 || r.i === 5 ? (r.o = Xs(r.k)) : r.o,
          l = o,
          i = !1;
      r.i === 3 && ((l = new Set(o)), o.clear(), (i = !0)),
          Bn(l, function (a, u) {
              return Wf(e, r, o, a, u, n, i);
          }),
          ni(e, o, !1),
          n && e.u && jt("Patches").N(r, n, e.u, e.s);
  }
  return r.o;
}
function Wf(e, t, n, r, o, l, i) {
  if (xn(o)) {
      var a = ti(e, o, l && t && t.i !== 3 && !xr(t.R, r) ? l.concat(r) : void 0);
      if ((Xh(n, r, a), !xn(a))) return;
      e.m = !1;
  } else i && n.add(o);
  if (Bt(o) && !Zs(o)) {
      if (!e.h.D && e._ < 1) return;
      ti(e, o), (t && t.A.l) || ni(e, o);
  }
}
function ni(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && Gs(t, n);
}
function Ta(e, t) {
  var n = e[le];
  return (n ? _n(n) : e)[t];
}
function Vf(e, t) {
  if (t in e)
      for (var n = Object.getPrototypeOf(e); n; ) {
          var r = Object.getOwnPropertyDescriptor(n, t);
          if (r) return r;
          n = Object.getPrototypeOf(n);
      }
}
function nn(e) {
  e.P || ((e.P = !0), e.l && nn(e.l));
}
function Oa(e) {
  e.o || (e.o = Xs(e.t));
}
function Au(e, t, n) {
  var r = Ks(t)
      ? jt("MapSet").F(t, n)
      : Ys(t)
      ? jt("MapSet").T(t, n)
      : e.O
      ? (function (o, l) {
            var i = Array.isArray(o),
                a = { i: i ? 1 : 0, A: l ? l.A : zu(), P: !1, I: !1, R: {}, l, t: o, k: null, o: null, j: null, C: !1 },
                u = a,
                s = Mo;
            i && ((u = [a]), (s = ro));
            var c = Proxy.revocable(u, s),
                p = c.revoke,
                d = c.proxy;
            return (a.k = d), (a.j = p), d;
        })(t, n)
      : jt("ES5").J(t, n);
  return (n ? n.A : zu()).p.push(r), r;
}
function q1(e) {
  return (
      xn(e) || pt(22, e),
      (function t(n) {
          if (!Bt(n)) return n;
          var r,
              o = n[le],
              l = Ir(n);
          if (o) {
              if (!o.P && (o.i < 4 || !jt("ES5").K(o))) return o.t;
              (o.I = !0), (r = Hf(n, l)), (o.I = !1);
          } else r = Hf(n, l);
          return (
              Bn(r, function (i, a) {
                  (o && X1(o.t, i) === a) || Xh(r, i, t(a));
              }),
              l === 3 ? new Set(r) : r
          );
      })(e)
  );
}
function Hf(e, t) {
  switch (t) {
      case 2:
          return new Map(e);
      case 3:
          return Array.from(e);
  }
  return Xs(e);
}
function ex() {
  function e(l, i) {
      var a = o[l];
      return (
          a
              ? (a.enumerable = i)
              : (o[l] = a = {
                    configurable: !0,
                    enumerable: i,
                    get: function () {
                        var u = this[le];
                        return Mo.get(u, l);
                    },
                    set: function (u) {
                        var s = this[le];
                        Mo.set(s, l, u);
                    },
                }),
          a
      );
  }
  function t(l) {
      for (var i = l.length - 1; i >= 0; i--) {
          var a = l[i][le];
          if (!a.P)
              switch (a.i) {
                  case 5:
                      r(a) && nn(a);
                      break;
                  case 4:
                      n(a) && nn(a);
              }
      }
  }
  function n(l) {
      for (var i = l.t, a = l.k, u = wr(a), s = u.length - 1; s >= 0; s--) {
          var c = u[s];
          if (c !== le) {
              var p = i[c];
              if (p === void 0 && !xr(i, c)) return !0;
              var d = a[c],
                  v = d && d[le];
              if (v ? v.t !== p : !Gh(d, p)) return !0;
          }
      }
      var y = !!i[le];
      return u.length !== wr(i).length + (y ? 0 : 1);
  }
  function r(l) {
      var i = l.k;
      if (i.length !== l.t.length) return !0;
      var a = Object.getOwnPropertyDescriptor(i, i.length - 1);
      if (a && !a.get) return !0;
      for (var u = 0; u < i.length; u++) if (!i.hasOwnProperty(u)) return !0;
      return !1;
  }
  var o = {};
  Z1("ES5", {
      J: function (l, i) {
          var a = Array.isArray(l),
              u = (function (c, p) {
                  if (c) {
                      for (var d = Array(p.length), v = 0; v < p.length; v++) Object.defineProperty(d, "" + v, e(v, !0));
                      return d;
                  }
                  var y = Jh(p);
                  delete y[le];
                  for (var x = wr(y), E = 0; E < x.length; E++) {
                      var h = x[E];
                      y[h] = e(h, c || !!y[h].enumerable);
                  }
                  return Object.create(Object.getPrototypeOf(p), y);
              })(a, l),
              s = { i: a ? 5 : 4, A: i ? i.A : zu(), P: !1, I: !1, R: {}, l: i, t: l, k: u, o: null, g: !1, C: !1 };
          return Object.defineProperty(u, le, { value: s, writable: !0 }), u;
      },
      S: function (l, i, a) {
          a
              ? xn(i) && i[le].A === l && t(l.p)
              : (l.u &&
                    (function u(s) {
                        if (s && typeof s == "object") {
                            var c = s[le];
                            if (c) {
                                var p = c.t,
                                    d = c.k,
                                    v = c.R,
                                    y = c.i;
                                if (y === 4)
                                    Bn(d, function (g) {
                                        g !== le && (p[g] !== void 0 || xr(p, g) ? v[g] || u(d[g]) : ((v[g] = !0), nn(c)));
                                    }),
                                        Bn(p, function (g) {
                                            d[g] !== void 0 || xr(d, g) || ((v[g] = !1), nn(c));
                                        });
                                else if (y === 5) {
                                    if ((r(c) && (nn(c), (v.length = !0)), d.length < p.length)) for (var x = d.length; x < p.length; x++) v[x] = !1;
                                    else for (var E = p.length; E < d.length; E++) v[E] = !0;
                                    for (var h = Math.min(d.length, p.length), f = 0; f < h; f++) d.hasOwnProperty(f) || (v[f] = !0), v[f] === void 0 && u(d[f]);
                                }
                            }
                        }
                    })(l.p[0]),
                t(l.p));
      },
      K: function (l) {
          return l.i === 4 ? n(l) : r(l);
      },
  });
}
var Qf,
  $o,
  Js = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  tx = typeof Map < "u",
  nx = typeof Set < "u",
  Kf = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  Zh = Js ? Symbol.for("immer-nothing") : (((Qf = {})["immer-nothing"] = !0), Qf),
  Yf = Js ? Symbol.for("immer-draftable") : "__$immer_draftable",
  le = Js ? Symbol.for("immer-state") : "__$immer_state",
  rx = "" + Object.prototype.constructor,
  wr =
      typeof Reflect < "u" && Reflect.ownKeys
          ? Reflect.ownKeys
          : Object.getOwnPropertySymbols !== void 0
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : Object.getOwnPropertyNames,
  Jh =
      Object.getOwnPropertyDescriptors ||
      function (e) {
          var t = {};
          return (
              wr(e).forEach(function (n) {
                  t[n] = Object.getOwnPropertyDescriptor(e, n);
              }),
              t
          );
      },
  bu = {},
  Mo = {
      get: function (e, t) {
          if (t === le) return e;
          var n = _n(e);
          if (!xr(n, t))
              return (function (o, l, i) {
                  var a,
                      u = Vf(l, i);
                  return u ? ("value" in u ? u.value : (a = u.get) === null || a === void 0 ? void 0 : a.call(o.k)) : void 0;
              })(e, n, t);
          var r = n[t];
          return e.I || !Bt(r) ? r : r === Ta(e.t, t) ? (Oa(e), (e.o[t] = Au(e.A.h, r, e))) : r;
      },
      has: function (e, t) {
          return t in _n(e);
      },
      ownKeys: function (e) {
          return Reflect.ownKeys(_n(e));
      },
      set: function (e, t, n) {
          var r = Vf(_n(e), t);
          if (r != null && r.set) return r.set.call(e.k, n), !0;
          if (!e.P) {
              var o = Ta(_n(e), t),
                  l = o == null ? void 0 : o[le];
              if (l && l.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
              if (Gh(n, o) && (n !== void 0 || xr(e.t, t))) return !0;
              Oa(e), nn(e);
          }
          return (e.o[t] === n && (n !== void 0 || t in e.o)) || (Number.isNaN(n) && Number.isNaN(e.o[t])) || ((e.o[t] = n), (e.R[t] = !0)), !0;
      },
      deleteProperty: function (e, t) {
          return Ta(e.t, t) !== void 0 || t in e.t ? ((e.R[t] = !1), Oa(e), nn(e)) : delete e.R[t], e.o && delete e.o[t], !0;
      },
      getOwnPropertyDescriptor: function (e, t) {
          var n = _n(e),
              r = Reflect.getOwnPropertyDescriptor(n, t);
          return r && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: r.enumerable, value: n[t] };
      },
      defineProperty: function () {
          pt(11);
      },
      getPrototypeOf: function (e) {
          return Object.getPrototypeOf(e.t);
      },
      setPrototypeOf: function () {
          pt(12);
      },
  },
  ro = {};
Bn(Mo, function (e, t) {
  ro[e] = function () {
      return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (ro.deleteProperty = function (e, t) {
      return ro.set.call(this, e, t, void 0);
  }),
  (ro.set = function (e, t, n) {
      return Mo.set.call(this, e[0], t, n, e[0]);
  });
var ox = (function () {
      function e(n) {
          var r = this;
          (this.O = Kf),
              (this.D = !0),
              (this.produce = function (o, l, i) {
                  if (typeof o == "function" && typeof l != "function") {
                      var a = l;
                      l = o;
                      var u = r;
                      return function (x) {
                          var E = this;
                          x === void 0 && (x = a);
                          for (var h = arguments.length, f = Array(h > 1 ? h - 1 : 0), g = 1; g < h; g++) f[g - 1] = arguments[g];
                          return u.produce(x, function (m) {
                              var P;
                              return (P = l).call.apply(P, [E, m].concat(f));
                          });
                      };
                  }
                  var s;
                  if ((typeof l != "function" && pt(6), i !== void 0 && typeof i != "function" && pt(7), Bt(o))) {
                      var c = Bf(r),
                          p = Au(r, o, void 0),
                          d = !0;
                      try {
                          (s = l(p)), (d = !1);
                      } finally {
                          d ? ei(c) : Iu(c);
                      }
                      return typeof Promise < "u" && s instanceof Promise
                          ? s.then(
                                function (x) {
                                    return _a(c, i), La(x, c);
                                },
                                function (x) {
                                    throw (ei(c), x);
                                }
                            )
                          : (_a(c, i), La(s, c));
                  }
                  if (!o || typeof o != "object") {
                      if (((s = l(o)) === void 0 && (s = o), s === Zh && (s = void 0), r.D && Gs(s, !0), i)) {
                          var v = [],
                              y = [];
                          jt("Patches").M(o, s, v, y), i(v, y);
                      }
                      return s;
                  }
                  pt(21, o);
              }),
              (this.produceWithPatches = function (o, l) {
                  if (typeof o == "function")
                      return function (s) {
                          for (var c = arguments.length, p = Array(c > 1 ? c - 1 : 0), d = 1; d < c; d++) p[d - 1] = arguments[d];
                          return r.produceWithPatches(s, function (v) {
                              return o.apply(void 0, [v].concat(p));
                          });
                      };
                  var i,
                      a,
                      u = r.produce(o, l, function (s, c) {
                          (i = s), (a = c);
                      });
                  return typeof Promise < "u" && u instanceof Promise
                      ? u.then(function (s) {
                            return [s, i, a];
                        })
                      : [u, i, a];
              }),
              typeof (n == null ? void 0 : n.useProxies) == "boolean" && this.setUseProxies(n.useProxies),
              typeof (n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze);
      }
      var t = e.prototype;
      return (
          (t.createDraft = function (n) {
              Bt(n) || pt(8), xn(n) && (n = q1(n));
              var r = Bf(this),
                  o = Au(this, n, void 0);
              return (o[le].C = !0), Iu(r), o;
          }),
          (t.finishDraft = function (n, r) {
              var o = n && n[le],
                  l = o.A;
              return _a(l, r), La(void 0, l);
          }),
          (t.setAutoFreeze = function (n) {
              this.D = n;
          }),
          (t.setUseProxies = function (n) {
              n && !Kf && pt(20), (this.O = n);
          }),
          (t.applyPatches = function (n, r) {
              var o;
              for (o = r.length - 1; o >= 0; o--) {
                  var l = r[o];
                  if (l.path.length === 0 && l.op === "replace") {
                      n = l.value;
                      break;
                  }
              }
              o > -1 && (r = r.slice(o + 1));
              var i = jt("Patches").$;
              return xn(n)
                  ? i(n, r)
                  : this.produce(n, function (a) {
                        return i(a, r);
                    });
          }),
          e
      );
  })(),
  Xe = new ox(),
  qh = Xe.produce;
Xe.produceWithPatches.bind(Xe);
Xe.setAutoFreeze.bind(Xe);
Xe.setUseProxies.bind(Xe);
Xe.applyPatches.bind(Xe);
Xe.createDraft.bind(Xe);
Xe.finishDraft.bind(Xe);
function Do(e) {
  "@babel/helpers - typeof";
  return (
      (Do =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (t) {
                    return typeof t;
                }
              : function (t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
      Do(e)
  );
}
function lx(e, t) {
  if (Do(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
      var r = n.call(e, t || "default");
      if (Do(r) !== "object") return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ix(e) {
  var t = lx(e, "string");
  return Do(t) === "symbol" ? t : String(t);
}
function ax(e, t, n) {
  return (t = ix(t)), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
function Xf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
          (r = r.filter(function (o) {
              return Object.getOwnPropertyDescriptor(e, o).enumerable;
          })),
          n.push.apply(n, r);
  }
  return n;
}
function Gf(e) {
  for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
          ? Xf(Object(n), !0).forEach(function (r) {
                ax(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Xf(Object(n)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
            });
  }
  return e;
}
function Te(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Zf = (function () {
      return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  $a = function () {
      return Math.random().toString(36).substring(7).split("").join(".");
  },
  ri = {
      INIT: "@@redux/INIT" + $a(),
      REPLACE: "@@redux/REPLACE" + $a(),
      PROBE_UNKNOWN_ACTION: function () {
          return "@@redux/PROBE_UNKNOWN_ACTION" + $a();
      },
  };
function ux(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function em(e, t, n) {
  var r;
  if ((typeof t == "function" && typeof n == "function") || (typeof n == "function" && typeof arguments[3] == "function")) throw new Error(Te(0));
  if ((typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)), typeof n < "u")) {
      if (typeof n != "function") throw new Error(Te(1));
      return n(em)(e, t);
  }
  if (typeof e != "function") throw new Error(Te(2));
  var o = e,
      l = t,
      i = [],
      a = i,
      u = !1;
  function s() {
      a === i && (a = i.slice());
  }
  function c() {
      if (u) throw new Error(Te(3));
      return l;
  }
  function p(x) {
      if (typeof x != "function") throw new Error(Te(4));
      if (u) throw new Error(Te(5));
      var E = !0;
      return (
          s(),
          a.push(x),
          function () {
              if (E) {
                  if (u) throw new Error(Te(6));
                  (E = !1), s();
                  var f = a.indexOf(x);
                  a.splice(f, 1), (i = null);
              }
          }
      );
  }
  function d(x) {
      if (!ux(x)) throw new Error(Te(7));
      if (typeof x.type > "u") throw new Error(Te(8));
      if (u) throw new Error(Te(9));
      try {
          (u = !0), (l = o(l, x));
      } finally {
          u = !1;
      }
      for (var E = (i = a), h = 0; h < E.length; h++) {
          var f = E[h];
          f();
      }
      return x;
  }
  function v(x) {
      if (typeof x != "function") throw new Error(Te(10));
      (o = x), d({ type: ri.REPLACE });
  }
  function y() {
      var x,
          E = p;
      return (
          (x = {
              subscribe: function (f) {
                  if (typeof f != "object" || f === null) throw new Error(Te(11));
                  function g() {
                      f.next && f.next(c());
                  }
                  g();
                  var m = E(g);
                  return { unsubscribe: m };
              },
          }),
          (x[Zf] = function () {
              return this;
          }),
          x
      );
  }
  return d({ type: ri.INIT }), (r = { dispatch: d, subscribe: p, getState: c, replaceReducer: v }), (r[Zf] = y), r;
}
function sx(e) {
  Object.keys(e).forEach(function (t) {
      var n = e[t],
          r = n(void 0, { type: ri.INIT });
      if (typeof r > "u") throw new Error(Te(12));
      if (typeof n(void 0, { type: ri.PROBE_UNKNOWN_ACTION() }) > "u") throw new Error(Te(13));
  });
}
function cx(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
      var o = t[r];
      typeof e[o] == "function" && (n[o] = e[o]);
  }
  var l = Object.keys(n),
      i;
  try {
      sx(n);
  } catch (a) {
      i = a;
  }
  return function (u, s) {
      if ((u === void 0 && (u = {}), i)) throw i;
      for (var c = !1, p = {}, d = 0; d < l.length; d++) {
          var v = l[d],
              y = n[v],
              x = u[v],
              E = y(x, s);
          if (typeof E > "u") throw (s && s.type, new Error(Te(14)));
          (p[v] = E), (c = c || E !== x);
      }
      return (c = c || l.length !== Object.keys(u).length), c ? p : u;
  };
}
function oi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t.length === 0
      ? function (r) {
            return r;
        }
      : t.length === 1
      ? t[0]
      : t.reduce(function (r, o) {
            return function () {
                return r(o.apply(void 0, arguments));
            };
        });
}
function fx() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return function (r) {
      return function () {
          var o = r.apply(void 0, arguments),
              l = function () {
                  throw new Error(Te(15));
              },
              i = {
                  getState: o.getState,
                  dispatch: function () {
                      return l.apply(void 0, arguments);
                  },
              },
              a = t.map(function (u) {
                  return u(i);
              });
          return (l = oi.apply(void 0, a)(o.dispatch)), Gf(Gf({}, o), {}, { dispatch: l });
      };
  };
}
function tm(e) {
  var t = function (r) {
      var o = r.dispatch,
          l = r.getState;
      return function (i) {
          return function (a) {
              return typeof a == "function" ? a(o, l, e) : i(a);
          };
      };
  };
  return t;
}
var nm = tm();
nm.withExtraArgument = tm;
const Jf = nm;
var rm =
      (globalThis && globalThis.__extends) ||
      (function () {
          var e = function (t, n) {
              return (
                  (e =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                          function (r, o) {
                              r.__proto__ = o;
                          }) ||
                      function (r, o) {
                          for (var l in o) Object.prototype.hasOwnProperty.call(o, l) && (r[l] = o[l]);
                      }),
                  e(t, n)
              );
          };
          return function (t, n) {
              if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
              e(t, n);
              function r() {
                  this.constructor = t;
              }
              t.prototype = n === null ? Object.create(n) : ((r.prototype = n.prototype), new r());
          };
      })(),
  dx =
      (globalThis && globalThis.__generator) ||
      function (e, t) {
          var n = {
                  label: 0,
                  sent: function () {
                      if (l[0] & 1) throw l[1];
                      return l[1];
                  },
                  trys: [],
                  ops: [],
              },
              r,
              o,
              l,
              i;
          return (
              (i = { next: a(0), throw: a(1), return: a(2) }),
              typeof Symbol == "function" &&
                  (i[Symbol.iterator] = function () {
                      return this;
                  }),
              i
          );
          function a(s) {
              return function (c) {
                  return u([s, c]);
              };
          }
          function u(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; n; )
                  try {
                      if (((r = 1), o && (l = s[0] & 2 ? o.return : s[0] ? o.throw || ((l = o.return) && l.call(o), 0) : o.next) && !(l = l.call(o, s[1])).done)) return l;
                      switch (((o = 0), l && (s = [s[0] & 2, l.value]), s[0])) {
                          case 0:
                          case 1:
                              l = s;
                              break;
                          case 4:
                              return n.label++, { value: s[1], done: !1 };
                          case 5:
                              n.label++, (o = s[1]), (s = [0]);
                              continue;
                          case 7:
                              (s = n.ops.pop()), n.trys.pop();
                              continue;
                          default:
                              if (((l = n.trys), !(l = l.length > 0 && l[l.length - 1]) && (s[0] === 6 || s[0] === 2))) {
                                  n = 0;
                                  continue;
                              }
                              if (s[0] === 3 && (!l || (s[1] > l[0] && s[1] < l[3]))) {
                                  n.label = s[1];
                                  break;
                              }
                              if (s[0] === 6 && n.label < l[1]) {
                                  (n.label = l[1]), (l = s);
                                  break;
                              }
                              if (l && n.label < l[2]) {
                                  (n.label = l[2]), n.ops.push(s);
                                  break;
                              }
                              l[2] && n.ops.pop(), n.trys.pop();
                              continue;
                      }
                      s = t.call(e, n);
                  } catch (c) {
                      (s = [6, c]), (o = 0);
                  } finally {
                      r = l = 0;
                  }
              if (s[0] & 5) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
          }
      },
  Tr =
      (globalThis && globalThis.__spreadArray) ||
      function (e, t) {
          for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
          return e;
      },
  px = Object.defineProperty,
  hx = Object.defineProperties,
  mx = Object.getOwnPropertyDescriptors,
  qf = Object.getOwnPropertySymbols,
  vx = Object.prototype.hasOwnProperty,
  gx = Object.prototype.propertyIsEnumerable,
  ed = function (e, t, n) {
      return t in e ? px(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
  },
  hn = function (e, t) {
      for (var n in t || (t = {})) vx.call(t, n) && ed(e, n, t[n]);
      if (qf)
          for (var r = 0, o = qf(t); r < o.length; r++) {
              var n = o[r];
              gx.call(t, n) && ed(e, n, t[n]);
          }
      return e;
  },
  Ma = function (e, t) {
      return hx(e, mx(t));
  },
  yx = function (e, t, n) {
      return new Promise(function (r, o) {
          var l = function (u) {
                  try {
                      a(n.next(u));
                  } catch (s) {
                      o(s);
                  }
              },
              i = function (u) {
                  try {
                      a(n.throw(u));
                  } catch (s) {
                      o(s);
                  }
              },
              a = function (u) {
                  return u.done ? r(u.value) : Promise.resolve(u.value).then(l, i);
              };
          a((n = n.apply(e, t)).next());
      });
  },
  xx =
      typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          : function () {
                if (arguments.length !== 0) return typeof arguments[0] == "object" ? oi : oi.apply(null, arguments);
            };
function wx(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; ) n = Object.getPrototypeOf(n);
  return t === n;
}
var Sx = (function (e) {
      rm(t, e);
      function t() {
          for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          var o = e.apply(this, n) || this;
          return Object.setPrototypeOf(o, t.prototype), o;
      }
      return (
          Object.defineProperty(t, Symbol.species, {
              get: function () {
                  return t;
              },
              enumerable: !1,
              configurable: !0,
          }),
          (t.prototype.concat = function () {
              for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
              return e.prototype.concat.apply(this, n);
          }),
          (t.prototype.prepend = function () {
              for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
              return n.length === 1 && Array.isArray(n[0]) ? new (t.bind.apply(t, Tr([void 0], n[0].concat(this))))() : new (t.bind.apply(t, Tr([void 0], n.concat(this))))();
          }),
          t
      );
  })(Array),
  kx = (function (e) {
      rm(t, e);
      function t() {
          for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          var o = e.apply(this, n) || this;
          return Object.setPrototypeOf(o, t.prototype), o;
      }
      return (
          Object.defineProperty(t, Symbol.species, {
              get: function () {
                  return t;
              },
              enumerable: !1,
              configurable: !0,
          }),
          (t.prototype.concat = function () {
              for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
              return e.prototype.concat.apply(this, n);
          }),
          (t.prototype.prepend = function () {
              for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
              return n.length === 1 && Array.isArray(n[0]) ? new (t.bind.apply(t, Tr([void 0], n[0].concat(this))))() : new (t.bind.apply(t, Tr([void 0], n.concat(this))))();
          }),
          t
      );
  })(Array);
function Fu(e) {
  return Bt(e) ? qh(e, function () {}) : e;
}
function Ex(e) {
  return typeof e == "boolean";
}
function Cx() {
  return function (t) {
      return Px(t);
  };
}
function Px(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
      n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new Sx();
  return n && (Ex(n) ? r.push(Jf) : r.push(Jf.withExtraArgument(n.extraArgument))), r;
}
var jx = !0;
function Nx(e) {
  var t = Cx(),
      n = e || {},
      r = n.reducer,
      o = r === void 0 ? void 0 : r,
      l = n.middleware,
      i = l === void 0 ? t() : l,
      a = n.devTools,
      u = a === void 0 ? !0 : a,
      s = n.preloadedState,
      c = s === void 0 ? void 0 : s,
      p = n.enhancers,
      d = p === void 0 ? void 0 : p,
      v;
  if (typeof o == "function") v = o;
  else if (wx(o)) v = cx(o);
  else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  var y = i;
  typeof y == "function" && (y = y(t));
  var x = fx.apply(void 0, y),
      E = oi;
  u && (E = xx(hn({ trace: !jx }, typeof u == "object" && u)));
  var h = new kx(x),
      f = h;
  Array.isArray(d) ? (f = Tr([x], d)) : typeof d == "function" && (f = d(h));
  var g = E.apply(void 0, f);
  return em(v, c, g);
}
function mn(e, t) {
  function n() {
      for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
      if (t) {
          var l = t.apply(void 0, r);
          if (!l) throw new Error("prepareAction did not return an object");
          return hn(hn({ type: e, payload: l.payload }, "meta" in l && { meta: l.meta }), "error" in l && { error: l.error });
      }
      return { type: e, payload: r[0] };
  }
  return (
      (n.toString = function () {
          return "" + e;
      }),
      (n.type = e),
      (n.match = function (r) {
          return r.type === e;
      }),
      n
  );
}
function om(e) {
  var t = {},
      n = [],
      r,
      o = {
          addCase: function (l, i) {
              var a = typeof l == "string" ? l : l.type;
              if (a in t) throw new Error("addCase cannot be called with two reducers for the same action type");
              return (t[a] = i), o;
          },
          addMatcher: function (l, i) {
              return n.push({ matcher: l, reducer: i }), o;
          },
          addDefaultCase: function (l) {
              return (r = l), o;
          },
      };
  return e(o), [t, n, r];
}
function Rx(e) {
  return typeof e == "function";
}
function _x(e, t, n, r) {
  n === void 0 && (n = []);
  var o = typeof t == "function" ? om(t) : [t, n, r],
      l = o[0],
      i = o[1],
      a = o[2],
      u;
  if (Rx(e))
      u = function () {
          return Fu(e());
      };
  else {
      var s = Fu(e);
      u = function () {
          return s;
      };
  }
  function c(p, d) {
      p === void 0 && (p = u());
      var v = Tr(
          [l[d.type]],
          i
              .filter(function (y) {
                  var x = y.matcher;
                  return x(d);
              })
              .map(function (y) {
                  var x = y.reducer;
                  return x;
              })
      );
      return (
          v.filter(function (y) {
              return !!y;
          }).length === 0 && (v = [a]),
          v.reduce(function (y, x) {
              if (x)
                  if (xn(y)) {
                      var E = y,
                          h = x(E, d);
                      return h === void 0 ? y : h;
                  } else {
                      if (Bt(y))
                          return qh(y, function (f) {
                              return x(f, d);
                          });
                      var h = x(y, d);
                      if (h === void 0) {
                          if (y === null) return y;
                          throw Error("A case reducer on a non-draftable value must not return undefined");
                      }
                      return h;
                  }
              return y;
          }, p)
      );
  }
  return (c.getInitialState = u), c;
}
function Lx(e, t) {
  return e + "/" + t;
}
function Tx(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n = typeof e.initialState == "function" ? e.initialState : Fu(e.initialState),
      r = e.reducers || {},
      o = Object.keys(r),
      l = {},
      i = {},
      a = {};
  o.forEach(function (c) {
      var p = r[c],
          d = Lx(t, c),
          v,
          y;
      "reducer" in p ? ((v = p.reducer), (y = p.prepare)) : (v = p), (l[c] = v), (i[d] = v), (a[c] = y ? mn(d, y) : mn(d));
  });
  function u() {
      var c = typeof e.extraReducers == "function" ? om(e.extraReducers) : [e.extraReducers],
          p = c[0],
          d = p === void 0 ? {} : p,
          v = c[1],
          y = v === void 0 ? [] : v,
          x = c[2],
          E = x === void 0 ? void 0 : x,
          h = hn(hn({}, d), i);
      return _x(n, function (f) {
          for (var g in h) f.addCase(g, h[g]);
          for (var m = 0, P = y; m < P.length; m++) {
              var _ = P[m];
              f.addMatcher(_.matcher, _.reducer);
          }
          E && f.addDefaultCase(E);
      });
  }
  var s;
  return {
      name: t,
      reducer: function (c, p) {
          return s || (s = u()), s(c, p);
      },
      actions: a,
      caseReducers: l,
      getInitialState: function () {
          return s || (s = u()), s.getInitialState();
      },
  };
}
var Ox = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  $x = function (e) {
      e === void 0 && (e = 21);
      for (var t = "", n = e; n--; ) t += Ox[(Math.random() * 64) | 0];
      return t;
  },
  Mx = ["name", "message", "stack", "code"],
  Da = (function () {
      function e(t, n) {
          (this.payload = t), (this.meta = n);
      }
      return e;
  })(),
  td = (function () {
      function e(t, n) {
          (this.payload = t), (this.meta = n);
      }
      return e;
  })(),
  Dx = function (e) {
      if (typeof e == "object" && e !== null) {
          for (var t = {}, n = 0, r = Mx; n < r.length; n++) {
              var o = r[n];
              typeof e[o] == "string" && (t[o] = e[o]);
          }
          return t;
      }
      return { message: String(e) };
  },
  zx = (function () {
      function e(t, n, r) {
          var o = mn(t + "/fulfilled", function (s, c, p, d) {
                  return { payload: s, meta: Ma(hn({}, d || {}), { arg: p, requestId: c, requestStatus: "fulfilled" }) };
              }),
              l = mn(t + "/pending", function (s, c, p) {
                  return { payload: void 0, meta: Ma(hn({}, p || {}), { arg: c, requestId: s, requestStatus: "pending" }) };
              }),
              i = mn(t + "/rejected", function (s, c, p, d, v) {
                  return {
                      payload: d,
                      error: ((r && r.serializeError) || Dx)(s || "Rejected"),
                      meta: Ma(hn({}, v || {}), {
                          arg: p,
                          requestId: c,
                          rejectedWithValue: !!d,
                          requestStatus: "rejected",
                          aborted: (s == null ? void 0 : s.name) === "AbortError",
                          condition: (s == null ? void 0 : s.name) === "ConditionError",
                      }),
                  };
              }),
              a =
                  typeof AbortController < "u"
                      ? AbortController
                      : (function () {
                            function s() {
                                this.signal = {
                                    aborted: !1,
                                    addEventListener: function () {},
                                    dispatchEvent: function () {
                                        return !1;
                                    },
                                    onabort: function () {},
                                    removeEventListener: function () {},
                                    reason: void 0,
                                    throwIfAborted: function () {},
                                };
                            }
                            return (s.prototype.abort = function () {}), s;
                        })();
          function u(s) {
              return function (c, p, d) {
                  var v = r != null && r.idGenerator ? r.idGenerator(s) : $x(),
                      y = new a(),
                      x;
                  function E(f) {
                      (x = f), y.abort();
                  }
                  var h = (function () {
                      return yx(this, null, function () {
                          var f, g, m, P, _, R, T;
                          return dx(this, function (B) {
                              switch (B.label) {
                                  case 0:
                                      return B.trys.push([0, 4, , 5]), (P = (f = r == null ? void 0 : r.condition) == null ? void 0 : f.call(r, s, { getState: p, extra: d })), Ax(P) ? [4, P] : [3, 2];
                                  case 1:
                                      (P = B.sent()), (B.label = 2);
                                  case 2:
                                      if (P === !1 || y.signal.aborted) throw { name: "ConditionError", message: "Aborted due to condition callback returning false." };
                                      return (
                                          (_ = new Promise(function (M, re) {
                                              return y.signal.addEventListener("abort", function () {
                                                  return re({ name: "AbortError", message: x || "Aborted" });
                                              });
                                          })),
                                          c(l(v, s, (g = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : g.call(r, { requestId: v, arg: s }, { getState: p, extra: d }))),
                                          [
                                              4,
                                              Promise.race([
                                                  _,
                                                  Promise.resolve(
                                                      n(s, {
                                                          dispatch: c,
                                                          getState: p,
                                                          extra: d,
                                                          requestId: v,
                                                          signal: y.signal,
                                                          abort: E,
                                                          rejectWithValue: function (M, re) {
                                                              return new Da(M, re);
                                                          },
                                                          fulfillWithValue: function (M, re) {
                                                              return new td(M, re);
                                                          },
                                                      })
                                                  ).then(function (M) {
                                                      if (M instanceof Da) throw M;
                                                      return M instanceof td ? o(M.payload, v, s, M.meta) : o(M, v, s);
                                                  }),
                                              ]),
                                          ]
                                      );
                                  case 3:
                                      return (m = B.sent()), [3, 5];
                                  case 4:
                                      return (R = B.sent()), (m = R instanceof Da ? i(null, v, s, R.payload, R.meta) : i(R, v, s)), [3, 5];
                                  case 5:
                                      return (T = r && !r.dispatchConditionRejection && i.match(m) && m.meta.condition), T || c(m), [2, m];
                              }
                          });
                      });
                  })();
                  return Object.assign(h, {
                      abort: E,
                      requestId: v,
                      arg: s,
                      unwrap: function () {
                          return h.then(Ix);
                      },
                  });
              };
          }
          return Object.assign(u, { pending: l, rejected: i, fulfilled: o, typePrefix: t });
      }
      return (
          (e.withTypes = function () {
              return e;
          }),
          e
      );
  })();
function Ix(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Ax(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var qs = "listenerMiddleware";
mn(qs + "/add");
mn(qs + "/removeAll");
mn(qs + "/remove");
var nd;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
ex();
const Uu = {
      karakalpak: "kaa",
      afrikaans: "af",
      albanian: "sq",
      amharic: "am",
      arabic: "ar",
      armenian: "hy",
      assamese: "as",
      aymara: "ay",
      azerbaijani: "az",
      bambara: "bm",
      basque: "eu",
      belarusian: "be",
      bengali: "bn",
      bhojpuri: "bho",
      bosnian: "bs",
      bulgarian: "bg",
      catalan: "ca",
      cebuano: "ceb",
      chichewa: "ny",
      "chinese (simplified)": "zh-CN",
      "chinese (traditional)": "zh-TW",
      corsican: "co",
      croatian: "hr",
      czech: "cs",
      danish: "da",
      dhivehi: "dv",
      dogri: "doi",
      dutch: "nl",
      english: "en",
      esperanto: "eo",
      estonian: "et",
      ewe: "ee",
      filipino: "tl",
      finnish: "fi",
      french: "fr",
      frisian: "fy",
      galician: "gl",
      georgian: "ka",
      german: "de",
      greek: "el",
      guarani: "gn",
      gujarati: "gu",
      "haitian creole": "ht",
      hausa: "ha",
      hawaiian: "haw",
      hebrew: "iw",
      hindi: "hi",
      hmong: "hmn",
      hungarian: "hu",
      icelandic: "is",
      igbo: "ig",
      ilocano: "ilo",
      indonesian: "id",
      irish: "ga",
      italian: "it",
      japanese: "ja",
      javanese: "jw",
      kannada: "kn",
      kazakh: "kk",
      khmer: "km",
      kinyarwanda: "rw",
      konkani: "gom",
      korean: "ko",
      krio: "kri",
      "kurdish (kurmanji)": "ku",
      "kurdish (sorani)": "ckb",
      kyrgyz: "ky",
      lao: "lo",
      latin: "la",
      latvian: "lv",
      lingala: "ln",
      lithuanian: "lt",
      luganda: "lg",
      luxembourgish: "lb",
      macedonian: "mk",
      maithili: "mai",
      malagasy: "mg",
      malay: "ms",
      malayalam: "ml",
      maltese: "mt",
      maori: "mi",
      marathi: "mr",
      "meiteilon (manipuri)": "mni-Mtei",
      mizo: "lus",
      mongolian: "mn",
      myanmar: "my",
      nepali: "ne",
      norwegian: "no",
      "odia (oriya)": "or",
      oromo: "om",
      pashto: "ps",
      persian: "fa",
      polish: "pl",
      portuguese: "pt",
      punjabi: "pa",
      quechua: "qu",
      romanian: "ro",
      russian: "ru",
      samoan: "sm",
      sanskrit: "sa",
      "scots gaelic": "gd",
      sepedi: "nso",
      serbian: "sr",
      sesotho: "st",
      shona: "sn",
      sindhi: "sd",
      sinhala: "si",
      slovak: "sk",
      slovenian: "sl",
      somali: "so",
      spanish: "es",
      sundanese: "su",
      swahili: "sw",
      swedish: "sv",
      tajik: "tg",
      tamil: "ta",
      tatar: "tt",
      telugu: "te",
      thai: "th",
      tigrinya: "ti",
      tsonga: "ts",
      turkish: "tr",
      turkmen: "tk",
      twi: "ak",
      ukrainian: "uk",
      urdu: "ur",
      uyghur: "ug",
      uzbek: "uz",
      vietnamese: "vi",
      welsh: "cy",
      xhosa: "xh",
      yiddish: "yi",
      yoruba: "yo",
      zulu: "zu",
  },
  bx = zx("fetchAuthentication", async (e) => {
      const t = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(e) };
      return (await fetch("https://api.diyarbek.uz/send_message", t)).json();
  }),
  Fx = { darkMode: !1, inputLanguage: Uu.english, outputLanguage: Uu.karakalpak, inputText: "", outputText: "" },
  Ux = () => {
      const e = JSON.parse(localStorage.getItem("initial"));
      return e || Fx;
  },
  lm = Tx({
      name: "slice",
      initialState: Ux(),
      reducers: {
          setDarkMode: (e) => {
              e.darkMode = !e.darkMode;
          },
          setData: (e, t) => {
              e[t.payload.name] = t.payload.value;
          },
          onHandleClear: (e) => {
              e.inputText = "";
          },
          onHandleCopy: (e) => {
              e.outputText.length > 0 && (navigator.clipboard.writeText(e.outputText), Fe.success("Translation copied"));
          },
      },
      extraReducers: (e) => {
          e.addCase(bx.fulfilled, () => {
              Fe.success("Xabar jiberildi");
          });
      },
  }),
  Bx = lm.reducer,
  { setDarkMode: rd, setData: St, onHandleClear: Wx, onHandleCopy: Vx } = lm.actions,
  Hx = Nx({ reducer: Bx }),
  im = r1,
  Qx = () => {
      const e = zr((o) => o.darkMode),
          t = im(),
          [n, r] = C.useState(!1);
      return w.jsxs("header", {
          className: `${e ? "lightTx" : "darkTx"} body-font ${e ? "darkBg" : "lightBg"} transition-bg duration-1000 transition-color-1000 fixed z-10 w-full`,
          children: [
              w.jsxs("div", {
                  className: "container mx-auto flex flex-wrap p-5 flex-col  md:flex-row items-center xs:flex-row w-full",
                  children: [
                      w.jsxs("a", {
                          href: "/",
                          className: "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",
                          children: [
                              w.jsx("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                  className: "w-10 h-10 text-white p-2 bg-indigo-500 rounded-full",
                                  viewBox: "0 0 24 24",
                                  children: w.jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" }),
                              }),
                              w.jsx("span", { className: `ml-3 text-xl ${e ? "lightTx" : "darkTx"} transition-bg duration-1000 transition-color-1000 font-mono select-none`, children: "InnovatorsGroup" }),
                          ],
                      }),
                      w.jsxs("nav", {
                          className: "md:ml-auto flex flex-wrap items-center text-base justify-center xs:hidden sm:flex md:flex",
                          children: [
                              w.jsx(Gn, { to: "/", className: "nav-item mr-5 cursor-pointer font-mono select-none relative", children: "AWDARMASHI" }),
                              w.jsx(Gn, { to: "/aboutus", className: "nav-item mr-5 cursor-pointer font-mono select-none relative", children: "BIZ HAQQIMIZDA" }),
                              w.jsx(Gn, { to: "/contactus", className: "nav-item mr-5 cursor-pointer font-mono select-none relative", children: "BAYLANIS" }),
                              w.jsxs("button", {
                                  className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex font-mono",
                                  onClick: () => t(rd()),
                                  children: [e ? "LIGHT" : "DARK", w.jsx("span", { children: w.jsx("img", { src: `assets/${e ? "sun" : "moon"}.png`, alt: "ModeImg", className: "w-6 mx-3 transition-all" }) })],
                              }),
                          ],
                      }),
                      w.jsx("button", { className: "toggleBtn xs:mb-4 xs:ml-7 xs:text-2xl sm:hidden", onClick: () => r((o) => !o), children: w.jsx("i", { className: `fa-solid ${n ? "fa-x" : "fa-bars"}` }) }),
                  ],
              }),
              w.jsx("div", {
                  className: `dropdownMenu  sm:hidden ${n ? "" : "hidden"} ${e ? "dropdownMenuBgDark" : ""}  -mt-24 py-16  w-full overflow-hidden`,
                  children: w.jsxs("ul", {
                      className: "dropdown flex flex-col items-center gap-2",
                      children: [
                          w.jsx("li", { children: w.jsx(Gn, { to: "/", className: "nav-item mr-5 cursor-pointer font-mono select-none relative", children: "AWDARMASHI" }) }),
                          w.jsx("li", { children: w.jsx(Gn, { to: "/aboutus", className: "nav-item mr-5 cursor-pointer font-mono select-none relative", children: "BIZ HAQQIMIZDA" }) }),
                          w.jsx("li", { children: w.jsx(Gn, { to: "/contactus", className: "nav-item mr-5 cursor-pointer font-mono select-none relative", children: "BAYLANIS" }) }),
                          w.jsx("li", {
                              children: w.jsxs("button", {
                                  className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex font-mono xs:mt-5 xs:mr-4 sm:mr-0",
                                  onClick: () => t(rd()),
                                  children: [e ? "LIGHT" : "DARK", w.jsx("span", { children: w.jsx("img", { src: `assets/${e ? "sun" : "moon"}.png`, alt: "ModeImg", className: "w-6 mx-3 transition-all" }) })],
                              }),
                          }),
                      ],
                  }),
              }),
          ],
      });
  },
  Kx = () => w.jsxs(w.Fragment, { children: [w.jsx(Qx, {}), w.jsx("main", { children: w.jsx(Jg, {}) })] }),
  Yx = (e) => {
      const { title: t, subtitle: n } = e;
      return w.jsxs("div", {
          className: "flex flex-col text-center w-full mb-12",
          children: [
              w.jsx("h1", { className: "lg:text-6xl md:text-5xl sm:text-4xl text-5xl font-medium title-font mb-4 font-mono select-none", children: t }),
              w.jsx("p", { className: "lg:w-2/3 mx-auto leading-relaxed text-base font-mono select-none", children: n }),
          ],
      });
  },
  Xx = (e) => {
      const t = Uu,
          n = im(),
          r = zr((v) => v),
          { darkMode: o } = e,
          l = (v) => {
              n(St({ value: v.target.value, name: "inputText" }));
          },
          i = (v) => {
              n(St({ value: v.target.value, name: "inputLanguage" }));
          },
          a = (v) => {
              n(St({ value: v.target.value, name: "outputLanguage" }));
          },
          s = ((v, y) => {
              const x = C.useRef();
              return function (...E) {
                  clearTimeout(x.current),
                      (x.current = setTimeout(() => {
                          v(...E);
                      }, y));
              };
          })(async () => {
              try {
                  const x = await fetch("https://awdarma.diyarbek.ru/awdarma", {
                      method: "POST",
                      headers: { "Content-Type": "application/json", Authorization: "diyarbek" },
                      body: JSON.stringify({ text: r.inputText, lang_from: r.inputLanguage, lang_to: r.outputLanguage }),
                  });
                  if (x.status !== 200) throw new Error("Something went wrong!");
                  const E = await x.json();
                  E.awdarma === void 0 ? n(St({ value: "", name: "outputText" })) : n(St({ value: E.awdarma, name: "outputText" }));
              } catch (v) {
                  console.error(v), n(St({ value: "Something went wrong!", name: "outputText" }));
              }
          }, 180);
      C.useEffect(() => {
          s();
      }, [r.inputText, r.inputLanguage, r.outputLanguage]);
      const c = () => {
              n(St({ value: r.outputLanguage, name: "inputLanguage" })), n(St({ value: r.inputLanguage, name: "outputLanguage" })), n(St({ value: r.outputText, name: "inputText" })), n(St({ value: r.inputText, name: "outputText" }));
          },
          p = () => {
              n(Wx());
          },
          d = () => {
              n(Vx());
          };
      return w.jsxs("div", {
          className: "lg:w-full md:w-full mx-auto",
          children: [
              w.jsxs("div", {
                  className: "flex flex-wrap -m-2",
                  children: [
                      w.jsxs("div", {
                          className: "p-2 w-full lg:flex md:flex gap-x-10",
                          children: [
                              w.jsxs("div", {
                                  className: "relative lg:w-1/2 md:w-2/3 sm:w-full",
                                  children: [
                                      w.jsx("select", {
                                          id: "inputLanguage",
                                          className: `${o ? "darkBg" : "lightBg"} border border-gray-300 ${
                                              o ? "lightTx" : "darkTx"
                                          } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer transition-bg duration-1000 transition-color-1000 font-mono`,
                                          value: r.inputLanguage,
                                          onChange: i,
                                          children: Object.keys(t)
                                              .sort()
                                              .map((v) => w.jsx("option", { value: t[v], className: "font-mono", children: (v.charAt(0).toUpperCase() + v.slice(1)).toUpperCase() }, t[v])),
                                      }),
                                      w.jsx("textarea", {
                                          id: "inputText",
                                          name: "inputText",
                                          placeholder: "Enter text",
                                          className: `w-full ${o ? "darkBg" : "lightBg"} bg-opacity-50 rounded border border-gray-600 focus:border-indigo-500 focus:bg-${
                                              o ? "darkBg" : "white"
                                          } focus:ring-2 focus:ring-indigo-200 h-64 text-base outline-none ${o ? "lightTx" : "darkTx"} py-1 px-3 resize-none leading-6 transition-colors duration-1000 ease-in-out font-mono
            `,
                                          required: !0,
                                          value: r.inputText,
                                          onChange: (v) => l(v),
                                      }),
                                      w.jsx("div", {
                                          className: `clear-button animation text-center w-full h-[28px] cursor-pointer mt-0 ${o ? "darkBg" : "lightBg"} bg-opacity-50 rounded border border-gray-600 focus:border-indigo-500 focus:bg-${
                                              o ? "darkBg" : "white"
                                          } ${o ? "lightTx" : "darkTx"} focus:ring-2 focus:ring-indigo-200 text-base outline-none transition-colors duration-1000 ease-in-out `,
                                          onClick: p,
                                          children: w.jsx("i", { className: "fa-solid fa-xmark cursor-pointer" }),
                                      }),
                                  ],
                              }),
                              w.jsx("i", { className: "xs:w-full xs:text-center  sm:w-full sm:text-center md:w-1 sm:w-1 sm:-ml-2 xs:mb-4 fa-solid fa-arrow-right-arrow-left mt-4 cursor-pointer", onClick: () => c() }),
                              w.jsxs("div", {
                                  className: "relative lg:w-1/2 md:w-2/3 sm:w-full",
                                  children: [
                                      w.jsx("select", {
                                          id: "inputLanguage",
                                          className: `${o ? "darkBg" : "lightBg"} border border-gray-300 ${
                                              o ? "lightTx" : "darkTx"
                                          } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer transition-bg duration-1000 transition-color-1000 font-mono`,
                                          onChange: a,
                                          value: r.outputLanguage,
                                          children:
                                              t &&
                                              Object.keys(t)
                                                  .sort()
                                                  .map((v) => w.jsx("option", { value: t[v], className: "font-mono", children: (v.charAt(0).toUpperCase() + v.slice(1)).toUpperCase() }, t[v])),
                                      }),
                                      w.jsx("textarea", {
                                          readOnly: !0,
                                          placeholder: "Translation",
                                          id: "outputText",
                                          name: "outputText",
                                          className: `w-full ${o ? "darkBg" : "lightBg"} bg-opacity-50 rounded border border-gray-600 focus:border-indigo-500 focus:bg-${
                                              o ? "darkBg" : "white"
                                          } focus:ring-2 focus:ring-indigo-200 h-64 text-base outline-none ${o ? "lightTx" : "darkTx"} py-1 px-3 resize-none leading-6 transition-colors duration-1000 ease-in-out font-mono`,
                                          value: r.outputText,
                                      }),
                                      w.jsx("div", {
                                          className: `copy-button animation text-center w-full h-[28px] cursor-pointer mt-0 ${o ? "darkBg" : "lightBg"} bg-opacity-50 rounded border border-gray-600 focus:border-indigo-500 focus:bg-${
                                              o ? "darkBg" : "white"
                                          } ${o ? "lightTx" : "darkTx"} focus:ring-2 focus:ring-indigo-200 text-base outline-none transition-colors duration-1000 ease-in-out `,
                                          onClick: d,
                                          children: w.jsx("i", { className: "fa-solid fa-paste cursor-pointer" }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      w.jsx("div", { className: "p-10 w-full" }),
                      w.jsx("div", {
                          className: "p-2 w-full pt-12 mt-12 border-t border-gray-200 text-center",
                          children: w.jsxs("span", {
                              className: "inline-flex",
                              children: [
                                  w.jsx("a", {
                                      className: "text-gray-500",
                                      children: w.jsx("svg", {
                                          fill: "currentColor",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          className: "w-5 h-5",
                                          viewBox: "0 0 24 24",
                                          children: w.jsx("path", { d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" }),
                                      }),
                                  }),
                                  w.jsx("a", {
                                      className: "ml-4 text-gray-500",
                                      children: w.jsx("svg", {
                                          fill: "currentColor",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          className: "w-5 h-5",
                                          viewBox: "0 0 24 24",
                                          children: w.jsx("path", {
                                              d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                                          }),
                                      }),
                                  }),
                                  w.jsx("a", {
                                      className: "ml-4 text-gray-500",
                                      children: w.jsxs("svg", {
                                          fill: "none",
                                          stroke: "currentColor",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          className: "w-5 h-5",
                                          viewBox: "0 0 24 24",
                                          children: [w.jsx("rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5" }), w.jsx("path", { d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" })],
                                      }),
                                  }),
                                  w.jsx("a", {
                                      className: "ml-4 text-gray-500",
                                      children: w.jsx("svg", {
                                          fill: "currentColor",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: "2",
                                          className: "w-5 h-5",
                                          viewBox: "0 0 24 24",
                                          children: w.jsx("path", {
                                              d: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
              w.jsx(Yh, { position: "top-center", reverseOrder: !1 }),
          ],
      });
  },
  Gx = () => {
      const e = zr((t) => t.darkMode);
      return w.jsx("section", {
          className: `${e ? "lightTx" : "darkTx"} body-font relative ${e ? "darkBg" : "lightBg"} transition-bg duration-1000 transition-color-1000 pt-[100px]`,
          children: w.jsxs("div", {
              className: "container px-5 sm:py-24 mx-auto xs:py-4 md:py-40 lg:py-10",
              children: [w.jsx(Yx, { title: "Awdarmashı", subtitle: "Basqa tillerden Qaraqalpaq tiline awdarmalawshı birinshi web sayt" }), w.jsx(Xx, { darkMode: e })],
          }),
      });
  },
  Zx = () => {
      const e = zr((n) => n);
      C.useEffect(() => {
          localStorage.setItem("initial", JSON.stringify(e));
      }, [e]);
      const t = ly([
          {
              path: "/",
              element: w.jsx(Kx, {}),
              children: [
                  { index: !0, element: w.jsx(Gx, {}) },
                  { path: "/aboutus", element: w.jsx(o1, {}) },
                  { path: "/contactus", element: w.jsx(Y1, {}) },
              ],
          },
      ]);
      return w.jsx(w.Fragment, { children: w.jsx(Gg, { router: t }) });
  };
za.createRoot(document.getElementById("root")).render(w.jsx(pd.StrictMode, { children: w.jsx(e1, { store: Hx, children: w.jsx(Zx, {}) }) }));
