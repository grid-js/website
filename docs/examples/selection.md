---
id: selection
title: Selection 
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - checkbox
 - cell checkbox
 - row selection 
 
---

Selection plugin enables users to select rows or cells. You can then retrieve the selected rows/cells from the plugin store.

## Install

Install the `gridjs-selection` package using yarn/npm:

```bash
npm install gridjs-selection --save
```

or use a CDN:

```html
<script src="https://unpkg.com/gridjs-selection/dist/gridjs-selection.production.min.js"></script>
```

then import the `RowSelection` plugin:

```js
import { RowSelection } from "gridjs-selection";
```

In UMD, `gridjs-selection` plugin globally exposed `gridjs.selection`, e.g:

```js
gridjs.selection.RowSelection
```

