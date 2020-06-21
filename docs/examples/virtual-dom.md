---
id: virtual-dom
title: Virtual DOM
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - preact
 - virtual DOM
 - vdom
---

import { Grid, h } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";
import * as faker from 'faker';

Grid.js uses Preact to render the elements and that means that you can take advantage of Preact's Virtual DOM and render
complex cells.

Simply, import `h` from the `gridjs` package:

```js
import { h } from "gridjs";
```

Then, create a custom Preact component:

```js
function bold(text) {
  return h('b', {}, text);
}
```

Finally, connect the component to Grid.js:

<CodeBlock children={
`
function bold(text) {
  return h('b', {}, text);
}
const grid = new Grid({
  columns: [
      'Name',
      'Email'
   ],
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    bold(faker.internet.email())
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
} live={true} scope={{ Grid, CodeBlock, useEffect, useRef, faker, h }} />

<br/>

:::tip
Explore [Preact's documentation](https://preactjs.com/guide/v10/components) for more details.
:::
