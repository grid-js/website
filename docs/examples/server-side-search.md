---
id: server-side-search
title: Server Side Search
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - server side search
 - server search
---

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";

Add `server` config to your search definition to enable server-side search:

<CodeBlock children={
`
const grid = new Grid({
  pagination: true,
  search: {
    server: {
      url: (prev, keyword) => \`\${prev}?search=\${keyword}\`
    }
  },
  columns: ['Title', 'Director', 'Producer'],
  server: {
    url: 'https://swapi.dev/api/films/',
    then: data => data.results.map(movie => [movie.title, movie.director, movie.producer])
  } 
});
`
}
 transformCode={(code) => 
`
function () {
  ${code}
 
  const wrapperRef = useRef(null);
   
  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  
  return (
    <div ref={wrapperRef} />
  );
}
`
} live={true} scope={{ Grid, CodeBlock, useEffect, useRef }} />
