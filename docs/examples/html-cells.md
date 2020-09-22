---
id: html-cells
title: HTML in cells
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - html cell
---

import { LiveExample } from "../../lib/liveExample.js";

If you are using the ES module, import the `html` function first:

```js
import { Grid, html } from "gridjs";
```

or use `gridjs.html(...)` if you are using the UMD export.

Then you can use that in `formatter` function or directly in `data` array:

<LiveExample children={
`
const grid = new Grid({
  columns: [
      { 
        name: 'Name',
        formatter: (cell) => html(\`<b>\${cell}</b>\`)
      },
      'Email',
      { 
        name: 'Actions',
        formatter: (_, row) => html(\`<a href='mailto:\${row.cells[1].data}'>Email</a>\`)
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

:::note
Using the `html` function can expose your application to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting).
Make sure you understand the implications of using this function and **always** sanitize the user inputs before passing them
to the `html` function.
:::

<LiveExample children={
`
const grid = new Grid({
  columns: [
    'Name',
    'Email',
    'Actions',
  ],
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
    html(
      "<div style='padding: 2px; border: 1px solid #ccc;border-radius: 4px;'>" +
        "<center>hello!</center>" +
      "</div>"
    )
  ]),
  search: true
});
`
} />
