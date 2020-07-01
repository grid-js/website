---
id: import-async
title: Async data import
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - async
 - async function 
---

import { LiveExample } from "../../lib/liveExample.js";

The `data` attribute accepts an `async` function, too. This is useful for making any external HTTP calls and loading
data from a server. 

Here we have passed a function to the `data` attribute which returns a `Promise` object and resolves
the data after 1 second:

<LiveExample children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  data: () => {
    return new Promise(resolve => {
      setTimeout(() =>
        resolve([
          ['John', 'john@example.com', '(353) 01 222 3333'],
          ['Mark', 'mark@gmail.com', '(01) 22 888 4444']
        ]), 1000);
    });
  }
});
`
} />
