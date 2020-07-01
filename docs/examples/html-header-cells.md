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

import { Grid, html, h } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";
import * as faker from 'faker';

Import the `html` function first:

```js
import { Grid, html } from "gridjs";
```

Then you can use that in `columns` or `name` field of `columns`:

<CodeBlock children={
`
const grid = new Grid({
  columns: [
      { 
        name: html('<i>Name</i>'),
      },
      html('<div style="border: 1px solid #ccc;padding: 5px;border-radius: 5px;text-align: center;">Email</div>'),
   ],
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
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

You can also create a virtual DOM and attach it to header cells:

```js
import { Grid, h } from "gridjs";
```

<CodeBlock children={
`
const grid = new Grid({
  columns: [
    h('b', {}, 'Name'),
    h('div', {
      style: {
        border: '1px solid #ccc',
        padding: '5px',
        'border-radius': '5px',
        'text-align': 'center',
      }
    }, 'Email'),
  ],
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
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
} live={true} scope={{ Grid, CodeBlock, useEffect, useRef, faker, h }} />
