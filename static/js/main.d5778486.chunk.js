(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/catclicker.82fff6c6.JPG"},33:function(e,t,a){e.exports=a.p+"static/media/feedreader.ccfa8fa2.JPG"},34:function(e,t,a){e.exports=a.p+"static/media/singaporemap.c31b0721.JPG"},35:function(e,t,a){e.exports=a.p+"static/media/frogger.9f43d2e3.JPG"},36:function(e,t,a){e.exports=a.p+"static/media/memorygame.f1ef2938.JPG"},37:function(e,t,a){e.exports=a.p+"static/media/laptop_frame.8347f35e.png"},38:function(e,t,a){e.exports=a.p+"static/media/ming.54486431.jpg"},41:function(e,t,a){e.exports=a(68)},46:function(e,t,a){},48:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),o=(a(46),a(10)),i=a(11),s=a(13),m=a(12),u=a(14),d=(a(48),a(73)),p=a(72),h=a(31),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.querySelector(".project-nav").addEventListener("click",function(){document.querySelector("#projects").focus()}),document.querySelector(".about-nav").addEventListener("click",function(){document.querySelector("#about-me").focus()})}},{key:"render",value:function(){return r.a.createElement(d.a,{fixed:"top",className:"header-navbar",expand:"md"},r.a.createElement(d.a.Brand,{href:"#",className:"logo"},r.a.createElement("h1",null,"MH")),r.a.createElement("div",{className:"nav d-flex navlink"},r.a.createElement(p.a,{className:"header-nav"},r.a.createElement(h.a,null,r.a.createElement(p.a.Link,{className:"project-nav",href:"#projects","data-aos":"fade-down","data-aos-delay":"1850","data-aos-duration":"1000"},r.a.createElement("h5",null,"Projects"))),r.a.createElement(h.a,null,r.a.createElement(p.a.Link,{className:"blog",href:"https://medium.com/@superming","data-aos":"fade-down","data-aos-delay":"2100","data-aos-duration":"1000"},r.a.createElement("h5",null,"Blog"))),r.a.createElement(h.a,null,r.a.createElement(p.a.Link,{className:"about-nav",href:"#about-me","data-aos":"fade-down","data-aos-delay":"2350","data-aos-duration":"1000"},r.a.createElement("h5",null,"About"))))))}}]),t}(n.Component),v=a(69),g=a(70),w=a(32),E=a.n(w),y=a(33),b=a.n(y),j=a(34),k=a.n(j),x=a(35),N=a.n(x),S=a(36),O=a.n(S),M=a(37),C=a.n(M),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleSelect=function(e){document.querySelector(".project-thumbnail").classList.remove("active-project"),document.querySelector(".project-thumbnail").classList.add("inactive-project"),setTimeout(function(){document.querySelector(".project-thumbnail").classList.remove("inactive-project"),a.setState({key:e},a.changeView)},500)},a.changeView=function(){document.querySelector(".project-thumbnail").classList.add("active-project")},a.forwardArrowSelect=function(){var e=a.state.key;a.state.key<4?(e+=1,a.handleSelect(e)):a.handleSelect(0)},a.backArrowSelect=function(){var e=a.state.key;a.state.key>0?(e-=1,a.handleSelect(e)):a.handleSelect(4)},a.state={projects:[{title:"Singapore Restaurants",href:"https://agile-beyond-13723.herokuapp.com/",src:k.a,tools:["React","JavaScript","Html5","Css3","Facebook"],text:"This application uses React, Facebook Graph API, and Google Maps API to display restaurants in central Singapore."},{title:"Cat Clicker",href:"https://super-ming.github.io/Cat-Clicker/",src:E.a,tools:["JavaScript","Html5","Css3"],text:"Cat clicking application. Click if you dare."},{title:"Feed Reader",href:"https://super-ming.github.io/frontend-nanodegree-feedreader/",tools:["JavaScript","Html5","Css3"],src:b.a,text:"Application that provides a live feed of pages from various websites."},{title:"Frogger Game",href:"https://super-ming.github.io/frontend-nanodegree-arcade-game/",tools:["JavaScript","Html5","Css3"],src:N.a,text:"This is a classic arcade game created with JavaScript, HTML, and CSS."},{title:"Memory Card Game",href:"https://super-ming.github.io/Memory-Card/",src:O.a,tools:["JavaScript","Html5","Css3"],text:"This is a memory game created with JavaScript, HTML, and CSS."}],activeProject:[],key:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.projects,t=this.state.key,a=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",fillRule:"evenodd",clipRule:"evenodd"},r.a.createElement("path",{d:"M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z"})),n=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24",fillRule:"evenodd",clipRule:"evenodd"},r.a.createElement("path",{d:"M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z"}));return r.a.createElement("div",{className:"project-wrapper d-flex justify-content-center","data-aos":"fade-up","data-aos-offset":window.innerWidth<600?200:400,"data-aos-duration":"1000"},r.a.createElement("div",{id:"projects",className:"projects"},r.a.createElement("h3",null,"Projects")),r.a.createElement("div",{className:"jumbo-wrapper"},r.a.createElement(v.a,null,r.a.createElement(g.a,{className:"d-flex justify-content-center mediaGroup"},r.a.createElement("a",{href:e[t].href},r.a.createElement("img",{className:"laptop",alt:"laptop frame",src:C.a}),r.a.createElement("img",{className:"project-thumbnail",alt:e[t].title,src:e[t].src})),r.a.createElement("div",{className:"d-flex justify-content-center nav-arrow"},r.a.createElement("button",{className:"arrow-left",alt:"Back arrow for previous project",onClick:this.backArrowSelect},n),r.a.createElement("button",{className:"arrow-right",alt:"Forward arrow for next project",onClick:this.forwardArrowSelect},a)),r.a.createElement(g.a.Body,{className:"project-text"},r.a.createElement("h4",null,e[t].title),r.a.createElement("p",null,e[t].text))))))}}]),t}(n.Component);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var P=r.a.createElement("title",null,"React icon"),H=r.a.createElement("circle",{cx:12,cy:12,r:2.139}),A=r.a.createElement("path",{d:"M6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z"}),B=r.a.createElement("path",{d:"M5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545z"}),J=r.a.createElement("path",{d:"M18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501z"}),I=r.a.createElement("path",{d:"M12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"}),W=function(e){return r.a.createElement("svg",z({role:"img",viewBox:"0 0 24 24"},e),P,H,A,B,J,I)};a.p;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var G=r.a.createElement("title",null,"JavaScript icon"),T=r.a.createElement("path",{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"}),q=function(e){return r.a.createElement("svg",R({role:"img",viewBox:"0 0 24 24"},e),G,T)};a.p;function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var V=r.a.createElement("title",null,"HTML5 icon"),U=r.a.createElement("path",{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"}),D=function(e){return r.a.createElement("svg",F({role:"img",viewBox:"0 0 24 24"},e),V,U)};a.p;function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Y=r.a.createElement("title",null,"CSS3 icon"),Z=r.a.createElement("path",{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"}),$=function(e){return r.a.createElement("svg",Q({role:"img",viewBox:"0 0 24 24"},e),Y,Z)};a.p;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var K=r.a.createElement("title",null,"jQuery icon"),X=r.a.createElement("path",{d:"M1.534 5.874c-2.123 3.05-1.86 7.017-.237 10.256.037.079.078.154.118.229.023.052.049.1.077.149.013.028.031.057.047.083.026.052.054.102.081.152l.157.265c.029.049.057.097.09.146.055.094.12.187.177.281.026.039.05.078.079.117a6.36 6.36 0 0 0 .31.444c.078.107.156.211.24.315.027.038.057.076.085.114l.221.269c.027.031.054.067.083.099.098.118.202.233.306.349 0 .002.003.004.005.007a3.13 3.13 0 0 0 .424.44c.08.082.16.164.245.244l.101.097c.111.104.222.208.339.308.002 0 .003.002.005.003l.057.05c.102.089.205.178.31.26l.125.105c.085.068.173.133.26.2l.136.104c.093.07.192.139.287.207.035.025.07.05.106.073l.029.023.281.185.12.08c.147.094.293.183.438.271.042.021.084.044.123.068.108.062.22.125.329.183.06.034.122.063.184.094.075.042.153.083.233.125a.324.324 0 0 1 .056.023c.033.015.064.031.096.047.12.06.245.117.375.174.024.01.05.02.076.034.144.063.288.123.437.182.034.01.07.027.105.04.135.051.274.103.411.152l.05.018c.153.052.304.102.459.15.036.01.073.023.111.033.159.048.313.105.473.136 10.26 1.87 13.242-6.169 13.242-6.169-2.505 3.262-6.95 4.122-11.16 3.165-.156-.036-.312-.086-.469-.132a13.522 13.522 0 0 1-.567-.181l-.062-.024c-.136-.046-.267-.097-.4-.148a1.613 1.613 0 0 0-.11-.041c-.147-.059-.29-.12-.432-.183-.031-.01-.057-.024-.088-.036a23.41 23.41 0 0 1-.361-.17c-.037-.016-.07-.033-.106-.052-.094-.044-.188-.094-.28-.142a3.942 3.942 0 0 1-.187-.096c-.113-.06-.226-.125-.339-.187-.034-.024-.073-.044-.112-.066a15.902 15.902 0 0 1-.438-.269 2.104 2.104 0 0 1-.118-.079 6.002 6.002 0 0 1-.312-.206c-.035-.023-.067-.048-.103-.073a9.541 9.541 0 0 1-.294-.212c-.042-.034-.087-.066-.132-.1-.088-.069-.177-.135-.265-.208l-.118-.094a10.58 10.58 0 0 1-.334-.281.258.258 0 0 0-.037-.03l-.347-.316-.1-.094c-.082-.083-.166-.163-.25-.245l-.097-.1a9.07 9.07 0 0 1-.309-.323l-.015-.016c-.106-.116-.209-.234-.313-.354-.027-.031-.052-.064-.08-.097l-.226-.277a21.248 21.248 0 0 1-.34-.448C2.16 11.786 1.315 7.386 3.184 3.777"}),ee=r.a.createElement("path",{d:"M8.121 3.305c-1.539 2.209-1.452 5.163-.254 7.499a9.1 9.1 0 0 0 .677 1.132c.23.33.484.72.792.986.107.122.223.24.344.359l.09.09c.114.11.231.218.35.325l.015.013a9.855 9.855 0 0 0 .414.342c.034.023.063.05.096.073.14.108.281.212.427.315l.015.009c.062.045.128.086.198.13.028.018.06.042.09.06.106.068.21.132.317.197.017.007.032.016.048.023.09.055.188.108.282.157.033.02.065.035.099.054.067.033.133.068.197.102l.032.014c.135.066.273.128.408.19.034.013.063.024.092.038.111.048.224.094.335.137.05.017.097.037.144.052.102.038.209.073.31.108l.14.045c.146.045.294.104.448.129 7.92 1.313 9.754-4.787 9.754-4.787-1.651 2.376-4.846 3.508-8.251 2.624a8.03 8.03 0 0 1-.448-.13c-.048-.013-.09-.028-.136-.042-.104-.036-.211-.071-.312-.109l-.144-.054c-.112-.045-.226-.087-.335-.135-.034-.015-.065-.025-.091-.04-.14-.063-.281-.125-.417-.192l-.206-.107-.119-.06c-.092-.048-.177-.098-.265-.15a.62.62 0 0 1-.062-.034c-.106-.066-.216-.13-.317-.198-.034-.019-.065-.042-.097-.062l-.208-.136c-.144-.1-.285-.208-.427-.312-.032-.029-.063-.053-.094-.079-1.497-1.177-2.678-2.786-3.238-4.608-.59-1.894-.46-4.018.559-5.742"}),te=r.a.createElement("path",{d:"M13.66 1.384c-.908 1.332-.995 2.986-.37 4.455.664 1.56 2.022 2.785 3.604 3.365.065.025.128.046.195.07l.088.027c.092.029.185.063.28.084 4.376.844 5.56-2.247 5.879-2.701-1.042 1.496-2.789 1.855-4.932 1.334a4.844 4.844 0 0 1-.516-.16 6.344 6.344 0 0 1-.617-.254 6.521 6.521 0 0 1-1.08-.66c-1.92-1.454-3.109-4.23-1.857-6.491"}),ae=function(e){return r.a.createElement("svg",_({role:"img",viewBox:"0 0 24 24"},e),K,X,ee,te)},ne=(a.p,a(38)),re=a.n(ne),ce=function(e){return r.a.createElement("div",{id:"about-me",className:"about-me ml-auto mr-auto","data-aos":"fade-down","data-aos-offset":window.innerWidth>1e3?"400":window.innerWidth>600?"300":window.innerWidth<400?"50":"200","data-aos-duration":"1000"},r.a.createElement("img",{src:re.a,alt:"Ming Ho",className:"profile-photo d-flex","data-aos":"fade-up","data-aos-offset":window.innerWidth>1e3?"500":window.innerWidth>600?"300":"100","data-aos-duration":"1000"}),r.a.createElement(g.a,null,r.a.createElement(g.a.Body,{className:"about-me-body"},r.a.createElement("h3",null,"About Me"),r.a.createElement("p",null,"Hi! I'm a web developer from Seattle. I began my programming journey in Jan 2018 and it has been quite a ride! I love learning about new things. You can also ask me anything travel related as I enjoy travelling and new experiences. Take a look at my projects below!"),r.a.createElement("div",{className:"tech-icons d-flex justify-content-center"},r.a.createElement(W,{alt:"React Icon",className:"react-icon"}),r.a.createElement(q,{alt:"JavaScript Icon",className:"js-icon"}),r.a.createElement(D,{alt:"HTML5 Icon",className:"html-icon"}),r.a.createElement($,{alt:"CSS3 Icon",className:"css-icon"}),r.a.createElement(ae,{alt:"jQuery Icon",className:"jquery-icon"})))))},le=a(71);function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var ie=r.a.createElement("title",null,"GitHub icon"),se=r.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}),me=function(e){return r.a.createElement("svg",oe({role:"img",viewBox:"0 0 24 24"},e),ie,se)};a.p;function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var de=r.a.createElement("title",null,"LinkedIn icon"),pe=r.a.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}),he=function(e){return r.a.createElement("svg",ue({role:"img",viewBox:"0 0 24 24"},e),de,pe)},fe=(a.p,r.a.createElement("svg",{alt:"Email",id:"i-mail",viewBox:"0 0 32 32",width:"32",height:"32",fill:"none",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"},r.a.createElement("path",{d:"M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6"}))),ve=function(e){return r.a.createElement(d.a,{className:"d-flex justify-content-center align-items-center"},r.a.createElement(p.a,{className:"social-icons d-flex justify-content-center"},r.a.createElement(le.a,{className:"d-flex justify-content-center row"},r.a.createElement(p.a.Link,{href:"https://github.com/super-ming"},r.a.createElement(me,{alt:"Github"})),r.a.createElement(p.a.Link,{href:"https://www.linkedin.com/in/mingyho"},r.a.createElement(he,{fill:"#0077B5",alt:"LinkedIn"})),r.a.createElement(p.a.Link,{href:"mailto:mingyho@gmail.com"},fe))))},ge=a(40),we=a(39),Ee=a.n(we);a(64);function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var be=r.a.createElement("path",{d:"M99.4 284.9l134 138.1c5.8 6 13.7 9 22.4 9h.4c8.7 0 16.6-3 22.4-9l134-138.1c12.5-12 12.5-31.3 0-43.2-12.5-11.9-32.7-11.9-45.2 0l-79.4 83v-214c0-16.9-14.3-30.6-32-30.6-18 0-32 13.7-32 30.6v214l-79.4-83c-12.5-11.9-32.7-11.9-45.2 0s-12.5 31.2 0 43.2z"}),je=function(e){return r.a.createElement("svg",ye({viewBox:"0 0 512 512"},e),be)};a.p;Ee.a.init();var ke={exit:{opacity:0,y:20},enter:{opacity:1,y:0,delay:function(e){return 70*e.charIndex}}},xe=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"App-header"},r.a.createElement(f,null)),r.a.createElement("section",{className:"d-flex justify-content-center align-items-center intro"},r.a.createElement("h2",{className:"mb-0"},r.a.createElement(ge.a,{initialPose:"exit",pose:"enter",charPoses:ke},"Ming Ho, Front End Web Developer")),r.a.createElement("span",{className:"underline"})),r.a.createElement("main",{className:"main-section ml-auto mr-auto"},r.a.createElement("a",{className:"arrow-wrapper",href:"#about-me"},r.a.createElement(je,{alt:"down arrow for skipping to about me section",className:"arrow-down"})),r.a.createElement(ce,null),r.a.createElement("hr",{className:"line"}),r.a.createElement(L,null)),r.a.createElement("footer",{className:"footer"},r.a.createElement(ve,null)))}}]),t}(n.Component),Ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Se(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(66);l.a.render(r.a.createElement(xe,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Portfolio","/service-worker.js");Ne?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Se(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Se(t,e)})}}()}},[[41,2,1]]]);
//# sourceMappingURL=main.d5778486.chunk.js.map