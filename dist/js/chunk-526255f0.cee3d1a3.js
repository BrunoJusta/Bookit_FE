(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-526255f0"],{"1bb2":function(t,e,i){},3439:function(t,e,i){"use strict";var s=i("1bb2"),a=i.n(s);a.a},f11a:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),i("form",{on:{submit:function(e){return e.preventDefault(),t.addArea()}}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-2"}),i("div",{staticClass:"col-sm-4"},[i("b-input",{attrs:{id:"inputs",placeholder:"Nome do espaço",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("div",{staticClass:"col-sm-4"},[i("b-input",{attrs:{id:"inputs",placeholder:"Link da Imagem",required:""},model:{value:t.img,callback:function(e){t.img=e},expression:"img"}})],1),i("div",{staticClass:"col-sm-2"})]),i("div",{staticClass:"row"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticStyle:{resize:"none"},attrs:{id:"description",placeholder:"Descrição...",rows:"4",cols:"20",required:""},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),""!=this.img?i("div",{staticClass:"row"},[i("img",{attrs:{src:t.img,id:"imgArea"}})]):t._e(),i("button",{staticClass:"btn btn-primary rounded-0 border-0",attrs:{type:"submit",value:"Adicionar"}},[t._v("Adicionar")])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"title"}},[i("h1",{attrs:{id:"redTitle"}},[t._v("ADICIONAR ESPAÇO")]),i("hr",{staticClass:"back-line"}),i("div",{staticClass:"container box"})])}],r=(i("a4d3"),i("e01a"),i("b0c0"),i("d3b7"),i("96cf"),{name:"AddWorkshop",data:function(){return{name:"",img:"",description:"",areas:[]}},methods:{addArea:function(t,e,i){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(this.$store.dispatch("postArea",{name:this.name,img:this.img,description:this.description}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),alert(t.t0);case 8:this.name="",this.img="",this.description="";case 11:case"end":return t.stop()}}),null,this,[[0,5]])}}}),n=r,c=(i("3439"),i("2877")),o=Object(c["a"])(n,s,a,!1,null,"02d98eec",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-526255f0.cee3d1a3.js.map