---
id: language
title: language 
---

To localize and update the messages used in Grid.js.

 - `optional`
 - Type: `{ [key: string]: string | (...args) => string }`
 - Example: [Internationalization](./examples/i18n.md)

```js
new Grid({
  // ...
  language: {
    'search': {
      'placeholder': '🔍 Search...'
    },
    'pagination': {
      'previous': '⬅️',
      'next': '➡️',
      'showing': '😃 Displaying',
      'results': () => 'Records'
    }
  }
});
```

<br/>

You can also import language files to use translations provided by the module.

```js
import { Grid, html, frFR } from "gridjs";

new Grid({
  // ...
  language: frFR
});
```

<br/>

:::tip
See [en_US](https://github.com/grid-js/gridjs/blob/master/packages/gridjs/src/i18n/en_US.ts) for a full list of messages.
:::
