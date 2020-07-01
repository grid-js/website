---
id: import-function
title: Dynamic data import 
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - import
 - import data
---

import { LiveExample } from "../../lib/liveExample.js";

The `data` attribute accepts a function as well:

<LiveExample children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  data: () => [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  ]
});
`
} />
