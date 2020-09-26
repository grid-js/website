---
id: html-header-cells
title: HTML in header cells 
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - html cell
 - html header
---

import { LiveExample } from "../../lib/liveExample.js";

Import the `html` function first:

```js
import { Grid, html } from "gridjs";
```

Then you can use that in `columns` or `name` field of `columns`:

<LiveExample children={
`
const grid = new Grid({
  columns: [
      { 
        id: 'name',
        name: html('<i>Name</i>'),
      },
      {
        id: 'email',
        name: html('<div style="border: 1px solid #ccc;padding: 5px;border-radius: 5px;text-align: center;">Email</div>'),
      }
   ],
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
  ])
});
`
} />

<br/>

You can also create a virtual DOM and attach it to header cells:

```js
import { Grid, h } from "gridjs";
```

<LiveExample children={
`
const grid = new Grid({
  columns: [
    {
      id: 'name',
      name: h('b', {}, 'Name'),
    },
    {
      id: 'div',
      name: h('div', {
        style: {
          border: '1px solid #ccc',
          padding: '5px',
          'border-radius': '5px',
          'text-align': 'center',
        }
      }, 'Email'), 
    },
  ],
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
  ]),
  search: true
});
`
} />
