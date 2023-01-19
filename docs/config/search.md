---
id: search
title: search 
---

To enable or disable the global search plugin

 - `optional`
 - Type: `boolean` or `SearchConfig`
 - Example: [Search](../examples/search.md) and [Server-side search](../examples/server-side-search.md)

`SearchConfig` type has the following properties:

<div className="full-width">

| Name                       | Description                    |  Type    | Example             |
|----------------------------|--------------------------------|----------|---------------------|
| keyword `optional`         | to initiate with a keyword     | string   | `John`              |
| server `optional`          | to enable server integration   | object   | [Server-side search](../examples/server-side-search.md) |
| debounceTimeout `optional` | search debounce timout         | number   | `1000` (1 second)   |
| selector `optional`        | to customize searchable fields | function | [Search](../examples/search.md)  |
| ignoreHiddenColumns `optional` | to avoid search inside hidden columns (default true)   | boolean  | `true` or `false`   |

</div>

```js
new Grid({
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
    ['Nisen', 'nis900@gmail.com',   '313 333 1923']
  ],
  search: true
});
```

<br/>

:::tip
You can customize the search placeholder using the `language` config. See [Locales](../localization/locales.md).
:::
