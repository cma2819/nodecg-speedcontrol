!function(t){function e(e){for(var n,a,r=e[0],c=e[1],h=e[2],u=0,d=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(l&&l(e);d.length;)d.shift()();return o.push.apply(o,h||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={10:0},o=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var h=0;h<r.length;h++)e(r[h]);var l=c;o.push([187,0,1]),i()}({12:function(t,e,i){"use strict";var n=i(14),s=i(10),o=i(2),a=i(0),r=i(3);const c=Object(o.a)(n.a,s.a);e.a=c.extend({name:"activatable",props:{activator:{default:null,validator:t=>["string","object"].includes(typeof t)},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave"],listeners:{}}),watch:{activator:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=Object(a.l)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(r.b)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=Object(a.k)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):t.click=t=>{const e=this.getActivator(t);e&&e.focus(),t.stopPropagation(),this.isActive=!this.isActive},t},getActivator(t){if(this.activatorElement)return this.activatorElement;let e=null;if(this.activator){const t=this.internalActivator?this.$el:document;e="string"==typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){const t=this.activatorNode[0].componentInstance;e=t&&t.$options.mixins&&t.$options.mixins.some(t=>t.options&&["activatable","menuable"].includes(t.options.name))?t.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot(){return Object(a.k)(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},126:function(t,e,i){"use strict";var n=i(91),s=i.n(n);e.default=s.a},127:function(t,e,i){"use strict";var n=i(92),s=i.n(n);e.default=s.a},128:function(t,e,i){"use strict";var n=i(93),s=i.n(n);e.default=s.a},129:function(t,e,i){"use strict";var n=i(94),s=i.n(n);e.default=s.a},130:function(t,e,i){"use strict";var n=i(95),s=i.n(n);e.default=s.a},131:function(t,e,i){"use strict";var n=i(98),s=i.n(n);e.default=s.a},14:function(t,e,i){"use strict";var n=i(1);e.a=n.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const i=parseInt(this[t+"Delay"],10);this[t+"Timeout"]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),i)}}})},179:function(t,e,i){"use strict";var n=i(90);i.n(n).a},180:function(t,e,i){"use strict";var n=i(96);i.n(n).a},181:function(t,e,i){"use strict";var n=i(97);i.n(n).a},187:function(t,e,i){"use strict";i.r(e);var n=i(1),s=i(15),o=i(4),a=i(23),r=n.a.extend({name:"TimerTime",data:function(){return{time:"00:00:00"}},computed:{serverTime:function(){return o.b.state.timer.time},bgColour:function(){switch(o.b.state.timer.state){case"stopped":case"paused":default:return"#455A64";case"running":return"";case"finished":return"#388E3C"}},disableEditing:function(){return["running","finished"].includes(o.b.state.timer.state)}},watch:{serverTime:{handler:function(t){this.time=t},immediate:!0}},methods:{finishEdit:function(t){this.time.match(/^(\d+:)?(?:\d{1}|\d{2}):\d{2}$/)&&(nodecg.sendMessage("timerEdit",this.time).then((function(){})).catch((function(){})),t.target.blur())},abandonEdit:function(){this.time=this.serverTime}}}),c=(i(179),i(5)),h=i(126),l=i(6),u=i.n(l),d=i(52),f=i(61),p=Object(c.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-tooltip",{attrs:{bottom:"",disabled:t.disableEditing},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("span",t._g({},n),[i("v-text-field",{staticClass:"TimerInput",attrs:{solo:"","single-line":"","hide-details":"","background-color":t.bgColour,readonly:t.disableEditing},on:{blur:t.abandonEdit,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.finishEdit(e)}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)]}}])},[t._v(" "),i("span",[t._v(t._s(t.$t("editTip")))])])],1)}),[],!1,null,"111c304f",null);"function"==typeof h.default&&Object(h.default)(p);var v=p.exports;u()(p,{VTextField:d.a,VTooltip:f.a});var m=i(7),g=n.a.extend({name:"StartButton",computed:{state:function(){return o.b.state.timer.state}},methods:{button:function(){"stopped"===this.state||"paused"===this.state?m.a.sendMessage("timerStart").then((function(){})).catch((function(){})):"running"===this.state&&m.a.sendMessage("timerPause").then((function(){})).catch((function(){}))}}}),b=i(127),_=i(47),y=i(67),x=Object(c.a)(g,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-tooltip",{attrs:{top:"",disabled:"finished"===t.state},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("span",t._g({},n),[i("v-btn",{attrs:{disabled:"finished"===t.state},on:{click:t.button}},["running"===t.state?i("v-icon",[t._v("\n            mdi-pause\n          ")]):i("v-icon",[t._v("\n            mdi-play\n          ")])],1)],1)]}}])},[t._v(" "),"running"===t.state?i("span",[t._v(t._s(t.$t("pause")))]):"paused"===t.state?i("span",[t._v(t._s(t.$t("resume")))]):i("span",[t._v(t._s(t.$t("play")))])])],1)}),[],!1,null,null,null);"function"==typeof b.default&&Object(b.default)(x);var O=x.exports;u()(x,{VBtn:_.a,VIcon:y.a,VTooltip:f.a});var w=n.a.extend({name:"ResetButton",computed:{state:function(){return o.b.state.timer.state}},methods:{button:function(){m.a.sendMessage("timerReset").then((function(){})).catch((function(){}))}}}),A=i(128),T=Object(c.a)(w,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-tooltip",{attrs:{top:"",disabled:"stopped"===t.state},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("span",t._g({},n),[i("v-btn",{attrs:{disabled:"stopped"===t.state},on:{click:t.button}},[i("v-icon",[t._v("mdi-rewind")])],1)],1)]}}])},[t._v(" "),i("span",[t._v(t._s(t.$t("reset")))])])],1)}),[],!1,null,null,null);"function"==typeof A.default&&Object(A.default)(T);var C=T.exports;u()(T,{VBtn:_.a,VIcon:y.a,VTooltip:f.a});var E=n.a.extend({name:"StopButton",props:{info:{type:Object,default:function(){return{id:void 0}}},forfeit:{type:Boolean,default:!1}},computed:{isDisabled:function(){return this.info.id&&!!o.b.state.timer.teamFinishTimes[this.info.id]||"running"!==o.b.state.timer.state}},methods:{button:function(){m.a.sendMessage("timerStop",{id:this.info.id,forfeit:this.forfeit}).then((function(){})).catch((function(){}))}}}),k=i(129),$=Object(c.a)(E,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-tooltip",{attrs:{top:"",disabled:t.isDisabled},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("span",t._g({},n),[i("v-btn",{attrs:{disabled:t.isDisabled},on:{click:t.button}},[t.forfeit?i("v-icon",[t._v("mdi-close")]):i("v-icon",[t._v("mdi-check")])],1)],1)]}}])},[t._v(" "),t.forfeit?i("span",[t._v(t._s(t.$t("forfeit")))]):i("span",[t._v(t._s(t.$t("stop")))])])],1)}),[],!1,null,null,null);"function"==typeof k.default&&Object(k.default)($);var j=$.exports;u()($,{VBtn:_.a,VIcon:y.a,VTooltip:f.a});var D=n.a.extend({name:"UndoButton",props:{info:{type:Object,default:function(){return{id:void 0}}}},computed:{isDisabled:function(){return!this.info.id&&"finished"!==o.b.state.timer.state||!!this.info.id&&(!o.b.state.timer.teamFinishTimes[this.info.id]||!["running","finished"].includes(o.b.state.timer.state))}},methods:{button:function(){m.a.sendMessage("timerUndo",this.info.id).then((function(){})).catch((function(){}))}}}),N=i(130),S=Object(c.a)(D,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-tooltip",{attrs:{top:"",disabled:t.isDisabled},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("span",t._g({},n),[i("v-btn",{attrs:{disabled:t.isDisabled},on:{click:t.button}},[i("v-icon",[t._v("mdi-undo")])],1)],1)]}}])},[t._v(" "),i("span",[t._v(t._s(t.$t("undo")))])])],1)}),[],!1,null,null,null);"function"==typeof N.default&&Object(N.default)(S);var B=S.exports;u()(S,{VBtn:_.a,VIcon:y.a,VTooltip:f.a});var I=n.a.extend({name:"Team",components:{StopButton:j,UndoButton:B},props:{info:{type:Object,default:function(){return{}}},index:{type:Number,default:0}},computed:{finishTime:function(){if(o.b.state.timer.teamFinishTimes[this.info.id])return o.b.state.timer.teamFinishTimes[this.info.id].time},state:function(){if(o.b.state.timer.teamFinishTimes[this.info.id])return o.b.state.timer.teamFinishTimes[this.info.id].state}}}),L=(i(180),Object(c.a)(I,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Team d-flex align-center"},[i("stop-button",{attrs:{info:t.info}}),t._v(" "),i("stop-button",{attrs:{info:t.info,forfeit:""}}),t._v(" "),i("undo-button",{attrs:{info:t.info}}),t._v(" "),i("div",{staticClass:"TeamName"},[t.info.name?i("span",[t._v(t._s(t.info.name))]):1===t.info.players.length?i("span",[t._v(t._s(t.info.players[0].name))]):i("span",t._l(t.info.players,(function(e,n){return i("span",{key:e.id},[t._v("\n        "+t._s(e.name)),n+1<t.info.players.length?i("span",[t._v(",")]):t._e()])})),0),t._v(" "),t.finishTime&&"completed"===t.state?i("span",[t._v("\n      ["+t._s(t.finishTime)+"]\n    ")]):t.finishTime&&"forfeit"===t.state?i("span",[t._v("\n      ["+t._s(t.$t("forfeit"))+"]\n    ")]):t._e()])],1)}),[],!1,null,"4b431a7a",null).exports),M=n.a.extend({components:{TimerTime:v,StartButton:O,ResetButton:C,StopButton:j,UndoButton:B,Team:L},data:function(){return{tempEnable:!1}},computed:{activeRun:function(){return o.b.state.runDataActiveRun},teams:function(){return this.activeRun?this.activeRun.teams:[]},disableChanges:{get:function(){return o.b.state.timerChangesDisabled},set:function(t){o.b.commit("updateTimerDisabledToggle",{value:t})}}},watch:{disableChanges:function(t){t&&(this.tempEnable=!1)},activeRun:function(){this.tempEnable=!1}},mounted:function(){window.frameElement&&window.frameElement.parentElement.setAttribute("display-title",this.$t("panelTitle"))}}),Y=(i(181),i(131)),W=i(203),P=Object(c.a)(M,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("div",{class:{disabled:t.disableChanges}},[i("timer-time"),t._v(" "),i("div",{staticClass:"d-flex justify-center",attrs:{id:"Controls"}},[i("start-button"),t._v(" "),i("reset-button"),t._v(" "),t.teams.length<=1?[i("stop-button",{attrs:{info:t.teams[0]}}),t._v(" "),i("stop-button",{attrs:{info:t.teams[0],forfeit:""}}),t._v(" "),i("undo-button",{attrs:{info:t.teams[0]}})]:t._e()],2),t._v(" "),t.teams.length>1?i("div",{style:{"padding-top":"10px"}},t._l(t.teams,(function(t,e){return i("team",{key:t.id,attrs:{info:t,index:e}})})),1):t._e()],1),t._v(" "),t.disableChanges||t.tempEnable?i("div",{style:{"padding-top":"10px"}},[t.disableChanges?i("v-btn",{attrs:{block:""},on:{click:function(e){t.disableChanges=!1,t.tempEnable=!0}}},[t._v("\n      "+t._s(t.$t("enableChanges"))+"\n    ")]):t._e(),t._v(" "),t.tempEnable?i("v-btn",{attrs:{block:""},on:{click:function(e){t.disableChanges=!0}}},[t._v("\n      "+t._s(t.$t("disableChanges"))+"\n    ")]):t._e(),t._v(" "),i("div",{style:{"margin-top":"5px"}},[i("em",[t._v(t._s(t.$t("toggleChangesNote")))])])],1):t._e()])}),[],!1,null,"4c475550",null);"function"==typeof Y.default&&Object(Y.default)(P);var F=P.exports;u()(P,{VApp:W.a,VBtn:_.a}),o.a().then((function(){new n.a({vuetify:a.a,i18n:s.a,el:"#App",render:function(t){return t(F)}})}))},19:function(t,e,i){"use strict";var n=i(3),s=i(1);e.a=s.a.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(n.d)("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})},22:function(t,e,i){"use strict";var n=i(21),s=i(1),o=i(0),a=s.a.extend().extend({name:"stackable",data:()=>({stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}),computed:{activeZIndex(){if("undefined"==typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(o.m)(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,i=[this.stackMinZIndex,Object(o.m)(e)],n=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let e=0;e<n.length;e++)t.includes(n[e])||i.push(Object(o.m)(n[e]));return Math.max(...i)}}}),r=i(12),c=i(2);const h=Object(c.a)(a,n.a,r.a);e.a=h.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:()=>({absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}),computed:{computedLeft(){const t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width);let s=0;if(s+=this.left?i-(n-t.width):i,this.offsetX){const e=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));s+=this.left?-e:t.width}return this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),s},computedTop(){const t=this.dimensions.activator,e=this.dimensions.content;let i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator(){return!!(this.$slots.activator||this.$scopedSlots.activator||this.activator||this.inputActivator)}},watch:{disabled(t){t&&this.callDeactivate()},isActive(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount(){this.hasWindow="undefined"!=typeof window},methods:{absolutePosition(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate(){},calcLeft(t){return Object(o.d)(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop(){return Object(o.d)(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow(t,e){const i=t+e-this.pageWidth+12;return(t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12))+this.getOffsetLeft()},calcYOverflow(t){const e=this.getInnerHeight(),i=this.pageYOffset+e,n=this.dimensions.activator,s=this.dimensions.content.height,o=i<t+s;return o&&this.offsetOverflow&&n.top>s?t=this.pageYOffset+(n.top-s):o&&!this.allowOverflow?t=i-s-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate(){this.hasWindow&&this.activate()},callDeactivate(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed(){if(!1!==this.attach)return;let t=this.getActivator();for(;t;){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1},deactivate(){},genActivatorListeners(){const t=r.a.options.methods.genActivatorListeners.call(this),e=t.click;return t.click=t=>{this.openOnClick&&e&&e(t),this.absoluteX=t.clientX,this.absoluteY=t.clientY},t},getInnerHeight(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect(t){const e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure(t){if(!t||!this.hasWindow)return null;const e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){const i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek(t){requestAnimationFrame(()=>{const e=this.$refs.content;e&&"none"===e.style.display?(e.style.display="inline-block",t(),e.style.display="none"):t()})},startTransition(){return new Promise(t=>requestAnimationFrame(()=>{this.isContentActive=this.hasJustFocused=this.isActive,t()}))},updateDimensions(){this.hasWindow="undefined"!=typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;const t={activator:{...this.dimensions.activator},content:{...this.dimensions.content}};if(!this.hasActivator||this.absolute)t.activator=this.absolutePosition();else{const e=this.getActivator();if(!e)return;t.activator=this.measure(e),t.activator.offsetLeft=e.offsetLeft,!1!==this.attach?t.activator.offsetTop=e.offsetTop:t.activator.offsetTop=0}this.sneakPeek(()=>{this.$refs.content&&(t.content=this.measure(this.$refs.content)),this.dimensions=t})}}})},25:function(t,e,i){"use strict";var n=i(2);e.a=Object(n.a)().extend({name:"dependent",data:()=>({closeDependents:!0,isActive:!1,isDependent:!0}),watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let t=0;t<e.length;t++)e[t].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?function t(e){const i=[];for(let n=0;n<e.length;n++){const s=e[n];s.isActive&&s.isDependent?i.push(s):i.push(...t(s.$children))}return i}(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let i=0;i<e.length;i++)t.push(...e[i].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}})},26:function(t,e,i){"use strict";var n=i(19),s=i(0),o=i(2),a=i(3);e.a=Object(o.a)(n.a).extend({name:"detachable",props:{attach:{default:!1,validator:function(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick(()=>{if(this.activatorNode){(Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode]).forEach(t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)})}})},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){(Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode]).forEach(t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)})}}catch(t){console.log(t)}},methods:{getScopeIdAttrs(){const t=Object(s.i)(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"==typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(a.c)("Unable to locate target "+(this.attach||"[data-app]"),this)}}})},38:function(t,e,i){},61:function(t,e,i){"use strict";i(38);var n=i(12),s=i(8),o=i(14),a=i(25),r=i(26),c=i(22),h=i(10),l=i(0),u=i(3),d=i(2);e.a=Object(d.a)(s.a,o.a,a.a,r.a,c.a,h.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!(this.bottom||this.left||this.top||this.right),n=!1!==this.attach?t.offsetLeft:t.left;let s=0;return this.top||this.bottom||i?s=n+t.width/2-e.width/2:(this.left||this.right)&&(s=n+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),this.calcXOverflow(s,this.dimensions.content.width)+"px"},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let n=0;return this.top||this.bottom?n=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=i+t.height/2-e.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),this.calcYOverflow(n+this.pageYOffset)+"px"},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(l.d)(this.maxWidth),minWidth:Object(l.d)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(l.l)(this,"activator",!0)&&Object(u.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=n.a.options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===l.o.esc&&(this.getActivator(t),this.runDelay("close"))},t},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}})},7:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n=window.nodecg;window.NodeCG},90:function(t,e,i){},91:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"editTip":"Click to edit, Enter to save"},"ja":{"editTip":"クリックすると編集が行え、Enterすると保存します"}}'),delete t.options._Ctor}},92:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"pause":"Pause","resume":"Resume","play":"Play"},"ja":{"pause":"ポーズ","resume":"再開","play":"開始"}}'),delete t.options._Ctor}},93:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"reset":"Reset"},"ja":{"reset":"リセット"}}'),delete t.options._Ctor}},94:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"stop":"Stop"},"ja":{"stop":"ストップ"}}'),delete t.options._Ctor}},95:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"undo":"Undo"},"ja":{"undo":"元に戻す"}}'),delete t.options._Ctor}},96:function(t,e,i){},97:function(t,e,i){},98:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"panelTitle":"Timer","enableChanges":"Enable Changes","disableChanges":"Disable Changes","toggleChangesNote":"Only use this button if needed."},"ja":{"panelTitle":"タイマー","enableChanges":"タイマーの有効化","disableChanges":"タイマーの無効化","toggleChangesNote":"このボタンは必要な際に限り利用してください。"}}'),delete t.options._Ctor}}});