---
id: className
title: className 
---

To add CSS classname to a Grid.js instance

 - `optional`
 - Type: `object`
 - Example: [CSS ClassName](./examples/css-classname.md) and [CSS-in-JS](./examples/css-in-js.md)

`className` type has the following properties:

<div className="full-width">

| Name                       | Description                       |  Type  |
|----------------------------|-----------------------------------|--------|
| container `optional`       | className of the main container   | string |
| table `optional`           | className of table                | string |
| td `optional`              | className of the TD elements      | string |
| th `optional`              | className of the TH elements      | string |
| header `optional`          | className of the header container | string |
| footer `optional`          | className of the footer container | string |

</div>

```js
new Grid({
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  ],
  className: {
    td: 'my-td-class',
    table: 'custom-table-class' 
  }
});
```
