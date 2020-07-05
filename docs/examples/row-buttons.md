---
id: row-buttons 
title: Row buttons 
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - action buttons
---

import { LiveExample } from "../../lib/liveExample.js";

You can get access to the cell or the entire row using the `formatter` function. In this example, we are adding a button
to each row which has an `onClick` handler function that can read the entire row.

Import the `h` function first:

```js
import { Grid, h } from "gridjs";
```

Then you can use that in `formatter` function or directly in `data` array:

<LiveExample children={
`
const grid = new Grid({
  columns: [
      { 
        name: 'Name',
      },
      'Email',
      { 
        name: 'Actions',
        formatter: (cell, row) => {
          return h('button', {
            className: 'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600',
            onClick: () => alert(\`Editing "\${row.cells[0].data}\" "\${row.cells[1].data}"\`)
          }, 'Edit');
        }
      },
   ],
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
    null
  ])
});
`
} />

<br/>

:::tip
It is also possible to bind callback functions to `cellClick` or `rowClick` events.
See [Events](./event-handler.md) for more details.
:::
