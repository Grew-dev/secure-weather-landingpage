(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/i2w":function(e,t,a){},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=N([].concat(t.fluid))),t.fixed&&(t.fixed=N([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),a=f(t);return h[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,b=E&&window.IntersectionObserver,y=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function N(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+c+s+l+a+r+t+n+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=c.default.createElement(I,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?c.default.createElement("picture",null,i(r),l):l})),I=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,m=e.draggable,f=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,o.default)({"aria-hidden":f,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:d,ref:t,loading:u,draggable:m,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));I.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:E}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=f(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,h=e.fluid,g=e.fixed,v=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,y=e.itemProp,N=e.loading,L=e.draggable,O=h||g;if(!O)return null;var z=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:z?1:0,transition:C?"opacity "+E+"ms":"none"},l),W="boolean"==typeof v?"lightgray":v,H={transitionDelay:E+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&H,l,m),j={title:t,alt:this.state.isVisible?"":a,style:T,className:f,itemProp:y},P=this.state.isHydrated?p(O):O[0];if(h)return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},c.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),W&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:W,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&H)}),P.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:j,imageVariants:O,generateSources:x}),P.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:j,imageVariants:O,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,w(O),c.default.createElement(I,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:N},P,{imageVariants:O}))}}));if(g){var q=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete q.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},W&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:W,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},C&&H)}),P.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:j,imageVariants:O,generateSources:x}),P.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:j,imageVariants:O,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,w(O),c.default.createElement(I,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:N},P,{imageVariants:O}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),V=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function W(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}z.propTypes={resolutions:C,sizes:V,fixed:W(d.default.oneOfType([C,d.default.arrayOf(C)])),fluid:W(d.default.oneOfType([V,d.default.arrayOf(V)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var H=z;t.default=H},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("q1tI"),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=r.createContext&&r.createContext(i),s=function(){return(s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(a[r[i]]=e[r[i]])}return a};function o(e){return function(t){return r.createElement(c,s({attr:s({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.createElement(t.tag,s({key:a},t.attr),e(t.child))}))}(e.child))}}function c(e){var t=function(t){var a,i=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var n=e.attr,o=e.title,c=l(e,["attr","title"]);return r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:a,style:s({color:e.color||t.color},t.style,e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==n?r.createElement(n.Consumer,null,(function(e){return t(e)})):t(i)}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("9eSz"),l=a.n(s),o=a("ma3e"),c=a("Tgqd"),d=(a("/i2w"),function(){Object(n.b)("3504214825");return i.a.createElement("footer",{className:"footer footer-background"},i.a.createElement("div",{className:"content has-text-centered"},i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column"},i.a.createElement("div",null,i.a.createElement("p",{className:"footer-heading"},"Created by:"),i.a.createElement("div",{className:"creators"},i.a.createElement("a",{href:"https://twitter.com/ihmissuti"},"@ihmissuti"),i.a.createElement("a",{href:"https://twitter.com/aleksimmonen"},"@aleksimmonen"),i.a.createElement("a",{href:"https://twitter.com/JMeriluoto"},"@JMeriluoto")))),i.a.createElement("div",{className:"column"},i.a.createElement("p",{className:"footer-heading"},"Contact"),i.a.createElement("div",{className:"grew "},i.a.createElement("a",{style:{color:"white"},href:"https://grew.dev",target:"_blank"},"Grew"),i.a.createElement(c.a,{size:14,style:{marginBottom:"5px",marginLeft:"2px"}})),i.a.createElement("div",{className:"social-icons"},i.a.createElement("a",{href:"https://www.linkedin.com/company/global-reaction-company",style:{marginRight:"10px"}},i.a.createElement(o.a,{className:"icon"})),i.a.createElement("a",{href:"https://twitter.com/Grewdev"},i.a.createElement(o.b,{className:"icon"})))))))}),u=(a("WF7/"),function(e){var t=e.children;return i.a.createElement("div",{className:"general-background"},t,i.a.createElement(d,null))}),m=function(){var e=Object(n.b)("937256686");return i.a.createElement("div",{className:"movetocenter"},i.a.createElement(l.a,{className:"image ",style:{height:"auto",width:"450px",marginLeft:"5px",marginRight:"5px"},fluid:e.fluid.childImageSharp.fluid}))},f=a("qtta"),p=function(){return i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"columns columns-flex "},i.a.createElement("div",{className:"column maincolumns is-three-fifths"},i.a.createElement("div",{className:"content has-text-centered "},i.a.createElement("h1",{className:"movetocenter heroheader",style:"color: hsla(0,0%,100%,.925);"},"Secure Local Weather"),i.a.createElement("h2",{className:"movetocenter hero-value-prop"},"Get your accurate local weather forecast without sending any coordinate data to 3rd party services."),i.a.createElement("button",{onClick:function(){var e,t;e="https://proto.secureweather.io/",(t=window.open(e,"_blank","noopener,noreferrer"))&&(t.opener=null)},class:"button b-text is-primary is-medium"},"Try it out now! "),i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"container features-list"},i.a.createElement("div",{className:""},i.a.createElement("li",{className:"feature-item"},i.a.createElement(c.c,{size:60}),i.a.createElement("p",{className:"feature-item-text"},"Super Secure")),i.a.createElement("li",{className:"feature-item"},i.a.createElement(f.a,{size:60}),i.a.createElement("p",{className:"feature-item-text"},"Accurate")),i.a.createElement("li",{className:"feature-item"},i.a.createElement(c.b,{size:60}),i.a.createElement("p",{className:"feature-item-text"},"Open source"))))))),i.a.createElement("div",{class:"column "},i.a.createElement(m,null)))))},h=a("woit"),g=a.n(h),v=a("tiRw"),E=a.n(v),b=function(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("form",{action:"https://formspree.io/f/xyybjoka",method:"POST"},i.a.createElement("div",{className:"form-list"},i.a.createElement("input",{className:"input input-style",type:"email",name:"email",placeholder:"email"}),i.a.createElement("button",{type:"submit",className:"button is-link"},"Submit")))))},y=function(){return i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("div",null,i.a.createElement("h1",{className:"safetyheader"},"What makes Secure Local Weather so secure?"),i.a.createElement("div",{className:"description"},i.a.createElement("p",{className:"content description-text"},"Secure Local Weather uses pointNG location identification method that ",i.a.createElement("span",{style:{fontWeight:"bolder"}},"never sends any coordinate data outside the client or to 3rd party servers"),".")),i.a.createElement("div",{className:"columns columns-space"},i.a.createElement("div",{className:"column column-space maincolumns-safety"},i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"content "},i.a.createElement("p",{className:"movetocenter animation-text"},"How location identification works in Secure Local Weather:"),i.a.createElement("img",{className:"safety-animation ",src:E.a,alt:"pointng location identification"}))),i.a.createElement("p",{className:"animation-text-description"},"Coordinate data stays in the client!"),i.a.createElement("button",{onClick:function(){var e,t;e="https://www.pointng.io/",(t=window.open(e,"_blank","noopener,noreferrer"))&&(t.opener=null)},class:"button is-primary animation-button"},"Read More About pointNG")),i.a.createElement("div",{className:"column column-space  maincolumns-safety"},i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"content "},i.a.createElement("p",{className:"movetocenter animation-text"},"How location identification works in traditional weather apps:"),i.a.createElement("img",{className:"safety-animation",src:g.a,alt:"traditional location identification"}))),i.a.createElement("p",{className:"animation-text-description"},"Typical weather apps send ",i.a.createElement("b",null,"the users exact location coordinates, over the internet, to third party services"),"."))),i.a.createElement("div",{className:"section form-section"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"movetocenter sign-up-form"},i.a.createElement("p",{className:"sign-up-text"},"Sign up for secure weather updates here:"),i.a.createElement("div",{style:{marginLeft:"20px"}},i.a.createElement(b,null)))))))))};function w(){return i.a.createElement(u,null,i.a.createElement(p,null),i.a.createElement(y,null))}},"WF7/":function(e,t,a){},tiRw:function(e,t,a){e.exports=a.p+"static/pointng4-bbbee58b6f5bc40bc95ce772e3a0b0c2.gif"},woit:function(e,t,a){e.exports=a.p+"static/traditional4-50ec9e82cdd15258a194ef60a9b74aab.gif"}}]);
//# sourceMappingURL=component---src-pages-index-js-5c2ae63ba0812435a14a.js.map