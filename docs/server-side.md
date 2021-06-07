---
title: Server-side setup
---

import { Grid } from "gridjs";
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useRef } from "react";

Grid.js supports server-side storage by default which basically takes care of sending HTTP calls to a server backend, pulling and
parsing the results and feeding the pipeline with the received data. 

In addition to that, components like search, sort and pagination 
can be connected to a server-side backend. Simply add `server` option to the existing plugin configurations to enable server-side functionality.

Lets setup a Grid.js instance that pulls from a server-side API.

## `server` config

First of all, make sure you have defined the generic `server` config in your Grid.js instance:

```js {3-8}
const grid = new Grid({
  columns: ['Title', 'Director', 'Producer'],
  server: {
    url: 'https://swapi.dev/api/films/',
    then: data => data.results.map(movie => 
      [movie.title, movie.director, movie.producer]
    )
  } 
});
```

Here we are basically telling the instance that:

 - Our data source is a `ServerStorage` (instead of in-memory storage).
 - The base URL is `https://swapi.dev/api/films/`
 - Once we have received the data, let's feed the table with `movie.title`, `movie.director` and `movie.producer` which is
 our table columns (`then` function)
 
The HTTP method is implicitly set to `GET` but we can change it to `POST` using the `method` property:

```js {4}
const grid = new Grid({
  server: {
    method: 'POST',
    // ...
  } 
});
```

At this point, we have a fully functional server-side table, lets take a look!

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

Awesome! Now lets take a look at the search plugin.

## Client-side search

Using Grid.js, you can pull your data from a server-side backend and let the **client-side search** handle the search functionality.
Grid.js is smart enough to understand that you want to pull the data once and then run the search on existing rows:

<CodeBlock children={
`
const grid = new Grid({
  search: true,
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

:::tip
In this example, we are pulling the data once and only during the initial load of the library.
:::

Great! Now, lets connect the search plugin to the server.

## Server-side search

All Grid.js plugins support server-side storage. All you need to do is defining the behaviour of each component using the
`url` or `body` parameters:

```js {3}
search: {
  server: {
    url: (prev, keyword) => `${prev}?search=${keyword}`
  }
}
```

In this example, we are telling the search plugin to refine the base URL (defined in the main `server` section) and append
the keyword to base URL. `prev` is the base URL (or the URL received from the previous step of the pipeline) and `keyword`
is the actual keyword input by the user.

This is the final version of our config that includes the server-side search:

<CodeBlock children={
`
const grid = new Grid({
  search: {
    server: {
      url: (prev, keyword) => \`\${prev}?search=\${keyword}\`
    }
  },
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
Check out the "Server-side" section of the examples for more details.
:::
