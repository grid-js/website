(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{168:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(170),i=n(169),r=n(0),c=n.n(r),l=n(171);class s extends r.Component{render(){return c.a.createElement(i.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:a.f,html:a.l,h:a.k,gCreateRef:a.j,gComponent:a.e,PluginPosition:a.h,BaseComponent:a.b,BaseProps:a.BaseProps,CodeBlock:i.a,useEffect:r.useEffect,useRef:r.useRef,faker:l,...this.props.scope}})}}},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(167)),c=n(168),l={id:"cell-attributes",title:"Cell Attributes",keywords:["javascript","table","javascript table","gridjs","grid js","cell attributes","cell attrs"]},s={unversionedId:"examples/cell-attributes",id:"examples/cell-attributes",isDocsHomePage:!1,title:"Cell Attributes",description:"Add custom attributes to each cell (and header cell) of your table using the attributes config. This example",source:"@site/docs/examples/cell-attributes.md",slug:"/examples/cell-attributes",permalink:"/docs/examples/cell-attributes",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/cell-attributes.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1599858512,sidebar:"sidebar",previous:{title:"Cell formatting",permalink:"/docs/examples/cell-formatting"},next:{title:"Row buttons",permalink:"/docs/examples/row-buttons"}},o=[],d={rightToc:o};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Add custom attributes to each cell (and header cell) of your table using the ",Object(r.b)("inlineCode",{parentName:"p"},"attributes")," config. This example\nadds ",Object(r.b)("inlineCode",{parentName:"p"},'data-field="name"'),' to all cells of the "Name" column:'),Object(r.b)(c.a,{children:"\nconst grid = new Grid({\n  columns: [\n      { \n        name: 'Name',\n        attributes: {\n          'data-field':  'name'\n        }\n      },\n      'Email',\n   ],\n  data: Array(5).fill().map(x => [\n    faker.name.findName(),\n    faker.internet.email(),\n  ])\n});\n",mdxType:"LiveExample"}),Object(r.b)("br",null),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"attributes")," config accepts callback function as well:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n    'attributes': (cell, row, column) => { ... }\n}\n")),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Note:")," ",Object(r.b)("inlineCode",{parentName:"p"},"cell")," and ",Object(r.b)("inlineCode",{parentName:"p"},"row")," arguments are empty when the ",Object(r.b)("inlineCode",{parentName:"p"},"attributes")," function is called for a ",Object(r.b)("inlineCode",{parentName:"p"},"th")," (header cell)"))),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Be careful when you're using the ",Object(r.b)("inlineCode",{parentName:"p"},"attributes")," config. The output of ",Object(r.b)("inlineCode",{parentName:"p"},"attributes")," function can override the default\nGrid.js HTML attributes (e.g. you can override the default Grid.js className attribute)"))),Object(r.b)(c.a,{children:"\nconst grid = new Grid({\n  columns: [\n      { \n        name: 'Name',\n        attributes: (cell) => {\n          // add these attributes to the td elements only\n          if (cell) { \n            return {\n              'data-cell-content': cell,\n              'onclick': () => alert(cell),\n              'style': 'cursor: pointer',\n            };\n          }\n        }\n      },\n      'Email',\n   ],\n  data: Array(5).fill().map(x => [\n    faker.name.findName(),\n    faker.internet.email(),\n  ])\n});\n",mdxType:"LiveExample"}))}b.isMDXComponent=!0}}]);