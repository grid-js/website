---
title: Selection Plugin
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

Import the selection plugin from `gridjs/plugins/selection`:

```js
import { RowSelection } from "gridjs/plugins/selection";
```

or use a CDN to import the UMD format:

```html
<script src="https://unpkg.com/gridjs/plugins/selection/dist/selection.umd.js"></script>
```

:::tip
In UMD, the plugin globally exposed `gridjs.plugins.selection`, e.g:

```js
gridjs.plugins.selection.RowSelection
```
:::
