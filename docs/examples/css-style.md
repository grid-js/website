---
id: css-style
title: CSS Style
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - styling
 - css style
---

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";

You can easily customize your Grid.js instance and add CSS styles to it:

<CodeBlock children={
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
  style: {
    table: {
      border: '3px solid #ccc'
    },
    th: {
      'background-color': 'rgba(0, 0, 0, 0.1)',
      color: '#000',
      'border-bottom': '3px solid #ccc',
      'text-align': 'center'
    },
    td: {
      'text-align': 'center'
    }
  }
});
`
}
 transformCode={(code) => 
`
function () {
  ${code}
 
  const wrapperRef = useRef(null);
   
  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  
  return (
    <div ref={wrapperRef} />
  );
}
`
} live={true} scope={{ Grid, CodeBlock, useEffect, useRef }} />

<br/>

:::info
See [style](./config/style.md) config for more details.
:::
