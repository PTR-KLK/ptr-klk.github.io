(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),d=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),s=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),a=m(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},r&&s.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&s.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',d=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+s+d+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=s.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,d=e.ariaHidden,o=s.default.createElement(V,(0,l.default)({ref:t,src:a},n,{ariaHidden:d}));return r.length>1?s.default.createElement("picture",null,i(r),o):o})),V=s.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,d=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return s.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:d,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=s.default.createRef(),a.placeholderRef=t.placeholderRef||s.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,d.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,d=e.imgStyle,o=void 0===d?{}:d,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,E=e.loading,L=e.draggable,R=h||g;if(!R)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,l.default)({opacity:k?1:0,transition:C?"opacity "+y+"ms":"none"},o),j="boolean"==typeof b?"lightgray":b,T={transitionDelay:y+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&T,o,f),P={title:t,alt:this.state.isVisible?"":a,style:N,className:m,itemProp:S},W=this.state.isHydrated?p(R):R[0];if(h)return s.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},s.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),j&&s.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&T)}),W.base64&&s.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:P,imageVariants:R,generateSources:I}),W.tracedSVG&&s.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:P,imageVariants:R,generateSources:x}),this.state.isVisible&&s.default.createElement("picture",null,w(R),s.default.createElement(V,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:L})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)({alt:a,title:t,loading:E},W,{imageVariants:R}))}}));if(g){var _=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete _.display,s.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},j&&s.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:j,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},C&&T)}),W.base64&&s.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:P,imageVariants:R,generateSources:I}),W.tracedSVG&&s.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:P,imageVariants:R,generateSources:x}),this.state.isVisible&&s.default.createElement("picture",null,w(R),s.default.createElement(V,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:L})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)({alt:a,title:t,loading:E},W,{imageVariants:R}))}}))}return null},t}(s.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),H=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function j(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}k.propTypes={resolutions:C,sizes:H,fixed:j(c.default.oneOfType([C,c.default.arrayOf(C)])),fluid:j(c.default.oneOfType([H,c.default.arrayOf(H)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=k;t.default=T},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("8k0H"),d=a("vrFN"),o=a("Wbzz"),l=function(e){var t,a=e.data;return i.a.createElement("li",null,i.a.createElement("h3",null,i.a.createElement("span",null,(t=a.frontmatter.last_modified,new Date(t).toLocaleDateString())," — "),i.a.createElement(o.Link,{to:a.fields.slug},a.frontmatter.title," ")),i.a.createElement("p",null,a.frontmatter.description||a.excerpt))},s=function(e){var t=e.list,a=e.details;return i.a.createElement("ul",null,t.map((function(e){var t=e.node;return i.a.createElement(l,{data:t,key:t.id,details:a})})))},c=function(){var e=Object(o.useStaticQuery)("1431583717").latest.edges;return i.a.createElement("section",null,i.a.createElement("h2",null,"Latest updates:"),i.a.createElement(s,{list:e}))},u=a("d6gv"),f=a("vOnD"),m=a("9eSz"),p=a.n(m),h=a("/Iek"),g=f.default.section.withConfig({displayName:"author__Container",componentId:"sc-1jo6nwl-0"})(['width:100%;position:relative;display:flex;flex-direction:column;align-items:center;margin:1rem 0 1.625rem;h2{font-size:4rem;line-height:3rem;margin:1rem 1rem 0;font-family:"Inconsolata",monospace;display:block;color:',";}p{text-align:justify;margin:1rem;}@media (min-width:768px){flex-direction:row;border:none;margin:calc(2rem + 5px) 0 2.625rem;padding:0;section{position:relative;top:-0.375rem;}h2{margin:0 1rem;font-size:4rem;line-height:3rem;}p{margin:1rem calc(2rem + 5px) 1rem 1rem;}}"],(function(e){return e.theme.secondary})),b=f.default.div.withConfig({displayName:"author__Stripes",componentId:"sc-1jo6nwl-1"})(["position:absolute;top:1rem;left:0;width:calc(100% + 6px - 1rem);z-index:1;height:calc(100% - 1rem);border-style:solid dashed dashed solid;border-color:",';border-width:5px;&::after{content:"";position:absolute;bottom:0;left:-5px;height:50%;width:5px;z-index:2;background:',';}&::before{content:"";position:absolute;right:-5px;top:0;width:5px;height:50%;z-index:2;background:',";}@media (min-width:768px){top:calc(-5px - 1rem);left:1rem;width:calc(100% + 6px - 3rem);height:calc(100% + 2rem + 5px);&::after{bottom:-5px;left:0;height:5px;width:50%;}&::before{right:0;top:-5px;height:5px;width:50%;z-index:1;}}"],(function(e){return e.theme.secondary}),(function(e){return e.theme.body}),(function(e){return e.theme.body})),y=Object(f.default)(p.a).withConfig({displayName:"author__Image",componentId:"sc-1jo6nwl-2"})(["width:100%;max-width:192px;height:auto;@media (min-width:320px){max-width:256px;}"]),v=function(){var e=Object(o.useStaticQuery)("2472183020"),t=e.me,a=e.about.nodes[0];return i.a.createElement(g,null,i.a.createElement(b,null),i.a.createElement(y,{fluid:t.childImageSharp.fluid,objectFit:"cover",alt:""}),i.a.createElement(h.a,{body:a.body},i.a.createElement("h2",null,"Hello!")))};t.default=function(e){var t=e.data,a=t.site.siteMetadata,r=t.graph.nodes,o=t.projects.nodes[0],l=t.contact.nodes[0];return i.a.createElement(n.a,null,i.a.createElement(d.a,{title:"Index",description:a.description}),i.a.createElement(v,null),i.a.createElement(c,null),i.a.createElement(h.a,{body:o.body},i.a.createElement("h2",null,o.frontmatter.title)),i.a.createElement(h.a,{body:l.body},i.a.createElement("h2",null,l.frontmatter.title)),i.a.createElement(u.a,{data:r}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-ddf93bebffe66c9f8314.js.map