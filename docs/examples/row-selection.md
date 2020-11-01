---
id: row-selection 
title: Row selection
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - checkbox
 - cell checkbox
 - row selection 
 
---

import { LiveExample } from "../../lib/liveExample.js";
import { RowSelection } from "gridjs-selection";

## Install

Install the `gridjs-selection` package using yarn/npm:

```bash
npm install gridjs-selection --save
```

or use a CDN:

```html
<script src="https://unpkg.com/gridjs-selection/dist/gridjs-selection.production.min.js"></script>
```

then import the `RowSelection` plugin:

```js
import { RowSelection } from "gridjs-selection";
```

In UMD, `gridjs-selection` plugin globally exposed `gridjs.selection`, e.g:

```js
gridjs.selection.RowSelection
```

## Example

Add a new column to your table definition and install the plugin:

<LiveExample children={
`
const grid = new Grid({
  columns: [
      {
        id: 'myCheckbox',
        name: 'Select',
        plugin: {
          // install the RowSelection plugin
          component: RowSelection,
          // RowSelection config
          props: {
            // use the "email" column as the row identifier
            id: (row) => row.cell(2).data
          }
        }
      },
      { 
        name: 'Name',
        formatter: (cell) => \`Name: \${cell}\`
      },
      'Email',
  ],
  sort: true,
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
  ])
});
`
} scope={{RowSelection}} />

:::note
In the example above, the 3rd cell (which is `row.cell(2).data`) has been selected as the row identifier which is 
the "Email" field. Note that the first cell is the checkbox column.
:::

## Events

You can also subscribe to the `RowSelection` store and receive updates as soon as a row is checked or unchecked:

<LiveExample children={
`
const grid = new Grid({
  columns: [
      {
        id: 'awesomeCheckbox',
        name: 'Select',
        plugin: {
          component: RowSelection,
          props: {
            id: (row) => row.cell(2).data
          }
        }
      },
      { 
        name: 'Name',
        formatter: (cell) => \`Name: \${cell}\`
      },
      'Email',
  ],
  sort: true,
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
  ])
});
  
grid.on('ready', () => {
  // find the plugin with the give plugin ID
  const checkboxPlugin = grid.config.plugin.get('awesomeCheckbox');
  
  // subscribe to the store events
  checkboxPlugin.props.store.on('updated', function (state, prevState) {
    console.log('checkbox updated', state, prevState);
  });
})
`
} scope={{RowSelection}} />


