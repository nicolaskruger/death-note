(this["webpackJsonpdeath-note"]=this["webpackJsonpdeath-note"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c,o=n(1),a=n.n(o),A=n(9),i=n.n(A),s=(n(14),n(15),n(3));!function(t){t[t.ADD=0]="ADD",t[t.TOGGLE=1]="TOGGLE"}(c||(c={}));var r={peoples:[]},l=[r,function(){}],u=Object(o.createContext)(l),j=function(){var t=Object(o.useContext)(u),e=Object(s.a)(t,2),n=e[0],a=e[1],A=c.ADD,i=c.TOGGLE;return{state:n,toggle:function(t){a({id:t,type:i})},add:function(t){a({name:t,type:A})},page:function(t){var e=n.peoples,c=e.length,o=c/40,a=c%40;return{currPage:t,maxPage:Math.ceil(o+(0===a?0:1)),content:e.slice(40*t,40*t+40)}}}},O=n(5),b=n(6),g=n(2),h=function(t,e){var n=e.name,c=t.peoples,o={id:Math.random(),name:n,kill:!0};return Object(g.a)(Object(g.a)({},t),{},{peoples:[].concat(Object(b.a)(c),[o])})},d=function(t,e){var n=t.peoples,c=e.id,o=n.map((function(t){return t.id===c?Object(g.a)(Object(g.a)({},t),{},{kill:!t.kill}):t}));return Object(g.a)(Object(g.a)({},t),{},{peoples:o})},p=function(t,e){var n,o=c.ADD,a=c.TOGGLE,A=e.type;return(n={},Object(O.a)(n,o,h),Object(O.a)(n,a,d),n)[A](t,e)},v=n(0),x=function(t){return Object(v.jsx)("img",Object(g.a)(Object(g.a)({},t),{},{src:"data:image/png;base64,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"}))},C=function(){return Object(v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(v.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none",opacity:".87"}),Object(v.jsx)("path",{d:"M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"})]})},w=function(){return Object(v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(v.jsx)("g",{children:Object(v.jsx)("path",{d:"M0,0h24v24H0V0z",fill:"none"})}),Object(v.jsx)("g",{children:Object(v.jsx)("polygon",{points:"6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"})})]})},E=(n(17),function(t){var e=t.open;return Object(v.jsx)("button",{onClick:e,className:"CloseBook",children:Object(v.jsx)(x,{className:"CloseBook__img"})})}),f=(n(18),function(t){var e=t.people,n=e.name,c=e.id,o=e.kill,a=j().toggle;return Object(v.jsx)("div",{onClick:function(){a(c)},className:"Line ".concat(!o&&"risk"),children:n})}),N=function(t){return Object(v.jsx)("input",Object(g.a)(Object(g.a)({},t),{},{onChange:function(e){t.onChange(e.target.value)}}))},k=(n(19),function(){var t=j().add,e=Object(o.useState)(""),n=Object(s.a)(e,2),c=n[0],a=n[1];return Object(v.jsx)("form",{onSubmit:function(e){e.preventDefault(),e.stopPropagation(),t(c)},className:"WriteLine Line",children:Object(v.jsx)(N,{className:"WriteLine__input",value:c,onChange:a})})}),B=(n(20),function(t){var e=t.content.map((function(t){return Object(v.jsx)(f,{people:t})})),n="a".repeat(40-e.length).split("").map((function(t){return Object(v.jsx)(k,{})}));return e=[].concat(Object(b.a)(e),Object(b.a)(n)),Object(v.jsxs)("div",{className:"Page",children:[Object(v.jsx)("div",{className:"Page__div Page__left",children:e.slice(0,20)}),Object(v.jsx)("div",{className:"Page__div Page__rigth",children:e.slice(20,40)})]})}),D=(n(21),function(){var t=j().page,e=Object(o.useState)(0),n=Object(s.a)(e,2),c=n[0],a=n[1],A=t(c),i=A.maxPage,r=A.content,l=function(){return c>0},u=function(){return c<i};return Object(v.jsxs)("div",{className:"Out",children:[Object(v.jsx)("button",{className:"Out__button",onClick:function(){l()&&a(c-1)},children:l()&&Object(v.jsx)(C,{})}),Object(v.jsx)("div",{className:"OpenBook",children:Object(v.jsx)(B,{content:r})}),Object(v.jsx)("button",{className:"Out__button",onClick:function(){u()&&a(c+1)},children:u()&&Object(v.jsx)(w,{})})]})}),K=function(){var t=function(t){var e=Object(o.useState)(t),n=Object(s.a)(e,2),c=n[0],a=n[1];return[c,function(){a(!0)}]}(!1),e=Object(s.a)(t,2),n=e[0],c=e[1];return n?Object(v.jsx)(D,{}):Object(v.jsx)(E,{open:c})};var G=function(){return Object(v.jsx)(u.Provider,{value:Object(o.useReducer)(p,r),children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)(K,{})})})};i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(G,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.e604d851.chunk.js.map