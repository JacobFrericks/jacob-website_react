(this["webpackJsonpjacob-website_react"]=this["webpackJsonpjacob-website_react"]||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/profile_pic.b2d0d1e2.jpg"},41:function(e,t,a){e.exports=a(93)},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},58:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},8:function(e,t,a){e.exports=a.p+"static/media/aca_eagles.b8dca292.png"},81:function(e,t,a){},82:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(11),r=a.n(l),o=(a(46),a(2)),s=a(3),i=a(5),m=a(4),u=(a(47),a(48),a(24)),d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"handleClick",value:function(e){u.scroller.scrollTo("myScrollToElement",{duration:1e3,smooth:!0})}},{key:"render",value:function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"text"},"Hello, I'm ",c.a.createElement("span",null,"Jacob Frericks"),".",c.a.createElement("br",null),c.a.createElement("br",null),"Cloud Security Engineer by day",c.a.createElement("br",null),c.a.createElement("span",null,"Software Engineer by night"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("button",{onClick:this.handleClick},"View my work")))}}]),a}(n.Component),p=(a(58),a(6)),E=function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"hexContainer"},c.a.createElement("div",{className:"hexagon"},c.a.createElement(p.a,{icon:e.icon,className:"fontawesome"}))),c.a.createElement("div",{className:"textContainer"},c.a.createElement("div",{className:"label"},e.title),e.text))},h=(a(62),a(37)),v=a.n(h),b=a(10),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"aboutme"},c.a.createElement("div",{className:"title"},"About"),c.a.createElement("div",{className:"aboutGrid"},c.a.createElement("div",{className:"gridItem"},c.a.createElement(E,{title:"Secure",text:"Keep your cloud environment secure. My highest priority.",icon:b.d})),c.a.createElement("div",{className:"gridItem"},c.a.createElement(E,{title:"Developers",text:"We're on the same team. I don't slow them down from delivery.",icon:b.c})),c.a.createElement("div",{className:"gridItem"},c.a.createElement(E,{title:"DevSecOps",text:"Automate as much as humanly possible.",icon:b.e})),c.a.createElement("div",{className:"gridItem"},c.a.createElement(E,{title:"Speed",text:"Ship as many things as quickly and securely as possible",icon:b.f}))),c.a.createElement("div",{className:"profilePicWrapper"},c.a.createElement("img",{src:v.a,className:"me",alt:"My profile"})),c.a.createElement("div",{className:"profile"},c.a.createElement("div",{className:"profileTitle"}," Who's this guy?"),c.a.createElement("div",{className:"profileBody"},"I'm a Cloud Security Engineer for Hy-Vee in Des Moines, IA.",c.a.createElement("br",null),"I focus on cloud security, but have a passion for programming and developers.",c.a.createElement("br",null),"Let me help you make something special.")))}}]),a}(n.Component),g=a(7),N=(a(63),a(64),a(38)),j=a.n(N),y=a(39),w=(a(79),{position:"absolute",zIndex:2,width:"7vh",height:"7vh",cursor:"pointer",bottom:0,backgroundColor:"rgba(192,192,192,0.25)",backgroundRepeat:"no-repeat",border:"none",overflow:"hidden",outline:"none",color:"white"}),O=function(e){var t=e.isOpen,a=e.askToClose,n=e.onRequestClose,l=e.images,r=e.title,o=e.subtitle,s=e.description,i=e.link;return c.a.createElement(j.a,{id:"test",contentLabel:"modalA",closeTimeoutMS:150,isOpen:t,onRequestClose:n},c.a.createElement(y.Carousel,{showIndicators:!1,showThumbs:!1,showStatus:!1,renderArrowPrev:function(e,t,a){return t&&c.a.createElement("button",{type:"button",onClick:e,title:a,style:Object(g.a)(Object(g.a)({},w),{},{left:0})},c.a.createElement(p.a,{icon:b.a,className:"fontawesome"}))},renderArrowNext:function(e,t,a){return t&&c.a.createElement("button",{type:"button",onClick:e,title:a,style:Object(g.a)(Object(g.a)({},w),{},{right:0})},c.a.createElement(p.a,{icon:b.b,className:"fontawesome"}))}},l.map((function(e){return c.a.createElement("div",null,e)}))),c.a.createElement("div",{className:"modalTitle"},r),c.a.createElement("div",{className:"modalSubtitle"},o),c.a.createElement("hr",{className:"modalTitleSeparator"}),c.a.createElement("div",{className:"modalDescription"},s),c.a.createElement("button",{className:"modalViewAppButton"},c.a.createElement("a",{href:i},"View App")),c.a.createElement("button",{className:"modalCloseButton",onClick:a},"X"))},k=a(8),C=a.n(k),A=a(24),M=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).toggleModal=function(e){return function(t){t.preventDefault(),n.state.currentModal?n.handleModalCloseRequest():n.setState(Object(g.a)(Object(g.a)({},n.state),{},{currentModal:e}))}},n.handleModalCloseRequest=function(){n.setState(Object(g.a)(Object(g.a)({},n.state),{},{currentModal:""}))},n.state={currentModal:"",aca_hover:0},n}return Object(s.a)(a,[{key:"onMouseover",value:function(e){this.setState({aca_hover:1})}},{key:"onMouseout",value:function(e){this.setState({aca_hover:0})}},{key:"render",value:function(){var e=this.state,t=e.currentModal,a=e.aca_hover,n=A.Element;return c.a.createElement("section",{className:"projects",id:"portfolio"},c.a.createElement(n,{name:"myScrollToElement"}),c.a.createElement("div",{className:"title"},"Projects"),c.a.createElement("div",{className:"projectGrid"},c.a.createElement("div",null,a?c.a.createElement("div",{className:"projectInfo",onMouseEnter:this.onMouseover.bind(this),onMouseLeave:this.onMouseout.bind(this)},c.a.createElement("div",{className:"projectTitle"},"ACA Eagles App"),c.a.createElement("div",{className:"projectLanguage"},"Flutter"),c.a.createElement("button",{className:"projectButton",onClick:this.toggleModal("aca_modal").bind(this)},"LEARN MORE")):c.a.createElement("img",{className:"project",src:C.a,alt:"ACA Eagles",onMouseEnter:this.onMouseover.bind(this),onMouseLeave:this.onMouseout.bind(this)}),c.a.createElement(O,{isOpen:"aca_modal"===t,onRequestClose:this.handleModalCloseRequest,askToClose:this.toggleModal("aca_modal"),images:[c.a.createElement("img",{className:"project",src:C.a,alt:"ACA Eagles"}),c.a.createElement("img",{className:"project",src:C.a,alt:"ACA Eagles"}),c.a.createElement("img",{className:"project",src:C.a,alt:"ACA Eagles"}),c.a.createElement("img",{className:"project",src:C.a,alt:"ACA Eagles"})],title:"ACA Eagles",subtitle:"A private school's mobile app",description:"This is an application (Android/iOS) for a local private school. It gives users direct access to the most recent news, announcements, events, and general information about the school. It also allows for weather push notifications.",link:"https://apps.apple.com/us/app/aca-eagles/id1399920289"})),c.a.createElement("div",null,c.a.createElement("img",{className:"project",src:C.a,alt:"ACA Eagles"}),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("img",{className:"project",src:C.a,alt:"ACA Eagles"}),c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("img",{className:"project",src:C.a,alt:"ACA Eagles"}),c.a.createElement("br",null))))}}]),a}(n.Component),I=a(21),S=a.n(I),x=a(40),T=a(22),B=(a(81),function(){function e(t){Object(o.a)(this,e),this.id=void 0,this.coverImage=void 0,this.title=void 0,this.date=void 0,this.description=void 0,this.id=t.id,this.coverImage=t.cover_image,this.title=t.title,this.date=this.convertDate(t.published_timestamp),this.description=t.description}return Object(s.a)(e,[{key:"convertDate",value:function(e){var t=new Date(e);return["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+" "+String(t.getDate()).padStart(2,"0")+", "+t.getFullYear()}}]),e}()),D=(a(82),function(e){var t=e.blogPost;return c.a.createElement("div",null,c.a.createElement("img",{src:t.coverImage,alt:"Blog post cover",style:{width:"100%",objectFit:"contain"}}),c.a.createElement("div",{className:"blogTitle"},t.title),c.a.createElement("div",{className:"blogDate"},t.date),c.a.createElement("div",{className:"blogDescription"},t.description))}),_=a(83),q=function(){var e=Object(x.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://dev.to/api/articles",e.prev=1,e.abrupt("return",_.get("https://dev.to/api/articles").query({username:"jacobfrericks"}).then((function(e){return e.body})));case 5:e.prev=5,e.t0=e.catch(1),console.log("Exception thrown when getting blog posts",e.t0);case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(n.useState)([]),t=Object(T.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!0),o=Object(T.a)(r,2),s=o[0],i=o[1];return Object(n.useEffect)((function(){q().then((function(e){l(e),i(!1)}))}),[]),c.a.createElement("div",null,c.a.createElement("div",{className:"title"},"Blog"),s?c.a.createElement("h1",null,"loading posts..."):c.a.createElement("div",{className:"blogGrid"},a.slice(0,4).map((function(e){var t=new B(e);return c.a.createElement(D,{classNamekey:t.id,blogPost:t,key:t.id})}))),c.a.createElement("div",{className:"submitButton"},c.a.createElement("a",{className:"moreBlogsButton",href:"https://dev.to/jacobfrericks/"},"MORE")))},J=(a(90),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"contactme"},c.a.createElement("div",{className:"downTriangle"}),c.a.createElement("div",{className:"contactTitle"},"CONTACT"),c.a.createElement("div",{className:"question"},"Have a question or want to work together?"),c.a.createElement("form",{className:"form"},c.a.createElement("input",{className:"formInput",placeholder:"Name",type:"text",name:"name"}),c.a.createElement("input",{className:"formInput",placeholder:"Enter email",name:"email"}),c.a.createElement("textarea",{className:"formInput",placeholder:"Your Message",name:"message"}),c.a.createElement("div",{className:"submitButton"},c.a.createElement("input",{className:"contactButton",type:"submit",value:"SUBMIT"}))))}}]),a}(n.Component)),F=(a(91),a(9)),L=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("footer",null,c.a.createElement("div",{className:"icon-wrap flex row"},c.a.createElement("a",{href:"https://www.linkedin.com/in/jacobfrericks/"},c.a.createElement("div",{className:"flex icon",id:"icon-2"},c.a.createElement(p.a,{className:"socialIcon",icon:F.c}))),c.a.createElement("a",{href:"https://www.facebook.com/the.jacob.frericks"},c.a.createElement("div",{className:"flex icon",id:"icon-3"},c.a.createElement(p.a,{className:"socialIcon",icon:F.a}))),c.a.createElement("a",{href:"https://github.com/JacobFrericks/"},c.a.createElement("div",{className:"flex icon",id:"icon-4"},c.a.createElement(p.a,{className:"socialIcon",icon:F.b}))),c.a.createElement("a",{href:"https://twitter.com/JacTheDev"},c.a.createElement("div",{className:"flex icon",id:"icon-5"},c.a.createElement(p.a,{className:"socialIcon",icon:F.d})))),c.a.createElement("div",{className:"info-box"},c.a.createElement("div",{className:"footnote"},"Jacob Frericks ",c.a.createElement("span",{className:"highlight"},"\xa9",(new Date).getFullYear())))))}}]),a}(n.Component),P=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement(f,null),c.a.createElement(M,null),c.a.createElement(R,null),c.a.createElement(J,null),c.a.createElement(L,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(92);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.30c2eaf9.chunk.js.map