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

Add `server` config to your search definition to enable server-side search. Note that in this example, we have to handle
the HTTP status code 404 ourselves because api.scryfall.com return 404 error if there is no matching record in `?q=` query string:

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
    handle: (res) => {
      // no matching records found
      if (res.status === 404) return {data: []};
      if (res.ok) return res.json();
      
      throw Error('oh no :(');
    },
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
