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

import { LiveExample } from "../../lib/liveExample.js";

Add `server` config to your search definition to enable server-side search:

<LiveExample children={
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
} />
