(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8709:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return m}});var r=n(6006);let o=["light","dark"],l="(prefers-color-scheme: dark)",s="undefined"==typeof window,a=(0,r.createContext)(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(a))&&void 0!==e?e:i},m=e=>(0,r.useContext)(a)?r.createElement(r.Fragment,null,e.children):r.createElement(d,e),u=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:c=u,defaultTheme:m=n?"system":"light",attribute:d="data-theme",value:$,children:b,nonce:g})=>{let[p,S]=(0,r.useState)(()=>f(i,m)),[_,E]=(0,r.useState)(()=>f(i)),w=$?Object.values($):c,k=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=v());let l=$?$[r]:r,a=t?y():null,i=document.documentElement;if("class"===d?(i.classList.remove(...w),l&&i.classList.add(l)):l?i.setAttribute(d,l):i.removeAttribute(d),s){let e=o.includes(m)?m:null,t=o.includes(r)?r:e;i.style.colorScheme=t}null==a||a()},[]),C=(0,r.useCallback)(e=>{S(e);try{localStorage.setItem(i,e)}catch(e){}},[e]),T=(0,r.useCallback)(t=>{let r=v(t);E(r),"system"===p&&n&&!e&&k("system")},[p,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(l);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,r.useEffect)(()=>{let e=e=>{e.key===i&&C(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,r.useEffect)(()=>{k(null!=e?e:p)},[e,p]);let O=(0,r.useMemo)(()=>({theme:p,setTheme:C,forcedTheme:e,resolvedTheme:"system"===p?_:p,themes:n?[...c,"system"]:c,systemTheme:n?_:void 0}),[p,C,e,_,n,c]);return r.createElement(a.Provider,{value:O},r.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:s,storageKey:i,themes:c,defaultTheme:m,attribute:d,value:$,children:b,attrs:w,nonce:g}),b)},h=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:s,enableColorScheme:a,defaultTheme:i,value:c,attrs:m,nonce:u})=>{let d="system"===i,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=a?o.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(e,t=!1,r=!0)=>{let l=c?c[e]:e,s=t?e+"|| ''":`'${l}'`,i="";return a&&r&&!t&&o.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||l?`c.add(${s})`:"null":l&&(i+=`d[s](n,${s})`),i},v=e?`!function(){${h}${y(e)}}()`:s?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}${d?"":"else{"+y(i,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}else{${y(i,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:v}})},()=>!0),f=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},3500:function(e,t,n){Promise.resolve().then(n.bind(n,1932))},1932:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(9268);n(7402);var o=n(8709);function l(e){let{children:t}=e;return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{children:(0,r.jsx)(o.f,{enableSystem:!0,attribute:"class",children:t})})})}},7402:function(){},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),o=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,i={},c=null,m=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(m=t.ref),t)l.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:m,props:i,_owner:s.current}}t.jsx=i,t.jsxs=i},9268:function(e,t,n){"use strict";e.exports=n(3177)}},function(e){e.O(0,[611,253,769,744],function(){return e(e.s=3500)}),_N_E=e.O()}]);