---
id: loading-state
title: Loading State
---

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect } from "react";

Grid.js renders a loading bar automatically while it waits for the data to be fetched. Here we are using an async 
function to demonstrate this behaviour (e.g. an async function can be a XHR call to a server backend)

<CodeBlock children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  sort: true,
  search: true,
  data: () => {
    return new Promise(resolve => {
      setTimeout(() =>
        resolve([
          ['John', 'john@example.com', '(353) 01 222 3333'],
          ['Mark', 'mark@gmail.com', '(01) 22 888 4444']
        ]), 2000);
    });
  }
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

:::note
Other operations like searching and sorting happens immediately because the data has already been imported and cached
by the Grid.js pipeline. We only pay the cost of importing initial data (`setTimeout` in this case)
:::
