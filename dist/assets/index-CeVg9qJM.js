var IS=Object.defineProperty;var HS=(o,t,i)=>t in o?IS(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var yt=(o,t,i)=>HS(o,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var jf={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function GS(){if(Qg)return Po;Qg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Po.Fragment=t,Po.jsx=i,Po.jsxs=i,Po}var Jg;function VS(){return Jg||(Jg=1,jf.exports=GS()),jf.exports}var ie=VS(),Kf={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function kS(){if($g)return le;$g=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function y(U,et,Et){this.props=U,this.context=et,this.refs=w,this.updater=Et||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,et){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,et,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=y.prototype;function B(U,et,Et){this.props=U,this.context=et,this.refs=w,this.updater=Et||M}var O=B.prototype=new v;O.constructor=B,b(O,y.prototype),O.isPureReactComponent=!0;var D=Array.isArray,H={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function z(U,et,Et,Rt,Y,pt){return Et=pt.ref,{$$typeof:o,type:U,key:et,ref:Et!==void 0?Et:null,props:pt}}function k(U,et){return z(U.type,et,void 0,void 0,void 0,U.props)}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function E(U){var et={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Et){return et[Et]})}var P=/\/+/g;function st(U,et){return typeof U=="object"&&U!==null&&U.key!=null?E(""+U.key):et.toString(36)}function it(){}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(it,it):(U.status="pending",U.then(function(et){U.status==="pending"&&(U.status="fulfilled",U.value=et)},function(et){U.status==="pending"&&(U.status="rejected",U.reason=et)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ut(U,et,Et,Rt,Y){var pt=typeof U;(pt==="undefined"||pt==="boolean")&&(U=null);var xt=!1;if(U===null)xt=!0;else switch(pt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(U.$$typeof){case o:case t:xt=!0;break;case g:return xt=U._init,ut(xt(U._payload),et,Et,Rt,Y)}}if(xt)return Y=Y(U),xt=Rt===""?"."+st(U,0):Rt,D(Y)?(Et="",xt!=null&&(Et=xt.replace(P,"$&/")+"/"),ut(Y,et,Et,"",function(Qt){return Qt})):Y!=null&&(R(Y)&&(Y=k(Y,Et+(Y.key==null||U&&U.key===Y.key?"":(""+Y.key).replace(P,"$&/")+"/")+xt)),et.push(Y)),1;xt=0;var bt=Rt===""?".":Rt+":";if(D(U))for(var Ct=0;Ct<U.length;Ct++)Rt=U[Ct],pt=bt+st(Rt,Ct),xt+=ut(Rt,et,Et,pt,Y);else if(Ct=S(U),typeof Ct=="function")for(U=Ct.call(U),Ct=0;!(Rt=U.next()).done;)Rt=Rt.value,pt=bt+st(Rt,Ct++),xt+=ut(Rt,et,Et,pt,Y);else if(pt==="object"){if(typeof U.then=="function")return ut(ft(U),et,Et,Rt,Y);throw et=String(U),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return xt}function V(U,et,Et){if(U==null)return U;var Rt=[],Y=0;return ut(U,Rt,"","",function(pt){return et.call(Et,pt,Y++)}),Rt}function rt(U){if(U._status===-1){var et=U._result;et=et(),et.then(function(Et){(U._status===0||U._status===-1)&&(U._status=1,U._result=Et)},function(Et){(U._status===0||U._status===-1)&&(U._status=2,U._result=Et)}),U._status===-1&&(U._status=0,U._result=et)}if(U._status===1)return U._result.default;throw U._result}var Z=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function vt(){}return le.Children={map:V,forEach:function(U,et,Et){V(U,function(){et.apply(this,arguments)},Et)},count:function(U){var et=0;return V(U,function(){et++}),et},toArray:function(U){return V(U,function(et){return et})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},le.Component=y,le.Fragment=i,le.Profiler=l,le.PureComponent=B,le.StrictMode=r,le.Suspense=p,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,le.act=function(){throw Error("act(...) is not supported in production builds of React.")},le.cache=function(U){return function(){return U.apply(null,arguments)}},le.cloneElement=function(U,et,Et){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Rt=b({},U.props),Y=U.key,pt=void 0;if(et!=null)for(xt in et.ref!==void 0&&(pt=void 0),et.key!==void 0&&(Y=""+et.key),et)!F.call(et,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&et.ref===void 0||(Rt[xt]=et[xt]);var xt=arguments.length-2;if(xt===1)Rt.children=Et;else if(1<xt){for(var bt=Array(xt),Ct=0;Ct<xt;Ct++)bt[Ct]=arguments[Ct+2];Rt.children=bt}return z(U.type,Y,void 0,void 0,pt,Rt)},le.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},le.createElement=function(U,et,Et){var Rt,Y={},pt=null;if(et!=null)for(Rt in et.key!==void 0&&(pt=""+et.key),et)F.call(et,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Y[Rt]=et[Rt]);var xt=arguments.length-2;if(xt===1)Y.children=Et;else if(1<xt){for(var bt=Array(xt),Ct=0;Ct<xt;Ct++)bt[Ct]=arguments[Ct+2];Y.children=bt}if(U&&U.defaultProps)for(Rt in xt=U.defaultProps,xt)Y[Rt]===void 0&&(Y[Rt]=xt[Rt]);return z(U,pt,void 0,void 0,null,Y)},le.createRef=function(){return{current:null}},le.forwardRef=function(U){return{$$typeof:d,render:U}},le.isValidElement=R,le.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:rt}},le.memo=function(U,et){return{$$typeof:m,type:U,compare:et===void 0?null:et}},le.startTransition=function(U){var et=H.T,Et={};H.T=Et;try{var Rt=U(),Y=H.S;Y!==null&&Y(Et,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(vt,Z)}catch(pt){Z(pt)}finally{H.T=et}},le.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},le.use=function(U){return H.H.use(U)},le.useActionState=function(U,et,Et){return H.H.useActionState(U,et,Et)},le.useCallback=function(U,et){return H.H.useCallback(U,et)},le.useContext=function(U){return H.H.useContext(U)},le.useDebugValue=function(){},le.useDeferredValue=function(U,et){return H.H.useDeferredValue(U,et)},le.useEffect=function(U,et){return H.H.useEffect(U,et)},le.useId=function(){return H.H.useId()},le.useImperativeHandle=function(U,et,Et){return H.H.useImperativeHandle(U,et,Et)},le.useInsertionEffect=function(U,et){return H.H.useInsertionEffect(U,et)},le.useLayoutEffect=function(U,et){return H.H.useLayoutEffect(U,et)},le.useMemo=function(U,et){return H.H.useMemo(U,et)},le.useOptimistic=function(U,et){return H.H.useOptimistic(U,et)},le.useReducer=function(U,et,Et){return H.H.useReducer(U,et,Et)},le.useRef=function(U){return H.H.useRef(U)},le.useState=function(U){return H.H.useState(U)},le.useSyncExternalStore=function(U,et,Et){return H.H.useSyncExternalStore(U,et,Et)},le.useTransition=function(){return H.H.useTransition()},le.version="19.0.0",le}var t_;function Md(){return t_||(t_=1,Kf.exports=kS()),Kf.exports}var ke=Md(),Qf={exports:{}},zo={},Jf={exports:{}},$f={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function XS(){return e_||(e_=1,function(o){function t(V,rt){var Z=V.length;V.push(rt);t:for(;0<Z;){var vt=Z-1>>>1,U=V[vt];if(0<l(U,rt))V[vt]=rt,V[Z]=U,Z=vt;else break t}}function i(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var rt=V[0],Z=V.pop();if(Z!==rt){V[0]=Z;t:for(var vt=0,U=V.length,et=U>>>1;vt<et;){var Et=2*(vt+1)-1,Rt=V[Et],Y=Et+1,pt=V[Y];if(0>l(Rt,Z))Y<U&&0>l(pt,Rt)?(V[vt]=pt,V[Y]=Z,vt=Y):(V[vt]=Rt,V[Et]=Z,vt=Et);else if(Y<U&&0>l(pt,Z))V[vt]=pt,V[Y]=Z,vt=Y;else break t}}return rt}function l(V,rt){var Z=V.sortIndex-rt.sortIndex;return Z!==0?Z:V.id-rt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,_=null,S=3,M=!1,b=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function O(V){for(var rt=i(m);rt!==null;){if(rt.callback===null)r(m);else if(rt.startTime<=V)r(m),rt.sortIndex=rt.expirationTime,t(p,rt);else break;rt=i(m)}}function D(V){if(w=!1,O(V),!b)if(i(p)!==null)b=!0,ft();else{var rt=i(m);rt!==null&&ut(D,rt.startTime-V)}}var H=!1,F=-1,z=5,k=-1;function R(){return!(o.unstable_now()-k<z)}function E(){if(H){var V=o.unstable_now();k=V;var rt=!0;try{t:{b=!1,w&&(w=!1,v(F),F=-1),M=!0;var Z=S;try{e:{for(O(V),_=i(p);_!==null&&!(_.expirationTime>V&&R());){var vt=_.callback;if(typeof vt=="function"){_.callback=null,S=_.priorityLevel;var U=vt(_.expirationTime<=V);if(V=o.unstable_now(),typeof U=="function"){_.callback=U,O(V),rt=!0;break e}_===i(p)&&r(p),O(V)}else r(p);_=i(p)}if(_!==null)rt=!0;else{var et=i(m);et!==null&&ut(D,et.startTime-V),rt=!1}}break t}finally{_=null,S=Z,M=!1}rt=void 0}}finally{rt?P():H=!1}}}var P;if(typeof B=="function")P=function(){B(E)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,it=st.port2;st.port1.onmessage=E,P=function(){it.postMessage(null)}}else P=function(){y(E,0)};function ft(){H||(H=!0,P())}function ut(V,rt){F=y(function(){V(o.unstable_now())},rt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_continueExecution=function(){b||M||(b=!0,ft())},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(V){switch(S){case 1:case 2:case 3:var rt=3;break;default:rt=S}var Z=S;S=rt;try{return V()}finally{S=Z}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(V,rt){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Z=S;S=V;try{return rt()}finally{S=Z}},o.unstable_scheduleCallback=function(V,rt,Z){var vt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?vt+Z:vt):Z=vt,V){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Z+U,V={id:g++,callback:rt,priorityLevel:V,startTime:Z,expirationTime:U,sortIndex:-1},Z>vt?(V.sortIndex=Z,t(m,V),i(p)===null&&V===i(m)&&(w?(v(F),F=-1):w=!0,ut(D,Z-vt))):(V.sortIndex=U,t(p,V),b||M||(b=!0,ft())),V},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(V){var rt=S;return function(){var Z=S;S=rt;try{return V.apply(this,arguments)}finally{S=Z}}}}($f)),$f}var n_;function WS(){return n_||(n_=1,Jf.exports=XS()),Jf.exports}var th={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function qS(){if(i_)return bn;i_=1;var o=Md();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},bn.flushSync=function(p){var m=h.T,g=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=g,r.d.f()}},bn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},bn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},bn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},bn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},bn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},bn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},bn.requestFormReset=function(p){r.d.r(p)},bn.unstable_batchedUpdates=function(p,m){return p(m)},bn.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.0.0",bn}var a_;function YS(){if(a_)return th.exports;a_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),th.exports=qS(),th.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function ZS(){if(r_)return zo;r_=1;var o=WS(),t=Md(),i=YS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),M=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var z=Symbol.for("react.client.reference");function k(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===z?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case d:return"Portal";case g:return"Profiler";case m:return"StrictMode";case w:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M:return(e.displayName||"Context")+".Provider";case S:return(e._context.displayName||"Context")+".Consumer";case b:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case v:return n=e.displayName||null,n!==null?n:k(e.type)||"Memo";case B:n=e._payload,e=e._init;try{return k(e(n))}catch{}}return null}var R=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=Object.assign,P,st;function it(e){if(P===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);P=n&&n[1]||"",st=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+P+e+st}var ft=!1;function ut(e,n){if(!e||ft)return"";ft=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(lt){var at=lt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(lt){at=lt}e.call(_t.prototype)}}else{try{throw Error()}catch(lt){at=lt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(lt){if(lt&&at&&typeof lt.stack=="string")return[lt.stack,at.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],A=f[1];if(x&&A){var N=x.split(`
`),X=A.split(`
`);for(u=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;u<X.length&&!X[u].includes("DetermineComponentFrameRoot");)u++;if(s===N.length||u===X.length)for(s=N.length-1,u=X.length-1;1<=s&&0<=u&&N[s]!==X[u];)u--;for(;1<=s&&0<=u;s--,u--)if(N[s]!==X[u]){if(s!==1||u!==1)do if(s--,u--,0>u||N[s]!==X[u]){var ct=`
`+N[s].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=s&&0<=u);break}}}finally{ft=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?it(a):""}function V(e){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return e=ut(e.type,!1),e;case 11:return e=ut(e.type.render,!1),e;case 1:return e=ut(e.type,!0),e;default:return""}}function rt(e){try{var n="";do n+=V(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Z(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function vt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function U(e){if(Z(e)!==e)throw Error(r(188))}function et(e){var n=e.alternate;if(!n){if(n=Z(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return U(u),e;if(f===s)return U(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,s=f;break}if(A===s){x=!0,s=u,a=f;break}A=A.sibling}if(!x){for(A=f.child;A;){if(A===a){x=!0,a=f,s=u;break}if(A===s){x=!0,s=f,a=u;break}A=A.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function Et(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Et(e),n!==null)return n;e=e.sibling}return null}var Rt=Array.isArray,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},xt=[],bt=-1;function Ct(e){return{current:e}}function Qt(e){0>bt||(e.current=xt[bt],xt[bt]=null,bt--)}function zt(e,n){bt++,xt[bt]=e.current,e.current=n}var Ee=Ct(null),De=Ct(null),re=Ct(null),I=Ct(null);function vn(e,n){switch(zt(re,n),zt(De,e),zt(Ee,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Ag(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=Ag(e),n=Rg(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Qt(Ee),zt(Ee,n)}function oe(){Qt(Ee),Qt(De),Qt(re)}function de(e){e.memoizedState!==null&&zt(I,e);var n=Ee.current,a=Rg(n,e.type);n!==a&&(zt(De,e),zt(Ee,a))}function Xt(e){De.current===e&&(Qt(Ee),Qt(De)),I.current===e&&(Qt(I),Do._currentValue=pt)}var Ue=Object.prototype.hasOwnProperty,Wt=o.unstable_scheduleCallback,L=o.unstable_cancelCallback,T=o.unstable_shouldYield,nt=o.unstable_requestPaint,ht=o.unstable_now,St=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,Gt=o.unstable_UserBlockingPriority,Dt=o.unstable_NormalPriority,Bt=o.unstable_LowPriority,ge=o.unstable_IdlePriority,Tt=o.log,Ft=o.unstable_setDisableYieldValue,Kt=null,Vt=null;function It(e){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Kt,e,void 0,(e.current.flags&128)===128)}catch{}}function se(e){if(typeof Tt=="function"&&Ft(e),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(Kt,e)}catch{}}var Zt=Math.clz32?Math.clz32:Nt,Le=Math.log,W=Math.LN2;function Nt(e){return e>>>=0,e===0?32:31-(Le(e)/W|0)|0}var ot=128,gt=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ut(e,n){var a=e.pendingLanes;if(a===0)return 0;var s=0,u=e.suspendedLanes,f=e.pingedLanes,x=e.warmLanes;e=e.finishedLanes!==0;var A=a&134217727;return A!==0?(a=A&~u,a!==0?s=wt(a):(f&=A,f!==0?s=wt(f):e||(x=A&~x,x!==0&&(s=wt(x))))):(A=a&~u,A!==0?s=wt(A):f!==0?s=wt(f):e||(x=a&~x,x!==0&&(s=wt(x)))),s===0?0:n!==0&&n!==s&&(n&u)===0&&(u=s&-s,x=n&-n,u>=x||u===32&&(x&4194176)!==0)?n:s}function $t(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Xe(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rn(){var e=ot;return ot<<=1,(ot&4194176)===0&&(ot=128),e}function Te(){var e=gt;return gt<<=1,(gt&62914560)===0&&(gt=4194304),e}function Dn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Un(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ko(e,n,a,s,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,N=e.expirationTimes,X=e.hiddenUpdates;for(a=x&~a;0<a;){var ct=31-Zt(a),_t=1<<ct;A[ct]=0,N[ct]=-1;var at=X[ct];if(at!==null)for(X[ct]=null,ct=0;ct<at.length;ct++){var lt=at[ct];lt!==null&&(lt.lane&=-536870913)}a&=~_t}s!==0&&Hs(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function Hs(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Zt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194218}function Ti(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Zt(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function Rr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gs(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Wg(e.type))}function Qo(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var Xn=Math.random().toString(36).slice(2),sn="__reactFiber$"+Xn,on="__reactProps$"+Xn,Oi="__reactContainer$"+Xn,Cr="__reactEvents$"+Xn,qc="__reactListeners$"+Xn,Yc="__reactHandles$"+Xn,Jo="__reactResources$"+Xn,Xa="__reactMarker$"+Xn;function Vs(e){delete e[sn],delete e[on],delete e[Cr],delete e[qc],delete e[Yc]}function Pi(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Oi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Dg(e);e!==null;){if(a=e[sn])return a;e=Dg(e)}return n}e=a,a=e.parentNode}return null}function C(e){if(e=e[sn]||e[Oi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function q(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function $(e){var n=e[Jo];return n||(n=e[Jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(e){e[Xa]=!0}var j=new Set,Mt={};function At(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(Mt[e]=n,e=0;e<n.length;e++)j.add(n[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},Yt={};function _e(e){return Ue.call(Yt,e)?!0:Ue.call(ee,e)?!1:te.test(e)?Yt[e]=!0:(ee[e]=!0,!1)}function ve(e,n,a){if(_e(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ve(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function be(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ln(e){var n=jt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Se(e){e._valueTracker||(e._valueTracker=ln(e))}function In(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=jt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ln=/[\n"\\]/g;function dn(e){return e.replace(Ln,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ne(e,n,a,s,u,f,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?En(e,x,ne(n)):a!=null?En(e,x,ne(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ne(A):e.removeAttribute("name")}function Nn(e,n,a,s,u,f,x,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=A?e.checked:!!s,e.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x)}function En(e,n,a){n==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ze(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function wr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Rt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function Hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var z0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Od(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||z0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Pd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Od(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Od(e,f,n[f])}function Zc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var B0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),F0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(e){return F0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var jc=null;function Kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dr=null,Ur=null;function zd(e){var n=C(e);if(n&&(e=n.stateNode)){var a=e[on]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ne(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[on]||null;if(!u)throw Error(r(90));Ne(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&In(s)}break t;case"textarea":Sn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ze(e,!!a.multiple,n,!1)}}}var Qc=!1;function Bd(e,n,a){if(Qc)return e(n,a);Qc=!0;try{var s=e(n);return s}finally{if(Qc=!1,(Dr!==null||Ur!==null)&&(zl(),Dr&&(n=Dr,e=Ur,Ur=Dr=null,zd(n),e)))for(n=0;n<e.length;n++)zd(e[n])}}function ks(e,n){var a=e.stateNode;if(a===null)return null;var s=a[on]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Jc=!1;if(Ot)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{Jc=!1}var la=null,$c=null,tl=null;function Fd(){if(tl)return tl;var e,n=$c,a=n.length,s,u="value"in la?la.value:la.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(s=1;s<=x&&n[a-s]===u[f-s];s++);return tl=u.slice(e,1<s?1-s:void 0)}function el(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function Id(){return!1}function Gn(e){function n(a,s,u,f,x){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nl:Id,this.isPropagationStopped=Id,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=Gn(Wa),Ws=E({},Wa,{view:0,detail:0}),I0=Gn(Ws),tu,eu,qs,al=E({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qs&&(qs&&e.type==="mousemove"?(tu=e.screenX-qs.screenX,eu=e.screenY-qs.screenY):eu=tu=0,qs=e),tu)},movementY:function(e){return"movementY"in e?e.movementY:eu}}),Hd=Gn(al),H0=E({},al,{dataTransfer:0}),G0=Gn(H0),V0=E({},Ws,{relatedTarget:0}),nu=Gn(V0),k0=E({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=Gn(k0),W0=E({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),q0=Gn(W0),Y0=E({},Wa,{data:0}),Gd=Gn(Y0),Z0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=K0[e])?!!n[e]:!1}function iu(){return Q0}var J0=E({},Ws,{key:function(e){if(e.key){var n=Z0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?j0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$0=Gn(J0),tv=E({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=Gn(tv),ev=E({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),nv=Gn(ev),iv=E({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),av=Gn(iv),rv=E({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sv=Gn(rv),ov=E({},Wa,{newState:0,oldState:0}),lv=Gn(ov),cv=[9,13,27,32],au=Ot&&"CompositionEvent"in window,Ys=null;Ot&&"documentMode"in document&&(Ys=document.documentMode);var uv=Ot&&"TextEvent"in window&&!Ys,kd=Ot&&(!au||Ys&&8<Ys&&11>=Ys),Xd=" ",Wd=!1;function qd(e,n){switch(e){case"keyup":return cv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function fv(e,n){switch(e){case"compositionend":return Yd(n);case"keypress":return n.which!==32?null:(Wd=!0,Xd);case"textInput":return e=n.data,e===Xd&&Wd?null:e;default:return null}}function hv(e,n){if(Lr)return e==="compositionend"||!au&&qd(e,n)?(e=Fd(),tl=$c=la=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kd&&n.locale!=="ko"?null:n.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!dv[e.type]:n==="textarea"}function jd(e,n,a,s){Dr?Ur?Ur.push(s):Ur=[s]:Dr=s,n=Gl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Zs=null,js=null;function pv(e){yg(e,0)}function rl(e){var n=q(e);if(In(n))return e}function Kd(e,n){if(e==="change")return n}var Qd=!1;if(Ot){var ru;if(Ot){var su="oninput"in document;if(!su){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),su=typeof Jd.oninput=="function"}ru=su}else ru=!1;Qd=ru&&(!document.documentMode||9<document.documentMode)}function $d(){Zs&&(Zs.detachEvent("onpropertychange",tp),js=Zs=null)}function tp(e){if(e.propertyName==="value"&&rl(js)){var n=[];jd(n,js,e,Kc(e)),Bd(pv,n)}}function mv(e,n,a){e==="focusin"?($d(),Zs=n,js=a,Zs.attachEvent("onpropertychange",tp)):e==="focusout"&&$d()}function gv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(js)}function _v(e,n){if(e==="click")return rl(n)}function vv(e,n){if(e==="input"||e==="change")return rl(n)}function Sv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Sv;function Ks(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Ue.call(n,u)||!Wn(e[u],n[u]))return!1}return!0}function ep(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function np(e,n){var a=ep(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ep(a)}}function ip(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ip(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ap(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pi(e.document)}return n}function ou(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function xv(e,n){var a=ap(n);n=e.focusedElem;var s=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&ip(n.ownerDocument.documentElement,n)){if(s!==null&&ou(n)){if(e=s.start,a=s.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var u=n.textContent.length,f=Math.min(s.start,u);s=s.end===void 0?f:Math.min(s.end,u),!a.extend&&f>s&&(u=s,s=f,f=u),u=np(n,f);var x=np(n,s);u&&x&&(a.rangeCount!==1||a.anchorNode!==u.node||a.anchorOffset!==u.offset||a.focusNode!==x.node||a.focusOffset!==x.offset)&&(e=e.createRange(),e.setStart(u.node,u.offset),a.removeAllRanges(),f>s?(a.addRange(e),a.extend(x.node,x.offset)):(e.setEnd(x.node,x.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var yv=Ot&&"documentMode"in document&&11>=document.documentMode,Nr=null,lu=null,Qs=null,cu=!1;function rp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||Nr==null||Nr!==pi(s)||(s=Nr,"selectionStart"in s&&ou(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Qs&&Ks(Qs,s)||(Qs=s,s=Gl(lu,"onSelect"),0<s.length&&(n=new il("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Nr)))}function qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Or={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},uu={},sp={};Ot&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function Ya(e){if(uu[e])return uu[e];if(!Or[e])return e;var n=Or[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in sp)return uu[e]=n[a];return e}var op=Ya("animationend"),lp=Ya("animationiteration"),cp=Ya("animationstart"),Mv=Ya("transitionrun"),Ev=Ya("transitionstart"),Tv=Ya("transitioncancel"),up=Ya("transitionend"),fp=new Map,hp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function mi(e,n){fp.set(e,n),At(n,[e])}var Jn=[],Pr=0,fu=0;function sl(){for(var e=Pr,n=fu=Pr=0;n<e;){var a=Jn[n];Jn[n++]=null;var s=Jn[n];Jn[n++]=null;var u=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,s!==null&&u!==null){var x=s.pending;x===null?u.next=u:(u.next=x.next,x.next=u),s.pending=u}f!==0&&dp(a,u,f)}}function ol(e,n,a,s){Jn[Pr++]=e,Jn[Pr++]=n,Jn[Pr++]=a,Jn[Pr++]=s,fu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function hu(e,n,a,s){return ol(e,n,a,s),ll(e)}function ca(e,n){return ol(e,null,null,n),ll(e)}function dp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;u&&n!==null&&e.tag===3&&(f=e.stateNode,u=31-Zt(a),f=f.hiddenUpdates,e=f[u],e===null?f[u]=[n]:e.push(n),n.lane=a|536870912)}function ll(e){if(50<Eo)throw Eo=0,Sf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={},pp=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var a=pp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:rt(n)},pp.set(e,n),n)}return{value:e,source:n,stack:rt(n)}}var Br=[],Fr=0,cl=null,ul=0,ti=[],ei=0,Za=null,zi=1,Bi="";function ja(e,n){Br[Fr++]=ul,Br[Fr++]=cl,cl=e,ul=n}function mp(e,n,a){ti[ei++]=zi,ti[ei++]=Bi,ti[ei++]=Za,Za=e;var s=zi;e=Bi;var u=32-Zt(s)-1;s&=~(1<<u),a+=1;var f=32-Zt(n)+u;if(30<f){var x=u-u%5;f=(s&(1<<x)-1).toString(32),s>>=x,u-=x,zi=1<<32-Zt(n)+u|a<<u|s,Bi=f+e}else zi=1<<f|a<<u|s,Bi=e}function du(e){e.return!==null&&(ja(e,1),mp(e,1,0))}function pu(e){for(;e===cl;)cl=Br[--Fr],Br[Fr]=null,ul=Br[--Fr],Br[Fr]=null;for(;e===Za;)Za=ti[--ei],ti[ei]=null,Bi=ti[--ei],ti[ei]=null,zi=ti[--ei],ti[ei]=null}var On=null,xn=null,Ae=!1,gi=null,bi=!1,mu=Error(r(519));function Ka(e){var n=Error(r(418,""));throw to($n(n,e)),mu}function gp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[sn]=e,n[on]=s,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<bo.length;a++)xe(bo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Nn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Se(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),wr(n,s.value,s.defaultValue,s.children),Se(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||bg(n.textContent,a)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=Vl),n=!0):n=!1,n||Ka(e)}function _p(e){for(On=e.return;On;)switch(On.tag){case 3:case 27:bi=!0;return;case 5:case 13:bi=!1;return;default:On=On.return}}function Js(e){if(e!==On)return!1;if(!Ae)return _p(e),Ae=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&xn&&Ka(e),_p(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){xn=vi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}xn=null}}else xn=On?vi(e.stateNode.nextSibling):null;return!0}function $s(){xn=On=null,Ae=!1}function to(e){gi===null?gi=[e]:gi.push(e)}var eo=Error(r(460)),vp=Error(r(474)),gu={then:function(){}};function Sp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fl(){}function xp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(fl,fl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===eo?Error(r(483)):e;default:if(typeof n.status=="string")n.then(fl,fl);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===eo?Error(r(483)):e}throw no=n,eo}}var no=null;function yp(){if(no===null)throw Error(r(459));var e=no;return no=null,e}var Ir=null,io=0;function hl(e){var n=io;return io+=1,Ir===null&&(Ir=[]),xp(Ir,e,n)}function ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function dl(e,n){throw n.$$typeof===c?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Mp(e){var n=e._init;return n(e._payload)}function Ep(e){function n(K,G){if(e){var J=K.deletions;J===null?(K.deletions=[G],K.flags|=16):J.push(G)}}function a(K,G){if(!e)return null;for(;G!==null;)n(K,G),G=G.sibling;return null}function s(K){for(var G=new Map;K!==null;)K.key!==null?G.set(K.key,K):G.set(K.index,K),K=K.sibling;return G}function u(K,G){return K=ya(K,G),K.index=0,K.sibling=null,K}function f(K,G,J){return K.index=J,e?(J=K.alternate,J!==null?(J=J.index,J<G?(K.flags|=33554434,G):J):(K.flags|=33554434,G)):(K.flags|=1048576,G)}function x(K){return e&&K.alternate===null&&(K.flags|=33554434),K}function A(K,G,J,mt){return G===null||G.tag!==6?(G=ff(J,K.mode,mt),G.return=K,G):(G=u(G,J),G.return=K,G)}function N(K,G,J,mt){var Ht=J.type;return Ht===p?ct(K,G,J.props.children,mt,J.key):G!==null&&(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===B&&Mp(Ht)===G.type)?(G=u(G,J.props),ao(G,J),G.return=K,G):(G=Ul(J.type,J.key,J.props,null,K.mode,mt),ao(G,J),G.return=K,G)}function X(K,G,J,mt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=hf(J,K.mode,mt),G.return=K,G):(G=u(G,J.children||[]),G.return=K,G)}function ct(K,G,J,mt,Ht){return G===null||G.tag!==7?(G=sr(J,K.mode,mt,Ht),G.return=K,G):(G=u(G,J),G.return=K,G)}function _t(K,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=ff(""+G,K.mode,J),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case h:return J=Ul(G.type,G.key,G.props,null,K.mode,J),ao(J,G),J.return=K,J;case d:return G=hf(G,K.mode,J),G.return=K,G;case B:var mt=G._init;return G=mt(G._payload),_t(K,G,J)}if(Rt(G)||F(G))return G=sr(G,K.mode,J,null),G.return=K,G;if(typeof G.then=="function")return _t(K,hl(G),J);if(G.$$typeof===M)return _t(K,Cl(K,G),J);dl(K,G)}return null}function at(K,G,J,mt){var Ht=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:A(K,G,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case h:return J.key===Ht?N(K,G,J,mt):null;case d:return J.key===Ht?X(K,G,J,mt):null;case B:return Ht=J._init,J=Ht(J._payload),at(K,G,J,mt)}if(Rt(J)||F(J))return Ht!==null?null:ct(K,G,J,mt,null);if(typeof J.then=="function")return at(K,G,hl(J),mt);if(J.$$typeof===M)return at(K,G,Cl(K,J),mt);dl(K,J)}return null}function lt(K,G,J,mt,Ht){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get(J)||null,A(G,K,""+mt,Ht);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case h:return K=K.get(mt.key===null?J:mt.key)||null,N(G,K,mt,Ht);case d:return K=K.get(mt.key===null?J:mt.key)||null,X(G,K,mt,Ht);case B:var pe=mt._init;return mt=pe(mt._payload),lt(K,G,J,mt,Ht)}if(Rt(mt)||F(mt))return K=K.get(J)||null,ct(G,K,mt,Ht,null);if(typeof mt.then=="function")return lt(K,G,J,hl(mt),Ht);if(mt.$$typeof===M)return lt(K,G,J,Cl(G,mt),Ht);dl(G,mt)}return null}function kt(K,G,J,mt){for(var Ht=null,pe=null,qt=G,Jt=G=0,gn=null;qt!==null&&Jt<J.length;Jt++){qt.index>Jt?(gn=qt,qt=null):gn=qt.sibling;var Re=at(K,qt,J[Jt],mt);if(Re===null){qt===null&&(qt=gn);break}e&&qt&&Re.alternate===null&&n(K,qt),G=f(Re,G,Jt),pe===null?Ht=Re:pe.sibling=Re,pe=Re,qt=gn}if(Jt===J.length)return a(K,qt),Ae&&ja(K,Jt),Ht;if(qt===null){for(;Jt<J.length;Jt++)qt=_t(K,J[Jt],mt),qt!==null&&(G=f(qt,G,Jt),pe===null?Ht=qt:pe.sibling=qt,pe=qt);return Ae&&ja(K,Jt),Ht}for(qt=s(qt);Jt<J.length;Jt++)gn=lt(qt,K,Jt,J[Jt],mt),gn!==null&&(e&&gn.alternate!==null&&qt.delete(gn.key===null?Jt:gn.key),G=f(gn,G,Jt),pe===null?Ht=gn:pe.sibling=gn,pe=gn);return e&&qt.forEach(function(Ca){return n(K,Ca)}),Ae&&ja(K,Jt),Ht}function ae(K,G,J,mt){if(J==null)throw Error(r(151));for(var Ht=null,pe=null,qt=G,Jt=G=0,gn=null,Re=J.next();qt!==null&&!Re.done;Jt++,Re=J.next()){qt.index>Jt?(gn=qt,qt=null):gn=qt.sibling;var Ca=at(K,qt,Re.value,mt);if(Ca===null){qt===null&&(qt=gn);break}e&&qt&&Ca.alternate===null&&n(K,qt),G=f(Ca,G,Jt),pe===null?Ht=Ca:pe.sibling=Ca,pe=Ca,qt=gn}if(Re.done)return a(K,qt),Ae&&ja(K,Jt),Ht;if(qt===null){for(;!Re.done;Jt++,Re=J.next())Re=_t(K,Re.value,mt),Re!==null&&(G=f(Re,G,Jt),pe===null?Ht=Re:pe.sibling=Re,pe=Re);return Ae&&ja(K,Jt),Ht}for(qt=s(qt);!Re.done;Jt++,Re=J.next())Re=lt(qt,K,Jt,Re.value,mt),Re!==null&&(e&&Re.alternate!==null&&qt.delete(Re.key===null?Jt:Re.key),G=f(Re,G,Jt),pe===null?Ht=Re:pe.sibling=Re,pe=Re);return e&&qt.forEach(function(FS){return n(K,FS)}),Ae&&ja(K,Jt),Ht}function Qe(K,G,J,mt){if(typeof J=="object"&&J!==null&&J.type===p&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case h:t:{for(var Ht=J.key;G!==null;){if(G.key===Ht){if(Ht=J.type,Ht===p){if(G.tag===7){a(K,G.sibling),mt=u(G,J.props.children),mt.return=K,K=mt;break t}}else if(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===B&&Mp(Ht)===G.type){a(K,G.sibling),mt=u(G,J.props),ao(mt,J),mt.return=K,K=mt;break t}a(K,G);break}else n(K,G);G=G.sibling}J.type===p?(mt=sr(J.props.children,K.mode,mt,J.key),mt.return=K,K=mt):(mt=Ul(J.type,J.key,J.props,null,K.mode,mt),ao(mt,J),mt.return=K,K=mt)}return x(K);case d:t:{for(Ht=J.key;G!==null;){if(G.key===Ht)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(K,G.sibling),mt=u(G,J.children||[]),mt.return=K,K=mt;break t}else{a(K,G);break}else n(K,G);G=G.sibling}mt=hf(J,K.mode,mt),mt.return=K,K=mt}return x(K);case B:return Ht=J._init,J=Ht(J._payload),Qe(K,G,J,mt)}if(Rt(J))return kt(K,G,J,mt);if(F(J)){if(Ht=F(J),typeof Ht!="function")throw Error(r(150));return J=Ht.call(J),ae(K,G,J,mt)}if(typeof J.then=="function")return Qe(K,G,hl(J),mt);if(J.$$typeof===M)return Qe(K,G,Cl(K,J),mt);dl(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(a(K,G.sibling),mt=u(G,J),mt.return=K,K=mt):(a(K,G),mt=ff(J,K.mode,mt),mt.return=K,K=mt),x(K)):a(K,G)}return function(K,G,J,mt){try{io=0;var Ht=Qe(K,G,J,mt);return Ir=null,Ht}catch(qt){if(qt===eo)throw qt;var pe=ri(29,qt,null,K.mode);return pe.lanes=mt,pe.return=K,pe}finally{}}}var Qa=Ep(!0),Tp=Ep(!1),Hr=Ct(null),pl=Ct(0);function bp(e,n){e=Zi,zt(pl,e),zt(Hr,n),Zi=e|n.baseLanes}function _u(){zt(pl,Zi),zt(Hr,Hr.current)}function vu(){Zi=pl.current,Qt(Hr),Qt(pl)}var ni=Ct(null),Ai=null;function ua(e){var n=e.alternate;zt(cn,cn.current&1),zt(ni,e),Ai===null&&(n===null||Hr.current!==null||n.memoizedState!==null)&&(Ai=e)}function Ap(e){if(e.tag===22){if(zt(cn,cn.current),zt(ni,e),Ai===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ai=e)}}else fa()}function fa(){zt(cn,cn.current),zt(ni,ni.current)}function Fi(e){Qt(ni),Ai===e&&(Ai=null),Qt(cn)}var cn=Ct(0);function ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var bv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Av=o.unstable_scheduleCallback,Rv=o.unstable_NormalPriority,un={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new bv,data:new Map,refCount:0}}function ro(e){e.refCount--,e.refCount===0&&Av(Rv,function(){e.controller.abort()})}var so=null,xu=0,Gr=0,Vr=null;function Cv(e,n){if(so===null){var a=so=[];xu=0,Gr=Rf(),Vr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return xu++,n.then(Rp,Rp),n}function Rp(){if(--xu===0&&so!==null){Vr!==null&&(Vr.status="fulfilled");var e=so;so=null,Gr=0,Vr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function wv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Cp=R.S;R.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Cv(e,n),Cp!==null&&Cp(e,n)};var Ja=Ct(null);function yu(){var e=Ja.current;return e!==null?e:Ie.pooledCache}function gl(e,n){n===null?zt(Ja,Ja.current):zt(Ja,n.pool)}function wp(){var e=yu();return e===null?null:{parent:un._currentValue,pool:e}}var ha=0,fe=null,Oe=null,tn=null,_l=!1,kr=!1,$a=!1,vl=0,oo=0,Xr=null,Dv=0;function Je(){throw Error(r(321))}function Mu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Eu(e,n,a,s,u,f){return ha=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,R.H=e===null||e.memoizedState===null?tr:da,$a=!1,f=a(s,u),$a=!1,kr&&(f=Up(n,a,s,u)),Dp(e),f}function Dp(e){R.H=Ri;var n=Oe!==null&&Oe.next!==null;if(ha=0,tn=Oe=fe=null,_l=!1,oo=0,Xr=null,n)throw Error(r(300));e===null||pn||(e=e.dependencies,e!==null&&Rl(e)&&(pn=!0))}function Up(e,n,a,s){fe=e;var u=0;do{if(kr&&(Xr=null),oo=0,kr=!1,25<=u)throw Error(r(301));if(u+=1,tn=Oe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}R.H=er,f=n(a,s)}while(kr);return f}function Uv(){var e=R.H,n=e.useState()[0];return n=typeof n.then=="function"?lo(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(fe.flags|=1024),n}function Tu(){var e=vl!==0;return vl=0,e}function bu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Au(e){if(_l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_l=!1}ha=0,tn=Oe=fe=null,kr=!1,oo=vl=0,Xr=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?fe.memoizedState=tn=e:tn=tn.next=e,tn}function en(){if(Oe===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=tn===null?fe.memoizedState:tn.next;if(n!==null)tn=n,Oe=e;else{if(e===null)throw fe.alternate===null?Error(r(467)):Error(r(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},tn===null?fe.memoizedState=tn=e:tn=tn.next=e}return tn}var Sl;Sl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function lo(e){var n=oo;return oo+=1,Xr===null&&(Xr=[]),e=xp(Xr,e,n),n=fe,(tn===null?n.memoizedState:tn.next)===null&&(n=n.alternate,R.H=n===null||n.memoizedState===null?tr:da),e}function xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return lo(e);if(e.$$typeof===M)return Tn(e)}throw Error(r(438,String(e)))}function Ru(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=fe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=D;return n.index++,a}function Ii(e,n){return typeof n=="function"?n(e):n}function yl(e){var n=en();return Cu(n,Oe,e)}function Cu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=x=null,N=null,X=n,ct=!1;do{var _t=X.lane&-536870913;if(_t!==X.lane?(Me&_t)===_t:(ha&_t)===_t){var at=X.revertLane;if(at===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),_t===Gr&&(ct=!0);else if((ha&at)===at){X=X.next,at===Gr&&(ct=!0);continue}else _t={lane:0,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},N===null?(A=N=_t,x=f):N=N.next=_t,fe.lanes|=at,Ma|=at;_t=X.action,$a&&a(f,_t),f=X.hasEagerState?X.eagerState:a(f,_t)}else at={lane:_t,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},N===null?(A=N=at,x=f):N=N.next=at,fe.lanes|=_t,Ma|=_t;X=X.next}while(X!==null&&X!==n);if(N===null?x=f:N.next=A,!Wn(f,e.memoizedState)&&(pn=!0,ct&&(a=Vr,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=N,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function wu(e){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);Wn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Lp(e,n,a){var s=fe,u=en(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Wn((Oe||u).memoizedState,a);if(x&&(u.memoizedState=a,pn=!0),u=u.queue,Lu(Pp.bind(null,s,u,e),[e]),u.getSnapshot!==n||x||tn!==null&&tn.memoizedState.tag&1){if(s.flags|=2048,Wr(9,Op.bind(null,s,u,a,n),{destroy:void 0},null),Ie===null)throw Error(r(349));f||(ha&60)!==0||Np(s,n,a)}return a}function Np(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Sl(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Op(e,n,a,s){n.value=a,n.getSnapshot=s,zp(n)&&Bp(e)}function Pp(e,n,a){return a(function(){zp(n)&&Bp(e)})}function zp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Bp(e){var n=ca(e,2);n!==null&&Pn(n,e,2)}function Du(e){var n=Vn();if(typeof e=="function"){var a=e;if(e=a(),$a){se(!0);try{a()}finally{se(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},n}function Fp(e,n,a,s){return e.baseState=a,Cu(e,Oe,typeof s=="function"?s:Ii)}function Lv(e,n,a,s,u){if(Tl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};R.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Ip(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Ip(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=R.T,x={};R.T=x;try{var A=a(u,s),N=R.S;N!==null&&N(x,A),Hp(e,n,A)}catch(X){Uu(e,n,X)}finally{R.T=f}}else try{f=a(u,s),Hp(e,n,f)}catch(X){Uu(e,n,X)}}function Hp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Gp(e,n,s)},function(s){return Uu(e,n,s)}):Gp(e,n,a)}function Gp(e,n,a){n.status="fulfilled",n.value=a,Vp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Ip(e,a)))}function Uu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Vp(n),n=n.next;while(n!==s)}e.action=null}function Vp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function kp(e,n){return n}function Xp(e,n){if(Ae){var a=Ie.formState;if(a!==null){t:{var s=fe;if(Ae){if(xn){e:{for(var u=xn,f=bi;u.nodeType!==8;){if(!f){u=null;break e}if(u=vi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){xn=vi(u.nextSibling),s=u.data==="F!";break t}}Ka(s)}s=!1}s&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kp,lastRenderedState:n},a.queue=s,a=lm.bind(null,fe,s),s.dispatch=a,s=Du(!1),f=Bu.bind(null,fe,!1,s.queue),s=Vn(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=Lv.bind(null,fe,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function Wp(e){var n=en();return qp(n,Oe,e)}function qp(e,n,a){n=Cu(e,n,kp)[0],e=yl(Ii)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?lo(n):n;var s=en(),u=s.queue,f=u.dispatch;return a!==s.memoizedState&&(fe.flags|=2048,Wr(9,Nv.bind(null,u,a),{destroy:void 0},null)),[n,f,e]}function Nv(e,n){e.action=n}function Yp(e){var n=en(),a=Oe;if(a!==null)return qp(n,a,e);en(),n=n.memoizedState,a=en();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Wr(e,n,a,s){return e={tag:e,create:n,inst:a,deps:s,next:null},n=fe.updateQueue,n===null&&(n=Sl(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Zp(){return en().memoizedState}function Ml(e,n,a,s){var u=Vn();fe.flags|=e,u.memoizedState=Wr(1|n,a,{destroy:void 0},s===void 0?null:s)}function El(e,n,a,s){var u=en();s=s===void 0?null:s;var f=u.memoizedState.inst;Oe!==null&&s!==null&&Mu(s,Oe.memoizedState.deps)?u.memoizedState=Wr(n,a,f,s):(fe.flags|=e,u.memoizedState=Wr(1|n,a,f,s))}function jp(e,n){Ml(8390656,8,e,n)}function Lu(e,n){El(2048,8,e,n)}function Kp(e,n){return El(4,2,e,n)}function Qp(e,n){return El(4,4,e,n)}function Jp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $p(e,n,a){a=a!=null?a.concat([e]):null,El(4,4,Jp.bind(null,n,e),a)}function Nu(){}function tm(e,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Mu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function em(e,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Mu(n,s[1]))return s[0];if(s=e(),$a){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[s,n],s}function Ou(e,n,a){return a===void 0||(ha&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=ig(),fe.lanes|=e,Ma|=e,a)}function nm(e,n,a,s){return Wn(a,n)?a:Hr.current!==null?(e=Ou(e,a,s),Wn(e,n)||(pn=!0),e):(ha&42)===0?(pn=!0,e.memoizedState=a):(e=ig(),fe.lanes|=e,Ma|=e,n)}function im(e,n,a,s,u){var f=Y.p;Y.p=f!==0&&8>f?f:8;var x=R.T,A={};R.T=A,Bu(e,!1,n,a);try{var N=u(),X=R.S;if(X!==null&&X(A,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ct=wv(N,s);co(e,n,ct,jn(e))}else co(e,n,s,jn(e))}catch(_t){co(e,n,{then:function(){},status:"rejected",reason:_t},jn())}finally{Y.p=f,R.T=x}}function Ov(){}function Pu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=am(e).queue;im(e,u,n,pt,a===null?Ov:function(){return rm(e),a(s)})}function am(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:pt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function rm(e){var n=am(e).next.queue;co(e,n,{},jn())}function zu(){return Tn(Do)}function sm(){return en().memoizedState}function om(){return en().memoizedState}function Pv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();e=ga(a);var s=_a(n,e,a);s!==null&&(Pn(s,n,a),ho(s,n,a)),n={cache:Su()},e.payload=n;return}n=n.return}}function zv(e,n,a){var s=jn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(e)?cm(n,a):(a=hu(e,n,a,s),a!==null&&(Pn(a,e,s),um(a,n,s)))}function lm(e,n,a){var s=jn();co(e,n,a,s)}function co(e,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))cm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,A=f(x,a);if(u.hasEagerState=!0,u.eagerState=A,Wn(A,x))return ol(e,n,u,0),Ie===null&&sl(),!1}catch{}finally{}if(a=hu(e,n,u,s),a!==null)return Pn(a,e,s),um(a,n,s),!0}return!1}function Bu(e,n,a,s){if(s={lane:2,revertLane:Rf(),action:s,hasEagerState:!1,eagerState:null,next:null},Tl(e)){if(n)throw Error(r(479))}else n=hu(e,a,s,2),n!==null&&Pn(n,e,2)}function Tl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function cm(e,n){kr=_l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function um(e,n,a){if((a&4194176)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ti(e,a)}}var Ri={readContext:Tn,use:xl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je};Ri.useCacheRefresh=Je,Ri.useMemoCache=Je,Ri.useHostTransitionStatus=Je,Ri.useFormState=Je,Ri.useActionState=Je,Ri.useOptimistic=Je;var tr={readContext:Tn,use:xl,useCallback:function(e,n){return Vn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:jp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ml(4194308,4,Jp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ml(4194308,4,e,n)},useInsertionEffect:function(e,n){Ml(4,2,e,n)},useMemo:function(e,n){var a=Vn();n=n===void 0?null:n;var s=e();if($a){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Vn();if(a!==void 0){var u=a(n);if($a){se(!0);try{a(n)}finally{se(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=zv.bind(null,fe,e),[s.memoizedState,e]},useRef:function(e){var n=Vn();return e={current:e},n.memoizedState=e},useState:function(e){e=Du(e);var n=e.queue,a=lm.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Nu,useDeferredValue:function(e,n){var a=Vn();return Ou(a,e,n)},useTransition:function(){var e=Du(!1);return e=im.bind(null,fe,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=fe,u=Vn();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ie===null)throw Error(r(349));(Me&60)!==0||Np(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,jp(Pp.bind(null,s,f,e),[e]),s.flags|=2048,Wr(9,Op.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var e=Vn(),n=Ie.identifierPrefix;if(Ae){var a=Bi,s=zi;a=(s&~(1<<32-Zt(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=vl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Dv++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Vn().memoizedState=Pv.bind(null,fe)}};tr.useMemoCache=Ru,tr.useHostTransitionStatus=zu,tr.useFormState=Xp,tr.useActionState=Xp,tr.useOptimistic=function(e){var n=Vn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Bu.bind(null,fe,!0,a),a.dispatch=n,[e,n]};var da={readContext:Tn,use:xl,useCallback:tm,useContext:Tn,useEffect:Lu,useImperativeHandle:$p,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:em,useReducer:yl,useRef:Zp,useState:function(){return yl(Ii)},useDebugValue:Nu,useDeferredValue:function(e,n){var a=en();return nm(a,Oe.memoizedState,e,n)},useTransition:function(){var e=yl(Ii)[0],n=en().memoizedState;return[typeof e=="boolean"?e:lo(e),n]},useSyncExternalStore:Lp,useId:sm};da.useCacheRefresh=om,da.useMemoCache=Ru,da.useHostTransitionStatus=zu,da.useFormState=Wp,da.useActionState=Wp,da.useOptimistic=function(e,n){var a=en();return Fp(a,Oe,e,n)};var er={readContext:Tn,use:xl,useCallback:tm,useContext:Tn,useEffect:Lu,useImperativeHandle:$p,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:em,useReducer:wu,useRef:Zp,useState:function(){return wu(Ii)},useDebugValue:Nu,useDeferredValue:function(e,n){var a=en();return Oe===null?Ou(a,e,n):nm(a,Oe.memoizedState,e,n)},useTransition:function(){var e=wu(Ii)[0],n=en().memoizedState;return[typeof e=="boolean"?e:lo(e),n]},useSyncExternalStore:Lp,useId:sm};er.useCacheRefresh=om,er.useMemoCache=Ru,er.useHostTransitionStatus=zu,er.useFormState=Yp,er.useActionState=Yp,er.useOptimistic=function(e,n){var a=en();return Oe!==null?Fp(a,Oe,e,n):(a.baseState=e,[e,a.queue.dispatch])};function Fu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:E({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Iu={isMounted:function(e){return(e=e._reactInternals)?Z(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var s=jn(),u=ga(s);u.payload=n,a!=null&&(u.callback=a),n=_a(e,u,s),n!==null&&(Pn(n,e,s),ho(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=jn(),u=ga(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=_a(e,u,s),n!==null&&(Pn(n,e,s),ho(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=jn(),s=ga(a);s.tag=2,n!=null&&(s.callback=n),n=_a(e,s,a),n!==null&&(Pn(n,e,a),ho(n,e,a))}};function fm(e,n,a,s,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Ks(a,s)||!Ks(u,f):!0}function hm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Iu.enqueueReplaceState(n,n.state,null)}function nr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=E({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function dm(e){bl(e)}function pm(e){console.error(e)}function mm(e){bl(e)}function Al(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function gm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Hu(e,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(e,n)},a}function _m(e){return e=ga(e),e.tag=3,e}function vm(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){gm(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){gm(n,a,s),typeof u!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function Bv(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&fo(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 13:return Ai===null?Mf():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===gu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Tf(e,s,u)),!1;case 22:return a.flags|=65536,s===gu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Tf(e,s,u)),!1}throw Error(r(435,a.tag))}return Tf(e,s,u),Mf(),!1}if(Ae)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==mu&&(e=Error(r(422),{cause:s}),to($n(e,a)))):(s!==mu&&(n=Error(r(423),{cause:s}),to($n(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=$n(s,a),u=Hu(e.stateNode,s,u),ef(e,u),Ke!==4&&(Ke=2)),!1;var f=Error(r(520),{cause:s});if(f=$n(f,a),yo===null?yo=[f]:yo.push(f),Ke!==4&&(Ke=2),n===null)return!0;s=$n(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Hu(a.stateNode,s,e),ef(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=_m(u),vm(u,e,a,s),ef(a,u),!1}a=a.return}while(a!==null);return!1}var Sm=Error(r(461)),pn=!1;function yn(e,n,a,s){n.child=e===null?Tp(n,null,a,s):Qa(n,e.child,a,s)}function xm(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var A in s)A!=="ref"&&(x[A]=s[A])}else x=s;return ar(n),s=Eu(e,n,a,x,f,u),A=Tu(),e!==null&&!pn?(bu(e,n,u),Hi(e,n,u)):(Ae&&A&&du(n),n.flags|=1,yn(e,n,s,u),n.child)}function ym(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!uf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Mm(e,n,f,s,u)):(e=Ul(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!ju(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ks,a(x,s)&&e.ref===n.ref)return Hi(e,n,u)}return n.flags|=1,e=ya(f,s),e.ref=n.ref,e.return=n,n.child=e}function Mm(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(Ks(f,s)&&e.ref===n.ref)if(pn=!1,n.pendingProps=s=f,ju(e,u))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,Hi(e,n,u)}return Gu(e,n,a,s,u)}function Em(e,n,a){var s=n.pendingProps,u=s.children,f=(n.stateNode._pendingVisibility&2)!==0,x=e!==null?e.memoizedState:null;if(uo(e,n),s.mode==="hidden"||f){if((n.flags&128)!==0){if(s=x!==null?x.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Tm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(n,x!==null?x.cachePool:null),x!==null?bp(n,x):_u(),Ap(n);else return n.lanes=n.childLanes=536870912,Tm(e,n,x!==null?x.baseLanes|a:a,a)}else x!==null?(gl(n,x.cachePool),bp(n,x),fa(),n.memoizedState=null):(e!==null&&gl(n,null),_u(),fa());return yn(e,n,u,a),n.child}function Tm(e,n,a,s){var u=yu();return u=u===null?null:{parent:un._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&gl(n,null),_u(),Ap(n),e!==null&&fo(e,n,s,!0),null}function uo(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function Gu(e,n,a,s,u){return ar(n),a=Eu(e,n,a,s,void 0,u),s=Tu(),e!==null&&!pn?(bu(e,n,u),Hi(e,n,u)):(Ae&&s&&du(n),n.flags|=1,yn(e,n,a,u),n.child)}function bm(e,n,a,s,u,f){return ar(n),n.updateQueue=null,a=Up(n,s,a,u),Dp(e),s=Tu(),e!==null&&!pn?(bu(e,n,f),Hi(e,n,f)):(Ae&&s&&du(n),n.flags|=1,yn(e,n,a,f),n.child)}function Am(e,n,a,s,u){if(ar(n),n.stateNode===null){var f=zr,x=a.contextType;typeof x=="object"&&x!==null&&(f=Tn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Iu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},$u(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Tn(x):zr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Fu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Iu.enqueueReplaceState(f,f.state,null),mo(n,s,f,u),po(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,N=nr(a,A);f.props=N;var X=f.context,ct=a.contextType;x=zr,typeof ct=="object"&&ct!==null&&(x=Tn(ct));var _t=a.getDerivedStateFromProps;ct=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||X!==x)&&hm(n,f,s,x),ma=!1;var at=n.memoizedState;f.state=at,mo(n,s,f,u),po(),X=n.memoizedState,A||at!==X||ma?(typeof _t=="function"&&(Fu(n,a,_t,s),X=n.memoizedState),(N=ma||fm(n,a,N,s,at,X,x))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=X),f.props=s,f.state=X,f.context=x,s=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,tf(e,n),x=n.memoizedProps,ct=nr(a,x),f.props=ct,_t=n.pendingProps,at=f.context,X=a.contextType,N=zr,typeof X=="object"&&X!==null&&(N=Tn(X)),A=a.getDerivedStateFromProps,(X=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==_t||at!==N)&&hm(n,f,s,N),ma=!1,at=n.memoizedState,f.state=at,mo(n,s,f,u),po();var lt=n.memoizedState;x!==_t||at!==lt||ma||e!==null&&e.dependencies!==null&&Rl(e.dependencies)?(typeof A=="function"&&(Fu(n,a,A,s),lt=n.memoizedState),(ct=ma||fm(n,a,ct,s,at,lt,N)||e!==null&&e.dependencies!==null&&Rl(e.dependencies))?(X||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=N,s=ct):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,uo(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Qa(n,e.child,null,u),n.child=Qa(n,null,a,u)):yn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Hi(e,n,u),e}function Rm(e,n,a,s){return $s(),n.flags|=256,yn(e,n,a,s),n.child}var Vu={dehydrated:null,treeContext:null,retryLane:0};function ku(e){return{baseLanes:e,cachePool:wp()}}function Xu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function Cm(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?ua(n):fa(),Ae){var A=xn,N;if(N=A){t:{for(N=A,A=bi;N.nodeType!==8;){if(!A){A=null;break t}if(N=vi(N.nextSibling),N===null){A=null;break t}}A=N}A!==null?(n.memoizedState={dehydrated:A,treeContext:Za!==null?{id:zi,overflow:Bi}:null,retryLane:536870912},N=ri(18,null,null,0),N.stateNode=A,N.return=n,n.child=N,On=n,xn=null,N=!0):N=!1}N||Ka(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?n.lanes=16:n.lanes=536870912,null;Fi(n)}return A=s.children,s=s.fallback,u?(fa(),u=n.mode,A=qu({mode:"hidden",children:A},u),s=sr(s,u,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,u=n.child,u.memoizedState=ku(a),u.childLanes=Xu(e,x,a),n.memoizedState=Vu,s):(ua(n),Wu(n,A))}if(N=e.memoizedState,N!==null&&(A=N.dehydrated,A!==null)){if(f)n.flags&256?(ua(n),n.flags&=-257,n=Yu(e,n,a)):n.memoizedState!==null?(fa(),n.child=e.child,n.flags|=128,n=null):(fa(),u=s.fallback,A=n.mode,s=qu({mode:"visible",children:s.children},A),u=sr(u,A,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,Qa(n,e.child,null,a),s=n.child,s.memoizedState=ku(a),s.childLanes=Xu(e,x,a),n.memoizedState=Vu,n=u);else if(ua(n),A.data==="$!"){if(x=A.nextSibling&&A.nextSibling.dataset,x)var X=x.dgst;x=X,s=Error(r(419)),s.stack="",s.digest=x,to({value:s,source:null,stack:null}),n=Yu(e,n,a)}else if(pn||fo(e,n,a,!1),x=(a&e.childLanes)!==0,pn||x){if(x=Ie,x!==null){if(s=a&-a,(s&42)!==0)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=(s&(x.suspendedLanes|a))!==0?0:s,s!==0&&s!==N.retryLane)throw N.retryLane=s,ca(e,s),Pn(x,e,s),Sm}A.data==="$?"||Mf(),n=Yu(e,n,a)}else A.data==="$?"?(n.flags|=128,n.child=e.child,n=Jv.bind(null,e),A._reactRetry=n,n=null):(e=N.treeContext,xn=vi(A.nextSibling),On=n,Ae=!0,gi=null,bi=!1,e!==null&&(ti[ei++]=zi,ti[ei++]=Bi,ti[ei++]=Za,zi=e.id,Bi=e.overflow,Za=n),n=Wu(n,s.children),n.flags|=4096);return n}return u?(fa(),u=s.fallback,A=n.mode,N=e.child,X=N.sibling,s=ya(N,{mode:"hidden",children:s.children}),s.subtreeFlags=N.subtreeFlags&31457280,X!==null?u=ya(X,u):(u=sr(u,A,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,A=e.child.memoizedState,A===null?A=ku(a):(N=A.cachePool,N!==null?(X=un._currentValue,N=N.parent!==X?{parent:X,pool:X}:N):N=wp(),A={baseLanes:A.baseLanes|a,cachePool:N}),u.memoizedState=A,u.childLanes=Xu(e,x,a),n.memoizedState=Vu,s):(ua(n),a=e.child,e=a.sibling,a=ya(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Wu(e,n){return n=qu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function qu(e,n){return tg(e,n,0,null)}function Yu(e,n,a){return Qa(n,e.child,null,a),e=Wu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Qu(e.return,n,a)}function Zu(e,n,a,s,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=u)}function Dm(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;if(yn(e,n,s.children,a),s=cn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wm(e,a,n);else if(e.tag===19)wm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(zt(cn,s),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&ml(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Zu(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&ml(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Zu(n,!0,a,null,f);break;case"together":Zu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Hi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(fo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ya(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ya(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ju(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Rl(e)))}function Fv(e,n,a){switch(n.tag){case 3:vn(n,n.stateNode.containerInfo),pa(n,un,e.memoizedState.cache),$s();break;case 27:case 5:de(n);break;case 4:vn(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Cm(e,n,a):(ua(n),e=Hi(e,n,a),e!==null?e.sibling:null);ua(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(fo(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Dm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),zt(cn,cn.current),s)break;return null;case 22:case 23:return n.lanes=0,Em(e,n,a);case 24:pa(n,un,e.memoizedState.cache)}return Hi(e,n,a)}function Um(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!ju(e,a)&&(n.flags&128)===0)return pn=!1,Fv(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,Ae&&(n.flags&1048576)!==0&&mp(n,ul,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")uf(s)?(e=nr(s,e),n.tag=1,n=Am(null,n,s,e,a)):(n.tag=0,n=Gu(null,n,s,e,a));else{if(s!=null){if(u=s.$$typeof,u===b){n.tag=11,n=xm(null,n,s,e,a);break t}else if(u===v){n.tag=14,n=ym(null,n,s,e,a);break t}}throw n=k(s)||s,Error(r(306,n,""))}}return n;case 0:return Gu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=nr(s,n.pendingProps),Am(e,n,s,u,a);case 3:t:{if(vn(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var f=n.pendingProps;u=n.memoizedState,s=u.element,tf(e,n),mo(n,f,null,a);var x=n.memoizedState;if(f=x.cache,pa(n,un,f),f!==u.cache&&Ju(n,[un],a,!0),po(),f=x.element,u.isDehydrated)if(u={element:f,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=Rm(e,n,f,a);break t}else if(f!==s){s=$n(Error(r(424)),n),to(s),n=Rm(e,n,f,a);break t}else for(xn=vi(n.stateNode.containerInfo.firstChild),On=n,Ae=!0,gi=null,bi=!0,a=Tp(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if($s(),f===s){n=Hi(e,n,a);break t}yn(e,n,f,a)}n=n.child}return n;case 26:return uo(e,n),e===null?(a=Og(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,s=kl(re.current).createElement(a),s[sn]=n,s[on]=e,Mn(s,a,e),Q(s),n.stateNode=s):n.memoizedState=Og(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return de(n),e===null&&Ae&&(s=n.stateNode=Ug(n.type,n.pendingProps,re.current),On=n,bi=!0,xn=vi(s.firstChild)),s=n.pendingProps.children,e!==null||Ae?yn(e,n,s,a):n.child=Qa(n,null,s,a),uo(e,n),n.child;case 5:return e===null&&Ae&&((u=s=xn)&&(s=pS(s,n.type,n.pendingProps,bi),s!==null?(n.stateNode=s,On=n,xn=vi(s.firstChild),bi=!1,u=!0):u=!1),u||Ka(n)),de(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,s=f.children,zf(u,f)?s=null:x!==null&&zf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Eu(e,n,Uv,null,null,a),Do._currentValue=u),uo(e,n),yn(e,n,s,a),n.child;case 6:return e===null&&Ae&&((e=a=xn)&&(a=mS(a,n.pendingProps,bi),a!==null?(n.stateNode=a,On=n,xn=null,e=!0):e=!1),e||Ka(n)),null;case 13:return Cm(e,n,a);case 4:return vn(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Qa(n,null,s,a):yn(e,n,s,a),n.child;case 11:return xm(e,n,n.type,n.pendingProps,a);case 7:return yn(e,n,n.pendingProps,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,pa(n,n.type,s.value),yn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,ar(n),u=Tn(u),s=s(u),n.flags|=1,yn(e,n,s,a),n.child;case 14:return ym(e,n,n.type,n.pendingProps,a);case 15:return Mm(e,n,n.type,n.pendingProps,a);case 19:return Dm(e,n,a);case 22:return Em(e,n,a);case 24:return ar(n),s=Tn(un),e===null?(u=yu(),u===null&&(u=Ie,f=Su(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},$u(n),pa(n,un,u)):((e.lanes&a)!==0&&(tf(e,n),mo(n,null,null,a),po()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),pa(n,un,s)):(s=f.cache,pa(n,un,s),s!==u.cache&&Ju(n,[un],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Ku=Ct(null),ir=null,Gi=null;function pa(e,n,a){zt(Ku,n._currentValue),n._currentValue=a}function Vi(e){e._currentValue=Ku.current,Qt(Ku)}function Qu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Ju(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var N=0;N<n.length;N++)if(A.context===n[N]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Qu(f.return,a,e),s||(x=null);break t}f=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Qu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function fo(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var A=u.type;Wn(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===I.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Do):e=[Do])}u=u.return}e!==null&&Ju(n,e,a,s),n.flags|=262144}function Rl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ar(e){ir=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return Lm(ir,e)}function Cl(e,n){return ir===null&&ar(e),Lm(e,n)}function Lm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(r(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return a}var ma=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(qe&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=ll(e),dp(e,null,a),n}return ol(e,s,n,a),ll(e)}function ho(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ti(e,a)}}function ef(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var nf=!1;function po(){if(nf){var e=Vr;if(e!==null)throw e}}function mo(e,n,a,s){nf=!1;var u=e.updateQueue;ma=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var N=A,X=N.next;N.next=null,x===null?f=X:x.next=X,x=N;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,A=ct.lastBaseUpdate,A!==x&&(A===null?ct.firstBaseUpdate=X:A.next=X,ct.lastBaseUpdate=N))}if(f!==null){var _t=u.baseState;x=0,ct=X=N=null,A=f;do{var at=A.lane&-536870913,lt=at!==A.lane;if(lt?(Me&at)===at:(s&at)===at){at!==0&&at===Gr&&(nf=!0),ct!==null&&(ct=ct.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var kt=e,ae=A;at=n;var Qe=a;switch(ae.tag){case 1:if(kt=ae.payload,typeof kt=="function"){_t=kt.call(Qe,_t,at);break t}_t=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ae.payload,at=typeof kt=="function"?kt.call(Qe,_t,at):kt,at==null)break t;_t=E({},_t,at);break t;case 2:ma=!0}}at=A.callback,at!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[at]:lt.push(at))}else lt={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ct===null?(X=ct=lt,N=_t):ct=ct.next=lt,x|=at;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ct===null&&(N=_t),u.baseState=N,u.firstBaseUpdate=X,u.lastBaseUpdate=ct,f===null&&(u.shared.lanes=0),Ma|=x,e.lanes=x,e.memoizedState=_t}}function Nm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Om(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Nm(a[e],n)}function go(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==u)}}catch(A){Fe(n,n.return,A)}}function va(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var x=s.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var N=a;try{A()}catch(X){Fe(u,N,X)}}}s=s.next}while(s!==f)}}catch(X){Fe(n,n.return,X)}}function Pm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Om(n,a)}catch(s){Fe(e,e.return,s)}}}function zm(e,n,a){a.props=nr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Fe(e,n,s)}}function rr(e,n){try{var a=e.ref;if(a!==null){var s=e.stateNode;switch(e.tag){case 26:case 27:case 5:var u=s;break;default:u=s}typeof a=="function"?e.refCleanup=a(u):a.current=u}}catch(f){Fe(e,n,f)}}function qn(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function Bm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function Fm(e,n,a){try{var s=e.stateNode;cS(s,e.type,a,n),s[on]=n}catch(u){Fe(e,e.return,u)}}function Im(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function af(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Im(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Vl));else if(s!==4&&s!==27&&(e=e.child,e!==null))for(rf(e,n,a),e=e.sibling;e!==null;)rf(e,n,a),e=e.sibling}function wl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&s!==27&&(e=e.child,e!==null))for(wl(e,n,a),e=e.sibling;e!==null;)wl(e,n,a),e=e.sibling}var ki=!1,je=!1,sf=!1,Hm=typeof WeakSet=="function"?WeakSet:Set,mn=null,Gm=!1;function Iv(e,n){if(e=e.containerInfo,Of=jl,e=ap(e),ou(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,A=-1,N=-1,X=0,ct=0,_t=e,at=null;e:for(;;){for(var lt;_t!==a||u!==0&&_t.nodeType!==3||(A=x+u),_t!==f||s!==0&&_t.nodeType!==3||(N=x+s),_t.nodeType===3&&(x+=_t.nodeValue.length),(lt=_t.firstChild)!==null;)at=_t,_t=lt;for(;;){if(_t===e)break e;if(at===a&&++X===u&&(A=x),at===f&&++ct===s&&(N=x),(lt=_t.nextSibling)!==null)break;_t=at,at=_t.parentNode}_t=lt}a=A===-1||N===-1?null:{start:A,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:e,selectionRange:a},jl=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var kt=nr(a.type,u,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(kt,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Fe(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)If(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":If(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}return kt=Gm,Gm=!1,kt}function Vm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(e,a),s&4&&go(5,a);break;case 1:if(Wi(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(A){Fe(a,a.return,A)}else{var u=nr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(A){Fe(a,a.return,A)}}s&64&&Pm(a),s&512&&rr(a,a.return);break;case 3:if(Wi(e,a),s&64&&(s=a.updateQueue,s!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Om(s,e)}catch(A){Fe(a,a.return,A)}}break;case 26:Wi(e,a),s&512&&rr(a,a.return);break;case 27:case 5:Wi(e,a),n===null&&s&4&&Bm(a),s&512&&rr(a,a.return);break;case 12:Wi(e,a);break;case 13:Wi(e,a),s&4&&Wm(e,a);break;case 22:if(u=a.memoizedState!==null||ki,!u){n=n!==null&&n.memoizedState!==null||je;var f=ki,x=je;ki=u,(je=n)&&!x?Sa(e,a,(a.subtreeFlags&8772)!==0):Wi(e,a),ki=f,je=x}s&512&&(a.memoizedProps.mode==="manual"?rr(a,a.return):qn(a,a.return));break;default:Wi(e,a)}}function km(e){var n=e.alternate;n!==null&&(e.alternate=null,km(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Vs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,Yn=!1;function Xi(e,n,a){for(a=a.child;a!==null;)Xm(e,n,a),a=a.sibling}function Xm(e,n,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Kt,a)}catch{}switch(a.tag){case 26:je||qn(a,n),Xi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||qn(a,n);var s=nn,u=Yn;for(nn=a.stateNode,Xi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Vs(a),nn=s,Yn=u;break;case 5:je||qn(a,n);case 6:u=nn;var f=Yn;if(nn=null,Xi(e,n,a),nn=u,Yn=f,nn!==null)if(Yn)try{e=nn,s=a.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)}catch(x){Fe(a,n,x)}else try{nn.removeChild(a.stateNode)}catch(x){Fe(a,n,x)}break;case 18:nn!==null&&(Yn?(n=nn,a=a.stateNode,n.nodeType===8?Ff(n.parentNode,a):n.nodeType===1&&Ff(n,a),Oo(n)):Ff(nn,a.stateNode));break;case 4:s=nn,u=Yn,nn=a.stateNode.containerInfo,Yn=!0,Xi(e,n,a),nn=s,Yn=u;break;case 0:case 11:case 14:case 15:je||va(2,a,n),je||va(4,a,n),Xi(e,n,a);break;case 1:je||(qn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&zm(a,n,s)),Xi(e,n,a);break;case 21:Xi(e,n,a);break;case 22:je||qn(a,n),je=(s=je)||a.memoizedState!==null,Xi(e,n,a),je=s;break;default:Xi(e,n,a)}}function Wm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oo(e)}catch(a){Fe(n,n.return,a)}}function Hv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Hm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Hm),n;default:throw Error(r(435,e.tag))}}function of(e,n){var a=Hv(e);n.forEach(function(s){var u=$v.bind(null,e,s);a.has(s)||(a.add(s),s.then(u,u))})}function ii(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:case 5:nn=A.stateNode,Yn=!1;break t;case 3:nn=A.stateNode.containerInfo,Yn=!0;break t;case 4:nn=A.stateNode.containerInfo,Yn=!0;break t}A=A.return}if(nn===null)throw Error(r(160));Xm(f,x,u),nn=null,Yn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)qm(n,e),n=n.sibling}var _i=null;function qm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(n,e),ai(e),s&4&&(va(3,e,e.return),go(3,e),va(5,e,e.return));break;case 1:ii(n,e),ai(e),s&512&&(je||a===null||qn(a,a.return)),s&64&&ki&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=_i;if(ii(n,e),ai(e),s&512&&(je||a===null||qn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Xa]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Mn(f,s,a),f[sn]=e,Q(f),s=f;break t;case"link":var x=Bg("link","href",u).get(s+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(f=x[A],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}f=u.createElement(s),Mn(f,s,a),u.head.appendChild(f);break;case"meta":if(x=Bg("meta","content",u).get(s+(a.content||""))){for(A=0;A<x.length;A++)if(f=x[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}f=u.createElement(s),Mn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=e,Q(f),s=f}e.stateNode=s}else Fg(u,e.type,e.stateNode);else e.stateNode=zg(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Fg(u,e.type,e.stateNode):zg(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Fm(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&e.alternate===null){u=e.stateNode,f=e.memoizedProps;try{for(var N=u.firstChild;N;){var X=N.nextSibling,ct=N.nodeName;N[Xa]||ct==="HEAD"||ct==="BODY"||ct==="SCRIPT"||ct==="STYLE"||ct==="LINK"&&N.rel.toLowerCase()==="stylesheet"||u.removeChild(N),N=X}for(var _t=e.type,at=u.attributes;at.length;)u.removeAttributeNode(at[0]);Mn(u,_t,f),u[sn]=e,u[on]=f}catch(kt){Fe(e,e.return,kt)}}case 5:if(ii(n,e),ai(e),s&512&&(je||a===null||qn(a,a.return)),e.flags&32){u=e.stateNode;try{Hn(u,"")}catch(kt){Fe(e,e.return,kt)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,Fm(e,u,a!==null?a.memoizedProps:u)),s&1024&&(sf=!0);break;case 6:if(ii(n,e),ai(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(kt){Fe(e,e.return,kt)}}break;case 3:if(ql=null,u=_i,_i=Xl(n.containerInfo),ii(n,e),_i=u,ai(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Oo(n.containerInfo)}catch(kt){Fe(e,e.return,kt)}sf&&(sf=!1,Ym(e));break;case 4:s=_i,_i=Xl(e.stateNode.containerInfo),ii(n,e),ai(e),_i=s;break;case 12:ii(n,e),ai(e);break;case 13:ii(n,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(gf=ht()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,of(e,s)));break;case 22:if(s&512&&(je||a===null||qn(a,a.return)),N=e.memoizedState!==null,X=a!==null&&a.memoizedState!==null,ct=ki,_t=je,ki=ct||N,je=_t||X,ii(n,e),je=_t,ki=ct,ai(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=N?n._visibility&-2:n._visibility|1,N&&(n=ki||je,a===null||X||n||qr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){X=a=n;try{if(u=X.stateNode,N)f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{x=X.stateNode,A=X.memoizedProps.style;var lt=A!=null&&A.hasOwnProperty("display")?A.display:null;x.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(kt){Fe(X,X.return,kt)}}}else if(n.tag===6){if(a===null){X=n;try{X.stateNode.nodeValue=N?"":X.memoizedProps}catch(kt){Fe(X,X.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,of(e,a))));break;case 19:ii(n,e),ai(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,of(e,s)));break;case 21:break;default:ii(n,e),ai(e)}}function ai(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(Im(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var u=s.stateNode,f=af(e);wl(e,f,u);break;case 5:var x=s.stateNode;s.flags&32&&(Hn(x,""),s.flags&=-33);var A=af(e);wl(e,A,x);break;case 3:case 4:var N=s.stateNode.containerInfo,X=af(e);rf(e,X,N);break;default:throw Error(r(161))}}}catch(ct){Fe(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ym(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ym(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Wi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Vm(e,n.alternate,n),n=n.sibling}function qr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),qr(n);break;case 1:qn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&zm(n,n.return,a),qr(n);break;case 26:case 27:case 5:qn(n,n.return),qr(n);break;case 22:qn(n,n.return),n.memoizedState===null&&qr(n);break;default:qr(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(u,f,a),go(4,f);break;case 1:if(Sa(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(X){Fe(s,s.return,X)}if(s=f,u=s.updateQueue,u!==null){var A=s.stateNode;try{var N=u.shared.hiddenCallbacks;if(N!==null)for(u.shared.hiddenCallbacks=null,u=0;u<N.length;u++)Nm(N[u],A)}catch(X){Fe(s,s.return,X)}}a&&x&64&&Pm(f),rr(f,f.return);break;case 26:case 27:case 5:Sa(u,f,a),a&&s===null&&x&4&&Bm(f),rr(f,f.return);break;case 12:Sa(u,f,a);break;case 13:Sa(u,f,a),a&&x&4&&Wm(u,f);break;case 22:f.memoizedState===null&&Sa(u,f,a),rr(f,f.return);break;default:Sa(u,f,a)}n=n.sibling}}function lf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ro(a))}function cf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e))}function xa(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zm(e,n,a,s),n=n.sibling}function Zm(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xa(e,n,a,s),u&2048&&go(9,n);break;case 3:xa(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e)));break;case 12:if(u&2048){xa(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,A=f.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Fe(n,n.return,N)}}else xa(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?xa(e,n,a,s):_o(e,n):f._visibility&4?xa(e,n,a,s):(f._visibility|=4,Yr(e,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&lf(n.alternate,n);break;case 24:xa(e,n,a,s),u&2048&&cf(n.alternate,n);break;default:xa(e,n,a,s)}}function Yr(e,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,x=n,A=a,N=s,X=x.flags;switch(x.tag){case 0:case 11:case 15:Yr(f,x,A,N,u),go(8,x);break;case 23:break;case 22:var ct=x.stateNode;x.memoizedState!==null?ct._visibility&4?Yr(f,x,A,N,u):_o(f,x):(ct._visibility|=4,Yr(f,x,A,N,u)),u&&X&2048&&lf(x.alternate,x);break;case 24:Yr(f,x,A,N,u),u&&X&2048&&cf(x.alternate,x);break;default:Yr(f,x,A,N,u)}n=n.sibling}}function _o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:_o(a,s),u&2048&&lf(s.alternate,s);break;case 24:_o(a,s),u&2048&&cf(s.alternate,s);break;default:_o(a,s)}n=n.sibling}}var vo=8192;function Zr(e){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)jm(e),e=e.sibling}function jm(e){switch(e.tag){case 26:Zr(e),e.flags&vo&&e.memoizedState!==null&&CS(_i,e.memoizedState,e.memoizedProps);break;case 5:Zr(e);break;case 3:case 4:var n=_i;_i=Xl(e.stateNode.containerInfo),Zr(e),_i=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=vo,vo=16777216,Zr(e),vo=n):Zr(e));break;default:Zr(e)}}function Km(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function So(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Jm(s,e)}Km(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qm(e),e=e.sibling}function Qm(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&va(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Dl(e)):So(e);break;default:So(e)}}function Dl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Jm(s,e)}Km(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:va(8,n,n.return),Dl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,Dl(n));break;default:Dl(n)}e=e.sibling}}function Jm(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ro(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=e;mn!==null;){s=mn;var u=s.sibling,f=s.return;if(km(s),s===a){mn=null;break t}if(u!==null){u.return=f,mn=u;break t}mn=f}}}function Gv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,n,a,s){return new Gv(e,n,a,s)}function uf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ya(e,n){var a=e.alternate;return a===null?(a=ri(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $m(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ul(e,n,a,s,u,f){var x=0;if(s=e,typeof e=="function")uf(e)&&(x=1);else if(typeof e=="string")x=AS(e,a,Ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return sr(a.children,u,f,n);case m:x=8,u|=24;break;case g:return e=ri(12,a,n,u|2),e.elementType=g,e.lanes=f,e;case w:return e=ri(13,a,n,u),e.elementType=w,e.lanes=f,e;case y:return e=ri(19,a,n,u),e.elementType=y,e.lanes=f,e;case O:return tg(a,u,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case M:x=10;break t;case S:x=9;break t;case b:x=11;break t;case v:x=14;break t;case B:x=16,s=null;break t}x=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=ri(x,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function sr(e,n,a,s){return e=ri(7,e,s,n),e.lanes=a,e}function tg(e,n,a,s){e=ri(22,e,s,n),e.elementType=O,e.lanes=a;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=u._current;if(f===null)throw Error(r(456));if((u._pendingVisibility&2)===0){var x=ca(f,2);x!==null&&(u._pendingVisibility|=2,Pn(x,f,2))}},attach:function(){var f=u._current;if(f===null)throw Error(r(456));if((u._pendingVisibility&2)!==0){var x=ca(f,2);x!==null&&(u._pendingVisibility&=-3,Pn(x,f,2))}}};return e.stateNode=u,e}function ff(e,n,a){return e=ri(6,e,null,n),e.lanes=a,e}function hf(e,n,a){return n=ri(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function qi(e){e.flags|=4}function eg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ig(n)){if(n=ni.current,n!==null&&((Me&4194176)===Me?Ai!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==Ai))throw no=gu,vp;e.flags|=8192}}function Ll(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Te():536870912,e.lanes|=n,Kr|=n)}function xo(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&31457280,s|=u.flags&31457280,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Vv(e,n,a){var s=n.pendingProps;switch(pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Vi(un),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Js(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gi!==null&&(xf(gi),gi=null))),We(n),null;case 26:return a=n.memoizedState,e===null?(qi(n),a!==null?(We(n),eg(n,a)):(We(n),n.flags&=-16777217)):a?a!==e.memoizedState?(qi(n),We(n),eg(n,a)):(We(n),n.flags&=-16777217):(e.memoizedProps!==s&&qi(n),We(n),n.flags&=-16777217),null;case 27:Xt(n),a=re.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}e=Ee.current,Js(n)?gp(n):(e=Ug(u,s,a),n.stateNode=e,qi(n))}return We(n),null;case 5:if(Xt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(e=Ee.current,Js(n))gp(n);else{switch(u=kl(re.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}e[sn]=n,e[on]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Mn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&qi(n)}}return We(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&qi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=re.current,Js(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=On,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||bg(e.nodeValue,a)),e||Ka(n)}else e=kl(e).createTextNode(s),e[sn]=n,n.stateNode=e}return We(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Js(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[sn]=n}else $s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else gi!==null&&(xf(gi),gi=null),u=!0;if(!u)return n.flags&256?(Fi(n),n):(Fi(n),null)}if(Fi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),We(n),null;case 4:return oe(),e===null&&Uf(n.stateNode.containerInfo),We(n),null;case 10:return Vi(n.type),We(n),null;case 19:if(Qt(cn),u=n.memoizedState,u===null)return We(n),null;if(s=(n.flags&128)!==0,f=u.rendering,f===null)if(s)xo(u,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=ml(e),f!==null){for(n.flags|=128,xo(u,!1),e=f.updateQueue,n.updateQueue=e,Ll(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)$m(a,e),a=a.sibling;return zt(cn,cn.current&1|2),n.child}e=e.sibling}u.tail!==null&&ht()>Nl&&(n.flags|=128,s=!0,xo(u,!1),n.lanes=4194304)}else{if(!s)if(e=ml(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Ll(n,e),xo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ae)return We(n),null}else 2*ht()-u.renderingStartTime>Nl&&a!==536870912&&(n.flags|=128,s=!0,xo(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ht(),n.sibling=null,e=cn.current,zt(cn,s?e&1|2:e&1),n):(We(n),null);case 22:case 23:return Fi(n),vu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Qt(Ja),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(un),We(n),null;case 25:return null}throw Error(r(156,n.tag))}function kv(e,n){switch(pu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(un),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Xt(n),null;case 13:if(Fi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));$s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Qt(cn),null;case 4:return oe(),null;case 10:return Vi(n.type),null;case 22:case 23:return Fi(n),vu(),e!==null&&Qt(Ja),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(un),null;case 25:return null;default:return null}}function ng(e,n){switch(pu(n),n.tag){case 3:Vi(un),oe();break;case 26:case 27:case 5:Xt(n);break;case 4:oe();break;case 13:Fi(n);break;case 19:Qt(cn);break;case 10:Vi(n.type);break;case 22:case 23:Fi(n),vu(),e!==null&&Qt(Ja);break;case 24:Vi(un)}}var Xv={getCacheForType:function(e){var n=Tn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Wv=typeof WeakMap=="function"?WeakMap:Map,qe=0,Ie=null,me=null,Me=0,He=0,Zn=null,Yi=!1,jr=!1,df=!1,Zi=0,Ke=0,Ma=0,or=0,pf=0,si=0,Kr=0,yo=null,Ci=null,mf=!1,gf=0,Nl=1/0,Ol=null,Ea=null,Pl=!1,lr=null,Mo=0,_f=0,vf=null,Eo=0,Sf=null;function jn(){if((qe&2)!==0&&Me!==0)return Me&-Me;if(R.T!==null){var e=Gr;return e!==0?e:Rf()}return Gs()}function ig(){si===0&&(si=(Me&536870912)===0||Ae?rn():536870912);var e=ni.current;return e!==null&&(e.flags|=32),si}function Pn(e,n,a){(e===Ie&&He===2||e.cancelPendingCommit!==null)&&(Qr(e,0),ji(e,Me,si,!1)),Un(e,a),((qe&2)===0||e!==Ie)&&(e===Ie&&((qe&2)===0&&(or|=a),Ke===4&&ji(e,Me,si,!1)),wi(e))}function ag(e,n,a){if((qe&6)!==0)throw Error(r(327));var s=!a&&(n&60)===0&&(n&e.expiredLanes)===0||$t(e,n),u=s?Zv(e,n):Ef(e,n,!0),f=s;do{if(u===0){jr&&!s&&ji(e,n,0,!1);break}else if(u===6)ji(e,n,0,!Yi);else{if(a=e.current.alternate,f&&!qv(a)){u=Ef(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=yo;var N=A.current.memoizedState.isDehydrated;if(N&&(Qr(A,x).flags|=256),x=Ef(A,x,!1),x!==2){if(df&&!N){A.errorRecoveryDisabledLanes|=f,or|=f,u=4;break t}f=Ci,Ci=u,f!==null&&xf(f)}u=x}if(f=!1,u!==2)continue}}if(u===1){Qr(e,0),ji(e,n,0,!0);break}t:{switch(s=e,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){ji(s,n,si,!Yi);break t}break;case 2:Ci=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=gf+300-ht(),10<f)){if(ji(s,n,si,!Yi),Ut(s,0)!==0)break t;s.timeoutHandle=Cg(rg.bind(null,s,a,Ci,Ol,mf,n,si,or,Kr,Yi,2,-0,0),f);break t}rg(s,a,Ci,Ol,mf,n,si,or,Kr,Yi,0,-0,0)}}break}while(!0);wi(e)}function xf(e){Ci===null?Ci=e:Ci.push.apply(Ci,e)}function rg(e,n,a,s,u,f,x,A,N,X,ct,_t,at){var lt=n.subtreeFlags;if((lt&8192||(lt&16785408)===16785408)&&(wo={stylesheets:null,count:0,unsuspend:RS},jm(n),n=wS(),n!==null)){e.cancelPendingCommit=n(hg.bind(null,e,a,s,u,x,A,N,1,_t,at)),ji(e,f,x,!X);return}hg(e,a,s,u,x,A,N,ct,_t,at)}function qv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Wn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ji(e,n,a,s){n&=~pf,n&=~or,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Zt(u),x=1<<f;s[f]=-1,u&=~x}a!==0&&Hs(e,a,n)}function zl(){return(qe&6)===0?(To(0),!1):!0}function yf(){if(me!==null){if(He===0)var e=me.return;else e=me,Gi=ir=null,Au(e),Ir=null,io=0,e=me;for(;e!==null;)ng(e.alternate,e),e=e.return;me=null}}function Qr(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,fS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),yf(),Ie=e,me=a=ya(e.current,null),Me=n,He=0,Zn=null,Yi=!1,jr=$t(e,n),df=!1,Kr=si=pf=or=Ma=Ke=0,Ci=yo=null,mf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Zt(s),f=1<<u;n|=e[u],s&=~f}return Zi=n,sl(),a}function sg(e,n){fe=null,R.H=Ri,n===eo?(n=yp(),He=3):n===vp?(n=yp(),He=4):He=n===Sm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,me===null&&(Ke=1,Al(e,$n(n,e.current)))}function og(){var e=R.H;return R.H=Ri,e===null?Ri:e}function lg(){var e=R.A;return R.A=Xv,e}function Mf(){Ke=4,Yi||(Me&4194176)!==Me&&ni.current!==null||(jr=!0),(Ma&134217727)===0&&(or&134217727)===0||Ie===null||ji(Ie,Me,si,!1)}function Ef(e,n,a){var s=qe;qe|=2;var u=og(),f=lg();(Ie!==e||Me!==n)&&(Ol=null,Qr(e,n)),n=!1;var x=Ke;t:do try{if(He!==0&&me!==null){var A=me,N=Zn;switch(He){case 8:yf(),x=6;break t;case 3:case 2:case 6:ni.current===null&&(n=!0);var X=He;if(He=0,Zn=null,Jr(e,A,N,X),a&&jr){x=0;break t}break;default:X=He,He=0,Zn=null,Jr(e,A,N,X)}}Yv(),x=Ke;break}catch(ct){sg(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Gi=ir=null,qe=s,R.H=u,R.A=f,me===null&&(Ie=null,Me=0,sl()),x}function Yv(){for(;me!==null;)cg(me)}function Zv(e,n){var a=qe;qe|=2;var s=og(),u=lg();Ie!==e||Me!==n?(Ol=null,Nl=ht()+500,Qr(e,n)):jr=$t(e,n);t:do try{if(He!==0&&me!==null){n=me;var f=Zn;e:switch(He){case 1:He=0,Zn=null,Jr(e,n,f,1);break;case 2:if(Sp(f)){He=0,Zn=null,ug(n);break}n=function(){He===2&&Ie===e&&(He=7),wi(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Sp(f)?(He=0,Zn=null,ug(n)):(He=0,Zn=null,Jr(e,n,f,7));break;case 5:var x=null;switch(me.tag){case 26:x=me.memoizedState;case 5:case 27:var A=me;if(!x||Ig(x)){He=0,Zn=null;var N=A.sibling;if(N!==null)me=N;else{var X=A.return;X!==null?(me=X,Bl(X)):me=null}break e}}He=0,Zn=null,Jr(e,n,f,5);break;case 6:He=0,Zn=null,Jr(e,n,f,6);break;case 8:yf(),Ke=6;break t;default:throw Error(r(462))}}jv();break}catch(ct){sg(e,ct)}while(!0);return Gi=ir=null,R.H=s,R.A=u,qe=a,me!==null?0:(Ie=null,Me=0,sl(),Ke)}function jv(){for(;me!==null&&!T();)cg(me)}function cg(e){var n=Um(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?Bl(e):me=n}function ug(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=bm(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=bm(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Au(n);default:ng(a,n),n=me=$m(n,Zi),n=Um(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?Bl(e):me=n}function Jr(e,n,a,s){Gi=ir=null,Au(n),Ir=null,io=0;var u=n.return;try{if(Bv(e,u,n,a,Me)){Ke=1,Al(e,$n(a,e.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;Ke=1,Al(e,$n(a,e.current)),me=null;return}n.flags&32768?(Ae||s===1?e=!0:jr||(Me&536870912)!==0?e=!1:(Yi=e=!0,(s===2||s===3||s===6)&&(s=ni.current,s!==null&&s.tag===13&&(s.flags|=16384))),fg(n,e)):Bl(n)}function Bl(e){var n=e;do{if((n.flags&32768)!==0){fg(n,Yi);return}e=n.return;var a=Vv(n.alternate,n,Zi);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Ke===0&&(Ke=5)}function fg(e,n){do{var a=kv(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ke=6,me=null}function hg(e,n,a,s,u,f,x,A,N,X){var ct=R.T,_t=Y.p;try{Y.p=2,R.T=null,Kv(e,n,a,s,_t,u,f,x,A,N,X)}finally{R.T=ct,Y.p=_t}}function Kv(e,n,a,s,u,f,x,A){do $r();while(lr!==null);if((qe&6)!==0)throw Error(r(327));var N=e.finishedWork;if(s=e.finishedLanes,N===null)return null;if(e.finishedWork=null,e.finishedLanes=0,N===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var X=N.lanes|N.childLanes;if(X|=fu,Ko(e,s,X,f,x,A),e===Ie&&(me=Ie=null,Me=0),(N.subtreeFlags&10256)===0&&(N.flags&10256)===0||Pl||(Pl=!0,_f=X,vf=a,tS(Dt,function(){return $r(),null})),a=(N.flags&15990)!==0,(N.subtreeFlags&15990)!==0||a?(a=R.T,R.T=null,f=Y.p,Y.p=2,x=qe,qe|=4,Iv(e,N),qm(N,e),xv(Pf,e.containerInfo),jl=!!Of,Pf=Of=null,e.current=N,Vm(e,N.alternate,N),nt(),qe=x,Y.p=f,R.T=a):e.current=N,Pl?(Pl=!1,lr=e,Mo=s):dg(e,X),X=e.pendingLanes,X===0&&(Ea=null),It(N.stateNode),wi(e),n!==null)for(u=e.onRecoverableError,N=0;N<n.length;N++)X=n[N],u(X.value,{componentStack:X.stack});return(Mo&3)!==0&&$r(),X=e.pendingLanes,(s&4194218)!==0&&(X&42)!==0?e===Sf?Eo++:(Eo=0,Sf=e):Eo=0,To(0),null}function dg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ro(n)))}function $r(){if(lr!==null){var e=lr,n=_f;_f=0;var a=Rr(Mo),s=R.T,u=Y.p;try{if(Y.p=32>a?32:a,R.T=null,lr===null)var f=!1;else{a=vf,vf=null;var x=lr,A=Mo;if(lr=null,Mo=0,(qe&6)!==0)throw Error(r(331));var N=qe;if(qe|=4,Qm(x.current),Zm(x,x.current,A,a),qe=N,To(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Kt,x)}catch{}f=!0}return f}finally{Y.p=u,R.T=s,dg(e,n)}}return!1}function pg(e,n,a){n=$n(a,n),n=Hu(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(Un(e,2),wi(e))}function Fe(e,n,a){if(e.tag===3)pg(e,e,a);else for(;n!==null;){if(n.tag===3){pg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ea===null||!Ea.has(s))){e=$n(a,e),a=_m(2),s=_a(n,a,2),s!==null&&(vm(a,s,n,e),Un(s,2),wi(s));break}}n=n.return}}function Tf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Wv;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(df=!0,u.add(a),e=Qv.bind(null,e,n,a),n.then(e,e))}function Qv(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ie===e&&(Me&a)===a&&(Ke===4||Ke===3&&(Me&62914560)===Me&&300>ht()-gf?(qe&2)===0&&Qr(e,0):pf|=a,Kr===Me&&(Kr=0)),wi(e)}function mg(e,n){n===0&&(n=Te()),e=ca(e,n),e!==null&&(Un(e,n),wi(e))}function Jv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),mg(e,a)}function $v(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),mg(e,a)}function tS(e,n){return Wt(e,n)}var Fl=null,ts=null,bf=!1,Il=!1,Af=!1,cr=0;function wi(e){e!==ts&&e.next===null&&(ts===null?Fl=ts=e:ts=ts.next=e),Il=!0,bf||(bf=!0,nS(eS))}function To(e,n){if(!Af&&Il){Af=!0;do for(var a=!1,s=Fl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var x=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-Zt(42|e)+1)-1,f&=u&~(x&~A),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,vg(s,f))}else f=Me,f=Ut(s,s===Ie?f:0),(f&3)===0||$t(s,f)||(a=!0,vg(s,f));s=s.next}while(a);Af=!1}}function eS(){Il=bf=!1;var e=0;cr!==0&&(uS()&&(e=cr),cr=0);for(var n=ht(),a=null,s=Fl;s!==null;){var u=s.next,f=gg(s,n);f===0?(s.next=null,a===null?Fl=u:a.next=u,u===null&&(ts=a)):(a=s,(e!==0||(f&3)!==0)&&(Il=!0)),s=u}To(e)}function gg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Zt(f),A=1<<x,N=u[x];N===-1?((A&a)===0||(A&s)!==0)&&(u[x]=Xe(A,n)):N<=n&&(e.expiredLanes|=A),f&=~A}if(n=Ie,a=Me,a=Ut(e,e===n?a:0),s=e.callbackNode,a===0||e===n&&He===2||e.cancelPendingCommit!==null)return s!==null&&s!==null&&L(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$t(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&L(s),Rr(a)){case 2:case 8:a=Gt;break;case 32:a=Dt;break;case 268435456:a=ge;break;default:a=Dt}return s=_g.bind(null,e),a=Wt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&L(s),e.callbackPriority=2,e.callbackNode=null,2}function _g(e,n){var a=e.callbackNode;if($r()&&e.callbackNode!==a)return null;var s=Me;return s=Ut(e,e===Ie?s:0),s===0?null:(ag(e,s,n),gg(e,ht()),e.callbackNode!=null&&e.callbackNode===a?_g.bind(null,e):null)}function vg(e,n){if($r())return null;ag(e,n,!0)}function nS(e){hS(function(){(qe&6)!==0?Wt(dt,e):e()})}function Rf(){return cr===0&&(cr=rn()),cr}function Sg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$o(""+e)}function xg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function iS(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Sg((u[on]||null).action),x=s.submitter;x&&(n=(n=x[on]||null)?Sg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var A=new il("action","action",null,s,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(cr!==0){var N=x?xg(u,x):new FormData(u);Pu(a,{pending:!0,data:N,method:u.method,action:f},null,N)}}else typeof f=="function"&&(A.preventDefault(),N=x?xg(u,x):new FormData(u),Pu(a,{pending:!0,data:N,method:u.method,action:f},f,N))},currentTarget:u}]})}}for(var Cf=0;Cf<hp.length;Cf++){var wf=hp[Cf],aS=wf.toLowerCase(),rS=wf[0].toUpperCase()+wf.slice(1);mi(aS,"on"+rS)}mi(op,"onAnimationEnd"),mi(lp,"onAnimationIteration"),mi(cp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(Mv,"onTransitionRun"),mi(Ev,"onTransitionStart"),mi(Tv,"onTransitionCancel"),mi(up,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bo));function yg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var A=s[x],N=A.instance,X=A.currentTarget;if(A=A.listener,N!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=X;try{f(u)}catch(ct){bl(ct)}u.currentTarget=null,f=N}else for(x=0;x<s.length;x++){if(A=s[x],N=A.instance,X=A.currentTarget,A=A.listener,N!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=X;try{f(u)}catch(ct){bl(ct)}u.currentTarget=null,f=N}}}}function xe(e,n){var a=n[Cr];a===void 0&&(a=n[Cr]=new Set);var s=e+"__bubble";a.has(s)||(Mg(n,e,2,!1),a.add(s))}function Df(e,n,a){var s=0;n&&(s|=4),Mg(a,e,s,n)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Uf(e){if(!e[Hl]){e[Hl]=!0,j.forEach(function(a){a!=="selectionchange"&&(sS.has(a)||Df(a,!1,e),Df(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Hl]||(n[Hl]=!0,Df("selectionchange",!1,n))}}function Mg(e,n,a,s){switch(Wg(n)){case 2:var u=LS;break;case 8:u=NS;break;default:u=Xf}a=u.bind(null,n,a,e),u=void 0,!Jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Lf(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var A=s.stateNode.containerInfo;if(A===u||A.nodeType===8&&A.parentNode===u)break;if(x===4)for(x=s.return;x!==null;){var N=x.tag;if((N===3||N===4)&&(N=x.stateNode.containerInfo,N===u||N.nodeType===8&&N.parentNode===u))return;x=x.return}for(;A!==null;){if(x=Pi(A),x===null)return;if(N=x.tag,N===5||N===6||N===26||N===27){s=f=x;continue t}A=A.parentNode}}s=s.return}Bd(function(){var X=f,ct=Kc(a),_t=[];t:{var at=fp.get(e);if(at!==void 0){var lt=il,kt=e;switch(e){case"keypress":if(el(a)===0)break t;case"keydown":case"keyup":lt=$0;break;case"focusin":kt="focus",lt=nu;break;case"focusout":kt="blur",lt=nu;break;case"beforeblur":case"afterblur":lt=nu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=G0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=nv;break;case op:case lp:case cp:lt=X0;break;case up:lt=av;break;case"scroll":case"scrollend":lt=I0;break;case"wheel":lt=sv;break;case"copy":case"cut":case"paste":lt=q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Vd;break;case"toggle":case"beforetoggle":lt=lv}var ae=(n&4)!==0,Qe=!ae&&(e==="scroll"||e==="scrollend"),K=ae?at!==null?at+"Capture":null:at;ae=[];for(var G=X,J;G!==null;){var mt=G;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||K===null||(mt=ks(G,K),mt!=null&&ae.push(Ao(G,mt,J))),Qe)break;G=G.return}0<ae.length&&(at=new lt(at,kt,null,a,ct),_t.push({event:at,listeners:ae}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",at&&a!==jc&&(kt=a.relatedTarget||a.fromElement)&&(Pi(kt)||kt[Oi]))break t;if((lt||at)&&(at=ct.window===ct?ct:(at=ct.ownerDocument)?at.defaultView||at.parentWindow:window,lt?(kt=a.relatedTarget||a.toElement,lt=X,kt=kt?Pi(kt):null,kt!==null&&(Qe=Z(kt),ae=kt.tag,kt!==Qe||ae!==5&&ae!==27&&ae!==6)&&(kt=null)):(lt=null,kt=X),lt!==kt)){if(ae=Hd,mt="onMouseLeave",K="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Vd,mt="onPointerLeave",K="onPointerEnter",G="pointer"),Qe=lt==null?at:q(lt),J=kt==null?at:q(kt),at=new ae(mt,G+"leave",lt,a,ct),at.target=Qe,at.relatedTarget=J,mt=null,Pi(ct)===X&&(ae=new ae(K,G+"enter",kt,a,ct),ae.target=J,ae.relatedTarget=Qe,mt=ae),Qe=mt,lt&&kt)e:{for(ae=lt,K=kt,G=0,J=ae;J;J=es(J))G++;for(J=0,mt=K;mt;mt=es(mt))J++;for(;0<G-J;)ae=es(ae),G--;for(;0<J-G;)K=es(K),J--;for(;G--;){if(ae===K||K!==null&&ae===K.alternate)break e;ae=es(ae),K=es(K)}ae=null}else ae=null;lt!==null&&Eg(_t,at,lt,ae,!1),kt!==null&&Qe!==null&&Eg(_t,Qe,kt,ae,!0)}}t:{if(at=X?q(X):window,lt=at.nodeName&&at.nodeName.toLowerCase(),lt==="select"||lt==="input"&&at.type==="file")var Ht=Kd;else if(Zd(at))if(Qd)Ht=vv;else{Ht=gv;var pe=mv}else lt=at.nodeName,!lt||lt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?X&&Zc(X.elementType)&&(Ht=Kd):Ht=_v;if(Ht&&(Ht=Ht(e,X))){jd(_t,Ht,a,ct);break t}pe&&pe(e,at,X),e==="focusout"&&X&&at.type==="number"&&X.memoizedProps.value!=null&&En(at,"number",at.value)}switch(pe=X?q(X):window,e){case"focusin":(Zd(pe)||pe.contentEditable==="true")&&(Nr=pe,lu=X,Qs=null);break;case"focusout":Qs=lu=Nr=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,rp(_t,a,ct);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":rp(_t,a,ct)}var qt;if(au)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Lr?qd(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(kd&&a.locale!=="ko"&&(Lr||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Lr&&(qt=Fd()):(la=ct,$c="value"in la?la.value:la.textContent,Lr=!0)),pe=Gl(X,Jt),0<pe.length&&(Jt=new Gd(Jt,e,null,a,ct),_t.push({event:Jt,listeners:pe}),qt?Jt.data=qt:(qt=Yd(a),qt!==null&&(Jt.data=qt)))),(qt=uv?fv(e,a):hv(e,a))&&(Jt=Gl(X,"onBeforeInput"),0<Jt.length&&(pe=new Gd("onBeforeInput","beforeinput",null,a,ct),_t.push({event:pe,listeners:Jt}),pe.data=qt)),iS(_t,e,X,a,ct)}yg(_t,n)})}function Ao(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Gl(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ks(e,a),u!=null&&s.unshift(Ao(e,u,f)),u=ks(e,n),u!=null&&s.push(Ao(e,u,f))),e=e.return}return s}function es(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Eg(e,n,a,s,u){for(var f=n._reactName,x=[];a!==null&&a!==s;){var A=a,N=A.alternate,X=A.stateNode;if(A=A.tag,N!==null&&N===s)break;A!==5&&A!==26&&A!==27||X===null||(N=X,u?(X=ks(a,f),X!=null&&x.unshift(Ao(a,X,N))):u||(X=ks(a,f),X!=null&&x.push(Ao(a,X,N)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var oS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function Tg(e){return(typeof e=="string"?e:""+e).replace(oS,`
`).replace(lS,"")}function bg(e,n){return n=Tg(n),Tg(e)===n}function Vl(){}function Pe(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Hn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Hn(e,""+s);break;case"className":Ve(e,"class",s);break;case"tabIndex":Ve(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ve(e,a,s);break;case"style":Pd(e,s,f);break;case"data":if(n!=="object"){Ve(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=$o(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",u.name,u,null),Pe(e,n,"formEncType",u.formEncType,u,null),Pe(e,n,"formMethod",u.formMethod,u,null),Pe(e,n,"formTarget",u.formTarget,u,null)):(Pe(e,n,"encType",u.encType,u,null),Pe(e,n,"method",u.method,u,null),Pe(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=$o(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Vl);break;case"onScroll":s!=null&&xe("scroll",e);break;case"onScrollEnd":s!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=$o(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":xe("beforetoggle",e),xe("toggle",e),ve(e,"popover",s);break;case"xlinkActuate":be(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":be(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":be(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":be(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":be(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":be(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":be(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":be(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":be(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ve(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=B0.get(a)||a,ve(e,a,s))}}function Nf(e,n,a,s,u,f){switch(a){case"style":Pd(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Hn(e,s):(typeof s=="number"||typeof s=="bigint")&&Hn(e,""+s);break;case"onScroll":s!=null&&xe("scroll",e);break;case"onScrollEnd":s!=null&&xe("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Vl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[on]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):ve(e,a,s)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,f,x,a,null)}}u&&Pe(e,n,"srcSet",a.srcSet,a,null),s&&Pe(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var A=f=x=u=null,N=null,X=null;for(s in a)if(a.hasOwnProperty(s)){var ct=a[s];if(ct!=null)switch(s){case"name":u=ct;break;case"type":x=ct;break;case"checked":N=ct;break;case"defaultChecked":X=ct;break;case"value":f=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Pe(e,n,s,ct,a,null)}}Nn(e,f,A,N,X,x,u,!1),Se(e);return;case"select":xe("invalid",e),s=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":x=A;break;case"multiple":s=A;default:Pe(e,n,u,A,a,null)}n=f,a=x,e.multiple=!!s,n!=null?Ze(e,!!s,n,!1):a!=null&&Ze(e,!!s,a,!0);return;case"textarea":xe("invalid",e),f=u=s=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":s=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Pe(e,n,x,A,a,null)}wr(e,s,u,f),Se(e);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Pe(e,n,N,s,a,null)}return;case"dialog":xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(s=0;s<bo.length;s++)xe(bo[s],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(X in a)if(a.hasOwnProperty(X)&&(s=a[X],s!=null))switch(X){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,X,s,a,null)}return;default:if(Zc(n)){for(ct in a)a.hasOwnProperty(ct)&&(s=a[ct],s!==void 0&&Nf(e,n,ct,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Pe(e,n,A,s,a,null))}function cS(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,A=null,N=null,X=null,ct=null;for(lt in a){var _t=a[lt];if(a.hasOwnProperty(lt)&&_t!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":N=_t;default:s.hasOwnProperty(lt)||Pe(e,n,lt,null,s,_t)}}for(var at in s){var lt=s[at];if(_t=a[at],s.hasOwnProperty(at)&&(lt!=null||_t!=null))switch(at){case"type":f=lt;break;case"name":u=lt;break;case"checked":X=lt;break;case"defaultChecked":ct=lt;break;case"value":x=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==_t&&Pe(e,n,at,lt,s,_t)}}Ne(e,x,A,N,X,ct,f,u);return;case"select":lt=x=A=at=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":lt=N;default:s.hasOwnProperty(f)||Pe(e,n,f,null,s,N)}for(u in s)if(f=s[u],N=a[u],s.hasOwnProperty(u)&&(f!=null||N!=null))switch(u){case"value":at=f;break;case"defaultValue":A=f;break;case"multiple":x=f;default:f!==N&&Pe(e,n,u,f,s,N)}n=A,a=x,s=lt,at!=null?Ze(e,!!a,at,!1):!!s!=!!a&&(n!=null?Ze(e,!!a,n,!0):Ze(e,!!a,a?[]:"",!1));return;case"textarea":lt=at=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Pe(e,n,A,null,s,u)}for(x in s)if(u=s[x],f=a[x],s.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":at=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Pe(e,n,x,u,s,f)}Sn(e,at,lt);return;case"option":for(var kt in a)if(at=a[kt],a.hasOwnProperty(kt)&&at!=null&&!s.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Pe(e,n,kt,null,s,at)}for(N in s)if(at=s[N],lt=a[N],s.hasOwnProperty(N)&&at!==lt&&(at!=null||lt!=null))switch(N){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Pe(e,n,N,at,s,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)at=a[ae],a.hasOwnProperty(ae)&&at!=null&&!s.hasOwnProperty(ae)&&Pe(e,n,ae,null,s,at);for(X in s)if(at=s[X],lt=a[X],s.hasOwnProperty(X)&&at!==lt&&(at!=null||lt!=null))switch(X){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Pe(e,n,X,at,s,lt)}return;default:if(Zc(n)){for(var Qe in a)at=a[Qe],a.hasOwnProperty(Qe)&&at!==void 0&&!s.hasOwnProperty(Qe)&&Nf(e,n,Qe,void 0,s,at);for(ct in s)at=s[ct],lt=a[ct],!s.hasOwnProperty(ct)||at===lt||at===void 0&&lt===void 0||Nf(e,n,ct,at,s,lt);return}}for(var K in a)at=a[K],a.hasOwnProperty(K)&&at!=null&&!s.hasOwnProperty(K)&&Pe(e,n,K,null,s,at);for(_t in s)at=s[_t],lt=a[_t],!s.hasOwnProperty(_t)||at===lt||at==null&&lt==null||Pe(e,n,_t,at,s,lt)}var Of=null,Pf=null;function kl(e){return e.nodeType===9?e:e.ownerDocument}function Ag(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bf=null;function uS(){var e=window.event;return e&&e.type==="popstate"?e===Bf?!1:(Bf=e,!0):(Bf=null,!1)}var Cg=typeof setTimeout=="function"?setTimeout:void 0,fS=typeof clearTimeout=="function"?clearTimeout:void 0,wg=typeof Promise=="function"?Promise:void 0,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof wg<"u"?function(e){return wg.resolve(null).then(e).catch(dS)}:Cg;function dS(e){setTimeout(function(){throw e})}function Ff(e,n){var a=n,s=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(s===0){e.removeChild(u),Oo(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=u}while(a);Oo(n)}function If(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),Vs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function pS(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Xa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function mS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vi(e.nextSibling),e===null))return null;return e}function vi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function Dg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Ug(e,n,a){switch(n=kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var oi=new Map,Lg=new Set;function Xl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Ki=Y.d;Y.d={f:gS,r:_S,D:vS,C:SS,L:xS,m:yS,X:ES,S:MS,M:TS};function gS(){var e=Ki.f(),n=zl();return e||n}function _S(e){var n=C(e);n!==null&&n.tag===5&&n.type==="form"?rm(n):Ki.r(e)}var ns=typeof document>"u"?null:document;function Ng(e,n,a){var s=ns;if(s&&typeof n=="string"&&n){var u=dn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Lg.has(u)||(Lg.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Mn(n,"link",e),Q(n),s.head.appendChild(n)))}}function vS(e){Ki.D(e),Ng("dns-prefetch",e,null)}function SS(e,n){Ki.C(e,n),Ng("preconnect",e,n)}function xS(e,n,a){Ki.L(e,n,a);var s=ns;if(s&&e&&n){var u='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+dn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+dn(a.imageSizes)+'"]')):u+='[href="'+dn(e)+'"]';var f=u;switch(n){case"style":f=is(e);break;case"script":f=as(e)}oi.has(f)||(e=E({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(Ro(f))||n==="script"&&s.querySelector(Co(f))||(n=s.createElement("link"),Mn(n,"link",e),Q(n),s.head.appendChild(n)))}}function yS(e,n){Ki.m(e,n);var a=ns;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+dn(s)+'"][href="'+dn(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=as(e)}if(!oi.has(f)&&(e=E({rel:"modulepreload",href:e},n),oi.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(f)))return}s=a.createElement("link"),Mn(s,"link",e),Q(s),a.head.appendChild(s)}}}function MS(e,n,a){Ki.S(e,n,a);var s=ns;if(s&&e){var u=$(s).hoistableStyles,f=is(e);n=n||"default";var x=u.get(f);if(!x){var A={loading:0,preload:null};if(x=s.querySelector(Ro(f)))A.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(f))&&Hf(e,a);var N=x=s.createElement("link");Q(N),Mn(N,"link",e),N._p=new Promise(function(X,ct){N.onload=X,N.onerror=ct}),N.addEventListener("load",function(){A.loading|=1}),N.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Wl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(f,x)}}}function ES(e,n){Ki.X(e,n);var a=ns;if(a&&e){var s=$(a).hoistableScripts,u=as(e),f=s.get(u);f||(f=a.querySelector(Co(u)),f||(e=E({src:e,async:!0},n),(n=oi.get(u))&&Gf(e,n),f=a.createElement("script"),Q(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function TS(e,n){Ki.M(e,n);var a=ns;if(a&&e){var s=$(a).hoistableScripts,u=as(e),f=s.get(u);f||(f=a.querySelector(Co(u)),f||(e=E({src:e,async:!0,type:"module"},n),(n=oi.get(u))&&Gf(e,n),f=a.createElement("script"),Q(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Og(e,n,a,s){var u=(u=re.current)?Xl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=$(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=is(a.href);var f=$(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(Ro(e)))&&!f._p&&(x.instance=f,x.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),f||bS(u,e,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=$(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function is(e){return'href="'+dn(e)+'"'}function Ro(e){return'link[rel="stylesheet"]['+e+"]"}function Pg(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function bS(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),Q(n),e.head.appendChild(n))}function as(e){return'[src="'+dn(e)+'"]'}function Co(e){return"script[async]"+e}function zg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+dn(a.href)+'"]');if(s)return n.instance=s,Q(s),s;var u=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Q(s),Mn(s,"style",u),Wl(s,a.precedence,e),n.instance=s;case"stylesheet":u=is(a.href);var f=e.querySelector(Ro(u));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;s=Pg(a),(u=oi.get(u))&&Hf(s,u),f=(e.ownerDocument||e).createElement("link"),Q(f);var x=f;return x._p=new Promise(function(A,N){x.onload=A,x.onerror=N}),Mn(f,"link",s),n.state.loading|=4,Wl(f,a.precedence,e),n.instance=f;case"script":return f=as(a.src),(u=e.querySelector(Co(f)))?(n.instance=u,Q(u),u):(s=a,(u=oi.get(f))&&(s=E({},a),Gf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),Q(u),Mn(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Wl(s,a.precedence,e));return n.instance}function Wl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,x=0;x<s.length;x++){var A=s[x];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Hf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ql=null;function Bg(e,n,a){if(ql===null){var s=new Map,u=ql=new Map;u.set(a,s)}else u=ql,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Xa]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var A=s.get(x);A?A.push(f):s.set(x,[f])}}return s}function Fg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function AS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ig(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var wo=null;function RS(){}function CS(e,n,a){if(wo===null)throw Error(r(475));var s=wo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=is(a.href),f=e.querySelector(Ro(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Yl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,Q(f);return}f=e.ownerDocument||e,a=Pg(a),(u=oi.get(u))&&Hf(a,u),f=f.createElement("link"),Q(f);var x=f;x._p=new Promise(function(A,N){x.onload=A,x.onerror=N}),Mn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Yl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function wS(){if(wo===null)throw Error(r(475));var e=wo;return e.stylesheets&&e.count===0&&Vf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Vf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Yl(){if(this.count--,this.count===0){if(this.stylesheets)Vf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zl=null;function Vf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zl=new Map,n.forEach(DS,e),Zl=null,Yl.call(e))}function DS(e,n){if(!(n.state.loading&4)){var a=Zl.get(e);if(a)var s=a.get(null);else{a=new Map,Zl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,u),a.set(x,u),this.count++,s=Yl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Do={$$typeof:M,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function US(e,n,a,s,u,f,x,A){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dn(0),this.hiddenUpdates=Dn(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Hg(e,n,a,s,u,f,x,A,N,X,ct,_t){return e=new US(e,n,a,x,A,N,X,_t),n=1,f===!0&&(n|=24),f=ri(3,null,null,n),e.current=f,f.stateNode=e,n=Su(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},$u(f),e}function Gg(e){return e?(e=zr,e):zr}function Vg(e,n,a,s,u,f){u=Gg(u),s.context===null?s.context=u:s.pendingContext=u,s=ga(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=_a(e,s,n),a!==null&&(Pn(a,e,n),ho(a,e,n))}function kg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function kf(e,n){kg(e,n),(e=e.alternate)&&kg(e,n)}function Xg(e){if(e.tag===13){var n=ca(e,67108864);n!==null&&Pn(n,e,67108864),kf(e,67108864)}}var jl=!0;function LS(e,n,a,s){var u=R.T;R.T=null;var f=Y.p;try{Y.p=2,Xf(e,n,a,s)}finally{Y.p=f,R.T=u}}function NS(e,n,a,s){var u=R.T;R.T=null;var f=Y.p;try{Y.p=8,Xf(e,n,a,s)}finally{Y.p=f,R.T=u}}function Xf(e,n,a,s){if(jl){var u=Wf(s);if(u===null)Lf(e,n,s,Kl,a),qg(e,s);else if(PS(u,e,n,a,s))s.stopPropagation();else if(qg(e,s),n&4&&-1<OS.indexOf(e)){for(;u!==null;){var f=C(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=wt(f.pendingLanes);if(x!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var N=1<<31-Zt(x);A.entanglements[1]|=N,x&=~N}wi(f),(qe&6)===0&&(Nl=ht()+500,To(0))}}break;case 13:A=ca(f,2),A!==null&&Pn(A,f,2),zl(),kf(f,2)}if(f=Wf(s),f===null&&Lf(e,n,s,Kl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Lf(e,n,s,null,a)}}function Wf(e){return e=Kc(e),qf(e)}var Kl=null;function qf(e){if(Kl=null,e=Pi(e),e!==null){var n=Z(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=vt(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Kl=e,null}function Wg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(St()){case dt:return 2;case Gt:return 8;case Dt:case Bt:return 32;case ge:return 268435456;default:return 32}default:return 32}}var Yf=!1,Ta=null,ba=null,Aa=null,Uo=new Map,Lo=new Map,Ra=[],OS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qg(e,n){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function No(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=C(n),n!==null&&Xg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function PS(e,n,a,s,u){switch(n){case"focusin":return Ta=No(Ta,e,n,a,s,u),!0;case"dragenter":return ba=No(ba,e,n,a,s,u),!0;case"mouseover":return Aa=No(Aa,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,No(Uo.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Lo.set(f,No(Lo.get(f)||null,e,n,a,s,u)),!0}return!1}function Yg(e){var n=Pi(e.target);if(n!==null){var a=Z(n);if(a!==null){if(n=a.tag,n===13){if(n=vt(a),n!==null){e.blockedOn=n,Qo(e.priority,function(){if(a.tag===13){var s=jn(),u=ca(a,s);u!==null&&Pn(u,a,s),kf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ql(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Wf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);jc=s,a.target.dispatchEvent(s),jc=null}else return n=C(a),n!==null&&Xg(n),e.blockedOn=a,!1;n.shift()}return!0}function Zg(e,n,a){Ql(e)&&a.delete(n)}function zS(){Yf=!1,Ta!==null&&Ql(Ta)&&(Ta=null),ba!==null&&Ql(ba)&&(ba=null),Aa!==null&&Ql(Aa)&&(Aa=null),Uo.forEach(Zg),Lo.forEach(Zg)}function Jl(e,n){e.blockedOn===n&&(e.blockedOn=null,Yf||(Yf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,zS)))}var $l=null;function jg(e){$l!==e&&($l=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){$l===e&&($l=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(qf(s||a)===null)continue;break}var f=C(a);f!==null&&(e.splice(n,3),n-=3,Pu(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Oo(e){function n(N){return Jl(N,e)}Ta!==null&&Jl(Ta,e),ba!==null&&Jl(ba,e),Aa!==null&&Jl(Aa,e),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<Ra.length;a++){var s=Ra[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)Yg(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],x=u[on]||null;if(typeof f=="function")x||jg(a);else if(x){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[on]||null)A=x.formAction;else if(qf(u)!==null)continue}else A=x.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),jg(a)}}}function Zf(e){this._internalRoot=e}tc.prototype.render=Zf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=jn();Vg(a,s,e,n,null,null)},tc.prototype.unmount=Zf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&$r(),Vg(e.current,2,null,e,null,null),zl(),n[Oi]=null}};function tc(e){this._internalRoot=e}tc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Gs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&Yg(e)}};var Kg=t.version;if(Kg!=="19.0.0")throw Error(r(527,Kg,"19.0.0"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=et(n),e=e!==null?Et(e):null,e=e===null?null:e.stateNode,e};var BS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:R,findFiberByHostInstance:Pi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{Kt=ec.inject(BS),Vt=ec}catch{}}return zo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=dm,f=pm,x=mm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=Hg(e,1,!1,null,null,a,s,u,f,x,A,null),e[Oi]=n.current,Uf(e.nodeType===8?e.parentNode:e),new Zf(n)},zo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=dm,x=pm,A=mm,N=null,X=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(X=a.formState)),n=Hg(e,1,!0,n,a??null,s,u,f,x,A,N,X),n.context=Gg(null),a=n.current,s=jn(),u=ga(s),u.callback=null,_a(a,u,s),n.current.lanes=s,Un(n,s),wi(n),e[Oi]=n.current,Uf(e),new tc(n)},zo.version="19.0.0",zo}var s_;function jS(){if(s_)return Qf.exports;s_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Qf.exports=ZS(),Qf.exports}var KS=jS();function QS(){const o=new(window.AudioContext||window.webkitAudioContext),t=o.createBuffer(2,o.sampleRate,o.sampleRate),i=t.getChannelData(0),r=t.getChannelData(1);for(let d=0;d<t.length;d++)i[d]=0,r[d]=0;const l=JS(t,o.sampleRate),c=URL.createObjectURL(l),h=new Audio;return h.src=c,h.loop=!0,h.volume=0,h.id="silent-audio",document.body.appendChild(h),h}function JS(o,t){const i=o.numberOfChannels,r=o.length*i*2,l=new ArrayBuffer(44+r),c=new DataView(l);nc(c,0,"RIFF"),c.setUint32(4,36+r,!0),nc(c,8,"WAVE"),nc(c,12,"fmt "),c.setUint32(16,16,!0),c.setUint16(20,1,!0),c.setUint16(22,i,!0),c.setUint32(24,t,!0),c.setUint32(28,t*i*2,!0),c.setUint16(32,i*2,!0),c.setUint16(34,16,!0),nc(c,36,"data"),c.setUint32(40,r,!0);const h=[];for(let p=0;p<i;p++)h.push(o.getChannelData(p));let d=44;for(let p=0;p<o.length;p++)for(let m=0;m<i;m++){const g=Math.max(-1,Math.min(1,h[m][p]));c.setInt16(d,g<0?g*32768:g*32767,!0),d+=2}return new Blob([c],{type:"audio/wav"})}function nc(o,t,i){for(let r=0;r<i.length;r++)o.setUint8(t+r,i.charCodeAt(r))}class $S{constructor(){yt(this,"audioContext",null);yt(this,"analyser",null);yt(this,"dataArray",null);yt(this,"source",null);yt(this,"isInitialized",!1);yt(this,"audioElement",null);yt(this,"microphoneStream",null);yt(this,"silentAudioElement",null);yt(this,"fftSize",2048);yt(this,"beatDetectionThreshold",1.5);yt(this,"beatEnergyHistory",[]);yt(this,"beatEnergyHistorySize",30);yt(this,"lastBeatTime",0);yt(this,"beatCooldown",250);yt(this,"isBeatDetected",!1);yt(this,"isPaused",!1);yt(this,"autoInitialized",!1)}async requestMicrophonePermission(){try{const t=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});return this.microphoneStream=t,!0}catch(t){return console.error("获取麦克风权限时出错:",t),!1}}async initialize(){try{if(!this.microphoneStream)return!1;this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=this.fftSize,this.source=this.audioContext.createMediaStreamSource(this.microphoneStream),this.source.connect(this.analyser);const t=this.analyser.frequencyBinCount;this.dataArray=new Uint8Array(t);for(let i=0;i<this.beatEnergyHistorySize;i++)this.beatEnergyHistory.push(0);return this.isInitialized=!0,console.log("音频分析器初始化成功"),!0}catch(t){return console.error("初始化音频分析器时出错:",t),!1}}async initializeWithAudio(t){try{this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=this.fftSize,this.audioElement=new Audio,this.audioElement.src=t,this.audioElement.loop=!1,this.source=this.audioContext.createMediaElementSource(this.audioElement),this.source.connect(this.analyser),this.analyser.connect(this.audioContext.destination),await this.audioElement.play();const i=this.analyser.frequencyBinCount;this.dataArray=new Uint8Array(i);for(let r=0;r<this.beatEnergyHistorySize;r++)this.beatEnergyHistory.push(0);return this.isInitialized=!0,console.log("音频分析器初始化成功（使用音频文件）"),!0}catch(i){return console.error("初始化音频分析器时出错:",i),!1}}async autoInitialize(){if(this.autoInitialized)return!0;try{console.log("正在自动初始化音频分析器（使用静音音频）"),this.silentAudioElement=QS(),this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=this.fftSize,this.source=this.audioContext.createMediaElementSource(this.silentAudioElement),this.source.connect(this.analyser),this.analyser.connect(this.audioContext.destination),await this.silentAudioElement.play();const t=this.analyser.frequencyBinCount;this.dataArray=new Uint8Array(t);for(let i=0;i<this.beatEnergyHistorySize;i++)this.beatEnergyHistory.push(0);return this.isInitialized=!0,this.autoInitialized=!0,console.log("音频分析器自动初始化成功（使用静音音频）"),!0}catch(t){return console.error("自动初始化音频分析器时出错:",t),!1}}getFrequencyData(){return!this.isInitialized||!this.analyser||!this.dataArray?null:(this.analyser.getByteFrequencyData(this.dataArray),this.detectBeat(),this.dataArray)}getTimeData(){return!this.isInitialized||!this.analyser||!this.dataArray?null:(this.analyser.getByteTimeDomainData(this.dataArray),this.dataArray)}getBufferLength(){return!this.isInitialized||!this.analyser?0:this.analyser.frequencyBinCount}isBeat(){return this.isBeatDetected}detectBeat(){if(!this.dataArray)return;let t=0;const i=5,r=100;for(let h=i;h<r&&h<this.dataArray.length;h++)t+=this.dataArray[h]*this.dataArray[h];t=Math.sqrt(t/(r-i));let l=0;for(let h=0;h<this.beatEnergyHistorySize;h++)l+=this.beatEnergyHistory[h];l/=this.beatEnergyHistorySize,this.beatEnergyHistory.push(t),this.beatEnergyHistory.shift();const c=Date.now();t>l*this.beatDetectionThreshold&&c-this.lastBeatTime>this.beatCooldown?(this.isBeatDetected=!0,this.lastBeatTime=c):this.isBeatDetected=!1}cleanup(){this.source&&this.source.disconnect(),this.audioElement&&(this.audioElement.pause(),this.audioElement.src=""),this.silentAudioElement&&(this.silentAudioElement.pause(),this.silentAudioElement.remove()),this.audioContext&&this.audioContext.close(),this.microphoneStream&&(this.microphoneStream.getTracks().forEach(t=>t.stop()),this.microphoneStream=null),this.isInitialized=!1,this.autoInitialized=!1}pause(){this.audioElement&&!this.isPaused&&(this.audioElement.pause(),this.isPaused=!0)}play(){this.audioElement&&this.isPaused&&(this.audioElement.play(),this.isPaused=!1)}togglePlayPause(){return this.audioElement&&(this.isPaused?this.play():this.pause()),this.isPaused}getIsPaused(){return this.isPaused}getAudioElement(){return this.audioElement}getSourceType(){return this.isInitialized?this.audioElement?"file":"mic":"none"}}const Ge=new $S;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ed="174",tx=0,o_=1,ex=2,s0=1,nx=2,na=3,Ga=0,kn=1,fi=2,Ba=0,Rs=1,Es=2,l_=3,c_=4,ix=5,xr=100,ax=101,rx=102,sx=103,ox=104,lx=200,cx=201,ux=202,fx=203,Nh=204,Oh=205,hx=206,dx=207,px=208,mx=209,gx=210,_x=211,vx=212,Sx=213,xx=214,Ph=0,zh=1,Bh=2,Ds=3,Fh=4,Ih=5,Hh=6,Gh=7,o0=0,yx=1,Mx=2,Fa=0,Ex=1,Tx=2,bx=3,Ax=4,Rx=5,Cx=6,wx=7,l0=300,Us=301,Ls=302,Vh=303,kh=304,kc=306,Xh=1e3,Mr=1001,Wh=1002,Ei=1003,Dx=1004,ic=1005,Li=1006,eh=1007,Er=1008,sa=1009,c0=1010,u0=1011,qo=1012,Td=1013,br=1014,ia=1015,Yo=1016,bd=1017,Ad=1018,Ns=1020,f0=35902,h0=1021,d0=1022,Mi=1023,p0=1024,m0=1025,Cs=1026,Os=1027,g0=1028,Rd=1029,_0=1030,Cd=1031,wd=1033,Dc=33776,Uc=33777,Lc=33778,Nc=33779,qh=35840,Yh=35841,Zh=35842,jh=35843,Kh=36196,Qh=37492,Jh=37496,$h=37808,td=37809,ed=37810,nd=37811,id=37812,ad=37813,rd=37814,sd=37815,od=37816,ld=37817,cd=37818,ud=37819,fd=37820,hd=37821,Oc=36492,dd=36494,pd=36495,v0=36283,md=36284,gd=36285,_d=36286,Ux=3200,Lx=3201,Nx=0,Ox=1,za="",ci="srgb",Ps="srgb-linear",Bc="linear",ze="srgb",rs=7680,u_=519,Px=512,zx=513,Bx=514,S0=515,Fx=516,Ix=517,Hx=518,Gx=519,vd=35044,f_="300 es",aa=2e3,Fc=2001;class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nh=Math.PI/180,Sd=180/Math.PI;function Ia(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function ye(o,t,i){return Math.max(t,Math.min(i,o))}function Vx(o,t){return(o%t+t)%t}function ih(o,t,i){return(1-i)*o+i*t}function Ui(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Be(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class he{constructor(t=0,i=0){he.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ye(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,i,r,l,c,h,d,p,m){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,p,m)}set(t,i,r,l,c,h,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],_=r[7],S=r[2],M=r[5],b=r[8],w=l[0],y=l[3],v=l[6],B=l[1],O=l[4],D=l[7],H=l[2],F=l[5],z=l[8];return c[0]=h*w+d*B+p*H,c[3]=h*y+d*O+p*F,c[6]=h*v+d*D+p*z,c[1]=m*w+g*B+_*H,c[4]=m*y+g*O+_*F,c[7]=m*v+g*D+_*z,c[2]=S*w+M*B+b*H,c[5]=S*y+M*O+b*F,c[8]=S*v+M*D+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return i*h*g-i*d*m-r*c*g+r*d*p+l*c*m-l*h*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=g*h-d*m,S=d*p-g*c,M=m*c-h*p,b=i*_+r*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=_*w,t[1]=(l*m-g*r)*w,t[2]=(d*r-l*h)*w,t[3]=S*w,t[4]=(g*i-l*p)*w,t[5]=(l*c-d*i)*w,t[6]=M*w,t[7]=(r*p-m*i)*w,t[8]=(h*i-r*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ah.makeScale(t,i)),this}rotate(t){return this.premultiply(ah.makeRotation(-t)),this}translate(t,i){return this.premultiply(ah.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new ce;function x0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Ic(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function kx(){const o=Ic("canvas");return o.style.display="block",o}const h_={};function _r(o){o in h_||(h_[o]=!0,console.warn(o))}function Xx(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function Wx(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qx(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const d_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yx(){const o={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===ze&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=ws(l.r),l.g=ws(l.g),l.b=ws(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?Bc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ps]:{primaries:t,whitePoint:r,transfer:Bc,toXYZ:d_,fromXYZ:p_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:d_,fromXYZ:p_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const Ce=Yx();function ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ws(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ss;class Zx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ss===void 0&&(ss=Ic("canvas")),ss.width=t.width,ss.height=t.height;const r=ss.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=ss}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ic("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ra(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ra(i[r]/255)*255):i[r]=ra(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jx=0;class Dd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Ia(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(rh(l[h].image)):c.push(rh(l[h]))}else c=rh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function rh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Zx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kx=0;class Fn extends Bs{constructor(t=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=Mr,l=Mr,c=Li,h=Er,d=Mi,p=sa,m=Fn.DEFAULT_ANISOTROPY,g=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Ia(),this.name="",this.source=new Dd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==l0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xh:t.x=t.x-Math.floor(t.x);break;case Mr:t.x=t.x<0?0:1;break;case Wh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xh:t.y=t.y-Math.floor(t.y);break;case Mr:t.y=t.y<0?0:1;break;case Wh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=l0;Fn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],S=p[1],M=p[5],b=p[9],w=p[2],y=p[6],v=p[10];if(Math.abs(g-S)<.01&&Math.abs(_-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+w)<.1&&Math.abs(b+y)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,D=(M+1)/2,H=(v+1)/2,F=(g+S)/4,z=(_+w)/4,k=(b+y)/4;return O>D&&O>H?O<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(O),l=F/r,c=z/r):D>H?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=F/l,c=k/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=z/c,l=k/c),this.set(r,l,c,i),this}let B=Math.sqrt((y-b)*(y-b)+(_-w)*(_-w)+(S-g)*(S-g));return Math.abs(B)<.001&&(B=1),this.x=(y-b)/B,this.y=(_-w)/B,this.z=(S-g)/B,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this.w=ye(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this.w=ye(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qx extends Bs{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new $e(0,0,t,i),this.scissorTest=!1,this.viewport=new $e(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Fn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Dd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends Qx{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class y0 extends Fn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jx extends Fn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],_=r[l+3];const S=c[h+0],M=c[h+1],b=c[h+2],w=c[h+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=S,t[i+1]=M,t[i+2]=b,t[i+3]=w;return}if(_!==w||p!==S||m!==M||g!==b){let y=1-d;const v=p*S+m*M+g*b+_*w,B=v>=0?1:-1,O=1-v*v;if(O>Number.EPSILON){const H=Math.sqrt(O),F=Math.atan2(H,v*B);y=Math.sin(y*F)/H,d=Math.sin(d*F)/H}const D=d*B;if(p=p*y+S*D,m=m*y+M*D,g=g*y+b*D,_=_*y+w*D,y===1-d){const H=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=H,m*=H,g*=H,_*=H}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],_=c[h],S=c[h+1],M=c[h+2],b=c[h+3];return t[i]=d*b+g*_+p*M-m*S,t[i+1]=p*b+g*S+m*_-d*M,t[i+2]=m*b+g*M+d*S-p*_,t[i+3]=g*b-d*_-p*S-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),_=d(c/2),S=p(r/2),M=p(l/2),b=p(c/2);switch(h){case"XYZ":this._x=S*g*_+m*M*b,this._y=m*M*_-S*g*b,this._z=m*g*b+S*M*_,this._w=m*g*_-S*M*b;break;case"YXZ":this._x=S*g*_+m*M*b,this._y=m*M*_-S*g*b,this._z=m*g*b-S*M*_,this._w=m*g*_+S*M*b;break;case"ZXY":this._x=S*g*_-m*M*b,this._y=m*M*_+S*g*b,this._z=m*g*b+S*M*_,this._w=m*g*_-S*M*b;break;case"ZYX":this._x=S*g*_-m*M*b,this._y=m*M*_+S*g*b,this._z=m*g*b-S*M*_,this._w=m*g*_+S*M*b;break;case"YZX":this._x=S*g*_+m*M*b,this._y=m*M*_+S*g*b,this._z=m*g*b-S*M*_,this._w=m*g*_-S*M*b;break;case"XZY":this._x=S*g*_-m*M*b,this._y=m*M*_-S*g*b,this._z=m*g*b+S*M*_,this._w=m*g*_+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],_=i[10],S=r+d+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-p)*M,this._y=(c-m)*M,this._z=(h-l)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(g-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+m)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(c-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(h-l)/M,this._x=(c+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-c*p,this._y=l*g+h*p+c*d-r*m,this._z=c*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),_=Math.sin((1-i)*g)/m,S=Math.sin(i*g)/m;return this._w=h*_+this._w*S,this._x=r*_+this._x*S,this._y=l*_+this._y*S,this._z=c*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(m_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(m_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*r),g=2*(d*i-c*l),_=2*(c*r-h*i);return this.x=i+p*m+h*_-d*g,this.y=r+p*g+d*m-c*_,this.z=l+p*_+c*g-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-r*p,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return sh.copy(this).projectOnVector(t),this.sub(sh)}reflect(t){return this.sub(sh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ye(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sh=new tt,m_=new Fs;class Zo{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Si.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Si.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Si.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Si):Si.fromBufferAttribute(c,h),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ac.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ac.copy(r.boundingBox)),ac.applyMatrix4(t.matrixWorld),this.union(ac)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bo),rc.subVectors(this.max,Bo),os.subVectors(t.a,Bo),ls.subVectors(t.b,Bo),cs.subVectors(t.c,Bo),wa.subVectors(ls,os),Da.subVectors(cs,ls),ur.subVectors(os,cs);let i=[0,-wa.z,wa.y,0,-Da.z,Da.y,0,-ur.z,ur.y,wa.z,0,-wa.x,Da.z,0,-Da.x,ur.z,0,-ur.x,-wa.y,wa.x,0,-Da.y,Da.x,0,-ur.y,ur.x,0];return!oh(i,os,ls,cs,rc)||(i=[1,0,0,0,1,0,0,0,1],!oh(i,os,ls,cs,rc))?!1:(sc.crossVectors(wa,Da),i=[sc.x,sc.y,sc.z],oh(i,os,ls,cs,rc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qi=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Si=new tt,ac=new Zo,os=new tt,ls=new tt,cs=new tt,wa=new tt,Da=new tt,ur=new tt,Bo=new tt,rc=new tt,sc=new tt,fr=new tt;function oh(o,t,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){fr.fromArray(o,c);const d=l.x*Math.abs(fr.x)+l.y*Math.abs(fr.y)+l.z*Math.abs(fr.z),p=t.dot(fr),m=i.dot(fr),g=r.dot(fr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const $x=new Zo,Fo=new tt,lh=new tt;class Xc{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):$x.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fo.subVectors(t,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Fo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fo.copy(t.center).add(lh)),this.expandByPoint(Fo.copy(t.center).sub(lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new tt,ch=new tt,oc=new tt,Ua=new tt,uh=new tt,lc=new tt,fh=new tt;class Ud{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ji.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ch.copy(t).add(i).multiplyScalar(.5),oc.copy(i).sub(t).normalize(),Ua.copy(this.origin).sub(ch);const c=t.distanceTo(i)*.5,h=-this.direction.dot(oc),d=Ua.dot(this.direction),p=-Ua.dot(oc),m=Ua.lengthSq(),g=Math.abs(1-h*h);let _,S,M,b;if(g>0)if(_=h*p-d,S=h*d-p,b=c*g,_>=0)if(S>=-b)if(S<=b){const w=1/g;_*=w,S*=w,M=_*(_+h*S+2*d)+S*(h*_+S+2*p)+m}else S=c,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*p)+m;else S=-c,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*p)+m;else S<=-b?(_=Math.max(0,-(-h*c+d)),S=_>0?-c:Math.min(Math.max(-c,-p),c),M=-_*_+S*(S+2*p)+m):S<=b?(_=0,S=Math.min(Math.max(-c,-p),c),M=S*(S+2*p)+m):(_=Math.max(0,-(h*c+d)),S=_>0?c:Math.min(Math.max(-c,-p),c),M=-_*_+S*(S+2*p)+m);else S=h>0?-c:c,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ch).addScaledVector(oc,S),M}intersectSphere(t,i){Ji.subVectors(t.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return m>=0?(r=(t.min.x-S.x)*m,l=(t.max.x-S.x)*m):(r=(t.max.x-S.x)*m,l=(t.min.x-S.x)*m),g>=0?(c=(t.min.y-S.y)*g,h=(t.max.y-S.y)*g):(c=(t.max.y-S.y)*g,h=(t.min.y-S.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-S.z)*_,p=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,p=(t.min.z-S.z)*_),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,i,r,l,c){uh.subVectors(i,t),lc.subVectors(r,t),fh.crossVectors(uh,lc);let h=this.direction.dot(fh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ua.subVectors(this.origin,t);const p=d*this.direction.dot(lc.crossVectors(Ua,lc));if(p<0)return null;const m=d*this.direction.dot(uh.cross(Ua));if(m<0||p+m>h)return null;const g=-d*Ua.dot(fh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,i,r,l,c,h,d,p,m,g,_,S,M,b,w,y){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,p,m,g,_,S,M,b,w,y)}set(t,i,r,l,c,h,d,p,m,g,_,S,M,b,w,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=S,v[3]=M,v[7]=b,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/us.setFromMatrixColumn(t,0).length(),c=1/us.setFromMatrixColumn(t,1).length(),h=1/us.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const S=h*g,M=h*_,b=d*g,w=d*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=M+b*m,i[5]=S-w*m,i[9]=-d*p,i[2]=w-S*m,i[6]=b+M*m,i[10]=h*p}else if(t.order==="YXZ"){const S=p*g,M=p*_,b=m*g,w=m*_;i[0]=S+w*d,i[4]=b*d-M,i[8]=h*m,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=w+S*d,i[10]=h*p}else if(t.order==="ZXY"){const S=p*g,M=p*_,b=m*g,w=m*_;i[0]=S-w*d,i[4]=-h*_,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=w-S*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const S=h*g,M=h*_,b=d*g,w=d*_;i[0]=p*g,i[4]=b*m-M,i[8]=S*m+w,i[1]=p*_,i[5]=w*m+S,i[9]=M*m-b,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const S=h*p,M=h*m,b=d*p,w=d*m;i[0]=p*g,i[4]=w-S*_,i[8]=b*_+M,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=M*_+b,i[10]=S-w*_}else if(t.order==="XZY"){const S=h*p,M=h*m,b=d*p,w=d*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=S*_+w,i[5]=h*g,i[9]=M*_-b,i[2]=b*_-M,i[6]=d*g,i[10]=w*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ty,t,ey)}lookAt(t,i,r){const l=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),La.crossVectors(r,Kn),La.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),La.crossVectors(r,Kn)),La.normalize(),cc.crossVectors(Kn,La),l[0]=La.x,l[4]=cc.x,l[8]=Kn.x,l[1]=La.y,l[5]=cc.y,l[9]=Kn.y,l[2]=La.z,l[6]=cc.z,l[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],_=r[5],S=r[9],M=r[13],b=r[2],w=r[6],y=r[10],v=r[14],B=r[3],O=r[7],D=r[11],H=r[15],F=l[0],z=l[4],k=l[8],R=l[12],E=l[1],P=l[5],st=l[9],it=l[13],ft=l[2],ut=l[6],V=l[10],rt=l[14],Z=l[3],vt=l[7],U=l[11],et=l[15];return c[0]=h*F+d*E+p*ft+m*Z,c[4]=h*z+d*P+p*ut+m*vt,c[8]=h*k+d*st+p*V+m*U,c[12]=h*R+d*it+p*rt+m*et,c[1]=g*F+_*E+S*ft+M*Z,c[5]=g*z+_*P+S*ut+M*vt,c[9]=g*k+_*st+S*V+M*U,c[13]=g*R+_*it+S*rt+M*et,c[2]=b*F+w*E+y*ft+v*Z,c[6]=b*z+w*P+y*ut+v*vt,c[10]=b*k+w*st+y*V+v*U,c[14]=b*R+w*it+y*rt+v*et,c[3]=B*F+O*E+D*ft+H*Z,c[7]=B*z+O*P+D*ut+H*vt,c[11]=B*k+O*st+D*V+H*U,c[15]=B*R+O*it+D*rt+H*et,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],p=t[9],m=t[13],g=t[2],_=t[6],S=t[10],M=t[14],b=t[3],w=t[7],y=t[11],v=t[15];return b*(+c*p*_-l*m*_-c*d*S+r*m*S+l*d*M-r*p*M)+w*(+i*p*M-i*m*S+c*h*S-l*h*M+l*m*g-c*p*g)+y*(+i*m*_-i*d*M-c*h*_+r*h*M+c*d*g-r*m*g)+v*(-l*d*g-i*p*_+i*d*S+l*h*_-r*h*S+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=t[9],S=t[10],M=t[11],b=t[12],w=t[13],y=t[14],v=t[15],B=_*y*m-w*S*m+w*p*M-d*y*M-_*p*v+d*S*v,O=b*S*m-g*y*m-b*p*M+h*y*M+g*p*v-h*S*v,D=g*w*m-b*_*m+b*d*M-h*w*M-g*d*v+h*_*v,H=b*_*p-g*w*p-b*d*S+h*w*S+g*d*y-h*_*y,F=i*B+r*O+l*D+c*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return t[0]=B*z,t[1]=(w*S*c-_*y*c-w*l*M+r*y*M+_*l*v-r*S*v)*z,t[2]=(d*y*c-w*p*c+w*l*m-r*y*m-d*l*v+r*p*v)*z,t[3]=(_*p*c-d*S*c-_*l*m+r*S*m+d*l*M-r*p*M)*z,t[4]=O*z,t[5]=(g*y*c-b*S*c+b*l*M-i*y*M-g*l*v+i*S*v)*z,t[6]=(b*p*c-h*y*c-b*l*m+i*y*m+h*l*v-i*p*v)*z,t[7]=(h*S*c-g*p*c+g*l*m-i*S*m-h*l*M+i*p*M)*z,t[8]=D*z,t[9]=(b*_*c-g*w*c-b*r*M+i*w*M+g*r*v-i*_*v)*z,t[10]=(h*w*c-b*d*c+b*r*m-i*w*m-h*r*v+i*d*v)*z,t[11]=(g*d*c-h*_*c-g*r*m+i*_*m+h*r*M-i*d*M)*z,t[12]=H*z,t[13]=(g*w*l-b*_*l+b*r*S-i*w*S-g*r*y+i*_*y)*z,t[14]=(b*d*l-h*w*l-b*r*p+i*w*p+h*r*y-i*d*y)*z,t[15]=(h*_*l-g*d*l+g*r*p-i*_*p-h*r*S+i*d*S)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,p=t.z,m=c*h,g=c*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,c*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,g=h+h,_=d+d,S=c*m,M=c*g,b=c*_,w=h*g,y=h*_,v=d*_,B=p*m,O=p*g,D=p*_,H=r.x,F=r.y,z=r.z;return l[0]=(1-(w+v))*H,l[1]=(M+D)*H,l[2]=(b-O)*H,l[3]=0,l[4]=(M-D)*F,l[5]=(1-(S+v))*F,l[6]=(y+B)*F,l[7]=0,l[8]=(b+O)*z,l[9]=(y-B)*z,l[10]=(1-(S+w))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=us.set(l[0],l[1],l[2]).length();const h=us.set(l[4],l[5],l[6]).length(),d=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],xi.copy(this);const m=1/c,g=1/h,_=1/d;return xi.elements[0]*=m,xi.elements[1]*=m,xi.elements[2]*=m,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,i.setFromRotationMatrix(xi),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=aa){const p=this.elements,m=2*c/(i-t),g=2*c/(r-l),_=(i+t)/(i-t),S=(r+l)/(r-l);let M,b;if(d===aa)M=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===Fc)M=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=aa){const p=this.elements,m=1/(i-t),g=1/(r-l),_=1/(h-c),S=(i+t)*m,M=(r+l)*g;let b,w;if(d===aa)b=(h+c)*_,w=-2*_;else if(d===Fc)b=c*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const us=new tt,xi=new Ye,ty=new tt(0,0,0),ey=new tt(1,1,1),La=new tt,cc=new tt,Kn=new tt,g_=new Ye,__=new Fs;class oa{constructor(t=0,i=0,r=0,l=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return g_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(g_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return __.setFromEuler(this),this.setFromQuaternion(__,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class Ld{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ny=0;const v_=new tt,fs=new Fs,$i=new Ye,uc=new tt,Io=new tt,iy=new tt,ay=new Fs,S_=new tt(1,0,0),x_=new tt(0,1,0),y_=new tt(0,0,1),M_={type:"added"},ry={type:"removed"},hs={type:"childadded",child:null},hh={type:"childremoved",child:null};class wn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new tt,i=new oa,r=new Fs,l=new tt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new ce}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ld,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return fs.setFromAxisAngle(t,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,i){return fs.setFromAxisAngle(t,i),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(S_,t)}rotateY(t){return this.rotateOnAxis(x_,t)}rotateZ(t){return this.rotateOnAxis(y_,t)}translateOnAxis(t,i){return v_.copy(t).applyQuaternion(this.quaternion),this.position.add(v_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(S_,t)}translateY(t){return this.translateOnAxis(x_,t)}translateZ(t){return this.translateOnAxis(y_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?uc.copy(t):uc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Io,uc,this.up):$i.lookAt(uc,Io,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),fs.setFromRotationMatrix($i),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(M_),hs.child=t,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ry),hh.child=t,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(M_),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,t,iy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,ay,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),g=h(t.images),_=h(t.shapes),S=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new tt(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new tt,ta=new tt,dh=new tt,ea=new tt,ds=new tt,ps=new tt,E_=new tt,ph=new tt,mh=new tt,gh=new tt,_h=new $e,vh=new $e,Sh=new $e;class hi{constructor(t=new tt,i=new tt,r=new tt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),yi.subVectors(t,i),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){yi.subVectors(l,i),ta.subVectors(r,i),dh.subVectors(t,i);const h=yi.dot(yi),d=yi.dot(ta),p=yi.dot(dh),m=ta.dot(ta),g=ta.dot(dh),_=h*m-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,M=(m*p-d*g)*S,b=(h*g-d*p)*S;return c.set(1-M-b,b,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(t,i,r,l,c,h,d,p){return this.getBarycoord(t,i,r,l,ea)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ea.x),p.addScaledVector(h,ea.y),p.addScaledVector(d,ea.z),p)}static getInterpolatedAttribute(t,i,r,l,c,h){return _h.setScalar(0),vh.setScalar(0),Sh.setScalar(0),_h.fromBufferAttribute(t,i),vh.fromBufferAttribute(t,r),Sh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(_h,c.x),h.addScaledVector(vh,c.y),h.addScaledVector(Sh,c.z),h}static isFrontFacing(t,i,r,l){return yi.subVectors(r,i),ta.subVectors(t,i),yi.cross(ta).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),yi.cross(ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return hi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return hi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;ds.subVectors(l,r),ps.subVectors(c,r),ph.subVectors(t,r);const p=ds.dot(ph),m=ps.dot(ph);if(p<=0&&m<=0)return i.copy(r);mh.subVectors(t,l);const g=ds.dot(mh),_=ps.dot(mh);if(g>=0&&_<=g)return i.copy(l);const S=p*_-g*m;if(S<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(ds,h);gh.subVectors(t,c);const M=ds.dot(gh),b=ps.dot(gh);if(b>=0&&M<=b)return i.copy(c);const w=M*m-p*b;if(w<=0&&m>=0&&b<=0)return d=m/(m-b),i.copy(r).addScaledVector(ps,d);const y=g*b-M*_;if(y<=0&&_-g>=0&&M-b>=0)return E_.subVectors(c,l),d=(_-g)/(_-g+(M-b)),i.copy(l).addScaledVector(E_,d);const v=1/(y+w+S);return h=w*v,d=S*v,i.copy(r).addScaledVector(ds,h).addScaledVector(ps,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const M0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},fc={h:0,s:0,l:0};function xh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class we{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ce.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ce.workingColorSpace){if(t=Vx(t,1),i=ye(i,0,1),r=ye(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=xh(h,c,t+1/3),this.g=xh(h,c,t),this.b=xh(h,c,t-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(t,i=ci){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const r=M0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Ce.fromWorkingColorSpace(Rn.copy(this),t),Math.round(ye(Rn.r*255,0,255))*65536+Math.round(ye(Rn.g*255,0,255))*256+Math.round(ye(Rn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,c=Rn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const _=h-d;switch(m=g<=.5?_/(h+d):_/(2-h-d),h){case r:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-r)/_+2;break;case c:p=(r-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Rn.copy(this),i),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=ci){Ce.fromWorkingColorSpace(Rn.copy(this),t);const i=Rn.r,r=Rn.g,l=Rn.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Na),this.setHSL(Na.h+t,Na.s+i,Na.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Na),t.getHSL(fc);const r=ih(Na.h,fc.h,i),l=ih(Na.s,fc.s,i),c=ih(Na.l,fc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new we;we.NAMES=M0;let sy=0;class Va extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Ia(),this.name="",this.type="Material",this.blending=Rs,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Oh,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==Ga&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Nh&&(r.blendSrc=this.blendSrc),this.blendDst!==Oh&&(r.blendDst=this.blendDst),this.blendEquation!==xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==u_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ts extends Va{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=o0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new tt,hc=new he;let oy=0;class di{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=vd,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)hc.fromBufferAttribute(this,i),hc.applyMatrix3(t),this.setXY(i,hc.x,hc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(t),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(t),this.setXYZ(i,an.x,an.y,an.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ui(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Be(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ui(i,this.array)),i}setX(t,i){return this.normalized&&(i=Be(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ui(i,this.array)),i}setY(t,i){return this.normalized&&(i=Be(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ui(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Be(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ui(i,this.array)),i}setW(t,i){return this.normalized&&(i=Be(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Be(i,this.array),r=Be(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Be(i,this.array),r=Be(r,this.array),l=Be(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Be(i,this.array),r=Be(r,this.array),l=Be(l,this.array),c=Be(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vd&&(t.usage=this.usage),t}}class E0 extends di{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class T0 extends di{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Ha extends di{constructor(t,i,r){super(new Float32Array(t),i,r)}}let ly=0;const li=new Ye,yh=new wn,ms=new tt,Qn=new Zo,Ho=new Zo,_n=new tt;class Ni extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(x0(t)?T0:E0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ce().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,r){return li.makeTranslation(t,i,r),this.applyMatrix4(li),this}scale(t,i,r){return li.makeScale(t,i,r),this.applyMatrix4(li),this}lookAt(t){return yh.lookAt(t),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ha(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Qn.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Qn.min,Ho.min),Qn.expandByPoint(_n),_n.addVectors(Qn.max,Ho.max),Qn.expandByPoint(_n)):(Qn.expandByPoint(Ho.min),Qn.expandByPoint(Ho.max))}Qn.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)_n.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)_n.fromBufferAttribute(d,m),p&&(ms.fromBufferAttribute(t,m),_n.add(ms)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let k=0;k<r.count;k++)d[k]=new tt,p[k]=new tt;const m=new tt,g=new tt,_=new tt,S=new he,M=new he,b=new he,w=new tt,y=new tt;function v(k,R,E){m.fromBufferAttribute(r,k),g.fromBufferAttribute(r,R),_.fromBufferAttribute(r,E),S.fromBufferAttribute(c,k),M.fromBufferAttribute(c,R),b.fromBufferAttribute(c,E),g.sub(m),_.sub(m),M.sub(S),b.sub(S);const P=1/(M.x*b.y-b.x*M.y);isFinite(P)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(P),y.copy(_).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(P),d[k].add(w),d[R].add(w),d[E].add(w),p[k].add(y),p[R].add(y),p[E].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let k=0,R=B.length;k<R;++k){const E=B[k],P=E.start,st=E.count;for(let it=P,ft=P+st;it<ft;it+=3)v(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const O=new tt,D=new tt,H=new tt,F=new tt;function z(k){H.fromBufferAttribute(l,k),F.copy(H);const R=d[k];O.copy(R),O.sub(H.multiplyScalar(H.dot(R))).normalize(),D.crossVectors(F,R);const P=D.dot(p[k])<0?-1:1;h.setXYZW(k,O.x,O.y,O.z,P)}for(let k=0,R=B.length;k<R;++k){const E=B[k],P=E.start,st=E.count;for(let it=P,ft=P+st;it<ft;it+=3)z(t.getX(it+0)),z(t.getX(it+1)),z(t.getX(it+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new di(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new tt,c=new tt,h=new tt,d=new tt,p=new tt,m=new tt,g=new tt,_=new tt;if(t)for(let S=0,M=t.count;S<M;S+=3){const b=t.getX(S+0),w=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),d.add(g),p.add(g),m.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,_=d.normalized,S=new m.constructor(p.length*g);let M=0,b=0;for(let w=0,y=p.length;w<y;w++){d.isInterleavedBufferAttribute?M=p[w]*d.data.stride+d.offset:M=p[w]*g;for(let v=0;v<g;v++)S[b++]=m[M++]}return new di(S,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ni,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,_=m.length;g<_;g++){const S=m[g],M=t(S,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,S=m.length;_<S;_++){const M=m[_];g.push(M.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let S=0,M=_.length;S<M;S++)g.push(_[S].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,g=h.length;m<g;m++){const _=h[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const T_=new Ye,hr=new Ud,dc=new Xc,b_=new tt,pc=new tt,mc=new tt,gc=new tt,Mh=new tt,_c=new tt,A_=new tt,vc=new tt;class Cn extends wn{constructor(t=new Ni,i=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){_c.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],_=c[p];g!==0&&(Mh.fromBufferAttribute(_,t),h?_c.addScaledVector(Mh,g):_c.addScaledVector(Mh.sub(i),g))}i.add(_c)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),dc.copy(r.boundingSphere),dc.applyMatrix4(c),hr.copy(t.ray).recast(t.near),!(dc.containsPoint(hr.origin)===!1&&(hr.intersectSphere(dc,b_)===null||hr.origin.distanceToSquared(b_)>(t.far-t.near)**2))&&(T_.copy(c).invert(),hr.copy(t.ray).applyMatrix4(T_),!(r.boundingBox!==null&&hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,hr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,S=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,w=S.length;b<w;b++){const y=S[b],v=h[y.materialIndex],B=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=B,H=O;D<H;D+=3){const F=d.getX(D),z=d.getX(D+1),k=d.getX(D+2);l=Sc(this,v,t,r,m,g,_,F,z,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=b,v=w;y<v;y+=3){const B=d.getX(y),O=d.getX(y+1),D=d.getX(y+2);l=Sc(this,h,t,r,m,g,_,B,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let b=0,w=S.length;b<w;b++){const y=S[b],v=h[y.materialIndex],B=Math.max(y.start,M.start),O=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let D=B,H=O;D<H;D+=3){const F=D,z=D+1,k=D+2;l=Sc(this,v,t,r,m,g,_,F,z,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let y=b,v=w;y<v;y+=3){const B=y,O=y+1,D=y+2;l=Sc(this,h,t,r,m,g,_,B,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function cy(o,t,i,r,l,c,h,d){let p;if(t.side===kn?p=r.intersectTriangle(h,c,l,!0,d):p=r.intersectTriangle(l,c,h,t.side===Ga,d),p===null)return null;vc.copy(d),vc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(vc);return m<i.near||m>i.far?null:{distance:m,point:vc.clone(),object:o}}function Sc(o,t,i,r,l,c,h,d,p,m){o.getVertexPosition(d,pc),o.getVertexPosition(p,mc),o.getVertexPosition(m,gc);const g=cy(o,t,i,r,pc,mc,gc,A_);if(g){const _=new tt;hi.getBarycoord(A_,pc,mc,gc,_),l&&(g.uv=hi.getInterpolatedAttribute(l,d,p,m,_,new he)),c&&(g.uv1=hi.getInterpolatedAttribute(c,d,p,m,_,new he)),h&&(g.normal=hi.getInterpolatedAttribute(h,d,p,m,_,new tt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:p,c:m,normal:new tt,materialIndex:0};hi.getNormal(pc,mc,gc,S.normal),g.face=S,g.barycoord=_}return g}class jo extends Ni{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],g=[],_=[];let S=0,M=0;b("z","y","x",-1,-1,r,i,t,h,c,0),b("z","y","x",1,-1,r,i,-t,h,c,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Ha(m,3)),this.setAttribute("normal",new Ha(g,3)),this.setAttribute("uv",new Ha(_,2));function b(w,y,v,B,O,D,H,F,z,k,R){const E=D/z,P=H/k,st=D/2,it=H/2,ft=F/2,ut=z+1,V=k+1;let rt=0,Z=0;const vt=new tt;for(let U=0;U<V;U++){const et=U*P-it;for(let Et=0;Et<ut;Et++){const Rt=Et*E-st;vt[w]=Rt*B,vt[y]=et*O,vt[v]=ft,m.push(vt.x,vt.y,vt.z),vt[w]=0,vt[y]=0,vt[v]=F>0?1:-1,g.push(vt.x,vt.y,vt.z),_.push(Et/z),_.push(1-U/k),rt+=1}}for(let U=0;U<k;U++)for(let et=0;et<z;et++){const Et=S+et+ut*U,Rt=S+et+ut*(U+1),Y=S+(et+1)+ut*(U+1),pt=S+(et+1)+ut*U;p.push(Et,Rt,pt),p.push(Rt,Y,pt),Z+=6}d.addGroup(M,Z,R),M+=Z,S+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Bn(o){const t={};for(let i=0;i<o.length;i++){const r=zs(o[i]);for(const l in r)t[l]=r[l]}return t}function uy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function b0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const fy={clone:zs,merge:Bn};var hy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends Va{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hy,this.fragmentShader=dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=uy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class A0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=aa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new tt,R_=new he,C_=new he;class ui extends A0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Sd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sd*2*Math.atan(Math.tan(nh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z)}getViewSize(t,i){return this.getViewBounds(t,R_,C_),i.subVectors(C_,R_)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(nh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class py extends wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(gs,_s,t,i);l.layers=this.layers,this.add(l);const c=new ui(gs,_s,t,i);c.layers=this.layers,this.add(c);const h=new ui(gs,_s,t,i);h.layers=this.layers,this.add(h);const d=new ui(gs,_s,t,i);d.layers=this.layers,this.add(d);const p=new ui(gs,_s,t,i);p.layers=this.layers,this.add(p);const m=new ui(gs,_s,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(t===aa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Fc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,g]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,S,M),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class R0 extends Fn{constructor(t,i,r,l,c,h,d,p,m,g){t=t!==void 0?t:[],i=i!==void 0?i:Us,super(t,i,r,l,c,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class my extends Ar{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new R0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Li}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new jo(5,5,5),c=new ka({name:"CubemapFromEquirect",uniforms:zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Ba});c.uniforms.tEquirect.value=i;const h=new Cn(l,c),d=i.minFilter;return i.minFilter===Er&&(i.minFilter=Li),new py(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class bs extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gy={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,r),v=this._getHandJoint(m,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],S=g.position.distanceTo(_.position),M=.02,b=.005;m.inputState.pinching&&S>M+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&S<=M-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(gy)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new bs;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class _y extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class vy{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=vd,this.updateRanges=[],this.version=0,this.uuid=Ia()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ia()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ia()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new tt;class Hc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)zn.fromBufferAttribute(this,i),zn.applyMatrix4(t),this.setXYZ(i,zn.x,zn.y,zn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)zn.fromBufferAttribute(this,i),zn.applyNormalMatrix(t),this.setXYZ(i,zn.x,zn.y,zn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)zn.fromBufferAttribute(this,i),zn.transformDirection(t),this.setXYZ(i,zn.x,zn.y,zn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Ui(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Be(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Be(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Be(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Be(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Be(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ui(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ui(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ui(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ui(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Be(i,this.array),r=Be(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Be(i,this.array),r=Be(r,this.array),l=Be(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Be(i,this.array),r=Be(r,this.array),l=Be(l,this.array),c=Be(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new di(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Hc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pc extends Va{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vs;const Go=new tt,Ss=new tt,xs=new tt,ys=new he,Vo=new he,C0=new Ye,xc=new tt,ko=new tt,yc=new tt,w_=new he,Th=new he,D_=new he;class Mc extends wn{constructor(t=new Pc){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Ni;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new vy(i,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Hc(r,3,0,!1)),vs.setAttribute("uv",new Hc(r,2,3,!1))}this.geometry=vs,this.material=t,this.center=new he(.5,.5)}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),C0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-xs.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;Ec(xc.set(-.5,-.5,0),xs,h,Ss,l,c),Ec(ko.set(.5,-.5,0),xs,h,Ss,l,c),Ec(yc.set(.5,.5,0),xs,h,Ss,l,c),w_.set(0,0),Th.set(1,0),D_.set(1,1);let d=t.ray.intersectTriangle(xc,ko,yc,!1,Go);if(d===null&&(Ec(ko.set(-.5,.5,0),xs,h,Ss,l,c),Th.set(0,1),d=t.ray.intersectTriangle(xc,yc,ko,!1,Go),d===null))return;const p=t.ray.origin.distanceTo(Go);p<t.near||p>t.far||i.push({distance:p,point:Go.clone(),uv:hi.getInterpolation(Go,xc,ko,yc,w_,Th,D_,new he),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ec(o,t,i,r,l,c){ys.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Vo.x=c*ys.x-l*ys.y,Vo.y=l*ys.x+c*ys.y):Vo.copy(ys),o.copy(t),o.x+=Vo.x,o.y+=Vo.y,o.applyMatrix4(C0)}const bh=new tt,Sy=new tt,xy=new ce;class Pa{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=bh.subVectors(r,i).cross(Sy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(bh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||xy.getNormalMatrix(t),l=this.coplanarPoint(bh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Xc,Tc=new tt;class w0{constructor(t=new Pa,i=new Pa,r=new Pa,l=new Pa,c=new Pa,h=new Pa){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=aa){const r=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],_=l[6],S=l[7],M=l[8],b=l[9],w=l[10],y=l[11],v=l[12],B=l[13],O=l[14],D=l[15];if(r[0].setComponents(p-c,S-m,y-M,D-v).normalize(),r[1].setComponents(p+c,S+m,y+M,D+v).normalize(),r[2].setComponents(p+h,S+g,y+b,D+B).normalize(),r[3].setComponents(p-h,S-g,y-b,D-B).normalize(),r[4].setComponents(p-d,S-_,y-w,D-O).normalize(),i===aa)r[5].setComponents(p+d,S+_,y+w,D+O).normalize();else if(i===Fc)r[5].setComponents(d,_,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(t){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Tc.x=l.normal.x>0?t.max.x:t.min.x,Tc.y=l.normal.y>0?t.max.y:t.min.y,Tc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vr extends Va{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gc=new tt,Vc=new tt,U_=new Ye,Xo=new Ud,bc=new Xc,Ah=new tt,L_=new tt;class pr extends wn{constructor(t=new Ni,i=new vr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Gc.fromBufferAttribute(i,l-1),Vc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Gc.distanceTo(Vc);t.setAttribute("lineDistance",new Ha(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(l),bc.radius+=c,t.ray.intersectsSphere(bc)===!1)return;U_.copy(l).invert(),Xo.copy(t.ray).applyMatrix4(U_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,g=r.index,S=r.attributes.position;if(g!==null){const M=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let w=M,y=b-1;w<y;w+=m){const v=g.getX(w),B=g.getX(w+1),O=Ac(this,t,Xo,p,v,B,w);O&&i.push(O)}if(this.isLineLoop){const w=g.getX(b-1),y=g.getX(M),v=Ac(this,t,Xo,p,w,y,b-1);v&&i.push(v)}}else{const M=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let w=M,y=b-1;w<y;w+=m){const v=Ac(this,t,Xo,p,w,w+1,w);v&&i.push(v)}if(this.isLineLoop){const w=Ac(this,t,Xo,p,b-1,M,b-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Ac(o,t,i,r,l,c,h){const d=o.geometry.attributes.position;if(Gc.fromBufferAttribute(d,l),Vc.fromBufferAttribute(d,c),i.distanceSqToSegment(Gc,Vc,Ah,L_)>r)return;Ah.applyMatrix4(o.matrixWorld);const m=t.ray.origin.distanceTo(Ah);if(!(m<t.near||m>t.far))return{distance:m,point:L_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class yy extends Fn{constructor(t,i,r,l,c,h,d,p,m){super(t,i,r,l,c,h,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class D0 extends Fn{constructor(t,i,r,l,c,h,d,p,m,g=Cs){if(g!==Cs&&g!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Cs&&(r=br),r===void 0&&g===Os&&(r=Ns),super(null,l,c,h,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Ei,this.minFilter=p!==void 0?p:Ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Dd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Tr extends Ni{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,_=t/d,S=i/p,M=[],b=[],w=[],y=[];for(let v=0;v<g;v++){const B=v*S-h;for(let O=0;O<m;O++){const D=O*_-c;b.push(D,-B,0),w.push(0,0,1),y.push(O/d),y.push(1-v/p)}}for(let v=0;v<p;v++)for(let B=0;B<d;B++){const O=B+m*v,D=B+m*(v+1),H=B+1+m*(v+1),F=B+1+m*v;M.push(O,D,F),M.push(D,H,F)}this.setIndex(M),this.setAttribute("position",new Ha(b,3)),this.setAttribute("normal",new Ha(w,3)),this.setAttribute("uv",new Ha(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.width,t.height,t.widthSegments,t.heightSegments)}}class My extends Va{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ey extends Va{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ty extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class by extends A0{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Ay extends Ty{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ry extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const N_=new Ye;class Cy{constructor(t,i,r=0,l=1/0){this.ray=new Ud(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Ld,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return N_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(N_),this}intersectObject(t,i=!0,r=[]){return xd(t,this,r,i),r.sort(O_),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)xd(t[l],this,r,i);return r.sort(O_),r}}function O_(o,t){return o.distance-t.distance}function xd(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=o.children;for(let h=0,d=c.length;h<d;h++)xd(c[h],t,i,!0)}}function P_(o,t,i,r){const l=wy(r);switch(i){case h0:return o*t;case p0:return o*t;case m0:return o*t*2;case g0:return o*t/l.components*l.byteLength;case Rd:return o*t/l.components*l.byteLength;case _0:return o*t*2/l.components*l.byteLength;case Cd:return o*t*2/l.components*l.byteLength;case d0:return o*t*3/l.components*l.byteLength;case Mi:return o*t*4/l.components*l.byteLength;case wd:return o*t*4/l.components*l.byteLength;case Dc:case Uc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Lc:case Nc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Yh:case jh:return Math.max(o,16)*Math.max(t,8)/4;case qh:case Zh:return Math.max(o,8)*Math.max(t,8)/2;case Kh:case Qh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Jh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case $h:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case td:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case ed:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case nd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case id:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case ad:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case rd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case sd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case od:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case ld:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case cd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ud:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case fd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case hd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Oc:case dd:case pd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case v0:case md:return Math.ceil(o/4)*Math.ceil(t/4)*8;case gd:case _d:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function wy(o){switch(o){case sa:case c0:return{byteLength:1,components:1};case qo:case u0:case Yo:return{byteLength:2,components:1};case bd:case Ad:return{byteLength:2,components:4};case br:case Td:case ia:return{byteLength:4,components:1};case f0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ed}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ed);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function U0(){let o=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Dy(o){const t=new WeakMap;function i(d,p){const m=d.array,g=d.usage,_=m.byteLength,S=o.createBuffer();o.bindBuffer(p,S),o.bufferData(p,m,g),d.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const g=p.array,_=p.updateRanges;if(o.bindBuffer(m,d),_.length===0)o.bufferSubData(m,0,g);else{_.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<_.length;M++){const b=_[S],w=_[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++S,_[S]=w)}_.length=S+1;for(let M=0,b=_.length;M<b;M++){const w=_[M];o.bufferSubData(m,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var Uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ly=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ny=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Py=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,By=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ky=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oM="gl_FragColor = linearToOutputTexel( gl_FragColor );",lM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,EM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$M=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_E=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ME=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:Uy,alphahash_pars_fragment:Ly,alphamap_fragment:Ny,alphamap_pars_fragment:Oy,alphatest_fragment:Py,alphatest_pars_fragment:zy,aomap_fragment:By,aomap_pars_fragment:Fy,batching_pars_vertex:Iy,batching_vertex:Hy,begin_vertex:Gy,beginnormal_vertex:Vy,bsdfs:ky,iridescence_fragment:Xy,bumpmap_pars_fragment:Wy,clipping_planes_fragment:qy,clipping_planes_pars_fragment:Yy,clipping_planes_pars_vertex:Zy,clipping_planes_vertex:jy,color_fragment:Ky,color_pars_fragment:Qy,color_pars_vertex:Jy,color_vertex:$y,common:tM,cube_uv_reflection_fragment:eM,defaultnormal_vertex:nM,displacementmap_pars_vertex:iM,displacementmap_vertex:aM,emissivemap_fragment:rM,emissivemap_pars_fragment:sM,colorspace_fragment:oM,colorspace_pars_fragment:lM,envmap_fragment:cM,envmap_common_pars_fragment:uM,envmap_pars_fragment:fM,envmap_pars_vertex:hM,envmap_physical_pars_fragment:EM,envmap_vertex:dM,fog_vertex:pM,fog_pars_vertex:mM,fog_fragment:gM,fog_pars_fragment:_M,gradientmap_pars_fragment:vM,lightmap_pars_fragment:SM,lights_lambert_fragment:xM,lights_lambert_pars_fragment:yM,lights_pars_begin:MM,lights_toon_fragment:TM,lights_toon_pars_fragment:bM,lights_phong_fragment:AM,lights_phong_pars_fragment:RM,lights_physical_fragment:CM,lights_physical_pars_fragment:wM,lights_fragment_begin:DM,lights_fragment_maps:UM,lights_fragment_end:LM,logdepthbuf_fragment:NM,logdepthbuf_pars_fragment:OM,logdepthbuf_pars_vertex:PM,logdepthbuf_vertex:zM,map_fragment:BM,map_pars_fragment:FM,map_particle_fragment:IM,map_particle_pars_fragment:HM,metalnessmap_fragment:GM,metalnessmap_pars_fragment:VM,morphinstance_vertex:kM,morphcolor_vertex:XM,morphnormal_vertex:WM,morphtarget_pars_vertex:qM,morphtarget_vertex:YM,normal_fragment_begin:ZM,normal_fragment_maps:jM,normal_pars_fragment:KM,normal_pars_vertex:QM,normal_vertex:JM,normalmap_pars_fragment:$M,clearcoat_normal_fragment_begin:tE,clearcoat_normal_fragment_maps:eE,clearcoat_pars_fragment:nE,iridescence_pars_fragment:iE,opaque_fragment:aE,packing:rE,premultiplied_alpha_fragment:sE,project_vertex:oE,dithering_fragment:lE,dithering_pars_fragment:cE,roughnessmap_fragment:uE,roughnessmap_pars_fragment:fE,shadowmap_pars_fragment:hE,shadowmap_pars_vertex:dE,shadowmap_vertex:pE,shadowmask_pars_fragment:mE,skinbase_vertex:gE,skinning_pars_vertex:_E,skinning_vertex:vE,skinnormal_vertex:SE,specularmap_fragment:xE,specularmap_pars_fragment:yE,tonemapping_fragment:ME,tonemapping_pars_fragment:EE,transmission_fragment:TE,transmission_pars_fragment:bE,uv_pars_fragment:AE,uv_pars_vertex:RE,uv_vertex:CE,worldpos_vertex:wE,background_vert:DE,background_frag:UE,backgroundCube_vert:LE,backgroundCube_frag:NE,cube_vert:OE,cube_frag:PE,depth_vert:zE,depth_frag:BE,distanceRGBA_vert:FE,distanceRGBA_frag:IE,equirect_vert:HE,equirect_frag:GE,linedashed_vert:VE,linedashed_frag:kE,meshbasic_vert:XE,meshbasic_frag:WE,meshlambert_vert:qE,meshlambert_frag:YE,meshmatcap_vert:ZE,meshmatcap_frag:jE,meshnormal_vert:KE,meshnormal_frag:QE,meshphong_vert:JE,meshphong_frag:$E,meshphysical_vert:tT,meshphysical_frag:eT,meshtoon_vert:nT,meshtoon_frag:iT,points_vert:aT,points_frag:rT,shadow_vert:sT,shadow_frag:oT,sprite_vert:lT,sprite_frag:cT},Lt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Di={basic:{uniforms:Bn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Bn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Bn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Bn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Bn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Bn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Bn([Lt.points,Lt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Bn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Bn([Lt.common,Lt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Bn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Bn([Lt.sprite,Lt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Bn([Lt.common,Lt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Bn([Lt.lights,Lt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Di.physical={uniforms:Bn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Rc={r:0,b:0,g:0},mr=new oa,uT=new Ye;function fT(o,t,i,r,l,c,h){const d=new we(0);let p=c===!0?0:1,m,g,_=null,S=0,M=null;function b(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function w(O){let D=!1;const H=b(O);H===null?v(d,p):H&&H.isColor&&(v(H,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,D){const H=b(D);H&&(H.isCubeTexture||H.mapping===kc)?(g===void 0&&(g=new Cn(new jo(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:zs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,z,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),mr.copy(D.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(uT.makeRotationFromEuler(mr)),g.material.toneMapped=Ce.getTransfer(H.colorSpace)!==ze,(_!==H||S!==H.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,_=H,S=H.version,M=o.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new Cn(new Tr(2,2),new ka({name:"BackgroundMaterial",uniforms:zs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(H.colorSpace)!==ze,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||S!==H.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,_=H,S=H.version,M=o.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function v(O,D){O.getRGB(Rc,b0(o)),r.buffers.color.setClear(Rc.r,Rc.g,Rc.b,D,h)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),p=D,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,v(d,p)},render:w,addToRenderList:y,dispose:B}}function hT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,h=!1;function d(E,P,st,it,ft){let ut=!1;const V=_(it,st,P);c!==V&&(c=V,m(c.object)),ut=M(E,it,st,ft),ut&&b(E,it,st,ft),ft!==null&&t.update(ft,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,D(E,P,st,it),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function p(){return o.createVertexArray()}function m(E){return o.bindVertexArray(E)}function g(E){return o.deleteVertexArray(E)}function _(E,P,st){const it=st.wireframe===!0;let ft=r[E.id];ft===void 0&&(ft={},r[E.id]=ft);let ut=ft[P.id];ut===void 0&&(ut={},ft[P.id]=ut);let V=ut[it];return V===void 0&&(V=S(p()),ut[it]=V),V}function S(E){const P=[],st=[],it=[];for(let ft=0;ft<i;ft++)P[ft]=0,st[ft]=0,it[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:st,attributeDivisors:it,object:E,attributes:{},index:null}}function M(E,P,st,it){const ft=c.attributes,ut=P.attributes;let V=0;const rt=st.getAttributes();for(const Z in rt)if(rt[Z].location>=0){const U=ft[Z];let et=ut[Z];if(et===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(et=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(et=E.instanceColor)),U===void 0||U.attribute!==et||et&&U.data!==et.data)return!0;V++}return c.attributesNum!==V||c.index!==it}function b(E,P,st,it){const ft={},ut=P.attributes;let V=0;const rt=st.getAttributes();for(const Z in rt)if(rt[Z].location>=0){let U=ut[Z];U===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(U=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(U=E.instanceColor));const et={};et.attribute=U,U&&U.data&&(et.data=U.data),ft[Z]=et,V++}c.attributes=ft,c.attributesNum=V,c.index=it}function w(){const E=c.newAttributes;for(let P=0,st=E.length;P<st;P++)E[P]=0}function y(E){v(E,0)}function v(E,P){const st=c.newAttributes,it=c.enabledAttributes,ft=c.attributeDivisors;st[E]=1,it[E]===0&&(o.enableVertexAttribArray(E),it[E]=1),ft[E]!==P&&(o.vertexAttribDivisor(E,P),ft[E]=P)}function B(){const E=c.newAttributes,P=c.enabledAttributes;for(let st=0,it=P.length;st<it;st++)P[st]!==E[st]&&(o.disableVertexAttribArray(st),P[st]=0)}function O(E,P,st,it,ft,ut,V){V===!0?o.vertexAttribIPointer(E,P,st,ft,ut):o.vertexAttribPointer(E,P,st,it,ft,ut)}function D(E,P,st,it){w();const ft=it.attributes,ut=st.getAttributes(),V=P.defaultAttributeValues;for(const rt in ut){const Z=ut[rt];if(Z.location>=0){let vt=ft[rt];if(vt===void 0&&(rt==="instanceMatrix"&&E.instanceMatrix&&(vt=E.instanceMatrix),rt==="instanceColor"&&E.instanceColor&&(vt=E.instanceColor)),vt!==void 0){const U=vt.normalized,et=vt.itemSize,Et=t.get(vt);if(Et===void 0)continue;const Rt=Et.buffer,Y=Et.type,pt=Et.bytesPerElement,xt=Y===o.INT||Y===o.UNSIGNED_INT||vt.gpuType===Td;if(vt.isInterleavedBufferAttribute){const bt=vt.data,Ct=bt.stride,Qt=vt.offset;if(bt.isInstancedInterleavedBuffer){for(let zt=0;zt<Z.locationSize;zt++)v(Z.location+zt,bt.meshPerAttribute);E.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let zt=0;zt<Z.locationSize;zt++)y(Z.location+zt);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let zt=0;zt<Z.locationSize;zt++)O(Z.location+zt,et/Z.locationSize,Y,U,Ct*pt,(Qt+et/Z.locationSize*zt)*pt,xt)}else{if(vt.isInstancedBufferAttribute){for(let bt=0;bt<Z.locationSize;bt++)v(Z.location+bt,vt.meshPerAttribute);E.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let bt=0;bt<Z.locationSize;bt++)y(Z.location+bt);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let bt=0;bt<Z.locationSize;bt++)O(Z.location+bt,et/Z.locationSize,Y,U,et*pt,et/Z.locationSize*bt*pt,xt)}}else if(V!==void 0){const U=V[rt];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(Z.location,U);break;case 3:o.vertexAttrib3fv(Z.location,U);break;case 4:o.vertexAttrib4fv(Z.location,U);break;default:o.vertexAttrib1fv(Z.location,U)}}}}B()}function H(){k();for(const E in r){const P=r[E];for(const st in P){const it=P[st];for(const ft in it)g(it[ft].object),delete it[ft];delete P[st]}delete r[E]}}function F(E){if(r[E.id]===void 0)return;const P=r[E.id];for(const st in P){const it=P[st];for(const ft in it)g(it[ft].object),delete it[ft];delete P[st]}delete r[E.id]}function z(E){for(const P in r){const st=r[P];if(st[E.id]===void 0)continue;const it=st[E.id];for(const ft in it)g(it[ft].object),delete it[ft];delete st[E.id]}}function k(){R(),h=!0,c!==l&&(c=l,m(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:R,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:y,disableUnusedAttributes:B}}function dT(o,t,i){let r;function l(m){r=m}function c(m,g){o.drawArrays(r,m,g),i.update(g,r,1)}function h(m,g,_){_!==0&&(o.drawArraysInstanced(r,m,g,_),i.update(g,r,_))}function d(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let M=0;for(let b=0;b<_;b++)M+=g[b];i.update(M,r,1)}function p(m,g,_,S){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<m.length;b++)h(m[b],g[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,g,0,S,0,_);let b=0;for(let w=0;w<_;w++)b+=g[w]*S[w];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function pT(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Mi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const k=z===Yo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==sa&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ia&&!k)}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=b>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:B,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:H,maxSamples:F}}function mT(o){const t=this;let i=null,r=0,l=!1,c=!1;const h=new Pa,d=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||r!==0||l;return l=S,r=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,M){const b=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,v=o.get(_);if(!l||b===null||b.length===0||c&&!y)c?g(null):m();else{const B=c?0:r,O=B*4;let D=v.clippingState||null;p.value=D,D=g(b,S,O,M);for(let H=0;H!==O;++H)D[H]=i[H];v.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=B}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,S,M,b){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=p.value,b!==!0||y===null){const v=M+w*4,B=S.matrixWorldInverse;d.getNormalMatrix(B),(y===null||y.length<v)&&(y=new Float32Array(v));for(let O=0,D=M;O!==w;++O,D+=4)h.copy(_[O]).applyMatrix4(B,d),h.normal.toArray(y,D),y[D+3]=h.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function gT(o){let t=new WeakMap;function i(h,d){return d===Vh?h.mapping=Us:d===kh&&(h.mapping=Ls),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Vh||d===kh)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new my(p.height);return m.fromEquirectangularTexture(o,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const As=4,z_=[.125,.215,.35,.446,.526,.582],yr=20,Rh=new by,B_=new we;let Ch=null,wh=0,Dh=0,Uh=!1;const Sr=(1+Math.sqrt(5))/2,Ms=1/Sr,F_=[new tt(-Sr,Ms,0),new tt(Sr,Ms,0),new tt(-Ms,0,Sr),new tt(Ms,0,Sr),new tt(0,Sr,-Ms),new tt(0,Sr,Ms),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],_T=new tt;class I_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=_T}=c;Ch=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ch,wh,Dh),this._renderer.xr.enabled=Uh,t.scissorTest=!1,Cc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Us||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ch=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Yo,format:Mi,colorSpace:Ps,depthBuffer:!1},l=H_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H_(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vT(c)),this._blurMaterial=ST(c,t,i)}return l}_compileMaterial(t){const i=new Cn(this._lodPlanes[0],t);this._renderer.compile(i,Rh)}_sceneToCubeUV(t,i,r,l,c){const p=new ui(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(B_),_.toneMapping=Fa,_.autoClear=!1;const b=new Ts({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),w=new Cn(new jo,b);let y=!1;const v=t.background;v?v.isColor&&(b.color.copy(v),t.background=null,y=!0):(b.color.copy(B_),y=!0);for(let B=0;B<6;B++){const O=B%3;O===0?(p.up.set(0,m[B],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[B],c.y,c.z)):O===1?(p.up.set(0,0,m[B]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[B],c.z)):(p.up.set(0,m[B],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[B]));const D=this._cubeSize;Cc(l,O*D,B>2?D:0,D,D),_.setRenderTarget(l),y&&_.render(w,p),_.render(t,p)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=M,_.autoClear=S,t.background=v}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Us||t.mapping===Ls;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=V_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Cn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;Cc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,Rh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=F_[(l-c-1)%F_.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Cn(this._lodPlanes[l],m),S=m.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*yr-1),w=c/b,y=isFinite(c)?1+Math.floor(g*w):yr;y>yr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${yr}`);const v=[];let B=0;for(let z=0;z<yr;++z){const k=z/w,R=Math.exp(-k*k/2);v.push(R),z===0?B+=R:z<y&&(B+=2*R)}for(let z=0;z<v.length;z++)v[z]=v[z]/B;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=b,S.mipInt.value=O-r;const D=this._sizeLods[l],H=3*D*(l>O-As?l-O+As:0),F=4*(this._cubeSize-D);Cc(i,H,F,3*D,2*D),p.setRenderTarget(i),p.render(_,Rh)}}function vT(o){const t=[],i=[],r=[];let l=o;const c=o-As+1+z_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-As?p=z_[h-o+As-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,_=1+m,S=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,b=6,w=3,y=2,v=1,B=new Float32Array(w*b*M),O=new Float32Array(y*b*M),D=new Float32Array(v*b*M);for(let F=0;F<M;F++){const z=F%3*2/3-1,k=F>2?0:-1,R=[z,k,0,z+2/3,k,0,z+2/3,k+1,0,z,k,0,z+2/3,k+1,0,z,k+1,0];B.set(R,w*b*F),O.set(S,y*b*F);const E=[F,F,F,F,F,F];D.set(E,v*b*F)}const H=new Ni;H.setAttribute("position",new di(B,w)),H.setAttribute("uv",new di(O,y)),H.setAttribute("faceIndex",new di(D,v)),t.push(H),l>As&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function H_(o,t,i){const r=new Ar(o,t,i);return r.texture.mapping=kc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function ST(o,t,i){const r=new Float32Array(yr),l=new tt(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function G_(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function V_(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Nd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Vh||p===kh,g=p===Us||p===Ls;if(m||g){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new I_(o)),_=m?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return m&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new I_(o)),_=m?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function yT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&_r("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function MT(o,t,i,r){const l={},c=new WeakMap;function h(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const M=c.get(S);M&&(t.remove(M),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(_){const S=_.attributes;for(const M in S)t.update(S[M],o.ARRAY_BUFFER)}function m(_){const S=[],M=_.index,b=_.attributes.position;let w=0;if(M!==null){const B=M.array;w=M.version;for(let O=0,D=B.length;O<D;O+=3){const H=B[O+0],F=B[O+1],z=B[O+2];S.push(H,F,F,z,z,H)}}else if(b!==void 0){const B=b.array;w=b.version;for(let O=0,D=B.length/3-1;O<D;O+=3){const H=O+0,F=O+1,z=O+2;S.push(H,F,F,z,z,H)}}else return;const y=new(x0(S)?T0:E0)(S,1);y.version=w;const v=c.get(_);v&&t.remove(v),c.set(_,y)}function g(_){const S=c.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:g}}function ET(o,t,i){let r;function l(S){r=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function p(S,M){o.drawElements(r,M,c,S*h),i.update(M,r,1)}function m(S,M,b){b!==0&&(o.drawElementsInstanced(r,M,c,S*h,b),i.update(M,r,b))}function g(S,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,S,0,b);let y=0;for(let v=0;v<b;v++)y+=M[v];i.update(y,r,1)}function _(S,M,b,w){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)m(S[v]/h,M[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,S,0,w,0,b);let v=0;for(let B=0;B<b;B++)v+=M[B]*w[B];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function TT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function bT(o,t,i){const r=new WeakMap,l=new $e;function c(h,d,p){const m=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==_){let E=function(){k.dispose(),r.delete(d),d.removeEventListener("dispose",E)};var M=E;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let H=d.attributes.position.count*D,F=1;H>t.maxTextureSize&&(F=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const z=new Float32Array(H*F*4*_),k=new y0(z,H,F,_);k.type=ia,k.needsUpdate=!0;const R=D*4;for(let P=0;P<_;P++){const st=v[P],it=B[P],ft=O[P],ut=H*F*4*P;for(let V=0;V<st.count;V++){const rt=V*R;b===!0&&(l.fromBufferAttribute(st,V),z[ut+rt+0]=l.x,z[ut+rt+1]=l.y,z[ut+rt+2]=l.z,z[ut+rt+3]=0),w===!0&&(l.fromBufferAttribute(it,V),z[ut+rt+4]=l.x,z[ut+rt+5]=l.y,z[ut+rt+6]=l.z,z[ut+rt+7]=0),y===!0&&(l.fromBufferAttribute(ft,V),z[ut+rt+8]=l.x,z[ut+rt+9]=l.y,z[ut+rt+10]=l.z,z[ut+rt+11]=ft.itemSize===4?l.w:1)}}S={count:_,texture:k,size:new he(H,F)},r.set(d,S),d.addEventListener("dispose",E)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<m.length;y++)b+=m[y];const w=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function AT(o,t,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return _}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}const L0=new Fn,k_=new D0(1,1),N0=new y0,O0=new Jx,P0=new R0,X_=[],W_=[],q_=new Float32Array(16),Y_=new Float32Array(9),Z_=new Float32Array(4);function Is(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=X_[l];if(c===void 0&&(c=new Float32Array(l),X_[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function fn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function hn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Wc(o,t){let i=W_[t];i===void 0&&(i=new Int32Array(t),W_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function RT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function CT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2fv(this.addr,t),hn(i,t)}}function wT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;o.uniform3fv(this.addr,t),hn(i,t)}}function DT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4fv(this.addr,t),hn(i,t)}}function UT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;Z_.set(r),o.uniformMatrix2fv(this.addr,!1,Z_),hn(i,r)}}function LT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;Y_.set(r),o.uniformMatrix3fv(this.addr,!1,Y_),hn(i,r)}}function NT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;q_.set(r),o.uniformMatrix4fv(this.addr,!1,q_),hn(i,r)}}function OT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function PT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2iv(this.addr,t),hn(i,t)}}function zT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3iv(this.addr,t),hn(i,t)}}function BT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4iv(this.addr,t),hn(i,t)}}function FT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function IT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2uiv(this.addr,t),hn(i,t)}}function HT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3uiv(this.addr,t),hn(i,t)}}function GT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4uiv(this.addr,t),hn(i,t)}}function VT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(k_.compareFunction=S0,c=k_):c=L0,i.setTexture2D(t||c,l)}function kT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||O0,l)}function XT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||P0,l)}function WT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||N0,l)}function qT(o){switch(o){case 5126:return RT;case 35664:return CT;case 35665:return wT;case 35666:return DT;case 35674:return UT;case 35675:return LT;case 35676:return NT;case 5124:case 35670:return OT;case 35667:case 35671:return PT;case 35668:case 35672:return zT;case 35669:case 35673:return BT;case 5125:return FT;case 36294:return IT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return WT}}function YT(o,t){o.uniform1fv(this.addr,t)}function ZT(o,t){const i=Is(t,this.size,2);o.uniform2fv(this.addr,i)}function jT(o,t){const i=Is(t,this.size,3);o.uniform3fv(this.addr,i)}function KT(o,t){const i=Is(t,this.size,4);o.uniform4fv(this.addr,i)}function QT(o,t){const i=Is(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function JT(o,t){const i=Is(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function $T(o,t){const i=Is(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function tb(o,t){o.uniform1iv(this.addr,t)}function eb(o,t){o.uniform2iv(this.addr,t)}function nb(o,t){o.uniform3iv(this.addr,t)}function ib(o,t){o.uniform4iv(this.addr,t)}function ab(o,t){o.uniform1uiv(this.addr,t)}function rb(o,t){o.uniform2uiv(this.addr,t)}function sb(o,t){o.uniform3uiv(this.addr,t)}function ob(o,t){o.uniform4uiv(this.addr,t)}function lb(o,t,i){const r=this.cache,l=t.length,c=Wc(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||L0,c[h])}function cb(o,t,i){const r=this.cache,l=t.length,c=Wc(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||O0,c[h])}function ub(o,t,i){const r=this.cache,l=t.length,c=Wc(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||P0,c[h])}function fb(o,t,i){const r=this.cache,l=t.length,c=Wc(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||N0,c[h])}function hb(o){switch(o){case 5126:return YT;case 35664:return ZT;case 35665:return jT;case 35666:return KT;case 35674:return QT;case 35675:return JT;case 35676:return $T;case 5124:case 35670:return tb;case 35667:case 35671:return eb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return ab;case 36294:return rb;case 36295:return sb;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return fb}}class db{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=qT(i.type)}}class pb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=hb(i.type)}}class mb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function j_(o,t){o.seq.push(t),o.map[t.id]=t}function gb(o,t,i){const r=o.name,l=r.length;for(Lh.lastIndex=0;;){const c=Lh.exec(r),h=Lh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){j_(i,m===void 0?new db(d,o,t):new pb(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new mb(d),j_(i,_)),i=_}}}class zc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);gb(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function K_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const _b=37297;let vb=0;function Sb(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Q_=new ce;function xb(o){Ce._getMatrix(Q_,Ce.workingColorSpace,o);const t=`mat3( ${Q_.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case Bc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function J_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+Sb(o.getShaderSource(t),h)}else return l}function yb(o,t){const i=xb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Mb(o,t){let i;switch(t){case Ex:i="Linear";break;case Tx:i="Reinhard";break;case bx:i="Cineon";break;case Ax:i="ACESFilmic";break;case Cx:i="AgX";break;case wx:i="Neutral";break;case Rx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const wc=new tt;function Eb(){Ce.getLuminanceCoefficients(wc);const o=wc.x.toFixed(4),t=wc.y.toFixed(4),i=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function bb(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Ab(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Wo(o){return o!==""}function $_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function t0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function yd(o){return o.replace(Rb,wb)}const Cb=new Map;function wb(o,t){let i=ue[t];if(i===void 0){const r=Cb.get(t);if(r!==void 0)i=ue[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return yd(i)}const Db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e0(o){return o.replace(Db,Ub)}function Ub(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function n0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===s0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===nx?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===na&&(t="SHADOWMAP_TYPE_VSM"),t}function Nb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Us:case Ls:t="ENVMAP_TYPE_CUBE";break;case kc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ob(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ls:t="ENVMAP_MODE_REFRACTION";break}return t}function Pb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case o0:t="ENVMAP_BLENDING_MULTIPLY";break;case yx:t="ENVMAP_BLENDING_MIX";break;case Mx:t="ENVMAP_BLENDING_ADD";break}return t}function zb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Bb(o,t,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=Lb(i),m=Nb(i),g=Ob(i),_=Pb(i),S=zb(i),M=Tb(i),b=bb(c),w=l.createProgram();let y,v,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Wo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Wo).join(`
`),v.length>0&&(v+=`
`)):(y=[n0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),v=[n0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?ue.tonemapping_pars_fragment:"",i.toneMapping!==Fa?Mb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,yb("linearToOutputTexel",i.outputColorSpace),Eb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),h=yd(h),h=$_(h,i),h=t0(h,i),d=yd(d),d=$_(d,i),d=t0(d,i),h=e0(h),d=e0(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===f_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===f_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=B+y+h,D=B+v+d,H=K_(l,l.VERTEX_SHADER,O),F=K_(l,l.FRAGMENT_SHADER,D);l.attachShader(w,H),l.attachShader(w,F),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(P){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(w).trim(),it=l.getShaderInfoLog(H).trim(),ft=l.getShaderInfoLog(F).trim();let ut=!0,V=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ut=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,H,F);else{const rt=J_(l,H,"vertex"),Z=J_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+st+`
`+rt+`
`+Z)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(it===""||ft==="")&&(V=!1);V&&(P.diagnostics={runnable:ut,programLog:st,vertexShader:{log:it,prefix:y},fragmentShader:{log:ft,prefix:v}})}l.deleteShader(H),l.deleteShader(F),k=new zc(l,w),R=Ab(l,w)}let k;this.getUniforms=function(){return k===void 0&&z(this),k};let R;this.getAttributes=function(){return R===void 0&&z(this),R};let E=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=l.getProgramParameter(w,_b)),E},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=vb++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=F,this}let Fb=0;class Ib{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Hb(t),i.set(t,r)),r}}class Hb{constructor(t){this.id=Fb++,this.code=t,this.usedTimes=0}}function Gb(o,t,i,r,l,c,h){const d=new Ld,p=new Ib,m=new Set,g=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return m.add(R),R===0?"uv":`uv${R}`}function y(R,E,P,st,it){const ft=st.fog,ut=it.geometry,V=R.isMeshStandardMaterial?st.environment:null,rt=(R.isMeshStandardMaterial?i:t).get(R.envMap||V),Z=rt&&rt.mapping===kc?rt.image.height:null,vt=b[R.type];R.precision!==null&&(M=l.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const U=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,et=U!==void 0?U.length:0;let Et=0;ut.morphAttributes.position!==void 0&&(Et=1),ut.morphAttributes.normal!==void 0&&(Et=2),ut.morphAttributes.color!==void 0&&(Et=3);let Rt,Y,pt,xt;if(vt){const Te=Di[vt];Rt=Te.vertexShader,Y=Te.fragmentShader}else Rt=R.vertexShader,Y=R.fragmentShader,p.update(R),pt=p.getVertexShaderID(R),xt=p.getFragmentShaderID(R);const bt=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Qt=it.isInstancedMesh===!0,zt=it.isBatchedMesh===!0,Ee=!!R.map,De=!!R.matcap,re=!!rt,I=!!R.aoMap,vn=!!R.lightMap,oe=!!R.bumpMap,de=!!R.normalMap,Xt=!!R.displacementMap,Ue=!!R.emissiveMap,Wt=!!R.metalnessMap,L=!!R.roughnessMap,T=R.anisotropy>0,nt=R.clearcoat>0,ht=R.dispersion>0,St=R.iridescence>0,dt=R.sheen>0,Gt=R.transmission>0,Dt=T&&!!R.anisotropyMap,Bt=nt&&!!R.clearcoatMap,ge=nt&&!!R.clearcoatNormalMap,Tt=nt&&!!R.clearcoatRoughnessMap,Ft=St&&!!R.iridescenceMap,Kt=St&&!!R.iridescenceThicknessMap,Vt=dt&&!!R.sheenColorMap,It=dt&&!!R.sheenRoughnessMap,se=!!R.specularMap,Zt=!!R.specularColorMap,Le=!!R.specularIntensityMap,W=Gt&&!!R.transmissionMap,Nt=Gt&&!!R.thicknessMap,ot=!!R.gradientMap,gt=!!R.alphaMap,wt=R.alphaTest>0,Ut=!!R.alphaHash,$t=!!R.extensions;let Xe=Fa;R.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Xe=o.toneMapping);const rn={shaderID:vt,shaderType:R.type,shaderName:R.name,vertexShader:Rt,fragmentShader:Y,defines:R.defines,customVertexShaderID:pt,customFragmentShaderID:xt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:zt,batchingColor:zt&&it._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&it.instanceColor!==null,instancingMorph:Qt&&it.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Ps,alphaToCoverage:!!R.alphaToCoverage,map:Ee,matcap:De,envMap:re,envMapMode:re&&rt.mapping,envMapCubeUVHeight:Z,aoMap:I,lightMap:vn,bumpMap:oe,normalMap:de,displacementMap:S&&Xt,emissiveMap:Ue,normalMapObjectSpace:de&&R.normalMapType===Ox,normalMapTangentSpace:de&&R.normalMapType===Nx,metalnessMap:Wt,roughnessMap:L,anisotropy:T,anisotropyMap:Dt,clearcoat:nt,clearcoatMap:Bt,clearcoatNormalMap:ge,clearcoatRoughnessMap:Tt,dispersion:ht,iridescence:St,iridescenceMap:Ft,iridescenceThicknessMap:Kt,sheen:dt,sheenColorMap:Vt,sheenRoughnessMap:It,specularMap:se,specularColorMap:Zt,specularIntensityMap:Le,transmission:Gt,transmissionMap:W,thicknessMap:Nt,gradientMap:ot,opaque:R.transparent===!1&&R.blending===Rs&&R.alphaToCoverage===!1,alphaMap:gt,alphaTest:wt,alphaHash:Ut,combine:R.combine,mapUv:Ee&&w(R.map.channel),aoMapUv:I&&w(R.aoMap.channel),lightMapUv:vn&&w(R.lightMap.channel),bumpMapUv:oe&&w(R.bumpMap.channel),normalMapUv:de&&w(R.normalMap.channel),displacementMapUv:Xt&&w(R.displacementMap.channel),emissiveMapUv:Ue&&w(R.emissiveMap.channel),metalnessMapUv:Wt&&w(R.metalnessMap.channel),roughnessMapUv:L&&w(R.roughnessMap.channel),anisotropyMapUv:Dt&&w(R.anisotropyMap.channel),clearcoatMapUv:Bt&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:ge&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:It&&w(R.sheenRoughnessMap.channel),specularMapUv:se&&w(R.specularMap.channel),specularColorMapUv:Zt&&w(R.specularColorMap.channel),specularIntensityMapUv:Le&&w(R.specularIntensityMap.channel),transmissionMapUv:W&&w(R.transmissionMap.channel),thicknessMapUv:Nt&&w(R.thicknessMap.channel),alphaMapUv:gt&&w(R.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(de||T),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!ut.attributes.uv&&(Ee||gt),fog:!!ft,useFog:R.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ct,skinning:it.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Et,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Ee&&R.map.isVideoTexture===!0&&Ce.getTransfer(R.map.colorSpace)===ze,decodeVideoTextureEmissive:Ue&&R.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(R.emissiveMap.colorSpace)===ze,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===fi,flipSided:R.side===kn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:$t&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&R.extensions.multiDraw===!0||zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return rn.vertexUv1s=m.has(1),rn.vertexUv2s=m.has(2),rn.vertexUv3s=m.has(3),m.clear(),rn}function v(R){const E=[];if(R.shaderID?E.push(R.shaderID):(E.push(R.customVertexShaderID),E.push(R.customFragmentShaderID)),R.defines!==void 0)for(const P in R.defines)E.push(P),E.push(R.defines[P]);return R.isRawShaderMaterial===!1&&(B(E,R),O(E,R),E.push(o.outputColorSpace)),E.push(R.customProgramCacheKey),E.join()}function B(R,E){R.push(E.precision),R.push(E.outputColorSpace),R.push(E.envMapMode),R.push(E.envMapCubeUVHeight),R.push(E.mapUv),R.push(E.alphaMapUv),R.push(E.lightMapUv),R.push(E.aoMapUv),R.push(E.bumpMapUv),R.push(E.normalMapUv),R.push(E.displacementMapUv),R.push(E.emissiveMapUv),R.push(E.metalnessMapUv),R.push(E.roughnessMapUv),R.push(E.anisotropyMapUv),R.push(E.clearcoatMapUv),R.push(E.clearcoatNormalMapUv),R.push(E.clearcoatRoughnessMapUv),R.push(E.iridescenceMapUv),R.push(E.iridescenceThicknessMapUv),R.push(E.sheenColorMapUv),R.push(E.sheenRoughnessMapUv),R.push(E.specularMapUv),R.push(E.specularColorMapUv),R.push(E.specularIntensityMapUv),R.push(E.transmissionMapUv),R.push(E.thicknessMapUv),R.push(E.combine),R.push(E.fogExp2),R.push(E.sizeAttenuation),R.push(E.morphTargetsCount),R.push(E.morphAttributeCount),R.push(E.numDirLights),R.push(E.numPointLights),R.push(E.numSpotLights),R.push(E.numSpotLightMaps),R.push(E.numHemiLights),R.push(E.numRectAreaLights),R.push(E.numDirLightShadows),R.push(E.numPointLightShadows),R.push(E.numSpotLightShadows),R.push(E.numSpotLightShadowsWithMaps),R.push(E.numLightProbes),R.push(E.shadowMapType),R.push(E.toneMapping),R.push(E.numClippingPlanes),R.push(E.numClipIntersection),R.push(E.depthPacking)}function O(R,E){d.disableAll(),E.supportsVertexTextures&&d.enable(0),E.instancing&&d.enable(1),E.instancingColor&&d.enable(2),E.instancingMorph&&d.enable(3),E.matcap&&d.enable(4),E.envMap&&d.enable(5),E.normalMapObjectSpace&&d.enable(6),E.normalMapTangentSpace&&d.enable(7),E.clearcoat&&d.enable(8),E.iridescence&&d.enable(9),E.alphaTest&&d.enable(10),E.vertexColors&&d.enable(11),E.vertexAlphas&&d.enable(12),E.vertexUv1s&&d.enable(13),E.vertexUv2s&&d.enable(14),E.vertexUv3s&&d.enable(15),E.vertexTangents&&d.enable(16),E.anisotropy&&d.enable(17),E.alphaHash&&d.enable(18),E.batching&&d.enable(19),E.dispersion&&d.enable(20),E.batchingColor&&d.enable(21),R.push(d.mask),d.disableAll(),E.fog&&d.enable(0),E.useFog&&d.enable(1),E.flatShading&&d.enable(2),E.logarithmicDepthBuffer&&d.enable(3),E.reverseDepthBuffer&&d.enable(4),E.skinning&&d.enable(5),E.morphTargets&&d.enable(6),E.morphNormals&&d.enable(7),E.morphColors&&d.enable(8),E.premultipliedAlpha&&d.enable(9),E.shadowMapEnabled&&d.enable(10),E.doubleSided&&d.enable(11),E.flipSided&&d.enable(12),E.useDepthPacking&&d.enable(13),E.dithering&&d.enable(14),E.transmission&&d.enable(15),E.sheen&&d.enable(16),E.opaque&&d.enable(17),E.pointsUvs&&d.enable(18),E.decodeVideoTexture&&d.enable(19),E.decodeVideoTextureEmissive&&d.enable(20),E.alphaToCoverage&&d.enable(21),R.push(d.mask)}function D(R){const E=b[R.type];let P;if(E){const st=Di[E];P=fy.clone(st.uniforms)}else P=R.uniforms;return P}function H(R,E){let P;for(let st=0,it=g.length;st<it;st++){const ft=g[st];if(ft.cacheKey===E){P=ft,++P.usedTimes;break}}return P===void 0&&(P=new Bb(o,E,R,c),g.push(P)),P}function F(R){if(--R.usedTimes===0){const E=g.indexOf(R);g[E]=g[g.length-1],g.pop(),R.destroy()}}function z(R){p.remove(R)}function k(){p.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:D,acquireProgram:H,releaseProgram:F,releaseShaderCache:z,programs:g,dispose:k}}function Vb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function kb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function i0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function a0(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(_,S,M,b,w,y){let v=o[t];return v===void 0?(v={id:_.id,object:_,geometry:S,material:M,groupOrder:b,renderOrder:_.renderOrder,z:w,group:y},o[t]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=M,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=w,v.group=y),t++,v}function d(_,S,M,b,w,y){const v=h(_,S,M,b,w,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function p(_,S,M,b,w,y){const v=h(_,S,M,b,w,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function m(_,S){i.length>1&&i.sort(_||kb),r.length>1&&r.sort(S||i0),l.length>1&&l.sort(S||i0)}function g(){for(let _=t,S=o.length;_<S;_++){const M=o[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function Xb(){let o=new WeakMap;function t(r,l){const c=o.get(r);let h;return c===void 0?(h=new a0,o.set(r,[h])):l>=c.length?(h=new a0,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Wb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new we};break;case"SpotLight":i={position:new tt,direction:new tt,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[t.id]=i,i}}}function qb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Yb=0;function Zb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function jb(o){const t=new Wb,i=qb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new tt);const l=new tt,c=new Ye,h=new Ye;function d(m){let g=0,_=0,S=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let M=0,b=0,w=0,y=0,v=0,B=0,O=0,D=0,H=0,F=0,z=0;m.sort(Zb);for(let R=0,E=m.length;R<E;R++){const P=m[R],st=P.color,it=P.intensity,ft=P.distance,ut=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)g+=st.r*it,_+=st.g*it,S+=st.b*it;else if(P.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(P.sh.coefficients[V],it);z++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const rt=P.shadow,Z=i.get(P);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,r.directionalShadow[M]=Z,r.directionalShadowMap[M]=ut,r.directionalShadowMatrix[M]=P.shadow.matrix,B++}r.directional[M]=V,M++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(st).multiplyScalar(it),V.distance=ft,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,r.spot[w]=V;const rt=P.shadow;if(P.map&&(r.spotLightMap[H]=P.map,H++,rt.updateMatrices(P),P.castShadow&&F++),r.spotLightMatrix[w]=rt.matrix,P.castShadow){const Z=i.get(P);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,r.spotShadow[w]=Z,r.spotShadowMap[w]=ut,D++}w++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(st).multiplyScalar(it),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),r.rectArea[y]=V,y++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const rt=P.shadow,Z=i.get(P);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,Z.shadowCameraNear=rt.camera.near,Z.shadowCameraFar=rt.camera.far,r.pointShadow[b]=Z,r.pointShadowMap[b]=ut,r.pointShadowMatrix[b]=P.shadow.matrix,O++}r.point[b]=V,b++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(it),V.groundColor.copy(P.groundColor).multiplyScalar(it),r.hemi[v]=V,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=S;const k=r.hash;(k.directionalLength!==M||k.pointLength!==b||k.spotLength!==w||k.rectAreaLength!==y||k.hemiLength!==v||k.numDirectionalShadows!==B||k.numPointShadows!==O||k.numSpotShadows!==D||k.numSpotMaps!==H||k.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=y,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=D+H-F,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=z,k.directionalLength=M,k.pointLength=b,k.spotLength=w,k.rectAreaLength=y,k.hemiLength=v,k.numDirectionalShadows=B,k.numPointShadows=O,k.numSpotShadows=D,k.numSpotMaps=H,k.numLightProbes=z,r.version=Yb++)}function p(m,g){let _=0,S=0,M=0,b=0,w=0;const y=g.matrixWorldInverse;for(let v=0,B=m.length;v<B;v++){const O=m[v];if(O.isDirectionalLight){const D=r.directional[_];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),_++}else if(O.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const D=r.rectArea[b];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),h.identity(),c.copy(O.matrixWorld),c.premultiply(y),h.extractRotation(c),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const D=r.point[S];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),S++}else if(O.isHemisphereLight){const D=r.hemi[w];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:d,setupView:p,state:r}}function r0(o){const t=new jb(o),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function Kb(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new r0(o),t.set(l,[d])):c>=h.length?(d=new r0(o),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const Qb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $b(o,t,i){let r=new w0;const l=new he,c=new he,h=new $e,d=new My({depthPacking:Lx}),p=new Ey,m={},g=i.maxTextureSize,_={[Ga]:kn,[kn]:Ga,[fi]:fi},S=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Qb,fragmentShader:Jb}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ni;b.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Cn(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=s0;let v=this.type;this.render=function(F,z,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const R=o.getRenderTarget(),E=o.getActiveCubeFace(),P=o.getActiveMipmapLevel(),st=o.state;st.setBlending(Ba),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const it=v!==na&&this.type===na,ft=v===na&&this.type!==na;for(let ut=0,V=F.length;ut<V;ut++){const rt=F[ut],Z=rt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const vt=Z.getFrameExtents();if(l.multiply(vt),c.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/vt.x),l.x=c.x*vt.x,Z.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/vt.y),l.y=c.y*vt.y,Z.mapSize.y=c.y)),Z.map===null||it===!0||ft===!0){const et=this.type!==na?{minFilter:Ei,magFilter:Ei}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ar(l.x,l.y,et),Z.map.texture.name=rt.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const U=Z.getViewportCount();for(let et=0;et<U;et++){const Et=Z.getViewport(et);h.set(c.x*Et.x,c.y*Et.y,c.x*Et.z,c.y*Et.w),st.viewport(h),Z.updateMatrices(rt,et),r=Z.getFrustum(),D(z,k,Z.camera,rt,this.type)}Z.isPointLightShadow!==!0&&this.type===na&&B(Z,k),Z.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(R,E,P)};function B(F,z){const k=t.update(w);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ar(l.x,l.y)),S.uniforms.shadow_pass.value=F.map.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(z,null,k,S,w,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(z,null,k,M,w,null)}function O(F,z,k,R){let E=null;const P=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(P!==void 0)E=P;else if(E=k.isPointLight===!0?p:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const st=E.uuid,it=z.uuid;let ft=m[st];ft===void 0&&(ft={},m[st]=ft);let ut=ft[it];ut===void 0&&(ut=E.clone(),ft[it]=ut,z.addEventListener("dispose",H)),E=ut}if(E.visible=z.visible,E.wireframe=z.wireframe,R===na?E.side=z.shadowSide!==null?z.shadowSide:z.side:E.side=z.shadowSide!==null?z.shadowSide:_[z.side],E.alphaMap=z.alphaMap,E.alphaTest=z.alphaTest,E.map=z.map,E.clipShadows=z.clipShadows,E.clippingPlanes=z.clippingPlanes,E.clipIntersection=z.clipIntersection,E.displacementMap=z.displacementMap,E.displacementScale=z.displacementScale,E.displacementBias=z.displacementBias,E.wireframeLinewidth=z.wireframeLinewidth,E.linewidth=z.linewidth,k.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const st=o.properties.get(E);st.light=k}return E}function D(F,z,k,R,E){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&E===na)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const it=t.update(F),ft=F.material;if(Array.isArray(ft)){const ut=it.groups;for(let V=0,rt=ut.length;V<rt;V++){const Z=ut[V],vt=ft[Z.materialIndex];if(vt&&vt.visible){const U=O(F,vt,R,E);F.onBeforeShadow(o,F,z,k,it,U,Z),o.renderBufferDirect(k,null,it,U,F,Z),F.onAfterShadow(o,F,z,k,it,U,Z)}}}else if(ft.visible){const ut=O(F,ft,R,E);F.onBeforeShadow(o,F,z,k,it,ut,null),o.renderBufferDirect(k,null,it,ut,F,null),F.onAfterShadow(o,F,z,k,it,ut,null)}}const st=F.children;for(let it=0,ft=st.length;it<ft;it++)D(st[it],z,k,R,E)}function H(F){F.target.removeEventListener("dispose",H);for(const k in m){const R=m[k],E=F.target.uuid;E in R&&(R[E].dispose(),delete R[E])}}}const tA={[Ph]:zh,[Bh]:Hh,[Fh]:Gh,[Ds]:Ih,[zh]:Ph,[Hh]:Bh,[Gh]:Fh,[Ih]:Ds};function eA(o,t){function i(){let W=!1;const Nt=new $e;let ot=null;const gt=new $e(0,0,0,0);return{setMask:function(wt){ot!==wt&&!W&&(o.colorMask(wt,wt,wt,wt),ot=wt)},setLocked:function(wt){W=wt},setClear:function(wt,Ut,$t,Xe,rn){rn===!0&&(wt*=Xe,Ut*=Xe,$t*=Xe),Nt.set(wt,Ut,$t,Xe),gt.equals(Nt)===!1&&(o.clearColor(wt,Ut,$t,Xe),gt.copy(Nt))},reset:function(){W=!1,ot=null,gt.set(-1,0,0,0)}}}function r(){let W=!1,Nt=!1,ot=null,gt=null,wt=null;return{setReversed:function(Ut){if(Nt!==Ut){const $t=t.get("EXT_clip_control");Nt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const Xe=wt;wt=null,this.setClear(Xe)}Nt=Ut},getReversed:function(){return Nt},setTest:function(Ut){Ut?bt(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(Ut){ot!==Ut&&!W&&(o.depthMask(Ut),ot=Ut)},setFunc:function(Ut){if(Nt&&(Ut=tA[Ut]),gt!==Ut){switch(Ut){case Ph:o.depthFunc(o.NEVER);break;case zh:o.depthFunc(o.ALWAYS);break;case Bh:o.depthFunc(o.LESS);break;case Ds:o.depthFunc(o.LEQUAL);break;case Fh:o.depthFunc(o.EQUAL);break;case Ih:o.depthFunc(o.GEQUAL);break;case Hh:o.depthFunc(o.GREATER);break;case Gh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}gt=Ut}},setLocked:function(Ut){W=Ut},setClear:function(Ut){wt!==Ut&&(Nt&&(Ut=1-Ut),o.clearDepth(Ut),wt=Ut)},reset:function(){W=!1,ot=null,gt=null,wt=null,Nt=!1}}}function l(){let W=!1,Nt=null,ot=null,gt=null,wt=null,Ut=null,$t=null,Xe=null,rn=null;return{setTest:function(Te){W||(Te?bt(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Te){Nt!==Te&&!W&&(o.stencilMask(Te),Nt=Te)},setFunc:function(Te,Dn,Un){(ot!==Te||gt!==Dn||wt!==Un)&&(o.stencilFunc(Te,Dn,Un),ot=Te,gt=Dn,wt=Un)},setOp:function(Te,Dn,Un){(Ut!==Te||$t!==Dn||Xe!==Un)&&(o.stencilOp(Te,Dn,Un),Ut=Te,$t=Dn,Xe=Un)},setLocked:function(Te){W=Te},setClear:function(Te){rn!==Te&&(o.clearStencil(Te),rn=Te)},reset:function(){W=!1,Nt=null,ot=null,gt=null,wt=null,Ut=null,$t=null,Xe=null,rn=null}}}const c=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let g={},_={},S=new WeakMap,M=[],b=null,w=!1,y=null,v=null,B=null,O=null,D=null,H=null,F=null,z=new we(0,0,0),k=0,R=!1,E=null,P=null,st=null,it=null,ft=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,rt=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),V=rt>=1):Z.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),V=rt>=2);let vt=null,U={};const et=o.getParameter(o.SCISSOR_BOX),Et=o.getParameter(o.VIEWPORT),Rt=new $e().fromArray(et),Y=new $e().fromArray(Et);function pt(W,Nt,ot,gt){const wt=new Uint8Array(4),Ut=o.createTexture();o.bindTexture(W,Ut),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<ot;$t++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,gt,0,o.RGBA,o.UNSIGNED_BYTE,wt):o.texImage2D(Nt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,wt);return Ut}const xt={};xt[o.TEXTURE_2D]=pt(o.TEXTURE_2D,o.TEXTURE_2D,1),xt[o.TEXTURE_CUBE_MAP]=pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[o.TEXTURE_2D_ARRAY]=pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xt[o.TEXTURE_3D]=pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),bt(o.DEPTH_TEST),h.setFunc(Ds),oe(!1),de(o_),bt(o.CULL_FACE),I(Ba);function bt(W){g[W]!==!0&&(o.enable(W),g[W]=!0)}function Ct(W){g[W]!==!1&&(o.disable(W),g[W]=!1)}function Qt(W,Nt){return _[W]!==Nt?(o.bindFramebuffer(W,Nt),_[W]=Nt,W===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Nt),W===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function zt(W,Nt){let ot=M,gt=!1;if(W){ot=S.get(Nt),ot===void 0&&(ot=[],S.set(Nt,ot));const wt=W.textures;if(ot.length!==wt.length||ot[0]!==o.COLOR_ATTACHMENT0){for(let Ut=0,$t=wt.length;Ut<$t;Ut++)ot[Ut]=o.COLOR_ATTACHMENT0+Ut;ot.length=wt.length,gt=!0}}else ot[0]!==o.BACK&&(ot[0]=o.BACK,gt=!0);gt&&o.drawBuffers(ot)}function Ee(W){return b!==W?(o.useProgram(W),b=W,!0):!1}const De={[xr]:o.FUNC_ADD,[ax]:o.FUNC_SUBTRACT,[rx]:o.FUNC_REVERSE_SUBTRACT};De[sx]=o.MIN,De[ox]=o.MAX;const re={[lx]:o.ZERO,[cx]:o.ONE,[ux]:o.SRC_COLOR,[Nh]:o.SRC_ALPHA,[gx]:o.SRC_ALPHA_SATURATE,[px]:o.DST_COLOR,[hx]:o.DST_ALPHA,[fx]:o.ONE_MINUS_SRC_COLOR,[Oh]:o.ONE_MINUS_SRC_ALPHA,[mx]:o.ONE_MINUS_DST_COLOR,[dx]:o.ONE_MINUS_DST_ALPHA,[_x]:o.CONSTANT_COLOR,[vx]:o.ONE_MINUS_CONSTANT_COLOR,[Sx]:o.CONSTANT_ALPHA,[xx]:o.ONE_MINUS_CONSTANT_ALPHA};function I(W,Nt,ot,gt,wt,Ut,$t,Xe,rn,Te){if(W===Ba){w===!0&&(Ct(o.BLEND),w=!1);return}if(w===!1&&(bt(o.BLEND),w=!0),W!==ix){if(W!==y||Te!==R){if((v!==xr||D!==xr)&&(o.blendEquation(o.FUNC_ADD),v=xr,D=xr),Te)switch(W){case Rs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Es:o.blendFunc(o.ONE,o.ONE);break;case l_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case c_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Rs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Es:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case l_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case c_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}B=null,O=null,H=null,F=null,z.set(0,0,0),k=0,y=W,R=Te}return}wt=wt||Nt,Ut=Ut||ot,$t=$t||gt,(Nt!==v||wt!==D)&&(o.blendEquationSeparate(De[Nt],De[wt]),v=Nt,D=wt),(ot!==B||gt!==O||Ut!==H||$t!==F)&&(o.blendFuncSeparate(re[ot],re[gt],re[Ut],re[$t]),B=ot,O=gt,H=Ut,F=$t),(Xe.equals(z)===!1||rn!==k)&&(o.blendColor(Xe.r,Xe.g,Xe.b,rn),z.copy(Xe),k=rn),y=W,R=!1}function vn(W,Nt){W.side===fi?Ct(o.CULL_FACE):bt(o.CULL_FACE);let ot=W.side===kn;Nt&&(ot=!ot),oe(ot),W.blending===Rs&&W.transparent===!1?I(Ba):I(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const gt=W.stencilWrite;d.setTest(gt),gt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ue(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?bt(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function oe(W){E!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),E=W)}function de(W){W!==tx?(bt(o.CULL_FACE),W!==P&&(W===o_?o.cullFace(o.BACK):W===ex?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),P=W}function Xt(W){W!==st&&(V&&o.lineWidth(W),st=W)}function Ue(W,Nt,ot){W?(bt(o.POLYGON_OFFSET_FILL),(it!==Nt||ft!==ot)&&(o.polygonOffset(Nt,ot),it=Nt,ft=ot)):Ct(o.POLYGON_OFFSET_FILL)}function Wt(W){W?bt(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function L(W){W===void 0&&(W=o.TEXTURE0+ut-1),vt!==W&&(o.activeTexture(W),vt=W)}function T(W,Nt,ot){ot===void 0&&(vt===null?ot=o.TEXTURE0+ut-1:ot=vt);let gt=U[ot];gt===void 0&&(gt={type:void 0,texture:void 0},U[ot]=gt),(gt.type!==W||gt.texture!==Nt)&&(vt!==ot&&(o.activeTexture(ot),vt=ot),o.bindTexture(W,Nt||xt[W]),gt.type=W,gt.texture=Nt)}function nt(){const W=U[vt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ht(){try{o.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{o.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function dt(){try{o.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Gt(){try{o.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Dt(){try{o.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Bt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{o.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{o.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ft(){try{o.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Kt(){try{o.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Vt(W){Rt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),Rt.copy(W))}function It(W){Y.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Y.copy(W))}function se(W,Nt){let ot=m.get(Nt);ot===void 0&&(ot=new WeakMap,m.set(Nt,ot));let gt=ot.get(W);gt===void 0&&(gt=o.getUniformBlockIndex(Nt,W.name),ot.set(W,gt))}function Zt(W,Nt){const gt=m.get(Nt).get(W);p.get(Nt)!==gt&&(o.uniformBlockBinding(Nt,gt,W.__bindingPointIndex),p.set(Nt,gt))}function Le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},vt=null,U={},_={},S=new WeakMap,M=[],b=null,w=!1,y=null,v=null,B=null,O=null,D=null,H=null,F=null,z=new we(0,0,0),k=0,R=!1,E=null,P=null,st=null,it=null,ft=null,Rt.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:bt,disable:Ct,bindFramebuffer:Qt,drawBuffers:zt,useProgram:Ee,setBlending:I,setMaterial:vn,setFlipSided:oe,setCullFace:de,setLineWidth:Xt,setPolygonOffset:Ue,setScissorTest:Wt,activeTexture:L,bindTexture:T,unbindTexture:nt,compressedTexImage2D:ht,compressedTexImage3D:St,texImage2D:Ft,texImage3D:Kt,updateUBOMapping:se,uniformBlockBinding:Zt,texStorage2D:ge,texStorage3D:Tt,texSubImage2D:dt,texSubImage3D:Gt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Bt,scissor:Vt,viewport:It,reset:Le}}function nA(o,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new he,g=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,T){return M?new OffscreenCanvas(L,T):Ic("canvas")}function w(L,T,nt){let ht=1;const St=Wt(L);if((St.width>nt||St.height>nt)&&(ht=nt/Math.max(St.width,St.height)),ht<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const dt=Math.floor(ht*St.width),Gt=Math.floor(ht*St.height);_===void 0&&(_=b(dt,Gt));const Dt=T?b(dt,Gt):_;return Dt.width=dt,Dt.height=Gt,Dt.getContext("2d").drawImage(L,0,0,dt,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+dt+"x"+Gt+")."),Dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),L;return L}function y(L){return L.generateMipmaps}function v(L){o.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(L,T,nt,ht,St=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let dt=T;if(T===o.RED&&(nt===o.FLOAT&&(dt=o.R32F),nt===o.HALF_FLOAT&&(dt=o.R16F),nt===o.UNSIGNED_BYTE&&(dt=o.R8)),T===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(dt=o.R8UI),nt===o.UNSIGNED_SHORT&&(dt=o.R16UI),nt===o.UNSIGNED_INT&&(dt=o.R32UI),nt===o.BYTE&&(dt=o.R8I),nt===o.SHORT&&(dt=o.R16I),nt===o.INT&&(dt=o.R32I)),T===o.RG&&(nt===o.FLOAT&&(dt=o.RG32F),nt===o.HALF_FLOAT&&(dt=o.RG16F),nt===o.UNSIGNED_BYTE&&(dt=o.RG8)),T===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(dt=o.RG8UI),nt===o.UNSIGNED_SHORT&&(dt=o.RG16UI),nt===o.UNSIGNED_INT&&(dt=o.RG32UI),nt===o.BYTE&&(dt=o.RG8I),nt===o.SHORT&&(dt=o.RG16I),nt===o.INT&&(dt=o.RG32I)),T===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),nt===o.UNSIGNED_INT&&(dt=o.RGB32UI),nt===o.BYTE&&(dt=o.RGB8I),nt===o.SHORT&&(dt=o.RGB16I),nt===o.INT&&(dt=o.RGB32I)),T===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),nt===o.UNSIGNED_INT&&(dt=o.RGBA32UI),nt===o.BYTE&&(dt=o.RGBA8I),nt===o.SHORT&&(dt=o.RGBA16I),nt===o.INT&&(dt=o.RGBA32I)),T===o.RGB&&nt===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),T===o.RGBA){const Gt=St?Bc:Ce.getTransfer(ht);nt===o.FLOAT&&(dt=o.RGBA32F),nt===o.HALF_FLOAT&&(dt=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(dt=Gt===ze?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function D(L,T){let nt;return L?T===null||T===br||T===Ns?nt=o.DEPTH24_STENCIL8:T===ia?nt=o.DEPTH32F_STENCIL8:T===qo&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===br||T===Ns?nt=o.DEPTH_COMPONENT24:T===ia?nt=o.DEPTH_COMPONENT32F:T===qo&&(nt=o.DEPTH_COMPONENT16),nt}function H(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ei&&L.minFilter!==Li?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function F(L){const T=L.target;T.removeEventListener("dispose",F),k(T),T.isVideoTexture&&g.delete(T)}function z(L){const T=L.target;T.removeEventListener("dispose",z),E(T)}function k(L){const T=r.get(L);if(T.__webglInit===void 0)return;const nt=L.source,ht=S.get(nt);if(ht){const St=ht[T.__cacheKey];St.usedTimes--,St.usedTimes===0&&R(L),Object.keys(ht).length===0&&S.delete(nt)}r.remove(L)}function R(L){const T=r.get(L);o.deleteTexture(T.__webglTexture);const nt=L.source,ht=S.get(nt);delete ht[T.__cacheKey],h.memory.textures--}function E(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let St=0;St<T.__webglFramebuffer[ht].length;St++)o.deleteFramebuffer(T.__webglFramebuffer[ht][St]);else o.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)o.deleteFramebuffer(T.__webglFramebuffer[ht]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const nt=L.textures;for(let ht=0,St=nt.length;ht<St;ht++){const dt=r.get(nt[ht]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),h.memory.textures--),r.remove(nt[ht])}r.remove(L)}let P=0;function st(){P=0}function it(){const L=P;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),P+=1,L}function ft(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ut(L,T){const nt=r.get(L);if(L.isVideoTexture&&Xt(L),L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){const ht=L.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(nt,L,T);return}}i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+T)}function V(L,T){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){Y(nt,L,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+T)}function rt(L,T){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){Y(nt,L,T);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+T)}function Z(L,T){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){pt(nt,L,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+T)}const vt={[Xh]:o.REPEAT,[Mr]:o.CLAMP_TO_EDGE,[Wh]:o.MIRRORED_REPEAT},U={[Ei]:o.NEAREST,[Dx]:o.NEAREST_MIPMAP_NEAREST,[ic]:o.NEAREST_MIPMAP_LINEAR,[Li]:o.LINEAR,[eh]:o.LINEAR_MIPMAP_NEAREST,[Er]:o.LINEAR_MIPMAP_LINEAR},et={[Px]:o.NEVER,[Gx]:o.ALWAYS,[zx]:o.LESS,[S0]:o.LEQUAL,[Bx]:o.EQUAL,[Hx]:o.GEQUAL,[Fx]:o.GREATER,[Ix]:o.NOTEQUAL};function Et(L,T){if(T.type===ia&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Li||T.magFilter===eh||T.magFilter===ic||T.magFilter===Er||T.minFilter===Li||T.minFilter===eh||T.minFilter===ic||T.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,vt[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,vt[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,vt[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,U[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,et[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ei||T.minFilter!==ic&&T.minFilter!==Er||T.type===ia&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Rt(L,T){let nt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",F));const ht=T.source;let St=S.get(ht);St===void 0&&(St={},S.set(ht,St));const dt=ft(T);if(dt!==L.__cacheKey){St[dt]===void 0&&(St[dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),St[dt].usedTimes++;const Gt=St[L.__cacheKey];Gt!==void 0&&(St[L.__cacheKey].usedTimes--,Gt.usedTimes===0&&R(T)),L.__cacheKey=dt,L.__webglTexture=St[dt].texture}return nt}function Y(L,T,nt){let ht=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=o.TEXTURE_3D);const St=Rt(L,T),dt=T.source;i.bindTexture(ht,L.__webglTexture,o.TEXTURE0+nt);const Gt=r.get(dt);if(dt.version!==Gt.__version||St===!0){i.activeTexture(o.TEXTURE0+nt);const Dt=Ce.getPrimaries(Ce.workingColorSpace),Bt=T.colorSpace===za?null:Ce.getPrimaries(T.colorSpace),ge=T.colorSpace===za||Dt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Tt=w(T.image,!1,l.maxTextureSize);Tt=Ue(T,Tt);const Ft=c.convert(T.format,T.colorSpace),Kt=c.convert(T.type);let Vt=O(T.internalFormat,Ft,Kt,T.colorSpace,T.isVideoTexture);Et(ht,T);let It;const se=T.mipmaps,Zt=T.isVideoTexture!==!0,Le=Gt.__version===void 0||St===!0,W=dt.dataReady,Nt=H(T,Tt);if(T.isDepthTexture)Vt=D(T.format===Os,T.type),Le&&(Zt?i.texStorage2D(o.TEXTURE_2D,1,Vt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,Vt,Tt.width,Tt.height,0,Ft,Kt,null));else if(T.isDataTexture)if(se.length>0){Zt&&Le&&i.texStorage2D(o.TEXTURE_2D,Nt,Vt,se[0].width,se[0].height);for(let ot=0,gt=se.length;ot<gt;ot++)It=se[ot],Zt?W&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,It.width,It.height,Ft,Kt,It.data):i.texImage2D(o.TEXTURE_2D,ot,Vt,It.width,It.height,0,Ft,Kt,It.data);T.generateMipmaps=!1}else Zt?(Le&&i.texStorage2D(o.TEXTURE_2D,Nt,Vt,Tt.width,Tt.height),W&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Ft,Kt,Tt.data)):i.texImage2D(o.TEXTURE_2D,0,Vt,Tt.width,Tt.height,0,Ft,Kt,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Zt&&Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,Vt,se[0].width,se[0].height,Tt.depth);for(let ot=0,gt=se.length;ot<gt;ot++)if(It=se[ot],T.format!==Mi)if(Ft!==null)if(Zt){if(W)if(T.layerUpdates.size>0){const wt=P_(It.width,It.height,T.format,T.type);for(const Ut of T.layerUpdates){const $t=It.data.subarray(Ut*wt/It.data.BYTES_PER_ELEMENT,(Ut+1)*wt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,Ut,It.width,It.height,1,Ft,$t)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,It.width,It.height,Tt.depth,Ft,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,Vt,It.width,It.height,Tt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?W&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,It.width,It.height,Tt.depth,Ft,Kt,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ot,Vt,It.width,It.height,Tt.depth,0,Ft,Kt,It.data)}else{Zt&&Le&&i.texStorage2D(o.TEXTURE_2D,Nt,Vt,se[0].width,se[0].height);for(let ot=0,gt=se.length;ot<gt;ot++)It=se[ot],T.format!==Mi?Ft!==null?Zt?W&&i.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,It.width,It.height,Ft,It.data):i.compressedTexImage2D(o.TEXTURE_2D,ot,Vt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?W&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,It.width,It.height,Ft,Kt,It.data):i.texImage2D(o.TEXTURE_2D,ot,Vt,It.width,It.height,0,Ft,Kt,It.data)}else if(T.isDataArrayTexture)if(Zt){if(Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,Vt,Tt.width,Tt.height,Tt.depth),W)if(T.layerUpdates.size>0){const ot=P_(Tt.width,Tt.height,T.format,T.type);for(const gt of T.layerUpdates){const wt=Tt.data.subarray(gt*ot/Tt.data.BYTES_PER_ELEMENT,(gt+1)*ot/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,Tt.width,Tt.height,1,Ft,Kt,wt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ft,Kt,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,Tt.width,Tt.height,Tt.depth,0,Ft,Kt,Tt.data);else if(T.isData3DTexture)Zt?(Le&&i.texStorage3D(o.TEXTURE_3D,Nt,Vt,Tt.width,Tt.height,Tt.depth),W&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ft,Kt,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,Tt.width,Tt.height,Tt.depth,0,Ft,Kt,Tt.data);else if(T.isFramebufferTexture){if(Le)if(Zt)i.texStorage2D(o.TEXTURE_2D,Nt,Vt,Tt.width,Tt.height);else{let ot=Tt.width,gt=Tt.height;for(let wt=0;wt<Nt;wt++)i.texImage2D(o.TEXTURE_2D,wt,Vt,ot,gt,0,Ft,Kt,null),ot>>=1,gt>>=1}}else if(se.length>0){if(Zt&&Le){const ot=Wt(se[0]);i.texStorage2D(o.TEXTURE_2D,Nt,Vt,ot.width,ot.height)}for(let ot=0,gt=se.length;ot<gt;ot++)It=se[ot],Zt?W&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ft,Kt,It):i.texImage2D(o.TEXTURE_2D,ot,Vt,Ft,Kt,It);T.generateMipmaps=!1}else if(Zt){if(Le){const ot=Wt(Tt);i.texStorage2D(o.TEXTURE_2D,Nt,Vt,ot.width,ot.height)}W&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ft,Kt,Tt)}else i.texImage2D(o.TEXTURE_2D,0,Vt,Ft,Kt,Tt);y(T)&&v(ht),Gt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function pt(L,T,nt){if(T.image.length!==6)return;const ht=Rt(L,T),St=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+nt);const dt=r.get(St);if(St.version!==dt.__version||ht===!0){i.activeTexture(o.TEXTURE0+nt);const Gt=Ce.getPrimaries(Ce.workingColorSpace),Dt=T.colorSpace===za?null:Ce.getPrimaries(T.colorSpace),Bt=T.colorSpace===za||Gt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const ge=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,Ft=[];for(let gt=0;gt<6;gt++)!ge&&!Tt?Ft[gt]=w(T.image[gt],!0,l.maxCubemapSize):Ft[gt]=Tt?T.image[gt].image:T.image[gt],Ft[gt]=Ue(T,Ft[gt]);const Kt=Ft[0],Vt=c.convert(T.format,T.colorSpace),It=c.convert(T.type),se=O(T.internalFormat,Vt,It,T.colorSpace),Zt=T.isVideoTexture!==!0,Le=dt.__version===void 0||ht===!0,W=St.dataReady;let Nt=H(T,Kt);Et(o.TEXTURE_CUBE_MAP,T);let ot;if(ge){Zt&&Le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,se,Kt.width,Kt.height);for(let gt=0;gt<6;gt++){ot=Ft[gt].mipmaps;for(let wt=0;wt<ot.length;wt++){const Ut=ot[wt];T.format!==Mi?Vt!==null?Zt?W&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt,0,0,Ut.width,Ut.height,Vt,Ut.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt,se,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt,0,0,Ut.width,Ut.height,Vt,It,Ut.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt,se,Ut.width,Ut.height,0,Vt,It,Ut.data)}}}else{if(ot=T.mipmaps,Zt&&Le){ot.length>0&&Nt++;const gt=Wt(Ft[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,se,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Tt){Zt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ft[gt].width,Ft[gt].height,Vt,It,Ft[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Ft[gt].width,Ft[gt].height,0,Vt,It,Ft[gt].data);for(let wt=0;wt<ot.length;wt++){const $t=ot[wt].image[gt].image;Zt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt+1,0,0,$t.width,$t.height,Vt,It,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt+1,se,$t.width,$t.height,0,Vt,It,$t.data)}}else{Zt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Vt,It,Ft[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Vt,It,Ft[gt]);for(let wt=0;wt<ot.length;wt++){const Ut=ot[wt];Zt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt+1,0,0,Vt,It,Ut.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,wt+1,se,Vt,It,Ut.image[gt])}}}y(T)&&v(o.TEXTURE_CUBE_MAP),dt.__version=St.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function xt(L,T,nt,ht,St,dt){const Gt=c.convert(nt.format,nt.colorSpace),Dt=c.convert(nt.type),Bt=O(nt.internalFormat,Gt,Dt,nt.colorSpace),ge=r.get(T),Tt=r.get(nt);if(Tt.__renderTarget=T,!ge.__hasExternalTextures){const Ft=Math.max(1,T.width>>dt),Kt=Math.max(1,T.height>>dt);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,dt,Bt,Ft,Kt,T.depth,0,Gt,Dt,null):i.texImage2D(St,dt,Bt,Ft,Kt,0,Gt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,St,Tt.__webglTexture,0,oe(T)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,St,Tt.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function bt(L,T,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const ht=T.depthTexture,St=ht&&ht.isDepthTexture?ht.type:null,dt=D(T.stencilBuffer,St),Gt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=oe(T);de(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,dt,T.width,T.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,dt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,dt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Gt,o.RENDERBUFFER,L)}else{const ht=T.textures;for(let St=0;St<ht.length;St++){const dt=ht[St],Gt=c.convert(dt.format,dt.colorSpace),Dt=c.convert(dt.type),Bt=O(dt.internalFormat,Gt,Dt,dt.colorSpace),ge=oe(T);nt&&de(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ge,Bt,T.width,T.height):de(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ge,Bt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Bt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ct(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(T.depthTexture);ht.__renderTarget=T,(!ht.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut(T.depthTexture,0);const St=ht.__webglTexture,dt=oe(T);if(T.depthTexture.format===Cs)de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(T.depthTexture.format===Os)de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Qt(L){const T=r.get(L),nt=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ht=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const St=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",St)};ht.addEventListener("dispose",St),T.__depthDisposeCallback=St}T.__boundDepthTexture=ht}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");Ct(T.__webglFramebuffer,L)}else if(nt){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=o.createRenderbuffer(),bt(T.__webglDepthbuffer[ht],L,!1);else{const St=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,dt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),bt(T.__webglDepthbuffer,L,!1);else{const ht=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,St=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,St),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,St)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(L,T,nt){const ht=r.get(L);T!==void 0&&xt(ht.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&Qt(L)}function Ee(L){const T=L.texture,nt=r.get(L),ht=r.get(T);L.addEventListener("dispose",z);const St=L.textures,dt=L.isWebGLCubeRenderTarget===!0,Gt=St.length>1;if(Gt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=T.version,h.memory.textures++),dt){nt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[Dt]=[];for(let Bt=0;Bt<T.mipmaps.length;Bt++)nt.__webglFramebuffer[Dt][Bt]=o.createFramebuffer()}else nt.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)nt.__webglFramebuffer[Dt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Gt)for(let Dt=0,Bt=St.length;Dt<Bt;Dt++){const ge=r.get(St[Dt]);ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&de(L)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<St.length;Dt++){const Bt=St[Dt];nt.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Dt]);const ge=c.convert(Bt.format,Bt.colorSpace),Tt=c.convert(Bt.type),Ft=O(Bt.internalFormat,ge,Tt,Bt.colorSpace,L.isXRRenderTarget===!0),Kt=oe(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Ft,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),bt(nt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),Et(o.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)xt(nt.__webglFramebuffer[Dt][Bt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Bt);else xt(nt.__webglFramebuffer[Dt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(T)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Gt){for(let Dt=0,Bt=St.length;Dt<Bt;Dt++){const ge=St[Dt],Tt=r.get(ge);i.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),Et(o.TEXTURE_2D,ge),xt(nt.__webglFramebuffer,L,ge,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),y(ge)&&v(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Dt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ht.__webglTexture),Et(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)xt(nt.__webglFramebuffer[Bt],L,T,o.COLOR_ATTACHMENT0,Dt,Bt);else xt(nt.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,Dt,0);y(T)&&v(Dt),i.unbindTexture()}L.depthBuffer&&Qt(L)}function De(L){const T=L.textures;for(let nt=0,ht=T.length;nt<ht;nt++){const St=T[nt];if(y(St)){const dt=B(L),Gt=r.get(St).__webglTexture;i.bindTexture(dt,Gt),v(dt),i.unbindTexture()}}}const re=[],I=[];function vn(L){if(L.samples>0){if(de(L)===!1){const T=L.textures,nt=L.width,ht=L.height;let St=o.COLOR_BUFFER_BIT;const dt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Gt=r.get(L),Dt=T.length>1;if(Dt)for(let Bt=0;Bt<T.length;Bt++)i.bindFramebuffer(o.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Gt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Bt=0;Bt<T.length;Bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);const ge=r.get(T[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ge,0)}o.blitFramebuffer(0,0,nt,ht,0,0,nt,ht,St,o.NEAREST),p===!0&&(re.length=0,I.length=0,re.push(o.COLOR_ATTACHMENT0+Bt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(re.push(dt),I.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,I)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Bt=0;Bt<T.length;Bt++){i.bindFramebuffer(o.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);const ge=r.get(T[Bt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Gt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,ge,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function oe(L){return Math.min(l.maxSamples,L.samples)}function de(L){const T=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xt(L){const T=h.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function Ue(L,T){const nt=L.colorSpace,ht=L.format,St=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||nt!==Ps&&nt!==za&&(Ce.getTransfer(nt)===ze?(ht!==Mi||St!==sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),T}function Wt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=it,this.resetTextureUnits=st,this.setTexture2D=ut,this.setTexture2DArray=V,this.setTexture3D=rt,this.setTextureCube=Z,this.rebindTextures=zt,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=de}function iA(o,t){function i(r,l=za){let c;const h=Ce.getTransfer(l);if(r===sa)return o.UNSIGNED_BYTE;if(r===bd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Ad)return o.UNSIGNED_SHORT_5_5_5_1;if(r===f0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===c0)return o.BYTE;if(r===u0)return o.SHORT;if(r===qo)return o.UNSIGNED_SHORT;if(r===Td)return o.INT;if(r===br)return o.UNSIGNED_INT;if(r===ia)return o.FLOAT;if(r===Yo)return o.HALF_FLOAT;if(r===h0)return o.ALPHA;if(r===d0)return o.RGB;if(r===Mi)return o.RGBA;if(r===p0)return o.LUMINANCE;if(r===m0)return o.LUMINANCE_ALPHA;if(r===Cs)return o.DEPTH_COMPONENT;if(r===Os)return o.DEPTH_STENCIL;if(r===g0)return o.RED;if(r===Rd)return o.RED_INTEGER;if(r===_0)return o.RG;if(r===Cd)return o.RG_INTEGER;if(r===wd)return o.RGBA_INTEGER;if(r===Dc||r===Uc||r===Lc||r===Nc)if(h===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Dc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Dc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Lc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qh||r===Yh||r===Zh||r===jh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===qh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kh||r===Qh||r===Jh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Kh||r===Qh)return h===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Jh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$h||r===td||r===ed||r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===$h)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===td)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ed)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===id)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ad)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===od)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ld)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===cd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ud)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Oc||r===dd||r===pd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Oc)return h===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===dd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===pd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===v0||r===md||r===gd||r===_d)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Oc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===md)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_d)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ns?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const aA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Fn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ka({vertexShader:aA,fragmentShader:rA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Cn(new Tr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oA extends Bs{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,g=null,_=null,S=null,M=null,b=null;const w=new sA,y=i.getContextAttributes();let v=null,B=null;const O=[],D=[],H=new he;let F=null;const z=new ui;z.viewport=new $e;const k=new ui;k.viewport=new $e;const R=[z,k],E=new Ry;let P=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let pt=O[Y];return pt===void 0&&(pt=new Eh,O[Y]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Y){let pt=O[Y];return pt===void 0&&(pt=new Eh,O[Y]=pt),pt.getGripSpace()},this.getHand=function(Y){let pt=O[Y];return pt===void 0&&(pt=new Eh,O[Y]=pt),pt.getHandSpace()};function it(Y){const pt=D.indexOf(Y.inputSource);if(pt===-1)return;const xt=O[pt];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,m||h),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ft(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",ut);for(let Y=0;Y<O.length;Y++){const pt=D[Y];pt!==null&&(D[Y]=null,O[Y].disconnect(pt))}P=null,st=null,w.reset(),t.setRenderTarget(v),M=null,S=null,_=null,l=null,B=null,Rt.stop(),r.isPresenting=!1,t.setPixelRatio(F),t.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){c=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",ut),y.xrCompatible!==!0&&await i.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,bt=null,Ct=null;y.depth&&(Ct=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=y.stencil?Os:Cs,bt=y.stencil?Ns:br);const Qt={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:c};_=new XRWebGLBinding(l,i),S=_.createProjectionLayer(Qt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),B=new Ar(S.textureWidth,S.textureHeight,{format:Mi,type:sa,depthTexture:new D0(S.textureWidth,S.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const xt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new Ar(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:sa,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Rt.setContext(l),Rt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ut(Y){for(let pt=0;pt<Y.removed.length;pt++){const xt=Y.removed[pt],bt=D.indexOf(xt);bt>=0&&(D[bt]=null,O[bt].disconnect(xt))}for(let pt=0;pt<Y.added.length;pt++){const xt=Y.added[pt];let bt=D.indexOf(xt);if(bt===-1){for(let Qt=0;Qt<O.length;Qt++)if(Qt>=D.length){D.push(xt),bt=Qt;break}else if(D[Qt]===null){D[Qt]=xt,bt=Qt;break}if(bt===-1)break}const Ct=O[bt];Ct&&Ct.connect(xt)}}const V=new tt,rt=new tt;function Z(Y,pt,xt){V.setFromMatrixPosition(pt.matrixWorld),rt.setFromMatrixPosition(xt.matrixWorld);const bt=V.distanceTo(rt),Ct=pt.projectionMatrix.elements,Qt=xt.projectionMatrix.elements,zt=Ct[14]/(Ct[10]-1),Ee=Ct[14]/(Ct[10]+1),De=(Ct[9]+1)/Ct[5],re=(Ct[9]-1)/Ct[5],I=(Ct[8]-1)/Ct[0],vn=(Qt[8]+1)/Qt[0],oe=zt*I,de=zt*vn,Xt=bt/(-I+vn),Ue=Xt*-I;if(pt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ue),Y.translateZ(Xt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ct[10]===-1)Y.projectionMatrix.copy(pt.projectionMatrix),Y.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Wt=zt+Xt,L=Ee+Xt,T=oe-Ue,nt=de+(bt-Ue),ht=De*Ee/L*Wt,St=re*Ee/L*Wt;Y.projectionMatrix.makePerspective(T,nt,ht,St,Wt,L),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function vt(Y,pt){pt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(pt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let pt=Y.near,xt=Y.far;w.texture!==null&&(w.depthNear>0&&(pt=w.depthNear),w.depthFar>0&&(xt=w.depthFar)),E.near=k.near=z.near=pt,E.far=k.far=z.far=xt,(P!==E.near||st!==E.far)&&(l.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,st=E.far),z.layers.mask=Y.layers.mask|2,k.layers.mask=Y.layers.mask|4,E.layers.mask=z.layers.mask|k.layers.mask;const bt=Y.parent,Ct=E.cameras;vt(E,bt);for(let Qt=0;Qt<Ct.length;Qt++)vt(Ct[Qt],bt);Ct.length===2?Z(E,z,k):E.projectionMatrix.copy(z.projectionMatrix),U(Y,E,bt)};function U(Y,pt,xt){xt===null?Y.matrix.copy(pt.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(pt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(pt.projectionMatrix),Y.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Sd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(Y){p=Y,S!==null&&(S.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(E)};let et=null;function Et(Y,pt){if(g=pt.getViewerPose(m||h),b=pt,g!==null){const xt=g.views;M!==null&&(t.setRenderTargetFramebuffer(B,M.framebuffer),t.setRenderTarget(B));let bt=!1;xt.length!==E.cameras.length&&(E.cameras.length=0,bt=!0);for(let zt=0;zt<xt.length;zt++){const Ee=xt[zt];let De=null;if(M!==null)De=M.getViewport(Ee);else{const I=_.getViewSubImage(S,Ee);De=I.viewport,zt===0&&(t.setRenderTargetTextures(B,I.colorTexture,S.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(B))}let re=R[zt];re===void 0&&(re=new ui,re.layers.enable(zt),re.viewport=new $e,R[zt]=re),re.matrix.fromArray(Ee.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Ee.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(De.x,De.y,De.width,De.height),zt===0&&(E.matrix.copy(re.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),bt===!0&&E.cameras.push(re)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const zt=_.getDepthInformation(xt[0]);zt&&zt.isValid&&zt.texture&&w.init(t,zt,l.renderState)}}for(let xt=0;xt<O.length;xt++){const bt=D[xt],Ct=O[xt];bt!==null&&Ct!==void 0&&Ct.update(bt,pt,m||h)}et&&et(Y,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),b=null}const Rt=new U0;Rt.setAnimationLoop(Et),this.setAnimationLoop=function(Y){et=Y},this.dispose=function(){}}}const gr=new oa,lA=new Ye;function cA(o,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,b0(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,B,O,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,D)):v.isMeshMatcapMaterial?(c(y,v),b(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),w(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?p(y,v,B,O):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===kn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===kn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const B=t.get(v),O=B.envMap,D=B.envMapRotation;O&&(y.envMap.value=O,gr.copy(D),gr.x*=-1,gr.y*=-1,gr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),y.envMapRotation.value.setFromMatrix4(lA.makeRotationFromEuler(gr)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function p(y,v,B,O){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*B,y.scale.value=O*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,B){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const B=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function uA(o,t,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(B,O){const D=O.program;r.uniformBlockBinding(B,D)}function m(B,O){let D=l[B.id];D===void 0&&(b(B),D=g(B),l[B.id]=D,B.addEventListener("dispose",y));const H=O.program;r.updateUBOMapping(B,H);const F=t.render.frame;c[B.id]!==F&&(S(B),c[B.id]=F)}function g(B){const O=_();B.__bindingPointIndex=O;const D=o.createBuffer(),H=B.__size,F=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,H,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function _(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const O=l[B.id],D=B.uniforms,H=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let F=0,z=D.length;F<z;F++){const k=Array.isArray(D[F])?D[F]:[D[F]];for(let R=0,E=k.length;R<E;R++){const P=k[R];if(M(P,F,R,H)===!0){const st=P.__offset,it=Array.isArray(P.value)?P.value:[P.value];let ft=0;for(let ut=0;ut<it.length;ut++){const V=it[ut],rt=w(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,o.bufferSubData(o.UNIFORM_BUFFER,st+ft,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,ft),ft+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,P.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,O,D,H){const F=B.value,z=O+"_"+D;if(H[z]===void 0)return typeof F=="number"||typeof F=="boolean"?H[z]=F:H[z]=F.clone(),!0;{const k=H[z];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return H[z]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function b(B){const O=B.uniforms;let D=0;const H=16;for(let z=0,k=O.length;z<k;z++){const R=Array.isArray(O[z])?O[z]:[O[z]];for(let E=0,P=R.length;E<P;E++){const st=R[E],it=Array.isArray(st.value)?st.value:[st.value];for(let ft=0,ut=it.length;ft<ut;ft++){const V=it[ft],rt=w(V),Z=D%H,vt=Z%rt.boundary,U=Z+vt;D+=vt,U!==0&&H-U<rt.storage&&(D+=H-U),st.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=D,D+=rt.storage}}}const F=D%H;return F>0&&(D+=H-F),B.__size=D,B.__cache={},this}function w(B){const O={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(O.boundary=4,O.storage=4):B.isVector2?(O.boundary=8,O.storage=8):B.isVector3||B.isColor?(O.boundary=16,O.storage=12):B.isVector4?(O.boundary=16,O.storage=16):B.isMatrix3?(O.boundary=48,O.storage=48):B.isMatrix4?(O.boundary=64,O.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),O}function y(B){const O=B.target;O.removeEventListener("dispose",y);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function v(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},c={}}return{bind:p,update:m,dispose:v}}class fA{constructor(t={}){const{canvas:i=kx(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),w=new Int32Array(4);let y=null,v=null;const B=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=Fa,this.toneMappingExposure=1;const D=this;let H=!1,F=0,z=0,k=null,R=-1,E=null;const P=new $e,st=new $e;let it=null;const ft=new we(0);let ut=0,V=i.width,rt=i.height,Z=1,vt=null,U=null;const et=new $e(0,0,V,rt),Et=new $e(0,0,V,rt);let Rt=!1;const Y=new w0;let pt=!1,xt=!1;this.transmissionResolutionScale=1;const bt=new Ye,Ct=new Ye,Qt=new tt,zt=new $e,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function re(){return k===null?Z:1}let I=r;function vn(C,q){return i.getContext(C,q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ed}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",wt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),I===null){const q="webgl2";if(I=vn(q,C),I===null)throw vn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let oe,de,Xt,Ue,Wt,L,T,nt,ht,St,dt,Gt,Dt,Bt,ge,Tt,Ft,Kt,Vt,It,se,Zt,Le,W;function Nt(){oe=new yT(I),oe.init(),Zt=new iA(I,oe),de=new pT(I,oe,t,Zt),Xt=new eA(I,oe),de.reverseDepthBuffer&&S&&Xt.buffers.depth.setReversed(!0),Ue=new TT(I),Wt=new Vb,L=new nA(I,oe,Xt,Wt,de,Zt,Ue),T=new gT(D),nt=new xT(D),ht=new Dy(I),Le=new hT(I,ht),St=new MT(I,ht,Ue,Le),dt=new AT(I,St,ht,Ue),Vt=new bT(I,de,L),Tt=new mT(Wt),Gt=new Gb(D,T,nt,oe,de,Le,Tt),Dt=new cA(D,Wt),Bt=new Xb,ge=new Kb(oe),Kt=new fT(D,T,nt,Xt,dt,M,p),Ft=new $b(D,dt,de),W=new uA(I,Ue,de,Xt),It=new dT(I,oe,Ue),se=new ET(I,oe,Ue),Ue.programs=Gt.programs,D.capabilities=de,D.extensions=oe,D.properties=Wt,D.renderLists=Bt,D.shadowMap=Ft,D.state=Xt,D.info=Ue}Nt();const ot=new oA(D,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=oe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=oe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(V,rt,!1))},this.getSize=function(C){return C.set(V,rt)},this.setSize=function(C,q,$=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,rt=q,i.width=Math.floor(C*Z),i.height=Math.floor(q*Z),$===!0&&(i.style.width=C+"px",i.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(V*Z,rt*Z).floor()},this.setDrawingBufferSize=function(C,q,$){V=C,rt=q,Z=$,i.width=Math.floor(C*$),i.height=Math.floor(q*$),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(et)},this.setViewport=function(C,q,$,Q){C.isVector4?et.set(C.x,C.y,C.z,C.w):et.set(C,q,$,Q),Xt.viewport(P.copy(et).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(Et)},this.setScissor=function(C,q,$,Q){C.isVector4?Et.set(C.x,C.y,C.z,C.w):Et.set(C,q,$,Q),Xt.scissor(st.copy(Et).multiplyScalar(Z).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(C){Xt.setScissorTest(Rt=C)},this.setOpaqueSort=function(C){vt=C},this.setTransparentSort=function(C){U=C},this.getClearColor=function(C){return C.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,$=!0){let Q=0;if(C){let j=!1;if(k!==null){const Mt=k.texture.format;j=Mt===wd||Mt===Cd||Mt===Rd}if(j){const Mt=k.texture.type,At=Mt===sa||Mt===br||Mt===qo||Mt===Ns||Mt===bd||Mt===Ad,Pt=Kt.getClearColor(),Ot=Kt.getClearAlpha(),te=Pt.r,ee=Pt.g,Yt=Pt.b;At?(b[0]=te,b[1]=ee,b[2]=Yt,b[3]=Ot,I.clearBufferuiv(I.COLOR,0,b)):(w[0]=te,w[1]=ee,w[2]=Yt,w[3]=Ot,I.clearBufferiv(I.COLOR,0,w))}else Q|=I.COLOR_BUFFER_BIT}q&&(Q|=I.DEPTH_BUFFER_BIT),$&&(Q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",wt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),Kt.dispose(),Bt.dispose(),ge.dispose(),Wt.dispose(),T.dispose(),nt.dispose(),dt.dispose(),Le.dispose(),W.dispose(),Gt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Ko),ot.removeEventListener("sessionend",Hs),Ti.stop()};function gt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const C=Ue.autoReset,q=Ft.enabled,$=Ft.autoUpdate,Q=Ft.needsUpdate,j=Ft.type;Nt(),Ue.autoReset=C,Ft.enabled=q,Ft.autoUpdate=$,Ft.needsUpdate=Q,Ft.type=j}function Ut(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function $t(C){const q=C.target;q.removeEventListener("dispose",$t),Xe(q)}function Xe(C){rn(C),Wt.remove(C)}function rn(C){const q=Wt.get(C).programs;q!==void 0&&(q.forEach(function($){Gt.releaseProgram($)}),C.isShaderMaterial&&Gt.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,$,Q,j,Mt){q===null&&(q=Ee);const At=j.isMesh&&j.matrixWorld.determinant()<0,Pt=qc(C,q,$,Q,j);Xt.setMaterial(Q,At);let Ot=$.index,te=1;if(Q.wireframe===!0){if(Ot=St.getWireframeAttribute($),Ot===void 0)return;te=2}const ee=$.drawRange,Yt=$.attributes.position;let _e=ee.start*te,ve=(ee.start+ee.count)*te;Mt!==null&&(_e=Math.max(_e,Mt.start*te),ve=Math.min(ve,(Mt.start+Mt.count)*te)),Ot!==null?(_e=Math.max(_e,0),ve=Math.min(ve,Ot.count)):Yt!=null&&(_e=Math.max(_e,0),ve=Math.min(ve,Yt.count));const Ve=ve-_e;if(Ve<0||Ve===1/0)return;Le.setup(j,Q,Pt,$,Ot);let be,ne=It;if(Ot!==null&&(be=ht.get(Ot),ne=se,ne.setIndex(be)),j.isMesh)Q.wireframe===!0?(Xt.setLineWidth(Q.wireframeLinewidth*re()),ne.setMode(I.LINES)):ne.setMode(I.TRIANGLES);else if(j.isLine){let jt=Q.linewidth;jt===void 0&&(jt=1),Xt.setLineWidth(jt*re()),j.isLineSegments?ne.setMode(I.LINES):j.isLineLoop?ne.setMode(I.LINE_LOOP):ne.setMode(I.LINE_STRIP)}else j.isPoints?ne.setMode(I.POINTS):j.isSprite&&ne.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)_r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))ne.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const jt=j._multiDrawStarts,ln=j._multiDrawCounts,Se=j._multiDrawCount,In=Ot?ht.get(Ot).bytesPerElement:1,pi=Wt.get(Q).currentProgram.getUniforms();for(let Ln=0;Ln<Se;Ln++)pi.setValue(I,"_gl_DrawID",Ln),ne.render(jt[Ln]/In,ln[Ln])}else if(j.isInstancedMesh)ne.renderInstances(_e,Ve,j.count);else if($.isInstancedBufferGeometry){const jt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ln=Math.min($.instanceCount,jt);ne.renderInstances(_e,Ve,ln)}else ne.render(_e,Ve)};function Te(C,q,$){C.transparent===!0&&C.side===fi&&C.forceSinglePass===!1?(C.side=kn,C.needsUpdate=!0,on(C,q,$),C.side=Ga,C.needsUpdate=!0,on(C,q,$),C.side=fi):on(C,q,$)}this.compile=function(C,q,$=null){$===null&&($=C),v=ge.get($),v.init(q),O.push(v),$.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),C!==$&&C.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const Q=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Mt=j.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){const Pt=Mt[At];Te(Pt,$,j),Q.add(Pt)}else Te(Mt,$,j),Q.add(Mt)}),v=O.pop(),Q},this.compileAsync=function(C,q,$=null){const Q=this.compile(C,q,$);return new Promise(j=>{function Mt(){if(Q.forEach(function(At){Wt.get(At).currentProgram.isReady()&&Q.delete(At)}),Q.size===0){j(C);return}setTimeout(Mt,10)}oe.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Dn=null;function Un(C){Dn&&Dn(C)}function Ko(){Ti.stop()}function Hs(){Ti.start()}const Ti=new U0;Ti.setAnimationLoop(Un),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(C){Dn=C,ot.setAnimationLoop(C),C===null?Ti.stop():Ti.start()},ot.addEventListener("sessionstart",Ko),ot.addEventListener("sessionend",Hs),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(q),q=ot.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,q,k),v=ge.get(C,O.length),v.init(q),O.push(v),Ct.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Y.setFromProjectionMatrix(Ct),xt=this.localClippingEnabled,pt=Tt.init(this.clippingPlanes,xt),y=Bt.get(C,B.length),y.init(),B.push(y),ot.enabled===!0&&ot.isPresenting===!0){const Mt=D.xr.getDepthSensingMesh();Mt!==null&&Rr(Mt,q,-1/0,D.sortObjects)}Rr(C,q,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(vt,U),De=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,De&&Kt.addToRenderList(y,C),this.info.render.frame++,pt===!0&&Tt.beginShadows();const $=v.state.shadowsArray;Ft.render($,C,q),pt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=y.opaque,j=y.transmissive;if(v.setupLights(),q.isArrayCamera){const Mt=q.cameras;if(j.length>0)for(let At=0,Pt=Mt.length;At<Pt;At++){const Ot=Mt[At];Qo(Q,j,C,Ot)}De&&Kt.render(C);for(let At=0,Pt=Mt.length;At<Pt;At++){const Ot=Mt[At];Gs(y,C,Ot,Ot.viewport)}}else j.length>0&&Qo(Q,j,C,q),De&&Kt.render(C),Gs(y,C,q);k!==null&&z===0&&(L.updateMultisampleRenderTarget(k),L.updateRenderTargetMipmap(k)),C.isScene===!0&&C.onAfterRender(D,C,q),Le.resetDefaultState(),R=-1,E=null,O.pop(),O.length>0?(v=O[O.length-1],pt===!0&&Tt.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,B.pop(),B.length>0?y=B[B.length-1]:y=null};function Rr(C,q,$,Q){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){Q&&zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);const At=dt.update(C),Pt=C.material;Pt.visible&&y.push(C,At,Pt,$,zt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const At=dt.update(C),Pt=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),zt.copy(C.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),zt.copy(At.boundingSphere.center)),zt.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)),Array.isArray(Pt)){const Ot=At.groups;for(let te=0,ee=Ot.length;te<ee;te++){const Yt=Ot[te],_e=Pt[Yt.materialIndex];_e&&_e.visible&&y.push(C,At,_e,$,zt.z,Yt)}}else Pt.visible&&y.push(C,At,Pt,$,zt.z,null)}}const Mt=C.children;for(let At=0,Pt=Mt.length;At<Pt;At++)Rr(Mt[At],q,$,Q)}function Gs(C,q,$,Q){const j=C.opaque,Mt=C.transmissive,At=C.transparent;v.setupLightsView($),pt===!0&&Tt.setGlobalState(D.clippingPlanes,$),Q&&Xt.viewport(P.copy(Q)),j.length>0&&Xn(j,q,$),Mt.length>0&&Xn(Mt,q,$),At.length>0&&Xn(At,q,$),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Qo(C,q,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[Q.id]===void 0&&(v.state.transmissionRenderTarget[Q.id]=new Ar(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Yo:sa,minFilter:Er,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Mt=v.state.transmissionRenderTarget[Q.id],At=Q.viewport||P;Mt.setSize(At.z*D.transmissionResolutionScale,At.w*D.transmissionResolutionScale);const Pt=D.getRenderTarget();D.setRenderTarget(Mt),D.getClearColor(ft),ut=D.getClearAlpha(),ut<1&&D.setClearColor(16777215,.5),D.clear(),De&&Kt.render($);const Ot=D.toneMapping;D.toneMapping=Fa;const te=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),v.setupLightsView(Q),pt===!0&&Tt.setGlobalState(D.clippingPlanes,Q),Xn(C,$,Q),L.updateMultisampleRenderTarget(Mt),L.updateRenderTargetMipmap(Mt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Yt=0,_e=q.length;Yt<_e;Yt++){const ve=q[Yt],Ve=ve.object,be=ve.geometry,ne=ve.material,jt=ve.group;if(ne.side===fi&&Ve.layers.test(Q.layers)){const ln=ne.side;ne.side=kn,ne.needsUpdate=!0,sn(Ve,$,Q,be,ne,jt),ne.side=ln,ne.needsUpdate=!0,ee=!0}}ee===!0&&(L.updateMultisampleRenderTarget(Mt),L.updateRenderTargetMipmap(Mt))}D.setRenderTarget(Pt),D.setClearColor(ft,ut),te!==void 0&&(Q.viewport=te),D.toneMapping=Ot}function Xn(C,q,$){const Q=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Mt=C.length;j<Mt;j++){const At=C[j],Pt=At.object,Ot=At.geometry,te=Q===null?At.material:Q,ee=At.group;Pt.layers.test($.layers)&&sn(Pt,q,$,Ot,te,ee)}}function sn(C,q,$,Q,j,Mt){C.onBeforeRender(D,q,$,Q,j,Mt),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(D,q,$,Q,C,Mt),j.transparent===!0&&j.side===fi&&j.forceSinglePass===!1?(j.side=kn,j.needsUpdate=!0,D.renderBufferDirect($,q,Q,j,C,Mt),j.side=Ga,j.needsUpdate=!0,D.renderBufferDirect($,q,Q,j,C,Mt),j.side=fi):D.renderBufferDirect($,q,Q,j,C,Mt),C.onAfterRender(D,q,$,Q,j,Mt)}function on(C,q,$){q.isScene!==!0&&(q=Ee);const Q=Wt.get(C),j=v.state.lights,Mt=v.state.shadowsArray,At=j.state.version,Pt=Gt.getParameters(C,j.state,Mt,q,$),Ot=Gt.getProgramCacheKey(Pt);let te=Q.programs;Q.environment=C.isMeshStandardMaterial?q.environment:null,Q.fog=q.fog,Q.envMap=(C.isMeshStandardMaterial?nt:T).get(C.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,te===void 0&&(C.addEventListener("dispose",$t),te=new Map,Q.programs=te);let ee=te.get(Ot);if(ee!==void 0){if(Q.currentProgram===ee&&Q.lightsStateVersion===At)return Cr(C,Pt),ee}else Pt.uniforms=Gt.getUniforms(C),C.onBeforeCompile(Pt,D),ee=Gt.acquireProgram(Pt,Ot),te.set(Ot,ee),Q.uniforms=Pt.uniforms;const Yt=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Yt.clippingPlanes=Tt.uniform),Cr(C,Pt),Q.needsLights=Jo(C),Q.lightsStateVersion=At,Q.needsLights&&(Yt.ambientLightColor.value=j.state.ambient,Yt.lightProbe.value=j.state.probe,Yt.directionalLights.value=j.state.directional,Yt.directionalLightShadows.value=j.state.directionalShadow,Yt.spotLights.value=j.state.spot,Yt.spotLightShadows.value=j.state.spotShadow,Yt.rectAreaLights.value=j.state.rectArea,Yt.ltc_1.value=j.state.rectAreaLTC1,Yt.ltc_2.value=j.state.rectAreaLTC2,Yt.pointLights.value=j.state.point,Yt.pointLightShadows.value=j.state.pointShadow,Yt.hemisphereLights.value=j.state.hemi,Yt.directionalShadowMap.value=j.state.directionalShadowMap,Yt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Yt.spotShadowMap.value=j.state.spotShadowMap,Yt.spotLightMatrix.value=j.state.spotLightMatrix,Yt.spotLightMap.value=j.state.spotLightMap,Yt.pointShadowMap.value=j.state.pointShadowMap,Yt.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=ee,Q.uniformsList=null,ee}function Oi(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=zc.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Cr(C,q){const $=Wt.get(C);$.outputColorSpace=q.outputColorSpace,$.batching=q.batching,$.batchingColor=q.batchingColor,$.instancing=q.instancing,$.instancingColor=q.instancingColor,$.instancingMorph=q.instancingMorph,$.skinning=q.skinning,$.morphTargets=q.morphTargets,$.morphNormals=q.morphNormals,$.morphColors=q.morphColors,$.morphTargetsCount=q.morphTargetsCount,$.numClippingPlanes=q.numClippingPlanes,$.numIntersection=q.numClipIntersection,$.vertexAlphas=q.vertexAlphas,$.vertexTangents=q.vertexTangents,$.toneMapping=q.toneMapping}function qc(C,q,$,Q,j){q.isScene!==!0&&(q=Ee),L.resetTextureUnits();const Mt=q.fog,At=Q.isMeshStandardMaterial?q.environment:null,Pt=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ps,Ot=(Q.isMeshStandardMaterial?nt:T).get(Q.envMap||At),te=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ee=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Yt=!!$.morphAttributes.position,_e=!!$.morphAttributes.normal,ve=!!$.morphAttributes.color;let Ve=Fa;Q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const be=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ne=be!==void 0?be.length:0,jt=Wt.get(Q),ln=v.state.lights;if(pt===!0&&(xt===!0||C!==E)){const Ze=C===E&&Q.id===R;Tt.setState(Q,C,Ze)}let Se=!1;Q.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==ln.state.version||jt.outputColorSpace!==Pt||j.isBatchedMesh&&jt.batching===!1||!j.isBatchedMesh&&jt.batching===!0||j.isBatchedMesh&&jt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&jt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&jt.instancing===!1||!j.isInstancedMesh&&jt.instancing===!0||j.isSkinnedMesh&&jt.skinning===!1||!j.isSkinnedMesh&&jt.skinning===!0||j.isInstancedMesh&&jt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&jt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&jt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&jt.instancingMorph===!1&&j.morphTexture!==null||jt.envMap!==Ot||Q.fog===!0&&jt.fog!==Mt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Tt.numPlanes||jt.numIntersection!==Tt.numIntersection)||jt.vertexAlphas!==te||jt.vertexTangents!==ee||jt.morphTargets!==Yt||jt.morphNormals!==_e||jt.morphColors!==ve||jt.toneMapping!==Ve||jt.morphTargetsCount!==ne)&&(Se=!0):(Se=!0,jt.__version=Q.version);let In=jt.currentProgram;Se===!0&&(In=on(Q,q,j));let pi=!1,Ln=!1,dn=!1;const Ne=In.getUniforms(),Nn=jt.uniforms;if(Xt.useProgram(In.program)&&(pi=!0,Ln=!0,dn=!0),Q.id!==R&&(R=Q.id,Ln=!0),pi||E!==C){Xt.buffers.depth.getReversed()?(bt.copy(C.projectionMatrix),Wx(bt),qx(bt),Ne.setValue(I,"projectionMatrix",bt)):Ne.setValue(I,"projectionMatrix",C.projectionMatrix),Ne.setValue(I,"viewMatrix",C.matrixWorldInverse);const Sn=Ne.map.cameraPosition;Sn!==void 0&&Sn.setValue(I,Qt.setFromMatrixPosition(C.matrixWorld)),de.logarithmicDepthBuffer&&Ne.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ne.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,Ln=!0,dn=!0)}if(j.isSkinnedMesh){Ne.setOptional(I,j,"bindMatrix"),Ne.setOptional(I,j,"bindMatrixInverse");const Ze=j.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Ne.setValue(I,"boneTexture",Ze.boneTexture,L))}j.isBatchedMesh&&(Ne.setOptional(I,j,"batchingTexture"),Ne.setValue(I,"batchingTexture",j._matricesTexture,L),Ne.setOptional(I,j,"batchingIdTexture"),Ne.setValue(I,"batchingIdTexture",j._indirectTexture,L),Ne.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&Ne.setValue(I,"batchingColorTexture",j._colorsTexture,L));const En=$.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Vt.update(j,$,In),(Ln||jt.receiveShadow!==j.receiveShadow)&&(jt.receiveShadow=j.receiveShadow,Ne.setValue(I,"receiveShadow",j.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Nn.envMap.value=Ot,Nn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&q.environment!==null&&(Nn.envMapIntensity.value=q.environmentIntensity),Ln&&(Ne.setValue(I,"toneMappingExposure",D.toneMappingExposure),jt.needsLights&&Yc(Nn,dn),Mt&&Q.fog===!0&&Dt.refreshFogUniforms(Nn,Mt),Dt.refreshMaterialUniforms(Nn,Q,Z,rt,v.state.transmissionRenderTarget[C.id]),zc.upload(I,Oi(jt),Nn,L)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(zc.upload(I,Oi(jt),Nn,L),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ne.setValue(I,"center",j.center),Ne.setValue(I,"modelViewMatrix",j.modelViewMatrix),Ne.setValue(I,"normalMatrix",j.normalMatrix),Ne.setValue(I,"modelMatrix",j.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Ze=Q.uniformsGroups;for(let Sn=0,wr=Ze.length;Sn<wr;Sn++){const Hn=Ze[Sn];W.update(Hn,In),W.bind(Hn,In)}}return In}function Yc(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Jo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,q,$){Wt.get(C.texture).__webglTexture=q,Wt.get(C.depthTexture).__webglTexture=$;const Q=Wt.get(C);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,q){const $=Wt.get(C);$.__webglFramebuffer=q,$.__useDefaultFramebuffer=q===void 0};const Xa=I.createFramebuffer();this.setRenderTarget=function(C,q=0,$=0){k=C,F=q,z=$;let Q=!0,j=null,Mt=!1,At=!1;if(C){const Ot=Wt.get(C);if(Ot.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(I.FRAMEBUFFER,null),Q=!1;else if(Ot.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Ot.__hasExternalTextures)L.rebindTextures(C,Wt.get(C.texture).__webglTexture,Wt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Yt=C.depthTexture;if(Ot.__boundDepthTexture!==Yt){if(Yt!==null&&Wt.has(Yt)&&(C.width!==Yt.image.width||C.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const te=C.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(At=!0);const ee=Wt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?j=ee[q][$]:j=ee[q],Mt=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?j=Wt.get(C).__webglMultisampledFramebuffer:Array.isArray(ee)?j=ee[$]:j=ee,P.copy(C.viewport),st.copy(C.scissor),it=C.scissorTest}else P.copy(et).multiplyScalar(Z).floor(),st.copy(Et).multiplyScalar(Z).floor(),it=Rt;if($!==0&&(j=Xa),Xt.bindFramebuffer(I.FRAMEBUFFER,j)&&Q&&Xt.drawBuffers(C,j),Xt.viewport(P),Xt.scissor(st),Xt.setScissorTest(it),Mt){const Ot=Wt.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ot.__webglTexture,$)}else if(At){const Ot=Wt.get(C.texture),te=q;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ot.__webglTexture,$,te)}else if(C!==null&&$!==0){const Ot=Wt.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ot.__webglTexture,$)}R=-1},this.readRenderTargetPixels=function(C,q,$,Q,j,Mt,At){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){Xt.bindFramebuffer(I.FRAMEBUFFER,Pt);try{const Ot=C.texture,te=Ot.format,ee=Ot.type;if(!de.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-Q&&$>=0&&$<=C.height-j&&I.readPixels(q,$,Q,j,Zt.convert(te),Zt.convert(ee),Mt)}finally{const Ot=k!==null?Wt.get(k).__webglFramebuffer:null;Xt.bindFramebuffer(I.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(C,q,$,Q,j,Mt,At){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){const Ot=C.texture,te=Ot.format,ee=Ot.type;if(!de.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=C.width-Q&&$>=0&&$<=C.height-j){Xt.bindFramebuffer(I.FRAMEBUFFER,Pt);const Yt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Yt),I.bufferData(I.PIXEL_PACK_BUFFER,Mt.byteLength,I.STREAM_READ),I.readPixels(q,$,Q,j,Zt.convert(te),Zt.convert(ee),0);const _e=k!==null?Wt.get(k).__webglFramebuffer:null;Xt.bindFramebuffer(I.FRAMEBUFFER,_e);const ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Xx(I,ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Yt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Mt),I.deleteBuffer(Yt),I.deleteSync(ve),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,q=null,$=0){C.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1]);const Q=Math.pow(2,-$),j=Math.floor(C.image.width*Q),Mt=Math.floor(C.image.height*Q),At=q!==null?q.x:0,Pt=q!==null?q.y:0;L.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,At,Pt,j,Mt),Xt.unbindTexture()};const Vs=I.createFramebuffer(),Pi=I.createFramebuffer();this.copyTextureToTexture=function(C,q,$=null,Q=null,j=0,Mt=null){C.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,C=arguments[1],q=arguments[2],Mt=arguments[3]||0,$=null),Mt===null&&(j!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=j,j=0):Mt=0);let At,Pt,Ot,te,ee,Yt,_e,ve,Ve;const be=C.isCompressedTexture?C.mipmaps[Mt]:C.image;if($!==null)At=$.max.x-$.min.x,Pt=$.max.y-$.min.y,Ot=$.isBox3?$.max.z-$.min.z:1,te=$.min.x,ee=$.min.y,Yt=$.isBox3?$.min.z:0;else{const En=Math.pow(2,-j);At=Math.floor(be.width*En),Pt=Math.floor(be.height*En),C.isDataArrayTexture?Ot=be.depth:C.isData3DTexture?Ot=Math.floor(be.depth*En):Ot=1,te=0,ee=0,Yt=0}Q!==null?(_e=Q.x,ve=Q.y,Ve=Q.z):(_e=0,ve=0,Ve=0);const ne=Zt.convert(q.format),jt=Zt.convert(q.type);let ln;q.isData3DTexture?(L.setTexture3D(q,0),ln=I.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),ln=I.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),ln=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);const Se=I.getParameter(I.UNPACK_ROW_LENGTH),In=I.getParameter(I.UNPACK_IMAGE_HEIGHT),pi=I.getParameter(I.UNPACK_SKIP_PIXELS),Ln=I.getParameter(I.UNPACK_SKIP_ROWS),dn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,be.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,te),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Yt);const Ne=C.isDataArrayTexture||C.isData3DTexture,Nn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const En=Wt.get(C),Ze=Wt.get(q),Sn=Wt.get(En.__renderTarget),wr=Wt.get(Ze.__renderTarget);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,wr.__webglFramebuffer);for(let Hn=0;Hn<Ot;Hn++)Ne&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Wt.get(C).__webglTexture,j,Yt+Hn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Wt.get(q).__webglTexture,Mt,Ve+Hn)),I.blitFramebuffer(te,ee,At,Pt,_e,ve,At,Pt,I.DEPTH_BUFFER_BIT,I.NEAREST);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||C.isRenderTargetTexture||Wt.has(C)){const En=Wt.get(C),Ze=Wt.get(q);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,Vs),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Pi);for(let Sn=0;Sn<Ot;Sn++)Ne?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,En.__webglTexture,j,Yt+Sn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,En.__webglTexture,j),Nn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ze.__webglTexture,Mt,Ve+Sn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ze.__webglTexture,Mt),j!==0?I.blitFramebuffer(te,ee,At,Pt,_e,ve,At,Pt,I.COLOR_BUFFER_BIT,I.NEAREST):Nn?I.copyTexSubImage3D(ln,Mt,_e,ve,Ve+Sn,te,ee,At,Pt):I.copyTexSubImage2D(ln,Mt,_e,ve,te,ee,At,Pt);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Nn?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(ln,Mt,_e,ve,Ve,At,Pt,Ot,ne,jt,be.data):q.isCompressedArrayTexture?I.compressedTexSubImage3D(ln,Mt,_e,ve,Ve,At,Pt,Ot,ne,be.data):I.texSubImage3D(ln,Mt,_e,ve,Ve,At,Pt,Ot,ne,jt,be):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Mt,_e,ve,At,Pt,ne,jt,be.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Mt,_e,ve,be.width,be.height,ne,be.data):I.texSubImage2D(I.TEXTURE_2D,Mt,_e,ve,At,Pt,ne,jt,be);I.pixelStorei(I.UNPACK_ROW_LENGTH,Se),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,In),I.pixelStorei(I.UNPACK_SKIP_PIXELS,pi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ln),I.pixelStorei(I.UNPACK_SKIP_IMAGES,dn),Mt===0&&q.generateMipmaps&&I.generateMipmap(ln),Xt.unbindTexture()},this.copyTextureToTexture3D=function(C,q,$=null,Q=null,j=0){return C.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Q=arguments[1]||null,C=arguments[2],q=arguments[3],j=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,q,$,Q,j)},this.initRenderTarget=function(C){Wt.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Xt.unbindTexture()},this.resetState=function(){F=0,z=0,k=null,Xt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}class hA{constructor(t){yt(this,"scene");yt(this,"camera");yt(this,"renderer");yt(this,"grid");yt(this,"topFaces");yt(this,"glowEffects");yt(this,"pillarHeights");yt(this,"prevHeight");yt(this,"prevDeltaZ");yt(this,"beatHistory");yt(this,"thrownFaces",[]);yt(this,"throwProbability",.95);yt(this,"throwThreshold",.003);yt(this,"minMovementThreshold",.004);yt(this,"throwInitialSpeed",10);yt(this,"throwMaxHeight",12.25);yt(this,"gravity",18);yt(this,"airResistance",.03);yt(this,"maxBounces",5);yt(this,"energyLoss",.85);yt(this,"lastBeatTime",0);yt(this,"beatStrength",0);yt(this,"energyHistory",[]);yt(this,"gridSize",2);yt(this,"gridDimension",60);yt(this,"maxGlowIntensity",2);yt(this,"glowThreshold",.7);yt(this,"smoothFactor",.25);yt(this,"animationId",null);yt(this,"isInitialized",!1);yt(this,"isSilent",!0);yt(this,"silenceTimer",0);yt(this,"silenceThreshold",30);yt(this,"backgroundColor",1513763);yt(this,"bulgePosition",null);yt(this,"bulgeRadius",0);yt(this,"bulgeHeight",0);yt(this,"bulgeFalloff",2);yt(this,"bulgeActive",!1);yt(this,"explosions",[]);yt(this,"EXPLOSION_MAX_AGE",240);yt(this,"EXPLOSION_WAVE_SPEED",.675);yt(this,"defaultCameraPosition");yt(this,"defaultCameraFov");yt(this,"boundHandleFullscreenChange");yt(this,"boundHandleWindowResize");this.container=t,console.log("正在创建TopFacePillarEffect实例"),console.log("容器大小:",t.clientWidth,t.clientHeight),this.scene=new _y,this.scene.background=null,this.camera=new ui(45,1,1,1e3),this.camera.position.set(0,-70,80),this.camera.up.set(0,0,1),this.camera.lookAt(0,0,0),this.defaultCameraPosition=this.camera.position.clone(),this.defaultCameraFov=this.camera.fov,this.boundHandleFullscreenChange=this.handleFullscreenChange.bind(this),this.boundHandleWindowResize=this.onWindowResize.bind(this);const i=t.querySelector("canvas");i&&(console.log("移除现有的canvas元素"),t.removeChild(i)),console.log("创建渲染器"),this.renderer=new fA({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.updateRendererSize(),this.renderer.setClearColor(0,0),this.renderer.autoClear=!0,this.renderer.sortObjects=!0,this.renderer.domElement.style.outline="none",this.renderer.domElement.style.border="none",this.container.appendChild(this.renderer.domElement);const r=t.querySelector("canvas");console.log("Canvas检查:",r?"存在":"不存在"),this.grid=new bs,this.scene.add(this.grid),this.gridSize=2,this.gridDimension=60;const l=new Ay(16777215,.5);this.scene.add(l),this.topFaces=Array(this.gridDimension).fill(null).map(()=>Array(this.gridDimension).fill(null)),this.glowEffects=Array(this.gridDimension).fill(null).map(()=>Array(this.gridDimension).fill(null)),this.pillarHeights=Array(this.gridDimension).fill(null).map(()=>Array(this.gridDimension).fill(.01)),this.prevHeight=Array(this.gridDimension).fill(null).map(()=>Array(this.gridDimension).fill(0)),this.prevDeltaZ=Array(this.gridDimension).fill(null).map(()=>Array(this.gridDimension).fill(0)),this.beatHistory=Array(this.gridDimension).fill(0),window.addEventListener("resize",this.boundHandleWindowResize),console.log("TopFacePillarEffect构造完成"),this.renderer.render(this.scene,this.camera),this.container.addEventListener("updateBulge",this.handleBulgeUpdate.bind(this)),this.container.addEventListener("resetBulge",this.handleBulgeReset.bind(this)),this.container.addEventListener("createExplosion",this.handleCreateExplosion.bind(this))}initialize(){try{if(console.log("初始化TopFacePillarEffect"),this.isInitialized){console.log("已经初始化过，跳过");return}document.addEventListener("fullscreenchange",this.boundHandleFullscreenChange),this.grid.clear();const t=new vr({color:8421504,depthTest:!0,linewidth:2}),i=new Ts({color:this.backgroundColor,transparent:!1,side:fi,depthTest:!0,depthWrite:!0}),r=this.createGlowTexture(),l=new Pc({map:r,color:16777215,transparent:!0,blending:Es,depthTest:!1,depthWrite:!1}),c=this.gridDimension*this.gridSize/2-this.gridSize/2,h=30,d=h/2,p=Math.floor(this.gridDimension/2),m=p-d,g=p+d;for(let _=0;_<this.gridDimension;_++)for(let S=0;S<this.gridDimension;S++){const M=_*this.gridSize-c,b=S*this.gridSize-c;if(!(_>=m&&_<g&&S>=m&&S<g))continue;const y=new bs;y.position.set(M,b,0);const v=new Tr(this.gridSize*.9,this.gridSize*.9),B=new Cn(v,i);y.add(B);const O=new Ni,D=this.gridSize*.45,H=new Float32Array([-D,-D,0,D,-D,0,D,D,0,-D,D,0,-D,-D,0]);O.setAttribute("position",new di(H,3));const F=new pr(O,t.clone());F.position.z=.001,y.add(F);const z=new Mc(l.clone());z.scale.set(this.gridSize*2,this.gridSize*2,1),z.visible=!1,y.add(z),this.grid.add(y),this.topFaces[_][S]=y,this.glowEffects[_][S]=z,this.setPillarHeight(_,S,0)}console.log(`创建了 ${this.gridDimension}x${this.gridDimension} 网格, 核心区域: ${h}x${h}`),this.isInitialized=!0}catch(t){console.error("初始化TopFacePillarEffect失败:",t)}}createGlowTexture(){const t=document.createElement("canvas");t.width=64,t.height=64;const i=t.getContext("2d");if(!i)throw new Error("无法创建2D上下文");const r=i.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255, 255, 255, 1)"),r.addColorStop(.3,"rgba(255, 255, 255, 0.5)"),r.addColorStop(1,"rgba(255, 255, 255, 0)"),i.fillStyle=r,i.fillRect(0,0,64,64);const l=new yy(t);return l.needsUpdate=!0,l}setPillarHeight(t,i,r){const l=r,c=this.pillarHeights[t][i],h=this.prevDeltaZ[t][i],d=(l-c)*this.smoothFactor;let p=d;Math.sign(d)!==Math.sign(h)&&(p=d*1.5),p=p*.7+h*.3;const m=c+p;this.checkAndThrow(t,i,p,h),this.pillarHeights[t][i]=m,this.prevDeltaZ[t][i]=p;const g=this.topFaces[t][i];g&&(g.position.z=m*28,this.setBrightnessBasedColor(t,i),this.updateGlowEffect(t,i))}checkAndThrow(t,i,r,l){const c=r-l;if(c<=.004||Math.abs(r)+c*5<this.minMovementThreshold)return;const p=performance.now()-this.lastBeatTime,m=this.beatHistory[this.beatHistory.length-1]>0&&r>.01&&this.beatStrength>.5,g=Math.abs(r)+c*4;let _=0;m?_=this.beatStrength*.45*(1+c*12):p>60&&g>this.throwThreshold&&(_=Math.min(g*c*3,.35));const S=Math.floor(this.gridDimension/2),M=Math.sqrt(Math.pow(t-S,2)+Math.pow(i-S,2)),b=10;if(M<=b)_+=.075*(1-M/b);else{const y=Math.min((M-b)/(S-b),1);_*=Math.max(.3,1-y*.7)}const w=Math.min(c*8,2);if(_*=this.throwProbability*(1+w),_*=.5,Math.random()<_){const y=Math.random()<.8?1:2;for(let v=0;v<y;v++){const B=m?2+this.beatStrength*1.2+c*6:1.5+g*3+c*5;let O=1;if(M>b){const D=Math.min((M-b)/(S-b),1);O=Math.max(.5,1-D*.5)}this.createThrownFace(t,i,this.throwInitialSpeed*B*O)}}}forceThrow(){const t=Math.floor(this.gridDimension/2),i=t+Math.floor((Math.random()-.5)*10),r=t+Math.floor((Math.random()-.5)*10),l=Math.max(0,Math.min(i,this.gridDimension-1)),c=Math.max(0,Math.min(r,this.gridDimension-1));this.createThrownFace(l,c),console.log(`强制触发抛掷效果: 位置(${l},${c})`)}createThrownFace(t,i,r=this.throwInitialSpeed){const l=this.topFaces[t][i];if(l)try{const c=l.clone();c.traverse(_=>{try{_ instanceof Cn&&_.material instanceof Va&&(_.material=_.material.clone(),_.material.transparent=!0,_.material.opacity=.9),_ instanceof pr&&_.material instanceof vr&&(_.material=_.material.clone(),_.material.transparent=!0,_.material.opacity=.9)}catch(S){console.error("处理抛掷顶面材质时出错:",S)}});const h=new tt,d=new Fs;l.getWorldPosition(h),l.getWorldQuaternion(d),c.position.copy(h),c.quaternion.copy(d);const p=this.createGlowTexture(),m=new Pc({map:p,color:16777215,transparent:!0,opacity:.7,blending:Es,depthTest:!1,depthWrite:!1}),g=new Mc(m);g.scale.set(this.gridSize*2,this.gridSize*2,1),g.visible=!1,c.add(g),this.scene.add(c),this.thrownFaces.push({face:c,position:c.position.clone(),velocity:r,initialPosition:h.clone(),maxHeight:h.z+this.throwMaxHeight,isDescending:!1,hasCollided:!1,bounceCount:0,energyFactor:.8+Math.random()*.4,glow:g})}catch(c){console.error("创建抛掷顶面时出错:",c)}}createCollisionFlash(t){try{const i=new Tr(4,4),r=new Ts({color:16711680,transparent:!0,opacity:1,side:fi,depthWrite:!1}),l=new Cn(i,r);l.position.copy(t),l.position.z+=.1,this.scene.add(l);let c=1;const h=()=>{if(c-=.1,c<=0){this.scene.remove(l),i.dispose(),r.dispose();return}r.opacity=c,requestAnimationFrame(h)};h()}catch(i){console.error("创建碰撞闪光效果时出错:",i)}}updateThrownFaces(t){try{const i=.016666666666666666;for(let r=this.thrownFaces.length-1;r>=0;r--)try{const l=this.thrownFaces[r],c=l.velocity*this.airResistance;if(!l.isDescending)l.velocity-=(this.gravity+c)*i,l.position.z+=l.velocity*i,l.velocity<=0&&(l.isDescending=!0,l.velocity=0);else if(l.velocity+=this.gravity*i,l.velocity=Math.min(l.velocity,12),l.position.z-=l.velocity*i,!l.hasCollided&&l.position.z<=l.initialPosition.z){l.position.z=l.initialPosition.z,l.hasCollided=!0,this.scene.remove(l.face),this.thrownFaces.splice(r,1);continue}l.face.position.copy(l.position);const d=Math.abs(l.position.z-l.initialPosition.z)/this.throwMaxHeight;if(l.face.traverse(p=>{if(p instanceof Cn&&p.material instanceof Ts&&p.material.color.set(this.backgroundColor),p instanceof pr&&p.material instanceof vr){const m=.2+Math.min(d*.8,.8);p.material.color.setRGB(m,m,m)}}),l.glow)if(d>.3){l.glow.visible=!0;const p=this.gridSize*1.5;l.glow.scale.set(p,p,1),l.glow.material.opacity=.3}else l.glow.visible=!1}catch(l){if(console.error("更新单个抛掷顶面时出错:",l),r>=0&&r<this.thrownFaces.length){const c=this.thrownFaces[r];c&&c.face&&this.scene.remove(c.face),this.thrownFaces.splice(r,1)}}}catch(i){console.error("更新抛掷顶面时出错:",i)}}setBrightnessBasedColor(t,i){const r=this.topFaces[t][i];if(!r)return;const l=this.pillarHeights[t][i];if(this.isSilent){const d=r.children[1];d instanceof pr&&d.material instanceof vr&&d.material.color.setRGB(.2,.2,.2);return}const c=.2+Math.min(l/.214*.8,.8),h=r.children[1];h instanceof pr&&h.material instanceof vr&&h.material.color.setRGB(c,c,c)}updateGlowEffect(t,i){const r=this.glowEffects[t][i];if(!r)return;const l=this.pillarHeights[t][i];if(l>.143){r.visible=!0;const c=Math.min((l-.143)*2,1),h=this.gridSize*(1.5+c);r.scale.set(h,h,1);const d=r.material;d.opacity=c*.7,this.beatHistory[this.beatHistory.length-1]>0&&(d.opacity*=2)}else r.visible=!1}start(){this.isInitialized?this.animationId===null&&this.animate():this.initialize()}stop(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null)}dispose(){try{this.stop(),document.removeEventListener("fullscreenchange",this.boundHandleFullscreenChange),this.scene.traverse(t=>{(t instanceof Cn||t instanceof pr||t instanceof Mc)&&(t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose()))});for(const t of this.thrownFaces)this.scene.remove(t.face),t.face.traverse(i=>{i instanceof Cn&&i.material instanceof Va&&i.material.dispose(),i instanceof pr&&i.material instanceof vr&&i.material.dispose()});this.thrownFaces=[];for(const t of this.explosions)t.flash&&this.scene.remove(t.flash);this.explosions=[],this.renderer&&this.renderer.domElement&&this.container&&this.container.contains(this.renderer.domElement)&&this.container.removeChild(this.renderer.domElement),this.renderer&&this.renderer.dispose(),window.removeEventListener("resize",this.boundHandleWindowResize),this.container.removeEventListener("updateBulge",this.handleBulgeUpdate.bind(this)),this.container.removeEventListener("resetBulge",this.handleBulgeReset.bind(this)),this.container.removeEventListener("createExplosion",this.handleCreateExplosion.bind(this)),console.log("TopFacePillarEffect资源已清理")}catch(t){console.error("清理TopFacePillarEffect资源失败:",t)}}updateRendererSize(){if(!this.container||!this.camera||!this.renderer)return;const t=this.container.clientWidth,i=this.container.clientHeight,r=window.matchMedia("(orientation: portrait)").matches;let l=t,c=i;r?(c=t*.8,this.camera.position.set(0,-95,110),this.camera.fov=42):(c=i,this.camera.position.set(0,-70,80),this.camera.fov=45),this.camera.aspect=l/c,this.camera.updateProjectionMatrix(),this.renderer.setSize(l,c)}onWindowResize(){this.updateRendererSize()}animate(){this.animationId=requestAnimationFrame(this.animate.bind(this)),this.updateExplosions();const t=Math.sqrt(this.camera.position.x*this.camera.position.x+this.camera.position.y*this.camera.position.y),i=Math.atan2(this.camera.position.y,this.camera.position.x)+.001;this.camera.position.x=t*Math.cos(i),this.camera.position.y=t*Math.sin(i),this.camera.lookAt(0,0,0),this.updateThrownFaces(1/60),Math.random()<.016&&console.log(`当前抛掷顶面数量: ${this.thrownFaces.length}`),this.renderer.render(this.scene,this.camera)}updateAudioData(t,i){if(this.isInitialized)try{let r=0;for(let F=0;F<t.length;F++)r+=t[F];const l=r/t.length;this.energyHistory.push(l),this.energyHistory.length>30&&this.energyHistory.shift();const c=this.energyHistory.length>1?l-this.energyHistory[this.energyHistory.length-2]:0;if(i){const F=performance.now();this.lastBeatTime=F,this.beatStrength=Math.min(l/255*.7+Math.abs(c/255)*.3,1)}l<5?this.silenceTimer++:this.silenceTimer=0,this.isSilent=this.silenceTimer>this.silenceThreshold;const h=30,d=h/2,p=Math.floor(this.gridDimension/2),m=p-d,g=p+d;this.beatHistory.push(i?1:0),this.beatHistory.shift();const _=[];for(let F=0;F<h;F++){const z=F/(h-1);let k;z<.3?k=Math.pow(z/.3,.5)*.3:z<.8?k=.3+(z-.3)/.5*.6:k=.9;const R=Math.min(Math.floor(k*(t.length*.8)),t.length-1);let E=t[R]/255,P;z<.3?P=.8+z/.3*.4:z<.8?P=1.2+(z-.3)/.5*.4:P=1.6+(z-.8)/.2*.2,E=Math.pow(E,.6)*P,E=Math.min(Math.max(E,0),1),_.push(E)}const S=[],M=2;for(let F=0;F<_.length;F++){let z=0,k=0;for(let R=-M;R<=M;R++){const E=F+R;if(E>=0&&E<_.length){const P=Math.exp(-(R*R)/4);z+=_[E]*P,k+=P}}S[F]=z/k}const b=performance.now()*.001,w=Array(h).fill(0).map(()=>Array(h).fill(0));for(let F=m;F<g;F++){const z=F-m;for(let k=m;k<g;k++){const R=k-m;let E=0;if(z===16)E=Math.max(S[R]*.85,.02);else{const P=Math.abs(z-16),st=S[R],ft=1.8-R/(h-1)*.6,ut=18,V=.03,rt=2.2,Z=Math.max(0,(P-3)/(h/2)),vt=V*Math.pow(Z,rt),U=P-b*ut,et=Math.exp(-vt*P),Et=(Math.sin(U/ft)*.7+Math.cos(U/(ft*1.3)))*et*st*.5;E=Math.max(Et*.8,.02)}E=this.applyBulgeEffect(F,k,E),E=this.applyExplosionEffect(F,k,E),w[z][R]=E}}const y=5,v=5,B=.9,O=.9,D=.15,H=.05;for(let F=0;F<h;F++)for(let z=0;z<h;z++){let k=1,R=w[F][z];for(let E=-y;E<=y;E++)for(let P=-v;P<=v;P++){if(E===0&&P===0)continue;const st=F+E,it=z+P;if(st>=0&&st<h&&it>=0&&it<h){const ft=E/y,ut=P/v,V=Math.sqrt(ft*ft+ut*ut);if(V<=1){const rt=B*Math.exp(-V*V*3),Z=O*Math.exp(-V*V*3),vt=Math.abs(E)>0?rt:Z,U=Math.abs(F-16),et=Math.exp(-U*.2),Et=vt*(1+et*.5);k+=Et,R+=w[st][it]*Et}}}this.setPillarHeight(m+F,m+z,R/k)}if(i&&!this.isSilent&&this.beatStrength>.5){const F=Math.floor(this.gridDimension/2),z=4+Math.floor(this.beatStrength*12);for(let k=0;k<z;k++){const R=F+Math.floor((Math.random()-.5)*16),E=F+Math.floor((Math.random()-.5)*16),P=Math.max(0,Math.min(R,this.gridDimension-1)),st=Math.max(0,Math.min(E,this.gridDimension-1));this.createThrownFace(P,st,this.throwInitialSpeed*(1.8+this.beatStrength*1.5))}console.log(`强节拍触发${z}个抛掷效果`)}}catch(r){console.error("更新音频数据时出错:",r)}}createCollisionGlow(t,i){try{const r=new Tr(this.gridSize*2,this.gridSize*2),l=new Ts({color:16777215,transparent:!0,opacity:.4,side:fi,depthWrite:!1,blending:Es}),c=new Cn(r,l);c.position.copy(i),c.position.z+=.01,this.scene.add(c);let h=0;const d=.15,p=()=>{if(h+=1/60,h>=d){this.scene.remove(c),r.dispose(),l.dispose();return}const m=h/d,g=1+m*.3;c.scale.set(g,g,1),l.opacity=.4*(1-m),requestAnimationFrame(p)};p()}catch(r){console.error("创建碰撞光晕效果时出错:",r)}}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}handleBulgeUpdate(t){const{position:i,radius:r,height:l,falloff:c}=t.detail;this.bulgePosition=new he(i.x,i.y),this.bulgeRadius=r,this.bulgeHeight=l,this.bulgeFalloff=c,this.bulgeActive=!0}handleBulgeReset(){this.bulgeActive=!1,this.bulgePosition=null}applyBulgeEffect(t,i,r){if(!this.bulgeActive||!this.bulgePosition)return r;const l=2,c=this.gridDimension*l/2-l/2,h=t*l-c,d=i*l-c,p=new he(h,d).distanceTo(this.bulgePosition);if(p>this.bulgeRadius)return r;const m=p/this.bulgeRadius,g=Math.pow(1-m,this.bulgeFalloff),_=this.bulgeHeight*g;return r+_}handleCreateExplosion(t){const{position:i,radius:r,strength:l,decay:c}=t.detail;this.createExplosion(new he(i.x,i.y),r,l,c)}createExplosion(t,i,r,l){const c=this.createExplosionFlash(t);this.explosions.push({position:t,radius:i,strength:r,decay:l,age:0,maxAge:this.EXPLOSION_MAX_AGE,flash:c}),console.log(`创建爆炸效果: 位置(${t.x}, ${t.y}), 半径${i}, 强度${r}`)}createExplosionFlash(t){const i=this.createGlowTexture(),r=new Pc({map:i,color:16742144,transparent:!0,opacity:1,blending:Es,depthTest:!1,depthWrite:!1}),l=new Mc(r);return l.position.set(t.x,t.y,.5),l.scale.set(5,5,1),this.scene.add(l),l}updateExplosions(){for(let t=this.explosions.length-1;t>=0;t--){const i=this.explosions[t];if(i.age++,i.age>=i.maxAge){i.flash&&(this.scene.remove(i.flash),i.flash.material.dispose()),this.explosions.splice(t,1);continue}if(i.flash){const r=Math.max(0,1-i.age/20);i.flash.material.opacity=r;const l=5+i.age*.2;i.flash.scale.set(l,l,1)}}}applyExplosionEffect(t,i,r){if(this.explosions.length===0)return r;const l=2,c=this.gridDimension*l/2-l/2,h=t*l-c,d=i*l-c,p=new he(h,d);let m=0;for(const g of this.explosions){const _=g.age*this.EXPLOSION_WAVE_SPEED,S=p.distanceTo(g.position),M=4,b=Math.abs(S-_);if(b<M&&S<=g.radius){const w=1-b/M,y=Math.sin(w*Math.PI),v=1-Math.pow(S/g.radius,.7),B=1-Math.pow(g.age/g.maxAge,.8),O=g.strength*v*B,D=y*O*.7;m+=D}}return r+m}handleFullscreenChange(){document.fullscreenElement||(console.log("退出全屏，恢复相机位置"),this.defaultCameraPosition&&this.defaultCameraFov&&(this.camera.position.copy(this.defaultCameraPosition),this.camera.fov=this.defaultCameraFov,this.camera.updateProjectionMatrix())),this.updateRendererSize()}}const dA=({onSourceChange:o,visualizerRef:t})=>{const[i,r]=ke.useState("none"),[l,c]=ke.useState(!1),[h,d]=ke.useState(null),[p,m]=ke.useState(!1),[g,_]=ke.useState(null),[S,M]=ke.useState(!1),b=ke.useRef(null),w=[{name:"电台音乐1",file:"/demo_music/demo1.mp3"},{name:"电台音乐2",file:"/demo_music/demo2.mp3"},{name:"电台音乐3",file:"/demo_music/demo3.mp3"},{name:"电台音乐4",file:"/demo_music/demo4.mp3"},{name:"电台音乐5",file:"/demo_music/demo5.mp3"}],[y,v]=ke.useState(0);ke.useEffect(()=>{const E=()=>{m(Ge.getIsPaused())};E();const P=setInterval(E,500);return()=>{clearInterval(P),Ge.cleanup()}},[]),ke.useEffect(()=>{const E=()=>{M(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",E),()=>{document.removeEventListener("fullscreenchange",E)}},[]),ke.useEffect(()=>{const E=P=>{P.code==="Space"&&(i==="file"||i==="demo")&&(P.preventDefault(),k())};return document.addEventListener("keydown",E),()=>{document.removeEventListener("keydown",E)}},[i]);const B=async()=>{if(i!=="mic"){c(!0),_(null);try{if(Ge.cleanup(),!await Ge.requestMicrophonePermission())throw new Error("无法获取麦克风权限");if(!await Ge.initialize())throw new Error("无法初始化麦克风");r("mic"),d(null),m(!1),o()}catch(E){console.error("切换到麦克风时出错:",E),_("无法访问麦克风，请确保已授予权限"),r("none")}finally{c(!1)}}},O=async E=>{const P=E.target.files;if(!P||P.length===0)return;const st=P[0];d(st.name),c(!0),_(null);try{Ge.cleanup();const it=URL.createObjectURL(st);if(!await Ge.initializeWithAudio(it))throw new Error("无法加载音频文件");r("file"),m(!1),o()}catch(it){console.error("加载音频文件时出错:",it),_("无法加载音频文件"),r("none")}finally{c(!1)}},D=async()=>{if(i!=="demo"){c(!0),_(null);try{if(Ge.cleanup(),!await Ge.initializeWithAudio(w[y].file))throw new Error("无法加载示例音频文件");r("demo"),d(`${w[y].name}`),m(!1),o();const P=Ge.getAudioElement();P&&(P.onended=()=>{H()})}catch(E){console.error("加载示例音频时出错:",E),_("无法加载示例音频文件"),r("none")}finally{c(!1)}}},H=async()=>{Ge.getAudioElement()&&(Ge.getAudioElement().pause(),Ge.cleanup());const E=(y+1)%w.length;v(E);try{if(await Ge.initializeWithAudio(w[E].file)){d(`${w[E].name}`);const st=Ge.getAudioElement();st&&(st.onended=()=>{H()})}}catch(P){console.error("切换下一首示例音乐时出错:",P)}},F=async()=>{Ge.getAudioElement()&&(Ge.getAudioElement().pause(),Ge.cleanup());const E=(y-1+w.length)%w.length;v(E);try{if(await Ge.initializeWithAudio(w[E].file)){d(`${w[E].name}`);const st=Ge.getAudioElement();st&&(st.onended=()=>{H()})}}catch(P){console.error("切换上一首示例音乐时出错:",P)}},z=()=>{b.current&&b.current.click()},k=()=>{if(Ge.getSourceType()==="file"){const E=Ge.togglePlayPause();m(E)}},R=()=>{if(!(!t||!t.current))try{document.fullscreenElement?document.exitFullscreen():t.current.requestFullscreen().catch(E=>{console.error(`无法进入全屏模式: ${E.message}`)})}catch(E){console.error("切换全屏时出错:",E)}};return ie.jsxs("div",{className:"control-panel",children:[ie.jsxs("div",{className:"source-selector",children:[ie.jsx("h3",{children:"音频源"}),ie.jsxs("div",{className:"source-buttons",children:[ie.jsx("button",{className:`source-button ${i==="mic"?"active":""}`,onClick:B,disabled:l||i==="mic",children:"麦克风"}),ie.jsx("button",{className:`source-button ${i==="file"?"active":""}`,onClick:z,disabled:l,children:"上传"}),ie.jsx("button",{className:`source-button ${i==="demo"?"active":""}`,onClick:D,disabled:l||i==="demo",children:"电台"}),ie.jsx("input",{type:"file",ref:b,style:{display:"none"},accept:"audio/*",onChange:O})]}),g&&ie.jsx("div",{className:"error-message",children:g}),(i==="file"||i==="demo")&&h&&ie.jsxs("div",{className:"file-info",children:[ie.jsxs("div",{className:"file-name",children:["当前文件: ",h]}),ie.jsxs("div",{className:"playback-controls",children:[i==="demo"&&ie.jsx("button",{className:"nav-button prev-button",onClick:F,disabled:l,children:"⏮️"}),ie.jsx("button",{className:"play-pause-button",onClick:k,disabled:i!=="file"&&i!=="demo",children:p?"▶️":"⏸️"}),i==="demo"&&ie.jsx("button",{className:"nav-button next-button",onClick:H,disabled:l,children:"⏭️"})]})]}),l&&ie.jsx("div",{className:"loading-indicator",children:"加载中..."})]}),ie.jsx("div",{className:"fullscreen-control",children:ie.jsx("button",{className:"fullscreen-button",onClick:R,title:S?"退出全屏":"进入全屏",children:S?ie.jsxs(ie.Fragment,{children:[ie.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",style:{marginRight:"6px"},children:ie.jsx("path",{d:"M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"})}),"退出全屏"]}):ie.jsxs(ie.Fragment,{children:[ie.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",style:{marginRight:"6px"},children:ie.jsx("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"})}),"进入全屏"]})})}),ie.jsxs("div",{className:"instructions",children:[ie.jsx("p",{children:"本期弦歌电台歌单，下面是1-5首demo音乐的曲名："}),ie.jsx("ul",{className:"demo-music-list",children:w.map((E,P)=>ie.jsx("li",{className:y===P?"active":"",children:E.name},P))})]})]})};class pA{constructor(t,i,r,l){yt(this,"camera");yt(this,"scene");yt(this,"domElement");yt(this,"MIN_ZOOM",5);yt(this,"MAX_ZOOM",80);yt(this,"ZOOM_SPEED",2);yt(this,"BULGE_RADIUS",5);yt(this,"BULGE_HEIGHT",.9);yt(this,"BULGE_FALLOFF",2);yt(this,"EXPLOSION_RADIUS",45);yt(this,"EXPLOSION_STRENGTH",1);yt(this,"EXPLOSION_DECAY",.05);yt(this,"lastClickTime",0);yt(this,"CLICK_COOLDOWN",100);yt(this,"lastTouchTime",0);yt(this,"DOUBLE_TAP_THRESHOLD",300);yt(this,"isTouching",!1);yt(this,"touchZoomStart",0);yt(this,"touchZoomCurrent",0);yt(this,"mouse");yt(this,"raycaster");yt(this,"groundPlane");yt(this,"mouseWorldPos");yt(this,"isMouseOverGrid");yt(this,"boundHandleWheel");yt(this,"boundHandleMouseMove");yt(this,"boundHandleMouseLeave");yt(this,"boundHandleClick");yt(this,"boundHandleTouchStart");yt(this,"boundHandleTouchMove");yt(this,"boundHandleTouchEnd");yt(this,"hasAddedEventListeners",!1);yt(this,"isMobileDevice",!1);this.scene=t,this.camera=i,this.domElement=l,this.isMobileDevice=this.detectMobileDevice(),console.log(`设备检测: ${this.isMobileDevice?"移动设备":"桌面设备"}`),this.mouse=new he,this.raycaster=new Cy,this.groundPlane=new Pa(new tt(0,0,1),0),this.mouseWorldPos=new tt,this.isMouseOverGrid=!1,this.boundHandleWheel=this.handleWheel.bind(this),this.boundHandleMouseMove=this.handleMouseMove.bind(this),this.boundHandleMouseLeave=this.handleMouseLeave.bind(this),this.boundHandleClick=this.handleClick.bind(this),this.boundHandleTouchStart=this.handleTouchStart.bind(this),this.boundHandleTouchMove=this.handleTouchMove.bind(this),this.boundHandleTouchEnd=this.handleTouchEnd.bind(this),this.addEventListeners(),this.isMobileDevice&&this.applyMobileOptimizations()}detectMobileDevice(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints!==void 0&&navigator.maxTouchPoints>2}applyMobileOptimizations(){console.log("应用移动设备优化"),this.ensureViewportMeta(),this.disableLongPressMenu(),this.adjustExplosionForMobile()}ensureViewportMeta(){let t=document.querySelector('meta[name="viewport"]');t||(t=document.createElement("meta"),t.setAttribute("name","viewport"),document.head.appendChild(t)),t.setAttribute("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no")}disableLongPressMenu(){this.domElement.addEventListener("contextmenu",i=>(i.preventDefault(),!1));const t=document.createElement("style");t.textContent=`
      canvas {
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
      }
    `,document.head.appendChild(t)}adjustExplosionForMobile(){this.isMobileDevice&&(this.EXPLOSION_STRENGTH=2)}addEventListeners(){this.hasAddedEventListeners||(this.removeEventListeners(),this.domElement.addEventListener("wheel",this.boundHandleWheel),this.domElement.addEventListener("mousemove",this.boundHandleMouseMove),this.domElement.addEventListener("mouseleave",this.boundHandleMouseLeave),this.domElement.addEventListener("click",this.boundHandleClick,{capture:!0}),this.domElement.addEventListener("touchstart",this.boundHandleTouchStart,{passive:!1}),this.domElement.addEventListener("touchmove",this.boundHandleTouchMove,{passive:!1}),this.domElement.addEventListener("touchend",this.boundHandleTouchEnd),this.hasAddedEventListeners=!0,console.log("MouseInteractionManager: 已添加事件监听器"))}removeEventListeners(){this.domElement.removeEventListener("wheel",this.boundHandleWheel),this.domElement.removeEventListener("mousemove",this.boundHandleMouseMove),this.domElement.removeEventListener("mouseleave",this.boundHandleMouseLeave),this.domElement.removeEventListener("click",this.boundHandleClick,{capture:!0}),this.domElement.removeEventListener("touchstart",this.boundHandleTouchStart),this.domElement.removeEventListener("touchmove",this.boundHandleTouchMove),this.domElement.removeEventListener("touchend",this.boundHandleTouchEnd),this.hasAddedEventListeners=!1}handleTouchStart(t){if(t.preventDefault(),t.touches.length===1){this.isTouching=!0;const i=t.touches[0];this.updatePointerPosition(i.clientX,i.clientY);const r=Date.now();r-this.lastTouchTime<this.DOUBLE_TAP_THRESHOLD&&this.handleDoubleTap(),this.lastTouchTime=r}else if(t.touches.length===2){const i=t.touches[0].clientX-t.touches[1].clientX,r=t.touches[0].clientY-t.touches[1].clientY;this.touchZoomStart=Math.sqrt(i*i+r*r),this.touchZoomCurrent=this.touchZoomStart}}handleTouchMove(t){if(t.preventDefault(),t.touches.length===1&&this.isTouching){const i=t.touches[0];this.updatePointerPosition(i.clientX,i.clientY)}else if(t.touches.length===2){const i=t.touches[0].clientX-t.touches[1].clientX,r=t.touches[0].clientY-t.touches[1].clientY;if(this.touchZoomCurrent=Math.sqrt(i*i+r*r),this.touchZoomStart>0){const l=(this.touchZoomStart-this.touchZoomCurrent)*.05,c=this.camera.position.z,h=Math.max(1,c/20),d=Math.max(this.MIN_ZOOM,Math.min(this.MAX_ZOOM,c+l*this.ZOOM_SPEED*h));this.camera.position.z=d,this.touchZoomStart=this.touchZoomCurrent}}}handleTouchEnd(t){t.touches.length===0&&(this.isTouching=!1,this.isMouseOverGrid=!1,this.resetBulgeEffect())}handleDoubleTap(){const t=Date.now();if(t-this.lastClickTime<this.CLICK_COOLDOWN){console.log("MouseInteractionManager: 点击冷却中，忽略双击");return}this.lastClickTime=t,this.raycaster.setFromCamera(this.mouse,this.camera),this.raycaster.ray.intersectPlane(this.groundPlane,this.mouseWorldPos)&&(this.createExplosion(),console.log("MouseInteractionManager: 双击触发爆炸效果，时间戳:",t),this.provideTactileFeedback())}provideTactileFeedback(){if(this.isMobileDevice&&"vibrate"in navigator)try{navigator.vibrate(50)}catch{console.log("振动API不可用或被禁用")}}updatePointerPosition(t,i){const r=this.domElement.getBoundingClientRect();this.mouse.x=(t-r.left)/r.width*2-1,this.mouse.y=-((i-r.top)/r.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera),this.raycaster.ray.intersectPlane(this.groundPlane,this.mouseWorldPos)?(this.isMouseOverGrid=!0,this.updateBulgeEffect()):this.isMouseOverGrid=!1}handleClick(t){const i=Date.now();if(i-this.lastClickTime<this.CLICK_COOLDOWN){t.preventDefault(),t.stopPropagation(),console.log("MouseInteractionManager: 点击冷却中，忽略点击");return}this.lastClickTime=i;const r=this.domElement.getBoundingClientRect();this.mouse.x=(t.clientX-r.left)/r.width*2-1,this.mouse.y=-((t.clientY-r.top)/r.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera),this.raycaster.ray.intersectPlane(this.groundPlane,this.mouseWorldPos)&&(this.createExplosion(),t.preventDefault(),t.stopPropagation(),console.log("MouseInteractionManager: 创建爆炸效果，时间戳:",i))}createExplosion(){const t=this.mouseWorldPos.x,i=this.mouseWorldPos.y,r=new CustomEvent("createExplosion",{detail:{position:{x:t,y:i},radius:this.EXPLOSION_RADIUS,strength:this.EXPLOSION_STRENGTH,decay:this.EXPLOSION_DECAY}});this.domElement.dispatchEvent(r)}handleMouseMove(t){this.updatePointerPosition(t.clientX,t.clientY)}handleMouseLeave(){this.isMouseOverGrid=!1,this.resetBulgeEffect()}updateBulgeEffect(){if(!this.isMouseOverGrid)return;const t=this.mouseWorldPos.x,i=this.mouseWorldPos.y,r=new CustomEvent("updateBulge",{detail:{position:{x:t,y:i},radius:this.BULGE_RADIUS,height:this.BULGE_HEIGHT,falloff:this.BULGE_FALLOFF}});this.domElement.dispatchEvent(r)}resetBulgeEffect(){const t=new CustomEvent("resetBulge");this.domElement.dispatchEvent(t)}handleWheel(t){t.preventDefault();const i=t.deltaY>0?1:-1,r=this.camera.position.z,l=Math.max(1,r/20),c=Math.max(this.MIN_ZOOM,Math.min(this.MAX_ZOOM,r+i*this.ZOOM_SPEED*l));this.camera.position.z=c}dispose(){this.removeEventListeners(),console.log("MouseInteractionManager: 已移除所有事件监听器")}}function mA(o,t,i,r){const l=ke.useRef(null);return ke.useEffect(()=>{if(!o.current||!t.current||!i.current||!r.current)return;const c=new pA(t.current,i.current,r.current,o.current);return l.current=c,()=>{l.current&&l.current.dispose()}},[o,t,i,r]),l.current}const gA=()=>{const o=ke.useRef(null),[t,i]=ke.useState(!0),[r,l]=ke.useState(null),c=ke.useRef(null),[h,d]=ke.useState(!1),p=ke.useRef(null),m=ke.useRef(null),g=ke.useRef(null);ke.useEffect(()=>((async()=>{try{await Ge.autoInitialize()?(console.log("音频环境自动初始化成功"),d(!0)):console.error("音频环境自动初始化失败")}catch(M){console.error("初始化音频环境时出错:",M)}})(),()=>{}),[]),ke.useEffect(()=>{if(!o.current){console.log("容器不存在");return}console.log("正在初始化3D顶面效果",o.current);try{const S=new hA(o.current);c.current=S,p.current=S.getScene(),m.current=S.getCamera(),g.current=S.getRenderer(),S.initialize(),S.start();let M;const b=()=>{try{const y=Ge.getFrequencyData(),v=Ge.isBeat();y&&S.updateAudioData(y,v),M=requestAnimationFrame(b)}catch(y){console.error("可视化更新错误",y)}};b();const w=()=>{if(c.current)try{c.current.onWindowResize()}catch(y){console.error("调整大小时出错",y)}};return window.addEventListener("resize",w),()=>{cancelAnimationFrame(M),window.removeEventListener("resize",w),c.current&&c.current.dispose()}}catch(S){console.error("初始化3D效果时出错:",S),l("初始化3D效果时出错")}},[]),mA(o,p,m,g);const _=()=>{i(!0),l(null)};return ie.jsx("div",{className:"pillar-visualizer",children:r?ie.jsx("div",{className:"error-message",children:ie.jsx("p",{children:r})}):ie.jsxs(ie.Fragment,{children:[ie.jsx("div",{ref:o,className:"pillar-visualizer-container"}),ie.jsx(dA,{onSourceChange:_,visualizerRef:o})]})})},_A=()=>(ke.useEffect(()=>{const o=()=>{Ge.cleanup()};return window.addEventListener("beforeunload",o),window.addEventListener("unload",o),()=>{o(),window.removeEventListener("beforeunload",o),window.removeEventListener("unload",o)}},[]),ie.jsxs("div",{className:"app",children:[ie.jsxs("header",{className:"app-header",children:[ie.jsx("h1",{children:"弦歌 | Lyra"}),ie.jsx("p",{children:"尽情探索音乐的建筑之美"})]}),ie.jsx("div",{className:"main-content",children:ie.jsx(gA,{})})]}));KS.createRoot(document.getElementById("root")).render(ie.jsx(ke.StrictMode,{children:ie.jsx(_A,{})}));
