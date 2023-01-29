---
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

import { LiveExample } from "../../../lib/liveExample.js";
import { RowSelection } from "gridjs/plugins/selection";

:::tip
Install the `gridjs-selection` plugin if you haven't already. 
Follow the [installation manual](./index.md).
:::

## Example

In order to install the Selection plugin, add a new column to the `columns` list and instantiate the plugin:

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
        }
      },
      { 
        name: 'Name',
        formatter: (cell) => \`Name: \${cell}\`
      },
      'Email',
  ],
  sort: true,
  search: true,
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


## Selected rows

The selection plugin uses a Redux architecture and that means each selection instance has its own unique Store which keeps
the list of selected rows.

<LiveExample children={
`
const grid = new Grid({
  columns: [
      {
        id: 'selectRow',
        name: 'Select',
        // select all rows by default!
        data: () => true, 
        plugin: {
          component: RowSelection
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
  const checkboxPlugin = grid.config.plugin.get('selectRow');
  // read the selected rows from the plugin's store
  console.log('selected rows:', checkboxPlugin.props.store.state);
})
`
} scope={{RowSelection}} />

:::tip
Follow the [Advanced Plugin](../advanced-plugins.md) article to learn more about writing Grid.js plugins!
:::
