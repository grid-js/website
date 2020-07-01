---
id: multi-sort
title: Multi column sort
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - multi sort
 - multi column sort
 - column sort
---

import { LiveExample } from "../../lib/liveExample.js";

Grid.js supports multi column sorting by default. Hold the `shift` key and click on multiple columns to activate it:

<LiveExample children={
`
const grid = new Grid({
  columns: [
    'Name',
    'Age',
    'Email',
  ],
  sort: true,
  data: [
    ['Mark',  25, 'john@example.com'],
    ['Nancy', 25, 'n99@gmail.com'],
    ['Eoin',  55, 'eo3n@yahoo.com'],
    ['Nisen', 60, 'nis900@gmail.com']
  ]
});
`
} />

<br/>

:::tip
Click on a sort button while you're holding the shift key to remove the sort from that column.
:::