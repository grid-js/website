---
id: search
title: Search
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - search
 - table search
 - row search
---

import { LiveExample } from "../../lib/liveExample.js";

Grid.js supports global search on all rows and columns. Set `search: true` to enable the search plugin:

<LiveExample children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  search: true,
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
    ['Nisen', 'nis900@gmail.com',   '313 333 1923']
  ]
});
`
} />
