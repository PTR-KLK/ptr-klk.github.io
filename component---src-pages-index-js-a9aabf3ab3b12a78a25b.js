(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("8k0H"),l=n("6d1X"),o=n("Wbzz"),m=n("d6gv"),c=n("/MKj"),u=n("bSn2"),d=n("vOnD"),s=n("ufqH"),h=n("9eSz"),p=n.n(h),g=n("WMHc"),f=d.default.section.withConfig({displayName:"authorstyle__Container",componentId:"sc-13nt7qw-0"})(["position:absolute;display:flex;align-items:center;top:0;left:0;background:",";width:100%;height:100%;p{margin:0.5rem 0;}@media (min-width:360px){p{margin:1rem 0;}}"],(function(e){var t=e.theme;return Object(s.b)(t.primary,.9)})),b=Object(d.default)(p.a).withConfig({displayName:"authorstyle__Image",componentId:"sc-13nt7qw-1"})(["",";width:100%;max-width:128px;margin:0 auto 0.5rem;height:auto;@media (min-width:360px){max-width:160px;margin:0 auto 1rem;}@media (min-width:484px){max-width:192px;margin:0 calc(1rem + 2px) calc(0.5rem + 2px) 0;float:left;}@media (min-width:768px){max-width:228px;}"],(function(e){var t=e.theme;return Object(g.a)(t)})),w=d.default.h2.withConfig({displayName:"authorstyle__Heading",componentId:"sc-13nt7qw-2"})(["font-size:2rem;margin:0 0 0.5rem;color:",";@media (min-width:360px){font-size:3rem;line-height:2rem;margin:0 0 1rem;}"],(function(e){return e.theme.secondary})),E=Object(c.b)((function(e){return{authorVisible:e.authorVisible}}),null)((function(e){var t=e.authorVisible,n=Object(o.useStaticQuery)("3693073184"),a=n.me,r=n.frontpage.nodes[0];return t?i.a.createElement(f,null,i.a.createElement(u.a,{body:r.body},i.a.createElement(b,{fluid:a.childImageSharp.fluid,objectFit:"cover",alt:""}),i.a.createElement(w,null,"Hello!"))):null})),x=n("ma3e"),y=d.default.button.withConfig({displayName:"authorButtonstyle__Container",componentId:"sc-1ugb9ce-0"})(["border:none;background:none;color:",";position:absolute;left:0;bottom:0;margin:0.5rem;svg{width:1.75rem;height:1.75rem;}@media (min-width:425px){margin:1rem;svg{width:1.825rem;height:1.825rem;}}"],(function(e){return e.theme.text})),v=Object(c.b)((function(e){return{authorVisible:e.authorVisible}}),(function(e){return{toggleAuthorVisible:function(){return e({type:"TOGGLE_AUTHOR_VISIBLE"})}}}))((function(e){var t=e.authorVisible,n=e.toggleAuthorVisible;return i.a.createElement(y,{"aria-label":"Toggle author info",title:"Toggle author info",onClick:n},t?i.a.createElement(x.h,null):i.a.createElement(x.i,null))})),_=d.default.section.withConfig({displayName:"herostyle__Container",componentId:"sc-1t416gv-0"})(["position:relative;width:100%;"]),I=function(){var e=Object(o.useStaticQuery)("3500103449").graph.nodes;return i.a.createElement(_,null,i.a.createElement(m.a,{data:e}),i.a.createElement(E,null),i.a.createElement(v,null))},C=d.default.section.withConfig({displayName:"liststyle__Container",componentId:"sc-1vkptz6-0"})(["width:calc(100% - 2rem);max-width:768px;"]),O=function(e){var t,n=e.data;return i.a.createElement("li",null,i.a.createElement("h3",null,i.a.createElement("span",null,(t=n.frontmatter.last_modified,new Date(t).toLocaleDateString())," — "),i.a.createElement(o.Link,{to:n.fields.slug},n.frontmatter.title," ")),i.a.createElement("p",null,n.frontmatter.description||n.excerpt))},j=function(e){var t=e.heading,n=e.list,a=e.details;return i.a.createElement(C,null,i.a.createElement("h2",null,t),i.a.createElement("ul",null,n.map((function(e){var t=e.node;return i.a.createElement(O,{data:t,key:t.id,details:a})}))))};t.default=function(e){var t=e.data,n=t.site.siteMetadata,a=t.recommended.edges,o=t.latest.edges;return i.a.createElement(r.a,null,i.a.createElement(l.a,{title:"Index",description:n.description}),i.a.createElement(I,null),i.a.createElement(j,{heading:"Recommended notes:",list:a}),i.a.createElement(j,{heading:"Latest updates:",list:o}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a9aabf3ab3b12a78a25b.js.map