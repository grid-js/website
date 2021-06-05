---
id: cell-attributes
title: Cell Attributes
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - cell attributes
 - cell attrs
 
---

import { LiveExample } from "../../lib/liveExample.js";

Add custom attributes to each cell (and header cell) of your table using the `attributes` config. This example
adds `data-field="name"` to all cells of the "Name" column:

<LiveExample children={
`
const grid = new Grid({
  columns: [
      { 
        name: 'Name',
        attributes: {
          'data-field':  'name'
        }
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

<br/>

:::tip
`attributes` config accepts callback function as well:

```js
{
    'attributes': (cell, row, column) => { ... }
}
```

**Note:** `cell` and `row` arguments are empty when the `attributes` function is called for a `th` (header cell)
:::

:::warning
Be careful when you're using the `attributes` config. The output of `attributes` function can override the default
Grid.js HTML attributes (e.g. you can override the default Grid.js className attribute)
:::

<LiveExample children={
`
const grid = new Grid({
  columns: [
      { 
        name: 'Name',
        attributes: (cell) => {
          // add these attributes to the td elements only
          if (cell) { 
            return {
              'data-cell-content': cell,
              'onclick': () => alert(cell),
              'style': 'cursor: pointer',
            };
          }
        }
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

