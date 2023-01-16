---
id: server-side-sort
title: Server Side Sorting
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - sort
 - server side sort
 - server sort
---

import { LiveExample } from "../../lib/liveExample.js";

Simply add `server` config to the `sort` block to enable server-side sorting:

<LiveExample children={
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
     width: '30%',
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
} />
