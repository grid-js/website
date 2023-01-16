---
id: force-render
title: forceRender
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - force render
---

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";


Using `updateConfig()` and `forceRender()` functions, you can update the config of an existing instance and re-render the
container.

In this example, we render a Grid.js instance, and then we attempt to update the config object and re-render it after 2 seconds:

<CodeBlock children={
`
function () {
  const wrapper = useRef(null);
  
  useEffect(() => {
    // initial setup
    const grid = new Grid({
      columns: ['Name', 'Email', 'Phone Number'],
      data: [
        ['John', 'john@example.com', '(353) 01 222 3333'],
      ]
    }).render(wrapper.current);
    
    setTimeout(() => {
      // lets update the config
      grid.updateConfig({
        search: true,
        data: [
          ['John', 'john@example.com', '(353) 01 222 3333'],
          ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
        ]
      }).forceRender();
    }, 2000);
  }, []);
  
  return (
    <div ref={wrapper} />
  );
}
`
} live={true} scope={{ Grid, CodeBlock, useEffect, useRef }} />
