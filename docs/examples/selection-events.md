---
id: selection-events
title: Selection events
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - checkbox
 - cell checkbox
 - row selection 
 - selection events
 
---

import { LiveExample } from "../../lib/liveExample.js";
import { RowSelection } from "gridjs-selection";

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
