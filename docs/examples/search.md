---
id: search
title: Search
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - search
 - table search
 - row search
---

import { LiveExample } from "../../lib/liveExample.js";

Grid.js supports global search on all rows and columns. Set `search: true` to enable the search plugin:

<LiveExample children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  search: true,
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
    ['Nisen', 'nis900@gmail.com',   '313 333 1923']
  ]
});
`
} />

<br />

Or you can pass an object to customize the search plugin:


<LiveExample children={
`
const grid = new Grid({
  columns: [
   {
     name: 'Name',
     formatter: (cell) => cell.firstName
   }, 
   'Email',
   'Phone Number'
  ],
  search: {
    selector: (cell, rowIndex, cellIndex) => cellIndex === 0 ? cell.firstName : cell
  },
  data: [
    [{ firstName: 'John', lastName: 'MP' }, 'john@example.com', '(353) 01 222 3333'],
    [{ firstName: 'Mark', lastName: 'Blue' }, 'mark@gmail.com',   '(01) 22 888 4444'],
    [{ firstName: 'Eoin', lastName: 'Kavanagh' }, 'eo3n@yahoo.com',   '(05) 10 878 5554'],
    [{ firstName: 'Megan', lastName: 'Niesen' }, 'nis900@gmail.com',   '313 333 1923']
  ]
});
`
} />

:::tip
Using the `selector` function, you can select or customize each cell's content for the search plugin. For instance,
if you have a nested object and you need to select a particular field to apply the search functionality to.
:::
