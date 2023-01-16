---
id: data
title: data 
---

To define the rows and columns of the table.

 - `optional` (either `data`, `from` or `server` must be provided)
 - Type: `TCell[][]`, `{ [key: string]: TCell }[]` or `Function`
 - Example: [Hello World](../examples/hello-world.md), [Import JSON](../examples/import-json.md), [Async import](../examples/import-async.md) and [Dynamic import](../examples/import-function.md)

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

or

```js
new Grid({
  data: [
    { name: 'John', email: 'john@example.com' },
    { name: 'Mark', email: 'mark@gmail.com' },
    { name: 'Eoin', email: 'eo3n@yahoo.com' },
    { name: 'Nisen', email: 'nis900@gmail.com' }
  ]
});
```
