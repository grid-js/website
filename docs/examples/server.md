---
id: server
title: Import server-side data
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - server side
 - server side data
---

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";

You can use the `server` property to load data from a remote server and populate the table:

<CodeBlock children={
`
const grid = new Grid({
  columns: ['Name', 'Language', 'Released At', 'Artist'],
  server: {
    url: 'https://api.scryfall.com/cards/search?q=Inspiring',
    then: data => data.data.map(card => [card.name, card.lang, card.released_at, card.artist])
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
