---
id: html-cells
title: Populating cells with HTML
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - html cell
---

import { Grid, html } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";
import * as faker from 'faker';

Import the `html` function first:

```js
import { Grid, html } from "gridjs";
```

Then you can use that in `formatter` function or directly in `data` array:

<CodeBlock children={
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
}
 transformCode={(code) => 
`
function () {
  ${code}
 
  const wrapperRef = useRef(null);
   
  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  
  return (
    <div ref={wrapperRef} />
  );
}
`
} live={true} scope={{ Grid, CodeBlock, useEffect, useRef, faker, html }} />

<br/>

:::note
Using the `html` function can expose your application to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting).
Make sure you understand the implications of using this function and **always** sanitize the user inputs before passing them
to the `html` function.
:::

<CodeBlock children={
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
}
 transformCode={(code) => 
`
function () {
  ${code}
 
  const wrapperRef = useRef(null);
   
  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  
  return (
    <div ref={wrapperRef} />
  );
}
`
} live={true} scope={{ Grid, CodeBlock, useEffect, useRef, faker, html }} />
