---
id: wide-table
title: Wide Table
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - wide table
 - large
 - wide
---

import { LiveExample } from "../../lib/liveExample.js";

Grid.js supports wide tables, too:



<LiveExample children={
`
const grid = new Grid({
  columns: [
      'Name',
      'Email',
      'Title',
      'Company',
      'Country',
      'County',
   ],
  sort: true,
  pagination: true,
  data: Array(50).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
    faker.name.title(),
    faker.company.companyName(),
    faker.address.country(),
    faker.address.county(),
  ])
});
`
} />

<br/>

:::tip
Grid.js automatically calculates the width of columns when `autoWidth` is set to `true`
:::

You can also change the way column widths are calculated. In this example, we are adding `white-space: nowrap` to the entire
table:

<LiveExample children={
`
const grid = new Grid({
  columns: [
      'Name',
      'Email',
      'Title',
      'Company',
      'Country',
      'County',
   ],
  style: { 
    table: { 
      'white-space': 'nowrap'
    }
  },
  sort: true,
  pagination: true,
  data: Array(50).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
    faker.name.title(),
    faker.company.companyName(),
    faker.address.country(),
    faker.address.county(),
  ])
});
`
} />

<br/>
