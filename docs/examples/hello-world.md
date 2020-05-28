---
id: hello-world
title: Hello, World!
---

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect } from "react";

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

