(function(e){function t(t){for(var s,a,o=t[0],c=t[1],u=t[2],f=0,d=[];f<o.length;f++)a=o[f],i[a]&&d.push(i[a][0]),i[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(s=!1)}s&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},i={app:0},r=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09cf":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"order"}},[n("div",{staticClass:"content"},[n("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[n("ul",e._l(e.goodsList,function(t,s){return n("li",{key:s,class:{li:!0,active:s==e.currentMenuIndex},on:{click:function(t){e.selectMenu(s,t)}}},[n("span",[e._v(e._s(t.name))]),n("count",{staticClass:"itemSelect",attrs:{num:e.itemSelectNumArray[s]}})],1)}),0)]),n("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[n("ul",e._l(e.goodsList,function(t,s){return n("li",{key:s,ref:"foodsList",refInFor:!0},[n("div",{staticClass:"item-title"},[n("strong",{staticClass:"item-name"},[e._v(e._s(t.name))]),n("span",{directives:[{name:"show",rawName:"v-show",value:0==s,expression:"index1==0"}],staticClass:"item-desc"},[e._v("大家喜欢吃,才是真好吃")])]),n("ul",e._l(t.foods,function(t,i){return n("li",{key:i,staticClass:"parent"},[n("img",{staticClass:"left",attrs:{src:"//fuss10.elemecdn.com/8/78/193b76455b54bbd4e9dfdb0b88a2cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/"}}),n("div",{staticClass:"center"},[n("p",{staticClass:"food-name"},[n("strong",[e._v(e._s(t.name))])]),n("p",[n("span",{staticClass:"sell-count"},[e._v("月售"+e._s(t.sellCount))])]),n("span",{staticClass:"food-price"},[e._v("$"+e._s(t.price))])]),n("div",{staticClass:"right"},[n("i",{directives:[{name:"show",rawName:"v-show",value:e.selectNumArray[s][i],expression:"selectNumArray[index1][index2]"}],staticClass:"reduce",on:{click:function(n){e.remove_cart(t.price,s,i)}}}),n("span",{directives:[{name:"show",rawName:"v-show",value:e.selectNumArray[s][i],expression:"selectNumArray[index1][index2]"}],staticClass:"num",domProps:{textContent:e._s(e.selectNumArray[s][i])}}),n("i",{staticClass:"add",on:{click:function(n){e.add_cart(t.price,s,i)}}})])])}),0)])}),0)])]),n("order-footer",{attrs:{price:e.totalPrice,num:e.totalNum}})],1)},i=[],r=(n("ac6a"),n("cadf"),n("551c"),n("097d"),n("4279")),a={getGoodsList:function(){return r["a"].get("/goods_list")}},o=n("8ecb"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("span",{class:{gouwuche:!0,bg1:0==e.num,bg2:e.num>0}},[n("count",{staticClass:"count",attrs:{num:e.num}})],1),n("div",{staticClass:"money"},[n("p",{directives:[{name:"show",rawName:"v-show",value:0!=e.price,expression:"price != 0"}],staticClass:"price"},[e._v(e._s(e.price))]),n("p",{directives:[{name:"show",rawName:"v-show",value:0==e.price,expression:"price == 0"}]},[e._v("未选购商品")]),n("p",[e._v("另需配送费1元")])]),n("span",{class:{qisong:!0,jiesuan:e.price>=100},domProps:{textContent:e._s(this.text1)}})])},u=[],l=(n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{directives:[{name:"show",rawName:"v-show",value:e.num>0,expression:"num > 0"}],staticClass:"count",domProps:{textContent:e._s(e.num)}})}),f=[],d={name:"count",props:{num:{type:Number,default:0}}},m=d,p=(n("bd29"),n("2877")),v=Object(p["a"])(m,l,f,!1,null,"32e57bb6",null);v.options.__file="count.vue";var h=v.exports,_={data:function(){return{selfPrice:0}},computed:{text1:function(){return 0==this.price?"￥100起送":this.price>100?"去结算":"还差￥"+(100-this.price)+"起送"}},props:{price:{type:Number,default:0},num:{type:Number,default:0}},components:{count:h}},b=_,C=(n("3827"),Object(p["a"])(b,c,u,!1,null,"b103c848",null));C.options.__file="order_foot.vue";var x=C.exports,g={name:"order",data:function(){return{goodsList:[{name:"优惠",foods:[{name:"皮蛋瘦肉粥",sellCount:8,price:23},{name:"奥堡单人",sellCount:5,price:43},{name:"皮蛋瘦肉粥",sellCount:8,price:73},{name:"奥堡单人",sellCount:5,price:88},{name:"皮蛋瘦肉粥",sellCount:8,price:11},{name:"皮蛋瘦肉粥",sellCount:8,price:23}]},{name:"炸鸡啤酒",foods:[{name:"百威啤酒",sellCount:8,price:23},{name:"86元炸鸡啤酒",sellCount:5,price:16},{name:"116元炸鸡啤酒",sellCount:5,price:99}]},{name:"夜宵套餐",foods:[{name:"冬菇滑稽粥",sellCount:8,price:12},{name:"葡式蛋挞",sellCount:5,price:11},{name:"八块香辣鸡翅",sellCount:8,price:23},{name:"超级翅桶多人餐",sellCount:5,price:76},{name:"十翅分享桶",sellCount:5,price:16}]},{name:"夜宵单品",foods:[{name:"九珍果汁饮料",sellCount:8,price:26},{name:"醇豆浆",sellCount:5,price:41},{name:"安心大油条",sellCount:8,price:23},{name:"芙蓉荟蔬汤",sellCount:5,price:46},{name:"新奥尔良烤翅",sellCount:8,price:23},{name:"香辣鸡腿堡",sellCount:5,price:46},{name:"新奥尔良烤鸡腿堡",sellCount:5,price:46},{name:"1.25升装百事可乐",sellCount:8,price:23},{name:"二块香辣鸡翅炸鸡",sellCount:5,price:46}]}],listHeight:[],scrollY:0,totalPrice:0,isShowReduce:!1,selectNumArray:[],itemSelectNumArray:[],totalNum:0}},computed:{currentMenuIndex:function(){for(var e=this.listHeight.length,t=0;t<e;t++){var n=this.listHeight[t],s=this.listHeight[t+1];if(!s||this.scrollY>=n&&this.scrollY<s)return t}return 0}},methods:{getGoodsList:function(){a.getGoodslist().then(function(e){}).catch(function(e){console.error(e)})},initSelectNum:function(){var e=this;this.goodsList.forEach(function(t){var n=t.foods.length,s=[];e.itemSelectNumArray.push(0);for(var i=0;i<n;i++)s.push(0);e.selectNumArray.push(s)})},_initScroll:function(){var e=this;this.menuScroll=new o["a"](this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new o["a"](this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(t){e.scrollY=Math.abs(Math.round(t.y))})},_calculateHeight:function(){var e=this.$refs.foodsList,t=0;this.listHeight.push(t);for(var n=0;n<e.length;n++){var s=e[n];t+=s.clientHeight,this.listHeight.push(t)}},selectMenu:function(e,t){var n=this.$refs.foodsList,s=n[e];this.foodsScroll.scrollToElement(s,300)},add_cart:function(e,t,n){this.totalPrice+=e,this.selectNumArray[t][n]+=1,this.itemSelectNumArray[t]+=1,this.totalNum+=1},remove_cart:function(e,t,n){this.totalPrice-=e,this.selectNumArray[t][n]-=1,this.itemSelectNumArray[t]-=1,this.totalNum-=1}},created:function(){var e=this;this.$nextTick(function(){e._initScroll(),e._calculateHeight()}),this.initSelectNum()},components:{orderFooter:x,count:h}},w=g,y=(n("6f11"),Object(p["a"])(w,s,i,!1,null,"2cf315b8",null));y.options.__file="order.vue";t["default"]=y.exports},"114b":function(e,t,n){},"1cb6":function(e,t,n){},2161:function(e,t,n){},"245a":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var s=n("fddc"),i=s.Random,r=function(){for(var e=[],t=0;t<100;t++){var n={title:i.csentence(5,8),thumbnail_pic_s:i.dataImage("300x250","mock的图片"),author_name:i.cname(),date:i.date()+" "+i.time()};e.push(n)}return{articles:e}},a=function(){return{business_name:"肯德基宅急送(鹤龙店)",score:"4.3",monthly_sales_volume:401,delivery_time:30}};s.mock("/news/test","get",r),s.mock("/business_info","get",a)},3827:function(e,t,n){"use strict";var s=n("e888"),i=n.n(s);i.a},"3eb8":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"business_tab"}},[n("ul",{staticClass:"nav clearfix"},[n("li",{staticClass:"li",on:{click:function(t){e.index=1}}},[n("p",{class:{item:!0,jiacu:1==e.index}},[e._v("\n                点餐"),n("span",{class:{tab:1==e.index}})])]),n("li",{staticClass:"li",on:{click:function(t){e.index=2}}},[n("p",{class:{item:!0,jiacu:2==e.index}},[e._v("\n                评价"),n("span",{class:{tab:2==e.index}})])]),n("li",{staticClass:"li",on:{click:function(t){e.index=3}}},[n("p",{class:{item:!0,jiacu:3==e.index}},[e._v("\n                商家"),n("span",{class:{tab:3==e.index}})])])]),n("order",{directives:[{name:"show",rawName:"v-show",value:1==e.index,expression:"index==1"}]}),n("evaluate",{directives:[{name:"show",rawName:"v-show",value:2==e.index,expression:"index==2"}]}),n("business",{directives:[{name:"show",rawName:"v-show",value:3==e.index,expression:"index==3"}]})],1)},i=[],r=(n("cadf"),n("551c"),n("097d"),n("d7a3")),a=n("c26e"),o=n("09cf"),c={name:"business_tab",data:function(){return{index:1}},components:{business:r["default"],evaluate:a["default"],order:o["default"]}},u=c,l=(n("c03f"),n("2877")),f=Object(l["a"])(u,s,i,!1,null,"0bf3c5a1",null);f.options.__file="business_tab.vue";t["default"]=f.exports},4279:function(e,t,n){"use strict";var s=n("7f43"),i=s.create({baseURL:"",timeout:3e3,headers:{"X-Custom-Header":"foobar"}});t["a"]=i},"4dcb":function(e,t,n){},"4ee2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a=(n("7c55"),n("2877")),o={},c=Object(a["a"])(o,i,r,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("businessIntroduction"),n("business-tab")],1)},d=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"business_introduction"}},[e._m(0),n("div",{staticClass:"shop_name"},[n("h2",[e._v(e._s(e.result.business_name))]),n("p",[n("span",[e._v("评价"+e._s(e.result.score))]),n("span",[e._v("月售"+e._s(e.result.monthly_sales_volume))]),n("span",[e._v("商家配送约"+e._s(e.result.delivery_time)+"分钟")])])]),e._m(1),e._m(2),e._m(3)])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"shop_head"},[n("span",{staticClass:"shop_photo"}),n("span",{staticClass:"guanzhu"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h5",[e._v("优惠")]),n("ul",[n("li",[e._v("特价 特价商品9.9元起")]),n("li",[e._v("折扣 折扣商品5折起")]),n("li",[e._v("首单 新用户下单立减17元(不与其他活动同享)")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h5",[e._v("服务")]),n("p",[e._v("开发票 该商家支持开发票，请在下单时填写好发票抬头")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h5",[e._v("公告")]),n("p",[e._v("本餐厅不使用饿了么配送，由肯德基宅急送官方品牌配送，会员用户无法享受免配送费服务")])])}],v=n("4279"),h={getBusinessInfo:function(){return v["a"].get("/business_info")}},_=new s["a"],b=_,C={name:"business_introduction",data:function(){return{result:{}}},methods:{test:function(){var e=this;h.getBusinessInfo().then(function(t){console.log(t),e.result=t.data}).catch(function(e){console.log(e)})},showOrder:function(){b.$emit("showOrder")}},mounted:function(){this.test()}},x=C,g=(n("ba71"),Object(a["a"])(x,m,p,!1,null,"57206b3a",null));g.options.__file="business_introduction.vue";var w=g.exports,y=n("3eb8"),N={name:"home",components:{businessIntroduction:w,businessTab:y["default"]}},j=N,S=(n("9de6"),Object(a["a"])(j,f,d,!1,null,"f9a892be",null));S.options.__file="Home.vue";var $=S.exports;s["a"].use(l["a"]);var O=new l["a"]({routes:[{path:"/",name:"home",component:$},{path:"/business_tab",name:"business_tab",component:function(){return Promise.resolve().then(n.bind(null,"3eb8"))},children:[{path:"/order",name:"order",component:function(){return Promise.resolve().then(n.bind(null,"09cf"))}},{path:"/evaluate",name:"evaluate",component:function(){return Promise.resolve().then(n.bind(null,"c26e"))}},{path:"/business",name:"business",component:function(){return Promise.resolve().then(n.bind(null,"d7a3"))}}]}]}),k=n("2f62");s["a"].use(k["a"]);var P=new k["a"].Store({state:{},mutations:{},actions:{}});n("4ee2"),n("4dcb");s["a"].config.productionTip=!1,n("245a"),new s["a"]({router:O,store:P,render:function(e){return e(u)}}).$mount("#app")},5936:function(e,t,n){"use strict";var s=n("8510"),i=n.n(s);i.a},"5c48":function(e,t,n){},"6f11":function(e,t,n){"use strict";var s=n("cb78"),i=n.n(s);i.a},"7c55":function(e,t,n){"use strict";var s=n("5c48"),i=n.n(s);i.a},8510:function(e,t,n){},"9de6":function(e,t,n){"use strict";var s=n("b66f"),i=n.n(s);i.a},aadb:function(e,t,n){},b66f:function(e,t,n){},ba71:function(e,t,n){"use strict";var s=n("1cb6"),i=n.n(s);i.a},bd29:function(e,t,n){"use strict";var s=n("aadb"),i=n.n(s);i.a},c03f:function(e,t,n){"use strict";var s=n("2161"),i=n.n(s);i.a},c15e:function(e,t,n){"use strict";var s=n("114b"),i=n.n(s);i.a},c26e:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"evaluate"}},[e._v("\n    评价\n")])},i=[],r={name:"evaluate"},a=r,o=(n("c15e"),n("2877")),c=Object(o["a"])(a,s,i,!1,null,"a59fb264",null);c.options.__file="evaluate.vue";t["default"]=c.exports},cb78:function(e,t,n){},d7a3:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"business"}},[e._v("\n    商家\n")])},i=[],r={name:"business"},a=r,o=(n("5936"),n("2877")),c=Object(o["a"])(a,s,i,!1,null,"2014e1a1",null);c.options.__file="business.vue";t["default"]=c.exports},e888:function(e,t,n){}});
//# sourceMappingURL=app.4b30af5c.js.map