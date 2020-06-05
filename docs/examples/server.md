---
id: server
title: Server Side
---

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";

You can use the `server` property to load data from a remote server and populate the table:

<CodeBlock children={
`
const grid = new Grid({
  columns: ['Title', 'Director', 'Producer'],
  server: {
    url: 'https://swapi.dev/api/films/',
    then: data => data.results.map(movie => [movie.title, movie.director, movie.producer])
  } 
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

<br/>

:::note
You can also use the `data` attribute, pass an async function and your favorite Ajax/XHR client to send
the request and feed the table, see [Async data import](./import-async.md).
:::
