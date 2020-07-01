---
id: import-xml
title: XML
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - import
 - import data
 - import xml
 - xml
---

import { LiveExample } from "../../lib/liveExample.js";

Using the `handler` callback you can parse and handle HTTP calls yourself. The default handler tries to cast the response
to a JSON format, but you can override it to parse the data in a different format.

In this example, we are parsing `https://gridjs.io/sitemap.xml` which is a XML formatted document:

<LiveExample children={
`
const grid = new Grid({
  sort: true,
  search: true,
  pagination: true,
  columns: ['Location', 'Change Frequency', 'Priority'],
  server: {
    url: 'https://gridjs.io/sitemap.xml',
    handle: (res) => {
      return res.text().then(str => (new window.DOMParser()).parseFromString(str, "text/xml"));
    },
    then: data => {
      return Array.from(data.querySelectorAll('url'))
        .map(row => [
          row.querySelector('loc').innerHTML,
          row.querySelector('changefreq').innerHTML,
          row.querySelector('priority').innerHTML,
        ]);
    }
  }
});
`
} />

<br/>
