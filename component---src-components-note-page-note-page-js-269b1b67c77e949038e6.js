(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{efAv:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("8k0H"),i=n("vOnD"),c=n("Wbzz"),o=i.default.section.withConfig({displayName:"references__Container",componentId:"sc-14xxj6i-0"})(["width:calc(100% - 2rem);border:2px dashed ",";margin:1rem 0;padding:0 1rem;ul{margin:1rem 0;}"],(function(e){return e.theme.secondary})),u=function(e){var t=e.arr,n=e.heading;return 0===t.length?null:r.a.createElement(o,null,r.a.createElement("h3",null,n),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(c.Link,{to:e.fields.slug},e.frontmatter.title))}))))},m=n("XvGF"),d=n("/Iek"),f=i.default.article.withConfig({displayName:"article__Container",componentId:"sc-1mxug0k-0"})(["width:100%;height:100%;flex:1;h2{margin:1.25rem 0;}section{border-top:2px dashed ",";}.gatsby-resp-image-wrapper{",";width:100%;margin:0 0 0.5rem;}"],(function(e){return e.theme.secondary}),(function(e){var t=e.theme;return Object(m.a)(t)})),g=function(e){return new Date(e).toLocaleDateString()},p=function(e){var t=e.data,n=t.body,a=t.frontmatter,l=a.title,i=a.date,c=a.last_modified,o=a.description;return r.a.createElement(f,null,r.a.createElement("h2",null,l),r.a.createElement("p",null,r.a.createElement("span",null,"Published:")," ",g(i),c!==i?r.a.createElement(r.a.Fragment,null," | "," ",r.a.createElement("span",null,"Modified:"),g(c)):null),r.a.createElement("p",null,o),r.a.createElement(d.a,{body:n}))},s=n("d6gv"),h=n("vrFN"),E=n("ma3e"),b=n("/MKj"),w=Object(b.b)(null,(function(e){return{toggleGraph:function(){return e({type:"TOGGLE_GRAPH"})}}}))((function(e){var t=e.toggleGraph;return r.a.createElement("button",{"aria-label":"Toggle graph",title:"Toggle graph",onClick:t},r.a.createElement(E.b,null))}));t.default=Object(b.b)((function(e){return{graph:e.graph}}),null)((function(e){var t=e.data,n=e.graph,a=t.mdx;return r.a.createElement(l.a,{button:r.a.createElement(w,null)},r.a.createElement(h.a,{title:a.frontmatter.title,description:a.frontmatter.description}),n?r.a.createElement(s.a,{data:[a]}):null,r.a.createElement(p,{data:a}),r.a.createElement(u,{heading:"In this note:",arr:a.outboundReferences}),r.a.createElement(u,{heading:"Reffered in:",arr:a.inboundReferences}))}))}}]);
//# sourceMappingURL=component---src-components-note-page-note-page-js-269b1b67c77e949038e6.js.map