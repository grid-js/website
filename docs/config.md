---
id: config
title: Config 
---

Grid.js accepts a configuration object which has the following properties.

:::tip
The [examples directory](./examples/hello-world.md) has an interactive editor that 
you can use to see the effect config properties live.
:::

## `data`

To define the rows and columns of the table.

 - `optional` (either `data` or `from` must be provided)
 - Type: `T[][]`
 - Example: [Hello World](./examples/hello-world.md)

```js
new Grid({
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
    ['Nisen', 'nis900@gmail.com',   '313 333 1923']
  ]
});
```

## `from`

To parse and populate data from an existing HTML table

 - `optinoal` (either `data` or `from` must be provided)
 - Type: `HTMLElement`
 - Example: [From HTML table](./examples/from.md)

## `columns`

To define the columns of the table

 - `optional` (you can render a table without the header)
 - Type: `string[]` or `TColumn[]`

```js
new Grid({
  columns: ["Name", "Email", "Phone Number"]
});
```

or

```js
new Grid({
  columns: [{
    name: "Name",
    sort: true,
  }, {
    name: "Email"
  }, {
    name: "Phone Number",
    width: '50%'
  }]
});
```

`TColumn` type has the following properties:

| Name             | Description            |  Type   | Example          |
|------------------|------------------------|---------|------------------|
| name             | column name            | string  | `Name`           |
| width `optional` | width of the column    | string  | `200px` or `30%` |
| sort `optional`  | to enable/disable sort | boolean | `true` or `0`    |


## `width`

To set the width of the table

 - Default: `100%`
 - Type: `string`

## `autoWidth`

To calculate the width of each column automatically

 - Default: `true`
 - Type: `boolean`
 
## `search`

To enable or disable the global search plugin

 - `optional`
 - Type: `boolean` or `SearchConfig`
 - Example: [Search](./examples/search.md)

`SearchConfig` type has the following properties:

| Name                   | Description                  |  Type   | Example             |
|------------------------|------------------------------|---------|---------------------|
| enabled                | to enable/disable the plugin | boolean | `true` or `false`   |
| keyword `optional`     | to initiate with a keyword   | string  | `John`              |
| placeholder `optional` | to enable/disable sort       | string  | `Type a keyword...` |

```js
new Grid({
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
    ['Nisen', 'nis900@gmail.com',   '313 333 1923']
  ],
  search: {
    enabled: true,
    placeholder: 'Search...'
  }
});
```

## `pagination`

To enable the pagination plugin

 - `optional`
 - Type: `boolean` or `PaginationConfig`
 - Example: [Pagination](./examples/pagination.md)

`PaginationConfig` type has the following properties:

| Name                    | Description                         |  Type   |
|-------------------------|-------------------------------------|---------|
| enabled                 | to enable/disable pagination        | boolean |
| limit `optional`        | rows per page                       | number  |
| page `optional`         | initial page                        | number  |
| summary `optional`      | to show/hide the pagination summary | boolean |
| nextButton `optional`   | to show/hide the next button        | boolean |
| prevButton `optional`   | to show/hide the previous button    | boolean |
| buttonsCount `optional` | number of buttons to display        | number  |

```js
new Grid({
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
    ['Nisen', 'nis900@gmail.com',   '313 333 1923']
  ],
  pagination: {
    enabled: true,
    limit: 2,
    summary: false
  }
});
```
