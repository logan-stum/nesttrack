(function(w,H){typeof exports=="object"&&typeof module<"u"?module.exports=H(require("react")):typeof define=="function"&&define.amd?define(["react"],H):(w=typeof globalThis<"u"?globalThis:w||self,w.NestTrack=H(w.React))})(this,(function(w){"use strict";var H={exports:{}},oe={};var Pe;function Xe(){if(Pe)return oe;Pe=1;var d=w,F=Symbol.for("react.element"),y=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,Y=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z={key:!0,ref:!0,__self:!0,__source:!0};function g(m,v,U){var j,R={},L=null,D=null;U!==void 0&&(L=""+U),v.key!==void 0&&(L=""+v.key),v.ref!==void 0&&(D=v.ref);for(j in v)T.call(v,j)&&!z.hasOwnProperty(j)&&(R[j]=v[j]);if(m&&m.defaultProps)for(j in v=m.defaultProps,v)R[j]===void 0&&(R[j]=v[j]);return{$$typeof:F,type:m,key:L,ref:D,props:R,_owner:Y.current}}return oe.Fragment=y,oe.jsx=g,oe.jsxs=g,oe}var se={};var Ae;function Ze(){return Ae||(Ae=1,process.env.NODE_ENV!=="production"&&(function(){var d=w,F=Symbol.for("react.element"),y=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),m=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),O=Symbol.iterator,ke="@@iterator";function ne(r){if(r===null||typeof r!="object")return null;var o=O&&r[O]||r[ke];return typeof o=="function"?o:null}var V=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function C(r){{for(var o=arguments.length,s=new Array(o>1?o-1:0),c=1;c<o;c++)s[c-1]=arguments[c];me("error",r,s)}}function me(r,o,s){{var c=V.ReactDebugCurrentFrame,f=c.getStackAddendum();f!==""&&(o+="%s",s=s.concat([f]));var x=s.map(function(u){return String(u)});x.unshift("Warning: "+o),Function.prototype.apply.call(console[r],console,x)}}var ee=!1,ie=!1,le=!1,ce=!1,de=!1,q;q=Symbol.for("react.module.reference");function n(r){return!!(typeof r=="string"||typeof r=="function"||r===T||r===z||de||r===Y||r===U||r===j||ce||r===D||ee||ie||le||typeof r=="object"&&r!==null&&(r.$$typeof===L||r.$$typeof===R||r.$$typeof===g||r.$$typeof===m||r.$$typeof===v||r.$$typeof===q||r.getModuleId!==void 0))}function I(r,o,s){var c=r.displayName;if(c)return c;var f=o.displayName||o.name||"";return f!==""?s+"("+f+")":s}function pe(r){return r.displayName||"Context"}function $(r){if(r==null)return null;if(typeof r.tag=="number"&&C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case T:return"Fragment";case y:return"Portal";case z:return"Profiler";case Y:return"StrictMode";case U:return"Suspense";case j:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case m:var o=r;return pe(o)+".Consumer";case g:var s=r;return pe(s._context)+".Provider";case v:return I(r,r.render,"ForwardRef");case R:var c=r.displayName||null;return c!==null?c:$(r.type)||"Memo";case L:{var f=r,x=f._payload,u=f._init;try{return $(u(x))}catch{return null}}}return null}var B=Object.assign,G=0,ue,he,be,ve,ye,fe,je;function K(){}K.__reactDisabledLog=!0;function W(){{if(G===0){ue=console.log,he=console.info,be=console.warn,ve=console.error,ye=console.group,fe=console.groupCollapsed,je=console.groupEnd;var r={configurable:!0,enumerable:!0,value:K,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}G++}}function Se(){{if(G--,G===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:B({},r,{value:ue}),info:B({},r,{value:he}),warn:B({},r,{value:be}),error:B({},r,{value:ve}),group:B({},r,{value:ye}),groupCollapsed:B({},r,{value:fe}),groupEnd:B({},r,{value:je})})}G<0&&C("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var a=V.ReactCurrentDispatcher,t;function i(r,o,s){{if(t===void 0)try{throw Error()}catch(f){var c=f.stack.trim().match(/\n( *(at )?)/);t=c&&c[1]||""}return`
`+t+r}}var l=!1,h;{var b=typeof WeakMap=="function"?WeakMap:Map;h=new b}function k(r,o){if(!r||l)return"";{var s=h.get(r);if(s!==void 0)return s}var c;l=!0;var f=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var x;x=a.current,a.current=null,W();try{if(o){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(_){c=_}Reflect.construct(r,[],u)}else{try{u.call()}catch(_){c=_}r.call(u.prototype)}}else{try{throw Error()}catch(_){c=_}r()}}catch(_){if(_&&c&&typeof _.stack=="string"){for(var p=_.stack.split(`
`),E=c.stack.split(`
`),N=p.length-1,S=E.length-1;N>=1&&S>=0&&p[N]!==E[S];)S--;for(;N>=1&&S>=0;N--,S--)if(p[N]!==E[S]){if(N!==1||S!==1)do if(N--,S--,S<0||p[N]!==E[S]){var A=`
`+p[N].replace(" at new "," at ");return r.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",r.displayName)),typeof r=="function"&&h.set(r,A),A}while(N>=1&&S>=0);break}}}finally{l=!1,a.current=x,Se(),Error.prepareStackTrace=f}var te=r?r.displayName||r.name:"",Z=te?i(te):"";return typeof r=="function"&&h.set(r,Z),Z}function P(r,o,s){return k(r,!1)}function ge(r){var o=r.prototype;return!!(o&&o.isReactComponent)}function re(r,o,s){if(r==null)return"";if(typeof r=="function")return k(r,ge(r));if(typeof r=="string")return i(r);switch(r){case U:return i("Suspense");case j:return i("SuspenseList")}if(typeof r=="object")switch(r.$$typeof){case v:return P(r.render);case R:return re(r.type,o,s);case L:{var c=r,f=c._payload,x=c._init;try{return re(x(f),o,s)}catch{}}}return""}var X=Object.prototype.hasOwnProperty,Ne={},we=V.ReactDebugCurrentFrame;function M(r){if(r){var o=r._owner,s=re(r.type,r._source,o?o.type:null);we.setExtraStackFrame(s)}else we.setExtraStackFrame(null)}function Ce(r,o,s,c,f){{var x=Function.call.bind(X);for(var u in r)if(x(r,u)){var p=void 0;try{if(typeof r[u]!="function"){var E=Error((c||"React class")+": "+s+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof r[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw E.name="Invariant Violation",E}p=r[u](o,u,c,s,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(N){p=N}p&&!(p instanceof Error)&&(M(f),C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",s,u,typeof p),M(null)),p instanceof Error&&!(p.message in Ne)&&(Ne[p.message]=!0,M(f),C("Failed %s type: %s",s,p.message),M(null))}}}var J=Array.isArray;function Re(r){return J(r)}function lr(r){{var o=typeof Symbol=="function"&&Symbol.toStringTag,s=o&&r[Symbol.toStringTag]||r.constructor.name||"Object";return s}}function cr(r){try{return Ue(r),!1}catch{return!0}}function Ue(r){return""+r}function $e(r){if(cr(r))return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",lr(r)),Ue(r)}var Be=V.ReactCurrentOwner,dr={key:!0,ref:!0,__self:!0,__source:!0},Me,Ye;function pr(r){if(X.call(r,"ref")){var o=Object.getOwnPropertyDescriptor(r,"ref").get;if(o&&o.isReactWarning)return!1}return r.ref!==void 0}function ur(r){if(X.call(r,"key")){var o=Object.getOwnPropertyDescriptor(r,"key").get;if(o&&o.isReactWarning)return!1}return r.key!==void 0}function fr(r,o){typeof r.ref=="string"&&Be.current}function gr(r,o){{var s=function(){Me||(Me=!0,C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",o))};s.isReactWarning=!0,Object.defineProperty(r,"key",{get:s,configurable:!0})}}function xr(r,o){{var s=function(){Ye||(Ye=!0,C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",o))};s.isReactWarning=!0,Object.defineProperty(r,"ref",{get:s,configurable:!0})}}var mr=function(r,o,s,c,f,x,u){var p={$$typeof:F,type:r,key:o,ref:s,props:u,_owner:x};return p._store={},Object.defineProperty(p._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(p,"_self",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.defineProperty(p,"_source",{configurable:!1,enumerable:!1,writable:!1,value:f}),Object.freeze&&(Object.freeze(p.props),Object.freeze(p)),p};function hr(r,o,s,c,f){{var x,u={},p=null,E=null;s!==void 0&&($e(s),p=""+s),ur(o)&&($e(o.key),p=""+o.key),pr(o)&&(E=o.ref,fr(o,f));for(x in o)X.call(o,x)&&!dr.hasOwnProperty(x)&&(u[x]=o[x]);if(r&&r.defaultProps){var N=r.defaultProps;for(x in N)u[x]===void 0&&(u[x]=N[x])}if(p||E){var S=typeof r=="function"?r.displayName||r.name||"Unknown":r;p&&gr(u,S),E&&xr(u,S)}return mr(r,p,E,f,c,Be.current,u)}}var Ee=V.ReactCurrentOwner,We=V.ReactDebugCurrentFrame;function ae(r){if(r){var o=r._owner,s=re(r.type,r._source,o?o.type:null);We.setExtraStackFrame(s)}else We.setExtraStackFrame(null)}var _e;_e=!1;function Oe(r){return typeof r=="object"&&r!==null&&r.$$typeof===F}function He(){{if(Ee.current){var r=$(Ee.current.type);if(r)return`

Check the render method of \``+r+"`."}return""}}function br(r){return""}var Ve={};function vr(r){{var o=He();if(!o){var s=typeof r=="string"?r:r.displayName||r.name;s&&(o=`

Check the top-level render call using <`+s+">.")}return o}}function qe(r,o){{if(!r._store||r._store.validated||r.key!=null)return;r._store.validated=!0;var s=vr(o);if(Ve[s])return;Ve[s]=!0;var c="";r&&r._owner&&r._owner!==Ee.current&&(c=" It was passed a child from "+$(r._owner.type)+"."),ae(r),C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',s,c),ae(null)}}function Ge(r,o){{if(typeof r!="object")return;if(Re(r))for(var s=0;s<r.length;s++){var c=r[s];Oe(c)&&qe(c,o)}else if(Oe(r))r._store&&(r._store.validated=!0);else if(r){var f=ne(r);if(typeof f=="function"&&f!==r.entries)for(var x=f.call(r),u;!(u=x.next()).done;)Oe(u.value)&&qe(u.value,o)}}}function yr(r){{var o=r.type;if(o==null||typeof o=="string")return;var s;if(typeof o=="function")s=o.propTypes;else if(typeof o=="object"&&(o.$$typeof===v||o.$$typeof===R))s=o.propTypes;else return;if(s){var c=$(o);Ce(s,r.props,"prop",c,r)}else if(o.PropTypes!==void 0&&!_e){_e=!0;var f=$(o);C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",f||"Unknown")}typeof o.getDefaultProps=="function"&&!o.getDefaultProps.isReactClassApproved&&C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function jr(r){{for(var o=Object.keys(r.props),s=0;s<o.length;s++){var c=o[s];if(c!=="children"&&c!=="key"){ae(r),C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",c),ae(null);break}}r.ref!==null&&(ae(r),C("Invalid attribute `ref` supplied to `React.Fragment`."),ae(null))}}var Je={};function Ke(r,o,s,c,f,x){{var u=n(r);if(!u){var p="";(r===void 0||typeof r=="object"&&r!==null&&Object.keys(r).length===0)&&(p+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var E=br();E?p+=E:p+=He();var N;r===null?N="null":Re(r)?N="array":r!==void 0&&r.$$typeof===F?(N="<"+($(r.type)||"Unknown")+" />",p=" Did you accidentally export a JSX literal instead of a component?"):N=typeof r,C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",N,p)}var S=hr(r,o,s,f,x);if(S==null)return S;if(u){var A=o.children;if(A!==void 0)if(c)if(Re(A)){for(var te=0;te<A.length;te++)Ge(A[te],r);Object.freeze&&Object.freeze(A)}else C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ge(A,r)}if(X.call(o,"key")){var Z=$(r),_=Object.keys(o).filter(function(Rr){return Rr!=="key"}),Te=_.length>0?"{key: someKey, "+_.join(": ..., ")+": ...}":"{key: someKey}";if(!Je[Z+Te]){var Cr=_.length>0?"{"+_.join(": ..., ")+": ...}":"{}";C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Te,Z,Cr,Z),Je[Z+Te]=!0}}return r===T?jr(S):yr(S),S}}function Nr(r,o,s){return Ke(r,o,s,!0)}function wr(r,o,s){return Ke(r,o,s,!1)}var kr=wr,Sr=Nr;se.Fragment=T,se.jsx=kr,se.jsxs=Sr})()),se}var Fe;function Qe(){return Fe||(Fe=1,process.env.NODE_ENV==="production"?H.exports=Xe():H.exports=Ze()),H.exports}var e=Qe();const er="@import url('https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Fira+Code:wght@400;500&family=Lato:wght@300;400;700&display=swap');",rr=`
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
`,Q=d=>d?`$${Number(d).toLocaleString()}`:"—",ar=d=>new Date(d).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),tr=d=>{if(!d||d.length<2)return null;const F=[...d].sort((T,Y)=>new Date(T.date)-new Date(Y.date));return F[F.length-1].price-F[0].price},ze=[{id:1,address:"2847 Maple Grove Drive, Austin, TX 78702",price:485e3,beds:3,baths:2,sqft:1840,yearBuilt:1998,url:"https://zillow.com",source:"Zillow",status:"Active",notes:"Great neighborhood, walkable. Master bath needs updating. Seller may negotiate on closing costs.",imageUrl:"",lotSize:"0.18 ac",hoaFees:"None",taxes:"$8,200/yr",favorited:!0,pros:["Quiet street","Updated kitchen","Big backyard","Walkable to shops"],cons:["No garage","Small master bath","Busy road nearby"],ratings:{overall:4,location:5,value:3,condition:4},priceHistory:[{date:"2025-11-01",price:51e4,note:"Listed"},{date:"2025-12-15",price:499e3,note:"Price drop"},{date:"2026-01-20",price:485e3,note:"Reduced again"}]},{id:2,address:"518 Rosewood Lane, Austin, TX 78745",price:529e3,beds:4,baths:2.5,sqft:2100,yearBuilt:2005,url:"https://redfin.com",source:"Redfin",status:"Active",notes:"Newer build. Good school district. Commute ~25min. HOA is strict about landscaping.",imageUrl:"",lotSize:"0.22 ac",hoaFees:"$120/mo",taxes:"$9,400/yr",favorited:!1,pros:["New roof (2022)","4 bedrooms","Top school district"],cons:["HOA fees","Far from downtown","Small yard"],ratings:{overall:3,location:3,value:3,condition:5},priceHistory:[{date:"2025-10-10",price:545e3,note:"Listed"},{date:"2026-01-05",price:529e3,note:"Price drop"}]}],Le=["Active","Pending","Sold","Off Market"],xe={address:"",price:"",beds:"",baths:"",sqft:"",yearBuilt:"",url:"",source:"",status:"Active",notes:"",imageUrl:"",lotSize:"",hoaFees:"",taxes:""},De="nesttrack_listings",Ie="nesttrack_compare",or=()=>{try{const d=localStorage.getItem(De);return d?JSON.parse(d):ze}catch{return ze}},sr=d=>{try{localStorage.setItem(De,JSON.stringify(d))}catch{}},nr=()=>{try{const d=localStorage.getItem(Ie);return d?JSON.parse(d):[1,2]}catch{return[1,2]}};function ir(){const[d,F]=w.useState(or),[y,T]=w.useState("all"),[Y,z]=w.useState(!1),[g,m]=w.useState(xe),[v,U]=w.useState(""),[j,R]=w.useState(null),[L,D]=w.useState(null),[O,ke]=w.useState(nr),[ne,V]=w.useState("All"),[C,me]=w.useState(!1),[ee,ie]=w.useState({price:"",note:""}),le=w.useRef({}),ce=w.useRef({}),de=a=>{F(t=>{const i=typeof a=="function"?a(t):a;return sr(i),i})},q=a=>{ke(t=>{const i=typeof a=="function"?a(t):a;try{localStorage.setItem(Ie,JSON.stringify(i))}catch{}return i})},n=d.find(a=>a.id===L),I=(a,t)=>de(i=>i.map(l=>l.id===a?{...l,...t}:l)),pe=async()=>{if(!v.trim())return;R("loading");const a="https://nesttrack-production.up.railway.app/";try{const[t,i]=await Promise.all([fetch(`${a}/api/fetch-listing?url=${encodeURIComponent(v)}`),fetch(`${a}/api/fetch-photos?url=${encodeURIComponent(v)}`)]),l=await t.json(),h=await i.json();if(console.log("PHOTO DATA:",JSON.stringify(h,null,2)),!l.success||!l.property)throw new Error("No property data");const b=l.property,k=b.address,P=`${k.streetAddress}, ${k.city}, ${k.state} ${k.zipcode}`,ge=b.livingArea?.value||0,re=b.lotArea?`${b.lotArea.value.toFixed(2)} ${b.lotArea.units}`:"",X=b.facts_features?.financial_hoa?.hoaFee||"None",Ne=b.propertyTaxRate?`${b.propertyTaxRate}% rate`:"",we=b.homeStatus==="FOR_SALE"?"Active":b.homeStatus==="PENDING"?"Pending":b.homeStatus==="SOLD"?"Sold":"Active",M=h?.images||h?.photos||h?.data||[],Ce=Array.isArray(M)&&M.length>0&&(M[0]?.url||M[0]?.src||M[0]?.mixedSources?.jpeg?.[0]?.url)||"";m(J=>({...J,address:P,price:b.price||J.price,beds:b.bedrooms||J.beds,baths:b.bathrooms||J.baths,sqft:ge,yearBuilt:b.yearBuilt||J.yearBuilt,lotSize:re,hoaFees:X,taxes:Ne,status:we,url:v,source:"Zillow",imageUrl:Ce||J.imageUrl,notes:b.description?b.description.slice(0,300)+"...":""})),R("success"),z(!0)}catch(t){console.error("Fetch error:",t),R("error"),m(i=>({...i,url:v})),z(!0)}},$=()=>{if(!g.address||!g.price)return;const a=new Date().toISOString().split("T")[0],t=Number(String(g.price).replace(/[^0-9.]/g,"")),i={...xe,...g,id:Date.now(),price:t,beds:Number(g.beds)||0,baths:Number(g.baths)||0,sqft:Number(g.sqft)||0,yearBuilt:Number(g.yearBuilt)||0,favorited:!1,pros:[],cons:[],ratings:{overall:0,location:0,value:0,condition:0},priceHistory:[{date:a,price:t,note:"Listed"}]};de(l=>[i,...l]),m(xe),U(""),R(null),z(!1)},B=a=>{de(t=>t.filter(i=>i.id!==a)),L===a&&D(null),q(t=>t.filter(i=>i!==a))},G=a=>{const t=le.current[a]?.value?.trim();if(!t)return;const i=d.find(l=>l.id===a);I(a,{pros:[...i.pros||[],t]}),le.current[a].value=""},ue=a=>{const t=ce.current[a]?.value?.trim();if(!t)return;const i=d.find(l=>l.id===a);I(a,{cons:[...i.cons||[],t]}),ce.current[a].value=""},he=(a,t)=>{const i=d.find(l=>l.id===a);I(a,{pros:i.pros.filter((l,h)=>h!==t)})},be=(a,t)=>{const i=d.find(l=>l.id===a);I(a,{cons:i.cons.filter((l,h)=>h!==t)})},ve=(a,t,i)=>{const l=d.find(h=>h.id===a);I(a,{ratings:{...l.ratings,[t]:i}})},ye=a=>{const t=Number(String(ee.price).replace(/[^0-9.]/g,""));if(!t)return;const i=d.find(h=>h.id===a),l={date:new Date().toISOString().split("T")[0],price:t,note:ee.note||""};I(a,{price:t,priceHistory:[...i.priceHistory||[],l]}),ie({price:"",note:""})},fe=a=>{const t=btoa(JSON.stringify({address:a.address,price:a.price,beds:a.beds,baths:a.baths,sqft:a.sqft,pros:a.pros,cons:a.cons,notes:a.notes,ratings:a.ratings,source:a.source,url:a.url}));return`${window.location.origin}${window.location.pathname}?share=${t}`},je=a=>{const t=fe(a);navigator.clipboard.writeText(t).then(()=>{me(!0),setTimeout(()=>me(!1),2500)})},K=y==="favorites"?d.filter(a=>a.favorited):y==="compare"||ne==="All"?d:d.filter(a=>a.status===ne),W=d.filter(a=>O.includes(a.id)),Se=({id:a,rkey:t,val:i})=>e.jsx("div",{className:"stars",children:[1,2,3,4,5].map(l=>e.jsx("span",{className:`star${l<=i?" lit":""}`,onClick:()=>ve(a,t,l),style:{color:l<=i?"#f0a94a":"#2a3040"},children:"★"},l))});return e.jsxs("div",{children:[e.jsxs("style",{children:[er,rr]}),e.jsxs("header",{className:"header",children:[e.jsxs("div",{className:"logo",children:[e.jsxs("span",{children:["NEST",e.jsx("span",{className:"logo-dot",children:"·"}),"TRACK"]}),e.jsx("span",{className:"logo-tag",children:"beta"})]}),e.jsxs("nav",{className:"nav",children:[e.jsxs("button",{className:`nav-btn${y==="all"?" active":""}`,onClick:()=>T("all"),children:["All ",e.jsx("span",{className:"nav-badge",children:d.length})]}),e.jsxs("button",{className:`nav-btn${y==="favorites"?" active":""}`,onClick:()=>T("favorites"),children:["⭐ Saved ",e.jsx("span",{className:"nav-badge",children:d.filter(a=>a.favorited).length})]}),e.jsxs("button",{className:`nav-btn${y==="compare"?" active":""}`,onClick:()=>T("compare"),children:["⚖ Compare ",e.jsx("span",{className:"nav-badge",children:O.length})]})]})]}),e.jsxs("main",{className:"main",children:[(y==="all"||y==="favorites")&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"page-head",children:[e.jsxs("div",{children:[e.jsx("div",{className:"page-title",children:y==="all"?"Your Listings":"Saved Favorites"}),e.jsx("div",{className:"page-sub",children:y==="all"?"Track, annotate, and compare homes you're considering.":"Homes you've starred for closer review."})]}),y==="all"&&e.jsx("div",{className:"page-actions",children:e.jsx("button",{className:"btn btn-primary",onClick:()=>z(a=>!a),children:"+ Add Listing"})})]}),y==="all"&&Y&&e.jsxs("div",{className:"add-panel",children:[e.jsxs("div",{className:"add-panel-header",onClick:()=>z(a=>!a),children:[e.jsxs("div",{className:"add-panel-title",children:[e.jsx("span",{style:{color:"var(--teal)"},children:"+"})," New Listing"]}),e.jsx("span",{className:`panel-caret${Y?" open":""}`,children:"▼"})]}),e.jsxs("div",{className:"add-panel-body",children:[e.jsxs("div",{className:"fetch-row",children:[e.jsx("input",{className:"fetch-input",placeholder:"Paste a Zillow / Redfin / Realtor URL to auto-fill…",value:v,onChange:a=>U(a.target.value),onKeyDown:a=>a.key==="Enter"&&pe()}),e.jsx("button",{className:"btn btn-primary",onClick:pe,disabled:j==="loading",children:j==="loading"?"…":"↓ Fetch"}),j&&e.jsxs("span",{className:`fetch-status ${j}`,children:[j==="loading"&&"Extracting…",j==="success"&&"✓ Filled below",j==="error"&&"Fill manually ↓"]})]}),e.jsxs("div",{className:"fetch-divider",children:[e.jsx("div",{className:"fetch-divider-line"}),e.jsx("span",{className:"fetch-divider-text",children:"or fill manually"}),e.jsx("div",{className:"fetch-divider-line"})]}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"form-group fg-half",children:[e.jsx("label",{className:"form-label",children:"Address *"}),e.jsx("input",{className:"form-input",placeholder:"123 Main St, City, State ZIP",value:g.address,onChange:a=>m(t=>({...t,address:a.target.value}))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Price *"}),e.jsx("input",{className:"form-input",placeholder:"$450,000",value:g.price,onChange:a=>m(t=>({...t,price:a.target.value}))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Status"}),e.jsx("select",{className:"form-input",value:g.status,onChange:a=>m(t=>({...t,status:a.target.value})),children:Le.map(a=>e.jsx("option",{children:a},a))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Beds"}),e.jsx("input",{className:"form-input",placeholder:"3",type:"number",value:g.beds,onChange:a=>m(t=>({...t,beds:a.target.value}))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Baths"}),e.jsx("input",{className:"form-input",placeholder:"2",type:"number",step:"0.5",value:g.baths,onChange:a=>m(t=>({...t,baths:a.target.value}))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Sq Ft"}),e.jsx("input",{className:"form-input",placeholder:"1,800",value:g.sqft,onChange:a=>m(t=>({...t,sqft:a.target.value}))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Year Built"}),e.jsx("input",{className:"form-input",placeholder:"2001",value:g.yearBuilt,onChange:a=>m(t=>({...t,yearBuilt:a.target.value}))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"HOA Fees"}),e.jsx("input",{className:"form-input",placeholder:"None / $120/mo",value:g.hoaFees,onChange:a=>m(t=>({...t,hoaFees:a.target.value}))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Property Taxes"}),e.jsx("input",{className:"form-input",placeholder:"$8,000/yr",value:g.taxes,onChange:a=>m(t=>({...t,taxes:a.target.value}))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Lot Size"}),e.jsx("input",{className:"form-input",placeholder:"0.2 ac",value:g.lotSize,onChange:a=>m(t=>({...t,lotSize:a.target.value}))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Source"}),e.jsx("input",{className:"form-input",placeholder:"Zillow, Redfin…",value:g.source,onChange:a=>m(t=>({...t,source:a.target.value}))})]}),e.jsxs("div",{className:"form-group fg-half",children:[e.jsx("label",{className:"form-label",children:"Listing URL"}),e.jsx("input",{className:"form-input",placeholder:"https://…",value:g.url,onChange:a=>m(t=>({...t,url:a.target.value}))})]}),e.jsxs("div",{className:"form-group fg-half",children:[e.jsx("label",{className:"form-label",children:"Image URL (optional)"}),e.jsx("input",{className:"form-input",placeholder:"https://…",value:g.imageUrl,onChange:a=>m(t=>({...t,imageUrl:a.target.value}))})]}),e.jsxs("div",{className:"form-group fg-full",children:[e.jsx("label",{className:"form-label",children:"Initial Notes"}),e.jsx("textarea",{className:"form-input",rows:2,placeholder:"First impressions, things to follow up on…",value:g.notes,onChange:a=>m(t=>({...t,notes:a.target.value}))})]})]}),e.jsxs("div",{className:"form-actions",children:[e.jsx("button",{className:"btn btn-primary",onClick:$,children:"Add Listing"}),e.jsx("button",{className:"btn btn-secondary",onClick:()=>{m(xe),U(""),R(null),z(!1)},children:"Cancel"})]})]})]}),y==="all"&&e.jsxs("div",{className:"filter-bar",children:[["All",...Le].map(a=>e.jsx("button",{className:`filter-chip${ne===a?" active":""}`,onClick:()=>V(a),children:a},a)),e.jsx("div",{className:"filter-spacer"}),e.jsxs("span",{className:"listings-count",children:[K.length," listing",K.length!==1?"s":""]})]}),K.length===0?e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"empty-icon",children:y==="favorites"?"⭐":"🏠"}),e.jsx("div",{className:"empty-title",children:y==="favorites"?"No favorites yet":"No listings"}),e.jsx("div",{className:"empty-sub",children:y==="favorites"?"Star a listing to save it here.":"Add a listing above to get started."})]}):e.jsx("div",{className:"listings-grid",children:K.map(a=>{const t=tr(a.priceHistory);return e.jsxs("div",{className:`card${a.favorited?" favorited":""}${O.includes(a.id)?" in-compare":""}`,onClick:()=>D(a.id),children:[e.jsxs("div",{className:"card-img",children:[a.imageUrl?e.jsx("img",{src:a.imageUrl,alt:"",onError:i=>i.target.style.display="none"}):e.jsx("div",{className:"card-img-placeholder",children:"⌂"}),e.jsx("div",{className:"card-img-overlay"}),e.jsxs("div",{className:"card-img-left",children:[e.jsx("span",{className:`status-badge status-${a.status.replace(" ","")}`,children:a.status}),a.source&&e.jsx("span",{className:"source-badge",children:a.source})]}),e.jsxs("div",{className:"card-img-actions",onClick:i=>i.stopPropagation(),children:[e.jsx("div",{className:`icon-btn${a.favorited?" active":""}`,title:"Favorite",onClick:()=>I(a.id,{favorited:!a.favorited}),children:a.favorited?"⭐":"☆"}),e.jsx("div",{className:`icon-btn${O.includes(a.id)?" active":""}`,title:"Add to compare",style:O.includes(a.id)?{background:"var(--teal-dim)",borderColor:"rgba(62,207,178,0.4)"}:{},onClick:()=>q(i=>i.includes(a.id)?i.filter(l=>l!==a.id):[...i,a.id]),children:"⚖"})]})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"card-price-row",children:[e.jsx("div",{className:"card-price",children:Q(a.price)}),t!==null&&e.jsxs("span",{className:`price-delta ${t<0?"down":"up"}`,children:[t<0?"▼":"▲"," ",Q(Math.abs(t))]})]}),e.jsx("div",{className:"card-address",children:a.address}),e.jsxs("div",{className:"card-specs",children:[a.beds>0&&e.jsxs("span",{className:"spec",children:[e.jsx("span",{className:"spec-icon",children:"🛏"}),a.beds,"bd"]}),a.baths>0&&e.jsxs("span",{className:"spec",children:[e.jsx("span",{className:"spec-icon",children:"🚿"}),a.baths,"ba"]}),a.sqft>0&&e.jsxs("span",{className:"spec",children:[e.jsx("span",{className:"spec-icon",children:"◻"}),Number(a.sqft).toLocaleString(),"sf"]}),a.yearBuilt>0&&e.jsxs("span",{className:"spec",children:[e.jsx("span",{className:"spec-icon",children:"🗓"}),a.yearBuilt]})]}),a.ratings?.overall>0&&e.jsx("div",{className:"card-score-row",children:e.jsx("div",{className:"score-pills",children:[["overall","★"],["location","📍"],["value","💲"],["condition","🔧"]].map(([i,l])=>a.ratings[i]>0&&e.jsxs("span",{className:"score-pill rated",title:i,children:[l," ",a.ratings[i]]},i))})}),(a.pros?.length>0||a.cons?.length>0)&&e.jsxs("div",{className:"pc-tags",children:[a.pros?.slice(0,2).map((i,l)=>e.jsxs("span",{className:"tag pro",children:["✓ ",i]},l)),a.cons?.slice(0,2).map((i,l)=>e.jsxs("span",{className:"tag con",children:["✗ ",i]},l)),a.pros?.length+a.cons?.length>4&&e.jsxs("span",{className:"tag more",children:["+",a.pros.length+a.cons.length-4]})]})]}),e.jsxs("div",{className:"card-footer",onClick:i=>i.stopPropagation(),children:[e.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>D(a.id),children:"Open"}),a.url&&e.jsxs("a",{href:a.url,target:"_blank",rel:"noopener",className:"btn btn-ghost btn-sm",children:["↗ ",a.source||"Link"]}),e.jsx("button",{className:"btn btn-danger btn-sm",style:{marginLeft:"auto"},onClick:()=>B(a.id),children:"🗑"})]})]},a.id)})})]}),y==="compare"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"page-head",children:e.jsxs("div",{children:[e.jsx("div",{className:"page-title",children:"Side-by-Side Compare"}),e.jsx("div",{className:"page-sub",children:"Select homes below to compare key details at a glance."})]})}),e.jsxs("div",{className:"compare-select",children:[e.jsx("span",{className:"compare-section-label",children:"Select:"}),d.map(a=>e.jsxs("div",{className:`compare-pill${O.includes(a.id)?" on":""}`,onClick:()=>q(t=>t.includes(a.id)?t.filter(i=>i!==a.id):[...t,a.id]),children:[O.includes(a.id)?"✓ ":"",a.address.split(",")[0]]},a.id))]}),W.length<2?e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"empty-icon",children:"⚖"}),e.jsx("div",{className:"empty-title",children:"Select 2 or more listings"}),e.jsx("div",{className:"empty-sub",children:"Use the chips above to pick which homes to compare."})]}):e.jsx("div",{className:"compare-wrap",children:e.jsxs("table",{className:"compare-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Detail"}),W.map(a=>e.jsx("th",{children:a.address.split(",")[0]},a.id))]})}),e.jsx("tbody",{children:[["Price",t=>Q(t.price),!0],["Status",t=>t.status],["Beds / Baths",t=>`${t.beds||"—"} bd / ${t.baths||"—"} ba`],["Sq Ft",t=>t.sqft?`${Number(t.sqft).toLocaleString()}`:"—",!0],["Year Built",t=>t.yearBuilt||"—",!0],["Lot Size",t=>t.lotSize||"—"],["HOA Fees",t=>t.hoaFees||"—"],["Property Taxes",t=>t.taxes||"—"],["Overall ★",t=>t.ratings?.overall?"★".repeat(t.ratings.overall):"—",!0],["Location ★",t=>t.ratings?.location?"★".repeat(t.ratings.location):"—",!0],["Value ★",t=>t.ratings?.value?"★".repeat(t.ratings.value):"—",!0],["Condition ★",t=>t.ratings?.condition?"★".repeat(t.ratings.condition):"—",!0],["Pros",t=>t.pros?.join(" · ")||"—"],["Cons",t=>t.cons?.join(" · ")||"—"],["Price History",t=>t.priceHistory?.length>1?`${t.priceHistory.length} entries`:"—"],["Source",t=>t.source||"—"],["Notes",t=>t.notes?t.notes.slice(0,80)+(t.notes.length>80?"…":""):"—"]].map(([t,i,l])=>{const h=W.map(k=>i(k));let b=-1;if(l&&t==="Price"){const k=W.map(P=>P.price||1/0);b=k.indexOf(Math.min(...k))}else if(l&&t.includes("★")){const k=W.map(P=>{const ge=t.split(" ")[0].toLowerCase();return P.ratings?.[ge]||0});b=k.indexOf(Math.max(...k))}else if(l&&t==="Sq Ft"){const k=W.map(P=>P.sqft||0);b=k.indexOf(Math.max(...k))}return e.jsxs("tr",{children:[e.jsx("td",{children:t}),W.map((k,P)=>e.jsx("td",{className:P===b?"compare-best":"",children:h[P]},k.id))]},t)})})]})})]})]}),L&&n&&e.jsx("div",{className:"overlay",onClick:()=>D(null),children:e.jsxs("div",{className:"modal",onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"modal-hero",children:[n.imageUrl?e.jsx("img",{src:n.imageUrl,alt:"",onError:a=>a.target.style.display="none"}):e.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg,#1a1e26,#13161b)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:64,opacity:.15,fontFamily:"Syne"},children:"⌂"}),e.jsx("div",{className:"modal-hero-overlay"}),e.jsx("div",{className:"modal-hero-content",children:e.jsx("div",{className:"modal-price",children:Q(n.price)})}),e.jsx("button",{className:"modal-close-btn",onClick:()=>D(null),children:"✕"})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12},children:[e.jsxs("div",{children:[e.jsx("div",{className:"modal-address",children:n.address}),e.jsxs("div",{style:{display:"flex",gap:6,marginTop:8},children:[e.jsx("span",{className:`status-badge status-${n.status.replace(" ","")}`,children:n.status}),n.source&&e.jsx("span",{className:"source-badge",children:n.source})]})]}),e.jsxs("div",{style:{display:"flex",gap:7,flexShrink:0},children:[e.jsx("div",{className:`icon-btn${n.favorited?" active":""}`,style:{width:36,height:36,fontSize:16},onClick:()=>I(n.id,{favorited:!n.favorited}),children:n.favorited?"⭐":"☆"}),e.jsx("div",{className:`icon-btn${O.includes(n.id)?" active":""}`,style:O.includes(n.id)?{width:36,height:36,fontSize:16,background:"var(--teal-dim)",borderColor:"rgba(62,207,178,0.4)"}:{width:36,height:36,fontSize:16},onClick:()=>q(a=>a.includes(n.id)?a.filter(t=>t!==n.id):[...a,n.id]),children:"⚖"})]})]}),e.jsxs("div",{className:"modal-meta",children:[n.beds>0&&e.jsxs("span",{className:"modal-spec",children:["🛏 ",n.beds," beds"]}),n.baths>0&&e.jsxs("span",{className:"modal-spec",children:["🚿 ",n.baths," baths"]}),n.sqft>0&&e.jsxs("span",{className:"modal-spec",children:["◻ ",Number(n.sqft).toLocaleString()," sqft"]}),n.yearBuilt>0&&e.jsxs("span",{className:"modal-spec",children:["🗓 ",n.yearBuilt]}),n.lotSize&&e.jsxs("span",{className:"modal-spec",children:["🌿 ",n.lotSize]}),n.hoaFees&&e.jsxs("span",{className:"modal-spec",children:["🏘 HOA: ",n.hoaFees]}),n.taxes&&e.jsxs("span",{className:"modal-spec",children:["💰 ",n.taxes,"/yr taxes"]}),n.url&&e.jsxs("a",{href:n.url,target:"_blank",rel:"noopener",className:"modal-link",children:["↗ View on ",n.source||"site"]})]}),e.jsx("div",{className:"section-head",children:"Ratings"}),e.jsx("div",{className:"ratings-grid",children:[["overall","Overall"],["location","Location"],["value","Value"],["condition","Condition"]].map(([a,t])=>e.jsxs("div",{className:"rating-row",children:[e.jsx("span",{className:"rating-label",children:t}),e.jsx(Se,{id:n.id,rkey:a,val:n.ratings?.[a]||0})]},a))}),e.jsx("div",{className:"section-head",children:"Pros & Cons"}),e.jsxs("div",{className:"pc-grid",children:[e.jsxs("div",{className:"pc-col pros",children:[e.jsxs("div",{className:"pc-col-head pros",children:["✅ Pros (",n.pros?.length||0,")"]}),n.pros?.map((a,t)=>e.jsxs("div",{className:"pc-item",children:[e.jsx("span",{className:"pc-icon",style:{color:"var(--green)"},children:"✓"}),e.jsx("span",{style:{flex:1},children:a}),e.jsx("button",{className:"pc-del",onClick:()=>he(n.id,t),children:"✕"})]},t)),e.jsxs("div",{className:"pc-add",children:[e.jsx("input",{className:"pc-add-input",ref:a=>le.current[n.id]=a,placeholder:"Add a pro…",onKeyDown:a=>a.key==="Enter"&&G(n.id)}),e.jsx("button",{className:"btn-add-pro",onClick:()=>G(n.id),children:"+"})]})]}),e.jsxs("div",{className:"pc-col cons",children:[e.jsxs("div",{className:"pc-col-head cons",children:["❌ Cons (",n.cons?.length||0,")"]}),n.cons?.map((a,t)=>e.jsxs("div",{className:"pc-item",children:[e.jsx("span",{className:"pc-icon",style:{color:"var(--red)"},children:"✗"}),e.jsx("span",{style:{flex:1},children:a}),e.jsx("button",{className:"pc-del",onClick:()=>be(n.id,t),children:"✕"})]},t)),e.jsxs("div",{className:"pc-add",children:[e.jsx("input",{className:"pc-add-input",ref:a=>ce.current[n.id]=a,placeholder:"Add a con…",onKeyDown:a=>a.key==="Enter"&&ue(n.id)}),e.jsx("button",{className:"btn-add-con",onClick:()=>ue(n.id),children:"+"})]})]})]}),e.jsx("div",{className:"section-head",children:"Notes"}),e.jsx("textarea",{className:"notes-ta",placeholder:"Anything you want to remember — impressions, follow-up questions, things the agent said…",value:n.notes||"",onChange:a=>I(n.id,{notes:a.target.value})}),e.jsx("div",{className:"section-head",children:"Price History"}),e.jsx("div",{className:"price-history",children:[...n.priceHistory||[]].sort((a,t)=>new Date(t.date)-new Date(a.date)).map((a,t,i)=>{const l=i[t+1],h=l?a.price-l.price:null;return e.jsxs("div",{className:"price-entry",children:[e.jsx("span",{className:"price-entry-date",children:ar(a.date)}),e.jsx("span",{className:"price-entry-val",children:Q(a.price)}),h!==null&&e.jsxs("span",{className:`price-entry-delta ${h<0?"down":"up"}`,style:{background:h<0?"var(--green-dim)":"var(--red-dim)",color:h<0?"var(--green)":"var(--red)"},children:[h<0?"▼":"▲"," ",Q(Math.abs(h))]}),e.jsx("span",{className:"price-entry-note",children:a.note})]},t)})}),e.jsxs("div",{className:"price-add-row",style:{marginTop:10},children:[e.jsx("input",{className:"form-input",style:{flex:1,minWidth:120},placeholder:"New price (e.g. 479000)",value:ee.price,onChange:a=>ie(t=>({...t,price:a.target.value}))}),e.jsx("input",{className:"form-input",style:{flex:2,minWidth:160},placeholder:"Note (e.g. Price reduced)",value:ee.note,onChange:a=>ie(t=>({...t,note:a.target.value}))}),e.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>ye(n.id),children:"+ Log Price"})]}),e.jsx("div",{className:"section-head",children:"Share with Partner"}),e.jsxs("div",{className:"share-panel",children:[e.jsx("div",{className:"share-title",children:"Share this listing"}),e.jsx("div",{className:"share-sub",children:"Generate a link with this listing's details, ratings, and notes — send it to a co-buyer or partner to review together."}),e.jsxs("div",{className:"share-link-row",children:[e.jsx("input",{className:"share-link-input",readOnly:!0,value:fe(n)}),e.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>je(n),children:C?"✓ Copied!":"Copy Link"}),C&&e.jsx("span",{className:"copied-badge",children:"✓ Copied"})]}),e.jsx("div",{className:"share-notice",children:"⚠ Note: Data is encoded in the URL and not stored on any server. The recipient will see a read-only snapshot."})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{q(a=>a.includes(n.id)?a.filter(t=>t!==n.id):[...a,n.id])},children:O.includes(n.id)?"✓ In Compare":"+ Compare"}),e.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>B(n.id),children:"🗑 Delete"}),e.jsx("button",{className:"btn btn-ghost btn-sm",style:{marginLeft:"auto"},onClick:()=>D(null),children:"Close"})]})]})]})})]})}return ir}));
