---
title: Locales
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - i18n
 - l10n
 - localization
 - internationalization
 - language
 - lang
 
---

import { LiveExample } from "../../lib/liveExample.js";

Grid.js has support for various different languages:

 - en_US
 - es_ES
 - fr_FR
 - it_IT
 - tr_TR
 - id_ID

## Installing a Locale

Import your language file first:

```js
import { frFR } from "gridjs/l10n";
```

:::note
All locales are combined into one file. There is a UMD format for web-browsers as well: e.g. `gridjs/l10n/dist/l10n.umd.js`: 
https://unpkg.com/gridjs/l10n/dist/l10n.umd.js
:::

Then pass it to the `language` setting of your Grid.js:

<LiveExample children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Title'],
  sort: true,
  search: true,
  pagination: {
    limit: 5
  },
  data: Array(50).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
    faker.name.title(),
  ]),
  language: frFR
});
`
} />

Also, you can easily customize Grid.js messages and add your language. Simply extend the `language` config to replace the strings:

<LiveExample children={
`
const grid = new Grid({
  columns: ['Name', 'Email', 'Title'],
  sort: true,
  search: true,
  pagination: {
    limit: 5
  },
  data: Array(50).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
    faker.name.title(),
  ]),
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
`
} />

<br/>

## Creating a Locale

Copy the [en_US](https://github.com/grid-js/gridjs/blob/master/src/i18n/en_US.ts) file, update the values and send a PR!


