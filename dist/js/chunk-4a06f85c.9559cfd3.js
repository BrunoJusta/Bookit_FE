(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a06f85c"],{"159b":function(e,t,r){var s=r("da84"),a=r("fdbc"),n=r("17c2"),i=r("9112");for(var c in a){var o=s[c],l=o&&o.prototype;if(l&&l.forEach!==n)try{i(l,"forEach",n)}catch(u){l.forEach=n}}},"17c2":function(e,t,r){"use strict";var s=r("b727").forEach,a=r("b301");e.exports=a("forEach")?function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}:[].forEach},2532:function(e,t,r){"use strict";var s=r("23e7"),a=r("5a34"),n=r("1d80"),i=r("ab13");s({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~String(n(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},"3a2c":function(e,t,r){"use strict";var s=r("cecf"),a=r.n(s);a.a},4841:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"padding-bottom":"100px"}},[e._m(0),r("div",{staticClass:"container"},[r("b-input",{staticClass:"rounded-0",staticStyle:{"max-width":"300px",margin:"auto"},attrs:{type:"text",placeholder:"Pesquisar..."},model:{value:e.searchUsers,callback:function(t){e.searchUsers=t},expression:"searchUsers"}}),r("p",{staticClass:"mt-3",staticStyle:{float:"left"}},[e._v("Página Atual: "+e._s(e.currentPage))]),r("b-table",{attrs:{"per-page":e.perPage,"current-page":e.currentPage,id:"my-table",striped:"",bordered:"",small:"",hover:"","head-variant":"dark",responsive:"sm",items:this.filteredUsers,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return["User"==t.item.type&&t.item.email!=e.$store.getters.getEmail?r("b-button",{staticClass:"mr-1 adminBtn",attrs:{size:"sm"},on:{click:function(r){return e.editUsers(t.item.user_id,"","","","",0)}}},[e._v("Tornar administrador")]):e._e(),"Admin"==t.item.type&&t.item.email!=e.$store.getters.getEmail?r("b-button",{staticClass:"mr-1 userBtn",attrs:{size:"sm"},on:{click:function(r){return e.editUsers(t.item.user_id,"","","","",1)}}},[e._v("Tornar cliente")]):e._e(),t.item.email!=e.$store.getters.getEmail&&"Blocked"!==t.item.type?r("b-button",{staticClass:"mr-1 blockBtn",attrs:{size:"sm"},on:{click:function(r){return e.editUsers(t.item.user_id,"","","","",2)}}},[r("i",{staticClass:"fas fa-lock"})]):e._e(),t.item.email!=e.$store.getters.getEmail&&"Blocked"===t.item.type?r("b-button",{staticClass:"mr-1 unlockBtn",attrs:{size:"sm"},on:{click:function(r){return e.editUsers(t.item.user_id,"","","","",1)}}},[r("i",{staticClass:"fas fa-lock-open"})]):e._e(),t.item.email!=e.$store.getters.getEmail?r("b-button",{staticClass:"mr-1 deleteBtn",attrs:{size:"sm"},on:{click:function(r){return e.deleteUser(t.item.user_id)}}},[r("i",{staticClass:"fas fa-trash-alt"})]):r("span",[e._v("Sem Ações")])]}}])}),r("b-pagination",{staticStyle:{float:"right"},attrs:{"total-rows":e.rows,"per-page":e.perPage,"aria-controls":"my-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-full title"},[r("h1",{attrs:{id:"redTitle"}},[e._v("UTILIZADORES")]),r("hr",{staticClass:"back-line"}),r("div",{staticClass:"container",attrs:{id:"whiteRect"}})])}],n=(r("a4d3"),r("4de4"),r("caad"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("2532"),r("159b"),r("ade3")),i=(r("96cf"),r("2f62"));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={data:function(){return{perPage:10,currentPage:1,fields:[{key:"name",label:"Nome",sortable:!0},{key:"lastName",label:"Apelido",sortable:!0},{key:"email",label:"E-mail",sortable:!0},{key:"number",label:"Contacto",sortable:!1},{key:"type",label:"Tipo",sortable:!1},{key:"actions",label:"Ações",sortable:!1}],users:[],searchUsers:""}},created:function(){this.getUsers()},methods:{getUsers:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(this.$store.dispatch("fetchUsers"));case 3:this.users=this.getAllUsers.data,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),alert(e.t0);case 9:case"end":return e.stop()}}),null,this,[[0,6]])},editUsers:function(e,t,r,s,a,n){return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,regeneratorRuntime.awrap(this.$store.dispatch("editUsers",{id:e,oldPassword:t,newPassword:r,newPassword2:s,number:a,userType:n}));case 3:i.next=8;break;case 5:i.prev=5,i.t0=i["catch"](0),alert(i.t0);case 8:this.getUsers();case 9:case"end":return i.stop()}}),null,this,[[0,5]])},deleteUser:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(this.$store.dispatch("deleteUser",{id:e}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),alert(t.t0);case 8:this.getUsers();case 9:case"end":return t.stop()}}),null,this,[[0,5]])}},computed:o({},Object(i["b"])(["getAllUsers"]),{filteredUsers:function(){var e=this;return this.users.filter((function(t){var r=!0;return""==e.searchUsers?r:t.name.toLowerCase().includes(e.searchUsers.toLowerCase())?(r=t.name.toLowerCase().includes(e.searchUsers.toLowerCase()),r):t.lastName.toLowerCase().includes(e.searchUsers.toLowerCase())?(r=t.lastName.toLowerCase().includes(e.searchUsers.toLowerCase()),r):t.email.toLowerCase().includes(e.searchUsers.toLowerCase())?(r=t.email.toLowerCase().includes(e.searchUsers.toLowerCase()),r):t.type.toLowerCase().includes(e.searchUsers.toLowerCase())?(r=t.type.toLowerCase().includes(e.searchUsers.toLowerCase()),r):void 0}))}}),rows:function(){return this.users.length}},u=l,d=(r("3a2c"),r("2877")),f=Object(d["a"])(u,s,a,!1,null,"b4d66e7c",null);t["default"]=f.exports},"4de4":function(e,t,r){"use strict";var s=r("23e7"),a=r("b727").filter,n=r("d039"),i=r("1dde"),c=i("filter"),o=c&&!n((function(){[].filter.call({length:-1,0:1},(function(e){throw e}))}));s({target:"Array",proto:!0,forced:!c||!o},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,r){var s=r("44e7");e.exports=function(e){if(s(e))throw TypeError("The method doesn't accept regular expressions");return e}},ab13:function(e,t,r){var s=r("b622"),a=s("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,"/./"[e](t)}catch(s){}}return!1}},ade3:function(e,t,r){"use strict";function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return s}))},b301:function(e,t,r){"use strict";var s=r("d039");e.exports=function(e,t){var r=[][e];return!r||!s((function(){r.call(null,t||function(){throw 1},1)}))}},b64b:function(e,t,r){var s=r("23e7"),a=r("7b0b"),n=r("df75"),i=r("d039"),c=i((function(){n(1)}));s({target:"Object",stat:!0,forced:c},{keys:function(e){return n(a(e))}})},caad:function(e,t,r){"use strict";var s=r("23e7"),a=r("4d64").includes,n=r("44d2");s({target:"Array",proto:!0},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("includes")},cecf:function(e,t,r){},dbb4:function(e,t,r){var s=r("23e7"),a=r("83ab"),n=r("56ef"),i=r("fc6a"),c=r("06cf"),o=r("8418");s({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,r,s=i(e),a=c.f,l=n(s),u={},d=0;while(l.length>d)r=a(s,t=l[d++]),void 0!==r&&o(u,t,r);return u}})},e439:function(e,t,r){var s=r("23e7"),a=r("d039"),n=r("fc6a"),i=r("06cf").f,c=r("83ab"),o=a((function(){i(1)})),l=!c||o;s({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(e,t){return i(n(e),t)}})},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-4a06f85c.9559cfd3.js.map