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

import { LiveExample } from "../../lib/liveExample.js";

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

<LiveExample children={
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
} />

<br/>

:::tip
Explore [Preact's documentation](https://preactjs.com/guide/v10/components) for more details.
:::
