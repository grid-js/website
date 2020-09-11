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

Add custom attributes to each cell of your table using the `attributes` config. This example
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

:::info
`attributes` config accepts callback function as well:

```js
{
    'attributes': (cell, row, column) => { ... }
}
```
:::

<LiveExample children={
`
const grid = new Grid({
  columns: [
      { 
        name: 'Name',
        attributes: (cell) => {
          return {
            'data-cell-content': cell,
            'onclick': () => alert(cell),
            'style': 'cursor: pointer'
          };
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

