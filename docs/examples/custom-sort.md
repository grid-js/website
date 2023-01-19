---
id: custom-sort
title: Custom sort
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - sort
 - custom sort
 - sorting 
---

import { LiveExample } from "../../lib/liveExample.js";

You can customize the sort plugin by using the `compare` function. Each column accepts a custom `compare` function.
In this example, we are sorting the "Phone Number" column based on the _last 4 digits_:

<LiveExample children={
`
const grid = new Grid({
  columns: [
    'Name',
    'Email',
    { 
      name: 'Phone Number',
      formatter: (cell) => html(\`\<b>\${cell}</b>\`),
      sort: {
        compare: (a, b) => {
          const code = (x) => x.split(' ').slice(-1)[0];
          
          if (code(a) > code(b)) {
            return 1;
          } else if (code(b) > code(a)) {
            return -1;
          } else {
            return 0;
          }
        }
      }
    }
  ],
  sort: true,
  data: [
    ['John', 'john@example.com', '+353 40 222 3333'],
    ['Mark', 'mark@gmail.com',   '+1 22 888 4444'],
    ['Eoin', 'eo3n@yahoo.com',   '+355 10 878 5554'],
    ['Nisen', 'nis900@gmail.com',   '+313 333 1923']
  ]
});
`
} />

:::tip
In the example above, we are sorting the "Phone Number" column based on the _last 4 digits_!
:::
