---
id: cell-formatting
title: Cell formatting
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - formatting
 - cell formatting
 
---

import { LiveExample } from "../../lib/liveExample.js";

You can customize cells and format them at runtime using `formatter` property:

<LiveExample children={
`
const grid = new Grid({
  columns: [
      { 
        name: 'Name',
        formatter: (cell) => \`Name: \${cell}\`
      },
      'Email',
   ],
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
  ])
});
`
} />

:::info
It is also possible to add HTML content to cells. See [Populating cells with HTML](html-cells.md).
:::

You can also get access to other cells in the same row:

<LiveExample children={
`
const grid = new Grid({
  columns: [
      'Salary 1',
      'Salary 2',
      { 
        name: 'Sum',
        data: null,
        formatter: (_, row) => \`$\${(row.cells[0].data + row.cells[1].data).toLocaleString()} USD\`
      },
   ],
  data: Array(5).fill().map(x => [
    Math.round(Math.random() * 100000),
    Math.round(Math.random() * 100000)
  ])
});
`
} />

