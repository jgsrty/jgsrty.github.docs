(window.webpackJsonp=window.webpackJsonp||[]).push([[13,17,19],{120:function(t,i,e){"use strict";var s=e(67);e.n(s).a},152:function(t,i,e){"use strict";e.r(i);var s={props:{position:{type:String,default:"fixed"},visible:{type:Boolean,default:!1}}},n=(e(120),e(0)),o=Object(n.a)(s,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"rty-loading flex-center-center",style:{position:this.position}},[i("div",{staticClass:"load-effect"})])}),[],!1,null,"4f283089",null);i.default=o.exports},248:function(t,i,e){"use strict";e.r(i);var s=e(63),n=e(152),o={components:{rtyButton:s.default,rtyLoading:n.default},data:function(){return{showLoading1:!1,showLoading2:!1}},methods:{displayLoad1:function(){var t=this;this.showLoading1=!0,setTimeout((function(){t.showLoading1=!1}),2e3)},displayLoad2:function(){var t=this;this.showLoading2=!0,setTimeout((function(){t.showLoading2=!1}),2e3)}}},a=e(0),r=Object(a.a)(o,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("div",{staticStyle:{margin:"20px 0"}},[i("rty-button",{attrs:{text:"全屏loading",type:"primary"},on:{click:this.displayLoad1}}),this._v(" "),i("rty-loading",{attrs:{visible:this.showLoading1}})],1),this._v(" "),i("div",[i("rty-button",{attrs:{text:"局部loading",type:"primary"},on:{click:this.displayLoad2}}),this._v(" "),i("div",{staticStyle:{position:"relative",width:"500px",height:"200px",border:"1px solid #333","margin-top":"10px"}},[i("rty-loading",{attrs:{visible:this.showLoading2,position:"absolute"}})],1)],1)])}),[],!1,null,null,null);i.default=r.exports},42:function(t,i,e){},60:function(t,i,e){"use strict";var s=e(42);e.n(s).a},63:function(t,i,e){"use strict";e.r(i);var s={name:"rtyButton",props:{text:{type:String,default:"default"},type:{type:String,default:"default"},size:{type:String,default:"default"}},computed:{textWord:function(){return"default"==this.text?"默认按钮":"primary"==this.text?"主要按钮":"success"==this.text?"成功按钮":"warning"==this.text?"警告按钮":"danger"==this.text?"危险按钮":this.text}},methods:{clickBtn:function(t){this.$emit("click",t)}}},n=(e(60),e(0)),o=Object(n.a)(s,(function(){var t=this,i=t.$createElement;return(t._self._c||i)("button",{staticClass:"default",class:[t.type?t.type:"",t.size?t.size:""],on:{click:t.clickBtn}},[t._v(t._s(t.textWord))])}),[],!1,null,"39b4d51c",null);i.default=o.exports},67:function(t,i,e){}}]);