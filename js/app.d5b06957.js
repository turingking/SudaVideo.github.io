(function(e){function t(t){for(var n,r,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)r=s[u],a[r]&&p.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,s=1;s<i.length;s++){var l=i[s];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},a={app:0},o=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0d18":function(e,t,i){e.exports=i.p+"img/loading.52d1edd7.jpg"},"0d47":function(e,t,i){"use strict";var n=i("7d3a"),a=i.n(n);a.a},"0e6b":function(e,t,i){"use strict";var n=i("2bd1"),a=i.n(n);a.a},"106f":function(e,t,i){},"2bd1":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c");var n=i("8bbf"),a=i.n(n),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("keep-alive",[e.$route.meta.keepAlive?i("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():i("router-view")],1)},r=[],s=(i("5c0b"),i("2877")),l={},c=Object(s["a"])(l,o,r,!1,null,null,null),d=c.exports,u=i("6389"),p=i.n(u),f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("el-container",[i("el-main",{staticStyle:{overflow:"hidden"}},[i("el-tabs",{attrs:{"tab-position":"top"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"电影",name:"film"}},[i("video-list",{attrs:{playType:"film"}})],1),i("el-tab-pane",{attrs:{label:"电视",name:"teleplay"}},[i("video-list",{attrs:{playType:"teleplay"}})],1),i("el-tab-pane",{attrs:{label:"动漫",name:"cartoon"}},[i("video-list",{attrs:{playType:"cartoon"}})],1),i("el-tab-pane",{attrs:{label:"综艺",name:"variety_show"}},[i("video-list",{attrs:{playType:"variety_show"}})],1)],1)],1),i("el-footer",[i("h1",[e._v("本站资源抓取自互联网，仅供学习交流使用")])])],1),i("transition",{attrs:{name:"el-fade-in"}},[e.showSearch?e._e():i("el-button",{staticClass:"searchBt",attrs:{icon:"el-icon-search",circle:"",size:"middle"},on:{click:function(t){e.showSearchField()}}})],1),i("el-collapse-transition",[e.showSearch?i("el-autocomplete",{staticClass:"searchBt searchField",attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"请输入内容"},on:{select:e.handleSelect}},[i("i",{staticClass:"el-icon-close el-input__icon",attrs:{slot:"suffix"},on:{click:function(t){e.showSearchField()}},slot:"suffix"})]):e._e()],1)],1)},h=[],m=(i("ac6a"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hello"},[i("el-container",[i("el-main",{staticStyle:{overflow:"hidden","padding-bottom":"10px"}},[e.loading?e._e():i("el-row",{attrs:{gutter:3}},[0==e.videos.length?i("div",{staticClass:"empty"},[i("h1",[e._v("已经到头了")])]):e._e(),e._l(e.videos,function(t){return i("el-col",{key:t.videoId,staticStyle:{"margin-bottom":"0.3vw"},attrs:{sm:4,xs:8,lg:2}},[i("el-card",{attrs:{"body-style":{padding:"0px"}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.thumb,expression:"video.thumb"}],staticClass:"image",on:{click:function(i){e.goDetail(t)}}}),i("div",{staticStyle:{padding:"4px"}},[i("span",{staticClass:"title"},[e._v(e._s(t.title))])])])],1)})],2),e.loading?i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"loadingContent"}):e._e()],1),i("el-footer",[i("el-pagination",{attrs:{background:"",small:"",layout:"prev,pager, next","page-count":e.pageSize},on:{"current-change":e.handleChange}})],1)],1)],1)}),v=[],g=i("cebe"),y=i.n(g),w=y.a.create({baseURL:"https://sudamod.download/video/",timeout:1e4});w.interceptors.response.use(function(e){var t=e.data.success;return!0===t?(e.data=e.data.data,Promise.resolve(e)):Promise.reject(new Error("null"))},function(e){return window.vm.$message.error(""+e),Promise.reject(e)});var b=w,_={getVideosByType:function(e,t){return new Promise(function(i){return b.get("page/"+e+"/"+t).then(function(e){i(e.data)})})},getVideoDetail:function(e){return new Promise(function(t){return b.get("detail/"+e).then(function(e){t(e.data)})})},getVideoPlayUrl:function(e,t){return new Promise(function(i){return b.get("playUrl/"+e+"/"+t).then(function(e){i(e.data)})})},searchVideoByName:function(e){return new Promise(function(t){return b.get("search/"+e).then(function(e){t(e.data)})})}},S=_,x={props:{playType:""},data:function(){return{videos:[],loading:!0,pageSize:0}},methods:{getVideo:function(e){var t=this;this.loading=!0,S.getVideosByType(this.playType,e).then(function(e){t.videos=e.data,t.loading=!1,t.pageSize=e.pageSize})},goDetail:function(e){window.sessionStorage.setItem("current_title",e.title),this.$router.push("/videoDetail/"+e.videoId)},handleChange:function(e){this.getVideo(e)}},mounted:function(){this.getVideo(1)}},V=x,I=(i("0d47"),Object(s["a"])(V,m,v,!1,null,"19112c66",null)),P=I.exports,k={components:{VideoList:P},data:function(){return{activeName:"film",searchVideos:[],showSearch:!1}},methods:{querySearchAsync:function(e,t){var i=this;e&&S.searchVideoByName(e).then(function(e){i.searchVideos=e,i.searchVideos.forEach(function(e){e.value=e.title}),t(i.searchVideos)})},handleSelect:function(e){window.sessionStorage.setItem("current_title",e.title),this.$router.push("/videoDetail/"+e.videoId)},showSearchField:function(){this.showSearch=!this.showSearch}},activated:function(){window.sessionStorage.removeItem("current_title")}},j=k,D=(i("0e6b"),Object(s["a"])(j,f,h,!1,null,"9d4b2cce",null)),C=D.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hello"},[null!=e.videoDetail?i("el-main",[i("el-row",{staticStyle:{"text-align":"center"},attrs:{gutter:0,type:"flex",justify:"center"}},[i("el-col",{attrs:{sm:12,xs:24,id:"detailContainer"}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.showVideo,expression:"!showVideo"}]},[e.useFrame?i("iframe",{staticStyle:{width:"100%",margin:"0"},style:{height:e.frameHeight+"px"},attrs:{src:e.playUrl,frameborder:"0"}}):e._e(),e.useFrame?e._e():i("d-player",{ref:"player",attrs:{options:e.options},on:{play:e.play}})],1),i("br"),i("el-row",{attrs:{gutter:0}},e._l(e.videoDetail.videoSeries,function(t){return i("el-col",{key:t.seriesId,attrs:{sm:e.colSize,xs:e.colSize}},[i("el-button",{key:t.seriesId,staticStyle:{margin:"2px"},attrs:{type:"primary",round:"",size:"small"},on:{click:function(i){e.goPlay(t.seriesId)}}},[e._v(e._s(t.name)+"\n                        ")])],1)})),i("br"),i("h5",{staticStyle:{margin:"0","line-height":"normal"}},[e._v(" "+e._s(e.videoDetail.desc))]),i("br"),e._l(e.videoDetail.previewImgs,function(e){return i("img",{key:e,staticStyle:{width:"100%"},attrs:{src:e}})})],2)],1)],1):e._e()],1)},$=[],T=(i("aef6"),i("a481"),{props:{videoId:"",seriesId:""},data:function(){return{videoDetail:{},playUrl:"",loading:!0,showVideo:!1,useFrame:!1,colSize:6,frameHeight:0,options:{video:{type:"auto"},autoplay:!0},player:null}},methods:{goPlay:function(e){this.$router.replace("/videoDetail/"+this.videoId+"/"+e),window.location.reload()},getPlayUrl:function(e){var t=this;this.showVideo=!1,S.getVideoPlayUrl(this.videoId,e).then(function(e){console.log(e),e?(e.endsWith("html")?(t.useFrame=!0,t.playUrl=e):(t.useFrame=!1,t.player.switchVideo({url:e})),t.showVideo=!0):t.$message.error("获取播放链接失败,请刷新或者切换源")})},play:function(){},adjustHeight:function(){this.frameHeight=document.getElementById("detailContainer").clientWidth/16*9},queryVideoDetail:function(){var e=this;S.getVideoDetail(this.videoId).then(function(t){if(null!=t)if(e.videoDetail=t,e.seriesId)e.getPlayUrl(e.seriesId);else if(null!=t.videoSeries&&t.videoSeries.length>0){var i=t.videoSeries[0].seriesId;e.getPlayUrl(i)}})}},mounted:function(){this.player=this.$refs.player.dp,this.adjustHeight(),document.title=window.sessionStorage.getItem("current_title")},created:function(){this.queryVideoDetail()}}),z=T,U=(i("5fc2"),i("d12e"),Object(s["a"])(z,O,$,!1,null,"6434f996",null)),F=U.exports;a.a.use(p.a);var N=new p.a({routes:[{path:"/",name:"home",component:C,meta:{title:"SudaVideo",keepAlive:!0}},{path:"/videoDetail/:videoId",name:"详情",component:F,props:!0,meta:{title:"详情"}},{path:"/videoDetail/:videoId/:seriesId",name:"详情",component:F,props:!0,meta:{title:"详情"}},{path:"/videoDetail/:videoId/:seriesId",name:"详情",component:F,props:!0,meta:{title:"详情"}},{path:"/VideoList/:playType/",name:"详情",component:P,props:!0,meta:{title:"分类"}}]}),E=i("71ee"),B=i.n(E),A=i("283e"),H=i.n(A);a.a.use(B.a),a.a.use(H.a,{error:i("0d18"),loading:i("0d18")}),N.beforeEach(function(e,t,i){e.meta.title&&(document.title=e.meta.title),i()}),a.a.config.productionTip=!1,window.vm=new a.a({router:N,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var n=i("106f"),a=i.n(n);a.a},"5fc2":function(e,t,i){"use strict";var n=i("e6e8"),a=i.n(n);a.a},6389:function(e,t){e.exports=VueRouter},"7d3a":function(e,t,i){},"7dd3":function(e,t,i){},"8bbf":function(e,t){e.exports=Vue},cebe:function(e,t){e.exports=axios},d12e:function(e,t,i){"use strict";var n=i("7dd3"),a=i.n(n);a.a},e6e8:function(e,t,i){}});