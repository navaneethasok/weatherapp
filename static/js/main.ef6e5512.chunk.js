(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{52:function(e,t,n){},54:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),s=(n(52),n(31)),o=n.n(s),h=n(34),p=n(25),l=(n(54),n(41)),j=n(90),u=n(93),d=n(95),x=n(96),b=n(6),f=Object(j.a)((function(e){return{root:{width:"40%",marginLeft:"auto",marginRight:"auto","& .MuiInputBase-input":{color:"#ffffff"},"& .MuiButtonBase-root":{color:"#ffffff"}}}})),m=function(e){var t=e.error,n=void 0!==t&&t,a=e.search,r=e.handleTextChange,c=e.handleSubmit,i=f();return Object(b.jsx)("form",{className:i.root,onSubmit:c,children:Object(b.jsxs)(u.a,{container:!0,children:[Object(b.jsx)(u.a,{item:!0,lg:2,sm:!0}),Object(b.jsx)(u.a,{item:!0,lg:!0,sm:!0,xs:12,style:{paddingLeft:"2em"},children:Object(b.jsx)(d.a,Object(l.a)({style:{width:"100%"},label:"City",value:a,onChange:r},n&&{error:n,helperText:"Please Enter a Valid City Name"}))}),Object(b.jsx)(u.a,{item:!0,lg:!0,sm:!0,xs:12,style:{paddingTop:"1rem",paddingLeft:"2.5em"},children:Object(b.jsx)(x.a,{variant:"outlined",type:"submit",children:"Get Weather"})})]})})},g=n(40),O=Object(j.a)((function(e){return{container:{minWidth:e.spacing(20),maxWidth:e.spacing(50),padding:"5px 0px",margin:"50px auto",textAlign:"center",borderRadius:"5%",boxShadow:"0px 3px 8px rgba(0, 0, 0, 0.24)",color:"white","& >*":{padding:"5px 0px"}},icon:{marginLeft:"auto",marginRight:"auto",backgroundColor:" #8368b2  ",borderRadius:"50%",boxShadow:"0px 3px 8px rgba(0, 0, 0, 0.3)",height:"95px",width:"100px"}}})),w=function(e){var t=e.name,n=e.main,a=e.weather,r=O(),c=a[0],i=c.icon,s=c.description,o=n.temp,h=n.feels_like,p=n.temp_min,l=n.temp_max,j=i?"https://openweathermap.org/img/wn/".concat(i,"@2x.png"):"",u=function(){return Object(b.jsx)(g.Img,{src:j})};return Object(b.jsxs)("div",{className:r.container,children:[Object(b.jsxs)("h1",{children:[" ",t," "]}),Object(b.jsxs)("div",{className:r.icon,children:[Object(b.jsx)(u,{})," "]}),Object(b.jsxs)("h1",{children:[Math.floor(o),"\xb0C"]}),Object(b.jsxs)("h4",{children:["Feels like ",Math.floor(h),"\xb0C"]}),Object(b.jsxs)("h2",{children:[Object(b.jsxs)("span",{style:{paddingRight:"80px"},children:[Object(b.jsx)("span",{style:{fontSize:"15px"},children:"Min:"})," ",Math.floor(p),"\xb0C"]}),Object(b.jsxs)("span",{children:[Object(b.jsx)("span",{style:{fontSize:"15px"},children:"Max:"})," ",Math.floor(l),"\xb0C"]})]}),Object(b.jsx)("h2",{children:s&&s[0].toUpperCase()+s.slice(1)})]})},v={main:{temp:"",feels_like:"",temp_min:"",temp_max:""},weather:[{description:"",icon:""}],name:""};var C=function(){var e=Object(a.useState)(v),t=Object(p.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),s=Object(p.a)(i,2),l=s[0],j=s[1],u=Object(a.useState)(""),d=Object(p.a)(u,2),x=d[0],f=d[1],g=Object(a.useState)(!1),O=Object(p.a)(g,2),C=O[0],S=O[1];Object(a.useEffect)((function(){x&&function(){var e=Object(h.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("use effect has run"),e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(x,"&appid=").concat("fa9cdabb16e154ca9fb69c7d9dc9f8e2","&units=metric"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,t.ok?(c(n),S(!1)):S(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[x]);var y=n.name,M=n.main,k=n.weather;return Object(b.jsxs)(r.a.Fragment,{children:[Object(b.jsx)("h1",{style:{fontSize:"50px",color:"white",textAlign:"center"},children:"Weather App"}),Object(b.jsx)(m,{error:C,search:l,handleSubmit:function(e){e.preventDefault(),f((function(e){return l}))},handleTextChange:function(e){j(e.target.value)}}),x&&!C&&Object(b.jsx)(w,{name:y,main:M,weather:k})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),S()}},[[61,1,2]]]);
//# sourceMappingURL=main.ef6e5512.chunk.js.map