---
id: wide-table
title: Wide Table
---

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";
import * as faker from 'faker';

Grid.js supports wide tables, too:

<CodeBlock children={
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

<br/>

:::tip
Grid.js automatically calculates the width of columns when `autoWidth` is set to `true`
:::
