(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var o=t(3),r=t(7),s=(t(0),t(167)),c=t(168),a={id:"custom-sort",title:"Custom sort",keywords:["javascript","table","javascript table","gridjs","grid js","sort","custom sort","sorting"]},i={unversionedId:"examples/custom-sort",id:"examples/custom-sort",isDocsHomePage:!1,title:"Custom sort",description:"You can customize the sort plugin by using the compare function. Each column accepts a custom compare function.",source:"@site/docs/examples/custom-sort.md",slug:"/examples/custom-sort",permalink:"/docs/examples/custom-sort",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/custom-sort.md",version:"current",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593637169,sidebar:"sidebar",previous:{title:"Multi column sort",permalink:"/docs/examples/multi-sort"},next:{title:"Stock Market",permalink:"/docs/examples/stock-market"}},u=[],m={rightToc:u};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You can customize the sort plugin by using the ",Object(s.b)("inlineCode",{parentName:"p"},"compare")," function. Each column accepts a custom ",Object(s.b)("inlineCode",{parentName:"p"},"compare"),' function.\nIn this example, we are sorting the "Phone Number" column based on the ',Object(s.b)("em",{parentName:"p"},"last 4 digits"),":"),Object(s.b)(c.a,{children:"\nconst grid = new Grid({\n  columns: [\n    'Name',\n    'Email',\n    { \n      name: 'Phone Number',\n      sort: {\n        compare: (a, b) => {\n          const code = (x) => x.split(' ').slice(-1)[0];\n          \n          if (code(a) > code(b)) {\n            return 1;\n          } else if (code(b) > code(a)) {\n            return -1;\n          } else {\n            return 0;\n          }\n        }\n      }\n    }\n  ],\n  sort: true,\n  data: [\n    ['John', 'john@example.com', '+353 40 222 3333'],\n    ['Mark', 'mark@gmail.com',   '+1 22 888 4444'],\n    ['Eoin', 'eo3n@yahoo.com',   '+355 10 878 5554'],\n    ['Nisen', 'nis900@gmail.com',   '+313 333 1923']\n  ]\n});\n",mdxType:"LiveExample"}))}p.isMDXComponent=!0},168:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var o=t(170),r=t(169),s=t(0),c=t.n(s),a=t(171);class i extends s.Component{render(){return c.a.createElement(r.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:o.f,html:o.l,h:o.k,gCreateRef:o.j,gComponent:o.e,PluginPosition:o.h,BaseComponent:o.b,BaseProps:o.BaseProps,CodeBlock:r.a,useEffect:s.useEffect,useRef:s.useRef,faker:a,...this.props.scope}})}}}}]);