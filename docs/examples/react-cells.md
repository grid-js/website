---
id: react-cells
title: React Component in cells
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - react
 - react component
---

import { LiveExample } from "../../lib/liveExample.js";
import { _ } from "gridjs-react";

Grid.js uses Preact to render the elements and that means that you can take advantage of Preact's Virtual DOM and render
complex cells. In this example, we want to render React components in the table cells.

First of all, make sure you have the React wrapper library, [`gridjs-react`](https://github.com/grid-js/gridjs-react), installed:

```bash
npm install gridjs-react --save
```

Then, import the `_` function from `gridjs-react` package:

```js
import { _ } from "gridjs-react";
```
 
And use it in your table header or body cells. Here is the finalized example:

<LiveExample children={
`
const grid = new Grid({
  columns: [
    'Name',
    { 
      name: 'Email',
      formatter: (cell) => _(<i>{cell}</i>)
    },
    'Actions'
  ],
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
    _(<button className={"py-2 px-4 border rounded-md text-white bg-blue-600"} onClick={() => alert('clicked!')}>Edit</button>)
  ])
});
`
} scope={{ _ }} />
