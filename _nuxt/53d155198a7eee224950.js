(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{248:function(t,e,n){"use strict";var o=n(251),r={data:function(){return{isShown:!1,w:0,ph:0}},methods:{tick:function(t){this.isShown||this.w&&t>this.offsetY-.7*this.h&&(this.isShown=!0,this.show())},resize:function(t,e,n){this.isShown||this.ph!==n&&(this.w=t,this.h=e,this.ph=n,this.offsetY=o.a.offset(this.$el).top)}}},h=n(7),component=Object(h.a)(r,void 0,void 0,!1,null,null,null);e.a=component.exports},251:function(t,e,n){"use strict";n(22),n(42),n(253),n(89),n(122),n(41);var o=n(26),r=n(27),h=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,[{key:"shuffle",value:function(t){var e,n,i;for(i=t.length;i;i--)e=Math.floor(Math.random()*i),n=t[i-1],t[i-1]=t[e],t[e]=n;return t}},{key:"getYoutubeId",value:function(t){var e="v";t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}},{key:"getVimeoId",value:function(link){var t=link.split("/");return t[t.length-1]}},{key:"setCookie",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,o=new Date;o.setTime(o.getTime()+3600*Number(n)*1e3),document.cookie=t+"="+e+"; path=/;expires = "+o.toGMTString()}},{key:"validateEmail",value:function(t){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}},{key:"getCookie",value:function(t){for(var e=t+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var o=n[i];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return""}},{key:"checkFileSize",value:function(t){var e=!0;return Math.ceil(100*t.size/1048576)/100>this.maxVideoSize&&(e=!1),e}},{key:"checkFileExtension",value:function(t,e){var n=e.accept.split(","),o=!1,r=t.name.split("."),h="."+r[r.length-1].toLowerCase();return n.forEach(function(t){h===t&&(o=!0)}),o}},{key:"isTouchDevice",value:function(){try{return document.createEvent("TouchEvent"),!0}catch(t){return!1}}},{key:"offset",value:function(element){var t=0,e=0;do{t+=element.offsetTop||0,e+=element.offsetLeft||0,element=element.offsetParent}while(element);return{top:t,left:e}}}]),t}();e.a=new h},285:function(t,e,n){var content=n(399);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("e55abf78",content,!0,{sourceMap:!1})},286:function(t,e,n){var content=n(401);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("014e9506",content,!0,{sourceMap:!1})},287:function(t,e,n){var content=n(403);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("3a285f8b",content,!0,{sourceMap:!1})},288:function(t,e,n){var content=n(406);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("6c0a1f29",content,!0,{sourceMap:!1})},289:function(t,e,n){var content=n(408);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("510bd6e4",content,!0,{sourceMap:!1})},398:function(t,e,n){"use strict";var o=n(285);n.n(o).a},399:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".logo[data-v-22473486]{height:100vh;display:flex;align-items:center;justify-content:center;background:#000}.logo[data-v-22473486],div[data-v-22473486]{width:100%;position:relative}div[data-v-22473486]{top:0;left:0;height:100%;z-index:2;pointer-events:none}.listCanva[data-v-22473486],div.events[data-v-22473486]{pointer-events:auto}.listCanva[data-v-22473486]{height:100vh;width:100vw;position:fixed;top:0;right:0;bottom:0;left:0;z-index:-10}.listContainer[data-v-22473486]{position:relative;display:inline;top:7vh;z-index:2;pointer-events:none;scroll-behavior:smooth;transition:all 1.8s cubic-bezier(.76,.16,.24,.86)}.listRoot[data-v-22473486]{display:flex;max-width:40rem;margin:0 auto;z-index:4;list-style-type:none;justify-content:center;pointer-events:auto}.listRoot p[data-v-22473486]{font-size:2.5rem;line-height:8rem;font-weight:400;letter-spacing:calc((100vh - 300px)/20);max-width:50rem;margin:0 auto;writing-mode:vertical-rl}.listRoot p .first[data-v-22473486]{font-family:YRDZST,sans}.listRoot p .second[data-v-22473486]{font-family:Fujimaru,sans}.listItem[data-v-22473486]{width:30%;align-self:flex-start;display:inline-block}.listItem img[data-v-22473486]{display:none}",""])},400:function(t,e,n){"use strict";var o=n(286);n.n(o).a},401:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".device .portrait[data-v-8cc4b340]{display:none;height:100vh;align-items:center;flex-direction:column}.portrait .legend[data-v-8cc4b340]{text-align:center;font-size:14px;margin-top:35px;line-height:2;transition:opacity .5s cubic-bezier(.455,.03,.515,.955)}.portrait.opacity .legend[data-v-8cc4b340]{opacity:.5}.portrait.opacity:hover .legend[data-v-8cc4b340]{opacity:1}",""])},402:function(t,e,n){"use strict";var o=n(287);n.n(o).a},403:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".about .strike{text-decoration:line-through}.about .hand{animation-name:hand;animation-duration:4s;animation-iteration-count:infinite;display:inline-block}.about .large{font-family:Exo\\ 2,sans}.about h2{font-family:Carter One,sans}@keyframes hand{0%{transform:rotate(10deg)}2%{transform:rotate(10deg)}6%{transform:rotate(-10deg)}10%{transform:rotate(10deg)}14%{transform:rotate(-10deg)}16%{transform:rotate(0deg)}}",""])},404:function(t,e,n){t.exports=n.p+"img/8a73ae1.png"},405:function(t,e,n){"use strict";var o=n(288);n.n(o).a},406:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"p[data-v-501f50bd]:last-child{margin-bottom:0}a[data-v-501f50bd]{display:inline-block;border-bottom:1px solid #fff;line-height:1}h3[data-v-501f50bd]{font-family:Carter One,sans}.inline-image[data-v-501f50bd]{width:25px;display:inline;vertical-align:middle}.device br[data-v-501f50bd]{display:none}",""])},407:function(t,e,n){"use strict";var o=n(289);n.n(o).a},408:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".index[data-v-04609018]{background:#000;width:100%;min-height:100vh;padding-bottom:10vh}.about[data-v-04609018]{margin-bottom:10vh}.mobile .about[data-v-04609018]{margin-top:1vh}",""])},517:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(12),h=(n(396),n(90),n(22),n(247)),c=n(26),l=n(27),d=n(18),v=n(397),f=n(515),m=function(){function t(e,n,o,r,h){Object(c.a)(this,t),this.stage=e,this.isDevice=o,this.isPhone=n,this.stage.name="index",this.listRoot=r,this.itemRoot=h,this.strength=.5,this.isLoaded=!1,this.uniforms={uTexture:{value:null},uOffset:{value:new v.g(0,0)},uAlpha:{value:0}},this.vs="\n      uniform vec2 uOffset;\n      varying vec2 vUv;\n\n      #define M_PI 3.1415926535897932384626433832795\n\n      vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {\n        position.x = position.x + (sin(uv.y * M_PI) * offset.x);\n        position.y = position.y + (sin(uv.x * M_PI) * offset.y);\n        return position;\n      }\n\n      void main() {\n        vUv = uv;\n        vec3 newPosition = deformationCurve(position, uv, uOffset);\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\n      }\n    ",this.fs="\n      uniform sampler2D uTexture;\n      uniform float uAlpha;\n      uniform vec2 uOffset;\n\n      varying vec2 vUv;\n\n      vec3 rgbShift(sampler2D texture, vec2 uv, vec2 offset) {\n        float r = texture2D(uTexture,vUv + uOffset).r;\n        vec2 gb = texture2D(uTexture,vUv).gb;\n        return vec3(r,gb);\n      }\n\n      void main() {\n        vec3 color = rgbShift(uTexture,vUv,uOffset);\n        gl_FragColor = vec4(color,uAlpha);\n      }\n    ",this.init()}return Object(l.a)(t,[{key:"init",value:function(){var t=this;this._handleOrientation=this.handleOrientation.bind(this),this.width=document.documentElement.clientWidth,this.height=document.documentElement.clientHeight,this.scene=new v.d,this.camera=new v.c(40,this.width/this.height,.1,100),this.camera.position.set(0,0,3),this.position=new v.h(0,0,0),this.scale=new v.h(1,1,1),this.speed=0,this.mouse={x:0,y:0},this.renderer=new v.i({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(0,0),this.renderer.setSize(this.width,this.height),this.stage.appendChild(this.renderer.domElement),this.planeHeight=this.visibleHeightAtZDepth(0,this.camera),this.planeWidth=this.visibleWidthAtZDepth(0,this.camera),this.listItems=this.getListItems({selector:this.listRoot}),this.addPlane({items:this.listItems}).then(function(){t.isLoaded=!0}),this.listItems?(this.createEventsListeners({items:this.listItems}),this.mesh=this.createMesh(),this.scene.add(this.mesh),"undefined"!=typeof window&&(window.addEventListener("mousemove",this.onMouseMove.bind(this)),window.addEventListener("resize",this.onWindowResize.bind(this),!1))):console.warn("Could not find any listItems using the supplied root props. Please make sure they are correct.")}},{key:"visibleHeightAtZDepth",value:function(t,e){var n=e.position.z;t<n?t-=n:t+=n;var o=e.fov*Math.PI/180;return 2*Math.tan(o/2)*Math.abs(t)}},{key:"visibleWidthAtZDepth",value:function(t,e){return this.visibleHeightAtZDepth(t,e)*e.aspect}},{key:"getListItems",value:function(t){var e=t.selector;return this.listWrapper=document.querySelector(e),(this.listWrapper?Object(h.a)(this.listWrapper.querySelectorAll(this.itemRoot)):[]).map(function(t,e){return{element:t,img:t.querySelector("img")||null,index:e}})}},{key:"getGeometry",value:function(){var t={},e=t.radius,n=void 0===e?.5:e,o=t.segments,r=void 0===o?64:o;return new v.a(n,r)}},{key:"loadTexture",value:function(t,e,n){return new Promise(function(o,r){e?t.load(e,function(t){o({texture:t,index:n})},void 0,function(t){console.error("An error happened.",t),r(t)}):o({texture:null,index:n})})}},{key:"createMesh",value:function(){return this.uniforms={uTexture:{value:null},texture:{type:"t",value:this.texture},uOffset:{value:new v.g(0,0)},uAlpha:{value:0}},this.geometry=this.getGeometry(),new v.b(this.geometry,new v.e({uniforms:this.uniforms,vertexShader:this.vs,fragmentShader:this.fs}))}},{key:"addPlane",value:function(t){var e=this,n=t.items,o=[],r=new v.f;return n.forEach(function(t,n){o.push(e.loadTexture(r,t.img?t.img.src:null,n))}),new Promise(function(t,e){Promise.all(o).then(function(e){e.forEach(function(t,e){n[e].texture=t.texture}),t()})})}},{key:"_onMouseLeave",value:function(t){this.isMouseOver=!1,this.onMouseLeave(t)}},{key:"_onMouseMove",value:function(t){this.mouse.x=t.clientX/this.width*2-1,this.mouse.y=-t.clientY/this.height*2+1,this.onMouseMove(t)}},{key:"_onMouseOver",value:function(t,e){this.onMouseOver(t,e)}},{key:"onMouseLeave",value:function(t){f.b.to(this.uniforms.uAlpha,.5,{value:0,ease:f.a.easeOut}),this.canvahide()}},{key:"onMouseMove",value:function(t){var e=(this.mouse.x+1)*(2*Math.tan(this.camera.fov*Math.PI/180/2)*this.camera.position.z*(this.width/this.height))/2+-2*Math.tan(this.camera.fov*Math.PI/180/2)*this.camera.position.z*(this.width/this.height)/2,n=(this.mouse.y+1)*(2*Math.tan(this.camera.fov*Math.PI/180/2)*this.camera.position.z)/2+-2*Math.tan(this.camera.fov*Math.PI/180/2)*this.camera.position.z/2;this.position=new v.h(e,n,0),f.b.to(this.mesh.position,1,{x:e,y:n,ease:f.a.easeOut,onUpdate:this.onPositionUpdate.bind(this)})}},{key:"onMouseOver",value:function(t,e){this.isLoaded&&(this.onMouseEnter(),this.currentItem&&this.currentItem.index===t||this.onTargetChange(t))}},{key:"onMouseEnter",value:function(){this.currentItem&&this.isMouseOver||(this.isMouseOver=!0,this.canvashow(),f.b.to(this.uniforms.uAlpha,.5,{value:1,ease:f.a.easeOut}))}},{key:"onPositionUpdate",value:function(){var t=this.mesh.position.clone().sub(this.position).multiplyScalar(-this.strength);this.uniforms.uOffset.value=t}},{key:"onTargetChange",value:function(t){if(this.currentItem=this.listItems[t],this.currentItem.texture){this.uniforms.uTexture.value=this.currentItem.texture;var e=this.currentItem.img.naturalWidth/this.currentItem.img.naturalHeight;this.scale=new v.h(e,1,1),this.mesh.scale.copy(this.scale)}}},{key:"createEventsListeners",value:function(t){var e=this;t.items.forEach(function(t,n){t.element.addEventListener("mouseover",e._onMouseOver.bind(e,n),!1)}),this.listWrapper.addEventListener("mousemove",this._onMouseMove.bind(this),!1),this.listWrapper.addEventListener("mouseleave",this._onMouseLeave.bind(this),!1)}},{key:"onWindowResize",value:function(){"undefined"!=typeof window&&(this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height),this.isPhone||location.reload())}},{key:"animate",value:function(){this.renderer&&this.renderer.render(this.scene,this.camera),this.animationFrameId=requestAnimationFrame(this.animate.bind(this))}},{key:"handleOrientation",value:function(t){var e=t.beta-35,n=t.gamma;this.orientationX=n/180,this.orientationY=e/180}},{key:"canvashow",value:function(){Object(d.a)({targets:this.stage,opacity:[0,1],alpha:1,easing:"easeOutQuint",duration:250})}},{key:"canvahide",value:function(){Object(d.a)({targets:this.stage,opacity:[1,0],alpha:0,easing:"easeOutQuint",duration:250})}},{key:"show",value:function(){var t=this;this.isDevice&&window.addEventListener("deviceorientation",this._handleOrientation,{passive:!0}),Object(d.a)({targets:this.renderer.domElement,opacity:[0,1],alpha:1,easing:"easeOutQuad",duration:500,begin:function(){t.stage.style.display="block"},update:function(){}})}},{key:"hide",value:function(){var t=this;this.isDevice&&window.removeEventListener("deviceorientation",this._handleOrientation),Object(d.a)({targets:this.renderer.domElement,opacity:[1,0],alpha:0,easing:"easeOutQuad",duration:800,complete:function(){t.stage.style.display="none"}})}},{key:"destroy",value:function(){this.stage.innerHTML=""}}]),t}(),y=n(14),x=n(6),w={data:function(){return{w:0}},computed:Object(o.a)({},Object(r.d)(["index","path"])),methods:{setThreeJS:function(){this.indexSprite=new m(this.$refs.threejsContainer,this.isPhone,this.isDevice,".listRoot",".listItem"),this.indexSprite.animate()},onMouseEnterWrapper:function(t){this.isEventInsideListContainer(t)||this.onMouseEnter()},onMouseLeaveWrapper:function(t){this.isEventInsideListContainer(t)||this.onMouseLeave()},onMouseClickWrapper:function(t){this.isEventInsideListContainer(t)||this.onMouseClick()},isEventInsideListContainer:function(t){var e=this.$refs.listRoot;return e&&e.contains(t.target)},onMouseEnter:function(){y.a.emit("LOGO:OVER")},onMouseLeave:function(){y.a.emit("LOGO:OUT")},onMouseClick:function(){x.a.scrollTo(window.innerHeight-120)},resize:function(t,e){this.w=t}},mounted:function(){this.setThreeJS()}},M=(n(398),n(7)),O=Object(M.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo",on:{mouseover:t.onMouseEnterWrapper,mouseout:t.onMouseLeaveWrapper,click:t.onMouseClickWrapper}},[n("div",{staticClass:"listContainer"},[n("ul",{ref:"listRoot",staticClass:"listRoot"},t._l(t.index,function(e,i){return n("li",{key:"index-"+i,ref:"listItem",refInFor:!0,staticClass:"listItem"},[n("img",{attrs:{src:""+t.path+e.img,alt:e.text2.replace("<br>","")}}),t._v(" "),n("p",[n("span",{staticClass:"first",domProps:{innerHTML:t._s(e.text1)}}),t._v(" "),n("span",{staticClass:"second",domProps:{innerHTML:t._s(e.text2)}})])])}),0)]),t._v(" "),n("div",{ref:"threejsContainer",staticClass:"listCanva"})])},[],!1,null,"22473486",null).exports,k=n(248),_={data:function(){return{legendOpacity:!1,w:0}},mixins:[k.a],computed:Object(o.a)({},Object(r.d)(["about","path"])),methods:{show:function(){Object(d.a)({targets:this.anime_array,duration:500,opacity:1,easing:"easeOutQuad"})}},mounted:function(){var t=this;this.legendOpacity=!0,this.anime_array=[this.$el],setTimeout(function(){var image=t.$el.querySelector("img");image.src=image.dataset.src},400),d.a.set(this.anime_array,{opacity:0})}},C=(n(400),Object(M.a)(_,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"portrait",class:{opacity:this.legendOpacity}},[e("img",{attrs:{src:"","data-src":""+this.path+this.about.img,alt:"kiran kumar m"}})])},[],!1,null,"8cc4b340",null).exports),E={computed:Object(o.a)({},Object(r.d)(["about"])),mixins:[k.a],methods:{show:function(){Object(d.a)({targets:this.anime_array,translateY:0,scaleY:1,duration:500,opacity:1,easing:"easeOutQuad",delay:d.a.stagger(100)})}},mounted:function(){this.anime_array=[this.$el.querySelector("h2")].concat(Object(h.a)([].slice.call(this.$el.querySelectorAll("p")))),d.a.set(this.anime_array,{translateY:100,opacity:0})}},L=(n(402),Object(M.a)(E,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"about"},[n("h2",{staticClass:"title",domProps:{innerHTML:t._s(t.about.title)}}),t._v(" "),t._l(t.about.textLarge,function(text,i){return n("p",{key:"textLarge-"+i,staticClass:"large",domProps:{innerHTML:t._s(text)}})}),t._v(" "),t._l(t.about.text,function(text,i){return n("p",{key:"text-"+i,domProps:{innerHTML:t._s(text)}})})],2)},[],!1,null,null,null).exports),I=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"credits"},[o("h3",{staticClass:"title"},[t._v("Kiran MK.")]),t._v(" "),o("p",[t._v("Copyright © 2024. "),o("br"),t._v("All rights reserved.")]),t._v(" "),o("p",[t._v("This website is developed with NuxtJs.")]),t._v(" "),o("p",[t._v("\n    ThreeJS & WebGL rendered PixiJS animations "),o("br"),t._v("overlayed with animeJS.\n  ")]),t._v(" "),o("p",[t._v("\n    Made with 💖 in\n    "),o("span",[o("img",{staticClass:"inline-image",attrs:{title:"India",loading:"lazy",src:n(404),alt:"india"}})]),t._v(".\n  ")])])}],j={computed:Object(o.a)({},Object(r.d)(["contact"])),mixins:[k.a],methods:{show:function(){Object(d.a)({targets:this.anime_array,translateY:0,scaleY:1,duration:500,opacity:1,easing:"easeOutQuad",delay:d.a.stagger(100)})}},mounted:function(){this.anime_array=[this.$el.querySelector("h3")].concat(Object(h.a)([].slice.call(this.$el.querySelectorAll("p")))),d.a.set(this.anime_array,{translateY:100,opacity:0})}},P=(n(405),{components:{vLogo:O,vCredits:Object(M.a)(j,function(){this.$createElement;this._self._c;return this._m(0)},I,!1,null,"501f50bd",null).exports,vAbout:L,vPortrait:C},methods:{tick:function(t){this.$refs.portrait.tick(t),this.$refs.about.tick(t),this.$refs.credits.tick(t)},resize:function(t,e,n){this.$refs.portrait.resize(t,e,n),this.$refs.about.resize(t,e,n),this.$refs.credits.resize(t,e,n),this.$refs.logo.resize(t,e)}},mounted:function(){}}),z=(n(407),Object(M.a)(P,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index"},[e("v-logo",{ref:"logo"}),this._v(" "),e("div",{staticClass:"u-container"},[e("div",{staticClass:"u-d-f"},[e("v-portrait",{ref:"portrait"}),this._v(" "),e("div",[e("v-about",{ref:"about"}),this._v(" "),e("v-credits",{ref:"credits"})],1)],1)])],1)},[],!1,null,"04609018",null));e.default=z.exports}}]);