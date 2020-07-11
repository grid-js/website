---
id: fixed-header
title: Fixed Header 
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - fixed header
---

import { LiveExample } from "../../lib/liveExample.js";

Simply add `height` and `fixedHeader` to your Grid.js config object to enable fixed header feature:

<LiveExample children={
`
const grid = new Grid({
  columns: [
      'Name',
      'Email',
      'Title',
   ],
  sort: true,
  pagination: true,
  fixedHeader: true,
  height: '400px',
  data: Array(50).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
    faker.name.title(),
  ])
});
`
} />

<br/>
