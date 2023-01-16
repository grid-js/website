---
id: css-classname
title: CSS ClassName
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - styling
 - css classname
---

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";

`className` config can be used to add CSS classNames to a Grid.js instance:

```js
new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  search: true,
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
    ['Nisen', 'nis900@gmail.com',   '313 333 1923']
  ],
  className: {
    td: 'my-custom-td-class',
    table: 'custom-table-classname'
  }
});
```

<br/>

:::info
See [className](../config/className.md) config for more details.
:::
