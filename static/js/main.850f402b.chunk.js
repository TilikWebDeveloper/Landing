(this.webpackJsonplending=this.webpackJsonplending||[]).push([[0],{100:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/logo.d190168a.svg"},103:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/menu-icon.c551a7a2.svg"},104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/banner-photo.8424d6b9.webp"},106:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/man-laptop-v1.bdb026ef.svg"},107:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(21),i=n.n(r),c=n(19),o=n(15),l=n(60),u=n(26),d=n(3),j=n(8),b=n.n(j),p=n(17),h=n(61).create({baseURL:"https://frontend-test-assignment-api.abz.agency/api/v1/"}),m={loadToken:function(){return h.get("token").then((function(e){return e.data}))},loadUsersData:function(e){return h.get("users?page=".concat(e,"&count=6")).then((function(e){return e.data}))},sendRegisterData:function(e){var t=this;return Object(p.a)(b.a.mark((function n(){var a,s,r,i;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.loadToken();case 2:for(i in a=n.sent,s=a.token,r=new FormData,e)r.append(i,e[i]);return n.abrupt("return",h.post("users",r,{headers:{"Content-Type":"application/x-www-form-urlencoded",Token:s}}).then((function(e){return e.data})));case 7:case"end":return n.stop()}}),n)})))()}},f=function(){return h.get("positions").then((function(e){return e.data}))},_="USERS/SET_USERS_DATA",O="USERS/SET_SHOW_MORE_STATUS",x={users_data:[],total_pages:0,current_page:0,show_more_status:"disabled"},v=function(e,t,n){return{type:_,new_users:e,total_pages:t,current_page:n}},g=function(e){return{type:O,status:e}},y=function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){var a,s,r,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(g("disabled")),a=e+1,t.next=5,m.loadUsersData(a);case 5:s=t.sent,r=s.users,i=s.total_pages,n(v(r,i,a)),n(g(a>=i?"hide":"enable")),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),alert(t.t0.response.data.message);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(d.a)(Object(d.a)({},e),{},{show_more_status:t.status});case _:return Object(d.a)(Object(d.a)({},e),{},{users_data:1===t.current_page?Object(u.a)(t.new_users):[].concat(Object(u.a)(e.users_data),Object(u.a)(t.new_users)),total_pages:t.total_pages,current_page:t.current_page});default:return e}},w="REGISTER/SET_POSITIONS",k="REGISTER/SET_REGISTER_BUTTON_STATUS",S={positions:[],register_button_status:"disabled"},T=function(e){return{type:k,status:e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(d.a)(Object(d.a)({},e),{},{positions:Object(u.a)(t.positions)});case k:return Object(d.a)(Object(d.a)({},e),{},{register_button_status:t.status});default:return e}},E="APP/SET_APP_INITIALIZED",C={initialized:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},U=Object(o.c)({users:N,register:z,app:R}),L=Object(o.e)(U,Object(o.a)(l.a)),I=n(41),A=(n(92),n(4)),D=n(24),q=n(6),P=(n(100),n(1)),W=function(e){var t=e.closeNav;return Object(a.useEffect)((function(){return window.addEventListener("click",(function(e){"nav_tablet"===e.target.id&&t()})),window.removeEventListener("click",(function(){return!1}))})),Object(P.jsx)("nav",{id:"nav_tablet",className:"only_tablet nav_bar",children:Object(P.jsx)("div",{className:"nav_tablet__container",children:Object(P.jsx)("div",{className:"nav_tablet__content",children:Object(P.jsxs)("div",{className:"category",children:[Object(P.jsx)(q.Link,{to:"main_container",spy:!0,smooth:!0,offset:-60,duration:500,className:"nav_bar__link",activeClass:"active",children:"About me"}),Object(P.jsx)(q.Link,{to:"acquaintance_container",spy:!0,smooth:!0,duration:500,className:"nav_bar__link",activeClass:"active",children:"Relationships"}),Object(P.jsx)(q.Link,{to:"users_container",spy:!0,smooth:!0,duration:500,className:"nav_bar__link",activeClass:"active",children:"Users"}),Object(P.jsx)(q.Link,{to:"register_container",spy:!0,smooth:!0,duration:500,className:"nav_bar__link",activeClass:"active",children:"Sign Up"})]})})})})},M=function(e){var t=Object(a.useState)(!1),s=Object(D.a)(t,2),r=s[0],i=s[1];return Object(P.jsxs)("header",{className:"container",children:[Object(P.jsx)(q.Link,{to:"main_container",spy:!0,smooth:!0,offset:-60,duration:500,className:"logotype",children:Object(P.jsx)("img",{src:n(102).default,alt:"logotype"})}),Object(P.jsx)("button",{className:"toggle_navbar only_tablet",onClick:function(){return i(!0)},children:Object(P.jsx)("img",{src:n(103).default,alt:"logotype"})}),r&&Object(P.jsx)(W,{closeNav:function(){return i(!1)}}),Object(P.jsxs)("nav",{className:"nav_bar only_desktop",children:[Object(P.jsx)(q.Link,{to:"main_container",spy:!0,smooth:!0,offset:-60,duration:500,className:"nav_bar__link",activeClass:"active",children:"About me"}),Object(P.jsx)(q.Link,{to:"acquaintance_container",spy:!0,smooth:!0,duration:500,className:"nav_bar__link",activeClass:"active",children:"Relationships"}),Object(P.jsx)(q.Link,{to:"users_container",spy:!0,smooth:!0,duration:500,className:"nav_bar__link",activeClass:"active",children:"Users"}),Object(P.jsx)(q.Link,{to:"register_container",spy:!0,smooth:!0,duration:500,className:"nav_bar__link",activeClass:"active",children:"Sign Up"})]})]})},X=(n(104),function(){return Object(P.jsx)("footer",{className:"footer container",children:Object(P.jsx)("p",{className:"p1",children:"\xa9 abz.agency specially for the test task"})})}),F=function(){var e={backgroundImage:"url(".concat(n(105).default,")")};return Object(P.jsxs)("section",{id:"main_container",className:"main container",style:e,children:[Object(P.jsxs)("h1",{className:"h1 main__headline",children:["Test assignment",Object(P.jsx)("br",{}),"for Frontend",Object(P.jsx)("br",{}),"Developer position"]}),Object(P.jsxs)("p",{className:"main__text p1",children:["We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.\xa0",Object(P.jsx)("span",{className:"only_mobile",children:"Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens"})]}),Object(P.jsx)(q.Link,{to:"register_container",spy:!0,smooth:!0,duration:500,className:"button_primary",children:"Sing up now"})]})},G=function(){return Object(P.jsxs)("section",{id:"acquaintance_container",className:"acquaintance container",children:[Object(P.jsx)("h1",{className:"h1",children:"Let's get acquainted"}),Object(P.jsxs)("div",{className:"acquaintance__content",children:[Object(P.jsx)("div",{className:"acquaintance__image",children:Object(P.jsx)("img",{src:n(106).default,alt:"programmer"})}),Object(P.jsxs)("div",{className:"acquaintance__text",children:[Object(P.jsx)("h2",{className:"h2",children:"I am cool frontend developer"}),Object(P.jsx)("p",{className:"p1",children:"We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction."}),Object(P.jsx)("p",{className:"p1",children:"If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P\u200bSD mockup\u200b into HTML5/CSS3."}),Object(P.jsx)(q.Link,{to:"register_container",spy:!0,smooth:!0,duration:500,className:"flat_button",children:"Sing up now"})]})]})]})},$=n(25),J=(n(107),function(e){var t,n=e.title,s=Object($.a)(e,["title"]);return Object(a.useEffect)((function(){t.children[0].offsetWidth<t.children[0].scrollWidth&&t.setAttribute("data-tooltip",n)})),Object(P.jsx)("div",{ref:function(e){return t=e},className:"tooltip",children:s.children})}),Y=n.p+"static/media/photo-cover.ee434590.svg",H=function(e){var t=e.user;return Object(P.jsx)("div",{className:"user",children:Object(P.jsxs)("div",{className:"user__container",children:[Object(P.jsx)("div",{className:"user__image",children:Object(P.jsx)("img",{alt:t.name,src:t.photo,onError:function(e){return e.target.onerror=null,e.target.src=Y}})}),Object(P.jsx)("h2",{className:"user__name h2",children:t.name}),Object(P.jsx)("p",{className:"user__position p1",children:t.position}),Object(P.jsx)(J,{title:t.email,children:Object(P.jsx)("p",{className:"user__email p1",children:t.email})}),Object(P.jsx)("p",{className:"user__phone p1",children:t.phone})]})})},B=function(e){var t=e.users_data;return Object(P.jsx)("div",{className:"users__list",children:t.map((function(e,t){return Object(P.jsx)(H,{user:e},t)}))})},V=function(e){var t=e.users_data,n=e.current_page,a=e.show_more_status,s=e.getUsersData;return Object(P.jsxs)("section",{id:"users_container",className:"users container",children:[Object(P.jsxs)("div",{className:"users__text",children:[Object(P.jsx)("h1",{className:"h1",children:"Our cheerful users"}),Object(P.jsx)("p",{className:"p1",children:"Attention! Sorting users by registration date"})]}),Object(P.jsx)(B,{users_data:t}),"hide"!==a&&Object(P.jsx)("button",{onClick:function(){return s(n)},className:["button_primary",a].join(" "),children:"Show more"})]})},Z=Object(c.b)((function(e){return{users_data:e.users.users_data,current_page:e.users.current_page,show_more_status:e.users.show_more_status}}),{getUsersData:y})((function(e){var t=e.users_data,n=e.current_page,a=e.show_more_status,s=e.getUsersData;return Object(P.jsx)(V,{users_data:t,current_page:n,show_more_status:a,getUsersData:s})})),K=n(22),Q=n(64),ee=function(e,t){var n,a=Object(Q.a)(t);try{for(a.s();!(n=a.n()).done;){var s=(0,n.value)(e);if(s)return s}}catch(r){a.e(r)}finally{a.f()}},te=function(e){return e?void 0:"Field is required"},ne=function(e){return function(t){return t.length>e?"Max length is ".concat(e):void 0}},ae=function(e){return function(t){return t.length<e?"Min length is ".concat(e):void 0}},se=function(e){return e.match(/^[\+]{0,1}380([0-9]{9})$/)?void 0:"Wrong phone number"},re=function(e){return e.match(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/)?void 0:"Wrong email"},ie=function(e){return parseInt(e)?void 0:"Wrong position"},ce=function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var n,a;(n=t)&&((a=new Image).onload=function(){e({width:this.width,height:this.height})},a.src=window.URL.createObjectURL(n))}));case 2:return n=e.sent,e.abrupt("return",n.width<70||n.height<70?"Minimum size of photo 70x70px.":void 0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(e){return!1===/\.(jpe?g)$/i.test(e.name)?"The photo format must be jpeg/jpg type.":void 0},le=function(e){return ee(e,[te,ae(2),ne(60)])},ue=function(e){return ee(e,[te,re,ae(2),ne(100)])},de=function(e){return ee(e,[te,se])},je=function(e){return ee(e,[te,ie])},be=function(e){return ee(e,[te,oe,(t=5,function(e){return e.size/1e6>t?"The photo size must not be greater than ".concat(t," Mb"):void 0}),ce]);var t},pe=function(e){var t=e.form,n=e.field,a=e.title,s=e.assistive,r=Object($.a)(e,["form","field","title","assistive"]),i=t.errors[n.name],c=t.touched[n.name];return Object(P.jsxs)("div",{className:["form__field",i&&c&&"field__error"].join(" "),children:[Object(P.jsx)("p",{className:"field__title p1",children:a}),r.children,(i&&c||s)&&Object(P.jsx)("span",{className:"field__assistive",children:i&&c?i:s})]})},he=function(e){return Object(P.jsx)(pe,Object(d.a)(Object(d.a)({},e),{},{children:Object(P.jsx)("input",Object(d.a)(Object(d.a)({className:"field__input"},e.field),{},{type:e.type,placeholder:e.placeholder,inputMode:e.inputMode||null}))}))},me=function(e){return Object(P.jsx)(pe,Object(d.a)(Object(d.a)({},e),{},{children:Object(P.jsxs)("label",{className:["field__file",e.field.value&&e.field.value.name&&"text"].join(" "),children:[Object(P.jsx)("input",Object(d.a)(Object(d.a)({ref:e.childref,type:"file",className:"field__input"},e),{},{onChange:function(t){e.form.setFieldValue(e.field.name,t.currentTarget.files[0])}})),Object(P.jsx)("span",{value:e.field.value&&e.field.value.name?e.field.value.name:e.placeholder,className:"field__file_browser"})]})}))},fe=function(e){return Object(P.jsx)(pe,Object(d.a)(Object(d.a)({},e),{},{children:e.radio_controls.map((function(t,n){return Object(P.jsxs)("label",{className:"field__radio",children:[Object(P.jsx)("input",Object(d.a)(Object(d.a)({checked:e.value==t.id},e.field),{},{type:"radio",name:e.field.name,value:t.id})),Object(P.jsx)("p",{className:"p1",children:t.name})]},n)}))}))},_e=n(65),Oe=n.n(_e),xe=(n(117),{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:5,display:"flex",justifyContent:"center",alignItems:"center"},content:{inset:"auto",padding:0,width:"100%",maxWidth:"395px",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"4px"}}),ve=function(e){var t=e.closeCallback,n=Object(a.useState)(!0),s=Object(D.a)(n,2),r=s[0],i=s[1],c=function(){t&&t(),i(!1)};return Object(P.jsxs)(Oe.a,{isOpen:r,onRequestClose:c,portalClassName:"modal",ariaHideApp:!1,style:xe,children:[Object(P.jsxs)("div",{className:"modal__header",children:[Object(P.jsx)("h2",{className:"h2",children:"Congratulations"}),Object(P.jsx)("button",{onClick:c,className:"modal__close",children:"+"})]}),Object(P.jsx)("div",{className:"modal__body",children:Object(P.jsx)("p",{className:"p1",children:"You have successfully passed the registration"})}),Object(P.jsx)("div",{className:"modal__footer",children:Object(P.jsx)("button",{className:"button_primary",onClick:c,children:"Great"})})]})},ge=function(e){var t=e.register_button_status,n=e.register,s=e.positions,r=Object(a.useState)(!1),i=Object(D.a)(r,2),c=i[0],o=i[1],l=Object(a.useRef)();return Object(P.jsxs)("section",{id:"register_container",className:"register container",children:[Object(P.jsx)("h1",{className:"h1",children:"Register to get a work"}),Object(P.jsxs)("div",{className:"register__min_container",children:[Object(P.jsx)("p",{className:"p1 register__title",children:"Attention! After successful registration and alert, update the list of users in the block from the top"}),Object(P.jsx)(K.b,{className:"register__form",enableReinitialize:!0,initialValues:Object(d.a)({},{name:"",email:"",phone:"",position_id:"",photo:""}),onSubmit:function(e,t){var a=t.resetForm;n(e,(function(){l.current.value=null,a(),o(!0)}))},children:function(e){var n=e.handleSubmit,a=Object($.a)(e,["handleSubmit"]);return Object(P.jsxs)("form",{onSubmit:n,name:"register",className:"form",children:[Object(P.jsx)(K.a,{title:"Name",name:"name",placeholder:"Your name",component:he,validate:le}),Object(P.jsx)(K.a,{title:"Email",name:"email",placeholder:"Your email",component:he,validate:ue}),Object(P.jsx)(K.a,{title:"Phone number",name:"phone",placeholder:"+380 XX XXX XX XX",inputMode:"tel",assistive:"Enter a phone number in international format",component:he,validate:de}),Object(P.jsx)(K.a,{value:a.values.position_id,title:"Select your position",name:"position_id",component:fe,radio_controls:s,validate:je}),Object(P.jsx)(K.a,{childref:l,title:"Photo",placeholder:"Upload your photo",name:"photo",component:me,validate:be}),Object(P.jsx)("button",{type:"submit",className:"form__send button_primary ".concat(t),children:"Sigh up Now"})]})}})]}),c&&Object(P.jsx)(ve,{closeCallback:function(){q.scroller.scrollTo("users_container",{duration:500,spy:!0,smooth:!0})}})]})},ye=s.a.memo(ge),Ne=Object(o.d)(Object(c.b)((function(e){return{register_button_status:e.register.register_button_status,positions:e.register.positions}}),{register:function(e,t){return function(){var n=Object(p.a)(b.a.mark((function n(a){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(T("disabled")),n.next=4,m.sendRegisterData(e);case 4:a(y(0)),t({}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),alert(n.t0.response.data.message);case 11:a(T("enable"));case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}}))((function(e){var t=e.register_button_status,n=e.register,a=e.positions;return Object(P.jsx)(ye,{register_button_status:t,register:n,positions:a})})),we=(n(118),function(e){return Object(P.jsxs)("div",{children:[Object(P.jsx)(F,{}),Object(P.jsx)(G,{}),Object(P.jsx)(Z,{}),Object(P.jsx)(Ne,{})]})}),ke=function(e){return Object(P.jsx)(we,{})},Se=Object(o.d)(Object(c.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){try{var t=e(function(){var e=Object(p.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:n=e.sent,a=n.positions,t({type:w,positions:a}),t(T("enable")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),n=e(y(0));Promise.all([t,n]).then((function(){e({type:E})}))}catch(a){alert(a.response.data.message)}}}}))((function(e){return Object(a.useEffect)((function(){!e.initialized&&e.initializeApp()}),[e.initialized]),Object(P.jsxs)("div",{id:"wrapper",children:[Object(P.jsx)(M,{}),Object(P.jsx)(A.a,{path:"/",render:ke}),Object(P.jsx)(X,{})]})}));i.a.render(Object(P.jsx)(I.a,{children:Object(P.jsx)(c.a,{store:L,children:Object(P.jsx)(Se,{})})}),document.getElementById("body"))},92:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.850f402b.chunk.js.map