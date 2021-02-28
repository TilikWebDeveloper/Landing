(this.webpackJsonplending=this.webpackJsonplending||[]).push([[7],{102:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(6),o=n(23),c=n(86),s=n(3),l=n(28),u=n(4),d=n(114),f=n(5),b=n.n(f),j=n(7),m=n(101),h=function(e,t){var n,i=Object(m.a)(t);try{for(i.s();!(n=i.n()).done;){var r=(0,n.value)(e);if(r)return r}}catch(a){i.e(a)}finally{i.f()}},p=function(e){return e?void 0:"Field is required"},x=function(e){return function(t){return t.length>e?"Max length is ".concat(e):void 0}},O=function(e){return function(t){return t.length<e?"Min length is ".concat(e):void 0}},_=function(e){return e.match(/^[\+]{0,1}380([0-9]{9})$/)?void 0:"Wrong phone number"},v=function(e){return e.match(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/)?void 0:"Wrong email"},g=function(e){return parseInt(e)?void 0:"Wrong position"},N=function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var n,i;(n=t)&&((i=new Image).onload=function(){e({width:this.width,height:this.height})},i.src=window.URL.createObjectURL(n))}));case 2:return n=e.sent,e.abrupt("return",n.width<70||n.height<70?"Minimum size of photo 70x70px.":void 0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(e){return!1===/\.(jpe?g)$/i.test(e.name)?"The photo format must be jpeg/jpg type.":void 0},w=function(e){return h(e,[p,O(2),x(60)])},y=function(e){return h(e,[p,v,O(2),x(100)])},X=function(e){return h(e,[p,_])},k=function(e){return h(e,[p,g])},S=function(e){return h(e,[p,z,(t=5,function(e){return e.size/1e6>t?"The photo size must not be greater than ".concat(t," Mb"):void 0}),N]);var t},M=(n(102),n(1)),R=function(e){var t=e.form,n=e.field,i=e.title,r=e.assistive,a=Object(c.a)(e,["form","field","title","assistive"]),o=t.errors[n.name],s=t.touched[n.name];return Object(M.jsxs)("div",{className:["form__field",o&&s&&"field__error"].join(" "),children:[Object(M.jsx)("p",{className:"field__title p1",children:i}),a.children,(o&&s||r)&&Object(M.jsx)("span",{className:"field__assistive",children:o&&s?o:r})]})},$=function(e){return Object(M.jsx)(R,Object(s.a)(Object(s.a)({},e),{},{children:Object(M.jsx)("input",Object(s.a)(Object(s.a)({className:"field__input"},e.field),{},{type:e.type,placeholder:e.placeholder,inputMode:e.inputMode||null}))}))},P=function(e){return Object(M.jsx)(R,Object(s.a)(Object(s.a)({},e),{},{children:Object(M.jsxs)("label",{className:["field__file",e.field.value&&e.field.value.name&&"text"].join(" "),children:[Object(M.jsx)("input",Object(s.a)(Object(s.a)({ref:e.childref,type:"file",className:"field__input"},e),{},{onChange:function(t){e.form.setFieldValue(e.field.name,t.currentTarget.files[0])}})),Object(M.jsx)("span",{value:e.field.value&&e.field.value.name?e.field.value.name:e.placeholder,className:"field__file_browser"})]})}))},T=function(e){return Object(M.jsx)(R,Object(s.a)(Object(s.a)({},e),{},{children:e.radio_controls.map((function(t,n){return Object(M.jsxs)("label",{className:"field__radio",children:[Object(M.jsx)("input",Object(s.a)(Object(s.a)({checked:e.value==t.id},e.field),{},{type:"radio",name:e.field.name,value:t.id})),Object(M.jsx)("p",{className:"p1",children:t.name})]},n)}))}))},F=Object(i.lazy)((function(){return Promise.all([n.e(4),n.e(8)]).then(n.bind(null,117))})),U=function(e){var t=e.register_button_status,n=e.register,r=e.positions,a=Object(i.useState)(!1),o=Object(l.a)(a,2),f=o[0],b=o[1],j=Object(i.useRef)();return Object(M.jsxs)("section",{id:"register_container",className:"register container",children:[Object(M.jsx)("h1",{className:"h1",children:"Register to get a work"}),Object(M.jsxs)("div",{className:"register__min_container",children:[Object(M.jsx)("p",{className:"p1 register__title",children:"Attention! After successful registration and alert, update the list of users in the block from the top"}),Object(M.jsx)(d.b,{className:"register__form",enableReinitialize:!0,initialValues:Object(s.a)({},{name:"",email:"",phone:"",position_id:"",photo:""}),onSubmit:function(e,t){var i=t.resetForm;n(e,(function(){j.current.value=null,i(),b(!0)}))},children:function(e){var n=e.handleSubmit,i=Object(c.a)(e,["handleSubmit"]);return Object(M.jsxs)("form",{onSubmit:n,name:"register",className:"form",children:[Object(M.jsx)(d.a,{title:"Name",name:"name",placeholder:"Your name",component:$,validate:w}),Object(M.jsx)(d.a,{title:"Email",name:"email",placeholder:"Your email",component:$,validate:y}),Object(M.jsx)(d.a,{title:"Phone number",name:"phone",placeholder:"+380 XX XXX XX XX",inputMode:"tel",assistive:"Enter a phone number in international format",component:$,validate:X}),Object(M.jsx)(d.a,{value:i.values.position_id,title:"Select your position",name:"position_id",component:T,radio_controls:r,validate:k}),Object(M.jsx)(d.a,{childref:j,title:"Photo",placeholder:"Upload your photo",name:"photo",component:P,validate:S}),Object(M.jsx)("button",{type:"submit",className:"form__send button_primary ".concat(t),children:"Sigh up Now"})]})}})]}),f&&Object(M.jsx)(i.Suspense,{fallback:Object(M.jsx)("div",{id:"loading"}),children:Object(M.jsx)(F,{closeCallback:function(){u.scroller.scrollTo("users_container",{duration:500,spy:!0,smooth:!0})}})})]})},W=r.a.memo(U),A=n(16);t.default=Object(a.d)(Object(o.b)((function(e){return{register_button_status:e.register.register_button_status,positions:e.register.positions}}),{register:A.c}))((function(e){var t=e.register_button_status,n=e.register,i=e.positions;return Object(M.jsx)(W,{register_button_status:t,register:n,positions:i})}))}}]);
//# sourceMappingURL=7.dcfdbddc.chunk.js.map