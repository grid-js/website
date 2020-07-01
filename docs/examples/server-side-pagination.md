---
id: server-side-pagination
title: Server Side Pagination
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - pagination
 - server side pagination
---

import { LiveExample } from "../../lib/liveExample.js";

Add `server` property to the `pagination` config to enable server-side pagination. Also, make sure the `total` property
is correctly defined in the main `server` config block:

<LiveExample children={
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
} />

:::tip
You can also send POST HTTP calls if you add `method: 'POST'` to the main `server` config.
:::
