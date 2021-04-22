---
title: Resizable columns
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - resizable columns
 - resize columns
---

import { LiveExample } from "../../lib/liveExample.js";

Simply add `resizable: true` to your config to enable resizable columns:

<LiveExample children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  ],
  resizable: true,
  sort: true
});
`
} />

You can also set width before passing the `resizable` flag:

<LiveExample children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  ],
  width: 500,
  resizable: true
});
`
} />
