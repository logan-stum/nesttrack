import Ke, { useState as $, useRef as qe } from "react";
var Ne = { exports: {} }, ue = {};
var We;
function vr() {
  if (We) return ue;
  We = 1;
  var d = Ke, A = /* @__PURE__ */ Symbol.for("react.element"), y = /* @__PURE__ */ Symbol.for("react.fragment"), O = Object.prototype.hasOwnProperty, Y = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(m, v, I) {
    var j, C = {}, z = null, L = null;
    I !== void 0 && (z = "" + I), v.key !== void 0 && (z = "" + v.key), v.ref !== void 0 && (L = v.ref);
    for (j in v) O.call(v, j) && !F.hasOwnProperty(j) && (C[j] = v[j]);
    if (m && m.defaultProps) for (j in v = m.defaultProps, v) C[j] === void 0 && (C[j] = v[j]);
    return { $$typeof: A, type: m, key: z, ref: L, props: C, _owner: Y.current };
  }
  return ue.Fragment = y, ue.jsx = g, ue.jsxs = g, ue;
}
var fe = {};
var He;
function yr() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && (function() {
    var d = Ke, A = /* @__PURE__ */ Symbol.for("react.element"), y = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), Y = /* @__PURE__ */ Symbol.for("react.strict_mode"), F = /* @__PURE__ */ Symbol.for("react.profiler"), g = /* @__PURE__ */ Symbol.for("react.provider"), m = /* @__PURE__ */ Symbol.for("react.context"), v = /* @__PURE__ */ Symbol.for("react.forward_ref"), I = /* @__PURE__ */ Symbol.for("react.suspense"), j = /* @__PURE__ */ Symbol.for("react.suspense_list"), C = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), L = /* @__PURE__ */ Symbol.for("react.offscreen"), _ = Symbol.iterator, ke = "@@iterator";
    function te(r) {
      if (r === null || typeof r != "object")
        return null;
      var o = _ && r[_] || r[ke];
      return typeof o == "function" ? o : null;
    }
    var W = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(r) {
      {
        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
          s[c - 1] = arguments[c];
        ge("error", r, s);
      }
    }
    function ge(r, o, s) {
      {
        var c = W.ReactDebugCurrentFrame, f = c.getStackAddendum();
        f !== "" && (o += "%s", s = s.concat([f]));
        var x = s.map(function(u) {
          return String(u);
        });
        x.unshift("Warning: " + o), Function.prototype.apply.call(console[r], console, x);
      }
    }
    var Z = !1, oe = !1, se = !1, ne = !1, ie = !1, H;
    H = /* @__PURE__ */ Symbol.for("react.module.reference");
    function n(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === O || r === F || ie || r === Y || r === I || r === j || ne || r === L || Z || oe || se || typeof r == "object" && r !== null && (r.$$typeof === z || r.$$typeof === C || r.$$typeof === g || r.$$typeof === m || r.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === H || r.getModuleId !== void 0));
    }
    function D(r, o, s) {
      var c = r.displayName;
      if (c)
        return c;
      var f = o.displayName || o.name || "";
      return f !== "" ? s + "(" + f + ")" : s;
    }
    function le(r) {
      return r.displayName || "Context";
    }
    function U(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case O:
          return "Fragment";
        case y:
          return "Portal";
        case F:
          return "Profiler";
        case Y:
          return "StrictMode";
        case I:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case m:
            var o = r;
            return le(o) + ".Consumer";
          case g:
            var s = r;
            return le(s._context) + ".Provider";
          case v:
            return D(r, r.render, "ForwardRef");
          case C:
            var c = r.displayName || null;
            return c !== null ? c : U(r.type) || "Memo";
          case z: {
            var f = r, x = f._payload, u = f._init;
            try {
              return U(u(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, V = 0, ce, xe, me, he, be, de, ve;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function q() {
      {
        if (V === 0) {
          ce = console.log, xe = console.info, me = console.warn, he = console.error, be = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: J,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        V++;
      }
    }
    function Se() {
      {
        if (V--, V === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, r, {
              value: ce
            }),
            info: B({}, r, {
              value: xe
            }),
            warn: B({}, r, {
              value: me
            }),
            error: B({}, r, {
              value: he
            }),
            group: B({}, r, {
              value: be
            }),
            groupCollapsed: B({}, r, {
              value: de
            }),
            groupEnd: B({}, r, {
              value: ve
            })
          });
        }
        V < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var a = W.ReactCurrentDispatcher, t;
    function i(r, o, s) {
      {
        if (t === void 0)
          try {
            throw Error();
          } catch (f) {
            var c = f.stack.trim().match(/\n( *(at )?)/);
            t = c && c[1] || "";
          }
        return `
` + t + r;
      }
    }
    var l = !1, h;
    {
      var b = typeof WeakMap == "function" ? WeakMap : Map;
      h = new b();
    }
    function w(r, o) {
      if (!r || l)
        return "";
      {
        var s = h.get(r);
        if (s !== void 0)
          return s;
      }
      var c;
      l = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = a.current, a.current = null, q();
      try {
        if (o) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (E) {
              c = E;
            }
            Reflect.construct(r, [], u);
          } else {
            try {
              u.call();
            } catch (E) {
              c = E;
            }
            r.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            c = E;
          }
          r();
        }
      } catch (E) {
        if (E && c && typeof E.stack == "string") {
          for (var p = E.stack.split(`
`), R = c.stack.split(`
`), N = p.length - 1, k = R.length - 1; N >= 1 && k >= 0 && p[N] !== R[k]; )
            k--;
          for (; N >= 1 && k >= 0; N--, k--)
            if (p[N] !== R[k]) {
              if (N !== 1 || k !== 1)
                do
                  if (N--, k--, k < 0 || p[N] !== R[k]) {
                    var P = `
` + p[N].replace(" at new ", " at ");
                    return r.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", r.displayName)), typeof r == "function" && h.set(r, P), P;
                  }
                while (N >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        l = !1, a.current = x, Se(), Error.prepareStackTrace = f;
      }
      var re = r ? r.displayName || r.name : "", X = re ? i(re) : "";
      return typeof r == "function" && h.set(r, X), X;
    }
    function T(r, o, s) {
      return w(r, !1);
    }
    function pe(r) {
      var o = r.prototype;
      return !!(o && o.isReactComponent);
    }
    function Q(r, o, s) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return w(r, pe(r));
      if (typeof r == "string")
        return i(r);
      switch (r) {
        case I:
          return i("Suspense");
        case j:
          return i("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case v:
            return T(r.render);
          case C:
            return Q(r.type, o, s);
          case z: {
            var c = r, f = c._payload, x = c._init;
            try {
              return Q(x(f), o, s);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, ye = {}, je = W.ReactDebugCurrentFrame;
    function M(r) {
      if (r) {
        var o = r._owner, s = Q(r.type, r._source, o ? o.type : null);
        je.setExtraStackFrame(s);
      } else
        je.setExtraStackFrame(null);
    }
    function Ce(r, o, s, c, f) {
      {
        var x = Function.call.bind(K);
        for (var u in r)
          if (x(r, u)) {
            var p = void 0;
            try {
              if (typeof r[u] != "function") {
                var R = Error((c || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              p = r[u](o, u, c, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              p = N;
            }
            p && !(p instanceof Error) && (M(f), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", s, u, typeof p), M(null)), p instanceof Error && !(p.message in ye) && (ye[p.message] = !0, M(f), S("Failed %s type: %s", s, p.message), M(null));
          }
      }
    }
    var G = Array.isArray;
    function Re(r) {
      return G(r);
    }
    function Qe(r) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, s = o && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return s;
      }
    }
    function er(r) {
      try {
        return Pe(r), !1;
      } catch {
        return !0;
      }
    }
    function Pe(r) {
      return "" + r;
    }
    function Ae(r) {
      if (er(r))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(r)), Pe(r);
    }
    var Fe = W.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ze, Le;
    function ar(r) {
      if (K.call(r, "ref")) {
        var o = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function tr(r) {
      if (K.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function or(r, o) {
      typeof r.ref == "string" && Fe.current;
    }
    function sr(r, o) {
      {
        var s = function() {
          ze || (ze = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function nr(r, o) {
      {
        var s = function() {
          Le || (Le = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var ir = function(r, o, s, c, f, x, u) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: A,
        // Built-in properties that belong on the element
        type: r,
        key: o,
        ref: s,
        props: u,
        // Record the component responsible for creating this element.
        _owner: x
      };
      return p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(p, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(p, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function lr(r, o, s, c, f) {
      {
        var x, u = {}, p = null, R = null;
        s !== void 0 && (Ae(s), p = "" + s), tr(o) && (Ae(o.key), p = "" + o.key), ar(o) && (R = o.ref, or(o, f));
        for (x in o)
          K.call(o, x) && !rr.hasOwnProperty(x) && (u[x] = o[x]);
        if (r && r.defaultProps) {
          var N = r.defaultProps;
          for (x in N)
            u[x] === void 0 && (u[x] = N[x]);
        }
        if (p || R) {
          var k = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          p && sr(u, k), R && nr(u, k);
        }
        return ir(r, p, R, f, c, Fe.current, u);
      }
    }
    var Ee = W.ReactCurrentOwner, De = W.ReactDebugCurrentFrame;
    function ee(r) {
      if (r) {
        var o = r._owner, s = Q(r.type, r._source, o ? o.type : null);
        De.setExtraStackFrame(s);
      } else
        De.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function Oe(r) {
      return typeof r == "object" && r !== null && r.$$typeof === A;
    }
    function $e() {
      {
        if (Ee.current) {
          var r = U(Ee.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function cr(r) {
      return "";
    }
    var Ie = {};
    function dr(r) {
      {
        var o = $e();
        if (!o) {
          var s = typeof r == "string" ? r : r.displayName || r.name;
          s && (o = `

Check the top-level render call using <` + s + ">.");
        }
        return o;
      }
    }
    function Ue(r, o) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var s = dr(o);
        if (Ie[s])
          return;
        Ie[s] = !0;
        var c = "";
        r && r._owner && r._owner !== Ee.current && (c = " It was passed a child from " + U(r._owner.type) + "."), ee(r), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, c), ee(null);
      }
    }
    function Be(r, o) {
      {
        if (typeof r != "object")
          return;
        if (Re(r))
          for (var s = 0; s < r.length; s++) {
            var c = r[s];
            Oe(c) && Ue(c, o);
          }
        else if (Oe(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var f = te(r);
          if (typeof f == "function" && f !== r.entries)
            for (var x = f.call(r), u; !(u = x.next()).done; )
              Oe(u.value) && Ue(u.value, o);
        }
      }
    }
    function pr(r) {
      {
        var o = r.type;
        if (o == null || typeof o == "string")
          return;
        var s;
        if (typeof o == "function")
          s = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === C))
          s = o.propTypes;
        else
          return;
        if (s) {
          var c = U(o);
          Ce(s, r.props, "prop", c, r);
        } else if (o.PropTypes !== void 0 && !_e) {
          _e = !0;
          var f = U(o);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(r) {
      {
        for (var o = Object.keys(r.props), s = 0; s < o.length; s++) {
          var c = o[s];
          if (c !== "children" && c !== "key") {
            ee(r), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), ee(null);
            break;
          }
        }
        r.ref !== null && (ee(r), S("Invalid attribute `ref` supplied to `React.Fragment`."), ee(null));
      }
    }
    var Me = {};
    function Ye(r, o, s, c, f, x) {
      {
        var u = n(r);
        if (!u) {
          var p = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = cr();
          R ? p += R : p += $e();
          var N;
          r === null ? N = "null" : Re(r) ? N = "array" : r !== void 0 && r.$$typeof === A ? (N = "<" + (U(r.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : N = typeof r, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, p);
        }
        var k = lr(r, o, s, f, x);
        if (k == null)
          return k;
        if (u) {
          var P = o.children;
          if (P !== void 0)
            if (c)
              if (Re(P)) {
                for (var re = 0; re < P.length; re++)
                  Be(P[re], r);
                Object.freeze && Object.freeze(P);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be(P, r);
        }
        if (K.call(o, "key")) {
          var X = U(r), E = Object.keys(o).filter(function(br) {
            return br !== "key";
          }), Te = E.length > 0 ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Me[X + Te]) {
            var hr = E.length > 0 ? "{" + E.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Te, X, hr, X), Me[X + Te] = !0;
          }
        }
        return r === O ? ur(k) : pr(k), k;
      }
    }
    function fr(r, o, s) {
      return Ye(r, o, s, !0);
    }
    function gr(r, o, s) {
      return Ye(r, o, s, !1);
    }
    var xr = gr, mr = fr;
    fe.Fragment = O, fe.jsx = xr, fe.jsxs = mr;
  })()), fe;
}
var Ve;
function jr() {
  return Ve || (Ve = 1, process.env.NODE_ENV === "production" ? Ne.exports = vr() : Ne.exports = yr()), Ne.exports;
}
var e = jr();
const Nr = "@import url('https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Fira+Code:wght@400;500&family=Lato:wght@300;400;700&display=swap');", wr = `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Lato', sans-serif;
  background: #0d0f12;
  color: #e8e3dc;
  min-height: 100vh;
  overflow-x: hidden;
}

:root {
  --bg0: #0d0f12;
  --bg1: #13161b;
  --bg2: #1a1e26;
  --bg3: #222733;
  --bg4: #2a3040;
  --border: rgba(255,255,255,0.07);
  --border-hi: rgba(255,255,255,0.14);
  --text0: #f0ebe3;
  --text1: #b8b0a5;
  --text2: #6e6860;
  --teal: #3ecfb2;
  --teal-dim: rgba(62,207,178,0.12);
  --teal-glow: 0 0 20px rgba(62,207,178,0.25);
  --amber: #f0a94a;
  --amber-dim: rgba(240,169,74,0.12);
  --red: #f0584a;
  --red-dim: rgba(240,88,74,0.12);
  --green: #5bcf8a;
  --green-dim: rgba(91,207,138,0.12);
  --blue: #5b9cf0;
  --blue-dim: rgba(91,156,240,0.12);
  --r: 12px;
  --r-lg: 18px;
  --shadow: 0 4px 24px rgba(0,0,0,0.4);
  --shadow-lg: 0 12px 48px rgba(0,0,0,0.55);
}

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: var(--bg1); }
::-webkit-scrollbar-thumb { background: var(--bg4); border-radius: 3px; }

/* ── HEADER ── */
.header {
  background: rgba(13,15,18,0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 32px; height: 60px;
}
.logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800; font-size: 20px;
  letter-spacing: -0.3px;
  color: var(--text0);
  display: flex; align-items: center; gap: 10px;
}
.logo-dot { color: var(--teal); }
.logo-tag {
  font-family: 'Fira Code', monospace;
  font-size: 10px; font-weight: 400;
  color: var(--text2); letter-spacing: 1px;
  border: 1px solid var(--border-hi);
  padding: 2px 7px; border-radius: 4px; margin-left: 4px;
}
.nav { display: flex; gap: 4px; align-items: center; }
.nav-btn {
  font-family: 'Lato', sans-serif;
  font-size: 13px; font-weight: 700;
  background: transparent; border: none;
  color: var(--text2); padding: 7px 14px;
  border-radius: 8px; cursor: pointer;
  transition: all 0.15s; letter-spacing: 0.3px;
  display: flex; align-items: center; gap: 6px;
}
.nav-btn:hover { color: var(--text1); background: var(--bg2); }
.nav-btn.active { color: var(--teal); background: var(--teal-dim); }
.nav-badge {
  background: var(--bg4); color: var(--text1);
  font-family: 'Fira Code', monospace;
  font-size: 10px; padding: 1px 6px; border-radius: 10px; min-width: 18px;
  text-align: center;
}
.nav-btn.active .nav-badge { background: rgba(62,207,178,0.2); color: var(--teal); }

/* ── MAIN ── */
.main { max-width: 1280px; margin: 0 auto; padding: 36px 28px 100px; }

/* ── PAGE HEADER ── */
.page-head { margin-bottom: 32px; display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
.page-title {
  font-family: 'Syne', sans-serif;
  font-size: 30px; font-weight: 800;
  color: var(--text0); line-height: 1.1;
  letter-spacing: -0.5px;
}
.page-sub { font-size: 13px; color: var(--text2); margin-top: 5px; font-weight: 300; }
.page-actions { display: flex; gap: 8px; }

/* ── BUTTONS ── */
.btn {
  font-family: 'Lato', sans-serif; font-weight: 700;
  font-size: 13px; border: none; border-radius: 9px;
  cursor: pointer; transition: all 0.16s;
  display: inline-flex; align-items: center; gap: 6px;
  letter-spacing: 0.2px; white-space: nowrap;
}
.btn-primary {
  background: var(--teal); color: #0d0f12;
  padding: 10px 20px;
}
.btn-primary:hover { background: #5de0c8; transform: translateY(-1px); box-shadow: var(--teal-glow); }
.btn-secondary {
  background: var(--bg3); color: var(--text1);
  padding: 10px 18px; border: 1px solid var(--border-hi);
}
.btn-secondary:hover { background: var(--bg4); color: var(--text0); }
.btn-ghost {
  background: transparent; color: var(--text2);
  padding: 8px 14px; border: 1px solid var(--border);
}
.btn-ghost:hover { background: var(--bg2); color: var(--text1); border-color: var(--border-hi); }
.btn-danger { background: var(--red-dim); color: var(--red); border: 1px solid rgba(240,88,74,0.2); padding: 8px 14px; }
.btn-danger:hover { background: var(--red); color: white; }
.btn-sm { padding: 6px 12px; font-size: 12px; border-radius: 7px; }
.btn-icon { padding: 7px; width: 32px; height: 32px; justify-content: center; border-radius: 8px; font-size: 14px; }

/* ── ADD PANEL ── */
.add-panel {
  background: var(--bg1); border: 1px solid var(--border);
  border-radius: var(--r-lg); margin-bottom: 28px;
  overflow: hidden; transition: all 0.2s;
}
.add-panel-header {
  padding: 16px 24px; display: flex; align-items: center; justify-content: space-between;
  cursor: pointer; user-select: none;
}
.add-panel-header:hover { background: var(--bg2); }
.add-panel-title {
  font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
  color: var(--text0); display: flex; align-items: center; gap: 8px;
}
.panel-caret { color: var(--text2); transition: transform 0.2s; font-size: 11px; }
.panel-caret.open { transform: rotate(180deg); }
.add-panel-body { padding: 0 24px 24px; border-top: 1px solid var(--border); }

/* URL FETCH ROW */
.fetch-row {
  display: flex; gap: 10px; padding: 16px 0 14px;
  align-items: center;
}
.fetch-input {
  flex: 1; background: var(--bg2); border: 1px solid var(--border-hi);
  border-radius: 9px; padding: 10px 14px;
  font-family: 'Fira Code', monospace; font-size: 12px; color: var(--text1);
  outline: none; transition: border-color 0.15s;
}
.fetch-input:focus { border-color: var(--teal); background: var(--bg3); }
.fetch-input::placeholder { color: var(--text2); }
.fetch-divider {
  display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
}
.fetch-divider-line { flex: 1; height: 1px; background: var(--border); }
.fetch-divider-text { font-size: 11px; color: var(--text2); font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }

/* FORM GRID */
.form-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.fg-full { grid-column: 1 / -1; }
.fg-half { grid-column: span 2; }
.fg-3 { grid-column: span 3; }
.form-group { display: flex; flex-direction: column; gap: 5px; }
.form-label { font-size: 10px; font-weight: 700; color: var(--text2); text-transform: uppercase; letter-spacing: 0.8px; }
.form-input {
  background: var(--bg2); border: 1px solid var(--border-hi);
  border-radius: 9px; padding: 9px 13px;
  font-family: 'Lato', sans-serif; font-size: 13px; color: var(--text0);
  outline: none; transition: border-color 0.15s;
  width: 100%;
}
.form-input:focus { border-color: var(--teal); background: var(--bg3); }
.form-input::placeholder { color: var(--text2); }
select.form-input { cursor: pointer; }
textarea.form-input { resize: vertical; min-height: 72px; font-family: 'Lato', sans-serif; }
.form-actions { display: flex; gap: 10px; margin-top: 14px; align-items: center; }
.fetch-status {
  font-size: 12px; font-family: 'Fira Code', monospace;
  padding: 6px 10px; border-radius: 6px;
}
.fetch-status.loading { color: var(--amber); background: var(--amber-dim); }
.fetch-status.success { color: var(--green); background: var(--green-dim); }
.fetch-status.error { color: var(--red); background: var(--red-dim); }

/* ── FILTER BAR ── */
.filter-bar { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; align-items: center; }
.filter-chip {
  font-size: 12px; font-weight: 700; font-family: 'Lato', sans-serif;
  padding: 6px 14px; border-radius: 20px; border: 1px solid var(--border);
  background: var(--bg1); color: var(--text2); cursor: pointer; transition: all 0.15s;
  letter-spacing: 0.2px;
}
.filter-chip:hover { border-color: var(--border-hi); color: var(--text1); }
.filter-chip.active { background: var(--teal-dim); border-color: rgba(62,207,178,0.3); color: var(--teal); }
.filter-spacer { flex: 1; }
.listings-count { font-family: 'Fira Code', monospace; font-size: 11px; color: var(--text2); }

/* ── GRID ── */
.listings-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 18px; }

/* ── CARD ── */
.card {
  background: var(--bg1); border: 1px solid var(--border);
  border-radius: var(--r-lg); overflow: hidden;
  transition: all 0.22s; cursor: pointer; position: relative;
}
.card:hover { border-color: var(--border-hi); transform: translateY(-3px); box-shadow: var(--shadow-lg); }
.card.favorited { border-color: rgba(240,169,74,0.35); }
.card.in-compare { border-color: rgba(62,207,178,0.35); }
.card.favorited.in-compare { border-color: rgba(62,207,178,0.5); }

.card-img {
  height: 168px; position: relative; overflow: hidden;
  background: linear-gradient(135deg, #1a1e26 0%, #13161b 100%);
  display: flex; align-items: center; justify-content: center;
}
.card-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
.card-img-placeholder {
  font-size: 42px; opacity: 0.18;
  font-family: 'Syne', sans-serif;
}
.card-img-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(13,15,18,0.85) 100%);
}
.card-img-actions { position: absolute; top: 10px; right: 10px; display: flex; gap: 6px; }
.card-img-left { position: absolute; top: 10px; left: 10px; display: flex; gap: 5px; flex-direction: column; }
.status-badge {
  font-size: 10px; font-weight: 700; font-family: 'Fira Code', monospace;
  padding: 3px 8px; border-radius: 5px; text-transform: uppercase; letter-spacing: 0.5px;
  backdrop-filter: blur(8px);
}
.status-Active { background: rgba(91,207,138,0.2); color: var(--green); border: 1px solid rgba(91,207,138,0.3); }
.status-Pending { background: rgba(240,169,74,0.2); color: var(--amber); border: 1px solid rgba(240,169,74,0.3); }
.status-Sold { background: rgba(240,88,74,0.15); color: var(--red); border: 1px solid rgba(240,88,74,0.25); }
.status-OffMarket { background: rgba(255,255,255,0.08); color: var(--text2); border: 1px solid var(--border-hi); }
.source-badge {
  font-size: 10px; font-weight: 700; font-family: 'Fira Code', monospace;
  padding: 3px 8px; border-radius: 5px; text-transform: uppercase; letter-spacing: 0.5px;
  background: rgba(13,15,18,0.7); color: var(--text1); border: 1px solid var(--border-hi);
  backdrop-filter: blur(8px);
}
.icon-btn {
  background: rgba(13,15,18,0.75); border: 1px solid var(--border-hi);
  border-radius: 8px; width: 32px; height: 32px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: all 0.15s; font-size: 15px;
  backdrop-filter: blur(8px);
}
.icon-btn:hover { background: rgba(255,255,255,0.12); transform: scale(1.1); }
.icon-btn.active { background: rgba(240,169,74,0.25); border-color: rgba(240,169,74,0.4); }

.card-body { padding: 16px 18px 14px; }
.card-price-row { display: flex; align-items: baseline; gap: 10px; margin-bottom: 2px; }
.card-price {
  font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800;
  color: var(--text0); letter-spacing: -0.5px;
}
.price-delta {
  font-family: 'Fira Code', monospace; font-size: 11px; font-weight: 500;
  padding: 2px 6px; border-radius: 4px;
}
.price-delta.down { color: var(--green); background: var(--green-dim); }
.price-delta.up { color: var(--red); background: var(--red-dim); }
.card-address { font-size: 13px; color: var(--text1); margin-bottom: 10px; line-height: 1.4; font-weight: 300; }
.card-specs { display: flex; gap: 12px; margin-bottom: 12px; flex-wrap: wrap; }
.spec { font-size: 12px; color: var(--text1); display: flex; align-items: center; gap: 4px; font-weight: 400; }
.spec-icon { font-size: 13px; }

/* SCORE ROW */
.card-score-row { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
.score-pills { display: flex; gap: 5px; }
.score-pill {
  font-family: 'Fira Code', monospace; font-size: 10px; font-weight: 500;
  padding: 3px 7px; border-radius: 5px;
  border: 1px solid var(--border);
}
.score-pill.rated { background: var(--teal-dim); border-color: rgba(62,207,178,0.25); color: var(--teal); }

/* PROS/CONS TAGS */
.pc-tags { display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 12px; }
.tag {
  font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 20px;
  display: inline-flex; align-items: center; gap: 3px; letter-spacing: 0.2px;
  max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.tag.pro { background: var(--green-dim); color: var(--green); border: 1px solid rgba(91,207,138,0.2); }
.tag.con { background: var(--red-dim); color: var(--red); border: 1px solid rgba(240,88,74,0.2); }
.tag.more { background: var(--bg3); color: var(--text2); border: 1px solid var(--border); }

/* CARD FOOTER */
.card-footer {
  padding: 10px 18px 14px;
  display: flex; gap: 7px; flex-wrap: wrap;
  border-top: 1px solid var(--border);
}

/* ── EMPTY STATE ── */
.empty { text-align: center; padding: 80px 20px; }
.empty-icon { font-size: 52px; margin-bottom: 14px; opacity: 0.3; }
.empty-title { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 700; color: var(--text1); margin-bottom: 7px; }
.empty-sub { font-size: 13px; color: var(--text2); }

/* ── MODAL ── */
.overlay {
  position: fixed; inset: 0; z-index: 200;
  background: rgba(5,7,10,0.78); backdrop-filter: blur(6px);
  display: flex; align-items: center; justify-content: center;
  padding: 20px; animation: fadeIn 0.18s;
}
@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
.modal {
  background: var(--bg1); border: 1px solid var(--border-hi);
  border-radius: 20px; width: 100%; max-width: 760px;
  max-height: 92vh; overflow-y: auto;
  box-shadow: var(--shadow-lg);
  animation: slideUp 0.22s cubic-bezier(.22,.68,0,1.2);
}
@keyframes slideUp { from { transform: translateY(18px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }

.modal-hero {
  position: relative; height: 200px;
  background: linear-gradient(135deg, #1a1e26 0%, #13161b 100%);
  overflow: hidden;
}
.modal-hero img { width: 100%; height: 100%; object-fit: cover; }
.modal-hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, transparent 30%, var(--bg1) 100%);
}
.modal-hero-content {
  position: absolute; bottom: 0; left: 0; right: 0; padding: 20px 28px 0;
}
.modal-price {
  font-family: 'Syne', sans-serif; font-size: 34px; font-weight: 800;
  color: var(--text0); letter-spacing: -1px; line-height: 1;
}
.modal-close-btn {
  position: absolute; top: 14px; right: 14px;
  background: rgba(13,15,18,0.7); border: 1px solid var(--border-hi);
  border-radius: 50%; width: 34px; height: 34px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 16px; color: var(--text1);
  transition: all 0.15s; backdrop-filter: blur(8px);
}
.modal-close-btn:hover { background: var(--bg3); color: var(--text0); }

.modal-body { padding: 20px 28px 28px; }
.modal-address { font-size: 14px; color: var(--text1); margin-top: 4px; font-weight: 300; }
.modal-meta {
  display: flex; gap: 16px; flex-wrap: wrap; padding: 14px 0;
  border-bottom: 1px solid var(--border); margin-bottom: 4px;
}
.modal-spec { font-size: 13px; color: var(--text1); display: flex; align-items: center; gap: 5px; }
.modal-link {
  font-family: 'Fira Code', monospace; font-size: 11px;
  color: var(--teal); text-decoration: none; transition: opacity 0.15s;
}
.modal-link:hover { opacity: 0.75; }

.section-head {
  font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700;
  color: var(--text2); text-transform: uppercase; letter-spacing: 1px;
  margin-top: 22px; margin-bottom: 10px;
  display: flex; align-items: center; gap: 8px;
}
.section-head::after { content: ''; flex: 1; height: 1px; background: var(--border); }

/* RATINGS */
.ratings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.rating-row { display: flex; align-items: center; gap: 12px; background: var(--bg2); border-radius: 9px; padding: 10px 13px; }
.rating-label { font-size: 12px; font-weight: 700; color: var(--text1); min-width: 78px; }
.stars { display: flex; gap: 3px; }
.star { font-size: 18px; cursor: pointer; transition: transform 0.1s, opacity 0.1s; opacity: 0.35; }
.star.lit { opacity: 1; }
.star:hover { transform: scale(1.2); }

/* PROS/CONS */
.pc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 6px; }
.pc-col {
  background: var(--bg2); border-radius: 12px; padding: 14px;
  border: 1px solid var(--border);
}
.pc-col.pros { border-color: rgba(91,207,138,0.15); }
.pc-col.cons { border-color: rgba(240,88,74,0.15); }
.pc-col-head {
  font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.7px;
  margin-bottom: 10px; display: flex; align-items: center; gap: 5px;
}
.pc-col-head.pros { color: var(--green); }
.pc-col-head.cons { color: var(--red); }
.pc-item {
  display: flex; align-items: flex-start; gap: 7px; padding: 6px 0;
  border-bottom: 1px solid var(--border); font-size: 13px; line-height: 1.4;
  color: var(--text1);
}
.pc-item:last-of-type { border-bottom: none; }
.pc-icon { flex-shrink: 0; margin-top: 1px; font-size: 12px; }
.pc-del {
  margin-left: auto; background: none; border: none; cursor: pointer;
  color: var(--text2); font-size: 13px; flex-shrink: 0; transition: color 0.12s;
  padding: 0 2px;
}
.pc-del:hover { color: var(--red); }
.pc-add { display: flex; gap: 7px; margin-top: 10px; }
.pc-add-input {
  flex: 1; background: var(--bg3); border: 1px solid var(--border-hi);
  border-radius: 7px; padding: 7px 10px;
  font-family: 'Lato', sans-serif; font-size: 12px; color: var(--text0);
  outline: none; transition: border-color 0.12s;
}
.pc-add-input:focus { border-color: var(--teal); }
.pc-add-input::placeholder { color: var(--text2); }
.btn-add-pro { background: rgba(91,207,138,0.15); color: var(--green); border: 1px solid rgba(91,207,138,0.25); padding: 7px 10px; font-size: 13px; border-radius: 7px; cursor: pointer; font-weight: 700; transition: all 0.12s; }
.btn-add-pro:hover { background: var(--green); color: #0d0f12; }
.btn-add-con { background: rgba(240,88,74,0.15); color: var(--red); border: 1px solid rgba(240,88,74,0.25); padding: 7px 10px; font-size: 13px; border-radius: 7px; cursor: pointer; font-weight: 700; transition: all 0.12s; }
.btn-add-con:hover { background: var(--red); color: white; }

/* NOTES */
.notes-ta {
  width: 100%; background: var(--bg2); border: 1px solid var(--border-hi);
  border-radius: 10px; padding: 13px; resize: vertical; min-height: 88px;
  font-family: 'Lato', sans-serif; font-size: 13px; color: var(--text0);
  outline: none; line-height: 1.6; transition: border-color 0.12s;
  font-weight: 300;
}
.notes-ta:focus { border-color: var(--teal); background: var(--bg3); }
.notes-ta::placeholder { color: var(--text2); }

/* PRICE HISTORY */
.price-history { display: flex; flex-direction: column; gap: 6px; }
.price-entry {
  display: flex; align-items: center; gap: 12px;
  background: var(--bg2); border-radius: 9px; padding: 10px 14px;
  border: 1px solid var(--border);
}
.price-entry-date { font-family: 'Fira Code', monospace; font-size: 11px; color: var(--text2); min-width: 80px; }
.price-entry-val { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700; color: var(--text0); }
.price-entry-delta {
  font-family: 'Fira Code', monospace; font-size: 11px;
  padding: 2px 7px; border-radius: 4px; margin-left: 2px;
}
.price-entry-note { font-size: 12px; color: var(--text2); flex: 1; text-align: right; font-style: italic; }
.price-add-row { display: flex; gap: 8px; margin-top: 8px; flex-wrap: wrap; align-items: center; }
.price-add-row .form-input { flex: 1; min-width: 120px; }

/* ── COMPARE VIEW ── */
.compare-select { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 22px; align-items: center; }
.compare-pill {
  display: flex; align-items: center; gap: 7px;
  background: var(--bg2); border: 1px solid var(--border-hi);
  border-radius: 9px; padding: 8px 14px;
  font-size: 13px; font-weight: 700; color: var(--text1);
  cursor: pointer; transition: all 0.15s;
}
.compare-pill:hover { border-color: var(--teal); color: var(--text0); }
.compare-pill.on { background: var(--teal-dim); border-color: rgba(62,207,178,0.4); color: var(--teal); }
.compare-section-label { font-size: 11px; color: var(--text2); font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; margin-right: 4px; }

.compare-wrap { overflow-x: auto; border-radius: var(--r-lg); border: 1px solid var(--border); }
.compare-table { width: 100%; border-collapse: collapse; min-width: 580px; }
.compare-table th {
  background: var(--bg2); padding: 13px 18px; text-align: left;
  font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; color: var(--text0);
  border-bottom: 1px solid var(--border);
  white-space: nowrap;
}
.compare-table th:first-child { color: var(--text2); font-size: 11px; text-transform: uppercase; letter-spacing: 0.7px; font-family: 'Fira Code', monospace; }
.compare-table td {
  padding: 11px 18px; font-size: 13px; color: var(--text1);
  border-bottom: 1px solid var(--border);
  vertical-align: top;
}
.compare-table td:first-child { font-size: 11px; color: var(--text2); font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; font-family: 'Fira Code', monospace; white-space: nowrap; }
.compare-table tr:last-child td { border-bottom: none; }
.compare-table tr:nth-child(even) td { background: rgba(255,255,255,0.015); }
.compare-best { color: var(--teal); font-weight: 700; }

/* ── SHARE PANEL ── */
.share-panel {
  background: var(--bg2); border: 1px solid var(--border-hi);
  border-radius: 12px; padding: 18px 20px; margin-top: 18px;
}
.share-title { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700; color: var(--text0); margin-bottom: 10px; }
.share-sub { font-size: 12px; color: var(--text2); margin-bottom: 14px; line-height: 1.5; }
.share-link-row { display: flex; gap: 8px; }
.share-link-input {
  flex: 1; background: var(--bg3); border: 1px solid var(--border-hi);
  border-radius: 8px; padding: 9px 12px;
  font-family: 'Fira Code', monospace; font-size: 11px; color: var(--teal);
  outline: none; cursor: text;
}
.share-notice { font-size: 11px; color: var(--text2); margin-top: 10px; font-style: italic; }
.copied-badge {
  background: var(--green-dim); color: var(--green); border: 1px solid rgba(91,207,138,0.25);
  font-size: 11px; font-family: 'Fira Code', monospace;
  padding: 3px 9px; border-radius: 5px; align-self: center;
}

/* ── MODAL FOOTER ── */
.modal-footer { display: flex; gap: 8px; padding-top: 16px; border-top: 1px solid var(--border); margin-top: 18px; flex-wrap: wrap; }

/* ── RESPONSIVE ── */
@media (max-width: 680px) {
  .main { padding: 22px 14px 80px; }
  .header { padding: 0 16px; }
  .form-grid { grid-template-columns: 1fr 1fr; }
  .fg-full { grid-column: 1/-1; }
  .fg-half, .fg-3 { grid-column: 1/-1; }
  .listings-grid { grid-template-columns: 1fr; }
  .pc-grid { grid-template-columns: 1fr; }
  .ratings-grid { grid-template-columns: 1fr; }
  .modal { max-height: 98vh; }
  .modal-body { padding: 16px 18px 22px; }
}
`, ae = (d) => d ? `$${Number(d).toLocaleString()}` : "—", kr = (d) => new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }), Sr = (d) => {
  if (!d || d.length < 2) return null;
  const A = [...d].sort((O, Y) => new Date(O.date) - new Date(Y.date));
  return A[A.length - 1].price - A[0].price;
}, Ge = [
  {
    id: 1,
    address: "2847 Maple Grove Drive, Austin, TX 78702",
    price: 485e3,
    beds: 3,
    baths: 2,
    sqft: 1840,
    yearBuilt: 1998,
    url: "https://zillow.com",
    source: "Zillow",
    status: "Active",
    notes: "Great neighborhood, walkable. Master bath needs updating. Seller may negotiate on closing costs.",
    imageUrl: "",
    lotSize: "0.18 ac",
    hoaFees: "None",
    taxes: "$8,200/yr",
    favorited: !0,
    pros: ["Quiet street", "Updated kitchen", "Big backyard", "Walkable to shops"],
    cons: ["No garage", "Small master bath", "Busy road nearby"],
    ratings: { overall: 4, location: 5, value: 3, condition: 4 },
    priceHistory: [
      { date: "2025-11-01", price: 51e4, note: "Listed" },
      { date: "2025-12-15", price: 499e3, note: "Price drop" },
      { date: "2026-01-20", price: 485e3, note: "Reduced again" }
    ]
  },
  {
    id: 2,
    address: "518 Rosewood Lane, Austin, TX 78745",
    price: 529e3,
    beds: 4,
    baths: 2.5,
    sqft: 2100,
    yearBuilt: 2005,
    url: "https://redfin.com",
    source: "Redfin",
    status: "Active",
    notes: "Newer build. Good school district. Commute ~25min. HOA is strict about landscaping.",
    imageUrl: "",
    lotSize: "0.22 ac",
    hoaFees: "$120/mo",
    taxes: "$9,400/yr",
    favorited: !1,
    pros: ["New roof (2022)", "4 bedrooms", "Top school district"],
    cons: ["HOA fees", "Far from downtown", "Small yard"],
    ratings: { overall: 3, location: 3, value: 3, condition: 5 },
    priceHistory: [
      { date: "2025-10-10", price: 545e3, note: "Listed" },
      { date: "2026-01-05", price: 529e3, note: "Price drop" }
    ]
  }
], Je = ["Active", "Pending", "Sold", "Off Market"], we = {
  address: "",
  price: "",
  beds: "",
  baths: "",
  sqft: "",
  yearBuilt: "",
  url: "",
  source: "",
  status: "Active",
  notes: "",
  imageUrl: "",
  lotSize: "",
  hoaFees: "",
  taxes: ""
}, Xe = "nesttrack_listings", Ze = "nesttrack_compare", Cr = () => {
  try {
    const d = localStorage.getItem(Xe);
    return d ? JSON.parse(d) : Ge;
  } catch {
    return Ge;
  }
}, Rr = (d) => {
  try {
    localStorage.setItem(Xe, JSON.stringify(d));
  } catch {
  }
}, Er = () => {
  try {
    const d = localStorage.getItem(Ze);
    return d ? JSON.parse(d) : [1, 2];
  } catch {
    return [1, 2];
  }
};
function Or() {
  const [d, A] = $(Cr), [y, O] = $("all"), [Y, F] = $(!1), [g, m] = $(we), [v, I] = $(""), [j, C] = $(null), [z, L] = $(null), [_, ke] = $(Er), [te, W] = $("All"), [S, ge] = $(!1), [Z, oe] = $({ price: "", note: "" }), se = qe({}), ne = qe({}), ie = (a) => {
    A((t) => {
      const i = typeof a == "function" ? a(t) : a;
      return Rr(i), i;
    });
  }, H = (a) => {
    ke((t) => {
      const i = typeof a == "function" ? a(t) : a;
      try {
        localStorage.setItem(Ze, JSON.stringify(i));
      } catch {
      }
      return i;
    });
  }, n = d.find((a) => a.id === z), D = (a, t) => ie((i) => i.map((l) => l.id === a ? { ...l, ...t } : l)), le = async () => {
    if (!v.trim()) return;
    C("loading");
    const a = "https://nesttrack-production.up.railway.app/";
    try {
      const [t, i] = await Promise.all([
        fetch(`${a}/api/fetch-listing?url=${encodeURIComponent(v)}`),
        fetch(`${a}/api/fetch-photos?url=${encodeURIComponent(v)}`)
      ]), l = await t.json(), h = await i.json();
      if (console.log("PHOTO DATA:", JSON.stringify(h, null, 2)), !l.success || !l.property) throw new Error("No property data");
      const b = l.property, w = b.address, T = `${w.streetAddress}, ${w.city}, ${w.state} ${w.zipcode}`, pe = b.livingArea?.value || 0, Q = b.lotArea ? `${b.lotArea.value.toFixed(2)} ${b.lotArea.units}` : "", K = b.facts_features?.financial_hoa?.hoaFee || "None", ye = b.propertyTaxRate ? `${b.propertyTaxRate}% rate` : "", je = b.homeStatus === "FOR_SALE" ? "Active" : b.homeStatus === "PENDING" ? "Pending" : b.homeStatus === "SOLD" ? "Sold" : "Active", M = h?.images || h?.photos || h?.data || [], Ce = Array.isArray(M) && M.length > 0 && (M[0]?.url || M[0]?.src || M[0]?.mixedSources?.jpeg?.[0]?.url) || "";
      m((G) => ({
        ...G,
        address: T,
        price: b.price || G.price,
        beds: b.bedrooms || G.beds,
        baths: b.bathrooms || G.baths,
        sqft: pe,
        yearBuilt: b.yearBuilt || G.yearBuilt,
        lotSize: Q,
        hoaFees: K,
        taxes: ye,
        status: je,
        url: v,
        source: "Zillow",
        imageUrl: Ce || G.imageUrl,
        notes: b.description ? b.description.slice(0, 300) + "..." : ""
      })), C("success"), F(!0);
    } catch (t) {
      console.error("Fetch error:", t), C("error"), m((i) => ({ ...i, url: v })), F(!0);
    }
  }, U = () => {
    if (!g.address || !g.price) return;
    const a = (/* @__PURE__ */ new Date()).toISOString().split("T")[0], t = Number(String(g.price).replace(/[^0-9.]/g, "")), i = {
      ...we,
      ...g,
      id: Date.now(),
      price: t,
      beds: Number(g.beds) || 0,
      baths: Number(g.baths) || 0,
      sqft: Number(g.sqft) || 0,
      yearBuilt: Number(g.yearBuilt) || 0,
      favorited: !1,
      pros: [],
      cons: [],
      ratings: { overall: 0, location: 0, value: 0, condition: 0 },
      priceHistory: [{ date: a, price: t, note: "Listed" }]
    };
    ie((l) => [i, ...l]), m(we), I(""), C(null), F(!1);
  }, B = (a) => {
    ie((t) => t.filter((i) => i.id !== a)), z === a && L(null), H((t) => t.filter((i) => i !== a));
  }, V = (a) => {
    const t = se.current[a]?.value?.trim();
    if (!t) return;
    const i = d.find((l) => l.id === a);
    D(a, { pros: [...i.pros || [], t] }), se.current[a].value = "";
  }, ce = (a) => {
    const t = ne.current[a]?.value?.trim();
    if (!t) return;
    const i = d.find((l) => l.id === a);
    D(a, { cons: [...i.cons || [], t] }), ne.current[a].value = "";
  }, xe = (a, t) => {
    const i = d.find((l) => l.id === a);
    D(a, { pros: i.pros.filter((l, h) => h !== t) });
  }, me = (a, t) => {
    const i = d.find((l) => l.id === a);
    D(a, { cons: i.cons.filter((l, h) => h !== t) });
  }, he = (a, t, i) => {
    const l = d.find((h) => h.id === a);
    D(a, { ratings: { ...l.ratings, [t]: i } });
  }, be = (a) => {
    const t = Number(String(Z.price).replace(/[^0-9.]/g, ""));
    if (!t) return;
    const i = d.find((h) => h.id === a), l = { date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], price: t, note: Z.note || "" };
    D(a, { price: t, priceHistory: [...i.priceHistory || [], l] }), oe({ price: "", note: "" });
  }, de = (a) => {
    const t = btoa(JSON.stringify({
      address: a.address,
      price: a.price,
      beds: a.beds,
      baths: a.baths,
      sqft: a.sqft,
      pros: a.pros,
      cons: a.cons,
      notes: a.notes,
      ratings: a.ratings,
      source: a.source,
      url: a.url
    }));
    return `${window.location.origin}${window.location.pathname}?share=${t}`;
  }, ve = (a) => {
    const t = de(a);
    navigator.clipboard.writeText(t).then(() => {
      ge(!0), setTimeout(() => ge(!1), 2500);
    });
  }, J = y === "favorites" ? d.filter((a) => a.favorited) : y === "compare" || te === "All" ? d : d.filter((a) => a.status === te), q = d.filter((a) => _.includes(a.id)), Se = ({ id: a, rkey: t, val: i }) => /* @__PURE__ */ e.jsx("div", { className: "stars", children: [1, 2, 3, 4, 5].map((l) => /* @__PURE__ */ e.jsx(
    "span",
    {
      className: `star${l <= i ? " lit" : ""}`,
      onClick: () => he(a, t, l),
      style: { color: l <= i ? "#f0a94a" : "#2a3040" },
      children: "★"
    },
    l
  )) });
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs("style", { children: [
      Nr,
      wr
    ] }),
    /* @__PURE__ */ e.jsxs("header", { className: "header", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "logo", children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          "NEST",
          /* @__PURE__ */ e.jsx("span", { className: "logo-dot", children: "·" }),
          "TRACK"
        ] }),
        /* @__PURE__ */ e.jsx("span", { className: "logo-tag", children: "beta" })
      ] }),
      /* @__PURE__ */ e.jsxs("nav", { className: "nav", children: [
        /* @__PURE__ */ e.jsxs("button", { className: `nav-btn${y === "all" ? " active" : ""}`, onClick: () => O("all"), children: [
          "All ",
          /* @__PURE__ */ e.jsx("span", { className: "nav-badge", children: d.length })
        ] }),
        /* @__PURE__ */ e.jsxs("button", { className: `nav-btn${y === "favorites" ? " active" : ""}`, onClick: () => O("favorites"), children: [
          "⭐ Saved ",
          /* @__PURE__ */ e.jsx("span", { className: "nav-badge", children: d.filter((a) => a.favorited).length })
        ] }),
        /* @__PURE__ */ e.jsxs("button", { className: `nav-btn${y === "compare" ? " active" : ""}`, onClick: () => O("compare"), children: [
          "⚖ Compare ",
          /* @__PURE__ */ e.jsx("span", { className: "nav-badge", children: _.length })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("main", { className: "main", children: [
      (y === "all" || y === "favorites") && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "page-head", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("div", { className: "page-title", children: y === "all" ? "Your Listings" : "Saved Favorites" }),
            /* @__PURE__ */ e.jsx("div", { className: "page-sub", children: y === "all" ? "Track, annotate, and compare homes you're considering." : "Homes you've starred for closer review." })
          ] }),
          y === "all" && /* @__PURE__ */ e.jsx("div", { className: "page-actions", children: /* @__PURE__ */ e.jsx("button", { className: "btn btn-primary", onClick: () => F((a) => !a), children: "+ Add Listing" }) })
        ] }),
        y === "all" && Y && /* @__PURE__ */ e.jsxs("div", { className: "add-panel", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "add-panel-header", onClick: () => F((a) => !a), children: [
            /* @__PURE__ */ e.jsxs("div", { className: "add-panel-title", children: [
              /* @__PURE__ */ e.jsx("span", { style: { color: "var(--teal)" }, children: "+" }),
              " New Listing"
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: `panel-caret${Y ? " open" : ""}`, children: "▼" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "add-panel-body", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "fetch-row", children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  className: "fetch-input",
                  placeholder: "Paste a Zillow / Redfin / Realtor URL to auto-fill…",
                  value: v,
                  onChange: (a) => I(a.target.value),
                  onKeyDown: (a) => a.key === "Enter" && le()
                }
              ),
              /* @__PURE__ */ e.jsx("button", { className: "btn btn-primary", onClick: le, disabled: j === "loading", children: j === "loading" ? "…" : "↓ Fetch" }),
              j && /* @__PURE__ */ e.jsxs("span", { className: `fetch-status ${j}`, children: [
                j === "loading" && "Extracting…",
                j === "success" && "✓ Filled below",
                j === "error" && "Fill manually ↓"
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "fetch-divider", children: [
              /* @__PURE__ */ e.jsx("div", { className: "fetch-divider-line" }),
              /* @__PURE__ */ e.jsx("span", { className: "fetch-divider-text", children: "or fill manually" }),
              /* @__PURE__ */ e.jsx("div", { className: "fetch-divider-line" })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "form-grid", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "form-group fg-half", children: [
                /* @__PURE__ */ e.jsx("label", { className: "form-label", children: "Address *" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    className: "form-input",
                    placeholder: "123 Main St, City, State ZIP",
                    value: g.address,
                    onChange: (a) => m((t) => ({ ...t, address: a.target.value }))
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ e.jsx("label", { className: "form-label", children: "Price *" }),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    className: "form-input",
                    placeholder: "$450,000",
                    value: g.price,
                    onChange: (a) => m((t) => ({ ...t, price: a.target.value }))
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ e.jsx("label", { className: "form-label", children: "Status" }),
                /* @__PURE__ */ e.jsx("select", { className: "form-input", value: g.status, onChange: (a) => m((t) => ({ ...t, status: a.target.value })), children: Je.map((a) => /* @__PURE__ */ e.jsx("option", { children: a }, a)) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ e.jsx("label", { className: "form-label", children: "Beds" }),
                /* @__PURE__ */ e.jsx("input", { className: "form-input", placeholder: "3", type: "number", value: g.beds, onChange: (a) => m((t) => ({ ...t, beds: a.target.value })) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ e.jsx("label", { className: "form-label", children: "Baths" }),
                /* @__PURE__ */ e.jsx("input", { className: "form-input", placeholder: "2", type: "number", step: "0.5", value: g.baths, onChange: (a) => m((t) => ({ ...t, baths: a.target.value })) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ e.jsx("label", { className: "form-label", children: "Sq Ft" }),
                /* @__PURE__ */ e.jsx("input", { className: "form-input", placeholder: "1,800", value: g.sqft, onChange: (a) => m((t) => ({ ...t, sqft: a.target.value })) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ e.jsx("label", { className: "form-label", children: "Year Built" }),
                /* @__PURE__ */ e.jsx("input", { className: "form-input", placeholder: "2001", value: g.yearBuilt, onChange: (a) => m((t) => ({ ...t, yearBuilt: a.target.value })) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ e.jsx("label", { className: "form-label", children: "HOA Fees" }),
                /* @__PURE__ */ e.jsx("input", { className: "form-input", placeholder: "None / $120/mo", value: g.hoaFees, onChange: (a) => m((t) => ({ ...t, hoaFees: a.target.value })) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ e.jsx("label", { className: "form-label", children: "Property Taxes" }),
                /* @__PURE__ */ e.jsx("input", { className: "form-input", placeholder: "$8,000/yr", value: g.taxes, onChange: (a) => m((t) => ({ ...t, taxes: a.target.value })) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ e.jsx("label", { className: "form-label", children: "Lot Size" }),
                /* @__PURE__ */ e.jsx("input", { className: "form-input", placeholder: "0.2 ac", value: g.lotSize, onChange: (a) => m((t) => ({ ...t, lotSize: a.target.value })) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ e.jsx("label", { className: "form-label", children: "Source" }),
                /* @__PURE__ */ e.jsx("input", { className: "form-input", placeholder: "Zillow, Redfin…", value: g.source, onChange: (a) => m((t) => ({ ...t, source: a.target.value })) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "form-group fg-half", children: [
                /* @__PURE__ */ e.jsx("label", { className: "form-label", children: "Listing URL" }),
                /* @__PURE__ */ e.jsx("input", { className: "form-input", placeholder: "https://…", value: g.url, onChange: (a) => m((t) => ({ ...t, url: a.target.value })) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "form-group fg-half", children: [
                /* @__PURE__ */ e.jsx("label", { className: "form-label", children: "Image URL (optional)" }),
                /* @__PURE__ */ e.jsx("input", { className: "form-input", placeholder: "https://…", value: g.imageUrl, onChange: (a) => m((t) => ({ ...t, imageUrl: a.target.value })) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "form-group fg-full", children: [
                /* @__PURE__ */ e.jsx("label", { className: "form-label", children: "Initial Notes" }),
                /* @__PURE__ */ e.jsx(
                  "textarea",
                  {
                    className: "form-input",
                    rows: 2,
                    placeholder: "First impressions, things to follow up on…",
                    value: g.notes,
                    onChange: (a) => m((t) => ({ ...t, notes: a.target.value }))
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "form-actions", children: [
              /* @__PURE__ */ e.jsx("button", { className: "btn btn-primary", onClick: U, children: "Add Listing" }),
              /* @__PURE__ */ e.jsx("button", { className: "btn btn-secondary", onClick: () => {
                m(we), I(""), C(null), F(!1);
              }, children: "Cancel" })
            ] })
          ] })
        ] }),
        y === "all" && /* @__PURE__ */ e.jsxs("div", { className: "filter-bar", children: [
          ["All", ...Je].map((a) => /* @__PURE__ */ e.jsx("button", { className: `filter-chip${te === a ? " active" : ""}`, onClick: () => W(a), children: a }, a)),
          /* @__PURE__ */ e.jsx("div", { className: "filter-spacer" }),
          /* @__PURE__ */ e.jsxs("span", { className: "listings-count", children: [
            J.length,
            " listing",
            J.length !== 1 ? "s" : ""
          ] })
        ] }),
        J.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "empty", children: [
          /* @__PURE__ */ e.jsx("div", { className: "empty-icon", children: y === "favorites" ? "⭐" : "🏠" }),
          /* @__PURE__ */ e.jsx("div", { className: "empty-title", children: y === "favorites" ? "No favorites yet" : "No listings" }),
          /* @__PURE__ */ e.jsx("div", { className: "empty-sub", children: y === "favorites" ? "Star a listing to save it here." : "Add a listing above to get started." })
        ] }) : /* @__PURE__ */ e.jsx("div", { className: "listings-grid", children: J.map((a) => {
          const t = Sr(a.priceHistory);
          return /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: `card${a.favorited ? " favorited" : ""}${_.includes(a.id) ? " in-compare" : ""}`,
              onClick: () => L(a.id),
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "card-img", children: [
                  a.imageUrl ? /* @__PURE__ */ e.jsx("img", { src: a.imageUrl, alt: "", onError: (i) => i.target.style.display = "none" }) : /* @__PURE__ */ e.jsx("div", { className: "card-img-placeholder", children: "⌂" }),
                  /* @__PURE__ */ e.jsx("div", { className: "card-img-overlay" }),
                  /* @__PURE__ */ e.jsxs("div", { className: "card-img-left", children: [
                    /* @__PURE__ */ e.jsx("span", { className: `status-badge status-${a.status.replace(" ", "")}`, children: a.status }),
                    a.source && /* @__PURE__ */ e.jsx("span", { className: "source-badge", children: a.source })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "card-img-actions", onClick: (i) => i.stopPropagation(), children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: `icon-btn${a.favorited ? " active" : ""}`,
                        title: "Favorite",
                        onClick: () => D(a.id, { favorited: !a.favorited }),
                        children: a.favorited ? "⭐" : "☆"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: `icon-btn${_.includes(a.id) ? " active" : ""}`,
                        title: "Add to compare",
                        style: _.includes(a.id) ? { background: "var(--teal-dim)", borderColor: "rgba(62,207,178,0.4)" } : {},
                        onClick: () => H((i) => i.includes(a.id) ? i.filter((l) => l !== a.id) : [...i, a.id]),
                        children: "⚖"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "card-body", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "card-price-row", children: [
                    /* @__PURE__ */ e.jsx("div", { className: "card-price", children: ae(a.price) }),
                    t !== null && /* @__PURE__ */ e.jsxs("span", { className: `price-delta ${t < 0 ? "down" : "up"}`, children: [
                      t < 0 ? "▼" : "▲",
                      " ",
                      ae(Math.abs(t))
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("div", { className: "card-address", children: a.address }),
                  /* @__PURE__ */ e.jsxs("div", { className: "card-specs", children: [
                    a.beds > 0 && /* @__PURE__ */ e.jsxs("span", { className: "spec", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "spec-icon", children: "🛏" }),
                      a.beds,
                      "bd"
                    ] }),
                    a.baths > 0 && /* @__PURE__ */ e.jsxs("span", { className: "spec", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "spec-icon", children: "🚿" }),
                      a.baths,
                      "ba"
                    ] }),
                    a.sqft > 0 && /* @__PURE__ */ e.jsxs("span", { className: "spec", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "spec-icon", children: "◻" }),
                      Number(a.sqft).toLocaleString(),
                      "sf"
                    ] }),
                    a.yearBuilt > 0 && /* @__PURE__ */ e.jsxs("span", { className: "spec", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "spec-icon", children: "🗓" }),
                      a.yearBuilt
                    ] })
                  ] }),
                  a.ratings?.overall > 0 && /* @__PURE__ */ e.jsx("div", { className: "card-score-row", children: /* @__PURE__ */ e.jsx("div", { className: "score-pills", children: [["overall", "★"], ["location", "📍"], ["value", "💲"], ["condition", "🔧"]].map(([i, l]) => a.ratings[i] > 0 && /* @__PURE__ */ e.jsxs("span", { className: "score-pill rated", title: i, children: [
                    l,
                    " ",
                    a.ratings[i]
                  ] }, i)) }) }),
                  (a.pros?.length > 0 || a.cons?.length > 0) && /* @__PURE__ */ e.jsxs("div", { className: "pc-tags", children: [
                    a.pros?.slice(0, 2).map((i, l) => /* @__PURE__ */ e.jsxs("span", { className: "tag pro", children: [
                      "✓ ",
                      i
                    ] }, l)),
                    a.cons?.slice(0, 2).map((i, l) => /* @__PURE__ */ e.jsxs("span", { className: "tag con", children: [
                      "✗ ",
                      i
                    ] }, l)),
                    a.pros?.length + a.cons?.length > 4 && /* @__PURE__ */ e.jsxs("span", { className: "tag more", children: [
                      "+",
                      a.pros.length + a.cons.length - 4
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "card-footer", onClick: (i) => i.stopPropagation(), children: [
                  /* @__PURE__ */ e.jsx("button", { className: "btn btn-ghost btn-sm", onClick: () => L(a.id), children: "Open" }),
                  a.url && /* @__PURE__ */ e.jsxs("a", { href: a.url, target: "_blank", rel: "noopener", className: "btn btn-ghost btn-sm", children: [
                    "↗ ",
                    a.source || "Link"
                  ] }),
                  /* @__PURE__ */ e.jsx("button", { className: "btn btn-danger btn-sm", style: { marginLeft: "auto" }, onClick: () => B(a.id), children: "🗑" })
                ] })
              ]
            },
            a.id
          );
        }) })
      ] }),
      y === "compare" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "page-head", children: /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("div", { className: "page-title", children: "Side-by-Side Compare" }),
          /* @__PURE__ */ e.jsx("div", { className: "page-sub", children: "Select homes below to compare key details at a glance." })
        ] }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "compare-select", children: [
          /* @__PURE__ */ e.jsx("span", { className: "compare-section-label", children: "Select:" }),
          d.map((a) => /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: `compare-pill${_.includes(a.id) ? " on" : ""}`,
              onClick: () => H((t) => t.includes(a.id) ? t.filter((i) => i !== a.id) : [...t, a.id]),
              children: [
                _.includes(a.id) ? "✓ " : "",
                a.address.split(",")[0]
              ]
            },
            a.id
          ))
        ] }),
        q.length < 2 ? /* @__PURE__ */ e.jsxs("div", { className: "empty", children: [
          /* @__PURE__ */ e.jsx("div", { className: "empty-icon", children: "⚖" }),
          /* @__PURE__ */ e.jsx("div", { className: "empty-title", children: "Select 2 or more listings" }),
          /* @__PURE__ */ e.jsx("div", { className: "empty-sub", children: "Use the chips above to pick which homes to compare." })
        ] }) : /* @__PURE__ */ e.jsx("div", { className: "compare-wrap", children: /* @__PURE__ */ e.jsxs("table", { className: "compare-table", children: [
          /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsxs("tr", { children: [
            /* @__PURE__ */ e.jsx("th", { children: "Detail" }),
            q.map((a) => /* @__PURE__ */ e.jsx("th", { children: a.address.split(",")[0] }, a.id))
          ] }) }),
          /* @__PURE__ */ e.jsx("tbody", { children: [
            ["Price", (t) => ae(t.price), !0],
            ["Status", (t) => t.status],
            ["Beds / Baths", (t) => `${t.beds || "—"} bd / ${t.baths || "—"} ba`],
            ["Sq Ft", (t) => t.sqft ? `${Number(t.sqft).toLocaleString()}` : "—", !0],
            ["Year Built", (t) => t.yearBuilt || "—", !0],
            ["Lot Size", (t) => t.lotSize || "—"],
            ["HOA Fees", (t) => t.hoaFees || "—"],
            ["Property Taxes", (t) => t.taxes || "—"],
            ["Overall ★", (t) => t.ratings?.overall ? "★".repeat(t.ratings.overall) : "—", !0],
            ["Location ★", (t) => t.ratings?.location ? "★".repeat(t.ratings.location) : "—", !0],
            ["Value ★", (t) => t.ratings?.value ? "★".repeat(t.ratings.value) : "—", !0],
            ["Condition ★", (t) => t.ratings?.condition ? "★".repeat(t.ratings.condition) : "—", !0],
            ["Pros", (t) => t.pros?.join(" · ") || "—"],
            ["Cons", (t) => t.cons?.join(" · ") || "—"],
            ["Price History", (t) => t.priceHistory?.length > 1 ? `${t.priceHistory.length} entries` : "—"],
            ["Source", (t) => t.source || "—"],
            ["Notes", (t) => t.notes ? t.notes.slice(0, 80) + (t.notes.length > 80 ? "…" : "") : "—"]
          ].map(([t, i, l]) => {
            const h = q.map((w) => i(w));
            let b = -1;
            if (l && t === "Price") {
              const w = q.map((T) => T.price || 1 / 0);
              b = w.indexOf(Math.min(...w));
            } else if (l && t.includes("★")) {
              const w = q.map((T) => {
                const pe = t.split(" ")[0].toLowerCase();
                return T.ratings?.[pe] || 0;
              });
              b = w.indexOf(Math.max(...w));
            } else if (l && t === "Sq Ft") {
              const w = q.map((T) => T.sqft || 0);
              b = w.indexOf(Math.max(...w));
            }
            return /* @__PURE__ */ e.jsxs("tr", { children: [
              /* @__PURE__ */ e.jsx("td", { children: t }),
              q.map((w, T) => /* @__PURE__ */ e.jsx("td", { className: T === b ? "compare-best" : "", children: h[T] }, w.id))
            ] }, t);
          }) })
        ] }) })
      ] })
    ] }),
    z && n && /* @__PURE__ */ e.jsx("div", { className: "overlay", onClick: () => L(null), children: /* @__PURE__ */ e.jsxs("div", { className: "modal", onClick: (a) => a.stopPropagation(), children: [
      /* @__PURE__ */ e.jsxs("div", { className: "modal-hero", children: [
        n.imageUrl ? /* @__PURE__ */ e.jsx("img", { src: n.imageUrl, alt: "", onError: (a) => a.target.style.display = "none" }) : /* @__PURE__ */ e.jsx("div", { style: { width: "100%", height: "100%", background: "linear-gradient(135deg,#1a1e26,#13161b)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, opacity: 0.15, fontFamily: "Syne" }, children: "⌂" }),
        /* @__PURE__ */ e.jsx("div", { className: "modal-hero-overlay" }),
        /* @__PURE__ */ e.jsx("div", { className: "modal-hero-content", children: /* @__PURE__ */ e.jsx("div", { className: "modal-price", children: ae(n.price) }) }),
        /* @__PURE__ */ e.jsx("button", { className: "modal-close-btn", onClick: () => L(null), children: "✕" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "modal-body", children: [
        /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }, children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("div", { className: "modal-address", children: n.address }),
            /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: 6, marginTop: 8 }, children: [
              /* @__PURE__ */ e.jsx("span", { className: `status-badge status-${n.status.replace(" ", "")}`, children: n.status }),
              n.source && /* @__PURE__ */ e.jsx("span", { className: "source-badge", children: n.source })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: 7, flexShrink: 0 }, children: [
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `icon-btn${n.favorited ? " active" : ""}`,
                style: { width: 36, height: 36, fontSize: 16 },
                onClick: () => D(n.id, { favorited: !n.favorited }),
                children: n.favorited ? "⭐" : "☆"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: `icon-btn${_.includes(n.id) ? " active" : ""}`,
                style: _.includes(n.id) ? { width: 36, height: 36, fontSize: 16, background: "var(--teal-dim)", borderColor: "rgba(62,207,178,0.4)" } : { width: 36, height: 36, fontSize: 16 },
                onClick: () => H((a) => a.includes(n.id) ? a.filter((t) => t !== n.id) : [...a, n.id]),
                children: "⚖"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "modal-meta", children: [
          n.beds > 0 && /* @__PURE__ */ e.jsxs("span", { className: "modal-spec", children: [
            "🛏 ",
            n.beds,
            " beds"
          ] }),
          n.baths > 0 && /* @__PURE__ */ e.jsxs("span", { className: "modal-spec", children: [
            "🚿 ",
            n.baths,
            " baths"
          ] }),
          n.sqft > 0 && /* @__PURE__ */ e.jsxs("span", { className: "modal-spec", children: [
            "◻ ",
            Number(n.sqft).toLocaleString(),
            " sqft"
          ] }),
          n.yearBuilt > 0 && /* @__PURE__ */ e.jsxs("span", { className: "modal-spec", children: [
            "🗓 ",
            n.yearBuilt
          ] }),
          n.lotSize && /* @__PURE__ */ e.jsxs("span", { className: "modal-spec", children: [
            "🌿 ",
            n.lotSize
          ] }),
          n.hoaFees && /* @__PURE__ */ e.jsxs("span", { className: "modal-spec", children: [
            "🏘 HOA: ",
            n.hoaFees
          ] }),
          n.taxes && /* @__PURE__ */ e.jsxs("span", { className: "modal-spec", children: [
            "💰 ",
            n.taxes,
            "/yr taxes"
          ] }),
          n.url && /* @__PURE__ */ e.jsxs("a", { href: n.url, target: "_blank", rel: "noopener", className: "modal-link", children: [
            "↗ View on ",
            n.source || "site"
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "section-head", children: "Ratings" }),
        /* @__PURE__ */ e.jsx("div", { className: "ratings-grid", children: [["overall", "Overall"], ["location", "Location"], ["value", "Value"], ["condition", "Condition"]].map(([a, t]) => /* @__PURE__ */ e.jsxs("div", { className: "rating-row", children: [
          /* @__PURE__ */ e.jsx("span", { className: "rating-label", children: t }),
          /* @__PURE__ */ e.jsx(Se, { id: n.id, rkey: a, val: n.ratings?.[a] || 0 })
        ] }, a)) }),
        /* @__PURE__ */ e.jsx("div", { className: "section-head", children: "Pros & Cons" }),
        /* @__PURE__ */ e.jsxs("div", { className: "pc-grid", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "pc-col pros", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "pc-col-head pros", children: [
              "✅ Pros (",
              n.pros?.length || 0,
              ")"
            ] }),
            n.pros?.map((a, t) => /* @__PURE__ */ e.jsxs("div", { className: "pc-item", children: [
              /* @__PURE__ */ e.jsx("span", { className: "pc-icon", style: { color: "var(--green)" }, children: "✓" }),
              /* @__PURE__ */ e.jsx("span", { style: { flex: 1 }, children: a }),
              /* @__PURE__ */ e.jsx("button", { className: "pc-del", onClick: () => xe(n.id, t), children: "✕" })
            ] }, t)),
            /* @__PURE__ */ e.jsxs("div", { className: "pc-add", children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  className: "pc-add-input",
                  ref: (a) => se.current[n.id] = a,
                  placeholder: "Add a pro…",
                  onKeyDown: (a) => a.key === "Enter" && V(n.id)
                }
              ),
              /* @__PURE__ */ e.jsx("button", { className: "btn-add-pro", onClick: () => V(n.id), children: "+" })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "pc-col cons", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "pc-col-head cons", children: [
              "❌ Cons (",
              n.cons?.length || 0,
              ")"
            ] }),
            n.cons?.map((a, t) => /* @__PURE__ */ e.jsxs("div", { className: "pc-item", children: [
              /* @__PURE__ */ e.jsx("span", { className: "pc-icon", style: { color: "var(--red)" }, children: "✗" }),
              /* @__PURE__ */ e.jsx("span", { style: { flex: 1 }, children: a }),
              /* @__PURE__ */ e.jsx("button", { className: "pc-del", onClick: () => me(n.id, t), children: "✕" })
            ] }, t)),
            /* @__PURE__ */ e.jsxs("div", { className: "pc-add", children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  className: "pc-add-input",
                  ref: (a) => ne.current[n.id] = a,
                  placeholder: "Add a con…",
                  onKeyDown: (a) => a.key === "Enter" && ce(n.id)
                }
              ),
              /* @__PURE__ */ e.jsx("button", { className: "btn-add-con", onClick: () => ce(n.id), children: "+" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "section-head", children: "Notes" }),
        /* @__PURE__ */ e.jsx(
          "textarea",
          {
            className: "notes-ta",
            placeholder: "Anything you want to remember — impressions, follow-up questions, things the agent said…",
            value: n.notes || "",
            onChange: (a) => D(n.id, { notes: a.target.value })
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "section-head", children: "Price History" }),
        /* @__PURE__ */ e.jsx("div", { className: "price-history", children: [...n.priceHistory || []].sort((a, t) => new Date(t.date) - new Date(a.date)).map((a, t, i) => {
          const l = i[t + 1], h = l ? a.price - l.price : null;
          return /* @__PURE__ */ e.jsxs("div", { className: "price-entry", children: [
            /* @__PURE__ */ e.jsx("span", { className: "price-entry-date", children: kr(a.date) }),
            /* @__PURE__ */ e.jsx("span", { className: "price-entry-val", children: ae(a.price) }),
            h !== null && /* @__PURE__ */ e.jsxs("span", { className: `price-entry-delta ${h < 0 ? "down" : "up"}`, style: { background: h < 0 ? "var(--green-dim)" : "var(--red-dim)", color: h < 0 ? "var(--green)" : "var(--red)" }, children: [
              h < 0 ? "▼" : "▲",
              " ",
              ae(Math.abs(h))
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "price-entry-note", children: a.note })
          ] }, t);
        }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "price-add-row", style: { marginTop: 10 }, children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              className: "form-input",
              style: { flex: 1, minWidth: 120 },
              placeholder: "New price (e.g. 479000)",
              value: Z.price,
              onChange: (a) => oe((t) => ({ ...t, price: a.target.value }))
            }
          ),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              className: "form-input",
              style: { flex: 2, minWidth: 160 },
              placeholder: "Note (e.g. Price reduced)",
              value: Z.note,
              onChange: (a) => oe((t) => ({ ...t, note: a.target.value }))
            }
          ),
          /* @__PURE__ */ e.jsx("button", { className: "btn btn-secondary btn-sm", onClick: () => be(n.id), children: "+ Log Price" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "section-head", children: "Share with Partner" }),
        /* @__PURE__ */ e.jsxs("div", { className: "share-panel", children: [
          /* @__PURE__ */ e.jsx("div", { className: "share-title", children: "Share this listing" }),
          /* @__PURE__ */ e.jsx("div", { className: "share-sub", children: "Generate a link with this listing's details, ratings, and notes — send it to a co-buyer or partner to review together." }),
          /* @__PURE__ */ e.jsxs("div", { className: "share-link-row", children: [
            /* @__PURE__ */ e.jsx("input", { className: "share-link-input", readOnly: !0, value: de(n) }),
            /* @__PURE__ */ e.jsx("button", { className: "btn btn-primary btn-sm", onClick: () => ve(n), children: S ? "✓ Copied!" : "Copy Link" }),
            S && /* @__PURE__ */ e.jsx("span", { className: "copied-badge", children: "✓ Copied" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "share-notice", children: "⚠ Note: Data is encoded in the URL and not stored on any server. The recipient will see a read-only snapshot." })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "modal-footer", children: [
          /* @__PURE__ */ e.jsx("button", { className: "btn btn-secondary btn-sm", onClick: () => {
            H((a) => a.includes(n.id) ? a.filter((t) => t !== n.id) : [...a, n.id]);
          }, children: _.includes(n.id) ? "✓ In Compare" : "+ Compare" }),
          /* @__PURE__ */ e.jsx("button", { className: "btn btn-danger btn-sm", onClick: () => B(n.id), children: "🗑 Delete" }),
          /* @__PURE__ */ e.jsx("button", { className: "btn btn-ghost btn-sm", style: { marginLeft: "auto" }, onClick: () => L(null), children: "Close" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Or as default
};
