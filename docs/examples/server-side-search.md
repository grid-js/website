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
      url: (prev, keyword) => keyword ? \`\${prev}/search?q=\${keyword}\` : prev,
    }
  },
  columns: ['Name', 'Language', 'Released At', 'Artist'],
  server: {
    url: 'https://api.scryfall.com/cards',
    then: data => data.data.map(card => [card.name, card.lang, card.released_at, card.artist])
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
