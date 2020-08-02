---
id: custom-http-client
title: Custom HTTP client 
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - datasource
 - http client
---

import { LiveExample } from "../../lib/liveExample.js";

You can customize `ServerStorage` class and use your own HTTP client (or SDK) to send the HTTP calls. Simply use `data` property
and return a Promise object that conforms to `StorageResponse` format (https://github.com/grid-js/gridjs/blob/master/src/storage/storage.ts#L21-L24).

In this example, we are implementing our own HTTP client (instead of default `fetch` API that ServerStorage provides):

<LiveExample children={
`
const grid = new Grid({
  columns: ['Name', 'Language', 'Released At', 'Artist'],
  server: {
    url: 'https://api.scryfall.com/cards/search?q=Inspiring',
    data: (opts) => {
      return new Promise((resolve, reject) => {
        // let's implement our own HTTP client
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState === 4) {
            if (this.status === 200) {
              const resp = JSON.parse(this.response);
 
              // make sure the output conforms to StorageResponse format: 
              // https://github.com/grid-js/gridjs/blob/master/src/storage/storage.ts#L21-L24
              resolve({
                data: resp.data.map(card => [card.name, card.lang, card.released_at, card.artist]),
                total: resp.total_cards,
              });
            } else {
              reject();
            }
          }
        };
        xhttp.open("GET", opts.url, true);
        xhttp.send();
      });
    }
  },
  pagination: {
    limit: 5
  }
});
`
} />
