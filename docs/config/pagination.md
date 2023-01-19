---
id: pagination
title: pagination 
---

To enable the pagination plugin

 - `optional`
 - Type: `boolean` or `PaginationConfig`
 - Example: [Pagination](../examples/pagination.md) and [Server-side pagination](../examples/server-side-pagination.md)

`PaginationConfig` type has the following properties:

<div className="full-width">

| Name                         | Description                                   |  Type         |
|------------------------------|-----------------------------------------------|---------------|
| limit `optional`             | rows per page                                 | number        |
| page `optional`              | initial page                                  | number        |
| summary `optional`           | to show/hide the pagination summary           | boolean       |
| nextButton `optional`        | to show/hide the next button                  | boolean       |
| prevButton `optional`        | to show/hide the previous button              | boolean       |
| buttonsCount `optional`      | number of buttons to display                  | number        |
| resetPageOnUpdate `optional` | to reset the pagination when table is updated | boolean       |
| server `optional`            | to enable server-side integration             | ServerConfig  |

</div>

```js
new Grid({
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
    ['Nisen', 'nis900@gmail.com',   '313 333 1923']
  ],
  pagination: {
    limit: 2,
    summary: false
  }
});
```
