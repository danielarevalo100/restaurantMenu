(self.webpackChunkExplorer=self.webpackChunkExplorer||[]).push([[179],{332:function(e,t,n){"use strict";var r=n(935),i=n(727),s=n(294),a=n(977),o=n(939),l=n(238),c=n(893),d=function(e){var t=e.hidden,n=e.backgroundImage,r=e.animation,i=e.animationDelay,s=e.onClick,a=e.onMouseMove,o=e.onWheel,l=e.reference,d=e.id_reference,f=e.onscroll_reference;if(t)return null;var u=Object.assign({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",boxSizing:"border-box",backgroundSize:"cover",backgroundPosition:"bottom"},e.style);return n&&(u.backgroundImage="url("+n+")"),null!=s&&(u.cursor="pointer"),(0,c.jsx)("div",{className:e.className,style:u,onWheel:o,onMouseMove:a,onClick:s,ref:l,id:d,onScroll:f,"data-aos":r,"data-aos-delay":i,children:e.children})};d.defaultProps={hidden:!1};var f=d,u=n(391),h=function(){return window.innerWidth<=600},p=function(e){var t=e.children,n=e.fontSize,r=(e.fontFamily,e.textAlign),i=e.color,s=e.nowrap,a=e.spacing,o=e.onClick,l=e.animation,d=e.animationDelay,f=e.id_reference,u=e.className,p=e.reference,m=e.innerHTML,v=Object.assign({display:"flex",alignItems:"center",overflow:"hidden",fontSize:n*(h()?.8:window.innerWidth<1024?.9:1)+"rem",textAlign:r,color:i,maxWidth:"100%",wordBreak:"break-word"},e.style);return null!=o&&(v.cursor="pointer"),1==s&&(v.whiteSpace="nowrap"),a&&(v.letterSpacing=a+"rem"),(0,c.jsx)("span",{id:f,ref:p,style:v,className:u,onClick:o,"data-aos":l,"data-aos-delay":d,dangerouslySetInnerHTML:m?{__html:"<span>".concat(m,"</span>")}:null,children:t})};p.defaultProps={fontSize:1,textAlign:"left",color:"#3a3e44",uppercase:!1};var m=p,v=n(379),y=n.n(v),g=n(795),C=n.n(g),x=n(695),b=n.n(x),T=n(216),Z=n.n(T),S=n(29),w={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=b()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};w.domAPI=C(),w.insertStyleElement=Z();y()(S.Z,w),S.Z&&S.Z.locals&&S.Z.locals;var j=function(e){var t=e.image,n=e.title,r=e.desc,i=e.price;return(0,c.jsxs)(f,{className:"plate",children:[(0,c.jsx)("img",{src:t}),(0,c.jsxs)(f,{className:"",style:{padding:"0 1rem 1rem 1rem"},children:[(0,c.jsx)(m,{className:"font-title uppercase",fontSize:"2",textAlign:"center",color:"#fff",spacing:"0.2",style:{marginTop:"1rem"},children:n}),(0,c.jsx)(m,{className:"font-title",color:"#999",fontSize:"1.8",textAlign:"center",spacing:"0.2",children:r}),(0,c.jsxs)(m,{className:"font-title-cursive",fontSize:"3",color:"var(--yellow)",children:["$",i]})]})]})},A=window.location.href.includes("localhost")?"http://localhost:8080/api/":"http://fortinporteno.arevaloweb.com/api/",N={},E=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4?arguments[4]:void 0,s={headers:{"Content-Type":"application/json"}};"GET"!=t&&(s.body=JSON.stringify(n),s.method=t),fetch("".concat(A).concat(e),s).then((function(e){return e.json()})).catch((function(e){i&&i(r)})).then((function(e){null==e||e.error?i&&i(r):i&&i(e)}))},k=function(e){E("category","GET",N,"",e)},I=function(e){E("plate","GET",N,"",e)},P=n(476),z={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=b()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};z.domAPI=C(),z.insertStyleElement=Z();y()(P.Z,z),P.Z&&P.Z.locals&&P.Z.locals;var _=function(e){var t=(0,s.useState)(0),n=(0,u.Z)(t,2),r=n[0],i=n[1],a=(0,s.useState)([]),o=(0,u.Z)(a,2),l=o[0],d=o[1],h=(0,s.useState)([]),p=(0,u.Z)(h,2),v=p[0],y=p[1];(0,s.useEffect)((function(){k((function(e){d(e),I((function(e){y(e)}))}))}),[]);return(0,c.jsxs)(f,{className:"home",children:[(0,c.jsxs)(f,{children:[(0,c.jsx)(m,{className:"margin-top font-title-cursive",color:"var(--yellow)",fontSize:"3",children:"El Fortin Porte\xf1o"}),(0,c.jsx)(m,{className:"font-title-bold uppercase",fontSize:"4",spacing:.2,textAlign:"center",color:"white",children:"Nuestro menu especial"})]}),(0,c.jsxs)(f,{className:"full-width margin-top",children:[(0,c.jsx)(f,{className:"row wrap",style:{padding:"0.5rem"},children:l.map((function(e,t){var n=e.name;return(0,c.jsx)(f,{onClick:function(){return i(t)},className:"category ".concat(r==t?"selected":""),children:(0,c.jsx)(m,{className:"font-title-bold uppercase",fontSize:"1.7",spacing:.2,color:"#fff",children:n})})}))}),(0,c.jsx)(f,{style:{marginTop:"1rem"}}),(0,c.jsx)(f,{className:"full-width row wrap plates-container align-start justify-start",children:v.map((function(e){var t=e._id,n=e.name,i=e.desc,s=e.price,a=e.image;return e.categories.map((function(e){return e._id})).includes(l[r]._id)?(0,c.jsx)(j,{image:a,title:n,desc:i,price:s},t):null}))})]})]})},M=n(586),O={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=b()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};O.domAPI=C(),O.insertStyleElement=Z();y()(M.Z,O),M.Z&&M.Z.locals&&M.Z.locals;var W=n(955),D={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=b()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};D.domAPI=C(),D.insertStyleElement=Z();y()(W.Z,D),W.Z&&W.Z.locals&&W.Z.locals;var F=n(429),G={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=b()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};G.domAPI=C(),G.insertStyleElement=Z();y()(F.Z,G),F.Z&&F.Z.locals&&F.Z.locals;var B=n(81),H={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=b()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};H.domAPI=C(),H.insertStyleElement=Z();y()(B.Z,H),B.Z&&B.Z.locals&&B.Z.locals;var L=n(123),J={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=b()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};J.domAPI=C(),J.insertStyleElement=Z();y()(L.Z,J),L.Z&&L.Z.locals&&L.Z.locals;var K=n(639),V={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=b()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};V.domAPI=C(),V.insertStyleElement=Z();y()(K.Z,V),K.Z&&K.Z.locals&&K.Z.locals;var $=(0,o.Z)({palette:{primary:{main:"#005eff"},secondary:{main:"#ffffff"}},typography:{fontFamily:"Exo",button:{textTransform:"none"}}}),q=function(){return(0,c.jsx)(l.Z,{theme:$,children:(0,c.jsx)(a.rs,{children:(0,c.jsx)(_,{})})})};(0,r.render)((0,c.jsx)(i.VK,{children:(0,c.jsx)(q,{})}),document.getElementById("app"))},29:function(e,t,n){"use strict";var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i},639:function(e,t,n){"use strict";var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i},123:function(e,t,n){"use strict";var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i},81:function(e,t,n){"use strict";var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i},955:function(e,t,n){"use strict";var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i},429:function(e,t,n){"use strict";var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i},586:function(e,t,n){"use strict";var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i},476:function(e,t,n){"use strict";var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),t.Z=i}},function(e){"use strict";e.O(0,[216],(function(){return t=332,e(e.s=t);var t}));e.O()}]);