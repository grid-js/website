---
id: hello-world
title: Hello, World!
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
---

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";

:::tip
You can interact with the following editor!
:::

<CodeBlock children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  ]
});
`
}
 transformCode={(code) => 
`
function () {
  ${code}
  
  useEffect(() => {
    grid.render(document.getElementById('wrapper'));
  });
  
  return (
    <div id="wrapper" />
  );
}
`
} live={true} scope={{ Grid, CodeBlock, useEffect }} />

<br/>

Or you can update the config using `updateConfig`:

<CodeBlock children={
`
const grid = new Grid({
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  ]
}).updateConfig({
  columns: ['Name', 'Email', 'Phone Number'],
});
`
}
 transformCode={(code) => 
`
function () {
  const wrapper = useRef(null);
  
  ${code}
  
  useEffect(() => {
    grid.render(wrapper.current);
  });
  
  return (
    <div id="wrapper" ref={wrapper} />
  );
}
`
} live={true} scope={{ Grid, CodeBlock, useEffect, useRef }} />

