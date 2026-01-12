(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function UA(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var e_={exports:{}},vc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vb;function SN(){if(vb)return vc;vb=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:r,type:i,key:c,ref:a!==void 0?a:null,props:l}}return vc.Fragment=e,vc.jsx=t,vc.jsxs=t,vc}var Eb;function RN(){return Eb||(Eb=1,e_.exports=SN()),e_.exports}var M=RN(),t_={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tb;function CN(){if(Tb)return Se;Tb=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),I=Symbol.iterator;function O(P){return P===null||typeof P!="object"?null:(P=I&&P[I]||P["@@iterator"],typeof P=="function"?P:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,X={};function me(P,ee,he){this.props=P,this.context=ee,this.refs=X,this.updater=he||Q}me.prototype.isReactComponent={},me.prototype.setState=function(P,ee){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ee,"setState")},me.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function ne(){}ne.prototype=me.prototype;function G(P,ee,he){this.props=P,this.context=ee,this.refs=X,this.updater=he||Q}var se=G.prototype=new ne;se.constructor=G,$(se,me.prototype),se.isPureReactComponent=!0;var de=Array.isArray;function le(){}var A={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function R(P,ee,he){var pe=he.ref;return{$$typeof:r,type:P,key:ee,ref:pe!==void 0?pe:null,props:he}}function x(P,ee){return R(P.type,ee,P.props)}function D(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function k(P){var ee={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(he){return ee[he]})}var C=/\/+/g;function $e(P,ee){return typeof P=="object"&&P!==null&&P.key!=null?k(""+P.key):ee.toString(36)}function wt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(le,le):(P.status="pending",P.then(function(ee){P.status==="pending"&&(P.status="fulfilled",P.value=ee)},function(ee){P.status==="pending"&&(P.status="rejected",P.reason=ee)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function W(P,ee,he,pe,Ie){var De=typeof P;(De==="undefined"||De==="boolean")&&(P=null);var Be=!1;if(P===null)Be=!0;else switch(De){case"bigint":case"string":case"number":Be=!0;break;case"object":switch(P.$$typeof){case r:case e:Be=!0;break;case v:return Be=P._init,W(Be(P._payload),ee,he,pe,Ie)}}if(Be)return Ie=Ie(P),Be=pe===""?"."+$e(P,0):pe,de(Ie)?(he="",Be!=null&&(he=Be.replace(C,"$&/")+"/"),W(Ie,ee,he,"",function(ha){return ha})):Ie!=null&&(D(Ie)&&(Ie=x(Ie,he+(Ie.key==null||P&&P.key===Ie.key?"":(""+Ie.key).replace(C,"$&/")+"/")+Be)),ee.push(Ie)),1;Be=0;var Qt=pe===""?".":pe+":";if(de(P))for(var dt=0;dt<P.length;dt++)pe=P[dt],De=Qt+$e(pe,dt),Be+=W(pe,ee,he,De,Ie);else if(dt=O(P),typeof dt=="function")for(P=dt.call(P),dt=0;!(pe=P.next()).done;)pe=pe.value,De=Qt+$e(pe,dt++),Be+=W(pe,ee,he,De,Ie);else if(De==="object"){if(typeof P.then=="function")return W(wt(P),ee,he,pe,Ie);throw ee=String(P),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Be}function ce(P,ee,he){if(P==null)return P;var pe=[],Ie=0;return W(P,pe,"","",function(De){return ee.call(he,De,Ie++)}),pe}function Te(P){if(P._status===-1){var ee=P._result;ee=ee(),ee.then(function(he){(P._status===0||P._status===-1)&&(P._status=1,P._result=he)},function(he){(P._status===0||P._status===-1)&&(P._status=2,P._result=he)}),P._status===-1&&(P._status=0,P._result=ee)}if(P._status===1)return P._result.default;throw P._result}var Fe=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},We={map:ce,forEach:function(P,ee,he){ce(P,function(){ee.apply(this,arguments)},he)},count:function(P){var ee=0;return ce(P,function(){ee++}),ee},toArray:function(P){return ce(P,function(ee){return ee})||[]},only:function(P){if(!D(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return Se.Activity=T,Se.Children=We,Se.Component=me,Se.Fragment=t,Se.Profiler=a,Se.PureComponent=G,Se.StrictMode=i,Se.Suspense=p,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,Se.__COMPILER_RUNTIME={__proto__:null,c:function(P){return A.H.useMemoCache(P)}},Se.cache=function(P){return function(){return P.apply(null,arguments)}},Se.cacheSignal=function(){return null},Se.cloneElement=function(P,ee,he){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var pe=$({},P.props),Ie=P.key;if(ee!=null)for(De in ee.key!==void 0&&(Ie=""+ee.key),ee)!S.call(ee,De)||De==="key"||De==="__self"||De==="__source"||De==="ref"&&ee.ref===void 0||(pe[De]=ee[De]);var De=arguments.length-2;if(De===1)pe.children=he;else if(1<De){for(var Be=Array(De),Qt=0;Qt<De;Qt++)Be[Qt]=arguments[Qt+2];pe.children=Be}return R(P.type,Ie,pe)},Se.createContext=function(P){return P={$$typeof:c,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:l,_context:P},P},Se.createElement=function(P,ee,he){var pe,Ie={},De=null;if(ee!=null)for(pe in ee.key!==void 0&&(De=""+ee.key),ee)S.call(ee,pe)&&pe!=="key"&&pe!=="__self"&&pe!=="__source"&&(Ie[pe]=ee[pe]);var Be=arguments.length-2;if(Be===1)Ie.children=he;else if(1<Be){for(var Qt=Array(Be),dt=0;dt<Be;dt++)Qt[dt]=arguments[dt+2];Ie.children=Qt}if(P&&P.defaultProps)for(pe in Be=P.defaultProps,Be)Ie[pe]===void 0&&(Ie[pe]=Be[pe]);return R(P,De,Ie)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(P){return{$$typeof:f,render:P}},Se.isValidElement=D,Se.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:Te}},Se.memo=function(P,ee){return{$$typeof:g,type:P,compare:ee===void 0?null:ee}},Se.startTransition=function(P){var ee=A.T,he={};A.T=he;try{var pe=P(),Ie=A.S;Ie!==null&&Ie(he,pe),typeof pe=="object"&&pe!==null&&typeof pe.then=="function"&&pe.then(le,Fe)}catch(De){Fe(De)}finally{ee!==null&&he.types!==null&&(ee.types=he.types),A.T=ee}},Se.unstable_useCacheRefresh=function(){return A.H.useCacheRefresh()},Se.use=function(P){return A.H.use(P)},Se.useActionState=function(P,ee,he){return A.H.useActionState(P,ee,he)},Se.useCallback=function(P,ee){return A.H.useCallback(P,ee)},Se.useContext=function(P){return A.H.useContext(P)},Se.useDebugValue=function(){},Se.useDeferredValue=function(P,ee){return A.H.useDeferredValue(P,ee)},Se.useEffect=function(P,ee){return A.H.useEffect(P,ee)},Se.useEffectEvent=function(P){return A.H.useEffectEvent(P)},Se.useId=function(){return A.H.useId()},Se.useImperativeHandle=function(P,ee,he){return A.H.useImperativeHandle(P,ee,he)},Se.useInsertionEffect=function(P,ee){return A.H.useInsertionEffect(P,ee)},Se.useLayoutEffect=function(P,ee){return A.H.useLayoutEffect(P,ee)},Se.useMemo=function(P,ee){return A.H.useMemo(P,ee)},Se.useOptimistic=function(P,ee){return A.H.useOptimistic(P,ee)},Se.useReducer=function(P,ee,he){return A.H.useReducer(P,ee,he)},Se.useRef=function(P){return A.H.useRef(P)},Se.useState=function(P){return A.H.useState(P)},Se.useSyncExternalStore=function(P,ee,he){return A.H.useSyncExternalStore(P,ee,he)},Se.useTransition=function(){return A.H.useTransition()},Se.version="19.2.3",Se}var wb;function fy(){return wb||(wb=1,t_.exports=CN()),t_.exports}var vt=fy();const NN=UA(vt);var n_={exports:{}},Ec={},i_={exports:{}},r_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bb;function DN(){return bb||(bb=1,(function(r){function e(W,ce){var Te=W.length;W.push(ce);e:for(;0<Te;){var Fe=Te-1>>>1,We=W[Fe];if(0<a(We,ce))W[Fe]=ce,W[Te]=We,Te=Fe;else break e}}function t(W){return W.length===0?null:W[0]}function i(W){if(W.length===0)return null;var ce=W[0],Te=W.pop();if(Te!==ce){W[0]=Te;e:for(var Fe=0,We=W.length,P=We>>>1;Fe<P;){var ee=2*(Fe+1)-1,he=W[ee],pe=ee+1,Ie=W[pe];if(0>a(he,Te))pe<We&&0>a(Ie,he)?(W[Fe]=Ie,W[pe]=Te,Fe=pe):(W[Fe]=he,W[ee]=Te,Fe=ee);else if(pe<We&&0>a(Ie,Te))W[Fe]=Ie,W[pe]=Te,Fe=pe;else break e}}return ce}function a(W,ce){var Te=W.sortIndex-ce.sortIndex;return Te!==0?Te:W.id-ce.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],g=[],v=1,T=null,I=3,O=!1,Q=!1,$=!1,X=!1,me=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function se(W){for(var ce=t(g);ce!==null;){if(ce.callback===null)i(g);else if(ce.startTime<=W)i(g),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=t(g)}}function de(W){if($=!1,se(W),!Q)if(t(p)!==null)Q=!0,le||(le=!0,k());else{var ce=t(g);ce!==null&&wt(de,ce.startTime-W)}}var le=!1,A=-1,S=5,R=-1;function x(){return X?!0:!(r.unstable_now()-R<S)}function D(){if(X=!1,le){var W=r.unstable_now();R=W;var ce=!0;try{e:{Q=!1,$&&($=!1,ne(A),A=-1),O=!0;var Te=I;try{t:{for(se(W),T=t(p);T!==null&&!(T.expirationTime>W&&x());){var Fe=T.callback;if(typeof Fe=="function"){T.callback=null,I=T.priorityLevel;var We=Fe(T.expirationTime<=W);if(W=r.unstable_now(),typeof We=="function"){T.callback=We,se(W),ce=!0;break t}T===t(p)&&i(p),se(W)}else i(p);T=t(p)}if(T!==null)ce=!0;else{var P=t(g);P!==null&&wt(de,P.startTime-W),ce=!1}}break e}finally{T=null,I=Te,O=!1}ce=void 0}}finally{ce?k():le=!1}}}var k;if(typeof G=="function")k=function(){G(D)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,$e=C.port2;C.port1.onmessage=D,k=function(){$e.postMessage(null)}}else k=function(){me(D,0)};function wt(W,ce){A=me(function(){W(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(W){W.callback=null},r.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<W?Math.floor(1e3/W):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_next=function(W){switch(I){case 1:case 2:case 3:var ce=3;break;default:ce=I}var Te=I;I=ce;try{return W()}finally{I=Te}},r.unstable_requestPaint=function(){X=!0},r.unstable_runWithPriority=function(W,ce){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Te=I;I=W;try{return ce()}finally{I=Te}},r.unstable_scheduleCallback=function(W,ce,Te){var Fe=r.unstable_now();switch(typeof Te=="object"&&Te!==null?(Te=Te.delay,Te=typeof Te=="number"&&0<Te?Fe+Te:Fe):Te=Fe,W){case 1:var We=-1;break;case 2:We=250;break;case 5:We=1073741823;break;case 4:We=1e4;break;default:We=5e3}return We=Te+We,W={id:v++,callback:ce,priorityLevel:W,startTime:Te,expirationTime:We,sortIndex:-1},Te>Fe?(W.sortIndex=Te,e(g,W),t(p)===null&&W===t(g)&&($?(ne(A),A=-1):$=!0,wt(de,Te-Fe))):(W.sortIndex=We,e(p,W),Q||O||(Q=!0,le||(le=!0,k()))),W},r.unstable_shouldYield=x,r.unstable_wrapCallback=function(W){var ce=I;return function(){var Te=I;I=ce;try{return W.apply(this,arguments)}finally{I=Te}}}})(r_)),r_}var Ib;function xN(){return Ib||(Ib=1,i_.exports=DN()),i_.exports}var s_={exports:{}},gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ab;function VN(){if(Ab)return gn;Ab=1;var r=fy();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:v}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,gn.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},gn.flushSync=function(p){var g=c.T,v=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=g,i.p=v,i.d.f()}},gn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},gn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},gn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,T=f(v,g.crossOrigin),I=typeof g.integrity=="string"?g.integrity:void 0,O=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:I,fetchPriority:O}):v==="script"&&i.d.X(p,{crossOrigin:T,integrity:I,fetchPriority:O,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},gn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=f(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},gn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,T=f(v,g.crossOrigin);i.d.L(p,v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},gn.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=f(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},gn.requestFormReset=function(p){i.d.r(p)},gn.unstable_batchedUpdates=function(p,g){return p(g)},gn.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},gn.useFormStatus=function(){return c.H.useHostTransitionStatus()},gn.version="19.2.3",gn}var Sb;function PN(){if(Sb)return s_.exports;Sb=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),s_.exports=VN(),s_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rb;function ON(){if(Rb)return Ec;Rb=1;var r=xN(),e=fy(),t=PN();function i(n){var s="https://react.dev/errors/"+n;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function c(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function f(n){if(n.tag===31){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function p(n){if(l(n)!==n)throw Error(i(188))}function g(n){var s=n.alternate;if(!s){if(s=l(n),s===null)throw Error(i(188));return s!==n?null:n}for(var o=n,u=s;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return p(d),n;if(m===u)return p(d),s;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=d,u=m;else{for(var y=!1,w=d.child;w;){if(w===o){y=!0,o=d,u=m;break}if(w===u){y=!0,u=d,o=m;break}w=w.sibling}if(!y){for(w=m.child;w;){if(w===o){y=!0,o=m,u=d;break}if(w===u){y=!0,u=m,o=d;break}w=w.sibling}if(!y)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:s}function v(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n;for(n=n.child;n!==null;){if(s=v(n),s!==null)return s;n=n.sibling}return null}var T=Object.assign,I=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),ne=Symbol.for("react.consumer"),G=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),x=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function k(n){return n===null||typeof n!="object"?null:(n=D&&n[D]||n["@@iterator"],typeof n=="function"?n:null)}var C=Symbol.for("react.client.reference");function $e(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===C?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case $:return"Fragment";case me:return"Profiler";case X:return"StrictMode";case de:return"Suspense";case le:return"SuspenseList";case R:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case Q:return"Portal";case G:return n.displayName||"Context";case ne:return(n._context.displayName||"Context")+".Consumer";case se:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case A:return s=n.displayName||null,s!==null?s:$e(n.type)||"Memo";case S:s=n._payload,n=n._init;try{return $e(n(s))}catch{}}return null}var wt=Array.isArray,W=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Te={pending:!1,data:null,method:null,action:null},Fe=[],We=-1;function P(n){return{current:n}}function ee(n){0>We||(n.current=Fe[We],Fe[We]=null,We--)}function he(n,s){We++,Fe[We]=n.current,n.current=s}var pe=P(null),Ie=P(null),De=P(null),Be=P(null);function Qt(n,s){switch(he(De,s),he(Ie,n),he(pe,null),s.nodeType){case 9:case 11:n=(n=s.documentElement)&&(n=n.namespaceURI)?Fw(n):0;break;default:if(n=s.tagName,s=s.namespaceURI)s=Fw(s),n=qw(s,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ee(pe),he(pe,n)}function dt(){ee(pe),ee(Ie),ee(De)}function ha(n){n.memoizedState!==null&&he(Be,n);var s=pe.current,o=qw(s,n.type);s!==o&&(he(Ie,n),he(pe,o))}function Io(n){Ie.current===n&&(ee(pe),ee(Ie)),Be.current===n&&(ee(Be),pc._currentValue=Te)}var Ao,So;function Mi(n){if(Ao===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Ao=s&&s[1]||"",So=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ao+n+So}var pu=!1;function da(n,s){if(!n||pu)return"";pu=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(K){var F=K}Reflect.construct(n,[],Z)}else{try{Z.call()}catch(K){F=K}n.call(Z.prototype)}}else{try{throw Error()}catch(K){F=K}(Z=n())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(K){if(K&&F&&typeof K.stack=="string")return[K.stack,F.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),y=m[0],w=m[1];if(y&&w){var N=y.split(`
`),j=w.split(`
`);for(d=u=0;u<N.length&&!N[u].includes("DetermineComponentFrameRoot");)u++;for(;d<j.length&&!j[d].includes("DetermineComponentFrameRoot");)d++;if(u===N.length||d===j.length)for(u=N.length-1,d=j.length-1;1<=u&&0<=d&&N[u]!==j[d];)d--;for(;1<=u&&0<=d;u--,d--)if(N[u]!==j[d]){if(u!==1||d!==1)do if(u--,d--,0>d||N[u]!==j[d]){var Y=`
`+N[u].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=u&&0<=d);break}}}finally{pu=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Mi(o):""}function gu(n,s){switch(n.tag){case 26:case 27:case 5:return Mi(n.type);case 16:return Mi("Lazy");case 13:return n.child!==s&&s!==null?Mi("Suspense Fallback"):Mi("Suspense");case 19:return Mi("SuspenseList");case 0:case 15:return da(n.type,!1);case 11:return da(n.type.render,!1);case 1:return da(n.type,!0);case 31:return Mi("Activity");default:return""}}function _u(n){try{var s="",o=null;do s+=gu(n,o),o=n,n=n.return;while(n);return s}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var kt=Object.prototype.hasOwnProperty,Yt=r.unstable_scheduleCallback,Zr=r.unstable_cancelCallback,np=r.unstable_shouldYield,Gh=r.unstable_requestPaint,wn=r.unstable_now,fa=r.unstable_getCurrentPriorityLevel,yu=r.unstable_ImmediatePriority,vu=r.unstable_UserBlockingPriority,es=r.unstable_NormalPriority,ip=r.unstable_LowPriority,Kh=r.unstable_IdlePriority,Qh=r.log,Yh=r.unstable_setDisableYieldValue,yi=null,an=null;function ti(n){if(typeof Qh=="function"&&Yh(n),an&&typeof an.setStrictMode=="function")try{an.setStrictMode(yi,n)}catch{}}var Ct=Math.clz32?Math.clz32:Wh,$h=Math.log,Ro=Math.LN2;function Wh(n){return n>>>=0,n===0?32:31-($h(n)/Ro|0)|0}var Li=256,ma=262144,Mt=4194304;function Ui(n){var s=n&42;if(s!==0)return s;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function zi(n,s,o){var u=n.pendingLanes;if(u===0)return 0;var d=0,m=n.suspendedLanes,y=n.pingedLanes;n=n.warmLanes;var w=u&134217727;return w!==0?(u=w&~m,u!==0?d=Ui(u):(y&=w,y!==0?d=Ui(y):o||(o=w&~n,o!==0&&(d=Ui(o))))):(w=u&~m,w!==0?d=Ui(w):y!==0?d=Ui(y):o||(o=u&~n,o!==0&&(d=Ui(o)))),d===0?0:s!==0&&s!==d&&(s&m)===0&&(m=d&-d,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:d}function vi(n,s){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&s)===0}function rp(n,s){switch(n){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xh(){var n=Mt;return Mt<<=1,(Mt&62914560)===0&&(Mt=4194304),n}function Bi(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function pa(n,s){n.pendingLanes|=s,s!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function sp(n,s,o,u,d,m){var y=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var w=n.entanglements,N=n.expirationTimes,j=n.hiddenUpdates;for(o=y&~o;0<o;){var Y=31-Ct(o),Z=1<<Y;w[Y]=0,N[Y]=-1;var F=j[Y];if(F!==null)for(j[Y]=null,Y=0;Y<F.length;Y++){var K=F[Y];K!==null&&(K.lane&=-536870913)}o&=~Z}u!==0&&ga(n,u,0),m!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=m&~(y&~s))}function ga(n,s,o){n.pendingLanes|=s,n.suspendedLanes&=~s;var u=31-Ct(s);n.entangledLanes|=s,n.entanglements[u]=n.entanglements[u]|1073741824|o&261930}function Eu(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-Ct(o),d=1<<u;d&s|n[u]&s&&(n[u]|=s),o&=~d}}function Tu(n,s){var o=s&-s;return o=(o&42)!==0?1:_a(o),(o&(n.suspendedLanes|s))!==0?0:o}function _a(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Tr(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Jh(){var n=ce.p;return n!==0?n:(n=window.event,n===void 0?32:db(n.type))}function Ei(n,s){var o=ce.p;try{return ce.p=n,s()}finally{ce.p=o}}var Ti=Math.random().toString(36).slice(2),Lt="__reactFiber$"+Ti,Jt="__reactProps$"+Ti,ji="__reactContainer$"+Ti,Co="__reactEvents$"+Ti,ap="__reactListeners$"+Ti,Zh="__reactHandles$"+Ti,ed="__reactResources$"+Ti,Fi="__reactMarker$"+Ti;function No(n){delete n[Lt],delete n[Jt],delete n[Co],delete n[ap],delete n[Zh]}function qi(n){var s=n[Lt];if(s)return s;for(var o=n.parentNode;o;){if(s=o[ji]||o[Lt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=Ww(n);n!==null;){if(o=n[Lt])return o;n=Ww(n)}return s}n=o,o=n.parentNode}return null}function ni(n){if(n=n[Lt]||n[ji]){var s=n.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return n}return null}function jn(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n.stateNode;throw Error(i(33))}function Hi(n){var s=n[ed];return s||(s=n[ed]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Ut(n){n[Fi]=!0}var wu=new Set,bu={};function Gi(n,s){Ki(n,s),Ki(n+"Capture",s)}function Ki(n,s){for(bu[n]=s,n=0;n<s.length;n++)wu.add(s[n])}var Iu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Au={},Su={};function td(n){return kt.call(Su,n)?!0:kt.call(Au,n)?!1:Iu.test(n)?Su[n]=!0:(Au[n]=!0,!1)}function Do(n,s,o){if(td(s))if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(s);return}}n.setAttribute(s,""+o)}}function Fn(n,s,o){if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttribute(s,""+o)}}function zt(n,s,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(s,o,""+u)}}function Zt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ts(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ru(n,s,o){var u=Object.getOwnPropertyDescriptor(n.constructor.prototype,s);if(!n.hasOwnProperty(s)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var d=u.get,m=u.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(y){o=""+y,m.call(this,y)}}),Object.defineProperty(n,s,{enumerable:u.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Xe(n){if(!n._valueTracker){var s=ts(n)?"checked":"value";n._valueTracker=Ru(n,s,""+n[s])}}function ya(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=ts(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function Qi(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var va=/[\n"\\]/g;function Dn(n){return n.replace(va,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function xo(n,s,o,u,d,m,y,w){n.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?n.type=y:n.removeAttribute("type"),s!=null?y==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+Zt(s)):n.value!==""+Zt(s)&&(n.value=""+Zt(s)):y!=="submit"&&y!=="reset"||n.removeAttribute("value"),s!=null?Cu(n,y,Zt(s)):o!=null?Cu(n,y,Zt(o)):u!=null&&n.removeAttribute("value"),d==null&&m!=null&&(n.defaultChecked=!!m),d!=null&&(n.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.name=""+Zt(w):n.removeAttribute("name")}function nd(n,s,o,u,d,m,y,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){Xe(n);return}o=o!=null?""+Zt(o):"",s=s!=null?""+Zt(s):o,w||s===n.value||(n.value=s),n.defaultValue=s}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=w?n.checked:!!u,n.defaultChecked=!!u,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(n.name=y),Xe(n)}function Cu(n,s,o){s==="number"&&Qi(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function ns(n,s,o,u){if(n=n.options,s){s={};for(var d=0;d<o.length;d++)s["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=s.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Zt(o),s=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function id(n,s,o){if(s!=null&&(s=""+Zt(s),s!==n.value&&(n.value=s),o==null)){n.defaultValue!==s&&(n.defaultValue=s);return}n.defaultValue=o!=null?""+Zt(o):""}function is(n,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(i(92));if(wt(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=Zt(s),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u),Xe(n)}function xn(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var rd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nu(n,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(s,""):s==="float"?n.cssFloat="":n[s]="":u?n.setProperty(s,o):typeof o!="number"||o===0||rd.has(s)?s==="float"?n.cssFloat=o:n[s]=(""+o).trim():n[s]=o+"px"}function Du(n,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var d in s)u=s[d],s.hasOwnProperty(d)&&o[d]!==u&&Nu(n,d,u)}else for(var m in s)s.hasOwnProperty(m)&&Nu(n,m,s[m])}function Vo(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rs=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Po(n){return rs.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function wi(){}var xu=null;function ii(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ss=null,Yi=null;function Ea(n){var s=ni(n);if(s&&(n=s.stateNode)){var o=n[Jt]||null;e:switch(n=s.stateNode,s.type){case"input":if(xo(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Dn(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var d=u[Jt]||null;if(!d)throw Error(i(90));xo(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===n.form&&ya(u)}break e;case"textarea":id(n,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&ns(n,!!o.multiple,s,!1)}}}var Oo=!1;function as(n,s,o){if(Oo)return n(s,o);Oo=!0;try{var u=n(s);return u}finally{if(Oo=!1,(ss!==null||Yi!==null)&&(Jd(),ss&&(s=ss,n=Yi,Yi=ss=null,Ea(s),n)))for(s=0;s<n.length;s++)Ea(n[s])}}function bi(n,s){var o=n.stateNode;if(o===null)return null;var u=o[Jt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ta=!1;if(ri)try{var nt={};Object.defineProperty(nt,"passive",{get:function(){Ta=!0}}),window.addEventListener("test",nt,nt),window.removeEventListener("test",nt,nt)}catch{Ta=!1}var $i=null,Vu=null,wa=null;function Pu(){if(wa)return wa;var n,s=Vu,o=s.length,u,d="value"in $i?$i.value:$i.textContent,m=d.length;for(n=0;n<o&&s[n]===d[n];n++);var y=o-n;for(u=1;u<=y&&s[o-u]===d[m-u];u++);return wa=d.slice(n,1<u?1-u:void 0)}function ba(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function wr(){return!0}function Ii(){return!1}function on(n){function s(o,u,d,m,y){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=y,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(o=n[w],this[w]=o?o(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?wr:Ii,this.isPropagationStopped=Ii,this}return T(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),s}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wi=on(br),os=T({},br,{view:0,detail:0}),Ou=on(os),ls,ko,Xi,Mo=T({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xi&&(Xi&&n.type==="mousemove"?(ls=n.screenX-Xi.screenX,ko=n.screenY-Xi.screenY):ko=ls=0,Xi=n),ls)},movementY:function(n){return"movementY"in n?n.movementY:ko}}),ku=on(Mo),Ia=T({},Mo,{dataTransfer:0}),ad=on(Ia),od=T({},os,{relatedTarget:0}),Aa=on(od),Mu=T({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),ld=on(Mu),Lo=T({},br,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ud=on(Lo),cd=T({},br,{data:0}),Ji=on(cd),hd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function md(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=fd[n])?!!s[n]:!1}function us(){return md}var bn=T({},os,{key:function(n){if(n.key){var s=hd[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=ba(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dd[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(n){return n.type==="keypress"?ba(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ba(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),pd=on(bn),gd=T({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ir=on(gd),h=T({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),_=on(h),E=T({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),b=on(E),z=T({},Mo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),H=on(z),ae=T({},br,{newState:0,oldState:0}),Re=on(ae),Nt=[9,13,27,32],Ke=ri&&"CompositionEvent"in window,ft=null;ri&&"documentMode"in document&&(ft=document.documentMode);var si=ri&&"TextEvent"in window&&!ft,Zi=ri&&(!Ke||ft&&8<ft&&11>=ft),Ai=" ",Si=!1;function Sa(n,s){switch(n){case"keyup":return Nt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uo(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var zo=!1;function W1(n,s){switch(n){case"compositionend":return Uo(s);case"keypress":return s.which!==32?null:(Si=!0,Ai);case"textInput":return n=s.data,n===Ai&&Si?null:n;default:return null}}function X1(n,s){if(zo)return n==="compositionend"||!Ke&&Sa(n,s)?(n=Pu(),wa=Vu=$i=null,zo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Zi&&s.locale!=="ko"?null:s.data;default:return null}}var J1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zv(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!J1[n.type]:s==="textarea"}function eE(n,s,o,u){ss?Yi?Yi.push(u):Yi=[u]:ss=u,s=af(s,"onChange"),0<s.length&&(o=new Wi("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var Lu=null,Uu=null;function Z1(n){Mw(n,0)}function _d(n){var s=jn(n);if(ya(s))return n}function tE(n,s){if(n==="change")return s}var nE=!1;if(ri){var op;if(ri){var lp="oninput"in document;if(!lp){var iE=document.createElement("div");iE.setAttribute("oninput","return;"),lp=typeof iE.oninput=="function"}op=lp}else op=!1;nE=op&&(!document.documentMode||9<document.documentMode)}function rE(){Lu&&(Lu.detachEvent("onpropertychange",sE),Uu=Lu=null)}function sE(n){if(n.propertyName==="value"&&_d(Uu)){var s=[];eE(s,Uu,n,ii(n)),as(Z1,s)}}function eC(n,s,o){n==="focusin"?(rE(),Lu=s,Uu=o,Lu.attachEvent("onpropertychange",sE)):n==="focusout"&&rE()}function tC(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _d(Uu)}function nC(n,s){if(n==="click")return _d(s)}function iC(n,s){if(n==="input"||n==="change")return _d(s)}function rC(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var qn=typeof Object.is=="function"?Object.is:rC;function zu(n,s){if(qn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!kt.call(s,d)||!qn(n[d],s[d]))return!1}return!0}function aE(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function oE(n,s){var o=aE(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=aE(o)}}function lE(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?lE(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function uE(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var s=Qi(n.document);s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=Qi(n.document)}return s}function up(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}var sC=ri&&"documentMode"in document&&11>=document.documentMode,Bo=null,cp=null,Bu=null,hp=!1;function cE(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hp||Bo==null||Bo!==Qi(u)||(u=Bo,"selectionStart"in u&&up(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Bu&&zu(Bu,u)||(Bu=u,u=af(cp,"onSelect"),0<u.length&&(s=new Wi("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=Bo)))}function Ra(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var jo={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionrun:Ra("Transition","TransitionRun"),transitionstart:Ra("Transition","TransitionStart"),transitioncancel:Ra("Transition","TransitionCancel"),transitionend:Ra("Transition","TransitionEnd")},dp={},hE={};ri&&(hE=document.createElement("div").style,"AnimationEvent"in window||(delete jo.animationend.animation,delete jo.animationiteration.animation,delete jo.animationstart.animation),"TransitionEvent"in window||delete jo.transitionend.transition);function Ca(n){if(dp[n])return dp[n];if(!jo[n])return n;var s=jo[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in hE)return dp[n]=s[o];return n}var dE=Ca("animationend"),fE=Ca("animationiteration"),mE=Ca("animationstart"),aC=Ca("transitionrun"),oC=Ca("transitionstart"),lC=Ca("transitioncancel"),pE=Ca("transitionend"),gE=new Map,fp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fp.push("scrollEnd");function Ri(n,s){gE.set(n,s),Gi(s,[n])}var yd=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},ai=[],Fo=0,mp=0;function vd(){for(var n=Fo,s=mp=Fo=0;s<n;){var o=ai[s];ai[s++]=null;var u=ai[s];ai[s++]=null;var d=ai[s];ai[s++]=null;var m=ai[s];if(ai[s++]=null,u!==null&&d!==null){var y=u.pending;y===null?d.next=d:(d.next=y.next,y.next=d),u.pending=d}m!==0&&_E(o,d,m)}}function Ed(n,s,o,u){ai[Fo++]=n,ai[Fo++]=s,ai[Fo++]=o,ai[Fo++]=u,mp|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function pp(n,s,o,u){return Ed(n,s,o,u),Td(n)}function Na(n,s){return Ed(n,null,null,s),Td(n)}function _E(n,s,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var d=!1,m=n.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(d=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,d&&s!==null&&(d=31-Ct(o),n=m.hiddenUpdates,u=n[d],u===null?n[d]=[s]:u.push(s),s.lane=o|536870912),m):null}function Td(n){if(50<lc)throw lc=0,Ig=null,Error(i(185));for(var s=n.return;s!==null;)n=s,s=n.return;return n.tag===3?n.stateNode:null}var qo={};function uC(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(n,s,o,u){return new uC(n,s,o,u)}function gp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ar(n,s){var o=n.alternate;return o===null?(o=Hn(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function yE(n,s){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=s,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,s=o.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),n}function wd(n,s,o,u,d,m){var y=0;if(u=n,typeof n=="function")gp(n)&&(y=1);else if(typeof n=="string")y=mN(n,o,pe.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case R:return n=Hn(31,o,s,d),n.elementType=R,n.lanes=m,n;case $:return Da(o.children,d,m,s);case X:y=8,d|=24;break;case me:return n=Hn(12,o,s,d|2),n.elementType=me,n.lanes=m,n;case de:return n=Hn(13,o,s,d),n.elementType=de,n.lanes=m,n;case le:return n=Hn(19,o,s,d),n.elementType=le,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case G:y=10;break e;case ne:y=9;break e;case se:y=11;break e;case A:y=14;break e;case S:y=16,u=null;break e}y=29,o=Error(i(130,n===null?"null":typeof n,"")),u=null}return s=Hn(y,o,s,d),s.elementType=n,s.type=u,s.lanes=m,s}function Da(n,s,o,u){return n=Hn(7,n,u,s),n.lanes=o,n}function _p(n,s,o){return n=Hn(6,n,null,s),n.lanes=o,n}function vE(n){var s=Hn(18,null,null,0);return s.stateNode=n,s}function yp(n,s,o){return s=Hn(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}var EE=new WeakMap;function oi(n,s){if(typeof n=="object"&&n!==null){var o=EE.get(n);return o!==void 0?o:(s={value:n,source:s,stack:_u(s)},EE.set(n,s),s)}return{value:n,source:s,stack:_u(s)}}var Ho=[],Go=0,bd=null,ju=0,li=[],ui=0,cs=null,er=1,tr="";function Sr(n,s){Ho[Go++]=ju,Ho[Go++]=bd,bd=n,ju=s}function TE(n,s,o){li[ui++]=er,li[ui++]=tr,li[ui++]=cs,cs=n;var u=er;n=tr;var d=32-Ct(u)-1;u&=~(1<<d),o+=1;var m=32-Ct(s)+d;if(30<m){var y=d-d%5;m=(u&(1<<y)-1).toString(32),u>>=y,d-=y,er=1<<32-Ct(s)+d|o<<d|u,tr=m+n}else er=1<<m|o<<d|u,tr=n}function vp(n){n.return!==null&&(Sr(n,1),TE(n,1,0))}function Ep(n){for(;n===bd;)bd=Ho[--Go],Ho[Go]=null,ju=Ho[--Go],Ho[Go]=null;for(;n===cs;)cs=li[--ui],li[ui]=null,tr=li[--ui],li[ui]=null,er=li[--ui],li[ui]=null}function wE(n,s){li[ui++]=er,li[ui++]=tr,li[ui++]=cs,er=s.id,tr=s.overflow,cs=n}var ln=null,ut=null,ze=!1,hs=null,ci=!1,Tp=Error(i(519));function ds(n){var s=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fu(oi(s,n)),Tp}function bE(n){var s=n.stateNode,o=n.type,u=n.memoizedProps;switch(s[Lt]=n,s[Jt]=u,o){case"dialog":Pe("cancel",s),Pe("close",s);break;case"iframe":case"object":case"embed":Pe("load",s);break;case"video":case"audio":for(o=0;o<cc.length;o++)Pe(cc[o],s);break;case"source":Pe("error",s);break;case"img":case"image":case"link":Pe("error",s),Pe("load",s);break;case"details":Pe("toggle",s);break;case"input":Pe("invalid",s),nd(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":Pe("invalid",s);break;case"textarea":Pe("invalid",s),is(s,u.value,u.defaultValue,u.children)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||Bw(s.textContent,o)?(u.popover!=null&&(Pe("beforetoggle",s),Pe("toggle",s)),u.onScroll!=null&&Pe("scroll",s),u.onScrollEnd!=null&&Pe("scrollend",s),u.onClick!=null&&(s.onclick=wi),s=!0):s=!1,s||ds(n,!0)}function IE(n){for(ln=n.return;ln;)switch(ln.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:ln=ln.return}}function Ko(n){if(n!==ln)return!1;if(!ze)return IE(n),ze=!0,!1;var s=n.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||zg(n.type,n.memoizedProps)),o=!o),o&&ut&&ds(n),IE(n),s===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));ut=$w(n)}else if(s===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));ut=$w(n)}else s===27?(s=ut,Ss(n.type)?(n=Hg,Hg=null,ut=n):ut=s):ut=ln?di(n.stateNode.nextSibling):null;return!0}function xa(){ut=ln=null,ze=!1}function wp(){var n=hs;return n!==null&&(kn===null?kn=n:kn.push.apply(kn,n),hs=null),n}function Fu(n){hs===null?hs=[n]:hs.push(n)}var bp=P(null),Va=null,Rr=null;function fs(n,s,o){he(bp,s._currentValue),s._currentValue=o}function Cr(n){n._currentValue=bp.current,ee(bp)}function Ip(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function Ap(n,s,o,u){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var m=d.dependencies;if(m!==null){var y=d.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=d;for(var N=0;N<s.length;N++)if(w.context===s[N]){m.lanes|=o,w=m.alternate,w!==null&&(w.lanes|=o),Ip(m.return,o,n),u||(y=null);break e}m=w.next}}else if(d.tag===18){if(y=d.return,y===null)throw Error(i(341));y.lanes|=o,m=y.alternate,m!==null&&(m.lanes|=o),Ip(y,o,n),y=null}else y=d.child;if(y!==null)y.return=d;else for(y=d;y!==null;){if(y===n){y=null;break}if(d=y.sibling,d!==null){d.return=y.return,y=d;break}y=y.return}d=y}}function Qo(n,s,o,u){n=null;for(var d=s,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var y=d.alternate;if(y===null)throw Error(i(387));if(y=y.memoizedProps,y!==null){var w=d.type;qn(d.pendingProps.value,y.value)||(n!==null?n.push(w):n=[w])}}else if(d===Be.current){if(y=d.alternate,y===null)throw Error(i(387));y.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(pc):n=[pc])}d=d.return}n!==null&&Ap(s,n,o,u),s.flags|=262144}function Id(n){for(n=n.firstContext;n!==null;){if(!qn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Pa(n){Va=n,Rr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function un(n){return AE(Va,n)}function Ad(n,s){return Va===null&&Pa(n),AE(n,s)}function AE(n,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Rr===null){if(n===null)throw Error(i(308));Rr=s,n.dependencies={lanes:0,firstContext:s},n.flags|=524288}else Rr=Rr.next=s;return o}var cC=typeof AbortController<"u"?AbortController:function(){var n=[],s=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){s.aborted=!0,n.forEach(function(o){return o()})}},hC=r.unstable_scheduleCallback,dC=r.unstable_NormalPriority,Bt={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sp(){return{controller:new cC,data:new Map,refCount:0}}function qu(n){n.refCount--,n.refCount===0&&hC(dC,function(){n.controller.abort()})}var Hu=null,Rp=0,Yo=0,$o=null;function fC(n,s){if(Hu===null){var o=Hu=[];Rp=0,Yo=Dg(),$o={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Rp++,s.then(SE,SE),s}function SE(){if(--Rp===0&&Hu!==null){$o!==null&&($o.status="fulfilled");var n=Hu;Hu=null,Yo=0,$o=null;for(var s=0;s<n.length;s++)(0,n[s])()}}function mC(n,s){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return n.then(function(){u.status="fulfilled",u.value=s;for(var d=0;d<o.length;d++)(0,o[d])(s)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var RE=W.S;W.S=function(n,s){cw=wn(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&fC(n,s),RE!==null&&RE(n,s)};var Oa=P(null);function Cp(){var n=Oa.current;return n!==null?n:at.pooledCache}function Sd(n,s){s===null?he(Oa,Oa.current):he(Oa,s.pool)}function CE(){var n=Cp();return n===null?null:{parent:Bt._currentValue,pool:n}}var Wo=Error(i(460)),Np=Error(i(474)),Rd=Error(i(542)),Cd={then:function(){}};function NE(n){return n=n.status,n==="fulfilled"||n==="rejected"}function DE(n,s,o){switch(o=n[o],o===void 0?n.push(s):o!==s&&(s.then(wi,wi),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,VE(n),n;default:if(typeof s.status=="string")s.then(wi,wi);else{if(n=at,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=s,n.status="pending",n.then(function(u){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=u}},function(u){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,VE(n),n}throw Ma=s,Wo}}function ka(n){try{var s=n._init;return s(n._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Ma=o,Wo):o}}var Ma=null;function xE(){if(Ma===null)throw Error(i(459));var n=Ma;return Ma=null,n}function VE(n){if(n===Wo||n===Rd)throw Error(i(483))}var Xo=null,Gu=0;function Nd(n){var s=Gu;return Gu+=1,Xo===null&&(Xo=[]),DE(Xo,n,s)}function Ku(n,s){s=s.props.ref,n.ref=s!==void 0?s:null}function Dd(n,s){throw s.$$typeof===I?Error(i(525)):(n=Object.prototype.toString.call(s),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n)))}function PE(n){function s(L,V){if(n){var B=L.deletions;B===null?(L.deletions=[V],L.flags|=16):B.push(V)}}function o(L,V){if(!n)return null;for(;V!==null;)s(L,V),V=V.sibling;return null}function u(L){for(var V=new Map;L!==null;)L.key!==null?V.set(L.key,L):V.set(L.index,L),L=L.sibling;return V}function d(L,V){return L=Ar(L,V),L.index=0,L.sibling=null,L}function m(L,V,B){return L.index=B,n?(B=L.alternate,B!==null?(B=B.index,B<V?(L.flags|=67108866,V):B):(L.flags|=67108866,V)):(L.flags|=1048576,V)}function y(L){return n&&L.alternate===null&&(L.flags|=67108866),L}function w(L,V,B,J){return V===null||V.tag!==6?(V=_p(B,L.mode,J),V.return=L,V):(V=d(V,B),V.return=L,V)}function N(L,V,B,J){var Ee=B.type;return Ee===$?Y(L,V,B.props.children,J,B.key):V!==null&&(V.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===S&&ka(Ee)===V.type)?(V=d(V,B.props),Ku(V,B),V.return=L,V):(V=wd(B.type,B.key,B.props,null,L.mode,J),Ku(V,B),V.return=L,V)}function j(L,V,B,J){return V===null||V.tag!==4||V.stateNode.containerInfo!==B.containerInfo||V.stateNode.implementation!==B.implementation?(V=yp(B,L.mode,J),V.return=L,V):(V=d(V,B.children||[]),V.return=L,V)}function Y(L,V,B,J,Ee){return V===null||V.tag!==7?(V=Da(B,L.mode,J,Ee),V.return=L,V):(V=d(V,B),V.return=L,V)}function Z(L,V,B){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=_p(""+V,L.mode,B),V.return=L,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case O:return B=wd(V.type,V.key,V.props,null,L.mode,B),Ku(B,V),B.return=L,B;case Q:return V=yp(V,L.mode,B),V.return=L,V;case S:return V=ka(V),Z(L,V,B)}if(wt(V)||k(V))return V=Da(V,L.mode,B,null),V.return=L,V;if(typeof V.then=="function")return Z(L,Nd(V),B);if(V.$$typeof===G)return Z(L,Ad(L,V),B);Dd(L,V)}return null}function F(L,V,B,J){var Ee=V!==null?V.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return Ee!==null?null:w(L,V,""+B,J);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case O:return B.key===Ee?N(L,V,B,J):null;case Q:return B.key===Ee?j(L,V,B,J):null;case S:return B=ka(B),F(L,V,B,J)}if(wt(B)||k(B))return Ee!==null?null:Y(L,V,B,J,null);if(typeof B.then=="function")return F(L,V,Nd(B),J);if(B.$$typeof===G)return F(L,V,Ad(L,B),J);Dd(L,B)}return null}function K(L,V,B,J,Ee){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return L=L.get(B)||null,w(V,L,""+J,Ee);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case O:return L=L.get(J.key===null?B:J.key)||null,N(V,L,J,Ee);case Q:return L=L.get(J.key===null?B:J.key)||null,j(V,L,J,Ee);case S:return J=ka(J),K(L,V,B,J,Ee)}if(wt(J)||k(J))return L=L.get(B)||null,Y(V,L,J,Ee,null);if(typeof J.then=="function")return K(L,V,B,Nd(J),Ee);if(J.$$typeof===G)return K(L,V,B,Ad(V,J),Ee);Dd(V,J)}return null}function ge(L,V,B,J){for(var Ee=null,qe=null,ye=V,xe=V=0,Le=null;ye!==null&&xe<B.length;xe++){ye.index>xe?(Le=ye,ye=null):Le=ye.sibling;var He=F(L,ye,B[xe],J);if(He===null){ye===null&&(ye=Le);break}n&&ye&&He.alternate===null&&s(L,ye),V=m(He,V,xe),qe===null?Ee=He:qe.sibling=He,qe=He,ye=Le}if(xe===B.length)return o(L,ye),ze&&Sr(L,xe),Ee;if(ye===null){for(;xe<B.length;xe++)ye=Z(L,B[xe],J),ye!==null&&(V=m(ye,V,xe),qe===null?Ee=ye:qe.sibling=ye,qe=ye);return ze&&Sr(L,xe),Ee}for(ye=u(ye);xe<B.length;xe++)Le=K(ye,L,xe,B[xe],J),Le!==null&&(n&&Le.alternate!==null&&ye.delete(Le.key===null?xe:Le.key),V=m(Le,V,xe),qe===null?Ee=Le:qe.sibling=Le,qe=Le);return n&&ye.forEach(function(xs){return s(L,xs)}),ze&&Sr(L,xe),Ee}function be(L,V,B,J){if(B==null)throw Error(i(151));for(var Ee=null,qe=null,ye=V,xe=V=0,Le=null,He=B.next();ye!==null&&!He.done;xe++,He=B.next()){ye.index>xe?(Le=ye,ye=null):Le=ye.sibling;var xs=F(L,ye,He.value,J);if(xs===null){ye===null&&(ye=Le);break}n&&ye&&xs.alternate===null&&s(L,ye),V=m(xs,V,xe),qe===null?Ee=xs:qe.sibling=xs,qe=xs,ye=Le}if(He.done)return o(L,ye),ze&&Sr(L,xe),Ee;if(ye===null){for(;!He.done;xe++,He=B.next())He=Z(L,He.value,J),He!==null&&(V=m(He,V,xe),qe===null?Ee=He:qe.sibling=He,qe=He);return ze&&Sr(L,xe),Ee}for(ye=u(ye);!He.done;xe++,He=B.next())He=K(ye,L,xe,He.value,J),He!==null&&(n&&He.alternate!==null&&ye.delete(He.key===null?xe:He.key),V=m(He,V,xe),qe===null?Ee=He:qe.sibling=He,qe=He);return n&&ye.forEach(function(AN){return s(L,AN)}),ze&&Sr(L,xe),Ee}function st(L,V,B,J){if(typeof B=="object"&&B!==null&&B.type===$&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case O:e:{for(var Ee=B.key;V!==null;){if(V.key===Ee){if(Ee=B.type,Ee===$){if(V.tag===7){o(L,V.sibling),J=d(V,B.props.children),J.return=L,L=J;break e}}else if(V.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===S&&ka(Ee)===V.type){o(L,V.sibling),J=d(V,B.props),Ku(J,B),J.return=L,L=J;break e}o(L,V);break}else s(L,V);V=V.sibling}B.type===$?(J=Da(B.props.children,L.mode,J,B.key),J.return=L,L=J):(J=wd(B.type,B.key,B.props,null,L.mode,J),Ku(J,B),J.return=L,L=J)}return y(L);case Q:e:{for(Ee=B.key;V!==null;){if(V.key===Ee)if(V.tag===4&&V.stateNode.containerInfo===B.containerInfo&&V.stateNode.implementation===B.implementation){o(L,V.sibling),J=d(V,B.children||[]),J.return=L,L=J;break e}else{o(L,V);break}else s(L,V);V=V.sibling}J=yp(B,L.mode,J),J.return=L,L=J}return y(L);case S:return B=ka(B),st(L,V,B,J)}if(wt(B))return ge(L,V,B,J);if(k(B)){if(Ee=k(B),typeof Ee!="function")throw Error(i(150));return B=Ee.call(B),be(L,V,B,J)}if(typeof B.then=="function")return st(L,V,Nd(B),J);if(B.$$typeof===G)return st(L,V,Ad(L,B),J);Dd(L,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,V!==null&&V.tag===6?(o(L,V.sibling),J=d(V,B),J.return=L,L=J):(o(L,V),J=_p(B,L.mode,J),J.return=L,L=J),y(L)):o(L,V)}return function(L,V,B,J){try{Gu=0;var Ee=st(L,V,B,J);return Xo=null,Ee}catch(ye){if(ye===Wo||ye===Rd)throw ye;var qe=Hn(29,ye,null,L.mode);return qe.lanes=J,qe.return=L,qe}finally{}}}var La=PE(!0),OE=PE(!1),ms=!1;function Dp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ps(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function gs(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Qe&2)!==0){var d=u.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s,s=Td(n),_E(n,null,o),s}return Ed(n,u,s,o),Td(n)}function Qu(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Eu(n,o)}}function Vp(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var y={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=y:m=m.next=y,o=o.next}while(o!==null);m===null?d=m=s:m=m.next=s}else d=m=s;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}var Pp=!1;function Yu(){if(Pp){var n=$o;if(n!==null)throw n}}function $u(n,s,o,u){Pp=!1;var d=n.updateQueue;ms=!1;var m=d.firstBaseUpdate,y=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var N=w,j=N.next;N.next=null,y===null?m=j:y.next=j,y=N;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,w=Y.lastBaseUpdate,w!==y&&(w===null?Y.firstBaseUpdate=j:w.next=j,Y.lastBaseUpdate=N))}if(m!==null){var Z=d.baseState;y=0,Y=j=N=null,w=m;do{var F=w.lane&-536870913,K=F!==w.lane;if(K?(Me&F)===F:(u&F)===F){F!==0&&F===Yo&&(Pp=!0),Y!==null&&(Y=Y.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ge=n,be=w;F=s;var st=o;switch(be.tag){case 1:if(ge=be.payload,typeof ge=="function"){Z=ge.call(st,Z,F);break e}Z=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=be.payload,F=typeof ge=="function"?ge.call(st,Z,F):ge,F==null)break e;Z=T({},Z,F);break e;case 2:ms=!0}}F=w.callback,F!==null&&(n.flags|=64,K&&(n.flags|=8192),K=d.callbacks,K===null?d.callbacks=[F]:K.push(F))}else K={lane:F,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Y===null?(j=Y=K,N=Z):Y=Y.next=K,y|=F;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;K=w,w=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);Y===null&&(N=Z),d.baseState=N,d.firstBaseUpdate=j,d.lastBaseUpdate=Y,m===null&&(d.shared.lanes=0),Ts|=y,n.lanes=y,n.memoizedState=Z}}function kE(n,s){if(typeof n!="function")throw Error(i(191,n));n.call(s)}function ME(n,s){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)kE(o[n],s)}var Jo=P(null),xd=P(0);function LE(n,s){n=Lr,he(xd,n),he(Jo,s),Lr=n|s.baseLanes}function Op(){he(xd,Lr),he(Jo,Jo.current)}function kp(){Lr=xd.current,ee(Jo),ee(xd)}var Gn=P(null),hi=null;function _s(n){var s=n.alternate;he(Dt,Dt.current&1),he(Gn,n),hi===null&&(s===null||Jo.current!==null||s.memoizedState!==null)&&(hi=n)}function Mp(n){he(Dt,Dt.current),he(Gn,n),hi===null&&(hi=n)}function UE(n){n.tag===22?(he(Dt,Dt.current),he(Gn,n),hi===null&&(hi=n)):ys()}function ys(){he(Dt,Dt.current),he(Gn,Gn.current)}function Kn(n){ee(Gn),hi===n&&(hi=null),ee(Dt)}var Dt=P(0);function Vd(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Fg(o)||qg(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Nr=0,Ce=null,it=null,jt=null,Pd=!1,Zo=!1,Ua=!1,Od=0,Wu=0,el=null,pC=0;function bt(){throw Error(i(321))}function Lp(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!qn(n[o],s[o]))return!1;return!0}function Up(n,s,o,u,d,m){return Nr=m,Ce=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,W.H=n===null||n.memoizedState===null?TT:Zp,Ua=!1,m=o(u,d),Ua=!1,Zo&&(m=BE(s,o,u,d)),zE(n),m}function zE(n){W.H=Zu;var s=it!==null&&it.next!==null;if(Nr=0,jt=it=Ce=null,Pd=!1,Wu=0,el=null,s)throw Error(i(300));n===null||Ft||(n=n.dependencies,n!==null&&Id(n)&&(Ft=!0))}function BE(n,s,o,u){Ce=n;var d=0;do{if(Zo&&(el=null),Wu=0,Zo=!1,25<=d)throw Error(i(301));if(d+=1,jt=it=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}W.H=wT,m=s(o,u)}while(Zo);return m}function gC(){var n=W.H,s=n.useState()[0];return s=typeof s.then=="function"?Xu(s):s,n=n.useState()[0],(it!==null?it.memoizedState:null)!==n&&(Ce.flags|=1024),s}function zp(){var n=Od!==0;return Od=0,n}function Bp(n,s,o){s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~o}function jp(n){if(Pd){for(n=n.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Pd=!1}Nr=0,jt=it=Ce=null,Zo=!1,Wu=Od=0,el=null}function In(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Ce.memoizedState=jt=n:jt=jt.next=n,jt}function xt(){if(it===null){var n=Ce.alternate;n=n!==null?n.memoizedState:null}else n=it.next;var s=jt===null?Ce.memoizedState:jt.next;if(s!==null)jt=s,it=n;else{if(n===null)throw Ce.alternate===null?Error(i(467)):Error(i(310));it=n,n={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},jt===null?Ce.memoizedState=jt=n:jt=jt.next=n}return jt}function kd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xu(n){var s=Wu;return Wu+=1,el===null&&(el=[]),n=DE(el,n,s),s=Ce,(jt===null?s.memoizedState:jt.next)===null&&(s=s.alternate,W.H=s===null||s.memoizedState===null?TT:Zp),n}function Md(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Xu(n);if(n.$$typeof===G)return un(n)}throw Error(i(438,String(n)))}function Fp(n){var s=null,o=Ce.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ce.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=kd(),Ce.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(n),u=0;u<n;u++)o[u]=x;return s.index++,o}function Dr(n,s){return typeof s=="function"?s(n):s}function Ld(n){var s=xt();return qp(s,it,n)}function qp(n,s,o){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var d=n.baseQueue,m=u.pending;if(m!==null){if(d!==null){var y=d.next;d.next=m.next,m.next=y}s.baseQueue=d=m,u.pending=null}if(m=n.baseState,d===null)n.memoizedState=m;else{s=d.next;var w=y=null,N=null,j=s,Y=!1;do{var Z=j.lane&-536870913;if(Z!==j.lane?(Me&Z)===Z:(Nr&Z)===Z){var F=j.revertLane;if(F===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),Z===Yo&&(Y=!0);else if((Nr&F)===F){j=j.next,F===Yo&&(Y=!0);continue}else Z={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},N===null?(w=N=Z,y=m):N=N.next=Z,Ce.lanes|=F,Ts|=F;Z=j.action,Ua&&o(m,Z),m=j.hasEagerState?j.eagerState:o(m,Z)}else F={lane:Z,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},N===null?(w=N=F,y=m):N=N.next=F,Ce.lanes|=Z,Ts|=Z;j=j.next}while(j!==null&&j!==s);if(N===null?y=m:N.next=w,!qn(m,n.memoizedState)&&(Ft=!0,Y&&(o=$o,o!==null)))throw o;n.memoizedState=m,n.baseState=y,n.baseQueue=N,u.lastRenderedState=m}return d===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Hp(n){var s=xt(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=s.memoizedState;if(d!==null){o.pending=null;var y=d=d.next;do m=n(m,y.action),y=y.next;while(y!==d);qn(m,s.memoizedState)||(Ft=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,u]}function jE(n,s,o){var u=Ce,d=xt(),m=ze;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var y=!qn((it||d).memoizedState,o);if(y&&(d.memoizedState=o,Ft=!0),d=d.queue,Qp(HE.bind(null,u,d,n),[n]),d.getSnapshot!==s||y||jt!==null&&jt.memoizedState.tag&1){if(u.flags|=2048,tl(9,{destroy:void 0},qE.bind(null,u,d,o,s),null),at===null)throw Error(i(349));m||(Nr&127)!==0||FE(u,s,o)}return o}function FE(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=Ce.updateQueue,s===null?(s=kd(),Ce.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function qE(n,s,o,u){s.value=o,s.getSnapshot=u,GE(s)&&KE(n)}function HE(n,s,o){return o(function(){GE(s)&&KE(n)})}function GE(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!qn(n,o)}catch{return!0}}function KE(n){var s=Na(n,2);s!==null&&Mn(s,n,2)}function Gp(n){var s=In();if(typeof n=="function"){var o=n;if(n=o(),Ua){ti(!0);try{o()}finally{ti(!1)}}}return s.memoizedState=s.baseState=n,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:n},s}function QE(n,s,o,u){return n.baseState=o,qp(n,it,typeof u=="function"?u:Dr)}function _C(n,s,o,u,d){if(Bd(n))throw Error(i(485));if(n=s.action,n!==null){var m={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){m.listeners.push(y)}};W.T!==null?o(!0):m.isTransition=!1,u(m),o=s.pending,o===null?(m.next=s.pending=m,YE(s,m)):(m.next=o.next,s.pending=o.next=m)}}function YE(n,s){var o=s.action,u=s.payload,d=n.state;if(s.isTransition){var m=W.T,y={};W.T=y;try{var w=o(d,u),N=W.S;N!==null&&N(y,w),$E(n,s,w)}catch(j){Kp(n,s,j)}finally{m!==null&&y.types!==null&&(m.types=y.types),W.T=m}}else try{m=o(d,u),$E(n,s,m)}catch(j){Kp(n,s,j)}}function $E(n,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){WE(n,s,u)},function(u){return Kp(n,s,u)}):WE(n,s,o)}function WE(n,s,o){s.status="fulfilled",s.value=o,XE(s),n.state=o,s=n.pending,s!==null&&(o=s.next,o===s?n.pending=null:(o=o.next,s.next=o,YE(n,o)))}function Kp(n,s,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,XE(s),s=s.next;while(s!==u)}n.action=null}function XE(n){n=n.listeners;for(var s=0;s<n.length;s++)(0,n[s])()}function JE(n,s){return s}function ZE(n,s){if(ze){var o=at.formState;if(o!==null){e:{var u=Ce;if(ze){if(ut){t:{for(var d=ut,m=ci;d.nodeType!==8;){if(!m){d=null;break t}if(d=di(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){ut=di(d.nextSibling),u=d.data==="F!";break e}}ds(u)}u=!1}u&&(s=o[0])}}return o=In(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:JE,lastRenderedState:s},o.queue=u,o=yT.bind(null,Ce,u),u.dispatch=o,u=Gp(!1),m=Jp.bind(null,Ce,!1,u.queue),u=In(),d={state:s,dispatch:null,action:n,pending:null},u.queue=d,o=_C.bind(null,Ce,d,m,o),d.dispatch=o,u.memoizedState=n,[s,o,!1]}function eT(n){var s=xt();return tT(s,it,n)}function tT(n,s,o){if(s=qp(n,s,JE)[0],n=Ld(Dr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Xu(s)}catch(y){throw y===Wo?Rd:y}else u=s;s=xt();var d=s.queue,m=d.dispatch;return o!==s.memoizedState&&(Ce.flags|=2048,tl(9,{destroy:void 0},yC.bind(null,d,o),null)),[u,m,n]}function yC(n,s){n.action=s}function nT(n){var s=xt(),o=it;if(o!==null)return tT(s,o,n);xt(),s=s.memoizedState,o=xt();var u=o.queue.dispatch;return o.memoizedState=n,[s,u,!1]}function tl(n,s,o,u){return n={tag:n,create:o,deps:u,inst:s,next:null},s=Ce.updateQueue,s===null&&(s=kd(),Ce.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n),n}function iT(){return xt().memoizedState}function Ud(n,s,o,u){var d=In();Ce.flags|=n,d.memoizedState=tl(1|s,{destroy:void 0},o,u===void 0?null:u)}function zd(n,s,o,u){var d=xt();u=u===void 0?null:u;var m=d.memoizedState.inst;it!==null&&u!==null&&Lp(u,it.memoizedState.deps)?d.memoizedState=tl(s,m,o,u):(Ce.flags|=n,d.memoizedState=tl(1|s,m,o,u))}function rT(n,s){Ud(8390656,8,n,s)}function Qp(n,s){zd(2048,8,n,s)}function vC(n){Ce.flags|=4;var s=Ce.updateQueue;if(s===null)s=kd(),Ce.updateQueue=s,s.events=[n];else{var o=s.events;o===null?s.events=[n]:o.push(n)}}function sT(n){var s=xt().memoizedState;return vC({ref:s,nextImpl:n}),function(){if((Qe&2)!==0)throw Error(i(440));return s.impl.apply(void 0,arguments)}}function aT(n,s){return zd(4,2,n,s)}function oT(n,s){return zd(4,4,n,s)}function lT(n,s){if(typeof s=="function"){n=n();var o=s(n);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function uT(n,s,o){o=o!=null?o.concat([n]):null,zd(4,4,lT.bind(null,s,n),o)}function Yp(){}function cT(n,s){var o=xt();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Lp(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function hT(n,s){var o=xt();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Lp(s,u[1]))return u[0];if(u=n(),Ua){ti(!0);try{n()}finally{ti(!1)}}return o.memoizedState=[u,s],u}function $p(n,s,o){return o===void 0||(Nr&1073741824)!==0&&(Me&261930)===0?n.memoizedState=s:(n.memoizedState=o,n=dw(),Ce.lanes|=n,Ts|=n,o)}function dT(n,s,o,u){return qn(o,s)?o:Jo.current!==null?(n=$p(n,o,u),qn(n,s)||(Ft=!0),n):(Nr&42)===0||(Nr&1073741824)!==0&&(Me&261930)===0?(Ft=!0,n.memoizedState=o):(n=dw(),Ce.lanes|=n,Ts|=n,s)}function fT(n,s,o,u,d){var m=ce.p;ce.p=m!==0&&8>m?m:8;var y=W.T,w={};W.T=w,Jp(n,!1,s,o);try{var N=d(),j=W.S;if(j!==null&&j(w,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var Y=mC(N,u);Ju(n,s,Y,$n(n))}else Ju(n,s,u,$n(n))}catch(Z){Ju(n,s,{then:function(){},status:"rejected",reason:Z},$n())}finally{ce.p=m,y!==null&&w.types!==null&&(y.types=w.types),W.T=y}}function EC(){}function Wp(n,s,o,u){if(n.tag!==5)throw Error(i(476));var d=mT(n).queue;fT(n,d,s,Te,o===null?EC:function(){return pT(n),o(u)})}function mT(n){var s=n.memoizedState;if(s!==null)return s;s={memoizedState:Te,baseState:Te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:Te},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:o},next:null},n.memoizedState=s,n=n.alternate,n!==null&&(n.memoizedState=s),s}function pT(n){var s=mT(n);s.next===null&&(s=n.alternate.memoizedState),Ju(n,s.next.queue,{},$n())}function Xp(){return un(pc)}function gT(){return xt().memoizedState}function _T(){return xt().memoizedState}function TC(n){for(var s=n.return;s!==null;){switch(s.tag){case 24:case 3:var o=$n();n=ps(o);var u=gs(s,n,o);u!==null&&(Mn(u,s,o),Qu(u,s,o)),s={cache:Sp()},n.payload=s;return}s=s.return}}function wC(n,s,o){var u=$n();o={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Bd(n)?vT(s,o):(o=pp(n,s,o,u),o!==null&&(Mn(o,n,u),ET(o,s,u)))}function yT(n,s,o){var u=$n();Ju(n,s,o,u)}function Ju(n,s,o,u){var d={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Bd(n))vT(s,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var y=s.lastRenderedState,w=m(y,o);if(d.hasEagerState=!0,d.eagerState=w,qn(w,y))return Ed(n,s,d,0),at===null&&vd(),!1}catch{}finally{}if(o=pp(n,s,d,u),o!==null)return Mn(o,n,u),ET(o,s,u),!0}return!1}function Jp(n,s,o,u){if(u={lane:2,revertLane:Dg(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Bd(n)){if(s)throw Error(i(479))}else s=pp(n,o,u,2),s!==null&&Mn(s,n,2)}function Bd(n){var s=n.alternate;return n===Ce||s!==null&&s===Ce}function vT(n,s){Zo=Pd=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function ET(n,s,o){if((o&4194048)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Eu(n,o)}}var Zu={readContext:un,use:Md,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useLayoutEffect:bt,useInsertionEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useSyncExternalStore:bt,useId:bt,useHostTransitionStatus:bt,useFormState:bt,useActionState:bt,useOptimistic:bt,useMemoCache:bt,useCacheRefresh:bt};Zu.useEffectEvent=bt;var TT={readContext:un,use:Md,useCallback:function(n,s){return In().memoizedState=[n,s===void 0?null:s],n},useContext:un,useEffect:rT,useImperativeHandle:function(n,s,o){o=o!=null?o.concat([n]):null,Ud(4194308,4,lT.bind(null,s,n),o)},useLayoutEffect:function(n,s){return Ud(4194308,4,n,s)},useInsertionEffect:function(n,s){Ud(4,2,n,s)},useMemo:function(n,s){var o=In();s=s===void 0?null:s;var u=n();if(Ua){ti(!0);try{n()}finally{ti(!1)}}return o.memoizedState=[u,s],u},useReducer:function(n,s,o){var u=In();if(o!==void 0){var d=o(s);if(Ua){ti(!0);try{o(s)}finally{ti(!1)}}}else d=s;return u.memoizedState=u.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},u.queue=n,n=n.dispatch=wC.bind(null,Ce,n),[u.memoizedState,n]},useRef:function(n){var s=In();return n={current:n},s.memoizedState=n},useState:function(n){n=Gp(n);var s=n.queue,o=yT.bind(null,Ce,s);return s.dispatch=o,[n.memoizedState,o]},useDebugValue:Yp,useDeferredValue:function(n,s){var o=In();return $p(o,n,s)},useTransition:function(){var n=Gp(!1);return n=fT.bind(null,Ce,n.queue,!0,!1),In().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,s,o){var u=Ce,d=In();if(ze){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),at===null)throw Error(i(349));(Me&127)!==0||FE(u,s,o)}d.memoizedState=o;var m={value:o,getSnapshot:s};return d.queue=m,rT(HE.bind(null,u,m,n),[n]),u.flags|=2048,tl(9,{destroy:void 0},qE.bind(null,u,m,o,s),null),o},useId:function(){var n=In(),s=at.identifierPrefix;if(ze){var o=tr,u=er;o=(u&~(1<<32-Ct(u)-1)).toString(32)+o,s="_"+s+"R_"+o,o=Od++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=pC++,s="_"+s+"r_"+o.toString(32)+"_";return n.memoizedState=s},useHostTransitionStatus:Xp,useFormState:ZE,useActionState:ZE,useOptimistic:function(n){var s=In();s.memoizedState=s.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Jp.bind(null,Ce,!0,o),o.dispatch=s,[n,s]},useMemoCache:Fp,useCacheRefresh:function(){return In().memoizedState=TC.bind(null,Ce)},useEffectEvent:function(n){var s=In(),o={impl:n};return s.memoizedState=o,function(){if((Qe&2)!==0)throw Error(i(440));return o.impl.apply(void 0,arguments)}}},Zp={readContext:un,use:Md,useCallback:cT,useContext:un,useEffect:Qp,useImperativeHandle:uT,useInsertionEffect:aT,useLayoutEffect:oT,useMemo:hT,useReducer:Ld,useRef:iT,useState:function(){return Ld(Dr)},useDebugValue:Yp,useDeferredValue:function(n,s){var o=xt();return dT(o,it.memoizedState,n,s)},useTransition:function(){var n=Ld(Dr)[0],s=xt().memoizedState;return[typeof n=="boolean"?n:Xu(n),s]},useSyncExternalStore:jE,useId:gT,useHostTransitionStatus:Xp,useFormState:eT,useActionState:eT,useOptimistic:function(n,s){var o=xt();return QE(o,it,n,s)},useMemoCache:Fp,useCacheRefresh:_T};Zp.useEffectEvent=sT;var wT={readContext:un,use:Md,useCallback:cT,useContext:un,useEffect:Qp,useImperativeHandle:uT,useInsertionEffect:aT,useLayoutEffect:oT,useMemo:hT,useReducer:Hp,useRef:iT,useState:function(){return Hp(Dr)},useDebugValue:Yp,useDeferredValue:function(n,s){var o=xt();return it===null?$p(o,n,s):dT(o,it.memoizedState,n,s)},useTransition:function(){var n=Hp(Dr)[0],s=xt().memoizedState;return[typeof n=="boolean"?n:Xu(n),s]},useSyncExternalStore:jE,useId:gT,useHostTransitionStatus:Xp,useFormState:nT,useActionState:nT,useOptimistic:function(n,s){var o=xt();return it!==null?QE(o,it,n,s):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Fp,useCacheRefresh:_T};wT.useEffectEvent=sT;function eg(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:T({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var tg={enqueueSetState:function(n,s,o){n=n._reactInternals;var u=$n(),d=ps(u);d.payload=s,o!=null&&(d.callback=o),s=gs(n,d,u),s!==null&&(Mn(s,n,u),Qu(s,n,u))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=$n(),d=ps(u);d.tag=1,d.payload=s,o!=null&&(d.callback=o),s=gs(n,d,u),s!==null&&(Mn(s,n,u),Qu(s,n,u))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=$n(),u=ps(o);u.tag=2,s!=null&&(u.callback=s),s=gs(n,u,o),s!==null&&(Mn(s,n,o),Qu(s,n,o))}};function bT(n,s,o,u,d,m,y){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,y):s.prototype&&s.prototype.isPureReactComponent?!zu(o,u)||!zu(d,m):!0}function IT(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&tg.enqueueReplaceState(s,s.state,null)}function za(n,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(n=n.defaultProps){o===s&&(o=T({},o));for(var d in n)o[d]===void 0&&(o[d]=n[d])}return o}function AT(n){yd(n)}function ST(n){console.error(n)}function RT(n){yd(n)}function jd(n,s){try{var o=n.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function CT(n,s,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function ng(n,s,o){return o=ps(o),o.tag=3,o.payload={element:null},o.callback=function(){jd(n,s)},o}function NT(n){return n=ps(n),n.tag=3,n}function DT(n,s,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=u.value;n.payload=function(){return d(m)},n.callback=function(){CT(s,o,u)}}var y=o.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(n.callback=function(){CT(s,o,u),typeof d!="function"&&(ws===null?ws=new Set([this]):ws.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function bC(n,s,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&Qo(s,o,d,!0),o=Gn.current,o!==null){switch(o.tag){case 31:case 13:return hi===null?Zd():o.alternate===null&&It===0&&(It=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===Cd?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),Rg(n,u,d)),!1;case 22:return o.flags|=65536,u===Cd?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),Rg(n,u,d)),!1}throw Error(i(435,o.tag))}return Rg(n,u,d),Zd(),!1}if(ze)return s=Gn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,u!==Tp&&(n=Error(i(422),{cause:u}),Fu(oi(n,o)))):(u!==Tp&&(s=Error(i(423),{cause:u}),Fu(oi(s,o))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,u=oi(u,o),d=ng(n.stateNode,u,d),Vp(n,d),It!==4&&(It=2)),!1;var m=Error(i(520),{cause:u});if(m=oi(m,o),oc===null?oc=[m]:oc.push(m),It!==4&&(It=2),s===null)return!0;u=oi(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,n=d&-d,o.lanes|=n,n=ng(o.stateNode,u,n),Vp(o,n),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ws===null||!ws.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=NT(d),DT(d,n,o,u),Vp(o,d),!1}o=o.return}while(o!==null);return!1}var ig=Error(i(461)),Ft=!1;function cn(n,s,o,u){s.child=n===null?OE(s,null,o,u):La(s,n.child,o,u)}function xT(n,s,o,u,d){o=o.render;var m=s.ref;if("ref"in u){var y={};for(var w in u)w!=="ref"&&(y[w]=u[w])}else y=u;return Pa(s),u=Up(n,s,o,y,m,d),w=zp(),n!==null&&!Ft?(Bp(n,s,d),xr(n,s,d)):(ze&&w&&vp(s),s.flags|=1,cn(n,s,u,d),s.child)}function VT(n,s,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!gp(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,PT(n,s,m,u,d)):(n=wd(o.type,null,u,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(m=n.child,!hg(n,d)){var y=m.memoizedProps;if(o=o.compare,o=o!==null?o:zu,o(y,u)&&n.ref===s.ref)return xr(n,s,d)}return s.flags|=1,n=Ar(m,u),n.ref=s.ref,n.return=s,s.child=n}function PT(n,s,o,u,d){if(n!==null){var m=n.memoizedProps;if(zu(m,u)&&n.ref===s.ref)if(Ft=!1,s.pendingProps=u=m,hg(n,d))(n.flags&131072)!==0&&(Ft=!0);else return s.lanes=n.lanes,xr(n,s,d)}return rg(n,s,o,u,d)}function OT(n,s,o,u){var d=u.children,m=n!==null?n.memoizedState:null;if(n===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,n!==null){for(u=s.child=n.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;u=d&~m}else u=0,s.child=null;return kT(n,s,m,o,u)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},n!==null&&Sd(s,m!==null?m.cachePool:null),m!==null?LE(s,m):Op(),UE(s);else return u=s.lanes=536870912,kT(n,s,m!==null?m.baseLanes|o:o,o,u)}else m!==null?(Sd(s,m.cachePool),LE(s,m),ys(),s.memoizedState=null):(n!==null&&Sd(s,null),Op(),ys());return cn(n,s,d,o),s.child}function ec(n,s){return n!==null&&n.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function kT(n,s,o,u,d){var m=Cp();return m=m===null?null:{parent:Bt._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},n!==null&&Sd(s,null),Op(),UE(s),n!==null&&Qo(n,s,u,!0),s.childLanes=d,null}function Fd(n,s){return s=Hd({mode:s.mode,children:s.children},n.mode),s.ref=n.ref,n.child=s,s.return=n,s}function MT(n,s,o){return La(s,n.child,null,o),n=Fd(s,s.pendingProps),n.flags|=2,Kn(s),s.memoizedState=null,n}function IC(n,s,o){var u=s.pendingProps,d=(s.flags&128)!==0;if(s.flags&=-129,n===null){if(ze){if(u.mode==="hidden")return n=Fd(s,u),s.lanes=536870912,ec(null,n);if(Mp(s),(n=ut)?(n=Yw(n,ci),n=n!==null&&n.data==="&"?n:null,n!==null&&(s.memoizedState={dehydrated:n,treeContext:cs!==null?{id:er,overflow:tr}:null,retryLane:536870912,hydrationErrors:null},o=vE(n),o.return=s,s.child=o,ln=s,ut=null)):n=null,n===null)throw ds(s);return s.lanes=536870912,null}return Fd(s,u)}var m=n.memoizedState;if(m!==null){var y=m.dehydrated;if(Mp(s),d)if(s.flags&256)s.flags&=-257,s=MT(n,s,o);else if(s.memoizedState!==null)s.child=n.child,s.flags|=128,s=null;else throw Error(i(558));else if(Ft||Qo(n,s,o,!1),d=(o&n.childLanes)!==0,Ft||d){if(u=at,u!==null&&(y=Tu(u,o),y!==0&&y!==m.retryLane))throw m.retryLane=y,Na(n,y),Mn(u,n,y),ig;Zd(),s=MT(n,s,o)}else n=m.treeContext,ut=di(y.nextSibling),ln=s,ze=!0,hs=null,ci=!1,n!==null&&wE(s,n),s=Fd(s,u),s.flags|=4096;return s}return n=Ar(n.child,{mode:u.mode,children:u.children}),n.ref=s.ref,s.child=n,n.return=s,n}function qd(n,s){var o=s.ref;if(o===null)n!==null&&n.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(s.flags|=4194816)}}function rg(n,s,o,u,d){return Pa(s),o=Up(n,s,o,u,void 0,d),u=zp(),n!==null&&!Ft?(Bp(n,s,d),xr(n,s,d)):(ze&&u&&vp(s),s.flags|=1,cn(n,s,o,d),s.child)}function LT(n,s,o,u,d,m){return Pa(s),s.updateQueue=null,o=BE(s,u,o,d),zE(n),u=zp(),n!==null&&!Ft?(Bp(n,s,m),xr(n,s,m)):(ze&&u&&vp(s),s.flags|=1,cn(n,s,o,m),s.child)}function UT(n,s,o,u,d){if(Pa(s),s.stateNode===null){var m=qo,y=o.contextType;typeof y=="object"&&y!==null&&(m=un(y)),m=new o(u,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=tg,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=u,m.state=s.memoizedState,m.refs={},Dp(s),y=o.contextType,m.context=typeof y=="object"&&y!==null?un(y):qo,m.state=s.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(eg(s,o,y,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(y=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),y!==m.state&&tg.enqueueReplaceState(m,m.state,null),$u(s,u,m,d),Yu(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(n===null){m=s.stateNode;var w=s.memoizedProps,N=za(o,w);m.props=N;var j=m.context,Y=o.contextType;y=qo,typeof Y=="object"&&Y!==null&&(y=un(Y));var Z=o.getDerivedStateFromProps;Y=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=s.pendingProps!==w,Y||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||j!==y)&&IT(s,m,u,y),ms=!1;var F=s.memoizedState;m.state=F,$u(s,u,m,d),Yu(),j=s.memoizedState,w||F!==j||ms?(typeof Z=="function"&&(eg(s,o,Z,u),j=s.memoizedState),(N=ms||bT(s,o,N,u,F,j,y))?(Y||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=j),m.props=u,m.state=j,m.context=y,u=N):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{m=s.stateNode,xp(n,s),y=s.memoizedProps,Y=za(o,y),m.props=Y,Z=s.pendingProps,F=m.context,j=o.contextType,N=qo,typeof j=="object"&&j!==null&&(N=un(j)),w=o.getDerivedStateFromProps,(j=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==Z||F!==N)&&IT(s,m,u,N),ms=!1,F=s.memoizedState,m.state=F,$u(s,u,m,d),Yu();var K=s.memoizedState;y!==Z||F!==K||ms||n!==null&&n.dependencies!==null&&Id(n.dependencies)?(typeof w=="function"&&(eg(s,o,w,u),K=s.memoizedState),(Y=ms||bT(s,o,Y,u,F,K,N)||n!==null&&n.dependencies!==null&&Id(n.dependencies))?(j||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,K,N),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,K,N)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===n.memoizedProps&&F===n.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===n.memoizedProps&&F===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=K),m.props=u,m.state=K,m.context=N,u=Y):(typeof m.componentDidUpdate!="function"||y===n.memoizedProps&&F===n.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===n.memoizedProps&&F===n.memoizedState||(s.flags|=1024),u=!1)}return m=u,qd(n,s),u=(s.flags&128)!==0,m||u?(m=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,n!==null&&u?(s.child=La(s,n.child,null,d),s.child=La(s,null,o,d)):cn(n,s,o,d),s.memoizedState=m.state,n=s.child):n=xr(n,s,d),n}function zT(n,s,o,u){return xa(),s.flags|=256,cn(n,s,o,u),s.child}var sg={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ag(n){return{baseLanes:n,cachePool:CE()}}function og(n,s,o){return n=n!==null?n.childLanes&~o:0,s&&(n|=Yn),n}function BT(n,s,o){var u=s.pendingProps,d=!1,m=(s.flags&128)!==0,y;if((y=m)||(y=n!==null&&n.memoizedState===null?!1:(Dt.current&2)!==0),y&&(d=!0,s.flags&=-129),y=(s.flags&32)!==0,s.flags&=-33,n===null){if(ze){if(d?_s(s):ys(),(n=ut)?(n=Yw(n,ci),n=n!==null&&n.data!=="&"?n:null,n!==null&&(s.memoizedState={dehydrated:n,treeContext:cs!==null?{id:er,overflow:tr}:null,retryLane:536870912,hydrationErrors:null},o=vE(n),o.return=s,s.child=o,ln=s,ut=null)):n=null,n===null)throw ds(s);return qg(n)?s.lanes=32:s.lanes=536870912,null}var w=u.children;return u=u.fallback,d?(ys(),d=s.mode,w=Hd({mode:"hidden",children:w},d),u=Da(u,d,o,null),w.return=s,u.return=s,w.sibling=u,s.child=w,u=s.child,u.memoizedState=ag(o),u.childLanes=og(n,y,o),s.memoizedState=sg,ec(null,u)):(_s(s),lg(s,w))}var N=n.memoizedState;if(N!==null&&(w=N.dehydrated,w!==null)){if(m)s.flags&256?(_s(s),s.flags&=-257,s=ug(n,s,o)):s.memoizedState!==null?(ys(),s.child=n.child,s.flags|=128,s=null):(ys(),w=u.fallback,d=s.mode,u=Hd({mode:"visible",children:u.children},d),w=Da(w,d,o,null),w.flags|=2,u.return=s,w.return=s,u.sibling=w,s.child=u,La(s,n.child,null,o),u=s.child,u.memoizedState=ag(o),u.childLanes=og(n,y,o),s.memoizedState=sg,s=ec(null,u));else if(_s(s),qg(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var j=y.dgst;y=j,u=Error(i(419)),u.stack="",u.digest=y,Fu({value:u,source:null,stack:null}),s=ug(n,s,o)}else if(Ft||Qo(n,s,o,!1),y=(o&n.childLanes)!==0,Ft||y){if(y=at,y!==null&&(u=Tu(y,o),u!==0&&u!==N.retryLane))throw N.retryLane=u,Na(n,u),Mn(y,n,u),ig;Fg(w)||Zd(),s=ug(n,s,o)}else Fg(w)?(s.flags|=192,s.child=n.child,s=null):(n=N.treeContext,ut=di(w.nextSibling),ln=s,ze=!0,hs=null,ci=!1,n!==null&&wE(s,n),s=lg(s,u.children),s.flags|=4096);return s}return d?(ys(),w=u.fallback,d=s.mode,N=n.child,j=N.sibling,u=Ar(N,{mode:"hidden",children:u.children}),u.subtreeFlags=N.subtreeFlags&65011712,j!==null?w=Ar(j,w):(w=Da(w,d,o,null),w.flags|=2),w.return=s,u.return=s,u.sibling=w,s.child=u,ec(null,u),u=s.child,w=n.child.memoizedState,w===null?w=ag(o):(d=w.cachePool,d!==null?(N=Bt._currentValue,d=d.parent!==N?{parent:N,pool:N}:d):d=CE(),w={baseLanes:w.baseLanes|o,cachePool:d}),u.memoizedState=w,u.childLanes=og(n,y,o),s.memoizedState=sg,ec(n.child,u)):(_s(s),o=n.child,n=o.sibling,o=Ar(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,n!==null&&(y=s.deletions,y===null?(s.deletions=[n],s.flags|=16):y.push(n)),s.child=o,s.memoizedState=null,o)}function lg(n,s){return s=Hd({mode:"visible",children:s},n.mode),s.return=n,n.child=s}function Hd(n,s){return n=Hn(22,n,null,s),n.lanes=0,n}function ug(n,s,o){return La(s,n.child,null,o),n=lg(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function jT(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),Ip(n.return,s,o)}function cg(n,s,o,u,d,m){var y=n.memoizedState;y===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d,treeForkCount:m}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=u,y.tail=o,y.tailMode=d,y.treeForkCount=m)}function FT(n,s,o){var u=s.pendingProps,d=u.revealOrder,m=u.tail;u=u.children;var y=Dt.current,w=(y&2)!==0;if(w?(y=y&1|2,s.flags|=128):y&=1,he(Dt,y),cn(n,s,u,o),u=ze?ju:0,!w&&n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&jT(n,o,s);else if(n.tag===19)jT(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(d){case"forwards":for(o=s.child,d=null;o!==null;)n=o.alternate,n!==null&&Vd(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=s.child,s.child=null):(d=o.sibling,o.sibling=null),cg(s,!1,d,o,m,u);break;case"backwards":case"unstable_legacy-backwards":for(o=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&Vd(n)===null){s.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}cg(s,!0,o,null,m,u);break;case"together":cg(s,!1,null,null,void 0,u);break;default:s.memoizedState=null}return s.child}function xr(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),Ts|=s.lanes,(o&s.childLanes)===0)if(n!==null){if(Qo(n,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(n!==null&&s.child!==n.child)throw Error(i(153));if(s.child!==null){for(n=s.child,o=Ar(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=Ar(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function hg(n,s){return(n.lanes&s)!==0?!0:(n=n.dependencies,!!(n!==null&&Id(n)))}function AC(n,s,o){switch(s.tag){case 3:Qt(s,s.stateNode.containerInfo),fs(s,Bt,n.memoizedState.cache),xa();break;case 27:case 5:ha(s);break;case 4:Qt(s,s.stateNode.containerInfo);break;case 10:fs(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,Mp(s),null;break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(_s(s),s.flags|=128,null):(o&s.child.childLanes)!==0?BT(n,s,o):(_s(s),n=xr(n,s,o),n!==null?n.sibling:null);_s(s);break;case 19:var d=(n.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(Qo(n,s,o,!1),u=(o&s.childLanes)!==0),d){if(u)return FT(n,s,o);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),he(Dt,Dt.current),u)break;return null;case 22:return s.lanes=0,OT(n,s,o,s.pendingProps);case 24:fs(s,Bt,n.memoizedState.cache)}return xr(n,s,o)}function qT(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps)Ft=!0;else{if(!hg(n,o)&&(s.flags&128)===0)return Ft=!1,AC(n,s,o);Ft=(n.flags&131072)!==0}else Ft=!1,ze&&(s.flags&1048576)!==0&&TE(s,ju,s.index);switch(s.lanes=0,s.tag){case 16:e:{var u=s.pendingProps;if(n=ka(s.elementType),s.type=n,typeof n=="function")gp(n)?(u=za(n,u),s.tag=1,s=UT(null,s,n,u,o)):(s.tag=0,s=rg(null,s,n,u,o));else{if(n!=null){var d=n.$$typeof;if(d===se){s.tag=11,s=xT(null,s,n,u,o);break e}else if(d===A){s.tag=14,s=VT(null,s,n,u,o);break e}}throw s=$e(n)||n,Error(i(306,s,""))}}return s;case 0:return rg(n,s,s.type,s.pendingProps,o);case 1:return u=s.type,d=za(u,s.pendingProps),UT(n,s,u,d,o);case 3:e:{if(Qt(s,s.stateNode.containerInfo),n===null)throw Error(i(387));u=s.pendingProps;var m=s.memoizedState;d=m.element,xp(n,s),$u(s,u,null,o);var y=s.memoizedState;if(u=y.cache,fs(s,Bt,u),u!==m.cache&&Ap(s,[Bt],o,!0),Yu(),u=y.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:y.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=zT(n,s,u,o);break e}else if(u!==d){d=oi(Error(i(424)),s),Fu(d),s=zT(n,s,u,o);break e}else{switch(n=s.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(ut=di(n.firstChild),ln=s,ze=!0,hs=null,ci=!0,o=OE(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(xa(),u===d){s=xr(n,s,o);break e}cn(n,s,u,o)}s=s.child}return s;case 26:return qd(n,s),n===null?(o=eb(s.type,null,s.pendingProps,null))?s.memoizedState=o:ze||(o=s.type,n=s.pendingProps,u=of(De.current).createElement(o),u[Lt]=s,u[Jt]=n,hn(u,o,n),Ut(u),s.stateNode=u):s.memoizedState=eb(s.type,n.memoizedProps,s.pendingProps,n.memoizedState),null;case 27:return ha(s),n===null&&ze&&(u=s.stateNode=Xw(s.type,s.pendingProps,De.current),ln=s,ci=!0,d=ut,Ss(s.type)?(Hg=d,ut=di(u.firstChild)):ut=d),cn(n,s,s.pendingProps.children,o),qd(n,s),n===null&&(s.flags|=4194304),s.child;case 5:return n===null&&ze&&((d=u=ut)&&(u=tN(u,s.type,s.pendingProps,ci),u!==null?(s.stateNode=u,ln=s,ut=di(u.firstChild),ci=!1,d=!0):d=!1),d||ds(s)),ha(s),d=s.type,m=s.pendingProps,y=n!==null?n.memoizedProps:null,u=m.children,zg(d,m)?u=null:y!==null&&zg(d,y)&&(s.flags|=32),s.memoizedState!==null&&(d=Up(n,s,gC,null,null,o),pc._currentValue=d),qd(n,s),cn(n,s,u,o),s.child;case 6:return n===null&&ze&&((n=o=ut)&&(o=nN(o,s.pendingProps,ci),o!==null?(s.stateNode=o,ln=s,ut=null,n=!0):n=!1),n||ds(s)),null;case 13:return BT(n,s,o);case 4:return Qt(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=La(s,null,u,o):cn(n,s,u,o),s.child;case 11:return xT(n,s,s.type,s.pendingProps,o);case 7:return cn(n,s,s.pendingProps,o),s.child;case 8:return cn(n,s,s.pendingProps.children,o),s.child;case 12:return cn(n,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,fs(s,s.type,u.value),cn(n,s,u.children,o),s.child;case 9:return d=s.type._context,u=s.pendingProps.children,Pa(s),d=un(d),u=u(d),s.flags|=1,cn(n,s,u,o),s.child;case 14:return VT(n,s,s.type,s.pendingProps,o);case 15:return PT(n,s,s.type,s.pendingProps,o);case 19:return FT(n,s,o);case 31:return IC(n,s,o);case 22:return OT(n,s,o,s.pendingProps);case 24:return Pa(s),u=un(Bt),n===null?(d=Cp(),d===null&&(d=at,m=Sp(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),s.memoizedState={parent:u,cache:d},Dp(s),fs(s,Bt,d)):((n.lanes&o)!==0&&(xp(n,s),$u(s,null,null,o),Yu()),d=n.memoizedState,m=s.memoizedState,d.parent!==u?(d={parent:u,cache:u},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),fs(s,Bt,u)):(u=m.cache,fs(s,Bt,u),u!==d.cache&&Ap(s,[Bt],o,!0))),cn(n,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function Vr(n){n.flags|=4}function dg(n,s,o,u,d){if((s=(n.mode&32)!==0)&&(s=!1),s){if(n.flags|=16777216,(d&335544128)===d)if(n.stateNode.complete)n.flags|=8192;else if(gw())n.flags|=8192;else throw Ma=Cd,Np}else n.flags&=-16777217}function HT(n,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!sb(s))if(gw())n.flags|=8192;else throw Ma=Cd,Np}function Gd(n,s){s!==null&&(n.flags|=4),n.flags&16384&&(s=n.tag!==22?Xh():536870912,n.lanes|=s,sl|=s)}function tc(n,s){if(!ze)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function ct(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function SC(n,s,o){var u=s.pendingProps;switch(Ep(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(s),null;case 1:return ct(s),null;case 3:return o=s.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Cr(Bt),dt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Ko(s)?Vr(s):n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,wp())),ct(s),null;case 26:var d=s.type,m=s.memoizedState;return n===null?(Vr(s),m!==null?(ct(s),HT(s,m)):(ct(s),dg(s,d,null,u,o))):m?m!==n.memoizedState?(Vr(s),ct(s),HT(s,m)):(ct(s),s.flags&=-16777217):(n=n.memoizedProps,n!==u&&Vr(s),ct(s),dg(s,d,n,u,o)),null;case 27:if(Io(s),o=De.current,d=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&Vr(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return ct(s),null}n=pe.current,Ko(s)?bE(s):(n=Xw(d,u,o),s.stateNode=n,Vr(s))}return ct(s),null;case 5:if(Io(s),d=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&Vr(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return ct(s),null}if(m=pe.current,Ko(s))bE(s);else{var y=of(De.current);switch(m){case 1:m=y.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=y.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=y.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?y.createElement("select",{is:u.is}):y.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?y.createElement(d,{is:u.is}):y.createElement(d)}}m[Lt]=s,m[Jt]=u;e:for(y=s.child;y!==null;){if(y.tag===5||y.tag===6)m.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===s)break e;for(;y.sibling===null;){if(y.return===null||y.return===s)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}s.stateNode=m;e:switch(hn(m,d,u),d){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}u&&Vr(s)}}return ct(s),dg(s,s.type,n===null?null:n.memoizedProps,s.pendingProps,o),null;case 6:if(n&&s.stateNode!=null)n.memoizedProps!==u&&Vr(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(i(166));if(n=De.current,Ko(s)){if(n=s.stateNode,o=s.memoizedProps,u=null,d=ln,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}n[Lt]=s,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||Bw(n.nodeValue,o)),n||ds(s,!0)}else n=of(n).createTextNode(u),n[Lt]=s,s.stateNode=n}return ct(s),null;case 31:if(o=s.memoizedState,n===null||n.memoizedState!==null){if(u=Ko(s),o!==null){if(n===null){if(!u)throw Error(i(318));if(n=s.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(557));n[Lt]=s}else xa(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ct(s),n=!1}else o=wp(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=o),n=!0;if(!n)return s.flags&256?(Kn(s),s):(Kn(s),null);if((s.flags&128)!==0)throw Error(i(558))}return ct(s),null;case 13:if(u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=Ko(s),u!==null&&u.dehydrated!==null){if(n===null){if(!d)throw Error(i(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[Lt]=s}else xa(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ct(s),d=!1}else d=wp(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Kn(s),s):(Kn(s),null)}return Kn(s),(s.flags&128)!==0?(s.lanes=o,s):(o=u!==null,n=n!==null&&n.memoizedState!==null,o&&(u=s.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==d&&(u.flags|=2048)),o!==n&&o&&(s.child.flags|=8192),Gd(s,s.updateQueue),ct(s),null);case 4:return dt(),n===null&&Og(s.stateNode.containerInfo),ct(s),null;case 10:return Cr(s.type),ct(s),null;case 19:if(ee(Dt),u=s.memoizedState,u===null)return ct(s),null;if(d=(s.flags&128)!==0,m=u.rendering,m===null)if(d)tc(u,!1);else{if(It!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(m=Vd(n),m!==null){for(s.flags|=128,tc(u,!1),n=m.updateQueue,s.updateQueue=n,Gd(s,n),s.subtreeFlags=0,n=o,o=s.child;o!==null;)yE(o,n),o=o.sibling;return he(Dt,Dt.current&1|2),ze&&Sr(s,u.treeForkCount),s.child}n=n.sibling}u.tail!==null&&wn()>Wd&&(s.flags|=128,d=!0,tc(u,!1),s.lanes=4194304)}else{if(!d)if(n=Vd(m),n!==null){if(s.flags|=128,d=!0,n=n.updateQueue,s.updateQueue=n,Gd(s,n),tc(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!ze)return ct(s),null}else 2*wn()-u.renderingStartTime>Wd&&o!==536870912&&(s.flags|=128,d=!0,tc(u,!1),s.lanes=4194304);u.isBackwards?(m.sibling=s.child,s.child=m):(n=u.last,n!==null?n.sibling=m:s.child=m,u.last=m)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=wn(),n.sibling=null,o=Dt.current,he(Dt,d?o&1|2:o&1),ze&&Sr(s,u.treeForkCount),n):(ct(s),null);case 22:case 23:return Kn(s),kp(),u=s.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(ct(s),s.subtreeFlags&6&&(s.flags|=8192)):ct(s),o=s.updateQueue,o!==null&&Gd(s,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),n!==null&&ee(Oa),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Cr(Bt),ct(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function RC(n,s){switch(Ep(s),s.tag){case 1:return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Cr(Bt),dt(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 26:case 27:case 5:return Io(s),null;case 31:if(s.memoizedState!==null){if(Kn(s),s.alternate===null)throw Error(i(340));xa()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 13:if(Kn(s),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(i(340));xa()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return ee(Dt),null;case 4:return dt(),null;case 10:return Cr(s.type),null;case 22:case 23:return Kn(s),kp(),n!==null&&ee(Oa),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 24:return Cr(Bt),null;case 25:return null;default:return null}}function GT(n,s){switch(Ep(s),s.tag){case 3:Cr(Bt),dt();break;case 26:case 27:case 5:Io(s);break;case 4:dt();break;case 31:s.memoizedState!==null&&Kn(s);break;case 13:Kn(s);break;case 19:ee(Dt);break;case 10:Cr(s.type);break;case 22:case 23:Kn(s),kp(),n!==null&&ee(Oa);break;case 24:Cr(Bt)}}function nc(n,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&n)===n){u=void 0;var m=o.create,y=o.inst;u=m(),y.destroy=u}o=o.next}while(o!==d)}}catch(w){Ze(s,s.return,w)}}function vs(n,s,o){try{var u=s.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var m=d.next;u=m;do{if((u.tag&n)===n){var y=u.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,d=s;var N=o,j=w;try{j()}catch(Y){Ze(d,N,Y)}}}u=u.next}while(u!==m)}}catch(Y){Ze(s,s.return,Y)}}function KT(n){var s=n.updateQueue;if(s!==null){var o=n.stateNode;try{ME(s,o)}catch(u){Ze(n,n.return,u)}}}function QT(n,s,o){o.props=za(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){Ze(n,s,u)}}function ic(n,s){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(d){Ze(n,s,d)}}function nr(n,s){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){Ze(n,s,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){Ze(n,s,d)}else o.current=null}function YT(n){var s=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){Ze(n,n.return,d)}}function fg(n,s,o){try{var u=n.stateNode;$C(u,n.type,o,s),u[Jt]=s}catch(d){Ze(n,n.return,d)}}function $T(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ss(n.type)||n.tag===4}function mg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||$T(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ss(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function pg(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(n),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=wi));else if(u!==4&&(u===27&&Ss(n.type)&&(o=n.stateNode,s=null),n=n.child,n!==null))for(pg(n,s,o),n=n.sibling;n!==null;)pg(n,s,o),n=n.sibling}function Kd(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(u===27&&Ss(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(Kd(n,s,o),n=n.sibling;n!==null;)Kd(n,s,o),n=n.sibling}function WT(n){var s=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);hn(s,u,o),s[Lt]=n,s[Jt]=o}catch(m){Ze(n,n.return,m)}}var Pr=!1,qt=!1,gg=!1,XT=typeof WeakSet=="function"?WeakSet:Set,en=null;function CC(n,s){if(n=n.containerInfo,Lg=mf,n=uE(n),up(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var y=0,w=-1,N=-1,j=0,Y=0,Z=n,F=null;t:for(;;){for(var K;Z!==o||d!==0&&Z.nodeType!==3||(w=y+d),Z!==m||u!==0&&Z.nodeType!==3||(N=y+u),Z.nodeType===3&&(y+=Z.nodeValue.length),(K=Z.firstChild)!==null;)F=Z,Z=K;for(;;){if(Z===n)break t;if(F===o&&++j===d&&(w=y),F===m&&++Y===u&&(N=y),(K=Z.nextSibling)!==null)break;Z=F,F=Z.parentNode}Z=K}o=w===-1||N===-1?null:{start:w,end:N}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ug={focusedElem:n,selectionRange:o},mf=!1,en=s;en!==null;)if(s=en,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,en=n;else for(;en!==null;){switch(s=en,m=s.alternate,n=s.flags,s.tag){case 0:if((n&4)!==0&&(n=s.updateQueue,n=n!==null?n.events:null,n!==null))for(o=0;o<n.length;o++)d=n[o],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=s,d=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var ge=za(o.type,d);n=u.getSnapshotBeforeUpdate(ge,m),u.__reactInternalSnapshotBeforeUpdate=n}catch(be){Ze(o,o.return,be)}}break;case 3:if((n&1024)!==0){if(n=s.stateNode.containerInfo,o=n.nodeType,o===9)jg(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":jg(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=s.sibling,n!==null){n.return=s.return,en=n;break}en=s.return}}function JT(n,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:kr(n,o),u&4&&nc(5,o);break;case 1:if(kr(n,o),u&4)if(n=o.stateNode,s===null)try{n.componentDidMount()}catch(y){Ze(o,o.return,y)}else{var d=za(o.type,s.memoizedProps);s=s.memoizedState;try{n.componentDidUpdate(d,s,n.__reactInternalSnapshotBeforeUpdate)}catch(y){Ze(o,o.return,y)}}u&64&&KT(o),u&512&&ic(o,o.return);break;case 3:if(kr(n,o),u&64&&(n=o.updateQueue,n!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{ME(n,s)}catch(y){Ze(o,o.return,y)}}break;case 27:s===null&&u&4&&WT(o);case 26:case 5:kr(n,o),s===null&&u&4&&YT(o),u&512&&ic(o,o.return);break;case 12:kr(n,o);break;case 31:kr(n,o),u&4&&tw(n,o);break;case 13:kr(n,o),u&4&&nw(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=LC.bind(null,o),iN(n,o))));break;case 22:if(u=o.memoizedState!==null||Pr,!u){s=s!==null&&s.memoizedState!==null||qt,d=Pr;var m=qt;Pr=u,(qt=s)&&!m?Mr(n,o,(o.subtreeFlags&8772)!==0):kr(n,o),Pr=d,qt=m}break;case 30:break;default:kr(n,o)}}function ZT(n){var s=n.alternate;s!==null&&(n.alternate=null,ZT(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&No(s)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var mt=null,Vn=!1;function Or(n,s,o){for(o=o.child;o!==null;)ew(n,s,o),o=o.sibling}function ew(n,s,o){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(yi,o)}catch{}switch(o.tag){case 26:qt||nr(o,s),Or(n,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:qt||nr(o,s);var u=mt,d=Vn;Ss(o.type)&&(mt=o.stateNode,Vn=!1),Or(n,s,o),dc(o.stateNode),mt=u,Vn=d;break;case 5:qt||nr(o,s);case 6:if(u=mt,d=Vn,mt=null,Or(n,s,o),mt=u,Vn=d,mt!==null)if(Vn)try{(mt.nodeType===9?mt.body:mt.nodeName==="HTML"?mt.ownerDocument.body:mt).removeChild(o.stateNode)}catch(m){Ze(o,s,m)}else try{mt.removeChild(o.stateNode)}catch(m){Ze(o,s,m)}break;case 18:mt!==null&&(Vn?(n=mt,Kw(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),fl(n)):Kw(mt,o.stateNode));break;case 4:u=mt,d=Vn,mt=o.stateNode.containerInfo,Vn=!0,Or(n,s,o),mt=u,Vn=d;break;case 0:case 11:case 14:case 15:vs(2,o,s),qt||vs(4,o,s),Or(n,s,o);break;case 1:qt||(nr(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&QT(o,s,u)),Or(n,s,o);break;case 21:Or(n,s,o);break;case 22:qt=(u=qt)||o.memoizedState!==null,Or(n,s,o),qt=u;break;default:Or(n,s,o)}}function tw(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{fl(n)}catch(o){Ze(s,s.return,o)}}}function nw(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{fl(n)}catch(o){Ze(s,s.return,o)}}function NC(n){switch(n.tag){case 31:case 13:case 19:var s=n.stateNode;return s===null&&(s=n.stateNode=new XT),s;case 22:return n=n.stateNode,s=n._retryCache,s===null&&(s=n._retryCache=new XT),s;default:throw Error(i(435,n.tag))}}function Qd(n,s){var o=NC(n);s.forEach(function(u){if(!o.has(u)){o.add(u);var d=UC.bind(null,n,u);u.then(d,d)}})}function Pn(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],m=n,y=s,w=y;e:for(;w!==null;){switch(w.tag){case 27:if(Ss(w.type)){mt=w.stateNode,Vn=!1;break e}break;case 5:mt=w.stateNode,Vn=!1;break e;case 3:case 4:mt=w.stateNode.containerInfo,Vn=!0;break e}w=w.return}if(mt===null)throw Error(i(160));ew(m,y,d),mt=null,Vn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)iw(s,n),s=s.sibling}var Ci=null;function iw(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Pn(s,n),On(n),u&4&&(vs(3,n,n.return),nc(3,n),vs(5,n,n.return));break;case 1:Pn(s,n),On(n),u&512&&(qt||o===null||nr(o,o.return)),u&64&&Pr&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=Ci;if(Pn(s,n),On(n),u&512&&(qt||o===null||nr(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,d=d.ownerDocument||d;t:switch(u){case"title":m=d.getElementsByTagName("title")[0],(!m||m[Fi]||m[Lt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(u),d.head.insertBefore(m,d.querySelector("head > title"))),hn(m,u,o),m[Lt]=n,Ut(m),u=m;break e;case"link":var y=ib("link","href",d).get(u+(o.href||""));if(y){for(var w=0;w<y.length;w++)if(m=y[w],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){y.splice(w,1);break t}}m=d.createElement(u),hn(m,u,o),d.head.appendChild(m);break;case"meta":if(y=ib("meta","content",d).get(u+(o.content||""))){for(w=0;w<y.length;w++)if(m=y[w],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){y.splice(w,1);break t}}m=d.createElement(u),hn(m,u,o),d.head.appendChild(m);break;default:throw Error(i(468,u))}m[Lt]=n,Ut(m),u=m}n.stateNode=u}else rb(d,n.type,n.stateNode);else n.stateNode=nb(d,u,n.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?rb(d,n.type,n.stateNode):nb(d,u,n.memoizedProps)):u===null&&n.stateNode!==null&&fg(n,n.memoizedProps,o.memoizedProps)}break;case 27:Pn(s,n),On(n),u&512&&(qt||o===null||nr(o,o.return)),o!==null&&u&4&&fg(n,n.memoizedProps,o.memoizedProps);break;case 5:if(Pn(s,n),On(n),u&512&&(qt||o===null||nr(o,o.return)),n.flags&32){d=n.stateNode;try{xn(d,"")}catch(ge){Ze(n,n.return,ge)}}u&4&&n.stateNode!=null&&(d=n.memoizedProps,fg(n,d,o!==null?o.memoizedProps:d)),u&1024&&(gg=!0);break;case 6:if(Pn(s,n),On(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(ge){Ze(n,n.return,ge)}}break;case 3:if(cf=null,d=Ci,Ci=lf(s.containerInfo),Pn(s,n),Ci=d,On(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{fl(s.containerInfo)}catch(ge){Ze(n,n.return,ge)}gg&&(gg=!1,rw(n));break;case 4:u=Ci,Ci=lf(n.stateNode.containerInfo),Pn(s,n),On(n),Ci=u;break;case 12:Pn(s,n),On(n);break;case 31:Pn(s,n),On(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Qd(n,u)));break;case 13:Pn(s,n),On(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&($d=wn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Qd(n,u)));break;case 22:d=n.memoizedState!==null;var N=o!==null&&o.memoizedState!==null,j=Pr,Y=qt;if(Pr=j||d,qt=Y||N,Pn(s,n),qt=Y,Pr=j,On(n),u&8192)e:for(s=n.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(o===null||N||Pr||qt||Ba(n)),o=null,s=n;;){if(s.tag===5||s.tag===26){if(o===null){N=o=s;try{if(m=N.stateNode,d)y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=N.stateNode;var Z=N.memoizedProps.style,F=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;w.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(ge){Ze(N,N.return,ge)}}}else if(s.tag===6){if(o===null){N=s;try{N.stateNode.nodeValue=d?"":N.memoizedProps}catch(ge){Ze(N,N.return,ge)}}}else if(s.tag===18){if(o===null){N=s;try{var K=N.stateNode;d?Qw(K,!0):Qw(N.stateNode,!1)}catch(ge){Ze(N,N.return,ge)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===n)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Qd(n,o))));break;case 19:Pn(s,n),On(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Qd(n,u)));break;case 30:break;case 21:break;default:Pn(s,n),On(n)}}function On(n){var s=n.flags;if(s&2){try{for(var o,u=n.return;u!==null;){if($T(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var d=o.stateNode,m=mg(n);Kd(n,m,d);break;case 5:var y=o.stateNode;o.flags&32&&(xn(y,""),o.flags&=-33);var w=mg(n);Kd(n,w,y);break;case 3:case 4:var N=o.stateNode.containerInfo,j=mg(n);pg(n,j,N);break;default:throw Error(i(161))}}catch(Y){Ze(n,n.return,Y)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function rw(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var s=n;rw(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),n=n.sibling}}function kr(n,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)JT(n,s.alternate,s),s=s.sibling}function Ba(n){for(n=n.child;n!==null;){var s=n;switch(s.tag){case 0:case 11:case 14:case 15:vs(4,s,s.return),Ba(s);break;case 1:nr(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&QT(s,s.return,o),Ba(s);break;case 27:dc(s.stateNode);case 26:case 5:nr(s,s.return),Ba(s);break;case 22:s.memoizedState===null&&Ba(s);break;case 30:Ba(s);break;default:Ba(s)}n=n.sibling}}function Mr(n,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,d=n,m=s,y=m.flags;switch(m.tag){case 0:case 11:case 15:Mr(d,m,o),nc(4,m);break;case 1:if(Mr(d,m,o),u=m,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(j){Ze(u,u.return,j)}if(u=m,d=u.updateQueue,d!==null){var w=u.stateNode;try{var N=d.shared.hiddenCallbacks;if(N!==null)for(d.shared.hiddenCallbacks=null,d=0;d<N.length;d++)kE(N[d],w)}catch(j){Ze(u,u.return,j)}}o&&y&64&&KT(m),ic(m,m.return);break;case 27:WT(m);case 26:case 5:Mr(d,m,o),o&&u===null&&y&4&&YT(m),ic(m,m.return);break;case 12:Mr(d,m,o);break;case 31:Mr(d,m,o),o&&y&4&&tw(d,m);break;case 13:Mr(d,m,o),o&&y&4&&nw(d,m);break;case 22:m.memoizedState===null&&Mr(d,m,o),ic(m,m.return);break;case 30:break;default:Mr(d,m,o)}s=s.sibling}}function _g(n,s){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(n=s.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&qu(o))}function yg(n,s){n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&qu(n))}function Ni(n,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)sw(n,s,o,u),s=s.sibling}function sw(n,s,o,u){var d=s.flags;switch(s.tag){case 0:case 11:case 15:Ni(n,s,o,u),d&2048&&nc(9,s);break;case 1:Ni(n,s,o,u);break;case 3:Ni(n,s,o,u),d&2048&&(n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&qu(n)));break;case 12:if(d&2048){Ni(n,s,o,u),n=s.stateNode;try{var m=s.memoizedProps,y=m.id,w=m.onPostCommit;typeof w=="function"&&w(y,s.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(N){Ze(s,s.return,N)}}else Ni(n,s,o,u);break;case 31:Ni(n,s,o,u);break;case 13:Ni(n,s,o,u);break;case 23:break;case 22:m=s.stateNode,y=s.alternate,s.memoizedState!==null?m._visibility&2?Ni(n,s,o,u):rc(n,s):m._visibility&2?Ni(n,s,o,u):(m._visibility|=2,nl(n,s,o,u,(s.subtreeFlags&10256)!==0||!1)),d&2048&&_g(y,s);break;case 24:Ni(n,s,o,u),d&2048&&yg(s.alternate,s);break;default:Ni(n,s,o,u)}}function nl(n,s,o,u,d){for(d=d&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=n,y=s,w=o,N=u,j=y.flags;switch(y.tag){case 0:case 11:case 15:nl(m,y,w,N,d),nc(8,y);break;case 23:break;case 22:var Y=y.stateNode;y.memoizedState!==null?Y._visibility&2?nl(m,y,w,N,d):rc(m,y):(Y._visibility|=2,nl(m,y,w,N,d)),d&&j&2048&&_g(y.alternate,y);break;case 24:nl(m,y,w,N,d),d&&j&2048&&yg(y.alternate,y);break;default:nl(m,y,w,N,d)}s=s.sibling}}function rc(n,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=n,u=s,d=u.flags;switch(u.tag){case 22:rc(o,u),d&2048&&_g(u.alternate,u);break;case 24:rc(o,u),d&2048&&yg(u.alternate,u);break;default:rc(o,u)}s=s.sibling}}var sc=8192;function il(n,s,o){if(n.subtreeFlags&sc)for(n=n.child;n!==null;)aw(n,s,o),n=n.sibling}function aw(n,s,o){switch(n.tag){case 26:il(n,s,o),n.flags&sc&&n.memoizedState!==null&&pN(o,Ci,n.memoizedState,n.memoizedProps);break;case 5:il(n,s,o);break;case 3:case 4:var u=Ci;Ci=lf(n.stateNode.containerInfo),il(n,s,o),Ci=u;break;case 22:n.memoizedState===null&&(u=n.alternate,u!==null&&u.memoizedState!==null?(u=sc,sc=16777216,il(n,s,o),sc=u):il(n,s,o));break;default:il(n,s,o)}}function ow(n){var s=n.alternate;if(s!==null&&(n=s.child,n!==null)){s.child=null;do s=n.sibling,n.sibling=null,n=s;while(n!==null)}}function ac(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];en=u,uw(u,n)}ow(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)lw(n),n=n.sibling}function lw(n){switch(n.tag){case 0:case 11:case 15:ac(n),n.flags&2048&&vs(9,n,n.return);break;case 3:ac(n);break;case 12:ac(n);break;case 22:var s=n.stateNode;n.memoizedState!==null&&s._visibility&2&&(n.return===null||n.return.tag!==13)?(s._visibility&=-3,Yd(n)):ac(n);break;default:ac(n)}}function Yd(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];en=u,uw(u,n)}ow(n)}for(n=n.child;n!==null;){switch(s=n,s.tag){case 0:case 11:case 15:vs(8,s,s.return),Yd(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Yd(s));break;default:Yd(s)}n=n.sibling}}function uw(n,s){for(;en!==null;){var o=en;switch(o.tag){case 0:case 11:case 15:vs(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:qu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,en=u;else e:for(o=n;en!==null;){u=en;var d=u.sibling,m=u.return;if(ZT(u),u===o){en=null;break e}if(d!==null){d.return=m,en=d;break e}en=m}}}var DC={getCacheForType:function(n){var s=un(Bt),o=s.data.get(n);return o===void 0&&(o=n(),s.data.set(n,o)),o},cacheSignal:function(){return un(Bt).controller.signal}},xC=typeof WeakMap=="function"?WeakMap:Map,Qe=0,at=null,Ve=null,Me=0,Je=0,Qn=null,Es=!1,rl=!1,vg=!1,Lr=0,It=0,Ts=0,ja=0,Eg=0,Yn=0,sl=0,oc=null,kn=null,Tg=!1,$d=0,cw=0,Wd=1/0,Xd=null,ws=null,$t=0,bs=null,al=null,Ur=0,wg=0,bg=null,hw=null,lc=0,Ig=null;function $n(){return(Qe&2)!==0&&Me!==0?Me&-Me:W.T!==null?Dg():Jh()}function dw(){if(Yn===0)if((Me&536870912)===0||ze){var n=ma;ma<<=1,(ma&3932160)===0&&(ma=262144),Yn=n}else Yn=536870912;return n=Gn.current,n!==null&&(n.flags|=32),Yn}function Mn(n,s,o){(n===at&&(Je===2||Je===9)||n.cancelPendingCommit!==null)&&(ol(n,0),Is(n,Me,Yn,!1)),pa(n,o),((Qe&2)===0||n!==at)&&(n===at&&((Qe&2)===0&&(ja|=o),It===4&&Is(n,Me,Yn,!1)),ir(n))}function fw(n,s,o){if((Qe&6)!==0)throw Error(i(327));var u=!o&&(s&127)===0&&(s&n.expiredLanes)===0||vi(n,s),d=u?OC(n,s):Sg(n,s,!0),m=u;do{if(d===0){rl&&!u&&Is(n,s,0,!1);break}else{if(o=n.current.alternate,m&&!VC(o)){d=Sg(n,s,!1),m=!1;continue}if(d===2){if(m=s,n.errorRecoveryDisabledLanes&m)var y=0;else y=n.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){s=y;e:{var w=n;d=oc;var N=w.current.memoizedState.isDehydrated;if(N&&(ol(w,y).flags|=256),y=Sg(w,y,!1),y!==2){if(vg&&!N){w.errorRecoveryDisabledLanes|=m,ja|=m,d=4;break e}m=kn,kn=d,m!==null&&(kn===null?kn=m:kn.push.apply(kn,m))}d=y}if(m=!1,d!==2)continue}}if(d===1){ol(n,0),Is(n,s,0,!0);break}e:{switch(u=n,m=d,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:Is(u,s,Yn,!Es);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(d=$d+300-wn(),10<d)){if(Is(u,s,Yn,!Es),zi(u,0,!0)!==0)break e;Ur=s,u.timeoutHandle=Hw(mw.bind(null,u,o,kn,Xd,Tg,s,Yn,ja,sl,Es,m,"Throttled",-0,0),d);break e}mw(u,o,kn,Xd,Tg,s,Yn,ja,sl,Es,m,null,-0,0)}}break}while(!0);ir(n)}function mw(n,s,o,u,d,m,y,w,N,j,Y,Z,F,K){if(n.timeoutHandle=-1,Z=s.subtreeFlags,Z&8192||(Z&16785408)===16785408){Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wi},aw(s,m,Z);var ge=(m&62914560)===m?$d-wn():(m&4194048)===m?cw-wn():0;if(ge=gN(Z,ge),ge!==null){Ur=m,n.cancelPendingCommit=ge(ww.bind(null,n,s,m,o,u,d,y,w,N,Y,Z,null,F,K)),Is(n,m,y,!j);return}}ww(n,s,m,o,u,d,y,w,N)}function VC(n){for(var s=n;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!qn(m(),d))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Is(n,s,o,u){s&=~Eg,s&=~ja,n.suspendedLanes|=s,n.pingedLanes&=~s,u&&(n.warmLanes|=s),u=n.expirationTimes;for(var d=s;0<d;){var m=31-Ct(d),y=1<<m;u[m]=-1,d&=~y}o!==0&&ga(n,o,s)}function Jd(){return(Qe&6)===0?(uc(0),!1):!0}function Ag(){if(Ve!==null){if(Je===0)var n=Ve.return;else n=Ve,Rr=Va=null,jp(n),Xo=null,Gu=0,n=Ve;for(;n!==null;)GT(n.alternate,n),n=n.return;Ve=null}}function ol(n,s){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,JC(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Ur=0,Ag(),at=n,Ve=o=Ar(n.current,null),Me=s,Je=0,Qn=null,Es=!1,rl=vi(n,s),vg=!1,sl=Yn=Eg=ja=Ts=It=0,kn=oc=null,Tg=!1,(s&8)!==0&&(s|=s&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=s;0<u;){var d=31-Ct(u),m=1<<d;s|=n[d],u&=~m}return Lr=s,vd(),o}function pw(n,s){Ce=null,W.H=Zu,s===Wo||s===Rd?(s=xE(),Je=3):s===Np?(s=xE(),Je=4):Je=s===ig?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Qn=s,Ve===null&&(It=1,jd(n,oi(s,n.current)))}function gw(){var n=Gn.current;return n===null?!0:(Me&4194048)===Me?hi===null:(Me&62914560)===Me||(Me&536870912)!==0?n===hi:!1}function _w(){var n=W.H;return W.H=Zu,n===null?Zu:n}function yw(){var n=W.A;return W.A=DC,n}function Zd(){It=4,Es||(Me&4194048)!==Me&&Gn.current!==null||(rl=!0),(Ts&134217727)===0&&(ja&134217727)===0||at===null||Is(at,Me,Yn,!1)}function Sg(n,s,o){var u=Qe;Qe|=2;var d=_w(),m=yw();(at!==n||Me!==s)&&(Xd=null,ol(n,s)),s=!1;var y=It;e:do try{if(Je!==0&&Ve!==null){var w=Ve,N=Qn;switch(Je){case 8:Ag(),y=6;break e;case 3:case 2:case 9:case 6:Gn.current===null&&(s=!0);var j=Je;if(Je=0,Qn=null,ll(n,w,N,j),o&&rl){y=0;break e}break;default:j=Je,Je=0,Qn=null,ll(n,w,N,j)}}PC(),y=It;break}catch(Y){pw(n,Y)}while(!0);return s&&n.shellSuspendCounter++,Rr=Va=null,Qe=u,W.H=d,W.A=m,Ve===null&&(at=null,Me=0,vd()),y}function PC(){for(;Ve!==null;)vw(Ve)}function OC(n,s){var o=Qe;Qe|=2;var u=_w(),d=yw();at!==n||Me!==s?(Xd=null,Wd=wn()+500,ol(n,s)):rl=vi(n,s);e:do try{if(Je!==0&&Ve!==null){s=Ve;var m=Qn;t:switch(Je){case 1:Je=0,Qn=null,ll(n,s,m,1);break;case 2:case 9:if(NE(m)){Je=0,Qn=null,Ew(s);break}s=function(){Je!==2&&Je!==9||at!==n||(Je=7),ir(n)},m.then(s,s);break e;case 3:Je=7;break e;case 4:Je=5;break e;case 7:NE(m)?(Je=0,Qn=null,Ew(s)):(Je=0,Qn=null,ll(n,s,m,7));break;case 5:var y=null;switch(Ve.tag){case 26:y=Ve.memoizedState;case 5:case 27:var w=Ve;if(y?sb(y):w.stateNode.complete){Je=0,Qn=null;var N=w.sibling;if(N!==null)Ve=N;else{var j=w.return;j!==null?(Ve=j,ef(j)):Ve=null}break t}}Je=0,Qn=null,ll(n,s,m,5);break;case 6:Je=0,Qn=null,ll(n,s,m,6);break;case 8:Ag(),It=6;break e;default:throw Error(i(462))}}kC();break}catch(Y){pw(n,Y)}while(!0);return Rr=Va=null,W.H=u,W.A=d,Qe=o,Ve!==null?0:(at=null,Me=0,vd(),It)}function kC(){for(;Ve!==null&&!np();)vw(Ve)}function vw(n){var s=qT(n.alternate,n,Lr);n.memoizedProps=n.pendingProps,s===null?ef(n):Ve=s}function Ew(n){var s=n,o=s.alternate;switch(s.tag){case 15:case 0:s=LT(o,s,s.pendingProps,s.type,void 0,Me);break;case 11:s=LT(o,s,s.pendingProps,s.type.render,s.ref,Me);break;case 5:jp(s);default:GT(o,s),s=Ve=yE(s,Lr),s=qT(o,s,Lr)}n.memoizedProps=n.pendingProps,s===null?ef(n):Ve=s}function ll(n,s,o,u){Rr=Va=null,jp(s),Xo=null,Gu=0;var d=s.return;try{if(bC(n,d,s,o,Me)){It=1,jd(n,oi(o,n.current)),Ve=null;return}}catch(m){if(d!==null)throw Ve=d,m;It=1,jd(n,oi(o,n.current)),Ve=null;return}s.flags&32768?(ze||u===1?n=!0:rl||(Me&536870912)!==0?n=!1:(Es=n=!0,(u===2||u===9||u===3||u===6)&&(u=Gn.current,u!==null&&u.tag===13&&(u.flags|=16384))),Tw(s,n)):ef(s)}function ef(n){var s=n;do{if((s.flags&32768)!==0){Tw(s,Es);return}n=s.return;var o=SC(s.alternate,s,Lr);if(o!==null){Ve=o;return}if(s=s.sibling,s!==null){Ve=s;return}Ve=s=n}while(s!==null);It===0&&(It=5)}function Tw(n,s){do{var o=RC(n.alternate,n);if(o!==null){o.flags&=32767,Ve=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(n=n.sibling,n!==null)){Ve=n;return}Ve=n=o}while(n!==null);It=6,Ve=null}function ww(n,s,o,u,d,m,y,w,N){n.cancelPendingCommit=null;do tf();while($t!==0);if((Qe&6)!==0)throw Error(i(327));if(s!==null){if(s===n.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=mp,sp(n,o,m,y,w,N),n===at&&(Ve=at=null,Me=0),al=s,bs=n,Ur=o,wg=m,bg=d,hw=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,zC(es,function(){return Rw(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=W.T,W.T=null,d=ce.p,ce.p=2,y=Qe,Qe|=4;try{CC(n,s,o)}finally{Qe=y,ce.p=d,W.T=u}}$t=1,bw(),Iw(),Aw()}}function bw(){if($t===1){$t=0;var n=bs,s=al,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=W.T,W.T=null;var u=ce.p;ce.p=2;var d=Qe;Qe|=4;try{iw(s,n);var m=Ug,y=uE(n.containerInfo),w=m.focusedElem,N=m.selectionRange;if(y!==w&&w&&w.ownerDocument&&lE(w.ownerDocument.documentElement,w)){if(N!==null&&up(w)){var j=N.start,Y=N.end;if(Y===void 0&&(Y=j),"selectionStart"in w)w.selectionStart=j,w.selectionEnd=Math.min(Y,w.value.length);else{var Z=w.ownerDocument||document,F=Z&&Z.defaultView||window;if(F.getSelection){var K=F.getSelection(),ge=w.textContent.length,be=Math.min(N.start,ge),st=N.end===void 0?be:Math.min(N.end,ge);!K.extend&&be>st&&(y=st,st=be,be=y);var L=oE(w,be),V=oE(w,st);if(L&&V&&(K.rangeCount!==1||K.anchorNode!==L.node||K.anchorOffset!==L.offset||K.focusNode!==V.node||K.focusOffset!==V.offset)){var B=Z.createRange();B.setStart(L.node,L.offset),K.removeAllRanges(),be>st?(K.addRange(B),K.extend(V.node,V.offset)):(B.setEnd(V.node,V.offset),K.addRange(B))}}}}for(Z=[],K=w;K=K.parentNode;)K.nodeType===1&&Z.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Z.length;w++){var J=Z[w];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}mf=!!Lg,Ug=Lg=null}finally{Qe=d,ce.p=u,W.T=o}}n.current=s,$t=2}}function Iw(){if($t===2){$t=0;var n=bs,s=al,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=W.T,W.T=null;var u=ce.p;ce.p=2;var d=Qe;Qe|=4;try{JT(n,s.alternate,s)}finally{Qe=d,ce.p=u,W.T=o}}$t=3}}function Aw(){if($t===4||$t===3){$t=0,Gh();var n=bs,s=al,o=Ur,u=hw;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?$t=5:($t=0,al=bs=null,Sw(n,n.pendingLanes));var d=n.pendingLanes;if(d===0&&(ws=null),Tr(o),s=s.stateNode,an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(yi,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=W.T,d=ce.p,ce.p=2,W.T=null;try{for(var m=n.onRecoverableError,y=0;y<u.length;y++){var w=u[y];m(w.value,{componentStack:w.stack})}}finally{W.T=s,ce.p=d}}(Ur&3)!==0&&tf(),ir(n),d=n.pendingLanes,(o&261930)!==0&&(d&42)!==0?n===Ig?lc++:(lc=0,Ig=n):lc=0,uc(0)}}function Sw(n,s){(n.pooledCacheLanes&=s)===0&&(s=n.pooledCache,s!=null&&(n.pooledCache=null,qu(s)))}function tf(){return bw(),Iw(),Aw(),Rw()}function Rw(){if($t!==5)return!1;var n=bs,s=wg;wg=0;var o=Tr(Ur),u=W.T,d=ce.p;try{ce.p=32>o?32:o,W.T=null,o=bg,bg=null;var m=bs,y=Ur;if($t=0,al=bs=null,Ur=0,(Qe&6)!==0)throw Error(i(331));var w=Qe;if(Qe|=4,lw(m.current),sw(m,m.current,y,o),Qe=w,uc(0,!1),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(yi,m)}catch{}return!0}finally{ce.p=d,W.T=u,Sw(n,s)}}function Cw(n,s,o){s=oi(o,s),s=ng(n.stateNode,s,2),n=gs(n,s,2),n!==null&&(pa(n,2),ir(n))}function Ze(n,s,o){if(n.tag===3)Cw(n,n,o);else for(;s!==null;){if(s.tag===3){Cw(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ws===null||!ws.has(u))){n=oi(o,n),o=NT(2),u=gs(s,o,2),u!==null&&(DT(o,u,s,n),pa(u,2),ir(u));break}}s=s.return}}function Rg(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new xC;var d=new Set;u.set(s,d)}else d=u.get(s),d===void 0&&(d=new Set,u.set(s,d));d.has(o)||(vg=!0,d.add(o),n=MC.bind(null,n,s,o),s.then(n,n))}function MC(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,at===n&&(Me&o)===o&&(It===4||It===3&&(Me&62914560)===Me&&300>wn()-$d?(Qe&2)===0&&ol(n,0):Eg|=o,sl===Me&&(sl=0)),ir(n)}function Nw(n,s){s===0&&(s=Xh()),n=Na(n,s),n!==null&&(pa(n,s),ir(n))}function LC(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),Nw(n,o)}function UC(n,s){var o=0;switch(n.tag){case 31:case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(s),Nw(n,o)}function zC(n,s){return Yt(n,s)}var nf=null,ul=null,Cg=!1,rf=!1,Ng=!1,As=0;function ir(n){n!==ul&&n.next===null&&(ul===null?nf=ul=n:ul=ul.next=n),rf=!0,Cg||(Cg=!0,jC())}function uc(n,s){if(!Ng&&rf){Ng=!0;do for(var o=!1,u=nf;u!==null;){if(n!==0){var d=u.pendingLanes;if(d===0)var m=0;else{var y=u.suspendedLanes,w=u.pingedLanes;m=(1<<31-Ct(42|n)+1)-1,m&=d&~(y&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,Pw(u,m))}else m=Me,m=zi(u,u===at?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||vi(u,m)||(o=!0,Pw(u,m));u=u.next}while(o);Ng=!1}}function BC(){Dw()}function Dw(){rf=Cg=!1;var n=0;As!==0&&XC()&&(n=As);for(var s=wn(),o=null,u=nf;u!==null;){var d=u.next,m=xw(u,s);m===0?(u.next=null,o===null?nf=d:o.next=d,d===null&&(ul=o)):(o=u,(n!==0||(m&3)!==0)&&(rf=!0)),u=d}$t!==0&&$t!==5||uc(n),As!==0&&(As=0)}function xw(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var y=31-Ct(m),w=1<<y,N=d[y];N===-1?((w&o)===0||(w&u)!==0)&&(d[y]=rp(w,s)):N<=s&&(n.expiredLanes|=w),m&=~w}if(s=at,o=Me,o=zi(n,n===s?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===s&&(Je===2||Je===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Zr(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||vi(n,o)){if(s=o&-o,s===n.callbackPriority)return s;switch(u!==null&&Zr(u),Tr(o)){case 2:case 8:o=vu;break;case 32:o=es;break;case 268435456:o=Kh;break;default:o=es}return u=Vw.bind(null,n),o=Yt(o,u),n.callbackPriority=s,n.callbackNode=o,s}return u!==null&&u!==null&&Zr(u),n.callbackPriority=2,n.callbackNode=null,2}function Vw(n,s){if($t!==0&&$t!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(tf()&&n.callbackNode!==o)return null;var u=Me;return u=zi(n,n===at?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(fw(n,u,s),xw(n,wn()),n.callbackNode!=null&&n.callbackNode===o?Vw.bind(null,n):null)}function Pw(n,s){if(tf())return null;fw(n,s,!0)}function jC(){ZC(function(){(Qe&6)!==0?Yt(yu,BC):Dw()})}function Dg(){if(As===0){var n=Yo;n===0&&(n=Li,Li<<=1,(Li&261888)===0&&(Li=256)),As=n}return As}function Ow(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Po(""+n)}function kw(n,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,n.id&&o.setAttribute("form",n.id),s.parentNode.insertBefore(o,s),n=new FormData(n),o.parentNode.removeChild(o),n}function FC(n,s,o,u,d){if(s==="submit"&&o&&o.stateNode===d){var m=Ow((d[Jt]||null).action),y=u.submitter;y&&(s=(s=y[Jt]||null)?Ow(s.formAction):y.getAttribute("formAction"),s!==null&&(m=s,y=null));var w=new Wi("action","action",null,u,d);n.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(As!==0){var N=y?kw(d,y):new FormData(d);Wp(o,{pending:!0,data:N,method:d.method,action:m},null,N)}}else typeof m=="function"&&(w.preventDefault(),N=y?kw(d,y):new FormData(d),Wp(o,{pending:!0,data:N,method:d.method,action:m},m,N))},currentTarget:d}]})}}for(var xg=0;xg<fp.length;xg++){var Vg=fp[xg],qC=Vg.toLowerCase(),HC=Vg[0].toUpperCase()+Vg.slice(1);Ri(qC,"on"+HC)}Ri(dE,"onAnimationEnd"),Ri(fE,"onAnimationIteration"),Ri(mE,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(aC,"onTransitionRun"),Ri(oC,"onTransitionStart"),Ri(lC,"onTransitionCancel"),Ri(pE,"onTransitionEnd"),Ki("onMouseEnter",["mouseout","mouseover"]),Ki("onMouseLeave",["mouseout","mouseover"]),Ki("onPointerEnter",["pointerout","pointerover"]),Ki("onPointerLeave",["pointerout","pointerover"]),Gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cc));function Mw(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(s)for(var y=u.length-1;0<=y;y--){var w=u[y],N=w.instance,j=w.currentTarget;if(w=w.listener,N!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=j;try{m(d)}catch(Y){yd(Y)}d.currentTarget=null,m=N}else for(y=0;y<u.length;y++){if(w=u[y],N=w.instance,j=w.currentTarget,w=w.listener,N!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=j;try{m(d)}catch(Y){yd(Y)}d.currentTarget=null,m=N}}}}function Pe(n,s){var o=s[Co];o===void 0&&(o=s[Co]=new Set);var u=n+"__bubble";o.has(u)||(Lw(s,n,2,!1),o.add(u))}function Pg(n,s,o){var u=0;s&&(u|=4),Lw(o,n,u,s)}var sf="_reactListening"+Math.random().toString(36).slice(2);function Og(n){if(!n[sf]){n[sf]=!0,wu.forEach(function(o){o!=="selectionchange"&&(GC.has(o)||Pg(o,!1,n),Pg(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[sf]||(s[sf]=!0,Pg("selectionchange",!1,s))}}function Lw(n,s,o,u){switch(db(s)){case 2:var d=vN;break;case 8:d=EN;break;default:d=$g}o=d.bind(null,s,o,n),d=void 0,!Ta||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(s,o,{capture:!0,passive:d}):n.addEventListener(s,o,!0):d!==void 0?n.addEventListener(s,o,{passive:d}):n.addEventListener(s,o,!1)}function kg(n,s,o,u,d){var m=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var y=u.tag;if(y===3||y===4){var w=u.stateNode.containerInfo;if(w===d)break;if(y===4)for(y=u.return;y!==null;){var N=y.tag;if((N===3||N===4)&&y.stateNode.containerInfo===d)return;y=y.return}for(;w!==null;){if(y=qi(w),y===null)return;if(N=y.tag,N===5||N===6||N===26||N===27){u=m=y;continue e}w=w.parentNode}}u=u.return}as(function(){var j=m,Y=ii(o),Z=[];e:{var F=gE.get(n);if(F!==void 0){var K=Wi,ge=n;switch(n){case"keypress":if(ba(o)===0)break e;case"keydown":case"keyup":K=pd;break;case"focusin":ge="focus",K=Aa;break;case"focusout":ge="blur",K=Aa;break;case"beforeblur":case"afterblur":K=Aa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=ad;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=_;break;case dE:case fE:case mE:K=ld;break;case pE:K=b;break;case"scroll":case"scrollend":K=Ou;break;case"wheel":K=H;break;case"copy":case"cut":case"paste":K=ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Ir;break;case"toggle":case"beforetoggle":K=Re}var be=(s&4)!==0,st=!be&&(n==="scroll"||n==="scrollend"),L=be?F!==null?F+"Capture":null:F;be=[];for(var V=j,B;V!==null;){var J=V;if(B=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||B===null||L===null||(J=bi(V,L),J!=null&&be.push(hc(V,J,B))),st)break;V=V.return}0<be.length&&(F=new K(F,ge,null,o,Y),Z.push({event:F,listeners:be}))}}if((s&7)===0){e:{if(F=n==="mouseover"||n==="pointerover",K=n==="mouseout"||n==="pointerout",F&&o!==xu&&(ge=o.relatedTarget||o.fromElement)&&(qi(ge)||ge[ji]))break e;if((K||F)&&(F=Y.window===Y?Y:(F=Y.ownerDocument)?F.defaultView||F.parentWindow:window,K?(ge=o.relatedTarget||o.toElement,K=j,ge=ge?qi(ge):null,ge!==null&&(st=l(ge),be=ge.tag,ge!==st||be!==5&&be!==27&&be!==6)&&(ge=null)):(K=null,ge=j),K!==ge)){if(be=ku,J="onMouseLeave",L="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(be=Ir,J="onPointerLeave",L="onPointerEnter",V="pointer"),st=K==null?F:jn(K),B=ge==null?F:jn(ge),F=new be(J,V+"leave",K,o,Y),F.target=st,F.relatedTarget=B,J=null,qi(Y)===j&&(be=new be(L,V+"enter",ge,o,Y),be.target=B,be.relatedTarget=st,J=be),st=J,K&&ge)t:{for(be=KC,L=K,V=ge,B=0,J=L;J;J=be(J))B++;J=0;for(var Ee=V;Ee;Ee=be(Ee))J++;for(;0<B-J;)L=be(L),B--;for(;0<J-B;)V=be(V),J--;for(;B--;){if(L===V||V!==null&&L===V.alternate){be=L;break t}L=be(L),V=be(V)}be=null}else be=null;K!==null&&Uw(Z,F,K,be,!1),ge!==null&&st!==null&&Uw(Z,st,ge,be,!0)}}e:{if(F=j?jn(j):window,K=F.nodeName&&F.nodeName.toLowerCase(),K==="select"||K==="input"&&F.type==="file")var qe=tE;else if(Zv(F))if(nE)qe=iC;else{qe=tC;var ye=eC}else K=F.nodeName,!K||K.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?j&&Vo(j.elementType)&&(qe=tE):qe=nC;if(qe&&(qe=qe(n,j))){eE(Z,qe,o,Y);break e}ye&&ye(n,F,j),n==="focusout"&&j&&F.type==="number"&&j.memoizedProps.value!=null&&Cu(F,"number",F.value)}switch(ye=j?jn(j):window,n){case"focusin":(Zv(ye)||ye.contentEditable==="true")&&(Bo=ye,cp=j,Bu=null);break;case"focusout":Bu=cp=Bo=null;break;case"mousedown":hp=!0;break;case"contextmenu":case"mouseup":case"dragend":hp=!1,cE(Z,o,Y);break;case"selectionchange":if(sC)break;case"keydown":case"keyup":cE(Z,o,Y)}var xe;if(Ke)e:{switch(n){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else zo?Sa(n,o)&&(Le="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Le="onCompositionStart");Le&&(Zi&&o.locale!=="ko"&&(zo||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&zo&&(xe=Pu()):($i=Y,Vu="value"in $i?$i.value:$i.textContent,zo=!0)),ye=af(j,Le),0<ye.length&&(Le=new Ji(Le,n,null,o,Y),Z.push({event:Le,listeners:ye}),xe?Le.data=xe:(xe=Uo(o),xe!==null&&(Le.data=xe)))),(xe=si?W1(n,o):X1(n,o))&&(Le=af(j,"onBeforeInput"),0<Le.length&&(ye=new Ji("onBeforeInput","beforeinput",null,o,Y),Z.push({event:ye,listeners:Le}),ye.data=xe)),FC(Z,n,j,o,Y)}Mw(Z,s)})}function hc(n,s,o){return{instance:n,listener:s,currentTarget:o}}function af(n,s){for(var o=s+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=bi(n,o),d!=null&&u.unshift(hc(n,d,m)),d=bi(n,s),d!=null&&u.push(hc(n,d,m))),n.tag===3)return u;n=n.return}return[]}function KC(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Uw(n,s,o,u,d){for(var m=s._reactName,y=[];o!==null&&o!==u;){var w=o,N=w.alternate,j=w.stateNode;if(w=w.tag,N!==null&&N===u)break;w!==5&&w!==26&&w!==27||j===null||(N=j,d?(j=bi(o,m),j!=null&&y.unshift(hc(o,j,N))):d||(j=bi(o,m),j!=null&&y.push(hc(o,j,N)))),o=o.return}y.length!==0&&n.push({event:s,listeners:y})}var QC=/\r\n?/g,YC=/\u0000|\uFFFD/g;function zw(n){return(typeof n=="string"?n:""+n).replace(QC,`
`).replace(YC,"")}function Bw(n,s){return s=zw(s),zw(n)===s}function rt(n,s,o,u,d,m){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||xn(n,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&xn(n,""+u);break;case"className":Fn(n,"class",u);break;case"tabIndex":Fn(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Fn(n,o,u);break;case"style":Du(n,u,m);break;case"data":if(s!=="object"){Fn(n,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Po(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&rt(n,s,"name",d.name,d,null),rt(n,s,"formEncType",d.formEncType,d,null),rt(n,s,"formMethod",d.formMethod,d,null),rt(n,s,"formTarget",d.formTarget,d,null)):(rt(n,s,"encType",d.encType,d,null),rt(n,s,"method",d.method,d,null),rt(n,s,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Po(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=wi);break;case"onScroll":u!=null&&Pe("scroll",n);break;case"onScrollEnd":u!=null&&Pe("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Po(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Pe("beforetoggle",n),Pe("toggle",n),Do(n,"popover",u);break;case"xlinkActuate":zt(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":zt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":zt(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":zt(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":zt(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":zt(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":zt(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":zt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":zt(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Do(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=sd.get(o)||o,Do(n,o,u))}}function Mg(n,s,o,u,d,m){switch(o){case"style":Du(n,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof u=="string"?xn(n,u):(typeof u=="number"||typeof u=="bigint")&&xn(n,""+u);break;case"onScroll":u!=null&&Pe("scroll",n);break;case"onScrollEnd":u!=null&&Pe("scrollend",n);break;case"onClick":u!=null&&(n.onclick=wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bu.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),s=o.slice(2,d?o.length-7:void 0),m=n[Jt]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(s,m,d),typeof u=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(s,u,d);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Do(n,o,u)}}}function hn(n,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",n),Pe("load",n);var u=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var y=o[m];if(y!=null)switch(m){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:rt(n,s,m,y,o,null)}}d&&rt(n,s,"srcSet",o.srcSet,o,null),u&&rt(n,s,"src",o.src,o,null);return;case"input":Pe("invalid",n);var w=m=y=d=null,N=null,j=null;for(u in o)if(o.hasOwnProperty(u)){var Y=o[u];if(Y!=null)switch(u){case"name":d=Y;break;case"type":y=Y;break;case"checked":N=Y;break;case"defaultChecked":j=Y;break;case"value":m=Y;break;case"defaultValue":w=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(i(137,s));break;default:rt(n,s,u,Y,o,null)}}nd(n,m,w,N,j,y,d,!1);return;case"select":Pe("invalid",n),u=y=m=null;for(d in o)if(o.hasOwnProperty(d)&&(w=o[d],w!=null))switch(d){case"value":m=w;break;case"defaultValue":y=w;break;case"multiple":u=w;default:rt(n,s,d,w,o,null)}s=m,o=y,n.multiple=!!u,s!=null?ns(n,!!u,s,!1):o!=null&&ns(n,!!u,o,!0);return;case"textarea":Pe("invalid",n),m=d=u=null;for(y in o)if(o.hasOwnProperty(y)&&(w=o[y],w!=null))switch(y){case"value":u=w;break;case"defaultValue":d=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(91));break;default:rt(n,s,y,w,o,null)}is(n,u,d,m);return;case"option":for(N in o)if(o.hasOwnProperty(N)&&(u=o[N],u!=null))switch(N){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:rt(n,s,N,u,o,null)}return;case"dialog":Pe("beforetoggle",n),Pe("toggle",n),Pe("cancel",n),Pe("close",n);break;case"iframe":case"object":Pe("load",n);break;case"video":case"audio":for(u=0;u<cc.length;u++)Pe(cc[u],n);break;case"image":Pe("error",n),Pe("load",n);break;case"details":Pe("toggle",n);break;case"embed":case"source":case"link":Pe("error",n),Pe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in o)if(o.hasOwnProperty(j)&&(u=o[j],u!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:rt(n,s,j,u,o,null)}return;default:if(Vo(s)){for(Y in o)o.hasOwnProperty(Y)&&(u=o[Y],u!==void 0&&Mg(n,s,Y,u,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(u=o[w],u!=null&&rt(n,s,w,u,o,null))}function $C(n,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,y=null,w=null,N=null,j=null,Y=null;for(K in o){var Z=o[K];if(o.hasOwnProperty(K)&&Z!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":N=Z;default:u.hasOwnProperty(K)||rt(n,s,K,null,u,Z)}}for(var F in u){var K=u[F];if(Z=o[F],u.hasOwnProperty(F)&&(K!=null||Z!=null))switch(F){case"type":m=K;break;case"name":d=K;break;case"checked":j=K;break;case"defaultChecked":Y=K;break;case"value":y=K;break;case"defaultValue":w=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(i(137,s));break;default:K!==Z&&rt(n,s,F,K,u,Z)}}xo(n,y,w,N,j,Y,m,d);return;case"select":K=y=w=F=null;for(m in o)if(N=o[m],o.hasOwnProperty(m)&&N!=null)switch(m){case"value":break;case"multiple":K=N;default:u.hasOwnProperty(m)||rt(n,s,m,null,u,N)}for(d in u)if(m=u[d],N=o[d],u.hasOwnProperty(d)&&(m!=null||N!=null))switch(d){case"value":F=m;break;case"defaultValue":w=m;break;case"multiple":y=m;default:m!==N&&rt(n,s,d,m,u,N)}s=w,o=y,u=K,F!=null?ns(n,!!o,F,!1):!!u!=!!o&&(s!=null?ns(n,!!o,s,!0):ns(n,!!o,o?[]:"",!1));return;case"textarea":K=F=null;for(w in o)if(d=o[w],o.hasOwnProperty(w)&&d!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:rt(n,s,w,null,u,d)}for(y in u)if(d=u[y],m=o[y],u.hasOwnProperty(y)&&(d!=null||m!=null))switch(y){case"value":F=d;break;case"defaultValue":K=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==m&&rt(n,s,y,d,u,m)}id(n,F,K);return;case"option":for(var ge in o)if(F=o[ge],o.hasOwnProperty(ge)&&F!=null&&!u.hasOwnProperty(ge))switch(ge){case"selected":n.selected=!1;break;default:rt(n,s,ge,null,u,F)}for(N in u)if(F=u[N],K=o[N],u.hasOwnProperty(N)&&F!==K&&(F!=null||K!=null))switch(N){case"selected":n.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:rt(n,s,N,F,u,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in o)F=o[be],o.hasOwnProperty(be)&&F!=null&&!u.hasOwnProperty(be)&&rt(n,s,be,null,u,F);for(j in u)if(F=u[j],K=o[j],u.hasOwnProperty(j)&&F!==K&&(F!=null||K!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(i(137,s));break;default:rt(n,s,j,F,u,K)}return;default:if(Vo(s)){for(var st in o)F=o[st],o.hasOwnProperty(st)&&F!==void 0&&!u.hasOwnProperty(st)&&Mg(n,s,st,void 0,u,F);for(Y in u)F=u[Y],K=o[Y],!u.hasOwnProperty(Y)||F===K||F===void 0&&K===void 0||Mg(n,s,Y,F,u,K);return}}for(var L in o)F=o[L],o.hasOwnProperty(L)&&F!=null&&!u.hasOwnProperty(L)&&rt(n,s,L,null,u,F);for(Z in u)F=u[Z],K=o[Z],!u.hasOwnProperty(Z)||F===K||F==null&&K==null||rt(n,s,Z,F,u,K)}function jw(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function WC(){if(typeof performance.getEntriesByType=="function"){for(var n=0,s=0,o=performance.getEntriesByType("resource"),u=0;u<o.length;u++){var d=o[u],m=d.transferSize,y=d.initiatorType,w=d.duration;if(m&&w&&jw(y)){for(y=0,w=d.responseEnd,u+=1;u<o.length;u++){var N=o[u],j=N.startTime;if(j>w)break;var Y=N.transferSize,Z=N.initiatorType;Y&&jw(Z)&&(N=N.responseEnd,y+=Y*(N<w?1:(w-j)/(N-j)))}if(--u,s+=8*(m+y)/(d.duration/1e3),n++,10<n)break}}if(0<n)return s/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Lg=null,Ug=null;function of(n){return n.nodeType===9?n:n.ownerDocument}function Fw(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qw(n,s){if(n===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&s==="foreignObject"?0:n}function zg(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Bg=null;function XC(){var n=window.event;return n&&n.type==="popstate"?n===Bg?!1:(Bg=n,!0):(Bg=null,!1)}var Hw=typeof setTimeout=="function"?setTimeout:void 0,JC=typeof clearTimeout=="function"?clearTimeout:void 0,Gw=typeof Promise=="function"?Promise:void 0,ZC=typeof queueMicrotask=="function"?queueMicrotask:typeof Gw<"u"?function(n){return Gw.resolve(null).then(n).catch(eN)}:Hw;function eN(n){setTimeout(function(){throw n})}function Ss(n){return n==="head"}function Kw(n,s){var o=s,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"||o==="/&"){if(u===0){n.removeChild(d),fl(s);return}u--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")u++;else if(o==="html")dc(n.ownerDocument.documentElement);else if(o==="head"){o=n.ownerDocument.head,dc(o);for(var m=o.firstChild;m;){var y=m.nextSibling,w=m.nodeName;m[Fi]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=y}}else o==="body"&&dc(n.ownerDocument.body);o=d}while(o);fl(s)}function Qw(n,s){var o=n;n=0;do{var u=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(n===0)break;n--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||n++;o=u}while(o)}function jg(n){var s=n.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":jg(o),No(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function tN(n,s,o,u){for(;n.nodeType===1;){var d=o;if(n.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Fi])switch(s){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==d.rel||n.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||n.getAttribute("title")!==(d.title==null?null:d.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(d.src==null?null:d.src)||n.getAttribute("type")!==(d.type==null?null:d.type)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(s==="input"&&n.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=di(n.nextSibling),n===null)break}return null}function nN(n,s,o){if(s==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=di(n.nextSibling),n===null))return null;return n}function Yw(n,s){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=di(n.nextSibling),n===null))return null;return n}function Fg(n){return n.data==="$?"||n.data==="$~"}function qg(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function iN(n,s){var o=n.ownerDocument;if(n.data==="$~")n._reactRetry=s;else if(n.data!=="$?"||o.readyState!=="loading")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function di(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return n}var Hg=null;function $w(n){n=n.nextSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"||o==="/&"){if(s===0)return di(n.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}n=n.nextSibling}return null}function Ww(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return n;s--}else o!=="/$"&&o!=="/&"||s++}n=n.previousSibling}return null}function Xw(n,s,o){switch(s=of(o),n){case"html":if(n=s.documentElement,!n)throw Error(i(452));return n;case"head":if(n=s.head,!n)throw Error(i(453));return n;case"body":if(n=s.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function dc(n){for(var s=n.attributes;s.length;)n.removeAttributeNode(s[0]);No(n)}var fi=new Map,Jw=new Set;function lf(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var zr=ce.d;ce.d={f:rN,r:sN,D:aN,C:oN,L:lN,m:uN,X:hN,S:cN,M:dN};function rN(){var n=zr.f(),s=Jd();return n||s}function sN(n){var s=ni(n);s!==null&&s.tag===5&&s.type==="form"?pT(s):zr.r(n)}var cl=typeof document>"u"?null:document;function Zw(n,s,o){var u=cl;if(u&&typeof s=="string"&&s){var d=Dn(s);d='link[rel="'+n+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),Jw.has(d)||(Jw.add(d),n={rel:n,crossOrigin:o,href:s},u.querySelector(d)===null&&(s=u.createElement("link"),hn(s,"link",n),Ut(s),u.head.appendChild(s)))}}function aN(n){zr.D(n),Zw("dns-prefetch",n,null)}function oN(n,s){zr.C(n,s),Zw("preconnect",n,s)}function lN(n,s,o){zr.L(n,s,o);var u=cl;if(u&&n&&s){var d='link[rel="preload"][as="'+Dn(s)+'"]';s==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Dn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Dn(o.imageSizes)+'"]')):d+='[href="'+Dn(n)+'"]';var m=d;switch(s){case"style":m=hl(n);break;case"script":m=dl(n)}fi.has(m)||(n=T({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:n,as:s},o),fi.set(m,n),u.querySelector(d)!==null||s==="style"&&u.querySelector(fc(m))||s==="script"&&u.querySelector(mc(m))||(s=u.createElement("link"),hn(s,"link",n),Ut(s),u.head.appendChild(s)))}}function uN(n,s){zr.m(n,s);var o=cl;if(o&&n){var u=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+Dn(u)+'"][href="'+Dn(n)+'"]',m=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=dl(n)}if(!fi.has(m)&&(n=T({rel:"modulepreload",href:n},s),fi.set(m,n),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(mc(m)))return}u=o.createElement("link"),hn(u,"link",n),Ut(u),o.head.appendChild(u)}}}function cN(n,s,o){zr.S(n,s,o);var u=cl;if(u&&n){var d=Hi(u).hoistableStyles,m=hl(n);s=s||"default";var y=d.get(m);if(!y){var w={loading:0,preload:null};if(y=u.querySelector(fc(m)))w.loading=5;else{n=T({rel:"stylesheet",href:n,"data-precedence":s},o),(o=fi.get(m))&&Gg(n,o);var N=y=u.createElement("link");Ut(N),hn(N,"link",n),N._p=new Promise(function(j,Y){N.onload=j,N.onerror=Y}),N.addEventListener("load",function(){w.loading|=1}),N.addEventListener("error",function(){w.loading|=2}),w.loading|=4,uf(y,s,u)}y={type:"stylesheet",instance:y,count:1,state:w},d.set(m,y)}}}function hN(n,s){zr.X(n,s);var o=cl;if(o&&n){var u=Hi(o).hoistableScripts,d=dl(n),m=u.get(d);m||(m=o.querySelector(mc(d)),m||(n=T({src:n,async:!0},s),(s=fi.get(d))&&Kg(n,s),m=o.createElement("script"),Ut(m),hn(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function dN(n,s){zr.M(n,s);var o=cl;if(o&&n){var u=Hi(o).hoistableScripts,d=dl(n),m=u.get(d);m||(m=o.querySelector(mc(d)),m||(n=T({src:n,async:!0,type:"module"},s),(s=fi.get(d))&&Kg(n,s),m=o.createElement("script"),Ut(m),hn(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function eb(n,s,o,u){var d=(d=De.current)?lf(d):null;if(!d)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=hl(o.href),o=Hi(d).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=hl(o.href);var m=Hi(d).hoistableStyles,y=m.get(n);if(y||(d=d.ownerDocument||d,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,y),(m=d.querySelector(fc(n)))&&!m._p&&(y.instance=m,y.state.loading=5),fi.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},fi.set(n,o),m||fN(d,n,o,y.state))),s&&u===null)throw Error(i(528,""));return y}if(s&&u!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=dl(o),o=Hi(d).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function hl(n){return'href="'+Dn(n)+'"'}function fc(n){return'link[rel="stylesheet"]['+n+"]"}function tb(n){return T({},n,{"data-precedence":n.precedence,precedence:null})}function fN(n,s,o,u){n.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=n.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),hn(s,"link",o),Ut(s),n.head.appendChild(s))}function dl(n){return'[src="'+Dn(n)+'"]'}function mc(n){return"script[async]"+n}function nb(n,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=n.querySelector('style[data-href~="'+Dn(o.href)+'"]');if(u)return s.instance=u,Ut(u),u;var d=T({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),Ut(u),hn(u,"style",d),uf(u,o.precedence,n),s.instance=u;case"stylesheet":d=hl(o.href);var m=n.querySelector(fc(d));if(m)return s.state.loading|=4,s.instance=m,Ut(m),m;u=tb(o),(d=fi.get(d))&&Gg(u,d),m=(n.ownerDocument||n).createElement("link"),Ut(m);var y=m;return y._p=new Promise(function(w,N){y.onload=w,y.onerror=N}),hn(m,"link",u),s.state.loading|=4,uf(m,o.precedence,n),s.instance=m;case"script":return m=dl(o.src),(d=n.querySelector(mc(m)))?(s.instance=d,Ut(d),d):(u=o,(d=fi.get(m))&&(u=T({},o),Kg(u,d)),n=n.ownerDocument||n,d=n.createElement("script"),Ut(d),hn(d,"link",u),n.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,uf(u,o.precedence,n));return s.instance}function uf(n,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,m=d,y=0;y<u.length;y++){var w=u[y];if(w.dataset.precedence===s)m=w;else if(m!==d)break}m?m.parentNode.insertBefore(n,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(n,s.firstChild))}function Gg(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.title==null&&(n.title=s.title)}function Kg(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.integrity==null&&(n.integrity=s.integrity)}var cf=null;function ib(n,s,o){if(cf===null){var u=new Map,d=cf=new Map;d.set(o,u)}else d=cf,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),d=0;d<o.length;d++){var m=o[d];if(!(m[Fi]||m[Lt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var y=m.getAttribute(s)||"";y=n+y;var w=u.get(y);w?w.push(m):u.set(y,[m])}}return u}function rb(n,s,o){n=n.ownerDocument||n,n.head.insertBefore(o,s==="title"?n.querySelector("head > title"):null)}function mN(n,s,o){if(o===1||s.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return n=s.disabled,typeof s.precedence=="string"&&n==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function sb(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function pN(n,s,o,u){if(o.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var d=hl(u.href),m=s.querySelector(fc(d));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(n.count++,n=hf.bind(n),s.then(n,n)),o.state.loading|=4,o.instance=m,Ut(m);return}m=s.ownerDocument||s,u=tb(u),(d=fi.get(d))&&Gg(u,d),m=m.createElement("link"),Ut(m);var y=m;y._p=new Promise(function(w,N){y.onload=w,y.onerror=N}),hn(m,"link",u),o.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(n.count++,o=hf.bind(n),s.addEventListener("load",o),s.addEventListener("error",o))}}var Qg=0;function gN(n,s){return n.stylesheets&&n.count===0&&ff(n,n.stylesheets),0<n.count||0<n.imgCount?function(o){var u=setTimeout(function(){if(n.stylesheets&&ff(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+s);0<n.imgBytes&&Qg===0&&(Qg=62500*WC());var d=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&ff(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>Qg?50:800)+s);return n.unsuspend=o,function(){n.unsuspend=null,clearTimeout(u),clearTimeout(d)}}:null}function hf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ff(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var df=null;function ff(n,s){n.stylesheets=null,n.unsuspend!==null&&(n.count++,df=new Map,s.forEach(_N,n),df=null,hf.call(n))}function _N(n,s){if(!(s.state.loading&4)){var o=df.get(n);if(o)var u=o.get(null);else{o=new Map,df.set(n,o);for(var d=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var y=d[m];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(o.set(y.dataset.precedence,y),u=y)}u&&o.set(null,u)}d=s.instance,y=d.getAttribute("data-precedence"),m=o.get(y)||u,m===u&&o.set(null,d),o.set(y,d),this.count++,u=hf.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),m?m.parentNode.insertBefore(d,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(d,n.firstChild)),s.state.loading|=4}}var pc={$$typeof:G,Provider:null,Consumer:null,_currentValue:Te,_currentValue2:Te,_threadCount:0};function yN(n,s,o,u,d,m,y,w,N){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.hiddenUpdates=Bi(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.incompleteTransitions=new Map}function ab(n,s,o,u,d,m,y,w,N,j,Y,Z){return n=new yN(n,s,o,y,N,j,Y,Z,w),s=1,m===!0&&(s|=24),m=Hn(3,null,null,s),n.current=m,m.stateNode=n,s=Sp(),s.refCount++,n.pooledCache=s,s.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:s},Dp(m),n}function ob(n){return n?(n=qo,n):qo}function lb(n,s,o,u,d,m){d=ob(d),u.context===null?u.context=d:u.pendingContext=d,u=ps(s),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=gs(n,u,s),o!==null&&(Mn(o,n,s),Qu(o,n,s))}function ub(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function Yg(n,s){ub(n,s),(n=n.alternate)&&ub(n,s)}function cb(n){if(n.tag===13||n.tag===31){var s=Na(n,67108864);s!==null&&Mn(s,n,67108864),Yg(n,67108864)}}function hb(n){if(n.tag===13||n.tag===31){var s=$n();s=_a(s);var o=Na(n,s);o!==null&&Mn(o,n,s),Yg(n,s)}}var mf=!0;function vN(n,s,o,u){var d=W.T;W.T=null;var m=ce.p;try{ce.p=2,$g(n,s,o,u)}finally{ce.p=m,W.T=d}}function EN(n,s,o,u){var d=W.T;W.T=null;var m=ce.p;try{ce.p=8,$g(n,s,o,u)}finally{ce.p=m,W.T=d}}function $g(n,s,o,u){if(mf){var d=Wg(u);if(d===null)kg(n,s,u,pf,o),fb(n,u);else if(wN(d,n,s,o,u))u.stopPropagation();else if(fb(n,u),s&4&&-1<TN.indexOf(n)){for(;d!==null;){var m=ni(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var y=Ui(m.pendingLanes);if(y!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var N=1<<31-Ct(y);w.entanglements[1]|=N,y&=~N}ir(m),(Qe&6)===0&&(Wd=wn()+500,uc(0))}}break;case 31:case 13:w=Na(m,2),w!==null&&Mn(w,m,2),Jd(),Yg(m,2)}if(m=Wg(u),m===null&&kg(n,s,u,pf,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else kg(n,s,u,null,o)}}function Wg(n){return n=ii(n),Xg(n)}var pf=null;function Xg(n){if(pf=null,n=qi(n),n!==null){var s=l(n);if(s===null)n=null;else{var o=s.tag;if(o===13){if(n=c(s),n!==null)return n;n=null}else if(o===31){if(n=f(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}return pf=n,null}function db(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fa()){case yu:return 2;case vu:return 8;case es:case ip:return 32;case Kh:return 268435456;default:return 32}default:return 32}}var Jg=!1,Rs=null,Cs=null,Ns=null,gc=new Map,_c=new Map,Ds=[],TN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fb(n,s){switch(n){case"focusin":case"focusout":Rs=null;break;case"dragenter":case"dragleave":Cs=null;break;case"mouseover":case"mouseout":Ns=null;break;case"pointerover":case"pointerout":gc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":_c.delete(s.pointerId)}}function yc(n,s,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},s!==null&&(s=ni(s),s!==null&&cb(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function wN(n,s,o,u,d){switch(s){case"focusin":return Rs=yc(Rs,n,s,o,u,d),!0;case"dragenter":return Cs=yc(Cs,n,s,o,u,d),!0;case"mouseover":return Ns=yc(Ns,n,s,o,u,d),!0;case"pointerover":var m=d.pointerId;return gc.set(m,yc(gc.get(m)||null,n,s,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,_c.set(m,yc(_c.get(m)||null,n,s,o,u,d)),!0}return!1}function mb(n){var s=qi(n.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){n.blockedOn=s,Ei(n.priority,function(){hb(o)});return}}else if(s===31){if(s=f(o),s!==null){n.blockedOn=s,Ei(n.priority,function(){hb(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function gf(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=Wg(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);xu=u,o.target.dispatchEvent(u),xu=null}else return s=ni(o),s!==null&&cb(s),n.blockedOn=o,!1;s.shift()}return!0}function pb(n,s,o){gf(n)&&o.delete(s)}function bN(){Jg=!1,Rs!==null&&gf(Rs)&&(Rs=null),Cs!==null&&gf(Cs)&&(Cs=null),Ns!==null&&gf(Ns)&&(Ns=null),gc.forEach(pb),_c.forEach(pb)}function _f(n,s){n.blockedOn===s&&(n.blockedOn=null,Jg||(Jg=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,bN)))}var yf=null;function gb(n){yf!==n&&(yf=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){yf===n&&(yf=null);for(var s=0;s<n.length;s+=3){var o=n[s],u=n[s+1],d=n[s+2];if(typeof u!="function"){if(Xg(u||o)===null)continue;break}var m=ni(o);m!==null&&(n.splice(s,3),s-=3,Wp(m,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function fl(n){function s(N){return _f(N,n)}Rs!==null&&_f(Rs,n),Cs!==null&&_f(Cs,n),Ns!==null&&_f(Ns,n),gc.forEach(s),_c.forEach(s);for(var o=0;o<Ds.length;o++){var u=Ds[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<Ds.length&&(o=Ds[0],o.blockedOn===null);)mb(o),o.blockedOn===null&&Ds.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],m=o[u+1],y=d[Jt]||null;if(typeof m=="function")y||gb(o);else if(y){var w=null;if(m&&m.hasAttribute("formAction")){if(d=m,y=m[Jt]||null)w=y.formAction;else if(Xg(d)!==null)continue}else w=y.action;typeof w=="function"?o[u+1]=w:(o.splice(u,3),u-=3),gb(o)}}}function _b(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(y){return d=y})},focusReset:"manual",scroll:"manual"})}function s(){d!==null&&(d(),d=null),u||setTimeout(o,20)}function o(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,d=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){u=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),d!==null&&(d(),d=null)}}}function Zg(n){this._internalRoot=n}vf.prototype.render=Zg.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,u=$n();lb(o,u,n,s,null,null)},vf.prototype.unmount=Zg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;lb(n.current,2,null,n,null,null),Jd(),s[ji]=null}};function vf(n){this._internalRoot=n}vf.prototype.unstable_scheduleHydration=function(n){if(n){var s=Jh();n={blockedOn:null,target:n,priority:s};for(var o=0;o<Ds.length&&s!==0&&s<Ds[o].priority;o++);Ds.splice(o,0,n),o===0&&mb(n)}};var yb=e.version;if(yb!=="19.2.3")throw Error(i(527,yb,"19.2.3"));ce.findDOMNode=function(n){var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=g(s),n=n!==null?v(n):null,n=n===null?null:n.stateNode,n};var IN={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:W,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ef=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ef.isDisabled&&Ef.supportsFiber)try{yi=Ef.inject(IN),an=Ef}catch{}}return Ec.createRoot=function(n,s){if(!a(n))throw Error(i(299));var o=!1,u="",d=AT,m=ST,y=RT;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(y=s.onRecoverableError)),s=ab(n,1,!1,null,null,o,u,null,d,m,y,_b),n[ji]=s.current,Og(n),new Zg(s)},Ec.hydrateRoot=function(n,s,o){if(!a(n))throw Error(i(299));var u=!1,d="",m=AT,y=ST,w=RT,N=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(y=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.formState!==void 0&&(N=o.formState)),s=ab(n,1,!0,s,o??null,u,d,N,m,y,w,_b),s.context=ob(null),o=s.current,u=$n(),u=_a(u),d=ps(u),d.callback=null,gs(o,d,u),o=u,s.current.lanes=o,pa(s,o),ir(s),n[ji]=s.current,Og(n),new vf(s)},Ec.version="19.2.3",Ec}var Cb;function kN(){if(Cb)return n_.exports;Cb=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),n_.exports=ON(),n_.exports}var MN=kN();const LN=UA(MN),UN=()=>{};var Nb={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let a=r.charCodeAt(i);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},zN=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const a=r[t++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=r[t++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=r[t++],c=r[t++],f=r[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=r[t++],c=r[t++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},BA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<r.length;a+=3){const l=r[a],c=a+1<r.length,f=c?r[a+1]:0,p=a+2<r.length,g=p?r[a+2]:0,v=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|g>>6,O=g&63;p||(O=64,c||(I=64)),i.push(t[v],t[T],t[I],t[O])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(zA(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):zN(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<r.length;){const l=t[r.charAt(a++)],f=a<r.length?t[r.charAt(a)]:0;++a;const g=a<r.length?t[r.charAt(a)]:64;++a;const T=a<r.length?t[r.charAt(a)]:64;if(++a,l==null||f==null||g==null||T==null)throw new BN;const I=l<<2|f>>4;if(i.push(I),g!==64){const O=f<<4&240|g>>2;if(i.push(O),T!==64){const Q=g<<6&192|T;i.push(Q)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class BN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jN=function(r){const e=zA(r);return BA.encodeByteArray(e,!0)},Gf=function(r){return jN(r).replace(/\./g,"")},my=function(r){try{return BA.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Kf(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!FN(t)||(r[t]=Kf(r[t],e[t]));return r}function FN(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=()=>py().__FIREBASE_DEFAULTS__,HN=()=>{if(typeof process>"u"||typeof Nb>"u")return;const r=Nb.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},GN=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&my(r[1]);return e&&JSON.parse(e)},gy=()=>{try{return UN()||qN()||HN()||GN()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},_y=()=>{var r;return(r=gy())==null?void 0:r.config},KN=r=>{var e;return(e=gy())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jA(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",a=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Gf(JSON.stringify(t)),Gf(JSON.stringify(c)),""].join(".")}const Uc={};function $N(){const r={prod:[],emulator:[]};for(const e of Object.keys(Uc))Uc[e]?r.emulator.push(e):r.prod.push(e);return r}function WN(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Db=!1;function FA(r,e){if(typeof window>"u"||typeof document>"u"||!nu(window.location.host)||Uc[r]===e||Uc[r]||Db)return;Uc[r]=e;function t(I){return`__firebase__banner__${I}`}const i="__firebase__banner",l=$N().prod.length>0;function c(){const I=document.getElementById(i);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function p(I,O){I.setAttribute("width","24"),I.setAttribute("id",O),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function g(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Db=!0,c()},I}function v(I,O){I.setAttribute("id",O),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=WN(i),O=t("text"),Q=document.getElementById(O)||document.createElement("span"),$=t("learnmore"),X=document.getElementById($)||document.createElement("a"),me=t("preprendIcon"),ne=document.getElementById(me)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const G=I.element;f(G),v(X,$);const se=g();p(ne,me),G.append(ne,Q,X,se),document.body.appendChild(G)}l?(Q.innerText="Preview backend disconnected.",ne.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ne.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Q.innerText="Preview backend running in this workspace."),Q.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function _m(){var e;const r=(e=gy())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function JN(){return typeof window<"u"||qA()}function qA(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function ZN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function HA(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function yy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GA(){const r=Et();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function KA(){return!_m()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function QA(){return!_m()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Zc(){try{return typeof indexedDB=="object"}catch{return!1}}function eD(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD="FirebaseError";class Rn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=tD,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?nD(l,i):"Error",f=`${this.serviceName}: ${c} (${a}).`;return new Rn(a,f,i)}}function nD(r,e){return r.replace(iD,(t,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const iD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function rD(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ks(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const a of t){if(!i.includes(a))return!1;const l=r[a],c=e[a];if(Vb(l)&&Vb(c)){if(!Ks(l,c))return!1}else if(l!==c)return!1}for(const a of i)if(!t.includes(a))return!1;return!0}function Vb(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Sl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Dc(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function YA(r,e){const t=new sD(r,e);return t.subscribe.bind(t)}class sD{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let a;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");aD(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:i},a.next===void 0&&(a.next=a_),a.error===void 0&&(a.error=a_),a.complete===void 0&&(a.complete=a_);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aD(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function a_(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(r){return r&&r._delegate?r._delegate:r}class gr{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new QN;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uD(e))try{this.getOrInitializeService({instanceIdentifier:qa})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=qa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qa){return this.instances.has(e)}getOptions(e=qa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&c.resolve(a)}return a}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(i)??new Set;a.add(e),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&e(l,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const a of i)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:lD(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=qa){return this.component?this.component.multipleInstances?e:qa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lD(r){return r===qa?void 0:r}function uD(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new oD(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=[];var Oe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Oe||(Oe={}));const WA={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},cD=Oe.INFO,hD={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},dD=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),a=hD[e];if(a)console[a](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ym{constructor(e){this.name=e,this._logLevel=cD,this._logHandler=dD,this._userLogHandler=null,vy.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}function fD(r){vy.forEach(e=>{e.setLogLevel(r)})}function mD(r,e){for(const t of vy){let i=null;e&&e.level&&(i=WA[e.level]),r===null?t.userLogHandler=null:t.userLogHandler=(a,l,...c)=>{const f=c.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");l>=(i??a.logLevel)&&r({level:Oe[l].toLowerCase(),message:f,args:c,type:a.name})}}}const pD=(r,e)=>e.some(t=>r instanceof t);let Pb,Ob;function gD(){return Pb||(Pb=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _D(){return Ob||(Ob=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const XA=new WeakMap,S_=new WeakMap,JA=new WeakMap,o_=new WeakMap,Ey=new WeakMap;function yD(r){const e=new Promise((t,i)=>{const a=()=>{r.removeEventListener("success",l),r.removeEventListener("error",c)},l=()=>{t(js(r.result)),a()},c=()=>{i(r.error),a()};r.addEventListener("success",l),r.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&XA.set(t,r)}).catch(()=>{}),Ey.set(e,r),e}function vD(r){if(S_.has(r))return;const e=new Promise((t,i)=>{const a=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",c),r.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{i(r.error||new DOMException("AbortError","AbortError")),a()};r.addEventListener("complete",l),r.addEventListener("error",c),r.addEventListener("abort",c)});S_.set(r,e)}let R_={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return S_.get(r);if(e==="objectStoreNames")return r.objectStoreNames||JA.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return js(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ED(r){R_=r(R_)}function TD(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(l_(this),e,...t);return JA.set(i,e.sort?e.sort():[e]),js(i)}:_D().includes(r)?function(...e){return r.apply(l_(this),e),js(XA.get(this))}:function(...e){return js(r.apply(l_(this),e))}}function wD(r){return typeof r=="function"?TD(r):(r instanceof IDBTransaction&&vD(r),pD(r,gD())?new Proxy(r,R_):r)}function js(r){if(r instanceof IDBRequest)return yD(r);if(o_.has(r))return o_.get(r);const e=wD(r);return e!==r&&(o_.set(r,e),Ey.set(e,r)),e}const l_=r=>Ey.get(r);function bD(r,e,{blocked:t,upgrade:i,blocking:a,terminated:l}={}){const c=indexedDB.open(r,e),f=js(c);return i&&c.addEventListener("upgradeneeded",p=>{i(js(c.result),p.oldVersion,p.newVersion,js(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const ID=["get","getKey","getAll","getAllKeys","count"],AD=["put","add","delete","clear"],u_=new Map;function kb(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(u_.get(e))return u_.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,a=AD.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(a||ID.includes(t)))return;const l=async function(c,...f){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return i&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),a&&p.done]))[0]};return u_.set(e,l),l}ED(r=>({...r,get:(e,t,i)=>kb(e,t)||r.get(e,t,i),has:(e,t)=>!!kb(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(RD(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function RD(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qf="@firebase/app",C_="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new ym("@firebase/app"),CD="@firebase/app-compat",ND="@firebase/analytics-compat",DD="@firebase/analytics",xD="@firebase/app-check-compat",VD="@firebase/app-check",PD="@firebase/auth",OD="@firebase/auth-compat",kD="@firebase/database",MD="@firebase/data-connect",LD="@firebase/database-compat",UD="@firebase/functions",zD="@firebase/functions-compat",BD="@firebase/installations",jD="@firebase/installations-compat",FD="@firebase/messaging",qD="@firebase/messaging-compat",HD="@firebase/performance",GD="@firebase/performance-compat",KD="@firebase/remote-config",QD="@firebase/remote-config-compat",YD="@firebase/storage",$D="@firebase/storage-compat",WD="@firebase/firestore",XD="@firebase/ai",JD="@firebase/firestore-compat",ZD="firebase",ex="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="[DEFAULT]",tx={[Qf]:"fire-core",[CD]:"fire-core-compat",[DD]:"fire-analytics",[ND]:"fire-analytics-compat",[VD]:"fire-app-check",[xD]:"fire-app-check-compat",[PD]:"fire-auth",[OD]:"fire-auth-compat",[kD]:"fire-rtdb",[MD]:"fire-data-connect",[LD]:"fire-rtdb-compat",[UD]:"fire-fn",[zD]:"fire-fn-compat",[BD]:"fire-iid",[jD]:"fire-iid-compat",[FD]:"fire-fcm",[qD]:"fire-fcm-compat",[HD]:"fire-perf",[GD]:"fire-perf-compat",[KD]:"fire-rc",[QD]:"fire-rc-compat",[YD]:"fire-gcs",[$D]:"fire-gcs-compat",[WD]:"fire-fst",[JD]:"fire-fst-compat",[XD]:"fire-vertex","fire-js":"fire-js",[ZD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new Map,Pl=new Map,Ol=new Map;function eh(r,e){try{r.container.addComponent(e)}catch(t){qr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function ZA(r,e){r.container.addOrOverwriteComponent(e)}function $s(r){const e=r.name;if(Ol.has(e))return qr.debug(`There were multiple attempts to register component ${e}.`),!1;Ol.set(e,r);for(const t of Ys.values())eh(t,r);for(const t of Pl.values())eh(t,r);return!0}function eS(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function nx(r,e,t=Qs){eS(r,e).clearInstance(t)}function Ty(r){return r.options!==void 0}function tS(r){return Ty(r)?!1:"authIdToken"in r||"appCheckToken"in r||"releaseOnDeref"in r||"automaticDataCollectionEnabled"in r}function gt(r){return r==null?!1:r.settings!==void 0}function ix(){Ol.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new yo("app","Firebase",rx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nS=class{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(r,e){const t=my(r.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,l=new Date().getTime();a-l<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class sx extends nS{constructor(e,t,i,a){const l=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!0,c={name:i,automaticDataCollectionEnabled:l};if(e.apiKey!==void 0)super(e,c,a);else{const f=e;super(f.options,c,a)}this._serverConfig={automaticDataCollectionEnabled:l,...t},this._serverConfig.authIdToken&&Mb(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&Mb(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Vi(Qf,C_,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){by(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Zn.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=ex;function wy(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i={name:Qs,automaticDataCollectionEnabled:!0,...e},a=i.name;if(typeof a!="string"||!a)throw Zn.create("bad-app-name",{appName:String(a)});if(t||(t=_y()),!t)throw Zn.create("no-options");const l=Ys.get(a);if(l){if(Ks(t,l.options)&&Ks(i,l.config))return l;throw Zn.create("duplicate-app",{appName:a})}const c=new $A(a);for(const p of Ol.values())c.addComponent(p);const f=new nS(t,i,c);return Ys.set(a,f),f}function ax(r,e={}){if(JN()&&!qA())throw Zn.create("invalid-server-app-environment");let t,i=e||{};if(r&&(Ty(r)?t=r.options:tS(r)?i=r:t=r),i.automaticDataCollectionEnabled===void 0&&(i.automaticDataCollectionEnabled=!0),t||(t=_y()),!t)throw Zn.create("no-options");const a={...i,...t};a.releaseOnDeref!==void 0&&delete a.releaseOnDeref;const l=v=>[...v].reduce((T,I)=>Math.imul(31,T)+I.charCodeAt(0)|0,0);if(i.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Zn.create("finalization-registry-not-supported",{});const c=""+l(JSON.stringify(a)),f=Pl.get(c);if(f)return f.incRefCount(i.releaseOnDeref),f;const p=new $A(c);for(const v of Ol.values())p.addComponent(v);const g=new sx(t,i,c,p);return Pl.set(c,g),g}function ox(r=Qs){const e=Ys.get(r);if(!e&&r===Qs&&_y())return wy();if(!e)throw Zn.create("no-app",{appName:r});return e}function lx(){return Array.from(Ys.values())}async function by(r){let e=!1;const t=r.name;Ys.has(t)?(e=!0,Ys.delete(t)):Pl.has(t)&&r.decRefCount()<=0&&(Pl.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(i=>i.delete())),r.isDeleted=!0)}function Vi(r,e,t){let i=tx[r]??r;t&&(i+=`-${t}`);const a=i.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${i}" with version "${e}":`];a&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qr.warn(c.join(" "));return}$s(new gr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function iS(r,e){if(r!==null&&typeof r!="function")throw Zn.create("invalid-log-argument");mD(r,e)}function rS(r){fD(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux="firebase-heartbeat-database",cx=1,th="firebase-heartbeat-store";let c_=null;function sS(){return c_||(c_=bD(ux,cx,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(th)}catch(t){console.warn(t)}}}}).catch(r=>{throw Zn.create("idb-open",{originalErrorMessage:r.message})})),c_}async function hx(r){try{const t=(await sS()).transaction(th),i=await t.objectStore(th).get(aS(r));return await t.done,i}catch(e){if(e instanceof Rn)qr.warn(e.message);else{const t=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qr.warn(t.message)}}}async function Lb(r,e){try{const i=(await sS()).transaction(th,"readwrite");await i.objectStore(th).put(e,aS(r)),await i.done}catch(t){if(t instanceof Rn)qr.warn(t.message);else{const i=Zn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});qr.warn(i.message)}}}function aS(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=1024,fx=30;class mx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gx(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ub();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>fx){const c=_x(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){qr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ub(),{heartbeatsToSend:i,unsentEntries:a}=px(this._heartbeatsCache.heartbeats),l=Gf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return qr.warn(t),""}}}function Ub(){return new Date().toISOString().substring(0,10)}function px(r,e=dx){const t=[];let i=r.slice();for(const a of r){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),zb(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),zb(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class gx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zc()?eD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await hx(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Lb(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Lb(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zb(r){return Gf(JSON.stringify({version:2,heartbeats:r})).length}function _x(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(r){$s(new gr("platform-logger",e=>new SD(e),"PRIVATE")),$s(new gr("heartbeat",e=>new mx(e),"PRIVATE")),Vi(Qf,C_,r),Vi(Qf,C_,"esm2020"),Vi("fire-js","")}yx("");const vx=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Rn,SDK_VERSION:ra,_DEFAULT_ENTRY_NAME:Qs,_addComponent:eh,_addOrOverwriteComponent:ZA,_apps:Ys,_clearComponents:ix,_components:Ol,_getProvider:eS,_isFirebaseApp:Ty,_isFirebaseServerApp:gt,_isFirebaseServerAppSettings:tS,_registerComponent:$s,_removeServiceInstance:nx,_serverApps:Pl,deleteApp:by,getApp:ox,getApps:lx,initializeApp:wy,initializeServerApp:ax,onLog:iS,registerVersion:Vi,setLogLevel:rS},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,t){this._delegate=e,this.firebase=t,eh(e,new gr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),by(this._delegate)))}_getService(e,t=Qs){var a;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((a=i.getComponent())==null?void 0:a.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Qs){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){eh(this._delegate,e)}_addOrOverwriteComponent(e){ZA(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Bb=new yo("app-compat","Firebase",Tx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(r){const e={},t={__esModule:!0,initializeApp:l,app:a,registerVersion:Vi,setLogLevel:rS,onLog:iS,apps:null,SDK_VERSION:ra,INTERNAL:{registerComponent:f,removeApp:i,useAsService:p,modularAPIs:vx}};t.default=t,Object.defineProperty(t,"apps",{get:c});function i(g){delete e[g]}function a(g){if(g=g||Qs,!xb(e,g))throw Bb.create("no-app",{appName:g});return e[g]}a.App=r;function l(g,v={}){const T=wy(g,v);if(xb(e,T.name))return e[T.name];const I=new r(T,t);return e[T.name]=I,I}function c(){return Object.keys(e).map(g=>e[g])}function f(g){const v=g.name,T=v.replace("-compat","");if($s(g)&&g.type==="PUBLIC"){const I=(O=a())=>{if(typeof O[T]!="function")throw Bb.create("invalid-app-argument",{appName:v});return O[T]()};g.serviceProps!==void 0&&Kf(I,g.serviceProps),t[T]=I,r.prototype[T]=function(...O){return this._getService.bind(this,v).apply(this,g.multipleInstances?O:[])}}return g.type==="PUBLIC"?t[T]:null}function p(g,v){return v==="serverAuth"?null:v}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(){const r=wx(Ex);r.INTERNAL={...r.INTERNAL,createFirebaseNamespace:oS,extendNamespace:e,createSubscribe:YA,ErrorFactory:yo,deepExtend:Kf};function e(t){Kf(r,t)}return r}const bx=oS();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=new ym("@firebase/app-compat"),Ix="@firebase/app-compat",Ax="0.5.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(r){Vi(Ix,Ax,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const r=py();if(r.firebase!==void 0){jb.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=r.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&jb.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const _r=bx;Sx();var Rx="firebase",Cx="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_r.registerVersion(Rx,Cx,"app-compat");const Tc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},ml={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nx(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function lS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dx=Nx,xx=lS,uS=new yo("auth","Firebase",lS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=new ym("@firebase/auth");function Vx(r,...e){Yf.logLevel<=Oe.WARN&&Yf.warn(`Auth (${ra}): ${r}`,...e)}function Nf(r,...e){Yf.logLevel<=Oe.ERROR&&Yf.error(`Auth (${ra}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(r,...e){throw Ay(r,...e)}function Wt(r,...e){return Ay(r,...e)}function Iy(r,e,t){const i={...xx(),[e]:t};return new yo("auth","Firebase",i).create(e,{appName:r.name})}function sn(r){return Iy(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ru(r,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&pn(r,"argument-error"),Iy(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ay(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return uS.create(r,...e)}function re(r,e,...t){if(!r)throw Ay(e,...t)}function cr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Nf(e),new Error(e)}function ki(r,e){r||cr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function Sy(){return Fb()==="http:"||Fb()==="https:"}function Fb(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sy()||HA()||"connection"in navigator)?navigator.onLine:!0}function Ox(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,t){this.shortDelay=e,this.longDelay=t,ki(t>e,"Short delay should be less than long delay!"),this.isMobile=XN()||yy()}get(){return Px()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(r,e){ki(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Lx=new bh(3e4,6e4);function St(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Rt(r,e,t,i,a={}){return hS(r,a,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const f=iu({key:r.config.apiKey,...c}).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:p,...l};return ZN()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&nu(r.emulatorConfig.host)&&(g.credentials="include"),cS.fetch()(await dS(r,r.config.apiHost,t,f),g)})}async function hS(r,e,t){r._canInitEmulator=!1;const i={...kx,...e};try{const a=new zx(r),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw xc(r,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw xc(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw xc(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw xc(r,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Iy(r,v,g);pn(r,v)}}catch(a){if(a instanceof Rn)throw a;pn(r,"network-request-failed",{message:String(a)})}}async function Qr(r,e,t,i,a={}){const l=await Rt(r,e,t,i,a);return"mfaPendingCredential"in l&&pn(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function dS(r,e,t,i){const a=`${e}${t}?${i}`,l=r,c=l.config.emulator?Ry(r.config,a):`${r.config.apiScheme}://${a}`;return Mx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function Ux(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Wt(this.auth,"network-request-failed")),Lx.get())})}}function xc(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const a=Wt(r,e,i);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(r){return r!==void 0&&r.getResponse!==void 0}function Hb(r){return r!==void 0&&r.enterprise!==void 0}class fS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ux(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bx(r){return(await Rt(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function mS(r,e){return Rt(r,"GET","/v2/recaptchaConfig",St(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jx(r,e){return Rt(r,"POST","/v1/accounts:delete",e)}async function Fx(r,e){return Rt(r,"POST","/v1/accounts:update",e)}async function $f(r,e){return Rt(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qx(r,e=!1){const t=we(r),i=await t.getIdToken(e),a=vm(i);re(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:zc(h_(a.auth_time)),issuedAtTime:zc(h_(a.iat)),expirationTime:zc(h_(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function h_(r){return Number(r)*1e3}function vm(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Nf("JWT malformed, contained fewer than 3 sections"),null;try{const a=my(t);return a?JSON.parse(a):(Nf("Failed to decode base64 JWT payload"),null)}catch(a){return Nf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Gb(r){const e=vm(r);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Rn&&Hx(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function Hx({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zc(this.lastLoginAt),this.creationTime=zc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ih(r){var T;const e=r.auth,t=await r.getIdToken(),i=await Hr(r,$f(e,{idToken:t}));re(i==null?void 0:i.users.length,e,"internal-error");const a=i.users[0];r._notifyReloadListener(a);const l=(T=a.providerUserInfo)!=null&&T.length?pS(a.providerUserInfo):[],c=Qx(r.providerData,l),f=r.isAnonymous,p=!(r.email&&a.passwordHash)&&!(c!=null&&c.length),g=f?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new N_(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(r,v)}async function Kx(r){const e=we(r);await ih(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qx(r,e){return[...r.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function pS(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(r,e){const t=await hS(r,{},async()=>{const i=iu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=r.config,c=await dS(r,a,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:i};return r.emulatorConfig&&nu(r.emulatorConfig.host)&&(p.credentials="include"),cS.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $x(r,e){return Rt(r,"POST","/v2/accounts:revokeToken",St(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){re(e.length!==0,"internal-error");const t=Gb(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:a,expiresIn:l}=await Yx(e,t);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:a,expirationTime:l}=t,c=new Rl;return i&&(re(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),a&&(re(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(re(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rl,this.toJSON())}_performRefresh(){return cr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(r,e){re(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class xi{constructor({uid:e,auth:t,stsTokenManager:i,...a}){this.providerId="firebase",this.proactiveRefresh=new Gx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new N_(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Hr(this,this.stsTokenManager.getToken(this.auth,e));return re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qx(this,e)}reload(){return Kx(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ih(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gt(this.auth.app))return Promise.reject(sn(this.auth));const e=await this.getIdToken();return await Hr(this,jx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,f=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:T,emailVerified:I,isAnonymous:O,providerData:Q,stsTokenManager:$}=t;re(T&&$,e,"internal-error");const X=Rl.fromJSON(this.name,$);re(typeof T=="string",e,"internal-error"),Vs(i,e.name),Vs(a,e.name),re(typeof I=="boolean",e,"internal-error"),re(typeof O=="boolean",e,"internal-error"),Vs(l,e.name),Vs(c,e.name),Vs(f,e.name),Vs(p,e.name),Vs(g,e.name),Vs(v,e.name);const me=new xi({uid:T,auth:e,email:a,emailVerified:I,displayName:i,isAnonymous:O,photoURL:c,phoneNumber:l,tenantId:f,stsTokenManager:X,createdAt:g,lastLoginAt:v});return Q&&Array.isArray(Q)&&(me.providerData=Q.map(ne=>({...ne}))),p&&(me._redirectEventId=p),me}static async _fromIdTokenResponse(e,t,i=!1){const a=new Rl;a.updateFromServerResponse(t);const l=new xi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await ih(l),l}static async _fromGetAccountInfoResponse(e,t,i){const a=t.users[0];re(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?pS(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),f=new Rl;f.updateFromIdToken(i);const p=new xi({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new N_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=new Map;function Jn(r){ki(r instanceof Function,"Expected a class definition");let e=Kb.get(r);return e?(ki(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Kb.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gS.type="NONE";const kl=gS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(r,e,t){return`firebase:${r}:${e}:${t}`}class Cl{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=no(this.userKey,a.apiKey,l),this.fullPersistenceKey=no("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await $f(this.auth,{idToken:e}).catch(()=>{});return t?xi._fromGetAccountInfoResponse(this.auth,t,e):null}return xi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Cl(Jn(kl),e,i);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Jn(kl);const c=no(i,e.config.apiKey,e.name);let f=null;for(const g of t)try{const v=await g._get(c);if(v){let T;if(typeof v=="string"){const I=await $f(e,{idToken:v}).catch(()=>{});if(!I)break;T=await xi._fromGetAccountInfoResponse(e,I,v)}else T=xi._fromJSON(e,v);g!==l&&(f=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Cl(l,e,i):(l=p[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Cl(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ES(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_S(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(TS(e))return"Blackberry";if(wS(e))return"Webos";if(yS(e))return"Safari";if((e.includes("chrome/")||vS(e))&&!e.includes("edge/"))return"Chrome";if(Ih(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function _S(r=Et()){return/firefox\//i.test(r)}function yS(r=Et()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vS(r=Et()){return/crios\//i.test(r)}function ES(r=Et()){return/iemobile/i.test(r)}function Ih(r=Et()){return/android/i.test(r)}function TS(r=Et()){return/blackberry/i.test(r)}function wS(r=Et()){return/webos/i.test(r)}function Ah(r=Et()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Wx(r=Et()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(r)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(r)}function Xx(r=Et()){var e;return Ah(r)&&!!((e=window.navigator)!=null&&e.standalone)}function Jx(){return GA()&&document.documentMode===10}function bS(r=Et()){return Ah(r)||Ih(r)||wS(r)||TS(r)||/windows phone/i.test(r)||ES(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(r,e=[]){let t;switch(r){case"Browser":t=Qb(Et());break;case"Worker":t=`${Qb(Et())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ra}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,f)=>{try{const p=e(l);c(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eV(r,e={}){return Rt(r,"GET","/v2/passwordPolicy",St(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tV=6;class nV{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??tV,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e,t,i,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yb(this),this.idTokenSubscription=new Yb(this),this.beforeStateQueue=new Zx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Jn(t)),this._initializationPromise=this.queue(async()=>{var i,a,l;if(!this._deleted&&(this.persistenceManager=await Cl.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $f(this,{idToken:e}),i=await xi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(gt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=i==null?void 0:i._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(i=p.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ih(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ox()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gt(this.app))return Promise.reject(sn(this));const t=e?we(e):null;return t&&re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gt(this.app)?Promise.reject(sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gt(this.app)?Promise.reject(sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eV(this),t=new nV(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yo("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await $x(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Jn(e)||this._popupRedirectResolver;re(t,this,"argument-error"),this.redirectPersistenceManager=await Cl.create(this,[Jn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=IS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Vx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Tt(r){return we(r)}class Yb{constructor(e){this.auth=e,this.observer=null,this.addObserver=YA(t=>this.observer=t)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rV(r){Sh=r}function Cy(r){return Sh.loadJS(r)}function sV(){return Sh.recaptchaV2Script}function aV(){return Sh.recaptchaEnterpriseScript}function oV(){return Sh.gapiScript}function AS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lV=500,uV=6e4,Tf=1e12;class cV{constructor(e){this.auth=e,this.counter=Tf,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new fV(e,this.auth.name,t||{})),this.counter++,i}reset(e){var i;const t=e||Tf;(i=this._widgets.get(t))==null||i.delete(),this._widgets.delete(t)}getResponse(e){var i;const t=e||Tf;return((i=this._widgets.get(t))==null?void 0:i.getResponse())||""}async execute(e){var i;const t=e||Tf;return(i=this._widgets.get(t))==null||i.execute(),""}}class hV{constructor(){this.enterprise=new dV}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class dV{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class fV{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;re(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=mV(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},uV)},lV))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function mV(r){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<r;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const pV="recaptcha-enterprise",Bc="NO_RECAPTCHA";class SS{constructor(e){this.type=pV,this.auth=Tt(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{mS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new fS(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{f(p)})})}function a(l,c,f){const p=window.grecaptcha;Hb(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(Bc)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hV().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(f=>{if(!t&&Hb(window.grecaptcha))a(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=aV();p.length!==0&&(p+=f),Cy(p).then(()=>{a(f,l,c)}).catch(g=>{c(g)})}}).catch(f=>{c(f)})})}}async function wc(r,e,t,i=!1,a=!1){const l=new SS(r);let c;if(a)c=Bc;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Fs(r,e,t,i,a){var l,c;if(a==="EMAIL_PASSWORD_PROVIDER")if((l=r._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await wc(r,e,t,t==="getOobCode");return i(r,f)}else return i(r,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await wc(r,e,t,t==="getOobCode");return i(r,p)}else return Promise.reject(f)});else if(a==="PHONE_PROVIDER")if((c=r._getRecaptchaConfig())!=null&&c.isProviderEnabled("PHONE_PROVIDER")){const f=await wc(r,e,t);return i(r,f).catch(async p=>{var g;if(((g=r._getRecaptchaConfig())==null?void 0:g.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(p.code==="auth/missing-recaptcha-token"||p.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const v=await wc(r,e,t,!1,!0);return i(r,v)}return Promise.reject(p)})}else{const f=await wc(r,e,t,!1,!0);return i(r,f)}else return Promise.reject(a+" provider is not supported.")}async function gV(r){const e=Tt(r),t=await mS(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new fS(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new SS(e).verify()}function _V(r,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Jn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function yV(r,e,t){const i=Tt(r);re(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),l=RS(e),{host:c,port:f}=vV(e),p=f===null?"":`:${f}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){re(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),re(Ks(g,i.config.emulator)&&Ks(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,nu(c)?(jA(`${l}//${c}${p}`),FA("Auth",!0)):a||EV()}function RS(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function vV(r){const e=RS(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:$b(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:$b(c)}}}function $b(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function EV(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return cr("not implemented")}_getIdTokenResponse(e){return cr("not implemented")}_linkToIdToken(e,t){return cr("not implemented")}_getReauthenticationResolver(e){return cr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(r,e){return Rt(r,"POST","/v1/accounts:resetPassword",St(r,e))}async function TV(r,e){return Rt(r,"POST","/v1/accounts:update",e)}async function wV(r,e){return Rt(r,"POST","/v1/accounts:signUp",e)}async function bV(r,e){return Rt(r,"POST","/v1/accounts:update",St(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IV(r,e){return Qr(r,"POST","/v1/accounts:signInWithPassword",St(r,e))}async function Em(r,e){return Rt(r,"POST","/v1/accounts:sendOobCode",St(r,e))}async function AV(r,e){return Em(r,e)}async function SV(r,e){return Em(r,e)}async function RV(r,e){return Em(r,e)}async function CV(r,e){return Em(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NV(r,e){return Qr(r,"POST","/v1/accounts:signInWithEmailLink",St(r,e))}async function DV(r,e){return Qr(r,"POST","/v1/accounts:signInWithEmailLink",St(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh extends su{constructor(e,t,i,a=null){super("password",i),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new rh(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new rh(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fs(e,t,"signInWithPassword",IV,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return NV(e,{email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fs(e,i,"signUpPassword",wV,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return DV(e,{idToken:t,email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(r,e){return Qr(r,"POST","/v1/accounts:signInWithIdp",St(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xV="http://localhost";class yr extends su{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a,...l}=t;if(!i||!a)return null;const c=new yr(i,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Fr(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Fr(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fr(e,t)}buildRequest(){const e={requestUri:xV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=iu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(r,e){return Rt(r,"POST","/v1/accounts:sendVerificationCode",St(r,e))}async function VV(r,e){return Qr(r,"POST","/v1/accounts:signInWithPhoneNumber",St(r,e))}async function PV(r,e){const t=await Qr(r,"POST","/v1/accounts:signInWithPhoneNumber",St(r,e));if(t.temporaryProof)throw xc(r,"account-exists-with-different-credential",t);return t}const OV={USER_NOT_FOUND:"user-not-found"};async function kV(r,e){const t={...e,operation:"REAUTH"};return Qr(r,"POST","/v1/accounts:signInWithPhoneNumber",St(r,t),OV)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io extends su{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new io({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new io({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return VV(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return PV(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return kV(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:a,temporaryProof:l}=e;return!i&&!t&&!a&&!l?null:new io({verificationId:t,verificationCode:i,phoneNumber:a,temporaryProof:l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MV(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LV(r){const e=Sl(Dc(r)).link,t=e?Sl(Dc(e)).deep_link_id:null,i=Sl(Dc(r)).deep_link_id;return(i?Sl(Dc(i)).link:null)||i||t||e||r}class Tm{constructor(e){const t=Sl(Dc(e)),i=t.apiKey??null,a=t.oobCode??null,l=MV(t.mode??null);re(i&&a&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=a,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=LV(e);try{return new Tm(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.providerId=sa.PROVIDER_ID}static credential(e,t){return rh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Tm.parseLink(t);return re(i,"argument-error"),rh._fromEmailAndCode(e,i.code,i.tenantId)}}sa.PROVIDER_ID="password";sa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends Yr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Nl extends au{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return re("providerId"in t&&"signInMethod"in t,"argument-error"),yr._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return re(e.idToken||e.accessToken,"argument-error"),yr._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Nl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Nl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:a,pendingToken:l,nonce:c,providerId:f}=e;if(!i&&!a&&!t&&!l||!f)return null;try{return new Nl(f)._credential({idToken:t,accessToken:i,nonce:c,pendingToken:l})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends au{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends au{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return or.credential(t,i)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends au{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.GITHUB_SIGN_IN_METHOD="github.com";lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UV="http://localhost";class Ml extends su{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Fr(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Fr(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a,pendingToken:l}=t;return!i||!a||!l||i!==a?null:new Ml(i,l)}static _create(e,t){return new Ml(e,t)}buildRequest(){return{requestUri:UV,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zV="saml.";class Wf extends Yr{constructor(e){re(e.startsWith(zV),"argument-error"),super(e)}static credentialFromResult(e){return Wf.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Wf.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ml.fromJSON(e);return re(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return Ml._create(i,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends au{constructor(){super("twitter.com")}static credential(e,t){return yr._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ur.credential(t,i)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(r,e){return Qr(r,"POST","/v1/accounts:signUp",St(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,a=!1){const l=await xi._fromIdTokenResponse(e,i,a),c=Xb(i);return new _i({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const a=Xb(i);return new _i({user:e,providerId:a,_tokenResponse:i,operationType:t})}}function Xb(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BV(r){var a;if(gt(r.app))return Promise.reject(sn(r));const e=Tt(r);if(await e._initializationPromise,(a=e.currentUser)!=null&&a.isAnonymous)return new _i({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await NS(e,{returnSecureToken:!0}),i=await _i._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf extends Rn{constructor(e,t,i,a){super(t.code,t.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,Xf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,a){return new Xf(e,t,i,a)}}function DS(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Xf._fromErrorAndOperation(r,l,e,i):l})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(r){return new Set(r.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jV(r,e){const t=we(r);await wm(!0,t,e);const{providerUserInfo:i}=await Fx(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=xS(i||[]);return t.providerData=t.providerData.filter(l=>a.has(l.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Ny(r,e,t=!1){const i=await Hr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return _i._forOperation(r,"link",i)}async function wm(r,e,t){await ih(e);const i=xS(e.providerData),a=r===!1?"provider-already-linked":"no-such-provider";re(i.has(t)===r,e.auth,a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(r,e,t=!1){const{auth:i}=r;if(gt(i.app))return Promise.reject(sn(i));const a="reauthenticate";try{const l=await Hr(r,DS(i,a,e,r),t);re(l.idToken,i,"internal-error");const c=vm(l.idToken);re(c,i,"internal-error");const{sub:f}=c;return re(r.uid===f,i,"user-mismatch"),_i._forOperation(r,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&pn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(r,e,t=!1){if(gt(r.app))return Promise.reject(sn(r));const i="signIn",a=await DS(r,i,e),l=await _i._fromIdTokenResponse(r,i,a);return t||await r._updateCurrentUser(l.user),l}async function bm(r,e){return PS(Tt(r),e)}async function OS(r,e){const t=we(r);return await wm(!1,t,e.providerId),Ny(t,e)}async function kS(r,e){return VS(we(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FV(r,e){return Qr(r,"POST","/v1/accounts:signInWithCustomToken",St(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qV(r,e){if(gt(r.app))return Promise.reject(sn(r));const t=Tt(r),i=await FV(t,{token:e,returnSecureToken:!0}),a=await _i._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Dy._fromServerResponse(e,t):"totpInfo"in t?xy._fromServerResponse(e,t):pn(e,"internal-error")}}class Dy extends Rh{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Dy(t)}}class xy extends Rh{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new xy(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(r,e,t){var i;re(((i=t.url)==null?void 0:i.length)>0,r,"invalid-continue-uri"),re(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),re(typeof t.linkDomain>"u"||t.linkDomain.length>0,r,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(re(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(re(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(r){const e=Tt(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HV(r,e,t){const i=Tt(r),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Im(i,a,t),await Fs(i,a,"getOobCode",SV,"EMAIL_PASSWORD_PROVIDER")}async function GV(r,e,t){await CS(we(r),{oobCode:e,newPassword:t}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Vy(r),i})}async function KV(r,e){await bV(we(r),{oobCode:e})}async function MS(r,e){const t=we(r),i=await CS(t,{oobCode:e}),a=i.requestType;switch(re(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":re(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":re(i.mfaInfo,t,"internal-error");default:re(i.email,t,"internal-error")}let l=null;return i.mfaInfo&&(l=Rh._fromServerResponse(Tt(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:l},operation:a}}async function QV(r,e){const{data:t}=await MS(we(r),e);return t.email}async function YV(r,e,t){if(gt(r.app))return Promise.reject(sn(r));const i=Tt(r),c=await Fs(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NS,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Vy(r),p}),f=await _i._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(f.user),f}function $V(r,e,t){return gt(r.app)?Promise.reject(sn(r)):bm(we(r),sa.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Vy(r),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WV(r,e,t){const i=Tt(r),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function l(c,f){re(f.handleCodeInApp,i,"argument-error"),f&&Im(i,c,f)}l(a,t),await Fs(i,a,"getOobCode",RV,"EMAIL_PASSWORD_PROVIDER")}function XV(r,e){const t=Tm.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function JV(r,e,t){if(gt(r.app))return Promise.reject(sn(r));const i=we(r),a=sa.credentialWithLink(e,t||nh());return re(a._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),bm(i,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZV(r,e){return Rt(r,"POST","/v1/accounts:createAuthUri",St(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e2(r,e){const t=Sy()?nh():"http://localhost",i={identifier:e,continueUri:t},{signinMethods:a}=await ZV(we(r),i);return a||[]}async function t2(r,e){const t=we(r),a={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&Im(t.auth,a,e);const{email:l}=await AV(t.auth,a);l!==r.email&&await r.reload()}async function n2(r,e,t){const i=we(r),l={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await r.getIdToken(),newEmail:e};t&&Im(i.auth,l,t);const{email:c}=await CV(i.auth,l);c!==r.email&&await r.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i2(r,e){return Rt(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r2(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=we(r),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await Hr(i,i2(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const f=i.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=i.displayName,f.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function s2(r,e){const t=we(r);return gt(t.auth.app)?Promise.reject(sn(t.auth)):LS(t,e,null)}function a2(r,e){return LS(we(r),null,e)}async function LS(r,e,t){const{auth:i}=r,l={idToken:await r.getIdToken(),returnSecureToken:!0};e&&(l.email=e),t&&(l.password=t);const c=await Hr(r,TV(i,l));await r._updateTokensIfNecessary(c,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(r){var a,l;if(!r)return null;const{providerId:e}=r,t=r.rawUserInfo?JSON.parse(r.rawUserInfo):{},i=r.isNewUser||r.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(r!=null&&r.idToken)){const c=(l=(a=vm(r.idToken))==null?void 0:a.firebase)==null?void 0:l.sign_in_provider;if(c){const f=c!=="anonymous"&&c!=="custom"?c:null;return new Dl(i,f)}}if(!e)return null;switch(e){case"facebook.com":return new l2(i,t);case"github.com":return new u2(i,t);case"google.com":return new c2(i,t);case"twitter.com":return new h2(i,t,r.screenName||null);case"custom":case"anonymous":return new Dl(i,null);default:return new Dl(i,e,t)}}class Dl{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class US extends Dl{constructor(e,t,i,a){super(e,t,i),this.username=a}}class l2 extends Dl{constructor(e,t){super(e,"facebook.com",t)}}class u2 extends US{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class c2 extends Dl{constructor(e,t){super(e,"google.com",t)}}class h2 extends US{constructor(e,t,i){super(e,"twitter.com",t,i)}}function d2(r){const{user:e,_tokenResponse:t}=r;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:o2(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t,i){this.type=e,this.credential=t,this.user=i}static _fromIdtoken(e,t){return new Xa("enroll",e,t)}static _fromMfaPendingCredential(e){return new Xa("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return Xa._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((i=e.multiFactorSession)!=null&&i.idToken)return Xa._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=Tt(e),a=t.customData._serverResponse,l=(a.mfaInfo||[]).map(f=>Rh._fromServerResponse(i,f));re(a.mfaPendingCredential,i,"internal-error");const c=Xa._fromMfaPendingCredential(a.mfaPendingCredential);return new Py(c,l,async f=>{const p=await f._process(i,c);delete a.mfaInfo,delete a.mfaPendingCredential;const g={...a,idToken:p.idToken,refreshToken:p.refreshToken};switch(t.operationType){case"signIn":const v=await _i._fromIdTokenResponse(i,t.operationType,g);return await i._updateCurrentUser(v.user),v;case"reauthenticate":return re(t.user,i,"internal-error"),_i._forOperation(t.user,t.operationType,g);default:pn(i,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function f2(r,e){var a;const t=we(r),i=e;return re(e.customData.operationType,t,"argument-error"),re((a=i.customData._serverResponse)==null?void 0:a.mfaPendingCredential,t,"argument-error"),Py._fromError(t,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(r,e){return Rt(r,"POST","/v2/accounts/mfaEnrollment:start",St(r,e))}function m2(r,e){return Rt(r,"POST","/v2/accounts/mfaEnrollment:finalize",St(r,e))}function p2(r,e){return Rt(r,"POST","/v2/accounts/mfaEnrollment:withdraw",St(r,e))}class Oy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(i=>Rh._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new Oy(e)}async getSession(){return Xa._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const i=e,a=await this.getSession(),l=await Hr(this.user,i._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(l),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const a=await Hr(this.user,p2(this.user.auth,{idToken:i,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:l})=>l!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const d_=new WeakMap;function g2(r){const e=we(r);return d_.has(e)||d_.set(e,Oy._fromUser(e)),d_.get(e)}const Jf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jf,"1"),this.storage.removeItem(Jf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=1e3,y2=10;class BS extends zS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),a=this.localCache[t];i!==a&&e(t,a,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);Jx()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,y2):a()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},_2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}BS.type="LOCAL";const ky=BS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS extends zS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jS.type="SESSION";const so=jS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const i=new Am(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const f=Array.from(c).map(async g=>g(t.origin,l)),p=await v2(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Am.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((f,p)=>{const g=Ch("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:a,onMessage(T){const I=T;if(I.data.eventId===g)switch(I.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function T2(r){Gt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function w2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function b2(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function I2(){return My()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS="firebaseLocalStorageDb",A2=1,Zf="firebaseLocalStorage",qS="fbase_key";class Nh{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Sm(r,e){return r.transaction([Zf],e?"readwrite":"readonly").objectStore(Zf)}function S2(){const r=indexedDB.deleteDatabase(FS);return new Nh(r).toPromise()}function D_(){const r=indexedDB.open(FS,A2);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(Zf,{keyPath:qS})}catch(a){t(a)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(Zf)?e(i):(i.close(),await S2(),e(await D_()))})})}async function Zb(r,e,t){const i=Sm(r,!0).put({[qS]:e,value:t});return new Nh(i).toPromise()}async function R2(r,e){const t=Sm(r,!1).get(e),i=await new Nh(t).toPromise();return i===void 0?null:i.value}function eI(r,e){const t=Sm(r,!0).delete(e);return new Nh(t).toPromise()}const C2=800,N2=3;class HS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await D_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>N2)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return My()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Am._getInstance(I2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await w2(),!this.activeServiceWorker)return;this.sender=new E2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||b2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await D_();return await Zb(e,Jf,"1"),await eI(e,Jf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Zb(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>R2(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>eI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Sm(a,!1).getAll();return new Nh(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),C2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}HS.type="LOCAL";const sh=HS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(r,e){return Rt(r,"POST","/v2/accounts/mfaSignIn:start",St(r,e))}function D2(r,e){return Rt(r,"POST","/v2/accounts/mfaSignIn:finalize",St(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=AS("rcb"),x2=new bh(3e4,6e4);class V2{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Gt().grecaptcha)!=null&&e.render)}load(e,t=""){return re(P2(t),e,"argument-error"),this.shouldResolveImmediately(t)&&qb(Gt().grecaptcha)?Promise.resolve(Gt().grecaptcha):new Promise((i,a)=>{const l=Gt().setTimeout(()=>{a(Wt(e,"network-request-failed"))},x2.get());Gt()[f_]=()=>{Gt().clearTimeout(l),delete Gt()[f_];const f=Gt().grecaptcha;if(!f||!qb(f)){a(Wt(e,"internal-error"));return}const p=f.render;f.render=(g,v)=>{const T=p(g,v);return this.counter++,T},this.hostLanguage=t,i(f)};const c=`${sV()}?${iu({onload:f_,render:"explicit",hl:t})}`;Cy(c).catch(()=>{clearTimeout(l),a(Wt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Gt().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function P2(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class O2{async load(e){return new cV(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="recaptcha",k2={theme:"light",type:"image"};let M2=class{constructor(e,t,i={...k2}){this.parameters=i,this.type=jc,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Tt(e),this.isInvisible=this.parameters.size==="invisible",re(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;re(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new O2:new V2,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(a=>{const l=c=>{c&&(this.tokenChangeListeners.delete(l),a(c))};this.tokenChangeListeners.add(l),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){re(!this.parameters.sitekey,this.auth,"argument-error"),re(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),re(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=Gt()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){re(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){re(Sy()&&!My(),this.auth,"internal-error"),await L2(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Bx(this.auth);re(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return re(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function L2(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=io._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function U2(r,e,t){if(gt(r.app))return Promise.reject(sn(r));const i=Tt(r),a=await Rm(i,e,we(t));return new Ly(a,l=>bm(i,l))}async function z2(r,e,t){const i=we(r);await wm(!1,i,"phone");const a=await Rm(i.auth,e,we(t));return new Ly(a,l=>OS(i,l))}async function B2(r,e,t){const i=we(r);if(gt(i.auth.app))return Promise.reject(sn(i.auth));const a=await Rm(i.auth,e,we(t));return new Ly(a,l=>kS(i,l))}async function Rm(r,e,t){var i;if(!r._getRecaptchaConfig())try{await gV(r)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const l=a.session;if("phoneNumber"in a){re(l.type==="enroll",r,"internal-error");const c={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Fs(r,c,"mfaSmsEnrollment",async(v,T)=>{if(T.phoneEnrollmentInfo.captchaResponse===Bc){re((t==null?void 0:t.type)===jc,v,"argument-error");const I=await m_(v,T,t);return Jb(v,I)}return Jb(v,T)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneSessionInfo.sessionInfo}else{re(l.type==="signin",r,"internal-error");const c=((i=a.multiFactorHint)==null?void 0:i.uid)||a.multiFactorUid;re(c,r,"missing-multi-factor-info");const f={mfaPendingCredential:l.credential,mfaEnrollmentId:c,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Fs(r,f,"mfaSmsSignIn",async(T,I)=>{if(I.phoneSignInInfo.captchaResponse===Bc){re((t==null?void 0:t.type)===jc,T,"argument-error");const O=await m_(T,I,t);return tI(T,O)}return tI(T,I)},"PHONE_PROVIDER").catch(T=>Promise.reject(T))).phoneResponseInfo.sessionInfo}}else{const l={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Fs(r,l,"sendVerificationCode",async(g,v)=>{if(v.captchaResponse===Bc){re((t==null?void 0:t.type)===jc,g,"argument-error");const T=await m_(g,v,t);return Wb(g,T)}return Wb(g,v)},"PHONE_PROVIDER").catch(g=>Promise.reject(g))).sessionInfo}}finally{t==null||t._reset()}}async function j2(r,e){const t=we(r);if(gt(t.auth.app))return Promise.reject(sn(t.auth));await Ny(t,e)}async function m_(r,e,t){re(t.type===jc,r,"argument-error");const i=await t.verify();re(typeof i=="string",r,"argument-error");const a={...e};if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.captchaResponse,f=a.phoneEnrollmentInfo.clientType,p=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:i,captchaResponse:c,clientType:f,recaptchaVersion:p}}),a}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.captchaResponse,c=a.phoneSignInInfo.clientType,f=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:l,clientType:c,recaptchaVersion:f}}),a}else return Object.assign(a,{recaptchaToken:i}),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao=class Df{constructor(e){this.providerId=Df.PROVIDER_ID,this.auth=Tt(e)}verifyPhoneNumber(e,t){return Rm(this.auth,e,we(t))}static credential(e,t){return io._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Df.credentialFromTaggedObject(t)}static credentialFromError(e){return Df.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?io._fromTokenResponse(t,i):null}};ao.PROVIDER_ID="phone";ao.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(r,e){return e?Jn(e):(re(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy extends su{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function F2(r){return PS(r.auth,new Uy(r),r.bypassAuthState)}function q2(r){const{auth:e,user:t}=r;return re(t,e,"internal-error"),VS(t,new Uy(r),r.bypassAuthState)}async function H2(r){const{auth:e,user:t}=r;return re(t,e,"internal-error"),Ny(t,new Uy(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,t,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:a,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return F2;case"linkViaPopup":case"linkViaRedirect":return H2;case"reauthViaPopup":case"reauthViaRedirect":return q2;default:pn(this.auth,"internal-error")}}resolve(e){ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=new bh(2e3,1e4);async function K2(r,e,t){if(gt(r.app))return Promise.reject(Wt(r,"operation-not-supported-in-this-environment"));const i=Tt(r);ru(r,e,Yr);const a=vo(i,t);return new Br(i,"signInViaPopup",e,a).executeNotNull()}async function Q2(r,e,t){const i=we(r);if(gt(i.auth.app))return Promise.reject(Wt(i.auth,"operation-not-supported-in-this-environment"));ru(i.auth,e,Yr);const a=vo(i.auth,t);return new Br(i.auth,"reauthViaPopup",e,a,i).executeNotNull()}async function Y2(r,e,t){const i=we(r);ru(i.auth,e,Yr);const a=vo(i.auth,t);return new Br(i.auth,"linkViaPopup",e,a,i).executeNotNull()}class Br extends GS{constructor(e,t,i,a,l){super(e,t,a,l),this.provider=i,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){ki(this.filter.length===1,"Popup operations only handle one event");const e=Ch();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,G2.get())};e()}}Br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2="pendingRedirect",Fc=new Map;class W2 extends GS{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Fc.get(this.auth._key());if(!e){try{const i=await X2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Fc.set(this.auth._key(),e)}return this.bypassAuthState||Fc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function X2(r,e){const t=QS(e),i=KS(r);if(!await i._isAvailable())return!1;const a=await i._get(t)==="true";return await i._remove(t),a}async function zy(r,e){return KS(r)._set(QS(e),"true")}function J2(){Fc.clear()}function By(r,e){Fc.set(r._key(),e)}function KS(r){return Jn(r._redirectPersistence)}function QS(r){return no($2,r.config.apiKey,r.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(r,e,t){return eP(r,e,t)}async function eP(r,e,t){if(gt(r.app))return Promise.reject(sn(r));const i=Tt(r);ru(r,e,Yr),await i._initializationPromise;const a=vo(i,t);return await zy(a,i),a._openRedirect(i,e,"signInViaRedirect")}function tP(r,e,t){return nP(r,e,t)}async function nP(r,e,t){const i=we(r);if(ru(i.auth,e,Yr),gt(i.auth.app))return Promise.reject(sn(i.auth));await i.auth._initializationPromise;const a=vo(i.auth,t);await zy(a,i.auth);const l=await YS(i);return a._openRedirect(i.auth,e,"reauthViaRedirect",l)}function iP(r,e,t){return rP(r,e,t)}async function rP(r,e,t){const i=we(r);ru(i.auth,e,Yr),await i.auth._initializationPromise;const a=vo(i.auth,t);await wm(!1,i,e.providerId),await zy(a,i.auth);const l=await YS(i);return a._openRedirect(i.auth,e,"linkViaRedirect",l)}async function sP(r,e){return await Tt(r)._initializationPromise,Cm(r,e,!1)}async function Cm(r,e,t=!1){if(gt(r.app))return Promise.reject(sn(r));const i=Tt(r),a=vo(i,e),c=await new W2(i,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}async function YS(r){const e=Ch(`${r.uid}:::`);return r._redirectEventId=e,await r.auth._setRedirectUser(r),await r.auth._persistUserIfCurrent(r),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=600*1e3;class $S{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!WS(e)){const a=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(Wt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aP&&this.cachedEventUids.clear(),this.cachedEventUids.has(nI(e))}saveEventToCache(e){this.cachedEventUids.add(nI(e)),this.lastProcessedEventTime=Date.now()}}function nI(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function WS({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oP(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WS(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(r,e={}){return Rt(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uP=/^https?/;async function cP(r){if(r.config.emulator)return;const{authorizedDomains:e}=await XS(r);for(const t of e)try{if(hP(t))return}catch{}pn(r,"unauthorized-domain")}function hP(r){const e=nh(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!uP.test(t))return!1;if(lP.test(r))return i===r;const a=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=new bh(3e4,6e4);function iI(){const r=Gt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function fP(r){return new Promise((e,t)=>{var a,l,c;function i(){iI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iI(),t(Wt(r,"network-request-failed"))},timeout:dP.get()})}if((l=(a=Gt().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=Gt().gapi)!=null&&c.load)i();else{const f=AS("iframefcb");return Gt()[f]=()=>{gapi.load?i():t(Wt(r,"network-request-failed"))},Cy(`${oV()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw xf=null,e})}let xf=null;function mP(r){return xf=xf||fP(r),xf}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=new bh(5e3,15e3),gP="__/auth/iframe",_P="emulator/auth/iframe",yP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EP(r){const e=r.config;re(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ry(e,_P):`https://${r.config.authDomain}/${gP}`,i={apiKey:e.apiKey,appName:r.name,v:ra},a=vP.get(r.config.apiHost);a&&(i.eid=a);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${iu(i).slice(1)}`}async function TP(r){const e=await mP(r),t=Gt().gapi;return re(t,r,"internal-error"),e.open({where:document.body,url:EP(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yP,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const c=Wt(r,"network-request-failed"),f=Gt().setTimeout(()=>{l(c)},pP.get());function p(){Gt().clearTimeout(f),a(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bP=500,IP=600,AP="_blank",SP="http://localhost";class rI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RP(r,e,t,i=bP,a=IP){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p={...wP,width:i.toString(),height:a.toString(),top:l,left:c},g=Et().toLowerCase();t&&(f=vS(g)?AP:t),_S(g)&&(e=e||SP,p.scrollbars="yes");const v=Object.entries(p).reduce((I,[O,Q])=>`${I}${O}=${Q},`,"");if(Xx(g)&&f!=="_self")return CP(e||"",f),new rI(null);const T=window.open(e||"",f,v);re(T,r,"popup-blocked");try{T.focus()}catch{}return new rI(T)}function CP(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP="__/auth/handler",DP="emulator/auth/handler",xP=encodeURIComponent("fac");async function x_(r,e,t,i,a,l){re(r.config.authDomain,r,"auth-domain-config-required"),re(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:ra,eventId:a};if(e instanceof Yr){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",rD(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries(l||{}))c[v]=T}if(e instanceof au){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}r.tenantId&&(c.tid=r.tenantId);const f=c;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const p=await r._getAppCheckToken(),g=p?`#${xP}=${encodeURIComponent(p)}`:"";return`${VP(r)}?${iu(f).slice(1)}${g}`}function VP({config:r}){return r.emulator?Ry(r,DP):`https://${r.authDomain}/${NP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="webStorageSupport";class PP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=so,this._completeRedirectFn=Cm,this._overrideRedirectResult=By}async _openPopup(e,t,i,a){var c;ki((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await x_(e,t,i,nh(),a);return RP(e,l,Ch())}async _openRedirect(e,t,i,a){await this._originValidation(e);const l=await x_(e,t,i,nh(),a);return T2(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(ki(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await TP(e),i=new $S(e);return t.register("authEvent",a=>(re(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(p_,{type:p_},a=>{var c;const l=(c=a==null?void 0:a[0])==null?void 0:c[p_];l!==void 0&&t(!!l),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bS()||yS()||Ah()}}const OP=PP;class kP{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return cr("unexpected MultiFactorSessionType")}}}class jy extends kP{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new jy(e)}_finalizeEnroll(e,t,i){return m2(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return D2(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class JS{constructor(){}static assertion(e){return jy._fromCredential(e)}}JS.FACTOR_ID="phone";var sI="@firebase/auth",aI="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UP(r){$s(new gr("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=i.options;re(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:IS(r)},g=new iV(i,a,l,p);return _V(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),$s(new gr("auth-internal",e=>{const t=Tt(e.getProvider("auth").getImmediate());return(i=>new MP(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vi(sI,aI,LP(r)),Vi(sI,aI,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=300;KN("authIdTokenMaxAge");function BP(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}rV({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=a=>{const l=Wt("internal-error");l.customData=a,t(l)},i.type="text/javascript",i.charset="UTF-8",BP().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UP("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=2e3;async function FP(r,e,t){const{BuildInfo:i}=oo();ki(e.sessionId,"AuthEvent did not contain a session ID");const a=await QP(e.sessionId),l={};return Ah()?l.ibi=i.packageName:Ih()?l.apn=i.packageName:pn(r,"operation-not-supported-in-this-environment"),i.displayName&&(l.appDisplayName=i.displayName),l.sessionId=a,x_(r,t,e.type,void 0,e.eventId??void 0,l)}async function qP(r){const{BuildInfo:e}=oo(),t={};Ah()?t.iosBundleId=e.packageName:Ih()?t.androidPackageName=e.packageName:pn(r,"operation-not-supported-in-this-environment"),await XS(r,t)}function HP(r){const{cordova:e}=oo();return new Promise(t=>{e.plugins.browsertab.isAvailable(i=>{let a=null;i?e.plugins.browsertab.openUrl(r):a=e.InAppBrowser.open(r,Wx()?"_blank":"_system","location=yes"),t(a)})})}async function GP(r,e,t){const{cordova:i}=oo();let a=()=>{};try{await new Promise((l,c)=>{let f=null;function p(){var I;l();const T=(I=i.plugins.browsertab)==null?void 0:I.close;typeof T=="function"&&T(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function g(){f||(f=window.setTimeout(()=>{c(Wt(r,"redirect-cancelled-by-user"))},jP))}function v(){(document==null?void 0:document.visibilityState)==="visible"&&g()}e.addPassiveListener(p),document.addEventListener("resume",g,!1),Ih()&&document.addEventListener("visibilitychange",v,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",v,!1),f&&window.clearTimeout(f)}})}finally{a()}}function KP(r){var t,i,a,l,c,f,p,g,v,T;const e=oo();re(typeof((t=e==null?void 0:e.universalLinks)==null?void 0:t.subscribe)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),re(typeof((i=e==null?void 0:e.BuildInfo)==null?void 0:i.packageName)<"u",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),re(typeof((c=(l=(a=e==null?void 0:e.cordova)==null?void 0:a.plugins)==null?void 0:l.browsertab)==null?void 0:c.openUrl)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),re(typeof((g=(p=(f=e==null?void 0:e.cordova)==null?void 0:f.plugins)==null?void 0:p.browsertab)==null?void 0:g.isAvailable)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),re(typeof((T=(v=e==null?void 0:e.cordova)==null?void 0:v.InAppBrowser)==null?void 0:T.open)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function QP(r){const e=YP(r),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function YP(r){if(ki(/[0-9a-zA-Z]+/.test(r),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(r);const e=new ArrayBuffer(r.length),t=new Uint8Array(e);for(let i=0;i<r.length;i++)t[i]=r.charCodeAt(i);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=20;class WP extends $S{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function XP(r,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:eO(),postBody:null,tenantId:r.tenantId,error:Wt(r,"no-auth-event")}}function JP(r,e){return V_()._set(P_(r),e)}async function oI(r){const e=await V_()._get(P_(r));return e&&await V_()._remove(P_(r)),e}function ZP(r,e){var i,a;const t=nO(e);if(t.includes("/__/auth/callback")){const l=Vf(t),c=l.firebaseError?tO(decodeURIComponent(l.firebaseError)):null,f=(a=(i=c==null?void 0:c.code)==null?void 0:i.split("auth/"))==null?void 0:a[1],p=f?Wt(f):null;return p?{type:r.type,eventId:r.eventId,tenantId:r.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:r.type,eventId:r.eventId,tenantId:r.tenantId,sessionId:r.sessionId,urlResponse:t,postBody:null}}return null}function eO(){const r=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<$P;t++){const i=Math.floor(Math.random()*e.length);r.push(e.charAt(i))}return r.join("")}function V_(){return Jn(ky)}function P_(r){return no("authEvent",r.config.apiKey,r.name)}function tO(r){try{return JSON.parse(r)}catch{return null}}function nO(r){const e=Vf(r),t=e.link?decodeURIComponent(e.link):void 0,i=Vf(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Vf(a).link||a||i||t||r}function Vf(r){if(!(r!=null&&r.includes("?")))return{};const[e,...t]=r.split("?");return Sl(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=500;class rO{constructor(){this._redirectPersistence=so,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Cm,this._overrideRedirectResult=By}async _initialize(e){const t=e._key();let i=this.eventManagers.get(t);return i||(i=new WP(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){pn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,a){KP(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),J2(),await this._originValidation(e);const c=XP(e,i,a);await JP(e,c);const f=await FP(e,c,t),p=await HP(f);return GP(e,l,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qP(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:i,handleOpenURL:a,BuildInfo:l}=oo(),c=setTimeout(async()=>{await oI(e),t.onEvent(lI())},iO),f=async v=>{clearTimeout(c);const T=await oI(e);let I=null;T&&(v!=null&&v.url)&&(I=ZP(T,v.url)),t.onEvent(I||lI())};typeof i<"u"&&typeof i.subscribe=="function"&&i.subscribe(null,f);const p=a,g=`${l.packageName.toLowerCase()}://`;oo().handleOpenURL=async v=>{if(v.toLowerCase().startsWith(g)&&f({url:v}),typeof p=="function")try{p(v)}catch(T){console.error(T)}}}}const sO=rO;function lI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Wt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(r,e){Tt(r)._logFramework(e)}var oO="@firebase/auth-compat",lO="0.6.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO=1e3;function qc(){var r;return((r=self==null?void 0:self.location)==null?void 0:r.protocol)||null}function cO(){return qc()==="http:"||qc()==="https:"}function ZS(r=Et()){return!!((qc()==="file:"||qc()==="ionic:"||qc()==="capacitor:")&&r.toLowerCase().match(/iphone|ipad|ipod|android/))}function hO(){return yy()||_m()}function dO(){return GA()&&(document==null?void 0:document.documentMode)===11}function fO(r=Et()){return/Edge\/\d+/.test(r)}function mO(r=Et()){return dO()||fO(r)}function e0(){try{const r=self.localStorage,e=Ch();if(r)return r.setItem(e,"1"),r.removeItem(e),mO()?Zc():!0}catch{return Fy()&&Zc()}return!1}function Fy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function g_(){return(cO()||HA()||ZS())&&!hO()&&e0()&&!Fy()}function t0(){return ZS()&&typeof document<"u"}async function pO(){return t0()?new Promise(r=>{const e=setTimeout(()=>{r(!1)},uO);document.addEventListener("deviceready",()=>{clearTimeout(e),r(!0)})}):!1}function gO(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={LOCAL:"local",NONE:"none",SESSION:"session"},bc=re,n0="persistence";function _O(r,e){if(bc(Object.values(Xn).includes(e),r,"invalid-persistence-type"),yy()){bc(e!==Xn.SESSION,r,"unsupported-persistence-type");return}if(_m()){bc(e===Xn.NONE,r,"unsupported-persistence-type");return}if(Fy()){bc(e===Xn.NONE||e===Xn.LOCAL&&Zc(),r,"unsupported-persistence-type");return}bc(e===Xn.NONE||e0(),r,"unsupported-persistence-type")}async function O_(r){await r._initializationPromise;const e=i0(),t=no(n0,r.config.apiKey,r.name);e&&e.setItem(t,r._getPersistenceType())}function yO(r,e){const t=i0();if(!t)return[];const i=no(n0,r,e);switch(t.getItem(i)){case Xn.NONE:return[kl];case Xn.LOCAL:return[sh,so];case Xn.SESSION:return[so];default:return[]}}function i0(){var r;try{return((r=gO())==null?void 0:r.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=re;class Us{constructor(){this.browserResolver=Jn(OP),this.cordovaResolver=Jn(sO),this.underlyingResolver=null,this._redirectPersistence=so,this._completeRedirectFn=Cm,this._overrideRedirectResult=By}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,a)}async _openRedirect(e,t,i,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return t0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return vO(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await pO();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(r){return r.unwrap()}function EO(r){return r.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(r){return s0(r)}function wO(r,e){var i;const t=(i=e.customData)==null?void 0:i._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new bO(r,f2(r,e))}else if(t){const a=s0(e),l=e;a&&(l.credential=a,l.tenantId=t.tenantId||void 0,l.email=t.email||void 0,l.phoneNumber=t.phoneNumber||void 0)}}function s0(r){const{_tokenResponse:e}=r instanceof Rn?r.customData:r;if(!e)return null;if(!(r instanceof Rn)&&"temporaryProof"in e&&"phoneNumber"in e)return ao.credentialFromResult(r);const t=e.providerId;if(!t||t===Tc.PASSWORD)return null;let i;switch(t){case Tc.GOOGLE:i=or;break;case Tc.FACEBOOK:i=ar;break;case Tc.GITHUB:i=lr;break;case Tc.TWITTER:i=ur;break;default:const{oauthIdToken:a,oauthAccessToken:l,oauthTokenSecret:c,pendingToken:f,nonce:p}=e;return!l&&!c&&!a&&!f?null:f?t.startsWith("saml.")?Ml._create(t,f):yr._fromParams({providerId:t,signInMethod:t,pendingToken:f,idToken:a,accessToken:l}):new Nl(t).credential({idToken:a,accessToken:l,rawNonce:p})}return r instanceof Rn?i.credentialFromError(r):i.credentialFromResult(r)}function Ln(r,e){return e.catch(t=>{throw t instanceof Rn&&wO(r,t),t}).then(t=>{const i=t.operationType,a=t.user;return{operationType:i,credential:TO(t),additionalUserInfo:d2(t),user:Nm.getOrCreate(a)}})}async function k_(r,e){const t=await e;return{verificationId:t.verificationId,confirm:i=>Ln(r,t.confirm(i))}}class bO{constructor(e,t){this.resolver=t,this.auth=EO(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ln(r0(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nm=class Vc{constructor(e){this._delegate=e,this.multiFactor=g2(e)}static getOrCreate(e){return Vc.USER_MAP.has(e)||Vc.USER_MAP.set(e,new Vc(e)),Vc.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ln(this.auth,OS(this._delegate,e))}async linkWithPhoneNumber(e,t){return k_(this.auth,z2(this._delegate,e,t))}async linkWithPopup(e){return Ln(this.auth,Y2(this._delegate,e,Us))}async linkWithRedirect(e){return await O_(Tt(this.auth)),iP(this._delegate,e,Us)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ln(this.auth,kS(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return k_(this.auth,B2(this._delegate,e,t))}reauthenticateWithPopup(e){return Ln(this.auth,Q2(this._delegate,e,Us))}async reauthenticateWithRedirect(e){return await O_(Tt(this.auth)),tP(this._delegate,e,Us)}sendEmailVerification(e){return t2(this._delegate,e)}async unlink(e){return await jV(this._delegate,e),this}updateEmail(e){return s2(this._delegate,e)}updatePassword(e){return a2(this._delegate,e)}updatePhoneNumber(e){return j2(this._delegate,e)}updateProfile(e){return r2(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return n2(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Nm.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=re;class M_{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;Ic(i,"invalid-api-key",{appName:e.name}),Ic(i,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Us:void 0;this._delegate=t.initialize({options:{persistence:IO(i,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(Dx),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Nm.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){yV(this._delegate,e,t)}applyActionCode(e){return KV(this._delegate,e)}checkActionCode(e){return MS(this._delegate,e)}confirmPasswordReset(e,t){return GV(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Ln(this._delegate,YV(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return e2(this._delegate,e)}isSignInWithEmailLink(e){return XV(this._delegate,e)}async getRedirectResult(){Ic(g_(),this._delegate,"operation-not-supported-in-this-environment");const e=await sP(this._delegate,Us);return e?Ln(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){aO(this._delegate,e)}onAuthStateChanged(e,t,i){const{next:a,error:l,complete:c}=uI(e,t,i);return this._delegate.onAuthStateChanged(a,l,c)}onIdTokenChanged(e,t,i){const{next:a,error:l,complete:c}=uI(e,t,i);return this._delegate.onIdTokenChanged(a,l,c)}sendSignInLinkToEmail(e,t){return WV(this._delegate,e,t)}sendPasswordResetEmail(e,t){return HV(this._delegate,e,t||void 0)}async setPersistence(e){_O(this._delegate,e);let t;switch(e){case Xn.SESSION:t=so;break;case Xn.LOCAL:t=await Jn(sh)._isAvailable()?sh:ky;break;case Xn.NONE:t=kl;break;default:return pn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ln(this._delegate,BV(this._delegate))}signInWithCredential(e){return Ln(this._delegate,bm(this._delegate,e))}signInWithCustomToken(e){return Ln(this._delegate,qV(this._delegate,e))}signInWithEmailAndPassword(e,t){return Ln(this._delegate,$V(this._delegate,e,t))}signInWithEmailLink(e,t){return Ln(this._delegate,JV(this._delegate,e,t))}signInWithPhoneNumber(e,t){return k_(this._delegate,U2(this._delegate,e,t))}async signInWithPopup(e){return Ic(g_(),this._delegate,"operation-not-supported-in-this-environment"),Ln(this._delegate,K2(this._delegate,e,Us))}async signInWithRedirect(e){return Ic(g_(),this._delegate,"operation-not-supported-in-this-environment"),await O_(this._delegate),Z2(this._delegate,e,Us)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return QV(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}M_.Persistence=Xn;function uI(r,e,t){let i=r;typeof r!="function"&&({next:i,error:e,complete:t}=r);const a=i;return{next:c=>a(c&&Nm.getOrCreate(c)),error:e,complete:t}}function IO(r,e){const t=yO(r,e);if(typeof self<"u"&&!t.includes(sh)&&t.push(sh),typeof window<"u")for(const i of[ky,so])t.includes(i)||t.push(i);return t.includes(kl)||t.push(kl),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{static credential(e,t){return ao.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new ao(r0(_r.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}qy.PHONE_SIGN_IN_METHOD=ao.PHONE_SIGN_IN_METHOD;qy.PROVIDER_ID=ao.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO=re;class SO{constructor(e,t,i=_r.app()){var a;AO((a=i.options)==null?void 0:a.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new M2(i.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO="auth-compat";function CO(r){r.INTERNAL.registerComponent(new gr(RO,e=>{const t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new M_(t,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ml.EMAIL_SIGNIN,PASSWORD_RESET:ml.PASSWORD_RESET,RECOVER_EMAIL:ml.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ml.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ml.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ml.VERIFY_EMAIL}},EmailAuthProvider:sa,FacebookAuthProvider:ar,GithubAuthProvider:lr,GoogleAuthProvider:or,OAuthProvider:Nl,SAMLAuthProvider:Wf,PhoneAuthProvider:qy,PhoneMultiFactorGenerator:JS,RecaptchaVerifier:SO,TwitterAuthProvider:ur,Auth:M_,AuthCredential:su,Error:Rn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),r.registerVersion(oO,lO)}CO(_r);var cI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qs,a0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,S){function R(){}R.prototype=S.prototype,A.F=S.prototype,A.prototype=new R,A.prototype.constructor=A,A.D=function(x,D,k){for(var C=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)C[$e-2]=arguments[$e];return S.prototype[D].apply(x,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(A,S,R){R||(R=0);const x=Array(16);if(typeof S=="string")for(var D=0;D<16;++D)x[D]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(D=0;D<16;++D)x[D]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=A.g[0],R=A.g[1],D=A.g[2];let k=A.g[3],C;C=S+(k^R&(D^k))+x[0]+3614090360&4294967295,S=R+(C<<7&4294967295|C>>>25),C=k+(D^S&(R^D))+x[1]+3905402710&4294967295,k=S+(C<<12&4294967295|C>>>20),C=D+(R^k&(S^R))+x[2]+606105819&4294967295,D=k+(C<<17&4294967295|C>>>15),C=R+(S^D&(k^S))+x[3]+3250441966&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(k^R&(D^k))+x[4]+4118548399&4294967295,S=R+(C<<7&4294967295|C>>>25),C=k+(D^S&(R^D))+x[5]+1200080426&4294967295,k=S+(C<<12&4294967295|C>>>20),C=D+(R^k&(S^R))+x[6]+2821735955&4294967295,D=k+(C<<17&4294967295|C>>>15),C=R+(S^D&(k^S))+x[7]+4249261313&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(k^R&(D^k))+x[8]+1770035416&4294967295,S=R+(C<<7&4294967295|C>>>25),C=k+(D^S&(R^D))+x[9]+2336552879&4294967295,k=S+(C<<12&4294967295|C>>>20),C=D+(R^k&(S^R))+x[10]+4294925233&4294967295,D=k+(C<<17&4294967295|C>>>15),C=R+(S^D&(k^S))+x[11]+2304563134&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(k^R&(D^k))+x[12]+1804603682&4294967295,S=R+(C<<7&4294967295|C>>>25),C=k+(D^S&(R^D))+x[13]+4254626195&4294967295,k=S+(C<<12&4294967295|C>>>20),C=D+(R^k&(S^R))+x[14]+2792965006&4294967295,D=k+(C<<17&4294967295|C>>>15),C=R+(S^D&(k^S))+x[15]+1236535329&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(D^k&(R^D))+x[1]+4129170786&4294967295,S=R+(C<<5&4294967295|C>>>27),C=k+(R^D&(S^R))+x[6]+3225465664&4294967295,k=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(k^S))+x[11]+643717713&4294967295,D=k+(C<<14&4294967295|C>>>18),C=R+(k^S&(D^k))+x[0]+3921069994&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(D^k&(R^D))+x[5]+3593408605&4294967295,S=R+(C<<5&4294967295|C>>>27),C=k+(R^D&(S^R))+x[10]+38016083&4294967295,k=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(k^S))+x[15]+3634488961&4294967295,D=k+(C<<14&4294967295|C>>>18),C=R+(k^S&(D^k))+x[4]+3889429448&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(D^k&(R^D))+x[9]+568446438&4294967295,S=R+(C<<5&4294967295|C>>>27),C=k+(R^D&(S^R))+x[14]+3275163606&4294967295,k=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(k^S))+x[3]+4107603335&4294967295,D=k+(C<<14&4294967295|C>>>18),C=R+(k^S&(D^k))+x[8]+1163531501&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(D^k&(R^D))+x[13]+2850285829&4294967295,S=R+(C<<5&4294967295|C>>>27),C=k+(R^D&(S^R))+x[2]+4243563512&4294967295,k=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(k^S))+x[7]+1735328473&4294967295,D=k+(C<<14&4294967295|C>>>18),C=R+(k^S&(D^k))+x[12]+2368359562&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(R^D^k)+x[5]+4294588738&4294967295,S=R+(C<<4&4294967295|C>>>28),C=k+(S^R^D)+x[8]+2272392833&4294967295,k=S+(C<<11&4294967295|C>>>21),C=D+(k^S^R)+x[11]+1839030562&4294967295,D=k+(C<<16&4294967295|C>>>16),C=R+(D^k^S)+x[14]+4259657740&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(R^D^k)+x[1]+2763975236&4294967295,S=R+(C<<4&4294967295|C>>>28),C=k+(S^R^D)+x[4]+1272893353&4294967295,k=S+(C<<11&4294967295|C>>>21),C=D+(k^S^R)+x[7]+4139469664&4294967295,D=k+(C<<16&4294967295|C>>>16),C=R+(D^k^S)+x[10]+3200236656&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(R^D^k)+x[13]+681279174&4294967295,S=R+(C<<4&4294967295|C>>>28),C=k+(S^R^D)+x[0]+3936430074&4294967295,k=S+(C<<11&4294967295|C>>>21),C=D+(k^S^R)+x[3]+3572445317&4294967295,D=k+(C<<16&4294967295|C>>>16),C=R+(D^k^S)+x[6]+76029189&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(R^D^k)+x[9]+3654602809&4294967295,S=R+(C<<4&4294967295|C>>>28),C=k+(S^R^D)+x[12]+3873151461&4294967295,k=S+(C<<11&4294967295|C>>>21),C=D+(k^S^R)+x[15]+530742520&4294967295,D=k+(C<<16&4294967295|C>>>16),C=R+(D^k^S)+x[2]+3299628645&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(D^(R|~k))+x[0]+4096336452&4294967295,S=R+(C<<6&4294967295|C>>>26),C=k+(R^(S|~D))+x[7]+1126891415&4294967295,k=S+(C<<10&4294967295|C>>>22),C=D+(S^(k|~R))+x[14]+2878612391&4294967295,D=k+(C<<15&4294967295|C>>>17),C=R+(k^(D|~S))+x[5]+4237533241&4294967295,R=D+(C<<21&4294967295|C>>>11),C=S+(D^(R|~k))+x[12]+1700485571&4294967295,S=R+(C<<6&4294967295|C>>>26),C=k+(R^(S|~D))+x[3]+2399980690&4294967295,k=S+(C<<10&4294967295|C>>>22),C=D+(S^(k|~R))+x[10]+4293915773&4294967295,D=k+(C<<15&4294967295|C>>>17),C=R+(k^(D|~S))+x[1]+2240044497&4294967295,R=D+(C<<21&4294967295|C>>>11),C=S+(D^(R|~k))+x[8]+1873313359&4294967295,S=R+(C<<6&4294967295|C>>>26),C=k+(R^(S|~D))+x[15]+4264355552&4294967295,k=S+(C<<10&4294967295|C>>>22),C=D+(S^(k|~R))+x[6]+2734768916&4294967295,D=k+(C<<15&4294967295|C>>>17),C=R+(k^(D|~S))+x[13]+1309151649&4294967295,R=D+(C<<21&4294967295|C>>>11),C=S+(D^(R|~k))+x[4]+4149444226&4294967295,S=R+(C<<6&4294967295|C>>>26),C=k+(R^(S|~D))+x[11]+3174756917&4294967295,k=S+(C<<10&4294967295|C>>>22),C=D+(S^(k|~R))+x[2]+718787259&4294967295,D=k+(C<<15&4294967295|C>>>17),C=R+(k^(D|~S))+x[9]+3951481745&4294967295,A.g[0]=A.g[0]+S&4294967295,A.g[1]=A.g[1]+(D+(C<<21&4294967295|C>>>11))&4294967295,A.g[2]=A.g[2]+D&4294967295,A.g[3]=A.g[3]+k&4294967295}i.prototype.v=function(A,S){S===void 0&&(S=A.length);const R=S-this.blockSize,x=this.C;let D=this.h,k=0;for(;k<S;){if(D==0)for(;k<=R;)a(this,A,k),k+=this.blockSize;if(typeof A=="string"){for(;k<S;)if(x[D++]=A.charCodeAt(k++),D==this.blockSize){a(this,x),D=0;break}}else for(;k<S;)if(x[D++]=A[k++],D==this.blockSize){a(this,x),D=0;break}}this.h=D,this.o+=S},i.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var S=1;S<A.length-8;++S)A[S]=0;S=this.o*8;for(var R=A.length-8;R<A.length;++R)A[R]=S&255,S/=256;for(this.v(A),A=Array(16),S=0,R=0;R<4;++R)for(let x=0;x<32;x+=8)A[S++]=this.g[R]>>>x&255;return A};function l(A,S){var R=f;return Object.prototype.hasOwnProperty.call(R,A)?R[A]:R[A]=S(A)}function c(A,S){this.h=S;const R=[];let x=!0;for(let D=A.length-1;D>=0;D--){const k=A[D]|0;x&&k==S||(R[D]=k,x=!1)}this.g=R}var f={};function p(A){return-128<=A&&A<128?l(A,function(S){return new c([S|0],S<0?-1:0)}):new c([A|0],A<0?-1:0)}function g(A){if(isNaN(A)||!isFinite(A))return T;if(A<0)return X(g(-A));const S=[];let R=1;for(let x=0;A>=R;x++)S[x]=A/R|0,R*=4294967296;return new c(S,0)}function v(A,S){if(A.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(A.charAt(0)=="-")return X(v(A.substring(1),S));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=g(Math.pow(S,8));let x=T;for(let k=0;k<A.length;k+=8){var D=Math.min(8,A.length-k);const C=parseInt(A.substring(k,k+D),S);D<8?(D=g(Math.pow(S,D)),x=x.j(D).add(g(C))):(x=x.j(R),x=x.add(g(C)))}return x}var T=p(0),I=p(1),O=p(16777216);r=c.prototype,r.m=function(){if($(this))return-X(this).m();let A=0,S=1;for(let R=0;R<this.g.length;R++){const x=this.i(R);A+=(x>=0?x:4294967296+x)*S,S*=4294967296}return A},r.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(Q(this))return"0";if($(this))return"-"+X(this).toString(A);const S=g(Math.pow(A,6));var R=this;let x="";for(;;){const D=se(R,S).g;R=me(R,D.j(S));let k=((R.g.length>0?R.g[0]:R.h)>>>0).toString(A);if(R=D,Q(R))return k+x;for(;k.length<6;)k="0"+k;x=k+x}},r.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function Q(A){if(A.h!=0)return!1;for(let S=0;S<A.g.length;S++)if(A.g[S]!=0)return!1;return!0}function $(A){return A.h==-1}r.l=function(A){return A=me(this,A),$(A)?-1:Q(A)?0:1};function X(A){const S=A.g.length,R=[];for(let x=0;x<S;x++)R[x]=~A.g[x];return new c(R,~A.h).add(I)}r.abs=function(){return $(this)?X(this):this},r.add=function(A){const S=Math.max(this.g.length,A.g.length),R=[];let x=0;for(let D=0;D<=S;D++){let k=x+(this.i(D)&65535)+(A.i(D)&65535),C=(k>>>16)+(this.i(D)>>>16)+(A.i(D)>>>16);x=C>>>16,k&=65535,C&=65535,R[D]=C<<16|k}return new c(R,R[R.length-1]&-2147483648?-1:0)};function me(A,S){return A.add(X(S))}r.j=function(A){if(Q(this)||Q(A))return T;if($(this))return $(A)?X(this).j(X(A)):X(X(this).j(A));if($(A))return X(this.j(X(A)));if(this.l(O)<0&&A.l(O)<0)return g(this.m()*A.m());const S=this.g.length+A.g.length,R=[];for(var x=0;x<2*S;x++)R[x]=0;for(x=0;x<this.g.length;x++)for(let D=0;D<A.g.length;D++){const k=this.i(x)>>>16,C=this.i(x)&65535,$e=A.i(D)>>>16,wt=A.i(D)&65535;R[2*x+2*D]+=C*wt,ne(R,2*x+2*D),R[2*x+2*D+1]+=k*wt,ne(R,2*x+2*D+1),R[2*x+2*D+1]+=C*$e,ne(R,2*x+2*D+1),R[2*x+2*D+2]+=k*$e,ne(R,2*x+2*D+2)}for(A=0;A<S;A++)R[A]=R[2*A+1]<<16|R[2*A];for(A=S;A<2*S;A++)R[A]=0;return new c(R,0)};function ne(A,S){for(;(A[S]&65535)!=A[S];)A[S+1]+=A[S]>>>16,A[S]&=65535,S++}function G(A,S){this.g=A,this.h=S}function se(A,S){if(Q(S))throw Error("division by zero");if(Q(A))return new G(T,T);if($(A))return S=se(X(A),S),new G(X(S.g),X(S.h));if($(S))return S=se(A,X(S)),new G(X(S.g),S.h);if(A.g.length>30){if($(A)||$(S))throw Error("slowDivide_ only works with positive integers.");for(var R=I,x=S;x.l(A)<=0;)R=de(R),x=de(x);var D=le(R,1),k=le(x,1);for(x=le(x,2),R=le(R,2);!Q(x);){var C=k.add(x);C.l(A)<=0&&(D=D.add(R),k=C),x=le(x,1),R=le(R,1)}return S=me(A,D.j(S)),new G(D,S)}for(D=T;A.l(S)>=0;){for(R=Math.max(1,Math.floor(A.m()/S.m())),x=Math.ceil(Math.log(R)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),k=g(R),C=k.j(S);$(C)||C.l(A)>0;)R-=x,k=g(R),C=k.j(S);Q(k)&&(k=I),D=D.add(k),A=me(A,C)}return new G(D,A)}r.B=function(A){return se(this,A).h},r.and=function(A){const S=Math.max(this.g.length,A.g.length),R=[];for(let x=0;x<S;x++)R[x]=this.i(x)&A.i(x);return new c(R,this.h&A.h)},r.or=function(A){const S=Math.max(this.g.length,A.g.length),R=[];for(let x=0;x<S;x++)R[x]=this.i(x)|A.i(x);return new c(R,this.h|A.h)},r.xor=function(A){const S=Math.max(this.g.length,A.g.length),R=[];for(let x=0;x<S;x++)R[x]=this.i(x)^A.i(x);return new c(R,this.h^A.h)};function de(A){const S=A.g.length+1,R=[];for(let x=0;x<S;x++)R[x]=A.i(x)<<1|A.i(x-1)>>>31;return new c(R,A.h)}function le(A,S){const R=S>>5;S%=32;const x=A.g.length-R,D=[];for(let k=0;k<x;k++)D[k]=S>0?A.i(k+R)>>>S|A.i(k+R+1)<<32-S:A.i(k+R);return new c(D,A.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,a0=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,qs=c}).apply(typeof cI<"u"?cI:typeof self<"u"?self:typeof window<"u"?window:{});var wf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var o0,Pc,l0,Pf,L_,u0,c0,h0;(function(){var r,e=Object.defineProperty;function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof wf=="object"&&wf];for(var _=0;_<h.length;++_){var E=h[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var i=t(this);function a(h,_){if(_)e:{var E=i;h=h.split(".");for(var b=0;b<h.length-1;b++){var z=h[b];if(!(z in E))break e;E=E[z]}h=h[h.length-1],b=E[h],_=_(b),_!=b&&_!=null&&e(E,h,{configurable:!0,writable:!0,value:_})}}a("Symbol.dispose",function(h){return h||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(h){return h||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(h){return h||function(_){var E=[],b;for(b in _)Object.prototype.hasOwnProperty.call(_,b)&&E.push([b,_[b]]);return E}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function f(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function p(h,_,E){return h.call.apply(h.bind,arguments)}function g(h,_,E){return g=p,g.apply(null,arguments)}function v(h,_){var E=Array.prototype.slice.call(arguments,1);return function(){var b=E.slice();return b.push.apply(b,arguments),h.apply(this,b)}}function T(h,_){function E(){}E.prototype=_.prototype,h.Z=_.prototype,h.prototype=new E,h.prototype.constructor=h,h.Ob=function(b,z,H){for(var ae=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)ae[Re-2]=arguments[Re];return _.prototype[z].apply(b,ae)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?h=>h&&AsyncContext.Snapshot.wrap(h):h=>h;function O(h){const _=h.length;if(_>0){const E=Array(_);for(let b=0;b<_;b++)E[b]=h[b];return E}return[]}function Q(h,_){for(let b=1;b<arguments.length;b++){const z=arguments[b];var E=typeof z;if(E=E!="object"?E:z?Array.isArray(z)?"array":E:"null",E=="array"||E=="object"&&typeof z.length=="number"){E=h.length||0;const H=z.length||0;h.length=E+H;for(let ae=0;ae<H;ae++)h[E+ae]=z[ae]}else h.push(z)}}class ${constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return this.h>0?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function X(h){c.setTimeout(()=>{throw h},0)}function me(){var h=A;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class ne{constructor(){this.h=this.g=null}add(_,E){const b=G.get();b.set(_,E),this.h?this.h.next=b:this.g=b,this.h=b}}var G=new $(()=>new se,h=>h.reset());class se{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let de,le=!1,A=new ne,S=()=>{const h=Promise.resolve(void 0);de=()=>{h.then(R)}};function R(){for(var h;h=me();){try{h.h.call(h.g)}catch(E){X(E)}var _=G;_.j(h),_.h<100&&(_.h++,h.next=_.g,_.g=h)}le=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function D(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var k=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};c.addEventListener("test",E,_),c.removeEventListener("test",E,_)}catch{}return h})();function C(h){return/^[\s\xa0]*$/.test(h)}function $e(h,_){D.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h&&this.init(h,_)}T($e,D),$e.prototype.init=function(h,_){const E=this.type=h.type,b=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget,_||(E=="mouseover"?_=h.fromElement:E=="mouseout"&&(_=h.toElement)),this.relatedTarget=_,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=h.pointerType,this.state=h.state,this.i=h,h.defaultPrevented&&$e.Z.h.call(this)},$e.prototype.h=function(){$e.Z.h.call(this);const h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var wt="closure_listenable_"+(Math.random()*1e6|0),W=0;function ce(h,_,E,b,z){this.listener=h,this.proxy=null,this.src=_,this.type=E,this.capture=!!b,this.ha=z,this.key=++W,this.da=this.fa=!1}function Te(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Fe(h,_,E){for(const b in h)_.call(E,h[b],b,h)}function We(h,_){for(const E in h)_.call(void 0,h[E],E,h)}function P(h){const _={};for(const E in h)_[E]=h[E];return _}const ee="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function he(h,_){let E,b;for(let z=1;z<arguments.length;z++){b=arguments[z];for(E in b)h[E]=b[E];for(let H=0;H<ee.length;H++)E=ee[H],Object.prototype.hasOwnProperty.call(b,E)&&(h[E]=b[E])}}function pe(h){this.src=h,this.g={},this.h=0}pe.prototype.add=function(h,_,E,b,z){const H=h.toString();h=this.g[H],h||(h=this.g[H]=[],this.h++);const ae=De(h,_,b,z);return ae>-1?(_=h[ae],E||(_.fa=!1)):(_=new ce(_,this.src,H,!!b,z),_.fa=E,h.push(_)),_};function Ie(h,_){const E=_.type;if(E in h.g){var b=h.g[E],z=Array.prototype.indexOf.call(b,_,void 0),H;(H=z>=0)&&Array.prototype.splice.call(b,z,1),H&&(Te(_),h.g[E].length==0&&(delete h.g[E],h.h--))}}function De(h,_,E,b){for(let z=0;z<h.length;++z){const H=h[z];if(!H.da&&H.listener==_&&H.capture==!!E&&H.ha==b)return z}return-1}var Be="closure_lm_"+(Math.random()*1e6|0),Qt={};function dt(h,_,E,b,z){if(Array.isArray(_)){for(let H=0;H<_.length;H++)dt(h,_[H],E,b,z);return null}return E=_u(E),h&&h[wt]?h.J(_,E,f(b)?!!b.capture:!1,z):ha(h,_,E,!1,b,z)}function ha(h,_,E,b,z,H){if(!_)throw Error("Invalid event type");const ae=f(z)?!!z.capture:!!z;let Re=da(h);if(Re||(h[Be]=Re=new pe(h)),E=Re.add(_,E,b,ae,H),E.proxy)return E;if(b=Io(),E.proxy=b,b.src=h,b.listener=E,h.addEventListener)k||(z=ae),z===void 0&&(z=!1),h.addEventListener(_.toString(),b,z);else if(h.attachEvent)h.attachEvent(Mi(_.toString()),b);else if(h.addListener&&h.removeListener)h.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Io(){function h(E){return _.call(h.src,h.listener,E)}const _=pu;return h}function Ao(h,_,E,b,z){if(Array.isArray(_))for(var H=0;H<_.length;H++)Ao(h,_[H],E,b,z);else b=f(b)?!!b.capture:!!b,E=_u(E),h&&h[wt]?(h=h.i,H=String(_).toString(),H in h.g&&(_=h.g[H],E=De(_,E,b,z),E>-1&&(Te(_[E]),Array.prototype.splice.call(_,E,1),_.length==0&&(delete h.g[H],h.h--)))):h&&(h=da(h))&&(_=h.g[_.toString()],h=-1,_&&(h=De(_,E,b,z)),(E=h>-1?_[h]:null)&&So(E))}function So(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[wt])Ie(_.i,h);else{var E=h.type,b=h.proxy;_.removeEventListener?_.removeEventListener(E,b,h.capture):_.detachEvent?_.detachEvent(Mi(E),b):_.addListener&&_.removeListener&&_.removeListener(b),(E=da(_))?(Ie(E,h),E.h==0&&(E.src=null,_[Be]=null)):Te(h)}}}function Mi(h){return h in Qt?Qt[h]:Qt[h]="on"+h}function pu(h,_){if(h.da)h=!0;else{_=new $e(_,this);const E=h.listener,b=h.ha||h.src;h.fa&&So(h),h=E.call(b,_)}return h}function da(h){return h=h[Be],h instanceof pe?h:null}var gu="__closure_events_fn_"+(Math.random()*1e9>>>0);function _u(h){return typeof h=="function"?h:(h[gu]||(h[gu]=function(_){return h.handleEvent(_)}),h[gu])}function kt(){x.call(this),this.i=new pe(this),this.M=this,this.G=null}T(kt,x),kt.prototype[wt]=!0,kt.prototype.removeEventListener=function(h,_,E,b){Ao(this,h,_,E,b)};function Yt(h,_){var E,b=h.G;if(b)for(E=[];b;b=b.G)E.push(b);if(h=h.M,b=_.type||_,typeof _=="string")_=new D(_,h);else if(_ instanceof D)_.target=_.target||h;else{var z=_;_=new D(b,h),he(_,z)}z=!0;let H,ae;if(E)for(ae=E.length-1;ae>=0;ae--)H=_.g=E[ae],z=Zr(H,b,!0,_)&&z;if(H=_.g=h,z=Zr(H,b,!0,_)&&z,z=Zr(H,b,!1,_)&&z,E)for(ae=0;ae<E.length;ae++)H=_.g=E[ae],z=Zr(H,b,!1,_)&&z}kt.prototype.N=function(){if(kt.Z.N.call(this),this.i){var h=this.i;for(const _ in h.g){const E=h.g[_];for(let b=0;b<E.length;b++)Te(E[b]);delete h.g[_],h.h--}}this.G=null},kt.prototype.J=function(h,_,E,b){return this.i.add(String(h),_,!1,E,b)},kt.prototype.K=function(h,_,E,b){return this.i.add(String(h),_,!0,E,b)};function Zr(h,_,E,b){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();let z=!0;for(let H=0;H<_.length;++H){const ae=_[H];if(ae&&!ae.da&&ae.capture==E){const Re=ae.listener,Nt=ae.ha||ae.src;ae.fa&&Ie(h.i,ae),z=Re.call(Nt,b)!==!1&&z}}return z&&!b.defaultPrevented}function np(h,_){if(typeof h!="function")if(h&&typeof h.handleEvent=="function")h=g(h.handleEvent,h);else throw Error("Invalid listener argument");return Number(_)>2147483647?-1:c.setTimeout(h,_||0)}function Gh(h){h.g=np(()=>{h.g=null,h.i&&(h.i=!1,Gh(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class wn extends x{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Gh(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fa(h){x.call(this),this.h=h,this.g={}}T(fa,x);var yu=[];function vu(h){Fe(h.g,function(_,E){this.g.hasOwnProperty(E)&&So(_)},h),h.g={}}fa.prototype.N=function(){fa.Z.N.call(this),vu(this)},fa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var es=c.JSON.stringify,ip=c.JSON.parse,Kh=class{stringify(h){return c.JSON.stringify(h,void 0)}parse(h){return c.JSON.parse(h,void 0)}};function Qh(){}function Yh(){}var yi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function an(){D.call(this,"d")}T(an,D);function ti(){D.call(this,"c")}T(ti,D);var Ct={},$h=null;function Ro(){return $h=$h||new kt}Ct.Ia="serverreachability";function Wh(h){D.call(this,Ct.Ia,h)}T(Wh,D);function Li(h){const _=Ro();Yt(_,new Wh(_))}Ct.STAT_EVENT="statevent";function ma(h,_){D.call(this,Ct.STAT_EVENT,h),this.stat=_}T(ma,D);function Mt(h){const _=Ro();Yt(_,new ma(_,h))}Ct.Ja="timingevent";function Ui(h,_){D.call(this,Ct.Ja,h),this.size=_}T(Ui,D);function zi(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){h()},_)}function vi(){this.g=!0}vi.prototype.ua=function(){this.g=!1};function rp(h,_,E,b,z,H){h.info(function(){if(h.g)if(H){var ae="",Re=H.split("&");for(let Ke=0;Ke<Re.length;Ke++){var Nt=Re[Ke].split("=");if(Nt.length>1){const ft=Nt[0];Nt=Nt[1];const si=ft.split("_");ae=si.length>=2&&si[1]=="type"?ae+(ft+"="+Nt+"&"):ae+(ft+"=redacted&")}}}else ae=null;else ae=H;return"XMLHTTP REQ ("+b+") [attempt "+z+"]: "+_+`
`+E+`
`+ae})}function Xh(h,_,E,b,z,H,ae){h.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+z+"]: "+_+`
`+E+`
`+H+" "+ae})}function Bi(h,_,E,b){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+sp(h,E)+(b?" "+b:"")})}function pa(h,_){h.info(function(){return"TIMEOUT: "+_})}vi.prototype.info=function(){};function sp(h,_){if(!h.g)return _;if(!_)return null;try{const H=JSON.parse(_);if(H){for(h=0;h<H.length;h++)if(Array.isArray(H[h])){var E=H[h];if(!(E.length<2)){var b=E[1];if(Array.isArray(b)&&!(b.length<1)){var z=b[0];if(z!="noop"&&z!="stop"&&z!="close")for(let ae=1;ae<b.length;ae++)b[ae]=""}}}}return es(H)}catch{return _}}var ga={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Eu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Tu;function _a(){}T(_a,Qh),_a.prototype.g=function(){return new XMLHttpRequest},Tu=new _a;function Tr(h){return encodeURIComponent(String(h))}function Jh(h){var _=1;h=h.split(":");const E=[];for(;_>0&&h.length;)E.push(h.shift()),_--;return h.length&&E.push(h.join(":")),E}function Ei(h,_,E,b){this.j=h,this.i=_,this.l=E,this.S=b||1,this.V=new fa(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ti}function Ti(){this.i=null,this.g="",this.h=!1}var Lt={},Jt={};function ji(h,_,E){h.M=1,h.A=ya(zt(_)),h.u=E,h.R=!0,Co(h,null)}function Co(h,_){h.F=Date.now(),Fi(h),h.B=zt(h.A);var E=h.B,b=h.S;Array.isArray(b)||(b=[String(b)]),Vo(E.i,"t",b),h.C=0,E=h.j.L,h.h=new Ti,h.g=fd(h.j,E?_:null,!h.u),h.P>0&&(h.O=new wn(g(h.Y,h,h.g),h.P)),_=h.V,E=h.g,b=h.ba;var z="readystatechange";Array.isArray(z)||(z&&(yu[0]=z.toString()),z=yu);for(let H=0;H<z.length;H++){const ae=dt(E,z[H],b||_.handleEvent,!1,_.h||_);if(!ae)break;_.g[ae.key]=ae}_=h.J?P(h.J):{},h.u?(h.v||(h.v="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.B,h.v,h.u,_)):(h.v="GET",h.g.ea(h.B,h.v,null,_)),Li(),rp(h.i,h.v,h.B,h.l,h.S,h.u)}Ei.prototype.ba=function(h){h=h.target;const _=this.O;_&&Ii(h)==3?_.j():this.Y(h)},Ei.prototype.Y=function(h){try{if(h==this.g)e:{const Re=Ii(this.g),Nt=this.g.ya(),Ke=this.g.ca();if(!(Re<3)&&(Re!=3||this.g&&(this.h.h||this.g.la()||on(this.g)))){this.K||Re!=4||Nt==7||(Nt==8||Ke<=0?Li(3):Li(2)),qi(this);var _=this.g.ca();this.X=_;var E=ap(this);if(this.o=_==200,Xh(this.i,this.v,this.B,this.l,this.S,Re,_),this.o){if(this.U&&!this.L){t:{if(this.g){var b,z=this.g;if((b=z.g?z.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(b)){var H=b;break t}}H=null}if(h=H)Bi(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Hi(this,h);else{this.o=!1,this.m=3,Mt(12),jn(this),ni(this);break e}}if(this.R){h=!0;let ft;for(;!this.K&&this.C<E.length;)if(ft=ed(this,E),ft==Jt){Re==4&&(this.m=4,Mt(14),h=!1),Bi(this.i,this.l,null,"[Incomplete Response]");break}else if(ft==Lt){this.m=4,Mt(15),Bi(this.i,this.l,E,"[Invalid Chunk]"),h=!1;break}else Bi(this.i,this.l,ft,null),Hi(this,ft);if(Zh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||E.length!=0||this.h.h||(this.m=1,Mt(16),h=!1),this.o=this.o&&h,!h)Bi(this.i,this.l,E,"[Invalid Chunked Response]"),jn(this),ni(this);else if(E.length>0&&!this.W){this.W=!0;var ae=this.j;ae.g==this&&ae.aa&&!ae.P&&(ae.j.info("Great, no buffering proxy detected. Bytes received: "+E.length),Mu(ae),ae.P=!0,Mt(11))}}else Bi(this.i,this.l,E,null),Hi(this,E);Re==4&&jn(this),this.o&&!this.K&&(Re==4?ud(this.j,this):(this.o=!1,Fi(this)))}else br(this.g),_==400&&E.indexOf("Unknown SID")>0?(this.m=3,Mt(12)):(this.m=0,Mt(13)),jn(this),ni(this)}}}catch{}finally{}};function ap(h){if(!Zh(h))return h.g.la();const _=on(h.g);if(_==="")return"";let E="";const b=_.length,z=Ii(h.g)==4;if(!h.h.i){if(typeof TextDecoder>"u")return jn(h),ni(h),"";h.h.i=new c.TextDecoder}for(let H=0;H<b;H++)h.h.h=!0,E+=h.h.i.decode(_[H],{stream:!(z&&H==b-1)});return _.length=0,h.h.g+=E,h.C=0,h.h.g}function Zh(h){return h.g?h.v=="GET"&&h.M!=2&&h.j.Aa:!1}function ed(h,_){var E=h.C,b=_.indexOf(`
`,E);return b==-1?Jt:(E=Number(_.substring(E,b)),isNaN(E)?Lt:(b+=1,b+E>_.length?Jt:(_=_.slice(b,b+E),h.C=b+E,_)))}Ei.prototype.cancel=function(){this.K=!0,jn(this)};function Fi(h){h.T=Date.now()+h.H,No(h,h.H)}function No(h,_){if(h.D!=null)throw Error("WatchDog timer not null");h.D=zi(g(h.aa,h),_)}function qi(h){h.D&&(c.clearTimeout(h.D),h.D=null)}Ei.prototype.aa=function(){this.D=null;const h=Date.now();h-this.T>=0?(pa(this.i,this.B),this.M!=2&&(Li(),Mt(17)),jn(this),this.m=2,ni(this)):No(this,this.T-h)};function ni(h){h.j.I==0||h.K||ud(h.j,h)}function jn(h){qi(h);var _=h.O;_&&typeof _.dispose=="function"&&_.dispose(),h.O=null,vu(h.V),h.g&&(_=h.g,h.g=null,_.abort(),_.dispose())}function Hi(h,_){try{var E=h.j;if(E.I!=0&&(E.g==h||Ki(E.h,h))){if(!h.L&&Ki(E.h,h)&&E.I==3){try{var b=E.Ba.g.parse(_)}catch{b=null}if(Array.isArray(b)&&b.length==3){var z=b;if(z[0]==0){e:if(!E.v){if(E.g)if(E.g.F+3e3<h.F)Lo(E),ls(E);else break e;Aa(E),Mt(18)}}else E.xa=z[1],0<E.xa-E.K&&z[2]<37500&&E.F&&E.A==0&&!E.C&&(E.C=zi(g(E.Va,E),6e3));Gi(E.h)<=1&&E.ta&&(E.ta=void 0)}else Ji(E,11)}else if((h.L||E.g==h)&&Lo(E),!C(_))for(z=E.Ba.g.parse(_),_=0;_<z.length;_++){let Ke=z[_];const ft=Ke[0];if(!(ft<=E.K))if(E.K=ft,Ke=Ke[1],E.I==2)if(Ke[0]=="c"){E.M=Ke[1],E.ba=Ke[2];const si=Ke[3];si!=null&&(E.ka=si,E.j.info("VER="+E.ka));const Zi=Ke[4];Zi!=null&&(E.za=Zi,E.j.info("SVER="+E.za));const Ai=Ke[5];Ai!=null&&typeof Ai=="number"&&Ai>0&&(b=1.5*Ai,E.O=b,E.j.info("backChannelRequestTimeoutMs_="+b)),b=E;const Si=h.g;if(Si){const Sa=Si.g?Si.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sa){var H=b.h;H.g||Sa.indexOf("spdy")==-1&&Sa.indexOf("quic")==-1&&Sa.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Iu(H,H.h),H.h=null))}if(b.G){const Uo=Si.g?Si.g.getResponseHeader("X-HTTP-Session-Id"):null;Uo&&(b.wa=Uo,Xe(b.J,b.G,Uo))}}E.I=3,E.l&&E.l.ra(),E.aa&&(E.T=Date.now()-h.F,E.j.info("Handshake RTT: "+E.T+"ms")),b=E;var ae=h;if(b.na=dd(b,b.L?b.ba:null,b.W),ae.L){Au(b.h,ae);var Re=ae,Nt=b.O;Nt&&(Re.H=Nt),Re.D&&(qi(Re),Fi(Re)),b.g=ae}else od(b);E.i.length>0&&Xi(E)}else Ke[0]!="stop"&&Ke[0]!="close"||Ji(E,7);else E.I==3&&(Ke[0]=="stop"||Ke[0]=="close"?Ke[0]=="stop"?Ji(E,7):Ou(E):Ke[0]!="noop"&&E.l&&E.l.qa(Ke),E.A=0)}}Li(4)}catch{}}var Ut=class{constructor(h,_){this.g=h,this.map=_}};function wu(h){this.l=h||10,c.PerformanceNavigationTiming?(h=c.performance.getEntriesByType("navigation"),h=h.length>0&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function bu(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Gi(h){return h.h?1:h.g?h.g.size:0}function Ki(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Iu(h,_){h.g?h.g.add(_):h.h=_}function Au(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}wu.prototype.cancel=function(){if(this.i=Su(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Su(h){if(h.h!=null)return h.i.concat(h.h.G);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const E of h.g.values())_=_.concat(E.G);return _}return O(h.i)}var td=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Do(h,_){if(h){h=h.split("&");for(let E=0;E<h.length;E++){const b=h[E].indexOf("=");let z,H=null;b>=0?(z=h[E].substring(0,b),H=h[E].substring(b+1)):z=h[E],_(z,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function Fn(h){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let _;h instanceof Fn?(this.l=h.l,Zt(this,h.j),this.o=h.o,this.g=h.g,ts(this,h.u),this.h=h.h,Ru(this,sd(h.i)),this.m=h.m):h&&(_=String(h).match(td))?(this.l=!1,Zt(this,_[1]||"",!0),this.o=Qi(_[2]||""),this.g=Qi(_[3]||"",!0),ts(this,_[4]),this.h=Qi(_[5]||"",!0),Ru(this,_[6]||"",!0),this.m=Qi(_[7]||"")):(this.l=!1,this.i=new is(null,this.l))}Fn.prototype.toString=function(){const h=[];var _=this.j;_&&h.push(va(_,xo,!0),":");var E=this.g;return(E||_=="file")&&(h.push("//"),(_=this.o)&&h.push(va(_,xo,!0),"@"),h.push(Tr(E).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.u,E!=null&&h.push(":",String(E))),(E=this.h)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(va(E,E.charAt(0)=="/"?Cu:nd,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",va(E,id)),h.join("")},Fn.prototype.resolve=function(h){const _=zt(this);let E=!!h.j;E?Zt(_,h.j):E=!!h.o,E?_.o=h.o:E=!!h.g,E?_.g=h.g:E=h.u!=null;var b=h.h;if(E)ts(_,h.u);else if(E=!!h.h){if(b.charAt(0)!="/")if(this.g&&!this.h)b="/"+b;else{var z=_.h.lastIndexOf("/");z!=-1&&(b=_.h.slice(0,z+1)+b)}if(z=b,z==".."||z==".")b="";else if(z.indexOf("./")!=-1||z.indexOf("/.")!=-1){b=z.lastIndexOf("/",0)==0,z=z.split("/");const H=[];for(let ae=0;ae<z.length;){const Re=z[ae++];Re=="."?b&&ae==z.length&&H.push(""):Re==".."?((H.length>1||H.length==1&&H[0]!="")&&H.pop(),b&&ae==z.length&&H.push("")):(H.push(Re),b=!0)}b=H.join("/")}else b=z}return E?_.h=b:E=h.i.toString()!=="",E?Ru(_,sd(h.i)):E=!!h.m,E&&(_.m=h.m),_};function zt(h){return new Fn(h)}function Zt(h,_,E){h.j=E?Qi(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function ts(h,_){if(_){if(_=Number(_),isNaN(_)||_<0)throw Error("Bad port number "+_);h.u=_}else h.u=null}function Ru(h,_,E){_ instanceof is?(h.i=_,Po(h.i,h.l)):(E||(_=va(_,ns)),h.i=new is(_,h.l))}function Xe(h,_,E){h.i.set(_,E)}function ya(h){return Xe(h,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),h}function Qi(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function va(h,_,E){return typeof h=="string"?(h=encodeURI(h).replace(_,Dn),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Dn(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var xo=/[#\/\?@]/g,nd=/[#\?:]/g,Cu=/[#\?]/g,ns=/[#\?@]/g,id=/#/g;function is(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function xn(h){h.g||(h.g=new Map,h.h=0,h.i&&Do(h.i,function(_,E){h.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}r=is.prototype,r.add=function(h,_){xn(this),this.i=null,h=rs(this,h);let E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(_),this.h+=1,this};function rd(h,_){xn(h),_=rs(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Nu(h,_){return xn(h),_=rs(h,_),h.g.has(_)}r.forEach=function(h,_){xn(this),this.g.forEach(function(E,b){E.forEach(function(z){h.call(_,z,b,this)},this)},this)};function Du(h,_){xn(h);let E=[];if(typeof _=="string")Nu(h,_)&&(E=E.concat(h.g.get(rs(h,_))));else for(h=Array.from(h.g.values()),_=0;_<h.length;_++)E=E.concat(h[_]);return E}r.set=function(h,_){return xn(this),this.i=null,h=rs(this,h),Nu(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},r.get=function(h,_){return h?(h=Du(this,h),h.length>0?String(h[0]):_):_};function Vo(h,_,E){rd(h,_),E.length>0&&(h.i=null,h.g.set(rs(h,_),O(E)),h.h+=E.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(let b=0;b<_.length;b++){var E=_[b];const z=Tr(E);E=Du(this,E);for(let H=0;H<E.length;H++){let ae=z;E[H]!==""&&(ae+="="+Tr(E[H])),h.push(ae)}}return this.i=h.join("&")};function sd(h){const _=new is;return _.i=h.i,h.g&&(_.g=new Map(h.g),_.h=h.h),_}function rs(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Po(h,_){_&&!h.j&&(xn(h),h.i=null,h.g.forEach(function(E,b){const z=b.toLowerCase();b!=z&&(rd(this,b),Vo(this,z,E))},h)),h.j=_}function wi(h,_){const E=new vi;if(c.Image){const b=new Image;b.onload=v(ii,E,"TestLoadImage: loaded",!0,_,b),b.onerror=v(ii,E,"TestLoadImage: error",!1,_,b),b.onabort=v(ii,E,"TestLoadImage: abort",!1,_,b),b.ontimeout=v(ii,E,"TestLoadImage: timeout",!1,_,b),c.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=h}else _(!1)}function xu(h,_){const E=new vi,b=new AbortController,z=setTimeout(()=>{b.abort(),ii(E,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:b.signal}).then(H=>{clearTimeout(z),H.ok?ii(E,"TestPingServer: ok",!0,_):ii(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(z),ii(E,"TestPingServer: error",!1,_)})}function ii(h,_,E,b,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),b(E)}catch{}}function ss(){this.g=new Kh}function Yi(h){this.i=h.Sb||null,this.h=h.ab||!1}T(Yi,Qh),Yi.prototype.g=function(){return new Ea(this.i,this.h)};function Ea(h,_){kt.call(this),this.H=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(Ea,kt),r=Ea.prototype,r.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=h,this.D=_,this.readyState=1,bi(this)},r.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const _={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};h&&(_.body=h),(this.H||c).fetch(new Request(this.D,_)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,as(this)),this.readyState=0},r.Pa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Oo(this)}else h.text().then(this.Oa.bind(this),this.ga.bind(this))};function Oo(h){h.j.read().then(h.Ma.bind(h)).catch(h.ga.bind(h))}r.Ma=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.B.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?as(this):bi(this),this.readyState==3&&Oo(this)}},r.Oa=function(h){this.g&&(this.response=this.responseText=h,as(this))},r.Na=function(h){this.g&&(this.response=h,as(this))},r.ga=function(){this.g&&as(this)};function as(h){h.readyState=4,h.l=null,h.j=null,h.B=null,bi(h)}r.setRequestHeader=function(h,_){this.A.append(h,_)},r.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=_.next();return h.join(`\r
`)};function bi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function ri(h){let _="";return Fe(h,function(E,b){_+=b,_+=":",_+=E,_+=`\r
`}),_}function Ta(h,_,E){e:{for(b in E){var b=!1;break e}b=!0}b||(E=ri(E),typeof h=="string"?E!=null&&Tr(E):Xe(h,_,E))}function nt(h){kt.call(this),this.headers=new Map,this.L=h||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(nt,kt);var $i=/^https?$/i,Vu=["POST","PUT"];r=nt.prototype,r.Fa=function(h){this.H=h},r.ea=function(h,_,E,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Tu.g(),this.g.onreadystatechange=I(g(this.Ca,this));try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(H){wa(this,H);return}if(h=E||"",E=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var z in b)E.set(z,b[z]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const H of b.keys())E.set(H,b.get(H));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(E.keys()).find(H=>H.toLowerCase()=="content-type"),z=c.FormData&&h instanceof c.FormData,!(Array.prototype.indexOf.call(Vu,_,void 0)>=0)||b||z||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ae]of E)this.g.setRequestHeader(H,ae);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(h),this.v=!1}catch(H){wa(this,H)}};function wa(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.o=5,Pu(h),wr(h)}function Pu(h){h.A||(h.A=!0,Yt(h,"complete"),Yt(h,"error"))}r.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=h||7,Yt(this,"complete"),Yt(this,"abort"),wr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wr(this,!0)),nt.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?ba(this):this.Xa())},r.Xa=function(){ba(this)};function ba(h){if(h.h&&typeof l<"u"){if(h.v&&Ii(h)==4)setTimeout(h.Ca.bind(h),0);else if(Yt(h,"readystatechange"),Ii(h)==4){h.h=!1;try{const H=h.ca();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var b;if(b=H===0){let ae=String(h.D).match(td)[1]||null;!ae&&c.self&&c.self.location&&(ae=c.self.location.protocol.slice(0,-1)),b=!$i.test(ae?ae.toLowerCase():"")}E=b}if(E)Yt(h,"complete"),Yt(h,"success");else{h.o=6;try{var z=Ii(h)>2?h.g.statusText:""}catch{z=""}h.l=z+" ["+h.ca()+"]",Pu(h)}}finally{wr(h)}}}}function wr(h,_){if(h.g){h.m&&(clearTimeout(h.m),h.m=null);const E=h.g;h.g=null,_||Yt(h,"ready");try{E.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Ii(h){return h.g?h.g.readyState:0}r.ca=function(){try{return Ii(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),ip(_)}};function on(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.F){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function br(h){const _={};h=(h.g&&Ii(h)>=2&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<h.length;b++){if(C(h[b]))continue;var E=Jh(h[b]);const z=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const H=_[z]||[];_[z]=H,H.push(E)}We(_,function(b){return b.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wi(h,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||_}function os(h){this.za=0,this.i=[],this.j=new vi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Wi("failFast",!1,h),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Wi("baseRetryDelayMs",5e3,h),this.Za=Wi("retryDelaySeedMs",1e4,h),this.Ta=Wi("forwardChannelMaxRetries",2,h),this.va=Wi("forwardChannelRequestTimeoutMs",2e4,h),this.ma=h&&h.xmlHttpFactory||void 0,this.Ua=h&&h.Rb||void 0,this.Aa=h&&h.useFetchStreams||!1,this.O=void 0,this.L=h&&h.supportsCrossDomainXhr||!1,this.M="",this.h=new wu(h&&h.concurrentRequestLimit),this.Ba=new ss,this.S=h&&h.fastHandshake||!1,this.R=h&&h.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=h&&h.Pb||!1,h&&h.ua&&this.j.ua(),h&&h.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&h&&h.detectBufferingProxy||!1,this.ia=void 0,h&&h.longPollingTimeout&&h.longPollingTimeout>0&&(this.ia=h.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=os.prototype,r.ka=8,r.I=1,r.connect=function(h,_,E,b){Mt(0),this.W=h,this.H=_||{},E&&b!==void 0&&(this.H.OSID=E,this.H.OAID=b),this.F=this.X,this.J=dd(this,null,this.W),Xi(this)};function Ou(h){if(ko(h),h.I==3){var _=h.V++,E=zt(h.J);if(Xe(E,"SID",h.M),Xe(E,"RID",_),Xe(E,"TYPE","terminate"),Ia(h,E),_=new Ei(h,h.j,_),_.M=2,_.A=ya(zt(E)),E=!1,c.navigator&&c.navigator.sendBeacon)try{E=c.navigator.sendBeacon(_.A.toString(),"")}catch{}!E&&c.Image&&(new Image().src=_.A,E=!0),E||(_.g=fd(_.j,null),_.g.ea(_.A)),_.F=Date.now(),Fi(_)}hd(h)}function ls(h){h.g&&(Mu(h),h.g.cancel(),h.g=null)}function ko(h){ls(h),h.v&&(c.clearTimeout(h.v),h.v=null),Lo(h),h.h.cancel(),h.m&&(typeof h.m=="number"&&c.clearTimeout(h.m),h.m=null)}function Xi(h){if(!bu(h.h)&&!h.m){h.m=!0;var _=h.Ea;de||S(),le||(de(),le=!0),A.add(_,h),h.D=0}}function Mo(h,_){return Gi(h.h)>=h.h.j-(h.m?1:0)?!1:h.m?(h.i=_.G.concat(h.i),!0):h.I==1||h.I==2||h.D>=(h.Sa?0:h.Ta)?!1:(h.m=zi(g(h.Ea,h,_),cd(h,h.D)),h.D++,!0)}r.Ea=function(h){if(this.m)if(this.m=null,this.I==1){if(!h){this.V=Math.floor(Math.random()*1e5),h=this.V++;const z=new Ei(this,this.j,h);let H=this.o;if(this.U&&(H?(H=P(H),he(H,this.U)):H=this.U),this.u!==null||this.R||(z.J=H,H=null),this.S)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var b=this.i[E];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(_+=b,_>4096){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=ad(this,z,_),E=zt(this.J),Xe(E,"RID",h),Xe(E,"CVER",22),this.G&&Xe(E,"X-HTTP-Session-Id",this.G),Ia(this,E),H&&(this.R?_="headers="+Tr(ri(H))+"&"+_:this.u&&Ta(E,this.u,H)),Iu(this.h,z),this.Ra&&Xe(E,"TYPE","init"),this.S?(Xe(E,"$req",_),Xe(E,"SID","null"),z.U=!0,ji(z,E,null)):ji(z,E,_),this.I=2}}else this.I==3&&(h?ku(this,h):this.i.length==0||bu(this.h)||ku(this))};function ku(h,_){var E;_?E=_.l:E=h.V++;const b=zt(h.J);Xe(b,"SID",h.M),Xe(b,"RID",E),Xe(b,"AID",h.K),Ia(h,b),h.u&&h.o&&Ta(b,h.u,h.o),E=new Ei(h,h.j,E,h.D+1),h.u===null&&(E.J=h.o),_&&(h.i=_.G.concat(h.i)),_=ad(h,E,1e3),E.H=Math.round(h.va*.5)+Math.round(h.va*.5*Math.random()),Iu(h.h,E),ji(E,b,_)}function Ia(h,_){h.H&&Fe(h.H,function(E,b){Xe(_,b,E)}),h.l&&Fe({},function(E,b){Xe(_,b,E)})}function ad(h,_,E){E=Math.min(h.i.length,E);const b=h.l?g(h.l.Ka,h.l,h):null;e:{var z=h.i;let Re=-1;for(;;){const Nt=["count="+E];Re==-1?E>0?(Re=z[0].g,Nt.push("ofs="+Re)):Re=0:Nt.push("ofs="+Re);let Ke=!0;for(let ft=0;ft<E;ft++){var H=z[ft].g;const si=z[ft].map;if(H-=Re,H<0)Re=Math.max(0,z[ft].g-100),Ke=!1;else try{H="req"+H+"_"||"";try{var ae=si instanceof Map?si:Object.entries(si);for(const[Zi,Ai]of ae){let Si=Ai;f(Ai)&&(Si=es(Ai)),Nt.push(H+Zi+"="+encodeURIComponent(Si))}}catch(Zi){throw Nt.push(H+"type="+encodeURIComponent("_badmap")),Zi}}catch{b&&b(si)}}if(Ke){ae=Nt.join("&");break e}}ae=void 0}return h=h.i.splice(0,E),_.G=h,ae}function od(h){if(!h.g&&!h.v){h.Y=1;var _=h.Da;de||S(),le||(de(),le=!0),A.add(_,h),h.A=0}}function Aa(h){return h.g||h.v||h.A>=3?!1:(h.Y++,h.v=zi(g(h.Da,h),cd(h,h.A)),h.A++,!0)}r.Da=function(){if(this.v=null,ld(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var h=4*this.T;this.j.info("BP detection timer enabled: "+h),this.B=zi(g(this.Wa,this),h)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Mt(10),ls(this),ld(this))};function Mu(h){h.B!=null&&(c.clearTimeout(h.B),h.B=null)}function ld(h){h.g=new Ei(h,h.j,"rpc",h.Y),h.u===null&&(h.g.J=h.o),h.g.P=0;var _=zt(h.na);Xe(_,"RID","rpc"),Xe(_,"SID",h.M),Xe(_,"AID",h.K),Xe(_,"CI",h.F?"0":"1"),!h.F&&h.ia&&Xe(_,"TO",h.ia),Xe(_,"TYPE","xmlhttp"),Ia(h,_),h.u&&h.o&&Ta(_,h.u,h.o),h.O&&(h.g.H=h.O);var E=h.g;h=h.ba,E.M=1,E.A=ya(zt(_)),E.u=null,E.R=!0,Co(E,h)}r.Va=function(){this.C!=null&&(this.C=null,ls(this),Aa(this),Mt(19))};function Lo(h){h.C!=null&&(c.clearTimeout(h.C),h.C=null)}function ud(h,_){var E=null;if(h.g==_){Lo(h),Mu(h),h.g=null;var b=2}else if(Ki(h.h,_))E=_.G,Au(h.h,_),b=1;else return;if(h.I!=0){if(_.o)if(b==1){E=_.u?_.u.length:0,_=Date.now()-_.F;var z=h.D;b=Ro(),Yt(b,new Ui(b,E)),Xi(h)}else od(h);else if(z=_.m,z==3||z==0&&_.X>0||!(b==1&&Mo(h,_)||b==2&&Aa(h)))switch(E&&E.length>0&&(_=h.h,_.i=_.i.concat(E)),z){case 1:Ji(h,5);break;case 4:Ji(h,10);break;case 3:Ji(h,6);break;default:Ji(h,2)}}}function cd(h,_){let E=h.Qa+Math.floor(Math.random()*h.Za);return h.isActive()||(E*=2),E*_}function Ji(h,_){if(h.j.info("Error code "+_),_==2){var E=g(h.bb,h),b=h.Ua;const z=!b;b=new Fn(b||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Zt(b,"https"),ya(b),z?wi(b.toString(),E):xu(b.toString(),E)}else Mt(2);h.I=0,h.l&&h.l.pa(_),hd(h),ko(h)}r.bb=function(h){h?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function hd(h){if(h.I=0,h.ja=[],h.l){const _=Su(h.h);(_.length!=0||h.i.length!=0)&&(Q(h.ja,_),Q(h.ja,h.i),h.h.i.length=0,O(h.i),h.i.length=0),h.l.oa()}}function dd(h,_,E){var b=E instanceof Fn?zt(E):new Fn(E);if(b.g!="")_&&(b.g=_+"."+b.g),ts(b,b.u);else{var z=c.location;b=z.protocol,_=_?_+"."+z.hostname:z.hostname,z=+z.port;const H=new Fn(null);b&&Zt(H,b),_&&(H.g=_),z&&ts(H,z),E&&(H.h=E),b=H}return E=h.G,_=h.wa,E&&_&&Xe(b,E,_),Xe(b,"VER",h.ka),Ia(h,b),b}function fd(h,_,E){if(_&&!h.L)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Aa&&!h.ma?new nt(new Yi({ab:E})):new nt(h.ma),_.Fa(h.L),_}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function md(){}r=md.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function us(){}us.prototype.g=function(h,_){return new bn(h,_)};function bn(h,_){kt.call(this),this.g=new os(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.sa&&(h?h["X-WebChannel-Client-Profile"]=_.sa:h={"X-WebChannel-Client-Profile":_.sa}),this.g.U=h,(h=_&&_.Qb)&&!C(h)&&(this.g.u=h),this.A=_&&_.supportsCrossDomainXhr||!1,this.v=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!C(_)&&(this.g.G=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ir(this)}T(bn,kt),bn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},bn.prototype.close=function(){Ou(this.g)},bn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.v&&(E={},E.__data__=es(h),h=E);_.i.push(new Ut(_.Ya++,h)),_.I==3&&Xi(_)},bn.prototype.N=function(){this.g.l=null,delete this.j,Ou(this.g),delete this.g,bn.Z.N.call(this)};function pd(h){an.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const E in _){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}T(pd,an);function gd(){ti.call(this),this.status=1}T(gd,ti);function Ir(h){this.g=h}T(Ir,md),Ir.prototype.ra=function(){Yt(this.g,"a")},Ir.prototype.qa=function(h){Yt(this.g,new pd(h))},Ir.prototype.pa=function(h){Yt(this.g,new gd)},Ir.prototype.oa=function(){Yt(this.g,"b")},us.prototype.createWebChannel=us.prototype.g,bn.prototype.send=bn.prototype.o,bn.prototype.open=bn.prototype.m,bn.prototype.close=bn.prototype.close,h0=function(){return new us},c0=function(){return Ro()},u0=Ct,L_={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ga.NO_ERROR=0,ga.TIMEOUT=8,ga.HTTP_ERROR=6,Pf=ga,Eu.COMPLETE="complete",l0=Eu,Yh.EventType=yi,yi.OPEN="a",yi.CLOSE="b",yi.ERROR="c",yi.MESSAGE="d",kt.prototype.listen=kt.prototype.J,Pc=Yh,nt.prototype.listenOnce=nt.prototype.K,nt.prototype.getLastError=nt.prototype.Ha,nt.prototype.getLastErrorCode=nt.prototype.ya,nt.prototype.getStatus=nt.prototype.ca,nt.prototype.getResponseJson=nt.prototype.La,nt.prototype.getResponseText=nt.prototype.la,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Fa,o0=nt}).apply(typeof wf<"u"?wf:typeof self<"u"?self:typeof window<"u"?window:{});const hI="@firebase/firestore",dI="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rn.UNAUTHENTICATED=new rn(null),rn.GOOGLE_CREDENTIALS=new rn("google-credentials-uid"),rn.FIRST_PARTY=new rn("first-party-uid"),rn.MOCK_USER=new rn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new ym("@firebase/firestore");function Tl(){return Ws.logLevel}function NO(r){Ws.setLogLevel(r)}function ie(r,...e){if(Ws.logLevel<=Oe.DEBUG){const t=e.map(Hy);Ws.debug(`Firestore (${ou}): ${r}`,...t)}}function Vt(r,...e){if(Ws.logLevel<=Oe.ERROR){const t=e.map(Hy);Ws.error(`Firestore (${ou}): ${r}`,...t)}}function vr(r,...e){if(Ws.logLevel<=Oe.WARN){const t=e.map(Hy);Ws.warn(`Firestore (${ou}): ${r}`,...t)}}function Hy(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,d0(r,i,t)}function d0(r,e,t){let i=`FIRESTORE (${ou}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Vt(i),new Error(i)}function _e(r,e,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,r||d0(e,a,i)}function DO(r,e){r||fe(57014,e)}function ue(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Rn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(rn.UNAUTHENTICATED)))}shutdown(){}}class VO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class PO{constructor(e){this.t=e,this.currentUser=rn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){_e(this.o===void 0,42304);let i=this.i;const a=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new mn;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new mn,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},f=p=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new mn)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(_e(typeof i.accessToken=="string",31837,{l:i}),new f0(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string",2055,{h:e}),new rn(e)}}class OO{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=rn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class kO{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new OO(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(rn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){_e(this.o===void 0,3512);const i=l=>{l.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ie("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const a=l=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new fI(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(_e(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new fI(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LO(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=LO(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<t&&(i+=e.charAt(a[l]%62))}return i}}function Ae(r,e){return r<e?-1:r>e?1:0}function U_(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const a=r.charAt(i),l=e.charAt(i);if(a!==l)return __(a)===__(l)?Ae(a,l):__(a)?1:-1}return Ae(r.length,e.length)}const UO=55296,zO=57343;function __(r){const e=r.charCodeAt(0);return e>=UO&&e<=zO}function Ll(r,e,t){return r.length===e.length&&r.every(((i,a)=>t(i,e[a])))}function m0(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="__name__";class rr{constructor(e,t,i){t===void 0?t=0:t>e.length&&fe(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&fe(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return rr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let a=0;a<i;a++){const l=rr.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ae(e.length,t.length)}static compareSegments(e,t){const i=rr.isNumericId(e),a=rr.isNumericId(t);return i&&!a?-1:!i&&a?1:i&&a?rr.extractNumericId(e).compare(rr.extractNumericId(t)):U_(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qs.fromString(e.substring(4,e.length-2))}}class ke extends rr{construct(e,t,i){return new ke(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new te(q.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((a=>a.length>0)))}return new ke(t)}static emptyPath(){return new ke([])}}const BO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends rr{construct(e,t,i){return new _t(e,t,i)}static isValidIdentifier(e){return BO.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===mI}static keyField(){return new _t([mI])}static fromServerFormat(e){const t=[];let i="",a=0;const l=()=>{if(i.length===0)throw new te(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new te(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new te(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else f==="`"?(c=!c,a++):f!=="."||c?(i+=f,a++):(l(),a++)}if(l(),c)throw new te(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(t)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(ke.fromString(e))}static fromName(e){return new oe(ke.fromString(e).popFirst(5))}static empty(){return new oe(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new ke(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(r,e,t){if(!t)throw new te(q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function p0(r,e,t,i){if(e===!0&&i===!0)throw new te(q.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function pI(r){if(!oe.isDocumentKey(r))throw new te(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function gI(r){if(oe.isDocumentKey(r))throw new te(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function g0(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Dm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":fe(12329,{type:typeof r})}function Ge(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new te(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Dm(r);throw new te(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function _0(r,e){if(e<=0)throw new te(q.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(r,e){const t={typeString:r};return e&&(t.value=e),t}function Dh(r,e){if(!g0(r))throw new te(q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const a=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const c=r[i];if(a&&typeof c!==a){t=`JSON field '${i}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new te(q.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=-62135596800,yI=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*yI);return new Ye(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<_I)throw new te(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yI}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Dh(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_I;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:Kt("string",Ye._jsonSchemaVersion),seconds:Kt("number"),nanoseconds:Kt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Ye(0,0))}static max(){return new ve(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=-1;class em{constructor(e,t,i,a){this.indexId=e,this.collectionGroup=t,this.fields=i,this.indexState=a}}function z_(r){return r.fields.find((e=>e.kind===2))}function Ha(r){return r.fields.filter((e=>e.kind!==2))}em.UNKNOWN_ID=-1;class Of{constructor(e,t){this.fieldPath=e,this.kind=t}}class ah{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ah(0,ei.min())}}function y0(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,a=ve.fromTimestamp(i===1e9?new Ye(t+1,0):new Ye(t,i));return new ei(a,oe.empty(),e)}function v0(r){return new ei(r.readTime,r.key,Ul)}class ei{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ei(ve.min(),oe.empty(),Ul)}static max(){return new ei(ve.max(),oe.empty(),Ul)}}function Qy(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=oe.comparator(r.documentKey,e.documentKey),t!==0?t:Ae(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class T0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(r){if(r.code!==q.FAILED_PRECONDITION||r.message!==E0)throw r;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U(((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):U.reject(t)}static resolve(e){return new U(((t,i)=>{t(e)}))}static reject(e){return new U(((t,i)=>{i(e)}))}static waitFor(e){return new U(((t,i)=>{let a=0,l=0,c=!1;e.forEach((f=>{++a,f.next((()=>{++l,c&&l===a&&t()}),(p=>i(p)))})),c=!0,l===a&&t()}))}static or(e){let t=U.resolve(!1);for(const i of e)t=t.next((a=>a?U.resolve(a):i()));return t}static forEach(e,t){const i=[];return e.forEach(((a,l)=>{i.push(t.call(this,a,l))})),this.waitFor(i)}static mapArray(e,t){return new U(((i,a)=>{const l=e.length,c=new Array(l);let f=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((v=>{c[g]=v,++f,f===l&&i(c)}),(v=>a(v)))}}))}static doWhile(e,t){return new U(((i,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):i()};l()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="SimpleDb";class xm{static open(e,t,i,a){try{return new xm(t,e.transaction(a,i))}catch(l){throw new Hc(t,l)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new mn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Hc(e,t.error)):this.S.resolve()},this.transaction.onerror=i=>{const a=Yy(i.target.error);this.S.reject(new Hc(e,a))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(ie(Wn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new FO(t)}}class fr{static delete(e){return ie(Wn,"Removing database:",e),Ka(py().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Zc())return!1;if(fr.F())return!0;const e=Et(),t=fr.M(e),i=0<t&&t<10,a=w0(e),l=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||i||l)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(i)}constructor(e,t,i){this.name=e,this.version=t,this.N=i,this.B=null,fr.M(Et())===12.2&&Vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(ie(Wn,"Opening database:",this.name),this.db=await new Promise(((t,i)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=l=>{const c=l.target.result;t(c)},a.onblocked=()=>{i(new Hc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=l=>{const c=l.target.error;c.name==="VersionError"?i(new te(q.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):c.name==="InvalidStateError"?i(new te(q.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+c)):i(new Hc(e,c))},a.onupgradeneeded=l=>{ie(Wn,'Database "'+this.name+'" requires upgrade from version:',l.oldVersion);const c=l.target.result;this.N.k(c,a.transaction,l.oldVersion,this.version).next((()=>{ie(Wn,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,i,a){const l=t==="readonly";let c=0;for(;;){++c;try{this.db=await this.L(e);const f=xm.open(this.db,e,l?"readonly":"readwrite",i),p=a(f).next((g=>(f.C(),g))).catch((g=>(f.abort(g),U.reject(g)))).toPromise();return p.catch((()=>{})),await f.D,p}catch(f){const p=f,g=p.name!=="FirebaseError"&&c<3;if(ie(Wn,"Transaction failed with error:",p.message,"Retrying:",g),this.close(),!g)return Promise.reject(p)}}}close(){this.db&&this.db.close(),this.db=void 0}}function w0(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class jO{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return Ka(this.U.delete())}}class Hc extends te{constructor(e,t){super(q.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function oa(r){return r.name==="IndexedDbTransactionError"}class FO{constructor(e){this.store=e}put(e,t){let i;return t!==void 0?(ie(Wn,"PUT",this.store.name,e,t),i=this.store.put(t,e)):(ie(Wn,"PUT",this.store.name,"<auto-key>",e),i=this.store.put(e)),Ka(i)}add(e){return ie(Wn,"ADD",this.store.name,e,e),Ka(this.store.add(e))}get(e){return Ka(this.store.get(e)).next((t=>(t===void 0&&(t=null),ie(Wn,"GET",this.store.name,e,t),t)))}delete(e){return ie(Wn,"DELETE",this.store.name,e),Ka(this.store.delete(e))}count(){return ie(Wn,"COUNT",this.store.name),Ka(this.store.count())}J(e,t){const i=this.options(e,t),a=i.index?this.store.index(i.index):this.store;if(typeof a.getAll=="function"){const l=a.getAll(i.range);return new U(((c,f)=>{l.onerror=p=>{f(p.target.error)},l.onsuccess=p=>{c(p.target.result)}}))}{const l=this.cursor(i),c=[];return this.H(l,((f,p)=>{c.push(p)})).next((()=>c))}}Y(e,t){const i=this.store.getAll(e,t===null?void 0:t);return new U(((a,l)=>{i.onerror=c=>{l(c.target.error)},i.onsuccess=c=>{a(c.target.result)}}))}Z(e,t){ie(Wn,"DELETE ALL",this.store.name);const i=this.options(e,t);i.X=!1;const a=this.cursor(i);return this.H(a,((l,c,f)=>f.delete()))}ee(e,t){let i;t?i=e:(i={},t=e);const a=this.cursor(i);return this.H(a,t)}te(e){const t=this.cursor({});return new U(((i,a)=>{t.onerror=l=>{const c=Yy(l.target.error);a(c)},t.onsuccess=l=>{const c=l.target.result;c?e(c.primaryKey,c.value).next((f=>{f?c.continue():i()})):i()}}))}H(e,t){const i=[];return new U(((a,l)=>{e.onerror=c=>{l(c.target.error)},e.onsuccess=c=>{const f=c.target.result;if(!f)return void a();const p=new jO(f),g=t(f.primaryKey,f.value,p);if(g instanceof U){const v=g.catch((T=>(p.done(),U.reject(T))));i.push(v)}p.isDone?a():p.G===null?f.continue():f.continue(p.G)}})).next((()=>U.waitFor(i)))}options(e,t){let i;return e!==void 0&&(typeof e=="string"?i=e:t=e),{index:i,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const i=this.store.index(e.index);return e.X?i.openKeyCursor(e.range,t):i.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ka(r){return new U(((e,t)=>{r.onsuccess=i=>{const a=i.target.result;e(a)},r.onerror=i=>{const a=Yy(i.target.error);t(a)}}))}let vI=!1;function Yy(r){const e=fr.M(Et());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const i=new te("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return vI||(vI=!0,setTimeout((()=>{throw i}),0)),i}}return r}const Gc="IndexBackfiller";class qO{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){ie(Gc,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();ie(Gc,`Documents written: ${t}`)}catch(t){oa(t)?ie(Gc,"Ignoring IndexedDB error during index backfill: ",t):await aa(t)}await this.re(6e4)}))}}class HO{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const i=new Set;let a=t,l=!0;return U.doWhile((()=>l===!0&&a>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((c=>{if(c!==null&&!i.has(c))return ie(Gc,`Processing collection: ${c}`),this.oe(e,c,a).next((f=>{a-=f,i.add(c)}));l=!1})))).next((()=>t-a))}oe(e,t,i){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((a=>this.localStore.localDocuments.getNextDocuments(e,t,a,i).next((l=>{const c=l.changes;return this.localStore.indexManager.updateIndexEntries(e,c).next((()=>this._e(a,l))).next((f=>(ie(Gc,`Updating offset: ${f}`),this.localStore.indexManager.updateCollectionGroup(e,t,f)))).next((()=>c.size))}))))}_e(e,t){let i=e;return t.changes.forEach(((a,l)=>{const c=v0(l);Qy(c,i)>0&&(i=c)})),new ei(i.readTime,i.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Un.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=-1;function xh(r){return r==null}function oh(r){return r===0&&1/r==-1/0}function b0(r){return typeof r=="number"&&Number.isInteger(r)&&!oh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="";function En(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=EI(e)),e=GO(r.get(t),e);return EI(e)}function GO(r,e){let t=e;const i=r.length;for(let a=0;a<i;a++){const l=r.charAt(a);switch(l){case"\0":t+="";break;case tm:t+="";break;default:t+=l}}return t}function EI(r){return r+tm+""}function hr(r){const e=r.length;if(_e(e>=2,64408,{path:r}),e===2)return _e(r.charAt(0)===tm&&r.charAt(1)==="",56145,{path:r}),ke.emptyPath();const t=e-2,i=[];let a="";for(let l=0;l<e;){const c=r.indexOf(tm,l);switch((c<0||c>t)&&fe(50515,{path:r}),r.charAt(c+1)){case"":const f=r.substring(l,c);let p;a.length===0?p=f:(a+=f,p=a,a=""),i.push(p);break;case"":a+=r.substring(l,c),a+="\0";break;case"":a+=r.substring(l,c+1);break;default:fe(61167,{path:r})}l=c+2}return new ke(i)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="remoteDocuments",Vh="owner",pl="owner",lh="mutationQueues",KO="userId",Di="mutations",TI="batchId",Ja="userMutationsIndex",wI=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(r,e){return[r,En(e)]}function I0(r,e,t){return[r,En(e),t]}const QO={},zl="documentMutations",nm="remoteDocumentsV14",YO=["prefixPath","collectionGroup","readTime","documentId"],Mf="documentKeyIndex",$O=["prefixPath","collectionGroup","documentId"],A0="collectionGroupIndex",WO=["collectionGroup","readTime","prefixPath","documentId"],uh="remoteDocumentGlobal",B_="remoteDocumentGlobalKey",Bl="targets",S0="queryTargetsIndex",XO=["canonicalId","targetId"],jl="targetDocuments",JO=["targetId","path"],$y="documentTargetsIndex",ZO=["path","targetId"],im="targetGlobalKey",ro="targetGlobal",ch="collectionParents",ek=["collectionId","parent"],Fl="clientMetadata",tk="clientId",Vm="bundles",nk="bundleId",Pm="namedQueries",ik="name",Wy="indexConfiguration",rk="indexId",j_="collectionGroupIndex",sk="collectionGroup",Kc="indexState",ak=["indexId","uid"],R0="sequenceNumberIndex",ok=["uid","sequenceNumber"],Qc="indexEntries",lk=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],C0="documentKeyIndex",uk=["indexId","uid","orderedDocumentKey"],Om="documentOverlays",ck=["userId","collectionPath","documentId"],F_="collectionPathOverlayIndex",hk=["userId","collectionPath","largestBatchId"],N0="collectionGroupOverlayIndex",dk=["userId","collectionGroup","largestBatchId"],Xy="globals",fk="name",D0=[lh,Di,zl,Ga,Bl,Vh,ro,jl,Fl,uh,ch,Vm,Pm],mk=[...D0,Om],x0=[lh,Di,zl,nm,Bl,Vh,ro,jl,Fl,uh,ch,Vm,Pm,Om],V0=x0,Jy=[...V0,Wy,Kc,Qc],pk=Jy,P0=[...Jy,Xy],gk=P0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_ extends T0{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Xt(r,e){const t=ue(r);return fr.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function la(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function O0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.comparator=e,this.root=t||dn.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,dn.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return t+i.left.size;a<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bf(this.root,e,this.comparator,!1)}getReverseIterator(){return new bf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bf(this.root,e,this.comparator,!0)}}class bf{constructor(e,t,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dn{constructor(e,t,i,a,l){this.key=e,this.value=t,this.color=i??dn.RED,this.left=a??dn.EMPTY,this.right=l??dn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,a,l){return new dn(e??this.key,t??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,i),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return dn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return dn.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}dn.EMPTY=null,dn.RED=!0,dn.BLACK=!1;dn.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,t,i,a,l){return this}insert(e,t,i){return new dn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new II(this.data.getIterator())}getIteratorFrom(e){return new II(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new tt(this.comparator);return t.data=e,t}}class II{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function gl(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new zn([])}unionWith(e){let t=new tt(_t.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ll(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new k0("Invalid base64 string: "+l):l}})(e);return new At(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new At(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const yk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(r){if(_e(!!r,39018),typeof r=="string"){let e=0;const t=yk.exec(r);if(_e(!!t,46558,{timestamp:r}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:pt(r.seconds),nanos:pt(r.nanos)}}function pt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Kr(r){return typeof r=="string"?At.fromBase64String(r):At.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="server_timestamp",L0="__type__",U0="__previous_value__",z0="__local_write_time__";function km(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[L0])==null?void 0:i.stringValue)===M0}function Mm(r){const e=r.mapValue.fields[U0];return km(e)?Mm(e):e}function hh(r){const e=Gr(r.mapValue.fields[z0].timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,t,i,a,l,c,f,p,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const H_="(default)";class Xs{constructor(e,t){this.projectId=e,this.database=t||H_}static empty(){return new Xs("","")}get isDefaultDatabase(){return this.database===H_}isEqual(e){return e instanceof Xs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="__type__",B0="__max__",zs={mapValue:{fields:{__type__:{stringValue:B0}}}},ev="__vector__",ql="value",Lf={nullValue:"NULL_VALUE"};function Js(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?km(r)?4:j0(r)?9007199254740991:Lm(r)?10:11:fe(28295,{value:r})}function Er(r,e){if(r===e)return!0;const t=Js(r);if(t!==Js(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return hh(r).isEqual(hh(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Gr(a.timestampValue),f=Gr(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(a,l){return Kr(a.bytesValue).isEqual(Kr(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(a,l){return pt(a.geoPointValue.latitude)===pt(l.geoPointValue.latitude)&&pt(a.geoPointValue.longitude)===pt(l.geoPointValue.longitude)})(r,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return pt(a.integerValue)===pt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=pt(a.doubleValue),f=pt(l.doubleValue);return c===f?oh(c)===oh(f):isNaN(c)&&isNaN(f)}return!1})(r,e);case 9:return Ll(r.arrayValue.values||[],e.arrayValue.values||[],Er);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},f=l.mapValue.fields||{};if(bI(c)!==bI(f))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(f[p]===void 0||!Er(c[p],f[p])))return!1;return!0})(r,e);default:return fe(52216,{left:r})}}function dh(r,e){return(r.values||[]).find((t=>Er(t,e)))!==void 0}function Zs(r,e){if(r===e)return 0;const t=Js(r),i=Js(e);if(t!==i)return Ae(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(r.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=pt(l.integerValue||l.doubleValue),p=pt(c.integerValue||c.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(r,e);case 3:return AI(r.timestampValue,e.timestampValue);case 4:return AI(hh(r),hh(e));case 5:return U_(r.stringValue,e.stringValue);case 6:return(function(l,c){const f=Kr(l),p=Kr(c);return f.compareTo(p)})(r.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),p=c.split("/");for(let g=0;g<f.length&&g<p.length;g++){const v=Ae(f[g],p[g]);if(v!==0)return v}return Ae(f.length,p.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=Ae(pt(l.latitude),pt(c.latitude));return f!==0?f:Ae(pt(l.longitude),pt(c.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return SI(r.arrayValue,e.arrayValue);case 10:return(function(l,c){var I,O,Q,$;const f=l.fields||{},p=c.fields||{},g=(I=f[ql])==null?void 0:I.arrayValue,v=(O=p[ql])==null?void 0:O.arrayValue,T=Ae(((Q=g==null?void 0:g.values)==null?void 0:Q.length)||0,(($=v==null?void 0:v.values)==null?void 0:$.length)||0);return T!==0?T:SI(g,v)})(r.mapValue,e.mapValue);case 11:return(function(l,c){if(l===zs.mapValue&&c===zs.mapValue)return 0;if(l===zs.mapValue)return 1;if(c===zs.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const I=U_(p[T],v[T]);if(I!==0)return I;const O=Zs(f[p[T]],g[v[T]]);if(O!==0)return O}return Ae(p.length,v.length)})(r.mapValue,e.mapValue);default:throw fe(23264,{he:t})}}function AI(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ae(r,e);const t=Gr(r),i=Gr(e),a=Ae(t.seconds,i.seconds);return a!==0?a:Ae(t.nanos,i.nanos)}function SI(r,e){const t=r.values||[],i=e.values||[];for(let a=0;a<t.length&&a<i.length;++a){const l=Zs(t[a],i[a]);if(l)return l}return Ae(t.length,i.length)}function Hl(r){return G_(r)}function G_(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=Gr(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Kr(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return oe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",a=!0;for(const l of t.values||[])a?a=!1:i+=",",i+=G_(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of i)l?l=!1:a+=",",a+=`${c}:${G_(t.fields[c])}`;return a+"}"})(r.mapValue):fe(61005,{value:r})}function Uf(r){switch(Js(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mm(r);return e?16+Uf(e):16;case 5:return 2*r.stringValue.length;case 6:return Kr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((a,l)=>a+Uf(l)),0)})(r.arrayValue);case 10:case 11:return(function(i){let a=0;return la(i.fields,((l,c)=>{a+=l.length+Uf(c)})),a})(r.mapValue);default:throw fe(13486,{value:r})}}function lo(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function K_(r){return!!r&&"integerValue"in r}function fh(r){return!!r&&"arrayValue"in r}function RI(r){return!!r&&"nullValue"in r}function CI(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function zf(r){return!!r&&"mapValue"in r}function Lm(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Zy])==null?void 0:i.stringValue)===ev}function Yc(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return la(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Yc(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Yc(r.arrayValue.values[t]);return e}return{...r}}function j0(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===B0}const F0={mapValue:{fields:{[Zy]:{stringValue:ev},[ql]:{arrayValue:{}}}}};function Ek(r){return"nullValue"in r?Lf:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?lo(Xs.empty(),oe.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Lm(r)?F0:{mapValue:{}}:fe(35942,{value:r})}function Tk(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?lo(Xs.empty(),oe.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?F0:"mapValue"in r?Lm(r)?{mapValue:{}}:zs:fe(61959,{value:r})}function NI(r,e){const t=Zs(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function DI(r,e){const t=Zs(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.value=e}static empty(){return new fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!zf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yc(t)}setAll(e){let t=_t.emptyPath(),i={},a=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,a),i={},a=[],t=f.popLast()}c?i[f.lastSegment()]=Yc(c):a.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,a)}delete(e){const t=this.field(e.popLast());zf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Er(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=t.mapValue.fields[e.get(i)];zf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,i){la(t,((a,l)=>e[a]=l));for(const a of i)delete e[a]}clone(){return new fn(Yc(this.value))}}function q0(r){const e=[];return la(r.fields,((t,i)=>{const a=new _t([t]);if(zf(i)){const l=q0(i.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new zn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,i,a,l,c,f){this.key=e,this.documentType=t,this.version=i,this.readTime=a,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new ht(e,0,ve.min(),ve.min(),ve.min(),fn.empty(),0)}static newFoundDocument(e,t,i,a){return new ht(e,1,t,ve.min(),i,a,0)}static newNoDocument(e,t){return new ht(e,2,t,ve.min(),ve.min(),fn.empty(),0)}static newUnknownDocument(e,t){return new ht(e,3,t,ve.min(),ve.min(),fn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t){this.position=e,this.inclusive=t}}function xI(r,e,t){let i=0;for(let a=0;a<r.position.length;a++){const l=e[a],c=r.position[a];if(l.field.isKeyField()?i=oe.comparator(oe.fromName(c.referenceValue),t.key):i=Zs(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function VI(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Er(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,t="asc"){this.field=e,this.dir=t}}function wk(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{}class Ue extends H0{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new bk(e,t,i):t==="array-contains"?new Sk(e,i):t==="in"?new W0(e,i):t==="not-in"?new Rk(e,i):t==="array-contains-any"?new Ck(e,i):new Ue(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Ik(e,i):new Ak(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Zs(t,this.value)):t!==null&&Js(this.value)===Js(t)&&this.matchesComparison(Zs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class et extends H0{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new et(e,t)}matches(e){return Gl(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Gl(r){return r.op==="and"}function Q_(r){return r.op==="or"}function tv(r){return G0(r)&&Gl(r)}function G0(r){for(const e of r.filters)if(e instanceof et)return!1;return!0}function Y_(r){if(r instanceof Ue)return r.field.canonicalString()+r.op.toString()+Hl(r.value);if(tv(r))return r.filters.map((e=>Y_(e))).join(",");{const e=r.filters.map((t=>Y_(t))).join(",");return`${r.op}(${e})`}}function K0(r,e){return r instanceof Ue?(function(i,a){return a instanceof Ue&&i.op===a.op&&i.field.isEqual(a.field)&&Er(i.value,a.value)})(r,e):r instanceof et?(function(i,a){return a instanceof et&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce(((l,c,f)=>l&&K0(c,a.filters[f])),!0):!1})(r,e):void fe(19439)}function Q0(r,e){const t=r.filters.concat(e);return et.create(t,r.op)}function Y0(r){return r instanceof Ue?(function(t){return`${t.field.canonicalString()} ${t.op} ${Hl(t.value)}`})(r):r instanceof et?(function(t){return t.op.toString()+" {"+t.getFilters().map(Y0).join(" ,")+"}"})(r):"Filter"}class bk extends Ue{constructor(e,t,i){super(e,t,i),this.key=oe.fromName(i.referenceValue)}matches(e){const t=oe.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ik extends Ue{constructor(e,t){super(e,"in",t),this.keys=$0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ak extends Ue{constructor(e,t){super(e,"not-in",t),this.keys=$0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function $0(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>oe.fromName(i.referenceValue)))}class Sk extends Ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return fh(t)&&dh(t.arrayValue,this.value)}}class W0 extends Ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&dh(this.value.arrayValue,t)}}class Rk extends Ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(dh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!dh(this.value.arrayValue,t)}}class Ck extends Ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!fh(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>dh(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,t=null,i=[],a=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=c,this.endAt=f,this.Te=null}}function $_(r,e=null,t=[],i=[],a=null,l=null,c=null){return new Nk(r,e,t,i,a,l,c)}function uo(r){const e=ue(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Y_(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),xh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Hl(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Hl(i))).join(",")),e.Te=t}return e.Te}function Ph(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!wk(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!K0(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!VI(r.startAt,e.startAt)&&VI(r.endAt,e.endAt)}function rm(r){return oe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function sm(r,e){return r.filters.filter((t=>t instanceof Ue&&t.field.isEqual(e)))}function PI(r,e,t){let i=Lf,a=!0;for(const l of sm(r,e)){let c=Lf,f=!0;switch(l.op){case"<":case"<=":c=Ek(l.value);break;case"==":case"in":case">=":c=l.value;break;case">":c=l.value,f=!1;break;case"!=":case"not-in":c=Lf}NI({value:i,inclusive:a},{value:c,inclusive:f})<0&&(i=c,a=f)}if(t!==null){for(let l=0;l<r.orderBy.length;++l)if(r.orderBy[l].field.isEqual(e)){const c=t.position[l];NI({value:i,inclusive:a},{value:c,inclusive:t.inclusive})<0&&(i=c,a=t.inclusive);break}}return{value:i,inclusive:a}}function OI(r,e,t){let i=zs,a=!0;for(const l of sm(r,e)){let c=zs,f=!0;switch(l.op){case">=":case">":c=Tk(l.value),f=!1;break;case"==":case"in":case"<=":c=l.value;break;case"<":c=l.value,f=!1;break;case"!=":case"not-in":c=zs}DI({value:i,inclusive:a},{value:c,inclusive:f})>0&&(i=c,a=f)}if(t!==null){for(let l=0;l<r.orderBy.length;++l)if(r.orderBy[l].field.isEqual(e)){const c=t.position[l];DI({value:i,inclusive:a},{value:c,inclusive:t.inclusive})>0&&(i=c,a=t.inclusive);break}}return{value:i,inclusive:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t=null,i=[],a=[],l=null,c="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function X0(r,e,t,i,a,l,c,f){return new $r(r,e,t,i,a,l,c,f)}function lu(r){return new $r(r)}function kI(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function nv(r){return r.collectionGroup!==null}function xl(r){const e=ue(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new tt(_t.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(f=f.add(g.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new mh(l,i))})),t.has(_t.keyField().canonicalString())||e.Ie.push(new mh(_t.keyField(),i))}return e.Ie}function Cn(r){const e=ue(r);return e.Ee||(e.Ee=Dk(e,xl(r))),e.Ee}function Dk(r,e){if(r.limitType==="F")return $_(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new mh(a.field,l)}));const t=r.endAt?new ea(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new ea(r.startAt.position,r.startAt.inclusive):null;return $_(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function W_(r,e){const t=r.filters.concat([e]);return new $r(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function am(r,e,t){return new $r(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Oh(r,e){return Ph(Cn(r),Cn(e))&&r.limitType===e.limitType}function J0(r){return`${uo(Cn(r))}|lt:${r.limitType}`}function wl(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((a=>Y0(a))).join(", ")}]`),xh(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((a=>Hl(a))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((a=>Hl(a))).join(",")),`Target(${i})`})(Cn(r))}; limitType=${r.limitType})`}function kh(r,e){return e.isFoundDocument()&&(function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):oe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,a){for(const l of xl(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0})(r,e)&&(function(i,a){return!(i.startAt&&!(function(c,f,p){const g=xI(c,f,p);return c.inclusive?g<=0:g<0})(i.startAt,xl(i),a)||i.endAt&&!(function(c,f,p){const g=xI(c,f,p);return c.inclusive?g>=0:g>0})(i.endAt,xl(i),a))})(r,e)}function Z0(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function eR(r){return(e,t)=>{let i=!1;for(const a of xl(r)){const l=xk(a,e,t);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function xk(r,e,t){const i=r.field.isKeyField()?oe.comparator(e.key,t.key):(function(l,c,f){const p=c.data.field(l),g=f.data.field(l);return p!==null&&g!==null?Zs(p,g):fe(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return fe(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[t]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){la(this.inner,((t,i)=>{for(const[a,l]of i)e(a,l)}))}isEmpty(){return O0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=new lt(oe.comparator);function Bn(){return Vk}const tR=new lt(oe.comparator);function Oc(...r){let e=tR;for(const t of r)e=e.insert(t.key,t);return e}function nR(r){let e=tR;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function dr(){return $c()}function iR(){return $c()}function $c(){return new Wr((r=>r.toString()),((r,e)=>r.isEqual(e)))}const Pk=new lt(oe.comparator),Ok=new tt(oe.comparator);function Ne(...r){let e=Ok;for(const t of r)e=e.add(t);return e}const kk=new tt(Ae);function iv(){return kk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oh(e)?"-0":e}}function rR(r){return{integerValue:""+r}}function sR(r,e){return b0(e)?rR(e):rv(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this._=void 0}}function Mk(r,e,t){return r instanceof Kl?(function(a,l){const c={fields:{[L0]:{stringValue:M0},[z0]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&km(l)&&(l=Mm(l)),l&&(c.fields[U0]=l),{mapValue:c}})(t,e):r instanceof co?oR(r,e):r instanceof ho?lR(r,e):(function(a,l){const c=aR(a,l),f=MI(c)+MI(a.Ae);return K_(c)&&K_(a.Ae)?rR(f):rv(a.serializer,f)})(r,e)}function Lk(r,e,t){return r instanceof co?oR(r,e):r instanceof ho?lR(r,e):t}function aR(r,e){return r instanceof Ql?(function(i){return K_(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Kl extends Um{}class co extends Um{constructor(e){super(),this.elements=e}}function oR(r,e){const t=uR(e);for(const i of r.elements)t.some((a=>Er(a,i)))||t.push(i);return{arrayValue:{values:t}}}class ho extends Um{constructor(e){super(),this.elements=e}}function lR(r,e){let t=uR(e);for(const i of r.elements)t=t.filter((a=>!Er(a,i)));return{arrayValue:{values:t}}}class Ql extends Um{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function MI(r){return pt(r.integerValue||r.doubleValue)}function uR(r){return fh(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,t){this.field=e,this.transform=t}}function Uk(r,e){return r.field.isEqual(e.field)&&(function(i,a){return i instanceof co&&a instanceof co||i instanceof ho&&a instanceof ho?Ll(i.elements,a.elements,Er):i instanceof Ql&&a instanceof Ql?Er(i.Ae,a.Ae):i instanceof Kl&&a instanceof Kl})(r.transform,e.transform)}class zk{constructor(e,t){this.version=e,this.transformResults=t}}class yt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yt}static exists(e){return new yt(void 0,e)}static updateTime(e){return new yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bf(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class zm{}function cR(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new cu(r.key,yt.none()):new uu(r.key,r.data,yt.none());{const t=r.data,i=fn.empty();let a=new tt(_t.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),a=a.add(l)}return new Xr(r.key,i,new zn(a.toArray()),yt.none())}}function Bk(r,e,t){r instanceof uu?(function(a,l,c){const f=a.value.clone(),p=UI(a.fieldTransforms,l,c.transformResults);f.setAll(p),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(r,e,t):r instanceof Xr?(function(a,l,c){if(!Bf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const f=UI(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(hR(a)),p.setAll(f),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(r,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Wc(r,e,t,i){return r instanceof uu?(function(l,c,f,p){if(!Bf(l.precondition,c))return f;const g=l.value.clone(),v=zI(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(r,e,t,i):r instanceof Xr?(function(l,c,f,p){if(!Bf(l.precondition,c))return f;const g=zI(l.fieldTransforms,p,c),v=c.data;return v.setAll(hR(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,i):(function(l,c,f){return Bf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(r,e,t)}function jk(r,e){let t=null;for(const i of r.fieldTransforms){const a=e.data.field(i.field),l=aR(i.transform,a||null);l!=null&&(t===null&&(t=fn.empty()),t.set(i.field,l))}return t||null}function LI(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&Ll(i,a,((l,c)=>Uk(l,c)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class uu extends zm{constructor(e,t,i,a=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Xr extends zm{constructor(e,t,i,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function hR(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function UI(r,e,t){const i=new Map;_e(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let a=0;a<t.length;a++){const l=r[a],c=l.transform,f=e.data.field(l.field);i.set(l.field,Lk(c,f,t[a]))}return i}function zI(r,e,t){const i=new Map;for(const a of r){const l=a.transform,c=t.data.field(a.field);i.set(a.field,Mk(l,c,e))}return i}class cu extends zm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sv extends zm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,t,i,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&Bk(l,e,i[a])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Wc(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Wc(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=iR();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(a.key)?null:f;const p=cR(c,f);p!==null&&i.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(ve.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&Ll(this.mutations,e.mutations,((t,i)=>LI(t,i)))&&Ll(this.baseMutations,e.baseMutations,((t,i)=>LI(t,i)))}}class ov{constructor(e,t,i,a){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=a}static from(e,t,i){_e(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let a=(function(){return Pk})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,i[c].version);return new ov(e,t,i,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht,je;function dR(r){switch(r){case q.OK:return fe(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return fe(15467,{code:r})}}function fR(r){if(r===void 0)return Vt("GRPC error has no .code"),q.UNKNOWN;switch(r){case Ht.OK:return q.OK;case Ht.CANCELLED:return q.CANCELLED;case Ht.UNKNOWN:return q.UNKNOWN;case Ht.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case Ht.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case Ht.INTERNAL:return q.INTERNAL;case Ht.UNAVAILABLE:return q.UNAVAILABLE;case Ht.UNAUTHENTICATED:return q.UNAUTHENTICATED;case Ht.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case Ht.NOT_FOUND:return q.NOT_FOUND;case Ht.ALREADY_EXISTS:return q.ALREADY_EXISTS;case Ht.PERMISSION_DENIED:return q.PERMISSION_DENIED;case Ht.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case Ht.ABORTED:return q.ABORTED;case Ht.OUT_OF_RANGE:return q.OUT_OF_RANGE;case Ht.UNIMPLEMENTED:return q.UNIMPLEMENTED;case Ht.DATA_LOSS:return q.DATA_LOSS;default:return fe(39323,{code:r})}}(je=Ht||(Ht={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=new qs([4294967295,4294967295],0);function BI(r){const e=mR().encode(r),t=new a0;return t.update(e),new Uint8Array(t.digest())}function jI(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new qs([t,i],0),new qs([a,l],0)]}class uv{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new kc(`Invalid padding: ${t}`);if(i<0)throw new kc(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new kc(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new kc(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=qs.fromNumber(this.ge)}ye(e,t,i){let a=e.add(t.multiply(qs.fromNumber(i)));return a.compare(qk)===1&&(a=new qs([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=BI(e),[i,a]=jI(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);if(!this.we(c))return!1}return!0}static create(e,t,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new uv(l,a,t);return i.forEach((f=>c.insert(f))),c}insert(e){if(this.ge===0)return;const t=BI(e),[i,a]=jI(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class kc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,t,i,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const a=new Map;return a.set(e,Uh.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Lh(ve.min(),a,new lt(Ae),Bn(),Ne())}}class Uh{constructor(e,t,i,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Uh(i,t,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t,i,a){this.be=e,this.removedTargetIds=t,this.key=i,this.De=a}}class pR{constructor(e,t){this.targetId=e,this.Ce=t}}class gR{constructor(e,t,i=At.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=a}}class FI{constructor(){this.ve=0,this.Fe=qI(),this.Me=At.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ne(),t=Ne(),i=Ne();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:i=i.add(a);break;default:fe(38017,{changeType:l})}})),new Uh(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=qI()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,_e(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Hk{constructor(e){this.Ge=e,this.ze=new Map,this.je=Bn(),this.Je=If(),this.He=If(),this.Ye=new lt(Ae)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,i=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(rm(l))if(i===0){const c=new oe(l.path);this.et(t,c,ht.newNoDocument(c,ve.min()))}else _e(i===1,20013,{expectedCount:i});else{const c=this._t(t);if(c!==i){const f=this.ut(e),p=f?this.ct(f,e,c):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=t;let c,f;try{c=Kr(i).toUint8Array()}catch(p){if(p instanceof k0)return vr("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new uv(c,a,l)}catch(p){return vr(p instanceof kc?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let a=0;return i.forEach((l=>{const c=this.Ge.ht(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const f=this.ot(c);if(f){if(l.current&&rm(f.target)){const p=new oe(f.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,ht.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let i=Ne();this.He.forEach(((l,c)=>{let f=!0;c.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new Lh(e,t,this.Ye,this.je,i);return this.je=Bn(),this.Je=If(),this.He=If(),this.Ye=new lt(Ae),a}Xe(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new FI,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new tt(Ae),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new tt(Ae),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new FI),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function If(){return new lt(oe.comparator)}function qI(){return new lt(oe.comparator)}const Gk={asc:"ASCENDING",desc:"DESCENDING"},Kk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qk={and:"AND",or:"OR"};class Yk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function X_(r,e){return r.useProto3Json||xh(e)?e:{value:e}}function Yl(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _R(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function $k(r,e){return Yl(r,e.toTimestamp())}function Pt(r){return _e(!!r,49232),ve.fromTimestamp((function(t){const i=Gr(t);return new Ye(i.seconds,i.nanos)})(r))}function cv(r,e){return J_(r,e).canonicalString()}function J_(r,e){const t=(function(a){return new ke(["projects",a.projectId,"databases",a.database])})(r).child("documents");return e===void 0?t:t.child(e)}function yR(r){const e=ke.fromString(r);return _e(CR(e),10190,{key:e.toString()}),e}function ph(r,e){return cv(r.databaseId,e.path)}function mr(r,e){const t=yR(e);if(t.get(1)!==r.databaseId.projectId)throw new te(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new te(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new oe(TR(t))}function vR(r,e){return cv(r.databaseId,e)}function ER(r){const e=yR(r);return e.length===4?ke.emptyPath():TR(e)}function Z_(r){return new ke(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function TR(r){return _e(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function HI(r,e,t){return{name:ph(r,e),fields:t.value.mapValue.fields}}function wR(r,e,t){const i=mr(r,e.name),a=Pt(e.updateTime),l=e.createTime?Pt(e.createTime):ve.min(),c=new fn({mapValue:{fields:e.fields}}),f=ht.newFoundDocument(i,a,l,c);return t&&f.setHasCommittedMutations(),t?f.setHasCommittedMutations():f}function Wk(r,e){return"found"in e?(function(i,a){_e(!!a.found,43571),a.found.name,a.found.updateTime;const l=mr(i,a.found.name),c=Pt(a.found.updateTime),f=a.found.createTime?Pt(a.found.createTime):ve.min(),p=new fn({mapValue:{fields:a.found.fields}});return ht.newFoundDocument(l,c,f,p)})(r,e):"missing"in e?(function(i,a){_e(!!a.missing,3894),_e(!!a.readTime,22933);const l=mr(i,a.missing),c=Pt(a.readTime);return ht.newNoDocument(l,c)})(r,e):fe(7234,{result:e})}function Xk(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:fe(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,v){return g.useProto3Json?(_e(v===void 0||typeof v=="string",58123),At.fromBase64String(v||"")):(_e(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),At.fromUint8Array(v||new Uint8Array))})(r,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(g){const v=g.code===void 0?q.UNKNOWN:fR(g.code);return new te(v,g.message||"")})(c);t=new gR(i,a,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=mr(r,i.document.name),l=Pt(i.document.updateTime),c=i.document.createTime?Pt(i.document.createTime):ve.min(),f=new fn({mapValue:{fields:i.document.fields}}),p=ht.newFoundDocument(a,l,c,f),g=i.targetIds||[],v=i.removedTargetIds||[];t=new jf(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=mr(r,i.document),l=i.readTime?Pt(i.readTime):ve.min(),c=ht.newNoDocument(a,l),f=i.removedTargetIds||[];t=new jf([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=mr(r,i.document),l=i.removedTargetIds||[];t=new jf([],l,a,null)}else{if(!("filter"in e))return fe(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,c=new Fk(a,l),f=i.targetId;t=new pR(f,c)}}return t}function gh(r,e){let t;if(e instanceof uu)t={update:HI(r,e.key,e.value)};else if(e instanceof cu)t={delete:ph(r,e.key)};else if(e instanceof Xr)t={update:HI(r,e.key,e.data),updateMask:iM(e.fieldMask)};else{if(!(e instanceof sv))return fe(16599,{Vt:e.type});t={verify:ph(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const f=c.transform;if(f instanceof Kl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof co)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof ho)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Ql)return{fieldPath:c.field.canonicalString(),increment:f.Ae};throw fe(20930,{transform:c.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:$k(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:fe(27497)})(r,e.precondition)),t}function ey(r,e){const t=e.currentDocument?(function(l){return l.updateTime!==void 0?yt.updateTime(Pt(l.updateTime)):l.exists!==void 0?yt.exists(l.exists):yt.none()})(e.currentDocument):yt.none(),i=e.updateTransforms?e.updateTransforms.map((a=>(function(c,f){let p=null;if("setToServerValue"in f)_e(f.setToServerValue==="REQUEST_TIME",16630,{proto:f}),p=new Kl;else if("appendMissingElements"in f){const v=f.appendMissingElements.values||[];p=new co(v)}else if("removeAllFromArray"in f){const v=f.removeAllFromArray.values||[];p=new ho(v)}else"increment"in f?p=new Ql(c,f.increment):fe(16584,{proto:f});const g=_t.fromServerFormat(f.fieldPath);return new Mh(g,p)})(r,a))):[];if(e.update){e.update.name;const a=mr(r,e.update.name),l=new fn({mapValue:{fields:e.update.fields}});if(e.updateMask){const c=(function(p){const g=p.fieldPaths||[];return new zn(g.map((v=>_t.fromServerFormat(v))))})(e.updateMask);return new Xr(a,l,c,t,i)}return new uu(a,l,t,i)}if(e.delete){const a=mr(r,e.delete);return new cu(a,t)}if(e.verify){const a=mr(r,e.verify);return new sv(a,t)}return fe(1463,{proto:e})}function Jk(r,e){return r&&r.length>0?(_e(e!==void 0,14353),r.map((t=>(function(a,l){let c=a.updateTime?Pt(a.updateTime):Pt(l);return c.isEqual(ve.min())&&(c=Pt(l)),new zk(c,a.transformResults||[])})(t,e)))):[]}function bR(r,e){return{documents:[vR(r,e.path)]}}function IR(r,e){const t={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=vR(r,a);const l=(function(g){if(g.length!==0)return RR(et.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((v=>(function(I){return{field:bl(I.field),direction:eM(I.dir)}})(v)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=X_(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function AR(r){let e=ER(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let a=null;if(i>0){_e(i===1,65062);const v=t.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=(function(T){const I=SR(T);return I instanceof et&&tv(I)?I.getFilters():[I]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((I=>(function(Q){return new mh(Il(Q.field),(function(X){switch(X){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Q.direction))})(I)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let I;return I=typeof T=="object"?T.value:T,xh(I)?null:I})(t.limit));let p=null;t.startAt&&(p=(function(T){const I=!!T.before,O=T.values||[];return new ea(O,I)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const I=!T.before,O=T.values||[];return new ea(O,I)})(t.endAt)),X0(e,a,c,l,f,"F",p,g)}function Zk(r,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function SR(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Il(t.unaryFilter.field);return Ue.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=Il(t.unaryFilter.field);return Ue.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Il(t.unaryFilter.field);return Ue.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Il(t.unaryFilter.field);return Ue.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}})(r):r.fieldFilter!==void 0?(function(t){return Ue.create(Il(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return et.create(t.compositeFilter.filters.map((i=>SR(i))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return fe(1026)}})(t.compositeFilter.op))})(r):fe(30097,{filter:r})}function eM(r){return Gk[r]}function tM(r){return Kk[r]}function nM(r){return Qk[r]}function bl(r){return{fieldPath:r.canonicalString()}}function Il(r){return _t.fromServerFormat(r.fieldPath)}function RR(r){return r instanceof Ue?(function(t){if(t.op==="=="){if(CI(t.value))return{unaryFilter:{field:bl(t.field),op:"IS_NAN"}};if(RI(t.value))return{unaryFilter:{field:bl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(CI(t.value))return{unaryFilter:{field:bl(t.field),op:"IS_NOT_NAN"}};if(RI(t.value))return{unaryFilter:{field:bl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bl(t.field),op:tM(t.op),value:t.value}}})(r):r instanceof et?(function(t){const i=t.getFilters().map((a=>RR(a)));return i.length===1?i[0]:{compositeFilter:{op:nM(t.op),filters:i}}})(r):fe(54877,{filter:r})}function iM(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function CR(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t,i,a,l=ve.min(),c=ve.min(),f=At.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.yt=e}}function rM(r,e){let t;if(e.document)t=wR(r.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const i=oe.fromSegments(e.noDocument.path),a=mo(e.noDocument.readTime);t=ht.newNoDocument(i,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return fe(56709);{const i=oe.fromSegments(e.unknownDocument.path),a=mo(e.unknownDocument.version);t=ht.newUnknownDocument(i,a)}}return e.readTime&&t.setReadTime((function(a){const l=new Ye(a[0],a[1]);return ve.fromTimestamp(l)})(e.readTime)),t}function GI(r,e){const t=e.key,i={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:om(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())i.document=(function(l,c){return{name:ph(l,c.key),fields:c.data.value.mapValue.fields,updateTime:Yl(l,c.version.toTimestamp()),createTime:Yl(l,c.createTime.toTimestamp())}})(r.yt,e);else if(e.isNoDocument())i.noDocument={path:t.path.toArray(),readTime:fo(e.version)};else{if(!e.isUnknownDocument())return fe(57904,{document:e});i.unknownDocument={path:t.path.toArray(),version:fo(e.version)}}return i}function om(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function fo(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function mo(r){const e=new Ye(r.seconds,r.nanoseconds);return ve.fromTimestamp(e)}function Qa(r,e){const t=(e.baseMutations||[]).map((l=>ey(r.yt,l)));for(let l=0;l<e.mutations.length-1;++l){const c=e.mutations[l];if(l+1<e.mutations.length&&e.mutations[l+1].transform!==void 0){const f=e.mutations[l+1];c.updateTransforms=f.transform.fieldTransforms,e.mutations.splice(l+1,1),++l}}const i=e.mutations.map((l=>ey(r.yt,l))),a=Ye.fromMillis(e.localWriteTimeMs);return new av(e.batchId,a,t,i)}function Mc(r){const e=mo(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?mo(r.lastLimboFreeSnapshotVersion):ve.min();let i;return i=(function(l){return l.documents!==void 0})(r.query)?(function(l){const c=l.documents.length;return _e(c===1,1966,{count:c}),Cn(lu(ER(l.documents[0])))})(r.query):(function(l){return Cn(AR(l))})(r.query),new jr(i,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,At.fromBase64String(r.resumeToken))}function DR(r,e){const t=fo(e.snapshotVersion),i=fo(e.lastLimboFreeSnapshotVersion);let a;a=rm(e.target)?bR(r.yt,e.target):IR(r.yt,e.target).ft;const l=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:uo(e.target),readTime:t,resumeToken:l,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:a}}function hv(r){const e=AR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?am(e,e.limit,"L"):e}function y_(r,e){return new lv(e.largestBatchId,ey(r.yt,e.overlayMutation))}function KI(r,e){const t=e.path.lastSegment();return[r,En(e.path.popLast()),t]}function QI(r,e,t,i){return{indexId:r,uid:e,sequenceNumber:t,readTime:fo(i.readTime),documentKey:En(i.documentKey.path),largestBatchId:i.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{getBundleMetadata(e,t){return YI(e).get(t).next((i=>{if(i)return(function(l){return{id:l.bundleId,createTime:mo(l.createTime),version:l.version}})(i)}))}saveBundleMetadata(e,t){return YI(e).put((function(a){return{bundleId:a.id,createTime:fo(Pt(a.createTime)),version:a.version}})(t))}getNamedQuery(e,t){return $I(e).get(t).next((i=>{if(i)return(function(l){return{name:l.name,query:hv(l.bundledQuery),readTime:mo(l.readTime)}})(i)}))}saveNamedQuery(e,t){return $I(e).put((function(a){return{name:a.name,readTime:fo(Pt(a.readTime)),bundledQuery:a.bundledQuery}})(t))}}function YI(r){return Xt(r,Vm)}function $I(r){return Xt(r,Pm)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const i=t.uid||"";return new Bm(e,i)}getOverlay(e,t){return Ac(e).get(KI(this.userId,t)).next((i=>i?y_(this.serializer,i):null))}getOverlays(e,t){const i=dr();return U.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&i.set(a,l)})))).next((()=>i))}saveOverlays(e,t,i){const a=[];return i.forEach(((l,c)=>{const f=new lv(t,c);a.push(this.St(e,f))})),U.waitFor(a)}removeOverlaysForBatchId(e,t,i){const a=new Set;t.forEach((c=>a.add(En(c.getCollectionPath()))));const l=[];return a.forEach((c=>{const f=IDBKeyRange.bound([this.userId,c,i],[this.userId,c,i+1],!1,!0);l.push(Ac(e).Z(F_,f))})),U.waitFor(l)}getOverlaysForCollection(e,t,i){const a=dr(),l=En(t),c=IDBKeyRange.bound([this.userId,l,i],[this.userId,l,Number.POSITIVE_INFINITY],!0);return Ac(e).J(F_,c).next((f=>{for(const p of f){const g=y_(this.serializer,p);a.set(g.getKey(),g)}return a}))}getOverlaysForCollectionGroup(e,t,i,a){const l=dr();let c;const f=IDBKeyRange.bound([this.userId,t,i],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ac(e).ee({index:N0,range:f},((p,g,v)=>{const T=y_(this.serializer,g);l.size()<a||T.largestBatchId===c?(l.set(T.getKey(),T),c=T.largestBatchId):v.done()})).next((()=>l))}St(e,t){return Ac(e).put((function(a,l,c){const[f,p,g]=KI(l,c.mutation.key);return{userId:l,collectionPath:p,documentId:g,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:gh(a.yt,c.mutation)}})(this.serializer,this.userId,t))}}function Ac(r){return Xt(r,Om)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{bt(e){return Xt(e,Xy)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const i=t==null?void 0:t.value;return i?At.fromUint8Array(i):At.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(pt(e.integerValue));else if("doubleValue"in e){const i=pt(e.doubleValue);isNaN(i)?this.Ft(t,13):(this.Ft(t,15),oh(i)?t.Mt(0):t.Mt(i))}else if("timestampValue"in e){let i=e.timestampValue;this.Ft(t,20),typeof i=="string"&&(i=Gr(i)),t.xt(`${i.seconds||""}`),t.Mt(i.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Kr(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const i=e.geoPointValue;this.Ft(t,45),t.Mt(i.latitude||0),t.Mt(i.longitude||0)}else"mapValue"in e?j0(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Lm(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):fe(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const i=e.fields||{};this.Ft(t,55);for(const a of Object.keys(i))this.Ot(a,t),this.Ct(i[a],t)}kt(e,t){var c,f;const i=e.fields||{};this.Ft(t,53);const a=ql,l=((f=(c=i[a].arrayValue)==null?void 0:c.values)==null?void 0:f.length)||0;this.Ft(t,15),t.Mt(pt(l)),this.Ot(a,t),this.Ct(i[a],t)}Qt(e,t){const i=e.values||[];this.Ft(t,50);for(const a of i)this.Ct(a,t)}Lt(e,t){this.Ft(t,37),oe.fromName(e).path.forEach((i=>{this.Ft(t,60),this.Ut(i,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}Ya.Kt=new Ya;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=255;function oM(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function WI(r){const e=64-(function(i){let a=0;for(let l=0;l<8;++l){const c=oM(255&i[l]);if(a+=c,c!==8)break}return a})(r);return Math.ceil(e/8)}class lM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.Gt(i.value),i=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.Jt(i.value),i=t.next();this.Ht()}Yt(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.Gt(i);else if(i<2048)this.Gt(960|i>>>6),this.Gt(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i);else{const a=t.codePointAt(0);this.Gt(240|a>>>18),this.Gt(128|63&a>>>12),this.Gt(128|63&a>>>6),this.Gt(128|63&a)}}this.zt()}Zt(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.Jt(i);else if(i<2048)this.Jt(960|i>>>6),this.Jt(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i);else{const a=t.codePointAt(0);this.Jt(240|a>>>18),this.Jt(128|63&a>>>12),this.Jt(128|63&a>>>6),this.Jt(128|63&a)}}this.Ht()}Xt(e){const t=this.en(e),i=WI(t);this.tn(1+i),this.buffer[this.position++]=255&i;for(let a=t.length-i;a<t.length;++a)this.buffer[this.position++]=255&t[a]}nn(e){const t=this.en(e),i=WI(t);this.tn(1+i),this.buffer[this.position++]=~(255&i);for(let a=t.length-i;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}rn(){this.sn(_l),this.sn(255)}_n(){this.an(_l),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(l){const c=new DataView(new ArrayBuffer(8));return c.setFloat64(0,l,!1),new Uint8Array(c.buffer)})(e),i=!!(128&t[0]);t[0]^=i?255:128;for(let a=1;a<t.length;++a)t[a]^=i?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===_l?(this.sn(_l),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===_l?(this.an(_l),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let i=2*this.buffer.length;i<t&&(i=t);const a=new Uint8Array(i);a.set(this.buffer),this.buffer=a}}class uM{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class cM{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Sc{constructor(){this.cn=new lM,this.ln=new uM(this.cn),this.hn=new cM(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t,i,a){this.Tn=e,this.In=t,this.En=i,this.dn=a}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,i=new Uint8Array(t);return i.set(this.dn,0),t!==e?i.set([0],this.dn.length):++i[i.length-1],new $a(this.Tn,this.In,this.En,i)}Rn(e,t,i){return{indexId:this.Tn,uid:e,arrayValue:Ff(this.En),directionalValue:Ff(this.dn),orderedDocumentKey:Ff(t),documentKey:i.path.toArray()}}Vn(e,t,i){const a=this.Rn(e,t,i);return[a.indexId,a.uid,a.arrayValue,a.directionalValue,a.orderedDocumentKey,a.documentKey]}}function Ps(r,e){let t=r.Tn-e.Tn;return t!==0?t:(t=XI(r.En,e.En),t!==0?t:(t=XI(r.dn,e.dn),t!==0?t:oe.comparator(r.In,e.In)))}function XI(r,e){for(let t=0;t<r.length&&t<e.length;++t){const i=r[t]-e[t];if(i!==0)return i}return r.length-e.length}function Ff(r){return QA()?(function(t){let i="";for(let a=0;a<t.length;a++)i+=String.fromCharCode(t[a]);return i})(r):r}function JI(r){return typeof r!="string"?r:(function(t){const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i})(r)}class ZI{constructor(e){this.mn=new tt(((t,i)=>_t.comparator(t.field,i.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const i=t;i.isInequality()?this.mn=this.mn.add(i):this.gn.push(i)}}get pn(){return this.mn.size>1}yn(e){if(_e(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=z_(e);if(t!==void 0&&!this.wn(t))return!1;const i=Ha(e);let a=new Set,l=0,c=0;for(;l<i.length&&this.wn(i[l]);++l)a=a.add(i[l].fieldPath.canonicalString());if(l===i.length)return!0;if(this.mn.size>0){const f=this.mn.getIterator().getNext();if(!a.has(f.field.canonicalString())){const p=i[l];if(!this.Sn(f,p)||!this.bn(this.fn[c++],p))return!1}++l}for(;l<i.length;++l){const f=i[l];if(c>=this.fn.length||!this.bn(this.fn[c++],f))return!1}return!0}Dn(){if(this.pn)return null;let e=new tt(_t.comparator);const t=[];for(const i of this.gn)if(!i.field.isKeyField())if(i.op==="array-contains"||i.op==="array-contains-any")t.push(new Of(i.field,2));else{if(e.has(i.field))continue;e=e.add(i.field),t.push(new Of(i.field,0))}for(const i of this.fn)i.field.isKeyField()||e.has(i.field)||(e=e.add(i.field),t.push(new Of(i.field,i.dir==="asc"?0:1)));return new em(em.UNKNOWN_ID,this.collectionId,t,ah.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const i=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===i}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(r){var t,i;if(_e(r instanceof Ue||r instanceof et,20012),r instanceof Ue){if(r instanceof W0){const a=((i=(t=r.value.arrayValue)==null?void 0:t.values)==null?void 0:i.map((l=>Ue.create(r.field,"==",l))))||[];return et.create(a,"or")}return r}const e=r.filters.map((a=>xR(a)));return et.create(e,r.op)}function hM(r){if(r.getFilters().length===0)return[];const e=iy(xR(r));return _e(VR(e),7391),ty(e)||ny(e)?[e]:e.getFilters()}function ty(r){return r instanceof Ue}function ny(r){return r instanceof et&&tv(r)}function VR(r){return ty(r)||ny(r)||(function(t){if(t instanceof et&&Q_(t)){for(const i of t.getFilters())if(!ty(i)&&!ny(i))return!1;return!0}return!1})(r)}function iy(r){if(_e(r instanceof Ue||r instanceof et,34018),r instanceof Ue)return r;if(r.filters.length===1)return iy(r.filters[0]);const e=r.filters.map((i=>iy(i)));let t=et.create(e,r.op);return t=lm(t),VR(t)?t:(_e(t instanceof et,64498),_e(Gl(t),40251),_e(t.filters.length>1,57927),t.filters.reduce(((i,a)=>dv(i,a))))}function dv(r,e){let t;return _e(r instanceof Ue||r instanceof et,38388),_e(e instanceof Ue||e instanceof et,25473),t=r instanceof Ue?e instanceof Ue?(function(a,l){return et.create([a,l],"and")})(r,e):eA(r,e):e instanceof Ue?eA(e,r):(function(a,l){if(_e(a.filters.length>0&&l.filters.length>0,48005),Gl(a)&&Gl(l))return Q0(a,l.getFilters());const c=Q_(a)?a:l,f=Q_(a)?l:a,p=c.filters.map((g=>dv(g,f)));return et.create(p,"or")})(r,e),lm(t)}function eA(r,e){if(Gl(e))return Q0(e,r.getFilters());{const t=e.filters.map((i=>dv(r,i)));return et.create(t,"or")}}function lm(r){if(_e(r instanceof Ue||r instanceof et,11850),r instanceof Ue)return r;const e=r.getFilters();if(e.length===1)return lm(e[0]);if(G0(r))return r;const t=e.map((a=>lm(a))),i=[];return t.forEach((a=>{a instanceof Ue?i.push(a):a instanceof et&&(a.op===r.op?i.push(...a.filters):i.push(a))})),i.length===1?i[0]:et.create(i,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(){this.Cn=new fv}addToCollectionParentIndex(e,t){return this.Cn.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(ei.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(ei.min())}updateCollectionGroup(e,t,i){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class fv{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t]||new tt(ke.comparator),l=!a.has(i);return this.index[t]=a.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t];return a&&a.has(i)}getEntries(e){return(this.index[e]||new tt(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA="IndexedDbIndexManager",Af=new Uint8Array(0);class fM{constructor(e,t){this.databaseId=t,this.vn=new fv,this.Fn=new Wr((i=>uo(i)),((i,a)=>Ph(i,a))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const i=t.lastSegment(),a=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const l={collectionId:i,parent:En(a)};return nA(e).put(l)}return U.resolve()}getCollectionParents(e,t){const i=[],a=IDBKeyRange.bound([t,""],[m0(t),""],!1,!0);return nA(e).J(a).next((l=>{for(const c of l){if(c.collectionId!==t)break;i.push(hr(c.parent))}return i}))}addFieldIndex(e,t){const i=Rc(e),a=(function(f){return{indexId:f.indexId,collectionGroup:f.collectionGroup,fields:f.fields.map((p=>[p.fieldPath.canonicalString(),p.kind]))}})(t);delete a.indexId;const l=i.add(a);if(t.indexState){const c=vl(e);return l.next((f=>{c.put(QI(f,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return l.next()}deleteFieldIndex(e,t){const i=Rc(e),a=vl(e),l=yl(e);return i.delete(t.indexId).next((()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>l.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Rc(e),i=yl(e),a=vl(e);return t.Z().next((()=>i.Z())).next((()=>a.Z()))}createTargetIndexes(e,t){return U.forEach(this.Mn(t),(i=>this.getIndexType(e,i).next((a=>{if(a===0||a===1){const l=new ZI(i).Dn();if(l!=null)return this.addFieldIndex(e,l)}}))))}getDocumentsMatchingTarget(e,t){const i=yl(e);let a=!0;const l=new Map;return U.forEach(this.Mn(t),(c=>this.xn(e,c).next((f=>{a&&(a=!!f),l.set(c,f)})))).next((()=>{if(a){let c=Ne();const f=[];return U.forEach(l,((p,g)=>{ie(tA,`Using index ${(function(G){return`id=${G.indexId}|cg=${G.collectionGroup}|f=${G.fields.map((se=>`${se.fieldPath}:${se.kind}`)).join(",")}`})(p)} to execute ${uo(t)}`);const v=(function(G,se){const de=z_(se);if(de===void 0)return null;for(const le of sm(G,de.fieldPath))switch(le.op){case"array-contains-any":return le.value.arrayValue.values||[];case"array-contains":return[le.value]}return null})(g,p),T=(function(G,se){const de=new Map;for(const le of Ha(se))for(const A of sm(G,le.fieldPath))switch(A.op){case"==":case"in":de.set(le.fieldPath.canonicalString(),A.value);break;case"not-in":case"!=":return de.set(le.fieldPath.canonicalString(),A.value),Array.from(de.values())}return null})(g,p),I=(function(G,se){const de=[];let le=!0;for(const A of Ha(se)){const S=A.kind===0?PI(G,A.fieldPath,G.startAt):OI(G,A.fieldPath,G.startAt);de.push(S.value),le&&(le=S.inclusive)}return new ea(de,le)})(g,p),O=(function(G,se){const de=[];let le=!0;for(const A of Ha(se)){const S=A.kind===0?OI(G,A.fieldPath,G.endAt):PI(G,A.fieldPath,G.endAt);de.push(S.value),le&&(le=S.inclusive)}return new ea(de,le)})(g,p),Q=this.On(p,g,I),$=this.On(p,g,O),X=this.Nn(p,g,T),me=this.Bn(p.indexId,v,Q,I.inclusive,$,O.inclusive,X);return U.forEach(me,(ne=>i.Y(ne,t.limit).next((G=>{G.forEach((se=>{const de=oe.fromSegments(se.documentKey);c.has(de)||(c=c.add(de),f.push(de))}))}))))})).next((()=>f))}return U.resolve(null)}))}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=hM(et.create(e.filters,"and")).map((i=>$_(e.path,e.collectionGroup,e.orderBy,i.getFilters(),e.limit,e.startAt,e.endAt))),this.Fn.set(e,t),t)}Bn(e,t,i,a,l,c,f){const p=(t!=null?t.length:1)*Math.max(i.length,l.length),g=p/(t!=null?t.length:1),v=[];for(let T=0;T<p;++T){const I=t?this.Ln(t[T/g]):Af,O=this.kn(e,I,i[T%g],a),Q=this.qn(e,I,l[T%g],c),$=f.map((X=>this.kn(e,I,X,!0)));v.push(...this.createRange(O,Q,$))}return v}kn(e,t,i,a){const l=new $a(e,oe.empty(),t,i);return a?l:l.An()}qn(e,t,i,a){const l=new $a(e,oe.empty(),t,i);return a?l.An():l}xn(e,t){const i=new ZI(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next((l=>{let c=null;for(const f of l)i.yn(f)&&(!c||f.fields.length>c.fields.length)&&(c=f);return c}))}getIndexType(e,t){let i=2;const a=this.Mn(t);return U.forEach(a,(l=>this.xn(e,l).next((c=>{c?i!==0&&c.fields.length<(function(p){let g=new tt(_t.comparator),v=!1;for(const T of p.filters)for(const I of T.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?v=!0:g=g.add(I.field));for(const T of p.orderBy)T.field.isKeyField()||(g=g.add(T.field));return g.size+(v?1:0)})(l)&&(i=1):i=0})))).next((()=>(function(c){return c.limit!==null})(t)&&a.length>1&&i===2?1:i))}Qn(e,t){const i=new Sc;for(const a of Ha(e)){const l=t.data.field(a.fieldPath);if(l==null)return null;const c=i.Pn(a.kind);Ya.Kt.Dt(l,c)}return i.un()}Ln(e){const t=new Sc;return Ya.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const i=new Sc;return Ya.Kt.Dt(lo(this.databaseId,t),i.Pn((function(l){const c=Ha(l);return c.length===0?0:c[c.length-1].kind})(e))),i.un()}Nn(e,t,i){if(i===null)return[];let a=[];a.push(new Sc);let l=0;for(const c of Ha(e)){const f=i[l++];for(const p of a)if(this.Un(t,c.fieldPath)&&fh(f))a=this.Kn(a,c,f);else{const g=p.Pn(c.kind);Ya.Kt.Dt(f,g)}}return this.Wn(a)}On(e,t,i){return this.Nn(e,t,i.position)}Wn(e){const t=[];for(let i=0;i<e.length;++i)t[i]=e[i].un();return t}Kn(e,t,i){const a=[...e],l=[];for(const c of i.arrayValue.values||[])for(const f of a){const p=new Sc;p.seed(f.un()),Ya.Kt.Dt(c,p.Pn(t.kind)),l.push(p)}return l}Un(e,t){return!!e.filters.find((i=>i instanceof Ue&&i.field.isEqual(t)&&(i.op==="in"||i.op==="not-in")))}getFieldIndexes(e,t){const i=Rc(e),a=vl(e);return(t?i.J(j_,IDBKeyRange.bound(t,t)):i.J()).next((l=>{const c=[];return U.forEach(l,(f=>a.get([f.indexId,this.uid]).next((p=>{c.push((function(v,T){const I=T?new ah(T.sequenceNumber,new ei(mo(T.readTime),new oe(hr(T.documentKey)),T.largestBatchId)):ah.empty(),O=v.fields.map((([Q,$])=>new Of(_t.fromServerFormat(Q),$)));return new em(v.indexId,v.collectionGroup,O,I)})(f,p))})))).next((()=>c))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((i,a)=>{const l=i.indexState.sequenceNumber-a.indexState.sequenceNumber;return l!==0?l:Ae(i.collectionGroup,a.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,i){const a=Rc(e),l=vl(e);return this.Gn(e).next((c=>a.J(j_,IDBKeyRange.bound(t,t)).next((f=>U.forEach(f,(p=>l.put(QI(p.indexId,this.uid,c,i))))))))}updateIndexEntries(e,t){const i=new Map;return U.forEach(t,((a,l)=>{const c=i.get(a.collectionGroup);return(c?U.resolve(c):this.getFieldIndexes(e,a.collectionGroup)).next((f=>(i.set(a.collectionGroup,f),U.forEach(f,(p=>this.zn(e,a,p).next((g=>{const v=this.jn(l,p);return g.isEqual(v)?U.resolve():this.Jn(e,l,p,g,v)})))))))}))}Hn(e,t,i,a){return yl(e).put(a.Rn(this.uid,this.$n(i,t.key),t.key))}Yn(e,t,i,a){return yl(e).delete(a.Vn(this.uid,this.$n(i,t.key),t.key))}zn(e,t,i){const a=yl(e);let l=new tt(Ps);return a.ee({index:C0,range:IDBKeyRange.only([i.indexId,this.uid,Ff(this.$n(i,t))])},((c,f)=>{l=l.add(new $a(i.indexId,t,JI(f.arrayValue),JI(f.directionalValue)))})).next((()=>l))}jn(e,t){let i=new tt(Ps);const a=this.Qn(t,e);if(a==null)return i;const l=z_(t);if(l!=null){const c=e.data.field(l.fieldPath);if(fh(c))for(const f of c.arrayValue.values||[])i=i.add(new $a(t.indexId,e.key,this.Ln(f),a))}else i=i.add(new $a(t.indexId,e.key,Af,a));return i}Jn(e,t,i,a,l){ie(tA,"Updating index entries for document '%s'",t.key);const c=[];return(function(p,g,v,T,I){const O=p.getIterator(),Q=g.getIterator();let $=gl(O),X=gl(Q);for(;$||X;){let me=!1,ne=!1;if($&&X){const G=v($,X);G<0?ne=!0:G>0&&(me=!0)}else $!=null?ne=!0:me=!0;me?(T(X),X=gl(Q)):ne?(I($),$=gl(O)):($=gl(O),X=gl(Q))}})(a,l,Ps,(f=>{c.push(this.Hn(e,t,i,f))}),(f=>{c.push(this.Yn(e,t,i,f))})),U.waitFor(c)}Gn(e){let t=1;return vl(e).ee({index:R0,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((i,a,l)=>{l.done(),t=a.sequenceNumber+1})).next((()=>t))}createRange(e,t,i){i=i.sort(((c,f)=>Ps(c,f))).filter(((c,f,p)=>!f||Ps(c,p[f-1])!==0));const a=[];a.push(e);for(const c of i){const f=Ps(c,e),p=Ps(c,t);if(f===0)a[0]=e.An();else if(f>0&&p<0)a.push(c),a.push(c.An());else if(p>0)break}a.push(t);const l=[];for(let c=0;c<a.length;c+=2){if(this.Zn(a[c],a[c+1]))return[];const f=a[c].Vn(this.uid,Af,oe.empty()),p=a[c+1].Vn(this.uid,Af,oe.empty());l.push(IDBKeyRange.bound(f,p))}return l}Zn(e,t){return Ps(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(iA)}getMinOffset(e,t){return U.mapArray(this.Mn(t),(i=>this.xn(e,i).next((a=>a||fe(44426))))).next(iA)}}function nA(r){return Xt(r,ch)}function yl(r){return Xt(r,Qc)}function Rc(r){return Xt(r,Wy)}function vl(r){return Xt(r,Kc)}function iA(r){_e(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let i=1;i<r.length;i++){const a=r[i].indexState.offset;Qy(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new ei(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},PR=41943040;class yn{static withCacheSize(e){return new yn(e,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(r,e,t){const i=r.store(Di),a=r.store(zl),l=[],c=IDBKeyRange.only(t.batchId);let f=0;const p=i.ee({range:c},((v,T,I)=>(f++,I.delete())));l.push(p.next((()=>{_e(f===1,47070,{batchId:t.batchId})})));const g=[];for(const v of t.mutations){const T=I0(e,v.key.path,t.batchId);l.push(a.delete(T)),g.push(v.key)}return U.waitFor(l).next((()=>g))}function um(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw fe(14731);e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(PR,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);class jm{constructor(e,t,i,a){this.userId=e,this.serializer=t,this.indexManager=i,this.referenceDelegate=a,this.Xn={}}static wt(e,t,i,a){_e(e.uid!=="",64387);const l=e.isAuthenticated()?e.uid:"";return new jm(l,t,i,a)}checkEmpty(e){let t=!0;const i=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Os(e).ee({index:Ja,range:i},((a,l,c)=>{t=!1,c.done()})).next((()=>t))}addMutationBatch(e,t,i,a){const l=Al(e),c=Os(e);return c.add({}).next((f=>{_e(typeof f=="number",49019);const p=new av(f,t,i,a),g=(function(O,Q,$){const X=$.baseMutations.map((ne=>gh(O.yt,ne))),me=$.mutations.map((ne=>gh(O.yt,ne)));return{userId:Q,batchId:$.batchId,localWriteTimeMs:$.localWriteTime.toMillis(),baseMutations:X,mutations:me}})(this.serializer,this.userId,p),v=[];let T=new tt(((I,O)=>Ae(I.canonicalString(),O.canonicalString())));for(const I of a){const O=I0(this.userId,I.key.path,f);T=T.add(I.key.path.popLast()),v.push(c.put(g)),v.push(l.put(O,QO))}return T.forEach((I=>{v.push(this.indexManager.addToCollectionParentIndex(e,I))})),e.addOnCommittedListener((()=>{this.Xn[f]=p.keys()})),U.waitFor(v).next((()=>p))}))}lookupMutationBatch(e,t){return Os(e).get(t).next((i=>i?(_e(i.userId===this.userId,48,"Unexpected user for mutation batch",{userId:i.userId,batchId:t}),Qa(this.serializer,i)):null))}er(e,t){return this.Xn[t]?U.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next((i=>{if(i){const a=i.keys();return this.Xn[t]=a,a}return null}))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=IDBKeyRange.lowerBound([this.userId,i]);let l=null;return Os(e).ee({index:Ja,range:a},((c,f,p)=>{f.userId===this.userId&&(_e(f.batchId>=i,47524,{tr:i}),l=Qa(this.serializer,f)),p.done()})).next((()=>l))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let i=Hs;return Os(e).ee({index:Ja,range:t,reverse:!0},((a,l,c)=>{i=l.batchId,c.done()})).next((()=>i))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Hs],[this.userId,Number.POSITIVE_INFINITY]);return Os(e).J(Ja,t).next((i=>i.map((a=>Qa(this.serializer,a)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const i=kf(this.userId,t.path),a=IDBKeyRange.lowerBound(i),l=[];return Al(e).ee({range:a},((c,f,p)=>{const[g,v,T]=c,I=hr(v);if(g===this.userId&&t.path.isEqual(I))return Os(e).get(T).next((O=>{if(!O)throw fe(61480,{nr:c,batchId:T});_e(O.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:O.userId,batchId:T}),l.push(Qa(this.serializer,O))}));p.done()})).next((()=>l))}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new tt(Ae);const a=[];return t.forEach((l=>{const c=kf(this.userId,l.path),f=IDBKeyRange.lowerBound(c),p=Al(e).ee({range:f},((g,v,T)=>{const[I,O,Q]=g,$=hr(O);I===this.userId&&l.path.isEqual($)?i=i.add(Q):T.done()}));a.push(p)})),U.waitFor(a).next((()=>this.rr(e,i)))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1,l=kf(this.userId,i),c=IDBKeyRange.lowerBound(l);let f=new tt(Ae);return Al(e).ee({range:c},((p,g,v)=>{const[T,I,O]=p,Q=hr(I);T===this.userId&&i.isPrefixOf(Q)?Q.length===a&&(f=f.add(O)):v.done()})).next((()=>this.rr(e,f)))}rr(e,t){const i=[],a=[];return t.forEach((l=>{a.push(Os(e).get(l).next((c=>{if(c===null)throw fe(35274,{batchId:l});_e(c.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:c.userId,batchId:l}),i.push(Qa(this.serializer,c))})))})),U.waitFor(a).next((()=>i))}removeMutationBatch(e,t){return OR(e.le,this.userId,t).next((i=>(e.addOnCommittedListener((()=>{this.ir(t.batchId)})),U.forEach(i,(a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return U.resolve();const i=IDBKeyRange.lowerBound((function(c){return[c]})(this.userId)),a=[];return Al(e).ee({range:i},((l,c,f)=>{if(l[0]===this.userId){const p=hr(l[1]);a.push(p)}else f.done()})).next((()=>{_e(a.length===0,56720,{sr:a.map((l=>l.canonicalString()))})}))}))}containsKey(e,t){return kR(e,this.userId,t)}_r(e){return MR(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Hs,lastStreamToken:""}))}}function kR(r,e,t){const i=kf(e,t.path),a=i[1],l=IDBKeyRange.lowerBound(i);let c=!1;return Al(r).ee({range:l,X:!0},((f,p,g)=>{const[v,T,I]=f;v===e&&T===a&&(c=!0),g.done()})).next((()=>c))}function Os(r){return Xt(r,Di)}function Al(r){return Xt(r,zl)}function MR(r){return Xt(r,lh)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new po(0)}static cr(){return new po(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next((t=>{const i=new po(t.highestTargetId);return t.highestTargetId=i.next(),this.hr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.lr(e).next((t=>ve.fromTimestamp(new Ye(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.lr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,i){return this.lr(e).next((a=>(a.highestListenSequenceNumber=t,i&&(a.lastRemoteSnapshotVersion=i.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.hr(e,a))))}addTargetData(e,t){return this.Pr(e,t).next((()=>this.lr(e).next((i=>(i.targetCount+=1,this.Tr(t,i),this.hr(e,i))))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>El(e).delete(t.targetId))).next((()=>this.lr(e))).next((i=>(_e(i.targetCount>0,8065),i.targetCount-=1,this.hr(e,i))))}removeTargets(e,t,i){let a=0;const l=[];return El(e).ee(((c,f)=>{const p=Mc(f);p.sequenceNumber<=t&&i.get(p.targetId)===null&&(a++,l.push(this.removeTargetData(e,p)))})).next((()=>U.waitFor(l))).next((()=>a))}forEachTarget(e,t){return El(e).ee(((i,a)=>{const l=Mc(a);t(l)}))}lr(e){return sA(e).get(im).next((t=>(_e(t!==null,2888),t)))}hr(e,t){return sA(e).put(im,t)}Pr(e,t){return El(e).put(DR(this.serializer,t))}Tr(e,t){let i=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,i=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,i=!0),i}getTargetCount(e){return this.lr(e).next((t=>t.targetCount))}getTargetData(e,t){const i=uo(t),a=IDBKeyRange.bound([i,Number.NEGATIVE_INFINITY],[i,Number.POSITIVE_INFINITY]);let l=null;return El(e).ee({range:a,index:S0},((c,f,p)=>{const g=Mc(f);Ph(t,g.target)&&(l=g,p.done())})).next((()=>l))}addMatchingKeys(e,t,i){const a=[],l=Ls(e);return t.forEach((c=>{const f=En(c.path);a.push(l.put({targetId:i,path:f})),a.push(this.referenceDelegate.addReference(e,i,c))})),U.waitFor(a)}removeMatchingKeys(e,t,i){const a=Ls(e);return U.forEach(t,(l=>{const c=En(l.path);return U.waitFor([a.delete([i,c]),this.referenceDelegate.removeReference(e,i,l)])}))}removeMatchingKeysForTargetId(e,t){const i=Ls(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return i.delete(a)}getMatchingKeysForTargetId(e,t){const i=IDBKeyRange.bound([t],[t+1],!1,!0),a=Ls(e);let l=Ne();return a.ee({range:i,X:!0},((c,f,p)=>{const g=hr(c[1]),v=new oe(g);l=l.add(v)})).next((()=>l))}containsKey(e,t){const i=En(t.path),a=IDBKeyRange.bound([i],[m0(i)],!1,!0);let l=0;return Ls(e).ee({index:$y,X:!0,range:a},(([c,f],p,g)=>{c!==0&&(l++,g.done())})).next((()=>l>0))}At(e,t){return El(e).get(t).next((i=>i?Mc(i):null))}}function El(r){return Xt(r,Bl)}function sA(r){return Xt(r,ro)}function Ls(r){return Xt(r,jl)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="LruGarbageCollector",pM=1048576;function oA([r,e],[t,i]){const a=Ae(r,t);return a===0?Ae(e,i):a}class gM{constructor(e){this.Ir=e,this.buffer=new tt(oA),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();oA(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class LR{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ie(aA,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){oa(t)?ie(aA,"Ignoring IndexedDB error during garbage collection: ",t):await aa(t)}await this.Vr(3e5)}))}}class _M{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return U.resolve(Un.ce);const i=new gM(t);return this.mr.forEachTarget(e,(a=>i.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>i.Ar(a))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.mr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(rA)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rA):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let i,a,l,c,f,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(g=Date.now(),Tl()<=Oe.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(f-c)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function UR(r,e){return new _M(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(e,t){this.db=e,this.garbageCollector=UR(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next((i=>t.next((a=>i+a))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,((i,a)=>t(a)))}addReference(e,t,i){return Sf(e,i)}removeReference(e,t,i){return Sf(e,i)}removeTargets(e,t,i){return this.db.getTargetCache().removeTargets(e,t,i)}markPotentiallyOrphaned(e,t){return Sf(e,t)}br(e,t){return(function(a,l){let c=!1;return MR(a).te((f=>kR(a,f,l).next((p=>(p&&(c=!0),U.resolve(!p)))))).next((()=>c))})(e,t)}removeOrphanedDocuments(e,t){const i=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let l=0;return this.Sr(e,((c,f)=>{if(f<=t){const p=this.br(e,c).next((g=>{if(!g)return l++,i.getEntry(e,c).next((()=>(i.removeEntry(c,ve.min()),Ls(e).delete((function(T){return[0,En(T.path)]})(c)))))}));a.push(p)}})).next((()=>U.waitFor(a))).next((()=>i.apply(e))).next((()=>l))}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,i)}updateLimboDocument(e,t){return Sf(e,t)}Sr(e,t){const i=Ls(e);let a,l=Un.ce;return i.ee({index:$y},(([c,f],{path:p,sequenceNumber:g})=>{c===0?(l!==Un.ce&&t(new oe(hr(a)),l),l=g,a=p):l=Un.ce})).next((()=>{l!==Un.ce&&t(new oe(hr(a)),l)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Sf(r,e){return Ls(r).put((function(i,a){return{targetId:0,path:En(i.path),sequenceNumber:a}})(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.changes=new Wr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?U.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,i){return Fa(e).put(i)}removeEntry(e,t,i){return Fa(e).delete((function(l,c){const f=l.path.toArray();return[f.slice(0,f.length-2),f[f.length-2],om(c),f[f.length-1]]})(t,i))}updateMetadata(e,t){return this.getMetadata(e).next((i=>(i.byteSize+=t,this.Dr(e,i))))}getEntry(e,t){let i=ht.newInvalidDocument(t);return Fa(e).ee({index:Mf,range:IDBKeyRange.only(Cc(t))},((a,l)=>{i=this.Cr(t,l)})).next((()=>i))}vr(e,t){let i={size:0,document:ht.newInvalidDocument(t)};return Fa(e).ee({index:Mf,range:IDBKeyRange.only(Cc(t))},((a,l)=>{i={document:this.Cr(t,l),size:um(l)}})).next((()=>i))}getEntries(e,t){let i=Bn();return this.Fr(e,t,((a,l)=>{const c=this.Cr(a,l);i=i.insert(a,c)})).next((()=>i))}Mr(e,t){let i=Bn(),a=new lt(oe.comparator);return this.Fr(e,t,((l,c)=>{const f=this.Cr(l,c);i=i.insert(l,f),a=a.insert(l,um(c))})).next((()=>({documents:i,Or:a})))}Fr(e,t,i){if(t.isEmpty())return U.resolve();let a=new tt(cA);t.forEach((p=>a=a.add(p)));const l=IDBKeyRange.bound(Cc(a.first()),Cc(a.last())),c=a.getIterator();let f=c.getNext();return Fa(e).ee({index:Mf,range:l},((p,g,v)=>{const T=oe.fromSegments([...g.prefixPath,g.collectionGroup,g.documentId]);for(;f&&cA(f,T)<0;)i(f,null),f=c.getNext();f&&f.isEqual(T)&&(i(f,g),f=c.hasNext()?c.getNext():null),f?v.j(Cc(f)):v.done()})).next((()=>{for(;f;)i(f,null),f=c.hasNext()?c.getNext():null}))}getDocumentsMatchingQuery(e,t,i,a,l){const c=t.path,f=[c.popLast().toArray(),c.lastSegment(),om(i.readTime),i.documentKey.path.isEmpty()?"":i.documentKey.path.lastSegment()],p=[c.popLast().toArray(),c.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Fa(e).J(IDBKeyRange.bound(f,p,!0)).next((g=>{l==null||l.incrementDocumentReadCount(g.length);let v=Bn();for(const T of g){const I=this.Cr(oe.fromSegments(T.prefixPath.concat(T.collectionGroup,T.documentId)),T);I.isFoundDocument()&&(kh(t,I)||a.has(I.key))&&(v=v.insert(I.key,I))}return v}))}getAllFromCollectionGroup(e,t,i,a){let l=Bn();const c=uA(t,i),f=uA(t,ei.max());return Fa(e).ee({index:A0,range:IDBKeyRange.bound(c,f,!0)},((p,g,v)=>{const T=this.Cr(oe.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);l=l.insert(T.key,T),l.size===a&&v.done()})).next((()=>l))}newChangeBuffer(e){return new EM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return lA(e).get(B_).next((t=>(_e(!!t,20021),t)))}Dr(e,t){return lA(e).put(B_,t)}Cr(e,t){if(t){const i=rM(this.serializer,t);if(!(i.isNoDocument()&&i.version.isEqual(ve.min())))return i}return ht.newInvalidDocument(e)}}function BR(r){return new vM(r)}class EM extends zR{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new Wr((i=>i.toString()),((i,a)=>i.isEqual(a)))}applyChanges(e){const t=[];let i=0,a=new tt(((l,c)=>Ae(l.canonicalString(),c.canonicalString())));return this.changes.forEach(((l,c)=>{const f=this.Br.get(l);if(t.push(this.Nr.removeEntry(e,l,f.readTime)),c.isValidDocument()){const p=GI(this.Nr.serializer,c);a=a.add(l.path.popLast());const g=um(p);i+=g-f.size,t.push(this.Nr.addEntry(e,l,p))}else if(i-=f.size,this.trackRemovals){const p=GI(this.Nr.serializer,c.convertToNoDocument(ve.min()));t.push(this.Nr.addEntry(e,l,p))}})),a.forEach((l=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,l))})),t.push(this.Nr.updateMetadata(e,i)),U.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next((i=>(this.Br.set(t,{size:i.size,readTime:i.document.readTime}),i.document)))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next((({documents:i,Or:a})=>(a.forEach(((l,c)=>{this.Br.set(l,{size:c,readTime:i.get(l).readTime})})),i)))}}function lA(r){return Xt(r,uh)}function Fa(r){return Xt(r,nm)}function Cc(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function uA(r,e){const t=e.documentKey.path.toArray();return[r,om(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function cA(r,e){const t=r.path.toArray(),i=e.path.toArray();let a=0;for(let l=0;l<t.length-2&&l<i.length-2;++l)if(a=Ae(t[l],i[l]),a)return a;return a=Ae(t.length,i.length),a||(a=Ae(t[t.length-2],i[i.length-2]),a||Ae(t[t.length-1],i[i.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,t,i,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(i=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(i!==null&&Wc(i.mutation,a,zn.empty(),Ye.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ne()){const a=dr();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,i).next((l=>{let c=Oc();return l.forEach(((f,p)=>{c=c.insert(f,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=dr();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ne())))}populateOverlays(e,t,i){const a=[];return i.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,i,a){let l=Bn();const c=$c(),f=(function(){return $c()})();return t.forEach(((p,g)=>{const v=i.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof Xr)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),Wc(v.mutation,g,v.mutation.getFieldMask(),Ye.now())):c.set(g.key,zn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,v)=>c.set(g,v))),t.forEach(((g,v)=>f.set(g,new TM(v,c.get(g)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=$c();let a=new lt(((c,f)=>c-f)),l=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let v=i.get(p)||zn.empty();v=f.applyToLocalView(g,v),i.set(p,v);const T=(a.get(f.batchId)||Ne()).add(p);a=a.insert(f.batchId,T)}))})).next((()=>{const c=[],f=a.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),g=p.key,v=p.value,T=iR();v.forEach((I=>{if(!l.has(I)){const O=cR(t.get(I),i.get(I));O!==null&&T.set(I,O),l=l.add(I)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return U.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,a){return(function(c){return oe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,a):this.getDocumentsMatchingCollectionQuery(e,t,i,a)}getNextDocuments(e,t,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,a-l.size):U.resolve(dr());let f=Ul,p=l;return c.next((g=>U.forEach(g,((v,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(v)?U.resolve():this.remoteDocumentCache.getEntry(e,v).next((I=>{p=p.insert(v,I)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,Ne()))).next((v=>({batchId:f,changes:nR(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oe(t)).next((i=>{let a=Oc();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,a){const l=t.collectionGroup;let c=Oc();return this.indexManager.getCollectionParents(e,l).next((f=>U.forEach(f,(p=>{const g=(function(T,I){return new $r(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,i,a).next((v=>{v.forEach(((T,I)=>{c=c.insert(T,I)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,a)))).next((c=>{l.forEach(((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,ht.newInvalidDocument(v)))}));let f=Oc();return c.forEach(((p,g)=>{const v=l.get(p);v!==void 0&&Wc(v.mutation,g,zn.empty(),Ye.now()),kh(t,g)&&(f=f.insert(p,g))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return U.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Pt(a.createTime)}})(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:hv(a.bundledQuery),readTime:Pt(a.readTime)}})(t)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{constructor(){this.overlays=new lt(oe.comparator),this.qr=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const i=dr();return U.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&i.set(a,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((a,l)=>{this.St(e,t,l)})),U.resolve()}removeOverlaysForBatchId(e,t,i){const a=this.qr.get(i);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(i)),U.resolve()}getOverlaysForCollection(e,t,i){const a=dr(),l=t.length+1,c=new oe(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const p=f.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return U.resolve(a)}getOverlaysForCollectionGroup(e,t,i,a){let l=new lt(((g,v)=>g-v));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>i){let v=l.get(g.largestBatchId);v===null&&(v=dr(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const f=dr(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,v)=>f.set(g,v))),!(f.size()>=a)););return U.resolve(f)}St(e,t,i){const a=this.overlays.get(i.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(i.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new lv(t,i));let l=this.qr.get(t);l===void 0&&(l=Ne(),this.qr.set(t,l)),this.qr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(){this.Qr=new tt(nn.$r),this.Ur=new tt(nn.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const i=new nn(e,t);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Gr(new nn(e,t))}zr(e,t){e.forEach((i=>this.removeReference(i,t)))}jr(e){const t=new oe(new ke([])),i=new nn(t,e),a=new nn(t,e+1),l=[];return this.Ur.forEachInRange([i,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new oe(new ke([])),i=new nn(t,e),a=new nn(t,e+1);let l=Ne();return this.Ur.forEachInRange([i,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new nn(e,0),i=this.Qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class nn{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return oe.comparator(e.key,t.key)||Ae(e.Yr,t.Yr)}static Kr(e,t){return Ae(e.Yr,t.Yr)||oe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new tt(nn.$r)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new av(l,t,i,a);this.mutationQueue.push(c);for(const f of a)this.Zr=this.Zr.add(new nn(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return U.resolve(c)}lookupMutationBatch(e,t){return U.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=this.ei(i),l=a<0?0:a;return U.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Hs:this.tr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new nn(t,0),a=new nn(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,a],(c=>{const f=this.Xr(c.Yr);l.push(f)})),U.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new tt(Ae);return t.forEach((a=>{const l=new nn(a,0),c=new nn(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(f=>{i=i.add(f.Yr)}))})),U.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1;let l=i;oe.isDocumentKey(l)||(l=l.child(""));const c=new nn(new oe(l),0);let f=new tt(Ae);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!i.isPrefixOf(g)&&(g.length===a&&(f=f.add(p.Yr)),!0)}),c),U.resolve(this.ti(f))}ti(e){const t=[];return e.forEach((i=>{const a=this.Xr(i);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){_e(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return U.forEach(t.mutations,(a=>{const l=new nn(a.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=i}))}ir(e){}containsKey(e,t){const i=new nn(t,0),a=this.Zr.firstAfterOrEqual(i);return U.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e){this.ri=e,this.docs=(function(){return new lt(oe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,a=this.docs.get(i),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return U.resolve(i?i.document.mutableCopy():ht.newInvalidDocument(t))}getEntries(e,t){let i=Bn();return t.forEach((a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():ht.newInvalidDocument(a))})),U.resolve(i)}getDocumentsMatchingQuery(e,t,i,a){let l=Bn();const c=t.path,f=new oe(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||Qy(v0(v),i)<=0||(a.has(v.key)||kh(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return U.resolve(l)}getAllFromCollectionGroup(e,t,i,a){fe(9500)}ii(e,t){return U.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new RM(this)}getSize(e){return U.resolve(this.size)}}class RM extends zR{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(i)})),U.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e){this.persistence=e,this.si=new Wr((t=>uo(t)),Ph),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.oi=0,this._i=new mv,this.targetCount=0,this.ai=po.ur()}forEachTarget(e,t){return this.si.forEach(((i,a)=>t(a))),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.oi&&(this.oi=t),U.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new po(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.Pr(t),U.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,i){let a=0;const l=[];return this.si.forEach(((c,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)})),U.waitFor(l).next((()=>a))}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const i=this.si.get(t)||null;return U.resolve(i)}addMatchingKeys(e,t,i){return this._i.Wr(t,i),U.resolve()}removeMatchingKeys(e,t,i){this._i.zr(t,i);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),U.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),U.resolve()}getMatchingKeysForTargetId(e,t){const i=this._i.Hr(t);return U.resolve(i)}containsKey(e,t){return U.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t){this.ui={},this.overlays={},this.ci=new Un(0),this.li=!1,this.li=!0,this.hi=new IM,this.referenceDelegate=e(this),this.Pi=new CM(this),this.indexManager=new dM,this.remoteDocumentCache=(function(a){return new SM(a)})((i=>this.referenceDelegate.Ti(i))),this.serializer=new NR(t),this.Ii=new wM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new bM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ui[e.toKey()];return i||(i=new AM(t,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,i){ie("MemoryPersistence","Starting transaction:",e);const a=new NM(this.ci.next());return this.referenceDelegate.Ei(),i(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return U.or(Object.values(this.ui).map((i=>()=>i.containsKey(e,t))))}}class NM extends T0{constructor(e){super(),this.currentSequenceNumber=e}}class Fm{constructor(e){this.persistence=e,this.Ri=new mv,this.Vi=null}static mi(e){return new Fm(e)}get fi(){if(this.Vi)return this.Vi;throw fe(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.fi.delete(i.toString()),U.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.fi.add(i.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),U.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.fi,(i=>{const a=oe.fromPath(i);return this.gi(e,a).next((l=>{l||t.removeEntry(a,ve.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((i=>{i?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return U.or([()=>U.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class cm{constructor(e,t){this.persistence=e,this.pi=new Wr((i=>En(i.path)),((i,a)=>i.isEqual(a))),this.garbageCollector=UR(this,t)}static mi(e,t){return new cm(e,t)}Ei(){}di(e){return U.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((a=>i+a))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}pr(e,t){return U.forEach(this.pi,((i,a)=>this.br(e,i,a).next((l=>l?U.resolve():t(a)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((f=>{f||(i++,l.removeEntry(c,ve.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),U.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),U.resolve()}removeReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),U.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Uf(e.data.value)),t}br(e,t,i){return U.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return U.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e){this.serializer=e}k(e,t,i,a){const l=new xm("createOrUpgrade",t);i<1&&a>=1&&((function(p){p.createObjectStore(Vh)})(e),(function(p){p.createObjectStore(lh,{keyPath:KO}),p.createObjectStore(Di,{keyPath:TI,autoIncrement:!0}).createIndex(Ja,wI,{unique:!0}),p.createObjectStore(zl)})(e),hA(e),(function(p){p.createObjectStore(Ga)})(e));let c=U.resolve();return i<3&&a>=3&&(i!==0&&((function(p){p.deleteObjectStore(jl),p.deleteObjectStore(Bl),p.deleteObjectStore(ro)})(e),hA(e)),c=c.next((()=>(function(p){const g=p.store(ro),v={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ve.min().toTimestamp(),targetCount:0};return g.put(im,v)})(l)))),i<4&&a>=4&&(i!==0&&(c=c.next((()=>(function(p,g){return g.store(Di).J().next((T=>{p.deleteObjectStore(Di),p.createObjectStore(Di,{keyPath:TI,autoIncrement:!0}).createIndex(Ja,wI,{unique:!0});const I=g.store(Di),O=T.map((Q=>I.put(Q)));return U.waitFor(O)}))})(e,l)))),c=c.next((()=>{(function(p){p.createObjectStore(Fl,{keyPath:tk})})(e)}))),i<5&&a>=5&&(c=c.next((()=>this.yi(l)))),i<6&&a>=6&&(c=c.next((()=>((function(p){p.createObjectStore(uh)})(e),this.wi(l))))),i<7&&a>=7&&(c=c.next((()=>this.Si(l)))),i<8&&a>=8&&(c=c.next((()=>this.bi(e,l)))),i<9&&a>=9&&(c=c.next((()=>{(function(p){p.objectStoreNames.contains("remoteDocumentChanges")&&p.deleteObjectStore("remoteDocumentChanges")})(e)}))),i<10&&a>=10&&(c=c.next((()=>this.Di(l)))),i<11&&a>=11&&(c=c.next((()=>{(function(p){p.createObjectStore(Vm,{keyPath:nk})})(e),(function(p){p.createObjectStore(Pm,{keyPath:ik})})(e)}))),i<12&&a>=12&&(c=c.next((()=>{(function(p){const g=p.createObjectStore(Om,{keyPath:ck});g.createIndex(F_,hk,{unique:!1}),g.createIndex(N0,dk,{unique:!1})})(e)}))),i<13&&a>=13&&(c=c.next((()=>(function(p){const g=p.createObjectStore(nm,{keyPath:YO});g.createIndex(Mf,$O),g.createIndex(A0,WO)})(e))).next((()=>this.Ci(e,l))).next((()=>e.deleteObjectStore(Ga)))),i<14&&a>=14&&(c=c.next((()=>this.Fi(e,l)))),i<15&&a>=15&&(c=c.next((()=>(function(p){p.createObjectStore(Wy,{keyPath:rk,autoIncrement:!0}).createIndex(j_,sk,{unique:!1}),p.createObjectStore(Kc,{keyPath:ak}).createIndex(R0,ok,{unique:!1}),p.createObjectStore(Qc,{keyPath:lk}).createIndex(C0,uk,{unique:!1})})(e)))),i<16&&a>=16&&(c=c.next((()=>{t.objectStore(Kc).clear()})).next((()=>{t.objectStore(Qc).clear()}))),i<17&&a>=17&&(c=c.next((()=>{(function(p){p.createObjectStore(Xy,{keyPath:fk})})(e)}))),i<18&&a>=18&&QA()&&(c=c.next((()=>{t.objectStore(Kc).clear()})).next((()=>{t.objectStore(Qc).clear()}))),c}wi(e){let t=0;return e.store(Ga).ee(((i,a)=>{t+=um(a)})).next((()=>{const i={byteSize:t};return e.store(uh).put(B_,i)}))}yi(e){const t=e.store(lh),i=e.store(Di);return t.J().next((a=>U.forEach(a,(l=>{const c=IDBKeyRange.bound([l.userId,Hs],[l.userId,l.lastAcknowledgedBatchId]);return i.J(Ja,c).next((f=>U.forEach(f,(p=>{_e(p.userId===l.userId,18650,"Cannot process batch from unexpected user",{batchId:p.batchId});const g=Qa(this.serializer,p);return OR(e,l.userId,g).next((()=>{}))}))))}))))}Si(e){const t=e.store(jl),i=e.store(Ga);return e.store(ro).get(im).next((a=>{const l=[];return i.ee(((c,f)=>{const p=new ke(c),g=(function(T){return[0,En(T)]})(p);l.push(t.get(g).next((v=>v?U.resolve():(T=>t.put({targetId:0,path:En(T),sequenceNumber:a.highestListenSequenceNumber}))(p))))})).next((()=>U.waitFor(l)))}))}bi(e,t){e.createObjectStore(ch,{keyPath:ek});const i=t.store(ch),a=new fv,l=c=>{if(a.add(c)){const f=c.lastSegment(),p=c.popLast();return i.put({collectionId:f,parent:En(p)})}};return t.store(Ga).ee({X:!0},((c,f)=>{const p=new ke(c);return l(p.popLast())})).next((()=>t.store(zl).ee({X:!0},(([c,f,p],g)=>{const v=hr(f);return l(v.popLast())}))))}Di(e){const t=e.store(Bl);return t.ee(((i,a)=>{const l=Mc(a),c=DR(this.serializer,l);return t.put(c)}))}Ci(e,t){const i=t.store(Ga),a=[];return i.ee(((l,c)=>{const f=t.store(nm),p=(function(T){return T.document?new oe(ke.fromString(T.document.name).popFirst(5)):T.noDocument?oe.fromSegments(T.noDocument.path):T.unknownDocument?oe.fromSegments(T.unknownDocument.path):fe(36783)})(c).path.toArray(),g={prefixPath:p.slice(0,p.length-2),collectionGroup:p[p.length-2],documentId:p[p.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};a.push(f.put(g))})).next((()=>U.waitFor(a)))}Fi(e,t){const i=t.store(Di),a=BR(this.serializer),l=new pv(Fm.mi,this.serializer.yt);return i.J().next((c=>{const f=new Map;return c.forEach((p=>{let g=f.get(p.userId)??Ne();Qa(this.serializer,p).keys().forEach((v=>g=g.add(v))),f.set(p.userId,g)})),U.forEach(f,((p,g)=>{const v=new rn(g),T=Bm.wt(this.serializer,v),I=l.getIndexManager(v),O=jm.wt(v,this.serializer,I,l.referenceDelegate);return new jR(a,O,T,I).recalculateAndSaveOverlaysForDocumentKeys(new q_(t,Un.ce),p).next()}))}))}}function hA(r){r.createObjectStore(jl,{keyPath:JO}).createIndex($y,ZO,{unique:!0}),r.createObjectStore(Bl,{keyPath:"targetId"}).createIndex(S0,XO,{unique:!0}),r.createObjectStore(ro)}const ks="IndexedDbPersistence",v_=18e5,E_=5e3,T_="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",FR="main";class gv{constructor(e,t,i,a,l,c,f,p,g,v,T=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=i,this.Mi=l,this.window=c,this.document=f,this.xi=g,this.Oi=v,this.Ni=T,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=I=>Promise.resolve(),!gv.v())throw new te(q.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new yM(this,a),this.$i=t+FR,this.serializer=new NR(p),this.Ui=new fr(this.$i,this.Ni,new DM(this.serializer)),this.hi=new aM,this.Pi=new mM(this.referenceDelegate,this.serializer),this.remoteDocumentCache=BR(this.serializer),this.Ii=new sM,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,v===!1&&Vt(ks,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new te(q.FAILED_PRECONDITION,T_);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Pi.getHighestSequenceNumber(e)))})).then((e=>{this.ci=new Un(e,this.xi)})).then((()=>{this.li=!0})).catch((e=>(this.Ui&&this.Ui.close(),Promise.reject(e))))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget((async()=>{this.started&&await this.Wi()})))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Rf(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Hi(e).next((t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))))}))})).next((()=>this.Yi(e))).next((t=>this.isPrimary&&!t?this.Zi(e).next((()=>!1)):!!t&&this.Xi(e).next((()=>!0)))))).catch((e=>{if(oa(e))return ie(ks,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ie(ks,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable((()=>this.Qi(e))),this.isPrimary=e}))}Hi(e){return Nc(e).get(pl).next((t=>U.resolve(this.es(t))))}ts(e){return Rf(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,v_)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const i=Xt(t,Fl);return i.J().next((a=>{const l=this.ss(a,v_),c=a.filter((f=>l.indexOf(f)===-1));return U.forEach(c,(f=>i.delete(f.clientId))).next((()=>c))}))})).catch((()=>[]));if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Wi().then((()=>this.ns())).then((()=>this.ji()))))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?U.resolve(!0):Nc(e).get(pl).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,E_)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new te(q.FAILED_PRECONDITION,T_);return!1}}return!(!this.networkEnabled||!this.inForeground)||Rf(e).J().next((i=>this.ss(i,E_).find((a=>{if(this.clientId!==a.clientId){const l=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,f=this.networkEnabled===a.networkEnabled;if(l||c&&f)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&ie(ks,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[Vh,Fl],(e=>{const t=new q_(e,Un.ce);return this.Zi(t).next((()=>this.ts(t)))})),this.Ui.close(),this.Ps()}ss(e,t){return e.filter((i=>this.rs(i.updateTimeMs,t)&&!this.us(i.clientId)))}Ts(){return this.runTransaction("getActiveClients","readonly",(e=>Rf(e).J().next((t=>this.ss(t,v_).map((i=>i.clientId))))))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return jm.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new fM(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Bm.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,i){ie(ks,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",l=(function(p){return p===18?gk:p===17?P0:p===16?pk:p===15?Jy:p===14?V0:p===13?x0:p===12?mk:p===11?D0:void fe(60245)})(this.Ni);let c;return this.Ui.runTransaction(e,a,l,(f=>(c=new q_(f,this.ci?this.ci.next():Un.ce),t==="readwrite-primary"?this.Hi(c).next((p=>!!p||this.Yi(c))).next((p=>{if(!p)throw Vt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))),new te(q.FAILED_PRECONDITION,E0);return i(c)})).next((p=>this.Xi(c).next((()=>p)))):this.Is(c).next((()=>i(c)))))).then((f=>(c.raiseOnCommittedEvent(),f)))}Is(e){return Nc(e).get(pl).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,E_)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new te(q.FAILED_PRECONDITION,T_)}))}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Nc(e).put(pl,t)}static v(){return fr.v()}Zi(e){const t=Nc(e);return t.get(pl).next((i=>this.es(i)?(ie(ks,"Releasing primary lease."),t.delete(pl)):U.resolve()))}rs(e,t){const i=Date.now();return!(e<i-t)&&(!(e>i)||(Vt(`Detected an update time that is in the future: ${e} > ${i}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi())))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const t=/(?:Version|Mobile)\/1[456]/;KA()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){var t;try{const i=((t=this.Ki)==null?void 0:t.getItem(this._s(e)))!==null;return ie(ks,`Client '${e}' ${i?"is":"is not"} zombied in LocalStorage`),i}catch(i){return Vt(ks,"Failed to get zombied client id.",i),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){Vt("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Nc(r){return Xt(r,Vh)}function Rf(r){return Xt(r,Fl)}function _v(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,t,i,a){this.targetId=e,this.fromCache=t,this.Es=i,this.ds=a}static As(e,t){let i=Ne(),a=Ne();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new yv(e,t.fromCache,i,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return KA()?8:w0(Et())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new xM;return this.Ss(e,t,c).next((f=>{if(l.result=f,this.Vs)return this.bs(e,t,c,f.size)}))})).next((()=>l.result))}bs(e,t,i,a){return i.documentReadCount<this.fs?(Tl()<=Oe.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",wl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),U.resolve()):(Tl()<=Oe.DEBUG&&ie("QueryEngine","Query:",wl(t),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.gs*a?(Tl()<=Oe.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",wl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Cn(t))):U.resolve())}ys(e,t){if(kI(t))return U.resolve(null);let i=Cn(t);return this.indexManager.getIndexType(e,i).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=am(t,null,"F"),i=Cn(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=Ne(...l);return this.ps.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,i).next((p=>{const g=this.Ds(t,f);return this.Cs(t,g,c,p.readTime)?this.ys(e,am(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,i,a){return kI(t)||a.isEqual(ve.min())?U.resolve(null):this.ps.getDocuments(e,i).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,i,a)?U.resolve(null):(Tl()<=Oe.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),wl(t)),this.vs(e,c,t,y0(a,Ul)).next((f=>f)))}))}Ds(e,t){let i=new tt(eR(e));return t.forEach(((a,l)=>{kh(e,l)&&(i=i.add(l))})),i}Cs(e,t,i,a){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,i){return Tl()<=Oe.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",wl(t)),this.ps.getDocumentsMatchingQuery(e,t,ei.min(),i)}vs(e,t,i,a){return this.ps.getDocumentsMatchingQuery(e,i,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="LocalStore",VM=3e8;class PM{constructor(e,t,i,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new lt(Ae),this.xs=new Wr((l=>uo(l)),Ph),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function HR(r,e,t,i){return new PM(r,e,t,i)}async function GR(r,e){const t=ue(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let a;return t.mutationQueue.getAllMutationBatches(i).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],f=[];let p=Ne();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){f.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:f})))}))}))}function OM(r,e){const t=ue(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(f,p,g,v){const T=g.batch,I=T.keys();let O=U.resolve();return I.forEach((Q=>{O=O.next((()=>v.getEntry(p,Q))).next(($=>{const X=g.docVersions.get(Q);_e(X!==null,48541),$.version.compareTo(X)<0&&(T.applyToRemoteDocument($,g),$.isValidDocument()&&($.setReadTime(g.commitVersion),v.addEntry($)))}))})),O.next((()=>f.mutationQueue.removeMutationBatch(p,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let p=Ne();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(p=p.add(f.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,a)))}))}function KR(r){const e=ue(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function kM(r,e){const t=ue(r),i=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const f=[];e.targetChanges.forEach(((v,T)=>{const I=a.get(T);if(!I)return;f.push(t.Pi.removeMatchingKeys(l,v.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,v.addedDocuments,T))));let O=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?O=O.withResumeToken(At.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):v.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(v.resumeToken,i)),a=a.insert(T,O),(function($,X,me){return $.resumeToken.approximateByteSize()===0||X.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=VM?!0:me.addedDocuments.size+me.modifiedDocuments.size+me.removedDocuments.size>0})(I,O,v)&&f.push(t.Pi.updateTargetData(l,O))}));let p=Bn(),g=Ne();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))})),f.push(QR(l,c,e.documentUpdates).next((v=>{p=v.ks,g=v.qs}))),!i.isEqual(ve.min())){const v=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(v)}return U.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function QR(r,e,t){let i=Ne(),a=Ne();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let c=Bn();return t.forEach(((f,p)=>{const g=l.get(f);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(f)),p.isNoDocument()&&p.version.isEqual(ve.min())?(e.removeEntry(f,p.readTime),c=c.insert(f,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(f,p)):ie(vv,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",p.version)})),{ks:c,qs:a}}))}function MM(r,e){const t=ue(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Hs),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function $l(r,e){const t=ue(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let a;return t.Pi.getTargetData(i,e).next((l=>l?(a=l,U.resolve(a)):t.Pi.allocateTargetId(i).next((c=>(a=new jr(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Pi.addTargetData(i,a).next((()=>a)))))))})).then((i=>{const a=t.Ms.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(i.targetId,i),t.xs.set(e,i.targetId)),i}))}async function Wl(r,e,t){const i=ue(r),a=i.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!oa(c))throw c;ie(vv,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ms=i.Ms.remove(e),i.xs.delete(a.target)}function hm(r,e,t){const i=ue(r);let a=ve.min(),l=Ne();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,v){const T=ue(p),I=T.xs.get(v);return I!==void 0?U.resolve(T.Ms.get(I)):T.Pi.getTargetData(g,v)})(i,c,Cn(e)).next((f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(c,f.targetId).next((p=>{l=p}))})).next((()=>i.Fs.getDocumentsMatchingQuery(c,e,t?a:ve.min(),t?l:Ne()))).next((f=>(WR(i,Z0(e),f),{documents:f,Qs:l})))))}function YR(r,e){const t=ue(r),i=ue(t.Pi),a=t.Ms.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",(l=>i.At(l,e).next((c=>c?c.target:null))))}function $R(r,e){const t=ue(r),i=t.Os.get(e)||ve.min();return t.persistence.runTransaction("Get new document changes","readonly",(a=>t.Ns.getAllFromCollectionGroup(a,e,y0(i,Ul),Number.MAX_SAFE_INTEGER))).then((a=>(WR(t,e,a),a)))}function WR(r,e,t){let i=r.Os.get(e)||ve.min();t.forEach(((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.Os.set(e,i)}async function LM(r,e,t,i){const a=ue(r);let l=Ne(),c=Bn();for(const g of t){const v=e.$s(g.metadata.name);g.document&&(l=l.add(v));const T=e.Us(g);T.setReadTime(e.Ks(g.metadata.readTime)),c=c.insert(v,T)}const f=a.Ns.newChangeBuffer({trackRemovals:!0}),p=await $l(a,(function(v){return Cn(lu(ke.fromString(`__bundle__/docs/${v}`)))})(i));return a.persistence.runTransaction("Apply bundle documents","readwrite",(g=>QR(g,f,c).next((v=>(f.apply(g),v))).next((v=>a.Pi.removeMatchingKeysForTargetId(g,p.targetId).next((()=>a.Pi.addMatchingKeys(g,l,p.targetId))).next((()=>a.localDocuments.getLocalViewOfDocuments(g,v.ks,v.qs))).next((()=>v.ks))))))}async function UM(r,e,t=Ne()){const i=await $l(r,Cn(hv(e.bundledQuery))),a=ue(r);return a.persistence.runTransaction("Save named query","readwrite",(l=>{const c=Pt(e.readTime);if(i.snapshotVersion.compareTo(c)>=0)return a.Ii.saveNamedQuery(l,e);const f=i.withResumeToken(At.EMPTY_BYTE_STRING,c);return a.Ms=a.Ms.insert(f.targetId,f),a.Pi.updateTargetData(l,f).next((()=>a.Pi.removeMatchingKeysForTargetId(l,i.targetId))).next((()=>a.Pi.addMatchingKeys(l,t,i.targetId))).next((()=>a.Ii.saveNamedQuery(l,e)))}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="firestore_clients";function dA(r,e){return`${XR}_${r}_${e}`}const JR="firestore_mutations";function fA(r,e,t){let i=`${JR}_${r}_${t}`;return e.isAuthenticated()&&(i+=`_${e.uid}`),i}const ZR="firestore_targets";function w_(r,e){return`${ZR}_${r}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="SharedClientState";class dm{constructor(e,t,i,a){this.user=e,this.batchId=t,this.state=i,this.error=a}static Ws(e,t,i){const a=JSON.parse(i);let l,c=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return c&&a.error&&(c=typeof a.error.message=="string"&&typeof a.error.code=="string",c&&(l=new te(a.error.code,a.error.message))),c?new dm(e,t,a.state,l):(Vt(sr,`Failed to parse mutation state for ID '${t}': ${i}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Xc{constructor(e,t,i){this.targetId=e,this.state=t,this.error=i}static Ws(e,t){const i=JSON.parse(t);let a,l=typeof i=="object"&&["not-current","current","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return l&&i.error&&(l=typeof i.error.message=="string"&&typeof i.error.code=="string",l&&(a=new te(i.error.code,i.error.message))),l?new Xc(e,i.state,a):(Vt(sr,`Failed to parse target state for ID '${e}': ${t}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class fm{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ws(e,t){const i=JSON.parse(t);let a=typeof i=="object"&&i.activeTargetIds instanceof Array,l=iv();for(let c=0;a&&c<i.activeTargetIds.length;++c)a=b0(i.activeTargetIds[c]),l=l.add(i.activeTargetIds[c]);return a?new fm(e,l):(Vt(sr,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Ev{constructor(e,t){this.clientId=e,this.onlineState=t}static Ws(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Ev(t.clientId,t.onlineState):(Vt(sr,`Failed to parse online state: ${e}`),null)}}class ry{constructor(){this.activeTargetIds=iv()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class b_{constructor(e,t,i,a,l){this.window=e,this.Mi=t,this.persistenceKey=i,this.Js=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Hs=this.Ys.bind(this),this.Zs=new lt(Ae),this.started=!1,this.Xs=[];const c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=l,this.eo=dA(this.persistenceKey,this.Js),this.no=(function(p){return`firestore_sequence_number_${p}`})(this.persistenceKey),this.Zs=this.Zs.insert(this.Js,new ry),this.ro=new RegExp(`^${XR}_${c}_([^_]*)$`),this.io=new RegExp(`^${JR}_${c}_(\\d+)(?:_(.*))?$`),this.so=new RegExp(`^${ZR}_${c}_(\\d+)$`),this.oo=(function(p){return`firestore_online_state_${p}`})(this.persistenceKey),this._o=(function(p){return`firestore_bundle_loaded_v2_${p}`})(this.persistenceKey),this.window.addEventListener("storage",this.Hs)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ts();for(const i of e){if(i===this.Js)continue;const a=this.getItem(dA(this.persistenceKey,i));if(a){const l=fm.Ws(i,a);l&&(this.Zs=this.Zs.insert(l.clientId,l))}}this.ao();const t=this.storage.getItem(this.oo);if(t){const i=this.uo(t);i&&this.co(i)}for(const i of this.Xs)this.Ys(i);this.Xs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.no,JSON.stringify(e))}getAllActiveQueryTargets(){return this.lo(this.Zs)}isActiveQueryTarget(e){let t=!1;return this.Zs.forEach(((i,a)=>{a.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.ho(e,"pending")}updateMutationState(e,t,i){this.ho(e,t,i),this.Po(e)}addLocalQueryTarget(e,t=!0){let i="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(w_(this.persistenceKey,e));if(a){const l=Xc.Ws(e,a);l&&(i=l.state)}}return t&&this.To.zs(e),this.ao(),i}removeLocalQueryTarget(e){this.To.js(e),this.ao()}isLocalQueryTarget(e){return this.To.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(w_(this.persistenceKey,e))}updateQueryState(e,t,i){this.Io(e,t,i)}handleUserChange(e,t,i){t.forEach((a=>{this.Po(a)})),this.currentUser=e,i.forEach((a=>{this.addPendingMutation(a)}))}setOnlineState(e){this.Eo(e)}notifyBundleLoaded(e){this.Ao(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Hs),this.removeItem(this.eo),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ie(sr,"READ",e,t),t}setItem(e,t){ie(sr,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){ie(sr,"REMOVE",e),this.storage.removeItem(e)}Ys(e){const t=e;if(t.storageArea===this.storage){if(ie(sr,"EVENT",t.key,t.newValue),t.key===this.eo)return void Vt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Mi.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.ro.test(t.key)){if(t.newValue==null){const i=this.Ro(t.key);return this.Vo(i,null)}{const i=this.mo(t.key,t.newValue);if(i)return this.Vo(i.clientId,i)}}else if(this.io.test(t.key)){if(t.newValue!==null){const i=this.fo(t.key,t.newValue);if(i)return this.po(i)}}else if(this.so.test(t.key)){if(t.newValue!==null){const i=this.yo(t.key,t.newValue);if(i)return this.wo(i)}}else if(t.key===this.oo){if(t.newValue!==null){const i=this.uo(t.newValue);if(i)return this.co(i)}}else if(t.key===this.no){const i=(function(l){let c=Un.ce;if(l!=null)try{const f=JSON.parse(l);_e(typeof f=="number",30636,{So:l}),c=f}catch(f){Vt(sr,"Failed to read sequence number from WebStorage",f)}return c})(t.newValue);i!==Un.ce&&this.sequenceNumberHandler(i)}else if(t.key===this._o){const i=this.bo(t.newValue);await Promise.all(i.map((a=>this.syncEngine.Do(a))))}}}else this.Xs.push(t)}))}}get To(){return this.Zs.get(this.Js)}ao(){this.setItem(this.eo,this.To.Gs())}ho(e,t,i){const a=new dm(this.currentUser,e,t,i),l=fA(this.persistenceKey,this.currentUser,e);this.setItem(l,a.Gs())}Po(e){const t=fA(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Eo(e){const t={clientId:this.Js,onlineState:e};this.storage.setItem(this.oo,JSON.stringify(t))}Io(e,t,i){const a=w_(this.persistenceKey,e),l=new Xc(e,t,i);this.setItem(a,l.Gs())}Ao(e){const t=JSON.stringify(Array.from(e));this.setItem(this._o,t)}Ro(e){const t=this.ro.exec(e);return t?t[1]:null}mo(e,t){const i=this.Ro(e);return fm.Ws(i,t)}fo(e,t){const i=this.io.exec(e),a=Number(i[1]),l=i[2]!==void 0?i[2]:null;return dm.Ws(new rn(l),a,t)}yo(e,t){const i=this.so.exec(e),a=Number(i[1]);return Xc.Ws(a,t)}uo(e){return Ev.Ws(e)}bo(e){return JSON.parse(e)}async po(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Co(e.batchId,e.state,e.error);ie(sr,`Ignoring mutation for non-active user ${e.user.uid}`)}wo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Vo(e,t){const i=t?this.Zs.insert(e,t):this.Zs.remove(e),a=this.lo(this.Zs),l=this.lo(i),c=[],f=[];return l.forEach((p=>{a.has(p)||c.push(p)})),a.forEach((p=>{l.has(p)||f.push(p)})),this.syncEngine.Fo(c,f).then((()=>{this.Zs=i}))}co(e){this.Zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}lo(e){let t=iv();return e.forEach(((i,a)=>{t=t.unionWith(a.activeTargetIds)})),t}}class e1{constructor(){this.Mo=new ry,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,i){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ry,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA="ConnectivityMonitor";class pA{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ie(mA,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ie(mA,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cf=null;function sy(){return Cf===null?Cf=(function(){return 268435456+Math.round(2147483648*Math.random())})():Cf++,"0x"+Cf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="RestConnection",BM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class jM{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${i}/databases/${a}`,this.Wo=this.databaseId.database===H_?`project_id=${i}`:`project_id=${i}&database_id=${a}`}Go(e,t,i,a,l){const c=sy(),f=this.zo(e,t.toUriEncodedString());ie(I_,`Sending RPC '${e}' ${c}:`,f,i);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(f),v=nu(g);return this.Jo(e,f,p,i,v).then((T=>(ie(I_,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw vr(I_,`RPC '${e}' ${c} failed with error: `,T,"url: ",f,"request:",i),T}))}Ho(e,t,i,a,l,c){return this.Go(e,t,i,a,l)}jo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ou})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),i&&i.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const i=BM[e];return`${this.Uo}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="WebChannelConnection";class qM extends jM{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,a,l){const c=sy();return new Promise(((f,p)=>{const g=new o0;g.setWithCredentials(!0),g.listenOnce(l0.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Pf.NO_ERROR:const T=g.getResponseJson();ie(_n,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),f(T);break;case Pf.TIMEOUT:ie(_n,`RPC '${e}' ${c} timed out`),p(new te(q.DEADLINE_EXCEEDED,"Request time out"));break;case Pf.HTTP_ERROR:const I=g.getStatus();if(ie(_n,`RPC '${e}' ${c} failed with status:`,I,"response text:",g.getResponseText()),I>0){let O=g.getResponseJson();Array.isArray(O)&&(O=O[0]);const Q=O==null?void 0:O.error;if(Q&&Q.status&&Q.message){const $=(function(me){const ne=me.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(ne)>=0?ne:q.UNKNOWN})(Q.status);p(new te($,Q.message))}else p(new te(q.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new te(q.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ie(_n,`RPC '${e}' ${c} completed.`)}}));const v=JSON.stringify(a);ie(_n,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",v,i,15)}))}T_(e,t,i){const a=sy(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=h0(),f=c0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=l.join("");ie(_n,`Creating RPC '${e}' stream ${a}: ${v}`,p);const T=c.createWebChannel(v,p);this.I_(T);let I=!1,O=!1;const Q=new FM({Yo:X=>{O?ie(_n,`Not sending because RPC '${e}' stream ${a} is closed:`,X):(I||(ie(_n,`Opening RPC '${e}' stream ${a} transport.`),T.open(),I=!0),ie(_n,`RPC '${e}' stream ${a} sending:`,X),T.send(X))},Zo:()=>T.close()}),$=(X,me,ne)=>{X.listen(me,(G=>{try{ne(G)}catch(se){setTimeout((()=>{throw se}),0)}}))};return $(T,Pc.EventType.OPEN,(()=>{O||(ie(_n,`RPC '${e}' stream ${a} transport opened.`),Q.o_())})),$(T,Pc.EventType.CLOSE,(()=>{O||(O=!0,ie(_n,`RPC '${e}' stream ${a} transport closed`),Q.a_(),this.E_(T))})),$(T,Pc.EventType.ERROR,(X=>{O||(O=!0,vr(_n,`RPC '${e}' stream ${a} transport errored. Name:`,X.name,"Message:",X.message),Q.a_(new te(q.UNAVAILABLE,"The operation could not be completed")))})),$(T,Pc.EventType.MESSAGE,(X=>{var me;if(!O){const ne=X.data[0];_e(!!ne,16349);const G=ne,se=(G==null?void 0:G.error)||((me=G[0])==null?void 0:me.error);if(se){ie(_n,`RPC '${e}' stream ${a} received error:`,se);const de=se.status;let le=(function(R){const x=Ht[R];if(x!==void 0)return fR(x)})(de),A=se.message;le===void 0&&(le=q.INTERNAL,A="Unknown error status: "+de+" with message "+se.message),O=!0,Q.a_(new te(le,A)),T.close()}else ie(_n,`RPC '${e}' stream ${a} received:`,ne),Q.u_(ne)}})),$(f,u0.STAT_EVENT,(X=>{X.stat===L_.PROXY?ie(_n,`RPC '${e}' stream ${a} detected buffering proxy`):X.stat===L_.NOPROXY&&ie(_n,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{Q.__()}),0),Q}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(){return typeof window<"u"?window:null}function qf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(r){return new Yk(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,t,i=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-i);a>0&&ie("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="PersistentStream";class n1{constructor(e,t,i,a,l,c,f,p){this.Mi=e,this.S_=i,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Tv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,a])=>{this.D_===t&&this.G_(i,a)}),(i=>{e((()=>{const a=new te(q.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(a)}))}))}G_(e,t){const i=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{i((()=>this.listener.Xo()))})),this.stream.t_((()=>{i((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{i((()=>this.z_(a)))})),this.stream.onMessage((a=>{i((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ie(gA,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ie(gA,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class HM extends n1{constructor(e,t,i,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Xk(this.serializer,e),i=(function(l){if(!("targetChange"in l))return ve.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?ve.min():c.readTime?Pt(c.readTime):ve.min()})(e);return this.listener.H_(t,i)}Y_(e){const t={};t.database=Z_(this.serializer),t.addTarget=(function(l,c){let f;const p=c.target;if(f=rm(p)?{documents:bR(l,p)}:{query:IR(l,p).ft},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=_R(l,c.resumeToken);const g=X_(l,c.expectedCount);g!==null&&(f.expectedCount=g)}else if(c.snapshotVersion.compareTo(ve.min())>0){f.readTime=Yl(l,c.snapshotVersion.toTimestamp());const g=X_(l,c.expectedCount);g!==null&&(f.expectedCount=g)}return f})(this.serializer,e);const i=Zk(this.serializer,e);i&&(t.labels=i),this.q_(t)}Z_(e){const t={};t.database=Z_(this.serializer),t.removeTarget=e,this.q_(t)}}class GM extends n1{constructor(e,t,i,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return _e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){_e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Jk(e.writeResults,e.commitTime),i=Pt(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=Z_(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>gh(this.serializer,i)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{}class QM extends KM{constructor(e,t,i,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new te(q.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,J_(t,i),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new te(q.UNKNOWN,l.toString())}))}Ho(e,t,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Ho(e,J_(t,i),a,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new te(q.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class YM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Vt(t),this.aa=!1):ie("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="RemoteStore";class $M{constructor(e,t,i,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{i.enqueueAndForget((async()=>{ua(this)&&(ie(go,"Restarting streams for network reachability change."),await(async function(p){const g=ue(p);g.Ea.add(4),await hu(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Bh(g)})(this))}))})),this.Ra=new YM(i,a)}}async function Bh(r){if(ua(r))for(const e of r.da)await e(!0)}async function hu(r){for(const e of r.da)await e(!1)}function qm(r,e){const t=ue(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Iv(t)?bv(t):fu(t).O_()&&wv(t,e))}function Xl(r,e){const t=ue(r),i=fu(t);t.Ia.delete(e),i.O_()&&i1(t,e),t.Ia.size===0&&(i.O_()?i.L_():ua(t)&&t.Ra.set("Unknown"))}function wv(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fu(r).Y_(e)}function i1(r,e){r.Va.Ue(e),fu(r).Z_(e)}function bv(r){r.Va=new Hk({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),fu(r).start(),r.Ra.ua()}function Iv(r){return ua(r)&&!fu(r).x_()&&r.Ia.size>0}function ua(r){return ue(r).Ea.size===0}function r1(r){r.Va=void 0}async function WM(r){r.Ra.set("Online")}async function XM(r){r.Ia.forEach(((e,t)=>{wv(r,e)}))}async function JM(r,e){r1(r),Iv(r)?(r.Ra.ha(e),bv(r)):r.Ra.set("Unknown")}async function ZM(r,e,t){if(r.Ra.set("Online"),e instanceof gR&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const f of l.targetIds)a.Ia.has(f)&&(await a.remoteSyncer.rejectListen(f,c),a.Ia.delete(f),a.Va.removeTarget(f))})(r,e)}catch(i){ie(go,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await mm(r,i)}else if(e instanceof jf?r.Va.Ze(e):e instanceof pR?r.Va.st(e):r.Va.tt(e),!t.isEqual(ve.min()))try{const i=await KR(r.localStore);t.compareTo(i)>=0&&await(function(l,c){const f=l.Va.Tt(c);return f.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(g);v&&l.Ia.set(g,v.withResumeToken(p.resumeToken,c))}})),f.targetMismatches.forEach(((p,g)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(At.EMPTY_BYTE_STRING,v.snapshotVersion)),i1(l,p);const T=new jr(v.target,p,g,v.sequenceNumber);wv(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(i){ie(go,"Failed to raise snapshot:",i),await mm(r,i)}}async function mm(r,e,t){if(!oa(e))throw e;r.Ea.add(1),await hu(r),r.Ra.set("Offline"),t||(t=()=>KR(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ie(go,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Bh(r)}))}function s1(r,e){return e().catch((t=>mm(r,t,e)))}async function du(r){const e=ue(r),t=ta(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hs;for(;eL(e);)try{const a=await MM(e.localStore,i);if(a===null){e.Ta.length===0&&t.L_();break}i=a.batchId,tL(e,a)}catch(a){await mm(e,a)}a1(e)&&o1(e)}function eL(r){return ua(r)&&r.Ta.length<10}function tL(r,e){r.Ta.push(e);const t=ta(r);t.O_()&&t.X_&&t.ea(e.mutations)}function a1(r){return ua(r)&&!ta(r).x_()&&r.Ta.length>0}function o1(r){ta(r).start()}async function nL(r){ta(r).ra()}async function iL(r){const e=ta(r);for(const t of r.Ta)e.ea(t.mutations)}async function rL(r,e,t){const i=r.Ta.shift(),a=ov.from(i,e,t);await s1(r,(()=>r.remoteSyncer.applySuccessfulWrite(a))),await du(r)}async function sL(r,e){e&&ta(r).X_&&await(async function(i,a){if((function(c){return dR(c)&&c!==q.ABORTED})(a.code)){const l=i.Ta.shift();ta(i).B_(),await s1(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a))),await du(i)}})(r,e),a1(r)&&o1(r)}async function _A(r,e){const t=ue(r);t.asyncQueue.verifyOperationInProgress(),ie(go,"RemoteStore received new credentials");const i=ua(t);t.Ea.add(3),await hu(t),i&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Bh(t)}async function ay(r,e){const t=ue(r);e?(t.Ea.delete(2),await Bh(t)):e||(t.Ea.add(2),await hu(t),t.Ra.set("Unknown"))}function fu(r){return r.ma||(r.ma=(function(t,i,a){const l=ue(t);return l.sa(),new HM(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(r.datastore,r.asyncQueue,{Xo:WM.bind(null,r),t_:XM.bind(null,r),r_:JM.bind(null,r),H_:ZM.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),Iv(r)?bv(r):r.Ra.set("Unknown")):(await r.ma.stop(),r1(r))}))),r.ma}function ta(r){return r.fa||(r.fa=(function(t,i,a){const l=ue(t);return l.sa(),new GM(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:nL.bind(null,r),r_:sL.bind(null,r),ta:iL.bind(null,r),na:rL.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await du(r)):(await r.fa.stop(),r.Ta.length>0&&(ie(go,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,t,i,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,a,l){const c=Date.now()+i,f=new Av(e,t,c,a,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mu(r,e){if(Vt("AsyncQueue",`${e}: ${r}`),oa(r))return new te(q.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{static emptySet(e){return new Vl(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||oe.comparator(t.key,i.key):(t,i)=>oe.comparator(t.key,i.key),this.keyedMap=Oc(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Vl;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(){this.ga=new lt(oe.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):fe(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Jl{constructor(e,t,i,a,l,c,f,p,g){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,i,a,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new Jl(e,t,Vl.emptySet(t),c,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==i[a].type||!t[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class oL{constructor(){this.queries=vA(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const a=ue(t),l=a.queries;a.queries=vA(),l.forEach(((c,f)=>{for(const p of f.Sa)p.onError(i)}))})(this,new te(q.ABORTED,"Firestore shutting down"))}}function vA(){return new Wr((r=>J0(r)),Oh)}async function Sv(r,e){const t=ue(r);let i=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(i=2):(l=new aL,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const f=mu(c,`Initialization of query '${wl(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Cv(t)}async function Rv(r,e){const t=ue(r),i=e.query;let a=3;const l=t.queries.get(i);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function lL(r,e){const t=ue(r);let i=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const f of c.Sa)f.Fa(a)&&(i=!0);c.wa=a}}i&&Cv(t)}function uL(r,e,t){const i=ue(r),a=i.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);i.queries.delete(e)}function Cv(r){r.Ca.forEach((e=>{e.next()}))}var oy,EA;(EA=oy||(oy={})).Ma="default",EA.Cache="cache";class Nv{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new Jl(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Jl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==oy.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e,t){this.Qa=e,this.byteLength=t}$a(){return"metadata"in this.Qa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.serializer=e}$s(e){return mr(this.serializer,e)}Us(e){return e.metadata.exists?wR(this.serializer,e.document,!1):ht.newNoDocument(this.$s(e.metadata.name),this.Ks(e.metadata.readTime))}Ks(e){return Pt(e)}}class hL{constructor(e,t){this.Ua=e,this.serializer=t,this.Ka=[],this.Wa=[],this.collectionGroups=new Set,this.progress=l1(e)}get queries(){return this.Ka}get documents(){return this.Wa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Qa.namedQuery)this.Ka.push(e.Qa.namedQuery);else if(e.Qa.documentMetadata){this.Wa.push({metadata:e.Qa.documentMetadata}),e.Qa.documentMetadata.exists||++t;const i=ke.fromString(e.Qa.documentMetadata.name);this.collectionGroups.add(i.get(i.length-2))}else e.Qa.document&&(this.Wa[this.Wa.length-1].document=e.Qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}za(e){const t=new Map,i=new TA(this.serializer);for(const a of e)if(a.metadata.queries){const l=i.$s(a.metadata.name);for(const c of a.metadata.queries){const f=(t.get(c)||Ne()).add(l);t.set(c,f)}}return t}async ja(e){const t=await LM(e,new TA(this.serializer),this.Wa,this.Ua.id),i=this.za(this.documents);for(const a of this.Ka)await UM(e,a,i.get(a.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:t}}}function l1(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.key=e}}class c1{constructor(e){this.key=e}}class h1{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ne(),this.mutatedKeys=Ne(),this.eu=eR(e),this.tu=new Vl(this.eu)}get nu(){return this.Ya}ru(e,t){const i=t?t.iu:new yA,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,f=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((v,T)=>{const I=a.get(v),O=kh(this.query,T)?T:null,Q=!!I&&this.mutatedKeys.has(I.key),$=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let X=!1;I&&O?I.data.isEqual(O.data)?Q!==$&&(i.track({type:3,doc:O}),X=!0):this.su(I,O)||(i.track({type:2,doc:O}),X=!0,(p&&this.eu(O,p)>0||g&&this.eu(O,g)<0)&&(f=!0)):!I&&O?(i.track({type:0,doc:O}),X=!0):I&&!O&&(i.track({type:1,doc:I}),X=!0,(p||g)&&(f=!0)),X&&(O?(c=c.add(O),l=$?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{tu:c,iu:i,Cs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((v,T)=>(function(O,Q){const $=X=>{switch(X){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Rt:X})}};return $(O)-$(Q)})(v.type,T.type)||this.eu(v.doc,T.doc))),this.ou(i),a=a??!1;const f=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new Jl(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new yA,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ne(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))}));const t=[];return e.forEach((i=>{this.Xa.has(i)||t.push(new c1(i))})),this.Xa.forEach((i=>{e.has(i)||t.push(new u1(i))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Jl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ca="SyncEngine";class dL{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class fL{constructor(e){this.key=e,this.hu=!1}}class mL{constructor(e,t,i,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Wr((f=>J0(f)),Oh),this.Iu=new Map,this.Eu=new Set,this.du=new lt(oe.comparator),this.Au=new Map,this.Ru=new mv,this.Vu={},this.mu=new Map,this.fu=po.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function pL(r,e,t=!0){const i=Hm(r);let a;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await d1(i,e,t,!0),a}async function gL(r,e){const t=Hm(r);await d1(t,e,!0,!1)}async function d1(r,e,t,i){const a=await $l(r.localStore,Cn(e)),l=a.targetId,c=r.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await Dv(r,e,l,c==="current",a.resumeToken)),r.isPrimaryClient&&t&&qm(r.remoteStore,a),f}async function Dv(r,e,t,i,a){r.pu=(T,I,O)=>(async function($,X,me,ne){let G=X.view.ru(me);G.Cs&&(G=await hm($.localStore,X.query,!1).then((({documents:A})=>X.view.ru(A,G))));const se=ne&&ne.targetChanges.get(X.targetId),de=ne&&ne.targetMismatches.get(X.targetId)!=null,le=X.view.applyChanges(G,$.isPrimaryClient,se,de);return ly($,X.targetId,le.au),le.snapshot})(r,T,I,O);const l=await hm(r.localStore,e,!0),c=new h1(e,l.Qs),f=c.ru(l.documents),p=Uh.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",a),g=c.applyChanges(f,r.isPrimaryClient,p);ly(r,t,g.au);const v=new dL(e,t,c);return r.Tu.set(e,v),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),g.snapshot}async function _L(r,e,t){const i=ue(r),a=i.Tu.get(e),l=i.Iu.get(a.targetId);if(l.length>1)return i.Iu.set(a.targetId,l.filter((c=>!Oh(c,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await Wl(i.localStore,a.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(a.targetId),t&&Xl(i.remoteStore,a.targetId),Zl(i,a.targetId)})).catch(aa)):(Zl(i,a.targetId),await Wl(i.localStore,a.targetId,!0))}async function yL(r,e){const t=ue(r),i=t.Tu.get(e),a=t.Iu.get(i.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Xl(t.remoteStore,i.targetId))}async function vL(r,e,t){const i=Ov(r);try{const a=await(function(c,f){const p=ue(c),g=Ye.now(),v=f.reduce(((O,Q)=>O.add(Q.key)),Ne());let T,I;return p.persistence.runTransaction("Locally write mutations","readwrite",(O=>{let Q=Bn(),$=Ne();return p.Ns.getEntries(O,v).next((X=>{Q=X,Q.forEach(((me,ne)=>{ne.isValidDocument()||($=$.add(me))}))})).next((()=>p.localDocuments.getOverlayedDocuments(O,Q))).next((X=>{T=X;const me=[];for(const ne of f){const G=jk(ne,T.get(ne.key).overlayedDocument);G!=null&&me.push(new Xr(ne.key,G,q0(G.value.mapValue),yt.exists(!0)))}return p.mutationQueue.addMutationBatch(O,g,me,f)})).next((X=>{I=X;const me=X.applyToLocalDocumentSet(T,$);return p.documentOverlayCache.saveOverlays(O,X.batchId,me)}))})).then((()=>({batchId:I.batchId,changes:nR(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),(function(c,f,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new lt(Ae)),g=g.insert(f,p),c.Vu[c.currentUser.toKey()]=g})(i,a.batchId,t),await Jr(i,a.changes),await du(i.remoteStore)}catch(a){const l=mu(a,"Failed to persist write");t.reject(l)}}async function f1(r,e){const t=ue(r);try{const i=await kM(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(_e(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?_e(c.hu,14607):a.removedDocuments.size>0&&(_e(c.hu,42227),c.hu=!1))})),await Jr(t,i,e)}catch(i){await aa(i)}}function wA(r,e,t){const i=ue(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const a=[];i.Tu.forEach(((l,c)=>{const f=c.view.va(e);f.snapshot&&a.push(f.snapshot)})),(function(c,f){const p=ue(c);p.onlineState=f;let g=!1;p.queries.forEach(((v,T)=>{for(const I of T.Sa)I.va(f)&&(g=!0)})),g&&Cv(p)})(i.eventManager,e),a.length&&i.Pu.H_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function EL(r,e,t){const i=ue(r);i.sharedClientState.updateQueryState(e,"rejected",t);const a=i.Au.get(e),l=a&&a.key;if(l){let c=new lt(oe.comparator);c=c.insert(l,ht.newNoDocument(l,ve.min()));const f=Ne().add(l),p=new Lh(ve.min(),new Map,new lt(Ae),c,f);await f1(i,p),i.du=i.du.remove(l),i.Au.delete(e),Pv(i)}else await Wl(i.localStore,e,!1).then((()=>Zl(i,e,t))).catch(aa)}async function TL(r,e){const t=ue(r),i=e.batch.batchId;try{const a=await OM(t.localStore,e);Vv(t,i,null),xv(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Jr(t,a)}catch(a){await aa(a)}}async function wL(r,e,t){const i=ue(r);try{const a=await(function(c,f){const p=ue(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return p.mutationQueue.lookupMutationBatch(g,f).next((T=>(_e(T!==null,37113),v=T.keys(),p.mutationQueue.removeMutationBatch(g,T)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>p.localDocuments.getDocuments(g,v)))}))})(i.localStore,e);Vv(i,e,t),xv(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Jr(i,a)}catch(a){await aa(a)}}async function bL(r,e){const t=ue(r);ua(t.remoteStore)||ie(ca,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const i=await(function(c){const f=ue(c);return f.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(p=>f.mutationQueue.getHighestUnacknowledgedBatchId(p)))})(t.localStore);if(i===Hs)return void e.resolve();const a=t.mu.get(i)||[];a.push(e),t.mu.set(i,a)}catch(i){const a=mu(i,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function xv(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function Vv(r,e,t){const i=ue(r);let a=i.Vu[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),i.Vu[i.currentUser.toKey()]=a}}function Zl(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Iu.get(e))r.Tu.delete(i),t&&r.Pu.yu(i,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((i=>{r.Ru.containsKey(i)||m1(r,i)}))}function m1(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Xl(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Pv(r))}function ly(r,e,t){for(const i of t)i instanceof u1?(r.Ru.addReference(i.key,e),IL(r,i)):i instanceof c1?(ie(ca,"Document no longer in limbo: "+i.key),r.Ru.removeReference(i.key,e),r.Ru.containsKey(i.key)||m1(r,i.key)):fe(19791,{wu:i})}function IL(r,e){const t=e.key,i=t.path.canonicalString();r.du.get(t)||r.Eu.has(i)||(ie(ca,"New document in limbo: "+t),r.Eu.add(i),Pv(r))}function Pv(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new oe(ke.fromString(e)),i=r.fu.next();r.Au.set(i,new fL(t)),r.du=r.du.insert(t,i),qm(r.remoteStore,new jr(Cn(lu(t.path)),i,"TargetPurposeLimboResolution",Un.ce))}}async function Jr(r,e,t){const i=ue(r),a=[],l=[],c=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,p)=>{c.push(i.pu(p,e,t).then((g=>{var v;if((g||t)&&i.isPrimaryClient){const T=g?!g.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))==null?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(g){a.push(g);const T=yv.As(p.targetId,g);l.push(T)}})))})),await Promise.all(c),i.Pu.H_(a),await(async function(p,g){const v=ue(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>U.forEach(g,(I=>U.forEach(I.Es,(O=>v.persistence.referenceDelegate.addReference(T,I.targetId,O))).next((()=>U.forEach(I.ds,(O=>v.persistence.referenceDelegate.removeReference(T,I.targetId,O)))))))))}catch(T){if(!oa(T))throw T;ie(vv,"Failed to update sequence numbers: "+T)}for(const T of g){const I=T.targetId;if(!T.fromCache){const O=v.Ms.get(I),Q=O.snapshotVersion,$=O.withLastLimboFreeSnapshotVersion(Q);v.Ms=v.Ms.insert(I,$)}}})(i.localStore,l))}async function AL(r,e){const t=ue(r);if(!t.currentUser.isEqual(e)){ie(ca,"User change. New user:",e.toKey());const i=await GR(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((f=>{f.forEach((p=>{p.reject(new te(q.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Jr(t,i.Ls)}}function SL(r,e){const t=ue(r),i=t.Au.get(e);if(i&&i.hu)return Ne().add(i.key);{let a=Ne();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const f=t.Tu.get(c);a=a.unionWith(f.view.nu)}return a}}async function RL(r,e){const t=ue(r),i=await hm(t.localStore,e.query,!0),a=e.view.cu(i);return t.isPrimaryClient&&ly(t,e.targetId,a.au),a}async function CL(r,e){const t=ue(r);return $R(t.localStore,e).then((i=>Jr(t,i)))}async function NL(r,e,t,i){const a=ue(r),l=await(function(f,p){const g=ue(f),v=ue(g.mutationQueue);return g.persistence.runTransaction("Lookup mutation documents","readonly",(T=>v.er(T,p).next((I=>I?g.localDocuments.getDocuments(T,I):U.resolve(null)))))})(a.localStore,e);l!==null?(t==="pending"?await du(a.remoteStore):t==="acknowledged"||t==="rejected"?(Vv(a,e,i||null),xv(a,e),(function(f,p){ue(ue(f).mutationQueue).ir(p)})(a.localStore,e)):fe(6720,"Unknown batchState",{Su:t}),await Jr(a,l)):ie(ca,"Cannot apply mutation batch with id: "+e)}async function DL(r,e){const t=ue(r);if(Hm(t),Ov(t),e===!0&&t.gu!==!0){const i=t.sharedClientState.getAllActiveQueryTargets(),a=await bA(t,i.toArray());t.gu=!0,await ay(t.remoteStore,!0);for(const l of a)qm(t.remoteStore,l)}else if(e===!1&&t.gu!==!1){const i=[];let a=Promise.resolve();t.Iu.forEach(((l,c)=>{t.sharedClientState.isLocalQueryTarget(c)?i.push(c):a=a.then((()=>(Zl(t,c),Wl(t.localStore,c,!0)))),Xl(t.remoteStore,c)})),await a,await bA(t,i),(function(c){const f=ue(c);f.Au.forEach(((p,g)=>{Xl(f.remoteStore,g)})),f.Ru.Jr(),f.Au=new Map,f.du=new lt(oe.comparator)})(t),t.gu=!1,await ay(t.remoteStore,!1)}}async function bA(r,e,t){const i=ue(r),a=[],l=[];for(const c of e){let f;const p=i.Iu.get(c);if(p&&p.length!==0){f=await $l(i.localStore,Cn(p[0]));for(const g of p){const v=i.Tu.get(g),T=await RL(i,v);T.snapshot&&l.push(T.snapshot)}}else{const g=await YR(i.localStore,c);f=await $l(i.localStore,g),await Dv(i,p1(g),c,!1,f.resumeToken)}a.push(f)}return i.Pu.H_(l),a}function p1(r){return X0(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function xL(r){return(function(t){return ue(ue(t).persistence).Ts()})(ue(r).localStore)}async function VL(r,e,t,i){const a=ue(r);if(a.gu)return void ie(ca,"Ignoring unexpected query state notification.");const l=a.Iu.get(e);if(l&&l.length>0)switch(t){case"current":case"not-current":{const c=await $R(a.localStore,Z0(l[0])),f=Lh.createSynthesizedRemoteEventForCurrentChange(e,t==="current",At.EMPTY_BYTE_STRING);await Jr(a,c,f);break}case"rejected":await Wl(a.localStore,e,!0),Zl(a,e,i);break;default:fe(64155,t)}}async function PL(r,e,t){const i=Hm(r);if(i.gu){for(const a of e){if(i.Iu.has(a)&&i.sharedClientState.isActiveQueryTarget(a)){ie(ca,"Adding an already active target "+a);continue}const l=await YR(i.localStore,a),c=await $l(i.localStore,l);await Dv(i,p1(l),c.targetId,!1,c.resumeToken),qm(i.remoteStore,c)}for(const a of t)i.Iu.has(a)&&await Wl(i.localStore,a,!1).then((()=>{Xl(i.remoteStore,a),Zl(i,a)})).catch(aa)}}function Hm(r){const e=ue(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=f1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EL.bind(null,e),e.Pu.H_=lL.bind(null,e.eventManager),e.Pu.yu=uL.bind(null,e.eventManager),e}function Ov(r){const e=ue(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wL.bind(null,e),e}function OL(r,e,t){const i=ue(r);(async function(l,c,f){try{const p=await c.getMetadata();if(await(function(O,Q){const $=ue(O),X=Pt(Q.createTime);return $.persistence.runTransaction("hasNewerBundle","readonly",(me=>$.Ii.getBundleMetadata(me,Q.id))).then((me=>!!me&&me.createTime.compareTo(X)>=0))})(l.localStore,p))return await c.close(),f._completeWith((function(O){return{taskState:"Success",documentsLoaded:O.totalDocuments,bytesLoaded:O.totalBytes,totalDocuments:O.totalDocuments,totalBytes:O.totalBytes}})(p)),Promise.resolve(new Set);f._updateProgress(l1(p));const g=new hL(p,c.serializer);let v=await c.bu();for(;v;){const I=await g.Ga(v);I&&f._updateProgress(I),v=await c.bu()}const T=await g.ja(l.localStore);return await Jr(l,T.Ha,void 0),await(function(O,Q){const $=ue(O);return $.persistence.runTransaction("Save bundle","readwrite",(X=>$.Ii.saveBundleMetadata(X,Q)))})(l.localStore,p),f._completeWith(T.progress),Promise.resolve(T.Ja)}catch(p){return vr(ca,`Loading bundle failed with ${p}`),f._failWith(p),Promise.resolve(new Set)}})(i,e,t).then((a=>{i.sharedClientState.notifyBundleLoaded(a)}))}class _h{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return HR(this.persistence,new qR,e.initialUser,this.serializer)}Cu(e){return new pv(Fm.mi,this.serializer)}Du(e){return new e1}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_h.provider={build:()=>new _h};class kL extends _h{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){_e(this.persistence.referenceDelegate instanceof cm,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new LR(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new pv((i=>cm.mi(i,t)),this.serializer)}}class g1 extends _h{constructor(e,t,i){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=i,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await Ov(this.xu.syncEngine),await du(this.xu.remoteStore),await this.persistence.Ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return HR(this.persistence,new qR,e.initialUser,this.serializer)}Fu(e,t){const i=this.persistence.referenceDelegate.garbageCollector;return new LR(i,e.asyncQueue,t)}Mu(e,t){const i=new HO(t,this.persistence);return new qO(e.asyncQueue,i)}Cu(e){const t=_v(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),i=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new gv(this.synchronizeTabs,t,e.clientId,i,e.asyncQueue,t1(),qf(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new e1}}class ML extends g1{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xu.syncEngine;this.sharedClientState instanceof b_&&(this.sharedClientState.syncEngine={Co:NL.bind(null,t),vo:VL.bind(null,t),Fo:PL.bind(null,t),Ts:xL.bind(null,t),Do:CL.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ji((async i=>{await DL(this.xu.syncEngine,i),this.gcScheduler&&(i&&!this.gcScheduler.started?this.gcScheduler.start():i||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(i&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():i||this.indexBackfillerScheduler.stop())}))}Du(e){const t=t1();if(!b_.v(t))throw new te(q.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const i=_v(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new b_(t,e.asyncQueue,i,e.clientId,e.initialUser)}}class yh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>wA(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=AL.bind(null,this.syncEngine),await ay(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new oL})()}createDatastore(e){const t=zh(e.databaseInfo.databaseId),i=(function(l){return new qM(l)})(e.databaseInfo);return(function(l,c,f,p){return new QM(l,c,f,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,a,l,c,f){return new $M(i,a,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>wA(this.syncEngine,t,0)),(function(){return pA.v()?new pA:new zM})())}createSyncEngine(e,t){return(function(a,l,c,f,p,g,v){const T=new mL(a,l,c,f,p,g);return v&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(a){const l=ue(a);ie(go,"RemoteStore shutting down."),l.Ea.add(5),await hu(l),l.Aa.shutdown(),l.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}yh.provider={build:()=>new yh};function IA(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const i={value:r.slice(t,t+e),done:!1};return t+=e,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(e,t){this.Bu=e,this.serializer=t,this.metadata=new mn,this.buffer=new Uint8Array,this.Lu=(function(){return new TextDecoder("utf-8")})(),this.ku().then((i=>{i&&i.$a()?this.metadata.resolve(i.Qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(i==null?void 0:i.Qa)}`))}),(i=>this.metadata.reject(i)))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async bu(){return await this.getMetadata(),this.ku()}async ku(){const e=await this.qu();if(e===null)return null;const t=this.Lu.decode(e),i=Number(t);isNaN(i)&&this.Qu(`length string (${t}) is not valid number`);const a=await this.$u(i);return new cL(JSON.parse(a),e.length+i)}Uu(){return this.buffer.findIndex((e=>e===123))}async qu(){for(;this.Uu()<0&&!await this.Ku(););if(this.buffer.length===0)return null;const e=this.Uu();e<0&&this.Qu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $u(e){for(;this.buffer.length<e;)await this.Ku()&&this.Qu("Reached the end of bundle when more is expected.");const t=this.Lu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qu(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ku(){const e=await this.Bu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new te(q.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(a,l){const c=ue(a),f={documents:l.map((T=>ph(c.serializer,T)))},p=await c.Ho("BatchGetDocuments",c.serializer.databaseId,ke.emptyPath(),f,l.length),g=new Map;p.forEach((T=>{const I=Wk(c.serializer,T);g.set(I.key.toString(),I)}));const v=[];return l.forEach((T=>{const I=g.get(T.toString());_e(!!I,55234,{key:T}),v.push(I)})),v})(this.datastore,e);return t.forEach((i=>this.recordVersion(i))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new cu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,i)=>{const a=oe.fromPath(i);this.mutations.push(new sv(a,this.precondition(a)))})),await(async function(i,a){const l=ue(i),c={writes:a.map((f=>gh(l.serializer,f)))};await l.Go("Commit",l.serializer.databaseId,ke.emptyPath(),c)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw fe(50498,{Gu:e.constructor.name});t=ve.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!t.isEqual(i))throw new te(q.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ve.min())?yt.exists(!1):yt.updateTime(t):yt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ve.min()))throw new te(q.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return yt.updateTime(t)}return yt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e,t,i,a,l){this.asyncQueue=e,this.datastore=t,this.options=i,this.updateFunction=a,this.deferred=l,this.zu=i.maxAttempts,this.M_=new Tv(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const e=new UL(this.datastore),t=this.Hu(e);t&&t.then((i=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(i)})).catch((a=>{this.Yu(a)}))))})).catch((i=>{this.Yu(i)}))}))}Hu(e){try{const t=this.updateFunction(e);return!xh(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Zu(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!dR(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="FirestoreClient";class BL{constructor(e,t,i,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=a,this.user=rn.UNAUTHENTICATED,this.clientId=Gy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{ie(na,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(ie(na,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=mu(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function A_(r,e){r.asyncQueue.verifyOperationInProgress(),ie(na,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async a=>{i.isEqual(a)||(await GR(e.localStore,a),i=a)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function AA(r,e){r.asyncQueue.verifyOperationInProgress();const t=await kv(r);ie(na,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>_A(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,a)=>_A(e.remoteStore,a))),r._onlineComponents=e}async function kv(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ie(na,"Using user provided OfflineComponentProvider");try{await A_(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===q.FAILED_PRECONDITION||a.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;vr("Error using user provided cache. Falling back to memory cache: "+t),await A_(r,new _h)}}else ie(na,"Using default OfflineComponentProvider"),await A_(r,new kL(void 0));return r._offlineComponents}async function Km(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ie(na,"Using user provided OnlineComponentProvider"),await AA(r,r._uninitializedComponentsProvider._online)):(ie(na,"Using default OnlineComponentProvider"),await AA(r,new yh))),r._onlineComponents}function _1(r){return kv(r).then((e=>e.persistence))}function Mv(r){return kv(r).then((e=>e.localStore))}function y1(r){return Km(r).then((e=>e.remoteStore))}function Lv(r){return Km(r).then((e=>e.syncEngine))}function jL(r){return Km(r).then((e=>e.datastore))}async function eu(r){const e=await Km(r),t=e.eventManager;return t.onListen=pL.bind(null,e.syncEngine),t.onUnlisten=_L.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=gL.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=yL.bind(null,e.syncEngine),t}function FL(r){return r.asyncQueue.enqueue((async()=>{const e=await _1(r),t=await y1(r);return e.setNetworkEnabled(!0),(function(a){const l=ue(a);return l.Ea.delete(0),Bh(l)})(t)}))}function qL(r){return r.asyncQueue.enqueue((async()=>{const e=await _1(r),t=await y1(r);return e.setNetworkEnabled(!1),(async function(a){const l=ue(a);l.Ea.add(0),await hu(l),l.Ra.set("Offline")})(t)}))}function HL(r,e){const t=new mn;return r.asyncQueue.enqueueAndForget((async()=>(async function(a,l,c){try{const f=await(function(g,v){const T=ue(g);return T.persistence.runTransaction("read document","readonly",(I=>T.localDocuments.getDocument(I,v)))})(a,l);f.isFoundDocument()?c.resolve(f):f.isNoDocument()?c.resolve(null):c.reject(new te(q.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(f){const p=mu(f,`Failed to get document '${l} from cache`);c.reject(p)}})(await Mv(r),e,t))),t.promise}function v1(r,e,t={}){const i=new mn;return r.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,p,g){const v=new Gm({next:I=>{v.Nu(),c.enqueueAndForget((()=>Rv(l,T)));const O=I.docs.has(f);!O&&I.fromCache?g.reject(new te(q.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&I.fromCache&&p&&p.source==="server"?g.reject(new te(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(I)},error:I=>g.reject(I)}),T=new Nv(lu(f.path),v,{includeMetadataChanges:!0,qa:!0});return Sv(l,T)})(await eu(r),r.asyncQueue,e,t,i))),i.promise}function GL(r,e){const t=new mn;return r.asyncQueue.enqueueAndForget((async()=>(async function(a,l,c){try{const f=await hm(a,l,!0),p=new h1(l,f.Qs),g=p.ru(f.documents),v=p.applyChanges(g,!1);c.resolve(v.snapshot)}catch(f){const p=mu(f,`Failed to execute query '${l} against cache`);c.reject(p)}})(await Mv(r),e,t))),t.promise}function E1(r,e,t={}){const i=new mn;return r.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,p,g){const v=new Gm({next:I=>{v.Nu(),c.enqueueAndForget((()=>Rv(l,T))),I.fromCache&&p.source==="server"?g.reject(new te(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(I)},error:I=>g.reject(I)}),T=new Nv(f,v,{includeMetadataChanges:!0,qa:!0});return Sv(l,T)})(await eu(r),r.asyncQueue,e,t,i))),i.promise}function KL(r,e){const t=new Gm(e);return r.asyncQueue.enqueueAndForget((async()=>(function(a,l){ue(a).Ca.add(l),l.next()})(await eu(r),t))),()=>{t.Nu(),r.asyncQueue.enqueueAndForget((async()=>(function(a,l){ue(a).Ca.delete(l)})(await eu(r),t)))}}function QL(r,e,t,i){const a=(function(c,f){let p;return p=typeof c=="string"?mR().encode(c):c,(function(v,T){return new LL(v,T)})((function(v,T){if(v instanceof Uint8Array)return IA(v,T);if(v instanceof ArrayBuffer)return IA(new Uint8Array(v),T);if(v instanceof ReadableStream)return v.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(p),f)})(t,zh(e));r.asyncQueue.enqueueAndForget((async()=>{OL(await Lv(r),a,i)}))}function YL(r,e){return r.asyncQueue.enqueue((async()=>(function(i,a){const l=ue(i);return l.persistence.runTransaction("Get named query","readonly",(c=>l.Ii.getNamedQuery(c,a)))})(await Mv(r),e)))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1="firestore.googleapis.com",RA=!0;class CA{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=w1,this.ssl=RA}else this.host=e.host,this.ssl=e.ssl??RA;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=PR;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<pM)throw new te(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}p0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=T1(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,a){return i.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jh{constructor(e,t,i,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new CA({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new CA(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new xO;switch(i.type){case"firstParty":return new kO(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new te(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=SA.get(t);i&&(ie("ComponentProvider","Removing Datastore"),SA.delete(t),i.terminate())})(this),Promise.resolve()}}function $L(r,e,t,i={}){var g;r=Ge(r,jh);const a=nu(e),l=r._getSettings(),c={...l,emulatorOptions:r._getEmulatorOptions()},f=`${e}:${t}`;a&&(jA(`https://${f}`),FA("Firestore",!0)),l.host!==w1&&l.host!==f&&vr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:f,ssl:a,emulatorOptions:i};if(!Ks(p,c)&&(r._setSettings(p),i.mockUserToken)){let v,T;if(typeof i.mockUserToken=="string")v=i.mockUserToken,T=rn.MOCK_USER;else{v=YN(i.mockUserToken,(g=r._app)==null?void 0:g.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new te(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new rn(I)}r._authCredentials=new VO(new f0(v,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn=class b1{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new b1(this.firestore,e,this._query)}},ot=class Lc{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lc(this.firestore,e,this._key)}toJSON(){return{type:Lc._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Dh(t,Lc._jsonSchema))return new Lc(e,i||null,new oe(ke.fromString(t.referencePath)))}};ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:Kt("string",ot._jsonSchemaVersion),referencePath:Kt("string")};let Gs=class I1 extends Nn{constructor(e,t,i){super(e,t,lu(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new oe(e))}withConverter(e){return new I1(this.firestore,e,this._path)}};function A1(r,e,...t){if(r=we(r),Ky("collection","path",e),r instanceof jh){const i=ke.fromString(e,...t);return gI(i),new Gs(r,null,i)}{if(!(r instanceof ot||r instanceof Gs))throw new te(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(ke.fromString(e,...t));return gI(i),new Gs(r.firestore,null,i)}}function WL(r,e){if(r=Ge(r,jh),Ky("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new te(q.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Nn(r,null,(function(i){return new $r(ke.emptyPath(),i)})(e))}function pm(r,e,...t){if(r=we(r),arguments.length===1&&(e=Gy.newId()),Ky("doc","path",e),r instanceof jh){const i=ke.fromString(e,...t);return pI(i),new ot(r,null,new oe(i))}{if(!(r instanceof ot||r instanceof Gs))throw new te(q.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(ke.fromString(e,...t));return pI(i),new ot(r.firestore,r instanceof Gs?r.converter:null,new oe(i))}}function S1(r,e){return r=we(r),e=we(e),(r instanceof ot||r instanceof Gs)&&(e instanceof ot||e instanceof Gs)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function R1(r,e){return r=we(r),e=we(e),r instanceof Nn&&e instanceof Nn&&r.firestore===e.firestore&&Oh(r._query,e._query)&&r.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="AsyncQueue";class DA{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Tv(this,"async_queue_retry"),this._c=()=>{const i=qf();i&&ie(NA,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=qf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=qf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new mn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!oa(e))throw e;ie(NA,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Vt("INTERNAL UNHANDLED ERROR: ",xA(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=Av.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&fe(47125,{Pc:xA(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function xA(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(r){return(function(t,i){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of i)if(l in a&&typeof a[l]=="function")return!0;return!1})(r,["next","error","complete"])}class XL{constructor(){this._progressObserver={},this._taskCompletionResolver=new mn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,i){this._progressObserver={next:e,error:t,complete:i}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JL=-1;let Ot=class extends jh{constructor(e,t,i,a){super(e,t,i,a),this.type="firestore",this._queue=new DA,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new DA(e),this._firestoreClient=void 0,await e}}};function Tn(r){if(r._terminated)throw new te(q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||C1(r),r._firestoreClient}function C1(r){var i,a,l;const e=r._freezeSettings(),t=(function(f,p,g,v){return new vk(f,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,T1(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(r._databaseId,((i=r._app)==null?void 0:i.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new BL(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}})(r._componentsProvider))}function ZL(r,e){vr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return N1(r,yh.provider,{build:i=>new g1(i,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function e4(r){vr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();N1(r,yh.provider,{build:t=>new ML(t,e.cacheSizeBytes)})}function N1(r,e,t){if((r=Ge(r,Ot))._firestoreClient||r._terminated)throw new te(q.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new te(q.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},C1(r)}function t4(r){if(r._initialized&&!r._terminated)throw new te(q.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new mn;return r._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(i){if(!fr.v())return Promise.resolve();const a=i+FR;await fr.delete(a)})(_v(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function n4(r){return(function(t){const i=new mn;return t.asyncQueue.enqueueAndForget((async()=>bL(await Lv(t),i))),i.promise})(Tn(r=Ge(r,Ot)))}function i4(r){return FL(Tn(r=Ge(r,Ot)))}function r4(r){return qL(Tn(r=Ge(r,Ot)))}function s4(r,e){const t=Tn(r=Ge(r,Ot)),i=new XL;return QL(t,r._databaseId,e,i),i}function a4(r,e){return YL(Tn(r=Ge(r,Ot)),e).then((t=>t?new Nn(r,null,t.query):null))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(At.fromBase64String(e))}catch(t){throw new te(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vn(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Dh(e,vn._jsonSchema))return vn.fromBase64String(e.bytes)}}vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:Kt("string",vn._jsonSchemaVersion),bytes:Kt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ia=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pi._jsonSchemaVersion}}static fromJSON(e){if(Dh(e,Pi._jsonSchema))return new Pi(e.latitude,e.longitude)}}Pi._jsonSchemaVersion="firestore/geoPoint/1.0",Pi._jsonSchema={type:Kt("string",Pi._jsonSchemaVersion),latitude:Kt("number"),longitude:Kt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:pr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Dh(e,pr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new pr(e.vectorValues);throw new te(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pr._jsonSchemaVersion="firestore/vectorValue/1.0",pr._jsonSchema={type:Kt("string",pr._jsonSchemaVersion),vectorValues:Kt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o4=/^__.*__$/;class l4{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Xr(e,this.data,this.fieldMask,t,this.fieldTransforms):new uu(e,this.data,t,this.fieldTransforms)}}class D1{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Xr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function x1(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{Ac:r})}}class Qm{constructor(e,t,i,a,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Qm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:t,fc:!1});return i.gc(e),i}yc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:t,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return gm(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(x1(this.Ac)&&o4.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class u4{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||zh(e)}Cc(e,t,i,a=!1){return new Qm({Ac:e,methodName:t,Dc:i,path:_t.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function To(r){const e=r._freezeSettings(),t=zh(r._databaseId);return new u4(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Ym(r,e,t,i,a,l={}){const c=r.Cc(l.merge||l.mergeFields?2:0,e,t,a);Hv("Data must be an object, but it was:",c,i);const f=O1(i,c);let p,g;if(l.merge)p=new zn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const I=cy(e,T,t);if(!c.contains(I))throw new te(q.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);M1(v,I)||v.push(I)}p=new zn(v),g=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,g=c.fieldTransforms;return new l4(new fn(f),p,g)}class Fh extends Eo{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fh}}function V1(r,e,t){return new Qm({Ac:3,Dc:e.settings.Dc,methodName:r._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Uv extends Eo{_toFieldTransform(e){return new Mh(e.path,new Kl)}isEqual(e){return e instanceof Uv}}class zv extends Eo{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=V1(this,e,!0),i=this.vc.map((l=>wo(l,t))),a=new co(i);return new Mh(e.path,a)}isEqual(e){return e instanceof zv&&Ks(this.vc,e.vc)}}class Bv extends Eo{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=V1(this,e,!0),i=this.vc.map((l=>wo(l,t))),a=new ho(i);return new Mh(e.path,a)}isEqual(e){return e instanceof Bv&&Ks(this.vc,e.vc)}}class jv extends Eo{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new Ql(e.serializer,sR(e.serializer,this.Fc));return new Mh(e.path,t)}isEqual(e){return e instanceof jv&&this.Fc===e.Fc}}function Fv(r,e,t,i){const a=r.Cc(1,e,t);Hv("Data must be an object, but it was:",a,i);const l=[],c=fn.empty();la(i,((p,g)=>{const v=Gv(e,p,t);g=we(g);const T=a.yc(v);if(g instanceof Fh)l.push(v);else{const I=wo(g,T);I!=null&&(l.push(v),c.set(v,I))}}));const f=new zn(l);return new D1(c,f,a.fieldTransforms)}function qv(r,e,t,i,a,l){const c=r.Cc(1,e,t),f=[cy(e,i,t)],p=[a];if(l.length%2!=0)throw new te(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)f.push(cy(e,l[I])),p.push(l[I+1]);const g=[],v=fn.empty();for(let I=f.length-1;I>=0;--I)if(!M1(g,f[I])){const O=f[I];let Q=p[I];Q=we(Q);const $=c.yc(O);if(Q instanceof Fh)g.push(O);else{const X=wo(Q,$);X!=null&&(g.push(O),v.set(O,X))}}const T=new zn(g);return new D1(v,T,c.fieldTransforms)}function P1(r,e,t,i=!1){return wo(t,r.Cc(i?4:3,e))}function wo(r,e){if(k1(r=we(r)))return Hv("Unsupported field value:",e,r),O1(r,e);if(r instanceof Eo)return(function(i,a){if(!x1(a.Ac))throw a.Sc(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(i,a){const l=[];let c=0;for(const f of i){let p=wo(f,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(r,e)}return(function(i,a){if((i=we(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return sR(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ye.fromDate(i);return{timestampValue:Yl(a.serializer,l)}}if(i instanceof Ye){const l=new Ye(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Yl(a.serializer,l)}}if(i instanceof Pi)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof vn)return{bytesValue:_R(a.serializer,i._byteString)};if(i instanceof ot){const l=a.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:cv(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof pr)return(function(c,f){return{mapValue:{fields:{[Zy]:{stringValue:ev},[ql]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw f.Sc("VectorValues must only contain numeric values.");return rv(f.serializer,g)}))}}}}}})(i,a);throw a.Sc(`Unsupported field value: ${Dm(i)}`)})(r,e)}function O1(r,e){const t={};return O0(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):la(r,((i,a)=>{const l=wo(a,e.mc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function k1(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ye||r instanceof Pi||r instanceof vn||r instanceof ot||r instanceof Eo||r instanceof pr)}function Hv(r,e,t){if(!k1(t)||!g0(t)){const i=Dm(t);throw i==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+i)}}function cy(r,e,t){if((e=we(e))instanceof ia)return e._internalPath;if(typeof e=="string")return Gv(r,e);throw gm("Field path arguments must be of type string or ",r,!1,void 0,t)}const c4=new RegExp("[~\\*/\\[\\]]");function Gv(r,e,t){if(e.search(c4)>=0)throw gm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new ia(...e.split("."))._internalPath}catch{throw gm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function gm(r,e,t,i,a){const l=i&&!i.isEmpty(),c=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${a}`),p+=")"),new te(q.INVALID_ARGUMENT,f+r+p)}function M1(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,t,i,a,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new h4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($m("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class h4 extends vh{data(){return super.data()}}function $m(r,e){return typeof e=="string"?Gv(r,e):e instanceof ia?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new te(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kv{}class qh extends Kv{}function Ms(r,e,...t){let i=[];e instanceof Kv&&i.push(e),i=i.concat(t),(function(l){const c=l.filter((p=>p instanceof Qv)).length,f=l.filter((p=>p instanceof Wm)).length;if(c>1||c>0&&f>0)throw new te(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const a of i)r=a._apply(r);return r}class Wm extends qh{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Wm(e,t,i)}_apply(e){const t=this._parse(e);return z1(e._query,t),new Nn(e.firestore,e.converter,W_(e._query,t))}_parse(e){const t=To(e.firestore);return(function(l,c,f,p,g,v,T){let I;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new te(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){PA(T,v);const Q=[];for(const $ of T)Q.push(VA(p,l,$));I={arrayValue:{values:Q}}}else I=VA(p,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||PA(T,v),I=P1(f,c,T,v==="in"||v==="not-in");return Ue.create(g,v,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function d4(r,e,t){const i=e,a=$m("where",r);return Wm._create(a,i,t)}class Qv extends Kv{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Qv(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:et.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const f=l.getFlattenedFilters();for(const p of f)z1(c,p),c=W_(c,p)})(e._query,t),new Nn(e.firestore,e.converter,W_(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yv extends qh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Yv(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new te(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new te(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new mh(l,c)})(e._query,this._field,this._direction);return new Nn(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new $r(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function f4(r,e="asc"){const t=e,i=$m("orderBy",r);return Yv._create(i,t)}class Xm extends qh{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new Xm(e,t,i)}_apply(e){return new Nn(e.firestore,e.converter,am(e._query,this._limit,this._limitType))}}function m4(r){return _0("limit",r),Xm._create("limit",r,"F")}function p4(r){return _0("limitToLast",r),Xm._create("limitToLast",r,"L")}class Jm extends qh{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new Jm(e,t,i)}_apply(e){const t=U1(e,this.type,this._docOrFields,this._inclusive);return new Nn(e.firestore,e.converter,(function(a,l){return new $r(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,l,a.endAt)})(e._query,t))}}function g4(...r){return Jm._create("startAt",r,!0)}function _4(...r){return Jm._create("startAfter",r,!1)}class Zm extends qh{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new Zm(e,t,i)}_apply(e){const t=U1(e,this.type,this._docOrFields,this._inclusive);return new Nn(e.firestore,e.converter,(function(a,l){return new $r(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,l)})(e._query,t))}}function y4(...r){return Zm._create("endBefore",r,!1)}function v4(...r){return Zm._create("endAt",r,!0)}function U1(r,e,t,i){if(t[0]=we(t[0]),t[0]instanceof vh)return(function(l,c,f,p,g){if(!p)throw new te(q.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${f}().`);const v=[];for(const T of xl(l))if(T.field.isKeyField())v.push(lo(c,p.key));else{const I=p.data.field(T.field);if(km(I))throw new te(q.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+T.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(I===null){const O=T.field.canonicalString();throw new te(q.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${O}' (used as the orderBy) does not exist.`)}v.push(I)}return new ea(v,g)})(r._query,r.firestore._databaseId,e,t[0]._document,i);{const a=To(r.firestore);return(function(c,f,p,g,v,T){const I=c.explicitOrderBy;if(v.length>I.length)throw new te(q.INVALID_ARGUMENT,`Too many arguments provided to ${g}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const O=[];for(let Q=0;Q<v.length;Q++){const $=v[Q];if(I[Q].field.isKeyField()){if(typeof $!="string")throw new te(q.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${g}(), but got a ${typeof $}`);if(!nv(c)&&$.indexOf("/")!==-1)throw new te(q.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${g}() must be a plain document ID, but '${$}' contains a slash.`);const X=c.path.child(ke.fromString($));if(!oe.isDocumentKey(X))throw new te(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${g}() must result in a valid document path, but '${X}' is not because it contains an odd number of segments.`);const me=new oe(X);O.push(lo(f,me))}else{const X=P1(p,g,$);O.push(X)}}return new ea(O,T)})(r._query,r.firestore._databaseId,a,e,t,i)}}function VA(r,e,t){if(typeof(t=we(t))=="string"){if(t==="")throw new te(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nv(e)&&t.indexOf("/")!==-1)throw new te(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(ke.fromString(t));if(!oe.isDocumentKey(i))throw new te(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return lo(r,new oe(i))}if(t instanceof ot)return lo(r,t._key);throw new te(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dm(t)}.`)}function PA(r,e){if(!Array.isArray(r)||r.length===0)throw new te(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function z1(r,e){const t=(function(a,l){for(const c of a)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new te(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $v{convertValue(e,t="none"){switch(Js(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return la(e,((a,l)=>{i[a]=this.convertValue(l,t)})),i}convertVectorValue(e){var i,a,l;const t=(l=(a=(i=e.fields)==null?void 0:i[ql].arrayValue)==null?void 0:a.values)==null?void 0:l.map((c=>pt(c.doubleValue)));return new pr(t)}convertGeoPoint(e){return new Pi(pt(e.latitude),pt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Mm(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(hh(e));default:return null}}convertTimestamp(e){const t=Gr(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ke.fromString(e);_e(CR(i),9688,{name:e});const a=new Xs(i.get(1),i.get(3)),l=new oe(i.popFirst(5));return a.isEqual(t)||Vt(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(r,e,t){let i;return i=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,i}class E4 extends $v{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}class Za{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let gi=class B1 extends vh{constructor(e,t,i,a,l,c){super(e,t,i,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Jc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field($m("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=B1._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};gi._jsonSchemaVersion="firestore/documentSnapshot/1.0",gi._jsonSchema={type:Kt("string",gi._jsonSchemaVersion),bundleSource:Kt("string","DocumentSnapshot"),bundleName:Kt("string"),bundle:Kt("string")};let Jc=class extends gi{data(e={}){return super.data(e)}},Oi=class j1{constructor(e,t,i,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Za(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Jc(this._firestore,this._userDataWriter,i.key,i,new Za(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((f=>{const p=new Jc(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Za(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const p=new Jc(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Za(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return f.type!==0&&(g=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),v=c.indexOf(f.doc.key)),{type:T4(f.type),doc:p,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=j1._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Gy.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function T4(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:r})}}function F1(r,e){return r instanceof gi&&e instanceof gi?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof Oi&&e instanceof Oi&&r._firestore===e._firestore&&R1(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(r){r=Ge(r,ot);const e=Ge(r.firestore,Ot);return v1(Tn(e),r._key).then((t=>Wv(e,r,t)))}Oi._jsonSchemaVersion="firestore/querySnapshot/1.0",Oi._jsonSchema={type:Kt("string",Oi._jsonSchemaVersion),bundleSource:Kt("string","QuerySnapshot"),bundleName:Kt("string"),bundle:Kt("string")};class bo extends $v{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function b4(r){r=Ge(r,ot);const e=Ge(r.firestore,Ot),t=Tn(e),i=new bo(e);return HL(t,r._key).then((a=>new gi(e,i,r._key,a,new Za(a!==null&&a.hasLocalMutations,!0),r.converter)))}function I4(r){r=Ge(r,ot);const e=Ge(r.firestore,Ot);return v1(Tn(e),r._key,{source:"server"}).then((t=>Wv(e,r,t)))}function A4(r){r=Ge(r,Nn);const e=Ge(r.firestore,Ot),t=Tn(e),i=new bo(e);return L1(r._query),E1(t,r._query).then((a=>new Oi(e,i,r,a)))}function S4(r){r=Ge(r,Nn);const e=Ge(r.firestore,Ot),t=Tn(e),i=new bo(e);return GL(t,r._query).then((a=>new Oi(e,i,r,a)))}function R4(r){r=Ge(r,Nn);const e=Ge(r.firestore,Ot),t=Tn(e),i=new bo(e);return E1(t,r._query,{source:"server"}).then((a=>new Oi(e,i,r,a)))}function OA(r,e,t){r=Ge(r,ot);const i=Ge(r.firestore,Ot),a=ep(r.converter,e,t);return Hh(i,[Ym(To(i),"setDoc",r._key,a,r.converter!==null,t).toMutation(r._key,yt.none())])}function kA(r,e,t,...i){r=Ge(r,ot);const a=Ge(r.firestore,Ot),l=To(a);let c;return c=typeof(e=we(e))=="string"||e instanceof ia?qv(l,"updateDoc",r._key,e,t,i):Fv(l,"updateDoc",r._key,e),Hh(a,[c.toMutation(r._key,yt.exists(!0))])}function C4(r){return Hh(Ge(r.firestore,Ot),[new cu(r._key,yt.none())])}function N4(r,e){const t=Ge(r.firestore,Ot),i=pm(r),a=ep(r.converter,e);return Hh(t,[Ym(To(r.firestore),"addDoc",i._key,a,r.converter!==null,{}).toMutation(i._key,yt.exists(!1))]).then((()=>i))}function q1(r,...e){var p,g,v;r=we(r);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||uy(e[i])||(t=e[i++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(uy(e[i])){const T=e[i];e[i]=(p=T.next)==null?void 0:p.bind(T),e[i+1]=(g=T.error)==null?void 0:g.bind(T),e[i+2]=(v=T.complete)==null?void 0:v.bind(T)}let l,c,f;if(r instanceof ot)c=Ge(r.firestore,Ot),f=lu(r._key.path),l={next:T=>{e[i]&&e[i](Wv(c,r,T))},error:e[i+1],complete:e[i+2]};else{const T=Ge(r,Nn);c=Ge(T.firestore,Ot),f=T._query;const I=new bo(c);l={next:O=>{e[i]&&e[i](new Oi(c,I,T,O))},error:e[i+1],complete:e[i+2]},L1(r._query)}return(function(I,O,Q,$){const X=new Gm($),me=new Nv(O,X,Q);return I.asyncQueue.enqueueAndForget((async()=>Sv(await eu(I),me))),()=>{X.Nu(),I.asyncQueue.enqueueAndForget((async()=>Rv(await eu(I),me)))}})(Tn(c),f,a,l)}function D4(r,e){return KL(Tn(r=Ge(r,Ot)),uy(e)?e:{next:e})}function Hh(r,e){return(function(i,a){const l=new mn;return i.asyncQueue.enqueueAndForget((async()=>vL(await Lv(i),a,l))),l.promise})(Tn(r),e)}function Wv(r,e,t){const i=t.docs.get(e._key),a=new bo(r);return new gi(r,a,e._key,i,new Za(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x4={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let V4=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=To(e)}set(e,t,i){this._verifyNotCommitted();const a=Bs(e,this._firestore),l=ep(a.converter,t,i),c=Ym(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,i);return this._mutations.push(c.toMutation(a._key,yt.none())),this}update(e,t,i,...a){this._verifyNotCommitted();const l=Bs(e,this._firestore);let c;return c=typeof(t=we(t))=="string"||t instanceof ia?qv(this._dataReader,"WriteBatch.update",l._key,t,i,a):Fv(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,yt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Bs(e,this._firestore);return this._mutations=this._mutations.concat(new cu(t._key,yt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Bs(r,e){if((r=we(r)).firestore!==e)throw new te(q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=To(e)}get(e){const t=Bs(e,this._firestore),i=new E4(this._firestore);return this._transaction.lookup([t._key]).then((a=>{if(!a||a.length!==1)return fe(24041);const l=a[0];if(l.isFoundDocument())return new vh(this._firestore,i,l.key,l,t.converter);if(l.isNoDocument())return new vh(this._firestore,i,t._key,null,t.converter);throw fe(18433,{doc:l})}))}set(e,t,i){const a=Bs(e,this._firestore),l=ep(a.converter,t,i),c=Ym(this._dataReader,"Transaction.set",a._key,l,a.converter!==null,i);return this._transaction.set(a._key,c),this}update(e,t,i,...a){const l=Bs(e,this._firestore);let c;return c=typeof(t=we(t))=="string"||t instanceof ia?qv(this._dataReader,"Transaction.update",l._key,t,i,a):Fv(this._dataReader,"Transaction.update",l._key,t),this._transaction.update(l._key,c),this}delete(e){const t=Bs(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O4=class extends P4{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Bs(e,this._firestore),i=new bo(this._firestore);return super.get(e).then((a=>new gi(this._firestore,i,t._key,a._document,new Za(!1,!1),t.converter)))}};function k4(r,e,t){r=Ge(r,Ot);const i={...x4,...t};return(function(l){if(l.maxAttempts<1)throw new te(q.INVALID_ARGUMENT,"Max attempts must be at least 1")})(i),(function(l,c,f){const p=new mn;return l.asyncQueue.enqueueAndForget((async()=>{const g=await jL(l);new zL(l.asyncQueue,g,f,c,p).ju()})),p.promise})(Tn(r),(a=>e(new O4(r,a))),i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M4(){return new Fh("deleteField")}function L4(){return new Uv("serverTimestamp")}function U4(...r){return new zv("arrayUnion",r)}function z4(...r){return new Bv("arrayRemove",r)}function B4(r){return new jv("increment",r)}(function(e,t=!0){(function(a){ou=a})(ra),$s(new gr("firestore",((i,{instanceIdentifier:a,options:l})=>{const c=i.getProvider("app").getImmediate(),f=new Ot(new PO(i.getProvider("auth-internal")),new MO(c,i.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new te(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xs(g.options.projectId,v)})(c,a),c);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Vi(hI,dI,e),Vi(hI,dI,"esm2020")})();const j4="@firebase/firestore-compat",F4="0.4.3";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(r,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new te("invalid-argument",`Invalid options passed to function ${r}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(){if(typeof Uint8Array>"u")throw new te("unimplemented","Uint8Arrays are not available in this environment.")}function LA(){if(!_k())throw new te("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Eh{constructor(e){this._delegate=e}static fromBase64String(e){return LA(),new Eh(vn.fromBase64String(e))}static fromUint8Array(e){return MA(),new Eh(vn.fromUint8Array(e))}toBase64(){return LA(),this._delegate.toBase64()}toUint8Array(){return MA(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(r){return q4(r,["next","error","complete"])}function q4(r,e){if(typeof r!="object"||r===null)return!1;const t=r;for(const i of e)if(i in t&&typeof t[i]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{enableIndexedDbPersistence(e,t){return ZL(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return e4(e._delegate)}clearIndexedDbPersistence(e){return t4(e._delegate)}}class H1{constructor(e,t,i){this._delegate=t,this._persistenceProvider=i,this.INTERNAL={delete:()=>this.terminate()},e instanceof Xs||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&vr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e={...t,...e},delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,i={}){$L(this._delegate,e,t,i)}enableNetwork(){return i4(this._delegate)}disableNetwork(){return r4(this._delegate)}enablePersistence(e){let t=!1,i=!1;return e&&(t=!!e.synchronizeTabs,i=!!e.experimentalForceOwningTab,p0("synchronizeTabs",t,"experimentalForceOwningTab",i)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,i)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return n4(this._delegate)}onSnapshotsInSync(e){return D4(this._delegate,e)}get app(){if(!this._appCompat)throw new te("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new tu(this,A1(this._delegate,e))}catch(t){throw Sn(t,"collection()","Firestore.collection()")}}doc(e){try{return new pi(this,pm(this._delegate,e))}catch(t){throw Sn(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new An(this,WL(this._delegate,e))}catch(t){throw Sn(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return k4(this._delegate,t=>e(new G1(this,t)))}batch(){return Tn(this._delegate),new K1(new V4(this._delegate,e=>Hh(this._delegate,e)))}loadBundle(e){return s4(this._delegate,e)}namedQuery(e){return a4(this._delegate,e).then(t=>t?new An(this,t):null)}}class tp extends $v{constructor(e){super(),this.firestore=e}convertBytes(e){return new Eh(new vn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return pi.forKey(t,this.firestore,null)}}function G4(r){NO(r)}class G1{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new tp(e)}get(e){const t=eo(e);return this._delegate.get(t).then(i=>new Th(this._firestore,new gi(this._firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,t.converter)))}set(e,t,i){const a=eo(e);return i?(Xv("Transaction.set",i),this._delegate.set(a,t,i)):this._delegate.set(a,t),this}update(e,t,i,...a){const l=eo(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,i,...a),this}delete(e){const t=eo(e);return this._delegate.delete(t),this}}class K1{constructor(e){this._delegate=e}set(e,t,i){const a=eo(e);return i?(Xv("WriteBatch.set",i),this._delegate.set(a,t,i)):this._delegate.set(a,t),this}update(e,t,i,...a){const l=eo(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,i,...a),this}delete(e){const t=eo(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class _o{constructor(e,t,i){this._firestore=e,this._userDataWriter=t,this._delegate=i}fromFirestore(e,t){const i=new Jc(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new wh(this._firestore,i),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const i=_o.INSTANCES;let a=i.get(e);a||(a=new WeakMap,i.set(e,a));let l=a.get(t);return l||(l=new _o(e,new tp(e),t),a.set(t,l)),l}}_o.INSTANCES=new WeakMap;class pi{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new tp(e)}static forPath(e,t,i){if(e.length%2!==0)throw new te("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new pi(t,new ot(t._delegate,i,new oe(e)))}static forKey(e,t,i){return new pi(t,new ot(t._delegate,i,e))}get id(){return this._delegate.id}get parent(){return new tu(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new tu(this.firestore,A1(this._delegate,e))}catch(t){throw Sn(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=we(e),e instanceof ot?S1(this._delegate,e):!1}set(e,t){t=Xv("DocumentReference.set",t);try{return t?OA(this._delegate,e,t):OA(this._delegate,e)}catch(i){throw Sn(i,"setDoc()","DocumentReference.set()")}}update(e,t,...i){try{return arguments.length===1?kA(this._delegate,e):kA(this._delegate,e,t,...i)}catch(a){throw Sn(a,"updateDoc()","DocumentReference.update()")}}delete(){return C4(this._delegate)}onSnapshot(...e){const t=Q1(e),i=Y1(e,a=>new Th(this.firestore,new gi(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return q1(this._delegate,t,i)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=b4(this._delegate):(e==null?void 0:e.source)==="server"?t=I4(this._delegate):t=w4(this._delegate),t.then(i=>new Th(this.firestore,new gi(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)))}withConverter(e){return new pi(this.firestore,e?this._delegate.withConverter(_o.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Sn(r,e,t){return r.message=r.message.replace(e,t),r}function Q1(r){for(const e of r)if(typeof e=="object"&&!hy(e))return e;return{}}function Y1(r,e){var i,a;let t;return hy(r[0])?t=r[0]:hy(r[1])?t=r[1]:typeof r[0]=="function"?t={next:r[0],error:r[1],complete:r[2]}:t={next:r[1],error:r[2],complete:r[3]},{next:l=>{t.next&&t.next(e(l))},error:(i=t.error)==null?void 0:i.bind(t),complete:(a=t.complete)==null?void 0:a.bind(t)}}class Th{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new pi(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return F1(this._delegate,e._delegate)}}class wh extends Th{data(e){const t=this._delegate.data(e);return this._delegate._converter||DO(t!==void 0,"Document in a QueryDocumentSnapshot should exist"),t}}class An{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new tp(e)}where(e,t,i){try{return new An(this.firestore,Ms(this._delegate,d4(e,t,i)))}catch(a){throw Sn(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new An(this.firestore,Ms(this._delegate,f4(e,t)))}catch(i){throw Sn(i,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new An(this.firestore,Ms(this._delegate,m4(e)))}catch(t){throw Sn(t,"limit()","Query.limit()")}}limitToLast(e){try{return new An(this.firestore,Ms(this._delegate,p4(e)))}catch(t){throw Sn(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new An(this.firestore,Ms(this._delegate,g4(...e)))}catch(t){throw Sn(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new An(this.firestore,Ms(this._delegate,_4(...e)))}catch(t){throw Sn(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new An(this.firestore,Ms(this._delegate,y4(...e)))}catch(t){throw Sn(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new An(this.firestore,Ms(this._delegate,v4(...e)))}catch(t){throw Sn(t,"endAt()","Query.endAt()")}}isEqual(e){return R1(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=S4(this._delegate):(e==null?void 0:e.source)==="server"?t=R4(this._delegate):t=A4(this._delegate),t.then(i=>new dy(this.firestore,new Oi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)))}onSnapshot(...e){const t=Q1(e),i=Y1(e,a=>new dy(this.firestore,new Oi(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return q1(this._delegate,t,i)}withConverter(e){return new An(this.firestore,e?this._delegate.withConverter(_o.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class K4{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new wh(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class dy{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new An(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new wh(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new K4(this._firestore,t))}forEach(e,t){this._delegate.forEach(i=>{e.call(t,new wh(this._firestore,i))})}isEqual(e){return F1(this._delegate,e._delegate)}}class tu extends An{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new pi(this.firestore,e):null}doc(e){try{return e===void 0?new pi(this.firestore,pm(this._delegate)):new pi(this.firestore,pm(this._delegate,e))}catch(t){throw Sn(t,"doc()","CollectionReference.doc()")}}add(e){return N4(this._delegate,e).then(t=>new pi(this.firestore,t))}isEqual(e){return S1(this._delegate,e._delegate)}withConverter(e){return new tu(this.firestore,e?this._delegate.withConverter(_o.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function eo(r){return Ge(r,ot)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(...e){this._delegate=new ia(...e)}static documentId(){return new Jv(_t.keyField().canonicalString())}isEqual(e){return e=we(e),e instanceof ia?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{static serverTimestamp(){const e=L4();return e._methodName="FieldValue.serverTimestamp",new Wa(e)}static delete(){const e=M4();return e._methodName="FieldValue.delete",new Wa(e)}static arrayUnion(...e){const t=U4(...e);return t._methodName="FieldValue.arrayUnion",new Wa(t)}static arrayRemove(...e){const t=z4(...e);return t._methodName="FieldValue.arrayRemove",new Wa(t)}static increment(e){const t=B4(e);return t._methodName="FieldValue.increment",new Wa(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q4={Firestore:H1,GeoPoint:Pi,Timestamp:Ye,Blob:Eh,Transaction:G1,WriteBatch:K1,DocumentReference:pi,DocumentSnapshot:Th,Query:An,QueryDocumentSnapshot:wh,QuerySnapshot:dy,CollectionReference:tu,FieldPath:Jv,FieldValue:Wa,setLogLevel:G4,CACHE_SIZE_UNLIMITED:JL};function Y4(r,e){r.INTERNAL.registerComponent(new gr("firestore-compat",t=>{const i=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(i,a)},"PUBLIC").setServiceProps({...Q4}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $4(r){Y4(r,(e,t)=>new H1(e,t,new H4)),r.registerVersion(j4,F4)}$4(_r);const W4={apiKey:"AIzaSyC614bGqnYf4Q-weTNemzWENTpa8DjGeHw",authDomain:"mzj-agenda.firebaseapp.com",projectId:"mzj-agenda",storageBucket:"mzj-agenda.firebasestorage.app",messagingSenderId:"834700407721",appId:"1:834700407721:web:75c17665d4f032fd65cab8"};_r.apps.length||_r.initializeApp(W4);const Hf=_r.auth(),mi=_r.firestore(),to=_r.firestore.FieldValue;var tn=(r=>(r.ADMIN="الادارة",r.IDARI="اداري",r.BRANCH="مدراء فروع",r))(tn||{});const X4=()=>{const[r,e]=vt.useState(""),[t,i]=vt.useState(""),[a,l]=vt.useState(""),[c,f]=vt.useState(!1),p=async g=>{if(g.preventDefault(),!r||!t)return l("الرجاء تعبئة جميع الحقول");l(""),f(!0);try{await Hf.signInWithEmailAndPassword(r,t)}catch{l("خطأ في تسجيل الدخول. تأكد من البيانات")}finally{f(!1)}};return M.jsxs("div",{className:"p-6 flex flex-col items-center justify-center min-h-[60vh]",children:[M.jsxs("div",{className:"w-full bg-white border border-mzjLine p-6 rounded-2xl shadow-xl",children:[M.jsx("h2",{className:"text-xl font-black text-mzjBrown mb-6 text-center",children:"تسجيل الدخول"}),M.jsxs("form",{onSubmit:p,className:"space-y-4",children:[M.jsxs("div",{children:[M.jsx("label",{className:"block text-sm font-bold mb-1 text-mzjBrown",children:"البريد الإلكتروني"}),M.jsx("input",{type:"email",value:r,onChange:g=>e(g.target.value),className:"w-full p-3 rounded-xl border border-mzjLine focus:ring-2 focus:ring-mzjBrown outline-none",placeholder:"example@mzj.com"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-sm font-bold mb-1 text-mzjBrown",children:"كلمة المرور"}),M.jsx("input",{type:"password",value:t,onChange:g=>i(g.target.value),className:"w-full p-3 rounded-xl border border-mzjLine focus:ring-2 focus:ring-mzjBrown outline-none",placeholder:"••••••••"})]}),a&&M.jsx("div",{className:"text-red-600 text-xs text-center bg-red-50 p-2 rounded-lg",children:a}),M.jsx("button",{disabled:c,className:"w-full bg-mzjBrown text-white font-black p-3 rounded-xl active:scale-95 transition-all disabled:opacity-50",children:c?"جاري التحقق...":"دخول"})]})]}),M.jsx("p",{className:"mt-6 text-[10px] text-gray-400",children:"نظام إدارة طلبات MZJ — نسخة الجوال 1.0"})]})},J4=["المستودع : المخزون المتاح","المستودع : سيارات بها ملاحظات","المستودع : مباع تحت التسليم","فرع 1 الصالة : المخزون المتاح","فرع 1 الصالة : سيارات بها ملاحظات","فرع 1 الصالة : مباع تحت التسليم","فرع 2 الملتقى : المخزون المتاح","فرع 2 الملتقى : سيارات بها ملاحظات","فرع 2 الملتقى : مباع تحت التسليم","فرع 3 القادسية : المخزون المتاح","فرع 3 القادسية : سيارات بها ملاحظات","فرع 3 القادسية : مباع تحت التسليم"],Z4=({user:r,profile:e})=>{const[t,i]=vt.useState([{id:Date.now(),vin:"",kind:"move",details:null,place:"",note:""}]),[a,l]=vt.useState([]),[c,f]=vt.useState(!1),[p,g]=vt.useState(new Date().toISOString().split("T")[0]),[v,T]=vt.useState({id:0,matches:[]});vt.useEffect(()=>mi.collection("mzj_admin_state").doc("v1").onSnapshot(G=>{var se;G.exists&&l(((se=G.data())==null?void 0:se.stock)||[])}),[]);const I=()=>i([...t,{id:Date.now(),vin:"",kind:"move",details:null,place:"",note:""}]),O=(ne,G,se)=>{i(de=>de.map(le=>{if(le.id===ne){const A={...le,[G]:se};if(G==="vin"){const S=se.trim().toUpperCase();if(S.length>=3){const x=a.filter(D=>D.vin.toUpperCase().includes(S)).slice(0,5);T({id:ne,matches:x})}else T({id:0,matches:[]});const R=a.find(x=>x.vin.toUpperCase()===S);A.details=R||null}return A}return le}))},Q=(ne,G)=>{i(se=>se.map(de=>de.id===ne?{...de,vin:G.vin,details:G}:de)),T({id:0,matches:[]})},$=ne=>{t.length>1&&i(t.filter(G=>G.id!==ne))},X=async()=>{const ne=t.filter(G=>G.vin&&G.place);if(!ne.length)return alert("أدخل VIN والوجهة لصف واحد على الأقل");f(!0);try{const G=ne.map(A=>A.vin.trim().toUpperCase()),se=ne.every(A=>A.kind==="shoot")?"shoot":ne.every(A=>A.kind==="move")?"move":"mixed",de=await mi.collection("requests").add({kind:se,status:"تحت المتابعة",createdAt:to.serverTimestamp(),updatedAt:to.serverTimestamp(),createdByUid:r.uid,createdByEmail:r.email,createdByName:(e==null?void 0:e.name)||r.email,total:ne.length,shootDate:ne.some(A=>A.kind==="shoot")?p:"",vins:G,notes:ne.map(A=>A.note).filter(Boolean).join(" | ").slice(0,300)}),le=mi.batch();ne.forEach(A=>{var R,x,D,k,C,$e,wt;const S={vin:A.vin.trim().toUpperCase(),kind:A.kind,car:((R=A.details)==null?void 0:R.car)||"",variant:((x=A.details)==null?void 0:x.variant)||"",extColor:((D=A.details)==null?void 0:D.extColor)||"",intColor:((k=A.details)==null?void 0:k.intColor)||"",modelYear:((C=A.details)==null?void 0:C.modelYear)||"",location:(($e=A.details)==null?void 0:$e.location)||"",fromLocation:((wt=A.details)==null?void 0:wt.location)||"",shootPlace:A.kind==="shoot"?A.place:"",toLocation:A.kind==="move"?A.place:"",note:A.note||"",steps:{},updatedAt:to.serverTimestamp(),createdAt:to.serverTimestamp()};le.set(de.collection("rows").doc(S.vin),S)}),await le.commit(),alert("تم إرسال الطلب بنجاح ✅"),i([{id:Date.now(),vin:"",kind:"move",details:null,place:"",note:""}])}catch{alert("خطأ في إرسال الطلب")}finally{f(!1)}},me=t.some(ne=>ne.kind==="shoot");return M.jsxs("div",{className:"p-4 flex flex-col gap-4",children:[M.jsxs("div",{className:"bg-white border border-mzjLine p-5 rounded-2xl shadow-sm",children:[M.jsx("h2",{className:"text-xl font-black text-mzjBrown mb-3",children:"إنشاء طلب جديد"}),me&&M.jsxs("div",{className:"flex flex-col gap-2 animate-in slide-in-from-top duration-200",children:[M.jsx("label",{className:"text-[11px] font-black text-gray-400",children:"تاريخ التصوير المتوقع"}),M.jsx("input",{type:"date",value:p,onChange:ne=>g(ne.target.value),className:"w-full p-3 border border-mzjLine rounded-xl bg-mzjCream text-sm font-bold outline-none focus:ring-2 focus:ring-mzjBrown/20"})]}),!me&&M.jsx("p",{className:"text-[10px] text-gray-400 font-bold",children:'تاريخ التصوير يظهر عند اختيار نوع "تصوير"'})]}),M.jsx("div",{className:"flex flex-col gap-4",children:t.map((ne,G)=>M.jsxs("div",{className:"bg-white border border-mzjLine p-5 rounded-[2rem] relative shadow-sm overflow-visible",children:[M.jsxs("div",{className:"absolute top-3 left-3 flex items-center gap-2 z-10",children:[M.jsxs("span",{className:"text-[10px] bg-mzjCream px-3 py-1 rounded-full font-black text-mzjBrown border border-mzjLine",children:["#",G+1]}),M.jsx("button",{onClick:()=>$(ne.id),className:"text-red-300 p-2 active:scale-90 transition-transform",children:M.jsx("i",{className:"fa-solid fa-trash-can text-sm"})})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[M.jsxs("div",{className:"col-span-1",children:[M.jsx("label",{className:"text-[11px] font-black text-mzjBrown mb-1.5 block",children:"نوع الطلب"}),M.jsxs("select",{value:ne.kind,onChange:se=>O(ne.id,"kind",se.target.value),className:"w-full p-3 border border-mzjLine rounded-2xl bg-mzjCream text-xs font-black outline-none appearance-none",children:[M.jsx("option",{value:"move",children:"نقل سيارة"}),M.jsx("option",{value:"shoot",children:"تصوير فقط"})]})]}),M.jsxs("div",{className:"col-span-1",children:[M.jsx("label",{className:"text-[11px] font-black text-mzjBrown mb-1.5 block",children:"الوجهة"}),M.jsxs("select",{value:ne.place,onChange:se=>O(ne.id,"place",se.target.value),className:"w-full p-3 border border-mzjLine rounded-2xl bg-mzjCream text-xs font-black outline-none",children:[M.jsx("option",{value:"",children:"اختر الوجهة"}),J4.map(se=>M.jsx("option",{value:se,children:se},se))]})]}),M.jsxs("div",{className:"col-span-2 relative",children:[M.jsx("label",{className:"text-[11px] font-black text-mzjBrown mb-1.5 block",children:"رقم الهيكل (VIN)"}),M.jsxs("div",{className:"relative",children:[M.jsx("input",{type:"text",value:ne.vin,onChange:se=>O(ne.id,"vin",se.target.value),placeholder:"أدخل VIN...",className:"w-full p-3 pr-4 border border-mzjLine rounded-2xl bg-mzjCream text-xs font-mono uppercase font-black outline-none focus:ring-2 focus:ring-mzjBrown/20"}),v.id===ne.id&&v.matches.length>0&&M.jsx("div",{className:"absolute top-full left-0 right-0 z-[110] mt-2 bg-white border border-mzjLine rounded-2xl shadow-2xl overflow-hidden divide-y divide-mzjLine animate-in fade-in slide-in-from-top-2",children:v.matches.map(se=>M.jsxs("button",{onClick:()=>Q(ne.id,se),className:"w-full p-4 text-right hover:bg-mzjCream active:bg-mzjBeige flex flex-col gap-1",children:[M.jsx("span",{className:"text-xs font-black text-mzjBrown font-mono tracking-wider",children:se.vin}),M.jsxs("div",{className:"flex justify-between items-center w-full",children:[M.jsx("span",{className:"text-[10px] text-gray-500 font-bold",children:se.car}),M.jsx("span",{className:"text-[9px] bg-mzjCream px-2 py-0.5 rounded border border-mzjLine font-black",children:se.location})]})]},se.vin))})]})]}),ne.details&&M.jsxs("div",{className:"col-span-2 bg-mzjCream/60 p-4 rounded-2xl border border-mzjLine border-dashed animate-in zoom-in-95 duration-300",children:[M.jsxs("div",{className:"flex justify-between items-start",children:[M.jsxs("div",{className:"flex flex-col gap-1",children:[M.jsx("p",{className:"font-black text-sm text-mzjBrown",children:ne.details.car}),M.jsx("p",{className:"text-[10px] text-gray-500 font-bold",children:ne.details.variant})]}),M.jsx("span",{className:"bg-white px-2 py-1 rounded-lg border border-mzjLine font-black text-xs",children:ne.details.modelYear})]}),M.jsxs("div",{className:"mt-3 pt-3 border-t border-mzjLine/50 flex items-center justify-between",children:[M.jsxs("p",{className:"text-[10px] text-gray-500 font-bold",children:[M.jsx("i",{className:"fa-solid fa-location-dot ml-1 text-mzjBrown opacity-40"})," الموقع: ",M.jsx("span",{className:"font-black text-mzjBrown",children:ne.details.location})]}),M.jsxs("p",{className:"text-[10px] text-gray-400 font-black",children:[ne.details.extColor," / ",ne.details.intColor]})]})]}),M.jsxs("div",{className:"col-span-2",children:[M.jsx("label",{className:"text-[11px] font-black text-mzjBrown mb-1.5 block",children:"ملاحظات"}),M.jsx("input",{type:"text",value:ne.note,onChange:se=>O(ne.id,"note",se.target.value),placeholder:"ملاحظات اختيارية...",className:"w-full p-3 border border-mzjLine rounded-2xl bg-mzjCream text-xs font-bold outline-none"})]})]})]},ne.id))}),M.jsxs("button",{onClick:I,className:"w-full py-5 border-2 border-dashed border-mzjLine rounded-3xl text-mzjBrown font-black text-xs active:bg-mzjBeige/20 transition-all flex items-center justify-center gap-3",children:[M.jsx("div",{className:"w-8 h-8 rounded-full bg-mzjCream flex items-center justify-center text-mzjBrown border border-mzjLine shadow-sm",children:M.jsx("i",{className:"fa-solid fa-plus"})}),"إضافة سيارة أخرى للطلب"]}),M.jsx("div",{className:"sticky bottom-4 z-50",children:M.jsx("button",{onClick:X,disabled:c,className:"w-full bg-mzjBrown text-white font-black py-5 rounded-3xl shadow-2xl active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3",children:c?M.jsx("div",{className:"w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"}):M.jsxs(M.Fragment,{children:[M.jsx("i",{className:"fa-solid fa-paper-plane text-lg opacity-80"})," إرسال الطلب للمتابعة"]})})})]})},e3=({user:r,profile:e})=>{const[t,i]=vt.useState([]),[a,l]=vt.useState(null),[c,f]=vt.useState([]),[p,g]=vt.useState(!1),[v,T]=vt.useState("pending");vt.useEffect(()=>mi.collection("requests").onSnapshot(se=>{const de=se.docs.map(le=>({id:le.id,...le.data()}));de.sort((le,A)=>{var S,R;return(((S=A.updatedAt)==null?void 0:S.toMillis())||0)-(((R=le.updatedAt)==null?void 0:R.toMillis())||0)}),i(de)}),[]);const I=async G=>{l(G);const se=await mi.collection("requests").doc(G.id).collection("rows").get();f(se.docs.map(de=>({__id:de.id,...de.data()})))},O=()=>{l(null),f([])},Q=(G,se)=>{if((e==null?void 0:e.role)===tn.ADMIN)return!0;const de=(e==null?void 0:e.locations)||[],le=G.fromLocation||G.location||"",A=(G.kind==="shoot"?G.shootPlace:G.toLocation)||"";return se===1||se===2?de.includes(le):se===3?G.kind==="move"?r.email===(a==null?void 0:a.createdByEmail)||r.email==="coo@mzjcars.com":de.includes(A):!1},$=async G=>{if(!a)return;const se=G===1?"received":G===2?"sent":"carReceived",de=c.filter(le=>{var x,D,k,C;const A=!!((D=(x=le.steps)==null?void 0:x[se])!=null&&D.at),S=Q(le,G),R=G===1?!0:G===2?!!((k=le.steps.received)!=null&&k.at):!!((C=le.steps.sent)!=null&&C.at);return S&&!A&&R});if(!de.length)return alert("لا تملك صلاحية لهذه المرحلة أو أنها مكتملة بالفعل أو لم تنتهِ المرحلة السابقة");g(!0);try{const le=mi.batch(),A=to.serverTimestamp(),S={at:A,byUid:r.uid,byEmail:r.email,byName:(e==null?void 0:e.name)||r.email};de.forEach(R=>{const x=R.__id||R.vin,D=mi.collection("requests").doc(a.id).collection("rows").doc(x),k=(R.kind==="shoot"?R.shootPlace:R.toLocation)||"",C={[`steps.${se}`]:S,updatedAt:A};G===3&&k&&(C.location=k),le.update(D,C)}),le.update(mi.collection("requests").doc(a.id),{updatedAt:A}),await le.commit(),G===3&&await X(de),alert(`تم تحديث المرحلة ${G} لعدد ${de.length} مركبة بنجاح`),I(a)}catch(le){console.error(le),alert("حدث خطأ أثناء تحديث الحالة")}finally{g(!1)}},X=async G=>{const se=mi.collection("mzj_admin_state").doc("v1");try{await mi.runTransaction(async de=>{const le=await de.get(se);if(!le.exists)return;const A=le.data()||{},S=Array.isArray(A.stock)?[...A.stock]:[];let R=!1;G.forEach(x=>{const D=x.vin.trim().toUpperCase(),k=(x.kind==="shoot"?x.shootPlace:x.toLocation)||"";if(!k)return;const C=S.findIndex($e=>$e.vin.trim().toUpperCase()===D);C!==-1&&S[C].location!==k&&(S[C]={...S[C],location:k},R=!0)}),R&&de.update(se,{stock:S})}),console.log("Inventory Location Updated Successfully")}catch(de){console.error("Inventory Sync Transaction Failed:",de),alert("تم تحديث الطلب ولكن فشل تحديث الموقع في المخزون الرئيسي، يرجى إبلاغ الإدارة")}},me=async()=>{if(!a)return;if(!c.every(se=>{var de;return!!((de=se.steps.carReceived)!=null&&de.at)}))return alert("الرجاء إتمام جميع المراحل لجميع المركبات (استلام السيارة) أولاً");g(!0);try{await mi.collection("requests").doc(a.id).update({finishedAt:to.serverTimestamp(),finishedByEmail:r.email,finishedByName:(e==null?void 0:e.name)||r.email,status:"مكتملة",updatedAt:to.serverTimestamp()}),alert("تم إنهاء الطلب وأرشفته بنجاح ✅"),O()}catch{alert("خطأ في إنهاء الطلب")}finally{g(!1)}},ne=t.filter(G=>v==="pending"?!G.finishedAt:!!G.finishedAt);return M.jsxs("div",{className:"p-4 pt-0",children:[M.jsxs("div",{className:"flex bg-white border border-mzjLine p-1 rounded-2xl mb-4 shadow-sm",children:[M.jsx("button",{onClick:()=>T("pending"),className:`flex-1 py-3 text-xs font-black rounded-xl transition-all ${v==="pending"?"bg-mzjBrown text-white shadow-lg":"text-gray-400"}`,children:"تحت المتابعة"}),M.jsx("button",{onClick:()=>T("completed"),className:`flex-1 py-3 text-xs font-black rounded-xl transition-all ${v==="completed"?"bg-mzjBrown text-white shadow-lg":"text-gray-400"}`,children:"المكتملة"})]}),M.jsxs("div",{className:"flex flex-col gap-3",children:[ne.map(G=>{var se;return M.jsxs("div",{onClick:()=>I(G),className:"bg-white border border-mzjLine p-4 rounded-2xl shadow-sm active:scale-[0.98] transition-all cursor-pointer",children:[M.jsxs("div",{className:"flex justify-between items-start mb-3",children:[M.jsxs("div",{children:[M.jsxs("span",{className:"text-xs font-black text-mzjBrown bg-mzjCream px-2 py-1 rounded-lg border border-mzjLine",children:["#",G.id.slice(-5)]}),M.jsx("span",{className:`mr-2 text-[10px] px-2 py-1 rounded-full font-bold ${G.kind==="move"?"bg-blue-50 text-blue-600":"bg-orange-50 text-orange-600"}`,children:G.kind==="move"?"نقل":G.kind==="shoot"?"تصوير":"مختلط"})]}),M.jsx("span",{className:"text-[10px] text-gray-400 font-bold",children:new Date(((se=G.createdAt)==null?void 0:se.seconds)*1e3).toLocaleDateString("ar-SA")})]}),M.jsxs("div",{className:"flex flex-col gap-1 text-xs",children:[M.jsxs("p",{className:"text-gray-600 font-bold",children:[M.jsx("i",{className:"fa-solid fa-user-circle text-[12px] ml-1 opacity-40"})," ",G.createdByName]}),G.shootDate&&M.jsxs("p",{className:"text-gray-500",children:[M.jsx("i",{className:"fa-solid fa-camera-retro text-[10px] ml-1 opacity-40"})," موعد التصوير: ",M.jsx("span",{className:"font-black text-mzjBrown",children:G.shootDate})]}),M.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[M.jsxs("span",{className:"bg-mzjCream text-[9px] px-2 py-0.5 rounded border border-mzjLine text-gray-500",children:[G.total," سيارات"]}),G.notes&&M.jsx("p",{className:"text-gray-400 italic text-[10px] line-clamp-1 border-r border-mzjLine pr-2",children:G.notes})]})]})]},G.id)}),ne.length===0&&M.jsxs("div",{className:"text-center py-20 flex flex-col items-center gap-2",children:[M.jsx("i",{className:"fa-solid fa-box-open text-4xl text-mzjLine"}),M.jsx("p",{className:"text-gray-400 font-bold",children:"لا توجد طلبات في هذه القائمة"})]})]}),a&&M.jsx("div",{className:"fixed inset-0 z-[200] bg-black/70 flex items-end sm:items-center justify-center animate-in fade-in duration-200",onClick:O,children:M.jsxs("div",{className:"bg-white w-full max-w-lg h-[92vh] sm:h-auto sm:max-h-[85vh] rounded-t-[2.5rem] sm:rounded-3xl flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-300",onClick:G=>G.stopPropagation(),children:[M.jsx("div",{className:"w-12 h-1 bg-mzjLine rounded-full mx-auto mt-3 mb-1"}),M.jsxs("div",{className:"p-5 border-b border-mzjLine flex items-center justify-between",children:[M.jsxs("div",{children:[M.jsxs("h3",{className:"text-lg font-black text-mzjBrown",children:["طلب #",a.id.slice(-5)]}),M.jsxs("p",{className:"text-[10px] text-gray-500 font-bold",children:["بواسطة: ",a.createdByName]})]}),M.jsx("button",{onClick:O,className:"bg-mzjCream w-10 h-10 rounded-2xl flex items-center justify-center text-mzjBrown active:scale-90",children:M.jsx("i",{className:"fa-solid fa-xmark"})})]}),M.jsx("div",{className:"flex-1 overflow-y-auto p-5 space-y-4 no-scrollbar",children:c.map((G,se)=>{var S,R,x,D,k,C;const de=!!((R=(S=G.steps)==null?void 0:S.received)!=null&&R.at),le=!!((D=(x=G.steps)==null?void 0:x.sent)!=null&&D.at),A=!!((C=(k=G.steps)==null?void 0:k.carReceived)!=null&&C.at);return M.jsxs("div",{className:"bg-mzjCream/40 border border-mzjLine p-4 rounded-2xl space-y-3 shadow-sm",children:[M.jsxs("div",{className:"flex justify-between items-center",children:[M.jsx("span",{className:"font-mono text-[10px] font-black text-mzjBrown bg-white px-3 py-1 rounded-xl border border-mzjLine shadow-sm uppercase",children:G.vin}),M.jsxs("span",{className:"text-[10px] text-gray-300 font-black tracking-widest",children:["#",se+1]})]}),M.jsxs("div",{className:"border-r-4 border-mzjBrown pr-3",children:[M.jsx("h4",{className:"text-xs font-black text-mzjBrown",children:G.car}),M.jsx("p",{className:"text-[10px] text-gray-500 font-bold",children:G.variant})]}),M.jsxs("div",{className:"flex gap-2 items-center text-[10px] text-gray-500 bg-white/50 p-2 rounded-xl border border-mzjLine",children:[M.jsxs("div",{className:"flex-1",children:[M.jsx("p",{className:"text-[8px] font-black text-gray-300 mb-0.5",children:"من"}),M.jsx("p",{className:"font-bold line-clamp-1",children:G.fromLocation})]}),M.jsx("i",{className:"fa-solid fa-circle-arrow-left text-mzjBrown opacity-30 text-lg"}),M.jsxs("div",{className:"flex-1 text-left",children:[M.jsx("p",{className:"text-[8px] font-black text-gray-300 mb-0.5",children:"إلى"}),M.jsx("p",{className:"font-bold line-clamp-1",children:G.kind==="shoot"?G.shootPlace:G.toLocation})]})]}),M.jsxs("div",{className:"pt-2",children:[M.jsxs("div",{className:"flex gap-2 items-center mb-1",children:[M.jsx("div",{className:`flex-1 h-1.5 rounded-full ${de?"bg-mzjBrown":"bg-gray-100"}`}),M.jsx("div",{className:`flex-1 h-1.5 rounded-full ${le?"bg-mzjBrown":"bg-gray-100"}`}),M.jsx("div",{className:`flex-1 h-1.5 rounded-full ${A?"bg-mzjBrown":"bg-gray-100"}`})]}),M.jsxs("div",{className:"grid grid-cols-3 text-[8px] font-black text-center",children:[M.jsx("span",{className:de?"text-mzjBrown":"text-gray-300",children:"1 استلام الطلب"}),M.jsx("span",{className:le?"text-mzjBrown":"text-gray-300",children:"2 إرسال السيارة"}),M.jsx("span",{className:A?"text-mzjBrown":"text-gray-300",children:"3 استلام السيارة"})]})]})]},G.__id)})}),M.jsxs("div",{className:"p-5 bg-mzjCream border-t border-mzjLine grid grid-cols-2 gap-3 pb-8",children:[M.jsx("button",{onClick:()=>$(1),disabled:p,className:"bg-white border border-mzjLine text-mzjBrown font-black text-[10px] p-4 rounded-2xl active:bg-mzjBrown active:text-white transition-all disabled:opacity-30 shadow-sm",children:"1 تم استلام الطلب"}),M.jsx("button",{onClick:()=>$(2),disabled:p,className:"bg-white border border-mzjLine text-mzjBrown font-black text-[10px] p-4 rounded-2xl active:bg-mzjBrown active:text-white transition-all disabled:opacity-30 shadow-sm",children:"2 تم إرسال السيارة"}),M.jsx("button",{onClick:()=>$(3),disabled:p,className:"bg-white border border-mzjLine text-mzjBrown font-black text-[10px] p-4 rounded-2xl active:bg-mzjBrown active:text-white transition-all disabled:opacity-30 shadow-sm",children:"3 تم استلام السيارة"}),M.jsxs("button",{onClick:me,disabled:p||!!a.finishedAt,className:"bg-mzjBrown text-white font-black text-[10px] p-4 rounded-2xl active:scale-[0.97] transition-all shadow-xl disabled:opacity-30",children:[M.jsx("i",{className:"fa-solid fa-check-double ml-1"})," إنهاء الطلب كلياً"]})]})]})})]})},t3={sales:"https://mzj-workflow.vercel.app/sales.m.html",dashboard:"https://mzj-workflow.vercel.app/dashboard.m.html",inventory:"https://mzj-workflow.vercel.app/inventory.m.html",all_cars:"https://mzj-workflow.vercel.app/cars.m.html",admin:"https://mzj-workflow.vercel.app/admin.m.html",activity_log:"https://mzj-workflow.vercel.app/Activity.m.html",movement_log:"https://mzj-workflow.vercel.app/act.m.html"},n3=()=>{const[r,e]=vt.useState(null),[t,i]=vt.useState(null),[a,l]=vt.useState("transfers"),[c,f]=vt.useState(!0),[p,g]=vt.useState(!1);vt.useEffect(()=>Hf.onAuthStateChanged(async $=>{if(e($),$){const X=await mi.collection("user").doc($.uid).get();X.exists&&i(X.data())}else i(null);f(!1)}),[]);const v=[{id:"sales",label:"تتبع المبيعات",icon:"fa-chart-line",role:[tn.ADMIN,tn.IDARI]},{id:"dashboard",label:"الداش بورد",icon:"fa-gauge-high",role:[tn.ADMIN,tn.IDARI]},{id:"inventory",label:"المخزون",icon:"fa-car-side",role:[tn.ADMIN,tn.IDARI,tn.BRANCH]},{id:"transfers",label:"نقل السيارات",icon:"fa-truck-ramp-box",role:[tn.ADMIN,tn.IDARI,tn.BRANCH]},{id:"all_cars",label:"كل السيارات",icon:"fa-layer-group",role:[tn.ADMIN]},{id:"admin",label:"الإدارة",icon:"fa-user-gear",role:[tn.ADMIN]},{id:"activity_log",label:"سجل النشاط",icon:"fa-clock-rotate-left",role:[tn.ADMIN]},{id:"movement_log",label:"سجل الحركات",icon:"fa-route",role:[tn.ADMIN,tn.IDARI]}],T=Q=>{l(Q),g(!1),window.scrollTo(0,0)},I=a!=="transfers",O=()=>{if(!r)return M.jsx(X4,{});if(a==="transfers")return M.jsxs("div",{className:"flex flex-col gap-6 py-4",children:[M.jsx(Z4,{user:r,profile:t}),M.jsx("div",{className:"border-t border-mzjLine mx-4"}),M.jsx(e3,{user:r,profile:t})]});const Q=t3[a];return Q?M.jsx("div",{className:"w-full h-screen overflow-hidden",children:M.jsx("iframe",{src:Q,className:"w-full h-full border-none",title:a})}):M.jsx(i3,{})};return c?M.jsxs("div",{className:"min-h-screen bg-mzjCream flex flex-col items-center justify-center",children:[M.jsx("div",{className:"w-12 h-12 border-4 border-mzjBrown border-t-transparent rounded-full animate-spin"}),M.jsx("p",{className:"mt-4 text-mzjBrown font-bold",children:"جاري التحميل..."})]}):M.jsxs("div",{className:"min-h-screen flex flex-col bg-mzjCream",children:[!I&&r&&M.jsxs("header",{className:"bg-white border-b border-mzjLine px-4 py-3 sticky top-0 z-[100] flex items-center justify-between shadow-sm h-16",children:[M.jsxs("div",{className:"flex items-center gap-4",children:[M.jsx("button",{onClick:()=>g(!0),className:"w-10 h-10 flex items-center justify-center rounded-xl bg-mzjCream text-mzjBrown active:scale-90 transition-transform",children:M.jsx("i",{className:"fa-solid fa-bars-staggered text-lg"})}),M.jsxs("div",{className:"flex flex-col",children:[M.jsx("span",{className:"text-[10px] font-black text-mzjBrown uppercase tracking-widest leading-none",children:"محمد بن ذعار"}),M.jsx("span",{className:"text-xs font-black text-mzjBrown",children:"نقل السيارات"})]})]}),M.jsx("button",{onClick:()=>Hf.signOut(),className:"w-8 h-8 flex items-center justify-center rounded-lg text-red-300",children:M.jsx("i",{className:"fa-solid fa-power-off"})})]}),p&&M.jsxs(M.Fragment,{children:[M.jsx("div",{className:"fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm animate-in fade-in duration-300",onClick:()=>g(!1)}),M.jsxs("div",{className:"fixed inset-y-0 right-0 z-[201] w-[80%] max-w-xs bg-white shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col",children:[M.jsxs("div",{className:"p-6 border-b border-mzjLine bg-mzjCream/30",children:[M.jsxs("div",{className:"flex items-center justify-between mb-4",children:[M.jsx("div",{className:"bg-mzjBrown text-white px-3 py-1 rounded-lg text-xs font-black tracking-widest",children:"MZJ"}),M.jsx("button",{onClick:()=>g(!1),className:"text-gray-400 p-2",children:M.jsx("i",{className:"fa-solid fa-xmark text-xl"})})]}),M.jsx("p",{className:"text-[10px] font-black text-gray-400 uppercase tracking-tighter",children:"مرحباً بك"}),M.jsx("h2",{className:"text-lg font-black text-mzjBrown truncate",children:(t==null?void 0:t.name)||(r==null?void 0:r.email)}),M.jsx("p",{className:"text-[10px] text-mzjBrown font-bold bg-white inline-block px-2 py-0.5 rounded border border-mzjLine mt-1",children:t==null?void 0:t.role})]}),M.jsx("nav",{className:"flex-1 overflow-y-auto p-4 space-y-1 no-scrollbar",children:v.map(Q=>{if(!((t==null?void 0:t.role)===tn.ADMIN||Q.role.includes(t==null?void 0:t.role)))return null;const X=a===Q.id;return M.jsxs("button",{onClick:()=>T(Q.id),className:`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${X?"bg-mzjBrown text-white font-black shadow-lg translate-x-1":"text-gray-500 active:bg-mzjCream/50"}`,children:[M.jsx("div",{className:`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${X?"bg-white/20":"bg-mzjCream"}`,children:M.jsx("i",{className:`fa-solid ${Q.icon} text-sm`})}),M.jsx("span",{className:"text-sm",children:Q.label}),X&&M.jsx("i",{className:"fa-solid fa-chevron-left mr-auto text-[10px] opacity-50"})]},Q.id)})}),M.jsx("div",{className:"p-6 border-t border-mzjLine",children:M.jsxs("button",{onClick:()=>Hf.signOut(),className:"w-full flex items-center justify-center gap-2 p-3 text-red-500 font-bold text-xs",children:[M.jsx("i",{className:"fa-solid fa-power-off"}),"تسجيل الخروج"]})})]})]}),M.jsx("main",{className:`flex-1 w-full ${a==="transfers"?"max-w-lg mx-auto":""}`,children:O()})]})},i3=()=>M.jsxs("div",{className:"p-20 text-center flex flex-col items-center gap-4",children:[M.jsx("i",{className:"fa-solid fa-lock text-4xl text-red-200"}),M.jsx("p",{className:"text-gray-500 font-bold",children:"غير مصرح لك بدخول هذه الصفحة"})]}),$1=document.getElementById("root");if(!$1)throw new Error("Could not find root element to mount to");const r3=LN.createRoot($1);r3.render(M.jsx(NN.StrictMode,{children:M.jsx(n3,{})}));
