---
id: server-side-pagination
title: Server Side Pagination
---

import { Grid, html } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";

<CodeBlock children={
`
const grid = new Grid({
  columns: ['Pokemon', 'URL'],
  pagination: {
    limit: 5,
    server: {
      url: (prev, page, limit) => \`\${prev}?limit=\${limit}&offset=\${page * limit}\`
    }
  },
  server: {
    url: 'https://pokeapi.co/api/v2/pokemon',
    then: data => data.results.map(pokemon => [
      pokemon.name, html(\`<a href='\${pokemon.url}'>Link to \${pokemon.name}</a>\`)
    ]),
    total: data => data.count
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
} live={true} scope={{ Grid, CodeBlock, useEffect, useRef, html }} />
