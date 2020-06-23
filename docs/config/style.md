---
id: style
title: style 
---

To add CSS styles to a Grid.js instance

 - `optional`
 - Type: `object`
 - Example: [CSS Styling](../examples/css-style.md)

`style` type has the following properties:

<div className="full-width">

| Name                       | Description                       |  Type  |
|----------------------------|-----------------------------------|--------|
| container `optional`       | CSS style of the main container   | object |
| table `optional`           | CSS style of table                | object |
| td `optional`              | CSS style of the TD elements      | object |
| th `optional`              | CSS style of the TH elements      | object |
| header `optional`          | CSS style of the header container | object |
| footer `optional`          | CSS style of the footer container | object |

</div>

```js
new Grid({
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  ],
  style: {
    td: {
      border: '1px solid #ccc'
    },
    table: {
      'font-size': '15px'
    }
  }
});
```
