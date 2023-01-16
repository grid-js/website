---
id: css-in-js
title: CSS-in-JS
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - styling
 - css in js
---

import { LiveExample } from "../../lib/liveExample.js";
import { css } from '@emotion/css';

You can use any CSS-in-JS frameworks with Grid.js. In this example, we are using [Emotion](https://emotion.sh/) to style
our Grid.js instance.

:::note
“CSS-in-JS” refers to a pattern where CSS is composed using JavaScript instead of defined in external files.
:::

Import your favorite CSS-in-JS tool first:

```js
import { css } from '@emotion/css';
```

And then use the `className` config to connect them together:

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
  ],
  className: {
    container: css\`
      * {
        font-family: 'Tahoma';
      }
    \`,
    table: css\`
      tr:hover td {
        background-color: rgba(0, 0, 0, 0.1);
      }
    \`,
    th: css\`
      text-align: center;
      &:hover {
        background-color: #999;
        color: #fff;
      }
    \`,
    td: css\`
      color: #999;
      &:hover {
        color: #000;
      }
    \`
  }
});
`
} scope={{ css }} />

<br/>

:::info
See [className](../config/className.md) config for more details.
:::
