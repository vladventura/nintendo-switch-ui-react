(this["webpackJsonpnintendo-switch-ui-react"]=this["webpackJsonpnintendo-switch-ui-react"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(11);var r,a=n(0),c=n.n(a),i=n(9),l=n.n(i),o=(n(16),n(3)),s=(n(17),n(18),n(19),n(1)),u=function(e){var t=e.text,n=e.showText,r=e.className,c=Object(a.useState)(!1),i=Object(o.a)(c,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){t.length>=30&&u(!0)}),[t]),Object(s.jsx)("div",{className:"scroll-container".concat(l?" animated-child":""," ").concat(r),children:n&&Object(s.jsx)("p",{className:"scrollable-name".concat(l?" animated-name":""),children:t})})},f=function(e){var t=e.name,n=e.className,r=e.image,c=e.tabIndex,i=e.active,l=e.onClick,o=Object(a.useRef)(null);Object(a.useEffect)((function(){o.current&&i?o.current.focus():o.current.blur()}),[i]);return Object(s.jsx)("li",{ref:o,tabIndex:c,onFocus:function(e){null===e||void 0===e||e.preventDefault(),null===l||void 0===l||l(),o.current.scrollIntoView({block:"end",behavior:"smooth"})},onClick:function(e){return e.preventDefault()},className:"game".concat(n?" "+n:"").concat(i?" active":""),children:Object(s.jsxs)("div",{className:"game-content",children:[Object(s.jsx)(u,{text:t,showText:i}),Object(s.jsx)("div",{className:"game-image-container",children:Object(s.jsx)("img",{alt:t,src:r})})]})})},b=[{name:"Monster Hunter Stories 2: The Wings of Ruin",image:"https://www.switchiconshowdown.com/images/5664.png"},{name:"Cattails",image:"https://www.switchiconshowdown.com/images/1423.png"},{name:"Bloodstained",image:"https://www.switchiconshowdown.com/images/2323.png"},{name:"FEZ",image:"https://www.switchiconshowdown.com/images/5612.png"},{name:"Dragon Lapis",image:"https://www.switchiconshowdown.com/images/4753.png"},{name:"Super Cobra",image:"https://www.switchiconshowdown.com/images/4672.png"}],j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object(a.useState)(0),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(0),l=Object(o.a)(i,2),s=l[0],u=l[1],f=function(){u(r)},b=function(){c(s),u(-1)},j=function(t){t.preventDefault(),65===t.keyCode&&s>0&&u(s-1),68===t.keyCode&&s<e-1&&u(s+1)};return[j,s,u,f,b]},v=n(5),m=Object(a.createContext)(),d={activeSet:0,setNumber:0,onKeyDown:function(e){},setTotalSets:function(e){}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ON_KEY_DOWN":return Object(v.a)(Object(v.a)({},e),{},{activeSet:t.payload});case"SET_TOTAL_SETS":return Object(v.a)(Object(v.a)({},e),{},{setNumber:t.payload});default:return Object(v.a)({},e)}},O=function(e){var t=Object(a.useReducer)(h,d),n=Object(o.a)(t,2),r=n[0],c=n[1];return Object(s.jsx)(m.Provider,Object(v.a)({value:{onKeyDown:function(e){e.preventDefault();var t=r.activeSet,n=0;87===e.keyCode&&c({type:"ON_KEY_DOWN",payload:n=t-1<0?0:t-1}),83===e.keyCode&&(n=t+1>=r.setNumber?t:t+1,c({type:"ON_KEY_DOWN",payload:n}))},setTotalSets:function(e){c({type:"SET_TOTAL_SETS",payload:e})},activeSet:r.activeSet,setNumber:r.setNumber}},e))},p=function(){var e=Object(a.useContext)(m).activeSet,t=j(b.length),n=Object(o.a)(t,3),r=n[0],c=n[1],i=n[2];return Object(s.jsx)("div",{className:"content",onKeyDown:r,children:Object(s.jsx)("ul",{className:"carousel",onScroll:function(e){return e.preventDefault()},onScrollCapture:function(e){return e.preventDefault()},onKeyDown:function(e){return e.preventDefault()},onClick:function(e){return e.preventDefault()},children:b.map((function(t,n){return Object(s.jsx)(f,{onClick:function(){return i(n)},name:t.name,image:t.image,tabIndex:n,active:c===n&&0===e},t.name)}))})})},y=n(8),w=function(){var e=Object(a.useState)(y.DateTime.local().toFormat("hh:mma").toLowerCase()),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),i=Object(o.a)(c,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){if(null===l){var e=setInterval((function(){var e=y.DateTime.local();r(e.toFormat("hh:mma").toLowerCase())}),1e3);u(e)}return function(){clearInterval(l)}}),[l]),Object(s.jsx)("p",{children:n})},g=(n(21),["title","titleId"]);function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function S(e,t){var n=e.title,c=e.titleId,i=N(e,g);return a.createElement("svg",x({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"battery-empty",className:"svg-inline--fa fa-battery-empty fa-w-20",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",ref:t,"aria-labelledby":c},i),n?a.createElement("title",{id:c},n):null,r||(r=a.createElement("path",{fill:"currentColor",d:"M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48z"})))}var E,C=a.forwardRef(S),I=(n.p,["title","titleId"]);function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function P(e,t){var n=e.title,r=e.titleId,c=k(e,I);return a.createElement("svg",D({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"battery-quarter",className:"svg-inline--fa fa-battery-quarter fa-w-20",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,E||(E=a.createElement("path",{fill:"currentColor",d:"M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-336 96H96v128h128V192z"})))}var H,V=a.forwardRef(P),T=(n.p,["title","titleId"]);function A(){return(A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Z(e,t){var n=e.title,r=e.titleId,c=M(e,T);return a.createElement("svg",A({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"battery-half",className:"svg-inline--fa fa-battery-half fa-w-20",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,H||(H=a.createElement("path",{fill:"currentColor",d:"M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-240 96H96v128h224V192z"})))}var _,B=a.forwardRef(Z),K=(n.p,["title","titleId"]);function R(){return(R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function q(e,t){var n=e.title,r=e.titleId,c=z(e,K);return a.createElement("svg",R({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"battery-three-quarters",className:"svg-inline--fa fa-battery-three-quarters fa-w-20",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,_||(_=a.createElement("path",{fill:"currentColor",d:"M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-144 96H96v128h320V192z"})))}var L,F=a.forwardRef(q),W=(n.p,["title","titleId"]);function Y(){return(Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function G(e,t){var n=e.title,r=e.titleId,c=J(e,W);return a.createElement("svg",Y({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"battery-full",className:"svg-inline--fa fa-battery-full fa-w-20",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,L||(L=a.createElement("path",{fill:"currentColor",d:"M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-48 96H96v128h416V192z"})))}var Q=a.forwardRef(G);n.p;n.p;var U,X=["title","titleId"];function $(){return($=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function te(e,t){var n=e.title,r=e.titleId,c=ee(e,X);return a.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 100 125",x:"0px",y:"0px",ref:t,"aria-labelledby":r},c),void 0===n?a.createElement("title",{id:r},"nintendo_switch_fill"):n?a.createElement("title",{id:r},n):null,U||(U=a.createElement("path",{d:"M88,28H12a7,7,0,0,0-7,7V65a7,7,0,0,0,7,7H88a7,7,0,0,0,7-7V35A7,7,0,0,0,88,28Zm-.5,7a1.25,1.25,0,1,1-1.25,1.25A1.25,1.25,0,0,1,87.5,35Zm0,6.5a1.25,1.25,0,1,1-1.25,1.25A1.25,1.25,0,0,1,87.5,41.5ZM12.5,36a3,3,0,1,1-3,3A3,3,0,0,1,12.5,36ZM9.25,52.75A1.25,1.25,0,1,1,10.5,51.5,1.25,1.25,0,0,1,9.25,52.75ZM12.5,56a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,12.5,56Zm0-6.5a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,12.5,49.5Zm3.25,3.25A1.25,1.25,0,1,1,17,51.5,1.25,1.25,0,0,1,15.75,52.75ZM80,68H20V32H80Zm3-28.5a1.25,1.25,0,1,1,1.25,1.25A1.25,1.25,0,0,1,83,39.5ZM87.5,55a3,3,0,1,1,3-3A3,3,0,0,1,87.5,55Zm3.25-14.25A1.25,1.25,0,1,1,92,39.5,1.25,1.25,0,0,1,90.75,40.75Z"})))}var ne=a.forwardRef(te),re=(n.p,function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),l=i[0],u=i[1],f=function(e){var t=Math.floor(100*e.level);u(t>75?"battery-full":t<=75&&t>50?"battery-three-quarters":t<=50&&t>21?"battery-half":t<=21&&t>5?"battery-quarter":"battery-empty"),r(t)};Object(a.useEffect)((function(){"getBattery"in navigator?navigator.getBattery().then((function(e){f(e),e.addEventListener("levelchange",(function(t){return f(e)}))})):f({level:1})}),[]);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("p",{className:"battery-percentage",children:[n,"%"]}),function(){switch(l){case"battery-empty":return Object(s.jsx)(C,{className:"battery-icon"});case"battery-quarter":return Object(s.jsx)(V,{className:"battery-icon"});case"battery-half":return Object(s.jsx)(B,{className:"battery-icon"});case"battery-three-quarters":return Object(s.jsx)(F,{className:"battery-icon"});case"battery-full":default:return Object(s.jsx)(Q,{className:"battery-icon"})}}()]})}),ae=(n(22),n.p+"static/media/karin.c4bda6f5.jpg"),ce=function(){return Object(s.jsxs)("div",{className:"player-icon",children:[Object(s.jsx)("p",{className:"friends-count",children:"2"}),Object(s.jsx)("div",{className:"player-icon-img-container",children:Object(s.jsx)("img",{src:ae,alt:"Player Icon",className:"player-icon-img"})})]})},ie=(n(23),n(4)),le=n(10),oe=(n(24),n(6)),se=function(e){var t=e.iconClass,n=e.faIcon,r=e.active,c=e.tabIndex,i=e.onClick,l=Object(a.useRef)(null);Object(a.useEffect)((function(){l.current&&r?l.current.focus():l.current.blur()}),[r]);return Object(s.jsx)("div",{className:"util-icon".concat(r?" active ":""),onClick:function(e){return e.preventDefault()},tabIndex:c,ref:l,onFocus:function(e){null===e||void 0===e||e.preventDefault(),null===i||void 0===i||i()},children:Object(s.jsx)(oe.a,{className:"icon ".concat(t),icon:n})})},ue=[["messages",le.a,"News"],["shop",ie.a,"Nintendo Shop"],["gallery",ie.d,"Gallery"],["",ie.b,"Controllers"],["",ie.c,"Settings"],["",ie.e,"Power"]],fe=function(){var e=Object(a.useContext)(m).activeSet,t=j(ue.length),n=Object(o.a)(t,3),r=n[0],c=n[1],i=n[2];return Object(s.jsxs)("div",{className:"utils-row-container",children:[Object(s.jsx)(u,{className:"utils-text",text:ue[c][2],showText:1===e}),Object(s.jsx)("div",{onKeyDown:r,onScroll:function(e){return e.preventDefault()},onScrollCapture:function(e){return e.preventDefault()},onClick:function(e){return e.preventDefault()},className:"utils-row",children:ue.map((function(t,n){return Object(s.jsx)(se,{iconClass:t[0],faIcon:t[1],onClick:function(){return i(n)},tabIndex:n,active:c===n&&1===e,utilName:t[2]},"util"+n)}))})]})},be=(n(27),function(){return Object(s.jsxs)("div",{className:"bottom-bar",children:[Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"under-line-container",children:[Object(s.jsx)(ne,{className:"nintendo-switch-icon"}),Object(s.jsxs)("div",{className:"console-button",children:[Object(s.jsx)("p",{className:"console-button-shape",children:"+"}),Object(s.jsx)("p",{className:"console-button-text",children:"Options"})]}),Object(s.jsxs)("div",{className:"console-button",children:[Object(s.jsx)("p",{className:"console-button-shape",children:"A"}),Object(s.jsx)("p",{className:"console-button-text",children:"Confirm"})]})]})]})});var je=function(){var e=Object(a.useContext)(m),t=e.onKeyDown,n=e.setTotalSets,r=e.setNumber;return Object(a.useEffect)((function(){2!==r&&n(2)}),[r,n]),Object(s.jsxs)("div",{className:"screen",onKeyDown:t,children:[Object(s.jsxs)("div",{className:"status-bar",children:[Object(s.jsx)(ce,{}),Object(s.jsxs)("div",{className:"status-info",children:[Object(s.jsx)(w,{}),Object(s.jsx)(oe.a,{className:"wifi-icon icon",icon:ie.f}),Object(s.jsx)(re,{})]})]}),Object(s.jsxs)("div",{className:"main-container",children:[Object(s.jsx)(p,{}),Object(s.jsx)(fe,{})]}),Object(s.jsx)(be,{})]})};l.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(O,{children:Object(s.jsx)(je,{})})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.a57f2b90.chunk.js.map