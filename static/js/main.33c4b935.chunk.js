(this.webpackJsonpkeeper=this.webpackJsonpkeeper||[]).push([[0],{40:function(e,t,n){e.exports=n(52)},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),l=n.n(o),c=n(36),i=n(12);var u=function(){var e=Object(a.useState)("light"),t=Object(i.a)(e,2),n=t[0],o=t[1];return document.querySelector("body").setAttribute("class",n),r.a.createElement("div",{className:"theme",onClick:function(){o("light"===n?"dark":"light")}},r.a.createElement("span",{className:"theme-icon material-icons",id:n},"".concat(n,"_mode")))},m=n(32),s=n.n(m);var h=function(){return r.a.createElement("header",null,r.a.createElement("h1",{className:"title"},r.a.createElement(s.a,null),"Google Keeper"),r.a.createElement(u,null))},d=n(34),f=n.n(d),y=n(69),k=n(70);var p=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),o=n[0],l=n[1],c=Object(a.useState)({key:0,title:"",content:""}),u=Object(i.a)(c,2),m=u[0],s=u[1];function h(e){var t=e.target,n=t.value,a=t.name;s((function(){return"title"===a?{key:0,title:n,content:m.content}:"content"===a?{key:0,title:m.title,content:n}:void 0}))}return r.a.createElement("div",null,r.a.createElement("form",{className:"create-note"},o&&r.a.createElement("input",{name:"title",placeholder:"Title",value:m.title,onChange:h}),r.a.createElement("textarea",{name:"content",placeholder:"Take A Note...",rows:o?5:1,value:m.content,onChange:h,onClick:function(){l(!0)}}),r.a.createElement(k.a,{in:o},r.a.createElement(y.a,{onClick:function(t){t.preventDefault(),e.onAdd(m),s((function(){return{key:0,title:"",content:""}}))}},r.a.createElement(f.a,null)))))},v=[{key:0,title:"Google I/O",content:"Google I/O is back May 18-20, online, and free for everyone. Join us live. I/O is live keynotes, hands-on learning with Google experts, and a first look at the latest developer products. Make sure to check back for more updates!"},{key:1,title:"Delegation",content:"Q. How many programmers does it take to change a light bulb? A. None \u2013 It\u2019s a hardware problem"},{key:2,title:"Loops",content:"How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."},{key:3,title:"Arrays",content:"Q. Why did the programmer quit his job? A. Because he didn't get arrays."},{key:4,title:"Hardware vs. Software",content:"What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."},{key:5,title:"Jerry",content:'A guy from Brazil has been asking me to invest me in a company for long, I have only one answer. "Still No"'},{key:6,title:"Tomy",content:"I killed everyone"}],E=n(35),b=n.n(E);var g=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},r.a.createElement(b.a,null)))};var w=function(){return r.a.createElement("footer",null,r.a.createElement("span",null," \xa9 Copyright ",(new Date).getFullYear()-1))};var O=function(){var e=Object(a.useState)(v),t=Object(i.a)(e,2),n=t[0],o=t[1];function l(e){o((function(t){return t.filter((function(t,n){return n!==e}))}))}return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement("main",null,r.a.createElement(p,{onAdd:function(e){o((function(t){return[].concat(Object(c.a)(t),[e])}))}}),n.map((function(e,t){return r.a.createElement(g,{key:t,id:t,title:e.title,content:e.content,onDelete:l})}))),r.a.createElement(w,null))};l.a.render(r.a.createElement(O,null),document.querySelector("#root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.33c4b935.chunk.js.map