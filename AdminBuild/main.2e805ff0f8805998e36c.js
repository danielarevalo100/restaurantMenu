(self.webpackChunkExplorer=self.webpackChunkExplorer||[]).push([[179],{7979:function(e,t,n){"use strict";var r=n(3935),i=n(3727),o=n(7294),s=n(5977),l=n(8839),a=n(3457),c=n(5893),u=function(e){var t=e.hidden,n=e.backgroundImage,r=e.animation,i=e.animationDelay,o=e.onClick,s=e.onMouseMove,l=e.onWheel,a=e.reference,u=e.id_reference,d=e.onscroll_reference;if(t)return null;var f=Object.assign({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",boxSizing:"border-box",backgroundSize:"cover",backgroundPosition:"bottom"},e.style);return n&&(f.backgroundImage="url("+n+")"),null!=o&&(f.cursor="pointer"),(0,c.jsx)("div",{className:e.className,style:f,onWheel:l,onMouseMove:s,onClick:o,ref:a,id:u,onScroll:d,"data-aos":r,"data-aos-delay":i,children:e.children})};u.defaultProps={hidden:!1};var d=u,f=function(){return window.innerWidth<=600},h=function(e){var t=e.children,n=e.fontSize,r=(e.fontFamily,e.textAlign),i=e.color,o=e.nowrap,s=e.spacing,l=e.onClick,a=e.animation,u=e.animationDelay,d=e.id_reference,h=e.className,m=e.reference,p=e.innerHTML,y=Object.assign({display:"flex",alignItems:"center",overflow:"hidden",fontSize:n*(f()?.8:window.innerWidth<1024?.9:1)+"rem",textAlign:r,color:i,maxWidth:"100%",wordBreak:"break-word"},e.style);return null!=l&&(y.cursor="pointer"),1==o&&(y.whiteSpace="nowrap"),s&&(y.letterSpacing=s+"rem"),(0,c.jsx)("span",{id:d,ref:m,style:y,className:h,onClick:l,"data-aos":a,"data-aos-delay":u,dangerouslySetInnerHTML:p?{__html:"<span>".concat(p,"</span>")}:null,children:t})};h.defaultProps={fontSize:1,textAlign:"left",color:"#3a3e44",uppercase:!1};var m=h,p=function(e){var t=(0,s.k6)();return(0,c.jsx)(d,{className:"full-width",style:{backgroundColor:"#eeeeee",padding:"1rem"},children:(0,c.jsxs)(d,{className:"full-width row space-between",style:{maxWidth:"130rem"},children:[(0,c.jsx)(m,{fontSize:4,className:"font-title-cursive",children:"Restaurant Admin"}),(0,c.jsx)(d,{className:"align-end",children:(0,c.jsxs)(d,{className:"row nav",children:[(0,c.jsx)(m,{onClick:function(){return t.push("/plates")},fontSize:1.3,children:"Plates"}),(0,c.jsx)(m,{onClick:function(){return t.push("/")},style:{paddingLeft:"3rem"},fontSize:1.3,children:"Categories"})]})})]})})},y=n(4699),v=n(6156),x=n(282),g=n(5477),b=n(7491),j=n(6479),w=n(9895),C=n(6253),Z=n(1959),S=n(366),T=n.p+"assets/svgs/close.svg",N=n.p+"components/CustomTable/icons/Add.svg",O=n.p+"components/CustomTable/icons/Edit.svg",E=n.p+"components/CustomTable/icons/Trash.svg",A=n(3379),P=n.n(A),k=n(7795),D=n.n(k),z=n(695),I=n.n(z),R=n(9216),_=n.n(R),W=n(1151),F={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=I()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};F.domAPI=D(),F.insertStyleElement=_();P()(W.Z,F),W.Z&&W.Z.locals&&W.Z.locals;function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,v.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e){var t=e.columns,n=e.data,i=e.editable,s=e.title,l=e.style,a=e.loading,u=e.rowActions,f=e.tableActions,h=e.tableMinWidth,p=(0,o.useState)(null),A=(0,y.Z)(p,2),P=A[0],k=A[1],D=(0,o.useState)({}),z=(0,y.Z)(D,2),I=z[0],R=z[1],_=(0,o.useState)({}),W=(0,y.Z)(_,2),F=W[0],L=W[1],U=(0,o.useState)(null),B=(0,y.Z)(U,2),G=B[0],V=B[1],H=(0,o.useState)(""),J=(0,y.Z)(H,2),K=J[0],q=J[1];(0,o.useEffect)((function(){return function(){X()}}),[]);var Q=function(){var e=document.createElement("div");e.id="portal",document.body.appendChild(e)},X=function(){var e=document.getElementById("portal");e&&(e.remove(),R({}),L({}),V(null))},Y=function(e,n){return P==n?(0,c.jsxs)(d,{style:{flexDirection:"row",justifyContent:"flex-start",width:"100%"},children:[(0,c.jsx)(x.Z,{onClick:function(){return k(null)},children:(0,c.jsx)(S.Z,{style:{fontSize:"20px"}})}),(0,c.jsx)(x.Z,{onClick:function(){return t=e,i.onRowDelete(t),void k(null);var t},children:(0,c.jsx)(Z.Z,{style:{fontSize:"20px"}})}),(0,c.jsx)(m,{fontSize:1.4,children:"Do you want to delete this row?"})]}):(0,c.jsxs)(c.Fragment,{children:[i&&(0,c.jsx)(d,{style:{width:"10%",minWidth:"8ch"},className:"table-cell",children:(0,c.jsxs)(d,{className:"actions-icons-container",children:[null===u||void 0===u?void 0:u.map((function(t){var n=t.icon,r=t.onClick;return(0,c.jsx)("img",{style:{width:"20px",height:"20px",cursor:"pointer"},src:n,onClick:function(){return r(e)}})})),"onRowUpdate"in i&&(0,c.jsx)("img",{src:O,style:{width:"20px",height:"20px",cursor:"pointer"},onClick:function(){return function(e,t){Q(),R(e),V(t)}(e,n)}}),"onRowDelete"in i&&(0,c.jsx)("img",{src:E,style:{width:"20px",height:"20px",cursor:"pointer"},onClick:function(){return k(n)}})]})}),t.map((function(t){var n=t.field,r=t.style,i=t.render;return(0,c.jsx)(d,{className:"table-cell",style:r,children:i&&i(e)||(0,c.jsx)(m,{fontSize:1.4,textAlign:"left",children:e[n]})})}))]})},$=function(e,t){var n,r,i,s,l,a,u;return"lookup"in e?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d,{className:"input-label",children:(0,c.jsx)(m,{fontSize:1.4,color:"#ffffff",children:e.title})}),(0,c.jsx)(b.Z,{labelId:"select-label-".concat(t),value:null!==(s=F[e.field])&&void 0!==s?s:I[e.field],onChange:function(t){var n=t.target;return L(M(M({},F),{},(0,v.Z)({},e.field,n.value)))},children:Object.keys(e.lookup).map((function(e){return(0,c.jsx)(j.Z,{value:e,children:e.toUpperCase()})}))})]}):"editComponent"in e?o.createElement(e.editComponent,{rowData:I,updatedData:F,onChange:function(t){console.log("herererererererer",t),L(M(M({},F),{},(0,v.Z)({},e.field,t)))}}):e.long?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d,{className:"input-label",children:(0,c.jsx)(m,{fontSize:1.4,color:"#ffffff",children:e.title})}),(0,c.jsx)(d,{style:{width:"100%"},className:"long-text",children:(0,c.jsx)("textarea",{onChange:function(t){var n=t.target;return L(M(M({},F),{},(0,v.Z)({},e.field,n.value)))},rows:(null===(l=null!==(a=F[e.field])&&void 0!==a?a:I[e.field])||void 0===l?void 0:l.length)<1e3?10:20,value:null!==(u=F[e.field])&&void 0!==u?u:I[e.field]})})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d,{className:"input-label",children:(0,c.jsx)(m,{fontSize:1.4,color:"#ffffff",children:e.title})}),(0,c.jsx)("input",{onChange:function(t){var n=t.target;return L(M(M({},F),{},(0,v.Z)({},e.field,n.value)))},style:{width:(null===(n=null!==(r=F[e.field])&&void 0!==r?r:I[e.field])||void 0===n?void 0:n.length)+"ch"},value:null!==(i=F[e.field])&&void 0!==i?i:I[e.field]})]})};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(w.Z,{style:M(M({},l),{},{overflow:"auto"}),className:"custom-table",children:[(0,c.jsxs)(d,{className:"actions-container",children:[(0,c.jsx)(m,{fontSize:1.5,children:s}),(0,c.jsxs)(d,{className:"table-general-actions",children:[(0,c.jsx)(C.Z,{label:"Search",value:K,onChange:function(e){var t=e.target;return q(t.value)}}),i&&i.onRowAdd&&(0,c.jsx)("img",{src:N,style:{width:"18px",height:"18px",cursor:"pointer"},onClick:function(){Q();var e=t.reduce((function(e,t){return M(M({},e),{},"defaultValue"in t?(0,v.Z)({},t.field,t.defaultValue):(0,v.Z)({},t.field,""))}),{});L(e),R(e)}}),f&&(null===f||void 0===f?void 0:f.map((function(e){var t=e.icon,r=e.onClick;return(0,c.jsx)("img",{style:{width:"18px",height:"18px",cursor:"pointer"},src:t,onClick:function(e){return r(e,n)}})})))]})]}),(0,c.jsxs)(d,{className:"table-container",children:[(0,c.jsx)(d,{style:{minWidth:h},className:"table-header",children:(0,c.jsxs)(d,{className:"table-row",children:[i&&(0,c.jsx)(d,{style:{width:"10%",minWidth:"8ch"},className:"table-cell",children:(0,c.jsx)(m,{fontSize:1.4,children:"Actions"})}),t.map((function(e){var t=e.title,n=e.style;return(0,c.jsx)(d,{className:"table-cell",style:n,children:(0,c.jsx)(m,{fontSize:1.4,children:t})})}))]})}),a?(0,c.jsx)(d,{style:{width:"100%"},className:"table-status",children:(0,c.jsx)(d,{style:{margin:"20px",width:"100%"},children:(0,c.jsx)(g.Z,{})})}):0==n.length?(0,c.jsx)(d,{style:{width:"100%"},className:"table-status",children:(0,c.jsx)(d,{style:{margin:"20px",width:"100%"},children:(0,c.jsx)(m,{fontSize:1.4,children:"No data available"})})}):void 0,(0,c.jsx)(d,{style:{minWidth:h},className:"table-body",children:function(){if(!a)return n.filter((function(e){return Object.keys(e).some((function(t){return JSON.stringify(e[t]).toLowerCase().includes(K.toLowerCase())}))})).map((function(e,t){return(0,c.jsx)(d,{className:"table-row",children:Y(e,t)})}))}()})]})]}),Object.keys(I).length>0&&r.createPortal((0,c.jsx)(d,{className:"modal-container",children:(0,c.jsxs)(d,{className:"modal-container-view",children:[(0,c.jsx)(d,{style:{flexDirection:"row",justifyContent:"flex-end",width:"100%"},children:(0,c.jsx)(d,{onClick:X,className:"close-button",children:(0,c.jsx)("img",{style:{width:"15px"},src:T})})}),(0,c.jsxs)(d,{className:"modal-content-view",children:[(0,c.jsx)(d,{className:"form-container",children:t.map((function(e,t){return(0,c.jsx)(d,{style:{alignItems:"flex-start",width:"100%",margin:"15px 0"},children:$(e,t)})}))}),(0,c.jsx)(x.Z,{onClick:function(){null===G?i.onRowAdd(F):i.onRowUpdate(F,I),X()},className:"save-button",children:(0,c.jsx)(m,{color:"#ffffff",children:"Save"})})]})]})}),document.getElementById("portal"))]})},B="http://fortinporteno.arevaloweb.com/api/",G={},V=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4?arguments[4]:void 0,o={headers:{"Content-Type":"application/json"}};"GET"!=t&&(o.body=JSON.stringify(n),o.method=t),fetch("".concat(B).concat(e),o).then((function(e){return e.json()})).catch((function(e){i&&i(r)})).then((function(e){null==e||e.error?i&&i(r):i&&i(e)}))},H=function(e){V("category","GET",G,"",e)},J=function(e,t){V("category","POST",e,"",t)},K=function(e,t,n){V("category/".concat(e),"PUT",t,"",n)},q=function(e,t){V("category/".concat(e),"DELETE",G,"",t)},Q=function(e){V("plate","GET",G,[],e)},X=function(e,t){V("plate","POST",e,!1,t)},Y=function(e,t,n){V("plate/".concat(e),"PUT",t,"",n)},$=function(e,t){V("plate/".concat(e),"DELETE",G,"",t)},ee=n(4476),te={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=I()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};te.domAPI=D(),te.insertStyleElement=_();P()(ee.Z,te),ee.Z&&ee.Z.locals&&ee.Z.locals;var ne=function(e){var t=(0,o.useState)([]),n=(0,y.Z)(t,2),r=n[0],i=n[1],s=(0,o.useState)(!0),l=(0,y.Z)(s,2),a=l[0],u=l[1];(0,o.useEffect)((function(){f()}),[]);var f=function(){u(!0),H((function(e){i(e),u(!1)}))};return(0,c.jsx)(d,{className:"home",children:(0,c.jsx)(d,{className:"container",children:(0,c.jsx)(U,{title:"Categories",data:r,columns:[{style:{flex:1},title:"Name",field:"name"}],editable:{onRowAdd:function(e){return new Promise((function(t){J(e,(function(e){f(),t()}))}))},onRowUpdate:function(e,t){return new Promise((function(n){K(t._id,e,(function(e){f(),n()}))}))},onRowDelete:function(e){return new Promise((function(t){q(e._id,(function(e){f(),t()}))}))}},loading:0==r.length||a})})})},re=n(2137),ie=n(7329),oe=n(7757),se=n.n(oe),le=n(6546),ae=n(2880),ce=n(4720),ue=n(3671),de=n.n(ue),fe=n(3174),he={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=I()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};he.domAPI=D(),he.insertStyleElement=_();P()(fe.Z,he),fe.Z&&fe.Z.locals&&fe.Z.locals;function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){(0,v.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ye=function(){var e=(0,o.useRef)(null),t=[{style:{width:"20%"},title:"Nombre",field:"name"},{style:{width:"35%",paddingRight:"5rem"},title:"Descripcion",field:"desc"},{style:{width:"10%"},title:"Precio",field:"price"},{style:{flex:1},title:"Categorias",field:"categories",editComponent:(0,o.forwardRef)((function(e,t){return b("category",e)})),render:function(e){return(0,c.jsx)(m,{fontSize:1.2,children:e.categories.map((function(e){return e.name})).join(",")})}}],n=(0,o.useState)([]),r=(0,y.Z)(n,2),i=r[0],s=r[1],l=(0,o.useState)([]),a=(0,y.Z)(l,2),u=a[0],f=a[1],h=(0,o.useState)(!1),p=(0,y.Z)(h,2),v=p[0],x=p[1];(0,o.useEffect)((function(){H((function(e){f(e)})),g()}),[]);var g=function(){x(!0),Q((function(e){s(e),x(!1)}))},b=function(e,t){if("category"==e){var n=(0,ie.Z)("categories"in t.updatedData?t.updatedData.categories:"categories"in t.rowData?t.rowData.categories:[]),r=n.map((function(e){return e._id}));return u.map((function(e){return(0,c.jsx)(le.Z,{control:(0,c.jsx)(ae.Z,{checked:r.includes(e._id),color:"primary",onChange:function(r){return j(t.onChange,n,e)},name:e.name}),label:e.name})}))}},j=function(e,t,n){t.map((function(e){return e._id})).includes(n._id)?e(t.filter((function(e){return e._id!=n._id}))):e([].concat((0,ie.Z)(t),[n]))},w=function(){var e=(0,re.Z)(se().mark((function e(t){return se().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de()({output:"csv"}).fromString(t);case 2:e.sent.forEach((function(e){X({name:e[0],desc:e[1],price:e[2],categories:[e[4]]},(function(e){return console.log(e)}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,c.jsx)(d,{className:"plates",children:(0,c.jsxs)(d,{className:"container",style:{marginTop:"3rem"},children:[(0,c.jsxs)(d,{style:{marginBottom:"1rem"},className:"",children:[(0,c.jsx)(ce.Z,{style:{backgroundColor:"rgb(238, 238, 238)",borderRadius:"0.3rem",padding:"0.5rem 1rem"},onClick:function(){return e.current.click()},children:"Import"}),(0,c.jsx)("input",{ref:e,style:{display:"none"},className:"hidden",type:"file",accept:"text/csv",onChange:function(e){return function(e){var t=e.target.files[0],n=new FileReader;n.onload=function(e){return w(e.target.result)},n.readAsText(t),console.log(t)}(e)}})]}),(0,c.jsx)(U,{title:"Plates",columns:t,data:i,loading:0==i.length||v,editable:{onRowAdd:function(e){return new Promise((function(t){var n=pe(pe({},e),{},{categories:e.categories.map((function(e){return e._id}))});X(n,(function(e){g(),t()}))}))},onRowUpdate:function(e,t){return new Promise((function(n){Y(t._id,e,(function(){g(),n()}))}))},onRowDelete:function(e){return new Promise((function(t){$(e._id,(function(){g(),t()}))}))}}})]})})},ve=n(7586),xe={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=I()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};xe.domAPI=D(),xe.insertStyleElement=_();P()(ve.Z,xe),ve.Z&&ve.Z.locals&&ve.Z.locals;var ge=n(9955),be={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=I()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};be.domAPI=D(),be.insertStyleElement=_();P()(ge.Z,be),ge.Z&&ge.Z.locals&&ge.Z.locals;var je=n(1429),we={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=I()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};we.domAPI=D(),we.insertStyleElement=_();P()(je.Z,we),je.Z&&je.Z.locals&&je.Z.locals;var Ce=n(4081),Ze={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=I()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};Ze.domAPI=D(),Ze.insertStyleElement=_();P()(Ce.Z,Ze),Ce.Z&&Ce.Z.locals&&Ce.Z.locals;var Se=n(4123),Te={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=I()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};Te.domAPI=D(),Te.insertStyleElement=_();P()(Se.Z,Te),Se.Z&&Se.Z.locals&&Se.Z.locals;var Ne=n(9639),Oe={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=I()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};Oe.domAPI=D(),Oe.insertStyleElement=_();P()(Ne.Z,Oe),Ne.Z&&Ne.Z.locals&&Ne.Z.locals;var Ee=(0,l.Z)({palette:{primary:{main:"#005eff"},secondary:{main:"#ffffff"}},typography:{fontFamily:"Exo",button:{textTransform:"none"}}}),Ae=function(){return(0,c.jsxs)(a.Z,{theme:Ee,children:[(0,c.jsx)(p,{}),(0,c.jsxs)(s.rs,{children:[(0,c.jsx)(s.AW,{exact:!0,path:"/",component:ne}),(0,c.jsx)(s.AW,{path:"/plates",component:ye})]})]})};(0,r.render)((0,c.jsx)(i.VK,{children:(0,c.jsx)(Ae,{})}),document.getElementById("app"))},1151:function(e,t,n){"use strict";var r=n(3645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i},9639:function(e,t,n){"use strict";var r=n(3645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i},4123:function(e,t,n){"use strict";var r=n(3645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i},4081:function(e,t,n){"use strict";var r=n(3645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i},9955:function(e,t,n){"use strict";var r=n(3645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i},1429:function(e,t,n){"use strict";var r=n(3645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i},7586:function(e,t,n){"use strict";var r=n(3645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i},4476:function(e,t,n){"use strict";var r=n(3645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i},3174:function(e,t,n){"use strict";var r=n(3645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i}},function(e){"use strict";e.O(0,[216],(function(){return t=7979,e(e.s=t);var t}));e.O()}]);