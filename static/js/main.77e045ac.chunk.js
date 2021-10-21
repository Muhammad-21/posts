(this["webpackJsonpreact-front"]=this["webpackJsonpreact-front"]||[]).push([[0],{23:function(e,t,n){e.exports={myModal:"MyModal_myModal__3Z8gE",myModalContent:"MyModal_myModalContent__w8Phq",active:"MyModal_active__3uRuX"}},38:function(e,t,n){e.exports={loader:"Loader_loader__2B-uc",rotate:"Loader_rotate__2nrIp"}},41:function(e,t,n){e.exports={myInput:"Myinput_myInput__3xXTa"}},42:function(e,t,n){e.exports={myBtn:"Mybutton_myBtn__J1IeD"}},49:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(15),a=n.n(r),s=n(14),o=(n(49),n(3)),u=n(1);var i=n(5),j=n.n(i),l=n(12),b=n(6),d=n(36),p=n(37),O=n(22),f=n.n(O),h=function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,null,[{key:"getAll",value:function(){var e=Object(l.a)(j.a.mark((function e(){var t,n,c,r=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:10,n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=4,f.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_limit:t,_page:n}});case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getById",value:function(){var e=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://jsonplaceholder.typicode.com/posts/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCommentsByPostId",value:function(){var e=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://jsonplaceholder.typicode.com/posts/".concat(t,"/comments"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),v=n(38),x=n.n(v);function m(){return Object(u.jsx)("div",{className:x.a.loader})}var y=function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),o=Object(b.a)(s,2),u=o[0],i=o[1],d=function(){var t=Object(l.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(!0),t.next=4,e();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),i(t.t0.message);case 9:return t.prev=9,a(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}();return[d,r,u]};var g=n(17),_=n(7),k=n(41),C=n.n(k);function w(e){return Object(u.jsx)("input",Object(_.a)({className:C.a.myInput},e))}function M(e){var t=e.options,n=e.defaultValue,c=e.value,r=e.onChange;return Object(u.jsxs)("select",{value:c,onChange:function(e){return r(e.target.value)},children:[Object(u.jsx)("option",{disabled:!0,value:"",children:n}),t.map((function(e){return Object(u.jsx)("option",{value:e.value,children:e.name},e.value)}))]})}function N(e){var t=e.filter,n=e.setFilter;return Object(u.jsxs)("div",{children:[Object(u.jsx)(w,{value:t.query,onChange:function(e){return n(Object(_.a)(Object(_.a)({},t),{},{query:e.target.value}))},placeholder:"\u041f\u043e\u0438\u0441\u043a..."}),Object(u.jsx)(M,{value:t.sort,onChange:function(e){return n(Object(_.a)(Object(_.a)({},t),{},{sort:e}))},defaultValue:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",options:[{value:"title",name:"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e"},{value:"body",name:"\u041f\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044e"}]})]})}var I=n(43),S=n(42),B=n.n(S),P=["children","style","onClick"];function q(e){var t=e.children,n=e.style,c=e.onClick;Object(I.a)(e,P);return Object(u.jsx)("button",{style:n,onClick:c,className:B.a.myBtn,children:t})}function A(e){var t=e.create,n=Object(c.useState)({title:"",body:""}),r=Object(b.a)(n,2),a=r[0],s=r[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=Object(_.a)(Object(_.a)({},a),{},{id:Date.now()});t(n),s({id:"",tittle:"",body:""})},children:[Object(u.jsx)(w,{value:a.title||"",onChange:function(e){return s(Object(_.a)(Object(_.a)({},a),{},{title:e.target.value}))},type:"text",placeholder:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430"}),Object(u.jsx)(w,{value:a.body||"",onChange:function(e){return s(Object(_.a)(Object(_.a)({},a),{},{body:e.target.value}))},type:"text",placeholder:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430"}),Object(u.jsx)(q,{children:"\u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})]})}var E=n(78),V=n(77);function D(e){var t=Object(o.g)();return console.log(t),Object(u.jsxs)("div",{className:"post",children:[Object(u.jsxs)("div",{className:"post_content",children:[Object(u.jsxs)("strong",{children:[e.post.id," ",e.post.title]}),Object(u.jsx)("div",{children:e.post.body})]}),Object(u.jsxs)("div",{className:"post_btns",children:[Object(u.jsx)(q,{onClick:function(){return t.push("/posts/".concat(e.post.id))},children:"\u043e\u0442\u043a\u0440\u044b\u0442\u044c"}),Object(u.jsx)(q,{onClick:function(){return e.remove(e.post)},children:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})}function J(e){var t=e.posts,n=e.title,c=e.remove;return t.length?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{style:{textAlign:"center"},children:n}),Object(u.jsx)(E.a,{children:t.map((function(e,t){return Object(u.jsx)(V.a,{timeout:500,classNames:"post",children:Object(u.jsx)(D,{remove:c,number:t+1,post:e})},e.id)}))})]}):Object(u.jsx)("h1",{style:{textAlign:"center"},children:"\u041f\u043e\u0441\u0442\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b!"})}var R=n(23),T=n.n(R);function L(e){var t=e.children,n=e.visible,c=e.setVisible,r=[T.a.myModal];return n&&r.push(T.a.active),Object(u.jsx)("div",{className:r.join(" "),onClick:function(){return c(!1)},children:Object(u.jsx)("div",{className:T.a.myModalContent,onClick:function(e){return e.stopPropagation()},children:t})})}var F=function(e,t){return Math.ceil(e/t)};function X(e){var t=e.totalPages,n=e.changePage,c=e.page,r=function(e){for(var t=[],n=0;n<e;n++)t.push(n+1);return t}(t);return Object(u.jsx)("div",{className:"page__wrapper",children:r.map((function(e){return Object(u.jsx)("span",{onClick:function(){return n(e)},className:c===e?"page page__current":"page",children:e},e)}))})}var Z=function(e,t,n){var r=function(e,t){return Object(c.useMemo)((function(){return console.log("\u0424/\u042f getSortedPosts"),t?Object(g.a)(e).sort((function(e,n){return e[t].localeCompare(n[t])})):e}),[t,e])}(e,t);return Object(c.useMemo)((function(){return r.filter((function(e){return e.title.toLowerCase().includes(n)}))}),[n,r])};var $=[{path:"/about",component:function(){return Object(u.jsx)("h1",{children:"\u0422\u0435\u043a\u0441\u0442"})},exact:!0},{path:"/posts",component:function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({sort:"",query:""}),s=Object(b.a)(a,2),o=s[0],i=s[1],d=Object(c.useState)(!1),p=Object(b.a)(d,2),O=p[0],f=p[1],v=Object(c.useState)(10),x=Object(b.a)(v,2),_=x[0],k=x[1],C=Object(c.useState)(1),w=Object(b.a)(C,2),I=w[0],S=w[1],B=Z(n,o.sort,o.query),P=Object(c.useState)(0),E=Object(b.a)(P,2),V=E[0],D=E[1],R=Object(c.useRef)(),T=(Object(c.useRef)(),y(Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getAll(_,I);case 2:t=e.sent,r([].concat(Object(g.a)(n),Object(g.a)(t.data))),c=t.headers["x-total-count"],D(F(c,_));case 6:case"end":return e.stop()}}),e)}))))),$=Object(b.a)(T,3),z=$[0],G=$[1],H=$[2];return function(e,t,n,r){var a=Object(c.useRef)();Object(c.useEffect)((function(){n||(a.current&&a.current.disconnect(),a.current=new IntersectionObserver((function(e,n){e[0].isIntersecting&&t&&r()})),a.current.observe(e.current))}),[n])}(R,I<V,G,(function(){S(I+1)})),Object(c.useEffect)((function(){z(_,I)}),[I,_]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(q,{style:{marginTop:30},onClick:function(){return f(!0)},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u044f"}),Object(u.jsx)(L,{visible:O,setVisible:f,children:Object(u.jsx)(A,{create:function(e){r([].concat(Object(g.a)(n),[e])),f(!1)}})}),Object(u.jsx)("hr",{style:{margin:"15px 0"}}),Object(u.jsx)(N,{filter:o,setFilter:i}),Object(u.jsx)(M,{value:_,onChange:function(e){return k(e)},defaultValue:"\u041a\u043e\u043b-\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435",options:[{value:5,name:"5"},{value:10,name:"10"},{value:"25",name:"25"},{value:"-1",name:"\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"}]}),H&&Object(u.jsxs)("h1",{children:["\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 $",H]}),Object(u.jsx)(J,{remove:function(e){console.log(e),r(n.filter((function(t){return t.id!==e.id})))},posts:B,title:"\u041f\u043e\u0441\u0442\u044b \u043f\u0440\u043e Js"}),Object(u.jsx)("div",{ref:R,style:{height:20,background:"red"}}),G&&Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:50},children:Object(u.jsx)(m,{})}),Object(u.jsx)(X,{totalPages:V,changePage:function(e){S(e)},page:I})]})},exact:!0},{path:"/posts/:id",component:function(){var e=Object(o.h)(),t=Object(c.useState)({}),n=Object(b.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)([]),i=Object(b.a)(s,2),d=i[0],p=i[1],O=y(Object(l.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.getById(e.id);case 2:n=t.sent,a(n.data);case 4:case"end":return t.stop()}}),t)})))),f=Object(b.a)(O,2),v=f[0],x=f[1],g=y(Object(l.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.getCommentsByPostId(e.id);case 2:n=t.sent,p(n.data);case 4:case"end":return t.stop()}}),t)})))),_=Object(b.a)(g,2),k=_[0],C=_[1];return Object(c.useEffect)((function(){v(e.id),k(e.id)}),[]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:["\u0412\u044b \u043e\u0442\u043a\u0440\u044b\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u043e\u0441\u0442\u0430 \u0441 ID = ",e.id]}),x?Object(u.jsx)(m,{}):Object(u.jsxs)("div",{children:[r.id," ",r.title," "]}),Object(u.jsx)("h1",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"}),C?Object(u.jsx)(m,{}):Object(u.jsx)("div",{children:d.map((function(e){return Object(u.jsxs)("div",{style:{marginTop:15},children:[Object(u.jsx)("h5",{children:e.email}),Object(u.jsx)("div",{children:e.body})]})}))})]})},exact:!0}];function z(){return Object(u.jsxs)(o.d,{children:[$.map((function(e){return Object(u.jsx)(o.b,{component:e.component,path:e.path,exact:e.exact})})),Object(u.jsx)(o.a,{to:"/posts"})]})}function G(){return Object(u.jsx)("div",{className:"navbar",children:Object(u.jsxs)("div",{className:"navbar__links",children:[Object(u.jsx)(s.b,{to:"/about",children:"\u041e \u0441\u0430\u0439\u0442\u0435"}),Object(u.jsx)(s.b,{to:"/posts",children:"\u041f\u043e\u0441\u0442\u044b"})]})})}var H=function(){return Object(u.jsxs)(s.a,{children:[Object(u.jsx)(G,{}),Object(u.jsx)(z,{})]})};a.a.render(Object(u.jsx)(H,{}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.77e045ac.chunk.js.map