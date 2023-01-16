---
id: className
title: className 
---

To add CSS classname to a Grid.js instance

 - `optional`
 - Type: `object`
 - Example: [CSS ClassName](../examples/css-classname.md) and [CSS-in-JS](../examples/css-in-js.md)

`className` type has the following properties:

<div className="full-width">

| Name                       | Description                       |  Type  |
|----------------------------|-----------------------------------|--------|
| container `optional`               | className of the main container   | string |
| table `optional`                   | className of table                | string |
| td `optional`                      | className of the TD elements      | string |
| th `optional`                      | className of the TH elements      | string |
| header `optional`                  | className of the header container | string |
| footer `optional`                  | className of the footer container | string |
| thead `optional`                   | className of the thead element | string |
| tbody `optional`                   | className of the tbody element | string |
| search `optional`                  | className of the search container | string |
| sort `optional`                    | className of the sort button | string |
| pagination `optional`              | className of the pagination container | string |
| paginationSummary `optional`       | className of the pagination summary | string |
| paginationButton `optional`        | className of pagination buttons | string |
| paginationButtonNext `optional`    | className of the pagination next button | string |
| paginationButtonCurrent `optional` | className of the pagination current button | string |
| paginationButtonPrev `optional`    | className of the pagination previous button | string |
| loading `optional`                 | className of the loading container | string |
| notfound `optional`                | className of the empty table container | string |
| error `optional`                   | className of the error container | string |

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
