---
id: sort
title: sort 
---

To enable the sorting plugin. Sort has two config objects:

 - **Generic config:** to enable sort for all columns, enable multi column sort, server-side integration, etc.
 - **Column specific config:** to enable sort on a specific column, to set custom comparator function, etc.

## Generic sort config

 - `optional`
 - Type: `boolean` or `GenericSortConfig`
 - Example: [Sorting](../examples/sorting.md)

`GenericSortConfig` type has the following properties:

<div className="full-width">

| Name                    | Description                         |  Type         |
|-------------------------|-------------------------------------|---------------|
| multiColumn `optional`  | Enable/disable multi column sort    | boolean       |
| server `optional`       | Server-side integration             | ServerConfig  |

</div>

To simply enable sort for all columns:

```js
new Grid({
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
    ['Nisen', 'nis900@gmail.com',   '313 333 1923']
  ],
  sort: true
});
```

To disable multi column sorting:

```js
new Grid({
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],
    ['Nisen', 'nis900@gmail.com',   '313 333 1923']
  ],
  sort: {
    multiColumn: false
  }
});
```


## Column specific sort config

 - `optional`
 - Type: `boolean` or `SortConfig`
 - Example: [Custom sort](../examples/custom-sort.md)

`SortConfig` type has the following properties:

<div className="full-width">

| Name                    | Description                         |  Type              |
|-------------------------|-------------------------------------|--------------------|
| compare `optional`      | custom comparator function          | `Comparator<TCell>`|

</div>

To disable sort on a specific column:

```js
new Grid({
  columns: [
    'Name',
    'Email',
    { 
      name: 'Phone Number',
      sort: false
    }
  ],
  sort: true,
  data: [
    ['John', 'john@example.com', '+353 40 222 3333'],
    ['Mark', 'mark@gmail.com',   '+1 22 888 4444'],
  ]
});
```

Or to use a custom comparator on a column:

```js
new Grid({
  columns: [
    'Name',
    'Email',
    { 
      name: 'Phone Number',
      sort: {
        compare: (a, b) => {
          if (a > b) {
            return 1;
          } else if (b > a) {
            return -1;
          } else {
            return 0;
          }
        }
      }
    }
  ],
  sort: true,
  data: [
    ['John', 'john@example.com', '+353 40 222 3333'],
    ['Mark', 'mark@gmail.com',   '+1 22 888 4444'],
  ]
});
```
