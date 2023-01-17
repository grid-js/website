---
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

import { LiveExample } from "../../../lib/liveExample.js";
import { RowSelection } from "gridjs/plugins/selection";

You can also subscribe to the `RowSelection` store and receive updates as soon as a row is checked or unchecked:

<LiveExample children={
`
const grid = new Grid({
  columns: [
      {
        id: 'awesomeCheckbox',
        name: 'Select',
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
  
// subscribe to the store events
grid.config.store.subscribe(function (state) {
  console.log('checkbox updated', state.rowSelection);
})
`
} scope={{RowSelection}} />
