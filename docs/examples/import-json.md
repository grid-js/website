---
id: import-json
title: JSON
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - import json
---

import { LiveExample } from "../../lib/liveExample.js";

In order to import JSON (or an array of objects), simply change the data input to `[{ key: value }, ... ]`. 
Grid.js expects each column to have a unique `id` field which matches the keys in the `data` object:

<LiveExample children={
`
const grid = new Grid({
  columns: [{
     id: 'name',
     name: 'Name'
  }, {
     id: 'email',
     name: 'Email'
  }, {
     id: 'phoneNumber',
     name: 'Phone Number'
  }],
  data: [
    { name: 'John', email: 'john@example.com', phoneNumber: '(353) 01 222 3333' },
    { name: 'Mark', email: 'mark@gmail.com', phoneNumber: '(01) 22 888 4444' },
  ]
});
`
} />

<br />

:::tip
Grid.js tries to guess the `id` of columns by camelCasing them if column ID is not defined.

E.g. `Phone Number` becomes `phoneNumber`
:::

<LiveExample children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    { name: 'John', email: 'john@example.com', phoneNumber: '(353) 01 222 3333' },
    { name: 'Mark', email: 'mark@gmail.com', phoneNumber: '(01) 22 888 4444' },
  ]
});
`
} />

<br />

You can also leave the `columns` config empty if you want Grid.js to set the column names automatically:

<LiveExample children={
`
const grid = new Grid({
  data: [
    { name: 'John', email: 'john@example.com', phoneNumber: '(353) 01 222 3333' },
    { name: 'Mark', email: 'mark@gmail.com', phoneNumber: '(01) 22 888 4444' },
  ]
});
`
} />

<br />

`id` field accepts a function as well. If you have a complex JSON object, pass a function to `id` and try to refine and format your data:

<LiveExample children={
`
const grid = new Grid({
  columns: [{
    data: (row) => row.name.first,
    name: 'First Name'
  }, {
    data: (row) => row.name.last,
    name: 'Last Name'
  }, {
    id: 'email',
    name: 'Email'
  }, {
    id: 'phoneNumber',
    name: 'Phone Number'
  }],
  data: [{
      name: {
        first: 'John',
        last: 'Murphy'
      },
      email: 'john@example.com',
      phoneNumber: '(353) 01 222 3333'
    },
    {
      name: {
        first: 'Mark',
        last: 'Wiens'
      },
      email: 'mark@gmail.com',
      phoneNumber: '(01) 22 888 4444'
    },
  ]
});
`
} />
