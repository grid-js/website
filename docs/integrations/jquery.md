---
id: jquery
title: jQuery
---

[jQuery wrapper](https://github.com/grid-js/gridjs-jquery) for Grid.js


## Install

Include jQuery and gridjs-jquery in the `<head>` tag:

```html
<script src="https://unpkg.com/jquery/dist/jquery.min.js"></script>
<script src="https://unpkg.com/gridjs-jquery/dist/gridjs.production.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://unpkg.com/gridjs/dist/theme/mermaid.min.css" />
```

or install using NPM:

```bash
npm install --save gridjs-jquery
```

**Note**: `gridjs-jquery` contains Grid.js package as well. You don't need to install it separately.

## Usage

Select your wrapper and call `Grid`:

```js
$("div#wrapper").Grid({
  columns: ['Name', 'Age', 'Email'],
  data: [
    ['John', 25, 'john@k.com'],
    ['Mark', 59, 'mark@e.com'],
    // ...
  ],
});
```

Live example: https://codesandbox.io/s/gridjs-jquery-jq4zf  

Grid.js can also convert an HTML table. Simply select the table with jQuery
and call `Grid`:

 ```js
$("table#myTable").Grid();
```

You can pass all Grid.js configs to the `Grid` function. 
See [Grid.js Config](https://gridjs.io/docs/config) for more details.
