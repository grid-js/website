---
id: custom-sort
title: Custom sort
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - sort
 - custom sort
 - sorting 
---

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";

You can customize the sort plugin by using the `compare` function. Each column accepts a custom `compare` function.
In this example, we are sorting the "Phone Number" column based on the _last 4 digits_:

<CodeBlock children={
`
const grid = new Grid({
  columns: [
    'Name',
    'Email',
    { 
      name: 'Phone Number',
      sort: {
        compare: (a, b) => {
          const code = (x) => x.split(' ').slice(-1)[0];
          
          if (code(a) > code(b)) {
            return 1;
          } else if (code(b) > code(a)) {
            return -1;
          } else {
            return 0;
          }
        }
      }
    }
  ],
  sort: true,
  data: [
    ['John', 'john@example.com', '+353 40 222 3333'],
    ['Mark', 'mark@gmail.com',   '+1 22 888 4444'],
    ['Eoin', 'eo3n@yahoo.com',   '+355 10 878 5554'],
    ['Nisen', 'nis900@gmail.com',   '+313 333 1923']
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
