---
id: sorting
title: Sorting
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - sorting
 - table sorting
---

import { LiveExample } from "../../lib/liveExample.js";

To enable sorting, simply add `sort: true` to your config:

<LiveExample children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  sort: true,
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
    ['Nisen', 'nis900@gmail.com',   '313 333 1923']
  ]
});
`
} />
