(this.webpackJsonpmemoryapp=this.webpackJsonpmemoryapp||[]).push([[0],[,,,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},,function(e,c,t){"use strict";t.r(c);var i=t(1),n=t.n(i),r=t(5),d=t.n(r),a=(t(10),t(11),t(4)),s=t(2),u=(t(12),t(0));var l=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["score: ",e.score]}),Object(u.jsxs)("p",{children:["max score: ",e.maxScore]})]})},o=t.p+"static/media/antimage_lg.f263be1a.png",f=t.p+"static/media/ember_spirit_lg.ee0522b4.png",p=t.p+"static/media/furion_lg.59fdf49d.png",j=t.p+"static/media/invoker_lg.24977931.png",b=t.p+"static/media/leshrac_lg.c9420868.png",m=t.p+"static/media/nevermore_lg.99f42ea7.png",g=t.p+"static/media/night_stalker_lg.f5d67772.png",O=t.p+"static/media/queenofpain_lg.324fcd7e.png",k=t.p+"static/media/rubick_lg.b0c503d9.png",h=t.p+"static/media/storm_spirit_lg.9bb3ff7b.png",x=t.p+"static/media/windrunner_lg.130fb198.png",v=t.p+"static/media/wisp_lg.3e9ae2fc.png";var _=function(e){var c=Object(i.useMemo)((function(){return[{url:o,clicked:!1,id:0},{url:f,clicked:!1,id:1},{url:p,clicked:!1,id:2},{url:j,clicked:!1,id:3},{url:b,clicked:!1,id:4},{url:m,clicked:!1,id:5},{url:g,clicked:!1,id:6},{url:O,clicked:!1,id:7},{url:k,clicked:!1,id:8},{url:h,clicked:!1,id:9},{url:x,clicked:!1,id:10},{url:v,clicked:!1,id:11}]}),[]),t=Object(i.useState)(c),n=Object(s.a)(t,2),r=n[0],d=n[1],_=Object(i.useState)(0),S=Object(s.a)(_,2),w=S[0],y=S[1],M=Object(i.useState)(0),E=Object(s.a)(M,2),I=E[0],C=E[1],J=function(e){for(var c,t,i=e.map((function(e){return Object(a.a)({},e)})),n=i.length;0!==n;)t=Math.floor(Math.random()*n),c=i[n-=1],i[n]=i[t],i[t]=c;return i};return Object(i.useEffect)((function(){d((function(e){return J(e)}))}),[]),Object(i.useEffect)((function(){w>I&&C(w),w%12===0&&0!==w&&d(c)}),[w,I,c]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{id:"cards-wrap",children:[Object(u.jsx)("button",{onClick:function(){return d((function(e){return J(e)}))},children:"Shuffle!"}),Object(u.jsx)("ul",{id:"cardList",children:r.map((function(e){return Object(u.jsxs)("li",{className:"card",children:[Object(u.jsx)("img",{src:e.url,alt:"",onClick:function(){return function(e){var t=r.map((function(e){return Object(a.a)({},e)})),i=t.findIndex((function(c){return c.id===e}));t[i].clicked?(d(J(c)),y(0)):(t[i].clicked=!0,d(t),d((function(){return J(t)})),y((function(e){return e+1})))}(e.id)}}),e.clicked.toString()]},e.id)}))})]}),Object(u.jsx)(l,{score:w,maxScore:I})]})};var S=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("p",{className:"info",children:"Keep clicking the cards, but never click the same one twice! If you clicked every card the game restarts while keeping your score."})})};var w=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(S,{}),Object(u.jsx)(_,{})]})};d.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.ee93562e.chunk.js.map