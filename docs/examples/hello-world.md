---
id: hello-world
title: Hello, World!
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
---

import { LiveExample } from "../../lib/liveExample.js";

:::tip
You can interact with the following editor!
:::

<LiveExample children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  ]
});
`
} />

<br/>

Or you can update the config using `updateConfig`:

<LiveExample children={
`
const grid = new Grid({
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  ]
}).updateConfig({
  columns: ['Name', 'Email', 'Phone Number'],
});
`
} />

