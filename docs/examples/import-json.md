---
id: import-json
title: JSON
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - import json
---

import { Grid } from "gridjs/dist/gridjs.development.es.js";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";

In order to import JSON (or an array of objects), simply change the data input to `[{ key: value }, ... ]`. 
Grid.js expects each column to have a unique `id` field which matches the keys in the `data` object:

<CodeBlock children={
`
const grid = new Grid({
  columns: [{
     id: 'name',
     name: 'Name'
  }, {
     id: 'email',
     name: 'Email'
  }, {
     id: 'phoneNumber',
     name: 'Phone Number'
  }],
  data: [
    { name: 'John', email: 'john@example.com', phoneNumber: '(353) 01 222 3333' },
    { name: 'Mark', email: 'mark@gmail.com', phoneNumber: '(01) 22 888 4444' },
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

<br />

:::tip
Grid.js tries to guess the `id` of columns by camelCasing them if column ID is not defined.

E.g. `Phone Number` becomes `phoneNumber`
:::

<CodeBlock children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    { name: 'John', email: 'john@example.com', phoneNumber: '(353) 01 222 3333' },
    { name: 'Mark', email: 'mark@gmail.com', phoneNumber: '(01) 22 888 4444' },
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

<br />

You can also leave the `columns` config empty if you want Grid.js to set the column names automatically:

<CodeBlock children={
`
const grid = new Grid({
  data: [
    { name: 'John', email: 'john@example.com', phoneNumber: '(353) 01 222 3333' },
    { name: 'Mark', email: 'mark@gmail.com', phoneNumber: '(01) 22 888 4444' },
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

