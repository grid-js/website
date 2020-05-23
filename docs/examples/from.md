---
id: from
title: From HTML Table 
---

In this examples, we load the data from an existing HTML table

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect } from "react";

<CodeBlock children={
`
function () {
  useEffect(() => {
    const grid = new Grid({
      from: document.getElementById('myTable')
    }).render(document.getElementById('wrapper'));
  });
  
  return (
    <>
      <table id="myTable">
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
      <div id="wrapper" />
    </>
  );
}
`
} live={true} scope={{ Grid, CodeBlock, useEffect }} />

