(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{155:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(166),m=t(171),c=t(177),i=t(163);var s=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))},o=t(173);a.default=function(e){const{metadata:a,items:t,sidebar:n}=e,{siteConfig:{title:i}}=Object(l.a)(),{blogDescription:d,blogTitle:E,permalink:u}=a,g="/"===u?i:E;return r.a.createElement(m.a,{title:g,description:d},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},t.map((({content:e})=>r.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},r.a.createElement(e,null)))),r.a.createElement(s,{metadata:a})))))}},173:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),r=t.n(n),l=t(163),m=t(49),c=t.n(m);function i({sidebar:e}){return 0===e.items.length?null:r.a.createElement("div",{className:c.a.sidebar},r.a.createElement("h3",{className:c.a.sidebarItemTitle},e.title),r.a.createElement("ul",{className:c.a.sidebarItemList},e.items.map((e=>r.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},r.a.createElement(l.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))))))}},174:function(e,a,t){"use strict";var n=t(2),r=t(0),l=t.n(r),m=t(163),c=t(160),i=t(164),s=t(165),o=(t(50),t(51)),d=t.n(o);var E=e=>function({id:a,...t}){const{navbar:{hideOnScroll:n}}=Object(s.a)();return a?l.a.createElement(e,t,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(i.a)("anchor",{[d.a.enhancedAnchor]:!n}),id:a}),t.children,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):l.a.createElement(e,t)},u=t(52),g=t.n(u);const h={code:e=>{const{children:a}=e;return"string"==typeof a?a.includes("\n")?l.a.createElement(c.a,e):l.a.createElement("code",e):a},a:e=>l.a.createElement(m.a,e),pre:e=>l.a.createElement("div",Object(n.a)({className:g.a.mdxCodeBlock},e)),h1:E("h1"),h2:E("h2"),h3:E("h3"),h4:E("h4"),h5:E("h5"),h6:E("h6")};a.a=h},177:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(164),m=t(158),c=t(170),i=t(163),s=t(174),o=t(168),d=t(53),E=t.n(d);const u=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:d,isBlogPostPage:g=!1}=e,{date:h,permalink:v,tags:p,readingTime:b}=n,{author:N,title:_,image:k,keywords:f}=t,w=t.author_url||t.authorURL,y=t.author_title||t.authorTitle,I=t.author_image_url||t.authorImageURL,O=Object(o.a)(k,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,f&&f.length&&r.a.createElement("meta",{name:"keywords",content:f.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:O}),k&&r.a.createElement("meta",{property:"twitter:image",content:O}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+_})),r.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(()=>{const e=g?"h1":"h2",a=h.substring(0,10).split("-"),t=a[0],n=u[parseInt(a[1],10)-1],m=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",E.a.blogPostTitle)},g?_:r.a.createElement(i.a,{to:v},_)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:h,className:E.a.blogPostDate},n," ",m,", ",t," ",b&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(b)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},I&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:w,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:I,alt:N})),r.a.createElement("div",{className:"avatar__intro"},N&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},N)),r.a.createElement("small",{className:"avatar__subtitle"},y)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:s.a},a)),(p.length>0||d)&&r.a.createElement("footer",{className:"row margin-vert--lg"},p.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),p.map((({label:e,permalink:a})=>r.a.createElement(i.a,{key:a,className:"margin-horiz--sm",to:a},e)))),d&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:n.permalink,"aria-label":"Read more about "+_},r.a.createElement("strong",null,"Read More"))))))}}}]);