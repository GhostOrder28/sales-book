(function(){"use strict";var e={3965:function(e,n,t){var r=t(9242),i=t(3396);function o(e,n,t,r,o,a){const s=(0,i.up)("Navigation"),u=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a.isAuth?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(s,{key:0})),(0,i.Wm)(u)],64)}t(5654);const a=(0,i.RC)((()=>Promise.all([t.e(89),t.e(981)]).then(t.bind(t,4981))));var s={components:{Navigation:a},computed:{isAuth(){return"/signin"===this.$route.path||"/signup"===this.$route.path}}},u=t(89);const c=(0,u.Z)(s,[["render",o]]);var l=c,f=t(3824),d=t(8632);(0,r.ri)(l).use(f.Z).use(d.Z).mount("#app")},3824:function(e,n,t){var r=t(2483),i=t(8632);const o=()=>Promise.all([t.e(89),t.e(678)]).then(t.bind(t,8678)),a=()=>Promise.all([t.e(89),t.e(627)]).then(t.bind(t,3627)),s=()=>Promise.all([t.e(89),t.e(140)]).then(t.bind(t,4140)),u=()=>Promise.all([t.e(89),t.e(348)]).then(t.bind(t,8348)),c=()=>Promise.all([t.e(89),t.e(717)]).then(t.bind(t,6717)),l=()=>Promise.all([t.e(89),t.e(257)]).then(t.bind(t,4257)),f=()=>t.e(217).then(t.bind(t,7217)),d=[{name:"home",path:"/",component:o},{name:"clients",path:"/clients",component:o},{name:"signup",path:"/signup",component:f},{name:"signin",path:"/signin",component:f},{name:"client",path:"/client/:clientid",component:a},{name:"newclient",path:"/newclient",component:u},{name:"editclient",path:"/editclient/:clientid",component:u},{name:"sale",path:"/client/:clientid/sale/:saleid",component:s},{name:"newpayment",path:"/client/:clientid/sale/:saleid/newpayment",component:l},{name:"editpayment",path:"/client/:clientid/sale/:saleid/editpayment/:paymentid",component:l},{name:"newsale",path:"/client/:clientid/newsale",component:c},{name:"editsale",path:"/client/:clientid/editsale/:saleid",component:c}],p=(0,r.p7)({history:(0,r.PO)(),routes:d});p.beforeEach((function(e,n,t){const{path:r}=e;"/signin"===r||"/signup"===r?i.Z.state.email.length?t(n.path):t():i.Z.state.email.length?t():t("/signin"),t()})),n["Z"]=p},8632:function(e,n,t){t.d(n,{Z:function(){return E}});var r={};t.r(r),t.d(r,{resetState:function(){return d},setEmail:function(){return l},setErrors:function(){return f},setUserId:function(){return u},setUsername:function(){return c}});var i={};t.r(i),t.d(i,{signinUser:function(){return h},signoutUser:function(){return v},signupUser:function(){return g}});var o=t(65);const a={_id:"",username:"",email:"",errors:{}};var s=()=>a;function u(e,n){e._id=n}function c(e,n){e.username=n}function l(e,n){e.email=n}function f(e,n){e.errors=n}function d(e){Object.assign(e,s())}var p=t(5072),m=t(8898);async function h({commit:e},n){try{const{email:t,password:r}=n,i=await m.Z.post("/auth/signin",{email:t,password:r});e("setUserId",i.data.userData._id),e("setUsername",i.data.userData.username),e("setEmail",i.data.userData.email)}catch(t){if((0,p.IZ)(t)){const{authenticationError:n,validationError:r}=t.response?.data;n&&e("setErrors",n),r&&e("setErrors",r)}}}async function g({commit:e},n){try{const{username:e,email:t,password:r}=n,i=await m.Z.post("/auth/signup",{username:e,email:t,password:r});E.dispatch("signinUser",{email:i.data.userCredentials.email,password:i.data.userCredentials.password})}catch(t){if((0,p.IZ)(t)){console.log(t.response?.data);const{validationError:n}=t.response?.data;n&&e("setErrors",n)}return Promise.reject(t)}}async function v({commit:e}){await m.Z.get("/auth/signout"),e("resetState")}var b=t(5103);const y=new b.ZP({storage:window.localStorage});var w=y,E=(0,o.MT)({state:s,mutations:r,actions:i,plugins:[w.plugin,(0,o.hu)()]})},8898:function(e,n,t){t(7658);var r=t(4311),i=t(8632),o=t(3824);const a={baseURL:"/",withCredentials:!0,headers:{"Content-Type":"application/json"}},s=r.Z.create(a);s.defaults.responseType="json",s.interceptors.response.use((function(e){return console.log("successful request!"),e}),(function(e){return 401!==e.response.status||e.response.data.authenticationError||(console.log("authorization error"),i.Z.commit("resetState"),i.Z.commit("setErrors",{authorizationError:"Hubo un error al comprobar tu identidad, porfavor vuelve a ingresar."}),o.Z.push("/signin")),Promise.reject(e)})),n["Z"]=s}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,r,i,o){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],i=e[l][1],o=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||a>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(s=!1,o<a&&(a=o));if(s){e.splice(l--,1);var c=i();void 0!==c&&(n=c)}}return n}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,i,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{89:"a08ce07f",140:"b9efd2b2",217:"8547ed97",257:"39b3dffc",348:"b17948e6",627:"25cdf916",678:"192fba98",717:"503e567c",981:"7ddd6246"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{140:"40d1a97b",217:"9558d494",257:"f58f8b08",348:"8b5f9604",627:"75e45e98",678:"17ac43e8",717:"f14baf2a",981:"46ab66df"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="my-finances:";t.l=function(r,i,o,a){if(e[r])e[r].push(i);else{var s,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+o){s=f;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+o),s.src=r),e[r]=[i];var d=function(n,t){s.onerror=s.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(t){if(o.onerror=o.onload=null,"load"===t.type)r();else{var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,o.parentNode.removeChild(o),i(u)}};return o.onerror=o.onload=a,o.href=n,t?t.parentNode.insertBefore(o,t.nextSibling):document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var i=t[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===n))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){i=a[r],o=i.getAttribute("data-href");if(o===e||o===n)return i}},r=function(r){return new Promise((function(i,o){var a=t.miniCssF(r),s=t.p+a;if(n(a,s))return i();e(r,s,null,i,o)}))},i={143:0};t.f.miniCss=function(e,n){var t={140:1,217:1,257:1,348:1,627:1,678:1,717:1,981:1};i[e]?n.push(i[e]):0!==i[e]&&t[e]&&n.push(i[e]=r(e).then((function(){i[e]=0}),(function(n){throw delete i[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var i=t.o(e,n)?e[n]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(t,r){i=e[n]=[t,r]}));r.push(i[2]=o);var a=t.p+t.u(n),s=new Error,u=function(r){if(t.o(e,n)&&(i=e[n],0!==i&&(e[n]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var i,o,a=r[0],s=r[1],u=r[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(u)var l=u(t)}for(n&&n(r);c<a.length;c++)o=a[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(l)},r=self["webpackChunkmy_finances"]=self["webpackChunkmy_finances"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3965)}));r=t.O(r)})();
//# sourceMappingURL=app.0f269ad8.js.map