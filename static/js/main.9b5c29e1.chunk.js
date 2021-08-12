(this["webpackJsonpmy-library"]=this["webpackJsonpmy-library"]||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(4),o=n.n(a),s=n(18),r=n.n(s),i=(n(46),n(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function c(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(48);var l=n(7),d=(n(49),n(3));function b(e){var t=e.openModal;return Object(d.jsx)("div",{className:"d-grid",children:Object(d.jsx)("button",{className:"btn btn-large btn-success rounded",onClick:t,children:"Add Book"})})}function h(e){var t=e.openModal,n=e.isSignedIn,a=e.onRouteChange,o=e.setUser;return Object(d.jsx)("nav",{className:"navbar navbar-expand-sm sticky-top navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid justify-content-between",children:[Object(d.jsxs)("div",{className:"ms-2 navbar-brand",children:[Object(d.jsx)("span",{className:"h1 mb-0 textColorGradient",children:Object(d.jsx)("i",{className:"fas fa-book-reader"})}),Object(d.jsx)("span",{className:"mb-0 h1",children:"My Library"})]}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),!0===n?Object(d.jsxs)("div",{className:"collapse navbar-collapse justify-content-sm-end",id:"navbarTogglerDemo03",children:[Object(d.jsx)(b,{className:".d-none .d-sm-block .d-md-none",openModal:t}),Object(d.jsx)("div",{className:"d-grid",children:Object(d.jsx)("button",{onClick:function(){return a("signout")},className:"btn btn-danger ",children:"Sign Out"})})]}):Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){fetch("https://damp-depths-04548.herokuapp.com/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:"demo@demo.com",password:"demo"})}).then((function(e){return e.json()})).then((function(e){e[0].userid&&(o(e[0]),a("home"))})).catch((function(e){console.log("look over code screwy somewhere")}))},className:"btn btn-info ",children:"Demo"})})]})})}var u=n(13);function m(e){var t=e.title,n=e.author,a=e.pages,o=e.id,s=e.removeBook,r=e.updateBook,i=e.finished;return Object(d.jsx)(u.b,{className:"m-4",style:{width:"30vh"},type:"zoomIn",duration:"1.5s",children:Object(d.jsx)("div",{className:"card overflow-hidden",style:{width:"33vh",border:"1px solid black",borderRadius:"20%"},children:Object(d.jsxs)("div",{className:"container p-3 bg-primary-trans",children:[Object(d.jsx)("h2",{className:"card-title h-100",style:{fontWeight:"bold",minHeight:"72px"},children:t}),Object(d.jsxs)("div",{className:"card-body row",children:[Object(d.jsx)("p",{className:"card-text text-white",children:"Author: ".concat(n)}),Object(d.jsx)("p",{className:"card-text text-white",children:"".concat(a," pages")}),Object(d.jsx)("p",{className:"card-text text-white",children:!0===i?"Finished":"Not Read"})]}),Object(d.jsxs)("div",{className:"d-grid gap-2",children:[Object(d.jsx)("button",{onClick:function(){return r(o)},className:"btn btn-success  rounde btn-sm m-1",children:"Finished Book"}),Object(d.jsx)("button",{onClick:function(){return s(o)},className:"btn btn-danger rounded btn-sm m-1",children:"Delete from Library"})]})]})})})}function j(e){var t=e.library,n=e.setLibrary,o=e.user,s=(e.show,e.showModal,Object(a.useState)(!1)),r=Object(l.a)(s,2),i=(r[0],r[1]),c="https://damp-depths-04548.herokuapp.com/library-item/".concat(o.userid);function b(e){for(var n=t,a=0;a<n.length;a++)n[a].id===e&&(fetch("https://damp-depths-04548.herokuapp.com/library-item",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,remove:!0})}).then((function(e){return e.json()})),i(!0),i(!1));return t.map(u)}function h(e){for(var n=t,a=0;a<n.length;a++)n[a].id===e?(!0===n[a].completed?(n[a].completed=!1,fetch("https://damp-depths-04548.herokuapp.com/library-item",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,update:!0,completed:!1})}).then((function(e){return e.json()}))):n[a].completed||(n[a].completed=!0,fetch("https://damp-depths-04548.herokuapp.com/library-item",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,update:!0,completed:!0})}).then((function(e){return e.json()}))),i(!0),i(!1)):n[a].id===e&&(fetch("https://damp-depths-04548.herokuapp.com/library-item",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,remove:!0})}).then((function(e){return e.json()})),i(!0),i(!1))}function u(e){return Object(d.jsx)(m,{id:e.id,title:e.title,author:e.author,pages:e.pages,finished:e.completed,removeBook:b,updateBook:h},e.id)}return Object(a.useEffect)((function(){(function(e){return fetch(e).then((function(e){return e.json()}))})(c).then((function(e){t.length!==e.length&&n(e)}))}),[i]),Object(d.jsx)("div",{className:"container mt-5",children:Object(d.jsx)("div",{className:"row rol-cols-xs-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 justify-content-center align-items-center",children:t.map(u)})})}var p=n(10),f=n(9);function g(e){var t=e.type,n=e.id,a=e.name,o=e.placeholder,s=e.labelFor,r=e.label,i=e.handleChange,c=e.setValue;return Object(d.jsxs)("div",{className:"form-floating mb-3",children:[Object(d.jsx)("input",{type:t,className:"form-control",id:n,name:a,placeholder:o,onChange:i,value:c}),Object(d.jsx)("label",{htmlFor:s,children:r})]})}function O(e){var t=e.show,n=e.showModal,o=e.removeModal,s=e.handleSubmit,r=e.setLibrary,i=e.user,c=Object(a.useState)({title:"",author:"",pages:"",completed:!1}),b=Object(l.a)(c,2),h=b[0],u=b[1],m={title:"",author:"",pages:"",completed:!1},j=function(e){u(Object(f.a)(Object(f.a)({},h),{},Object(p.a)({},e.target.id,e.target.value)))};return Object(d.jsx)("div",{className:"modal ".concat(t," fade "),id:"exampleModal",tabIndex:"1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",style:n,children:Object(d.jsx)("div",{className:"modal-dialog",role:"document",children:Object(d.jsxs)("div",{className:"modal-content text-center",children:[Object(d.jsxs)("div",{className:"modal-header text-center",children:[Object(d.jsx)("h5",{className:"modal-title text-uppercase text-center",id:"exampleModalLabel",children:"Add Book To Library"}),Object(d.jsx)("button",{type:"button",className:"btn-close","data-dismiss":"modal","aria-label":"Close",onClick:function(){o(),u(m)}})]}),Object(d.jsx)("div",{className:"modal-body text-center",children:Object(d.jsxs)("form",{children:[Object(d.jsx)(g,{type:"text",id:"title",name:"title",label:"Title",placeholder:"Title",labelFor:"title",setValue:h.title,handleChange:j}),Object(d.jsx)(g,{type:"text",id:"author",name:"author",label:"Author",placeholder:"Author",labelFor:"author",setValue:h.author,handleChange:j}),Object(d.jsx)(g,{type:"number",id:"pages",name:"pages",label:"Pages",placeholder:"Pages",labelFor:"pages",setValue:h.pages,handleChange:j}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"finished",children:"Have you finished the book?"}),Object(d.jsxs)("select",{onChange:j,className:"form-select form-select-lg mb-3",id:"finished","aria-label":".form-select-lg form",children:[Object(d.jsx)("option",{value:!0,children:"Yes"}),Object(d.jsx)("option",{value:!1,children:"No"})]})]}),Object(d.jsx)("button",{onClick:function(e){return(t=e).preventDefault(),fetch("https://damp-depths-04548.herokuapp.com/library-item",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userid:i.userid,title:h.title,author:h.author,pages:h.pages,completed:h.completed,email:i.email})}).then((function(e){return e.json()})).then((function(e){r(e)})),s(t),void u(m);var t},className:"btn rounded-pill btn-primary",children:"Submit"})]})})]})})})}function x(e){var t=e.onRouteChange,n=e.setUser,o=Object(a.useState)({email:"",password:""}),s=Object(l.a)(o,2),r=s[0],i=s[1],c=function(e){i(Object(f.a)(Object(f.a)({},r),{},Object(p.a)({},e.target.id,e.target.value)))};return Object(d.jsx)(u.b,{type:"slideInDown",duration:"1.4s",children:Object(d.jsx)("div",{className:"mt-5 d-flex justify-content-center ",children:Object(d.jsx)("div",{className:"container-fluid col-8 offset-2 bg-primary-trans  overflow-hidden  shadow-lg p-3 mb-5 rounded",children:Object(d.jsxs)("div",{className:"w-100",children:[Object(d.jsx)("div",{className:"border-bottom h2 p-2 text-white",children:"Sign In"}),Object(d.jsxs)("form",{children:[Object(d.jsx)(g,{type:"email",id:"email",name:"email",label:"Email",placeholder:"Email",labelFor:"email",setValue:r.email,handleChange:c}),Object(d.jsx)(g,{type:"password",id:"password",name:"password",label:"Password",placeholder:"Password",labelFor:"password",setValue:r.password,handleChange:c}),Object(d.jsxs)("div",{className:"d-flex justify-content-sm-between flex-column",children:[Object(d.jsx)("button",{onClick:function(e){return e.preventDefault(),void fetch("https://damp-depths-04548.herokuapp.com/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r.email,password:r.password})}).then((function(e){return e.json()})).then((function(e){e[0].userid&&(n(e[0]),t("home"))})).catch((function(e){console.log("look over code screwy somewhere")}))},className:"btn btn-primary btn-lg col-xs-12 ",children:"Sign In"}),Object(d.jsx)("button",{onClick:function(e){return e.preventDefault(),void t("register")},className:"btn btn btn-secondary btn-lg col-xs-12  ",children:"Register"})]})]})]})})})})}function v(e){var t=e.onRouteChange,n=e.setUser,o=(e.user,Object(a.useState)({email:"",password:"",name:""})),s=Object(l.a)(o,2),r=s[0],i=s[1],c=function(e){i(Object(f.a)(Object(f.a)({},r),{},Object(p.a)({},e.target.id,e.target.value)))};return Object(d.jsx)(u.b,{type:"slideInLeft",duration:"1.2s",children:Object(d.jsx)("div",{className:"mt-5 d-flex justify-content-center ",children:Object(d.jsx)("div",{className:"container-fluid col-8 offset-2 bg-primary-trans  overflow-hidden  shadow-lg p-3 mb-5 rounded",children:Object(d.jsxs)("form",{className:"w-100",children:[Object(d.jsx)("div",{className:"border-bottom h2 p-2 text-white",children:"Register"}),Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{type:"text",id:"name",name:"name",label:"Name",placeholder:"Name",labelFor:"name",setValue:r.name,handleChange:c}),Object(d.jsx)(g,{type:"email",id:"email",name:"email",label:"Email",placeholder:"Email",labelFor:"email",setValue:r.email,handleChange:c}),Object(d.jsx)(g,{type:"password",id:"password",name:"password",label:"Password",placeholder:"Password",labelFor:"password",setValue:r.password,handleChange:c}),Object(d.jsx)("div",{className:"d-flex justify-content-sm-between flex-column",children:Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),fetch("https://damp-depths-04548.herokuapp.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r.name,email:r.email,password:r.password})}).then((function(e){return e.json()})).then((function(e){n(e),e.userid&&t("home")}))},className:"btn btn btn-secondary btn-lg col-xs-12  ",children:"Register"})})]})]})})})})}var y=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],s={display:"none"},r={display:"block",backgroundColor:"rgba(0, 0, 0, .8)"},i=Object(a.useState)(s),c=Object(l.a)(i,2),b=c[0],u=c[1],m=Object(a.useState)(""),p=Object(l.a)(m,2),f=p[0],g=p[1],y=Object(a.useState)("signin"),w=Object(l.a)(y,2),N=w[0],k=w[1],C=Object(a.useState)(!1),S=Object(l.a)(C,2),T=S[0],F=S[1],M=Object(a.useState)(""),L=Object(l.a)(M,2),P=L[0],R=L[1];function D(e){"signout"===e?(k("signin"),R(""),F(!1)):"home"===e?F(!0):k("signin"),k(e)}return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{openModal:function(){u(r),g("show")},isSignedIn:T,onRouteChange:D,setUser:R,user:P}),"home"===N?Object(d.jsxs)("div",{children:[Object(d.jsx)(O,{show:f,showModal:b,handleSubmit:function(e,t){e.preventDefault(),g(""),u(s)},removeModal:function(){u(s),g("")},setLibrary:o,user:P}),Object(d.jsx)(j,{library:n,setLibrary:o,user:P,show:f,showModal:b})]}):"signin"===N||"signout"===N?Object(d.jsx)(x,{onRouteChange:D,setUser:R}):Object(d.jsx)(v,{onRouteChange:D,setUser:R,user:P})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),s(e),r(e)}))};n(76);r.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/my-library",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/my-library","/service-worker.js");i?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):c(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):c(t,e)}))}}(),w()}},[[77,1,2]]]);
//# sourceMappingURL=main.9b5c29e1.chunk.js.map