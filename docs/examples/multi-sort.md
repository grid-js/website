---
id: multi-sort
title: Multi column sort
---

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";

Grid.js supports multi column sorting by default. Hold the `shift` key and click on multiple columns to activate it:

<CodeBlock children={
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

:::tip
Click on a sort button while you're holding the shift key to remove the sort from that column.
:::