--
id: vue
title: 💚 Vue

<center><img src="https://user-images.githubusercontent.com/2541728/84843482-ffc31c00-b015-11ea-95e8-dc6fb3931ad5.png" alt="gridjs-vue logo" /></center>

Grid.js has a native Vue wrapper which can be used to create a Grid.js instance within a Vue app. Use the [gridjs-vue](https://github.com/grid-js/gridjs-vue) package to integrate your Vue app with Grid.js.

## Install

```sh
npm install gridjs-vue
```

## Component Registration

### Global Registration

```js
/* in `main.js` or wherever you specify your global components */
import Grid from 'gridjs-vue'

Vue.use(Grid)
```

### Local Registration

```vue
<script>
import Grid from 'gridjs-vue'

export default {
  components: {
    Grid
  }
}
</script>
```

## Usage

Pass `cols` (an array of column headers) and either `rows`, `from`, or `server` as a data source to the component. Everything else is optional.

Refer to [Grid.js documentation](https://gridjs.io/docs/config/) for specific configuration options.

### Example

```vue
<template>
  <grid
    :auto-width="autoWidth"
    :cols="cols"
    :from="from"
    :language="language"
    :pagination="pagination"
    :rows="rows"
    :search="search"
    :server="server"
    :sort="sort"
    :width="width"
  ></grid>
</template>

<script>
import Grid from 'gridjs-vue'

export default {
  name: 'MyTable',
  components: {
    Grid
  },
  data() {
    return {
      // REQUIRED:
      cols: ['col 1', 'col 2'], // array containing strings of column headers
      // AND EITHER an array containing row data
      rows: [
        ['row 1 col 1', 'row 1 col 2'],
        ['row 2 col 1', 'row 2 col 2']
      ],
      // OR a string of an HTML table selector to import
      from: '.my-element'
      // OR a server settings object
      server() ({
        url: 'https://api.com/search?q=my%20query',
        then: res => res.data.map(col => [col1.data, col2.data, col3.data, col4.data]),
        handle: res => res.status === 404 ? { data: [] } : res.ok ? res.json() : new Error('Something went wrong')
      }),

      // OPTIONAL:
      autoWidth: true / false, // boolean to automatically set table width
      language: {}, // localization dictionary object
      pagination: true / false || {}, // boolean or pagination settings object
      search: true / false || {}, // boolean or search settings object
      sort: true / false || {}, // boolean or sort settings object
      theme: 'mermaid', // string with name of theme or 'none' to disable
      width: '100%', // string with css width value
    }
  }
}
</script>
```

### Default options

```json
{
  "autoWidth": true,
  "cols": [""],
  "from": undefined,
  "language": undefined,
  "pagination": false,
  "rows": undefined,
  "search": false,
  "server": undefined,
  "sort": false,
  "theme": "mermaid",
  "width": "100%"
}
```
