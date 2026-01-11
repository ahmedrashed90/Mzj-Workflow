(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function BA(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var e_={exports:{}},vc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ew;function NN(){if(Ew)return vc;Ew=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:r,type:i,key:c,ref:a!==void 0?a:null,props:l}}return vc.Fragment=e,vc.jsx=t,vc.jsxs=t,vc}var Tw;function DN(){return Tw||(Tw=1,e_.exports=NN()),e_.exports}var M=DN(),t_={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bw;function xN(){if(bw)return Se;bw=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.iterator;function D(P){return P===null||typeof P!="object"?null:(P=w&&P[w]||P["@@iterator"],typeof P=="function"?P:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,H={};function J(P,ee,ce){this.props=P,this.context=ee,this.refs=H,this.updater=ce||Y}J.prototype.isReactComponent={},J.prototype.setState=function(P,ee){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ee,"setState")},J.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function re(){}re.prototype=J.prototype;function se(P,ee,ce){this.props=P,this.context=ee,this.refs=H,this.updater=ce||Y}var _e=se.prototype=new re;_e.constructor=se,O(_e,J.prototype),_e.isPureReactComponent=!0;var we=Array.isArray;function me(){}var S={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function N(P,ee,ce){var de=ce.ref;return{$$typeof:r,type:P,key:ee,ref:de!==void 0?de:null,props:ce}}function k(P,ee){return N(P.type,ee,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function U(P){var ee={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ce){return ee[ce]})}var R=/\/+/g;function dt(P,ee){return typeof P=="object"&&P!==null&&P.key!=null?U(""+P.key):ee.toString(36)}function Kt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(me,me):(P.status="pending",P.then(function(ee){P.status==="pending"&&(P.status="fulfilled",P.value=ee)},function(ee){P.status==="pending"&&(P.status="rejected",P.reason=ee)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function $(P,ee,ce,de,Ie){var De=typeof P;(De==="undefined"||De==="boolean")&&(P=null);var Be=!1;if(P===null)Be=!0;else switch(De){case"bigint":case"string":case"number":Be=!0;break;case"object":switch(P.$$typeof){case r:case e:Be=!0;break;case v:return Be=P._init,$(Be(P._payload),ee,ce,de,Ie)}}if(Be)return Ie=Ie(P),Be=de===""?"."+dt(P,0):de,we(Ie)?(ce="",Be!=null&&(ce=Be.replace(R,"$&/")+"/"),$(Ie,ee,ce,"",function(ha){return ha})):Ie!=null&&(V(Ie)&&(Ie=k(Ie,ce+(Ie.key==null||P&&P.key===Ie.key?"":(""+Ie.key).replace(R,"$&/")+"/")+Be)),ee.push(Ie)),1;Be=0;var Qt=de===""?".":de+":";if(we(P))for(var ft=0;ft<P.length;ft++)de=P[ft],De=Qt+dt(de,ft),Be+=$(de,ee,ce,De,Ie);else if(ft=D(P),typeof ft=="function")for(P=ft.call(P),ft=0;!(de=P.next()).done;)de=de.value,De=Qt+dt(de,ft++),Be+=$(de,ee,ce,De,Ie);else if(De==="object"){if(typeof P.then=="function")return $(Kt(P),ee,ce,de,Ie);throw ee=String(P),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Be}function ue(P,ee,ce){if(P==null)return P;var de=[],Ie=0;return $(P,de,"","",function(De){return ee.call(ce,De,Ie++)}),de}function Ee(P){if(P._status===-1){var ee=P._result;ee=ee(),ee.then(function(ce){(P._status===0||P._status===-1)&&(P._status=1,P._result=ce)},function(ce){(P._status===0||P._status===-1)&&(P._status=2,P._result=ce)}),P._status===-1&&(P._status=0,P._result=ee)}if(P._status===1)return P._result.default;throw P._result}var je=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},We={map:ue,forEach:function(P,ee,ce){ue(P,function(){ee.apply(this,arguments)},ce)},count:function(P){var ee=0;return ue(P,function(){ee++}),ee},toArray:function(P){return ue(P,function(ee){return ee})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return Se.Activity=T,Se.Children=We,Se.Component=J,Se.Fragment=t,Se.Profiler=a,Se.PureComponent=se,Se.StrictMode=i,Se.Suspense=p,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,Se.__COMPILER_RUNTIME={__proto__:null,c:function(P){return S.H.useMemoCache(P)}},Se.cache=function(P){return function(){return P.apply(null,arguments)}},Se.cacheSignal=function(){return null},Se.cloneElement=function(P,ee,ce){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var de=O({},P.props),Ie=P.key;if(ee!=null)for(De in ee.key!==void 0&&(Ie=""+ee.key),ee)!A.call(ee,De)||De==="key"||De==="__self"||De==="__source"||De==="ref"&&ee.ref===void 0||(de[De]=ee[De]);var De=arguments.length-2;if(De===1)de.children=ce;else if(1<De){for(var Be=Array(De),Qt=0;Qt<De;Qt++)Be[Qt]=arguments[Qt+2];de.children=Be}return N(P.type,Ie,de)},Se.createContext=function(P){return P={$$typeof:c,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:l,_context:P},P},Se.createElement=function(P,ee,ce){var de,Ie={},De=null;if(ee!=null)for(de in ee.key!==void 0&&(De=""+ee.key),ee)A.call(ee,de)&&de!=="key"&&de!=="__self"&&de!=="__source"&&(Ie[de]=ee[de]);var Be=arguments.length-2;if(Be===1)Ie.children=ce;else if(1<Be){for(var Qt=Array(Be),ft=0;ft<Be;ft++)Qt[ft]=arguments[ft+2];Ie.children=Qt}if(P&&P.defaultProps)for(de in Be=P.defaultProps,Be)Ie[de]===void 0&&(Ie[de]=Be[de]);return N(P,De,Ie)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(P){return{$$typeof:f,render:P}},Se.isValidElement=V,Se.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:Ee}},Se.memo=function(P,ee){return{$$typeof:g,type:P,compare:ee===void 0?null:ee}},Se.startTransition=function(P){var ee=S.T,ce={};S.T=ce;try{var de=P(),Ie=S.S;Ie!==null&&Ie(ce,de),typeof de=="object"&&de!==null&&typeof de.then=="function"&&de.then(me,je)}catch(De){je(De)}finally{ee!==null&&ce.types!==null&&(ee.types=ce.types),S.T=ee}},Se.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},Se.use=function(P){return S.H.use(P)},Se.useActionState=function(P,ee,ce){return S.H.useActionState(P,ee,ce)},Se.useCallback=function(P,ee){return S.H.useCallback(P,ee)},Se.useContext=function(P){return S.H.useContext(P)},Se.useDebugValue=function(){},Se.useDeferredValue=function(P,ee){return S.H.useDeferredValue(P,ee)},Se.useEffect=function(P,ee){return S.H.useEffect(P,ee)},Se.useEffectEvent=function(P){return S.H.useEffectEvent(P)},Se.useId=function(){return S.H.useId()},Se.useImperativeHandle=function(P,ee,ce){return S.H.useImperativeHandle(P,ee,ce)},Se.useInsertionEffect=function(P,ee){return S.H.useInsertionEffect(P,ee)},Se.useLayoutEffect=function(P,ee){return S.H.useLayoutEffect(P,ee)},Se.useMemo=function(P,ee){return S.H.useMemo(P,ee)},Se.useOptimistic=function(P,ee){return S.H.useOptimistic(P,ee)},Se.useReducer=function(P,ee,ce){return S.H.useReducer(P,ee,ce)},Se.useRef=function(P){return S.H.useRef(P)},Se.useState=function(P){return S.H.useState(P)},Se.useSyncExternalStore=function(P,ee,ce){return S.H.useSyncExternalStore(P,ee,ce)},Se.useTransition=function(){return S.H.useTransition()},Se.version="19.2.3",Se}var ww;function fy(){return ww||(ww=1,t_.exports=xN()),t_.exports}var ht=fy();const VN=BA(ht);var n_={exports:{}},Ec={},i_={exports:{}},r_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iw;function PN(){return Iw||(Iw=1,(function(r){function e($,ue){var Ee=$.length;$.push(ue);e:for(;0<Ee;){var je=Ee-1>>>1,We=$[je];if(0<a(We,ue))$[je]=ue,$[Ee]=We,Ee=je;else break e}}function t($){return $.length===0?null:$[0]}function i($){if($.length===0)return null;var ue=$[0],Ee=$.pop();if(Ee!==ue){$[0]=Ee;e:for(var je=0,We=$.length,P=We>>>1;je<P;){var ee=2*(je+1)-1,ce=$[ee],de=ee+1,Ie=$[de];if(0>a(ce,Ee))de<We&&0>a(Ie,ce)?($[je]=Ie,$[de]=Ee,je=de):($[je]=ce,$[ee]=Ee,je=ee);else if(de<We&&0>a(Ie,Ee))$[je]=Ie,$[de]=Ee,je=de;else break e}}return ue}function a($,ue){var Ee=$.sortIndex-ue.sortIndex;return Ee!==0?Ee:$.id-ue.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],g=[],v=1,T=null,w=3,D=!1,Y=!1,O=!1,H=!1,J=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;function _e($){for(var ue=t(g);ue!==null;){if(ue.callback===null)i(g);else if(ue.startTime<=$)i(g),ue.sortIndex=ue.expirationTime,e(p,ue);else break;ue=t(g)}}function we($){if(O=!1,_e($),!Y)if(t(p)!==null)Y=!0,me||(me=!0,U());else{var ue=t(g);ue!==null&&Kt(we,ue.startTime-$)}}var me=!1,S=-1,A=5,N=-1;function k(){return H?!0:!(r.unstable_now()-N<A)}function V(){if(H=!1,me){var $=r.unstable_now();N=$;var ue=!0;try{e:{Y=!1,O&&(O=!1,re(S),S=-1),D=!0;var Ee=w;try{t:{for(_e($),T=t(p);T!==null&&!(T.expirationTime>$&&k());){var je=T.callback;if(typeof je=="function"){T.callback=null,w=T.priorityLevel;var We=je(T.expirationTime<=$);if($=r.unstable_now(),typeof We=="function"){T.callback=We,_e($),ue=!0;break t}T===t(p)&&i(p),_e($)}else i(p);T=t(p)}if(T!==null)ue=!0;else{var P=t(g);P!==null&&Kt(we,P.startTime-$),ue=!1}}break e}finally{T=null,w=Ee,D=!1}ue=void 0}}finally{ue?U():me=!1}}}var U;if(typeof se=="function")U=function(){se(V)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,dt=R.port2;R.port1.onmessage=V,U=function(){dt.postMessage(null)}}else U=function(){J(V,0)};function Kt($,ue){S=J(function(){$(r.unstable_now())},ue)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function($){$.callback=null},r.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<$?Math.floor(1e3/$):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_next=function($){switch(w){case 1:case 2:case 3:var ue=3;break;default:ue=w}var Ee=w;w=ue;try{return $()}finally{w=Ee}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function($,ue){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Ee=w;w=$;try{return ue()}finally{w=Ee}},r.unstable_scheduleCallback=function($,ue,Ee){var je=r.unstable_now();switch(typeof Ee=="object"&&Ee!==null?(Ee=Ee.delay,Ee=typeof Ee=="number"&&0<Ee?je+Ee:je):Ee=je,$){case 1:var We=-1;break;case 2:We=250;break;case 5:We=1073741823;break;case 4:We=1e4;break;default:We=5e3}return We=Ee+We,$={id:v++,callback:ue,priorityLevel:$,startTime:Ee,expirationTime:We,sortIndex:-1},Ee>je?($.sortIndex=Ee,e(g,$),t(p)===null&&$===t(g)&&(O?(re(S),S=-1):O=!0,Kt(we,Ee-je))):($.sortIndex=We,e(p,$),Y||D||(Y=!0,me||(me=!0,U()))),$},r.unstable_shouldYield=k,r.unstable_wrapCallback=function($){var ue=w;return function(){var Ee=w;w=ue;try{return $.apply(this,arguments)}finally{w=Ee}}}})(r_)),r_}var Aw;function ON(){return Aw||(Aw=1,i_.exports=PN()),i_.exports}var s_={exports:{}},pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sw;function kN(){if(Sw)return pn;Sw=1;var r=fy();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:v}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,pn.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},pn.flushSync=function(p){var g=c.T,v=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=g,i.p=v,i.d.f()}},pn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},pn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},pn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,T=f(v,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:D}):v==="script"&&i.d.X(p,{crossOrigin:T,integrity:w,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},pn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=f(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},pn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,T=f(v,g.crossOrigin);i.d.L(p,v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},pn.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=f(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},pn.requestFormReset=function(p){i.d.r(p)},pn.unstable_batchedUpdates=function(p,g){return p(g)},pn.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},pn.useFormStatus=function(){return c.H.useHostTransitionStatus()},pn.version="19.2.3",pn}var Rw;function MN(){if(Rw)return s_.exports;Rw=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),s_.exports=kN(),s_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cw;function LN(){if(Cw)return Ec;Cw=1;var r=ON(),e=fy(),t=MN();function i(n){var s="https://react.dev/errors/"+n;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function c(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function f(n){if(n.tag===31){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function p(n){if(l(n)!==n)throw Error(i(188))}function g(n){var s=n.alternate;if(!s){if(s=l(n),s===null)throw Error(i(188));return s!==n?null:n}for(var o=n,u=s;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return p(d),n;if(m===u)return p(d),s;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=d,u=m;else{for(var y=!1,b=d.child;b;){if(b===o){y=!0,o=d,u=m;break}if(b===u){y=!0,u=d,o=m;break}b=b.sibling}if(!y){for(b=m.child;b;){if(b===o){y=!0,o=m,u=d;break}if(b===u){y=!0,u=m,o=d;break}b=b.sibling}if(!y)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:s}function v(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n;for(n=n.child;n!==null;){if(s=v(n),s!==null)return s;n=n.sibling}return null}var T=Object.assign,w=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),re=Symbol.for("react.consumer"),se=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),we=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function U(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var R=Symbol.for("react.client.reference");function dt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===R?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case J:return"Profiler";case H:return"StrictMode";case we:return"Suspense";case me:return"SuspenseList";case N:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case Y:return"Portal";case se:return n.displayName||"Context";case re:return(n._context.displayName||"Context")+".Consumer";case _e:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case S:return s=n.displayName||null,s!==null?s:dt(n.type)||"Memo";case A:s=n._payload,n=n._init;try{return dt(n(s))}catch{}}return null}var Kt=Array.isArray,$=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ee={pending:!1,data:null,method:null,action:null},je=[],We=-1;function P(n){return{current:n}}function ee(n){0>We||(n.current=je[We],je[We]=null,We--)}function ce(n,s){We++,je[We]=n.current,n.current=s}var de=P(null),Ie=P(null),De=P(null),Be=P(null);function Qt(n,s){switch(ce(De,s),ce(Ie,n),ce(de,null),s.nodeType){case 9:case 11:n=(n=s.documentElement)&&(n=n.namespaceURI)?qb(n):0;break;default:if(n=s.tagName,s=s.namespaceURI)s=qb(s),n=Hb(s,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ee(de),ce(de,n)}function ft(){ee(de),ee(Ie),ee(De)}function ha(n){n.memoizedState!==null&&ce(Be,n);var s=de.current,o=Hb(s,n.type);s!==o&&(ce(Ie,n),ce(de,o))}function Io(n){Ie.current===n&&(ee(de),ee(Ie)),Be.current===n&&(ee(Be),pc._currentValue=Ee)}var Ao,So;function ki(n){if(Ao===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Ao=s&&s[1]||"",So=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ao+n+So}var pu=!1;function da(n,s){if(!n||pu)return"";pu=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(Q){var q=Q}Reflect.construct(n,[],Z)}else{try{Z.call()}catch(Q){q=Q}n.call(Z.prototype)}}else{try{throw Error()}catch(Q){q=Q}(Z=n())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(Q){if(Q&&q&&typeof Q.stack=="string")return[Q.stack,q.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),y=m[0],b=m[1];if(y&&b){var C=y.split(`
`),j=b.split(`
`);for(d=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;d<j.length&&!j[d].includes("DetermineComponentFrameRoot");)d++;if(u===C.length||d===j.length)for(u=C.length-1,d=j.length-1;1<=u&&0<=d&&C[u]!==j[d];)d--;for(;1<=u&&0<=d;u--,d--)if(C[u]!==j[d]){if(u!==1||d!==1)do if(u--,d--,0>d||C[u]!==j[d]){var W=`
`+C[u].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=u&&0<=d);break}}}finally{pu=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?ki(o):""}function gu(n,s){switch(n.tag){case 26:case 27:case 5:return ki(n.type);case 16:return ki("Lazy");case 13:return n.child!==s&&s!==null?ki("Suspense Fallback"):ki("Suspense");case 19:return ki("SuspenseList");case 0:case 15:return da(n.type,!1);case 11:return da(n.type.render,!1);case 1:return da(n.type,!0);case 31:return ki("Activity");default:return""}}function _u(n){try{var s="",o=null;do s+=gu(n,o),o=n,n=n.return;while(n);return s}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var Ot=Object.prototype.hasOwnProperty,Yt=r.unstable_scheduleCallback,Jr=r.unstable_cancelCallback,np=r.unstable_shouldYield,Gh=r.unstable_requestPaint,Tn=r.unstable_now,fa=r.unstable_getCurrentPriorityLevel,yu=r.unstable_ImmediatePriority,vu=r.unstable_UserBlockingPriority,Zr=r.unstable_NormalPriority,ip=r.unstable_LowPriority,Kh=r.unstable_IdlePriority,Qh=r.log,Yh=r.unstable_setDisableYieldValue,_i=null,sn=null;function ei(n){if(typeof Qh=="function"&&Yh(n),sn&&typeof sn.setStrictMode=="function")try{sn.setStrictMode(_i,n)}catch{}}var Rt=Math.clz32?Math.clz32:$h,Wh=Math.log,Ro=Math.LN2;function $h(n){return n>>>=0,n===0?32:31-(Wh(n)/Ro|0)|0}var Mi=256,ma=262144,kt=4194304;function Li(n){var s=n&42;if(s!==0)return s;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ui(n,s,o){var u=n.pendingLanes;if(u===0)return 0;var d=0,m=n.suspendedLanes,y=n.pingedLanes;n=n.warmLanes;var b=u&134217727;return b!==0?(u=b&~m,u!==0?d=Li(u):(y&=b,y!==0?d=Li(y):o||(o=b&~n,o!==0&&(d=Li(o))))):(b=u&~m,b!==0?d=Li(b):y!==0?d=Li(y):o||(o=u&~n,o!==0&&(d=Li(o)))),d===0?0:s!==0&&s!==d&&(s&m)===0&&(m=d&-d,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:d}function yi(n,s){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&s)===0}function rp(n,s){switch(n){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xh(){var n=kt;return kt<<=1,(kt&62914560)===0&&(kt=4194304),n}function zi(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function pa(n,s){n.pendingLanes|=s,s!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function sp(n,s,o,u,d,m){var y=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var b=n.entanglements,C=n.expirationTimes,j=n.hiddenUpdates;for(o=y&~o;0<o;){var W=31-Rt(o),Z=1<<W;b[W]=0,C[W]=-1;var q=j[W];if(q!==null)for(j[W]=null,W=0;W<q.length;W++){var Q=q[W];Q!==null&&(Q.lane&=-536870913)}o&=~Z}u!==0&&ga(n,u,0),m!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=m&~(y&~s))}function ga(n,s,o){n.pendingLanes|=s,n.suspendedLanes&=~s;var u=31-Rt(s);n.entangledLanes|=s,n.entanglements[u]=n.entanglements[u]|1073741824|o&261930}function Eu(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-Rt(o),d=1<<u;d&s|n[u]&s&&(n[u]|=s),o&=~d}}function Tu(n,s){var o=s&-s;return o=(o&42)!==0?1:_a(o),(o&(n.suspendedLanes|s))!==0?0:o}function _a(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Er(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Jh(){var n=ue.p;return n!==0?n:(n=window.event,n===void 0?32:fw(n.type))}function vi(n,s){var o=ue.p;try{return ue.p=n,s()}finally{ue.p=o}}var Ei=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Ei,Jt="__reactProps$"+Ei,Bi="__reactContainer$"+Ei,Co="__reactEvents$"+Ei,ap="__reactListeners$"+Ei,Zh="__reactHandles$"+Ei,ed="__reactResources$"+Ei,Fi="__reactMarker$"+Ei;function No(n){delete n[Mt],delete n[Jt],delete n[Co],delete n[ap],delete n[Zh]}function ji(n){var s=n[Mt];if(s)return s;for(var o=n.parentNode;o;){if(s=o[Bi]||o[Mt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=Xb(n);n!==null;){if(o=n[Mt])return o;n=Xb(n)}return s}n=o,o=n.parentNode}return null}function ti(n){if(n=n[Mt]||n[Bi]){var s=n.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return n}return null}function Bn(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n.stateNode;throw Error(i(33))}function qi(n){var s=n[ed];return s||(s=n[ed]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Lt(n){n[Fi]=!0}var bu=new Set,wu={};function Hi(n,s){Gi(n,s),Gi(n+"Capture",s)}function Gi(n,s){for(wu[n]=s,n=0;n<s.length;n++)bu.add(s[n])}var Iu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Au={},Su={};function td(n){return Ot.call(Su,n)?!0:Ot.call(Au,n)?!1:Iu.test(n)?Su[n]=!0:(Au[n]=!0,!1)}function Do(n,s,o){if(td(s))if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(s);return}}n.setAttribute(s,""+o)}}function Fn(n,s,o){if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttribute(s,""+o)}}function Ut(n,s,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(s,o,""+u)}}function Zt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function es(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ru(n,s,o){var u=Object.getOwnPropertyDescriptor(n.constructor.prototype,s);if(!n.hasOwnProperty(s)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var d=u.get,m=u.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(y){o=""+y,m.call(this,y)}}),Object.defineProperty(n,s,{enumerable:u.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function $e(n){if(!n._valueTracker){var s=es(n)?"checked":"value";n._valueTracker=Ru(n,s,""+n[s])}}function ya(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=es(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function Ki(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var va=/[\n"\\]/g;function Nn(n){return n.replace(va,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function xo(n,s,o,u,d,m,y,b){n.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?n.type=y:n.removeAttribute("type"),s!=null?y==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+Zt(s)):n.value!==""+Zt(s)&&(n.value=""+Zt(s)):y!=="submit"&&y!=="reset"||n.removeAttribute("value"),s!=null?Cu(n,y,Zt(s)):o!=null?Cu(n,y,Zt(o)):u!=null&&n.removeAttribute("value"),d==null&&m!=null&&(n.defaultChecked=!!m),d!=null&&(n.checked=d&&typeof d!="function"&&typeof d!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.name=""+Zt(b):n.removeAttribute("name")}function nd(n,s,o,u,d,m,y,b){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){$e(n);return}o=o!=null?""+Zt(o):"",s=s!=null?""+Zt(s):o,b||s===n.value||(n.value=s),n.defaultValue=s}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=b?n.checked:!!u,n.defaultChecked=!!u,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(n.name=y),$e(n)}function Cu(n,s,o){s==="number"&&Ki(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function ts(n,s,o,u){if(n=n.options,s){s={};for(var d=0;d<o.length;d++)s["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=s.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Zt(o),s=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function id(n,s,o){if(s!=null&&(s=""+Zt(s),s!==n.value&&(n.value=s),o==null)){n.defaultValue!==s&&(n.defaultValue=s);return}n.defaultValue=o!=null?""+Zt(o):""}function ns(n,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(i(92));if(Kt(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=Zt(s),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u),$e(n)}function Dn(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var rd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nu(n,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(s,""):s==="float"?n.cssFloat="":n[s]="":u?n.setProperty(s,o):typeof o!="number"||o===0||rd.has(s)?s==="float"?n.cssFloat=o:n[s]=(""+o).trim():n[s]=o+"px"}function Du(n,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var d in s)u=s[d],s.hasOwnProperty(d)&&o[d]!==u&&Nu(n,d,u)}else for(var m in s)s.hasOwnProperty(m)&&Nu(n,m,s[m])}function Vo(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),is=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Po(n){return is.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Ti(){}var xu=null;function ni(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rs=null,Qi=null;function Ea(n){var s=ti(n);if(s&&(n=s.stateNode)){var o=n[Jt]||null;e:switch(n=s.stateNode,s.type){case"input":if(xo(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Nn(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var d=u[Jt]||null;if(!d)throw Error(i(90));xo(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===n.form&&ya(u)}break e;case"textarea":id(n,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&ts(n,!!o.multiple,s,!1)}}}var Oo=!1;function ss(n,s,o){if(Oo)return n(s,o);Oo=!0;try{var u=n(s);return u}finally{if(Oo=!1,(rs!==null||Qi!==null)&&(Jd(),rs&&(s=rs,n=Qi,Qi=rs=null,Ea(s),n)))for(s=0;s<n.length;s++)Ea(n[s])}}function bi(n,s){var o=n.stateNode;if(o===null)return null;var u=o[Jt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ta=!1;if(ii)try{var tt={};Object.defineProperty(tt,"passive",{get:function(){Ta=!0}}),window.addEventListener("test",tt,tt),window.removeEventListener("test",tt,tt)}catch{Ta=!1}var Yi=null,Vu=null,ba=null;function Pu(){if(ba)return ba;var n,s=Vu,o=s.length,u,d="value"in Yi?Yi.value:Yi.textContent,m=d.length;for(n=0;n<o&&s[n]===d[n];n++);var y=o-n;for(u=1;u<=y&&s[o-u]===d[m-u];u++);return ba=d.slice(n,1<u?1-u:void 0)}function wa(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Tr(){return!0}function wi(){return!1}function an(n){function s(o,u,d,m,y){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=y,this.currentTarget=null;for(var b in n)n.hasOwnProperty(b)&&(o=n[b],this[b]=o?o(m):m[b]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Tr:wi,this.isPropagationStopped=wi,this}return T(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Tr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Tr)},persist:function(){},isPersistent:Tr}),s}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wi=an(br),as=T({},br,{view:0,detail:0}),Ou=an(as),os,ko,$i,Mo=T({},as,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ls,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==$i&&($i&&n.type==="mousemove"?(os=n.screenX-$i.screenX,ko=n.screenY-$i.screenY):ko=os=0,$i=n),os)},movementY:function(n){return"movementY"in n?n.movementY:ko}}),ku=an(Mo),Ia=T({},Mo,{dataTransfer:0}),ad=an(Ia),od=T({},as,{relatedTarget:0}),Aa=an(od),Mu=T({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),ld=an(Mu),Lo=T({},br,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ud=an(Lo),cd=T({},br,{data:0}),Xi=an(cd),hd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function md(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=fd[n])?!!s[n]:!1}function ls(){return md}var bn=T({},as,{key:function(n){if(n.key){var s=hd[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=wa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dd[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ls,charCode:function(n){return n.type==="keypress"?wa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),pd=an(bn),gd=T({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wr=an(gd),h=T({},as,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ls}),_=an(h),E=T({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),I=an(E),B=T({},Mo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),K=an(B),ae=T({},br,{newState:0,oldState:0}),Re=an(ae),Ct=[9,13,27,32],Ke=ii&&"CompositionEvent"in window,mt=null;ii&&"documentMode"in document&&(mt=document.documentMode);var ri=ii&&"TextEvent"in window&&!mt,Ji=ii&&(!Ke||mt&&8<mt&&11>=mt),Ii=" ",Ai=!1;function Sa(n,s){switch(n){case"keyup":return Ct.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uo(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var zo=!1;function Z1(n,s){switch(n){case"compositionend":return Uo(s);case"keypress":return s.which!==32?null:(Ai=!0,Ii);case"textInput":return n=s.data,n===Ii&&Ai?null:n;default:return null}}function eC(n,s){if(zo)return n==="compositionend"||!Ke&&Sa(n,s)?(n=Pu(),ba=Vu=Yi=null,zo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Ji&&s.locale!=="ko"?null:s.data;default:return null}}var tC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eE(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!tC[n.type]:s==="textarea"}function tE(n,s,o,u){rs?Qi?Qi.push(u):Qi=[u]:rs=u,s=af(s,"onChange"),0<s.length&&(o=new Wi("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var Lu=null,Uu=null;function nC(n){Lb(n,0)}function _d(n){var s=Bn(n);if(ya(s))return n}function nE(n,s){if(n==="change")return s}var iE=!1;if(ii){var op;if(ii){var lp="oninput"in document;if(!lp){var rE=document.createElement("div");rE.setAttribute("oninput","return;"),lp=typeof rE.oninput=="function"}op=lp}else op=!1;iE=op&&(!document.documentMode||9<document.documentMode)}function sE(){Lu&&(Lu.detachEvent("onpropertychange",aE),Uu=Lu=null)}function aE(n){if(n.propertyName==="value"&&_d(Uu)){var s=[];tE(s,Uu,n,ni(n)),ss(nC,s)}}function iC(n,s,o){n==="focusin"?(sE(),Lu=s,Uu=o,Lu.attachEvent("onpropertychange",aE)):n==="focusout"&&sE()}function rC(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _d(Uu)}function sC(n,s){if(n==="click")return _d(s)}function aC(n,s){if(n==="input"||n==="change")return _d(s)}function oC(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var jn=typeof Object.is=="function"?Object.is:oC;function zu(n,s){if(jn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!Ot.call(s,d)||!jn(n[d],s[d]))return!1}return!0}function oE(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function lE(n,s){var o=oE(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=oE(o)}}function uE(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?uE(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function cE(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var s=Ki(n.document);s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=Ki(n.document)}return s}function up(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}var lC=ii&&"documentMode"in document&&11>=document.documentMode,Bo=null,cp=null,Bu=null,hp=!1;function hE(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hp||Bo==null||Bo!==Ki(u)||(u=Bo,"selectionStart"in u&&up(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Bu&&zu(Bu,u)||(Bu=u,u=af(cp,"onSelect"),0<u.length&&(s=new Wi("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=Bo)))}function Ra(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var Fo={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionrun:Ra("Transition","TransitionRun"),transitionstart:Ra("Transition","TransitionStart"),transitioncancel:Ra("Transition","TransitionCancel"),transitionend:Ra("Transition","TransitionEnd")},dp={},dE={};ii&&(dE=document.createElement("div").style,"AnimationEvent"in window||(delete Fo.animationend.animation,delete Fo.animationiteration.animation,delete Fo.animationstart.animation),"TransitionEvent"in window||delete Fo.transitionend.transition);function Ca(n){if(dp[n])return dp[n];if(!Fo[n])return n;var s=Fo[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in dE)return dp[n]=s[o];return n}var fE=Ca("animationend"),mE=Ca("animationiteration"),pE=Ca("animationstart"),uC=Ca("transitionrun"),cC=Ca("transitionstart"),hC=Ca("transitioncancel"),gE=Ca("transitionend"),_E=new Map,fp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fp.push("scrollEnd");function Si(n,s){_E.set(n,s),Hi(s,[n])}var yd=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},si=[],jo=0,mp=0;function vd(){for(var n=jo,s=mp=jo=0;s<n;){var o=si[s];si[s++]=null;var u=si[s];si[s++]=null;var d=si[s];si[s++]=null;var m=si[s];if(si[s++]=null,u!==null&&d!==null){var y=u.pending;y===null?d.next=d:(d.next=y.next,y.next=d),u.pending=d}m!==0&&yE(o,d,m)}}function Ed(n,s,o,u){si[jo++]=n,si[jo++]=s,si[jo++]=o,si[jo++]=u,mp|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function pp(n,s,o,u){return Ed(n,s,o,u),Td(n)}function Na(n,s){return Ed(n,null,null,s),Td(n)}function yE(n,s,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var d=!1,m=n.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(d=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,d&&s!==null&&(d=31-Rt(o),n=m.hiddenUpdates,u=n[d],u===null?n[d]=[s]:u.push(s),s.lane=o|536870912),m):null}function Td(n){if(50<lc)throw lc=0,Ig=null,Error(i(185));for(var s=n.return;s!==null;)n=s,s=n.return;return n.tag===3?n.stateNode:null}var qo={};function dC(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,s,o,u){return new dC(n,s,o,u)}function gp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ir(n,s){var o=n.alternate;return o===null?(o=qn(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function vE(n,s){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=s,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,s=o.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),n}function bd(n,s,o,u,d,m){var y=0;if(u=n,typeof n=="function")gp(n)&&(y=1);else if(typeof n=="string")y=_N(n,o,de.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case N:return n=qn(31,o,s,d),n.elementType=N,n.lanes=m,n;case O:return Da(o.children,d,m,s);case H:y=8,d|=24;break;case J:return n=qn(12,o,s,d|2),n.elementType=J,n.lanes=m,n;case we:return n=qn(13,o,s,d),n.elementType=we,n.lanes=m,n;case me:return n=qn(19,o,s,d),n.elementType=me,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case se:y=10;break e;case re:y=9;break e;case _e:y=11;break e;case S:y=14;break e;case A:y=16,u=null;break e}y=29,o=Error(i(130,n===null?"null":typeof n,"")),u=null}return s=qn(y,o,s,d),s.elementType=n,s.type=u,s.lanes=m,s}function Da(n,s,o,u){return n=qn(7,n,u,s),n.lanes=o,n}function _p(n,s,o){return n=qn(6,n,null,s),n.lanes=o,n}function EE(n){var s=qn(18,null,null,0);return s.stateNode=n,s}function yp(n,s,o){return s=qn(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}var TE=new WeakMap;function ai(n,s){if(typeof n=="object"&&n!==null){var o=TE.get(n);return o!==void 0?o:(s={value:n,source:s,stack:_u(s)},TE.set(n,s),s)}return{value:n,source:s,stack:_u(s)}}var Ho=[],Go=0,wd=null,Fu=0,oi=[],li=0,us=null,Zi=1,er="";function Ar(n,s){Ho[Go++]=Fu,Ho[Go++]=wd,wd=n,Fu=s}function bE(n,s,o){oi[li++]=Zi,oi[li++]=er,oi[li++]=us,us=n;var u=Zi;n=er;var d=32-Rt(u)-1;u&=~(1<<d),o+=1;var m=32-Rt(s)+d;if(30<m){var y=d-d%5;m=(u&(1<<y)-1).toString(32),u>>=y,d-=y,Zi=1<<32-Rt(s)+d|o<<d|u,er=m+n}else Zi=1<<m|o<<d|u,er=n}function vp(n){n.return!==null&&(Ar(n,1),bE(n,1,0))}function Ep(n){for(;n===wd;)wd=Ho[--Go],Ho[Go]=null,Fu=Ho[--Go],Ho[Go]=null;for(;n===us;)us=oi[--li],oi[li]=null,er=oi[--li],oi[li]=null,Zi=oi[--li],oi[li]=null}function wE(n,s){oi[li++]=Zi,oi[li++]=er,oi[li++]=us,Zi=s.id,er=s.overflow,us=n}var on=null,lt=null,ze=!1,cs=null,ui=!1,Tp=Error(i(519));function hs(n){var s=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ju(ai(s,n)),Tp}function IE(n){var s=n.stateNode,o=n.type,u=n.memoizedProps;switch(s[Mt]=n,s[Jt]=u,o){case"dialog":Pe("cancel",s),Pe("close",s);break;case"iframe":case"object":case"embed":Pe("load",s);break;case"video":case"audio":for(o=0;o<cc.length;o++)Pe(cc[o],s);break;case"source":Pe("error",s);break;case"img":case"image":case"link":Pe("error",s),Pe("load",s);break;case"details":Pe("toggle",s);break;case"input":Pe("invalid",s),nd(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":Pe("invalid",s);break;case"textarea":Pe("invalid",s),ns(s,u.value,u.defaultValue,u.children)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||Fb(s.textContent,o)?(u.popover!=null&&(Pe("beforetoggle",s),Pe("toggle",s)),u.onScroll!=null&&Pe("scroll",s),u.onScrollEnd!=null&&Pe("scrollend",s),u.onClick!=null&&(s.onclick=Ti),s=!0):s=!1,s||hs(n,!0)}function AE(n){for(on=n.return;on;)switch(on.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:on=on.return}}function Ko(n){if(n!==on)return!1;if(!ze)return AE(n),ze=!0,!1;var s=n.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||zg(n.type,n.memoizedProps)),o=!o),o&&lt&&hs(n),AE(n),s===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));lt=$b(n)}else if(s===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));lt=$b(n)}else s===27?(s=lt,As(n.type)?(n=Hg,Hg=null,lt=n):lt=s):lt=on?hi(n.stateNode.nextSibling):null;return!0}function xa(){lt=on=null,ze=!1}function bp(){var n=cs;return n!==null&&(On===null?On=n:On.push.apply(On,n),cs=null),n}function ju(n){cs===null?cs=[n]:cs.push(n)}var wp=P(null),Va=null,Sr=null;function ds(n,s,o){ce(wp,s._currentValue),s._currentValue=o}function Rr(n){n._currentValue=wp.current,ee(wp)}function Ip(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function Ap(n,s,o,u){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var m=d.dependencies;if(m!==null){var y=d.child;m=m.firstContext;e:for(;m!==null;){var b=m;m=d;for(var C=0;C<s.length;C++)if(b.context===s[C]){m.lanes|=o,b=m.alternate,b!==null&&(b.lanes|=o),Ip(m.return,o,n),u||(y=null);break e}m=b.next}}else if(d.tag===18){if(y=d.return,y===null)throw Error(i(341));y.lanes|=o,m=y.alternate,m!==null&&(m.lanes|=o),Ip(y,o,n),y=null}else y=d.child;if(y!==null)y.return=d;else for(y=d;y!==null;){if(y===n){y=null;break}if(d=y.sibling,d!==null){d.return=y.return,y=d;break}y=y.return}d=y}}function Qo(n,s,o,u){n=null;for(var d=s,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var y=d.alternate;if(y===null)throw Error(i(387));if(y=y.memoizedProps,y!==null){var b=d.type;jn(d.pendingProps.value,y.value)||(n!==null?n.push(b):n=[b])}}else if(d===Be.current){if(y=d.alternate,y===null)throw Error(i(387));y.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(pc):n=[pc])}d=d.return}n!==null&&Ap(s,n,o,u),s.flags|=262144}function Id(n){for(n=n.firstContext;n!==null;){if(!jn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Pa(n){Va=n,Sr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function ln(n){return SE(Va,n)}function Ad(n,s){return Va===null&&Pa(n),SE(n,s)}function SE(n,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Sr===null){if(n===null)throw Error(i(308));Sr=s,n.dependencies={lanes:0,firstContext:s},n.flags|=524288}else Sr=Sr.next=s;return o}var fC=typeof AbortController<"u"?AbortController:function(){var n=[],s=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){s.aborted=!0,n.forEach(function(o){return o()})}},mC=r.unstable_scheduleCallback,pC=r.unstable_NormalPriority,zt={$$typeof:se,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sp(){return{controller:new fC,data:new Map,refCount:0}}function qu(n){n.refCount--,n.refCount===0&&mC(pC,function(){n.controller.abort()})}var Hu=null,Rp=0,Yo=0,Wo=null;function gC(n,s){if(Hu===null){var o=Hu=[];Rp=0,Yo=Dg(),Wo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Rp++,s.then(RE,RE),s}function RE(){if(--Rp===0&&Hu!==null){Wo!==null&&(Wo.status="fulfilled");var n=Hu;Hu=null,Yo=0,Wo=null;for(var s=0;s<n.length;s++)(0,n[s])()}}function _C(n,s){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return n.then(function(){u.status="fulfilled",u.value=s;for(var d=0;d<o.length;d++)(0,o[d])(s)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var CE=$.S;$.S=function(n,s){hb=Tn(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&gC(n,s),CE!==null&&CE(n,s)};var Oa=P(null);function Cp(){var n=Oa.current;return n!==null?n:st.pooledCache}function Sd(n,s){s===null?ce(Oa,Oa.current):ce(Oa,s.pool)}function NE(){var n=Cp();return n===null?null:{parent:zt._currentValue,pool:n}}var $o=Error(i(460)),Np=Error(i(474)),Rd=Error(i(542)),Cd={then:function(){}};function DE(n){return n=n.status,n==="fulfilled"||n==="rejected"}function xE(n,s,o){switch(o=n[o],o===void 0?n.push(s):o!==s&&(s.then(Ti,Ti),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,PE(n),n;default:if(typeof s.status=="string")s.then(Ti,Ti);else{if(n=st,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=s,n.status="pending",n.then(function(u){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=u}},function(u){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,PE(n),n}throw Ma=s,$o}}function ka(n){try{var s=n._init;return s(n._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Ma=o,$o):o}}var Ma=null;function VE(){if(Ma===null)throw Error(i(459));var n=Ma;return Ma=null,n}function PE(n){if(n===$o||n===Rd)throw Error(i(483))}var Xo=null,Gu=0;function Nd(n){var s=Gu;return Gu+=1,Xo===null&&(Xo=[]),xE(Xo,n,s)}function Ku(n,s){s=s.props.ref,n.ref=s!==void 0?s:null}function Dd(n,s){throw s.$$typeof===w?Error(i(525)):(n=Object.prototype.toString.call(s),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n)))}function OE(n){function s(L,x){if(n){var F=L.deletions;F===null?(L.deletions=[x],L.flags|=16):F.push(x)}}function o(L,x){if(!n)return null;for(;x!==null;)s(L,x),x=x.sibling;return null}function u(L){for(var x=new Map;L!==null;)L.key!==null?x.set(L.key,L):x.set(L.index,L),L=L.sibling;return x}function d(L,x){return L=Ir(L,x),L.index=0,L.sibling=null,L}function m(L,x,F){return L.index=F,n?(F=L.alternate,F!==null?(F=F.index,F<x?(L.flags|=67108866,x):F):(L.flags|=67108866,x)):(L.flags|=1048576,x)}function y(L){return n&&L.alternate===null&&(L.flags|=67108866),L}function b(L,x,F,X){return x===null||x.tag!==6?(x=_p(F,L.mode,X),x.return=L,x):(x=d(x,F),x.return=L,x)}function C(L,x,F,X){var ve=F.type;return ve===O?W(L,x,F.props.children,X,F.key):x!==null&&(x.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===A&&ka(ve)===x.type)?(x=d(x,F.props),Ku(x,F),x.return=L,x):(x=bd(F.type,F.key,F.props,null,L.mode,X),Ku(x,F),x.return=L,x)}function j(L,x,F,X){return x===null||x.tag!==4||x.stateNode.containerInfo!==F.containerInfo||x.stateNode.implementation!==F.implementation?(x=yp(F,L.mode,X),x.return=L,x):(x=d(x,F.children||[]),x.return=L,x)}function W(L,x,F,X,ve){return x===null||x.tag!==7?(x=Da(F,L.mode,X,ve),x.return=L,x):(x=d(x,F),x.return=L,x)}function Z(L,x,F){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=_p(""+x,L.mode,F),x.return=L,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case D:return F=bd(x.type,x.key,x.props,null,L.mode,F),Ku(F,x),F.return=L,F;case Y:return x=yp(x,L.mode,F),x.return=L,x;case A:return x=ka(x),Z(L,x,F)}if(Kt(x)||U(x))return x=Da(x,L.mode,F,null),x.return=L,x;if(typeof x.then=="function")return Z(L,Nd(x),F);if(x.$$typeof===se)return Z(L,Ad(L,x),F);Dd(L,x)}return null}function q(L,x,F,X){var ve=x!==null?x.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return ve!==null?null:b(L,x,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case D:return F.key===ve?C(L,x,F,X):null;case Y:return F.key===ve?j(L,x,F,X):null;case A:return F=ka(F),q(L,x,F,X)}if(Kt(F)||U(F))return ve!==null?null:W(L,x,F,X,null);if(typeof F.then=="function")return q(L,x,Nd(F),X);if(F.$$typeof===se)return q(L,x,Ad(L,F),X);Dd(L,F)}return null}function Q(L,x,F,X,ve){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return L=L.get(F)||null,b(x,L,""+X,ve);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case D:return L=L.get(X.key===null?F:X.key)||null,C(x,L,X,ve);case Y:return L=L.get(X.key===null?F:X.key)||null,j(x,L,X,ve);case A:return X=ka(X),Q(L,x,F,X,ve)}if(Kt(X)||U(X))return L=L.get(F)||null,W(x,L,X,ve,null);if(typeof X.then=="function")return Q(L,x,F,Nd(X),ve);if(X.$$typeof===se)return Q(L,x,F,Ad(x,X),ve);Dd(x,X)}return null}function fe(L,x,F,X){for(var ve=null,qe=null,ge=x,xe=x=0,Le=null;ge!==null&&xe<F.length;xe++){ge.index>xe?(Le=ge,ge=null):Le=ge.sibling;var He=q(L,ge,F[xe],X);if(He===null){ge===null&&(ge=Le);break}n&&ge&&He.alternate===null&&s(L,ge),x=m(He,x,xe),qe===null?ve=He:qe.sibling=He,qe=He,ge=Le}if(xe===F.length)return o(L,ge),ze&&Ar(L,xe),ve;if(ge===null){for(;xe<F.length;xe++)ge=Z(L,F[xe],X),ge!==null&&(x=m(ge,x,xe),qe===null?ve=ge:qe.sibling=ge,qe=ge);return ze&&Ar(L,xe),ve}for(ge=u(ge);xe<F.length;xe++)Le=Q(ge,L,xe,F[xe],X),Le!==null&&(n&&Le.alternate!==null&&ge.delete(Le.key===null?xe:Le.key),x=m(Le,x,xe),qe===null?ve=Le:qe.sibling=Le,qe=Le);return n&&ge.forEach(function(Ds){return s(L,Ds)}),ze&&Ar(L,xe),ve}function be(L,x,F,X){if(F==null)throw Error(i(151));for(var ve=null,qe=null,ge=x,xe=x=0,Le=null,He=F.next();ge!==null&&!He.done;xe++,He=F.next()){ge.index>xe?(Le=ge,ge=null):Le=ge.sibling;var Ds=q(L,ge,He.value,X);if(Ds===null){ge===null&&(ge=Le);break}n&&ge&&Ds.alternate===null&&s(L,ge),x=m(Ds,x,xe),qe===null?ve=Ds:qe.sibling=Ds,qe=Ds,ge=Le}if(He.done)return o(L,ge),ze&&Ar(L,xe),ve;if(ge===null){for(;!He.done;xe++,He=F.next())He=Z(L,He.value,X),He!==null&&(x=m(He,x,xe),qe===null?ve=He:qe.sibling=He,qe=He);return ze&&Ar(L,xe),ve}for(ge=u(ge);!He.done;xe++,He=F.next())He=Q(ge,L,xe,He.value,X),He!==null&&(n&&He.alternate!==null&&ge.delete(He.key===null?xe:He.key),x=m(He,x,xe),qe===null?ve=He:qe.sibling=He,qe=He);return n&&ge.forEach(function(CN){return s(L,CN)}),ze&&Ar(L,xe),ve}function rt(L,x,F,X){if(typeof F=="object"&&F!==null&&F.type===O&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case D:e:{for(var ve=F.key;x!==null;){if(x.key===ve){if(ve=F.type,ve===O){if(x.tag===7){o(L,x.sibling),X=d(x,F.props.children),X.return=L,L=X;break e}}else if(x.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===A&&ka(ve)===x.type){o(L,x.sibling),X=d(x,F.props),Ku(X,F),X.return=L,L=X;break e}o(L,x);break}else s(L,x);x=x.sibling}F.type===O?(X=Da(F.props.children,L.mode,X,F.key),X.return=L,L=X):(X=bd(F.type,F.key,F.props,null,L.mode,X),Ku(X,F),X.return=L,L=X)}return y(L);case Y:e:{for(ve=F.key;x!==null;){if(x.key===ve)if(x.tag===4&&x.stateNode.containerInfo===F.containerInfo&&x.stateNode.implementation===F.implementation){o(L,x.sibling),X=d(x,F.children||[]),X.return=L,L=X;break e}else{o(L,x);break}else s(L,x);x=x.sibling}X=yp(F,L.mode,X),X.return=L,L=X}return y(L);case A:return F=ka(F),rt(L,x,F,X)}if(Kt(F))return fe(L,x,F,X);if(U(F)){if(ve=U(F),typeof ve!="function")throw Error(i(150));return F=ve.call(F),be(L,x,F,X)}if(typeof F.then=="function")return rt(L,x,Nd(F),X);if(F.$$typeof===se)return rt(L,x,Ad(L,F),X);Dd(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,x!==null&&x.tag===6?(o(L,x.sibling),X=d(x,F),X.return=L,L=X):(o(L,x),X=_p(F,L.mode,X),X.return=L,L=X),y(L)):o(L,x)}return function(L,x,F,X){try{Gu=0;var ve=rt(L,x,F,X);return Xo=null,ve}catch(ge){if(ge===$o||ge===Rd)throw ge;var qe=qn(29,ge,null,L.mode);return qe.lanes=X,qe.return=L,qe}finally{}}}var La=OE(!0),kE=OE(!1),fs=!1;function Dp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ms(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ps(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Qe&2)!==0){var d=u.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s,s=Td(n),yE(n,null,o),s}return Ed(n,u,s,o),Td(n)}function Qu(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Eu(n,o)}}function Vp(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var y={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=y:m=m.next=y,o=o.next}while(o!==null);m===null?d=m=s:m=m.next=s}else d=m=s;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}var Pp=!1;function Yu(){if(Pp){var n=Wo;if(n!==null)throw n}}function Wu(n,s,o,u){Pp=!1;var d=n.updateQueue;fs=!1;var m=d.firstBaseUpdate,y=d.lastBaseUpdate,b=d.shared.pending;if(b!==null){d.shared.pending=null;var C=b,j=C.next;C.next=null,y===null?m=j:y.next=j,y=C;var W=n.alternate;W!==null&&(W=W.updateQueue,b=W.lastBaseUpdate,b!==y&&(b===null?W.firstBaseUpdate=j:b.next=j,W.lastBaseUpdate=C))}if(m!==null){var Z=d.baseState;y=0,W=j=C=null,b=m;do{var q=b.lane&-536870913,Q=q!==b.lane;if(Q?(Me&q)===q:(u&q)===q){q!==0&&q===Yo&&(Pp=!0),W!==null&&(W=W.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var fe=n,be=b;q=s;var rt=o;switch(be.tag){case 1:if(fe=be.payload,typeof fe=="function"){Z=fe.call(rt,Z,q);break e}Z=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=be.payload,q=typeof fe=="function"?fe.call(rt,Z,q):fe,q==null)break e;Z=T({},Z,q);break e;case 2:fs=!0}}q=b.callback,q!==null&&(n.flags|=64,Q&&(n.flags|=8192),Q=d.callbacks,Q===null?d.callbacks=[q]:Q.push(q))}else Q={lane:q,tag:b.tag,payload:b.payload,callback:b.callback,next:null},W===null?(j=W=Q,C=Z):W=W.next=Q,y|=q;if(b=b.next,b===null){if(b=d.shared.pending,b===null)break;Q=b,b=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);W===null&&(C=Z),d.baseState=C,d.firstBaseUpdate=j,d.lastBaseUpdate=W,m===null&&(d.shared.lanes=0),Es|=y,n.lanes=y,n.memoizedState=Z}}function ME(n,s){if(typeof n!="function")throw Error(i(191,n));n.call(s)}function LE(n,s){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)ME(o[n],s)}var Jo=P(null),xd=P(0);function UE(n,s){n=Mr,ce(xd,n),ce(Jo,s),Mr=n|s.baseLanes}function Op(){ce(xd,Mr),ce(Jo,Jo.current)}function kp(){Mr=xd.current,ee(Jo),ee(xd)}var Hn=P(null),ci=null;function gs(n){var s=n.alternate;ce(Nt,Nt.current&1),ce(Hn,n),ci===null&&(s===null||Jo.current!==null||s.memoizedState!==null)&&(ci=n)}function Mp(n){ce(Nt,Nt.current),ce(Hn,n),ci===null&&(ci=n)}function zE(n){n.tag===22?(ce(Nt,Nt.current),ce(Hn,n),ci===null&&(ci=n)):_s()}function _s(){ce(Nt,Nt.current),ce(Hn,Hn.current)}function Gn(n){ee(Hn),ci===n&&(ci=null),ee(Nt)}var Nt=P(0);function Vd(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||jg(o)||qg(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Cr=0,Ce=null,nt=null,Bt=null,Pd=!1,Zo=!1,Ua=!1,Od=0,$u=0,el=null,yC=0;function bt(){throw Error(i(321))}function Lp(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!jn(n[o],s[o]))return!1;return!0}function Up(n,s,o,u,d,m){return Cr=m,Ce=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,$.H=n===null||n.memoizedState===null?bT:Zp,Ua=!1,m=o(u,d),Ua=!1,Zo&&(m=FE(s,o,u,d)),BE(n),m}function BE(n){$.H=Zu;var s=nt!==null&&nt.next!==null;if(Cr=0,Bt=nt=Ce=null,Pd=!1,$u=0,el=null,s)throw Error(i(300));n===null||Ft||(n=n.dependencies,n!==null&&Id(n)&&(Ft=!0))}function FE(n,s,o,u){Ce=n;var d=0;do{if(Zo&&(el=null),$u=0,Zo=!1,25<=d)throw Error(i(301));if(d+=1,Bt=nt=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}$.H=wT,m=s(o,u)}while(Zo);return m}function vC(){var n=$.H,s=n.useState()[0];return s=typeof s.then=="function"?Xu(s):s,n=n.useState()[0],(nt!==null?nt.memoizedState:null)!==n&&(Ce.flags|=1024),s}function zp(){var n=Od!==0;return Od=0,n}function Bp(n,s,o){s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~o}function Fp(n){if(Pd){for(n=n.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Pd=!1}Cr=0,Bt=nt=Ce=null,Zo=!1,$u=Od=0,el=null}function wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Ce.memoizedState=Bt=n:Bt=Bt.next=n,Bt}function Dt(){if(nt===null){var n=Ce.alternate;n=n!==null?n.memoizedState:null}else n=nt.next;var s=Bt===null?Ce.memoizedState:Bt.next;if(s!==null)Bt=s,nt=n;else{if(n===null)throw Ce.alternate===null?Error(i(467)):Error(i(310));nt=n,n={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},Bt===null?Ce.memoizedState=Bt=n:Bt=Bt.next=n}return Bt}function kd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xu(n){var s=$u;return $u+=1,el===null&&(el=[]),n=xE(el,n,s),s=Ce,(Bt===null?s.memoizedState:Bt.next)===null&&(s=s.alternate,$.H=s===null||s.memoizedState===null?bT:Zp),n}function Md(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Xu(n);if(n.$$typeof===se)return ln(n)}throw Error(i(438,String(n)))}function jp(n){var s=null,o=Ce.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ce.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=kd(),Ce.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(n),u=0;u<n;u++)o[u]=k;return s.index++,o}function Nr(n,s){return typeof s=="function"?s(n):s}function Ld(n){var s=Dt();return qp(s,nt,n)}function qp(n,s,o){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var d=n.baseQueue,m=u.pending;if(m!==null){if(d!==null){var y=d.next;d.next=m.next,m.next=y}s.baseQueue=d=m,u.pending=null}if(m=n.baseState,d===null)n.memoizedState=m;else{s=d.next;var b=y=null,C=null,j=s,W=!1;do{var Z=j.lane&-536870913;if(Z!==j.lane?(Me&Z)===Z:(Cr&Z)===Z){var q=j.revertLane;if(q===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),Z===Yo&&(W=!0);else if((Cr&q)===q){j=j.next,q===Yo&&(W=!0);continue}else Z={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},C===null?(b=C=Z,y=m):C=C.next=Z,Ce.lanes|=q,Es|=q;Z=j.action,Ua&&o(m,Z),m=j.hasEagerState?j.eagerState:o(m,Z)}else q={lane:Z,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},C===null?(b=C=q,y=m):C=C.next=q,Ce.lanes|=Z,Es|=Z;j=j.next}while(j!==null&&j!==s);if(C===null?y=m:C.next=b,!jn(m,n.memoizedState)&&(Ft=!0,W&&(o=Wo,o!==null)))throw o;n.memoizedState=m,n.baseState=y,n.baseQueue=C,u.lastRenderedState=m}return d===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Hp(n){var s=Dt(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=s.memoizedState;if(d!==null){o.pending=null;var y=d=d.next;do m=n(m,y.action),y=y.next;while(y!==d);jn(m,s.memoizedState)||(Ft=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,u]}function jE(n,s,o){var u=Ce,d=Dt(),m=ze;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var y=!jn((nt||d).memoizedState,o);if(y&&(d.memoizedState=o,Ft=!0),d=d.queue,Qp(GE.bind(null,u,d,n),[n]),d.getSnapshot!==s||y||Bt!==null&&Bt.memoizedState.tag&1){if(u.flags|=2048,tl(9,{destroy:void 0},HE.bind(null,u,d,o,s),null),st===null)throw Error(i(349));m||(Cr&127)!==0||qE(u,s,o)}return o}function qE(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=Ce.updateQueue,s===null?(s=kd(),Ce.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function HE(n,s,o,u){s.value=o,s.getSnapshot=u,KE(s)&&QE(n)}function GE(n,s,o){return o(function(){KE(s)&&QE(n)})}function KE(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!jn(n,o)}catch{return!0}}function QE(n){var s=Na(n,2);s!==null&&kn(s,n,2)}function Gp(n){var s=wn();if(typeof n=="function"){var o=n;if(n=o(),Ua){ei(!0);try{o()}finally{ei(!1)}}}return s.memoizedState=s.baseState=n,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:n},s}function YE(n,s,o,u){return n.baseState=o,qp(n,nt,typeof u=="function"?u:Nr)}function EC(n,s,o,u,d){if(Bd(n))throw Error(i(485));if(n=s.action,n!==null){var m={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){m.listeners.push(y)}};$.T!==null?o(!0):m.isTransition=!1,u(m),o=s.pending,o===null?(m.next=s.pending=m,WE(s,m)):(m.next=o.next,s.pending=o.next=m)}}function WE(n,s){var o=s.action,u=s.payload,d=n.state;if(s.isTransition){var m=$.T,y={};$.T=y;try{var b=o(d,u),C=$.S;C!==null&&C(y,b),$E(n,s,b)}catch(j){Kp(n,s,j)}finally{m!==null&&y.types!==null&&(m.types=y.types),$.T=m}}else try{m=o(d,u),$E(n,s,m)}catch(j){Kp(n,s,j)}}function $E(n,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){XE(n,s,u)},function(u){return Kp(n,s,u)}):XE(n,s,o)}function XE(n,s,o){s.status="fulfilled",s.value=o,JE(s),n.state=o,s=n.pending,s!==null&&(o=s.next,o===s?n.pending=null:(o=o.next,s.next=o,WE(n,o)))}function Kp(n,s,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,JE(s),s=s.next;while(s!==u)}n.action=null}function JE(n){n=n.listeners;for(var s=0;s<n.length;s++)(0,n[s])()}function ZE(n,s){return s}function eT(n,s){if(ze){var o=st.formState;if(o!==null){e:{var u=Ce;if(ze){if(lt){t:{for(var d=lt,m=ui;d.nodeType!==8;){if(!m){d=null;break t}if(d=hi(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){lt=hi(d.nextSibling),u=d.data==="F!";break e}}hs(u)}u=!1}u&&(s=o[0])}}return o=wn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ZE,lastRenderedState:s},o.queue=u,o=vT.bind(null,Ce,u),u.dispatch=o,u=Gp(!1),m=Jp.bind(null,Ce,!1,u.queue),u=wn(),d={state:s,dispatch:null,action:n,pending:null},u.queue=d,o=EC.bind(null,Ce,d,m,o),d.dispatch=o,u.memoizedState=n,[s,o,!1]}function tT(n){var s=Dt();return nT(s,nt,n)}function nT(n,s,o){if(s=qp(n,s,ZE)[0],n=Ld(Nr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Xu(s)}catch(y){throw y===$o?Rd:y}else u=s;s=Dt();var d=s.queue,m=d.dispatch;return o!==s.memoizedState&&(Ce.flags|=2048,tl(9,{destroy:void 0},TC.bind(null,d,o),null)),[u,m,n]}function TC(n,s){n.action=s}function iT(n){var s=Dt(),o=nt;if(o!==null)return nT(s,o,n);Dt(),s=s.memoizedState,o=Dt();var u=o.queue.dispatch;return o.memoizedState=n,[s,u,!1]}function tl(n,s,o,u){return n={tag:n,create:o,deps:u,inst:s,next:null},s=Ce.updateQueue,s===null&&(s=kd(),Ce.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n),n}function rT(){return Dt().memoizedState}function Ud(n,s,o,u){var d=wn();Ce.flags|=n,d.memoizedState=tl(1|s,{destroy:void 0},o,u===void 0?null:u)}function zd(n,s,o,u){var d=Dt();u=u===void 0?null:u;var m=d.memoizedState.inst;nt!==null&&u!==null&&Lp(u,nt.memoizedState.deps)?d.memoizedState=tl(s,m,o,u):(Ce.flags|=n,d.memoizedState=tl(1|s,m,o,u))}function sT(n,s){Ud(8390656,8,n,s)}function Qp(n,s){zd(2048,8,n,s)}function bC(n){Ce.flags|=4;var s=Ce.updateQueue;if(s===null)s=kd(),Ce.updateQueue=s,s.events=[n];else{var o=s.events;o===null?s.events=[n]:o.push(n)}}function aT(n){var s=Dt().memoizedState;return bC({ref:s,nextImpl:n}),function(){if((Qe&2)!==0)throw Error(i(440));return s.impl.apply(void 0,arguments)}}function oT(n,s){return zd(4,2,n,s)}function lT(n,s){return zd(4,4,n,s)}function uT(n,s){if(typeof s=="function"){n=n();var o=s(n);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function cT(n,s,o){o=o!=null?o.concat([n]):null,zd(4,4,uT.bind(null,s,n),o)}function Yp(){}function hT(n,s){var o=Dt();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Lp(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function dT(n,s){var o=Dt();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Lp(s,u[1]))return u[0];if(u=n(),Ua){ei(!0);try{n()}finally{ei(!1)}}return o.memoizedState=[u,s],u}function Wp(n,s,o){return o===void 0||(Cr&1073741824)!==0&&(Me&261930)===0?n.memoizedState=s:(n.memoizedState=o,n=fb(),Ce.lanes|=n,Es|=n,o)}function fT(n,s,o,u){return jn(o,s)?o:Jo.current!==null?(n=Wp(n,o,u),jn(n,s)||(Ft=!0),n):(Cr&42)===0||(Cr&1073741824)!==0&&(Me&261930)===0?(Ft=!0,n.memoizedState=o):(n=fb(),Ce.lanes|=n,Es|=n,s)}function mT(n,s,o,u,d){var m=ue.p;ue.p=m!==0&&8>m?m:8;var y=$.T,b={};$.T=b,Jp(n,!1,s,o);try{var C=d(),j=$.S;if(j!==null&&j(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var W=_C(C,u);Ju(n,s,W,Yn(n))}else Ju(n,s,u,Yn(n))}catch(Z){Ju(n,s,{then:function(){},status:"rejected",reason:Z},Yn())}finally{ue.p=m,y!==null&&b.types!==null&&(y.types=b.types),$.T=y}}function wC(){}function $p(n,s,o,u){if(n.tag!==5)throw Error(i(476));var d=pT(n).queue;mT(n,d,s,Ee,o===null?wC:function(){return gT(n),o(u)})}function pT(n){var s=n.memoizedState;if(s!==null)return s;s={memoizedState:Ee,baseState:Ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:Ee},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:o},next:null},n.memoizedState=s,n=n.alternate,n!==null&&(n.memoizedState=s),s}function gT(n){var s=pT(n);s.next===null&&(s=n.alternate.memoizedState),Ju(n,s.next.queue,{},Yn())}function Xp(){return ln(pc)}function _T(){return Dt().memoizedState}function yT(){return Dt().memoizedState}function IC(n){for(var s=n.return;s!==null;){switch(s.tag){case 24:case 3:var o=Yn();n=ms(o);var u=ps(s,n,o);u!==null&&(kn(u,s,o),Qu(u,s,o)),s={cache:Sp()},n.payload=s;return}s=s.return}}function AC(n,s,o){var u=Yn();o={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Bd(n)?ET(s,o):(o=pp(n,s,o,u),o!==null&&(kn(o,n,u),TT(o,s,u)))}function vT(n,s,o){var u=Yn();Ju(n,s,o,u)}function Ju(n,s,o,u){var d={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Bd(n))ET(s,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var y=s.lastRenderedState,b=m(y,o);if(d.hasEagerState=!0,d.eagerState=b,jn(b,y))return Ed(n,s,d,0),st===null&&vd(),!1}catch{}finally{}if(o=pp(n,s,d,u),o!==null)return kn(o,n,u),TT(o,s,u),!0}return!1}function Jp(n,s,o,u){if(u={lane:2,revertLane:Dg(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Bd(n)){if(s)throw Error(i(479))}else s=pp(n,o,u,2),s!==null&&kn(s,n,2)}function Bd(n){var s=n.alternate;return n===Ce||s!==null&&s===Ce}function ET(n,s){Zo=Pd=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function TT(n,s,o){if((o&4194048)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Eu(n,o)}}var Zu={readContext:ln,use:Md,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useLayoutEffect:bt,useInsertionEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useSyncExternalStore:bt,useId:bt,useHostTransitionStatus:bt,useFormState:bt,useActionState:bt,useOptimistic:bt,useMemoCache:bt,useCacheRefresh:bt};Zu.useEffectEvent=bt;var bT={readContext:ln,use:Md,useCallback:function(n,s){return wn().memoizedState=[n,s===void 0?null:s],n},useContext:ln,useEffect:sT,useImperativeHandle:function(n,s,o){o=o!=null?o.concat([n]):null,Ud(4194308,4,uT.bind(null,s,n),o)},useLayoutEffect:function(n,s){return Ud(4194308,4,n,s)},useInsertionEffect:function(n,s){Ud(4,2,n,s)},useMemo:function(n,s){var o=wn();s=s===void 0?null:s;var u=n();if(Ua){ei(!0);try{n()}finally{ei(!1)}}return o.memoizedState=[u,s],u},useReducer:function(n,s,o){var u=wn();if(o!==void 0){var d=o(s);if(Ua){ei(!0);try{o(s)}finally{ei(!1)}}}else d=s;return u.memoizedState=u.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},u.queue=n,n=n.dispatch=AC.bind(null,Ce,n),[u.memoizedState,n]},useRef:function(n){var s=wn();return n={current:n},s.memoizedState=n},useState:function(n){n=Gp(n);var s=n.queue,o=vT.bind(null,Ce,s);return s.dispatch=o,[n.memoizedState,o]},useDebugValue:Yp,useDeferredValue:function(n,s){var o=wn();return Wp(o,n,s)},useTransition:function(){var n=Gp(!1);return n=mT.bind(null,Ce,n.queue,!0,!1),wn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,s,o){var u=Ce,d=wn();if(ze){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),st===null)throw Error(i(349));(Me&127)!==0||qE(u,s,o)}d.memoizedState=o;var m={value:o,getSnapshot:s};return d.queue=m,sT(GE.bind(null,u,m,n),[n]),u.flags|=2048,tl(9,{destroy:void 0},HE.bind(null,u,m,o,s),null),o},useId:function(){var n=wn(),s=st.identifierPrefix;if(ze){var o=er,u=Zi;o=(u&~(1<<32-Rt(u)-1)).toString(32)+o,s="_"+s+"R_"+o,o=Od++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=yC++,s="_"+s+"r_"+o.toString(32)+"_";return n.memoizedState=s},useHostTransitionStatus:Xp,useFormState:eT,useActionState:eT,useOptimistic:function(n){var s=wn();s.memoizedState=s.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Jp.bind(null,Ce,!0,o),o.dispatch=s,[n,s]},useMemoCache:jp,useCacheRefresh:function(){return wn().memoizedState=IC.bind(null,Ce)},useEffectEvent:function(n){var s=wn(),o={impl:n};return s.memoizedState=o,function(){if((Qe&2)!==0)throw Error(i(440));return o.impl.apply(void 0,arguments)}}},Zp={readContext:ln,use:Md,useCallback:hT,useContext:ln,useEffect:Qp,useImperativeHandle:cT,useInsertionEffect:oT,useLayoutEffect:lT,useMemo:dT,useReducer:Ld,useRef:rT,useState:function(){return Ld(Nr)},useDebugValue:Yp,useDeferredValue:function(n,s){var o=Dt();return fT(o,nt.memoizedState,n,s)},useTransition:function(){var n=Ld(Nr)[0],s=Dt().memoizedState;return[typeof n=="boolean"?n:Xu(n),s]},useSyncExternalStore:jE,useId:_T,useHostTransitionStatus:Xp,useFormState:tT,useActionState:tT,useOptimistic:function(n,s){var o=Dt();return YE(o,nt,n,s)},useMemoCache:jp,useCacheRefresh:yT};Zp.useEffectEvent=aT;var wT={readContext:ln,use:Md,useCallback:hT,useContext:ln,useEffect:Qp,useImperativeHandle:cT,useInsertionEffect:oT,useLayoutEffect:lT,useMemo:dT,useReducer:Hp,useRef:rT,useState:function(){return Hp(Nr)},useDebugValue:Yp,useDeferredValue:function(n,s){var o=Dt();return nt===null?Wp(o,n,s):fT(o,nt.memoizedState,n,s)},useTransition:function(){var n=Hp(Nr)[0],s=Dt().memoizedState;return[typeof n=="boolean"?n:Xu(n),s]},useSyncExternalStore:jE,useId:_T,useHostTransitionStatus:Xp,useFormState:iT,useActionState:iT,useOptimistic:function(n,s){var o=Dt();return nt!==null?YE(o,nt,n,s):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:jp,useCacheRefresh:yT};wT.useEffectEvent=aT;function eg(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:T({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var tg={enqueueSetState:function(n,s,o){n=n._reactInternals;var u=Yn(),d=ms(u);d.payload=s,o!=null&&(d.callback=o),s=ps(n,d,u),s!==null&&(kn(s,n,u),Qu(s,n,u))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=Yn(),d=ms(u);d.tag=1,d.payload=s,o!=null&&(d.callback=o),s=ps(n,d,u),s!==null&&(kn(s,n,u),Qu(s,n,u))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=Yn(),u=ms(o);u.tag=2,s!=null&&(u.callback=s),s=ps(n,u,o),s!==null&&(kn(s,n,o),Qu(s,n,o))}};function IT(n,s,o,u,d,m,y){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,y):s.prototype&&s.prototype.isPureReactComponent?!zu(o,u)||!zu(d,m):!0}function AT(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&tg.enqueueReplaceState(s,s.state,null)}function za(n,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(n=n.defaultProps){o===s&&(o=T({},o));for(var d in n)o[d]===void 0&&(o[d]=n[d])}return o}function ST(n){yd(n)}function RT(n){console.error(n)}function CT(n){yd(n)}function Fd(n,s){try{var o=n.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function NT(n,s,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function ng(n,s,o){return o=ms(o),o.tag=3,o.payload={element:null},o.callback=function(){Fd(n,s)},o}function DT(n){return n=ms(n),n.tag=3,n}function xT(n,s,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=u.value;n.payload=function(){return d(m)},n.callback=function(){NT(s,o,u)}}var y=o.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(n.callback=function(){NT(s,o,u),typeof d!="function"&&(Ts===null?Ts=new Set([this]):Ts.add(this));var b=u.stack;this.componentDidCatch(u.value,{componentStack:b!==null?b:""})})}function SC(n,s,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&Qo(s,o,d,!0),o=Hn.current,o!==null){switch(o.tag){case 31:case 13:return ci===null?Zd():o.alternate===null&&wt===0&&(wt=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===Cd?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),Rg(n,u,d)),!1;case 22:return o.flags|=65536,u===Cd?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),Rg(n,u,d)),!1}throw Error(i(435,o.tag))}return Rg(n,u,d),Zd(),!1}if(ze)return s=Hn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,u!==Tp&&(n=Error(i(422),{cause:u}),ju(ai(n,o)))):(u!==Tp&&(s=Error(i(423),{cause:u}),ju(ai(s,o))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,u=ai(u,o),d=ng(n.stateNode,u,d),Vp(n,d),wt!==4&&(wt=2)),!1;var m=Error(i(520),{cause:u});if(m=ai(m,o),oc===null?oc=[m]:oc.push(m),wt!==4&&(wt=2),s===null)return!0;u=ai(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,n=d&-d,o.lanes|=n,n=ng(o.stateNode,u,n),Vp(o,n),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ts===null||!Ts.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=DT(d),xT(d,n,o,u),Vp(o,d),!1}o=o.return}while(o!==null);return!1}var ig=Error(i(461)),Ft=!1;function un(n,s,o,u){s.child=n===null?kE(s,null,o,u):La(s,n.child,o,u)}function VT(n,s,o,u,d){o=o.render;var m=s.ref;if("ref"in u){var y={};for(var b in u)b!=="ref"&&(y[b]=u[b])}else y=u;return Pa(s),u=Up(n,s,o,y,m,d),b=zp(),n!==null&&!Ft?(Bp(n,s,d),Dr(n,s,d)):(ze&&b&&vp(s),s.flags|=1,un(n,s,u,d),s.child)}function PT(n,s,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!gp(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,OT(n,s,m,u,d)):(n=bd(o.type,null,u,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(m=n.child,!hg(n,d)){var y=m.memoizedProps;if(o=o.compare,o=o!==null?o:zu,o(y,u)&&n.ref===s.ref)return Dr(n,s,d)}return s.flags|=1,n=Ir(m,u),n.ref=s.ref,n.return=s,s.child=n}function OT(n,s,o,u,d){if(n!==null){var m=n.memoizedProps;if(zu(m,u)&&n.ref===s.ref)if(Ft=!1,s.pendingProps=u=m,hg(n,d))(n.flags&131072)!==0&&(Ft=!0);else return s.lanes=n.lanes,Dr(n,s,d)}return rg(n,s,o,u,d)}function kT(n,s,o,u){var d=u.children,m=n!==null?n.memoizedState:null;if(n===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,n!==null){for(u=s.child=n.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;u=d&~m}else u=0,s.child=null;return MT(n,s,m,o,u)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},n!==null&&Sd(s,m!==null?m.cachePool:null),m!==null?UE(s,m):Op(),zE(s);else return u=s.lanes=536870912,MT(n,s,m!==null?m.baseLanes|o:o,o,u)}else m!==null?(Sd(s,m.cachePool),UE(s,m),_s(),s.memoizedState=null):(n!==null&&Sd(s,null),Op(),_s());return un(n,s,d,o),s.child}function ec(n,s){return n!==null&&n.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function MT(n,s,o,u,d){var m=Cp();return m=m===null?null:{parent:zt._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},n!==null&&Sd(s,null),Op(),zE(s),n!==null&&Qo(n,s,u,!0),s.childLanes=d,null}function jd(n,s){return s=Hd({mode:s.mode,children:s.children},n.mode),s.ref=n.ref,n.child=s,s.return=n,s}function LT(n,s,o){return La(s,n.child,null,o),n=jd(s,s.pendingProps),n.flags|=2,Gn(s),s.memoizedState=null,n}function RC(n,s,o){var u=s.pendingProps,d=(s.flags&128)!==0;if(s.flags&=-129,n===null){if(ze){if(u.mode==="hidden")return n=jd(s,u),s.lanes=536870912,ec(null,n);if(Mp(s),(n=lt)?(n=Wb(n,ui),n=n!==null&&n.data==="&"?n:null,n!==null&&(s.memoizedState={dehydrated:n,treeContext:us!==null?{id:Zi,overflow:er}:null,retryLane:536870912,hydrationErrors:null},o=EE(n),o.return=s,s.child=o,on=s,lt=null)):n=null,n===null)throw hs(s);return s.lanes=536870912,null}return jd(s,u)}var m=n.memoizedState;if(m!==null){var y=m.dehydrated;if(Mp(s),d)if(s.flags&256)s.flags&=-257,s=LT(n,s,o);else if(s.memoizedState!==null)s.child=n.child,s.flags|=128,s=null;else throw Error(i(558));else if(Ft||Qo(n,s,o,!1),d=(o&n.childLanes)!==0,Ft||d){if(u=st,u!==null&&(y=Tu(u,o),y!==0&&y!==m.retryLane))throw m.retryLane=y,Na(n,y),kn(u,n,y),ig;Zd(),s=LT(n,s,o)}else n=m.treeContext,lt=hi(y.nextSibling),on=s,ze=!0,cs=null,ui=!1,n!==null&&wE(s,n),s=jd(s,u),s.flags|=4096;return s}return n=Ir(n.child,{mode:u.mode,children:u.children}),n.ref=s.ref,s.child=n,n.return=s,n}function qd(n,s){var o=s.ref;if(o===null)n!==null&&n.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(s.flags|=4194816)}}function rg(n,s,o,u,d){return Pa(s),o=Up(n,s,o,u,void 0,d),u=zp(),n!==null&&!Ft?(Bp(n,s,d),Dr(n,s,d)):(ze&&u&&vp(s),s.flags|=1,un(n,s,o,d),s.child)}function UT(n,s,o,u,d,m){return Pa(s),s.updateQueue=null,o=FE(s,u,o,d),BE(n),u=zp(),n!==null&&!Ft?(Bp(n,s,m),Dr(n,s,m)):(ze&&u&&vp(s),s.flags|=1,un(n,s,o,m),s.child)}function zT(n,s,o,u,d){if(Pa(s),s.stateNode===null){var m=qo,y=o.contextType;typeof y=="object"&&y!==null&&(m=ln(y)),m=new o(u,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=tg,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=u,m.state=s.memoizedState,m.refs={},Dp(s),y=o.contextType,m.context=typeof y=="object"&&y!==null?ln(y):qo,m.state=s.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(eg(s,o,y,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(y=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),y!==m.state&&tg.enqueueReplaceState(m,m.state,null),Wu(s,u,m,d),Yu(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(n===null){m=s.stateNode;var b=s.memoizedProps,C=za(o,b);m.props=C;var j=m.context,W=o.contextType;y=qo,typeof W=="object"&&W!==null&&(y=ln(W));var Z=o.getDerivedStateFromProps;W=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function",b=s.pendingProps!==b,W||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b||j!==y)&&AT(s,m,u,y),fs=!1;var q=s.memoizedState;m.state=q,Wu(s,u,m,d),Yu(),j=s.memoizedState,b||q!==j||fs?(typeof Z=="function"&&(eg(s,o,Z,u),j=s.memoizedState),(C=fs||IT(s,o,C,u,q,j,y))?(W||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=j),m.props=u,m.state=j,m.context=y,u=C):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{m=s.stateNode,xp(n,s),y=s.memoizedProps,W=za(o,y),m.props=W,Z=s.pendingProps,q=m.context,j=o.contextType,C=qo,typeof j=="object"&&j!==null&&(C=ln(j)),b=o.getDerivedStateFromProps,(j=typeof b=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==Z||q!==C)&&AT(s,m,u,C),fs=!1,q=s.memoizedState,m.state=q,Wu(s,u,m,d),Yu();var Q=s.memoizedState;y!==Z||q!==Q||fs||n!==null&&n.dependencies!==null&&Id(n.dependencies)?(typeof b=="function"&&(eg(s,o,b,u),Q=s.memoizedState),(W=fs||IT(s,o,W,u,q,Q,C)||n!==null&&n.dependencies!==null&&Id(n.dependencies))?(j||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,Q,C),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,Q,C)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===n.memoizedProps&&q===n.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===n.memoizedProps&&q===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=Q),m.props=u,m.state=Q,m.context=C,u=W):(typeof m.componentDidUpdate!="function"||y===n.memoizedProps&&q===n.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===n.memoizedProps&&q===n.memoizedState||(s.flags|=1024),u=!1)}return m=u,qd(n,s),u=(s.flags&128)!==0,m||u?(m=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,n!==null&&u?(s.child=La(s,n.child,null,d),s.child=La(s,null,o,d)):un(n,s,o,d),s.memoizedState=m.state,n=s.child):n=Dr(n,s,d),n}function BT(n,s,o,u){return xa(),s.flags|=256,un(n,s,o,u),s.child}var sg={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ag(n){return{baseLanes:n,cachePool:NE()}}function og(n,s,o){return n=n!==null?n.childLanes&~o:0,s&&(n|=Qn),n}function FT(n,s,o){var u=s.pendingProps,d=!1,m=(s.flags&128)!==0,y;if((y=m)||(y=n!==null&&n.memoizedState===null?!1:(Nt.current&2)!==0),y&&(d=!0,s.flags&=-129),y=(s.flags&32)!==0,s.flags&=-33,n===null){if(ze){if(d?gs(s):_s(),(n=lt)?(n=Wb(n,ui),n=n!==null&&n.data!=="&"?n:null,n!==null&&(s.memoizedState={dehydrated:n,treeContext:us!==null?{id:Zi,overflow:er}:null,retryLane:536870912,hydrationErrors:null},o=EE(n),o.return=s,s.child=o,on=s,lt=null)):n=null,n===null)throw hs(s);return qg(n)?s.lanes=32:s.lanes=536870912,null}var b=u.children;return u=u.fallback,d?(_s(),d=s.mode,b=Hd({mode:"hidden",children:b},d),u=Da(u,d,o,null),b.return=s,u.return=s,b.sibling=u,s.child=b,u=s.child,u.memoizedState=ag(o),u.childLanes=og(n,y,o),s.memoizedState=sg,ec(null,u)):(gs(s),lg(s,b))}var C=n.memoizedState;if(C!==null&&(b=C.dehydrated,b!==null)){if(m)s.flags&256?(gs(s),s.flags&=-257,s=ug(n,s,o)):s.memoizedState!==null?(_s(),s.child=n.child,s.flags|=128,s=null):(_s(),b=u.fallback,d=s.mode,u=Hd({mode:"visible",children:u.children},d),b=Da(b,d,o,null),b.flags|=2,u.return=s,b.return=s,u.sibling=b,s.child=u,La(s,n.child,null,o),u=s.child,u.memoizedState=ag(o),u.childLanes=og(n,y,o),s.memoizedState=sg,s=ec(null,u));else if(gs(s),qg(b)){if(y=b.nextSibling&&b.nextSibling.dataset,y)var j=y.dgst;y=j,u=Error(i(419)),u.stack="",u.digest=y,ju({value:u,source:null,stack:null}),s=ug(n,s,o)}else if(Ft||Qo(n,s,o,!1),y=(o&n.childLanes)!==0,Ft||y){if(y=st,y!==null&&(u=Tu(y,o),u!==0&&u!==C.retryLane))throw C.retryLane=u,Na(n,u),kn(y,n,u),ig;jg(b)||Zd(),s=ug(n,s,o)}else jg(b)?(s.flags|=192,s.child=n.child,s=null):(n=C.treeContext,lt=hi(b.nextSibling),on=s,ze=!0,cs=null,ui=!1,n!==null&&wE(s,n),s=lg(s,u.children),s.flags|=4096);return s}return d?(_s(),b=u.fallback,d=s.mode,C=n.child,j=C.sibling,u=Ir(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&65011712,j!==null?b=Ir(j,b):(b=Da(b,d,o,null),b.flags|=2),b.return=s,u.return=s,u.sibling=b,s.child=u,ec(null,u),u=s.child,b=n.child.memoizedState,b===null?b=ag(o):(d=b.cachePool,d!==null?(C=zt._currentValue,d=d.parent!==C?{parent:C,pool:C}:d):d=NE(),b={baseLanes:b.baseLanes|o,cachePool:d}),u.memoizedState=b,u.childLanes=og(n,y,o),s.memoizedState=sg,ec(n.child,u)):(gs(s),o=n.child,n=o.sibling,o=Ir(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,n!==null&&(y=s.deletions,y===null?(s.deletions=[n],s.flags|=16):y.push(n)),s.child=o,s.memoizedState=null,o)}function lg(n,s){return s=Hd({mode:"visible",children:s},n.mode),s.return=n,n.child=s}function Hd(n,s){return n=qn(22,n,null,s),n.lanes=0,n}function ug(n,s,o){return La(s,n.child,null,o),n=lg(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function jT(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),Ip(n.return,s,o)}function cg(n,s,o,u,d,m){var y=n.memoizedState;y===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d,treeForkCount:m}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=u,y.tail=o,y.tailMode=d,y.treeForkCount=m)}function qT(n,s,o){var u=s.pendingProps,d=u.revealOrder,m=u.tail;u=u.children;var y=Nt.current,b=(y&2)!==0;if(b?(y=y&1|2,s.flags|=128):y&=1,ce(Nt,y),un(n,s,u,o),u=ze?Fu:0,!b&&n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&jT(n,o,s);else if(n.tag===19)jT(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(d){case"forwards":for(o=s.child,d=null;o!==null;)n=o.alternate,n!==null&&Vd(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=s.child,s.child=null):(d=o.sibling,o.sibling=null),cg(s,!1,d,o,m,u);break;case"backwards":case"unstable_legacy-backwards":for(o=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&Vd(n)===null){s.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}cg(s,!0,o,null,m,u);break;case"together":cg(s,!1,null,null,void 0,u);break;default:s.memoizedState=null}return s.child}function Dr(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),Es|=s.lanes,(o&s.childLanes)===0)if(n!==null){if(Qo(n,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(n!==null&&s.child!==n.child)throw Error(i(153));if(s.child!==null){for(n=s.child,o=Ir(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=Ir(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function hg(n,s){return(n.lanes&s)!==0?!0:(n=n.dependencies,!!(n!==null&&Id(n)))}function CC(n,s,o){switch(s.tag){case 3:Qt(s,s.stateNode.containerInfo),ds(s,zt,n.memoizedState.cache),xa();break;case 27:case 5:ha(s);break;case 4:Qt(s,s.stateNode.containerInfo);break;case 10:ds(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,Mp(s),null;break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(gs(s),s.flags|=128,null):(o&s.child.childLanes)!==0?FT(n,s,o):(gs(s),n=Dr(n,s,o),n!==null?n.sibling:null);gs(s);break;case 19:var d=(n.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(Qo(n,s,o,!1),u=(o&s.childLanes)!==0),d){if(u)return qT(n,s,o);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ce(Nt,Nt.current),u)break;return null;case 22:return s.lanes=0,kT(n,s,o,s.pendingProps);case 24:ds(s,zt,n.memoizedState.cache)}return Dr(n,s,o)}function HT(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps)Ft=!0;else{if(!hg(n,o)&&(s.flags&128)===0)return Ft=!1,CC(n,s,o);Ft=(n.flags&131072)!==0}else Ft=!1,ze&&(s.flags&1048576)!==0&&bE(s,Fu,s.index);switch(s.lanes=0,s.tag){case 16:e:{var u=s.pendingProps;if(n=ka(s.elementType),s.type=n,typeof n=="function")gp(n)?(u=za(n,u),s.tag=1,s=zT(null,s,n,u,o)):(s.tag=0,s=rg(null,s,n,u,o));else{if(n!=null){var d=n.$$typeof;if(d===_e){s.tag=11,s=VT(null,s,n,u,o);break e}else if(d===S){s.tag=14,s=PT(null,s,n,u,o);break e}}throw s=dt(n)||n,Error(i(306,s,""))}}return s;case 0:return rg(n,s,s.type,s.pendingProps,o);case 1:return u=s.type,d=za(u,s.pendingProps),zT(n,s,u,d,o);case 3:e:{if(Qt(s,s.stateNode.containerInfo),n===null)throw Error(i(387));u=s.pendingProps;var m=s.memoizedState;d=m.element,xp(n,s),Wu(s,u,null,o);var y=s.memoizedState;if(u=y.cache,ds(s,zt,u),u!==m.cache&&Ap(s,[zt],o,!0),Yu(),u=y.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:y.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=BT(n,s,u,o);break e}else if(u!==d){d=ai(Error(i(424)),s),ju(d),s=BT(n,s,u,o);break e}else{switch(n=s.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(lt=hi(n.firstChild),on=s,ze=!0,cs=null,ui=!0,o=kE(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(xa(),u===d){s=Dr(n,s,o);break e}un(n,s,u,o)}s=s.child}return s;case 26:return qd(n,s),n===null?(o=tw(s.type,null,s.pendingProps,null))?s.memoizedState=o:ze||(o=s.type,n=s.pendingProps,u=of(De.current).createElement(o),u[Mt]=s,u[Jt]=n,cn(u,o,n),Lt(u),s.stateNode=u):s.memoizedState=tw(s.type,n.memoizedProps,s.pendingProps,n.memoizedState),null;case 27:return ha(s),n===null&&ze&&(u=s.stateNode=Jb(s.type,s.pendingProps,De.current),on=s,ui=!0,d=lt,As(s.type)?(Hg=d,lt=hi(u.firstChild)):lt=d),un(n,s,s.pendingProps.children,o),qd(n,s),n===null&&(s.flags|=4194304),s.child;case 5:return n===null&&ze&&((d=u=lt)&&(u=rN(u,s.type,s.pendingProps,ui),u!==null?(s.stateNode=u,on=s,lt=hi(u.firstChild),ui=!1,d=!0):d=!1),d||hs(s)),ha(s),d=s.type,m=s.pendingProps,y=n!==null?n.memoizedProps:null,u=m.children,zg(d,m)?u=null:y!==null&&zg(d,y)&&(s.flags|=32),s.memoizedState!==null&&(d=Up(n,s,vC,null,null,o),pc._currentValue=d),qd(n,s),un(n,s,u,o),s.child;case 6:return n===null&&ze&&((n=o=lt)&&(o=sN(o,s.pendingProps,ui),o!==null?(s.stateNode=o,on=s,lt=null,n=!0):n=!1),n||hs(s)),null;case 13:return FT(n,s,o);case 4:return Qt(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=La(s,null,u,o):un(n,s,u,o),s.child;case 11:return VT(n,s,s.type,s.pendingProps,o);case 7:return un(n,s,s.pendingProps,o),s.child;case 8:return un(n,s,s.pendingProps.children,o),s.child;case 12:return un(n,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,ds(s,s.type,u.value),un(n,s,u.children,o),s.child;case 9:return d=s.type._context,u=s.pendingProps.children,Pa(s),d=ln(d),u=u(d),s.flags|=1,un(n,s,u,o),s.child;case 14:return PT(n,s,s.type,s.pendingProps,o);case 15:return OT(n,s,s.type,s.pendingProps,o);case 19:return qT(n,s,o);case 31:return RC(n,s,o);case 22:return kT(n,s,o,s.pendingProps);case 24:return Pa(s),u=ln(zt),n===null?(d=Cp(),d===null&&(d=st,m=Sp(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),s.memoizedState={parent:u,cache:d},Dp(s),ds(s,zt,d)):((n.lanes&o)!==0&&(xp(n,s),Wu(s,null,null,o),Yu()),d=n.memoizedState,m=s.memoizedState,d.parent!==u?(d={parent:u,cache:u},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),ds(s,zt,u)):(u=m.cache,ds(s,zt,u),u!==d.cache&&Ap(s,[zt],o,!0))),un(n,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function xr(n){n.flags|=4}function dg(n,s,o,u,d){if((s=(n.mode&32)!==0)&&(s=!1),s){if(n.flags|=16777216,(d&335544128)===d)if(n.stateNode.complete)n.flags|=8192;else if(_b())n.flags|=8192;else throw Ma=Cd,Np}else n.flags&=-16777217}function GT(n,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!aw(s))if(_b())n.flags|=8192;else throw Ma=Cd,Np}function Gd(n,s){s!==null&&(n.flags|=4),n.flags&16384&&(s=n.tag!==22?Xh():536870912,n.lanes|=s,sl|=s)}function tc(n,s){if(!ze)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function ut(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function NC(n,s,o){var u=s.pendingProps;switch(Ep(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(s),null;case 1:return ut(s),null;case 3:return o=s.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),Rr(zt),ft(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Ko(s)?xr(s):n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,bp())),ut(s),null;case 26:var d=s.type,m=s.memoizedState;return n===null?(xr(s),m!==null?(ut(s),GT(s,m)):(ut(s),dg(s,d,null,u,o))):m?m!==n.memoizedState?(xr(s),ut(s),GT(s,m)):(ut(s),s.flags&=-16777217):(n=n.memoizedProps,n!==u&&xr(s),ut(s),dg(s,d,n,u,o)),null;case 27:if(Io(s),o=De.current,d=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&xr(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return ut(s),null}n=de.current,Ko(s)?IE(s):(n=Jb(d,u,o),s.stateNode=n,xr(s))}return ut(s),null;case 5:if(Io(s),d=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&xr(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return ut(s),null}if(m=de.current,Ko(s))IE(s);else{var y=of(De.current);switch(m){case 1:m=y.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=y.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=y.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?y.createElement("select",{is:u.is}):y.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?y.createElement(d,{is:u.is}):y.createElement(d)}}m[Mt]=s,m[Jt]=u;e:for(y=s.child;y!==null;){if(y.tag===5||y.tag===6)m.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===s)break e;for(;y.sibling===null;){if(y.return===null||y.return===s)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}s.stateNode=m;e:switch(cn(m,d,u),d){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}u&&xr(s)}}return ut(s),dg(s,s.type,n===null?null:n.memoizedProps,s.pendingProps,o),null;case 6:if(n&&s.stateNode!=null)n.memoizedProps!==u&&xr(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(i(166));if(n=De.current,Ko(s)){if(n=s.stateNode,o=s.memoizedProps,u=null,d=on,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}n[Mt]=s,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||Fb(n.nodeValue,o)),n||hs(s,!0)}else n=of(n).createTextNode(u),n[Mt]=s,s.stateNode=n}return ut(s),null;case 31:if(o=s.memoizedState,n===null||n.memoizedState!==null){if(u=Ko(s),o!==null){if(n===null){if(!u)throw Error(i(318));if(n=s.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(557));n[Mt]=s}else xa(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ut(s),n=!1}else o=bp(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=o),n=!0;if(!n)return s.flags&256?(Gn(s),s):(Gn(s),null);if((s.flags&128)!==0)throw Error(i(558))}return ut(s),null;case 13:if(u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=Ko(s),u!==null&&u.dehydrated!==null){if(n===null){if(!d)throw Error(i(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[Mt]=s}else xa(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ut(s),d=!1}else d=bp(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Gn(s),s):(Gn(s),null)}return Gn(s),(s.flags&128)!==0?(s.lanes=o,s):(o=u!==null,n=n!==null&&n.memoizedState!==null,o&&(u=s.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==d&&(u.flags|=2048)),o!==n&&o&&(s.child.flags|=8192),Gd(s,s.updateQueue),ut(s),null);case 4:return ft(),n===null&&Og(s.stateNode.containerInfo),ut(s),null;case 10:return Rr(s.type),ut(s),null;case 19:if(ee(Nt),u=s.memoizedState,u===null)return ut(s),null;if(d=(s.flags&128)!==0,m=u.rendering,m===null)if(d)tc(u,!1);else{if(wt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(m=Vd(n),m!==null){for(s.flags|=128,tc(u,!1),n=m.updateQueue,s.updateQueue=n,Gd(s,n),s.subtreeFlags=0,n=o,o=s.child;o!==null;)vE(o,n),o=o.sibling;return ce(Nt,Nt.current&1|2),ze&&Ar(s,u.treeForkCount),s.child}n=n.sibling}u.tail!==null&&Tn()>$d&&(s.flags|=128,d=!0,tc(u,!1),s.lanes=4194304)}else{if(!d)if(n=Vd(m),n!==null){if(s.flags|=128,d=!0,n=n.updateQueue,s.updateQueue=n,Gd(s,n),tc(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!ze)return ut(s),null}else 2*Tn()-u.renderingStartTime>$d&&o!==536870912&&(s.flags|=128,d=!0,tc(u,!1),s.lanes=4194304);u.isBackwards?(m.sibling=s.child,s.child=m):(n=u.last,n!==null?n.sibling=m:s.child=m,u.last=m)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Tn(),n.sibling=null,o=Nt.current,ce(Nt,d?o&1|2:o&1),ze&&Ar(s,u.treeForkCount),n):(ut(s),null);case 22:case 23:return Gn(s),kp(),u=s.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(ut(s),s.subtreeFlags&6&&(s.flags|=8192)):ut(s),o=s.updateQueue,o!==null&&Gd(s,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),n!==null&&ee(Oa),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Rr(zt),ut(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function DC(n,s){switch(Ep(s),s.tag){case 1:return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Rr(zt),ft(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 26:case 27:case 5:return Io(s),null;case 31:if(s.memoizedState!==null){if(Gn(s),s.alternate===null)throw Error(i(340));xa()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 13:if(Gn(s),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(i(340));xa()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return ee(Nt),null;case 4:return ft(),null;case 10:return Rr(s.type),null;case 22:case 23:return Gn(s),kp(),n!==null&&ee(Oa),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 24:return Rr(zt),null;case 25:return null;default:return null}}function KT(n,s){switch(Ep(s),s.tag){case 3:Rr(zt),ft();break;case 26:case 27:case 5:Io(s);break;case 4:ft();break;case 31:s.memoizedState!==null&&Gn(s);break;case 13:Gn(s);break;case 19:ee(Nt);break;case 10:Rr(s.type);break;case 22:case 23:Gn(s),kp(),n!==null&&ee(Oa);break;case 24:Rr(zt)}}function nc(n,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&n)===n){u=void 0;var m=o.create,y=o.inst;u=m(),y.destroy=u}o=o.next}while(o!==d)}}catch(b){Je(s,s.return,b)}}function ys(n,s,o){try{var u=s.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var m=d.next;u=m;do{if((u.tag&n)===n){var y=u.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,d=s;var C=o,j=b;try{j()}catch(W){Je(d,C,W)}}}u=u.next}while(u!==m)}}catch(W){Je(s,s.return,W)}}function QT(n){var s=n.updateQueue;if(s!==null){var o=n.stateNode;try{LE(s,o)}catch(u){Je(n,n.return,u)}}}function YT(n,s,o){o.props=za(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){Je(n,s,u)}}function ic(n,s){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(d){Je(n,s,d)}}function tr(n,s){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){Je(n,s,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){Je(n,s,d)}else o.current=null}function WT(n){var s=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){Je(n,n.return,d)}}function fg(n,s,o){try{var u=n.stateNode;JC(u,n.type,o,s),u[Jt]=s}catch(d){Je(n,n.return,d)}}function $T(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&As(n.type)||n.tag===4}function mg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||$T(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&As(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function pg(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(n),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Ti));else if(u!==4&&(u===27&&As(n.type)&&(o=n.stateNode,s=null),n=n.child,n!==null))for(pg(n,s,o),n=n.sibling;n!==null;)pg(n,s,o),n=n.sibling}function Kd(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(u===27&&As(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(Kd(n,s,o),n=n.sibling;n!==null;)Kd(n,s,o),n=n.sibling}function XT(n){var s=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);cn(s,u,o),s[Mt]=n,s[Jt]=o}catch(m){Je(n,n.return,m)}}var Vr=!1,jt=!1,gg=!1,JT=typeof WeakSet=="function"?WeakSet:Set,en=null;function xC(n,s){if(n=n.containerInfo,Lg=mf,n=cE(n),up(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var y=0,b=-1,C=-1,j=0,W=0,Z=n,q=null;t:for(;;){for(var Q;Z!==o||d!==0&&Z.nodeType!==3||(b=y+d),Z!==m||u!==0&&Z.nodeType!==3||(C=y+u),Z.nodeType===3&&(y+=Z.nodeValue.length),(Q=Z.firstChild)!==null;)q=Z,Z=Q;for(;;){if(Z===n)break t;if(q===o&&++j===d&&(b=y),q===m&&++W===u&&(C=y),(Q=Z.nextSibling)!==null)break;Z=q,q=Z.parentNode}Z=Q}o=b===-1||C===-1?null:{start:b,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ug={focusedElem:n,selectionRange:o},mf=!1,en=s;en!==null;)if(s=en,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,en=n;else for(;en!==null;){switch(s=en,m=s.alternate,n=s.flags,s.tag){case 0:if((n&4)!==0&&(n=s.updateQueue,n=n!==null?n.events:null,n!==null))for(o=0;o<n.length;o++)d=n[o],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=s,d=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var fe=za(o.type,d);n=u.getSnapshotBeforeUpdate(fe,m),u.__reactInternalSnapshotBeforeUpdate=n}catch(be){Je(o,o.return,be)}}break;case 3:if((n&1024)!==0){if(n=s.stateNode.containerInfo,o=n.nodeType,o===9)Fg(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Fg(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=s.sibling,n!==null){n.return=s.return,en=n;break}en=s.return}}function ZT(n,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Or(n,o),u&4&&nc(5,o);break;case 1:if(Or(n,o),u&4)if(n=o.stateNode,s===null)try{n.componentDidMount()}catch(y){Je(o,o.return,y)}else{var d=za(o.type,s.memoizedProps);s=s.memoizedState;try{n.componentDidUpdate(d,s,n.__reactInternalSnapshotBeforeUpdate)}catch(y){Je(o,o.return,y)}}u&64&&QT(o),u&512&&ic(o,o.return);break;case 3:if(Or(n,o),u&64&&(n=o.updateQueue,n!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{LE(n,s)}catch(y){Je(o,o.return,y)}}break;case 27:s===null&&u&4&&XT(o);case 26:case 5:Or(n,o),s===null&&u&4&&WT(o),u&512&&ic(o,o.return);break;case 12:Or(n,o);break;case 31:Or(n,o),u&4&&nb(n,o);break;case 13:Or(n,o),u&4&&ib(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=BC.bind(null,o),aN(n,o))));break;case 22:if(u=o.memoizedState!==null||Vr,!u){s=s!==null&&s.memoizedState!==null||jt,d=Vr;var m=jt;Vr=u,(jt=s)&&!m?kr(n,o,(o.subtreeFlags&8772)!==0):Or(n,o),Vr=d,jt=m}break;case 30:break;default:Or(n,o)}}function eb(n){var s=n.alternate;s!==null&&(n.alternate=null,eb(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&No(s)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var pt=null,xn=!1;function Pr(n,s,o){for(o=o.child;o!==null;)tb(n,s,o),o=o.sibling}function tb(n,s,o){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(_i,o)}catch{}switch(o.tag){case 26:jt||tr(o,s),Pr(n,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:jt||tr(o,s);var u=pt,d=xn;As(o.type)&&(pt=o.stateNode,xn=!1),Pr(n,s,o),dc(o.stateNode),pt=u,xn=d;break;case 5:jt||tr(o,s);case 6:if(u=pt,d=xn,pt=null,Pr(n,s,o),pt=u,xn=d,pt!==null)if(xn)try{(pt.nodeType===9?pt.body:pt.nodeName==="HTML"?pt.ownerDocument.body:pt).removeChild(o.stateNode)}catch(m){Je(o,s,m)}else try{pt.removeChild(o.stateNode)}catch(m){Je(o,s,m)}break;case 18:pt!==null&&(xn?(n=pt,Qb(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),fl(n)):Qb(pt,o.stateNode));break;case 4:u=pt,d=xn,pt=o.stateNode.containerInfo,xn=!0,Pr(n,s,o),pt=u,xn=d;break;case 0:case 11:case 14:case 15:ys(2,o,s),jt||ys(4,o,s),Pr(n,s,o);break;case 1:jt||(tr(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&YT(o,s,u)),Pr(n,s,o);break;case 21:Pr(n,s,o);break;case 22:jt=(u=jt)||o.memoizedState!==null,Pr(n,s,o),jt=u;break;default:Pr(n,s,o)}}function nb(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{fl(n)}catch(o){Je(s,s.return,o)}}}function ib(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{fl(n)}catch(o){Je(s,s.return,o)}}function VC(n){switch(n.tag){case 31:case 13:case 19:var s=n.stateNode;return s===null&&(s=n.stateNode=new JT),s;case 22:return n=n.stateNode,s=n._retryCache,s===null&&(s=n._retryCache=new JT),s;default:throw Error(i(435,n.tag))}}function Qd(n,s){var o=VC(n);s.forEach(function(u){if(!o.has(u)){o.add(u);var d=FC.bind(null,n,u);u.then(d,d)}})}function Vn(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],m=n,y=s,b=y;e:for(;b!==null;){switch(b.tag){case 27:if(As(b.type)){pt=b.stateNode,xn=!1;break e}break;case 5:pt=b.stateNode,xn=!1;break e;case 3:case 4:pt=b.stateNode.containerInfo,xn=!0;break e}b=b.return}if(pt===null)throw Error(i(160));tb(m,y,d),pt=null,xn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)rb(s,n),s=s.sibling}var Ri=null;function rb(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Vn(s,n),Pn(n),u&4&&(ys(3,n,n.return),nc(3,n),ys(5,n,n.return));break;case 1:Vn(s,n),Pn(n),u&512&&(jt||o===null||tr(o,o.return)),u&64&&Vr&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=Ri;if(Vn(s,n),Pn(n),u&512&&(jt||o===null||tr(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,d=d.ownerDocument||d;t:switch(u){case"title":m=d.getElementsByTagName("title")[0],(!m||m[Fi]||m[Mt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(u),d.head.insertBefore(m,d.querySelector("head > title"))),cn(m,u,o),m[Mt]=n,Lt(m),u=m;break e;case"link":var y=rw("link","href",d).get(u+(o.href||""));if(y){for(var b=0;b<y.length;b++)if(m=y[b],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){y.splice(b,1);break t}}m=d.createElement(u),cn(m,u,o),d.head.appendChild(m);break;case"meta":if(y=rw("meta","content",d).get(u+(o.content||""))){for(b=0;b<y.length;b++)if(m=y[b],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){y.splice(b,1);break t}}m=d.createElement(u),cn(m,u,o),d.head.appendChild(m);break;default:throw Error(i(468,u))}m[Mt]=n,Lt(m),u=m}n.stateNode=u}else sw(d,n.type,n.stateNode);else n.stateNode=iw(d,u,n.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?sw(d,n.type,n.stateNode):iw(d,u,n.memoizedProps)):u===null&&n.stateNode!==null&&fg(n,n.memoizedProps,o.memoizedProps)}break;case 27:Vn(s,n),Pn(n),u&512&&(jt||o===null||tr(o,o.return)),o!==null&&u&4&&fg(n,n.memoizedProps,o.memoizedProps);break;case 5:if(Vn(s,n),Pn(n),u&512&&(jt||o===null||tr(o,o.return)),n.flags&32){d=n.stateNode;try{Dn(d,"")}catch(fe){Je(n,n.return,fe)}}u&4&&n.stateNode!=null&&(d=n.memoizedProps,fg(n,d,o!==null?o.memoizedProps:d)),u&1024&&(gg=!0);break;case 6:if(Vn(s,n),Pn(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(fe){Je(n,n.return,fe)}}break;case 3:if(cf=null,d=Ri,Ri=lf(s.containerInfo),Vn(s,n),Ri=d,Pn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{fl(s.containerInfo)}catch(fe){Je(n,n.return,fe)}gg&&(gg=!1,sb(n));break;case 4:u=Ri,Ri=lf(n.stateNode.containerInfo),Vn(s,n),Pn(n),Ri=u;break;case 12:Vn(s,n),Pn(n);break;case 31:Vn(s,n),Pn(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Qd(n,u)));break;case 13:Vn(s,n),Pn(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Wd=Tn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Qd(n,u)));break;case 22:d=n.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,j=Vr,W=jt;if(Vr=j||d,jt=W||C,Vn(s,n),jt=W,Vr=j,Pn(n),u&8192)e:for(s=n.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(o===null||C||Vr||jt||Ba(n)),o=null,s=n;;){if(s.tag===5||s.tag===26){if(o===null){C=o=s;try{if(m=C.stateNode,d)y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{b=C.stateNode;var Z=C.memoizedProps.style,q=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;b.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(fe){Je(C,C.return,fe)}}}else if(s.tag===6){if(o===null){C=s;try{C.stateNode.nodeValue=d?"":C.memoizedProps}catch(fe){Je(C,C.return,fe)}}}else if(s.tag===18){if(o===null){C=s;try{var Q=C.stateNode;d?Yb(Q,!0):Yb(C.stateNode,!1)}catch(fe){Je(C,C.return,fe)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===n)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Qd(n,o))));break;case 19:Vn(s,n),Pn(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Qd(n,u)));break;case 30:break;case 21:break;default:Vn(s,n),Pn(n)}}function Pn(n){var s=n.flags;if(s&2){try{for(var o,u=n.return;u!==null;){if($T(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var d=o.stateNode,m=mg(n);Kd(n,m,d);break;case 5:var y=o.stateNode;o.flags&32&&(Dn(y,""),o.flags&=-33);var b=mg(n);Kd(n,b,y);break;case 3:case 4:var C=o.stateNode.containerInfo,j=mg(n);pg(n,j,C);break;default:throw Error(i(161))}}catch(W){Je(n,n.return,W)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function sb(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var s=n;sb(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),n=n.sibling}}function Or(n,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)ZT(n,s.alternate,s),s=s.sibling}function Ba(n){for(n=n.child;n!==null;){var s=n;switch(s.tag){case 0:case 11:case 14:case 15:ys(4,s,s.return),Ba(s);break;case 1:tr(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&YT(s,s.return,o),Ba(s);break;case 27:dc(s.stateNode);case 26:case 5:tr(s,s.return),Ba(s);break;case 22:s.memoizedState===null&&Ba(s);break;case 30:Ba(s);break;default:Ba(s)}n=n.sibling}}function kr(n,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,d=n,m=s,y=m.flags;switch(m.tag){case 0:case 11:case 15:kr(d,m,o),nc(4,m);break;case 1:if(kr(d,m,o),u=m,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(j){Je(u,u.return,j)}if(u=m,d=u.updateQueue,d!==null){var b=u.stateNode;try{var C=d.shared.hiddenCallbacks;if(C!==null)for(d.shared.hiddenCallbacks=null,d=0;d<C.length;d++)ME(C[d],b)}catch(j){Je(u,u.return,j)}}o&&y&64&&QT(m),ic(m,m.return);break;case 27:XT(m);case 26:case 5:kr(d,m,o),o&&u===null&&y&4&&WT(m),ic(m,m.return);break;case 12:kr(d,m,o);break;case 31:kr(d,m,o),o&&y&4&&nb(d,m);break;case 13:kr(d,m,o),o&&y&4&&ib(d,m);break;case 22:m.memoizedState===null&&kr(d,m,o),ic(m,m.return);break;case 30:break;default:kr(d,m,o)}s=s.sibling}}function _g(n,s){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(n=s.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&qu(o))}function yg(n,s){n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&qu(n))}function Ci(n,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)ab(n,s,o,u),s=s.sibling}function ab(n,s,o,u){var d=s.flags;switch(s.tag){case 0:case 11:case 15:Ci(n,s,o,u),d&2048&&nc(9,s);break;case 1:Ci(n,s,o,u);break;case 3:Ci(n,s,o,u),d&2048&&(n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&qu(n)));break;case 12:if(d&2048){Ci(n,s,o,u),n=s.stateNode;try{var m=s.memoizedProps,y=m.id,b=m.onPostCommit;typeof b=="function"&&b(y,s.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(C){Je(s,s.return,C)}}else Ci(n,s,o,u);break;case 31:Ci(n,s,o,u);break;case 13:Ci(n,s,o,u);break;case 23:break;case 22:m=s.stateNode,y=s.alternate,s.memoizedState!==null?m._visibility&2?Ci(n,s,o,u):rc(n,s):m._visibility&2?Ci(n,s,o,u):(m._visibility|=2,nl(n,s,o,u,(s.subtreeFlags&10256)!==0||!1)),d&2048&&_g(y,s);break;case 24:Ci(n,s,o,u),d&2048&&yg(s.alternate,s);break;default:Ci(n,s,o,u)}}function nl(n,s,o,u,d){for(d=d&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=n,y=s,b=o,C=u,j=y.flags;switch(y.tag){case 0:case 11:case 15:nl(m,y,b,C,d),nc(8,y);break;case 23:break;case 22:var W=y.stateNode;y.memoizedState!==null?W._visibility&2?nl(m,y,b,C,d):rc(m,y):(W._visibility|=2,nl(m,y,b,C,d)),d&&j&2048&&_g(y.alternate,y);break;case 24:nl(m,y,b,C,d),d&&j&2048&&yg(y.alternate,y);break;default:nl(m,y,b,C,d)}s=s.sibling}}function rc(n,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=n,u=s,d=u.flags;switch(u.tag){case 22:rc(o,u),d&2048&&_g(u.alternate,u);break;case 24:rc(o,u),d&2048&&yg(u.alternate,u);break;default:rc(o,u)}s=s.sibling}}var sc=8192;function il(n,s,o){if(n.subtreeFlags&sc)for(n=n.child;n!==null;)ob(n,s,o),n=n.sibling}function ob(n,s,o){switch(n.tag){case 26:il(n,s,o),n.flags&sc&&n.memoizedState!==null&&yN(o,Ri,n.memoizedState,n.memoizedProps);break;case 5:il(n,s,o);break;case 3:case 4:var u=Ri;Ri=lf(n.stateNode.containerInfo),il(n,s,o),Ri=u;break;case 22:n.memoizedState===null&&(u=n.alternate,u!==null&&u.memoizedState!==null?(u=sc,sc=16777216,il(n,s,o),sc=u):il(n,s,o));break;default:il(n,s,o)}}function lb(n){var s=n.alternate;if(s!==null&&(n=s.child,n!==null)){s.child=null;do s=n.sibling,n.sibling=null,n=s;while(n!==null)}}function ac(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];en=u,cb(u,n)}lb(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ub(n),n=n.sibling}function ub(n){switch(n.tag){case 0:case 11:case 15:ac(n),n.flags&2048&&ys(9,n,n.return);break;case 3:ac(n);break;case 12:ac(n);break;case 22:var s=n.stateNode;n.memoizedState!==null&&s._visibility&2&&(n.return===null||n.return.tag!==13)?(s._visibility&=-3,Yd(n)):ac(n);break;default:ac(n)}}function Yd(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];en=u,cb(u,n)}lb(n)}for(n=n.child;n!==null;){switch(s=n,s.tag){case 0:case 11:case 15:ys(8,s,s.return),Yd(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Yd(s));break;default:Yd(s)}n=n.sibling}}function cb(n,s){for(;en!==null;){var o=en;switch(o.tag){case 0:case 11:case 15:ys(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:qu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,en=u;else e:for(o=n;en!==null;){u=en;var d=u.sibling,m=u.return;if(eb(u),u===o){en=null;break e}if(d!==null){d.return=m,en=d;break e}en=m}}}var PC={getCacheForType:function(n){var s=ln(zt),o=s.data.get(n);return o===void 0&&(o=n(),s.data.set(n,o)),o},cacheSignal:function(){return ln(zt).controller.signal}},OC=typeof WeakMap=="function"?WeakMap:Map,Qe=0,st=null,Ve=null,Me=0,Xe=0,Kn=null,vs=!1,rl=!1,vg=!1,Mr=0,wt=0,Es=0,Fa=0,Eg=0,Qn=0,sl=0,oc=null,On=null,Tg=!1,Wd=0,hb=0,$d=1/0,Xd=null,Ts=null,Wt=0,bs=null,al=null,Lr=0,bg=0,wg=null,db=null,lc=0,Ig=null;function Yn(){return(Qe&2)!==0&&Me!==0?Me&-Me:$.T!==null?Dg():Jh()}function fb(){if(Qn===0)if((Me&536870912)===0||ze){var n=ma;ma<<=1,(ma&3932160)===0&&(ma=262144),Qn=n}else Qn=536870912;return n=Hn.current,n!==null&&(n.flags|=32),Qn}function kn(n,s,o){(n===st&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)&&(ol(n,0),ws(n,Me,Qn,!1)),pa(n,o),((Qe&2)===0||n!==st)&&(n===st&&((Qe&2)===0&&(Fa|=o),wt===4&&ws(n,Me,Qn,!1)),nr(n))}function mb(n,s,o){if((Qe&6)!==0)throw Error(i(327));var u=!o&&(s&127)===0&&(s&n.expiredLanes)===0||yi(n,s),d=u?LC(n,s):Sg(n,s,!0),m=u;do{if(d===0){rl&&!u&&ws(n,s,0,!1);break}else{if(o=n.current.alternate,m&&!kC(o)){d=Sg(n,s,!1),m=!1;continue}if(d===2){if(m=s,n.errorRecoveryDisabledLanes&m)var y=0;else y=n.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){s=y;e:{var b=n;d=oc;var C=b.current.memoizedState.isDehydrated;if(C&&(ol(b,y).flags|=256),y=Sg(b,y,!1),y!==2){if(vg&&!C){b.errorRecoveryDisabledLanes|=m,Fa|=m,d=4;break e}m=On,On=d,m!==null&&(On===null?On=m:On.push.apply(On,m))}d=y}if(m=!1,d!==2)continue}}if(d===1){ol(n,0),ws(n,s,0,!0);break}e:{switch(u=n,m=d,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:ws(u,s,Qn,!vs);break e;case 2:On=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(d=Wd+300-Tn(),10<d)){if(ws(u,s,Qn,!vs),Ui(u,0,!0)!==0)break e;Lr=s,u.timeoutHandle=Gb(pb.bind(null,u,o,On,Xd,Tg,s,Qn,Fa,sl,vs,m,"Throttled",-0,0),d);break e}pb(u,o,On,Xd,Tg,s,Qn,Fa,sl,vs,m,null,-0,0)}}break}while(!0);nr(n)}function pb(n,s,o,u,d,m,y,b,C,j,W,Z,q,Q){if(n.timeoutHandle=-1,Z=s.subtreeFlags,Z&8192||(Z&16785408)===16785408){Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ti},ob(s,m,Z);var fe=(m&62914560)===m?Wd-Tn():(m&4194048)===m?hb-Tn():0;if(fe=vN(Z,fe),fe!==null){Lr=m,n.cancelPendingCommit=fe(wb.bind(null,n,s,m,o,u,d,y,b,C,W,Z,null,q,Q)),ws(n,m,y,!j);return}}wb(n,s,m,o,u,d,y,b,C)}function kC(n){for(var s=n;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!jn(m(),d))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ws(n,s,o,u){s&=~Eg,s&=~Fa,n.suspendedLanes|=s,n.pingedLanes&=~s,u&&(n.warmLanes|=s),u=n.expirationTimes;for(var d=s;0<d;){var m=31-Rt(d),y=1<<m;u[m]=-1,d&=~y}o!==0&&ga(n,o,s)}function Jd(){return(Qe&6)===0?(uc(0),!1):!0}function Ag(){if(Ve!==null){if(Xe===0)var n=Ve.return;else n=Ve,Sr=Va=null,Fp(n),Xo=null,Gu=0,n=Ve;for(;n!==null;)KT(n.alternate,n),n=n.return;Ve=null}}function ol(n,s){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,tN(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Lr=0,Ag(),st=n,Ve=o=Ir(n.current,null),Me=s,Xe=0,Kn=null,vs=!1,rl=yi(n,s),vg=!1,sl=Qn=Eg=Fa=Es=wt=0,On=oc=null,Tg=!1,(s&8)!==0&&(s|=s&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=s;0<u;){var d=31-Rt(u),m=1<<d;s|=n[d],u&=~m}return Mr=s,vd(),o}function gb(n,s){Ce=null,$.H=Zu,s===$o||s===Rd?(s=VE(),Xe=3):s===Np?(s=VE(),Xe=4):Xe=s===ig?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Kn=s,Ve===null&&(wt=1,Fd(n,ai(s,n.current)))}function _b(){var n=Hn.current;return n===null?!0:(Me&4194048)===Me?ci===null:(Me&62914560)===Me||(Me&536870912)!==0?n===ci:!1}function yb(){var n=$.H;return $.H=Zu,n===null?Zu:n}function vb(){var n=$.A;return $.A=PC,n}function Zd(){wt=4,vs||(Me&4194048)!==Me&&Hn.current!==null||(rl=!0),(Es&134217727)===0&&(Fa&134217727)===0||st===null||ws(st,Me,Qn,!1)}function Sg(n,s,o){var u=Qe;Qe|=2;var d=yb(),m=vb();(st!==n||Me!==s)&&(Xd=null,ol(n,s)),s=!1;var y=wt;e:do try{if(Xe!==0&&Ve!==null){var b=Ve,C=Kn;switch(Xe){case 8:Ag(),y=6;break e;case 3:case 2:case 9:case 6:Hn.current===null&&(s=!0);var j=Xe;if(Xe=0,Kn=null,ll(n,b,C,j),o&&rl){y=0;break e}break;default:j=Xe,Xe=0,Kn=null,ll(n,b,C,j)}}MC(),y=wt;break}catch(W){gb(n,W)}while(!0);return s&&n.shellSuspendCounter++,Sr=Va=null,Qe=u,$.H=d,$.A=m,Ve===null&&(st=null,Me=0,vd()),y}function MC(){for(;Ve!==null;)Eb(Ve)}function LC(n,s){var o=Qe;Qe|=2;var u=yb(),d=vb();st!==n||Me!==s?(Xd=null,$d=Tn()+500,ol(n,s)):rl=yi(n,s);e:do try{if(Xe!==0&&Ve!==null){s=Ve;var m=Kn;t:switch(Xe){case 1:Xe=0,Kn=null,ll(n,s,m,1);break;case 2:case 9:if(DE(m)){Xe=0,Kn=null,Tb(s);break}s=function(){Xe!==2&&Xe!==9||st!==n||(Xe=7),nr(n)},m.then(s,s);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:DE(m)?(Xe=0,Kn=null,Tb(s)):(Xe=0,Kn=null,ll(n,s,m,7));break;case 5:var y=null;switch(Ve.tag){case 26:y=Ve.memoizedState;case 5:case 27:var b=Ve;if(y?aw(y):b.stateNode.complete){Xe=0,Kn=null;var C=b.sibling;if(C!==null)Ve=C;else{var j=b.return;j!==null?(Ve=j,ef(j)):Ve=null}break t}}Xe=0,Kn=null,ll(n,s,m,5);break;case 6:Xe=0,Kn=null,ll(n,s,m,6);break;case 8:Ag(),wt=6;break e;default:throw Error(i(462))}}UC();break}catch(W){gb(n,W)}while(!0);return Sr=Va=null,$.H=u,$.A=d,Qe=o,Ve!==null?0:(st=null,Me=0,vd(),wt)}function UC(){for(;Ve!==null&&!np();)Eb(Ve)}function Eb(n){var s=HT(n.alternate,n,Mr);n.memoizedProps=n.pendingProps,s===null?ef(n):Ve=s}function Tb(n){var s=n,o=s.alternate;switch(s.tag){case 15:case 0:s=UT(o,s,s.pendingProps,s.type,void 0,Me);break;case 11:s=UT(o,s,s.pendingProps,s.type.render,s.ref,Me);break;case 5:Fp(s);default:KT(o,s),s=Ve=vE(s,Mr),s=HT(o,s,Mr)}n.memoizedProps=n.pendingProps,s===null?ef(n):Ve=s}function ll(n,s,o,u){Sr=Va=null,Fp(s),Xo=null,Gu=0;var d=s.return;try{if(SC(n,d,s,o,Me)){wt=1,Fd(n,ai(o,n.current)),Ve=null;return}}catch(m){if(d!==null)throw Ve=d,m;wt=1,Fd(n,ai(o,n.current)),Ve=null;return}s.flags&32768?(ze||u===1?n=!0:rl||(Me&536870912)!==0?n=!1:(vs=n=!0,(u===2||u===9||u===3||u===6)&&(u=Hn.current,u!==null&&u.tag===13&&(u.flags|=16384))),bb(s,n)):ef(s)}function ef(n){var s=n;do{if((s.flags&32768)!==0){bb(s,vs);return}n=s.return;var o=NC(s.alternate,s,Mr);if(o!==null){Ve=o;return}if(s=s.sibling,s!==null){Ve=s;return}Ve=s=n}while(s!==null);wt===0&&(wt=5)}function bb(n,s){do{var o=DC(n.alternate,n);if(o!==null){o.flags&=32767,Ve=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(n=n.sibling,n!==null)){Ve=n;return}Ve=n=o}while(n!==null);wt=6,Ve=null}function wb(n,s,o,u,d,m,y,b,C){n.cancelPendingCommit=null;do tf();while(Wt!==0);if((Qe&6)!==0)throw Error(i(327));if(s!==null){if(s===n.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=mp,sp(n,o,m,y,b,C),n===st&&(Ve=st=null,Me=0),al=s,bs=n,Lr=o,bg=m,wg=d,db=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,jC(Zr,function(){return Cb(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=$.T,$.T=null,d=ue.p,ue.p=2,y=Qe,Qe|=4;try{xC(n,s,o)}finally{Qe=y,ue.p=d,$.T=u}}Wt=1,Ib(),Ab(),Sb()}}function Ib(){if(Wt===1){Wt=0;var n=bs,s=al,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=$.T,$.T=null;var u=ue.p;ue.p=2;var d=Qe;Qe|=4;try{rb(s,n);var m=Ug,y=cE(n.containerInfo),b=m.focusedElem,C=m.selectionRange;if(y!==b&&b&&b.ownerDocument&&uE(b.ownerDocument.documentElement,b)){if(C!==null&&up(b)){var j=C.start,W=C.end;if(W===void 0&&(W=j),"selectionStart"in b)b.selectionStart=j,b.selectionEnd=Math.min(W,b.value.length);else{var Z=b.ownerDocument||document,q=Z&&Z.defaultView||window;if(q.getSelection){var Q=q.getSelection(),fe=b.textContent.length,be=Math.min(C.start,fe),rt=C.end===void 0?be:Math.min(C.end,fe);!Q.extend&&be>rt&&(y=rt,rt=be,be=y);var L=lE(b,be),x=lE(b,rt);if(L&&x&&(Q.rangeCount!==1||Q.anchorNode!==L.node||Q.anchorOffset!==L.offset||Q.focusNode!==x.node||Q.focusOffset!==x.offset)){var F=Z.createRange();F.setStart(L.node,L.offset),Q.removeAllRanges(),be>rt?(Q.addRange(F),Q.extend(x.node,x.offset)):(F.setEnd(x.node,x.offset),Q.addRange(F))}}}}for(Z=[],Q=b;Q=Q.parentNode;)Q.nodeType===1&&Z.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Z.length;b++){var X=Z[b];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}mf=!!Lg,Ug=Lg=null}finally{Qe=d,ue.p=u,$.T=o}}n.current=s,Wt=2}}function Ab(){if(Wt===2){Wt=0;var n=bs,s=al,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=$.T,$.T=null;var u=ue.p;ue.p=2;var d=Qe;Qe|=4;try{ZT(n,s.alternate,s)}finally{Qe=d,ue.p=u,$.T=o}}Wt=3}}function Sb(){if(Wt===4||Wt===3){Wt=0,Gh();var n=bs,s=al,o=Lr,u=db;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Wt=5:(Wt=0,al=bs=null,Rb(n,n.pendingLanes));var d=n.pendingLanes;if(d===0&&(Ts=null),Er(o),s=s.stateNode,sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(_i,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=$.T,d=ue.p,ue.p=2,$.T=null;try{for(var m=n.onRecoverableError,y=0;y<u.length;y++){var b=u[y];m(b.value,{componentStack:b.stack})}}finally{$.T=s,ue.p=d}}(Lr&3)!==0&&tf(),nr(n),d=n.pendingLanes,(o&261930)!==0&&(d&42)!==0?n===Ig?lc++:(lc=0,Ig=n):lc=0,uc(0)}}function Rb(n,s){(n.pooledCacheLanes&=s)===0&&(s=n.pooledCache,s!=null&&(n.pooledCache=null,qu(s)))}function tf(){return Ib(),Ab(),Sb(),Cb()}function Cb(){if(Wt!==5)return!1;var n=bs,s=bg;bg=0;var o=Er(Lr),u=$.T,d=ue.p;try{ue.p=32>o?32:o,$.T=null,o=wg,wg=null;var m=bs,y=Lr;if(Wt=0,al=bs=null,Lr=0,(Qe&6)!==0)throw Error(i(331));var b=Qe;if(Qe|=4,ub(m.current),ab(m,m.current,y,o),Qe=b,uc(0,!1),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(_i,m)}catch{}return!0}finally{ue.p=d,$.T=u,Rb(n,s)}}function Nb(n,s,o){s=ai(o,s),s=ng(n.stateNode,s,2),n=ps(n,s,2),n!==null&&(pa(n,2),nr(n))}function Je(n,s,o){if(n.tag===3)Nb(n,n,o);else for(;s!==null;){if(s.tag===3){Nb(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ts===null||!Ts.has(u))){n=ai(o,n),o=DT(2),u=ps(s,o,2),u!==null&&(xT(o,u,s,n),pa(u,2),nr(u));break}}s=s.return}}function Rg(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new OC;var d=new Set;u.set(s,d)}else d=u.get(s),d===void 0&&(d=new Set,u.set(s,d));d.has(o)||(vg=!0,d.add(o),n=zC.bind(null,n,s,o),s.then(n,n))}function zC(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,st===n&&(Me&o)===o&&(wt===4||wt===3&&(Me&62914560)===Me&&300>Tn()-Wd?(Qe&2)===0&&ol(n,0):Eg|=o,sl===Me&&(sl=0)),nr(n)}function Db(n,s){s===0&&(s=Xh()),n=Na(n,s),n!==null&&(pa(n,s),nr(n))}function BC(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),Db(n,o)}function FC(n,s){var o=0;switch(n.tag){case 31:case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(s),Db(n,o)}function jC(n,s){return Yt(n,s)}var nf=null,ul=null,Cg=!1,rf=!1,Ng=!1,Is=0;function nr(n){n!==ul&&n.next===null&&(ul===null?nf=ul=n:ul=ul.next=n),rf=!0,Cg||(Cg=!0,HC())}function uc(n,s){if(!Ng&&rf){Ng=!0;do for(var o=!1,u=nf;u!==null;){if(n!==0){var d=u.pendingLanes;if(d===0)var m=0;else{var y=u.suspendedLanes,b=u.pingedLanes;m=(1<<31-Rt(42|n)+1)-1,m&=d&~(y&~b),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,Ob(u,m))}else m=Me,m=Ui(u,u===st?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||yi(u,m)||(o=!0,Ob(u,m));u=u.next}while(o);Ng=!1}}function qC(){xb()}function xb(){rf=Cg=!1;var n=0;Is!==0&&eN()&&(n=Is);for(var s=Tn(),o=null,u=nf;u!==null;){var d=u.next,m=Vb(u,s);m===0?(u.next=null,o===null?nf=d:o.next=d,d===null&&(ul=o)):(o=u,(n!==0||(m&3)!==0)&&(rf=!0)),u=d}Wt!==0&&Wt!==5||uc(n),Is!==0&&(Is=0)}function Vb(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var y=31-Rt(m),b=1<<y,C=d[y];C===-1?((b&o)===0||(b&u)!==0)&&(d[y]=rp(b,s)):C<=s&&(n.expiredLanes|=b),m&=~b}if(s=st,o=Me,o=Ui(n,n===s?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===s&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Jr(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||yi(n,o)){if(s=o&-o,s===n.callbackPriority)return s;switch(u!==null&&Jr(u),Er(o)){case 2:case 8:o=vu;break;case 32:o=Zr;break;case 268435456:o=Kh;break;default:o=Zr}return u=Pb.bind(null,n),o=Yt(o,u),n.callbackPriority=s,n.callbackNode=o,s}return u!==null&&u!==null&&Jr(u),n.callbackPriority=2,n.callbackNode=null,2}function Pb(n,s){if(Wt!==0&&Wt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(tf()&&n.callbackNode!==o)return null;var u=Me;return u=Ui(n,n===st?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(mb(n,u,s),Vb(n,Tn()),n.callbackNode!=null&&n.callbackNode===o?Pb.bind(null,n):null)}function Ob(n,s){if(tf())return null;mb(n,s,!0)}function HC(){nN(function(){(Qe&6)!==0?Yt(yu,qC):xb()})}function Dg(){if(Is===0){var n=Yo;n===0&&(n=Mi,Mi<<=1,(Mi&261888)===0&&(Mi=256)),Is=n}return Is}function kb(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Po(""+n)}function Mb(n,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,n.id&&o.setAttribute("form",n.id),s.parentNode.insertBefore(o,s),n=new FormData(n),o.parentNode.removeChild(o),n}function GC(n,s,o,u,d){if(s==="submit"&&o&&o.stateNode===d){var m=kb((d[Jt]||null).action),y=u.submitter;y&&(s=(s=y[Jt]||null)?kb(s.formAction):y.getAttribute("formAction"),s!==null&&(m=s,y=null));var b=new Wi("action","action",null,u,d);n.push({event:b,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Is!==0){var C=y?Mb(d,y):new FormData(d);$p(o,{pending:!0,data:C,method:d.method,action:m},null,C)}}else typeof m=="function"&&(b.preventDefault(),C=y?Mb(d,y):new FormData(d),$p(o,{pending:!0,data:C,method:d.method,action:m},m,C))},currentTarget:d}]})}}for(var xg=0;xg<fp.length;xg++){var Vg=fp[xg],KC=Vg.toLowerCase(),QC=Vg[0].toUpperCase()+Vg.slice(1);Si(KC,"on"+QC)}Si(fE,"onAnimationEnd"),Si(mE,"onAnimationIteration"),Si(pE,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(uC,"onTransitionRun"),Si(cC,"onTransitionStart"),Si(hC,"onTransitionCancel"),Si(gE,"onTransitionEnd"),Gi("onMouseEnter",["mouseout","mouseover"]),Gi("onMouseLeave",["mouseout","mouseover"]),Gi("onPointerEnter",["pointerout","pointerover"]),Gi("onPointerLeave",["pointerout","pointerover"]),Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cc));function Lb(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(s)for(var y=u.length-1;0<=y;y--){var b=u[y],C=b.instance,j=b.currentTarget;if(b=b.listener,C!==m&&d.isPropagationStopped())break e;m=b,d.currentTarget=j;try{m(d)}catch(W){yd(W)}d.currentTarget=null,m=C}else for(y=0;y<u.length;y++){if(b=u[y],C=b.instance,j=b.currentTarget,b=b.listener,C!==m&&d.isPropagationStopped())break e;m=b,d.currentTarget=j;try{m(d)}catch(W){yd(W)}d.currentTarget=null,m=C}}}}function Pe(n,s){var o=s[Co];o===void 0&&(o=s[Co]=new Set);var u=n+"__bubble";o.has(u)||(Ub(s,n,2,!1),o.add(u))}function Pg(n,s,o){var u=0;s&&(u|=4),Ub(o,n,u,s)}var sf="_reactListening"+Math.random().toString(36).slice(2);function Og(n){if(!n[sf]){n[sf]=!0,bu.forEach(function(o){o!=="selectionchange"&&(YC.has(o)||Pg(o,!1,n),Pg(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[sf]||(s[sf]=!0,Pg("selectionchange",!1,s))}}function Ub(n,s,o,u){switch(fw(s)){case 2:var d=bN;break;case 8:d=wN;break;default:d=Wg}o=d.bind(null,s,o,n),d=void 0,!Ta||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(s,o,{capture:!0,passive:d}):n.addEventListener(s,o,!0):d!==void 0?n.addEventListener(s,o,{passive:d}):n.addEventListener(s,o,!1)}function kg(n,s,o,u,d){var m=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var y=u.tag;if(y===3||y===4){var b=u.stateNode.containerInfo;if(b===d)break;if(y===4)for(y=u.return;y!==null;){var C=y.tag;if((C===3||C===4)&&y.stateNode.containerInfo===d)return;y=y.return}for(;b!==null;){if(y=ji(b),y===null)return;if(C=y.tag,C===5||C===6||C===26||C===27){u=m=y;continue e}b=b.parentNode}}u=u.return}ss(function(){var j=m,W=ni(o),Z=[];e:{var q=_E.get(n);if(q!==void 0){var Q=Wi,fe=n;switch(n){case"keypress":if(wa(o)===0)break e;case"keydown":case"keyup":Q=pd;break;case"focusin":fe="focus",Q=Aa;break;case"focusout":fe="blur",Q=Aa;break;case"beforeblur":case"afterblur":Q=Aa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=ad;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=_;break;case fE:case mE:case pE:Q=ld;break;case gE:Q=I;break;case"scroll":case"scrollend":Q=Ou;break;case"wheel":Q=K;break;case"copy":case"cut":case"paste":Q=ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=wr;break;case"toggle":case"beforetoggle":Q=Re}var be=(s&4)!==0,rt=!be&&(n==="scroll"||n==="scrollend"),L=be?q!==null?q+"Capture":null:q;be=[];for(var x=j,F;x!==null;){var X=x;if(F=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||F===null||L===null||(X=bi(x,L),X!=null&&be.push(hc(x,X,F))),rt)break;x=x.return}0<be.length&&(q=new Q(q,fe,null,o,W),Z.push({event:q,listeners:be}))}}if((s&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",Q=n==="mouseout"||n==="pointerout",q&&o!==xu&&(fe=o.relatedTarget||o.fromElement)&&(ji(fe)||fe[Bi]))break e;if((Q||q)&&(q=W.window===W?W:(q=W.ownerDocument)?q.defaultView||q.parentWindow:window,Q?(fe=o.relatedTarget||o.toElement,Q=j,fe=fe?ji(fe):null,fe!==null&&(rt=l(fe),be=fe.tag,fe!==rt||be!==5&&be!==27&&be!==6)&&(fe=null)):(Q=null,fe=j),Q!==fe)){if(be=ku,X="onMouseLeave",L="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(be=wr,X="onPointerLeave",L="onPointerEnter",x="pointer"),rt=Q==null?q:Bn(Q),F=fe==null?q:Bn(fe),q=new be(X,x+"leave",Q,o,W),q.target=rt,q.relatedTarget=F,X=null,ji(W)===j&&(be=new be(L,x+"enter",fe,o,W),be.target=F,be.relatedTarget=rt,X=be),rt=X,Q&&fe)t:{for(be=WC,L=Q,x=fe,F=0,X=L;X;X=be(X))F++;X=0;for(var ve=x;ve;ve=be(ve))X++;for(;0<F-X;)L=be(L),F--;for(;0<X-F;)x=be(x),X--;for(;F--;){if(L===x||x!==null&&L===x.alternate){be=L;break t}L=be(L),x=be(x)}be=null}else be=null;Q!==null&&zb(Z,q,Q,be,!1),fe!==null&&rt!==null&&zb(Z,rt,fe,be,!0)}}e:{if(q=j?Bn(j):window,Q=q.nodeName&&q.nodeName.toLowerCase(),Q==="select"||Q==="input"&&q.type==="file")var qe=nE;else if(eE(q))if(iE)qe=aC;else{qe=rC;var ge=iC}else Q=q.nodeName,!Q||Q.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?j&&Vo(j.elementType)&&(qe=nE):qe=sC;if(qe&&(qe=qe(n,j))){tE(Z,qe,o,W);break e}ge&&ge(n,q,j),n==="focusout"&&j&&q.type==="number"&&j.memoizedProps.value!=null&&Cu(q,"number",q.value)}switch(ge=j?Bn(j):window,n){case"focusin":(eE(ge)||ge.contentEditable==="true")&&(Bo=ge,cp=j,Bu=null);break;case"focusout":Bu=cp=Bo=null;break;case"mousedown":hp=!0;break;case"contextmenu":case"mouseup":case"dragend":hp=!1,hE(Z,o,W);break;case"selectionchange":if(lC)break;case"keydown":case"keyup":hE(Z,o,W)}var xe;if(Ke)e:{switch(n){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else zo?Sa(n,o)&&(Le="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Le="onCompositionStart");Le&&(Ji&&o.locale!=="ko"&&(zo||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&zo&&(xe=Pu()):(Yi=W,Vu="value"in Yi?Yi.value:Yi.textContent,zo=!0)),ge=af(j,Le),0<ge.length&&(Le=new Xi(Le,n,null,o,W),Z.push({event:Le,listeners:ge}),xe?Le.data=xe:(xe=Uo(o),xe!==null&&(Le.data=xe)))),(xe=ri?Z1(n,o):eC(n,o))&&(Le=af(j,"onBeforeInput"),0<Le.length&&(ge=new Xi("onBeforeInput","beforeinput",null,o,W),Z.push({event:ge,listeners:Le}),ge.data=xe)),GC(Z,n,j,o,W)}Lb(Z,s)})}function hc(n,s,o){return{instance:n,listener:s,currentTarget:o}}function af(n,s){for(var o=s+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=bi(n,o),d!=null&&u.unshift(hc(n,d,m)),d=bi(n,s),d!=null&&u.push(hc(n,d,m))),n.tag===3)return u;n=n.return}return[]}function WC(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function zb(n,s,o,u,d){for(var m=s._reactName,y=[];o!==null&&o!==u;){var b=o,C=b.alternate,j=b.stateNode;if(b=b.tag,C!==null&&C===u)break;b!==5&&b!==26&&b!==27||j===null||(C=j,d?(j=bi(o,m),j!=null&&y.unshift(hc(o,j,C))):d||(j=bi(o,m),j!=null&&y.push(hc(o,j,C)))),o=o.return}y.length!==0&&n.push({event:s,listeners:y})}var $C=/\r\n?/g,XC=/\u0000|\uFFFD/g;function Bb(n){return(typeof n=="string"?n:""+n).replace($C,`
`).replace(XC,"")}function Fb(n,s){return s=Bb(s),Bb(n)===s}function it(n,s,o,u,d,m){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||Dn(n,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&Dn(n,""+u);break;case"className":Fn(n,"class",u);break;case"tabIndex":Fn(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Fn(n,o,u);break;case"style":Du(n,u,m);break;case"data":if(s!=="object"){Fn(n,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Po(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&it(n,s,"name",d.name,d,null),it(n,s,"formEncType",d.formEncType,d,null),it(n,s,"formMethod",d.formMethod,d,null),it(n,s,"formTarget",d.formTarget,d,null)):(it(n,s,"encType",d.encType,d,null),it(n,s,"method",d.method,d,null),it(n,s,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Po(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Ti);break;case"onScroll":u!=null&&Pe("scroll",n);break;case"onScrollEnd":u!=null&&Pe("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Po(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Pe("beforetoggle",n),Pe("toggle",n),Do(n,"popover",u);break;case"xlinkActuate":Ut(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Ut(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Ut(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Ut(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Ut(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Ut(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Ut(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Ut(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Ut(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Do(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=sd.get(o)||o,Do(n,o,u))}}function Mg(n,s,o,u,d,m){switch(o){case"style":Du(n,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Dn(n,u):(typeof u=="number"||typeof u=="bigint")&&Dn(n,""+u);break;case"onScroll":u!=null&&Pe("scroll",n);break;case"onScrollEnd":u!=null&&Pe("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Ti);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wu.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),s=o.slice(2,d?o.length-7:void 0),m=n[Jt]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(s,m,d),typeof u=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(s,u,d);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Do(n,o,u)}}}function cn(n,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",n),Pe("load",n);var u=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var y=o[m];if(y!=null)switch(m){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:it(n,s,m,y,o,null)}}d&&it(n,s,"srcSet",o.srcSet,o,null),u&&it(n,s,"src",o.src,o,null);return;case"input":Pe("invalid",n);var b=m=y=d=null,C=null,j=null;for(u in o)if(o.hasOwnProperty(u)){var W=o[u];if(W!=null)switch(u){case"name":d=W;break;case"type":y=W;break;case"checked":C=W;break;case"defaultChecked":j=W;break;case"value":m=W;break;case"defaultValue":b=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(i(137,s));break;default:it(n,s,u,W,o,null)}}nd(n,m,b,C,j,y,d,!1);return;case"select":Pe("invalid",n),u=y=m=null;for(d in o)if(o.hasOwnProperty(d)&&(b=o[d],b!=null))switch(d){case"value":m=b;break;case"defaultValue":y=b;break;case"multiple":u=b;default:it(n,s,d,b,o,null)}s=m,o=y,n.multiple=!!u,s!=null?ts(n,!!u,s,!1):o!=null&&ts(n,!!u,o,!0);return;case"textarea":Pe("invalid",n),m=d=u=null;for(y in o)if(o.hasOwnProperty(y)&&(b=o[y],b!=null))switch(y){case"value":u=b;break;case"defaultValue":d=b;break;case"children":m=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(i(91));break;default:it(n,s,y,b,o,null)}ns(n,u,d,m);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:it(n,s,C,u,o,null)}return;case"dialog":Pe("beforetoggle",n),Pe("toggle",n),Pe("cancel",n),Pe("close",n);break;case"iframe":case"object":Pe("load",n);break;case"video":case"audio":for(u=0;u<cc.length;u++)Pe(cc[u],n);break;case"image":Pe("error",n),Pe("load",n);break;case"details":Pe("toggle",n);break;case"embed":case"source":case"link":Pe("error",n),Pe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in o)if(o.hasOwnProperty(j)&&(u=o[j],u!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:it(n,s,j,u,o,null)}return;default:if(Vo(s)){for(W in o)o.hasOwnProperty(W)&&(u=o[W],u!==void 0&&Mg(n,s,W,u,o,void 0));return}}for(b in o)o.hasOwnProperty(b)&&(u=o[b],u!=null&&it(n,s,b,u,o,null))}function JC(n,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,y=null,b=null,C=null,j=null,W=null;for(Q in o){var Z=o[Q];if(o.hasOwnProperty(Q)&&Z!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":C=Z;default:u.hasOwnProperty(Q)||it(n,s,Q,null,u,Z)}}for(var q in u){var Q=u[q];if(Z=o[q],u.hasOwnProperty(q)&&(Q!=null||Z!=null))switch(q){case"type":m=Q;break;case"name":d=Q;break;case"checked":j=Q;break;case"defaultChecked":W=Q;break;case"value":y=Q;break;case"defaultValue":b=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(i(137,s));break;default:Q!==Z&&it(n,s,q,Q,u,Z)}}xo(n,y,b,C,j,W,m,d);return;case"select":Q=y=b=q=null;for(m in o)if(C=o[m],o.hasOwnProperty(m)&&C!=null)switch(m){case"value":break;case"multiple":Q=C;default:u.hasOwnProperty(m)||it(n,s,m,null,u,C)}for(d in u)if(m=u[d],C=o[d],u.hasOwnProperty(d)&&(m!=null||C!=null))switch(d){case"value":q=m;break;case"defaultValue":b=m;break;case"multiple":y=m;default:m!==C&&it(n,s,d,m,u,C)}s=b,o=y,u=Q,q!=null?ts(n,!!o,q,!1):!!u!=!!o&&(s!=null?ts(n,!!o,s,!0):ts(n,!!o,o?[]:"",!1));return;case"textarea":Q=q=null;for(b in o)if(d=o[b],o.hasOwnProperty(b)&&d!=null&&!u.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:it(n,s,b,null,u,d)}for(y in u)if(d=u[y],m=o[y],u.hasOwnProperty(y)&&(d!=null||m!=null))switch(y){case"value":q=d;break;case"defaultValue":Q=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==m&&it(n,s,y,d,u,m)}id(n,q,Q);return;case"option":for(var fe in o)if(q=o[fe],o.hasOwnProperty(fe)&&q!=null&&!u.hasOwnProperty(fe))switch(fe){case"selected":n.selected=!1;break;default:it(n,s,fe,null,u,q)}for(C in u)if(q=u[C],Q=o[C],u.hasOwnProperty(C)&&q!==Q&&(q!=null||Q!=null))switch(C){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:it(n,s,C,q,u,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in o)q=o[be],o.hasOwnProperty(be)&&q!=null&&!u.hasOwnProperty(be)&&it(n,s,be,null,u,q);for(j in u)if(q=u[j],Q=o[j],u.hasOwnProperty(j)&&q!==Q&&(q!=null||Q!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(i(137,s));break;default:it(n,s,j,q,u,Q)}return;default:if(Vo(s)){for(var rt in o)q=o[rt],o.hasOwnProperty(rt)&&q!==void 0&&!u.hasOwnProperty(rt)&&Mg(n,s,rt,void 0,u,q);for(W in u)q=u[W],Q=o[W],!u.hasOwnProperty(W)||q===Q||q===void 0&&Q===void 0||Mg(n,s,W,q,u,Q);return}}for(var L in o)q=o[L],o.hasOwnProperty(L)&&q!=null&&!u.hasOwnProperty(L)&&it(n,s,L,null,u,q);for(Z in u)q=u[Z],Q=o[Z],!u.hasOwnProperty(Z)||q===Q||q==null&&Q==null||it(n,s,Z,q,u,Q)}function jb(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ZC(){if(typeof performance.getEntriesByType=="function"){for(var n=0,s=0,o=performance.getEntriesByType("resource"),u=0;u<o.length;u++){var d=o[u],m=d.transferSize,y=d.initiatorType,b=d.duration;if(m&&b&&jb(y)){for(y=0,b=d.responseEnd,u+=1;u<o.length;u++){var C=o[u],j=C.startTime;if(j>b)break;var W=C.transferSize,Z=C.initiatorType;W&&jb(Z)&&(C=C.responseEnd,y+=W*(C<b?1:(b-j)/(C-j)))}if(--u,s+=8*(m+y)/(d.duration/1e3),n++,10<n)break}}if(0<n)return s/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Lg=null,Ug=null;function of(n){return n.nodeType===9?n:n.ownerDocument}function qb(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hb(n,s){if(n===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&s==="foreignObject"?0:n}function zg(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Bg=null;function eN(){var n=window.event;return n&&n.type==="popstate"?n===Bg?!1:(Bg=n,!0):(Bg=null,!1)}var Gb=typeof setTimeout=="function"?setTimeout:void 0,tN=typeof clearTimeout=="function"?clearTimeout:void 0,Kb=typeof Promise=="function"?Promise:void 0,nN=typeof queueMicrotask=="function"?queueMicrotask:typeof Kb<"u"?function(n){return Kb.resolve(null).then(n).catch(iN)}:Gb;function iN(n){setTimeout(function(){throw n})}function As(n){return n==="head"}function Qb(n,s){var o=s,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"||o==="/&"){if(u===0){n.removeChild(d),fl(s);return}u--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")u++;else if(o==="html")dc(n.ownerDocument.documentElement);else if(o==="head"){o=n.ownerDocument.head,dc(o);for(var m=o.firstChild;m;){var y=m.nextSibling,b=m.nodeName;m[Fi]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=y}}else o==="body"&&dc(n.ownerDocument.body);o=d}while(o);fl(s)}function Yb(n,s){var o=n;n=0;do{var u=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(n===0)break;n--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||n++;o=u}while(o)}function Fg(n){var s=n.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Fg(o),No(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function rN(n,s,o,u){for(;n.nodeType===1;){var d=o;if(n.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Fi])switch(s){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==d.rel||n.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||n.getAttribute("title")!==(d.title==null?null:d.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(d.src==null?null:d.src)||n.getAttribute("type")!==(d.type==null?null:d.type)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(s==="input"&&n.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=hi(n.nextSibling),n===null)break}return null}function sN(n,s,o){if(s==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=hi(n.nextSibling),n===null))return null;return n}function Wb(n,s){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=hi(n.nextSibling),n===null))return null;return n}function jg(n){return n.data==="$?"||n.data==="$~"}function qg(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function aN(n,s){var o=n.ownerDocument;if(n.data==="$~")n._reactRetry=s;else if(n.data!=="$?"||o.readyState!=="loading")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function hi(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return n}var Hg=null;function $b(n){n=n.nextSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"||o==="/&"){if(s===0)return hi(n.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}n=n.nextSibling}return null}function Xb(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return n;s--}else o!=="/$"&&o!=="/&"||s++}n=n.previousSibling}return null}function Jb(n,s,o){switch(s=of(o),n){case"html":if(n=s.documentElement,!n)throw Error(i(452));return n;case"head":if(n=s.head,!n)throw Error(i(453));return n;case"body":if(n=s.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function dc(n){for(var s=n.attributes;s.length;)n.removeAttributeNode(s[0]);No(n)}var di=new Map,Zb=new Set;function lf(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ur=ue.d;ue.d={f:oN,r:lN,D:uN,C:cN,L:hN,m:dN,X:mN,S:fN,M:pN};function oN(){var n=Ur.f(),s=Jd();return n||s}function lN(n){var s=ti(n);s!==null&&s.tag===5&&s.type==="form"?gT(s):Ur.r(n)}var cl=typeof document>"u"?null:document;function ew(n,s,o){var u=cl;if(u&&typeof s=="string"&&s){var d=Nn(s);d='link[rel="'+n+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),Zb.has(d)||(Zb.add(d),n={rel:n,crossOrigin:o,href:s},u.querySelector(d)===null&&(s=u.createElement("link"),cn(s,"link",n),Lt(s),u.head.appendChild(s)))}}function uN(n){Ur.D(n),ew("dns-prefetch",n,null)}function cN(n,s){Ur.C(n,s),ew("preconnect",n,s)}function hN(n,s,o){Ur.L(n,s,o);var u=cl;if(u&&n&&s){var d='link[rel="preload"][as="'+Nn(s)+'"]';s==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Nn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Nn(o.imageSizes)+'"]')):d+='[href="'+Nn(n)+'"]';var m=d;switch(s){case"style":m=hl(n);break;case"script":m=dl(n)}di.has(m)||(n=T({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:n,as:s},o),di.set(m,n),u.querySelector(d)!==null||s==="style"&&u.querySelector(fc(m))||s==="script"&&u.querySelector(mc(m))||(s=u.createElement("link"),cn(s,"link",n),Lt(s),u.head.appendChild(s)))}}function dN(n,s){Ur.m(n,s);var o=cl;if(o&&n){var u=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+Nn(u)+'"][href="'+Nn(n)+'"]',m=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=dl(n)}if(!di.has(m)&&(n=T({rel:"modulepreload",href:n},s),di.set(m,n),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(mc(m)))return}u=o.createElement("link"),cn(u,"link",n),Lt(u),o.head.appendChild(u)}}}function fN(n,s,o){Ur.S(n,s,o);var u=cl;if(u&&n){var d=qi(u).hoistableStyles,m=hl(n);s=s||"default";var y=d.get(m);if(!y){var b={loading:0,preload:null};if(y=u.querySelector(fc(m)))b.loading=5;else{n=T({rel:"stylesheet",href:n,"data-precedence":s},o),(o=di.get(m))&&Gg(n,o);var C=y=u.createElement("link");Lt(C),cn(C,"link",n),C._p=new Promise(function(j,W){C.onload=j,C.onerror=W}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,uf(y,s,u)}y={type:"stylesheet",instance:y,count:1,state:b},d.set(m,y)}}}function mN(n,s){Ur.X(n,s);var o=cl;if(o&&n){var u=qi(o).hoistableScripts,d=dl(n),m=u.get(d);m||(m=o.querySelector(mc(d)),m||(n=T({src:n,async:!0},s),(s=di.get(d))&&Kg(n,s),m=o.createElement("script"),Lt(m),cn(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function pN(n,s){Ur.M(n,s);var o=cl;if(o&&n){var u=qi(o).hoistableScripts,d=dl(n),m=u.get(d);m||(m=o.querySelector(mc(d)),m||(n=T({src:n,async:!0,type:"module"},s),(s=di.get(d))&&Kg(n,s),m=o.createElement("script"),Lt(m),cn(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function tw(n,s,o,u){var d=(d=De.current)?lf(d):null;if(!d)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=hl(o.href),o=qi(d).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=hl(o.href);var m=qi(d).hoistableStyles,y=m.get(n);if(y||(d=d.ownerDocument||d,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,y),(m=d.querySelector(fc(n)))&&!m._p&&(y.instance=m,y.state.loading=5),di.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},di.set(n,o),m||gN(d,n,o,y.state))),s&&u===null)throw Error(i(528,""));return y}if(s&&u!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=dl(o),o=qi(d).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function hl(n){return'href="'+Nn(n)+'"'}function fc(n){return'link[rel="stylesheet"]['+n+"]"}function nw(n){return T({},n,{"data-precedence":n.precedence,precedence:null})}function gN(n,s,o,u){n.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=n.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),cn(s,"link",o),Lt(s),n.head.appendChild(s))}function dl(n){return'[src="'+Nn(n)+'"]'}function mc(n){return"script[async]"+n}function iw(n,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=n.querySelector('style[data-href~="'+Nn(o.href)+'"]');if(u)return s.instance=u,Lt(u),u;var d=T({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),Lt(u),cn(u,"style",d),uf(u,o.precedence,n),s.instance=u;case"stylesheet":d=hl(o.href);var m=n.querySelector(fc(d));if(m)return s.state.loading|=4,s.instance=m,Lt(m),m;u=nw(o),(d=di.get(d))&&Gg(u,d),m=(n.ownerDocument||n).createElement("link"),Lt(m);var y=m;return y._p=new Promise(function(b,C){y.onload=b,y.onerror=C}),cn(m,"link",u),s.state.loading|=4,uf(m,o.precedence,n),s.instance=m;case"script":return m=dl(o.src),(d=n.querySelector(mc(m)))?(s.instance=d,Lt(d),d):(u=o,(d=di.get(m))&&(u=T({},o),Kg(u,d)),n=n.ownerDocument||n,d=n.createElement("script"),Lt(d),cn(d,"link",u),n.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,uf(u,o.precedence,n));return s.instance}function uf(n,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,m=d,y=0;y<u.length;y++){var b=u[y];if(b.dataset.precedence===s)m=b;else if(m!==d)break}m?m.parentNode.insertBefore(n,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(n,s.firstChild))}function Gg(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.title==null&&(n.title=s.title)}function Kg(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.integrity==null&&(n.integrity=s.integrity)}var cf=null;function rw(n,s,o){if(cf===null){var u=new Map,d=cf=new Map;d.set(o,u)}else d=cf,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),d=0;d<o.length;d++){var m=o[d];if(!(m[Fi]||m[Mt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var y=m.getAttribute(s)||"";y=n+y;var b=u.get(y);b?b.push(m):u.set(y,[m])}}return u}function sw(n,s,o){n=n.ownerDocument||n,n.head.insertBefore(o,s==="title"?n.querySelector("head > title"):null)}function _N(n,s,o){if(o===1||s.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return n=s.disabled,typeof s.precedence=="string"&&n==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function aw(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function yN(n,s,o,u){if(o.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var d=hl(u.href),m=s.querySelector(fc(d));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(n.count++,n=hf.bind(n),s.then(n,n)),o.state.loading|=4,o.instance=m,Lt(m);return}m=s.ownerDocument||s,u=nw(u),(d=di.get(d))&&Gg(u,d),m=m.createElement("link"),Lt(m);var y=m;y._p=new Promise(function(b,C){y.onload=b,y.onerror=C}),cn(m,"link",u),o.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(n.count++,o=hf.bind(n),s.addEventListener("load",o),s.addEventListener("error",o))}}var Qg=0;function vN(n,s){return n.stylesheets&&n.count===0&&ff(n,n.stylesheets),0<n.count||0<n.imgCount?function(o){var u=setTimeout(function(){if(n.stylesheets&&ff(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+s);0<n.imgBytes&&Qg===0&&(Qg=62500*ZC());var d=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&ff(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>Qg?50:800)+s);return n.unsuspend=o,function(){n.unsuspend=null,clearTimeout(u),clearTimeout(d)}}:null}function hf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ff(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var df=null;function ff(n,s){n.stylesheets=null,n.unsuspend!==null&&(n.count++,df=new Map,s.forEach(EN,n),df=null,hf.call(n))}function EN(n,s){if(!(s.state.loading&4)){var o=df.get(n);if(o)var u=o.get(null);else{o=new Map,df.set(n,o);for(var d=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var y=d[m];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(o.set(y.dataset.precedence,y),u=y)}u&&o.set(null,u)}d=s.instance,y=d.getAttribute("data-precedence"),m=o.get(y)||u,m===u&&o.set(null,d),o.set(y,d),this.count++,u=hf.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),m?m.parentNode.insertBefore(d,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(d,n.firstChild)),s.state.loading|=4}}var pc={$$typeof:se,Provider:null,Consumer:null,_currentValue:Ee,_currentValue2:Ee,_threadCount:0};function TN(n,s,o,u,d,m,y,b,C){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zi(0),this.hiddenUpdates=zi(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function ow(n,s,o,u,d,m,y,b,C,j,W,Z){return n=new TN(n,s,o,y,C,j,W,Z,b),s=1,m===!0&&(s|=24),m=qn(3,null,null,s),n.current=m,m.stateNode=n,s=Sp(),s.refCount++,n.pooledCache=s,s.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:s},Dp(m),n}function lw(n){return n?(n=qo,n):qo}function uw(n,s,o,u,d,m){d=lw(d),u.context===null?u.context=d:u.pendingContext=d,u=ms(s),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=ps(n,u,s),o!==null&&(kn(o,n,s),Qu(o,n,s))}function cw(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function Yg(n,s){cw(n,s),(n=n.alternate)&&cw(n,s)}function hw(n){if(n.tag===13||n.tag===31){var s=Na(n,67108864);s!==null&&kn(s,n,67108864),Yg(n,67108864)}}function dw(n){if(n.tag===13||n.tag===31){var s=Yn();s=_a(s);var o=Na(n,s);o!==null&&kn(o,n,s),Yg(n,s)}}var mf=!0;function bN(n,s,o,u){var d=$.T;$.T=null;var m=ue.p;try{ue.p=2,Wg(n,s,o,u)}finally{ue.p=m,$.T=d}}function wN(n,s,o,u){var d=$.T;$.T=null;var m=ue.p;try{ue.p=8,Wg(n,s,o,u)}finally{ue.p=m,$.T=d}}function Wg(n,s,o,u){if(mf){var d=$g(u);if(d===null)kg(n,s,u,pf,o),mw(n,u);else if(AN(d,n,s,o,u))u.stopPropagation();else if(mw(n,u),s&4&&-1<IN.indexOf(n)){for(;d!==null;){var m=ti(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var y=Li(m.pendingLanes);if(y!==0){var b=m;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var C=1<<31-Rt(y);b.entanglements[1]|=C,y&=~C}nr(m),(Qe&6)===0&&($d=Tn()+500,uc(0))}}break;case 31:case 13:b=Na(m,2),b!==null&&kn(b,m,2),Jd(),Yg(m,2)}if(m=$g(u),m===null&&kg(n,s,u,pf,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else kg(n,s,u,null,o)}}function $g(n){return n=ni(n),Xg(n)}var pf=null;function Xg(n){if(pf=null,n=ji(n),n!==null){var s=l(n);if(s===null)n=null;else{var o=s.tag;if(o===13){if(n=c(s),n!==null)return n;n=null}else if(o===31){if(n=f(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}return pf=n,null}function fw(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fa()){case yu:return 2;case vu:return 8;case Zr:case ip:return 32;case Kh:return 268435456;default:return 32}default:return 32}}var Jg=!1,Ss=null,Rs=null,Cs=null,gc=new Map,_c=new Map,Ns=[],IN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mw(n,s){switch(n){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":Rs=null;break;case"mouseover":case"mouseout":Cs=null;break;case"pointerover":case"pointerout":gc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":_c.delete(s.pointerId)}}function yc(n,s,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},s!==null&&(s=ti(s),s!==null&&hw(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function AN(n,s,o,u,d){switch(s){case"focusin":return Ss=yc(Ss,n,s,o,u,d),!0;case"dragenter":return Rs=yc(Rs,n,s,o,u,d),!0;case"mouseover":return Cs=yc(Cs,n,s,o,u,d),!0;case"pointerover":var m=d.pointerId;return gc.set(m,yc(gc.get(m)||null,n,s,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,_c.set(m,yc(_c.get(m)||null,n,s,o,u,d)),!0}return!1}function pw(n){var s=ji(n.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){n.blockedOn=s,vi(n.priority,function(){dw(o)});return}}else if(s===31){if(s=f(o),s!==null){n.blockedOn=s,vi(n.priority,function(){dw(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function gf(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=$g(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);xu=u,o.target.dispatchEvent(u),xu=null}else return s=ti(o),s!==null&&hw(s),n.blockedOn=o,!1;s.shift()}return!0}function gw(n,s,o){gf(n)&&o.delete(s)}function SN(){Jg=!1,Ss!==null&&gf(Ss)&&(Ss=null),Rs!==null&&gf(Rs)&&(Rs=null),Cs!==null&&gf(Cs)&&(Cs=null),gc.forEach(gw),_c.forEach(gw)}function _f(n,s){n.blockedOn===s&&(n.blockedOn=null,Jg||(Jg=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,SN)))}var yf=null;function _w(n){yf!==n&&(yf=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){yf===n&&(yf=null);for(var s=0;s<n.length;s+=3){var o=n[s],u=n[s+1],d=n[s+2];if(typeof u!="function"){if(Xg(u||o)===null)continue;break}var m=ti(o);m!==null&&(n.splice(s,3),s-=3,$p(m,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function fl(n){function s(C){return _f(C,n)}Ss!==null&&_f(Ss,n),Rs!==null&&_f(Rs,n),Cs!==null&&_f(Cs,n),gc.forEach(s),_c.forEach(s);for(var o=0;o<Ns.length;o++){var u=Ns[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<Ns.length&&(o=Ns[0],o.blockedOn===null);)pw(o),o.blockedOn===null&&Ns.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],m=o[u+1],y=d[Jt]||null;if(typeof m=="function")y||_w(o);else if(y){var b=null;if(m&&m.hasAttribute("formAction")){if(d=m,y=m[Jt]||null)b=y.formAction;else if(Xg(d)!==null)continue}else b=y.action;typeof b=="function"?o[u+1]=b:(o.splice(u,3),u-=3),_w(o)}}}function yw(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(y){return d=y})},focusReset:"manual",scroll:"manual"})}function s(){d!==null&&(d(),d=null),u||setTimeout(o,20)}function o(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,d=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){u=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),d!==null&&(d(),d=null)}}}function Zg(n){this._internalRoot=n}vf.prototype.render=Zg.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,u=Yn();uw(o,u,n,s,null,null)},vf.prototype.unmount=Zg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;uw(n.current,2,null,n,null,null),Jd(),s[Bi]=null}};function vf(n){this._internalRoot=n}vf.prototype.unstable_scheduleHydration=function(n){if(n){var s=Jh();n={blockedOn:null,target:n,priority:s};for(var o=0;o<Ns.length&&s!==0&&s<Ns[o].priority;o++);Ns.splice(o,0,n),o===0&&pw(n)}};var vw=e.version;if(vw!=="19.2.3")throw Error(i(527,vw,"19.2.3"));ue.findDOMNode=function(n){var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=g(s),n=n!==null?v(n):null,n=n===null?null:n.stateNode,n};var RN={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ef=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ef.isDisabled&&Ef.supportsFiber)try{_i=Ef.inject(RN),sn=Ef}catch{}}return Ec.createRoot=function(n,s){if(!a(n))throw Error(i(299));var o=!1,u="",d=ST,m=RT,y=CT;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(y=s.onRecoverableError)),s=ow(n,1,!1,null,null,o,u,null,d,m,y,yw),n[Bi]=s.current,Og(n),new Zg(s)},Ec.hydrateRoot=function(n,s,o){if(!a(n))throw Error(i(299));var u=!1,d="",m=ST,y=RT,b=CT,C=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(y=o.onCaughtError),o.onRecoverableError!==void 0&&(b=o.onRecoverableError),o.formState!==void 0&&(C=o.formState)),s=ow(n,1,!0,s,o??null,u,d,C,m,y,b,yw),s.context=lw(null),o=s.current,u=Yn(),u=_a(u),d=ms(u),d.callback=null,ps(o,d,u),o=u,s.current.lanes=o,pa(s,o),nr(s),n[Bi]=s.current,Og(n),new vf(s)},Ec.version="19.2.3",Ec}var Nw;function UN(){if(Nw)return n_.exports;Nw=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),n_.exports=LN(),n_.exports}var zN=UN();const BN=BA(zN),FN=()=>{};var Dw={};/**
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
 */const FA=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let a=r.charCodeAt(i);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},jN=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const a=r[t++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=r[t++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=r[t++],c=r[t++],f=r[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=r[t++],c=r[t++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},jA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<r.length;a+=3){const l=r[a],c=a+1<r.length,f=c?r[a+1]:0,p=a+2<r.length,g=p?r[a+2]:0,v=l>>2,T=(l&3)<<4|f>>4;let w=(f&15)<<2|g>>6,D=g&63;p||(D=64,c||(w=64)),i.push(t[v],t[T],t[w],t[D])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(FA(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):jN(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<r.length;){const l=t[r.charAt(a++)],f=a<r.length?t[r.charAt(a)]:0;++a;const g=a<r.length?t[r.charAt(a)]:64;++a;const T=a<r.length?t[r.charAt(a)]:64;if(++a,l==null||f==null||g==null||T==null)throw new qN;const w=l<<2|f>>4;if(i.push(w),g!==64){const D=f<<4&240|g>>2;if(i.push(D),T!==64){const Y=g<<6&192|T;i.push(Y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class qN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HN=function(r){const e=FA(r);return jA.encodeByteArray(e,!0)},Hf=function(r){return HN(r).replace(/\./g,"")},my=function(r){try{return jA.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Gf(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!GN(t)||(r[t]=Gf(r[t],e[t]));return r}function GN(r){return r!=="__proto__"}/**
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
 */const KN=()=>py().__FIREBASE_DEFAULTS__,QN=()=>{if(typeof process>"u"||typeof Dw>"u")return;const r=Dw.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},YN=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&my(r[1]);return e&&JSON.parse(e)},gy=()=>{try{return FN()||KN()||QN()||YN()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},_y=()=>{var r;return(r=gy())==null?void 0:r.config},WN=r=>{var e;return(e=gy())==null?void 0:e[`_${r}`]};/**
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
 */class $N{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function nu(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qA(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function XN(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",a=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Hf(JSON.stringify(t)),Hf(JSON.stringify(c)),""].join(".")}const Uc={};function JN(){const r={prod:[],emulator:[]};for(const e of Object.keys(Uc))Uc[e]?r.emulator.push(e):r.prod.push(e);return r}function ZN(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let xw=!1;function HA(r,e){if(typeof window>"u"||typeof document>"u"||!nu(window.location.host)||Uc[r]===e||Uc[r]||xw)return;Uc[r]=e;function t(w){return`__firebase__banner__${w}`}const i="__firebase__banner",l=JN().prod.length>0;function c(){const w=document.getElementById(i);w&&w.remove()}function f(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,D){w.setAttribute("width","24"),w.setAttribute("id",D),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{xw=!0,c()},w}function v(w,D){w.setAttribute("id",D),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function T(){const w=ZN(i),D=t("text"),Y=document.getElementById(D)||document.createElement("span"),O=t("learnmore"),H=document.getElementById(O)||document.createElement("a"),J=t("preprendIcon"),re=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const se=w.element;f(se),v(H,O);const _e=g();p(re,J),se.append(re,Y,H,_e),document.body.appendChild(se)}l?(Y.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(re.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Y.innerText="Preview backend running in this workspace."),Y.setAttribute("id",D)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function _m(){var e;const r=(e=gy())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tD(){return typeof window<"u"||GA()}function GA(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function nD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function KA(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function yy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QA(){const r=Et();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function YA(){return!_m()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WA(){return!_m()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Zc(){try{return typeof indexedDB=="object"}catch{return!1}}function iD(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const rD="FirebaseError";class Sn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=rD,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?sD(l,i):"Error",f=`${this.serviceName}: ${c} (${a}).`;return new Sn(a,f,i)}}function sD(r,e){return r.replace(aD,(t,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const aD=/\{\$([^}]+)}/g;/**
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
 */function Vw(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function oD(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ks(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const a of t){if(!i.includes(a))return!1;const l=r[a],c=e[a];if(Pw(l)&&Pw(c)){if(!Ks(l,c))return!1}else if(l!==c)return!1}for(const a of i)if(!t.includes(a))return!1;return!0}function Pw(r){return r!==null&&typeof r=="object"}/**
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
 */function iu(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Sl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Dc(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function $A(r,e){const t=new lD(r,e);return t.subscribe.bind(t)}class lD{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let a;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");uD(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:i},a.next===void 0&&(a.next=a_),a.error===void 0&&(a.error=a_),a.complete===void 0&&(a.complete=a_);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uD(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function a_(){}/**
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
 */function Te(r){return r&&r._delegate?r._delegate:r}class pr{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class cD{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new $N;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dD(e))try{this.getOrInitializeService({instanceIdentifier:qa})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=qa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qa){return this.instances.has(e)}getOptions(e=qa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&c.resolve(a)}return a}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(i)??new Set;a.add(e),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&e(l,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const a of i)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:hD(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=qa){return this.component?this.component.multipleInstances?e:qa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hD(r){return r===qa?void 0:r}function dD(r){return r.instantiationMode==="EAGER"}/**
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
 */class XA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cD(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const vy=[];var Oe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Oe||(Oe={}));const JA={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},fD=Oe.INFO,mD={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},pD=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),a=mD[e];if(a)console[a](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ym{constructor(e){this.name=e,this._logLevel=fD,this._logHandler=pD,this._userLogHandler=null,vy.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}function gD(r){vy.forEach(e=>{e.setLogLevel(r)})}function _D(r,e){for(const t of vy){let i=null;e&&e.level&&(i=JA[e.level]),r===null?t.userLogHandler=null:t.userLogHandler=(a,l,...c)=>{const f=c.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");l>=(i??a.logLevel)&&r({level:Oe[l].toLowerCase(),message:f,args:c,type:a.name})}}}const yD=(r,e)=>e.some(t=>r instanceof t);let Ow,kw;function vD(){return Ow||(Ow=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ED(){return kw||(kw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ZA=new WeakMap,S_=new WeakMap,e0=new WeakMap,o_=new WeakMap,Ey=new WeakMap;function TD(r){const e=new Promise((t,i)=>{const a=()=>{r.removeEventListener("success",l),r.removeEventListener("error",c)},l=()=>{t(Bs(r.result)),a()},c=()=>{i(r.error),a()};r.addEventListener("success",l),r.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&ZA.set(t,r)}).catch(()=>{}),Ey.set(e,r),e}function bD(r){if(S_.has(r))return;const e=new Promise((t,i)=>{const a=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",c),r.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{i(r.error||new DOMException("AbortError","AbortError")),a()};r.addEventListener("complete",l),r.addEventListener("error",c),r.addEventListener("abort",c)});S_.set(r,e)}let R_={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return S_.get(r);if(e==="objectStoreNames")return r.objectStoreNames||e0.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bs(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function wD(r){R_=r(R_)}function ID(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(l_(this),e,...t);return e0.set(i,e.sort?e.sort():[e]),Bs(i)}:ED().includes(r)?function(...e){return r.apply(l_(this),e),Bs(ZA.get(this))}:function(...e){return Bs(r.apply(l_(this),e))}}function AD(r){return typeof r=="function"?ID(r):(r instanceof IDBTransaction&&bD(r),yD(r,vD())?new Proxy(r,R_):r)}function Bs(r){if(r instanceof IDBRequest)return TD(r);if(o_.has(r))return o_.get(r);const e=AD(r);return e!==r&&(o_.set(r,e),Ey.set(e,r)),e}const l_=r=>Ey.get(r);function SD(r,e,{blocked:t,upgrade:i,blocking:a,terminated:l}={}){const c=indexedDB.open(r,e),f=Bs(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Bs(c.result),p.oldVersion,p.newVersion,Bs(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const RD=["get","getKey","getAll","getAllKeys","count"],CD=["put","add","delete","clear"],u_=new Map;function Mw(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(u_.get(e))return u_.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,a=CD.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(a||RD.includes(t)))return;const l=async function(c,...f){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return i&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),a&&p.done]))[0]};return u_.set(e,l),l}wD(r=>({...r,get:(e,t,i)=>Mw(e,t)||r.get(e,t,i),has:(e,t)=>!!Mw(e,t)||r.has(e,t)}));/**
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
 */class ND{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(DD(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function DD(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kf="@firebase/app",C_="0.14.6";/**
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
 */const jr=new ym("@firebase/app"),xD="@firebase/app-compat",VD="@firebase/analytics-compat",PD="@firebase/analytics",OD="@firebase/app-check-compat",kD="@firebase/app-check",MD="@firebase/auth",LD="@firebase/auth-compat",UD="@firebase/database",zD="@firebase/data-connect",BD="@firebase/database-compat",FD="@firebase/functions",jD="@firebase/functions-compat",qD="@firebase/installations",HD="@firebase/installations-compat",GD="@firebase/messaging",KD="@firebase/messaging-compat",QD="@firebase/performance",YD="@firebase/performance-compat",WD="@firebase/remote-config",$D="@firebase/remote-config-compat",XD="@firebase/storage",JD="@firebase/storage-compat",ZD="@firebase/firestore",ex="@firebase/ai",tx="@firebase/firestore-compat",nx="firebase",ix="12.6.0";/**
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
 */const Qs="[DEFAULT]",rx={[Kf]:"fire-core",[xD]:"fire-core-compat",[PD]:"fire-analytics",[VD]:"fire-analytics-compat",[kD]:"fire-app-check",[OD]:"fire-app-check-compat",[MD]:"fire-auth",[LD]:"fire-auth-compat",[UD]:"fire-rtdb",[zD]:"fire-data-connect",[BD]:"fire-rtdb-compat",[FD]:"fire-fn",[jD]:"fire-fn-compat",[qD]:"fire-iid",[HD]:"fire-iid-compat",[GD]:"fire-fcm",[KD]:"fire-fcm-compat",[QD]:"fire-perf",[YD]:"fire-perf-compat",[WD]:"fire-rc",[$D]:"fire-rc-compat",[XD]:"fire-gcs",[JD]:"fire-gcs-compat",[ZD]:"fire-fst",[tx]:"fire-fst-compat",[ex]:"fire-vertex","fire-js":"fire-js",[nx]:"fire-js-all"};/**
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
 */const Ys=new Map,Pl=new Map,Ol=new Map;function eh(r,e){try{r.container.addComponent(e)}catch(t){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function t0(r,e){r.container.addOrOverwriteComponent(e)}function Ws(r){const e=r.name;if(Ol.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;Ol.set(e,r);for(const t of Ys.values())eh(t,r);for(const t of Pl.values())eh(t,r);return!0}function n0(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function sx(r,e,t=Qs){n0(r,e).clearInstance(t)}function Ty(r){return r.options!==void 0}function i0(r){return Ty(r)?!1:"authIdToken"in r||"appCheckToken"in r||"releaseOnDeref"in r||"automaticDataCollectionEnabled"in r}function _t(r){return r==null?!1:r.settings!==void 0}function ax(){Ol.clear()}/**
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
 */const ox={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new yo("app","Firebase",ox);/**
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
 */let r0=class{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}};/**
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
 */function Lw(r,e){const t=my(r.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,l=new Date().getTime();a-l<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class lx extends r0{constructor(e,t,i,a){const l=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!0,c={name:i,automaticDataCollectionEnabled:l};if(e.apiKey!==void 0)super(e,c,a);else{const f=e;super(f.options,c,a)}this._serverConfig={automaticDataCollectionEnabled:l,...t},this._serverConfig.authIdToken&&Lw(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&Lw(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,xi(Kf,C_,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){wy(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Jn.create("server-app-deleted")}}/**
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
 */const ra=ix;function by(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i={name:Qs,automaticDataCollectionEnabled:!0,...e},a=i.name;if(typeof a!="string"||!a)throw Jn.create("bad-app-name",{appName:String(a)});if(t||(t=_y()),!t)throw Jn.create("no-options");const l=Ys.get(a);if(l){if(Ks(t,l.options)&&Ks(i,l.config))return l;throw Jn.create("duplicate-app",{appName:a})}const c=new XA(a);for(const p of Ol.values())c.addComponent(p);const f=new r0(t,i,c);return Ys.set(a,f),f}function ux(r,e={}){if(tD()&&!GA())throw Jn.create("invalid-server-app-environment");let t,i=e||{};if(r&&(Ty(r)?t=r.options:i0(r)?i=r:t=r),i.automaticDataCollectionEnabled===void 0&&(i.automaticDataCollectionEnabled=!0),t||(t=_y()),!t)throw Jn.create("no-options");const a={...i,...t};a.releaseOnDeref!==void 0&&delete a.releaseOnDeref;const l=v=>[...v].reduce((T,w)=>Math.imul(31,T)+w.charCodeAt(0)|0,0);if(i.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Jn.create("finalization-registry-not-supported",{});const c=""+l(JSON.stringify(a)),f=Pl.get(c);if(f)return f.incRefCount(i.releaseOnDeref),f;const p=new XA(c);for(const v of Ol.values())p.addComponent(v);const g=new lx(t,i,c,p);return Pl.set(c,g),g}function cx(r=Qs){const e=Ys.get(r);if(!e&&r===Qs&&_y())return by();if(!e)throw Jn.create("no-app",{appName:r});return e}function hx(){return Array.from(Ys.values())}async function wy(r){let e=!1;const t=r.name;Ys.has(t)?(e=!0,Ys.delete(t)):Pl.has(t)&&r.decRefCount()<=0&&(Pl.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(i=>i.delete())),r.isDeleted=!0)}function xi(r,e,t){let i=rx[r]??r;t&&(i+=`-${t}`);const a=i.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${i}" with version "${e}":`];a&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(c.join(" "));return}Ws(new pr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function s0(r,e){if(r!==null&&typeof r!="function")throw Jn.create("invalid-log-argument");_D(r,e)}function a0(r){gD(r)}/**
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
 */const dx="firebase-heartbeat-database",fx=1,th="firebase-heartbeat-store";let c_=null;function o0(){return c_||(c_=SD(dx,fx,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(th)}catch(t){console.warn(t)}}}}).catch(r=>{throw Jn.create("idb-open",{originalErrorMessage:r.message})})),c_}async function mx(r){try{const t=(await o0()).transaction(th),i=await t.objectStore(th).get(l0(r));return await t.done,i}catch(e){if(e instanceof Sn)jr.warn(e.message);else{const t=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jr.warn(t.message)}}}async function Uw(r,e){try{const i=(await o0()).transaction(th,"readwrite");await i.objectStore(th).put(e,l0(r)),await i.done}catch(t){if(t instanceof Sn)jr.warn(t.message);else{const i=Jn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jr.warn(i.message)}}}function l0(r){return`${r.name}!${r.options.appId}`}/**
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
 */const px=1024,gx=30;class _x{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vx(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=zw();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>gx){const c=Ex(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){jr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zw(),{heartbeatsToSend:i,unsentEntries:a}=yx(this._heartbeatsCache.heartbeats),l=Hf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return jr.warn(t),""}}}function zw(){return new Date().toISOString().substring(0,10)}function yx(r,e=px){const t=[];let i=r.slice();for(const a of r){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),Bw(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),Bw(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class vx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zc()?iD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await mx(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Uw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Uw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bw(r){return Hf(JSON.stringify({version:2,heartbeats:r})).length}function Ex(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
 */function Tx(r){Ws(new pr("platform-logger",e=>new ND(e),"PRIVATE")),Ws(new pr("heartbeat",e=>new _x(e),"PRIVATE")),xi(Kf,C_,r),xi(Kf,C_,"esm2020"),xi("fire-js","")}Tx("");const bx=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Sn,SDK_VERSION:ra,_DEFAULT_ENTRY_NAME:Qs,_addComponent:eh,_addOrOverwriteComponent:t0,_apps:Ys,_clearComponents:ax,_components:Ol,_getProvider:n0,_isFirebaseApp:Ty,_isFirebaseServerApp:_t,_isFirebaseServerAppSettings:i0,_registerComponent:Ws,_removeServiceInstance:sx,_serverApps:Pl,deleteApp:wy,getApp:cx,getApps:hx,initializeApp:by,initializeServerApp:ux,onLog:s0,registerVersion:xi,setLogLevel:a0},Symbol.toStringTag,{value:"Module"}));/**
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
 */class wx{constructor(e,t){this._delegate=e,this.firebase=t,eh(e,new pr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),wy(this._delegate)))}_getService(e,t=Qs){var a;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((a=i.getComponent())==null?void 0:a.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Qs){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){eh(this._delegate,e)}_addOrOverwriteComponent(e){t0(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Ix={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Fw=new yo("app-compat","Firebase",Ix);/**
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
 */function Ax(r){const e={},t={__esModule:!0,initializeApp:l,app:a,registerVersion:xi,setLogLevel:a0,onLog:s0,apps:null,SDK_VERSION:ra,INTERNAL:{registerComponent:f,removeApp:i,useAsService:p,modularAPIs:bx}};t.default=t,Object.defineProperty(t,"apps",{get:c});function i(g){delete e[g]}function a(g){if(g=g||Qs,!Vw(e,g))throw Fw.create("no-app",{appName:g});return e[g]}a.App=r;function l(g,v={}){const T=by(g,v);if(Vw(e,T.name))return e[T.name];const w=new r(T,t);return e[T.name]=w,w}function c(){return Object.keys(e).map(g=>e[g])}function f(g){const v=g.name,T=v.replace("-compat","");if(Ws(g)&&g.type==="PUBLIC"){const w=(D=a())=>{if(typeof D[T]!="function")throw Fw.create("invalid-app-argument",{appName:v});return D[T]()};g.serviceProps!==void 0&&Gf(w,g.serviceProps),t[T]=w,r.prototype[T]=function(...D){return this._getService.bind(this,v).apply(this,g.multipleInstances?D:[])}}return g.type==="PUBLIC"?t[T]:null}function p(g,v){return v==="serverAuth"?null:v}return t}/**
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
 */function u0(){const r=Ax(wx);r.INTERNAL={...r.INTERNAL,createFirebaseNamespace:u0,extendNamespace:e,createSubscribe:$A,ErrorFactory:yo,deepExtend:Gf};function e(t){Gf(r,t)}return r}const Sx=u0();/**
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
 */const jw=new ym("@firebase/app-compat"),Rx="@firebase/app-compat",Cx="0.5.6";/**
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
 */function Nx(r){xi(Rx,Cx,r)}/**
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
 */try{const r=py();if(r.firebase!==void 0){jw.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=r.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&jw.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const gr=Sx;Nx();var Dx="firebase",xx="12.7.0";/**
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
 */gr.registerVersion(Dx,xx,"app-compat");const Tc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},ml={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function Vx(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function c0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Px=Vx,Ox=c0,h0=new yo("auth","Firebase",c0());/**
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
 */const Qf=new ym("@firebase/auth");function kx(r,...e){Qf.logLevel<=Oe.WARN&&Qf.warn(`Auth (${ra}): ${r}`,...e)}function Nf(r,...e){Qf.logLevel<=Oe.ERROR&&Qf.error(`Auth (${ra}): ${r}`,...e)}/**
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
 */function mn(r,...e){throw Ay(r,...e)}function $t(r,...e){return Ay(r,...e)}function Iy(r,e,t){const i={...Ox(),[e]:t};return new yo("auth","Firebase",i).create(e,{appName:r.name})}function rn(r){return Iy(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ru(r,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&mn(r,"argument-error"),Iy(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ay(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return h0.create(r,...e)}function ie(r,e,...t){if(!r)throw Ay(e,...t)}function ur(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Nf(e),new Error(e)}function Oi(r,e){r||ur(e)}/**
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
 */function nh(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function Sy(){return qw()==="http:"||qw()==="https:"}function qw(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function Mx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sy()||KA()||"connection"in navigator)?navigator.onLine:!0}function Lx(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class wh{constructor(e,t){this.shortDelay=e,this.longDelay=t,Oi(t>e,"Short delay should be less than long delay!"),this.isMobile=eD()||yy()}get(){return Mx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ry(r,e){Oi(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class d0{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ux={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Bx=new wh(3e4,6e4);function At(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function St(r,e,t,i,a={}){return f0(r,a,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const f=iu({key:r.config.apiKey,...c}).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:p,...l};return nD()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&nu(r.emulatorConfig.host)&&(g.credentials="include"),d0.fetch()(await m0(r,r.config.apiHost,t,f),g)})}async function f0(r,e,t){r._canInitEmulator=!1;const i={...Ux,...e};try{const a=new jx(r),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw xc(r,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw xc(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw xc(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw xc(r,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Iy(r,v,g);mn(r,v)}}catch(a){if(a instanceof Sn)throw a;mn(r,"network-request-failed",{message:String(a)})}}async function Kr(r,e,t,i,a={}){const l=await St(r,e,t,i,a);return"mfaPendingCredential"in l&&mn(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function m0(r,e,t,i){const a=`${e}${t}?${i}`,l=r,c=l.config.emulator?Ry(r.config,a):`${r.config.apiScheme}://${a}`;return zx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function Fx(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i($t(this.auth,"network-request-failed")),Bx.get())})}}function xc(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const a=$t(r,e,i);return a.customData._tokenResponse=t,a}/**
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
 */function Hw(r){return r!==void 0&&r.getResponse!==void 0}function Gw(r){return r!==void 0&&r.enterprise!==void 0}class p0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Fx(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function qx(r){return(await St(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function g0(r,e){return St(r,"GET","/v2/recaptchaConfig",At(r,e))}/**
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
 */async function Hx(r,e){return St(r,"POST","/v1/accounts:delete",e)}async function Gx(r,e){return St(r,"POST","/v1/accounts:update",e)}async function Yf(r,e){return St(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function zc(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kx(r,e=!1){const t=Te(r),i=await t.getIdToken(e),a=vm(i);ie(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:zc(h_(a.auth_time)),issuedAtTime:zc(h_(a.iat)),expirationTime:zc(h_(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function h_(r){return Number(r)*1e3}function vm(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Nf("JWT malformed, contained fewer than 3 sections"),null;try{const a=my(t);return a?JSON.parse(a):(Nf("Failed to decode base64 JWT payload"),null)}catch(a){return Nf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Kw(r){const e=vm(r);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qr(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Sn&&Qx(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function Qx({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Yx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function ih(r){var T;const e=r.auth,t=await r.getIdToken(),i=await qr(r,Yf(e,{idToken:t}));ie(i==null?void 0:i.users.length,e,"internal-error");const a=i.users[0];r._notifyReloadListener(a);const l=(T=a.providerUserInfo)!=null&&T.length?_0(a.providerUserInfo):[],c=$x(r.providerData,l),f=r.isAnonymous,p=!(r.email&&a.passwordHash)&&!(c!=null&&c.length),g=f?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new N_(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(r,v)}async function Wx(r){const e=Te(r);await ih(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $x(r,e){return[...r.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function _0(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Xx(r,e){const t=await f0(r,{},async()=>{const i=iu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=r.config,c=await m0(r,a,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:i};return r.emulatorConfig&&nu(r.emulatorConfig.host)&&(p.credentials="include"),d0.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Jx(r,e){return St(r,"POST","/v2/accounts:revokeToken",At(r,e))}/**
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
 */class Rl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const t=Kw(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:a,expiresIn:l}=await Xx(e,t);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:a,expirationTime:l}=t,c=new Rl;return i&&(ie(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),a&&(ie(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(ie(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rl,this.toJSON())}_performRefresh(){return ur("not implemented")}}/**
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
 */function xs(r,e){ie(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Di{constructor({uid:e,auth:t,stsTokenManager:i,...a}){this.providerId="firebase",this.proactiveRefresh=new Yx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new N_(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await qr(this,this.stsTokenManager.getToken(this.auth,e));return ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Kx(this,e)}reload(){return Wx(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Di({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ih(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_t(this.auth.app))return Promise.reject(rn(this.auth));const e=await this.getIdToken();return await qr(this,Hx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,f=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:T,emailVerified:w,isAnonymous:D,providerData:Y,stsTokenManager:O}=t;ie(T&&O,e,"internal-error");const H=Rl.fromJSON(this.name,O);ie(typeof T=="string",e,"internal-error"),xs(i,e.name),xs(a,e.name),ie(typeof w=="boolean",e,"internal-error"),ie(typeof D=="boolean",e,"internal-error"),xs(l,e.name),xs(c,e.name),xs(f,e.name),xs(p,e.name),xs(g,e.name),xs(v,e.name);const J=new Di({uid:T,auth:e,email:a,emailVerified:w,displayName:i,isAnonymous:D,photoURL:c,phoneNumber:l,tenantId:f,stsTokenManager:H,createdAt:g,lastLoginAt:v});return Y&&Array.isArray(Y)&&(J.providerData=Y.map(re=>({...re}))),p&&(J._redirectEventId=p),J}static async _fromIdTokenResponse(e,t,i=!1){const a=new Rl;a.updateFromServerResponse(t);const l=new Di({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await ih(l),l}static async _fromGetAccountInfoResponse(e,t,i){const a=t.users[0];ie(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?_0(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),f=new Rl;f.updateFromIdToken(i);const p=new Di({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new N_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
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
 */const Qw=new Map;function Xn(r){Oi(r instanceof Function,"Expected a class definition");let e=Qw.get(r);return e?(Oi(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Qw.set(r,e),e)}/**
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
 */class y0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}y0.type="NONE";const kl=y0;/**
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
 */function no(r,e,t){return`firebase:${r}:${e}:${t}`}class Cl{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=no(this.userKey,a.apiKey,l),this.fullPersistenceKey=no("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Yf(this.auth,{idToken:e}).catch(()=>{});return t?Di._fromGetAccountInfoResponse(this.auth,t,e):null}return Di._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Cl(Xn(kl),e,i);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Xn(kl);const c=no(i,e.config.apiKey,e.name);let f=null;for(const g of t)try{const v=await g._get(c);if(v){let T;if(typeof v=="string"){const w=await Yf(e,{idToken:v}).catch(()=>{});if(!w)break;T=await Di._fromGetAccountInfoResponse(e,w,v)}else T=Di._fromJSON(e,v);g!==l&&(f=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Cl(l,e,i):(l=p[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Cl(l,e,i))}}/**
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
 */function Yw(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(b0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(v0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(w0(e))return"Blackberry";if(I0(e))return"Webos";if(E0(e))return"Safari";if((e.includes("chrome/")||T0(e))&&!e.includes("edge/"))return"Chrome";if(Ih(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function v0(r=Et()){return/firefox\//i.test(r)}function E0(r=Et()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function T0(r=Et()){return/crios\//i.test(r)}function b0(r=Et()){return/iemobile/i.test(r)}function Ih(r=Et()){return/android/i.test(r)}function w0(r=Et()){return/blackberry/i.test(r)}function I0(r=Et()){return/webos/i.test(r)}function Ah(r=Et()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Zx(r=Et()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(r)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(r)}function eV(r=Et()){var e;return Ah(r)&&!!((e=window.navigator)!=null&&e.standalone)}function tV(){return QA()&&document.documentMode===10}function A0(r=Et()){return Ah(r)||Ih(r)||I0(r)||w0(r)||/windows phone/i.test(r)||b0(r)}/**
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
 */function S0(r,e=[]){let t;switch(r){case"Browser":t=Yw(Et());break;case"Worker":t=`${Yw(Et())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ra}/${i}`}/**
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
 */class nV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,f)=>{try{const p=e(l);c(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function iV(r,e={}){return St(r,"GET","/v2/passwordPolicy",At(r,e))}/**
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
 */const rV=6;class sV{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??rV,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class aV{constructor(e,t,i,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ww(this),this.idTokenSubscription=new Ww(this),this.beforeStateQueue=new nV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xn(t)),this._initializationPromise=this.queue(async()=>{var i,a,l;if(!this._deleted&&(this.persistenceManager=await Cl.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Yf(this,{idToken:e}),i=await Di._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(_t(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=i==null?void 0:i._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(i=p.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ih(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_t(this.app))return Promise.reject(rn(this));const t=e?Te(e):null;return t&&ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _t(this.app)?Promise.reject(rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _t(this.app)?Promise.reject(rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iV(this),t=new sV(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yo("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Jx(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xn(e)||this._popupRedirectResolver;ie(t,this,"argument-error"),this.redirectPersistenceManager=await Cl.create(this,[Xn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=S0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(_t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&kx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Tt(r){return Te(r)}class Ww{constructor(e){this.auth=e,this.observer=null,this.addObserver=$A(t=>this.observer=t)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Sh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oV(r){Sh=r}function Cy(r){return Sh.loadJS(r)}function lV(){return Sh.recaptchaV2Script}function uV(){return Sh.recaptchaEnterpriseScript}function cV(){return Sh.gapiScript}function R0(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */const hV=500,dV=6e4,Tf=1e12;class fV{constructor(e){this.auth=e,this.counter=Tf,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new gV(e,this.auth.name,t||{})),this.counter++,i}reset(e){var i;const t=e||Tf;(i=this._widgets.get(t))==null||i.delete(),this._widgets.delete(t)}getResponse(e){var i;const t=e||Tf;return((i=this._widgets.get(t))==null?void 0:i.getResponse())||""}async execute(e){var i;const t=e||Tf;return(i=this._widgets.get(t))==null||i.execute(),""}}class mV{constructor(){this.enterprise=new pV}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class pV{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class gV{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;ie(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=_V(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},dV)},hV))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function _V(r){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<r;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const yV="recaptcha-enterprise",Bc="NO_RECAPTCHA";class C0{constructor(e){this.type=yV,this.auth=Tt(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{g0(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new p0(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{f(p)})})}function a(l,c,f){const p=window.grecaptcha;Gw(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(Bc)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new mV().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(f=>{if(!t&&Gw(window.grecaptcha))a(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=uV();p.length!==0&&(p+=f),Cy(p).then(()=>{a(f,l,c)}).catch(g=>{c(g)})}}).catch(f=>{c(f)})})}}async function bc(r,e,t,i=!1,a=!1){const l=new C0(r);let c;if(a)c=Bc;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Fs(r,e,t,i,a){var l,c;if(a==="EMAIL_PASSWORD_PROVIDER")if((l=r._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await bc(r,e,t,t==="getOobCode");return i(r,f)}else return i(r,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await bc(r,e,t,t==="getOobCode");return i(r,p)}else return Promise.reject(f)});else if(a==="PHONE_PROVIDER")if((c=r._getRecaptchaConfig())!=null&&c.isProviderEnabled("PHONE_PROVIDER")){const f=await bc(r,e,t);return i(r,f).catch(async p=>{var g;if(((g=r._getRecaptchaConfig())==null?void 0:g.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(p.code==="auth/missing-recaptcha-token"||p.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const v=await bc(r,e,t,!1,!0);return i(r,v)}return Promise.reject(p)})}else{const f=await bc(r,e,t,!1,!0);return i(r,f)}else return Promise.reject(a+" provider is not supported.")}async function vV(r){const e=Tt(r),t=await g0(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new p0(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new C0(e).verify()}function EV(r,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Xn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function TV(r,e,t){const i=Tt(r);ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),l=N0(e),{host:c,port:f}=bV(e),p=f===null?"":`:${f}`,g={url:`${l}//${c}${p}/`},v=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){ie(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ie(Ks(g,i.config.emulator)&&Ks(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,nu(c)?(qA(`${l}//${c}${p}`),HA("Auth",!0)):a||wV()}function N0(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function bV(r){const e=N0(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:$w(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:$w(c)}}}function $w(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function wV(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class su{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ur("not implemented")}_getIdTokenResponse(e){return ur("not implemented")}_linkToIdToken(e,t){return ur("not implemented")}_getReauthenticationResolver(e){return ur("not implemented")}}/**
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
 */async function D0(r,e){return St(r,"POST","/v1/accounts:resetPassword",At(r,e))}async function IV(r,e){return St(r,"POST","/v1/accounts:update",e)}async function AV(r,e){return St(r,"POST","/v1/accounts:signUp",e)}async function SV(r,e){return St(r,"POST","/v1/accounts:update",At(r,e))}/**
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
 */async function RV(r,e){return Kr(r,"POST","/v1/accounts:signInWithPassword",At(r,e))}async function Em(r,e){return St(r,"POST","/v1/accounts:sendOobCode",At(r,e))}async function CV(r,e){return Em(r,e)}async function NV(r,e){return Em(r,e)}async function DV(r,e){return Em(r,e)}async function xV(r,e){return Em(r,e)}/**
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
 */async function VV(r,e){return Kr(r,"POST","/v1/accounts:signInWithEmailLink",At(r,e))}async function PV(r,e){return Kr(r,"POST","/v1/accounts:signInWithEmailLink",At(r,e))}/**
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
 */class rh extends su{constructor(e,t,i,a=null){super("password",i),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new rh(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new rh(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fs(e,t,"signInWithPassword",RV,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return VV(e,{email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fs(e,i,"signUpPassword",AV,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return PV(e,{idToken:t,email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Fr(r,e){return Kr(r,"POST","/v1/accounts:signInWithIdp",At(r,e))}/**
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
 */const OV="http://localhost";class _r extends su{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a,...l}=t;if(!i||!a)return null;const c=new _r(i,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Fr(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Fr(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fr(e,t)}buildRequest(){const e={requestUri:OV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=iu(t)}return e}}/**
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
 */async function Xw(r,e){return St(r,"POST","/v1/accounts:sendVerificationCode",At(r,e))}async function kV(r,e){return Kr(r,"POST","/v1/accounts:signInWithPhoneNumber",At(r,e))}async function MV(r,e){const t=await Kr(r,"POST","/v1/accounts:signInWithPhoneNumber",At(r,e));if(t.temporaryProof)throw xc(r,"account-exists-with-different-credential",t);return t}const LV={USER_NOT_FOUND:"user-not-found"};async function UV(r,e){const t={...e,operation:"REAUTH"};return Kr(r,"POST","/v1/accounts:signInWithPhoneNumber",At(r,t),LV)}/**
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
 */class io extends su{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new io({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new io({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return kV(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return MV(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return UV(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:a,temporaryProof:l}=e;return!i&&!t&&!a&&!l?null:new io({verificationId:t,verificationCode:i,phoneNumber:a,temporaryProof:l})}}/**
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
 */function zV(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BV(r){const e=Sl(Dc(r)).link,t=e?Sl(Dc(e)).deep_link_id:null,i=Sl(Dc(r)).deep_link_id;return(i?Sl(Dc(i)).link:null)||i||t||e||r}class Tm{constructor(e){const t=Sl(Dc(e)),i=t.apiKey??null,a=t.oobCode??null,l=zV(t.mode??null);ie(i&&a&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=a,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=BV(e);try{return new Tm(t)}catch{return null}}}/**
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
 */class sa{constructor(){this.providerId=sa.PROVIDER_ID}static credential(e,t){return rh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Tm.parseLink(t);return ie(i,"argument-error"),rh._fromEmailAndCode(e,i.code,i.tenantId)}}sa.PROVIDER_ID="password";sa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class au extends Qr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Nl extends au{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return ie("providerId"in t&&"signInMethod"in t,"argument-error"),_r._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return ie(e.idToken||e.accessToken,"argument-error"),_r._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Nl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Nl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:a,pendingToken:l,nonce:c,providerId:f}=e;if(!i&&!a&&!t&&!l||!f)return null;try{return new Nl(f)._credential({idToken:t,accessToken:i,nonce:c,pendingToken:l})}catch{return null}}}/**
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
 */class sr extends au{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class ar extends au{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _r._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ar.credential(t,i)}catch{return null}}}ar.GOOGLE_SIGN_IN_METHOD="google.com";ar.PROVIDER_ID="google.com";/**
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
 */class or extends au{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */const FV="http://localhost";class Ml extends su{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Fr(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Fr(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a,pendingToken:l}=t;return!i||!a||!l||i!==a?null:new Ml(i,l)}static _create(e,t){return new Ml(e,t)}buildRequest(){return{requestUri:FV,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const jV="saml.";class Wf extends Qr{constructor(e){ie(e.startsWith(jV),"argument-error"),super(e)}static credentialFromResult(e){return Wf.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Wf.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ml.fromJSON(e);return ie(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return Ml._create(i,t)}catch{return null}}}/**
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
 */class lr extends au{constructor(){super("twitter.com")}static credential(e,t){return _r._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return lr.credential(t,i)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
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
 */async function x0(r,e){return Kr(r,"POST","/v1/accounts:signUp",At(r,e))}/**
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
 */class gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,a=!1){const l=await Di._fromIdTokenResponse(e,i,a),c=Jw(i);return new gi({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const a=Jw(i);return new gi({user:e,providerId:a,_tokenResponse:i,operationType:t})}}function Jw(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function qV(r){var a;if(_t(r.app))return Promise.reject(rn(r));const e=Tt(r);if(await e._initializationPromise,(a=e.currentUser)!=null&&a.isAnonymous)return new gi({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await x0(e,{returnSecureToken:!0}),i=await gi._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
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
 */class $f extends Sn{constructor(e,t,i,a){super(t.code,t.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,$f.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,a){return new $f(e,t,i,a)}}function V0(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?$f._fromErrorAndOperation(r,l,e,i):l})}/**
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
 */function P0(r){return new Set(r.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function HV(r,e){const t=Te(r);await bm(!0,t,e);const{providerUserInfo:i}=await Gx(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=P0(i||[]);return t.providerData=t.providerData.filter(l=>a.has(l.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Ny(r,e,t=!1){const i=await qr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return gi._forOperation(r,"link",i)}async function bm(r,e,t){await ih(e);const i=P0(e.providerData),a=r===!1?"provider-already-linked":"no-such-provider";ie(i.has(t)===r,e.auth,a)}/**
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
 */async function O0(r,e,t=!1){const{auth:i}=r;if(_t(i.app))return Promise.reject(rn(i));const a="reauthenticate";try{const l=await qr(r,V0(i,a,e,r),t);ie(l.idToken,i,"internal-error");const c=vm(l.idToken);ie(c,i,"internal-error");const{sub:f}=c;return ie(r.uid===f,i,"user-mismatch"),gi._forOperation(r,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&mn(i,"user-mismatch"),l}}/**
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
 */async function k0(r,e,t=!1){if(_t(r.app))return Promise.reject(rn(r));const i="signIn",a=await V0(r,i,e),l=await gi._fromIdTokenResponse(r,i,a);return t||await r._updateCurrentUser(l.user),l}async function wm(r,e){return k0(Tt(r),e)}async function M0(r,e){const t=Te(r);return await bm(!1,t,e.providerId),Ny(t,e)}async function L0(r,e){return O0(Te(r),e)}/**
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
 */async function GV(r,e){return Kr(r,"POST","/v1/accounts:signInWithCustomToken",At(r,e))}/**
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
 */async function KV(r,e){if(_t(r.app))return Promise.reject(rn(r));const t=Tt(r),i=await GV(t,{token:e,returnSecureToken:!0}),a=await gi._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(a.user),a}/**
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
 */class Rh{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Dy._fromServerResponse(e,t):"totpInfo"in t?xy._fromServerResponse(e,t):mn(e,"internal-error")}}class Dy extends Rh{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Dy(t)}}class xy extends Rh{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new xy(t)}}/**
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
 */function Im(r,e,t){var i;ie(((i=t.url)==null?void 0:i.length)>0,r,"invalid-continue-uri"),ie(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),ie(typeof t.linkDomain>"u"||t.linkDomain.length>0,r,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(ie(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(ie(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Vy(r){const e=Tt(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function QV(r,e,t){const i=Tt(r),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Im(i,a,t),await Fs(i,a,"getOobCode",NV,"EMAIL_PASSWORD_PROVIDER")}async function YV(r,e,t){await D0(Te(r),{oobCode:e,newPassword:t}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Vy(r),i})}async function WV(r,e){await SV(Te(r),{oobCode:e})}async function U0(r,e){const t=Te(r),i=await D0(t,{oobCode:e}),a=i.requestType;switch(ie(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ie(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ie(i.mfaInfo,t,"internal-error");default:ie(i.email,t,"internal-error")}let l=null;return i.mfaInfo&&(l=Rh._fromServerResponse(Tt(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:l},operation:a}}async function $V(r,e){const{data:t}=await U0(Te(r),e);return t.email}async function XV(r,e,t){if(_t(r.app))return Promise.reject(rn(r));const i=Tt(r),c=await Fs(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",x0,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Vy(r),p}),f=await gi._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(f.user),f}function JV(r,e,t){return _t(r.app)?Promise.reject(rn(r)):wm(Te(r),sa.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Vy(r),i})}/**
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
 */async function ZV(r,e,t){const i=Tt(r),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function l(c,f){ie(f.handleCodeInApp,i,"argument-error"),f&&Im(i,c,f)}l(a,t),await Fs(i,a,"getOobCode",DV,"EMAIL_PASSWORD_PROVIDER")}function e2(r,e){const t=Tm.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function t2(r,e,t){if(_t(r.app))return Promise.reject(rn(r));const i=Te(r),a=sa.credentialWithLink(e,t||nh());return ie(a._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),wm(i,a)}/**
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
 */async function n2(r,e){return St(r,"POST","/v1/accounts:createAuthUri",At(r,e))}/**
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
 */async function i2(r,e){const t=Sy()?nh():"http://localhost",i={identifier:e,continueUri:t},{signinMethods:a}=await n2(Te(r),i);return a||[]}async function r2(r,e){const t=Te(r),a={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&Im(t.auth,a,e);const{email:l}=await CV(t.auth,a);l!==r.email&&await r.reload()}async function s2(r,e,t){const i=Te(r),l={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await r.getIdToken(),newEmail:e};t&&Im(i.auth,l,t);const{email:c}=await xV(i.auth,l);c!==r.email&&await r.reload()}/**
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
 */async function a2(r,e){return St(r,"POST","/v1/accounts:update",e)}/**
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
 */async function o2(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Te(r),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await qr(i,a2(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const f=i.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=i.displayName,f.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function l2(r,e){const t=Te(r);return _t(t.auth.app)?Promise.reject(rn(t.auth)):z0(t,e,null)}function u2(r,e){return z0(Te(r),null,e)}async function z0(r,e,t){const{auth:i}=r,l={idToken:await r.getIdToken(),returnSecureToken:!0};e&&(l.email=e),t&&(l.password=t);const c=await qr(r,IV(i,l));await r._updateTokensIfNecessary(c,!0)}/**
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
 */function c2(r){var a,l;if(!r)return null;const{providerId:e}=r,t=r.rawUserInfo?JSON.parse(r.rawUserInfo):{},i=r.isNewUser||r.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(r!=null&&r.idToken)){const c=(l=(a=vm(r.idToken))==null?void 0:a.firebase)==null?void 0:l.sign_in_provider;if(c){const f=c!=="anonymous"&&c!=="custom"?c:null;return new Dl(i,f)}}if(!e)return null;switch(e){case"facebook.com":return new h2(i,t);case"github.com":return new d2(i,t);case"google.com":return new f2(i,t);case"twitter.com":return new m2(i,t,r.screenName||null);case"custom":case"anonymous":return new Dl(i,null);default:return new Dl(i,e,t)}}class Dl{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class B0 extends Dl{constructor(e,t,i,a){super(e,t,i),this.username=a}}class h2 extends Dl{constructor(e,t){super(e,"facebook.com",t)}}class d2 extends B0{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class f2 extends Dl{constructor(e,t){super(e,"google.com",t)}}class m2 extends B0{constructor(e,t,i){super(e,"twitter.com",t,i)}}function p2(r){const{user:e,_tokenResponse:t}=r;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:c2(t)}/**
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
 */class Py{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=Tt(e),a=t.customData._serverResponse,l=(a.mfaInfo||[]).map(f=>Rh._fromServerResponse(i,f));ie(a.mfaPendingCredential,i,"internal-error");const c=Xa._fromMfaPendingCredential(a.mfaPendingCredential);return new Py(c,l,async f=>{const p=await f._process(i,c);delete a.mfaInfo,delete a.mfaPendingCredential;const g={...a,idToken:p.idToken,refreshToken:p.refreshToken};switch(t.operationType){case"signIn":const v=await gi._fromIdTokenResponse(i,t.operationType,g);return await i._updateCurrentUser(v.user),v;case"reauthenticate":return ie(t.user,i,"internal-error"),gi._forOperation(t.user,t.operationType,g);default:mn(i,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function g2(r,e){var a;const t=Te(r),i=e;return ie(e.customData.operationType,t,"argument-error"),ie((a=i.customData._serverResponse)==null?void 0:a.mfaPendingCredential,t,"argument-error"),Py._fromError(t,i)}/**
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
 */function Zw(r,e){return St(r,"POST","/v2/accounts/mfaEnrollment:start",At(r,e))}function _2(r,e){return St(r,"POST","/v2/accounts/mfaEnrollment:finalize",At(r,e))}function y2(r,e){return St(r,"POST","/v2/accounts/mfaEnrollment:withdraw",At(r,e))}class Oy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(i=>Rh._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new Oy(e)}async getSession(){return Xa._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const i=e,a=await this.getSession(),l=await qr(this.user,i._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(l),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const a=await qr(this.user,y2(this.user.auth,{idToken:i,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:l})=>l!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const d_=new WeakMap;function v2(r){const e=Te(r);return d_.has(e)||d_.set(e,Oy._fromUser(e)),d_.get(e)}const Xf="__sak";/**
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
 */class F0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xf,"1"),this.storage.removeItem(Xf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const E2=1e3,T2=10;class j0 extends F0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=A0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),a=this.localCache[t];i!==a&&e(t,a,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);tV()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,T2):a()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},E2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}j0.type="LOCAL";const ky=j0;/**
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
 */class q0 extends F0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}q0.type="SESSION";const so=q0;/**
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
 */function b2(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Am{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const i=new Am(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const f=Array.from(c).map(async g=>g(t.origin,l)),p=await b2(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Am.receivers=[];/**
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
 */class w2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((f,p)=>{const g=Ch("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:a,onMessage(T){const w=T;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(w.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Ht(){return window}function I2(r){Ht().location.href=r}/**
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
 */function My(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function A2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function S2(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function R2(){return My()?self:null}/**
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
 */const H0="firebaseLocalStorageDb",C2=1,Jf="firebaseLocalStorage",G0="fbase_key";class Nh{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Sm(r,e){return r.transaction([Jf],e?"readwrite":"readonly").objectStore(Jf)}function N2(){const r=indexedDB.deleteDatabase(H0);return new Nh(r).toPromise()}function D_(){const r=indexedDB.open(H0,C2);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(Jf,{keyPath:G0})}catch(a){t(a)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(Jf)?e(i):(i.close(),await N2(),e(await D_()))})})}async function eI(r,e,t){const i=Sm(r,!0).put({[G0]:e,value:t});return new Nh(i).toPromise()}async function D2(r,e){const t=Sm(r,!1).get(e),i=await new Nh(t).toPromise();return i===void 0?null:i.value}function tI(r,e){const t=Sm(r,!0).delete(e);return new Nh(t).toPromise()}const x2=800,V2=3;class K0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await D_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>V2)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return My()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Am._getInstance(R2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await A2(),!this.activeServiceWorker)return;this.sender=new w2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||S2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await D_();return await eI(e,Xf,"1"),await tI(e,Xf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>eI(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>D2(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Sm(a,!1).getAll();return new Nh(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),x2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}K0.type="LOCAL";const sh=K0;/**
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
 */function nI(r,e){return St(r,"POST","/v2/accounts/mfaSignIn:start",At(r,e))}function P2(r,e){return St(r,"POST","/v2/accounts/mfaSignIn:finalize",At(r,e))}/**
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
 */const f_=R0("rcb"),O2=new wh(3e4,6e4);class k2{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Ht().grecaptcha)!=null&&e.render)}load(e,t=""){return ie(M2(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Hw(Ht().grecaptcha)?Promise.resolve(Ht().grecaptcha):new Promise((i,a)=>{const l=Ht().setTimeout(()=>{a($t(e,"network-request-failed"))},O2.get());Ht()[f_]=()=>{Ht().clearTimeout(l),delete Ht()[f_];const f=Ht().grecaptcha;if(!f||!Hw(f)){a($t(e,"internal-error"));return}const p=f.render;f.render=(g,v)=>{const T=p(g,v);return this.counter++,T},this.hostLanguage=t,i(f)};const c=`${lV()}?${iu({onload:f_,render:"explicit",hl:t})}`;Cy(c).catch(()=>{clearTimeout(l),a($t(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Ht().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function M2(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class L2{async load(e){return new fV(e)}clearedOneInstance(){}}/**
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
 */const Fc="recaptcha",U2={theme:"light",type:"image"};let z2=class{constructor(e,t,i={...U2}){this.parameters=i,this.type=Fc,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Tt(e),this.isInvisible=this.parameters.size==="invisible",ie(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;ie(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new L2:new k2,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(a=>{const l=c=>{c&&(this.tokenChangeListeners.delete(l),a(c))};this.tokenChangeListeners.add(l),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ie(!this.parameters.sitekey,this.auth,"argument-error"),ie(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ie(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=Ht()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){ie(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ie(Sy()&&!My(),this.auth,"internal-error"),await B2(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await qx(this.auth);ie(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ie(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function B2(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
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
 */class Ly{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=io._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function F2(r,e,t){if(_t(r.app))return Promise.reject(rn(r));const i=Tt(r),a=await Rm(i,e,Te(t));return new Ly(a,l=>wm(i,l))}async function j2(r,e,t){const i=Te(r);await bm(!1,i,"phone");const a=await Rm(i.auth,e,Te(t));return new Ly(a,l=>M0(i,l))}async function q2(r,e,t){const i=Te(r);if(_t(i.auth.app))return Promise.reject(rn(i.auth));const a=await Rm(i.auth,e,Te(t));return new Ly(a,l=>L0(i,l))}async function Rm(r,e,t){var i;if(!r._getRecaptchaConfig())try{await vV(r)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const l=a.session;if("phoneNumber"in a){ie(l.type==="enroll",r,"internal-error");const c={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Fs(r,c,"mfaSmsEnrollment",async(v,T)=>{if(T.phoneEnrollmentInfo.captchaResponse===Bc){ie((t==null?void 0:t.type)===Fc,v,"argument-error");const w=await m_(v,T,t);return Zw(v,w)}return Zw(v,T)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneSessionInfo.sessionInfo}else{ie(l.type==="signin",r,"internal-error");const c=((i=a.multiFactorHint)==null?void 0:i.uid)||a.multiFactorUid;ie(c,r,"missing-multi-factor-info");const f={mfaPendingCredential:l.credential,mfaEnrollmentId:c,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Fs(r,f,"mfaSmsSignIn",async(T,w)=>{if(w.phoneSignInInfo.captchaResponse===Bc){ie((t==null?void 0:t.type)===Fc,T,"argument-error");const D=await m_(T,w,t);return nI(T,D)}return nI(T,w)},"PHONE_PROVIDER").catch(T=>Promise.reject(T))).phoneResponseInfo.sessionInfo}}else{const l={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Fs(r,l,"sendVerificationCode",async(g,v)=>{if(v.captchaResponse===Bc){ie((t==null?void 0:t.type)===Fc,g,"argument-error");const T=await m_(g,v,t);return Xw(g,T)}return Xw(g,v)},"PHONE_PROVIDER").catch(g=>Promise.reject(g))).sessionInfo}}finally{t==null||t._reset()}}async function H2(r,e){const t=Te(r);if(_t(t.auth.app))return Promise.reject(rn(t.auth));await Ny(t,e)}async function m_(r,e,t){ie(t.type===Fc,r,"argument-error");const i=await t.verify();ie(typeof i=="string",r,"argument-error");const a={...e};if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.captchaResponse,f=a.phoneEnrollmentInfo.clientType,p=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:i,captchaResponse:c,clientType:f,recaptchaVersion:p}}),a}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.captchaResponse,c=a.phoneSignInInfo.clientType,f=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:l,clientType:c,recaptchaVersion:f}}),a}else return Object.assign(a,{recaptchaToken:i}),a}/**
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
 */let ao=class Df{constructor(e){this.providerId=Df.PROVIDER_ID,this.auth=Tt(e)}verifyPhoneNumber(e,t){return Rm(this.auth,e,Te(t))}static credential(e,t){return io._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Df.credentialFromTaggedObject(t)}static credentialFromError(e){return Df.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?io._fromTokenResponse(t,i):null}};ao.PROVIDER_ID="phone";ao.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function vo(r,e){return e?Xn(e):(ie(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Uy extends su{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function G2(r){return k0(r.auth,new Uy(r),r.bypassAuthState)}function K2(r){const{auth:e,user:t}=r;return ie(t,e,"internal-error"),O0(t,new Uy(r),r.bypassAuthState)}async function Q2(r){const{auth:e,user:t}=r;return ie(t,e,"internal-error"),Ny(t,new Uy(r),r.bypassAuthState)}/**
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
 */class Q0{constructor(e,t,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:a,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return G2;case"linkViaPopup":case"linkViaRedirect":return Q2;case"reauthViaPopup":case"reauthViaRedirect":return K2;default:mn(this.auth,"internal-error")}}resolve(e){Oi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Oi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Y2=new wh(2e3,1e4);async function W2(r,e,t){if(_t(r.app))return Promise.reject($t(r,"operation-not-supported-in-this-environment"));const i=Tt(r);ru(r,e,Qr);const a=vo(i,t);return new zr(i,"signInViaPopup",e,a).executeNotNull()}async function $2(r,e,t){const i=Te(r);if(_t(i.auth.app))return Promise.reject($t(i.auth,"operation-not-supported-in-this-environment"));ru(i.auth,e,Qr);const a=vo(i.auth,t);return new zr(i.auth,"reauthViaPopup",e,a,i).executeNotNull()}async function X2(r,e,t){const i=Te(r);ru(i.auth,e,Qr);const a=vo(i.auth,t);return new zr(i.auth,"linkViaPopup",e,a,i).executeNotNull()}class zr extends Q0{constructor(e,t,i,a,l){super(e,t,a,l),this.provider=i,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Oi(this.filter.length===1,"Popup operations only handle one event");const e=Ch();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Y2.get())};e()}}zr.currentPopupAction=null;/**
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
 */const J2="pendingRedirect",jc=new Map;class Z2 extends Q0{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=jc.get(this.auth._key());if(!e){try{const i=await eP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}jc.set(this.auth._key(),e)}return this.bypassAuthState||jc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eP(r,e){const t=W0(e),i=Y0(r);if(!await i._isAvailable())return!1;const a=await i._get(t)==="true";return await i._remove(t),a}async function zy(r,e){return Y0(r)._set(W0(e),"true")}function tP(){jc.clear()}function By(r,e){jc.set(r._key(),e)}function Y0(r){return Xn(r._redirectPersistence)}function W0(r){return no(J2,r.config.apiKey,r.name)}/**
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
 */function nP(r,e,t){return iP(r,e,t)}async function iP(r,e,t){if(_t(r.app))return Promise.reject(rn(r));const i=Tt(r);ru(r,e,Qr),await i._initializationPromise;const a=vo(i,t);return await zy(a,i),a._openRedirect(i,e,"signInViaRedirect")}function rP(r,e,t){return sP(r,e,t)}async function sP(r,e,t){const i=Te(r);if(ru(i.auth,e,Qr),_t(i.auth.app))return Promise.reject(rn(i.auth));await i.auth._initializationPromise;const a=vo(i.auth,t);await zy(a,i.auth);const l=await $0(i);return a._openRedirect(i.auth,e,"reauthViaRedirect",l)}function aP(r,e,t){return oP(r,e,t)}async function oP(r,e,t){const i=Te(r);ru(i.auth,e,Qr),await i.auth._initializationPromise;const a=vo(i.auth,t);await bm(!1,i,e.providerId),await zy(a,i.auth);const l=await $0(i);return a._openRedirect(i.auth,e,"linkViaRedirect",l)}async function lP(r,e){return await Tt(r)._initializationPromise,Cm(r,e,!1)}async function Cm(r,e,t=!1){if(_t(r.app))return Promise.reject(rn(r));const i=Tt(r),a=vo(i,e),c=await new Z2(i,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}async function $0(r){const e=Ch(`${r.uid}:::`);return r._redirectEventId=e,await r.auth._setRedirectUser(r),await r.auth._persistUserIfCurrent(r),e}/**
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
 */const uP=600*1e3;class X0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!J0(e)){const a=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError($t(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uP&&this.cachedEventUids.clear(),this.cachedEventUids.has(iI(e))}saveEventToCache(e){this.cachedEventUids.add(iI(e)),this.lastProcessedEventTime=Date.now()}}function iI(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function J0({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cP(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return J0(r);default:return!1}}/**
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
 */async function Z0(r,e={}){return St(r,"GET","/v1/projects",e)}/**
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
 */const hP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dP=/^https?/;async function fP(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Z0(r);for(const t of e)try{if(mP(t))return}catch{}mn(r,"unauthorized-domain")}function mP(r){const e=nh(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!dP.test(t))return!1;if(hP.test(r))return i===r;const a=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const pP=new wh(3e4,6e4);function rI(){const r=Ht().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function gP(r){return new Promise((e,t)=>{var a,l,c;function i(){rI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rI(),t($t(r,"network-request-failed"))},timeout:pP.get()})}if((l=(a=Ht().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=Ht().gapi)!=null&&c.load)i();else{const f=R0("iframefcb");return Ht()[f]=()=>{gapi.load?i():t($t(r,"network-request-failed"))},Cy(`${cV()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw xf=null,e})}let xf=null;function _P(r){return xf=xf||gP(r),xf}/**
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
 */const yP=new wh(5e3,15e3),vP="__/auth/iframe",EP="emulator/auth/iframe",TP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wP(r){const e=r.config;ie(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ry(e,EP):`https://${r.config.authDomain}/${vP}`,i={apiKey:e.apiKey,appName:r.name,v:ra},a=bP.get(r.config.apiHost);a&&(i.eid=a);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${iu(i).slice(1)}`}async function IP(r){const e=await _P(r),t=Ht().gapi;return ie(t,r,"internal-error"),e.open({where:document.body,url:wP(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TP,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const c=$t(r,"network-request-failed"),f=Ht().setTimeout(()=>{l(c)},yP.get());function p(){Ht().clearTimeout(f),a(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const AP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SP=500,RP=600,CP="_blank",NP="http://localhost";class sI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DP(r,e,t,i=SP,a=RP){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p={...AP,width:i.toString(),height:a.toString(),top:l,left:c},g=Et().toLowerCase();t&&(f=T0(g)?CP:t),v0(g)&&(e=e||NP,p.scrollbars="yes");const v=Object.entries(p).reduce((w,[D,Y])=>`${w}${D}=${Y},`,"");if(eV(g)&&f!=="_self")return xP(e||"",f),new sI(null);const T=window.open(e||"",f,v);ie(T,r,"popup-blocked");try{T.focus()}catch{}return new sI(T)}function xP(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const VP="__/auth/handler",PP="emulator/auth/handler",OP=encodeURIComponent("fac");async function x_(r,e,t,i,a,l){ie(r.config.authDomain,r,"auth-domain-config-required"),ie(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:ra,eventId:a};if(e instanceof Qr){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",oD(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries(l||{}))c[v]=T}if(e instanceof au){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}r.tenantId&&(c.tid=r.tenantId);const f=c;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const p=await r._getAppCheckToken(),g=p?`#${OP}=${encodeURIComponent(p)}`:"";return`${kP(r)}?${iu(f).slice(1)}${g}`}function kP({config:r}){return r.emulator?Ry(r,PP):`https://${r.authDomain}/${VP}`}/**
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
 */const p_="webStorageSupport";class MP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=so,this._completeRedirectFn=Cm,this._overrideRedirectResult=By}async _openPopup(e,t,i,a){var c;Oi((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await x_(e,t,i,nh(),a);return DP(e,l,Ch())}async _openRedirect(e,t,i,a){await this._originValidation(e);const l=await x_(e,t,i,nh(),a);return I2(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Oi(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await IP(e),i=new X0(e);return t.register("authEvent",a=>(ie(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(p_,{type:p_},a=>{var c;const l=(c=a==null?void 0:a[0])==null?void 0:c[p_];l!==void 0&&t(!!l),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return A0()||E0()||Ah()}}const LP=MP;class UP{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return ur("unexpected MultiFactorSessionType")}}}class Fy extends UP{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Fy(e)}_finalizeEnroll(e,t,i){return _2(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return P2(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class eS{constructor(){}static assertion(e){return Fy._fromCredential(e)}}eS.FACTOR_ID="phone";var aI="@firebase/auth",oI="1.12.0";/**
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
 */class zP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function BP(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function FP(r){Ws(new pr("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=i.options;ie(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:S0(r)},g=new aV(i,a,l,p);return EV(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ws(new pr("auth-internal",e=>{const t=Tt(e.getProvider("auth").getImmediate());return(i=>new zP(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xi(aI,oI,BP(r)),xi(aI,oI,"esm2020")}/**
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
 */const jP=300;WN("authIdTokenMaxAge");function qP(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}oV({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=a=>{const l=$t("internal-error");l.customData=a,t(l)},i.type="text/javascript",i.charset="UTF-8",qP().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});FP("Browser");/**
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
 */const HP=2e3;async function GP(r,e,t){const{BuildInfo:i}=oo();Oi(e.sessionId,"AuthEvent did not contain a session ID");const a=await $P(e.sessionId),l={};return Ah()?l.ibi=i.packageName:Ih()?l.apn=i.packageName:mn(r,"operation-not-supported-in-this-environment"),i.displayName&&(l.appDisplayName=i.displayName),l.sessionId=a,x_(r,t,e.type,void 0,e.eventId??void 0,l)}async function KP(r){const{BuildInfo:e}=oo(),t={};Ah()?t.iosBundleId=e.packageName:Ih()?t.androidPackageName=e.packageName:mn(r,"operation-not-supported-in-this-environment"),await Z0(r,t)}function QP(r){const{cordova:e}=oo();return new Promise(t=>{e.plugins.browsertab.isAvailable(i=>{let a=null;i?e.plugins.browsertab.openUrl(r):a=e.InAppBrowser.open(r,Zx()?"_blank":"_system","location=yes"),t(a)})})}async function YP(r,e,t){const{cordova:i}=oo();let a=()=>{};try{await new Promise((l,c)=>{let f=null;function p(){var w;l();const T=(w=i.plugins.browsertab)==null?void 0:w.close;typeof T=="function"&&T(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function g(){f||(f=window.setTimeout(()=>{c($t(r,"redirect-cancelled-by-user"))},HP))}function v(){(document==null?void 0:document.visibilityState)==="visible"&&g()}e.addPassiveListener(p),document.addEventListener("resume",g,!1),Ih()&&document.addEventListener("visibilitychange",v,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",v,!1),f&&window.clearTimeout(f)}})}finally{a()}}function WP(r){var t,i,a,l,c,f,p,g,v,T;const e=oo();ie(typeof((t=e==null?void 0:e.universalLinks)==null?void 0:t.subscribe)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),ie(typeof((i=e==null?void 0:e.BuildInfo)==null?void 0:i.packageName)<"u",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),ie(typeof((c=(l=(a=e==null?void 0:e.cordova)==null?void 0:a.plugins)==null?void 0:l.browsertab)==null?void 0:c.openUrl)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ie(typeof((g=(p=(f=e==null?void 0:e.cordova)==null?void 0:f.plugins)==null?void 0:p.browsertab)==null?void 0:g.isAvailable)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ie(typeof((T=(v=e==null?void 0:e.cordova)==null?void 0:v.InAppBrowser)==null?void 0:T.open)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function $P(r){const e=XP(r),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function XP(r){if(Oi(/[0-9a-zA-Z]+/.test(r),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(r);const e=new ArrayBuffer(r.length),t=new Uint8Array(e);for(let i=0;i<r.length;i++)t[i]=r.charCodeAt(i);return t}/**
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
 */const JP=20;class ZP extends X0{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function eO(r,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:iO(),postBody:null,tenantId:r.tenantId,error:$t(r,"no-auth-event")}}function tO(r,e){return V_()._set(P_(r),e)}async function lI(r){const e=await V_()._get(P_(r));return e&&await V_()._remove(P_(r)),e}function nO(r,e){var i,a;const t=sO(e);if(t.includes("/__/auth/callback")){const l=Vf(t),c=l.firebaseError?rO(decodeURIComponent(l.firebaseError)):null,f=(a=(i=c==null?void 0:c.code)==null?void 0:i.split("auth/"))==null?void 0:a[1],p=f?$t(f):null;return p?{type:r.type,eventId:r.eventId,tenantId:r.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:r.type,eventId:r.eventId,tenantId:r.tenantId,sessionId:r.sessionId,urlResponse:t,postBody:null}}return null}function iO(){const r=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<JP;t++){const i=Math.floor(Math.random()*e.length);r.push(e.charAt(i))}return r.join("")}function V_(){return Xn(ky)}function P_(r){return no("authEvent",r.config.apiKey,r.name)}function rO(r){try{return JSON.parse(r)}catch{return null}}function sO(r){const e=Vf(r),t=e.link?decodeURIComponent(e.link):void 0,i=Vf(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Vf(a).link||a||i||t||r}function Vf(r){if(!(r!=null&&r.includes("?")))return{};const[e,...t]=r.split("?");return Sl(t.join("?"))}/**
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
 */const aO=500;class oO{constructor(){this._redirectPersistence=so,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Cm,this._overrideRedirectResult=By}async _initialize(e){const t=e._key();let i=this.eventManagers.get(t);return i||(i=new ZP(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){mn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,a){WP(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),tP(),await this._originValidation(e);const c=eO(e,i,a);await tO(e,c);const f=await GP(e,c,t),p=await QP(f);return YP(e,l,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=KP(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:i,handleOpenURL:a,BuildInfo:l}=oo(),c=setTimeout(async()=>{await lI(e),t.onEvent(uI())},aO),f=async v=>{clearTimeout(c);const T=await lI(e);let w=null;T&&(v!=null&&v.url)&&(w=nO(T,v.url)),t.onEvent(w||uI())};typeof i<"u"&&typeof i.subscribe=="function"&&i.subscribe(null,f);const p=a,g=`${l.packageName.toLowerCase()}://`;oo().handleOpenURL=async v=>{if(v.toLowerCase().startsWith(g)&&f({url:v}),typeof p=="function")try{p(v)}catch(T){console.error(T)}}}}const lO=oO;function uI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:$t("no-auth-event")}}/**
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
 */function uO(r,e){Tt(r)._logFramework(e)}var cO="@firebase/auth-compat",hO="0.6.2";/**
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
 */const dO=1e3;function qc(){var r;return((r=self==null?void 0:self.location)==null?void 0:r.protocol)||null}function fO(){return qc()==="http:"||qc()==="https:"}function tS(r=Et()){return!!((qc()==="file:"||qc()==="ionic:"||qc()==="capacitor:")&&r.toLowerCase().match(/iphone|ipad|ipod|android/))}function mO(){return yy()||_m()}function pO(){return QA()&&(document==null?void 0:document.documentMode)===11}function gO(r=Et()){return/Edge\/\d+/.test(r)}function _O(r=Et()){return pO()||gO(r)}function nS(){try{const r=self.localStorage,e=Ch();if(r)return r.setItem(e,"1"),r.removeItem(e),_O()?Zc():!0}catch{return jy()&&Zc()}return!1}function jy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function g_(){return(fO()||KA()||tS())&&!mO()&&nS()&&!jy()}function iS(){return tS()&&typeof document<"u"}async function yO(){return iS()?new Promise(r=>{const e=setTimeout(()=>{r(!1)},dO);document.addEventListener("deviceready",()=>{clearTimeout(e),r(!0)})}):!1}function vO(){return typeof window<"u"?window:null}/**
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
 */const $n={LOCAL:"local",NONE:"none",SESSION:"session"},wc=ie,rS="persistence";function EO(r,e){if(wc(Object.values($n).includes(e),r,"invalid-persistence-type"),yy()){wc(e!==$n.SESSION,r,"unsupported-persistence-type");return}if(_m()){wc(e===$n.NONE,r,"unsupported-persistence-type");return}if(jy()){wc(e===$n.NONE||e===$n.LOCAL&&Zc(),r,"unsupported-persistence-type");return}wc(e===$n.NONE||nS(),r,"unsupported-persistence-type")}async function O_(r){await r._initializationPromise;const e=sS(),t=no(rS,r.config.apiKey,r.name);e&&e.setItem(t,r._getPersistenceType())}function TO(r,e){const t=sS();if(!t)return[];const i=no(rS,r,e);switch(t.getItem(i)){case $n.NONE:return[kl];case $n.LOCAL:return[sh,so];case $n.SESSION:return[so];default:return[]}}function sS(){var r;try{return((r=vO())==null?void 0:r.sessionStorage)||null}catch{return null}}/**
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
 */const bO=ie;class Ls{constructor(){this.browserResolver=Xn(LP),this.cordovaResolver=Xn(lO),this.underlyingResolver=null,this._redirectPersistence=so,this._completeRedirectFn=Cm,this._overrideRedirectResult=By}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,a)}async _openRedirect(e,t,i,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return iS()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return bO(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await yO();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function aS(r){return r.unwrap()}function wO(r){return r.wrapped()}/**
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
 */function IO(r){return oS(r)}function AO(r,e){var i;const t=(i=e.customData)==null?void 0:i._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new SO(r,g2(r,e))}else if(t){const a=oS(e),l=e;a&&(l.credential=a,l.tenantId=t.tenantId||void 0,l.email=t.email||void 0,l.phoneNumber=t.phoneNumber||void 0)}}function oS(r){const{_tokenResponse:e}=r instanceof Sn?r.customData:r;if(!e)return null;if(!(r instanceof Sn)&&"temporaryProof"in e&&"phoneNumber"in e)return ao.credentialFromResult(r);const t=e.providerId;if(!t||t===Tc.PASSWORD)return null;let i;switch(t){case Tc.GOOGLE:i=ar;break;case Tc.FACEBOOK:i=sr;break;case Tc.GITHUB:i=or;break;case Tc.TWITTER:i=lr;break;default:const{oauthIdToken:a,oauthAccessToken:l,oauthTokenSecret:c,pendingToken:f,nonce:p}=e;return!l&&!c&&!a&&!f?null:f?t.startsWith("saml.")?Ml._create(t,f):_r._fromParams({providerId:t,signInMethod:t,pendingToken:f,idToken:a,accessToken:l}):new Nl(t).credential({idToken:a,accessToken:l,rawNonce:p})}return r instanceof Sn?i.credentialFromError(r):i.credentialFromResult(r)}function Mn(r,e){return e.catch(t=>{throw t instanceof Sn&&AO(r,t),t}).then(t=>{const i=t.operationType,a=t.user;return{operationType:i,credential:IO(t),additionalUserInfo:p2(t),user:Nm.getOrCreate(a)}})}async function k_(r,e){const t=await e;return{verificationId:t.verificationId,confirm:i=>Mn(r,t.confirm(i))}}class SO{constructor(e,t){this.resolver=t,this.auth=wO(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Mn(aS(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let Nm=class Vc{constructor(e){this._delegate=e,this.multiFactor=v2(e)}static getOrCreate(e){return Vc.USER_MAP.has(e)||Vc.USER_MAP.set(e,new Vc(e)),Vc.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Mn(this.auth,M0(this._delegate,e))}async linkWithPhoneNumber(e,t){return k_(this.auth,j2(this._delegate,e,t))}async linkWithPopup(e){return Mn(this.auth,X2(this._delegate,e,Ls))}async linkWithRedirect(e){return await O_(Tt(this.auth)),aP(this._delegate,e,Ls)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Mn(this.auth,L0(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return k_(this.auth,q2(this._delegate,e,t))}reauthenticateWithPopup(e){return Mn(this.auth,$2(this._delegate,e,Ls))}async reauthenticateWithRedirect(e){return await O_(Tt(this.auth)),rP(this._delegate,e,Ls)}sendEmailVerification(e){return r2(this._delegate,e)}async unlink(e){return await HV(this._delegate,e),this}updateEmail(e){return l2(this._delegate,e)}updatePassword(e){return u2(this._delegate,e)}updatePhoneNumber(e){return H2(this._delegate,e)}updateProfile(e){return o2(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return s2(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Nm.USER_MAP=new WeakMap;/**
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
 */const Ic=ie;class M_{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;Ic(i,"invalid-api-key",{appName:e.name}),Ic(i,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Ls:void 0;this._delegate=t.initialize({options:{persistence:RO(i,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(Px),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Nm.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){TV(this._delegate,e,t)}applyActionCode(e){return WV(this._delegate,e)}checkActionCode(e){return U0(this._delegate,e)}confirmPasswordReset(e,t){return YV(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Mn(this._delegate,XV(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return i2(this._delegate,e)}isSignInWithEmailLink(e){return e2(this._delegate,e)}async getRedirectResult(){Ic(g_(),this._delegate,"operation-not-supported-in-this-environment");const e=await lP(this._delegate,Ls);return e?Mn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){uO(this._delegate,e)}onAuthStateChanged(e,t,i){const{next:a,error:l,complete:c}=cI(e,t,i);return this._delegate.onAuthStateChanged(a,l,c)}onIdTokenChanged(e,t,i){const{next:a,error:l,complete:c}=cI(e,t,i);return this._delegate.onIdTokenChanged(a,l,c)}sendSignInLinkToEmail(e,t){return ZV(this._delegate,e,t)}sendPasswordResetEmail(e,t){return QV(this._delegate,e,t||void 0)}async setPersistence(e){EO(this._delegate,e);let t;switch(e){case $n.SESSION:t=so;break;case $n.LOCAL:t=await Xn(sh)._isAvailable()?sh:ky;break;case $n.NONE:t=kl;break;default:return mn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Mn(this._delegate,qV(this._delegate))}signInWithCredential(e){return Mn(this._delegate,wm(this._delegate,e))}signInWithCustomToken(e){return Mn(this._delegate,KV(this._delegate,e))}signInWithEmailAndPassword(e,t){return Mn(this._delegate,JV(this._delegate,e,t))}signInWithEmailLink(e,t){return Mn(this._delegate,t2(this._delegate,e,t))}signInWithPhoneNumber(e,t){return k_(this._delegate,F2(this._delegate,e,t))}async signInWithPopup(e){return Ic(g_(),this._delegate,"operation-not-supported-in-this-environment"),Mn(this._delegate,W2(this._delegate,e,Ls))}async signInWithRedirect(e){return Ic(g_(),this._delegate,"operation-not-supported-in-this-environment"),await O_(this._delegate),nP(this._delegate,e,Ls)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return $V(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}M_.Persistence=$n;function cI(r,e,t){let i=r;typeof r!="function"&&({next:i,error:e,complete:t}=r);const a=i;return{next:c=>a(c&&Nm.getOrCreate(c)),error:e,complete:t}}function RO(r,e){const t=TO(r,e);if(typeof self<"u"&&!t.includes(sh)&&t.push(sh),typeof window<"u")for(const i of[ky,so])t.includes(i)||t.push(i);return t.includes(kl)||t.push(kl),t}/**
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
 */class qy{static credential(e,t){return ao.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new ao(aS(gr.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}qy.PHONE_SIGN_IN_METHOD=ao.PHONE_SIGN_IN_METHOD;qy.PROVIDER_ID=ao.PROVIDER_ID;/**
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
 */const CO=ie;class NO{constructor(e,t,i=gr.app()){var a;CO((a=i.options)==null?void 0:a.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new z2(i.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const DO="auth-compat";function xO(r){r.INTERNAL.registerComponent(new pr(DO,e=>{const t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new M_(t,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ml.EMAIL_SIGNIN,PASSWORD_RESET:ml.PASSWORD_RESET,RECOVER_EMAIL:ml.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ml.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ml.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ml.VERIFY_EMAIL}},EmailAuthProvider:sa,FacebookAuthProvider:sr,GithubAuthProvider:or,GoogleAuthProvider:ar,OAuthProvider:Nl,SAMLAuthProvider:Wf,PhoneAuthProvider:qy,PhoneMultiFactorGenerator:eS,RecaptchaVerifier:NO,TwitterAuthProvider:lr,Auth:M_,AuthCredential:su,Error:Sn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),r.registerVersion(cO,hO)}xO(gr);var hI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var js,lS;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,A){function N(){}N.prototype=A.prototype,S.F=A.prototype,S.prototype=new N,S.prototype.constructor=S,S.D=function(k,V,U){for(var R=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)R[dt-2]=arguments[dt];return A.prototype[V].apply(k,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(S,A,N){N||(N=0);const k=Array(16);if(typeof A=="string")for(var V=0;V<16;++V)k[V]=A.charCodeAt(N++)|A.charCodeAt(N++)<<8|A.charCodeAt(N++)<<16|A.charCodeAt(N++)<<24;else for(V=0;V<16;++V)k[V]=A[N++]|A[N++]<<8|A[N++]<<16|A[N++]<<24;A=S.g[0],N=S.g[1],V=S.g[2];let U=S.g[3],R;R=A+(U^N&(V^U))+k[0]+3614090360&4294967295,A=N+(R<<7&4294967295|R>>>25),R=U+(V^A&(N^V))+k[1]+3905402710&4294967295,U=A+(R<<12&4294967295|R>>>20),R=V+(N^U&(A^N))+k[2]+606105819&4294967295,V=U+(R<<17&4294967295|R>>>15),R=N+(A^V&(U^A))+k[3]+3250441966&4294967295,N=V+(R<<22&4294967295|R>>>10),R=A+(U^N&(V^U))+k[4]+4118548399&4294967295,A=N+(R<<7&4294967295|R>>>25),R=U+(V^A&(N^V))+k[5]+1200080426&4294967295,U=A+(R<<12&4294967295|R>>>20),R=V+(N^U&(A^N))+k[6]+2821735955&4294967295,V=U+(R<<17&4294967295|R>>>15),R=N+(A^V&(U^A))+k[7]+4249261313&4294967295,N=V+(R<<22&4294967295|R>>>10),R=A+(U^N&(V^U))+k[8]+1770035416&4294967295,A=N+(R<<7&4294967295|R>>>25),R=U+(V^A&(N^V))+k[9]+2336552879&4294967295,U=A+(R<<12&4294967295|R>>>20),R=V+(N^U&(A^N))+k[10]+4294925233&4294967295,V=U+(R<<17&4294967295|R>>>15),R=N+(A^V&(U^A))+k[11]+2304563134&4294967295,N=V+(R<<22&4294967295|R>>>10),R=A+(U^N&(V^U))+k[12]+1804603682&4294967295,A=N+(R<<7&4294967295|R>>>25),R=U+(V^A&(N^V))+k[13]+4254626195&4294967295,U=A+(R<<12&4294967295|R>>>20),R=V+(N^U&(A^N))+k[14]+2792965006&4294967295,V=U+(R<<17&4294967295|R>>>15),R=N+(A^V&(U^A))+k[15]+1236535329&4294967295,N=V+(R<<22&4294967295|R>>>10),R=A+(V^U&(N^V))+k[1]+4129170786&4294967295,A=N+(R<<5&4294967295|R>>>27),R=U+(N^V&(A^N))+k[6]+3225465664&4294967295,U=A+(R<<9&4294967295|R>>>23),R=V+(A^N&(U^A))+k[11]+643717713&4294967295,V=U+(R<<14&4294967295|R>>>18),R=N+(U^A&(V^U))+k[0]+3921069994&4294967295,N=V+(R<<20&4294967295|R>>>12),R=A+(V^U&(N^V))+k[5]+3593408605&4294967295,A=N+(R<<5&4294967295|R>>>27),R=U+(N^V&(A^N))+k[10]+38016083&4294967295,U=A+(R<<9&4294967295|R>>>23),R=V+(A^N&(U^A))+k[15]+3634488961&4294967295,V=U+(R<<14&4294967295|R>>>18),R=N+(U^A&(V^U))+k[4]+3889429448&4294967295,N=V+(R<<20&4294967295|R>>>12),R=A+(V^U&(N^V))+k[9]+568446438&4294967295,A=N+(R<<5&4294967295|R>>>27),R=U+(N^V&(A^N))+k[14]+3275163606&4294967295,U=A+(R<<9&4294967295|R>>>23),R=V+(A^N&(U^A))+k[3]+4107603335&4294967295,V=U+(R<<14&4294967295|R>>>18),R=N+(U^A&(V^U))+k[8]+1163531501&4294967295,N=V+(R<<20&4294967295|R>>>12),R=A+(V^U&(N^V))+k[13]+2850285829&4294967295,A=N+(R<<5&4294967295|R>>>27),R=U+(N^V&(A^N))+k[2]+4243563512&4294967295,U=A+(R<<9&4294967295|R>>>23),R=V+(A^N&(U^A))+k[7]+1735328473&4294967295,V=U+(R<<14&4294967295|R>>>18),R=N+(U^A&(V^U))+k[12]+2368359562&4294967295,N=V+(R<<20&4294967295|R>>>12),R=A+(N^V^U)+k[5]+4294588738&4294967295,A=N+(R<<4&4294967295|R>>>28),R=U+(A^N^V)+k[8]+2272392833&4294967295,U=A+(R<<11&4294967295|R>>>21),R=V+(U^A^N)+k[11]+1839030562&4294967295,V=U+(R<<16&4294967295|R>>>16),R=N+(V^U^A)+k[14]+4259657740&4294967295,N=V+(R<<23&4294967295|R>>>9),R=A+(N^V^U)+k[1]+2763975236&4294967295,A=N+(R<<4&4294967295|R>>>28),R=U+(A^N^V)+k[4]+1272893353&4294967295,U=A+(R<<11&4294967295|R>>>21),R=V+(U^A^N)+k[7]+4139469664&4294967295,V=U+(R<<16&4294967295|R>>>16),R=N+(V^U^A)+k[10]+3200236656&4294967295,N=V+(R<<23&4294967295|R>>>9),R=A+(N^V^U)+k[13]+681279174&4294967295,A=N+(R<<4&4294967295|R>>>28),R=U+(A^N^V)+k[0]+3936430074&4294967295,U=A+(R<<11&4294967295|R>>>21),R=V+(U^A^N)+k[3]+3572445317&4294967295,V=U+(R<<16&4294967295|R>>>16),R=N+(V^U^A)+k[6]+76029189&4294967295,N=V+(R<<23&4294967295|R>>>9),R=A+(N^V^U)+k[9]+3654602809&4294967295,A=N+(R<<4&4294967295|R>>>28),R=U+(A^N^V)+k[12]+3873151461&4294967295,U=A+(R<<11&4294967295|R>>>21),R=V+(U^A^N)+k[15]+530742520&4294967295,V=U+(R<<16&4294967295|R>>>16),R=N+(V^U^A)+k[2]+3299628645&4294967295,N=V+(R<<23&4294967295|R>>>9),R=A+(V^(N|~U))+k[0]+4096336452&4294967295,A=N+(R<<6&4294967295|R>>>26),R=U+(N^(A|~V))+k[7]+1126891415&4294967295,U=A+(R<<10&4294967295|R>>>22),R=V+(A^(U|~N))+k[14]+2878612391&4294967295,V=U+(R<<15&4294967295|R>>>17),R=N+(U^(V|~A))+k[5]+4237533241&4294967295,N=V+(R<<21&4294967295|R>>>11),R=A+(V^(N|~U))+k[12]+1700485571&4294967295,A=N+(R<<6&4294967295|R>>>26),R=U+(N^(A|~V))+k[3]+2399980690&4294967295,U=A+(R<<10&4294967295|R>>>22),R=V+(A^(U|~N))+k[10]+4293915773&4294967295,V=U+(R<<15&4294967295|R>>>17),R=N+(U^(V|~A))+k[1]+2240044497&4294967295,N=V+(R<<21&4294967295|R>>>11),R=A+(V^(N|~U))+k[8]+1873313359&4294967295,A=N+(R<<6&4294967295|R>>>26),R=U+(N^(A|~V))+k[15]+4264355552&4294967295,U=A+(R<<10&4294967295|R>>>22),R=V+(A^(U|~N))+k[6]+2734768916&4294967295,V=U+(R<<15&4294967295|R>>>17),R=N+(U^(V|~A))+k[13]+1309151649&4294967295,N=V+(R<<21&4294967295|R>>>11),R=A+(V^(N|~U))+k[4]+4149444226&4294967295,A=N+(R<<6&4294967295|R>>>26),R=U+(N^(A|~V))+k[11]+3174756917&4294967295,U=A+(R<<10&4294967295|R>>>22),R=V+(A^(U|~N))+k[2]+718787259&4294967295,V=U+(R<<15&4294967295|R>>>17),R=N+(U^(V|~A))+k[9]+3951481745&4294967295,S.g[0]=S.g[0]+A&4294967295,S.g[1]=S.g[1]+(V+(R<<21&4294967295|R>>>11))&4294967295,S.g[2]=S.g[2]+V&4294967295,S.g[3]=S.g[3]+U&4294967295}i.prototype.v=function(S,A){A===void 0&&(A=S.length);const N=A-this.blockSize,k=this.C;let V=this.h,U=0;for(;U<A;){if(V==0)for(;U<=N;)a(this,S,U),U+=this.blockSize;if(typeof S=="string"){for(;U<A;)if(k[V++]=S.charCodeAt(U++),V==this.blockSize){a(this,k),V=0;break}}else for(;U<A;)if(k[V++]=S[U++],V==this.blockSize){a(this,k),V=0;break}}this.h=V,this.o+=A},i.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var A=1;A<S.length-8;++A)S[A]=0;A=this.o*8;for(var N=S.length-8;N<S.length;++N)S[N]=A&255,A/=256;for(this.v(S),S=Array(16),A=0,N=0;N<4;++N)for(let k=0;k<32;k+=8)S[A++]=this.g[N]>>>k&255;return S};function l(S,A){var N=f;return Object.prototype.hasOwnProperty.call(N,S)?N[S]:N[S]=A(S)}function c(S,A){this.h=A;const N=[];let k=!0;for(let V=S.length-1;V>=0;V--){const U=S[V]|0;k&&U==A||(N[V]=U,k=!1)}this.g=N}var f={};function p(S){return-128<=S&&S<128?l(S,function(A){return new c([A|0],A<0?-1:0)}):new c([S|0],S<0?-1:0)}function g(S){if(isNaN(S)||!isFinite(S))return T;if(S<0)return H(g(-S));const A=[];let N=1;for(let k=0;S>=N;k++)A[k]=S/N|0,N*=4294967296;return new c(A,0)}function v(S,A){if(S.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(S.charAt(0)=="-")return H(v(S.substring(1),A));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const N=g(Math.pow(A,8));let k=T;for(let U=0;U<S.length;U+=8){var V=Math.min(8,S.length-U);const R=parseInt(S.substring(U,U+V),A);V<8?(V=g(Math.pow(A,V)),k=k.j(V).add(g(R))):(k=k.j(N),k=k.add(g(R)))}return k}var T=p(0),w=p(1),D=p(16777216);r=c.prototype,r.m=function(){if(O(this))return-H(this).m();let S=0,A=1;for(let N=0;N<this.g.length;N++){const k=this.i(N);S+=(k>=0?k:4294967296+k)*A,A*=4294967296}return S},r.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(Y(this))return"0";if(O(this))return"-"+H(this).toString(S);const A=g(Math.pow(S,6));var N=this;let k="";for(;;){const V=_e(N,A).g;N=J(N,V.j(A));let U=((N.g.length>0?N.g[0]:N.h)>>>0).toString(S);if(N=V,Y(N))return U+k;for(;U.length<6;)U="0"+U;k=U+k}},r.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function Y(S){if(S.h!=0)return!1;for(let A=0;A<S.g.length;A++)if(S.g[A]!=0)return!1;return!0}function O(S){return S.h==-1}r.l=function(S){return S=J(this,S),O(S)?-1:Y(S)?0:1};function H(S){const A=S.g.length,N=[];for(let k=0;k<A;k++)N[k]=~S.g[k];return new c(N,~S.h).add(w)}r.abs=function(){return O(this)?H(this):this},r.add=function(S){const A=Math.max(this.g.length,S.g.length),N=[];let k=0;for(let V=0;V<=A;V++){let U=k+(this.i(V)&65535)+(S.i(V)&65535),R=(U>>>16)+(this.i(V)>>>16)+(S.i(V)>>>16);k=R>>>16,U&=65535,R&=65535,N[V]=R<<16|U}return new c(N,N[N.length-1]&-2147483648?-1:0)};function J(S,A){return S.add(H(A))}r.j=function(S){if(Y(this)||Y(S))return T;if(O(this))return O(S)?H(this).j(H(S)):H(H(this).j(S));if(O(S))return H(this.j(H(S)));if(this.l(D)<0&&S.l(D)<0)return g(this.m()*S.m());const A=this.g.length+S.g.length,N=[];for(var k=0;k<2*A;k++)N[k]=0;for(k=0;k<this.g.length;k++)for(let V=0;V<S.g.length;V++){const U=this.i(k)>>>16,R=this.i(k)&65535,dt=S.i(V)>>>16,Kt=S.i(V)&65535;N[2*k+2*V]+=R*Kt,re(N,2*k+2*V),N[2*k+2*V+1]+=U*Kt,re(N,2*k+2*V+1),N[2*k+2*V+1]+=R*dt,re(N,2*k+2*V+1),N[2*k+2*V+2]+=U*dt,re(N,2*k+2*V+2)}for(S=0;S<A;S++)N[S]=N[2*S+1]<<16|N[2*S];for(S=A;S<2*A;S++)N[S]=0;return new c(N,0)};function re(S,A){for(;(S[A]&65535)!=S[A];)S[A+1]+=S[A]>>>16,S[A]&=65535,A++}function se(S,A){this.g=S,this.h=A}function _e(S,A){if(Y(A))throw Error("division by zero");if(Y(S))return new se(T,T);if(O(S))return A=_e(H(S),A),new se(H(A.g),H(A.h));if(O(A))return A=_e(S,H(A)),new se(H(A.g),A.h);if(S.g.length>30){if(O(S)||O(A))throw Error("slowDivide_ only works with positive integers.");for(var N=w,k=A;k.l(S)<=0;)N=we(N),k=we(k);var V=me(N,1),U=me(k,1);for(k=me(k,2),N=me(N,2);!Y(k);){var R=U.add(k);R.l(S)<=0&&(V=V.add(N),U=R),k=me(k,1),N=me(N,1)}return A=J(S,V.j(A)),new se(V,A)}for(V=T;S.l(A)>=0;){for(N=Math.max(1,Math.floor(S.m()/A.m())),k=Math.ceil(Math.log(N)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),U=g(N),R=U.j(A);O(R)||R.l(S)>0;)N-=k,U=g(N),R=U.j(A);Y(U)&&(U=w),V=V.add(U),S=J(S,R)}return new se(V,S)}r.B=function(S){return _e(this,S).h},r.and=function(S){const A=Math.max(this.g.length,S.g.length),N=[];for(let k=0;k<A;k++)N[k]=this.i(k)&S.i(k);return new c(N,this.h&S.h)},r.or=function(S){const A=Math.max(this.g.length,S.g.length),N=[];for(let k=0;k<A;k++)N[k]=this.i(k)|S.i(k);return new c(N,this.h|S.h)},r.xor=function(S){const A=Math.max(this.g.length,S.g.length),N=[];for(let k=0;k<A;k++)N[k]=this.i(k)^S.i(k);return new c(N,this.h^S.h)};function we(S){const A=S.g.length+1,N=[];for(let k=0;k<A;k++)N[k]=S.i(k)<<1|S.i(k-1)>>>31;return new c(N,S.h)}function me(S,A){const N=A>>5;A%=32;const k=S.g.length-N,V=[];for(let U=0;U<k;U++)V[U]=A>0?S.i(U+N)>>>A|S.i(U+N+1)<<32-A:S.i(U+N);return new c(V,S.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,lS=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,js=c}).apply(typeof hI<"u"?hI:typeof self<"u"?self:typeof window<"u"?window:{});var bf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uS,Pc,cS,Pf,L_,hS,dS,fS;(function(){var r,e=Object.defineProperty;function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof bf=="object"&&bf];for(var _=0;_<h.length;++_){var E=h[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var i=t(this);function a(h,_){if(_)e:{var E=i;h=h.split(".");for(var I=0;I<h.length-1;I++){var B=h[I];if(!(B in E))break e;E=E[B]}h=h[h.length-1],I=E[h],_=_(I),_!=I&&_!=null&&e(E,h,{configurable:!0,writable:!0,value:_})}}a("Symbol.dispose",function(h){return h||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(h){return h||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(h){return h||function(_){var E=[],I;for(I in _)Object.prototype.hasOwnProperty.call(_,I)&&E.push([I,_[I]]);return E}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function f(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function p(h,_,E){return h.call.apply(h.bind,arguments)}function g(h,_,E){return g=p,g.apply(null,arguments)}function v(h,_){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function T(h,_){function E(){}E.prototype=_.prototype,h.Z=_.prototype,h.prototype=new E,h.prototype.constructor=h,h.Ob=function(I,B,K){for(var ae=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)ae[Re-2]=arguments[Re];return _.prototype[B].apply(I,ae)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?h=>h&&AsyncContext.Snapshot.wrap(h):h=>h;function D(h){const _=h.length;if(_>0){const E=Array(_);for(let I=0;I<_;I++)E[I]=h[I];return E}return[]}function Y(h,_){for(let I=1;I<arguments.length;I++){const B=arguments[I];var E=typeof B;if(E=E!="object"?E:B?Array.isArray(B)?"array":E:"null",E=="array"||E=="object"&&typeof B.length=="number"){E=h.length||0;const K=B.length||0;h.length=E+K;for(let ae=0;ae<K;ae++)h[E+ae]=B[ae]}else h.push(B)}}class O{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return this.h>0?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function H(h){c.setTimeout(()=>{throw h},0)}function J(){var h=S;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class re{constructor(){this.h=this.g=null}add(_,E){const I=se.get();I.set(_,E),this.h?this.h.next=I:this.g=I,this.h=I}}var se=new O(()=>new _e,h=>h.reset());class _e{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let we,me=!1,S=new re,A=()=>{const h=Promise.resolve(void 0);we=()=>{h.then(N)}};function N(){for(var h;h=J();){try{h.h.call(h.g)}catch(E){H(E)}var _=se;_.j(h),_.h<100&&(_.h++,h.next=_.g,_.g=h)}me=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function V(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}V.prototype.h=function(){this.defaultPrevented=!0};var U=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};c.addEventListener("test",E,_),c.removeEventListener("test",E,_)}catch{}return h})();function R(h){return/^[\s\xa0]*$/.test(h)}function dt(h,_){V.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h&&this.init(h,_)}T(dt,V),dt.prototype.init=function(h,_){const E=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget,_||(E=="mouseover"?_=h.fromElement:E=="mouseout"&&(_=h.toElement)),this.relatedTarget=_,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=h.pointerType,this.state=h.state,this.i=h,h.defaultPrevented&&dt.Z.h.call(this)},dt.prototype.h=function(){dt.Z.h.call(this);const h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Kt="closure_listenable_"+(Math.random()*1e6|0),$=0;function ue(h,_,E,I,B){this.listener=h,this.proxy=null,this.src=_,this.type=E,this.capture=!!I,this.ha=B,this.key=++$,this.da=this.fa=!1}function Ee(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function je(h,_,E){for(const I in h)_.call(E,h[I],I,h)}function We(h,_){for(const E in h)_.call(void 0,h[E],E,h)}function P(h){const _={};for(const E in h)_[E]=h[E];return _}const ee="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(h,_){let E,I;for(let B=1;B<arguments.length;B++){I=arguments[B];for(E in I)h[E]=I[E];for(let K=0;K<ee.length;K++)E=ee[K],Object.prototype.hasOwnProperty.call(I,E)&&(h[E]=I[E])}}function de(h){this.src=h,this.g={},this.h=0}de.prototype.add=function(h,_,E,I,B){const K=h.toString();h=this.g[K],h||(h=this.g[K]=[],this.h++);const ae=De(h,_,I,B);return ae>-1?(_=h[ae],E||(_.fa=!1)):(_=new ue(_,this.src,K,!!I,B),_.fa=E,h.push(_)),_};function Ie(h,_){const E=_.type;if(E in h.g){var I=h.g[E],B=Array.prototype.indexOf.call(I,_,void 0),K;(K=B>=0)&&Array.prototype.splice.call(I,B,1),K&&(Ee(_),h.g[E].length==0&&(delete h.g[E],h.h--))}}function De(h,_,E,I){for(let B=0;B<h.length;++B){const K=h[B];if(!K.da&&K.listener==_&&K.capture==!!E&&K.ha==I)return B}return-1}var Be="closure_lm_"+(Math.random()*1e6|0),Qt={};function ft(h,_,E,I,B){if(Array.isArray(_)){for(let K=0;K<_.length;K++)ft(h,_[K],E,I,B);return null}return E=_u(E),h&&h[Kt]?h.J(_,E,f(I)?!!I.capture:!1,B):ha(h,_,E,!1,I,B)}function ha(h,_,E,I,B,K){if(!_)throw Error("Invalid event type");const ae=f(B)?!!B.capture:!!B;let Re=da(h);if(Re||(h[Be]=Re=new de(h)),E=Re.add(_,E,I,ae,K),E.proxy)return E;if(I=Io(),E.proxy=I,I.src=h,I.listener=E,h.addEventListener)U||(B=ae),B===void 0&&(B=!1),h.addEventListener(_.toString(),I,B);else if(h.attachEvent)h.attachEvent(ki(_.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Io(){function h(E){return _.call(h.src,h.listener,E)}const _=pu;return h}function Ao(h,_,E,I,B){if(Array.isArray(_))for(var K=0;K<_.length;K++)Ao(h,_[K],E,I,B);else I=f(I)?!!I.capture:!!I,E=_u(E),h&&h[Kt]?(h=h.i,K=String(_).toString(),K in h.g&&(_=h.g[K],E=De(_,E,I,B),E>-1&&(Ee(_[E]),Array.prototype.splice.call(_,E,1),_.length==0&&(delete h.g[K],h.h--)))):h&&(h=da(h))&&(_=h.g[_.toString()],h=-1,_&&(h=De(_,E,I,B)),(E=h>-1?_[h]:null)&&So(E))}function So(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Kt])Ie(_.i,h);else{var E=h.type,I=h.proxy;_.removeEventListener?_.removeEventListener(E,I,h.capture):_.detachEvent?_.detachEvent(ki(E),I):_.addListener&&_.removeListener&&_.removeListener(I),(E=da(_))?(Ie(E,h),E.h==0&&(E.src=null,_[Be]=null)):Ee(h)}}}function ki(h){return h in Qt?Qt[h]:Qt[h]="on"+h}function pu(h,_){if(h.da)h=!0;else{_=new dt(_,this);const E=h.listener,I=h.ha||h.src;h.fa&&So(h),h=E.call(I,_)}return h}function da(h){return h=h[Be],h instanceof de?h:null}var gu="__closure_events_fn_"+(Math.random()*1e9>>>0);function _u(h){return typeof h=="function"?h:(h[gu]||(h[gu]=function(_){return h.handleEvent(_)}),h[gu])}function Ot(){k.call(this),this.i=new de(this),this.M=this,this.G=null}T(Ot,k),Ot.prototype[Kt]=!0,Ot.prototype.removeEventListener=function(h,_,E,I){Ao(this,h,_,E,I)};function Yt(h,_){var E,I=h.G;if(I)for(E=[];I;I=I.G)E.push(I);if(h=h.M,I=_.type||_,typeof _=="string")_=new V(_,h);else if(_ instanceof V)_.target=_.target||h;else{var B=_;_=new V(I,h),ce(_,B)}B=!0;let K,ae;if(E)for(ae=E.length-1;ae>=0;ae--)K=_.g=E[ae],B=Jr(K,I,!0,_)&&B;if(K=_.g=h,B=Jr(K,I,!0,_)&&B,B=Jr(K,I,!1,_)&&B,E)for(ae=0;ae<E.length;ae++)K=_.g=E[ae],B=Jr(K,I,!1,_)&&B}Ot.prototype.N=function(){if(Ot.Z.N.call(this),this.i){var h=this.i;for(const _ in h.g){const E=h.g[_];for(let I=0;I<E.length;I++)Ee(E[I]);delete h.g[_],h.h--}}this.G=null},Ot.prototype.J=function(h,_,E,I){return this.i.add(String(h),_,!1,E,I)},Ot.prototype.K=function(h,_,E,I){return this.i.add(String(h),_,!0,E,I)};function Jr(h,_,E,I){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();let B=!0;for(let K=0;K<_.length;++K){const ae=_[K];if(ae&&!ae.da&&ae.capture==E){const Re=ae.listener,Ct=ae.ha||ae.src;ae.fa&&Ie(h.i,ae),B=Re.call(Ct,I)!==!1&&B}}return B&&!I.defaultPrevented}function np(h,_){if(typeof h!="function")if(h&&typeof h.handleEvent=="function")h=g(h.handleEvent,h);else throw Error("Invalid listener argument");return Number(_)>2147483647?-1:c.setTimeout(h,_||0)}function Gh(h){h.g=np(()=>{h.g=null,h.i&&(h.i=!1,Gh(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Tn extends k{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Gh(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fa(h){k.call(this),this.h=h,this.g={}}T(fa,k);var yu=[];function vu(h){je(h.g,function(_,E){this.g.hasOwnProperty(E)&&So(_)},h),h.g={}}fa.prototype.N=function(){fa.Z.N.call(this),vu(this)},fa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zr=c.JSON.stringify,ip=c.JSON.parse,Kh=class{stringify(h){return c.JSON.stringify(h,void 0)}parse(h){return c.JSON.parse(h,void 0)}};function Qh(){}function Yh(){}var _i={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function sn(){V.call(this,"d")}T(sn,V);function ei(){V.call(this,"c")}T(ei,V);var Rt={},Wh=null;function Ro(){return Wh=Wh||new Ot}Rt.Ia="serverreachability";function $h(h){V.call(this,Rt.Ia,h)}T($h,V);function Mi(h){const _=Ro();Yt(_,new $h(_))}Rt.STAT_EVENT="statevent";function ma(h,_){V.call(this,Rt.STAT_EVENT,h),this.stat=_}T(ma,V);function kt(h){const _=Ro();Yt(_,new ma(_,h))}Rt.Ja="timingevent";function Li(h,_){V.call(this,Rt.Ja,h),this.size=_}T(Li,V);function Ui(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){h()},_)}function yi(){this.g=!0}yi.prototype.ua=function(){this.g=!1};function rp(h,_,E,I,B,K){h.info(function(){if(h.g)if(K){var ae="",Re=K.split("&");for(let Ke=0;Ke<Re.length;Ke++){var Ct=Re[Ke].split("=");if(Ct.length>1){const mt=Ct[0];Ct=Ct[1];const ri=mt.split("_");ae=ri.length>=2&&ri[1]=="type"?ae+(mt+"="+Ct+"&"):ae+(mt+"=redacted&")}}}else ae=null;else ae=K;return"XMLHTTP REQ ("+I+") [attempt "+B+"]: "+_+`
`+E+`
`+ae})}function Xh(h,_,E,I,B,K,ae){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+B+"]: "+_+`
`+E+`
`+K+" "+ae})}function zi(h,_,E,I){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+sp(h,E)+(I?" "+I:"")})}function pa(h,_){h.info(function(){return"TIMEOUT: "+_})}yi.prototype.info=function(){};function sp(h,_){if(!h.g)return _;if(!_)return null;try{const K=JSON.parse(_);if(K){for(h=0;h<K.length;h++)if(Array.isArray(K[h])){var E=K[h];if(!(E.length<2)){var I=E[1];if(Array.isArray(I)&&!(I.length<1)){var B=I[0];if(B!="noop"&&B!="stop"&&B!="close")for(let ae=1;ae<I.length;ae++)I[ae]=""}}}}return Zr(K)}catch{return _}}var ga={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Eu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Tu;function _a(){}T(_a,Qh),_a.prototype.g=function(){return new XMLHttpRequest},Tu=new _a;function Er(h){return encodeURIComponent(String(h))}function Jh(h){var _=1;h=h.split(":");const E=[];for(;_>0&&h.length;)E.push(h.shift()),_--;return h.length&&E.push(h.join(":")),E}function vi(h,_,E,I){this.j=h,this.i=_,this.l=E,this.S=I||1,this.V=new fa(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ei}function Ei(){this.i=null,this.g="",this.h=!1}var Mt={},Jt={};function Bi(h,_,E){h.M=1,h.A=ya(Ut(_)),h.u=E,h.R=!0,Co(h,null)}function Co(h,_){h.F=Date.now(),Fi(h),h.B=Ut(h.A);var E=h.B,I=h.S;Array.isArray(I)||(I=[String(I)]),Vo(E.i,"t",I),h.C=0,E=h.j.L,h.h=new Ei,h.g=fd(h.j,E?_:null,!h.u),h.P>0&&(h.O=new Tn(g(h.Y,h,h.g),h.P)),_=h.V,E=h.g,I=h.ba;var B="readystatechange";Array.isArray(B)||(B&&(yu[0]=B.toString()),B=yu);for(let K=0;K<B.length;K++){const ae=ft(E,B[K],I||_.handleEvent,!1,_.h||_);if(!ae)break;_.g[ae.key]=ae}_=h.J?P(h.J):{},h.u?(h.v||(h.v="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.B,h.v,h.u,_)):(h.v="GET",h.g.ea(h.B,h.v,null,_)),Mi(),rp(h.i,h.v,h.B,h.l,h.S,h.u)}vi.prototype.ba=function(h){h=h.target;const _=this.O;_&&wi(h)==3?_.j():this.Y(h)},vi.prototype.Y=function(h){try{if(h==this.g)e:{const Re=wi(this.g),Ct=this.g.ya(),Ke=this.g.ca();if(!(Re<3)&&(Re!=3||this.g&&(this.h.h||this.g.la()||an(this.g)))){this.K||Re!=4||Ct==7||(Ct==8||Ke<=0?Mi(3):Mi(2)),ji(this);var _=this.g.ca();this.X=_;var E=ap(this);if(this.o=_==200,Xh(this.i,this.v,this.B,this.l,this.S,Re,_),this.o){if(this.U&&!this.L){t:{if(this.g){var I,B=this.g;if((I=B.g?B.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(I)){var K=I;break t}}K=null}if(h=K)zi(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,qi(this,h);else{this.o=!1,this.m=3,kt(12),Bn(this),ti(this);break e}}if(this.R){h=!0;let mt;for(;!this.K&&this.C<E.length;)if(mt=ed(this,E),mt==Jt){Re==4&&(this.m=4,kt(14),h=!1),zi(this.i,this.l,null,"[Incomplete Response]");break}else if(mt==Mt){this.m=4,kt(15),zi(this.i,this.l,E,"[Invalid Chunk]"),h=!1;break}else zi(this.i,this.l,mt,null),qi(this,mt);if(Zh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||E.length!=0||this.h.h||(this.m=1,kt(16),h=!1),this.o=this.o&&h,!h)zi(this.i,this.l,E,"[Invalid Chunked Response]"),Bn(this),ti(this);else if(E.length>0&&!this.W){this.W=!0;var ae=this.j;ae.g==this&&ae.aa&&!ae.P&&(ae.j.info("Great, no buffering proxy detected. Bytes received: "+E.length),Mu(ae),ae.P=!0,kt(11))}}else zi(this.i,this.l,E,null),qi(this,E);Re==4&&Bn(this),this.o&&!this.K&&(Re==4?ud(this.j,this):(this.o=!1,Fi(this)))}else br(this.g),_==400&&E.indexOf("Unknown SID")>0?(this.m=3,kt(12)):(this.m=0,kt(13)),Bn(this),ti(this)}}}catch{}finally{}};function ap(h){if(!Zh(h))return h.g.la();const _=an(h.g);if(_==="")return"";let E="";const I=_.length,B=wi(h.g)==4;if(!h.h.i){if(typeof TextDecoder>"u")return Bn(h),ti(h),"";h.h.i=new c.TextDecoder}for(let K=0;K<I;K++)h.h.h=!0,E+=h.h.i.decode(_[K],{stream:!(B&&K==I-1)});return _.length=0,h.h.g+=E,h.C=0,h.h.g}function Zh(h){return h.g?h.v=="GET"&&h.M!=2&&h.j.Aa:!1}function ed(h,_){var E=h.C,I=_.indexOf(`
`,E);return I==-1?Jt:(E=Number(_.substring(E,I)),isNaN(E)?Mt:(I+=1,I+E>_.length?Jt:(_=_.slice(I,I+E),h.C=I+E,_)))}vi.prototype.cancel=function(){this.K=!0,Bn(this)};function Fi(h){h.T=Date.now()+h.H,No(h,h.H)}function No(h,_){if(h.D!=null)throw Error("WatchDog timer not null");h.D=Ui(g(h.aa,h),_)}function ji(h){h.D&&(c.clearTimeout(h.D),h.D=null)}vi.prototype.aa=function(){this.D=null;const h=Date.now();h-this.T>=0?(pa(this.i,this.B),this.M!=2&&(Mi(),kt(17)),Bn(this),this.m=2,ti(this)):No(this,this.T-h)};function ti(h){h.j.I==0||h.K||ud(h.j,h)}function Bn(h){ji(h);var _=h.O;_&&typeof _.dispose=="function"&&_.dispose(),h.O=null,vu(h.V),h.g&&(_=h.g,h.g=null,_.abort(),_.dispose())}function qi(h,_){try{var E=h.j;if(E.I!=0&&(E.g==h||Gi(E.h,h))){if(!h.L&&Gi(E.h,h)&&E.I==3){try{var I=E.Ba.g.parse(_)}catch{I=null}if(Array.isArray(I)&&I.length==3){var B=I;if(B[0]==0){e:if(!E.v){if(E.g)if(E.g.F+3e3<h.F)Lo(E),os(E);else break e;Aa(E),kt(18)}}else E.xa=B[1],0<E.xa-E.K&&B[2]<37500&&E.F&&E.A==0&&!E.C&&(E.C=Ui(g(E.Va,E),6e3));Hi(E.h)<=1&&E.ta&&(E.ta=void 0)}else Xi(E,11)}else if((h.L||E.g==h)&&Lo(E),!R(_))for(B=E.Ba.g.parse(_),_=0;_<B.length;_++){let Ke=B[_];const mt=Ke[0];if(!(mt<=E.K))if(E.K=mt,Ke=Ke[1],E.I==2)if(Ke[0]=="c"){E.M=Ke[1],E.ba=Ke[2];const ri=Ke[3];ri!=null&&(E.ka=ri,E.j.info("VER="+E.ka));const Ji=Ke[4];Ji!=null&&(E.za=Ji,E.j.info("SVER="+E.za));const Ii=Ke[5];Ii!=null&&typeof Ii=="number"&&Ii>0&&(I=1.5*Ii,E.O=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const Ai=h.g;if(Ai){const Sa=Ai.g?Ai.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sa){var K=I.h;K.g||Sa.indexOf("spdy")==-1&&Sa.indexOf("quic")==-1&&Sa.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(Iu(K,K.h),K.h=null))}if(I.G){const Uo=Ai.g?Ai.g.getResponseHeader("X-HTTP-Session-Id"):null;Uo&&(I.wa=Uo,$e(I.J,I.G,Uo))}}E.I=3,E.l&&E.l.ra(),E.aa&&(E.T=Date.now()-h.F,E.j.info("Handshake RTT: "+E.T+"ms")),I=E;var ae=h;if(I.na=dd(I,I.L?I.ba:null,I.W),ae.L){Au(I.h,ae);var Re=ae,Ct=I.O;Ct&&(Re.H=Ct),Re.D&&(ji(Re),Fi(Re)),I.g=ae}else od(I);E.i.length>0&&$i(E)}else Ke[0]!="stop"&&Ke[0]!="close"||Xi(E,7);else E.I==3&&(Ke[0]=="stop"||Ke[0]=="close"?Ke[0]=="stop"?Xi(E,7):Ou(E):Ke[0]!="noop"&&E.l&&E.l.qa(Ke),E.A=0)}}Mi(4)}catch{}}var Lt=class{constructor(h,_){this.g=h,this.map=_}};function bu(h){this.l=h||10,c.PerformanceNavigationTiming?(h=c.performance.getEntriesByType("navigation"),h=h.length>0&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function wu(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Hi(h){return h.h?1:h.g?h.g.size:0}function Gi(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Iu(h,_){h.g?h.g.add(_):h.h=_}function Au(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}bu.prototype.cancel=function(){if(this.i=Su(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Su(h){if(h.h!=null)return h.i.concat(h.h.G);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const E of h.g.values())_=_.concat(E.G);return _}return D(h.i)}var td=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Do(h,_){if(h){h=h.split("&");for(let E=0;E<h.length;E++){const I=h[E].indexOf("=");let B,K=null;I>=0?(B=h[E].substring(0,I),K=h[E].substring(I+1)):B=h[E],_(B,K?decodeURIComponent(K.replace(/\+/g," ")):"")}}}function Fn(h){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let _;h instanceof Fn?(this.l=h.l,Zt(this,h.j),this.o=h.o,this.g=h.g,es(this,h.u),this.h=h.h,Ru(this,sd(h.i)),this.m=h.m):h&&(_=String(h).match(td))?(this.l=!1,Zt(this,_[1]||"",!0),this.o=Ki(_[2]||""),this.g=Ki(_[3]||"",!0),es(this,_[4]),this.h=Ki(_[5]||"",!0),Ru(this,_[6]||"",!0),this.m=Ki(_[7]||"")):(this.l=!1,this.i=new ns(null,this.l))}Fn.prototype.toString=function(){const h=[];var _=this.j;_&&h.push(va(_,xo,!0),":");var E=this.g;return(E||_=="file")&&(h.push("//"),(_=this.o)&&h.push(va(_,xo,!0),"@"),h.push(Er(E).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.u,E!=null&&h.push(":",String(E))),(E=this.h)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(va(E,E.charAt(0)=="/"?Cu:nd,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",va(E,id)),h.join("")},Fn.prototype.resolve=function(h){const _=Ut(this);let E=!!h.j;E?Zt(_,h.j):E=!!h.o,E?_.o=h.o:E=!!h.g,E?_.g=h.g:E=h.u!=null;var I=h.h;if(E)es(_,h.u);else if(E=!!h.h){if(I.charAt(0)!="/")if(this.g&&!this.h)I="/"+I;else{var B=_.h.lastIndexOf("/");B!=-1&&(I=_.h.slice(0,B+1)+I)}if(B=I,B==".."||B==".")I="";else if(B.indexOf("./")!=-1||B.indexOf("/.")!=-1){I=B.lastIndexOf("/",0)==0,B=B.split("/");const K=[];for(let ae=0;ae<B.length;){const Re=B[ae++];Re=="."?I&&ae==B.length&&K.push(""):Re==".."?((K.length>1||K.length==1&&K[0]!="")&&K.pop(),I&&ae==B.length&&K.push("")):(K.push(Re),I=!0)}I=K.join("/")}else I=B}return E?_.h=I:E=h.i.toString()!=="",E?Ru(_,sd(h.i)):E=!!h.m,E&&(_.m=h.m),_};function Ut(h){return new Fn(h)}function Zt(h,_,E){h.j=E?Ki(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function es(h,_){if(_){if(_=Number(_),isNaN(_)||_<0)throw Error("Bad port number "+_);h.u=_}else h.u=null}function Ru(h,_,E){_ instanceof ns?(h.i=_,Po(h.i,h.l)):(E||(_=va(_,ts)),h.i=new ns(_,h.l))}function $e(h,_,E){h.i.set(_,E)}function ya(h){return $e(h,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),h}function Ki(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function va(h,_,E){return typeof h=="string"?(h=encodeURI(h).replace(_,Nn),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Nn(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var xo=/[#\/\?@]/g,nd=/[#\?:]/g,Cu=/[#\?]/g,ts=/[#\?@]/g,id=/#/g;function ns(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Dn(h){h.g||(h.g=new Map,h.h=0,h.i&&Do(h.i,function(_,E){h.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}r=ns.prototype,r.add=function(h,_){Dn(this),this.i=null,h=is(this,h);let E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(_),this.h+=1,this};function rd(h,_){Dn(h),_=is(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Nu(h,_){return Dn(h),_=is(h,_),h.g.has(_)}r.forEach=function(h,_){Dn(this),this.g.forEach(function(E,I){E.forEach(function(B){h.call(_,B,I,this)},this)},this)};function Du(h,_){Dn(h);let E=[];if(typeof _=="string")Nu(h,_)&&(E=E.concat(h.g.get(is(h,_))));else for(h=Array.from(h.g.values()),_=0;_<h.length;_++)E=E.concat(h[_]);return E}r.set=function(h,_){return Dn(this),this.i=null,h=is(this,h),Nu(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},r.get=function(h,_){return h?(h=Du(this,h),h.length>0?String(h[0]):_):_};function Vo(h,_,E){rd(h,_),E.length>0&&(h.i=null,h.g.set(is(h,_),D(E)),h.h+=E.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(let I=0;I<_.length;I++){var E=_[I];const B=Er(E);E=Du(this,E);for(let K=0;K<E.length;K++){let ae=B;E[K]!==""&&(ae+="="+Er(E[K])),h.push(ae)}}return this.i=h.join("&")};function sd(h){const _=new ns;return _.i=h.i,h.g&&(_.g=new Map(h.g),_.h=h.h),_}function is(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Po(h,_){_&&!h.j&&(Dn(h),h.i=null,h.g.forEach(function(E,I){const B=I.toLowerCase();I!=B&&(rd(this,I),Vo(this,B,E))},h)),h.j=_}function Ti(h,_){const E=new yi;if(c.Image){const I=new Image;I.onload=v(ni,E,"TestLoadImage: loaded",!0,_,I),I.onerror=v(ni,E,"TestLoadImage: error",!1,_,I),I.onabort=v(ni,E,"TestLoadImage: abort",!1,_,I),I.ontimeout=v(ni,E,"TestLoadImage: timeout",!1,_,I),c.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else _(!1)}function xu(h,_){const E=new yi,I=new AbortController,B=setTimeout(()=>{I.abort(),ni(E,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:I.signal}).then(K=>{clearTimeout(B),K.ok?ni(E,"TestPingServer: ok",!0,_):ni(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(B),ni(E,"TestPingServer: error",!1,_)})}function ni(h,_,E,I,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),I(E)}catch{}}function rs(){this.g=new Kh}function Qi(h){this.i=h.Sb||null,this.h=h.ab||!1}T(Qi,Qh),Qi.prototype.g=function(){return new Ea(this.i,this.h)};function Ea(h,_){Ot.call(this),this.H=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(Ea,Ot),r=Ea.prototype,r.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=h,this.D=_,this.readyState=1,bi(this)},r.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const _={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};h&&(_.body=h),(this.H||c).fetch(new Request(this.D,_)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ss(this)),this.readyState=0},r.Pa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Oo(this)}else h.text().then(this.Oa.bind(this),this.ga.bind(this))};function Oo(h){h.j.read().then(h.Ma.bind(h)).catch(h.ga.bind(h))}r.Ma=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.B.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?ss(this):bi(this),this.readyState==3&&Oo(this)}},r.Oa=function(h){this.g&&(this.response=this.responseText=h,ss(this))},r.Na=function(h){this.g&&(this.response=h,ss(this))},r.ga=function(){this.g&&ss(this)};function ss(h){h.readyState=4,h.l=null,h.j=null,h.B=null,bi(h)}r.setRequestHeader=function(h,_){this.A.append(h,_)},r.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=_.next();return h.join(`\r
`)};function bi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function ii(h){let _="";return je(h,function(E,I){_+=I,_+=":",_+=E,_+=`\r
`}),_}function Ta(h,_,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=ii(E),typeof h=="string"?E!=null&&Er(E):$e(h,_,E))}function tt(h){Ot.call(this),this.headers=new Map,this.L=h||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(tt,Ot);var Yi=/^https?$/i,Vu=["POST","PUT"];r=tt.prototype,r.Fa=function(h){this.H=h},r.ea=function(h,_,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Tu.g(),this.g.onreadystatechange=w(g(this.Ca,this));try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(K){ba(this,K);return}if(h=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var B in I)E.set(B,I[B]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const K of I.keys())E.set(K,I.get(K));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(K=>K.toLowerCase()=="content-type"),B=c.FormData&&h instanceof c.FormData,!(Array.prototype.indexOf.call(Vu,_,void 0)>=0)||I||B||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,ae]of E)this.g.setRequestHeader(K,ae);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(h),this.v=!1}catch(K){ba(this,K)}};function ba(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.o=5,Pu(h),Tr(h)}function Pu(h){h.A||(h.A=!0,Yt(h,"complete"),Yt(h,"error"))}r.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=h||7,Yt(this,"complete"),Yt(this,"abort"),Tr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tr(this,!0)),tt.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?wa(this):this.Xa())},r.Xa=function(){wa(this)};function wa(h){if(h.h&&typeof l<"u"){if(h.v&&wi(h)==4)setTimeout(h.Ca.bind(h),0);else if(Yt(h,"readystatechange"),wi(h)==4){h.h=!1;try{const K=h.ca();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var I;if(I=K===0){let ae=String(h.D).match(td)[1]||null;!ae&&c.self&&c.self.location&&(ae=c.self.location.protocol.slice(0,-1)),I=!Yi.test(ae?ae.toLowerCase():"")}E=I}if(E)Yt(h,"complete"),Yt(h,"success");else{h.o=6;try{var B=wi(h)>2?h.g.statusText:""}catch{B=""}h.l=B+" ["+h.ca()+"]",Pu(h)}}finally{Tr(h)}}}}function Tr(h,_){if(h.g){h.m&&(clearTimeout(h.m),h.m=null);const E=h.g;h.g=null,_||Yt(h,"ready");try{E.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function wi(h){return h.g?h.g.readyState:0}r.ca=function(){try{return wi(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),ip(_)}};function an(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.F){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function br(h){const _={};h=(h.g&&wi(h)>=2&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(R(h[I]))continue;var E=Jh(h[I]);const B=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const K=_[B]||[];_[B]=K,K.push(E)}We(_,function(I){return I.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wi(h,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||_}function as(h){this.za=0,this.i=[],this.j=new yi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Wi("failFast",!1,h),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Wi("baseRetryDelayMs",5e3,h),this.Za=Wi("retryDelaySeedMs",1e4,h),this.Ta=Wi("forwardChannelMaxRetries",2,h),this.va=Wi("forwardChannelRequestTimeoutMs",2e4,h),this.ma=h&&h.xmlHttpFactory||void 0,this.Ua=h&&h.Rb||void 0,this.Aa=h&&h.useFetchStreams||!1,this.O=void 0,this.L=h&&h.supportsCrossDomainXhr||!1,this.M="",this.h=new bu(h&&h.concurrentRequestLimit),this.Ba=new rs,this.S=h&&h.fastHandshake||!1,this.R=h&&h.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=h&&h.Pb||!1,h&&h.ua&&this.j.ua(),h&&h.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&h&&h.detectBufferingProxy||!1,this.ia=void 0,h&&h.longPollingTimeout&&h.longPollingTimeout>0&&(this.ia=h.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=as.prototype,r.ka=8,r.I=1,r.connect=function(h,_,E,I){kt(0),this.W=h,this.H=_||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.J=dd(this,null,this.W),$i(this)};function Ou(h){if(ko(h),h.I==3){var _=h.V++,E=Ut(h.J);if($e(E,"SID",h.M),$e(E,"RID",_),$e(E,"TYPE","terminate"),Ia(h,E),_=new vi(h,h.j,_),_.M=2,_.A=ya(Ut(E)),E=!1,c.navigator&&c.navigator.sendBeacon)try{E=c.navigator.sendBeacon(_.A.toString(),"")}catch{}!E&&c.Image&&(new Image().src=_.A,E=!0),E||(_.g=fd(_.j,null),_.g.ea(_.A)),_.F=Date.now(),Fi(_)}hd(h)}function os(h){h.g&&(Mu(h),h.g.cancel(),h.g=null)}function ko(h){os(h),h.v&&(c.clearTimeout(h.v),h.v=null),Lo(h),h.h.cancel(),h.m&&(typeof h.m=="number"&&c.clearTimeout(h.m),h.m=null)}function $i(h){if(!wu(h.h)&&!h.m){h.m=!0;var _=h.Ea;we||A(),me||(we(),me=!0),S.add(_,h),h.D=0}}function Mo(h,_){return Hi(h.h)>=h.h.j-(h.m?1:0)?!1:h.m?(h.i=_.G.concat(h.i),!0):h.I==1||h.I==2||h.D>=(h.Sa?0:h.Ta)?!1:(h.m=Ui(g(h.Ea,h,_),cd(h,h.D)),h.D++,!0)}r.Ea=function(h){if(this.m)if(this.m=null,this.I==1){if(!h){this.V=Math.floor(Math.random()*1e5),h=this.V++;const B=new vi(this,this.j,h);let K=this.o;if(this.U&&(K?(K=P(K),ce(K,this.U)):K=this.U),this.u!==null||this.R||(B.J=K,K=null),this.S)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(_+=I,_>4096){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=ad(this,B,_),E=Ut(this.J),$e(E,"RID",h),$e(E,"CVER",22),this.G&&$e(E,"X-HTTP-Session-Id",this.G),Ia(this,E),K&&(this.R?_="headers="+Er(ii(K))+"&"+_:this.u&&Ta(E,this.u,K)),Iu(this.h,B),this.Ra&&$e(E,"TYPE","init"),this.S?($e(E,"$req",_),$e(E,"SID","null"),B.U=!0,Bi(B,E,null)):Bi(B,E,_),this.I=2}}else this.I==3&&(h?ku(this,h):this.i.length==0||wu(this.h)||ku(this))};function ku(h,_){var E;_?E=_.l:E=h.V++;const I=Ut(h.J);$e(I,"SID",h.M),$e(I,"RID",E),$e(I,"AID",h.K),Ia(h,I),h.u&&h.o&&Ta(I,h.u,h.o),E=new vi(h,h.j,E,h.D+1),h.u===null&&(E.J=h.o),_&&(h.i=_.G.concat(h.i)),_=ad(h,E,1e3),E.H=Math.round(h.va*.5)+Math.round(h.va*.5*Math.random()),Iu(h.h,E),Bi(E,I,_)}function Ia(h,_){h.H&&je(h.H,function(E,I){$e(_,I,E)}),h.l&&je({},function(E,I){$e(_,I,E)})}function ad(h,_,E){E=Math.min(h.i.length,E);const I=h.l?g(h.l.Ka,h.l,h):null;e:{var B=h.i;let Re=-1;for(;;){const Ct=["count="+E];Re==-1?E>0?(Re=B[0].g,Ct.push("ofs="+Re)):Re=0:Ct.push("ofs="+Re);let Ke=!0;for(let mt=0;mt<E;mt++){var K=B[mt].g;const ri=B[mt].map;if(K-=Re,K<0)Re=Math.max(0,B[mt].g-100),Ke=!1;else try{K="req"+K+"_"||"";try{var ae=ri instanceof Map?ri:Object.entries(ri);for(const[Ji,Ii]of ae){let Ai=Ii;f(Ii)&&(Ai=Zr(Ii)),Ct.push(K+Ji+"="+encodeURIComponent(Ai))}}catch(Ji){throw Ct.push(K+"type="+encodeURIComponent("_badmap")),Ji}}catch{I&&I(ri)}}if(Ke){ae=Ct.join("&");break e}}ae=void 0}return h=h.i.splice(0,E),_.G=h,ae}function od(h){if(!h.g&&!h.v){h.Y=1;var _=h.Da;we||A(),me||(we(),me=!0),S.add(_,h),h.A=0}}function Aa(h){return h.g||h.v||h.A>=3?!1:(h.Y++,h.v=Ui(g(h.Da,h),cd(h,h.A)),h.A++,!0)}r.Da=function(){if(this.v=null,ld(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var h=4*this.T;this.j.info("BP detection timer enabled: "+h),this.B=Ui(g(this.Wa,this),h)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,kt(10),os(this),ld(this))};function Mu(h){h.B!=null&&(c.clearTimeout(h.B),h.B=null)}function ld(h){h.g=new vi(h,h.j,"rpc",h.Y),h.u===null&&(h.g.J=h.o),h.g.P=0;var _=Ut(h.na);$e(_,"RID","rpc"),$e(_,"SID",h.M),$e(_,"AID",h.K),$e(_,"CI",h.F?"0":"1"),!h.F&&h.ia&&$e(_,"TO",h.ia),$e(_,"TYPE","xmlhttp"),Ia(h,_),h.u&&h.o&&Ta(_,h.u,h.o),h.O&&(h.g.H=h.O);var E=h.g;h=h.ba,E.M=1,E.A=ya(Ut(_)),E.u=null,E.R=!0,Co(E,h)}r.Va=function(){this.C!=null&&(this.C=null,os(this),Aa(this),kt(19))};function Lo(h){h.C!=null&&(c.clearTimeout(h.C),h.C=null)}function ud(h,_){var E=null;if(h.g==_){Lo(h),Mu(h),h.g=null;var I=2}else if(Gi(h.h,_))E=_.G,Au(h.h,_),I=1;else return;if(h.I!=0){if(_.o)if(I==1){E=_.u?_.u.length:0,_=Date.now()-_.F;var B=h.D;I=Ro(),Yt(I,new Li(I,E)),$i(h)}else od(h);else if(B=_.m,B==3||B==0&&_.X>0||!(I==1&&Mo(h,_)||I==2&&Aa(h)))switch(E&&E.length>0&&(_=h.h,_.i=_.i.concat(E)),B){case 1:Xi(h,5);break;case 4:Xi(h,10);break;case 3:Xi(h,6);break;default:Xi(h,2)}}}function cd(h,_){let E=h.Qa+Math.floor(Math.random()*h.Za);return h.isActive()||(E*=2),E*_}function Xi(h,_){if(h.j.info("Error code "+_),_==2){var E=g(h.bb,h),I=h.Ua;const B=!I;I=new Fn(I||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Zt(I,"https"),ya(I),B?Ti(I.toString(),E):xu(I.toString(),E)}else kt(2);h.I=0,h.l&&h.l.pa(_),hd(h),ko(h)}r.bb=function(h){h?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function hd(h){if(h.I=0,h.ja=[],h.l){const _=Su(h.h);(_.length!=0||h.i.length!=0)&&(Y(h.ja,_),Y(h.ja,h.i),h.h.i.length=0,D(h.i),h.i.length=0),h.l.oa()}}function dd(h,_,E){var I=E instanceof Fn?Ut(E):new Fn(E);if(I.g!="")_&&(I.g=_+"."+I.g),es(I,I.u);else{var B=c.location;I=B.protocol,_=_?_+"."+B.hostname:B.hostname,B=+B.port;const K=new Fn(null);I&&Zt(K,I),_&&(K.g=_),B&&es(K,B),E&&(K.h=E),I=K}return E=h.G,_=h.wa,E&&_&&$e(I,E,_),$e(I,"VER",h.ka),Ia(h,I),I}function fd(h,_,E){if(_&&!h.L)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Aa&&!h.ma?new tt(new Qi({ab:E})):new tt(h.ma),_.Fa(h.L),_}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function md(){}r=md.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function ls(){}ls.prototype.g=function(h,_){return new bn(h,_)};function bn(h,_){Ot.call(this),this.g=new as(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.sa&&(h?h["X-WebChannel-Client-Profile"]=_.sa:h={"X-WebChannel-Client-Profile":_.sa}),this.g.U=h,(h=_&&_.Qb)&&!R(h)&&(this.g.u=h),this.A=_&&_.supportsCrossDomainXhr||!1,this.v=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!R(_)&&(this.g.G=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new wr(this)}T(bn,Ot),bn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},bn.prototype.close=function(){Ou(this.g)},bn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.v&&(E={},E.__data__=Zr(h),h=E);_.i.push(new Lt(_.Ya++,h)),_.I==3&&$i(_)},bn.prototype.N=function(){this.g.l=null,delete this.j,Ou(this.g),delete this.g,bn.Z.N.call(this)};function pd(h){sn.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const E in _){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}T(pd,sn);function gd(){ei.call(this),this.status=1}T(gd,ei);function wr(h){this.g=h}T(wr,md),wr.prototype.ra=function(){Yt(this.g,"a")},wr.prototype.qa=function(h){Yt(this.g,new pd(h))},wr.prototype.pa=function(h){Yt(this.g,new gd)},wr.prototype.oa=function(){Yt(this.g,"b")},ls.prototype.createWebChannel=ls.prototype.g,bn.prototype.send=bn.prototype.o,bn.prototype.open=bn.prototype.m,bn.prototype.close=bn.prototype.close,fS=function(){return new ls},dS=function(){return Ro()},hS=Rt,L_={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ga.NO_ERROR=0,ga.TIMEOUT=8,ga.HTTP_ERROR=6,Pf=ga,Eu.COMPLETE="complete",cS=Eu,Yh.EventType=_i,_i.OPEN="a",_i.CLOSE="b",_i.ERROR="c",_i.MESSAGE="d",Ot.prototype.listen=Ot.prototype.J,Pc=Yh,tt.prototype.listenOnce=tt.prototype.K,tt.prototype.getLastError=tt.prototype.Ha,tt.prototype.getLastErrorCode=tt.prototype.ya,tt.prototype.getStatus=tt.prototype.ca,tt.prototype.getResponseJson=tt.prototype.La,tt.prototype.getResponseText=tt.prototype.la,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Fa,uS=tt}).apply(typeof bf<"u"?bf:typeof self<"u"?self:typeof window<"u"?window:{});const dI="@firebase/firestore",fI="4.9.3";/**
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
 */class nn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nn.UNAUTHENTICATED=new nn(null),nn.GOOGLE_CREDENTIALS=new nn("google-credentials-uid"),nn.FIRST_PARTY=new nn("first-party-uid"),nn.MOCK_USER=new nn("mock-user");/**
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
 */const $s=new ym("@firebase/firestore");function Tl(){return $s.logLevel}function VO(r){$s.setLogLevel(r)}function ne(r,...e){if($s.logLevel<=Oe.DEBUG){const t=e.map(Hy);$s.debug(`Firestore (${ou}): ${r}`,...t)}}function xt(r,...e){if($s.logLevel<=Oe.ERROR){const t=e.map(Hy);$s.error(`Firestore (${ou}): ${r}`,...t)}}function yr(r,...e){if($s.logLevel<=Oe.WARN){const t=e.map(Hy);$s.warn(`Firestore (${ou}): ${r}`,...t)}}function Hy(r){if(typeof r=="string")return r;try{/**
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
 */function he(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,mS(r,i,t)}function mS(r,e,t){let i=`FIRESTORE (${ou}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw xt(i),new Error(i)}function pe(r,e,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,r||mS(e,a,i)}function PO(r,e){r||he(57014,e)}function le(r,e){return r}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Sn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class pS{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(nn.UNAUTHENTICATED)))}shutdown(){}}class kO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class MO{constructor(e){this.t=e,this.currentUser=nn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){pe(this.o===void 0,42304);let i=this.i;const a=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new fn,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},f=p=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new fn)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(pe(typeof i.accessToken=="string",31837,{l:i}),new pS(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new nn(e)}}class LO{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=nn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class UO{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new LO(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(nn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_t(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){pe(this.o===void 0,3512);const i=l=>{l.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ne("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const a=l=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new mI(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(pe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new mI(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function BO(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Gy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=BO(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<t&&(i+=e.charAt(a[l]%62))}return i}}function Ae(r,e){return r<e?-1:r>e?1:0}function U_(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const a=r.charAt(i),l=e.charAt(i);if(a!==l)return __(a)===__(l)?Ae(a,l):__(a)?1:-1}return Ae(r.length,e.length)}const FO=55296,jO=57343;function __(r){const e=r.charCodeAt(0);return e>=FO&&e<=jO}function Ll(r,e,t){return r.length===e.length&&r.every(((i,a)=>t(i,e[a])))}function gS(r){return r+"\0"}/**
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
 */const pI="__name__";class ir{constructor(e,t,i){t===void 0?t=0:t>e.length&&he(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&he(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let a=0;a<i;a++){const l=ir.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ae(e.length,t.length)}static compareSegments(e,t){const i=ir.isNumericId(e),a=ir.isNumericId(t);return i&&!a?-1:!i&&a?1:i&&a?ir.extractNumericId(e).compare(ir.extractNumericId(t)):U_(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return js.fromString(e.substring(4,e.length-2))}}class ke extends ir{construct(e,t,i){return new ke(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new te(G.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((a=>a.length>0)))}return new ke(t)}static emptyPath(){return new ke([])}}const qO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends ir{construct(e,t,i){return new yt(e,t,i)}static isValidIdentifier(e){return qO.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pI}static keyField(){return new yt([pI])}static fromServerFormat(e){const t=[];let i="",a=0;const l=()=>{if(i.length===0)throw new te(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new te(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new te(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else f==="`"?(c=!c,a++):f!=="."||c?(i+=f,a++):(l(),a++)}if(l(),c)throw new te(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(t)}static emptyPath(){return new yt([])}}/**
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
 */function Ky(r,e,t){if(!t)throw new te(G.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function _S(r,e,t,i){if(e===!0&&i===!0)throw new te(G.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function gI(r){if(!oe.isDocumentKey(r))throw new te(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function _I(r){if(oe.isDocumentKey(r))throw new te(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function yS(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Dm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":he(12329,{type:typeof r})}function Ge(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new te(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Dm(r);throw new te(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function vS(r,e){if(e<=0)throw new te(G.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Gt(r,e){const t={typeString:r};return e&&(t.value=e),t}function Dh(r,e){if(!yS(r))throw new te(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const a=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const c=r[i];if(a&&typeof c!==a){t=`JSON field '${i}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new te(G.INVALID_ARGUMENT,t);return!0}/**
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
 */const yI=-62135596800,vI=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*vI);return new Ye(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<yI)throw new te(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vI}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Dh(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yI;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:Gt("string",Ye._jsonSchemaVersion),seconds:Gt("number"),nanoseconds:Gt("number")};/**
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
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new Ye(0,0))}static max(){return new ye(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ul=-1;class Zf{constructor(e,t,i,a){this.indexId=e,this.collectionGroup=t,this.fields=i,this.indexState=a}}function z_(r){return r.fields.find((e=>e.kind===2))}function Ha(r){return r.fields.filter((e=>e.kind!==2))}Zf.UNKNOWN_ID=-1;class Of{constructor(e,t){this.fieldPath=e,this.kind=t}}class ah{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ah(0,Zn.min())}}function ES(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,a=ye.fromTimestamp(i===1e9?new Ye(t+1,0):new Ye(t,i));return new Zn(a,oe.empty(),e)}function TS(r){return new Zn(r.readTime,r.key,Ul)}class Zn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Zn(ye.min(),oe.empty(),Ul)}static max(){return new Zn(ye.max(),oe.empty(),Ul)}}function Qy(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=oe.comparator(r.documentKey,e.documentKey),t!==0?t:Ae(r.largestBatchId,e.largestBatchId))}/**
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
 */const bS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function aa(r){if(r.code!==G.FAILED_PRECONDITION||r.message!==bS)throw r;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&he(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z(((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):z.reject(t)}static resolve(e){return new z(((t,i)=>{t(e)}))}static reject(e){return new z(((t,i)=>{i(e)}))}static waitFor(e){return new z(((t,i)=>{let a=0,l=0,c=!1;e.forEach((f=>{++a,f.next((()=>{++l,c&&l===a&&t()}),(p=>i(p)))})),c=!0,l===a&&t()}))}static or(e){let t=z.resolve(!1);for(const i of e)t=t.next((a=>a?z.resolve(a):i()));return t}static forEach(e,t){const i=[];return e.forEach(((a,l)=>{i.push(t.call(this,a,l))})),this.waitFor(i)}static mapArray(e,t){return new z(((i,a)=>{const l=e.length,c=new Array(l);let f=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((v=>{c[g]=v,++f,f===l&&i(c)}),(v=>a(v)))}}))}static doWhile(e,t){return new z(((i,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):i()};l()}))}}/**
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
 */const Wn="SimpleDb";class xm{static open(e,t,i,a){try{return new xm(t,e.transaction(a,i))}catch(l){throw new Hc(t,l)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new fn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Hc(e,t.error)):this.S.resolve()},this.transaction.onerror=i=>{const a=Yy(i.target.error);this.S.reject(new Hc(e,a))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(ne(Wn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new GO(t)}}class dr{static delete(e){return ne(Wn,"Removing database:",e),Ka(py().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Zc())return!1;if(dr.F())return!0;const e=Et(),t=dr.M(e),i=0<t&&t<10,a=IS(e),l=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||i||l)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(i)}constructor(e,t,i){this.name=e,this.version=t,this.N=i,this.B=null,dr.M(Et())===12.2&&xt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(ne(Wn,"Opening database:",this.name),this.db=await new Promise(((t,i)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=l=>{const c=l.target.result;t(c)},a.onblocked=()=>{i(new Hc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=l=>{const c=l.target.error;c.name==="VersionError"?i(new te(G.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):c.name==="InvalidStateError"?i(new te(G.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+c)):i(new Hc(e,c))},a.onupgradeneeded=l=>{ne(Wn,'Database "'+this.name+'" requires upgrade from version:',l.oldVersion);const c=l.target.result;this.N.k(c,a.transaction,l.oldVersion,this.version).next((()=>{ne(Wn,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,i,a){const l=t==="readonly";let c=0;for(;;){++c;try{this.db=await this.L(e);const f=xm.open(this.db,e,l?"readonly":"readwrite",i),p=a(f).next((g=>(f.C(),g))).catch((g=>(f.abort(g),z.reject(g)))).toPromise();return p.catch((()=>{})),await f.D,p}catch(f){const p=f,g=p.name!=="FirebaseError"&&c<3;if(ne(Wn,"Transaction failed with error:",p.message,"Retrying:",g),this.close(),!g)return Promise.reject(p)}}}close(){this.db&&this.db.close(),this.db=void 0}}function IS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class HO{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return Ka(this.U.delete())}}class Hc extends te{constructor(e,t){super(G.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function oa(r){return r.name==="IndexedDbTransactionError"}class GO{constructor(e){this.store=e}put(e,t){let i;return t!==void 0?(ne(Wn,"PUT",this.store.name,e,t),i=this.store.put(t,e)):(ne(Wn,"PUT",this.store.name,"<auto-key>",e),i=this.store.put(e)),Ka(i)}add(e){return ne(Wn,"ADD",this.store.name,e,e),Ka(this.store.add(e))}get(e){return Ka(this.store.get(e)).next((t=>(t===void 0&&(t=null),ne(Wn,"GET",this.store.name,e,t),t)))}delete(e){return ne(Wn,"DELETE",this.store.name,e),Ka(this.store.delete(e))}count(){return ne(Wn,"COUNT",this.store.name),Ka(this.store.count())}J(e,t){const i=this.options(e,t),a=i.index?this.store.index(i.index):this.store;if(typeof a.getAll=="function"){const l=a.getAll(i.range);return new z(((c,f)=>{l.onerror=p=>{f(p.target.error)},l.onsuccess=p=>{c(p.target.result)}}))}{const l=this.cursor(i),c=[];return this.H(l,((f,p)=>{c.push(p)})).next((()=>c))}}Y(e,t){const i=this.store.getAll(e,t===null?void 0:t);return new z(((a,l)=>{i.onerror=c=>{l(c.target.error)},i.onsuccess=c=>{a(c.target.result)}}))}Z(e,t){ne(Wn,"DELETE ALL",this.store.name);const i=this.options(e,t);i.X=!1;const a=this.cursor(i);return this.H(a,((l,c,f)=>f.delete()))}ee(e,t){let i;t?i=e:(i={},t=e);const a=this.cursor(i);return this.H(a,t)}te(e){const t=this.cursor({});return new z(((i,a)=>{t.onerror=l=>{const c=Yy(l.target.error);a(c)},t.onsuccess=l=>{const c=l.target.result;c?e(c.primaryKey,c.value).next((f=>{f?c.continue():i()})):i()}}))}H(e,t){const i=[];return new z(((a,l)=>{e.onerror=c=>{l(c.target.error)},e.onsuccess=c=>{const f=c.target.result;if(!f)return void a();const p=new HO(f),g=t(f.primaryKey,f.value,p);if(g instanceof z){const v=g.catch((T=>(p.done(),z.reject(T))));i.push(v)}p.isDone?a():p.G===null?f.continue():f.continue(p.G)}})).next((()=>z.waitFor(i)))}options(e,t){let i;return e!==void 0&&(typeof e=="string"?i=e:t=e),{index:i,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const i=this.store.index(e.index);return e.X?i.openKeyCursor(e.range,t):i.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ka(r){return new z(((e,t)=>{r.onsuccess=i=>{const a=i.target.result;e(a)},r.onerror=i=>{const a=Yy(i.target.error);t(a)}}))}let EI=!1;function Yy(r){const e=dr.M(Et());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const i=new te("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return EI||(EI=!0,setTimeout((()=>{throw i}),0)),i}}return r}const Gc="IndexBackfiller";class KO{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){ne(Gc,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();ne(Gc,`Documents written: ${t}`)}catch(t){oa(t)?ne(Gc,"Ignoring IndexedDB error during index backfill: ",t):await aa(t)}await this.re(6e4)}))}}class QO{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const i=new Set;let a=t,l=!0;return z.doWhile((()=>l===!0&&a>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((c=>{if(c!==null&&!i.has(c))return ne(Gc,`Processing collection: ${c}`),this.oe(e,c,a).next((f=>{a-=f,i.add(c)}));l=!1})))).next((()=>t-a))}oe(e,t,i){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((a=>this.localStore.localDocuments.getNextDocuments(e,t,a,i).next((l=>{const c=l.changes;return this.localStore.indexManager.updateIndexEntries(e,c).next((()=>this._e(a,l))).next((f=>(ne(Gc,`Updating offset: ${f}`),this.localStore.indexManager.updateCollectionGroup(e,t,f)))).next((()=>c.size))}))))}_e(e,t){let i=e;return t.changes.forEach(((a,l)=>{const c=TS(l);Qy(c,i)>0&&(i=c)})),new Zn(i.readTime,i.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Ln{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ln.ce=-1;/**
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
 */const qs=-1;function xh(r){return r==null}function oh(r){return r===0&&1/r==-1/0}function AS(r){return typeof r=="number"&&Number.isInteger(r)&&!oh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const em="";function vn(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=TI(e)),e=YO(r.get(t),e);return TI(e)}function YO(r,e){let t=e;const i=r.length;for(let a=0;a<i;a++){const l=r.charAt(a);switch(l){case"\0":t+="";break;case em:t+="";break;default:t+=l}}return t}function TI(r){return r+em+""}function cr(r){const e=r.length;if(pe(e>=2,64408,{path:r}),e===2)return pe(r.charAt(0)===em&&r.charAt(1)==="",56145,{path:r}),ke.emptyPath();const t=e-2,i=[];let a="";for(let l=0;l<e;){const c=r.indexOf(em,l);switch((c<0||c>t)&&he(50515,{path:r}),r.charAt(c+1)){case"":const f=r.substring(l,c);let p;a.length===0?p=f:(a+=f,p=a,a=""),i.push(p);break;case"":a+=r.substring(l,c),a+="\0";break;case"":a+=r.substring(l,c+1);break;default:he(61167,{path:r})}l=c+2}return new ke(i)}/**
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
 */const Ga="remoteDocuments",Vh="owner",pl="owner",lh="mutationQueues",WO="userId",Ni="mutations",bI="batchId",Ja="userMutationsIndex",wI=["userId","batchId"];/**
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
 */function kf(r,e){return[r,vn(e)]}function SS(r,e,t){return[r,vn(e),t]}const $O={},zl="documentMutations",tm="remoteDocumentsV14",XO=["prefixPath","collectionGroup","readTime","documentId"],Mf="documentKeyIndex",JO=["prefixPath","collectionGroup","documentId"],RS="collectionGroupIndex",ZO=["collectionGroup","readTime","prefixPath","documentId"],uh="remoteDocumentGlobal",B_="remoteDocumentGlobalKey",Bl="targets",CS="queryTargetsIndex",ek=["canonicalId","targetId"],Fl="targetDocuments",tk=["targetId","path"],Wy="documentTargetsIndex",nk=["path","targetId"],nm="targetGlobalKey",ro="targetGlobal",ch="collectionParents",ik=["collectionId","parent"],jl="clientMetadata",rk="clientId",Vm="bundles",sk="bundleId",Pm="namedQueries",ak="name",$y="indexConfiguration",ok="indexId",F_="collectionGroupIndex",lk="collectionGroup",Kc="indexState",uk=["indexId","uid"],NS="sequenceNumberIndex",ck=["uid","sequenceNumber"],Qc="indexEntries",hk=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],DS="documentKeyIndex",dk=["indexId","uid","orderedDocumentKey"],Om="documentOverlays",fk=["userId","collectionPath","documentId"],j_="collectionPathOverlayIndex",mk=["userId","collectionPath","largestBatchId"],xS="collectionGroupOverlayIndex",pk=["userId","collectionGroup","largestBatchId"],Xy="globals",gk="name",VS=[lh,Ni,zl,Ga,Bl,Vh,ro,Fl,jl,uh,ch,Vm,Pm],_k=[...VS,Om],PS=[lh,Ni,zl,tm,Bl,Vh,ro,Fl,jl,uh,ch,Vm,Pm,Om],OS=PS,Jy=[...OS,$y,Kc,Qc],yk=Jy,kS=[...Jy,Xy],vk=kS;/**
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
 */class q_ extends wS{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Xt(r,e){const t=le(r);return dr.O(t.le,e)}/**
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
 */function II(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function la(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function MS(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ot{constructor(e,t){this.comparator=e,this.root=t||hn.EMPTY}insert(e,t){return new ot(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,hn.BLACK,null,null))}remove(e){return new ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,hn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return t+i.left.size;a<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wf(this.root,e,this.comparator,!1)}getReverseIterator(){return new wf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wf(this.root,e,this.comparator,!0)}}class wf{constructor(e,t,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class hn{constructor(e,t,i,a,l){this.key=e,this.value=t,this.color=i??hn.RED,this.left=a??hn.EMPTY,this.right=l??hn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,a,l){return new hn(e??this.key,t??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,i),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return hn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return hn.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,hn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,hn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw he(43730,{key:this.key,value:this.value});if(this.right.isRed())throw he(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw he(27949);return e+(this.isRed()?0:1)}}hn.EMPTY=null,hn.RED=!0,hn.BLACK=!1;hn.EMPTY=new class{constructor(){this.size=0}get key(){throw he(57766)}get value(){throw he(16141)}get color(){throw he(16727)}get left(){throw he(29726)}get right(){throw he(36894)}copy(e,t,i,a,l){return this}insert(e,t,i){return new hn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class et{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new AI(this.data.getIterator())}getIteratorFrom(e){return new AI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new et(this.comparator);return t.data=e,t}}class AI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function gl(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Un{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Un([])}unionWith(e){let t=new et(yt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ll(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class LS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function Ek(){return typeof atob<"u"}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new LS("Invalid base64 string: "+l):l}})(e);return new It(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new It(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const Tk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(r){if(pe(!!r,39018),typeof r=="string"){let e=0;const t=Tk.exec(r);if(pe(!!t,46558,{timestamp:r}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:gt(r.seconds),nanos:gt(r.nanos)}}function gt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Gr(r){return typeof r=="string"?It.fromBase64String(r):It.fromUint8Array(r)}/**
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
 */const US="server_timestamp",zS="__type__",BS="__previous_value__",FS="__local_write_time__";function km(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[zS])==null?void 0:i.stringValue)===US}function Mm(r){const e=r.mapValue.fields[BS];return km(e)?Mm(e):e}function hh(r){const e=Hr(r.mapValue.fields[FS].timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class bk{constructor(e,t,i,a,l,c,f,p,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const H_="(default)";class Xs{constructor(e,t){this.projectId=e,this.database=t||H_}static empty(){return new Xs("","")}get isDefaultDatabase(){return this.database===H_}isEqual(e){return e instanceof Xs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Zy="__type__",jS="__max__",Us={mapValue:{fields:{__type__:{stringValue:jS}}}},ev="__vector__",ql="value",Lf={nullValue:"NULL_VALUE"};function Js(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?km(r)?4:qS(r)?9007199254740991:Lm(r)?10:11:he(28295,{value:r})}function vr(r,e){if(r===e)return!0;const t=Js(r);if(t!==Js(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return hh(r).isEqual(hh(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Hr(a.timestampValue),f=Hr(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(a,l){return Gr(a.bytesValue).isEqual(Gr(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(a,l){return gt(a.geoPointValue.latitude)===gt(l.geoPointValue.latitude)&&gt(a.geoPointValue.longitude)===gt(l.geoPointValue.longitude)})(r,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return gt(a.integerValue)===gt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=gt(a.doubleValue),f=gt(l.doubleValue);return c===f?oh(c)===oh(f):isNaN(c)&&isNaN(f)}return!1})(r,e);case 9:return Ll(r.arrayValue.values||[],e.arrayValue.values||[],vr);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},f=l.mapValue.fields||{};if(II(c)!==II(f))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(f[p]===void 0||!vr(c[p],f[p])))return!1;return!0})(r,e);default:return he(52216,{left:r})}}function dh(r,e){return(r.values||[]).find((t=>vr(t,e)))!==void 0}function Zs(r,e){if(r===e)return 0;const t=Js(r),i=Js(e);if(t!==i)return Ae(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(r.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=gt(l.integerValue||l.doubleValue),p=gt(c.integerValue||c.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(r,e);case 3:return SI(r.timestampValue,e.timestampValue);case 4:return SI(hh(r),hh(e));case 5:return U_(r.stringValue,e.stringValue);case 6:return(function(l,c){const f=Gr(l),p=Gr(c);return f.compareTo(p)})(r.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),p=c.split("/");for(let g=0;g<f.length&&g<p.length;g++){const v=Ae(f[g],p[g]);if(v!==0)return v}return Ae(f.length,p.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=Ae(gt(l.latitude),gt(c.latitude));return f!==0?f:Ae(gt(l.longitude),gt(c.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return RI(r.arrayValue,e.arrayValue);case 10:return(function(l,c){var w,D,Y,O;const f=l.fields||{},p=c.fields||{},g=(w=f[ql])==null?void 0:w.arrayValue,v=(D=p[ql])==null?void 0:D.arrayValue,T=Ae(((Y=g==null?void 0:g.values)==null?void 0:Y.length)||0,((O=v==null?void 0:v.values)==null?void 0:O.length)||0);return T!==0?T:RI(g,v)})(r.mapValue,e.mapValue);case 11:return(function(l,c){if(l===Us.mapValue&&c===Us.mapValue)return 0;if(l===Us.mapValue)return 1;if(c===Us.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const w=U_(p[T],v[T]);if(w!==0)return w;const D=Zs(f[p[T]],g[v[T]]);if(D!==0)return D}return Ae(p.length,v.length)})(r.mapValue,e.mapValue);default:throw he(23264,{he:t})}}function SI(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ae(r,e);const t=Hr(r),i=Hr(e),a=Ae(t.seconds,i.seconds);return a!==0?a:Ae(t.nanos,i.nanos)}function RI(r,e){const t=r.values||[],i=e.values||[];for(let a=0;a<t.length&&a<i.length;++a){const l=Zs(t[a],i[a]);if(l)return l}return Ae(t.length,i.length)}function Hl(r){return G_(r)}function G_(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=Hr(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Gr(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return oe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",a=!0;for(const l of t.values||[])a?a=!1:i+=",",i+=G_(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of i)l?l=!1:a+=",",a+=`${c}:${G_(t.fields[c])}`;return a+"}"})(r.mapValue):he(61005,{value:r})}function Uf(r){switch(Js(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mm(r);return e?16+Uf(e):16;case 5:return 2*r.stringValue.length;case 6:return Gr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((a,l)=>a+Uf(l)),0)})(r.arrayValue);case 10:case 11:return(function(i){let a=0;return la(i.fields,((l,c)=>{a+=l.length+Uf(c)})),a})(r.mapValue);default:throw he(13486,{value:r})}}function lo(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function K_(r){return!!r&&"integerValue"in r}function fh(r){return!!r&&"arrayValue"in r}function CI(r){return!!r&&"nullValue"in r}function NI(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function zf(r){return!!r&&"mapValue"in r}function Lm(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Zy])==null?void 0:i.stringValue)===ev}function Yc(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return la(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Yc(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Yc(r.arrayValue.values[t]);return e}return{...r}}function qS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===jS}const HS={mapValue:{fields:{[Zy]:{stringValue:ev},[ql]:{arrayValue:{}}}}};function wk(r){return"nullValue"in r?Lf:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?lo(Xs.empty(),oe.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Lm(r)?HS:{mapValue:{}}:he(35942,{value:r})}function Ik(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?lo(Xs.empty(),oe.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?HS:"mapValue"in r?Lm(r)?{mapValue:{}}:Us:he(61959,{value:r})}function DI(r,e){const t=Zs(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function xI(r,e){const t=Zs(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!zf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yc(t)}setAll(e){let t=yt.emptyPath(),i={},a=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,a),i={},a=[],t=f.popLast()}c?i[f.lastSegment()]=Yc(c):a.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,a)}delete(e){const t=this.field(e.popLast());zf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=t.mapValue.fields[e.get(i)];zf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,i){la(t,((a,l)=>e[a]=l));for(const a of i)delete e[a]}clone(){return new dn(Yc(this.value))}}function GS(r){const e=[];return la(r.fields,((t,i)=>{const a=new yt([t]);if(zf(i)){const l=GS(i.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new Un(e)}/**
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
 */class ct{constructor(e,t,i,a,l,c,f){this.key=e,this.documentType=t,this.version=i,this.readTime=a,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new ct(e,0,ye.min(),ye.min(),ye.min(),dn.empty(),0)}static newFoundDocument(e,t,i,a){return new ct(e,1,t,ye.min(),i,a,0)}static newNoDocument(e,t){return new ct(e,2,t,ye.min(),ye.min(),dn.empty(),0)}static newUnknownDocument(e,t){return new ct(e,3,t,ye.min(),ye.min(),dn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ea{constructor(e,t){this.position=e,this.inclusive=t}}function VI(r,e,t){let i=0;for(let a=0;a<r.position.length;a++){const l=e[a],c=r.position[a];if(l.field.isKeyField()?i=oe.comparator(oe.fromName(c.referenceValue),t.key):i=Zs(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function PI(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!vr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class mh{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ak(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class KS{}class Ue extends KS{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new Sk(e,t,i):t==="array-contains"?new Nk(e,i):t==="in"?new JS(e,i):t==="not-in"?new Dk(e,i):t==="array-contains-any"?new xk(e,i):new Ue(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Rk(e,i):new Ck(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Zs(t,this.value)):t!==null&&Js(this.value)===Js(t)&&this.matchesComparison(Zs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ze extends KS{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ze(e,t)}matches(e){return Gl(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Gl(r){return r.op==="and"}function Q_(r){return r.op==="or"}function tv(r){return QS(r)&&Gl(r)}function QS(r){for(const e of r.filters)if(e instanceof Ze)return!1;return!0}function Y_(r){if(r instanceof Ue)return r.field.canonicalString()+r.op.toString()+Hl(r.value);if(tv(r))return r.filters.map((e=>Y_(e))).join(",");{const e=r.filters.map((t=>Y_(t))).join(",");return`${r.op}(${e})`}}function YS(r,e){return r instanceof Ue?(function(i,a){return a instanceof Ue&&i.op===a.op&&i.field.isEqual(a.field)&&vr(i.value,a.value)})(r,e):r instanceof Ze?(function(i,a){return a instanceof Ze&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce(((l,c,f)=>l&&YS(c,a.filters[f])),!0):!1})(r,e):void he(19439)}function WS(r,e){const t=r.filters.concat(e);return Ze.create(t,r.op)}function $S(r){return r instanceof Ue?(function(t){return`${t.field.canonicalString()} ${t.op} ${Hl(t.value)}`})(r):r instanceof Ze?(function(t){return t.op.toString()+" {"+t.getFilters().map($S).join(" ,")+"}"})(r):"Filter"}class Sk extends Ue{constructor(e,t,i){super(e,t,i),this.key=oe.fromName(i.referenceValue)}matches(e){const t=oe.comparator(e.key,this.key);return this.matchesComparison(t)}}class Rk extends Ue{constructor(e,t){super(e,"in",t),this.keys=XS("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ck extends Ue{constructor(e,t){super(e,"not-in",t),this.keys=XS("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function XS(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>oe.fromName(i.referenceValue)))}class Nk extends Ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return fh(t)&&dh(t.arrayValue,this.value)}}class JS extends Ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&dh(this.value.arrayValue,t)}}class Dk extends Ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(dh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!dh(this.value.arrayValue,t)}}class xk extends Ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!fh(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>dh(this.value.arrayValue,i)))}}/**
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
 */class Vk{constructor(e,t=null,i=[],a=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=c,this.endAt=f,this.Te=null}}function W_(r,e=null,t=[],i=[],a=null,l=null,c=null){return new Vk(r,e,t,i,a,l,c)}function uo(r){const e=le(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Y_(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),xh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Hl(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Hl(i))).join(",")),e.Te=t}return e.Te}function Ph(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Ak(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!YS(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!PI(r.startAt,e.startAt)&&PI(r.endAt,e.endAt)}function im(r){return oe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function rm(r,e){return r.filters.filter((t=>t instanceof Ue&&t.field.isEqual(e)))}function OI(r,e,t){let i=Lf,a=!0;for(const l of rm(r,e)){let c=Lf,f=!0;switch(l.op){case"<":case"<=":c=wk(l.value);break;case"==":case"in":case">=":c=l.value;break;case">":c=l.value,f=!1;break;case"!=":case"not-in":c=Lf}DI({value:i,inclusive:a},{value:c,inclusive:f})<0&&(i=c,a=f)}if(t!==null){for(let l=0;l<r.orderBy.length;++l)if(r.orderBy[l].field.isEqual(e)){const c=t.position[l];DI({value:i,inclusive:a},{value:c,inclusive:t.inclusive})<0&&(i=c,a=t.inclusive);break}}return{value:i,inclusive:a}}function kI(r,e,t){let i=Us,a=!0;for(const l of rm(r,e)){let c=Us,f=!0;switch(l.op){case">=":case">":c=Ik(l.value),f=!1;break;case"==":case"in":case"<=":c=l.value;break;case"<":c=l.value,f=!1;break;case"!=":case"not-in":c=Us}xI({value:i,inclusive:a},{value:c,inclusive:f})>0&&(i=c,a=f)}if(t!==null){for(let l=0;l<r.orderBy.length;++l)if(r.orderBy[l].field.isEqual(e)){const c=t.position[l];xI({value:i,inclusive:a},{value:c,inclusive:t.inclusive})>0&&(i=c,a=t.inclusive);break}}return{value:i,inclusive:a}}/**
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
 */class Yr{constructor(e,t=null,i=[],a=[],l=null,c="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ZS(r,e,t,i,a,l,c,f){return new Yr(r,e,t,i,a,l,c,f)}function lu(r){return new Yr(r)}function MI(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function nv(r){return r.collectionGroup!==null}function xl(r){const e=le(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new et(yt.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(f=f.add(g.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new mh(l,i))})),t.has(yt.keyField().canonicalString())||e.Ie.push(new mh(yt.keyField(),i))}return e.Ie}function Rn(r){const e=le(r);return e.Ee||(e.Ee=Pk(e,xl(r))),e.Ee}function Pk(r,e){if(r.limitType==="F")return W_(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new mh(a.field,l)}));const t=r.endAt?new ea(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new ea(r.startAt.position,r.startAt.inclusive):null;return W_(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function $_(r,e){const t=r.filters.concat([e]);return new Yr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function sm(r,e,t){return new Yr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Oh(r,e){return Ph(Rn(r),Rn(e))&&r.limitType===e.limitType}function eR(r){return`${uo(Rn(r))}|lt:${r.limitType}`}function bl(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((a=>$S(a))).join(", ")}]`),xh(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((a=>Hl(a))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((a=>Hl(a))).join(",")),`Target(${i})`})(Rn(r))}; limitType=${r.limitType})`}function kh(r,e){return e.isFoundDocument()&&(function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):oe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,a){for(const l of xl(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0})(r,e)&&(function(i,a){return!(i.startAt&&!(function(c,f,p){const g=VI(c,f,p);return c.inclusive?g<=0:g<0})(i.startAt,xl(i),a)||i.endAt&&!(function(c,f,p){const g=VI(c,f,p);return c.inclusive?g>=0:g>0})(i.endAt,xl(i),a))})(r,e)}function tR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function nR(r){return(e,t)=>{let i=!1;for(const a of xl(r)){const l=Ok(a,e,t);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function Ok(r,e,t){const i=r.field.isKeyField()?oe.comparator(e.key,t.key):(function(l,c,f){const p=c.data.field(l),g=f.data.field(l);return p!==null&&g!==null?Zs(p,g):he(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return he(19790,{direction:r.dir})}}/**
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
 */class Wr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[t]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){la(this.inner,((t,i)=>{for(const[a,l]of i)e(a,l)}))}isEmpty(){return MS(this.inner)}size(){return this.innerSize}}/**
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
 */const kk=new ot(oe.comparator);function zn(){return kk}const iR=new ot(oe.comparator);function Oc(...r){let e=iR;for(const t of r)e=e.insert(t.key,t);return e}function rR(r){let e=iR;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function hr(){return Wc()}function sR(){return Wc()}function Wc(){return new Wr((r=>r.toString()),((r,e)=>r.isEqual(e)))}const Mk=new ot(oe.comparator),Lk=new et(oe.comparator);function Ne(...r){let e=Lk;for(const t of r)e=e.add(t);return e}const Uk=new et(Ae);function iv(){return Uk}/**
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
 */function rv(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oh(e)?"-0":e}}function aR(r){return{integerValue:""+r}}function oR(r,e){return AS(e)?aR(e):rv(r,e)}/**
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
 */class Um{constructor(){this._=void 0}}function zk(r,e,t){return r instanceof Kl?(function(a,l){const c={fields:{[zS]:{stringValue:US},[FS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&km(l)&&(l=Mm(l)),l&&(c.fields[BS]=l),{mapValue:c}})(t,e):r instanceof co?uR(r,e):r instanceof ho?cR(r,e):(function(a,l){const c=lR(a,l),f=LI(c)+LI(a.Ae);return K_(c)&&K_(a.Ae)?aR(f):rv(a.serializer,f)})(r,e)}function Bk(r,e,t){return r instanceof co?uR(r,e):r instanceof ho?cR(r,e):t}function lR(r,e){return r instanceof Ql?(function(i){return K_(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Kl extends Um{}class co extends Um{constructor(e){super(),this.elements=e}}function uR(r,e){const t=hR(e);for(const i of r.elements)t.some((a=>vr(a,i)))||t.push(i);return{arrayValue:{values:t}}}class ho extends Um{constructor(e){super(),this.elements=e}}function cR(r,e){let t=hR(e);for(const i of r.elements)t=t.filter((a=>!vr(a,i)));return{arrayValue:{values:t}}}class Ql extends Um{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function LI(r){return gt(r.integerValue||r.doubleValue)}function hR(r){return fh(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Mh{constructor(e,t){this.field=e,this.transform=t}}function Fk(r,e){return r.field.isEqual(e.field)&&(function(i,a){return i instanceof co&&a instanceof co||i instanceof ho&&a instanceof ho?Ll(i.elements,a.elements,vr):i instanceof Ql&&a instanceof Ql?vr(i.Ae,a.Ae):i instanceof Kl&&a instanceof Kl})(r.transform,e.transform)}class jk{constructor(e,t){this.version=e,this.transformResults=t}}class vt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new vt}static exists(e){return new vt(void 0,e)}static updateTime(e){return new vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bf(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class zm{}function dR(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new cu(r.key,vt.none()):new uu(r.key,r.data,vt.none());{const t=r.data,i=dn.empty();let a=new et(yt.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),a=a.add(l)}return new $r(r.key,i,new Un(a.toArray()),vt.none())}}function qk(r,e,t){r instanceof uu?(function(a,l,c){const f=a.value.clone(),p=zI(a.fieldTransforms,l,c.transformResults);f.setAll(p),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(r,e,t):r instanceof $r?(function(a,l,c){if(!Bf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const f=zI(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(fR(a)),p.setAll(f),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(r,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function $c(r,e,t,i){return r instanceof uu?(function(l,c,f,p){if(!Bf(l.precondition,c))return f;const g=l.value.clone(),v=BI(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(r,e,t,i):r instanceof $r?(function(l,c,f,p){if(!Bf(l.precondition,c))return f;const g=BI(l.fieldTransforms,p,c),v=c.data;return v.setAll(fR(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,i):(function(l,c,f){return Bf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(r,e,t)}function Hk(r,e){let t=null;for(const i of r.fieldTransforms){const a=e.data.field(i.field),l=lR(i.transform,a||null);l!=null&&(t===null&&(t=dn.empty()),t.set(i.field,l))}return t||null}function UI(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&Ll(i,a,((l,c)=>Fk(l,c)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class uu extends zm{constructor(e,t,i,a=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class $r extends zm{constructor(e,t,i,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function fR(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function zI(r,e,t){const i=new Map;pe(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let a=0;a<t.length;a++){const l=r[a],c=l.transform,f=e.data.field(l.field);i.set(l.field,Bk(c,f,t[a]))}return i}function BI(r,e,t){const i=new Map;for(const a of r){const l=a.transform,c=t.data.field(a.field);i.set(a.field,zk(l,c,e))}return i}class cu extends zm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sv extends zm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class av{constructor(e,t,i,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&qk(l,e,i[a])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=$c(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=$c(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=sR();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(a.key)?null:f;const p=dR(c,f);p!==null&&i.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(ye.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&Ll(this.mutations,e.mutations,((t,i)=>UI(t,i)))&&Ll(this.baseMutations,e.baseMutations,((t,i)=>UI(t,i)))}}class ov{constructor(e,t,i,a){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=a}static from(e,t,i){pe(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let a=(function(){return Mk})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,i[c].version);return new ov(e,t,i,a)}}/**
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
 */class Gk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var qt,Fe;function mR(r){switch(r){case G.OK:return he(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return he(15467,{code:r})}}function pR(r){if(r===void 0)return xt("GRPC error has no .code"),G.UNKNOWN;switch(r){case qt.OK:return G.OK;case qt.CANCELLED:return G.CANCELLED;case qt.UNKNOWN:return G.UNKNOWN;case qt.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case qt.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case qt.INTERNAL:return G.INTERNAL;case qt.UNAVAILABLE:return G.UNAVAILABLE;case qt.UNAUTHENTICATED:return G.UNAUTHENTICATED;case qt.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case qt.NOT_FOUND:return G.NOT_FOUND;case qt.ALREADY_EXISTS:return G.ALREADY_EXISTS;case qt.PERMISSION_DENIED:return G.PERMISSION_DENIED;case qt.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case qt.ABORTED:return G.ABORTED;case qt.OUT_OF_RANGE:return G.OUT_OF_RANGE;case qt.UNIMPLEMENTED:return G.UNIMPLEMENTED;case qt.DATA_LOSS:return G.DATA_LOSS;default:return he(39323,{code:r})}}(Fe=qt||(qt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gR(){return new TextEncoder}/**
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
 */const Kk=new js([4294967295,4294967295],0);function FI(r){const e=gR().encode(r),t=new lS;return t.update(e),new Uint8Array(t.digest())}function jI(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new js([t,i],0),new js([a,l],0)]}class uv{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new kc(`Invalid padding: ${t}`);if(i<0)throw new kc(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new kc(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new kc(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=js.fromNumber(this.ge)}ye(e,t,i){let a=e.add(t.multiply(js.fromNumber(i)));return a.compare(Kk)===1&&(a=new js([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=FI(e),[i,a]=jI(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);if(!this.we(c))return!1}return!0}static create(e,t,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new uv(l,a,t);return i.forEach((f=>c.insert(f))),c}insert(e){if(this.ge===0)return;const t=FI(e),[i,a]=jI(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class kc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Lh{constructor(e,t,i,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const a=new Map;return a.set(e,Uh.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Lh(ye.min(),a,new ot(Ae),zn(),Ne())}}class Uh{constructor(e,t,i,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Uh(i,t,Ne(),Ne(),Ne())}}/**
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
 */class Ff{constructor(e,t,i,a){this.be=e,this.removedTargetIds=t,this.key=i,this.De=a}}class _R{constructor(e,t){this.targetId=e,this.Ce=t}}class yR{constructor(e,t,i=It.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=a}}class qI{constructor(){this.ve=0,this.Fe=HI(),this.Me=It.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ne(),t=Ne(),i=Ne();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:i=i.add(a);break;default:he(38017,{changeType:l})}})),new Uh(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=HI()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,pe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Qk{constructor(e){this.Ge=e,this.ze=new Map,this.je=zn(),this.Je=If(),this.He=If(),this.Ye=new ot(Ae)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:he(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,i=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(im(l))if(i===0){const c=new oe(l.path);this.et(t,c,ct.newNoDocument(c,ye.min()))}else pe(i===1,20013,{expectedCount:i});else{const c=this._t(t);if(c!==i){const f=this.ut(e),p=f?this.ct(f,e,c):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=t;let c,f;try{c=Gr(i).toUint8Array()}catch(p){if(p instanceof LS)return yr("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new uv(c,a,l)}catch(p){return yr(p instanceof kc?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let a=0;return i.forEach((l=>{const c=this.Ge.ht(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const f=this.ot(c);if(f){if(l.current&&im(f.target)){const p=new oe(f.target.path);this.It(p).has(c)||this.Et(c,p)||this.et(c,p,ct.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let i=Ne();this.He.forEach(((l,c)=>{let f=!0;c.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const a=new Lh(e,t,this.Ye,this.je,i);return this.je=zn(),this.Je=If(),this.He=If(),this.Ye=new ot(Ae),a}Xe(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new qI,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new et(Ae),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new et(Ae),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new qI),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function If(){return new ot(oe.comparator)}function HI(){return new ot(oe.comparator)}const Yk={asc:"ASCENDING",desc:"DESCENDING"},Wk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$k={and:"AND",or:"OR"};class Xk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function X_(r,e){return r.useProto3Json||xh(e)?e:{value:e}}function Yl(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vR(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Jk(r,e){return Yl(r,e.toTimestamp())}function Vt(r){return pe(!!r,49232),ye.fromTimestamp((function(t){const i=Hr(t);return new Ye(i.seconds,i.nanos)})(r))}function cv(r,e){return J_(r,e).canonicalString()}function J_(r,e){const t=(function(a){return new ke(["projects",a.projectId,"databases",a.database])})(r).child("documents");return e===void 0?t:t.child(e)}function ER(r){const e=ke.fromString(r);return pe(DR(e),10190,{key:e.toString()}),e}function ph(r,e){return cv(r.databaseId,e.path)}function fr(r,e){const t=ER(e);if(t.get(1)!==r.databaseId.projectId)throw new te(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new te(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new oe(wR(t))}function TR(r,e){return cv(r.databaseId,e)}function bR(r){const e=ER(r);return e.length===4?ke.emptyPath():wR(e)}function Z_(r){return new ke(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function wR(r){return pe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function GI(r,e,t){return{name:ph(r,e),fields:t.value.mapValue.fields}}function IR(r,e,t){const i=fr(r,e.name),a=Vt(e.updateTime),l=e.createTime?Vt(e.createTime):ye.min(),c=new dn({mapValue:{fields:e.fields}}),f=ct.newFoundDocument(i,a,l,c);return t&&f.setHasCommittedMutations(),t?f.setHasCommittedMutations():f}function Zk(r,e){return"found"in e?(function(i,a){pe(!!a.found,43571),a.found.name,a.found.updateTime;const l=fr(i,a.found.name),c=Vt(a.found.updateTime),f=a.found.createTime?Vt(a.found.createTime):ye.min(),p=new dn({mapValue:{fields:a.found.fields}});return ct.newFoundDocument(l,c,f,p)})(r,e):"missing"in e?(function(i,a){pe(!!a.missing,3894),pe(!!a.readTime,22933);const l=fr(i,a.missing),c=Vt(a.readTime);return ct.newNoDocument(l,c)})(r,e):he(7234,{result:e})}function eM(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:he(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,v){return g.useProto3Json?(pe(v===void 0||typeof v=="string",58123),It.fromBase64String(v||"")):(pe(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),It.fromUint8Array(v||new Uint8Array))})(r,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(g){const v=g.code===void 0?G.UNKNOWN:pR(g.code);return new te(v,g.message||"")})(c);t=new yR(i,a,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=fr(r,i.document.name),l=Vt(i.document.updateTime),c=i.document.createTime?Vt(i.document.createTime):ye.min(),f=new dn({mapValue:{fields:i.document.fields}}),p=ct.newFoundDocument(a,l,c,f),g=i.targetIds||[],v=i.removedTargetIds||[];t=new Ff(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=fr(r,i.document),l=i.readTime?Vt(i.readTime):ye.min(),c=ct.newNoDocument(a,l),f=i.removedTargetIds||[];t=new Ff([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=fr(r,i.document),l=i.removedTargetIds||[];t=new Ff([],l,a,null)}else{if(!("filter"in e))return he(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,c=new Gk(a,l),f=i.targetId;t=new _R(f,c)}}return t}function gh(r,e){let t;if(e instanceof uu)t={update:GI(r,e.key,e.value)};else if(e instanceof cu)t={delete:ph(r,e.key)};else if(e instanceof $r)t={update:GI(r,e.key,e.data),updateMask:aM(e.fieldMask)};else{if(!(e instanceof sv))return he(16599,{Vt:e.type});t={verify:ph(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const f=c.transform;if(f instanceof Kl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof co)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof ho)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Ql)return{fieldPath:c.field.canonicalString(),increment:f.Ae};throw he(20930,{transform:c.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:Jk(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:he(27497)})(r,e.precondition)),t}function ey(r,e){const t=e.currentDocument?(function(l){return l.updateTime!==void 0?vt.updateTime(Vt(l.updateTime)):l.exists!==void 0?vt.exists(l.exists):vt.none()})(e.currentDocument):vt.none(),i=e.updateTransforms?e.updateTransforms.map((a=>(function(c,f){let p=null;if("setToServerValue"in f)pe(f.setToServerValue==="REQUEST_TIME",16630,{proto:f}),p=new Kl;else if("appendMissingElements"in f){const v=f.appendMissingElements.values||[];p=new co(v)}else if("removeAllFromArray"in f){const v=f.removeAllFromArray.values||[];p=new ho(v)}else"increment"in f?p=new Ql(c,f.increment):he(16584,{proto:f});const g=yt.fromServerFormat(f.fieldPath);return new Mh(g,p)})(r,a))):[];if(e.update){e.update.name;const a=fr(r,e.update.name),l=new dn({mapValue:{fields:e.update.fields}});if(e.updateMask){const c=(function(p){const g=p.fieldPaths||[];return new Un(g.map((v=>yt.fromServerFormat(v))))})(e.updateMask);return new $r(a,l,c,t,i)}return new uu(a,l,t,i)}if(e.delete){const a=fr(r,e.delete);return new cu(a,t)}if(e.verify){const a=fr(r,e.verify);return new sv(a,t)}return he(1463,{proto:e})}function tM(r,e){return r&&r.length>0?(pe(e!==void 0,14353),r.map((t=>(function(a,l){let c=a.updateTime?Vt(a.updateTime):Vt(l);return c.isEqual(ye.min())&&(c=Vt(l)),new jk(c,a.transformResults||[])})(t,e)))):[]}function AR(r,e){return{documents:[TR(r,e.path)]}}function SR(r,e){const t={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=TR(r,a);const l=(function(g){if(g.length!==0)return NR(Ze.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((v=>(function(w){return{field:wl(w.field),direction:iM(w.dir)}})(v)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=X_(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function RR(r){let e=bR(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let a=null;if(i>0){pe(i===1,65062);const v=t.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=(function(T){const w=CR(T);return w instanceof Ze&&tv(w)?w.getFilters():[w]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((w=>(function(Y){return new mh(Il(Y.field),(function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Y.direction))})(w)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let w;return w=typeof T=="object"?T.value:T,xh(w)?null:w})(t.limit));let p=null;t.startAt&&(p=(function(T){const w=!!T.before,D=T.values||[];return new ea(D,w)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const w=!T.before,D=T.values||[];return new ea(D,w)})(t.endAt)),ZS(e,a,c,l,f,"F",p,g)}function nM(r,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function CR(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Il(t.unaryFilter.field);return Ue.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=Il(t.unaryFilter.field);return Ue.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Il(t.unaryFilter.field);return Ue.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Il(t.unaryFilter.field);return Ue.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return he(61313);default:return he(60726)}})(r):r.fieldFilter!==void 0?(function(t){return Ue.create(Il(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return he(58110);default:return he(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Ze.create(t.compositeFilter.filters.map((i=>CR(i))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return he(1026)}})(t.compositeFilter.op))})(r):he(30097,{filter:r})}function iM(r){return Yk[r]}function rM(r){return Wk[r]}function sM(r){return $k[r]}function wl(r){return{fieldPath:r.canonicalString()}}function Il(r){return yt.fromServerFormat(r.fieldPath)}function NR(r){return r instanceof Ue?(function(t){if(t.op==="=="){if(NI(t.value))return{unaryFilter:{field:wl(t.field),op:"IS_NAN"}};if(CI(t.value))return{unaryFilter:{field:wl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(NI(t.value))return{unaryFilter:{field:wl(t.field),op:"IS_NOT_NAN"}};if(CI(t.value))return{unaryFilter:{field:wl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wl(t.field),op:rM(t.op),value:t.value}}})(r):r instanceof Ze?(function(t){const i=t.getFilters().map((a=>NR(a)));return i.length===1?i[0]:{compositeFilter:{op:sM(t.op),filters:i}}})(r):he(54877,{filter:r})}function aM(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function DR(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Br{constructor(e,t,i,a,l=ye.min(),c=ye.min(),f=It.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new Br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class xR{constructor(e){this.yt=e}}function oM(r,e){let t;if(e.document)t=IR(r.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const i=oe.fromSegments(e.noDocument.path),a=mo(e.noDocument.readTime);t=ct.newNoDocument(i,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return he(56709);{const i=oe.fromSegments(e.unknownDocument.path),a=mo(e.unknownDocument.version);t=ct.newUnknownDocument(i,a)}}return e.readTime&&t.setReadTime((function(a){const l=new Ye(a[0],a[1]);return ye.fromTimestamp(l)})(e.readTime)),t}function KI(r,e){const t=e.key,i={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:am(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())i.document=(function(l,c){return{name:ph(l,c.key),fields:c.data.value.mapValue.fields,updateTime:Yl(l,c.version.toTimestamp()),createTime:Yl(l,c.createTime.toTimestamp())}})(r.yt,e);else if(e.isNoDocument())i.noDocument={path:t.path.toArray(),readTime:fo(e.version)};else{if(!e.isUnknownDocument())return he(57904,{document:e});i.unknownDocument={path:t.path.toArray(),version:fo(e.version)}}return i}function am(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function fo(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function mo(r){const e=new Ye(r.seconds,r.nanoseconds);return ye.fromTimestamp(e)}function Qa(r,e){const t=(e.baseMutations||[]).map((l=>ey(r.yt,l)));for(let l=0;l<e.mutations.length-1;++l){const c=e.mutations[l];if(l+1<e.mutations.length&&e.mutations[l+1].transform!==void 0){const f=e.mutations[l+1];c.updateTransforms=f.transform.fieldTransforms,e.mutations.splice(l+1,1),++l}}const i=e.mutations.map((l=>ey(r.yt,l))),a=Ye.fromMillis(e.localWriteTimeMs);return new av(e.batchId,a,t,i)}function Mc(r){const e=mo(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?mo(r.lastLimboFreeSnapshotVersion):ye.min();let i;return i=(function(l){return l.documents!==void 0})(r.query)?(function(l){const c=l.documents.length;return pe(c===1,1966,{count:c}),Rn(lu(bR(l.documents[0])))})(r.query):(function(l){return Rn(RR(l))})(r.query),new Br(i,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,It.fromBase64String(r.resumeToken))}function VR(r,e){const t=fo(e.snapshotVersion),i=fo(e.lastLimboFreeSnapshotVersion);let a;a=im(e.target)?AR(r.yt,e.target):SR(r.yt,e.target).ft;const l=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:uo(e.target),readTime:t,resumeToken:l,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:a}}function hv(r){const e=RR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?sm(e,e.limit,"L"):e}function y_(r,e){return new lv(e.largestBatchId,ey(r.yt,e.overlayMutation))}function QI(r,e){const t=e.path.lastSegment();return[r,vn(e.path.popLast()),t]}function YI(r,e,t,i){return{indexId:r,uid:e,sequenceNumber:t,readTime:fo(i.readTime),documentKey:vn(i.documentKey.path),largestBatchId:i.largestBatchId}}/**
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
 */class lM{getBundleMetadata(e,t){return WI(e).get(t).next((i=>{if(i)return(function(l){return{id:l.bundleId,createTime:mo(l.createTime),version:l.version}})(i)}))}saveBundleMetadata(e,t){return WI(e).put((function(a){return{bundleId:a.id,createTime:fo(Vt(a.createTime)),version:a.version}})(t))}getNamedQuery(e,t){return $I(e).get(t).next((i=>{if(i)return(function(l){return{name:l.name,query:hv(l.bundledQuery),readTime:mo(l.readTime)}})(i)}))}saveNamedQuery(e,t){return $I(e).put((function(a){return{name:a.name,readTime:fo(Vt(a.readTime)),bundledQuery:a.bundledQuery}})(t))}}function WI(r){return Xt(r,Vm)}function $I(r){return Xt(r,Pm)}/**
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
 */class Bm{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const i=t.uid||"";return new Bm(e,i)}getOverlay(e,t){return Ac(e).get(QI(this.userId,t)).next((i=>i?y_(this.serializer,i):null))}getOverlays(e,t){const i=hr();return z.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&i.set(a,l)})))).next((()=>i))}saveOverlays(e,t,i){const a=[];return i.forEach(((l,c)=>{const f=new lv(t,c);a.push(this.St(e,f))})),z.waitFor(a)}removeOverlaysForBatchId(e,t,i){const a=new Set;t.forEach((c=>a.add(vn(c.getCollectionPath()))));const l=[];return a.forEach((c=>{const f=IDBKeyRange.bound([this.userId,c,i],[this.userId,c,i+1],!1,!0);l.push(Ac(e).Z(j_,f))})),z.waitFor(l)}getOverlaysForCollection(e,t,i){const a=hr(),l=vn(t),c=IDBKeyRange.bound([this.userId,l,i],[this.userId,l,Number.POSITIVE_INFINITY],!0);return Ac(e).J(j_,c).next((f=>{for(const p of f){const g=y_(this.serializer,p);a.set(g.getKey(),g)}return a}))}getOverlaysForCollectionGroup(e,t,i,a){const l=hr();let c;const f=IDBKeyRange.bound([this.userId,t,i],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ac(e).ee({index:xS,range:f},((p,g,v)=>{const T=y_(this.serializer,g);l.size()<a||T.largestBatchId===c?(l.set(T.getKey(),T),c=T.largestBatchId):v.done()})).next((()=>l))}St(e,t){return Ac(e).put((function(a,l,c){const[f,p,g]=QI(l,c.mutation.key);return{userId:l,collectionPath:p,documentId:g,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:gh(a.yt,c.mutation)}})(this.serializer,this.userId,t))}}function Ac(r){return Xt(r,Om)}/**
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
 */class uM{bt(e){return Xt(e,Xy)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const i=t==null?void 0:t.value;return i?It.fromUint8Array(i):It.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Ya{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(gt(e.integerValue));else if("doubleValue"in e){const i=gt(e.doubleValue);isNaN(i)?this.Ft(t,13):(this.Ft(t,15),oh(i)?t.Mt(0):t.Mt(i))}else if("timestampValue"in e){let i=e.timestampValue;this.Ft(t,20),typeof i=="string"&&(i=Hr(i)),t.xt(`${i.seconds||""}`),t.Mt(i.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Gr(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const i=e.geoPointValue;this.Ft(t,45),t.Mt(i.latitude||0),t.Mt(i.longitude||0)}else"mapValue"in e?qS(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Lm(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):he(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const i=e.fields||{};this.Ft(t,55);for(const a of Object.keys(i))this.Ot(a,t),this.Ct(i[a],t)}kt(e,t){var c,f;const i=e.fields||{};this.Ft(t,53);const a=ql,l=((f=(c=i[a].arrayValue)==null?void 0:c.values)==null?void 0:f.length)||0;this.Ft(t,15),t.Mt(gt(l)),this.Ot(a,t),this.Ct(i[a],t)}Qt(e,t){const i=e.values||[];this.Ft(t,50);for(const a of i)this.Ct(a,t)}Lt(e,t){this.Ft(t,37),oe.fromName(e).path.forEach((i=>{this.Ft(t,60),this.Ut(i,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}Ya.Kt=new Ya;/**
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
 */const _l=255;function cM(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function XI(r){const e=64-(function(i){let a=0;for(let l=0;l<8;++l){const c=cM(255&i[l]);if(a+=c,c!==8)break}return a})(r);return Math.ceil(e/8)}class hM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.Gt(i.value),i=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.Jt(i.value),i=t.next();this.Ht()}Yt(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.Gt(i);else if(i<2048)this.Gt(960|i>>>6),this.Gt(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i);else{const a=t.codePointAt(0);this.Gt(240|a>>>18),this.Gt(128|63&a>>>12),this.Gt(128|63&a>>>6),this.Gt(128|63&a)}}this.zt()}Zt(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.Jt(i);else if(i<2048)this.Jt(960|i>>>6),this.Jt(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i);else{const a=t.codePointAt(0);this.Jt(240|a>>>18),this.Jt(128|63&a>>>12),this.Jt(128|63&a>>>6),this.Jt(128|63&a)}}this.Ht()}Xt(e){const t=this.en(e),i=XI(t);this.tn(1+i),this.buffer[this.position++]=255&i;for(let a=t.length-i;a<t.length;++a)this.buffer[this.position++]=255&t[a]}nn(e){const t=this.en(e),i=XI(t);this.tn(1+i),this.buffer[this.position++]=~(255&i);for(let a=t.length-i;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}rn(){this.sn(_l),this.sn(255)}_n(){this.an(_l),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(l){const c=new DataView(new ArrayBuffer(8));return c.setFloat64(0,l,!1),new Uint8Array(c.buffer)})(e),i=!!(128&t[0]);t[0]^=i?255:128;for(let a=1;a<t.length;++a)t[a]^=i?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===_l?(this.sn(_l),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===_l?(this.an(_l),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let i=2*this.buffer.length;i<t&&(i=t);const a=new Uint8Array(i);a.set(this.buffer),this.buffer=a}}class dM{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class fM{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Sc{constructor(){this.cn=new hM,this.ln=new dM(this.cn),this.hn=new fM(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class Wa{constructor(e,t,i,a){this.Tn=e,this.In=t,this.En=i,this.dn=a}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,i=new Uint8Array(t);return i.set(this.dn,0),t!==e?i.set([0],this.dn.length):++i[i.length-1],new Wa(this.Tn,this.In,this.En,i)}Rn(e,t,i){return{indexId:this.Tn,uid:e,arrayValue:jf(this.En),directionalValue:jf(this.dn),orderedDocumentKey:jf(t),documentKey:i.path.toArray()}}Vn(e,t,i){const a=this.Rn(e,t,i);return[a.indexId,a.uid,a.arrayValue,a.directionalValue,a.orderedDocumentKey,a.documentKey]}}function Vs(r,e){let t=r.Tn-e.Tn;return t!==0?t:(t=JI(r.En,e.En),t!==0?t:(t=JI(r.dn,e.dn),t!==0?t:oe.comparator(r.In,e.In)))}function JI(r,e){for(let t=0;t<r.length&&t<e.length;++t){const i=r[t]-e[t];if(i!==0)return i}return r.length-e.length}function jf(r){return WA()?(function(t){let i="";for(let a=0;a<t.length;a++)i+=String.fromCharCode(t[a]);return i})(r):r}function ZI(r){return typeof r!="string"?r:(function(t){const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i})(r)}class eA{constructor(e){this.mn=new et(((t,i)=>yt.comparator(t.field,i.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const i=t;i.isInequality()?this.mn=this.mn.add(i):this.gn.push(i)}}get pn(){return this.mn.size>1}yn(e){if(pe(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=z_(e);if(t!==void 0&&!this.wn(t))return!1;const i=Ha(e);let a=new Set,l=0,c=0;for(;l<i.length&&this.wn(i[l]);++l)a=a.add(i[l].fieldPath.canonicalString());if(l===i.length)return!0;if(this.mn.size>0){const f=this.mn.getIterator().getNext();if(!a.has(f.field.canonicalString())){const p=i[l];if(!this.Sn(f,p)||!this.bn(this.fn[c++],p))return!1}++l}for(;l<i.length;++l){const f=i[l];if(c>=this.fn.length||!this.bn(this.fn[c++],f))return!1}return!0}Dn(){if(this.pn)return null;let e=new et(yt.comparator);const t=[];for(const i of this.gn)if(!i.field.isKeyField())if(i.op==="array-contains"||i.op==="array-contains-any")t.push(new Of(i.field,2));else{if(e.has(i.field))continue;e=e.add(i.field),t.push(new Of(i.field,0))}for(const i of this.fn)i.field.isKeyField()||e.has(i.field)||(e=e.add(i.field),t.push(new Of(i.field,i.dir==="asc"?0:1)));return new Zf(Zf.UNKNOWN_ID,this.collectionId,t,ah.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const i=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===i}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function PR(r){var t,i;if(pe(r instanceof Ue||r instanceof Ze,20012),r instanceof Ue){if(r instanceof JS){const a=((i=(t=r.value.arrayValue)==null?void 0:t.values)==null?void 0:i.map((l=>Ue.create(r.field,"==",l))))||[];return Ze.create(a,"or")}return r}const e=r.filters.map((a=>PR(a)));return Ze.create(e,r.op)}function mM(r){if(r.getFilters().length===0)return[];const e=iy(PR(r));return pe(OR(e),7391),ty(e)||ny(e)?[e]:e.getFilters()}function ty(r){return r instanceof Ue}function ny(r){return r instanceof Ze&&tv(r)}function OR(r){return ty(r)||ny(r)||(function(t){if(t instanceof Ze&&Q_(t)){for(const i of t.getFilters())if(!ty(i)&&!ny(i))return!1;return!0}return!1})(r)}function iy(r){if(pe(r instanceof Ue||r instanceof Ze,34018),r instanceof Ue)return r;if(r.filters.length===1)return iy(r.filters[0]);const e=r.filters.map((i=>iy(i)));let t=Ze.create(e,r.op);return t=om(t),OR(t)?t:(pe(t instanceof Ze,64498),pe(Gl(t),40251),pe(t.filters.length>1,57927),t.filters.reduce(((i,a)=>dv(i,a))))}function dv(r,e){let t;return pe(r instanceof Ue||r instanceof Ze,38388),pe(e instanceof Ue||e instanceof Ze,25473),t=r instanceof Ue?e instanceof Ue?(function(a,l){return Ze.create([a,l],"and")})(r,e):tA(r,e):e instanceof Ue?tA(e,r):(function(a,l){if(pe(a.filters.length>0&&l.filters.length>0,48005),Gl(a)&&Gl(l))return WS(a,l.getFilters());const c=Q_(a)?a:l,f=Q_(a)?l:a,p=c.filters.map((g=>dv(g,f)));return Ze.create(p,"or")})(r,e),om(t)}function tA(r,e){if(Gl(e))return WS(e,r.getFilters());{const t=e.filters.map((i=>dv(r,i)));return Ze.create(t,"or")}}function om(r){if(pe(r instanceof Ue||r instanceof Ze,11850),r instanceof Ue)return r;const e=r.getFilters();if(e.length===1)return om(e[0]);if(QS(r))return r;const t=e.map((a=>om(a))),i=[];return t.forEach((a=>{a instanceof Ue?i.push(a):a instanceof Ze&&(a.op===r.op?i.push(...a.filters):i.push(a))})),i.length===1?i[0]:Ze.create(i,r.op)}/**
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
 */class pM{constructor(){this.Cn=new fv}addToCollectionParentIndex(e,t){return this.Cn.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(Zn.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(Zn.min())}updateCollectionGroup(e,t,i){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class fv{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t]||new et(ke.comparator),l=!a.has(i);return this.index[t]=a.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t];return a&&a.has(i)}getEntries(e){return(this.index[e]||new et(ke.comparator)).toArray()}}/**
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
 */const nA="IndexedDbIndexManager",Af=new Uint8Array(0);class gM{constructor(e,t){this.databaseId=t,this.vn=new fv,this.Fn=new Wr((i=>uo(i)),((i,a)=>Ph(i,a))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const i=t.lastSegment(),a=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const l={collectionId:i,parent:vn(a)};return iA(e).put(l)}return z.resolve()}getCollectionParents(e,t){const i=[],a=IDBKeyRange.bound([t,""],[gS(t),""],!1,!0);return iA(e).J(a).next((l=>{for(const c of l){if(c.collectionId!==t)break;i.push(cr(c.parent))}return i}))}addFieldIndex(e,t){const i=Rc(e),a=(function(f){return{indexId:f.indexId,collectionGroup:f.collectionGroup,fields:f.fields.map((p=>[p.fieldPath.canonicalString(),p.kind]))}})(t);delete a.indexId;const l=i.add(a);if(t.indexState){const c=vl(e);return l.next((f=>{c.put(YI(f,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return l.next()}deleteFieldIndex(e,t){const i=Rc(e),a=vl(e),l=yl(e);return i.delete(t.indexId).next((()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>l.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Rc(e),i=yl(e),a=vl(e);return t.Z().next((()=>i.Z())).next((()=>a.Z()))}createTargetIndexes(e,t){return z.forEach(this.Mn(t),(i=>this.getIndexType(e,i).next((a=>{if(a===0||a===1){const l=new eA(i).Dn();if(l!=null)return this.addFieldIndex(e,l)}}))))}getDocumentsMatchingTarget(e,t){const i=yl(e);let a=!0;const l=new Map;return z.forEach(this.Mn(t),(c=>this.xn(e,c).next((f=>{a&&(a=!!f),l.set(c,f)})))).next((()=>{if(a){let c=Ne();const f=[];return z.forEach(l,((p,g)=>{ne(nA,`Using index ${(function(se){return`id=${se.indexId}|cg=${se.collectionGroup}|f=${se.fields.map((_e=>`${_e.fieldPath}:${_e.kind}`)).join(",")}`})(p)} to execute ${uo(t)}`);const v=(function(se,_e){const we=z_(_e);if(we===void 0)return null;for(const me of rm(se,we.fieldPath))switch(me.op){case"array-contains-any":return me.value.arrayValue.values||[];case"array-contains":return[me.value]}return null})(g,p),T=(function(se,_e){const we=new Map;for(const me of Ha(_e))for(const S of rm(se,me.fieldPath))switch(S.op){case"==":case"in":we.set(me.fieldPath.canonicalString(),S.value);break;case"not-in":case"!=":return we.set(me.fieldPath.canonicalString(),S.value),Array.from(we.values())}return null})(g,p),w=(function(se,_e){const we=[];let me=!0;for(const S of Ha(_e)){const A=S.kind===0?OI(se,S.fieldPath,se.startAt):kI(se,S.fieldPath,se.startAt);we.push(A.value),me&&(me=A.inclusive)}return new ea(we,me)})(g,p),D=(function(se,_e){const we=[];let me=!0;for(const S of Ha(_e)){const A=S.kind===0?kI(se,S.fieldPath,se.endAt):OI(se,S.fieldPath,se.endAt);we.push(A.value),me&&(me=A.inclusive)}return new ea(we,me)})(g,p),Y=this.On(p,g,w),O=this.On(p,g,D),H=this.Nn(p,g,T),J=this.Bn(p.indexId,v,Y,w.inclusive,O,D.inclusive,H);return z.forEach(J,(re=>i.Y(re,t.limit).next((se=>{se.forEach((_e=>{const we=oe.fromSegments(_e.documentKey);c.has(we)||(c=c.add(we),f.push(we))}))}))))})).next((()=>f))}return z.resolve(null)}))}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=mM(Ze.create(e.filters,"and")).map((i=>W_(e.path,e.collectionGroup,e.orderBy,i.getFilters(),e.limit,e.startAt,e.endAt))),this.Fn.set(e,t),t)}Bn(e,t,i,a,l,c,f){const p=(t!=null?t.length:1)*Math.max(i.length,l.length),g=p/(t!=null?t.length:1),v=[];for(let T=0;T<p;++T){const w=t?this.Ln(t[T/g]):Af,D=this.kn(e,w,i[T%g],a),Y=this.qn(e,w,l[T%g],c),O=f.map((H=>this.kn(e,w,H,!0)));v.push(...this.createRange(D,Y,O))}return v}kn(e,t,i,a){const l=new Wa(e,oe.empty(),t,i);return a?l:l.An()}qn(e,t,i,a){const l=new Wa(e,oe.empty(),t,i);return a?l.An():l}xn(e,t){const i=new eA(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next((l=>{let c=null;for(const f of l)i.yn(f)&&(!c||f.fields.length>c.fields.length)&&(c=f);return c}))}getIndexType(e,t){let i=2;const a=this.Mn(t);return z.forEach(a,(l=>this.xn(e,l).next((c=>{c?i!==0&&c.fields.length<(function(p){let g=new et(yt.comparator),v=!1;for(const T of p.filters)for(const w of T.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?v=!0:g=g.add(w.field));for(const T of p.orderBy)T.field.isKeyField()||(g=g.add(T.field));return g.size+(v?1:0)})(l)&&(i=1):i=0})))).next((()=>(function(c){return c.limit!==null})(t)&&a.length>1&&i===2?1:i))}Qn(e,t){const i=new Sc;for(const a of Ha(e)){const l=t.data.field(a.fieldPath);if(l==null)return null;const c=i.Pn(a.kind);Ya.Kt.Dt(l,c)}return i.un()}Ln(e){const t=new Sc;return Ya.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const i=new Sc;return Ya.Kt.Dt(lo(this.databaseId,t),i.Pn((function(l){const c=Ha(l);return c.length===0?0:c[c.length-1].kind})(e))),i.un()}Nn(e,t,i){if(i===null)return[];let a=[];a.push(new Sc);let l=0;for(const c of Ha(e)){const f=i[l++];for(const p of a)if(this.Un(t,c.fieldPath)&&fh(f))a=this.Kn(a,c,f);else{const g=p.Pn(c.kind);Ya.Kt.Dt(f,g)}}return this.Wn(a)}On(e,t,i){return this.Nn(e,t,i.position)}Wn(e){const t=[];for(let i=0;i<e.length;++i)t[i]=e[i].un();return t}Kn(e,t,i){const a=[...e],l=[];for(const c of i.arrayValue.values||[])for(const f of a){const p=new Sc;p.seed(f.un()),Ya.Kt.Dt(c,p.Pn(t.kind)),l.push(p)}return l}Un(e,t){return!!e.filters.find((i=>i instanceof Ue&&i.field.isEqual(t)&&(i.op==="in"||i.op==="not-in")))}getFieldIndexes(e,t){const i=Rc(e),a=vl(e);return(t?i.J(F_,IDBKeyRange.bound(t,t)):i.J()).next((l=>{const c=[];return z.forEach(l,(f=>a.get([f.indexId,this.uid]).next((p=>{c.push((function(v,T){const w=T?new ah(T.sequenceNumber,new Zn(mo(T.readTime),new oe(cr(T.documentKey)),T.largestBatchId)):ah.empty(),D=v.fields.map((([Y,O])=>new Of(yt.fromServerFormat(Y),O)));return new Zf(v.indexId,v.collectionGroup,D,w)})(f,p))})))).next((()=>c))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((i,a)=>{const l=i.indexState.sequenceNumber-a.indexState.sequenceNumber;return l!==0?l:Ae(i.collectionGroup,a.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,i){const a=Rc(e),l=vl(e);return this.Gn(e).next((c=>a.J(F_,IDBKeyRange.bound(t,t)).next((f=>z.forEach(f,(p=>l.put(YI(p.indexId,this.uid,c,i))))))))}updateIndexEntries(e,t){const i=new Map;return z.forEach(t,((a,l)=>{const c=i.get(a.collectionGroup);return(c?z.resolve(c):this.getFieldIndexes(e,a.collectionGroup)).next((f=>(i.set(a.collectionGroup,f),z.forEach(f,(p=>this.zn(e,a,p).next((g=>{const v=this.jn(l,p);return g.isEqual(v)?z.resolve():this.Jn(e,l,p,g,v)})))))))}))}Hn(e,t,i,a){return yl(e).put(a.Rn(this.uid,this.$n(i,t.key),t.key))}Yn(e,t,i,a){return yl(e).delete(a.Vn(this.uid,this.$n(i,t.key),t.key))}zn(e,t,i){const a=yl(e);let l=new et(Vs);return a.ee({index:DS,range:IDBKeyRange.only([i.indexId,this.uid,jf(this.$n(i,t))])},((c,f)=>{l=l.add(new Wa(i.indexId,t,ZI(f.arrayValue),ZI(f.directionalValue)))})).next((()=>l))}jn(e,t){let i=new et(Vs);const a=this.Qn(t,e);if(a==null)return i;const l=z_(t);if(l!=null){const c=e.data.field(l.fieldPath);if(fh(c))for(const f of c.arrayValue.values||[])i=i.add(new Wa(t.indexId,e.key,this.Ln(f),a))}else i=i.add(new Wa(t.indexId,e.key,Af,a));return i}Jn(e,t,i,a,l){ne(nA,"Updating index entries for document '%s'",t.key);const c=[];return(function(p,g,v,T,w){const D=p.getIterator(),Y=g.getIterator();let O=gl(D),H=gl(Y);for(;O||H;){let J=!1,re=!1;if(O&&H){const se=v(O,H);se<0?re=!0:se>0&&(J=!0)}else O!=null?re=!0:J=!0;J?(T(H),H=gl(Y)):re?(w(O),O=gl(D)):(O=gl(D),H=gl(Y))}})(a,l,Vs,(f=>{c.push(this.Hn(e,t,i,f))}),(f=>{c.push(this.Yn(e,t,i,f))})),z.waitFor(c)}Gn(e){let t=1;return vl(e).ee({index:NS,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((i,a,l)=>{l.done(),t=a.sequenceNumber+1})).next((()=>t))}createRange(e,t,i){i=i.sort(((c,f)=>Vs(c,f))).filter(((c,f,p)=>!f||Vs(c,p[f-1])!==0));const a=[];a.push(e);for(const c of i){const f=Vs(c,e),p=Vs(c,t);if(f===0)a[0]=e.An();else if(f>0&&p<0)a.push(c),a.push(c.An());else if(p>0)break}a.push(t);const l=[];for(let c=0;c<a.length;c+=2){if(this.Zn(a[c],a[c+1]))return[];const f=a[c].Vn(this.uid,Af,oe.empty()),p=a[c+1].Vn(this.uid,Af,oe.empty());l.push(IDBKeyRange.bound(f,p))}return l}Zn(e,t){return Vs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(rA)}getMinOffset(e,t){return z.mapArray(this.Mn(t),(i=>this.xn(e,i).next((a=>a||he(44426))))).next(rA)}}function iA(r){return Xt(r,ch)}function yl(r){return Xt(r,Qc)}function Rc(r){return Xt(r,$y)}function vl(r){return Xt(r,Kc)}function rA(r){pe(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let i=1;i<r.length;i++){const a=r[i].indexState.offset;Qy(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new Zn(e.readTime,e.documentKey,t)}/**
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
 */const sA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kR=41943040;class _n{static withCacheSize(e){return new _n(e,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */function MR(r,e,t){const i=r.store(Ni),a=r.store(zl),l=[],c=IDBKeyRange.only(t.batchId);let f=0;const p=i.ee({range:c},((v,T,w)=>(f++,w.delete())));l.push(p.next((()=>{pe(f===1,47070,{batchId:t.batchId})})));const g=[];for(const v of t.mutations){const T=SS(e,v.key.path,t.batchId);l.push(a.delete(T)),g.push(v.key)}return z.waitFor(l).next((()=>g))}function lm(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw he(14731);e=r.noDocument}return JSON.stringify(e).length}/**
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
 */_n.DEFAULT_COLLECTION_PERCENTILE=10,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_n.DEFAULT=new _n(kR,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_n.DISABLED=new _n(-1,0,0);class Fm{constructor(e,t,i,a){this.userId=e,this.serializer=t,this.indexManager=i,this.referenceDelegate=a,this.Xn={}}static wt(e,t,i,a){pe(e.uid!=="",64387);const l=e.isAuthenticated()?e.uid:"";return new Fm(l,t,i,a)}checkEmpty(e){let t=!0;const i=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ps(e).ee({index:Ja,range:i},((a,l,c)=>{t=!1,c.done()})).next((()=>t))}addMutationBatch(e,t,i,a){const l=Al(e),c=Ps(e);return c.add({}).next((f=>{pe(typeof f=="number",49019);const p=new av(f,t,i,a),g=(function(D,Y,O){const H=O.baseMutations.map((re=>gh(D.yt,re))),J=O.mutations.map((re=>gh(D.yt,re)));return{userId:Y,batchId:O.batchId,localWriteTimeMs:O.localWriteTime.toMillis(),baseMutations:H,mutations:J}})(this.serializer,this.userId,p),v=[];let T=new et(((w,D)=>Ae(w.canonicalString(),D.canonicalString())));for(const w of a){const D=SS(this.userId,w.key.path,f);T=T.add(w.key.path.popLast()),v.push(c.put(g)),v.push(l.put(D,$O))}return T.forEach((w=>{v.push(this.indexManager.addToCollectionParentIndex(e,w))})),e.addOnCommittedListener((()=>{this.Xn[f]=p.keys()})),z.waitFor(v).next((()=>p))}))}lookupMutationBatch(e,t){return Ps(e).get(t).next((i=>i?(pe(i.userId===this.userId,48,"Unexpected user for mutation batch",{userId:i.userId,batchId:t}),Qa(this.serializer,i)):null))}er(e,t){return this.Xn[t]?z.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next((i=>{if(i){const a=i.keys();return this.Xn[t]=a,a}return null}))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=IDBKeyRange.lowerBound([this.userId,i]);let l=null;return Ps(e).ee({index:Ja,range:a},((c,f,p)=>{f.userId===this.userId&&(pe(f.batchId>=i,47524,{tr:i}),l=Qa(this.serializer,f)),p.done()})).next((()=>l))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let i=qs;return Ps(e).ee({index:Ja,range:t,reverse:!0},((a,l,c)=>{i=l.batchId,c.done()})).next((()=>i))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,qs],[this.userId,Number.POSITIVE_INFINITY]);return Ps(e).J(Ja,t).next((i=>i.map((a=>Qa(this.serializer,a)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const i=kf(this.userId,t.path),a=IDBKeyRange.lowerBound(i),l=[];return Al(e).ee({range:a},((c,f,p)=>{const[g,v,T]=c,w=cr(v);if(g===this.userId&&t.path.isEqual(w))return Ps(e).get(T).next((D=>{if(!D)throw he(61480,{nr:c,batchId:T});pe(D.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:D.userId,batchId:T}),l.push(Qa(this.serializer,D))}));p.done()})).next((()=>l))}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new et(Ae);const a=[];return t.forEach((l=>{const c=kf(this.userId,l.path),f=IDBKeyRange.lowerBound(c),p=Al(e).ee({range:f},((g,v,T)=>{const[w,D,Y]=g,O=cr(D);w===this.userId&&l.path.isEqual(O)?i=i.add(Y):T.done()}));a.push(p)})),z.waitFor(a).next((()=>this.rr(e,i)))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1,l=kf(this.userId,i),c=IDBKeyRange.lowerBound(l);let f=new et(Ae);return Al(e).ee({range:c},((p,g,v)=>{const[T,w,D]=p,Y=cr(w);T===this.userId&&i.isPrefixOf(Y)?Y.length===a&&(f=f.add(D)):v.done()})).next((()=>this.rr(e,f)))}rr(e,t){const i=[],a=[];return t.forEach((l=>{a.push(Ps(e).get(l).next((c=>{if(c===null)throw he(35274,{batchId:l});pe(c.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:c.userId,batchId:l}),i.push(Qa(this.serializer,c))})))})),z.waitFor(a).next((()=>i))}removeMutationBatch(e,t){return MR(e.le,this.userId,t).next((i=>(e.addOnCommittedListener((()=>{this.ir(t.batchId)})),z.forEach(i,(a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return z.resolve();const i=IDBKeyRange.lowerBound((function(c){return[c]})(this.userId)),a=[];return Al(e).ee({range:i},((l,c,f)=>{if(l[0]===this.userId){const p=cr(l[1]);a.push(p)}else f.done()})).next((()=>{pe(a.length===0,56720,{sr:a.map((l=>l.canonicalString()))})}))}))}containsKey(e,t){return LR(e,this.userId,t)}_r(e){return UR(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:qs,lastStreamToken:""}))}}function LR(r,e,t){const i=kf(e,t.path),a=i[1],l=IDBKeyRange.lowerBound(i);let c=!1;return Al(r).ee({range:l,X:!0},((f,p,g)=>{const[v,T,w]=f;v===e&&T===a&&(c=!0),g.done()})).next((()=>c))}function Ps(r){return Xt(r,Ni)}function Al(r){return Xt(r,zl)}function UR(r){return Xt(r,lh)}/**
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
 */class _M{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next((t=>{const i=new po(t.highestTargetId);return t.highestTargetId=i.next(),this.hr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.lr(e).next((t=>ye.fromTimestamp(new Ye(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.lr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,i){return this.lr(e).next((a=>(a.highestListenSequenceNumber=t,i&&(a.lastRemoteSnapshotVersion=i.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.hr(e,a))))}addTargetData(e,t){return this.Pr(e,t).next((()=>this.lr(e).next((i=>(i.targetCount+=1,this.Tr(t,i),this.hr(e,i))))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>El(e).delete(t.targetId))).next((()=>this.lr(e))).next((i=>(pe(i.targetCount>0,8065),i.targetCount-=1,this.hr(e,i))))}removeTargets(e,t,i){let a=0;const l=[];return El(e).ee(((c,f)=>{const p=Mc(f);p.sequenceNumber<=t&&i.get(p.targetId)===null&&(a++,l.push(this.removeTargetData(e,p)))})).next((()=>z.waitFor(l))).next((()=>a))}forEachTarget(e,t){return El(e).ee(((i,a)=>{const l=Mc(a);t(l)}))}lr(e){return aA(e).get(nm).next((t=>(pe(t!==null,2888),t)))}hr(e,t){return aA(e).put(nm,t)}Pr(e,t){return El(e).put(VR(this.serializer,t))}Tr(e,t){let i=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,i=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,i=!0),i}getTargetCount(e){return this.lr(e).next((t=>t.targetCount))}getTargetData(e,t){const i=uo(t),a=IDBKeyRange.bound([i,Number.NEGATIVE_INFINITY],[i,Number.POSITIVE_INFINITY]);let l=null;return El(e).ee({range:a,index:CS},((c,f,p)=>{const g=Mc(f);Ph(t,g.target)&&(l=g,p.done())})).next((()=>l))}addMatchingKeys(e,t,i){const a=[],l=Ms(e);return t.forEach((c=>{const f=vn(c.path);a.push(l.put({targetId:i,path:f})),a.push(this.referenceDelegate.addReference(e,i,c))})),z.waitFor(a)}removeMatchingKeys(e,t,i){const a=Ms(e);return z.forEach(t,(l=>{const c=vn(l.path);return z.waitFor([a.delete([i,c]),this.referenceDelegate.removeReference(e,i,l)])}))}removeMatchingKeysForTargetId(e,t){const i=Ms(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return i.delete(a)}getMatchingKeysForTargetId(e,t){const i=IDBKeyRange.bound([t],[t+1],!1,!0),a=Ms(e);let l=Ne();return a.ee({range:i,X:!0},((c,f,p)=>{const g=cr(c[1]),v=new oe(g);l=l.add(v)})).next((()=>l))}containsKey(e,t){const i=vn(t.path),a=IDBKeyRange.bound([i],[gS(i)],!1,!0);let l=0;return Ms(e).ee({index:Wy,X:!0,range:a},(([c,f],p,g)=>{c!==0&&(l++,g.done())})).next((()=>l>0))}At(e,t){return El(e).get(t).next((i=>i?Mc(i):null))}}function El(r){return Xt(r,Bl)}function aA(r){return Xt(r,ro)}function Ms(r){return Xt(r,Fl)}/**
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
 */const oA="LruGarbageCollector",yM=1048576;function lA([r,e],[t,i]){const a=Ae(r,t);return a===0?Ae(e,i):a}class vM{constructor(e){this.Ir=e,this.buffer=new et(lA),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();lA(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class zR{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ne(oA,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){oa(t)?ne(oA,"Ignoring IndexedDB error during garbage collection: ",t):await aa(t)}await this.Vr(3e5)}))}}class EM{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return z.resolve(Ln.ce);const i=new vM(t);return this.mr.forEachTarget(e,(a=>i.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>i.Ar(a))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.mr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(sA)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sA):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let i,a,l,c,f,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(g=Date.now(),Tl()<=Oe.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(f-c)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function BR(r,e){return new EM(r,e)}/**
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
 */class TM{constructor(e,t){this.db=e,this.garbageCollector=BR(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next((i=>t.next((a=>i+a))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,((i,a)=>t(a)))}addReference(e,t,i){return Sf(e,i)}removeReference(e,t,i){return Sf(e,i)}removeTargets(e,t,i){return this.db.getTargetCache().removeTargets(e,t,i)}markPotentiallyOrphaned(e,t){return Sf(e,t)}br(e,t){return(function(a,l){let c=!1;return UR(a).te((f=>LR(a,f,l).next((p=>(p&&(c=!0),z.resolve(!p)))))).next((()=>c))})(e,t)}removeOrphanedDocuments(e,t){const i=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let l=0;return this.Sr(e,((c,f)=>{if(f<=t){const p=this.br(e,c).next((g=>{if(!g)return l++,i.getEntry(e,c).next((()=>(i.removeEntry(c,ye.min()),Ms(e).delete((function(T){return[0,vn(T.path)]})(c)))))}));a.push(p)}})).next((()=>z.waitFor(a))).next((()=>i.apply(e))).next((()=>l))}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,i)}updateLimboDocument(e,t){return Sf(e,t)}Sr(e,t){const i=Ms(e);let a,l=Ln.ce;return i.ee({index:Wy},(([c,f],{path:p,sequenceNumber:g})=>{c===0?(l!==Ln.ce&&t(new oe(cr(a)),l),l=g,a=p):l=Ln.ce})).next((()=>{l!==Ln.ce&&t(new oe(cr(a)),l)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Sf(r,e){return Ms(r).put((function(i,a){return{targetId:0,path:vn(i.path),sequenceNumber:a}})(e,r.currentSequenceNumber))}/**
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
 */class FR{constructor(){this.changes=new Wr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?z.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class bM{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,i){return ja(e).put(i)}removeEntry(e,t,i){return ja(e).delete((function(l,c){const f=l.path.toArray();return[f.slice(0,f.length-2),f[f.length-2],am(c),f[f.length-1]]})(t,i))}updateMetadata(e,t){return this.getMetadata(e).next((i=>(i.byteSize+=t,this.Dr(e,i))))}getEntry(e,t){let i=ct.newInvalidDocument(t);return ja(e).ee({index:Mf,range:IDBKeyRange.only(Cc(t))},((a,l)=>{i=this.Cr(t,l)})).next((()=>i))}vr(e,t){let i={size:0,document:ct.newInvalidDocument(t)};return ja(e).ee({index:Mf,range:IDBKeyRange.only(Cc(t))},((a,l)=>{i={document:this.Cr(t,l),size:lm(l)}})).next((()=>i))}getEntries(e,t){let i=zn();return this.Fr(e,t,((a,l)=>{const c=this.Cr(a,l);i=i.insert(a,c)})).next((()=>i))}Mr(e,t){let i=zn(),a=new ot(oe.comparator);return this.Fr(e,t,((l,c)=>{const f=this.Cr(l,c);i=i.insert(l,f),a=a.insert(l,lm(c))})).next((()=>({documents:i,Or:a})))}Fr(e,t,i){if(t.isEmpty())return z.resolve();let a=new et(hA);t.forEach((p=>a=a.add(p)));const l=IDBKeyRange.bound(Cc(a.first()),Cc(a.last())),c=a.getIterator();let f=c.getNext();return ja(e).ee({index:Mf,range:l},((p,g,v)=>{const T=oe.fromSegments([...g.prefixPath,g.collectionGroup,g.documentId]);for(;f&&hA(f,T)<0;)i(f,null),f=c.getNext();f&&f.isEqual(T)&&(i(f,g),f=c.hasNext()?c.getNext():null),f?v.j(Cc(f)):v.done()})).next((()=>{for(;f;)i(f,null),f=c.hasNext()?c.getNext():null}))}getDocumentsMatchingQuery(e,t,i,a,l){const c=t.path,f=[c.popLast().toArray(),c.lastSegment(),am(i.readTime),i.documentKey.path.isEmpty()?"":i.documentKey.path.lastSegment()],p=[c.popLast().toArray(),c.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ja(e).J(IDBKeyRange.bound(f,p,!0)).next((g=>{l==null||l.incrementDocumentReadCount(g.length);let v=zn();for(const T of g){const w=this.Cr(oe.fromSegments(T.prefixPath.concat(T.collectionGroup,T.documentId)),T);w.isFoundDocument()&&(kh(t,w)||a.has(w.key))&&(v=v.insert(w.key,w))}return v}))}getAllFromCollectionGroup(e,t,i,a){let l=zn();const c=cA(t,i),f=cA(t,Zn.max());return ja(e).ee({index:RS,range:IDBKeyRange.bound(c,f,!0)},((p,g,v)=>{const T=this.Cr(oe.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);l=l.insert(T.key,T),l.size===a&&v.done()})).next((()=>l))}newChangeBuffer(e){return new wM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return uA(e).get(B_).next((t=>(pe(!!t,20021),t)))}Dr(e,t){return uA(e).put(B_,t)}Cr(e,t){if(t){const i=oM(this.serializer,t);if(!(i.isNoDocument()&&i.version.isEqual(ye.min())))return i}return ct.newInvalidDocument(e)}}function jR(r){return new bM(r)}class wM extends FR{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new Wr((i=>i.toString()),((i,a)=>i.isEqual(a)))}applyChanges(e){const t=[];let i=0,a=new et(((l,c)=>Ae(l.canonicalString(),c.canonicalString())));return this.changes.forEach(((l,c)=>{const f=this.Br.get(l);if(t.push(this.Nr.removeEntry(e,l,f.readTime)),c.isValidDocument()){const p=KI(this.Nr.serializer,c);a=a.add(l.path.popLast());const g=lm(p);i+=g-f.size,t.push(this.Nr.addEntry(e,l,p))}else if(i-=f.size,this.trackRemovals){const p=KI(this.Nr.serializer,c.convertToNoDocument(ye.min()));t.push(this.Nr.addEntry(e,l,p))}})),a.forEach((l=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,l))})),t.push(this.Nr.updateMetadata(e,i)),z.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next((i=>(this.Br.set(t,{size:i.size,readTime:i.document.readTime}),i.document)))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next((({documents:i,Or:a})=>(a.forEach(((l,c)=>{this.Br.set(l,{size:c,readTime:i.get(l).readTime})})),i)))}}function uA(r){return Xt(r,uh)}function ja(r){return Xt(r,tm)}function Cc(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function cA(r,e){const t=e.documentKey.path.toArray();return[r,am(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function hA(r,e){const t=r.path.toArray(),i=e.path.toArray();let a=0;for(let l=0;l<t.length-2&&l<i.length-2;++l)if(a=Ae(t[l],i[l]),a)return a;return a=Ae(t.length,i.length),a||(a=Ae(t[t.length-2],i[i.length-2]),a||Ae(t[t.length-1],i[i.length-1]))}/**
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
 */class IM{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class qR{constructor(e,t,i,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(i=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(i!==null&&$c(i.mutation,a,Un.empty(),Ye.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ne()){const a=hr();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,i).next((l=>{let c=Oc();return l.forEach(((f,p)=>{c=c.insert(f,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=hr();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ne())))}populateOverlays(e,t,i){const a=[];return i.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,i,a){let l=zn();const c=Wc(),f=(function(){return Wc()})();return t.forEach(((p,g)=>{const v=i.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof $r)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),$c(v.mutation,g,v.mutation.getFieldMask(),Ye.now())):c.set(g.key,Un.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,v)=>c.set(g,v))),t.forEach(((g,v)=>f.set(g,new IM(v,c.get(g)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=Wc();let a=new ot(((c,f)=>c-f)),l=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let v=i.get(p)||Un.empty();v=f.applyToLocalView(g,v),i.set(p,v);const T=(a.get(f.batchId)||Ne()).add(p);a=a.insert(f.batchId,T)}))})).next((()=>{const c=[],f=a.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),g=p.key,v=p.value,T=sR();v.forEach((w=>{if(!l.has(w)){const D=dR(t.get(w),i.get(w));D!==null&&T.set(w,D),l=l.add(w)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return z.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,a){return(function(c){return oe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,a):this.getDocumentsMatchingCollectionQuery(e,t,i,a)}getNextDocuments(e,t,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,a-l.size):z.resolve(hr());let f=Ul,p=l;return c.next((g=>z.forEach(g,((v,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(v)?z.resolve():this.remoteDocumentCache.getEntry(e,v).next((w=>{p=p.insert(v,w)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,Ne()))).next((v=>({batchId:f,changes:rR(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oe(t)).next((i=>{let a=Oc();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,a){const l=t.collectionGroup;let c=Oc();return this.indexManager.getCollectionParents(e,l).next((f=>z.forEach(f,(p=>{const g=(function(T,w){return new Yr(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,i,a).next((v=>{v.forEach(((T,w)=>{c=c.insert(T,w)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,a)))).next((c=>{l.forEach(((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,ct.newInvalidDocument(v)))}));let f=Oc();return c.forEach(((p,g)=>{const v=l.get(p);v!==void 0&&$c(v.mutation,g,Un.empty(),Ye.now()),kh(t,g)&&(f=f.insert(p,g))})),f}))}}/**
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
 */class AM{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return z.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Vt(a.createTime)}})(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:hv(a.bundledQuery),readTime:Vt(a.readTime)}})(t)),z.resolve()}}/**
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
 */class SM{constructor(){this.overlays=new ot(oe.comparator),this.qr=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const i=hr();return z.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&i.set(a,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((a,l)=>{this.St(e,t,l)})),z.resolve()}removeOverlaysForBatchId(e,t,i){const a=this.qr.get(i);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(i)),z.resolve()}getOverlaysForCollection(e,t,i){const a=hr(),l=t.length+1,c=new oe(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const p=f.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return z.resolve(a)}getOverlaysForCollectionGroup(e,t,i,a){let l=new ot(((g,v)=>g-v));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>i){let v=l.get(g.largestBatchId);v===null&&(v=hr(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const f=hr(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,v)=>f.set(g,v))),!(f.size()>=a)););return z.resolve(f)}St(e,t,i){const a=this.overlays.get(i.key);if(a!==null){const c=this.qr.get(a.largestBatchId).delete(i.key);this.qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new lv(t,i));let l=this.qr.get(t);l===void 0&&(l=Ne(),this.qr.set(t,l)),this.qr.set(t,l.add(i.key))}}/**
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
 */class RM{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}}/**
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
 */class mv{constructor(){this.Qr=new et(tn.$r),this.Ur=new et(tn.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const i=new tn(e,t);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Gr(new tn(e,t))}zr(e,t){e.forEach((i=>this.removeReference(i,t)))}jr(e){const t=new oe(new ke([])),i=new tn(t,e),a=new tn(t,e+1),l=[];return this.Ur.forEachInRange([i,a],(c=>{this.Gr(c),l.push(c.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new oe(new ke([])),i=new tn(t,e),a=new tn(t,e+1);let l=Ne();return this.Ur.forEachInRange([i,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new tn(e,0),i=this.Qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class tn{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return oe.comparator(e.key,t.key)||Ae(e.Yr,t.Yr)}static Kr(e,t){return Ae(e.Yr,t.Yr)||oe.comparator(e.key,t.key)}}/**
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
 */class CM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new et(tn.$r)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new av(l,t,i,a);this.mutationQueue.push(c);for(const f of a)this.Zr=this.Zr.add(new tn(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return z.resolve(c)}lookupMutationBatch(e,t){return z.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=this.ei(i),l=a<0?0:a;return z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?qs:this.tr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new tn(t,0),a=new tn(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,a],(c=>{const f=this.Xr(c.Yr);l.push(f)})),z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new et(Ae);return t.forEach((a=>{const l=new tn(a,0),c=new tn(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,c],(f=>{i=i.add(f.Yr)}))})),z.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1;let l=i;oe.isDocumentKey(l)||(l=l.child(""));const c=new tn(new oe(l),0);let f=new et(Ae);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!i.isPrefixOf(g)&&(g.length===a&&(f=f.add(p.Yr)),!0)}),c),z.resolve(this.ti(f))}ti(e){const t=[];return e.forEach((i=>{const a=this.Xr(i);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){pe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return z.forEach(t.mutations,(a=>{const l=new tn(a.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=i}))}ir(e){}containsKey(e,t){const i=new tn(t,0),a=this.Zr.firstAfterOrEqual(i);return z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class NM{constructor(e){this.ri=e,this.docs=(function(){return new ot(oe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,a=this.docs.get(i),l=a?a.size:0,c=this.ri(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return z.resolve(i?i.document.mutableCopy():ct.newInvalidDocument(t))}getEntries(e,t){let i=zn();return t.forEach((a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():ct.newInvalidDocument(a))})),z.resolve(i)}getDocumentsMatchingQuery(e,t,i,a){let l=zn();const c=t.path,f=new oe(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||Qy(TS(v),i)<=0||(a.has(v.key)||kh(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return z.resolve(l)}getAllFromCollectionGroup(e,t,i,a){he(9500)}ii(e,t){return z.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new DM(this)}getSize(e){return z.resolve(this.size)}}class DM extends FR{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(i)})),z.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class xM{constructor(e){this.persistence=e,this.si=new Wr((t=>uo(t)),Ph),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.oi=0,this._i=new mv,this.targetCount=0,this.ai=po.ur()}forEachTarget(e,t){return this.si.forEach(((i,a)=>t(a))),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.oi&&(this.oi=t),z.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new po(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.Pr(t),z.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,i){let a=0;const l=[];return this.si.forEach(((c,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.si.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)})),z.waitFor(l).next((()=>a))}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const i=this.si.get(t)||null;return z.resolve(i)}addMatchingKeys(e,t,i){return this._i.Wr(t,i),z.resolve()}removeMatchingKeys(e,t,i){this._i.zr(t,i);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),z.resolve()}getMatchingKeysForTargetId(e,t){const i=this._i.Hr(t);return z.resolve(i)}containsKey(e,t){return z.resolve(this._i.containsKey(t))}}/**
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
 */class pv{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ln(0),this.li=!1,this.li=!0,this.hi=new RM,this.referenceDelegate=e(this),this.Pi=new xM(this),this.indexManager=new pM,this.remoteDocumentCache=(function(a){return new NM(a)})((i=>this.referenceDelegate.Ti(i))),this.serializer=new xR(t),this.Ii=new AM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new SM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ui[e.toKey()];return i||(i=new CM(t,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,i){ne("MemoryPersistence","Starting transaction:",e);const a=new VM(this.ci.next());return this.referenceDelegate.Ei(),i(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return z.or(Object.values(this.ui).map((i=>()=>i.containsKey(e,t))))}}class VM extends wS{constructor(e){super(),this.currentSequenceNumber=e}}class jm{constructor(e){this.persistence=e,this.Ri=new mv,this.Vi=null}static mi(e){return new jm(e)}get fi(){if(this.Vi)return this.Vi;throw he(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.fi.delete(i.toString()),z.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.fi.add(i.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),z.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.fi,(i=>{const a=oe.fromPath(i);return this.gi(e,a).next((l=>{l||t.removeEntry(a,ye.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((i=>{i?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return z.or([()=>z.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class um{constructor(e,t){this.persistence=e,this.pi=new Wr((i=>vn(i.path)),((i,a)=>i.isEqual(a))),this.garbageCollector=BR(this,t)}static mi(e,t){return new um(e,t)}Ei(){}di(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((a=>i+a))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}pr(e,t){return z.forEach(this.pi,((i,a)=>this.br(e,i,a).next((l=>l?z.resolve():t(a)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(c=>this.br(e,c,t).next((f=>{f||(i++,l.removeEntry(c,ye.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),z.resolve()}removeReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),z.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Uf(e.data.value)),t}br(e,t,i){return z.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return z.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class PM{constructor(e){this.serializer=e}k(e,t,i,a){const l=new xm("createOrUpgrade",t);i<1&&a>=1&&((function(p){p.createObjectStore(Vh)})(e),(function(p){p.createObjectStore(lh,{keyPath:WO}),p.createObjectStore(Ni,{keyPath:bI,autoIncrement:!0}).createIndex(Ja,wI,{unique:!0}),p.createObjectStore(zl)})(e),dA(e),(function(p){p.createObjectStore(Ga)})(e));let c=z.resolve();return i<3&&a>=3&&(i!==0&&((function(p){p.deleteObjectStore(Fl),p.deleteObjectStore(Bl),p.deleteObjectStore(ro)})(e),dA(e)),c=c.next((()=>(function(p){const g=p.store(ro),v={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ye.min().toTimestamp(),targetCount:0};return g.put(nm,v)})(l)))),i<4&&a>=4&&(i!==0&&(c=c.next((()=>(function(p,g){return g.store(Ni).J().next((T=>{p.deleteObjectStore(Ni),p.createObjectStore(Ni,{keyPath:bI,autoIncrement:!0}).createIndex(Ja,wI,{unique:!0});const w=g.store(Ni),D=T.map((Y=>w.put(Y)));return z.waitFor(D)}))})(e,l)))),c=c.next((()=>{(function(p){p.createObjectStore(jl,{keyPath:rk})})(e)}))),i<5&&a>=5&&(c=c.next((()=>this.yi(l)))),i<6&&a>=6&&(c=c.next((()=>((function(p){p.createObjectStore(uh)})(e),this.wi(l))))),i<7&&a>=7&&(c=c.next((()=>this.Si(l)))),i<8&&a>=8&&(c=c.next((()=>this.bi(e,l)))),i<9&&a>=9&&(c=c.next((()=>{(function(p){p.objectStoreNames.contains("remoteDocumentChanges")&&p.deleteObjectStore("remoteDocumentChanges")})(e)}))),i<10&&a>=10&&(c=c.next((()=>this.Di(l)))),i<11&&a>=11&&(c=c.next((()=>{(function(p){p.createObjectStore(Vm,{keyPath:sk})})(e),(function(p){p.createObjectStore(Pm,{keyPath:ak})})(e)}))),i<12&&a>=12&&(c=c.next((()=>{(function(p){const g=p.createObjectStore(Om,{keyPath:fk});g.createIndex(j_,mk,{unique:!1}),g.createIndex(xS,pk,{unique:!1})})(e)}))),i<13&&a>=13&&(c=c.next((()=>(function(p){const g=p.createObjectStore(tm,{keyPath:XO});g.createIndex(Mf,JO),g.createIndex(RS,ZO)})(e))).next((()=>this.Ci(e,l))).next((()=>e.deleteObjectStore(Ga)))),i<14&&a>=14&&(c=c.next((()=>this.Fi(e,l)))),i<15&&a>=15&&(c=c.next((()=>(function(p){p.createObjectStore($y,{keyPath:ok,autoIncrement:!0}).createIndex(F_,lk,{unique:!1}),p.createObjectStore(Kc,{keyPath:uk}).createIndex(NS,ck,{unique:!1}),p.createObjectStore(Qc,{keyPath:hk}).createIndex(DS,dk,{unique:!1})})(e)))),i<16&&a>=16&&(c=c.next((()=>{t.objectStore(Kc).clear()})).next((()=>{t.objectStore(Qc).clear()}))),i<17&&a>=17&&(c=c.next((()=>{(function(p){p.createObjectStore(Xy,{keyPath:gk})})(e)}))),i<18&&a>=18&&WA()&&(c=c.next((()=>{t.objectStore(Kc).clear()})).next((()=>{t.objectStore(Qc).clear()}))),c}wi(e){let t=0;return e.store(Ga).ee(((i,a)=>{t+=lm(a)})).next((()=>{const i={byteSize:t};return e.store(uh).put(B_,i)}))}yi(e){const t=e.store(lh),i=e.store(Ni);return t.J().next((a=>z.forEach(a,(l=>{const c=IDBKeyRange.bound([l.userId,qs],[l.userId,l.lastAcknowledgedBatchId]);return i.J(Ja,c).next((f=>z.forEach(f,(p=>{pe(p.userId===l.userId,18650,"Cannot process batch from unexpected user",{batchId:p.batchId});const g=Qa(this.serializer,p);return MR(e,l.userId,g).next((()=>{}))}))))}))))}Si(e){const t=e.store(Fl),i=e.store(Ga);return e.store(ro).get(nm).next((a=>{const l=[];return i.ee(((c,f)=>{const p=new ke(c),g=(function(T){return[0,vn(T)]})(p);l.push(t.get(g).next((v=>v?z.resolve():(T=>t.put({targetId:0,path:vn(T),sequenceNumber:a.highestListenSequenceNumber}))(p))))})).next((()=>z.waitFor(l)))}))}bi(e,t){e.createObjectStore(ch,{keyPath:ik});const i=t.store(ch),a=new fv,l=c=>{if(a.add(c)){const f=c.lastSegment(),p=c.popLast();return i.put({collectionId:f,parent:vn(p)})}};return t.store(Ga).ee({X:!0},((c,f)=>{const p=new ke(c);return l(p.popLast())})).next((()=>t.store(zl).ee({X:!0},(([c,f,p],g)=>{const v=cr(f);return l(v.popLast())}))))}Di(e){const t=e.store(Bl);return t.ee(((i,a)=>{const l=Mc(a),c=VR(this.serializer,l);return t.put(c)}))}Ci(e,t){const i=t.store(Ga),a=[];return i.ee(((l,c)=>{const f=t.store(tm),p=(function(T){return T.document?new oe(ke.fromString(T.document.name).popFirst(5)):T.noDocument?oe.fromSegments(T.noDocument.path):T.unknownDocument?oe.fromSegments(T.unknownDocument.path):he(36783)})(c).path.toArray(),g={prefixPath:p.slice(0,p.length-2),collectionGroup:p[p.length-2],documentId:p[p.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};a.push(f.put(g))})).next((()=>z.waitFor(a)))}Fi(e,t){const i=t.store(Ni),a=jR(this.serializer),l=new pv(jm.mi,this.serializer.yt);return i.J().next((c=>{const f=new Map;return c.forEach((p=>{let g=f.get(p.userId)??Ne();Qa(this.serializer,p).keys().forEach((v=>g=g.add(v))),f.set(p.userId,g)})),z.forEach(f,((p,g)=>{const v=new nn(g),T=Bm.wt(this.serializer,v),w=l.getIndexManager(v),D=Fm.wt(v,this.serializer,w,l.referenceDelegate);return new qR(a,D,T,w).recalculateAndSaveOverlaysForDocumentKeys(new q_(t,Ln.ce),p).next()}))}))}}function dA(r){r.createObjectStore(Fl,{keyPath:tk}).createIndex(Wy,nk,{unique:!0}),r.createObjectStore(Bl,{keyPath:"targetId"}).createIndex(CS,ek,{unique:!0}),r.createObjectStore(ro)}const Os="IndexedDbPersistence",v_=18e5,E_=5e3,T_="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",HR="main";class gv{constructor(e,t,i,a,l,c,f,p,g,v,T=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=i,this.Mi=l,this.window=c,this.document=f,this.xi=g,this.Oi=v,this.Ni=T,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=w=>Promise.resolve(),!gv.v())throw new te(G.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new TM(this,a),this.$i=t+HR,this.serializer=new xR(p),this.Ui=new dr(this.$i,this.Ni,new PM(this.serializer)),this.hi=new uM,this.Pi=new _M(this.referenceDelegate,this.serializer),this.remoteDocumentCache=jR(this.serializer),this.Ii=new lM,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,v===!1&&xt(Os,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new te(G.FAILED_PRECONDITION,T_);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Pi.getHighestSequenceNumber(e)))})).then((e=>{this.ci=new Ln(e,this.xi)})).then((()=>{this.li=!0})).catch((e=>(this.Ui&&this.Ui.close(),Promise.reject(e))))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget((async()=>{this.started&&await this.Wi()})))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Rf(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Hi(e).next((t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))))}))})).next((()=>this.Yi(e))).next((t=>this.isPrimary&&!t?this.Zi(e).next((()=>!1)):!!t&&this.Xi(e).next((()=>!0)))))).catch((e=>{if(oa(e))return ne(Os,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ne(Os,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable((()=>this.Qi(e))),this.isPrimary=e}))}Hi(e){return Nc(e).get(pl).next((t=>z.resolve(this.es(t))))}ts(e){return Rf(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,v_)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const i=Xt(t,jl);return i.J().next((a=>{const l=this.ss(a,v_),c=a.filter((f=>l.indexOf(f)===-1));return z.forEach(c,(f=>i.delete(f.clientId))).next((()=>c))}))})).catch((()=>[]));if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Wi().then((()=>this.ns())).then((()=>this.ji()))))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?z.resolve(!0):Nc(e).get(pl).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,E_)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new te(G.FAILED_PRECONDITION,T_);return!1}}return!(!this.networkEnabled||!this.inForeground)||Rf(e).J().next((i=>this.ss(i,E_).find((a=>{if(this.clientId!==a.clientId){const l=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,f=this.networkEnabled===a.networkEnabled;if(l||c&&f)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&ne(Os,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[Vh,jl],(e=>{const t=new q_(e,Ln.ce);return this.Zi(t).next((()=>this.ts(t)))})),this.Ui.close(),this.Ps()}ss(e,t){return e.filter((i=>this.rs(i.updateTimeMs,t)&&!this.us(i.clientId)))}Ts(){return this.runTransaction("getActiveClients","readonly",(e=>Rf(e).J().next((t=>this.ss(t,v_).map((i=>i.clientId))))))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return Fm.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new gM(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Bm.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,i){ne(Os,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",l=(function(p){return p===18?vk:p===17?kS:p===16?yk:p===15?Jy:p===14?OS:p===13?PS:p===12?_k:p===11?VS:void he(60245)})(this.Ni);let c;return this.Ui.runTransaction(e,a,l,(f=>(c=new q_(f,this.ci?this.ci.next():Ln.ce),t==="readwrite-primary"?this.Hi(c).next((p=>!!p||this.Yi(c))).next((p=>{if(!p)throw xt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))),new te(G.FAILED_PRECONDITION,bS);return i(c)})).next((p=>this.Xi(c).next((()=>p)))):this.Is(c).next((()=>i(c)))))).then((f=>(c.raiseOnCommittedEvent(),f)))}Is(e){return Nc(e).get(pl).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,E_)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new te(G.FAILED_PRECONDITION,T_)}))}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Nc(e).put(pl,t)}static v(){return dr.v()}Zi(e){const t=Nc(e);return t.get(pl).next((i=>this.es(i)?(ne(Os,"Releasing primary lease."),t.delete(pl)):z.resolve()))}rs(e,t){const i=Date.now();return!(e<i-t)&&(!(e>i)||(xt(`Detected an update time that is in the future: ${e} > ${i}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi())))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const t=/(?:Version|Mobile)\/1[456]/;YA()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){var t;try{const i=((t=this.Ki)==null?void 0:t.getItem(this._s(e)))!==null;return ne(Os,`Client '${e}' ${i?"is":"is not"} zombied in LocalStorage`),i}catch(i){return xt(Os,"Failed to get zombied client id.",i),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){xt("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Nc(r){return Xt(r,Vh)}function Rf(r){return Xt(r,jl)}function _v(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class OM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class GR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return YA()?8:IS(Et())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,a){const l={result:null};return this.ys(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ws(e,t,a,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new OM;return this.Ss(e,t,c).next((f=>{if(l.result=f,this.Vs)return this.bs(e,t,c,f.size)}))})).next((()=>l.result))}bs(e,t,i,a){return i.documentReadCount<this.fs?(Tl()<=Oe.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",bl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),z.resolve()):(Tl()<=Oe.DEBUG&&ne("QueryEngine","Query:",bl(t),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.gs*a?(Tl()<=Oe.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",bl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(t))):z.resolve())}ys(e,t){if(MI(t))return z.resolve(null);let i=Rn(t);return this.indexManager.getIndexType(e,i).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=sm(t,null,"F"),i=Rn(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=Ne(...l);return this.ps.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,i).next((p=>{const g=this.Ds(t,f);return this.Cs(t,g,c,p.readTime)?this.ys(e,sm(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,i,a){return MI(t)||a.isEqual(ye.min())?z.resolve(null):this.ps.getDocuments(e,i).next((l=>{const c=this.Ds(t,l);return this.Cs(t,c,i,a)?z.resolve(null):(Tl()<=Oe.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),bl(t)),this.vs(e,c,t,ES(a,Ul)).next((f=>f)))}))}Ds(e,t){let i=new et(nR(e));return t.forEach(((a,l)=>{kh(e,l)&&(i=i.add(l))})),i}Cs(e,t,i,a){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,i){return Tl()<=Oe.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",bl(t)),this.ps.getDocumentsMatchingQuery(e,t,Zn.min(),i)}vs(e,t,i,a){return this.ps.getDocumentsMatchingQuery(e,i,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */const vv="LocalStore",kM=3e8;class MM{constructor(e,t,i,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new ot(Ae),this.xs=new Wr((l=>uo(l)),Ph),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function KR(r,e,t,i){return new MM(r,e,t,i)}async function QR(r,e){const t=le(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let a;return t.mutationQueue.getAllMutationBatches(i).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],f=[];let p=Ne();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){f.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next((g=>({Ls:g,removedBatchIds:c,addedBatchIds:f})))}))}))}function LM(r,e){const t=le(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(f,p,g,v){const T=g.batch,w=T.keys();let D=z.resolve();return w.forEach((Y=>{D=D.next((()=>v.getEntry(p,Y))).next((O=>{const H=g.docVersions.get(Y);pe(H!==null,48541),O.version.compareTo(H)<0&&(T.applyToRemoteDocument(O,g),O.isValidDocument()&&(O.setReadTime(g.commitVersion),v.addEntry(O)))}))})),D.next((()=>f.mutationQueue.removeMutationBatch(p,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let p=Ne();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(p=p.add(f.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,a)))}))}function YR(r){const e=le(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function UM(r,e){const t=le(r),i=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const f=[];e.targetChanges.forEach(((v,T)=>{const w=a.get(T);if(!w)return;f.push(t.Pi.removeMatchingKeys(l,v.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,v.addedDocuments,T))));let D=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?D=D.withResumeToken(It.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):v.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(v.resumeToken,i)),a=a.insert(T,D),(function(O,H,J){return O.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=kM?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0})(w,D,v)&&f.push(t.Pi.updateTargetData(l,D))}));let p=zn(),g=Ne();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))})),f.push(WR(l,c,e.documentUpdates).next((v=>{p=v.ks,g=v.qs}))),!i.isEqual(ye.min())){const v=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(v)}return z.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function WR(r,e,t){let i=Ne(),a=Ne();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let c=zn();return t.forEach(((f,p)=>{const g=l.get(f);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(f)),p.isNoDocument()&&p.version.isEqual(ye.min())?(e.removeEntry(f,p.readTime),c=c.insert(f,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(f,p)):ne(vv,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",p.version)})),{ks:c,qs:a}}))}function zM(r,e){const t=le(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=qs),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function Wl(r,e){const t=le(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let a;return t.Pi.getTargetData(i,e).next((l=>l?(a=l,z.resolve(a)):t.Pi.allocateTargetId(i).next((c=>(a=new Br(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Pi.addTargetData(i,a).next((()=>a)))))))})).then((i=>{const a=t.Ms.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(i.targetId,i),t.xs.set(e,i.targetId)),i}))}async function $l(r,e,t){const i=le(r),a=i.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!oa(c))throw c;ne(vv,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ms=i.Ms.remove(e),i.xs.delete(a.target)}function cm(r,e,t){const i=le(r);let a=ye.min(),l=Ne();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,v){const T=le(p),w=T.xs.get(v);return w!==void 0?z.resolve(T.Ms.get(w)):T.Pi.getTargetData(g,v)})(i,c,Rn(e)).next((f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(c,f.targetId).next((p=>{l=p}))})).next((()=>i.Fs.getDocumentsMatchingQuery(c,e,t?a:ye.min(),t?l:Ne()))).next((f=>(JR(i,tR(e),f),{documents:f,Qs:l})))))}function $R(r,e){const t=le(r),i=le(t.Pi),a=t.Ms.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",(l=>i.At(l,e).next((c=>c?c.target:null))))}function XR(r,e){const t=le(r),i=t.Os.get(e)||ye.min();return t.persistence.runTransaction("Get new document changes","readonly",(a=>t.Ns.getAllFromCollectionGroup(a,e,ES(i,Ul),Number.MAX_SAFE_INTEGER))).then((a=>(JR(t,e,a),a)))}function JR(r,e,t){let i=r.Os.get(e)||ye.min();t.forEach(((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.Os.set(e,i)}async function BM(r,e,t,i){const a=le(r);let l=Ne(),c=zn();for(const g of t){const v=e.$s(g.metadata.name);g.document&&(l=l.add(v));const T=e.Us(g);T.setReadTime(e.Ks(g.metadata.readTime)),c=c.insert(v,T)}const f=a.Ns.newChangeBuffer({trackRemovals:!0}),p=await Wl(a,(function(v){return Rn(lu(ke.fromString(`__bundle__/docs/${v}`)))})(i));return a.persistence.runTransaction("Apply bundle documents","readwrite",(g=>WR(g,f,c).next((v=>(f.apply(g),v))).next((v=>a.Pi.removeMatchingKeysForTargetId(g,p.targetId).next((()=>a.Pi.addMatchingKeys(g,l,p.targetId))).next((()=>a.localDocuments.getLocalViewOfDocuments(g,v.ks,v.qs))).next((()=>v.ks))))))}async function FM(r,e,t=Ne()){const i=await Wl(r,Rn(hv(e.bundledQuery))),a=le(r);return a.persistence.runTransaction("Save named query","readwrite",(l=>{const c=Vt(e.readTime);if(i.snapshotVersion.compareTo(c)>=0)return a.Ii.saveNamedQuery(l,e);const f=i.withResumeToken(It.EMPTY_BYTE_STRING,c);return a.Ms=a.Ms.insert(f.targetId,f),a.Pi.updateTargetData(l,f).next((()=>a.Pi.removeMatchingKeysForTargetId(l,i.targetId))).next((()=>a.Pi.addMatchingKeys(l,t,i.targetId))).next((()=>a.Ii.saveNamedQuery(l,e)))}))}/**
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
 */const ZR="firestore_clients";function fA(r,e){return`${ZR}_${r}_${e}`}const e1="firestore_mutations";function mA(r,e,t){let i=`${e1}_${r}_${t}`;return e.isAuthenticated()&&(i+=`_${e.uid}`),i}const t1="firestore_targets";function b_(r,e){return`${t1}_${r}_${e}`}/**
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
 */const rr="SharedClientState";class hm{constructor(e,t,i,a){this.user=e,this.batchId=t,this.state=i,this.error=a}static Ws(e,t,i){const a=JSON.parse(i);let l,c=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return c&&a.error&&(c=typeof a.error.message=="string"&&typeof a.error.code=="string",c&&(l=new te(a.error.code,a.error.message))),c?new hm(e,t,a.state,l):(xt(rr,`Failed to parse mutation state for ID '${t}': ${i}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Xc{constructor(e,t,i){this.targetId=e,this.state=t,this.error=i}static Ws(e,t){const i=JSON.parse(t);let a,l=typeof i=="object"&&["not-current","current","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return l&&i.error&&(l=typeof i.error.message=="string"&&typeof i.error.code=="string",l&&(a=new te(i.error.code,i.error.message))),l?new Xc(e,i.state,a):(xt(rr,`Failed to parse target state for ID '${e}': ${t}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class dm{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ws(e,t){const i=JSON.parse(t);let a=typeof i=="object"&&i.activeTargetIds instanceof Array,l=iv();for(let c=0;a&&c<i.activeTargetIds.length;++c)a=AS(i.activeTargetIds[c]),l=l.add(i.activeTargetIds[c]);return a?new dm(e,l):(xt(rr,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Ev{constructor(e,t){this.clientId=e,this.onlineState=t}static Ws(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Ev(t.clientId,t.onlineState):(xt(rr,`Failed to parse online state: ${e}`),null)}}class ry{constructor(){this.activeTargetIds=iv()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class w_{constructor(e,t,i,a,l){this.window=e,this.Mi=t,this.persistenceKey=i,this.Js=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Hs=this.Ys.bind(this),this.Zs=new ot(Ae),this.started=!1,this.Xs=[];const c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=l,this.eo=fA(this.persistenceKey,this.Js),this.no=(function(p){return`firestore_sequence_number_${p}`})(this.persistenceKey),this.Zs=this.Zs.insert(this.Js,new ry),this.ro=new RegExp(`^${ZR}_${c}_([^_]*)$`),this.io=new RegExp(`^${e1}_${c}_(\\d+)(?:_(.*))?$`),this.so=new RegExp(`^${t1}_${c}_(\\d+)$`),this.oo=(function(p){return`firestore_online_state_${p}`})(this.persistenceKey),this._o=(function(p){return`firestore_bundle_loaded_v2_${p}`})(this.persistenceKey),this.window.addEventListener("storage",this.Hs)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ts();for(const i of e){if(i===this.Js)continue;const a=this.getItem(fA(this.persistenceKey,i));if(a){const l=dm.Ws(i,a);l&&(this.Zs=this.Zs.insert(l.clientId,l))}}this.ao();const t=this.storage.getItem(this.oo);if(t){const i=this.uo(t);i&&this.co(i)}for(const i of this.Xs)this.Ys(i);this.Xs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.no,JSON.stringify(e))}getAllActiveQueryTargets(){return this.lo(this.Zs)}isActiveQueryTarget(e){let t=!1;return this.Zs.forEach(((i,a)=>{a.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.ho(e,"pending")}updateMutationState(e,t,i){this.ho(e,t,i),this.Po(e)}addLocalQueryTarget(e,t=!0){let i="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(b_(this.persistenceKey,e));if(a){const l=Xc.Ws(e,a);l&&(i=l.state)}}return t&&this.To.zs(e),this.ao(),i}removeLocalQueryTarget(e){this.To.js(e),this.ao()}isLocalQueryTarget(e){return this.To.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(b_(this.persistenceKey,e))}updateQueryState(e,t,i){this.Io(e,t,i)}handleUserChange(e,t,i){t.forEach((a=>{this.Po(a)})),this.currentUser=e,i.forEach((a=>{this.addPendingMutation(a)}))}setOnlineState(e){this.Eo(e)}notifyBundleLoaded(e){this.Ao(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Hs),this.removeItem(this.eo),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ne(rr,"READ",e,t),t}setItem(e,t){ne(rr,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){ne(rr,"REMOVE",e),this.storage.removeItem(e)}Ys(e){const t=e;if(t.storageArea===this.storage){if(ne(rr,"EVENT",t.key,t.newValue),t.key===this.eo)return void xt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Mi.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.ro.test(t.key)){if(t.newValue==null){const i=this.Ro(t.key);return this.Vo(i,null)}{const i=this.mo(t.key,t.newValue);if(i)return this.Vo(i.clientId,i)}}else if(this.io.test(t.key)){if(t.newValue!==null){const i=this.fo(t.key,t.newValue);if(i)return this.po(i)}}else if(this.so.test(t.key)){if(t.newValue!==null){const i=this.yo(t.key,t.newValue);if(i)return this.wo(i)}}else if(t.key===this.oo){if(t.newValue!==null){const i=this.uo(t.newValue);if(i)return this.co(i)}}else if(t.key===this.no){const i=(function(l){let c=Ln.ce;if(l!=null)try{const f=JSON.parse(l);pe(typeof f=="number",30636,{So:l}),c=f}catch(f){xt(rr,"Failed to read sequence number from WebStorage",f)}return c})(t.newValue);i!==Ln.ce&&this.sequenceNumberHandler(i)}else if(t.key===this._o){const i=this.bo(t.newValue);await Promise.all(i.map((a=>this.syncEngine.Do(a))))}}}else this.Xs.push(t)}))}}get To(){return this.Zs.get(this.Js)}ao(){this.setItem(this.eo,this.To.Gs())}ho(e,t,i){const a=new hm(this.currentUser,e,t,i),l=mA(this.persistenceKey,this.currentUser,e);this.setItem(l,a.Gs())}Po(e){const t=mA(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Eo(e){const t={clientId:this.Js,onlineState:e};this.storage.setItem(this.oo,JSON.stringify(t))}Io(e,t,i){const a=b_(this.persistenceKey,e),l=new Xc(e,t,i);this.setItem(a,l.Gs())}Ao(e){const t=JSON.stringify(Array.from(e));this.setItem(this._o,t)}Ro(e){const t=this.ro.exec(e);return t?t[1]:null}mo(e,t){const i=this.Ro(e);return dm.Ws(i,t)}fo(e,t){const i=this.io.exec(e),a=Number(i[1]),l=i[2]!==void 0?i[2]:null;return hm.Ws(new nn(l),a,t)}yo(e,t){const i=this.so.exec(e),a=Number(i[1]);return Xc.Ws(a,t)}uo(e){return Ev.Ws(e)}bo(e){return JSON.parse(e)}async po(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Co(e.batchId,e.state,e.error);ne(rr,`Ignoring mutation for non-active user ${e.user.uid}`)}wo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Vo(e,t){const i=t?this.Zs.insert(e,t):this.Zs.remove(e),a=this.lo(this.Zs),l=this.lo(i),c=[],f=[];return l.forEach((p=>{a.has(p)||c.push(p)})),a.forEach((p=>{l.has(p)||f.push(p)})),this.syncEngine.Fo(c,f).then((()=>{this.Zs=i}))}co(e){this.Zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}lo(e){let t=iv();return e.forEach(((i,a)=>{t=t.unionWith(a.activeTargetIds)})),t}}class n1{constructor(){this.Mo=new ry,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,i){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ry,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jM{Oo(e){}shutdown(){}}/**
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
 */const pA="ConnectivityMonitor";class gA{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ne(pA,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ne(pA,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const I_="RestConnection",qM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class HM{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${i}/databases/${a}`,this.Wo=this.databaseId.database===H_?`project_id=${i}`:`project_id=${i}&database_id=${a}`}Go(e,t,i,a,l){const c=sy(),f=this.zo(e,t.toUriEncodedString());ne(I_,`Sending RPC '${e}' ${c}:`,f,i);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(f),v=nu(g);return this.Jo(e,f,p,i,v).then((T=>(ne(I_,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw yr(I_,`RPC '${e}' ${c} failed with error: `,T,"url: ",f,"request:",i),T}))}Ho(e,t,i,a,l,c){return this.Go(e,t,i,a,l)}jo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ou})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),i&&i.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const i=qM[e];return`${this.Uo}/v1/${t}:${i}`}terminate(){}}/**
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
 */class GM{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const gn="WebChannelConnection";class KM extends HM{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,a,l){const c=sy();return new Promise(((f,p)=>{const g=new uS;g.setWithCredentials(!0),g.listenOnce(cS.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Pf.NO_ERROR:const T=g.getResponseJson();ne(gn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),f(T);break;case Pf.TIMEOUT:ne(gn,`RPC '${e}' ${c} timed out`),p(new te(G.DEADLINE_EXCEEDED,"Request time out"));break;case Pf.HTTP_ERROR:const w=g.getStatus();if(ne(gn,`RPC '${e}' ${c} failed with status:`,w,"response text:",g.getResponseText()),w>0){let D=g.getResponseJson();Array.isArray(D)&&(D=D[0]);const Y=D==null?void 0:D.error;if(Y&&Y.status&&Y.message){const O=(function(J){const re=J.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(re)>=0?re:G.UNKNOWN})(Y.status);p(new te(O,Y.message))}else p(new te(G.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new te(G.UNAVAILABLE,"Connection failed."));break;default:he(9055,{l_:e,streamId:c,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ne(gn,`RPC '${e}' ${c} completed.`)}}));const v=JSON.stringify(a);ne(gn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",v,i,15)}))}T_(e,t,i){const a=sy(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=fS(),f=dS(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=l.join("");ne(gn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const T=c.createWebChannel(v,p);this.I_(T);let w=!1,D=!1;const Y=new GM({Yo:H=>{D?ne(gn,`Not sending because RPC '${e}' stream ${a} is closed:`,H):(w||(ne(gn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),w=!0),ne(gn,`RPC '${e}' stream ${a} sending:`,H),T.send(H))},Zo:()=>T.close()}),O=(H,J,re)=>{H.listen(J,(se=>{try{re(se)}catch(_e){setTimeout((()=>{throw _e}),0)}}))};return O(T,Pc.EventType.OPEN,(()=>{D||(ne(gn,`RPC '${e}' stream ${a} transport opened.`),Y.o_())})),O(T,Pc.EventType.CLOSE,(()=>{D||(D=!0,ne(gn,`RPC '${e}' stream ${a} transport closed`),Y.a_(),this.E_(T))})),O(T,Pc.EventType.ERROR,(H=>{D||(D=!0,yr(gn,`RPC '${e}' stream ${a} transport errored. Name:`,H.name,"Message:",H.message),Y.a_(new te(G.UNAVAILABLE,"The operation could not be completed")))})),O(T,Pc.EventType.MESSAGE,(H=>{var J;if(!D){const re=H.data[0];pe(!!re,16349);const se=re,_e=(se==null?void 0:se.error)||((J=se[0])==null?void 0:J.error);if(_e){ne(gn,`RPC '${e}' stream ${a} received error:`,_e);const we=_e.status;let me=(function(N){const k=qt[N];if(k!==void 0)return pR(k)})(we),S=_e.message;me===void 0&&(me=G.INTERNAL,S="Unknown error status: "+we+" with message "+_e.message),D=!0,Y.a_(new te(me,S)),T.close()}else ne(gn,`RPC '${e}' stream ${a} received:`,re),Y.u_(re)}})),O(f,hS.STAT_EVENT,(H=>{H.stat===L_.PROXY?ne(gn,`RPC '${e}' stream ${a} detected buffering proxy`):H.stat===L_.NOPROXY&&ne(gn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{Y.__()}),0),Y}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}/**
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
 */function i1(){return typeof window<"u"?window:null}function qf(){return typeof document<"u"?document:null}/**
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
 */function zh(r){return new Xk(r,!0)}/**
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
 */class Tv{constructor(e,t,i=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-i);a>0&&ne("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const _A="PersistentStream";class r1{constructor(e,t,i,a,l,c,f,p){this.Mi=e,this.S_=i,this.b_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Tv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(xt(t.toString()),xt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,a])=>{this.D_===t&&this.G_(i,a)}),(i=>{e((()=>{const a=new te(G.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(a)}))}))}G_(e,t){const i=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{i((()=>this.listener.Xo()))})),this.stream.t_((()=>{i((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{i((()=>this.z_(a)))})),this.stream.onMessage((a=>{i((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ne(_A,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ne(_A,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class QM extends r1{constructor(e,t,i,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,a,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=eM(this.serializer,e),i=(function(l){if(!("targetChange"in l))return ye.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?ye.min():c.readTime?Vt(c.readTime):ye.min()})(e);return this.listener.H_(t,i)}Y_(e){const t={};t.database=Z_(this.serializer),t.addTarget=(function(l,c){let f;const p=c.target;if(f=im(p)?{documents:AR(l,p)}:{query:SR(l,p).ft},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=vR(l,c.resumeToken);const g=X_(l,c.expectedCount);g!==null&&(f.expectedCount=g)}else if(c.snapshotVersion.compareTo(ye.min())>0){f.readTime=Yl(l,c.snapshotVersion.toTimestamp());const g=X_(l,c.expectedCount);g!==null&&(f.expectedCount=g)}return f})(this.serializer,e);const i=nM(this.serializer,e);i&&(t.labels=i),this.q_(t)}Z_(e){const t={};t.database=Z_(this.serializer),t.removeTarget=e,this.q_(t)}}class YM extends r1{constructor(e,t,i,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,a,c),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=tM(e.writeResults,e.commitTime),i=Vt(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=Z_(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>gh(this.serializer,i)))};this.q_(t)}}/**
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
 */class WM{}class $M extends WM{constructor(e,t,i,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new te(G.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Go(e,J_(t,i),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new te(G.UNKNOWN,l.toString())}))}Ho(e,t,i,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Ho(e,J_(t,i),a,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new te(G.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class XM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xt(t),this.aa=!1):ne("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const go="RemoteStore";class JM{constructor(e,t,i,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((c=>{i.enqueueAndForget((async()=>{ua(this)&&(ne(go,"Restarting streams for network reachability change."),await(async function(p){const g=le(p);g.Ea.add(4),await hu(g),g.Ra.set("Unknown"),g.Ea.delete(4),await Bh(g)})(this))}))})),this.Ra=new XM(i,a)}}async function Bh(r){if(ua(r))for(const e of r.da)await e(!0)}async function hu(r){for(const e of r.da)await e(!1)}function qm(r,e){const t=le(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Iv(t)?wv(t):fu(t).O_()&&bv(t,e))}function Xl(r,e){const t=le(r),i=fu(t);t.Ia.delete(e),i.O_()&&s1(t,e),t.Ia.size===0&&(i.O_()?i.L_():ua(t)&&t.Ra.set("Unknown"))}function bv(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fu(r).Y_(e)}function s1(r,e){r.Va.Ue(e),fu(r).Z_(e)}function wv(r){r.Va=new Qk({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),fu(r).start(),r.Ra.ua()}function Iv(r){return ua(r)&&!fu(r).x_()&&r.Ia.size>0}function ua(r){return le(r).Ea.size===0}function a1(r){r.Va=void 0}async function ZM(r){r.Ra.set("Online")}async function e4(r){r.Ia.forEach(((e,t)=>{bv(r,e)}))}async function t4(r,e){a1(r),Iv(r)?(r.Ra.ha(e),wv(r)):r.Ra.set("Unknown")}async function n4(r,e,t){if(r.Ra.set("Online"),e instanceof yR&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const f of l.targetIds)a.Ia.has(f)&&(await a.remoteSyncer.rejectListen(f,c),a.Ia.delete(f),a.Va.removeTarget(f))})(r,e)}catch(i){ne(go,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await fm(r,i)}else if(e instanceof Ff?r.Va.Ze(e):e instanceof _R?r.Va.st(e):r.Va.tt(e),!t.isEqual(ye.min()))try{const i=await YR(r.localStore);t.compareTo(i)>=0&&await(function(l,c){const f=l.Va.Tt(c);return f.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.Ia.get(g);v&&l.Ia.set(g,v.withResumeToken(p.resumeToken,c))}})),f.targetMismatches.forEach(((p,g)=>{const v=l.Ia.get(p);if(!v)return;l.Ia.set(p,v.withResumeToken(It.EMPTY_BYTE_STRING,v.snapshotVersion)),s1(l,p);const T=new Br(v.target,p,g,v.sequenceNumber);bv(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(i){ne(go,"Failed to raise snapshot:",i),await fm(r,i)}}async function fm(r,e,t){if(!oa(e))throw e;r.Ea.add(1),await hu(r),r.Ra.set("Offline"),t||(t=()=>YR(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ne(go,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Bh(r)}))}function o1(r,e){return e().catch((t=>fm(r,t,e)))}async function du(r){const e=le(r),t=ta(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:qs;for(;i4(e);)try{const a=await zM(e.localStore,i);if(a===null){e.Ta.length===0&&t.L_();break}i=a.batchId,r4(e,a)}catch(a){await fm(e,a)}l1(e)&&u1(e)}function i4(r){return ua(r)&&r.Ta.length<10}function r4(r,e){r.Ta.push(e);const t=ta(r);t.O_()&&t.X_&&t.ea(e.mutations)}function l1(r){return ua(r)&&!ta(r).x_()&&r.Ta.length>0}function u1(r){ta(r).start()}async function s4(r){ta(r).ra()}async function a4(r){const e=ta(r);for(const t of r.Ta)e.ea(t.mutations)}async function o4(r,e,t){const i=r.Ta.shift(),a=ov.from(i,e,t);await o1(r,(()=>r.remoteSyncer.applySuccessfulWrite(a))),await du(r)}async function l4(r,e){e&&ta(r).X_&&await(async function(i,a){if((function(c){return mR(c)&&c!==G.ABORTED})(a.code)){const l=i.Ta.shift();ta(i).B_(),await o1(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a))),await du(i)}})(r,e),l1(r)&&u1(r)}async function yA(r,e){const t=le(r);t.asyncQueue.verifyOperationInProgress(),ne(go,"RemoteStore received new credentials");const i=ua(t);t.Ea.add(3),await hu(t),i&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Bh(t)}async function ay(r,e){const t=le(r);e?(t.Ea.delete(2),await Bh(t)):e||(t.Ea.add(2),await hu(t),t.Ra.set("Unknown"))}function fu(r){return r.ma||(r.ma=(function(t,i,a){const l=le(t);return l.sa(),new QM(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(r.datastore,r.asyncQueue,{Xo:ZM.bind(null,r),t_:e4.bind(null,r),r_:t4.bind(null,r),H_:n4.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),Iv(r)?wv(r):r.Ra.set("Unknown")):(await r.ma.stop(),a1(r))}))),r.ma}function ta(r){return r.fa||(r.fa=(function(t,i,a){const l=le(t);return l.sa(),new YM(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:s4.bind(null,r),r_:l4.bind(null,r),ta:a4.bind(null,r),na:o4.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await du(r)):(await r.fa.stop(),r.Ta.length>0&&(ne(go,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class Av{constructor(e,t,i,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,a,l){const c=Date.now()+i,f=new Av(e,t,c,a,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mu(r,e){if(xt("AsyncQueue",`${e}: ${r}`),oa(r))return new te(G.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Vl{static emptySet(e){return new Vl(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||oe.comparator(t.key,i.key):(t,i)=>oe.comparator(t.key,i.key),this.keyedMap=Oc(),this.sortedSet=new ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class vA{constructor(){this.ga=new ot(oe.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):he(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Jl{constructor(e,t,i,a,l,c,f,p,g){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,i,a,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new Jl(e,t,Vl.emptySet(t),c,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==i[a].type||!t[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
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
 */class u4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class c4{constructor(){this.queries=EA(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const a=le(t),l=a.queries;a.queries=EA(),l.forEach(((c,f)=>{for(const p of f.Sa)p.onError(i)}))})(this,new te(G.ABORTED,"Firestore shutting down"))}}function EA(){return new Wr((r=>eR(r)),Oh)}async function Sv(r,e){const t=le(r);let i=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(i=2):(l=new u4,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const f=mu(c,`Initialization of query '${bl(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Cv(t)}async function Rv(r,e){const t=le(r),i=e.query;let a=3;const l=t.queries.get(i);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function h4(r,e){const t=le(r);let i=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const f of c.Sa)f.Fa(a)&&(i=!0);c.wa=a}}i&&Cv(t)}function d4(r,e,t){const i=le(r),a=i.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);i.queries.delete(e)}function Cv(r){r.Ca.forEach((e=>{e.next()}))}var oy,TA;(TA=oy||(oy={})).Ma="default",TA.Cache="cache";class Nv{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new Jl(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Jl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==oy.Cache}}/**
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
 */class f4{constructor(e,t){this.Qa=e,this.byteLength=t}$a(){return"metadata"in this.Qa}}/**
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
 */class bA{constructor(e){this.serializer=e}$s(e){return fr(this.serializer,e)}Us(e){return e.metadata.exists?IR(this.serializer,e.document,!1):ct.newNoDocument(this.$s(e.metadata.name),this.Ks(e.metadata.readTime))}Ks(e){return Vt(e)}}class m4{constructor(e,t){this.Ua=e,this.serializer=t,this.Ka=[],this.Wa=[],this.collectionGroups=new Set,this.progress=c1(e)}get queries(){return this.Ka}get documents(){return this.Wa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Qa.namedQuery)this.Ka.push(e.Qa.namedQuery);else if(e.Qa.documentMetadata){this.Wa.push({metadata:e.Qa.documentMetadata}),e.Qa.documentMetadata.exists||++t;const i=ke.fromString(e.Qa.documentMetadata.name);this.collectionGroups.add(i.get(i.length-2))}else e.Qa.document&&(this.Wa[this.Wa.length-1].document=e.Qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}za(e){const t=new Map,i=new bA(this.serializer);for(const a of e)if(a.metadata.queries){const l=i.$s(a.metadata.name);for(const c of a.metadata.queries){const f=(t.get(c)||Ne()).add(l);t.set(c,f)}}return t}async ja(e){const t=await BM(e,new bA(this.serializer),this.Wa,this.Ua.id),i=this.za(this.documents);for(const a of this.Ka)await FM(e,a,i.get(a.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:t}}}function c1(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
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
 */class h1{constructor(e){this.key=e}}class d1{constructor(e){this.key=e}}class f1{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ne(),this.mutatedKeys=Ne(),this.eu=nR(e),this.tu=new Vl(this.eu)}get nu(){return this.Ya}ru(e,t){const i=t?t.iu:new vA,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,f=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((v,T)=>{const w=a.get(v),D=kh(this.query,T)?T:null,Y=!!w&&this.mutatedKeys.has(w.key),O=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let H=!1;w&&D?w.data.isEqual(D.data)?Y!==O&&(i.track({type:3,doc:D}),H=!0):this.su(w,D)||(i.track({type:2,doc:D}),H=!0,(p&&this.eu(D,p)>0||g&&this.eu(D,g)<0)&&(f=!0)):!w&&D?(i.track({type:0,doc:D}),H=!0):w&&!D&&(i.track({type:1,doc:w}),H=!0,(p||g)&&(f=!0)),H&&(D?(c=c.add(D),l=O?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{tu:c,iu:i,Cs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((v,T)=>(function(D,Y){const O=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he(20277,{Rt:H})}};return O(D)-O(Y)})(v.type,T.type)||this.eu(v.doc,T.doc))),this.ou(i),a=a??!1;const f=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,c.length!==0||g?{snapshot:new Jl(this.query,e.tu,l,c,e.mutatedKeys,p===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new vA,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ne(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))}));const t=[];return e.forEach((i=>{this.Xa.has(i)||t.push(new d1(i))})),this.Xa.forEach((i=>{e.has(i)||t.push(new h1(i))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Jl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ca="SyncEngine";class p4{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class g4{constructor(e){this.key=e,this.hu=!1}}class _4{constructor(e,t,i,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Wr((f=>eR(f)),Oh),this.Iu=new Map,this.Eu=new Set,this.du=new ot(oe.comparator),this.Au=new Map,this.Ru=new mv,this.Vu={},this.mu=new Map,this.fu=po.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function y4(r,e,t=!0){const i=Hm(r);let a;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await m1(i,e,t,!0),a}async function v4(r,e){const t=Hm(r);await m1(t,e,!0,!1)}async function m1(r,e,t,i){const a=await Wl(r.localStore,Rn(e)),l=a.targetId,c=r.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await Dv(r,e,l,c==="current",a.resumeToken)),r.isPrimaryClient&&t&&qm(r.remoteStore,a),f}async function Dv(r,e,t,i,a){r.pu=(T,w,D)=>(async function(O,H,J,re){let se=H.view.ru(J);se.Cs&&(se=await cm(O.localStore,H.query,!1).then((({documents:S})=>H.view.ru(S,se))));const _e=re&&re.targetChanges.get(H.targetId),we=re&&re.targetMismatches.get(H.targetId)!=null,me=H.view.applyChanges(se,O.isPrimaryClient,_e,we);return ly(O,H.targetId,me.au),me.snapshot})(r,T,w,D);const l=await cm(r.localStore,e,!0),c=new f1(e,l.Qs),f=c.ru(l.documents),p=Uh.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",a),g=c.applyChanges(f,r.isPrimaryClient,p);ly(r,t,g.au);const v=new p4(e,t,c);return r.Tu.set(e,v),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),g.snapshot}async function E4(r,e,t){const i=le(r),a=i.Tu.get(e),l=i.Iu.get(a.targetId);if(l.length>1)return i.Iu.set(a.targetId,l.filter((c=>!Oh(c,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await $l(i.localStore,a.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(a.targetId),t&&Xl(i.remoteStore,a.targetId),Zl(i,a.targetId)})).catch(aa)):(Zl(i,a.targetId),await $l(i.localStore,a.targetId,!0))}async function T4(r,e){const t=le(r),i=t.Tu.get(e),a=t.Iu.get(i.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Xl(t.remoteStore,i.targetId))}async function b4(r,e,t){const i=Ov(r);try{const a=await(function(c,f){const p=le(c),g=Ye.now(),v=f.reduce(((D,Y)=>D.add(Y.key)),Ne());let T,w;return p.persistence.runTransaction("Locally write mutations","readwrite",(D=>{let Y=zn(),O=Ne();return p.Ns.getEntries(D,v).next((H=>{Y=H,Y.forEach(((J,re)=>{re.isValidDocument()||(O=O.add(J))}))})).next((()=>p.localDocuments.getOverlayedDocuments(D,Y))).next((H=>{T=H;const J=[];for(const re of f){const se=Hk(re,T.get(re.key).overlayedDocument);se!=null&&J.push(new $r(re.key,se,GS(se.value.mapValue),vt.exists(!0)))}return p.mutationQueue.addMutationBatch(D,g,J,f)})).next((H=>{w=H;const J=H.applyToLocalDocumentSet(T,O);return p.documentOverlayCache.saveOverlays(D,H.batchId,J)}))})).then((()=>({batchId:w.batchId,changes:rR(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),(function(c,f,p){let g=c.Vu[c.currentUser.toKey()];g||(g=new ot(Ae)),g=g.insert(f,p),c.Vu[c.currentUser.toKey()]=g})(i,a.batchId,t),await Xr(i,a.changes),await du(i.remoteStore)}catch(a){const l=mu(a,"Failed to persist write");t.reject(l)}}async function p1(r,e){const t=le(r);try{const i=await UM(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Au.get(l);c&&(pe(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.hu=!0:a.modifiedDocuments.size>0?pe(c.hu,14607):a.removedDocuments.size>0&&(pe(c.hu,42227),c.hu=!1))})),await Xr(t,i,e)}catch(i){await aa(i)}}function wA(r,e,t){const i=le(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const a=[];i.Tu.forEach(((l,c)=>{const f=c.view.va(e);f.snapshot&&a.push(f.snapshot)})),(function(c,f){const p=le(c);p.onlineState=f;let g=!1;p.queries.forEach(((v,T)=>{for(const w of T.Sa)w.va(f)&&(g=!0)})),g&&Cv(p)})(i.eventManager,e),a.length&&i.Pu.H_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function w4(r,e,t){const i=le(r);i.sharedClientState.updateQueryState(e,"rejected",t);const a=i.Au.get(e),l=a&&a.key;if(l){let c=new ot(oe.comparator);c=c.insert(l,ct.newNoDocument(l,ye.min()));const f=Ne().add(l),p=new Lh(ye.min(),new Map,new ot(Ae),c,f);await p1(i,p),i.du=i.du.remove(l),i.Au.delete(e),Pv(i)}else await $l(i.localStore,e,!1).then((()=>Zl(i,e,t))).catch(aa)}async function I4(r,e){const t=le(r),i=e.batch.batchId;try{const a=await LM(t.localStore,e);Vv(t,i,null),xv(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Xr(t,a)}catch(a){await aa(a)}}async function A4(r,e,t){const i=le(r);try{const a=await(function(c,f){const p=le(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return p.mutationQueue.lookupMutationBatch(g,f).next((T=>(pe(T!==null,37113),v=T.keys(),p.mutationQueue.removeMutationBatch(g,T)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>p.localDocuments.getDocuments(g,v)))}))})(i.localStore,e);Vv(i,e,t),xv(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Xr(i,a)}catch(a){await aa(a)}}async function S4(r,e){const t=le(r);ua(t.remoteStore)||ne(ca,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const i=await(function(c){const f=le(c);return f.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(p=>f.mutationQueue.getHighestUnacknowledgedBatchId(p)))})(t.localStore);if(i===qs)return void e.resolve();const a=t.mu.get(i)||[];a.push(e),t.mu.set(i,a)}catch(i){const a=mu(i,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function xv(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function Vv(r,e,t){const i=le(r);let a=i.Vu[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),i.Vu[i.currentUser.toKey()]=a}}function Zl(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Iu.get(e))r.Tu.delete(i),t&&r.Pu.yu(i,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((i=>{r.Ru.containsKey(i)||g1(r,i)}))}function g1(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Xl(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Pv(r))}function ly(r,e,t){for(const i of t)i instanceof h1?(r.Ru.addReference(i.key,e),R4(r,i)):i instanceof d1?(ne(ca,"Document no longer in limbo: "+i.key),r.Ru.removeReference(i.key,e),r.Ru.containsKey(i.key)||g1(r,i.key)):he(19791,{wu:i})}function R4(r,e){const t=e.key,i=t.path.canonicalString();r.du.get(t)||r.Eu.has(i)||(ne(ca,"New document in limbo: "+t),r.Eu.add(i),Pv(r))}function Pv(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new oe(ke.fromString(e)),i=r.fu.next();r.Au.set(i,new g4(t)),r.du=r.du.insert(t,i),qm(r.remoteStore,new Br(Rn(lu(t.path)),i,"TargetPurposeLimboResolution",Ln.ce))}}async function Xr(r,e,t){const i=le(r),a=[],l=[],c=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,p)=>{c.push(i.pu(p,e,t).then((g=>{var v;if((g||t)&&i.isPrimaryClient){const T=g?!g.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))==null?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(g){a.push(g);const T=yv.As(p.targetId,g);l.push(T)}})))})),await Promise.all(c),i.Pu.H_(a),await(async function(p,g){const v=le(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>z.forEach(g,(w=>z.forEach(w.Es,(D=>v.persistence.referenceDelegate.addReference(T,w.targetId,D))).next((()=>z.forEach(w.ds,(D=>v.persistence.referenceDelegate.removeReference(T,w.targetId,D)))))))))}catch(T){if(!oa(T))throw T;ne(vv,"Failed to update sequence numbers: "+T)}for(const T of g){const w=T.targetId;if(!T.fromCache){const D=v.Ms.get(w),Y=D.snapshotVersion,O=D.withLastLimboFreeSnapshotVersion(Y);v.Ms=v.Ms.insert(w,O)}}})(i.localStore,l))}async function C4(r,e){const t=le(r);if(!t.currentUser.isEqual(e)){ne(ca,"User change. New user:",e.toKey());const i=await QR(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((f=>{f.forEach((p=>{p.reject(new te(G.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Xr(t,i.Ls)}}function N4(r,e){const t=le(r),i=t.Au.get(e);if(i&&i.hu)return Ne().add(i.key);{let a=Ne();const l=t.Iu.get(e);if(!l)return a;for(const c of l){const f=t.Tu.get(c);a=a.unionWith(f.view.nu)}return a}}async function D4(r,e){const t=le(r),i=await cm(t.localStore,e.query,!0),a=e.view.cu(i);return t.isPrimaryClient&&ly(t,e.targetId,a.au),a}async function x4(r,e){const t=le(r);return XR(t.localStore,e).then((i=>Xr(t,i)))}async function V4(r,e,t,i){const a=le(r),l=await(function(f,p){const g=le(f),v=le(g.mutationQueue);return g.persistence.runTransaction("Lookup mutation documents","readonly",(T=>v.er(T,p).next((w=>w?g.localDocuments.getDocuments(T,w):z.resolve(null)))))})(a.localStore,e);l!==null?(t==="pending"?await du(a.remoteStore):t==="acknowledged"||t==="rejected"?(Vv(a,e,i||null),xv(a,e),(function(f,p){le(le(f).mutationQueue).ir(p)})(a.localStore,e)):he(6720,"Unknown batchState",{Su:t}),await Xr(a,l)):ne(ca,"Cannot apply mutation batch with id: "+e)}async function P4(r,e){const t=le(r);if(Hm(t),Ov(t),e===!0&&t.gu!==!0){const i=t.sharedClientState.getAllActiveQueryTargets(),a=await IA(t,i.toArray());t.gu=!0,await ay(t.remoteStore,!0);for(const l of a)qm(t.remoteStore,l)}else if(e===!1&&t.gu!==!1){const i=[];let a=Promise.resolve();t.Iu.forEach(((l,c)=>{t.sharedClientState.isLocalQueryTarget(c)?i.push(c):a=a.then((()=>(Zl(t,c),$l(t.localStore,c,!0)))),Xl(t.remoteStore,c)})),await a,await IA(t,i),(function(c){const f=le(c);f.Au.forEach(((p,g)=>{Xl(f.remoteStore,g)})),f.Ru.Jr(),f.Au=new Map,f.du=new ot(oe.comparator)})(t),t.gu=!1,await ay(t.remoteStore,!1)}}async function IA(r,e,t){const i=le(r),a=[],l=[];for(const c of e){let f;const p=i.Iu.get(c);if(p&&p.length!==0){f=await Wl(i.localStore,Rn(p[0]));for(const g of p){const v=i.Tu.get(g),T=await D4(i,v);T.snapshot&&l.push(T.snapshot)}}else{const g=await $R(i.localStore,c);f=await Wl(i.localStore,g),await Dv(i,_1(g),c,!1,f.resumeToken)}a.push(f)}return i.Pu.H_(l),a}function _1(r){return ZS(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function O4(r){return(function(t){return le(le(t).persistence).Ts()})(le(r).localStore)}async function k4(r,e,t,i){const a=le(r);if(a.gu)return void ne(ca,"Ignoring unexpected query state notification.");const l=a.Iu.get(e);if(l&&l.length>0)switch(t){case"current":case"not-current":{const c=await XR(a.localStore,tR(l[0])),f=Lh.createSynthesizedRemoteEventForCurrentChange(e,t==="current",It.EMPTY_BYTE_STRING);await Xr(a,c,f);break}case"rejected":await $l(a.localStore,e,!0),Zl(a,e,i);break;default:he(64155,t)}}async function M4(r,e,t){const i=Hm(r);if(i.gu){for(const a of e){if(i.Iu.has(a)&&i.sharedClientState.isActiveQueryTarget(a)){ne(ca,"Adding an already active target "+a);continue}const l=await $R(i.localStore,a),c=await Wl(i.localStore,l);await Dv(i,_1(l),c.targetId,!1,c.resumeToken),qm(i.remoteStore,c)}for(const a of t)i.Iu.has(a)&&await $l(i.localStore,a,!1).then((()=>{Xl(i.remoteStore,a),Zl(i,a)})).catch(aa)}}function Hm(r){const e=le(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=p1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=N4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=w4.bind(null,e),e.Pu.H_=h4.bind(null,e.eventManager),e.Pu.yu=d4.bind(null,e.eventManager),e}function Ov(r){const e=le(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=I4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=A4.bind(null,e),e}function L4(r,e,t){const i=le(r);(async function(l,c,f){try{const p=await c.getMetadata();if(await(function(D,Y){const O=le(D),H=Vt(Y.createTime);return O.persistence.runTransaction("hasNewerBundle","readonly",(J=>O.Ii.getBundleMetadata(J,Y.id))).then((J=>!!J&&J.createTime.compareTo(H)>=0))})(l.localStore,p))return await c.close(),f._completeWith((function(D){return{taskState:"Success",documentsLoaded:D.totalDocuments,bytesLoaded:D.totalBytes,totalDocuments:D.totalDocuments,totalBytes:D.totalBytes}})(p)),Promise.resolve(new Set);f._updateProgress(c1(p));const g=new m4(p,c.serializer);let v=await c.bu();for(;v;){const w=await g.Ga(v);w&&f._updateProgress(w),v=await c.bu()}const T=await g.ja(l.localStore);return await Xr(l,T.Ha,void 0),await(function(D,Y){const O=le(D);return O.persistence.runTransaction("Save bundle","readwrite",(H=>O.Ii.saveBundleMetadata(H,Y)))})(l.localStore,p),f._completeWith(T.progress),Promise.resolve(T.Ja)}catch(p){return yr(ca,`Loading bundle failed with ${p}`),f._failWith(p),Promise.resolve(new Set)}})(i,e,t).then((a=>{i.sharedClientState.notifyBundleLoaded(a)}))}class _h{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return KR(this.persistence,new GR,e.initialUser,this.serializer)}Cu(e){return new pv(jm.mi,this.serializer)}Du(e){return new n1}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_h.provider={build:()=>new _h};class U4 extends _h{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){pe(this.persistence.referenceDelegate instanceof um,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new zR(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?_n.withCacheSize(this.cacheSizeBytes):_n.DEFAULT;return new pv((i=>um.mi(i,t)),this.serializer)}}class y1 extends _h{constructor(e,t,i){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=i,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await Ov(this.xu.syncEngine),await du(this.xu.remoteStore),await this.persistence.Ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return KR(this.persistence,new GR,e.initialUser,this.serializer)}Fu(e,t){const i=this.persistence.referenceDelegate.garbageCollector;return new zR(i,e.asyncQueue,t)}Mu(e,t){const i=new QO(t,this.persistence);return new KO(e.asyncQueue,i)}Cu(e){const t=_v(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),i=this.cacheSizeBytes!==void 0?_n.withCacheSize(this.cacheSizeBytes):_n.DEFAULT;return new gv(this.synchronizeTabs,t,e.clientId,i,e.asyncQueue,i1(),qf(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new n1}}class z4 extends y1{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xu.syncEngine;this.sharedClientState instanceof w_&&(this.sharedClientState.syncEngine={Co:V4.bind(null,t),vo:k4.bind(null,t),Fo:M4.bind(null,t),Ts:O4.bind(null,t),Do:x4.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ji((async i=>{await P4(this.xu.syncEngine,i),this.gcScheduler&&(i&&!this.gcScheduler.started?this.gcScheduler.start():i||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(i&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():i||this.indexBackfillerScheduler.stop())}))}Du(e){const t=i1();if(!w_.v(t))throw new te(G.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const i=_v(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new w_(t,e.asyncQueue,i,e.clientId,e.initialUser)}}class yh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>wA(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=C4.bind(null,this.syncEngine),await ay(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new c4})()}createDatastore(e){const t=zh(e.databaseInfo.databaseId),i=(function(l){return new KM(l)})(e.databaseInfo);return(function(l,c,f,p){return new $M(l,c,f,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,a,l,c,f){return new JM(i,a,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>wA(this.syncEngine,t,0)),(function(){return gA.v()?new gA:new jM})())}createSyncEngine(e,t){return(function(a,l,c,f,p,g,v){const T=new _4(a,l,c,f,p,g);return v&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(a){const l=le(a);ne(go,"RemoteStore shutting down."),l.Ea.add(5),await hu(l),l.Aa.shutdown(),l.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}yh.provider={build:()=>new yh};function AA(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const i={value:r.slice(t,t+e),done:!1};return t+=e,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Gm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class B4{constructor(e,t){this.Bu=e,this.serializer=t,this.metadata=new fn,this.buffer=new Uint8Array,this.Lu=(function(){return new TextDecoder("utf-8")})(),this.ku().then((i=>{i&&i.$a()?this.metadata.resolve(i.Qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(i==null?void 0:i.Qa)}`))}),(i=>this.metadata.reject(i)))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async bu(){return await this.getMetadata(),this.ku()}async ku(){const e=await this.qu();if(e===null)return null;const t=this.Lu.decode(e),i=Number(t);isNaN(i)&&this.Qu(`length string (${t}) is not valid number`);const a=await this.$u(i);return new f4(JSON.parse(a),e.length+i)}Uu(){return this.buffer.findIndex((e=>e===123))}async qu(){for(;this.Uu()<0&&!await this.Ku(););if(this.buffer.length===0)return null;const e=this.Uu();e<0&&this.Qu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $u(e){for(;this.buffer.length<e;)await this.Ku()&&this.Qu("Reached the end of bundle when more is expected.");const t=this.Lu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qu(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ku(){const e=await this.Bu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class F4{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new te(G.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(a,l){const c=le(a),f={documents:l.map((T=>ph(c.serializer,T)))},p=await c.Ho("BatchGetDocuments",c.serializer.databaseId,ke.emptyPath(),f,l.length),g=new Map;p.forEach((T=>{const w=Zk(c.serializer,T);g.set(w.key.toString(),w)}));const v=[];return l.forEach((T=>{const w=g.get(T.toString());pe(!!w,55234,{key:T}),v.push(w)})),v})(this.datastore,e);return t.forEach((i=>this.recordVersion(i))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new cu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,i)=>{const a=oe.fromPath(i);this.mutations.push(new sv(a,this.precondition(a)))})),await(async function(i,a){const l=le(i),c={writes:a.map((f=>gh(l.serializer,f)))};await l.Go("Commit",l.serializer.databaseId,ke.emptyPath(),c)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw he(50498,{Gu:e.constructor.name});t=ye.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!t.isEqual(i))throw new te(G.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ye.min())?vt.exists(!1):vt.updateTime(t):vt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ye.min()))throw new te(G.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return vt.updateTime(t)}return vt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class j4{constructor(e,t,i,a,l){this.asyncQueue=e,this.datastore=t,this.options=i,this.updateFunction=a,this.deferred=l,this.zu=i.maxAttempts,this.M_=new Tv(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const e=new F4(this.datastore),t=this.Hu(e);t&&t.then((i=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(i)})).catch((a=>{this.Yu(a)}))))})).catch((i=>{this.Yu(i)}))}))}Hu(e){try{const t=this.updateFunction(e);return!xh(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Zu(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!mR(t)}return!1}}/**
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
 */const na="FirestoreClient";class q4{constructor(e,t,i,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=a,this.user=nn.UNAUTHENTICATED,this.clientId=Gy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{ne(na,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(ne(na,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=mu(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function A_(r,e){r.asyncQueue.verifyOperationInProgress(),ne(na,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async a=>{i.isEqual(a)||(await QR(e.localStore,a),i=a)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function SA(r,e){r.asyncQueue.verifyOperationInProgress();const t=await kv(r);ne(na,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>yA(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,a)=>yA(e.remoteStore,a))),r._onlineComponents=e}async function kv(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ne(na,"Using user provided OfflineComponentProvider");try{await A_(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===G.FAILED_PRECONDITION||a.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;yr("Error using user provided cache. Falling back to memory cache: "+t),await A_(r,new _h)}}else ne(na,"Using default OfflineComponentProvider"),await A_(r,new U4(void 0));return r._offlineComponents}async function Km(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ne(na,"Using user provided OnlineComponentProvider"),await SA(r,r._uninitializedComponentsProvider._online)):(ne(na,"Using default OnlineComponentProvider"),await SA(r,new yh))),r._onlineComponents}function v1(r){return kv(r).then((e=>e.persistence))}function Mv(r){return kv(r).then((e=>e.localStore))}function E1(r){return Km(r).then((e=>e.remoteStore))}function Lv(r){return Km(r).then((e=>e.syncEngine))}function H4(r){return Km(r).then((e=>e.datastore))}async function eu(r){const e=await Km(r),t=e.eventManager;return t.onListen=y4.bind(null,e.syncEngine),t.onUnlisten=E4.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=v4.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=T4.bind(null,e.syncEngine),t}function G4(r){return r.asyncQueue.enqueue((async()=>{const e=await v1(r),t=await E1(r);return e.setNetworkEnabled(!0),(function(a){const l=le(a);return l.Ea.delete(0),Bh(l)})(t)}))}function K4(r){return r.asyncQueue.enqueue((async()=>{const e=await v1(r),t=await E1(r);return e.setNetworkEnabled(!1),(async function(a){const l=le(a);l.Ea.add(0),await hu(l),l.Ra.set("Offline")})(t)}))}function Q4(r,e){const t=new fn;return r.asyncQueue.enqueueAndForget((async()=>(async function(a,l,c){try{const f=await(function(g,v){const T=le(g);return T.persistence.runTransaction("read document","readonly",(w=>T.localDocuments.getDocument(w,v)))})(a,l);f.isFoundDocument()?c.resolve(f):f.isNoDocument()?c.resolve(null):c.reject(new te(G.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(f){const p=mu(f,`Failed to get document '${l} from cache`);c.reject(p)}})(await Mv(r),e,t))),t.promise}function T1(r,e,t={}){const i=new fn;return r.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,p,g){const v=new Gm({next:w=>{v.Nu(),c.enqueueAndForget((()=>Rv(l,T)));const D=w.docs.has(f);!D&&w.fromCache?g.reject(new te(G.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&w.fromCache&&p&&p.source==="server"?g.reject(new te(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new Nv(lu(f.path),v,{includeMetadataChanges:!0,qa:!0});return Sv(l,T)})(await eu(r),r.asyncQueue,e,t,i))),i.promise}function Y4(r,e){const t=new fn;return r.asyncQueue.enqueueAndForget((async()=>(async function(a,l,c){try{const f=await cm(a,l,!0),p=new f1(l,f.Qs),g=p.ru(f.documents),v=p.applyChanges(g,!1);c.resolve(v.snapshot)}catch(f){const p=mu(f,`Failed to execute query '${l} against cache`);c.reject(p)}})(await Mv(r),e,t))),t.promise}function b1(r,e,t={}){const i=new fn;return r.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,p,g){const v=new Gm({next:w=>{v.Nu(),c.enqueueAndForget((()=>Rv(l,T))),w.fromCache&&p.source==="server"?g.reject(new te(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new Nv(f,v,{includeMetadataChanges:!0,qa:!0});return Sv(l,T)})(await eu(r),r.asyncQueue,e,t,i))),i.promise}function W4(r,e){const t=new Gm(e);return r.asyncQueue.enqueueAndForget((async()=>(function(a,l){le(a).Ca.add(l),l.next()})(await eu(r),t))),()=>{t.Nu(),r.asyncQueue.enqueueAndForget((async()=>(function(a,l){le(a).Ca.delete(l)})(await eu(r),t)))}}function $4(r,e,t,i){const a=(function(c,f){let p;return p=typeof c=="string"?gR().encode(c):c,(function(v,T){return new B4(v,T)})((function(v,T){if(v instanceof Uint8Array)return AA(v,T);if(v instanceof ArrayBuffer)return AA(new Uint8Array(v),T);if(v instanceof ReadableStream)return v.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(p),f)})(t,zh(e));r.asyncQueue.enqueueAndForget((async()=>{L4(await Lv(r),a,i)}))}function X4(r,e){return r.asyncQueue.enqueue((async()=>(function(i,a){const l=le(i);return l.persistence.runTransaction("Get named query","readonly",(c=>l.Ii.getNamedQuery(c,a)))})(await Mv(r),e)))}/**
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
 */function w1(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const RA=new Map;/**
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
 */const I1="firestore.googleapis.com",CA=!0;class NA{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=I1,this.ssl=CA}else this.host=e.host,this.ssl=e.ssl??CA;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kR;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<yM)throw new te(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_S("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=w1(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,a){return i.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fh{constructor(e,t,i,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new NA({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new NA(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new OO;switch(i.type){case"firstParty":return new UO(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new te(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=RA.get(t);i&&(ne("ComponentProvider","Removing Datastore"),RA.delete(t),i.terminate())})(this),Promise.resolve()}}function J4(r,e,t,i={}){var g;r=Ge(r,Fh);const a=nu(e),l=r._getSettings(),c={...l,emulatorOptions:r._getEmulatorOptions()},f=`${e}:${t}`;a&&(qA(`https://${f}`),HA("Firestore",!0)),l.host!==I1&&l.host!==f&&yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:f,ssl:a,emulatorOptions:i};if(!Ks(p,c)&&(r._setSettings(p),i.mockUserToken)){let v,T;if(typeof i.mockUserToken=="string")v=i.mockUserToken,T=nn.MOCK_USER;else{v=XN(i.mockUserToken,(g=r._app)==null?void 0:g.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new te(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new nn(w)}r._authCredentials=new kO(new pS(v,T))}}/**
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
 */let Cn=class A1{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new A1(this.firestore,e,this._query)}},at=class Lc{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lc(this.firestore,e,this._key)}toJSON(){return{type:Lc._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Dh(t,Lc._jsonSchema))return new Lc(e,i||null,new oe(ke.fromString(t.referencePath)))}};at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:Gt("string",at._jsonSchemaVersion),referencePath:Gt("string")};let Hs=class S1 extends Cn{constructor(e,t,i){super(e,t,lu(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new oe(e))}withConverter(e){return new S1(this.firestore,e,this._path)}};function R1(r,e,...t){if(r=Te(r),Ky("collection","path",e),r instanceof Fh){const i=ke.fromString(e,...t);return _I(i),new Hs(r,null,i)}{if(!(r instanceof at||r instanceof Hs))throw new te(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(ke.fromString(e,...t));return _I(i),new Hs(r.firestore,null,i)}}function Z4(r,e){if(r=Ge(r,Fh),Ky("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new te(G.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Cn(r,null,(function(i){return new Yr(ke.emptyPath(),i)})(e))}function mm(r,e,...t){if(r=Te(r),arguments.length===1&&(e=Gy.newId()),Ky("doc","path",e),r instanceof Fh){const i=ke.fromString(e,...t);return gI(i),new at(r,null,new oe(i))}{if(!(r instanceof at||r instanceof Hs))throw new te(G.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(ke.fromString(e,...t));return gI(i),new at(r.firestore,r instanceof Hs?r.converter:null,new oe(i))}}function C1(r,e){return r=Te(r),e=Te(e),(r instanceof at||r instanceof Hs)&&(e instanceof at||e instanceof Hs)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function N1(r,e){return r=Te(r),e=Te(e),r instanceof Cn&&e instanceof Cn&&r.firestore===e.firestore&&Oh(r._query,e._query)&&r.converter===e.converter}/**
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
 */const DA="AsyncQueue";class xA{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Tv(this,"async_queue_retry"),this._c=()=>{const i=qf();i&&ne(DA,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=qf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=qf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new fn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!oa(e))throw e;ne(DA,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,xt("INTERNAL UNHANDLED ERROR: ",VA(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=Av.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&he(47125,{Pc:VA(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function VA(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function uy(r){return(function(t,i){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of i)if(l in a&&typeof a[l]=="function")return!0;return!1})(r,["next","error","complete"])}class eL{constructor(){this._progressObserver={},this._taskCompletionResolver=new fn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,i){this._progressObserver={next:e,error:t,complete:i}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const tL=-1;let Pt=class extends Fh{constructor(e,t,i,a){super(e,t,i,a),this.type="firestore",this._queue=new xA,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xA(e),this._firestoreClient=void 0,await e}}};function En(r){if(r._terminated)throw new te(G.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||D1(r),r._firestoreClient}function D1(r){var i,a,l;const e=r._freezeSettings(),t=(function(f,p,g,v){return new bk(f,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,w1(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(r._databaseId,((i=r._app)==null?void 0:i.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new q4(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}})(r._componentsProvider))}function nL(r,e){yr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return x1(r,yh.provider,{build:i=>new y1(i,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function iL(r){yr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();x1(r,yh.provider,{build:t=>new z4(t,e.cacheSizeBytes)})}function x1(r,e,t){if((r=Ge(r,Pt))._firestoreClient||r._terminated)throw new te(G.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new te(G.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},D1(r)}function rL(r){if(r._initialized&&!r._terminated)throw new te(G.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new fn;return r._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(i){if(!dr.v())return Promise.resolve();const a=i+HR;await dr.delete(a)})(_v(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function sL(r){return(function(t){const i=new fn;return t.asyncQueue.enqueueAndForget((async()=>S4(await Lv(t),i))),i.promise})(En(r=Ge(r,Pt)))}function aL(r){return G4(En(r=Ge(r,Pt)))}function oL(r){return K4(En(r=Ge(r,Pt)))}function lL(r,e){const t=En(r=Ge(r,Pt)),i=new eL;return $4(t,r._databaseId,e,i),i}function uL(r,e){return X4(En(r=Ge(r,Pt)),e).then((t=>t?new Cn(r,null,t.query):null))}/**
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
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(It.fromBase64String(e))}catch(t){throw new te(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yn(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Dh(e,yn._jsonSchema))return yn.fromBase64String(e.bytes)}}yn._jsonSchemaVersion="firestore/bytes/1.0",yn._jsonSchema={type:Gt("string",yn._jsonSchemaVersion),bytes:Gt("string")};/**
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
 */let ia=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */class Vi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vi._jsonSchemaVersion}}static fromJSON(e){if(Dh(e,Vi._jsonSchema))return new Vi(e.latitude,e.longitude)}}Vi._jsonSchemaVersion="firestore/geoPoint/1.0",Vi._jsonSchema={type:Gt("string",Vi._jsonSchemaVersion),latitude:Gt("number"),longitude:Gt("number")};/**
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
 */class mr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:mr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Dh(e,mr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new mr(e.vectorValues);throw new te(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mr._jsonSchemaVersion="firestore/vectorValue/1.0",mr._jsonSchema={type:Gt("string",mr._jsonSchemaVersion),vectorValues:Gt("object")};/**
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
 */const cL=/^__.*__$/;class hL{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new $r(e,this.data,this.fieldMask,t,this.fieldTransforms):new uu(e,this.data,t,this.fieldTransforms)}}class V1{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new $r(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function P1(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he(40011,{Ac:r})}}class Qm{constructor(e,t,i,a,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Qm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:t,fc:!1});return i.gc(e),i}yc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),i=this.Vc({path:t,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return pm(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(P1(this.Ac)&&cL.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class dL{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||zh(e)}Cc(e,t,i,a=!1){return new Qm({Ac:e,methodName:t,Dc:i,path:yt.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function To(r){const e=r._freezeSettings(),t=zh(r._databaseId);return new dL(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Ym(r,e,t,i,a,l={}){const c=r.Cc(l.merge||l.mergeFields?2:0,e,t,a);Hv("Data must be an object, but it was:",c,i);const f=M1(i,c);let p,g;if(l.merge)p=new Un(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const w=cy(e,T,t);if(!c.contains(w))throw new te(G.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);U1(v,w)||v.push(w)}p=new Un(v),g=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,g=c.fieldTransforms;return new hL(new dn(f),p,g)}class jh extends Eo{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof jh}}function O1(r,e,t){return new Qm({Ac:3,Dc:e.settings.Dc,methodName:r._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Uv extends Eo{_toFieldTransform(e){return new Mh(e.path,new Kl)}isEqual(e){return e instanceof Uv}}class zv extends Eo{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=O1(this,e,!0),i=this.vc.map((l=>bo(l,t))),a=new co(i);return new Mh(e.path,a)}isEqual(e){return e instanceof zv&&Ks(this.vc,e.vc)}}class Bv extends Eo{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=O1(this,e,!0),i=this.vc.map((l=>bo(l,t))),a=new ho(i);return new Mh(e.path,a)}isEqual(e){return e instanceof Bv&&Ks(this.vc,e.vc)}}class Fv extends Eo{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new Ql(e.serializer,oR(e.serializer,this.Fc));return new Mh(e.path,t)}isEqual(e){return e instanceof Fv&&this.Fc===e.Fc}}function jv(r,e,t,i){const a=r.Cc(1,e,t);Hv("Data must be an object, but it was:",a,i);const l=[],c=dn.empty();la(i,((p,g)=>{const v=Gv(e,p,t);g=Te(g);const T=a.yc(v);if(g instanceof jh)l.push(v);else{const w=bo(g,T);w!=null&&(l.push(v),c.set(v,w))}}));const f=new Un(l);return new V1(c,f,a.fieldTransforms)}function qv(r,e,t,i,a,l){const c=r.Cc(1,e,t),f=[cy(e,i,t)],p=[a];if(l.length%2!=0)throw new te(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)f.push(cy(e,l[w])),p.push(l[w+1]);const g=[],v=dn.empty();for(let w=f.length-1;w>=0;--w)if(!U1(g,f[w])){const D=f[w];let Y=p[w];Y=Te(Y);const O=c.yc(D);if(Y instanceof jh)g.push(D);else{const H=bo(Y,O);H!=null&&(g.push(D),v.set(D,H))}}const T=new Un(g);return new V1(v,T,c.fieldTransforms)}function k1(r,e,t,i=!1){return bo(t,r.Cc(i?4:3,e))}function bo(r,e){if(L1(r=Te(r)))return Hv("Unsupported field value:",e,r),M1(r,e);if(r instanceof Eo)return(function(i,a){if(!P1(a.Ac))throw a.Sc(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(i,a){const l=[];let c=0;for(const f of i){let p=bo(f,a.wc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(r,e)}return(function(i,a){if((i=Te(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return oR(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Ye.fromDate(i);return{timestampValue:Yl(a.serializer,l)}}if(i instanceof Ye){const l=new Ye(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Yl(a.serializer,l)}}if(i instanceof Vi)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof yn)return{bytesValue:vR(a.serializer,i._byteString)};if(i instanceof at){const l=a.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw a.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:cv(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof mr)return(function(c,f){return{mapValue:{fields:{[Zy]:{stringValue:ev},[ql]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw f.Sc("VectorValues must only contain numeric values.");return rv(f.serializer,g)}))}}}}}})(i,a);throw a.Sc(`Unsupported field value: ${Dm(i)}`)})(r,e)}function M1(r,e){const t={};return MS(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):la(r,((i,a)=>{const l=bo(a,e.mc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function L1(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ye||r instanceof Vi||r instanceof yn||r instanceof at||r instanceof Eo||r instanceof mr)}function Hv(r,e,t){if(!L1(t)||!yS(t)){const i=Dm(t);throw i==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+i)}}function cy(r,e,t){if((e=Te(e))instanceof ia)return e._internalPath;if(typeof e=="string")return Gv(r,e);throw pm("Field path arguments must be of type string or ",r,!1,void 0,t)}const fL=new RegExp("[~\\*/\\[\\]]");function Gv(r,e,t){if(e.search(fL)>=0)throw pm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new ia(...e.split("."))._internalPath}catch{throw pm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function pm(r,e,t,i,a){const l=i&&!i.isEmpty(),c=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${a}`),p+=")"),new te(G.INVALID_ARGUMENT,f+r+p)}function U1(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class vh{constructor(e,t,i,a,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mL extends vh{data(){return super.data()}}function Wm(r,e){return typeof e=="string"?Gv(r,e):e instanceof ia?e._internalPath:e._delegate._internalPath}/**
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
 */function z1(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new te(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kv{}class qh extends Kv{}function ks(r,e,...t){let i=[];e instanceof Kv&&i.push(e),i=i.concat(t),(function(l){const c=l.filter((p=>p instanceof Qv)).length,f=l.filter((p=>p instanceof $m)).length;if(c>1||c>0&&f>0)throw new te(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const a of i)r=a._apply(r);return r}class $m extends qh{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new $m(e,t,i)}_apply(e){const t=this._parse(e);return F1(e._query,t),new Cn(e.firestore,e.converter,$_(e._query,t))}_parse(e){const t=To(e.firestore);return(function(l,c,f,p,g,v,T){let w;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new te(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){OA(T,v);const Y=[];for(const O of T)Y.push(PA(p,l,O));w={arrayValue:{values:Y}}}else w=PA(p,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||OA(T,v),w=k1(f,c,T,v==="in"||v==="not-in");return Ue.create(g,v,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function pL(r,e,t){const i=e,a=Wm("where",r);return $m._create(a,i,t)}class Qv extends Kv{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Qv(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Ze.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const f=l.getFlattenedFilters();for(const p of f)F1(c,p),c=$_(c,p)})(e._query,t),new Cn(e.firestore,e.converter,$_(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yv extends qh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Yv(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new te(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new te(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new mh(l,c)})(e._query,this._field,this._direction);return new Cn(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new Yr(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function gL(r,e="asc"){const t=e,i=Wm("orderBy",r);return Yv._create(i,t)}class Xm extends qh{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new Xm(e,t,i)}_apply(e){return new Cn(e.firestore,e.converter,sm(e._query,this._limit,this._limitType))}}function _L(r){return vS("limit",r),Xm._create("limit",r,"F")}function yL(r){return vS("limitToLast",r),Xm._create("limitToLast",r,"L")}class Jm extends qh{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new Jm(e,t,i)}_apply(e){const t=B1(e,this.type,this._docOrFields,this._inclusive);return new Cn(e.firestore,e.converter,(function(a,l){return new Yr(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,l,a.endAt)})(e._query,t))}}function vL(...r){return Jm._create("startAt",r,!0)}function EL(...r){return Jm._create("startAfter",r,!1)}class Zm extends qh{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new Zm(e,t,i)}_apply(e){const t=B1(e,this.type,this._docOrFields,this._inclusive);return new Cn(e.firestore,e.converter,(function(a,l){return new Yr(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,l)})(e._query,t))}}function TL(...r){return Zm._create("endBefore",r,!1)}function bL(...r){return Zm._create("endAt",r,!0)}function B1(r,e,t,i){if(t[0]=Te(t[0]),t[0]instanceof vh)return(function(l,c,f,p,g){if(!p)throw new te(G.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${f}().`);const v=[];for(const T of xl(l))if(T.field.isKeyField())v.push(lo(c,p.key));else{const w=p.data.field(T.field);if(km(w))throw new te(G.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+T.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const D=T.field.canonicalString();throw new te(G.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${D}' (used as the orderBy) does not exist.`)}v.push(w)}return new ea(v,g)})(r._query,r.firestore._databaseId,e,t[0]._document,i);{const a=To(r.firestore);return(function(c,f,p,g,v,T){const w=c.explicitOrderBy;if(v.length>w.length)throw new te(G.INVALID_ARGUMENT,`Too many arguments provided to ${g}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const D=[];for(let Y=0;Y<v.length;Y++){const O=v[Y];if(w[Y].field.isKeyField()){if(typeof O!="string")throw new te(G.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${g}(), but got a ${typeof O}`);if(!nv(c)&&O.indexOf("/")!==-1)throw new te(G.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${g}() must be a plain document ID, but '${O}' contains a slash.`);const H=c.path.child(ke.fromString(O));if(!oe.isDocumentKey(H))throw new te(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${g}() must result in a valid document path, but '${H}' is not because it contains an odd number of segments.`);const J=new oe(H);D.push(lo(f,J))}else{const H=k1(p,g,O);D.push(H)}}return new ea(D,T)})(r._query,r.firestore._databaseId,a,e,t,i)}}function PA(r,e,t){if(typeof(t=Te(t))=="string"){if(t==="")throw new te(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nv(e)&&t.indexOf("/")!==-1)throw new te(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(ke.fromString(t));if(!oe.isDocumentKey(i))throw new te(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return lo(r,new oe(i))}if(t instanceof at)return lo(r,t._key);throw new te(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dm(t)}.`)}function OA(r,e){if(!Array.isArray(r)||r.length===0)throw new te(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function F1(r,e){const t=(function(a,l){for(const c of a)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new te(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Wv{convertValue(e,t="none"){switch(Js(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw he(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return la(e,((a,l)=>{i[a]=this.convertValue(l,t)})),i}convertVectorValue(e){var i,a,l;const t=(l=(a=(i=e.fields)==null?void 0:i[ql].arrayValue)==null?void 0:a.values)==null?void 0:l.map((c=>gt(c.doubleValue)));return new mr(t)}convertGeoPoint(e){return new Vi(gt(e.latitude),gt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Mm(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(hh(e));default:return null}}convertTimestamp(e){const t=Hr(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ke.fromString(e);pe(DR(i),9688,{name:e});const a=new Xs(i.get(1),i.get(3)),l=new oe(i.popFirst(5));return a.isEqual(t)||xt(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function ep(r,e,t){let i;return i=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,i}class wL extends Wv{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,t)}}class Za{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let pi=class j1 extends vh{constructor(e,t,i,a,l,c){super(e,t,i,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Jc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Wm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=j1._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};pi._jsonSchemaVersion="firestore/documentSnapshot/1.0",pi._jsonSchema={type:Gt("string",pi._jsonSchemaVersion),bundleSource:Gt("string","DocumentSnapshot"),bundleName:Gt("string"),bundle:Gt("string")};let Jc=class extends pi{data(e={}){return super.data(e)}},Pi=class q1{constructor(e,t,i,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Za(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Jc(this._firestore,this._userDataWriter,i.key,i,new Za(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((f=>{const p=new Jc(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Za(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const p=new Jc(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Za(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return f.type!==0&&(g=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),v=c.indexOf(f.doc.key)),{type:IL(f.type),doc:p,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=q1._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Gy.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function IL(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he(61501,{type:r})}}function H1(r,e){return r instanceof pi&&e instanceof pi?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof Pi&&e instanceof Pi&&r._firestore===e._firestore&&N1(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
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
 */function AL(r){r=Ge(r,at);const e=Ge(r.firestore,Pt);return T1(En(e),r._key).then((t=>$v(e,r,t)))}Pi._jsonSchemaVersion="firestore/querySnapshot/1.0",Pi._jsonSchema={type:Gt("string",Pi._jsonSchemaVersion),bundleSource:Gt("string","QuerySnapshot"),bundleName:Gt("string"),bundle:Gt("string")};class wo extends Wv{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,t)}}function SL(r){r=Ge(r,at);const e=Ge(r.firestore,Pt),t=En(e),i=new wo(e);return Q4(t,r._key).then((a=>new pi(e,i,r._key,a,new Za(a!==null&&a.hasLocalMutations,!0),r.converter)))}function RL(r){r=Ge(r,at);const e=Ge(r.firestore,Pt);return T1(En(e),r._key,{source:"server"}).then((t=>$v(e,r,t)))}function CL(r){r=Ge(r,Cn);const e=Ge(r.firestore,Pt),t=En(e),i=new wo(e);return z1(r._query),b1(t,r._query).then((a=>new Pi(e,i,r,a)))}function NL(r){r=Ge(r,Cn);const e=Ge(r.firestore,Pt),t=En(e),i=new wo(e);return Y4(t,r._query).then((a=>new Pi(e,i,r,a)))}function DL(r){r=Ge(r,Cn);const e=Ge(r.firestore,Pt),t=En(e),i=new wo(e);return b1(t,r._query,{source:"server"}).then((a=>new Pi(e,i,r,a)))}function kA(r,e,t){r=Ge(r,at);const i=Ge(r.firestore,Pt),a=ep(r.converter,e,t);return Hh(i,[Ym(To(i),"setDoc",r._key,a,r.converter!==null,t).toMutation(r._key,vt.none())])}function MA(r,e,t,...i){r=Ge(r,at);const a=Ge(r.firestore,Pt),l=To(a);let c;return c=typeof(e=Te(e))=="string"||e instanceof ia?qv(l,"updateDoc",r._key,e,t,i):jv(l,"updateDoc",r._key,e),Hh(a,[c.toMutation(r._key,vt.exists(!0))])}function xL(r){return Hh(Ge(r.firestore,Pt),[new cu(r._key,vt.none())])}function VL(r,e){const t=Ge(r.firestore,Pt),i=mm(r),a=ep(r.converter,e);return Hh(t,[Ym(To(r.firestore),"addDoc",i._key,a,r.converter!==null,{}).toMutation(i._key,vt.exists(!1))]).then((()=>i))}function G1(r,...e){var p,g,v;r=Te(r);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||uy(e[i])||(t=e[i++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(uy(e[i])){const T=e[i];e[i]=(p=T.next)==null?void 0:p.bind(T),e[i+1]=(g=T.error)==null?void 0:g.bind(T),e[i+2]=(v=T.complete)==null?void 0:v.bind(T)}let l,c,f;if(r instanceof at)c=Ge(r.firestore,Pt),f=lu(r._key.path),l={next:T=>{e[i]&&e[i]($v(c,r,T))},error:e[i+1],complete:e[i+2]};else{const T=Ge(r,Cn);c=Ge(T.firestore,Pt),f=T._query;const w=new wo(c);l={next:D=>{e[i]&&e[i](new Pi(c,w,T,D))},error:e[i+1],complete:e[i+2]},z1(r._query)}return(function(w,D,Y,O){const H=new Gm(O),J=new Nv(D,H,Y);return w.asyncQueue.enqueueAndForget((async()=>Sv(await eu(w),J))),()=>{H.Nu(),w.asyncQueue.enqueueAndForget((async()=>Rv(await eu(w),J)))}})(En(c),f,a,l)}function PL(r,e){return W4(En(r=Ge(r,Pt)),uy(e)?e:{next:e})}function Hh(r,e){return(function(i,a){const l=new fn;return i.asyncQueue.enqueueAndForget((async()=>b4(await Lv(i),a,l))),l.promise})(En(r),e)}function $v(r,e,t){const i=t.docs.get(e._key),a=new wo(r);return new pi(r,a,e._key,i,new Za(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const OL={maxAttempts:5};/**
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
 */let kL=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=To(e)}set(e,t,i){this._verifyNotCommitted();const a=zs(e,this._firestore),l=ep(a.converter,t,i),c=Ym(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,i);return this._mutations.push(c.toMutation(a._key,vt.none())),this}update(e,t,i,...a){this._verifyNotCommitted();const l=zs(e,this._firestore);let c;return c=typeof(t=Te(t))=="string"||t instanceof ia?qv(this._dataReader,"WriteBatch.update",l._key,t,i,a):jv(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,vt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=zs(e,this._firestore);return this._mutations=this._mutations.concat(new cu(t._key,vt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(G.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function zs(r,e){if((r=Te(r)).firestore!==e)throw new te(G.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */class ML{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=To(e)}get(e){const t=zs(e,this._firestore),i=new wL(this._firestore);return this._transaction.lookup([t._key]).then((a=>{if(!a||a.length!==1)return he(24041);const l=a[0];if(l.isFoundDocument())return new vh(this._firestore,i,l.key,l,t.converter);if(l.isNoDocument())return new vh(this._firestore,i,t._key,null,t.converter);throw he(18433,{doc:l})}))}set(e,t,i){const a=zs(e,this._firestore),l=ep(a.converter,t,i),c=Ym(this._dataReader,"Transaction.set",a._key,l,a.converter!==null,i);return this._transaction.set(a._key,c),this}update(e,t,i,...a){const l=zs(e,this._firestore);let c;return c=typeof(t=Te(t))=="string"||t instanceof ia?qv(this._dataReader,"Transaction.update",l._key,t,i,a):jv(this._dataReader,"Transaction.update",l._key,t),this._transaction.update(l._key,c),this}delete(e){const t=zs(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */let LL=class extends ML{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=zs(e,this._firestore),i=new wo(this._firestore);return super.get(e).then((a=>new pi(this._firestore,i,t._key,a._document,new Za(!1,!1),t.converter)))}};function UL(r,e,t){r=Ge(r,Pt);const i={...OL,...t};return(function(l){if(l.maxAttempts<1)throw new te(G.INVALID_ARGUMENT,"Max attempts must be at least 1")})(i),(function(l,c,f){const p=new fn;return l.asyncQueue.enqueueAndForget((async()=>{const g=await H4(l);new j4(l.asyncQueue,g,f,c,p).ju()})),p.promise})(En(r),(a=>e(new LL(r,a))),i)}/**
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
 */function zL(){return new jh("deleteField")}function BL(){return new Uv("serverTimestamp")}function FL(...r){return new zv("arrayUnion",r)}function jL(...r){return new Bv("arrayRemove",r)}function qL(r){return new Fv("increment",r)}(function(e,t=!0){(function(a){ou=a})(ra),Ws(new pr("firestore",((i,{instanceIdentifier:a,options:l})=>{const c=i.getProvider("app").getImmediate(),f=new Pt(new MO(i.getProvider("auth-internal")),new zO(c,i.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new te(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xs(g.options.projectId,v)})(c,a),c);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),xi(dI,fI,e),xi(dI,fI,"esm2020")})();const HL="@firebase/firestore-compat",GL="0.4.3";/**
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
 */function LA(){if(typeof Uint8Array>"u")throw new te("unimplemented","Uint8Arrays are not available in this environment.")}function UA(){if(!Ek())throw new te("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Eh{constructor(e){this._delegate=e}static fromBase64String(e){return UA(),new Eh(yn.fromBase64String(e))}static fromUint8Array(e){return LA(),new Eh(yn.fromUint8Array(e))}toBase64(){return UA(),this._delegate.toBase64()}toUint8Array(){return LA(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function hy(r){return KL(r,["next","error","complete"])}function KL(r,e){if(typeof r!="object"||r===null)return!1;const t=r;for(const i of e)if(i in t&&typeof t[i]=="function")return!0;return!1}/**
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
 */class QL{enableIndexedDbPersistence(e,t){return nL(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return iL(e._delegate)}clearIndexedDbPersistence(e){return rL(e._delegate)}}class K1{constructor(e,t,i){this._delegate=t,this._persistenceProvider=i,this.INTERNAL={delete:()=>this.terminate()},e instanceof Xs||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&yr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e={...t,...e},delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,i={}){J4(this._delegate,e,t,i)}enableNetwork(){return aL(this._delegate)}disableNetwork(){return oL(this._delegate)}enablePersistence(e){let t=!1,i=!1;return e&&(t=!!e.synchronizeTabs,i=!!e.experimentalForceOwningTab,_S("synchronizeTabs",t,"experimentalForceOwningTab",i)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,i)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return sL(this._delegate)}onSnapshotsInSync(e){return PL(this._delegate,e)}get app(){if(!this._appCompat)throw new te("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new tu(this,R1(this._delegate,e))}catch(t){throw An(t,"collection()","Firestore.collection()")}}doc(e){try{return new mi(this,mm(this._delegate,e))}catch(t){throw An(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new In(this,Z4(this._delegate,e))}catch(t){throw An(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return UL(this._delegate,t=>e(new Q1(this,t)))}batch(){return En(this._delegate),new Y1(new kL(this._delegate,e=>Hh(this._delegate,e)))}loadBundle(e){return lL(this._delegate,e)}namedQuery(e){return uL(this._delegate,e).then(t=>t?new In(this,t):null)}}class tp extends Wv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Eh(new yn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return mi.forKey(t,this.firestore,null)}}function YL(r){VO(r)}class Q1{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new tp(e)}get(e){const t=eo(e);return this._delegate.get(t).then(i=>new Th(this._firestore,new pi(this._firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,t.converter)))}set(e,t,i){const a=eo(e);return i?(Xv("Transaction.set",i),this._delegate.set(a,t,i)):this._delegate.set(a,t),this}update(e,t,i,...a){const l=eo(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,i,...a),this}delete(e){const t=eo(e);return this._delegate.delete(t),this}}class Y1{constructor(e){this._delegate=e}set(e,t,i){const a=eo(e);return i?(Xv("WriteBatch.set",i),this._delegate.set(a,t,i)):this._delegate.set(a,t),this}update(e,t,i,...a){const l=eo(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,i,...a),this}delete(e){const t=eo(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class _o{constructor(e,t,i){this._firestore=e,this._userDataWriter=t,this._delegate=i}fromFirestore(e,t){const i=new Jc(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new bh(this._firestore,i),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const i=_o.INSTANCES;let a=i.get(e);a||(a=new WeakMap,i.set(e,a));let l=a.get(t);return l||(l=new _o(e,new tp(e),t),a.set(t,l)),l}}_o.INSTANCES=new WeakMap;class mi{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new tp(e)}static forPath(e,t,i){if(e.length%2!==0)throw new te("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new mi(t,new at(t._delegate,i,new oe(e)))}static forKey(e,t,i){return new mi(t,new at(t._delegate,i,e))}get id(){return this._delegate.id}get parent(){return new tu(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new tu(this.firestore,R1(this._delegate,e))}catch(t){throw An(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Te(e),e instanceof at?C1(this._delegate,e):!1}set(e,t){t=Xv("DocumentReference.set",t);try{return t?kA(this._delegate,e,t):kA(this._delegate,e)}catch(i){throw An(i,"setDoc()","DocumentReference.set()")}}update(e,t,...i){try{return arguments.length===1?MA(this._delegate,e):MA(this._delegate,e,t,...i)}catch(a){throw An(a,"updateDoc()","DocumentReference.update()")}}delete(){return xL(this._delegate)}onSnapshot(...e){const t=W1(e),i=$1(e,a=>new Th(this.firestore,new pi(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return G1(this._delegate,t,i)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=SL(this._delegate):(e==null?void 0:e.source)==="server"?t=RL(this._delegate):t=AL(this._delegate),t.then(i=>new Th(this.firestore,new pi(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)))}withConverter(e){return new mi(this.firestore,e?this._delegate.withConverter(_o.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function An(r,e,t){return r.message=r.message.replace(e,t),r}function W1(r){for(const e of r)if(typeof e=="object"&&!hy(e))return e;return{}}function $1(r,e){var i,a;let t;return hy(r[0])?t=r[0]:hy(r[1])?t=r[1]:typeof r[0]=="function"?t={next:r[0],error:r[1],complete:r[2]}:t={next:r[1],error:r[2],complete:r[3]},{next:l=>{t.next&&t.next(e(l))},error:(i=t.error)==null?void 0:i.bind(t),complete:(a=t.complete)==null?void 0:a.bind(t)}}class Th{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new mi(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return H1(this._delegate,e._delegate)}}class bh extends Th{data(e){const t=this._delegate.data(e);return this._delegate._converter||PO(t!==void 0,"Document in a QueryDocumentSnapshot should exist"),t}}class In{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new tp(e)}where(e,t,i){try{return new In(this.firestore,ks(this._delegate,pL(e,t,i)))}catch(a){throw An(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new In(this.firestore,ks(this._delegate,gL(e,t)))}catch(i){throw An(i,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new In(this.firestore,ks(this._delegate,_L(e)))}catch(t){throw An(t,"limit()","Query.limit()")}}limitToLast(e){try{return new In(this.firestore,ks(this._delegate,yL(e)))}catch(t){throw An(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new In(this.firestore,ks(this._delegate,vL(...e)))}catch(t){throw An(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new In(this.firestore,ks(this._delegate,EL(...e)))}catch(t){throw An(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new In(this.firestore,ks(this._delegate,TL(...e)))}catch(t){throw An(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new In(this.firestore,ks(this._delegate,bL(...e)))}catch(t){throw An(t,"endAt()","Query.endAt()")}}isEqual(e){return N1(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=NL(this._delegate):(e==null?void 0:e.source)==="server"?t=DL(this._delegate):t=CL(this._delegate),t.then(i=>new dy(this.firestore,new Pi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)))}onSnapshot(...e){const t=W1(e),i=$1(e,a=>new dy(this.firestore,new Pi(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return G1(this._delegate,t,i)}withConverter(e){return new In(this.firestore,e?this._delegate.withConverter(_o.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class WL{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new bh(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class dy{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new In(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new bh(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new WL(this._firestore,t))}forEach(e,t){this._delegate.forEach(i=>{e.call(t,new bh(this._firestore,i))})}isEqual(e){return H1(this._delegate,e._delegate)}}class tu extends In{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new mi(this.firestore,e):null}doc(e){try{return e===void 0?new mi(this.firestore,mm(this._delegate)):new mi(this.firestore,mm(this._delegate,e))}catch(t){throw An(t,"doc()","CollectionReference.doc()")}}add(e){return VL(this._delegate,e).then(t=>new mi(this.firestore,t))}isEqual(e){return C1(this._delegate,e._delegate)}withConverter(e){return new tu(this.firestore,e?this._delegate.withConverter(_o.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function eo(r){return Ge(r,at)}/**
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
 */class Jv{constructor(...e){this._delegate=new ia(...e)}static documentId(){return new Jv(yt.keyField().canonicalString())}isEqual(e){return e=Te(e),e instanceof ia?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class $a{static serverTimestamp(){const e=BL();return e._methodName="FieldValue.serverTimestamp",new $a(e)}static delete(){const e=zL();return e._methodName="FieldValue.delete",new $a(e)}static arrayUnion(...e){const t=FL(...e);return t._methodName="FieldValue.arrayUnion",new $a(t)}static arrayRemove(...e){const t=jL(...e);return t._methodName="FieldValue.arrayRemove",new $a(t)}static increment(e){const t=qL(e);return t._methodName="FieldValue.increment",new $a(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const $L={Firestore:K1,GeoPoint:Vi,Timestamp:Ye,Blob:Eh,Transaction:Q1,WriteBatch:Y1,DocumentReference:mi,DocumentSnapshot:Th,Query:In,QueryDocumentSnapshot:bh,QuerySnapshot:dy,CollectionReference:tu,FieldPath:Jv,FieldValue:$a,setLogLevel:YL,CACHE_SIZE_UNLIMITED:tL};function XL(r,e){r.INTERNAL.registerComponent(new pr("firestore-compat",t=>{const i=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(i,a)},"PUBLIC").setServiceProps({...$L}))}/**
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
 */function JL(r){XL(r,(e,t)=>new K1(e,t,new QL)),r.registerVersion(HL,GL)}JL(gr);const ZL={apiKey:"AIzaSyC614bGqnYf4Q-weTNemzWENTpa8DjGeHw",authDomain:"mzj-agenda.firebaseapp.com",projectId:"mzj-agenda",storageBucket:"mzj-agenda.firebasestorage.app",messagingSenderId:"834700407721",appId:"1:834700407721:web:75c17665d4f032fd65cab8"},eU=["المستودع : المخزون المتاح","المستودع : سيارات بها ملاحظات","المستودع : مباع تحت التسليم","فرع 1 الصالة : المخزون المتاح","فرع 1 الصالة : سيارات بها ملاحظات","فرع 1 الصالة : مباع تحت التسليم","فرع 2 الملتقى : المخزون المتاح","فرع 2 الملتقى : سيارات بها ملاحظات","فرع 2 الملتقى : مباع تحت التسليم","فرع 3 القادسية : المخزون المتاح","فرع 3 القادسية : سيارات بها ملاحظات","فرع 3 القادسية : مباع تحت التسليم"];gr.apps.length||gr.initializeApp(ZL);const Zv=gr.auth(),fi=gr.firestore(),to=gr.firestore.FieldValue,tU=()=>{const[r,e]=ht.useState(""),[t,i]=ht.useState(""),[a,l]=ht.useState(""),[c,f]=ht.useState(!1),p=async g=>{g.preventDefault(),f(!0),l("");try{await Zv.signInWithEmailAndPassword(r,t)}catch{l("خطأ في تسجيل الدخول. تأكد من البيانات.")}finally{f(!1)}};return M.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen p-6 bg-stone-100",children:M.jsxs("div",{className:"w-full max-w-sm bg-white rounded-3xl p-8 shadow-xl border border-stone-200",children:[M.jsxs("div",{className:"mb-8 text-center",children:[M.jsx("div",{className:"w-16 h-16 bg-stone-800 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-4",children:"MZJ"}),M.jsx("h1",{className:"text-2xl font-black text-stone-800",children:"Workspace Mobile"}),M.jsx("p",{className:"text-stone-500 mt-2",children:"نظام إدارة طلبات التصوير والنقل"})]}),M.jsxs("form",{onSubmit:p,className:"space-y-4",children:[M.jsxs("div",{children:[M.jsx("label",{className:"block text-sm font-bold text-stone-700 mb-1",children:"البريد الإلكتروني"}),M.jsx("input",{type:"email",value:r,onChange:g=>e(g.target.value),className:"w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-800 focus:outline-none transition-all",placeholder:"example@mzjcars.com"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-sm font-bold text-stone-700 mb-1",children:"كلمة المرور"}),M.jsx("input",{type:"password",value:t,onChange:g=>i(g.target.value),className:"w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-800 focus:outline-none transition-all",placeholder:"••••••••"})]}),a&&M.jsx("div",{className:"p-3 bg-red-50 text-red-600 rounded-xl text-sm font-bold",children:a}),M.jsx("button",{type:"submit",disabled:c,className:"w-full py-4 bg-stone-800 text-white rounded-xl font-bold shadow-lg hover:bg-stone-900 transition-all disabled:opacity-50",children:c?"جاري الدخول...":"تسجيل الدخول"})]})]})})},Gs=r=>String(r||"").trim().toUpperCase().replace(/\s+/g,""),gm=r=>Gs(r).replace(/^0+/,""),nU=(r,e)=>{const t=Gs(r),i=Gs(e);if(!t||!i)return!1;if(t===i)return!0;const a=gm(t),l=gm(i);return!a||!l?!1:a===l||t.endsWith(l)||i.endsWith(a)},X1=r=>{if(!r)return"—";try{return(r.toDate?r.toDate():new Date(r)).toLocaleString("ar-EG",{timeZone:"Asia/Riyadh",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).replace(",","")}catch{return"—"}},iU=({user:r,profile:e})=>{const[t,i]=ht.useState([{kind:"shoot",vin:"",car:"",variant:"",extColor:"",intColor:"",modelYear:"",location:"",shootPlace:"",toLocation:"",note:""}]),[a,l]=ht.useState([]),[c,f]=ht.useState(!1),[p,g]=ht.useState(new Date().toISOString().split("T")[0]);ht.useEffect(()=>{const O=fi.collection("mzj_admin_state").doc("v1").onSnapshot(H=>{const J=H.data();J&&J.stock&&l(J.stock)});return()=>O()},[]);const v=O=>{const H=Gs(t[O].vin||""),J=gm(H),re=a.find(se=>Gs(se.vin)===H||gm(se.vin)===J);if(re){const se=[...t];se[O]={...se[O],car:re.car,variant:re.variant,extColor:re.extColor,intColor:re.intColor,modelYear:re.modelYear,location:re.location,fromLocation:re.location},i(se)}},T=(O,H,J)=>{const re=[...t];re[O]={...re[O],[H]:J},i(re)},w=()=>{i([...t,{kind:"shoot",vin:"",note:""}])},D=O=>{t.length===1?i([{kind:"shoot",vin:"",car:"",note:""}]):i(t.filter((H,J)=>J!==O))},Y=async()=>{const O=t.filter(J=>J.vin&&J.vin.length>3);if(!O.length){alert("الرجاء إدخال VIN صحيح.");return}if(O.some(J=>J.kind==="shoot"?!J.shootPlace:!J.toLocation)){alert("الرجاء اختيار الوجهة لكل سيارة.");return}f(!0);try{const J=O.every(_e=>_e.kind==="shoot")?"shoot":O.every(_e=>_e.kind==="move")?"move":"mixed",re=await fi.collection("requests").add({kind:J,status:"تحت المتابعة",createdAt:to.serverTimestamp(),updatedAt:to.serverTimestamp(),createdByUid:r.uid,createdByEmail:r.email,createdByName:(e==null?void 0:e.name)||r.email,total:O.length,shootDate:J==="move"?"":p,vins:O.map(_e=>_e.vin)}),se=fi.batch();O.forEach(_e=>{const we=Gs(_e.vin),me=re.collection("rows").doc(we);se.set(me,{..._e,vin:we,steps:{},createdAt:to.serverTimestamp(),updatedAt:to.serverTimestamp()})}),await se.commit(),alert("تم إرسال الطلب بنجاح ✅"),i([{kind:"shoot",vin:"",car:""}])}catch(J){console.error(J),alert("حدث خطأ أثناء الإرسال.")}finally{f(!1)}};return M.jsx("div",{className:"space-y-6",children:M.jsxs("div",{className:"bg-white rounded-3xl p-6 border border-stone-200 shadow-sm",children:[M.jsxs("div",{className:"flex justify-between items-center mb-6",children:[M.jsx("h2",{className:"text-xl font-black text-stone-800",children:"إنشاء طلب جديد"}),M.jsx("button",{onClick:w,className:"w-10 h-10 bg-stone-100 text-stone-800 rounded-xl flex items-center justify-center shadow-sm",children:M.jsx("i",{className:"fa-solid fa-plus"})})]}),M.jsxs("div",{className:"space-y-4 mb-6",children:[M.jsx("label",{className:"block text-xs font-bold text-stone-500 uppercase",children:"تاريخ التصوير (إن وجد)"}),M.jsx("input",{type:"date",value:p,onChange:O=>g(O.target.value),className:"w-full px-4 py-3 bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-800"})]}),M.jsx("div",{className:"space-y-4",children:t.map((O,H)=>M.jsxs("div",{className:"relative bg-stone-50 rounded-2xl p-4 border border-stone-200 space-y-3",children:[M.jsx("button",{onClick:()=>D(H),className:"absolute top-3 left-3 w-8 h-8 bg-red-50 text-red-500 rounded-lg flex items-center justify-center text-sm",children:M.jsx("i",{className:"fa-solid fa-trash-can"})}),M.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[M.jsxs("div",{className:"col-span-1",children:[M.jsx("label",{className:"block text-[10px] font-bold text-stone-400 mb-1",children:"النوع"}),M.jsxs("select",{value:O.kind,onChange:J=>T(H,"kind",J.target.value),className:"w-full text-xs px-2 py-2 bg-white rounded-lg border border-stone-200 outline-none",children:[M.jsx("option",{value:"shoot",children:"تصوير"}),M.jsx("option",{value:"move",children:"نقل"})]})]}),M.jsxs("div",{className:"col-span-1",children:[M.jsx("label",{className:"block text-[10px] font-bold text-stone-400 mb-1",children:"VIN (الشاصي)"}),M.jsx("input",{value:O.vin,onChange:J=>T(H,"vin",J.target.value),onBlur:()=>v(H),className:"w-full text-xs px-2 py-2 bg-white rounded-lg border border-stone-200 outline-none font-mono",placeholder:"رقم الشاصي"})]})]}),O.car&&M.jsxs("div",{className:"p-2 bg-white rounded-lg border border-stone-100",children:[M.jsx("p",{className:"text-[11px] font-bold text-stone-800",children:O.car}),M.jsxs("p",{className:"text-[10px] text-stone-500",children:[O.variant," | ",O.modelYear]}),M.jsxs("p",{className:"text-[10px] text-stone-500 mt-1",children:[M.jsx("i",{className:"fa-solid fa-location-dot mr-1"})," ",O.location]})]}),M.jsxs("div",{className:"space-y-1",children:[M.jsx("label",{className:"block text-[10px] font-bold text-stone-400",children:O.kind==="shoot"?"مكان التصوير":"الوجهة (إلى)"}),M.jsxs("select",{value:O.kind==="shoot"?O.shootPlace:O.toLocation,onChange:J=>T(H,O.kind==="shoot"?"shootPlace":"toLocation",J.target.value),className:"w-full text-xs px-2 py-2 bg-white rounded-lg border border-stone-200 outline-none",children:[M.jsx("option",{value:"",children:"— اختر الوجهة —"}),eU.map((J,re)=>M.jsx("option",{value:J,children:J},re))]})]}),M.jsxs("div",{className:"space-y-1",children:[M.jsx("label",{className:"block text-[10px] font-bold text-stone-400",children:"ملاحظة"}),M.jsx("input",{value:O.note,onChange:J=>T(H,"note",J.target.value),className:"w-full text-xs px-2 py-2 bg-white rounded-lg border border-stone-200 outline-none",placeholder:"ملاحظات اختيارية..."})]})]},H))}),M.jsx("button",{onClick:Y,disabled:c,className:"w-full mt-8 py-4 bg-stone-800 text-white rounded-2xl font-black shadow-lg shadow-stone-200 disabled:opacity-50",children:c?"جاري الإرسال...":"ارسال الطلب"})]})})},rU=async r=>{if(!r||!r.length)return;const e=fi.collection("mzj_admin_state").doc("v1");try{await fi.runTransaction(async t=>{const i=await t.get(e);if(!i.exists)return;const a=i.data()||{},l=Array.isArray(a.stock)?[...a.stock]:[],c=new Map;if(r.forEach(p=>{const g=Gs(p.vin||p.__id||""),v=p.toLocation||p.location||"";g&&v&&c.set(g,v)}),c.size===0)return;let f=!1;for(let p=0;p<l.length;p++){const g=l[p],v=Gs(g.vin||"");let T=null;for(const[w,D]of c.entries())if(nU(v,w)){T=w;break}if(T){const w=c.get(T);w&&g.location!==w&&(l[p]={...g,location:w},f=!0)}}f&&(t.update(e,{stock:l}),console.log("Successfully updated stock locations in transaction."))})}catch(t){throw console.error("Error updating stock locations:",t),t}},sU=({requestId:r,onClose:e,user:t,profile:i})=>{const[a,l]=ht.useState(null),[c,f]=ht.useState([]),[p,g]=ht.useState(!0),[v,T]=ht.useState(!1);ht.useEffect(()=>{const O=fi.collection("requests").doc(r).onSnapshot(J=>{l(J.data())}),H=fi.collection("requests").doc(r).collection("rows").onSnapshot(J=>{f(J.docs.map(re=>({...re.data()}))),g(!1)});return()=>{O(),H()}},[r]);const w=(O,H)=>{if((i==null?void 0:i.role)==="الادارة")return!0;const J=(i==null?void 0:i.locations)||[],re=O.fromLocation||O.location,se=O.kind==="shoot"?O.shootPlace:O.toLocation;return H===1||H===2?J.includes(re):H===3?O.kind==="move"?(a==null?void 0:a.createdByEmail)===t.email:J.includes(se):!1},D=async O=>{const H=O===1?"received":O===2?"sent":"carReceived",J=c.filter(re=>{var se;return w(re,O)&&!((se=re.steps)!=null&&se[H])});if(!J.length){alert("لا توجد سيارات يمكنك تنفيذ هذه المرحلة لها حالياً.");return}T(!0);try{const re=to.serverTimestamp(),se=fi.batch(),_e=fi.collection("requests").doc(r),we={at:re,byUid:t.uid,byEmail:t.email,byName:(i==null?void 0:i.name)||t.email};if(J.forEach(me=>{const S=_e.collection("rows").doc(me.vin),A={[`steps.${H}`]:we,updatedAt:re};if(O===3){const N=me.kind==="shoot"?me.shootPlace:me.toLocation;N&&(A.location=N)}se.update(S,A)}),se.update(_e,{updatedAt:re}),await se.commit(),O===3){const me=J.filter(S=>S.kind==="move");me.length&&await rU(me)}alert("تم تحديث المرحلة بنجاح ✅")}catch(re){console.error(re),alert("حدث خطأ أثناء التحديث.")}finally{T(!1)}},Y=async()=>{if(!c.every(H=>{var J;return(J=H.steps)==null?void 0:J.carReceived})){alert("لا يمكن إنهاء الطلب إلا بعد استلام جميع السيارات.");return}T(!0);try{await fi.collection("requests").doc(r).update({status:"مكتملة",finishedAt:to.serverTimestamp(),finishedByEmail:t.email,updatedAt:to.serverTimestamp()}),alert("تم إغلاق الطلب بنجاح ✅")}catch(H){console.error(H)}finally{T(!1)}};return p?null:M.jsxs("div",{className:"fixed inset-0 z-[60] flex flex-col bg-stone-50 overflow-hidden animate-in slide-in-from-bottom duration-300",children:[M.jsxs("header",{className:"bg-white border-b border-stone-200 px-5 py-4 flex items-center justify-between shadow-sm",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("button",{onClick:e,className:"w-8 h-8 flex items-center justify-center text-stone-400",children:M.jsx("i",{className:"fa-solid fa-arrow-right"})}),M.jsxs("h2",{className:"text-base font-black text-stone-800",children:["تفاصيل الطلب #",r.slice(-5)]})]}),M.jsx("div",{className:`text-[10px] font-bold px-3 py-1 rounded-full ${(a==null?void 0:a.status)==="مكتملة"?"bg-green-100 text-green-700":"bg-amber-100 text-amber-700"}`,children:a==null?void 0:a.status})]}),M.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[M.jsxs("div",{className:"bg-white rounded-2xl p-4 border border-stone-200 shadow-sm space-y-2",children:[M.jsxs("div",{className:"flex justify-between items-start",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-[10px] font-bold text-stone-400 uppercase tracking-tighter",children:"المنشئ"}),M.jsx("p",{className:"text-sm font-black text-stone-800",children:a==null?void 0:a.createdByName})]}),M.jsxs("div",{className:"text-left",children:[M.jsx("p",{className:"text-[10px] font-bold text-stone-400 uppercase tracking-tighter",children:"النوع"}),M.jsx("p",{className:"text-sm font-black text-stone-800 uppercase tracking-tighter",children:a==null?void 0:a.kind})]})]}),M.jsxs("div",{children:[M.jsx("p",{className:"text-[10px] font-bold text-stone-400 uppercase tracking-tighter",children:"التاريخ"}),M.jsx("p",{className:"text-xs text-stone-600",children:X1(a==null?void 0:a.createdAt)})]})]}),M.jsxs("div",{className:"space-y-3",children:[M.jsxs("h3",{className:"text-xs font-black text-stone-500 uppercase px-1",children:["السيارات المطلوبة (",c.length,")"]}),c.map((O,H)=>{var J,re,se,_e,we,me;return M.jsxs("div",{className:"bg-white rounded-2xl p-4 border border-stone-200 shadow-sm space-y-3",children:[M.jsxs("div",{className:"flex justify-between",children:[M.jsx("div",{className:"font-mono text-xs font-bold text-stone-800",children:O.vin}),M.jsx("div",{className:`text-[9px] font-black px-2 py-0.5 rounded ${O.kind==="shoot"?"bg-blue-50 text-blue-600":"bg-amber-50 text-amber-600"}`,children:O.kind==="shoot"?"تصوير":"نقل"})]}),M.jsxs("div",{className:"space-y-1",children:[M.jsx("p",{className:"text-sm font-black text-stone-800 leading-tight",children:O.car}),M.jsxs("p",{className:"text-[11px] text-stone-500",children:[O.variant," | ",O.modelYear]})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[10px] pt-2 border-t border-stone-100",children:[M.jsxs("div",{children:[M.jsx("p",{className:"text-stone-400 font-bold",children:"من (المصدر)"}),M.jsx("p",{className:"text-stone-700 font-medium truncate",children:O.fromLocation||O.location})]}),M.jsxs("div",{children:[M.jsx("p",{className:"text-stone-400 font-bold",children:"إلى (الوجهة)"}),M.jsx("p",{className:"text-stone-700 font-medium truncate",children:O.kind==="shoot"?O.shootPlace:O.toLocation})]})]}),M.jsxs("div",{className:"flex items-center gap-1 mt-2",children:[M.jsx("div",{className:`flex-1 h-1.5 rounded-full ${(J=O.steps)!=null&&J.received?"bg-stone-800":"bg-stone-100"}`}),M.jsx("div",{className:`flex-1 h-1.5 rounded-full ${(re=O.steps)!=null&&re.sent?"bg-stone-800":"bg-stone-100"}`}),M.jsx("div",{className:`flex-1 h-1.5 rounded-full ${(se=O.steps)!=null&&se.carReceived?"bg-stone-800":"bg-stone-100"}`})]}),M.jsx("p",{className:"text-[9px] text-stone-400 text-center font-bold",children:(_e=O.steps)!=null&&_e.carReceived?"مكتمل ✅":(we=O.steps)!=null&&we.sent?"تم الإرسال (في الطريق)":(me=O.steps)!=null&&me.received?"تم استلام الطلب":"بانتظار البدء"})]},H)})]})]}),M.jsxs("footer",{className:"bg-white border-t border-stone-200 p-4 safe-bottom grid grid-cols-3 gap-2",children:[M.jsxs("button",{onClick:()=>D(1),disabled:v,className:"flex flex-col items-center justify-center p-2 bg-stone-100 text-stone-800 rounded-xl disabled:opacity-50",children:[M.jsx("span",{className:"text-[14px] font-black",children:"1"}),M.jsx("span",{className:"text-[8px] font-bold",children:"استلام طلب"})]}),M.jsxs("button",{onClick:()=>D(2),disabled:v,className:"flex flex-col items-center justify-center p-2 bg-stone-100 text-stone-800 rounded-xl disabled:opacity-50",children:[M.jsx("span",{className:"text-[14px] font-black",children:"2"}),M.jsx("span",{className:"text-[8px] font-bold",children:"إرسال سيارة"})]}),M.jsxs("button",{onClick:()=>D(3),disabled:v,className:"flex flex-col items-center justify-center p-2 bg-stone-100 text-stone-800 rounded-xl disabled:opacity-50",children:[M.jsx("span",{className:"text-[14px] font-black",children:"3"}),M.jsx("span",{className:"text-[8px] font-bold",children:"استلام سيارة"})]}),(a==null?void 0:a.status)!=="مكتملة"&&M.jsx("button",{onClick:Y,disabled:v,className:"col-span-3 py-3 mt-1 bg-stone-800 text-white rounded-xl text-xs font-black shadow-lg",children:"إغلاق الطلب نهائياً"})]})]})},zA=({user:r,profile:e,statusFilter:t,title:i})=>{const[a,l]=ht.useState([]),[c,f]=ht.useState(!0),[p,g]=ht.useState(null),[v,T]=ht.useState("all");ht.useEffect(()=>{const D=fi.collection("requests").orderBy("updatedAt","desc").limit(150).onSnapshot(Y=>{const O=Y.docs.map(H=>({id:H.id,...H.data()}));l(O),f(!1)},Y=>{console.error("Firestore Error:",Y),f(!1)});return()=>D()},[]);const w=a.filter(D=>{const Y=D.status===t,O=v==="all"||D.kind===v;return Y&&O});return M.jsxs("div",{className:"space-y-4",children:[M.jsxs("div",{className:"flex justify-between items-end px-1",children:[M.jsx("h2",{className:"text-lg font-black text-stone-800",children:i}),M.jsxs("p",{className:"text-[10px] font-bold text-stone-400 uppercase",children:[w.length," طلب"]})]}),M.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto no-scrollbar py-2",children:[M.jsx("button",{onClick:()=>T("all"),className:`flex-shrink-0 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${v==="all"?"bg-stone-800 text-white border-stone-800 shadow-md shadow-stone-200":"bg-white text-stone-500 border-stone-200"}`,children:"الكل"}),M.jsx("button",{onClick:()=>T("shoot"),className:`flex-shrink-0 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${v==="shoot"?"bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100":"bg-white text-stone-500 border-stone-200"}`,children:"تصوير"}),M.jsx("button",{onClick:()=>T("move"),className:`flex-shrink-0 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${v==="move"?"bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-100":"bg-white text-stone-500 border-stone-200"}`,children:"نقل"})]}),M.jsx("div",{className:"space-y-3",children:c?M.jsxs("div",{className:"flex flex-col items-center py-20 text-stone-300",children:[M.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-stone-400 mb-4"}),M.jsx("p",{className:"text-xs font-bold",children:"جاري تحميل البيانات..."})]}):w.length===0?M.jsxs("div",{className:"bg-white rounded-2xl p-10 text-center border border-dashed border-stone-200",children:[M.jsx("i",{className:"fa-solid fa-folder-open text-3xl text-stone-100 mb-3"}),M.jsx("p",{className:"text-xs text-stone-400 font-bold",children:"لا توجد طلبات في هذا القسم حالياً"})]}):w.map(D=>{var Y,O;return M.jsxs("div",{onClick:()=>g(D.id),className:"bg-white rounded-2xl p-4 border border-stone-200 shadow-sm flex items-center justify-between active:scale-[0.98] transition-transform",children:[M.jsxs("div",{className:"flex-1",children:[M.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[M.jsx("span",{className:`text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter ${D.kind==="shoot"?"bg-blue-50 text-blue-600":"bg-amber-50 text-amber-600"}`,children:D.kind==="shoot"?"تصوير":"نقل"}),M.jsxs("span",{className:"text-stone-300 text-[10px] font-mono",children:["#",D.id.slice(-5).toUpperCase()]})]}),M.jsx("h3",{className:"text-sm font-black text-stone-800 line-clamp-1",children:D.createdByName||"—"}),M.jsx("p",{className:"text-[10px] text-stone-400 font-bold",children:X1(D.updatedAt)}),M.jsxs("div",{className:"mt-2 flex gap-1",children:[(Y=D.vins)==null?void 0:Y.slice(0,3).map(H=>M.jsx("span",{className:"text-[8px] bg-stone-50 border border-stone-100 text-stone-500 px-1.5 py-0.5 rounded font-mono",children:H.slice(-6)},H)),((O=D.vins)==null?void 0:O.length)>3&&M.jsxs("span",{className:"text-[8px] text-stone-400 font-bold",children:["+",D.vins.length-3]})]})]}),M.jsx("div",{className:"flex items-center gap-3",children:M.jsx("div",{className:"text-left flex flex-col items-end",children:M.jsx("div",{className:"w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-300",children:M.jsx("i",{className:"fa-solid fa-chevron-left text-[10px]"})})})})]},D.id)})}),p&&M.jsx(sU,{requestId:p,onClose:()=>g(null),user:r,profile:e})]})},aU=({user:r,profile:e})=>{var t,i;return M.jsx("div",{className:"space-y-6",children:M.jsxs("div",{className:"bg-white rounded-3xl p-8 border border-stone-200 shadow-sm text-center",children:[M.jsx("div",{className:"w-24 h-24 bg-stone-100 text-stone-300 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border-4 border-white shadow-inner",children:M.jsx("i",{className:"fa-solid fa-user"})}),M.jsx("h2",{className:"text-xl font-black text-stone-800",children:(e==null?void 0:e.name)||r.email}),M.jsx("p",{className:"text-stone-400 text-sm",children:r.email}),M.jsxs("div",{className:"mt-8 grid grid-cols-2 gap-4",children:[M.jsxs("div",{className:"bg-stone-50 p-4 rounded-2xl border border-stone-100",children:[M.jsx("p",{className:"text-[10px] font-bold text-stone-400 uppercase mb-1",children:"الدور"}),M.jsx("p",{className:"text-sm font-black text-stone-800",children:(e==null?void 0:e.role)||"مستخدم"})]}),M.jsxs("div",{className:"bg-stone-50 p-4 rounded-2xl border border-stone-100",children:[M.jsx("p",{className:"text-[10px] font-bold text-stone-400 uppercase mb-1",children:"الفروع"}),M.jsx("p",{className:"text-sm font-black text-stone-800",children:((t=e==null?void 0:e.locations)==null?void 0:t.length)||0})]})]}),M.jsxs("div",{className:"mt-6 text-right",children:[M.jsx("h3",{className:"text-[10px] font-bold text-stone-400 uppercase mb-2 px-2",children:"الأماكن المرتبطة بك:"}),M.jsx("div",{className:"flex flex-wrap gap-2",children:(i=e==null?void 0:e.locations)==null?void 0:i.map(a=>M.jsx("span",{className:"bg-stone-50 text-stone-600 text-[10px] font-bold px-3 py-1 rounded-full border border-stone-100",children:a},a))})]}),M.jsxs("button",{onClick:()=>Zv.signOut(),className:"w-full mt-10 py-4 border-2 border-stone-100 text-red-500 rounded-2xl font-black hover:bg-red-50 transition-all",children:[M.jsx("i",{className:"fa-solid fa-right-from-bracket mr-2"})," تسجيل الخروج"]})]})})},oU=({user:r,profile:e})=>{const[t,i]=ht.useState("create");return M.jsxs("div",{className:"flex flex-col min-h-screen bg-stone-50 pb-20",children:[M.jsxs("header",{className:"sticky top-0 z-30 bg-white border-b border-stone-200 px-5 py-4 flex items-center justify-between shadow-sm",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("div",{className:"w-10 h-10 bg-stone-800 text-white rounded-lg flex items-center justify-center font-bold",children:"MZJ"}),M.jsxs("div",{children:[M.jsx("h2",{className:"text-sm font-black text-stone-800",children:"Workspace"}),M.jsx("p",{className:"text-[10px] text-stone-400 font-bold uppercase tracking-wider",children:"Mobile Portal"})]})]}),M.jsx("div",{className:"flex items-center gap-2",children:M.jsx("span",{className:"text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full font-bold",children:(e==null?void 0:e.role)||"مستخدم"})})]}),M.jsxs("main",{className:"flex-1 p-4",children:[t==="create"&&M.jsx(iU,{user:r,profile:e}),t==="active"&&M.jsx(zA,{user:r,profile:e,statusFilter:"تحت المتابعة",title:"الطلبات النشطة"}),t==="completed"&&M.jsx(zA,{user:r,profile:e,statusFilter:"مكتملة",title:"الأرشيف المكتمل"}),t==="profile"&&M.jsx(aU,{user:r,profile:e})]}),M.jsxs("nav",{className:"fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] px-4 py-3 flex justify-between items-center z-50 safe-bottom",children:[M.jsxs("button",{onClick:()=>i("create"),className:`flex flex-col items-center gap-1 flex-1 transition-all ${t==="create"?"text-stone-800":"text-stone-400"}`,children:[M.jsx("i",{className:"fa-solid fa-plus-circle text-xl"}),M.jsx("span",{className:"text-[10px] font-bold",children:"إنشاء"})]}),M.jsxs("button",{onClick:()=>i("active"),className:`flex flex-col items-center gap-1 flex-1 transition-all ${t==="active"?"text-stone-800":"text-stone-400"}`,children:[M.jsx("i",{className:"fa-solid fa-clock-rotate-left text-xl"}),M.jsx("span",{className:"text-[10px] font-bold",children:"المتابعة"})]}),M.jsxs("button",{onClick:()=>i("completed"),className:`flex flex-col items-center gap-1 flex-1 transition-all ${t==="completed"?"text-stone-800":"text-stone-400"}`,children:[M.jsx("i",{className:"fa-solid fa-circle-check text-xl"}),M.jsx("span",{className:"text-[10px] font-bold",children:"المكتملة"})]}),M.jsxs("button",{onClick:()=>i("profile"),className:`flex flex-col items-center gap-1 flex-1 transition-all ${t==="profile"?"text-stone-800":"text-stone-400"}`,children:[M.jsx("i",{className:"fa-solid fa-user-circle text-xl"}),M.jsx("span",{className:"text-[10px] font-bold",children:"الحساب"})]})]})]})},lU=()=>{const[r,e]=ht.useState(null),[t,i]=ht.useState(null),[a,l]=ht.useState(!0);return ht.useEffect(()=>{const c=Zv.onAuthStateChanged(async f=>{if(e(f),f){const p=await fi.collection("user").doc(f.uid).get();p.exists&&i(p.data())}else i(null);l(!1)});return()=>c()},[]),a?M.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-stone-50",children:[M.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-4 border-stone-800 border-opacity-50"}),M.jsx("p",{className:"mt-4 text-stone-600 font-bold",children:"جاري التحميل..."})]}):M.jsx("div",{className:"min-h-screen",children:r?M.jsx(oU,{user:r,profile:t}):M.jsx(tU,{})})},J1=document.getElementById("root");if(!J1)throw new Error("Could not find root element to mount to");const uU=BN.createRoot(J1);uU.render(M.jsx(VN.StrictMode,{children:M.jsx(lU,{})}));
