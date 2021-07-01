(this["webpackJsonpmy-library"]=this["webpackJsonpmy-library"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n.n(a),o=n(19),r=n.n(o),c=(n(49),n(50),n(51),n(8)),i=(n(52),n(3));function l(e){var t=e.openModal;return Object(i.jsx)("div",{className:"d-grid",children:Object(i.jsx)("button",{className:"btn btn-large btn-success rounded",onClick:t,children:"Add Book"})})}function d(e){var t=e.openModal,n=e.isSignedIn,a=e.onRouteChange,s=e.setUser;return Object(i.jsx)("nav",{className:"navbar navbar-expand-sm sticky-top navbar-light bg-light",children:Object(i.jsxs)("div",{className:"container-fluid justify-content-between",children:[Object(i.jsxs)("div",{className:"ms-2 navbar-brand",children:[Object(i.jsx)("span",{className:"h1 mb-0 textColorGradient",children:Object(i.jsx)("i",{className:"fas fa-book-reader"})}),Object(i.jsx)("span",{className:"mb-0 h1",children:"My Library"})]}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),!0===n?Object(i.jsxs)("div",{className:"collapse navbar-collapse justify-content-sm-end d-grid",id:"navbarTogglerDemo03",children:[Object(i.jsx)(l,{className:".d-none .d-sm-block .d-md-none",openModal:t}),Object(i.jsx)("button",{onClick:function(){return a("signout")},className:"btn btn-danger ",children:"Sign Out"})]}):Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:function(){fetch("https://damp-depths-04548.herokuapp.com/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:"demo@demo.com",password:"demo"})}).then((function(e){return e.json()})).then((function(e){e[0].userid&&(s(e[0]),a("home"))})).catch((function(e){console.log("look over code screwy somewhere")}))},className:"btn btn-info ",children:"Demo"})})]})})}var b=n(21),h=n(13);function m(e){var t=e.title,n=e.author,a=e.pages,s=e.id,o=e.removeBook,r=e.updateBook,c=e.finished;return Object(i.jsx)(h.b,{className:"m-4",style:{width:"30vh"},type:"zoomIn",duration:"1.5s",children:Object(i.jsx)("div",{className:"card overflow-hidden",style:{width:"33vh",border:"1px solid black",borderRadius:"20%"},children:Object(i.jsxs)("div",{className:"container p-3 bg-primary-trans",children:[Object(i.jsx)("h2",{className:"card-title h-100",style:{fontWeight:"bold",minHeight:"72px"},children:t}),Object(i.jsxs)("div",{className:"card-body row",children:[Object(i.jsx)("p",{className:"card-text text-white",children:"Author: ".concat(n)}),Object(i.jsx)("p",{className:"card-text text-white",children:"".concat(a," pages")}),Object(i.jsx)("p",{className:"card-text text-white",children:!0===c?"Finished":"Not Read"})]}),Object(i.jsxs)("div",{className:"d-grid gap-2",children:[Object(i.jsx)("button",{onClick:function(){return r(s)},className:"btn btn-success  rounde btn-sm m-1",children:"Finished Book"}),Object(i.jsx)("button",{onClick:function(){return o(s)},className:"btn btn-danger rounded btn-sm m-1",children:"Delete from Library"})]})]})})})}function u(e){var t=e.library,n=e.setLibrary,s=e.user,o=e.show,r="https://damp-depths-04548.herokuapp.com/library-item/".concat(s.userid);function c(e){for(var a=t,s=0;s<a.length;s++)a[s].id===e&&(fetch("https://damp-depths-04548.herokuapp.com/library-item",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,remove:!0})}).then((function(e){return e.json()})),a.splice(s,1),n((function(){return Object(b.a)(a)})));return t.map(d)}function l(e){for(var a=t,s=0;s<a.length;s++)a[s].id===e?(!0===a[s].completed?(a[s].completed=!1,fetch("https://damp-depths-04548.herokuapp.com/library-item",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,update:!0,completed:!1})}).then((function(e){return e.json()}))):a[s].completed||(a[s].completed=!0,fetch("https://damp-depths-04548.herokuapp.com/library-item",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,update:!0,completed:!0})}).then((function(e){return e.json()}))),n((function(){return Object(b.a)(a)}))):a[s].id===e&&(fetch("https://damp-depths-04548.herokuapp.com/library-item",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,remove:!0})}).then((function(e){return e.json()})),n((function(){return Object(b.a)(a)})))}function d(e){return Object(i.jsx)(m,{id:e.id,title:e.title,author:e.author,pages:e.pages,finished:e.completed,removeBook:c,updateBook:l},e.id)}return Object(a.useEffect)((function(){var e=!0;return function(e){return fetch(e).then((function(e){return e.json()}))}(r).then((function(t){e&&n((function(){return t}))})),function(){return e=!1}}),[o]),Object(i.jsx)("div",{className:"container mt-5",children:Object(i.jsx)("div",{className:"row rol-cols-xs-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 justify-content-center align-items-center",children:t.map(d)})})}var j=n(10),p=n(9);function f(e){var t=e.type,n=e.id,a=e.name,s=e.placeholder,o=e.labelFor,r=e.label,c=e.handleChange,l=e.setValue;return Object(i.jsxs)("div",{className:"form-floating mb-3",children:[Object(i.jsx)("input",{type:t,className:"form-control",id:n,name:a,placeholder:s,onChange:c,value:l}),Object(i.jsx)("label",{htmlFor:o,children:r})]})}function O(e){var t=e.show,n=e.showModal,s=e.removeModal,o=e.handleSubmit,r=e.setLibrary,l=e.user,d=Object(a.useState)({title:"",author:"",pages:"",completed:!1}),b=Object(c.a)(d,2),h=b[0],m=b[1],u={title:"",author:"",pages:"",completed:!1},O=function(e){m(Object(p.a)(Object(p.a)({},h),{},Object(j.a)({},e.target.id,e.target.value)))};return Object(i.jsx)("div",{className:"modal ".concat(t," fade "),id:"exampleModal",tabIndex:"1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",style:n,children:Object(i.jsx)("div",{className:"modal-dialog",role:"document",children:Object(i.jsxs)("div",{className:"modal-content text-center",children:[Object(i.jsxs)("div",{className:"modal-header text-center",children:[Object(i.jsx)("h5",{className:"modal-title text-uppercase text-center",id:"exampleModalLabel",children:"Add Book To Library"}),Object(i.jsx)("button",{type:"button",className:"btn-close","data-dismiss":"modal","aria-label":"Close",onClick:function(){s(),m(u)}})]}),Object(i.jsx)("div",{className:"modal-body text-center",children:Object(i.jsxs)("form",{children:[Object(i.jsx)(f,{type:"text",id:"title",name:"title",label:"Title",placeholder:"Title",labelFor:"title",setValue:h.title,handleChange:O}),Object(i.jsx)(f,{type:"text",id:"author",name:"author",label:"Author",placeholder:"Author",labelFor:"author",setValue:h.author,handleChange:O}),Object(i.jsx)(f,{type:"number",id:"pages",name:"pages",label:"Pages",placeholder:"Pages",labelFor:"pages",setValue:h.pages,handleChange:O}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"finished",children:"Have you finished the book?"}),Object(i.jsxs)("select",{onChange:O,className:"form-select form-select-lg mb-3",id:"finished","aria-label":".form-select-lg form",children:[Object(i.jsx)("option",{value:!0,children:"Yes"}),Object(i.jsx)("option",{value:!1,children:"No"})]})]}),Object(i.jsx)("button",{onClick:function(e){return(t=e).preventDefault(),fetch("https://damp-depths-04548.herokuapp.com/library-item",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userid:l.userid,title:h.title,author:h.author,pages:h.pages,completed:h.completed,email:l.email})}).then((function(e){return e.json()})).then((function(e){r((function(){return e}))})),o(t),void m(u);var t},className:"btn rounded-pill btn-primary",children:"Submit"})]})})]})})})}function g(e){var t=e.onRouteChange,n=e.setUser,s=Object(a.useState)({email:"",password:""}),o=Object(c.a)(s,2),r=o[0],l=o[1],d=function(e){l(Object(p.a)(Object(p.a)({},r),{},Object(j.a)({},e.target.id,e.target.value)))};return Object(i.jsx)(h.b,{type:"slideInDown",duration:"1.4s",children:Object(i.jsx)("div",{className:"mt-5 d-flex justify-content-center ",children:Object(i.jsx)("div",{className:"container-fluid col-8 offset-2 bg-primary-trans  overflow-hidden  shadow-lg p-3 mb-5 rounded",children:Object(i.jsxs)("div",{className:"w-100",children:[Object(i.jsx)("div",{className:"border-bottom h2 p-2 text-white",children:"Sign In"}),Object(i.jsxs)("form",{children:[Object(i.jsx)(f,{type:"email",id:"email",name:"email",label:"Email",placeholder:"Email",labelFor:"email",setValue:r.email,handleChange:d}),Object(i.jsx)(f,{type:"password",id:"password",name:"password",label:"Password",placeholder:"Password",labelFor:"password",setValue:r.password,handleChange:d}),Object(i.jsxs)("div",{className:"d-flex justify-content-sm-between flex-column",children:[Object(i.jsx)("button",{onClick:function(e){return e.preventDefault(),void fetch("https://damp-depths-04548.herokuapp.com/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r.email,password:r.password})}).then((function(e){return e.json()})).then((function(e){e[0].userid&&(n(e[0]),t("home"))})).catch((function(e){console.log("look over code screwy somewhere")}))},className:"btn btn-primary btn-lg col-xs-12 ",children:"Sign In"}),Object(i.jsx)("button",{onClick:function(e){return e.preventDefault(),void t("register")},className:"btn btn btn-secondary btn-lg col-xs-12  ",children:"Register"})]})]})]})})})})}function x(e){var t=e.onRouteChange,n=e.setUser,s=(e.user,Object(a.useState)({email:"",password:"",name:""})),o=Object(c.a)(s,2),r=o[0],l=o[1],d=function(e){l(Object(p.a)(Object(p.a)({},r),{},Object(j.a)({},e.target.id,e.target.value)))};return Object(i.jsx)(h.b,{type:"slideInLeft",duration:"1.2s",children:Object(i.jsx)("div",{className:"mt-5 d-flex justify-content-center ",children:Object(i.jsx)("div",{className:"container-fluid col-8 offset-2 bg-primary-trans  overflow-hidden  shadow-lg p-3 mb-5 rounded",children:Object(i.jsxs)("form",{className:"w-100",children:[Object(i.jsx)("div",{className:"border-bottom h2 p-2 text-white",children:"Register"}),Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{type:"text",id:"name",name:"name",label:"Name",placeholder:"Name",labelFor:"name",setValue:r.name,handleChange:d}),Object(i.jsx)(f,{type:"email",id:"email",name:"email",label:"Email",placeholder:"Email",labelFor:"email",setValue:r.email,handleChange:d}),Object(i.jsx)(f,{type:"password",id:"password",name:"password",label:"Password",placeholder:"Password",labelFor:"password",setValue:r.password,handleChange:d}),Object(i.jsx)("div",{className:"d-flex justify-content-sm-between flex-column",children:Object(i.jsx)("button",{onClick:function(e){e.preventDefault(),fetch("https://damp-depths-04548.herokuapp.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r.name,email:r.email,password:r.password})}).then((function(e){return e.json()})).then((function(e){n(e),e.userid&&t("home")}))},className:"btn btn btn-secondary btn-lg col-xs-12  ",children:"Register"})})]})]})})})})}var v=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],s=t[1],o={display:"none"},r={display:"block",backgroundColor:"rgba(0, 0, 0, .8)"},l=Object(a.useState)(o),b=Object(c.a)(l,2),h=b[0],m=b[1],j=Object(a.useState)(""),p=Object(c.a)(j,2),f=p[0],v=p[1],y=Object(a.useState)("signin"),N=Object(c.a)(y,2),w=N[0],C=N[1],k=Object(a.useState)(!1),S=Object(c.a)(k,2),T=S[0],F=S[1],M=Object(a.useState)(""),D=Object(c.a)(M,2),L=D[0],P=D[1];function R(e){"signout"===e?(C("signin"),P(""),F(!1)):"home"===e?F(!0):C("signin"),C(e)}return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(d,{openModal:function(){m(r),v("show")},isSignedIn:T,onRouteChange:R,setUser:P,user:L}),"home"===w?Object(i.jsxs)("div",{children:[Object(i.jsx)(O,{show:f,showModal:h,handleSubmit:function(e,t){e.preventDefault(),v(""),m(o)},removeModal:function(){m(o),v("")},setLibrary:s,user:L}),Object(i.jsx)(u,{library:n,setLibrary:s,user:L,show:f})]}):"signin"===w||"signout"===w?Object(i.jsx)(g,{onRouteChange:R,setUser:P}):Object(i.jsx)(x,{onRouteChange:R,setUser:P,user:L})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),o(e),r(e)}))};n(79);r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),y()}},[[80,1,2]]]);
//# sourceMappingURL=main.df2663f8.chunk.js.map