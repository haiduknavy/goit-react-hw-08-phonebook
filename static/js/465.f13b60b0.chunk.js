"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[465],{2465:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a,r=n(885),s=n(2791),o=new Uint8Array(16);function u(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(o)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var l=function(e){return"string"===typeof e&&i.test(e)},c=[],d=0;d<256;++d)c.push((d+256).toString(16).substr(1));var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!l(n))throw TypeError("Stringified UUID is invalid");return n};var m=function(e,t,n){var a=(e=e||{}).random||(e.rng||u)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=a[r];return t}return f(a)},p=n(6030),b=n(3634),h=n(1775),y=n(9856),v=n(9043),g=(n(5432),n(184));function x(){var e=(0,s.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=t[1],o=(0,s.useState)(""),u=(0,r.Z)(o,2),i=u[0],l=u[1],c=(0,p.v9)(h.vS),d=(0,p.I0)(),f=function(e){"name"===e.target.name?a(e.target.value):"number"===e.target.name&&l(e.target.value)};return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("form",{className:y.Z.form,onSubmit:function(e){e.preventDefault(),c.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?new v.Z({status:"error",text:'Name "'.concat(n,'" is already in contacts'),effect:"slide",type:3,autoclose:2e3}):(d((0,b.XJ)({name:n,number:i,id:m()})),a(""),l(""),new v.Z({status:"success",text:'Contact "'.concat(n,'" is adding to your contacts'),effect:"slide",type:3,autoclose:2e3}))},children:[(0,g.jsx)("label",{children:"Name"}),(0,g.jsx)("input",{className:y.Z.input,value:n,autoComplete:"off",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:f}),(0,g.jsx)("label",{children:"Number"}),(0,g.jsx)("input",{className:y.Z.input,value:i,autoComplete:"off",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:f}),(0,g.jsx)("button",{type:"submit",className:y.Z.btn,children:"Add contact"})]})})}function C(){var e=(0,p.I0)(),t=(0,p.v9)(h.F4);(0,s.useEffect)((function(){e((0,b.Tt)())}),[e]);return(0,g.jsx)("ul",{className:y.Z.list,children:t.map((function(t){var n=t.id,a=t.name,r=t.number;return(0,g.jsxs)("li",{className:y.Z.listItem,children:[(0,g.jsxs)("p",{children:[a,": ",r]}),(0,g.jsx)("button",{type:"button",className:y.Z.btnDelete,id:n,onClick:function(){return function(t){e((0,b.Cl)(t)),e((0,b.Tt)()),new v.Z({status:"warning",text:"Contact has been deleted",effect:"slide",type:3,autoclose:2e3})}(n)},children:"Delete"})]},n)}))})}var j=n(6962);function Z(){var e=(0,p.I0)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("label",{htmlFor:"find",className:y.Z.label,children:"Find contacts by name"}),(0,g.jsx)("input",{className:y.Z.input,autoComplete:"off",id:"find",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]",onChange:function(t){t.preventDefault(),e((0,j.M)(t.target.value.toLowerCase()))}})]})}var _=n(8971);function w(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h1",{className:_.Z.title,children:"Your phonebook"}),(0,g.jsx)(x,{}),(0,g.jsx)(Z,{}),(0,g.jsx)(C,{})]})}},8971:function(e,t){t.Z={label:"styles_label__IRvBR",title:"styles_title__Eys6g",form:"styles_form__oR3c0",input:"styles_input__t9D6P",btn:"styles_btn__jb-0V"}}}]);
//# sourceMappingURL=465.f13b60b0.chunk.js.map