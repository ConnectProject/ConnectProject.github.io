(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1bd2117f"],{"37c8":function(t,e,n){e.f=n("2b4c")},"3a72":function(t,e,n){var o=n("7726"),r=n("8378"),a=n("2d00"),i=n("37c8"),u=n("86cc").f;t.exports=function(t){var e=r.Symbol||(r.Symbol=a?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:i.f(t)})}},"67ab":function(t,e,n){var o=n("ca5a")("meta"),r=n("d3f4"),a=n("69a8"),i=n("86cc").f,u=0,c=Object.isExtensible||function(){return!0},s=!n("79e5")(function(){return c(Object.preventExtensions({}))}),l=function(t){i(t,o,{value:{i:"O"+ ++u,w:{}}})},f=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,o)){if(!c(t))return"F";if(!e)return"E";l(t)}return t[o].i},h=function(t,e){if(!a(t,o)){if(!c(t))return!0;if(!e)return!1;l(t)}return t[o].w},v=function(t){return s&&p.NEED&&c(t)&&!a(t,o)&&l(t),t},p=t.exports={KEY:o,NEED:!1,fastKey:f,getWeak:h,onFreeze:v}},"7bbc":function(t,e,n){var o=n("6821"),r=n("9093").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return r(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?u(t):r(o(t))}},"8a81":function(t,e,n){"use strict";var o=n("7726"),r=n("69a8"),a=n("9e1e"),i=n("5ca1"),u=n("2aba"),c=n("67ab").KEY,s=n("79e5"),l=n("5537"),f=n("7f20"),h=n("ca5a"),v=n("2b4c"),p=n("37c8"),b=n("3a72"),m=n("d4c0"),d=n("1169"),g=n("cb7c"),y=n("d3f4"),w=n("6821"),S=n("6a99"),x=n("4630"),O=n("2aeb"),$=n("7bbc"),E=n("11e9"),N=n("86cc"),_=n("0d58"),k=E.f,q=N.f,j=$.f,P=o.Symbol,R=o.JSON,F=R&&R.stringify,L="prototype",I=v("_hidden"),C=v("toPrimitive"),T={}.propertyIsEnumerable,U=l("symbol-registry"),J=l("symbols"),A=l("op-symbols"),B=Object[L],M="function"==typeof P,D=o.QObject,H=!D||!D[L]||!D[L].findChild,K=a&&s(function(){return 7!=O(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a})?function(t,e,n){var o=k(B,e);o&&delete B[e],q(t,e,n),o&&t!==B&&q(B,e,o)}:q,V=function(t){var e=J[t]=O(P[L]);return e._k=t,e},W=M&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},z=function(t,e,n){return t===B&&z(A,e,n),g(t),e=S(e,!0),g(n),r(J,e)?(n.enumerable?(r(t,I)&&t[I][e]&&(t[I][e]=!1),n=O(n,{enumerable:x(0,!1)})):(r(t,I)||q(t,I,x(1,{})),t[I][e]=!0),K(t,e,n)):q(t,e,n)},G=function(t,e){g(t);var n,o=m(e=w(e)),r=0,a=o.length;while(a>r)z(t,n=o[r++],e[n]);return t},Q=function(t,e){return void 0===e?O(t):G(O(t),e)},Y=function(t){var e=T.call(this,t=S(t,!0));return!(this===B&&r(J,t)&&!r(A,t))&&(!(e||!r(this,t)||!r(J,t)||r(this,I)&&this[I][t])||e)},X=function(t,e){if(t=w(t),e=S(e,!0),t!==B||!r(J,e)||r(A,e)){var n=k(t,e);return!n||!r(J,e)||r(t,I)&&t[I][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=j(w(t)),o=[],a=0;while(n.length>a)r(J,e=n[a++])||e==I||e==c||o.push(e);return o},tt=function(t){var e,n=t===B,o=j(n?A:w(t)),a=[],i=0;while(o.length>i)!r(J,e=o[i++])||n&&!r(B,e)||a.push(J[e]);return a};M||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===B&&e.call(A,n),r(this,I)&&r(this[I],t)&&(this[I][t]=!1),K(this,t,x(1,n))};return a&&H&&K(B,t,{configurable:!0,set:e}),V(t)},u(P[L],"toString",function(){return this._k}),E.f=X,N.f=z,n("9093").f=$.f=Z,n("52a7").f=Y,n("2621").f=tt,a&&!n("2d00")&&u(B,"propertyIsEnumerable",Y,!0),p.f=function(t){return V(v(t))}),i(i.G+i.W+i.F*!M,{Symbol:P});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)v(et[nt++]);for(var ot=_(v.store),rt=0;ot.length>rt;)b(ot[rt++]);i(i.S+i.F*!M,"Symbol",{for:function(t){return r(U,t+="")?U[t]:U[t]=P(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in U)if(U[e]===t)return e},useSetter:function(){H=!0},useSimple:function(){H=!1}}),i(i.S+i.F*!M,"Object",{create:Q,defineProperty:z,defineProperties:G,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),R&&i(i.S+i.F*(!M||s(function(){var t=P();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){var e,n,o=[t],r=1;while(arguments.length>r)o.push(arguments[r++]);if(n=e=o[1],(y(e)||void 0!==t)&&!W(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!W(e))return e}),o[1]=e,F.apply(R,o)}}),P[L][C]||n("32e9")(P[L],C,P[L].valueOf),f(P,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},ac4d:function(t,e,n){n("3a72")("asyncIterator")},d4c0:function(t,e,n){var o=n("0d58"),r=n("2621"),a=n("52a7");t.exports=function(t){var e=o(t),n=r.f;if(n){var i,u=n(t),c=a.f,s=0;while(u.length>s)c.call(t,i=u[s++])&&e.push(i)}return e}},f241:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{staticStyle:{"background-color":"#444"},attrs:{view:"hHh lpR fFf"}},[n("q-header",{staticClass:"no-shadow"},[n("q-toolbar",{staticStyle:{"background-color":"#444"}},[n("q-btn",{attrs:{flat:"",label:"Tabs",to:"tabs"}}),n("q-btn",{attrs:{flat:"",label:"Configure",to:"configure"}}),n("q-toolbar-title",[n("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Running on Quasar v"+t._s(t.$q.version))])]),t.userName?[n("img",{staticClass:"q-mr-sm",attrs:{src:t.avatarURL,width:"32px"}}),t._v("\n          "+t._s(t.userName)+"\n          ("),n("a",{staticClass:"text-white",attrs:{href:""},on:{click:function(e){return t.logout()}}},[t._v("logout")]),t._v(")\n      ")]:[n("q-btn",{attrs:{flat:"",label:"Login with GitHub"},on:{click:function(e){return t.auth("github")}}})]],2)],1),n("q-page-container",[n("router-view")],1)],1)},r=[],a=(n("ac4d"),n("8a81"),n("ac6a"),n("7f7f"),n("0967")),i=n("2b0e"),u=function(t,e){var n=window.open;if(!0===a["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)n=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==i["a"].prototype.$q.electron)return i["a"].prototype.$q.electron.shell.openExternal(t);var o=n(t,"_blank");if(o)return o.focus(),o;e&&e()},c=n("bc78"),s={name:"MyLayout",data:function(){return{userName:"",avatarURL:""}},computed:{tabs:function(){return this.$store.state.tabs},phrase:function(){return this.$store.state.phrase}},mounted:function(){var t=this;this.$axios.get("https://mavoix-connect.herokuapp.com/users?name=Luz").then(function(e){var n=e.data[0],o=!0,r=!1,a=void 0;try{for(var i,u=n.tabs[Symbol.iterator]();!(o=(i=u.next()).done);o=!0){var s=i.value;s.tabColor=c["a"].rgbToHex(c["a"].hsvToRgb({h:360*Math.random(),s:40,v:80,a:100})),s.isOpen=!1;var l=!0,f=!1,h=void 0;try{for(var v,p=s.images[Symbol.iterator]();!(l=(v=p.next()).done);l=!0){var b=v.value;b.unavailable=!1,b.hidden=!1}}catch(m){f=!0,h=m}finally{try{l||null==p.return||p.return()}finally{if(f)throw h}}}}catch(m){r=!0,a=m}finally{try{o||null==u.return||u.return()}finally{if(r)throw a}}t.$store.commit("mavoix/updateTabs",n.tabs),t.$store.commit("mavoix/updateName",n.name),t.$store.commit("mavoix/updateVoice",n.voice),t.$store.commit("mavoix/updateId",n.id)}),this.$hello.on("auth.login",function(e){t.$hello("github").api("me").then(function(e){console.log("Result:",e),t.userName=e.name,t.avatarURL=e.avatar_url,t.blog=e.blog})});var e=window.speechSynthesis;e.onvoiceschanged=function(){t.$store.commit("mavoix/updateVoices",e.getVoices())}},methods:{openURL:u,auth:function(t){this.$hello(t).login().then(function(t){console.log("Back from login:",t)},function(t){console.log("error",t)})},logout:function(){var t=this;this.$hello("github").logout().then(function(){console.log("Signed out"),t.userName="",t.avatarURL=""},function(t){console.log("Signed out error:",t.error.message)})},getProfile:function(){var t=this;this.$hello("github").api("me").then(function(e){t.userName=e.name,t.avatarURL=e.avatar_url},function(t){console.log("Failed to get profile info:",t)})}}},l=s,f=n("2877"),h=Object(f["a"])(l,o,r,!1,null,null,null);e["default"]=h.exports}}]);