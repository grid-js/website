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

import { LiveExample } from "../../lib/liveExample.js";

You can use the `server` property to load data from a remote server and populate the table:

<LiveExample children={
`
const grid = new Grid({
  columns: ['Name', 'Language', 'Released At', 'Artist'],
  server: {
    url: 'https://api.scryfall.com/cards/search?q=Inspiring',
    then: data => data.data.map(card => [card.name, card.lang, card.released_at, card.artist])
  } 
});
`
} />

<br/>

:::note
You can also use the `data` attribute, pass an async function and your favorite Ajax/XHR client to send
the request and feed the table, see [Async data import](./import-async.md).
:::
