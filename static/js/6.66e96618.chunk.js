(this.webpackJsonplending=this.webpackJsonplending||[]).push([[6],{108:function(e,s,t){},128:function(e,s,t){"use strict";t.r(s);var r=t(0),a=t(23),n=t(16),c=t(107),i=t(96),o=(t(108),t(1)),u=function(e){var s,t=e.title,a=Object(i.a)(e,["title"]);return Object(r.useEffect)((function(){s.children[0].offsetWidth<s.children[0].scrollWidth&&s.setAttribute("data-tooltip",t)})),Object(o.jsx)("div",{ref:function(e){return s=e},className:"tooltip",children:a.children})},l=t.p+"static/media/photo-cover.ee434590.svg",d=Object(c.trackWindowScroll)((function(e){var s=e.user,t=e.scrollPosition;return Object(o.jsx)("div",{className:"user",children:Object(o.jsxs)("div",{className:"user__container",children:[Object(o.jsx)("div",{className:"user__image",children:Object(o.jsx)(c.LazyLoadImage,{alt:s.name,scrollPosition:t,src:s.photo,onError:function(e){return e.target.onerror=null,e.target.src=l}})}),Object(o.jsx)("h2",{className:"user__name h2",children:s.name}),Object(o.jsx)("p",{className:"user__position p1",children:s.position}),Object(o.jsx)(u,{title:s.email,children:Object(o.jsx)("p",{className:"user__email p1",children:s.email})}),Object(o.jsx)("p",{className:"user__phone p1",children:s.phone})]})})})),j=function(e){var s=e.users_data;return Object(o.jsx)("div",{className:"users__list",children:s.map((function(e,s){return Object(o.jsx)(d,{user:e},s)}))})},_=function(e){var s=e.users_data,t=e.current_page,r=e.show_more_status,a=e.getUsersData;return Object(o.jsxs)("section",{id:"users_container",className:"users container",children:[Object(o.jsxs)("div",{className:"users__text",children:[Object(o.jsx)("h1",{className:"h1",children:"Our cheerful users"}),Object(o.jsx)("p",{className:"p1",children:"Attention! Sorting users by registration date"})]}),Object(o.jsx)(j,{users_data:s}),"hide"!==r&&Object(o.jsx)("button",{onClick:function(){return a(t)},className:["button_primary",r].join(" "),children:"Show more"})]})};s.default=Object(a.b)((function(e){return{users_data:e.users.users_data,current_page:e.users.current_page,show_more_status:e.users.show_more_status}}),{getUsersData:n.b})((function(e){var s=e.users_data,t=e.current_page,r=e.show_more_status,a=e.getUsersData;return Object(o.jsx)(_,{users_data:s,current_page:t,show_more_status:r,getUsersData:a})}))}}]);
//# sourceMappingURL=6.66e96618.chunk.js.map