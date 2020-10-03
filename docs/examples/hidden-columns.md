---
id: hidden-columns
title: Hidden Columns
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - hidden columns
---

import { LiveExample } from "../../lib/liveExample.js";

Add `hidden: true` to the columns definition to hide them. 

<LiveExample children={
`
const grid = new Grid({
  columns: [
      { 
        name: 'Name',
        hidden: true
      },
      'Email',
      'Title',
   ],
  sort: true,
  pagination: true,
  data: Array(50).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
    faker.name.title(),
  ])
});
`
} />

<br/>

:::note
Enabling the `hidden` flag only affects the rendering process of your Grid.js instance. Hidden columns are still searchable. 
:::