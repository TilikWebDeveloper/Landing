(this.webpackJsonplending=this.webpackJsonplending||[]).push([[0],{16:function(t,e,n){"use strict";n.d(e,"b",(function(){return j}));var a=n(17),r=n(6),s=n(11),c=n.n(s),i=n(14),o=n(20),u="USERS/SET_USERS_DATA",l="USERS/SET_SHOW_MORE_STATUS",d={users_data:[],total_pages:0,current_page:0,show_more_status:"disabled"},b=function(t,e,n){return{type:u,new_users:t,total_pages:e,current_page:n}},p=function(t){return{type:l,status:t}},j=function(t){return function(){var e=Object(i.a)(c.a.mark((function e(n){var a,r,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(p("disabled")),a=t+1,e.next=5,o.b.loadUsersData(a);case 5:r=e.sent,s=r.users,i=r.total_pages,n(b(s,i,a)),n(p(a>=i?"hide":"enable")),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0.response.data.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(r.a)(Object(r.a)({},t),{},{show_more_status:e.status});case u:return Object(r.a)(Object(r.a)({},t),{},{users_data:1===e.current_page?Object(a.a)(e.new_users):[].concat(Object(a.a)(t.users_data),Object(a.a)(e.new_users)),total_pages:e.total_pages,current_page:e.current_page});default:return t}}},20:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return u}));var a=n(11),r=n.n(a),s=n(14),c=n(52),i=c.create({baseURL:"https://frontend-test-assignment-api.abz.agency/api/v1/"}),o={loadToken:function(){return i.get("token").then((function(t){return t.data}))},loadUsersData:function(t){return i.get("users?page=".concat(t,"&count=6")).then((function(t){return t.data}))},sendRegisterData:function(t){var e=this;return Object(s.a)(r.a.mark((function n(){var a,s,c,o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loadToken();case 2:for(o in a=n.sent,s=a.token,c=new FormData,t)c.append(o,t[o]);return n.abrupt("return",i.post("users",c,{headers:{"Content-Type":"application/x-www-form-urlencoded",Token:s}}).then((function(t){return t.data})));case 7:case"end":return n.stop()}}),n)})))()}},u={loadPositionsData:function(){return i.get("positions").then((function(t){return t.data}))}}},26:function(t,e,n){"use strict";n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return f}));var a=n(17),r=n(6),s=n(11),c=n.n(s),i=n(14),o=n(20),u=n(16),l="REGISTER/SET_POSITIONS",d="REGISTER/SET_REGISTER_BUTTON_STATUS",b={positions:[],register_button_status:"disabled"},p=function(t){return{type:d,status:t}},j=function(){return function(){var t=Object(i.a)(c.a.mark((function t(e){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.loadPositionsData();case 3:n=t.sent,a=n.positions,e({type:l,positions:a}),e(p("enable")),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert(t.t0.response.data.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},f=function(t,e){return function(){var n=Object(i.a)(c.a.mark((function n(a){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(p("disabled")),n.next=4,o.b.sendRegisterData(t);case 4:a(Object(u.b)(0)),e({}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),alert(n.t0.response.data.message);case 11:a(p("enable"));case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(r.a)(Object(r.a)({},t),{},{positions:Object(a.a)(e.positions)});case d:return Object(r.a)(Object(r.a)({},t),{},{register_button_status:e.status});default:return t}}},80:function(t,e,n){},88:function(t,e,n){},90:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/logo.d190168a.svg"},91:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/menu-icon.c551a7a2.svg"},92:function(t,e,n){},94:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(15),s=n.n(r),c=n(23),i=n(13),o=n(51),u=n(16),l=n(26),d=n(6),b="APP/SET_APP_INITIALIZED",p={initialized:!1},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(d.a)(Object(d.a)({},t),{},{initialized:!0});default:return t}},f=Object(i.c)({users:u.a,register:l.a,app:j}),_=Object(i.e)(f,Object(i.a)(o.a)),v=n(34),h=(n(80),n(3)),O=n(38),m=n(10),g=(n(88),n(1)),x=function(t){var e=t.closeNav;return Object(a.useEffect)((function(){return window.addEventListener("click",(function(t){"nav_tablet"===t.target.id&&e()})),window.removeEventListener("click",(function(){return!1}))})),Object(g.jsx)("nav",{id:"nav_tablet",className:"only_tablet nav_bar",children:Object(g.jsx)("div",{className:"nav_tablet__container",children:Object(g.jsx)("div",{className:"nav_tablet__content",children:Object(g.jsxs)("div",{className:"category",children:[Object(g.jsx)(m.Link,{to:"main_container",spy:!0,smooth:!0,offset:-60,duration:500,className:"nav_bar__link",activeClass:"active",children:"About me"}),Object(g.jsx)(m.Link,{to:"acquaintance_container",spy:!0,smooth:!0,duration:500,className:"nav_bar__link",activeClass:"active",children:"Relationships"}),Object(g.jsx)(m.Link,{to:"users_container",spy:!0,smooth:!0,duration:500,className:"nav_bar__link",activeClass:"active",children:"Users"}),Object(g.jsx)(m.Link,{to:"register_container",spy:!0,smooth:!0,duration:500,className:"nav_bar__link",activeClass:"active",children:"Sign Up"})]})})})})},k=function(t){var e=Object(a.useState)(!1),r=Object(O.a)(e,2),s=r[0],c=r[1];return Object(g.jsxs)("header",{className:"container",children:[Object(g.jsx)(m.Link,{to:"main_container",spy:!0,smooth:!0,offset:-60,duration:500,className:"logotype",children:Object(g.jsx)("img",{src:n(90).default,alt:"logotype"})}),Object(g.jsx)("button",{className:"toggle_navbar only_tablet",onClick:function(){return c(!0)},children:Object(g.jsx)("img",{src:n(91).default,alt:"logotype"})}),s&&Object(g.jsx)(x,{closeNav:function(){return c(!1)}}),Object(g.jsxs)("nav",{className:"nav_bar only_desktop",children:[Object(g.jsx)(m.Link,{to:"main_container",spy:!0,smooth:!0,offset:-60,duration:500,className:"nav_bar__link",activeClass:"active",children:"About me"}),Object(g.jsx)(m.Link,{to:"acquaintance_container",spy:!0,smooth:!0,duration:500,className:"nav_bar__link",activeClass:"active",children:"Relationships"}),Object(g.jsx)(m.Link,{to:"users_container",spy:!0,smooth:!0,duration:500,className:"nav_bar__link",activeClass:"active",children:"Users"}),Object(g.jsx)(m.Link,{to:"register_container",spy:!0,smooth:!0,duration:500,className:"nav_bar__link",activeClass:"active",children:"Sign Up"})]})]})},y=(n(92),function(){return Object(g.jsx)("footer",{className:"footer container",children:Object(g.jsx)("p",{className:"p1",children:"\xa9 abz.agency specially for the test task"})})}),w=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,130))})),S=Object(i.d)(Object(c.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){try{var e=t(Object(l.b)()),n=t(Object(u.b)(0));Promise.all([e,n]).then((function(){t({type:b})}))}catch(a){alert(a.response.data.message)}}}}))((function(t){return Object(a.useEffect)((function(){!t.initialized&&t.initializeApp()}),[t.initialized]),Object(g.jsxs)("div",{id:"wrapper",children:[Object(g.jsx)(k,{}),Object(g.jsx)(h.a,{path:"/",render:function(){return Object(g.jsx)(a.Suspense,{fallback:"Loading",children:Object(g.jsx)(w,{})})}}),Object(g.jsx)(y,{})]})}));s.a.render(Object(g.jsx)(v.a,{children:Object(g.jsx)(c.a,{store:_,children:Object(g.jsx)(S,{})})}),document.getElementById("body"))}},[[94,1,2]]]);
//# sourceMappingURL=main.2a9e1618.chunk.js.map