(function(n){function e(e){for(var o,a,c=e[0],u=e[1],s=e[2],f=0,d=[];f<c.length;f++)a=c[f],i[a]&&d.push(i[a][0]),i[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(n[o]=u[o]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],o=!0,a=1;a<t.length;a++){var u=t[a];0!==i[u]&&(o=!1)}o&&(r.splice(e--,1),n=c(c.s=t[0]))}return n}var o={},i={app:0},r=[];function a(n){return c.p+"js/"+({}[n]||n)+"."+{"chunk-02b6fb59":"24a915ad","chunk-18ed7573":"2e69b1b3","chunk-5c40e249":"e1ea1e2d","chunk-eb07ff20":"b67d005f","chunk-0dab05b0":"d1a47fc6","chunk-1ff2d500":"4284aa7e","chunk-405a528a":"502f4998","chunk-45e192f5":"9cacdccc","chunk-e6cecb16":"1f11cbb5"}[n]+".js"}function c(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(n){var e=[],t=i[n];if(0!==t)if(t)e.push(t[2]);else{var o=new Promise(function(e,o){t=i[n]=[e,o]});e.push(t[2]=o);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(n),r=function(e){u.onerror=u.onload=null,clearTimeout(s);var t=i[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,a=new Error("Loading chunk "+n+" failed.\n("+o+": "+r+")");a.type=o,a.request=r,t[1](a)}i[n]=void 0}};var s=setTimeout(function(){r({type:"timeout",target:u})},12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(e)},c.m=n,c.c=o,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)c.d(t,o,function(e){return n[e]}.bind(null,o));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="",c.oe=function(n){throw console.error(n),n};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var l=s;r.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"097e":function(n,e){(function(n,e){var t=n.documentElement,o="orientationchange"in window?"orientationchange":"resize",i=function(){var n=t.clientWidth;n&&(t.style.fontSize=window.screen.width/10+"px")};n.addEventListener&&(e.addEventListener(o,i,!1),n.addEventListener("DOMContentLoaded",i,!1))})(document,window)},2022:function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,'\n#app {\n  font-family: "Avenir", Helvetica, Arial, sans-serif;\n  font-size: 0.3rem;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n',""])},"245a":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("097d");var o=t("96eb"),i=o.Random,r=0,a=100,c=function(){for(var n=[],e=0;e<100;e++){var t={title:i.csentence(5,8),thumbnail_pic_s:i.dataImage("300x250","mock的图片"),author_name:i.cname(),date:i.date()+" "+i.time()};n.push(t)}return{articles:n}},u=function(){return{business_name:"肯德基宅急送(鹤龙店)",score:"4.3",monthly_sales_volume:401,delivery_time:30}},s=function(){var n=[];if(r+=10,r<=a){for(var e=0;e<10;e++){var t={title:i.cword(3,5),score:i.float(3,4,0,1),img:i.image()};n.push(t)}return n}return 0};o.mock("/news/test","get",c),o.mock("/business_info","get",u),o.mock("/getShoplist","get",s)},"4dcb":function(n,e,t){},"4ee2":function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("097d");var o=t("2b0e"),i=t("cc85"),r=(i["a"],{components:{footOne:i["a"]}}),a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{include:"home"}},[t("router-view")],1),n._v(" "),t("foot-one")],1)},c=[],u=t("2455");function s(n){t("ffa3")}var f=!1,l=s,d=null,h=null,p=Object(u["a"])(r,a,c,f,l,d,h),v=p.exports,m=t("8c4f");o["default"].use(m["a"]);var b=new m["a"]({routes:[{path:"/home",name:"home",component:function(){return Promise.all([t.e("chunk-02b6fb59"),t.e("chunk-eb07ff20")]).then(t.bind(null,"bb51"))}},{path:"/checkout",name:"checkout",component:function(){return t.e("chunk-45e192f5").then(t.bind(null,"7cb4"))}},{path:"/",name:"page",component:function(){return Promise.all([t.e("chunk-02b6fb59"),t.e("chunk-18ed7573")]).then(t.bind(null,"2048"))}},{path:"/profile",name:"profile",component:function(){return t.e("chunk-1ff2d500").then(t.bind(null,"c66d"))}},{path:"/login",name:"login",component:function(){return Promise.all([t.e("chunk-02b6fb59"),t.e("chunk-5c40e249")]).then(t.bind(null,"a55b"))}},{path:"/about",name:"about",component:function(){return t.e("chunk-e6cecb16").then(t.bind(null,"f820"))}},{path:"/search",name:"search",component:function(){return t.e("chunk-0dab05b0").then(t.bind(null,"2d3b"))}},{path:"/discover",name:"discover",component:function(){return t.e("chunk-405a528a").then(t.bind(null,"6723"))}}]}),g=t("2f62"),_={cartList:[]},k={},w={ADD_CART_MU:function(n,e){for(var t=n.cartList,o=0;o<t.length;o++)if(t[o].id===e.id)return void(t[o]["num"]+=1);n.cartList.push(e)},REMOVE_CART_MU:function(n,e){for(var t=n.cartList,o=0;o<t.length;o++)if(t[o].id===e.id)return void(t[o].num>1?t[o]["num"]-=1:t.splice(o,1))},CLEAR_CART_MU:function(n){var e=n.cartList.length;n.cartList.splice(0,e)}},x={ADD_CART:function(n,e){var t=n.commit;t("ADD_CART_MU",e)},REMOVE_CART:function(n,e){var t=n.commit;t("REMOVE_CART_MU",e)},CLEAR_CART:function(n){var e=n.commit;e("CLEAR_CART_MU")}},y={state:_,getters:k,mutations:w,actions:x};o["default"].use(g["a"]);var C=new g["a"].Store({modules:{shop_cart:y}}),O=C;t("097e"),t("4ee2"),t("4dcb"),t("aa35");o["default"].config.productionTip=!1,t("245a"),new o["default"]({router:b,store:O,render:function(n){return n(v)}}).$mount("#app")},"5cf3":function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,"\n.foot[data-v-4405d750] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 1.3rem;\n  background-color: #fff;\n  -webkit-box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);\n          box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);\n}\n.foot .li[data-v-4405d750] {\n    float: left;\n    width: 25%;\n    text-align: center;\n    padding-top: .24rem;\n    color: #8e8e93;\n}\n.foot i[data-v-4405d750] {\n    font-size: 0.48rem;\n}\n.foot span[data-v-4405d750] {\n    display: block;\n}\n.foot .bianse[data-v-4405d750] {\n    color: #0af;\n}\n.gejue[data-v-4405d750] {\n  height: 1.3rem;\n}\n",""])},"70e3":function(n,e,t){var o=t("5cf3");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var i=t("499e").default;i("341a86c2",o,!0,{})},cc85:function(n,e,t){"use strict";var o={data:function(){return{index:0}},methods:{bian0:function(){this.index=0},bian1:function(){this.index=1},bian2:function(){this.index=2},bian3:function(){this.index=3}}},i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("ul",{staticClass:"foot clearfix"},[t("router-link",{class:{li:!0,bianse:0==this.index},attrs:{to:"/"},nativeOn:{click:function(e){return n.bian0(e)}}},[t("i",{staticClass:"iconfont icon-SSS"}),n._v(" "),t("span",[n._v("首页")])]),n._v(" "),t("router-link",{class:{li:!0,bianse:1==this.index},attrs:{to:"/discover"},nativeOn:{click:function(e){return n.bian1(e)}}},[t("i",{staticClass:"iconfont icon-faxian1"}),n._v(" "),t("span",[n._v("发现")])]),n._v(" "),t("router-link",{class:{li:!0,bianse:2==this.index},attrs:{to:"/aaa"},nativeOn:{click:function(e){return n.bian2(e)}}},[t("i",{staticClass:"iconfont icon-dingdan"}),n._v(" "),t("span",[n._v("订单")])]),n._v(" "),t("router-link",{class:{li:!0,bianse:3==this.index},attrs:{to:"/profile"},nativeOn:{click:function(e){return n.bian3(e)}}},[t("i",{staticClass:"iconfont icon-wode"}),n._v(" "),t("span",[n._v("我的")])])],1),n._v(" "),t("div",{staticClass:"gejue"})])},r=[],a=t("2455");function c(n){t("70e3")}var u=!1,s=c,f="data-v-4405d750",l=null,d=Object(a["a"])(o,i,r,u,s,f,l);e["a"]=d.exports},ffa3:function(n,e,t){var o=t("2022");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var i=t("499e").default;i("673ab8f8",o,!0,{})}});