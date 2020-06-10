---
id: server-side-sort
title: Server Side Sorting
---

import { Grid, html } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";

Server side search:

<CodeBlock children={
`
const grid = new Grid({
  sort: {
    multiColumn: false,
    server: {
      url: (prev, columns) => {
       if (!columns.length) return prev;
       
       const col = columns[0];
       const dir = col.direction === 1 ? 'asc' : 'desc';
       let colName = ['name', 'rarity'][col.index];
       
       return \`\${prev}&order=\${colName}&dir=\${dir}\`;
     }
    }
  },
  columns: [
   'Name',
   'Rarity',
   {
     name: 'Image',
     width: '50px',
     sort: false,
     formatter: (img) => html(\`<center><img src='\${img}'/></center>\`)
   }
  ],
  server: {
    url: 'https://api.scryfall.com/cards/search?q=Inspiring',
    then: data => data.data.map(card => [card.name, card.rarity, card.image_uris.small]),
    total: data => data.total_cards
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
