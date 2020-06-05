---
id: from
title: From HTML Table 
---

In this examples, we load the data from an existing HTML table

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";

<CodeBlock children={
`
function () {
  const tableRef = useRef(null);
  const wrapperRef = useRef(null);
  
  useEffect(() => {
    const grid = new Grid({
      from: tableRef.current,
    }).render(wrapperRef.current);
  });
  
  return (
    <>
      <table ref={tableRef}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>Mike</td>
            <td>mike@example.com</td>
          </tr>
        </tbody>
      </table>
      <div ref={wrapperRef} />
    </>
  );
}
`
} live={true} scope={{ Grid, CodeBlock, useEffect, useRef }} />

