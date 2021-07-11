---
id: event-handler
title: Events
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - event handler
---

import { LiveExample } from "../../lib/liveExample.js";

Grid.js has a global EventEmitter object which is used to emit events throughout the application lifecycle.
Simply, use the `on` method to capture and bind a function to events.

Open your **developer tools console** to see the logs:

<LiveExample children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  sort: true,
  search: true,
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
    ['Nisen', 'nis900@gmail.com',   '313 333 1923']
  ]
});
   
grid.on('rowClick', (...args) => console.log('row: ' + JSON.stringify(args), args));
grid.on('cellClick', (...args) => console.log('cell: ' + JSON.stringify(args), args));
`
} />

<br/>

:::tip
See a full list of Grid.js global events on [event.ts](https://github.com/grid-js/gridjs/blob/master/src/view/events.ts) and
table events on [eventTable](https://github.com/grid-js/gridjs/blob/master/src/view/table/events.ts)

:::
