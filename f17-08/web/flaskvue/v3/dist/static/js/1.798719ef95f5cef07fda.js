webpackJsonp([1],{"4YwS":function(t,e){},qbhH:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=l("o9cx"),a=l("/vvS"),o=l("RRCM"),n=l("Dzib"),r=l("utMk"),c=l("1Uxg"),s=l("Nolv"),d={data:function(){return{drawer:!0,selection:"profile-page",menu:[{action:"today",title:"Calendar",active:!0,items:[{title:"Full View",selector:"full-calendar"},{title:"Monthly View",selector:"calendar-monthly"},{title:"Event Booking",selector:"booking"},{title:"Weekly View",selector:"calendar-weekly"},{title:"Daily View",selector:"calendar-daily"}]},{action:"account_circle",title:"Profile",active:!1,items:[{title:"View Profile",selector:"profile-page"},{title:"Edit Profile",selector:"profile-edit"}]}]}},components:{"profile-page":i.default,"profile-edit":a.default,"full-calendar":o.default,"calendar-monthly":n.default,"calendar-weekly":r.default,"calendar-daily":c.default,booking:s.default},methods:{}},v={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-app",{attrs:{dark:""}},[1==this.$store.state.isLoggedin?l("div",[l("v-navigation-drawer",{attrs:{clipped:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[l("v-list",t._l(t.menu,function(e){return l("v-list-group",{key:e.title,attrs:{"prepend-icon":e.action,"no-action":""},model:{value:e.active,callback:function(l){t.$set(e,"active",l)},expression:"item.active"}},[l("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[l("v-list-tile-content",[l("v-list-tile-title",[t._v(" "+t._s(e.title)+" ")])],1)],1),t._v(" "),t._l(e.items,function(e){return l("v-list-tile",{key:e.title,on:{click:function(l){t.selection=e.selector}}},[l("v-list-tile-content",[l("v-list-tile-title",[t._v(t._s(e.title))])],1),t._v(" "),l("v-list-tile-action",[l("v-icon",[t._v(t._s(e.action))])],1)],1)})],2)}))],1),t._v(" "),l("v-toolbar",{attrs:{app:"",fixed:"","clipped-left":""}},[l("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),l("v-toolbar-title",[t._v("EPIC")])],1),t._v(" "),l("v-content",[l("v-container",{attrs:{fluid:"","fill-height":""}},[l("v-layout",{attrs:{"justify-center":""}},[l(t.selection,{tag:"component"})],1)],1)],1)],1):l("div",{attrs:{href:"#/login"}},[t._v("\n        Not logged in, click to redirect\n    ")])])},staticRenderFns:[]};var u=l("VU/8")(d,v,!1,function(t){l("4YwS")},null,null);e.default=u.exports}});
//# sourceMappingURL=1.798719ef95f5cef07fda.js.map