---
id: pagination
title: Pagination
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - page
 - table page
 - pagination
---

import { LiveExample } from "../../lib/liveExample.js";

Pagination can be enabled by setting `pagination: true`:

<LiveExample children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  pagination: true,
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  ]
});
`
} />

<br/>

You can also change the default settings of the pagination plugin:

<LiveExample children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  pagination: {
    limit: 1
  },
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  ]
});
`
} />

