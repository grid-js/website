---
id: cell-formatting
title: Cell formatting
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - formatting
 - cell formatting
 
---

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";
import * as faker from 'faker';

You can customize cells and format them at runtime using `formatter` property:

<CodeBlock children={
`
const grid = new Grid({
  columns: [
      { 
        name: 'Name',
        formatter: (cell) => \`Name: \${cell}\`
      },
      'Email',
   ],
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
  ])
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
} live={true} scope={{ Grid, CodeBlock, useEffect, useRef, faker }} />

:::info
It is also possible to add HTML content to cells. See [Populating cells with HTML](html-cells.md).
:::

You can also get access to other cells in the same row:

<CodeBlock children={
`
const grid = new Grid({
  columns: [
      'Salary 1',
      'Salary 2',
      { 
        name: 'Sum',
        formatter: (_, row) => \`$\${(row.cells[0].data + row.cells[1].data).toLocaleString()} USD\`
      },
   ],
  data: Array(5).fill().map(x => [
    Math.round(Math.random() * 100000),
    Math.round(Math.random() * 100000),
    null
  ])
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
} live={true} scope={{ Grid, CodeBlock, useEffect, useRef, faker }} />

