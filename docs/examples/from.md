---
id: from
title: From HTML Table 
---

To load the data from an existing HTML table:

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect } from "react";

<CodeBlock children={
`
const grid = new Grid({
  data: [[1, 2, 3], [4, 5, 6]]
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

