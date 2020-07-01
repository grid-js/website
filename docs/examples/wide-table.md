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
