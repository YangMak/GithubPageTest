(function(e){function t(t){for(var a,s,r=t[0],l=t[1],c=t[2],u=0,p=[];u<r.length;u++)s=r[u],o[s]&&p.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);m&&m(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},s={app:0},o={app:0},i=[];function r(e){return l.p+"js/"+({channel:"channel",message:"message"}[e]||e)+"."+{channel:"8bcb5525",message:"2f4a5f88"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={channel:1,message:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise(function(t,n){for(var a="css/"+({channel:"channel",message:"message"}[e]||e)+"."+{channel:"06a0d7e4",message:"fb1bd1da"}[e]+".css",o=l.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var c=i[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===o))return t()}var p=document.getElementsByTagName("style");for(r=0;r<p.length;r++){c=p[r],u=c.getAttribute("data-href");if(u===a||u===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.request=a,delete s[e],m.parentNode.removeChild(m),n(i)},m.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(m)}).then(function(){s[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(e),c=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+s+")");i.type=a,i.request=s,n[1](i)}o[e]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/GithubPageTest/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var m=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"238e":function(e,t,n){"use strict";var a=n("8a68"),s=n.n(a);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),s=n("8aa5"),o=n.n(s),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("router-view")],1)},r=[],l=(n("034f"),n("2877")),c={},u=Object(l["a"])(c,i,r,!1,null,null,null);u.options.__file="App.vue";var p=u.exports,m=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login_outer row justify-content-center align-items-center"},[n("div",{staticClass:"col login col-sm-10 col-md-10"},[e._m(0),n("div",{staticClass:"login_form"},[n("div",{staticClass:"login_row"},[n("i",{staticClass:"input_icon fas fa-envelope col-sm-3"}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"email_input col-sm-9",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("div",{staticClass:"login_row"},[n("i",{staticClass:"password_icon fas fa-unlock-alt col-sm-3"}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"password_input col-sm-9",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("button",{staticClass:"login_btn btn btn-primary",on:{click:e.login}},[e._v("Sign in")]),n("div",{staticClass:"social-icon"},[n("a",{staticClass:"btn btn-lg btn-block btn-social btn-google",on:{click:e.socialLogin}},[n("i",{staticClass:"fab fa-google"}),e._v("Sign in with Google\n          ")])]),n("br"),n("p",[e._v("You don't have an account ? You can "),n("router-link",{attrs:{to:"/signUp"}},[e._v("create one")])],1)])])])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login_mainIcon"},[n("i",{staticClass:"fab fa-line"})])}],g={name:"Home",data:function(){return{email:"",password:"",uid:""}},methods:{login:function(){var e=this;o.a.auth().signInWithEmailAndPassword(this.email.trim(),this.password).then(function(t){e.uid=t.user.uid,e.$store.commit("UserLogin",{email:t.user.email,uid:t.user.uid}),console.log(t),e.$router.push({name:"Channel",params:{userId:t.user.uid}})}).catch(function(e){alert("Oops. "+e.message)})},socialLogin:function(){var e=this,t=new o.a.auth.GoogleAuthProvider;o.a.auth().signInWithPopup(t).then(function(t){e.uid=t.user.uid,1==t.additionalUserInfo.isNewUser?console.log("create new user"):console.log("Old User"),e.$store.commit("UserLogin",{email:t.user.email,uid:t.user.uid}),console.log(t),e.$router.push({name:"Channel",params:{userId:t.user.uid}})}).catch(function(e){alert("Oops. "+e.message)})}},mounted:function(){console.log(o.a.auth()),console.log(o.a.auth().currentUser)}},h=g,v=(n("9028"),Object(l["a"])(h,d,f,!1,null,"4848624d",null));v.options.__file="Home.vue";var b=v.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login_outer row justify-content-center align-items-center"},[n("div",{staticClass:"col login col-sm-10 col-md-10"},[e._m(0),n("div",{staticClass:"login_form"},[n("div",{staticClass:"login_row"},[n("i",{staticClass:"input_icon fas fa-envelope col-sm-3"}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"email_input col-sm-9",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("div",{staticClass:"login_row"},[n("i",{staticClass:"password_icon fas fa-unlock-alt col-sm-3"}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"password_input col-sm-9",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("button",{staticClass:"login_btn btn btn-primary",on:{click:e.login}},[e._v("Sign in")]),n("div",{staticClass:"social-icon"},[n("a",{staticClass:"btn btn-lg btn-block btn-social btn-google",on:{click:e.socialLogin}},[n("i",{staticClass:"fab fa-google"}),e._v("Sign in with Google\n          ")])]),n("br")])])])},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login_mainIcon"},[n("i",{staticClass:"fab fa-line"})])}],C={name:"Home",data:function(){return{email:"",password:"",uid:""}},methods:{login:function(){var e=this;o.a.auth().signInWithEmailAndPassword(this.email.trim(),this.password).then(function(t){e.uid=t.user.uid,e.$store.commit("UserLogin",{email:t.user.email,uid:t.user.uid}),console.log(t),e.$router.push({path:"/channel",query:{user:t.user.email},params:{userId:t.user.uid}})}).catch(function(e){alert("Oops. "+e.message)})},socialLogin:function(){var e=this,t=new o.a.auth.GoogleAuthProvider;o.a.auth().signInWithPopup(t).then(function(t){e.uid=t.user.uid,1==t.additionalUserInfo.isNewUser?console.log("create new user"):console.log("Old User"),console.log(t),e.$router.push({name:"Channel",params:{userId:t.user.uid}})}).catch(function(e){alert("Oops. "+e.message)})}},mounted:function(){console.log(o.a.auth()),console.log(o.a.auth().currentUser)}},y=C,P=(n("238e"),Object(l["a"])(y,w,_,!1,null,"188188aa",null));P.options.__file="Login.vue";var U=P.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"signUp_outer row justify-content-center align-items-center"},[n("div",{staticClass:"col signUp col-sm-10 col-md-10"},[e._m(0),n("div",{staticClass:"signUp_form"},[n("div",{staticClass:"signUp_row"},[n("i",{staticClass:"input_icon fas fa-envelope col-sm-3"}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"email_input col-sm-9",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("div",{staticClass:"signUp_row"},[n("i",{staticClass:"password_icon fas fa-unlock-alt col-sm-3"}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"password_input col-sm-9",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("button",{staticClass:"signUp_btn btn btn-primary",on:{click:e.signUp}},[e._v("Sign in")]),n("br"),n("p",{staticClass:"note"},[e._v("or go back to "),n("router-link",{attrs:{to:"/login"}},[e._v("login")]),e._v(".")],1)])])])},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"signUp_mainIcon"},[n("i",{staticClass:"fab fa-line"})])}],E={name:"signUpMak",data:function(){return{email:"",password:""}},methods:{signUp:function(){var e=this;o.a.auth().createUserWithEmailAndPassword(this.email.trim(),this.password).then(function(t){console.log(t),e.$router.push({name:"Login",params:{userId:t.user.uid}})}).catch(function(e){alert("Oops. "+e.message)})}}},x=E,I=(n("73c1"),Object(l["a"])(x,k,O,!1,null,"2ad063db",null));I.options.__file="SignUpMak.vue";var j=I.exports;a["a"].use(m["a"]);var S=new m["a"]({routes:[{path:"/",name:"Login",component:U},{path:"/home",name:"Home",component:b},{path:"/login",name:"Login",component:U},{path:"/signUpMak",name:"SignUpMak",component:j},{path:"/channel",name:"Channel",component:function(){return n.e("channel").then(n.bind(null,"92d6"))}},{path:"/message",name:"Message",component:function(){return n.e("message").then(n.bind(null,"8e2a"))}}]}),L=n("2f62");a["a"].use(L["a"]);var N=new L["a"].Store({state:{channelData:{userId:"",channelName:"",post:""},isOpenPostList:!1},mutations:{channelData:function(e,t){e.channelData.userId=t.userId,e.channelData.channelName=t.channelName,e.channelData.post=t.postData},postListStatus:function(e,t){e.isOpenPostList=t.status}},actions:{}}),$=n("bc3a"),A=n.n($),M=n("a7fe"),T=n.n(M);n("4328");a["a"].use(T.a,A.a),a["a"].config.productionTip=!1;var D={apiKey:"AIzaSyCNpteFz_n_YmH7v4l6-1MY91DE9yJPC0M",authDomain:"linebot-ironcat.firebaseapp.com",databaseURL:"https://linebot-ironcat.firebaseio.com",projectId:"linebot-ironcat",storageBucket:"linebot-ironcat.appspot.com",messagingSenderId:"865864555674"};o.a.initializeApp(D),new a["a"]({router:S,store:N,render:function(e){return e(p)}}).$mount("#app")},"5b23":function(e,t,n){},"64a9":function(e,t,n){},"73c1":function(e,t,n){"use strict";var a=n("5b23"),s=n.n(a);s.a},"8a68":function(e,t,n){},9028:function(e,t,n){"use strict";var a=n("c2cf"),s=n.n(a);s.a},c2cf:function(e,t,n){}});
//# sourceMappingURL=app.10703937.js.map