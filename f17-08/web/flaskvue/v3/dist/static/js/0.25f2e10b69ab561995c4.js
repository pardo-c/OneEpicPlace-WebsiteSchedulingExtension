webpackJsonp([0],{Nolv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{date:null,room:null,menu:!1,modal:!1,menu2:!1,menu3:!1,timeStart:null,timeEnd:null}},methods:{submitEvent:function(){var t=this.date;t=(t=t.replace("-","/")).replace("-","/"),this.$store.commit("addEvent",{date:t,title:String(this.room),desc:String(this.timeStart)+" - "+String(this.timeEnd)})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticStyle:{padding:"50px"},attrs:{width:"600px"}},[n("v-card-text",[n("v-form",[n("v-menu",{ref:"menu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":t.date},on:{"update:returnValue":function(e){t.date=e}},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-text-field",{attrs:{slot:"activator",label:"Picker in menu","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.$refs.menu.save(t.date)}}},[t._v("OK")])],1)],1),t._v(" "),n("v-select",{attrs:{label:"Select a room","prepend-icon":"home",items:this.$store.state.rooms},model:{value:t.room,callback:function(e){t.room=e},expression:"room"}}),t._v(" "),n("v-menu",{ref:"menu2",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"max-width":"290px","min-width":"290px","return-value":t.timeStart},on:{"update:returnValue":function(e){t.timeStart=e}},model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[n("v-text-field",{attrs:{slot:"activator",label:"Pick a start time","prepend-icon":"access_time",readonly:""},slot:"activator",model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}}),t._v(" "),n("v-time-picker",{on:{change:function(e){t.$refs.menu2.save(t.timeStart)}},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}})],1),t._v(" "),n("v-menu",{ref:"menu3",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"max-width":"290px","min-width":"290px","return-value":t.timeEnd},on:{"update:returnValue":function(e){t.timeEnd=e}},model:{value:t.menu3,callback:function(e){t.menu3=e},expression:"menu3"}},[n("v-text-field",{attrs:{slot:"activator",label:"Pick an end time","prepend-icon":"access_time",readonly:""},slot:"activator",model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}}),t._v(" "),n("v-time-picker",{on:{change:function(e){t.$refs.menu3.save(t.timeEnd)}},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}})],1),t._v(" "),n("v-btn",{on:{click:t.submitEvent}},[t._v("\r\n                    Submit Event\r\n                ")])],1)],1)],1)],1)},staticRenderFns:[]};var l=n("VU/8")(a,i,!1,function(t){n("cvDT")},null,null);e.default=l.exports},cvDT:function(t,e){}});
//# sourceMappingURL=0.25f2e10b69ab561995c4.js.map