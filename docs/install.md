---
title: Install
---

Grid.js comes in multiple formats including **UMD** and **ES module**:

 - gridjs.js
 - gridjs.modern.js
 - gridjs.umd.js
 - gridjs.module.js
 - theme/
 - i10n/
 - plugins/

Explore the project output on [https://unpkg.com/browse/gridjs/dist/](https://unpkg.com/browse/gridjs/dist/).

:::tip
You can either install Grid.js using NPM or directly include the JavaScript and CSS files from a CDN
:::

## Node.js

Grid.js is available as [`gridjs`](https://www.npmjs.com/package/gridjs) on NPM. To install the package:

```bash
npm install gridjs --save
```

Above command will install all the dependencies as well. Then include both JavaScript and CSS files:

```js
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
```

## Browser

Grid.js is also available on following CDNs and can be used directly.

### unpkg

You can download Grid.js from [unpkg.com/browse/gridjs/dist](https://unpkg.com/browse/gridjs/dist/).

Add both JavaScript and css files:

```html
<script type="module">
    import {
        Grid,
        html
    } from "https://unpkg.com/gridjs?module";
</script>
```

```html title="theme/mermaid.min.css"
<link href="https://unpkg.com/gridjs/dist/theme/mermaid.min.css" rel="stylesheet" />
```

You can also import the UMD format:

```html title="gridjs.umd.js"
<script src="https://unpkg.com/gridjs/dist/gridjs.umd.js"></script>
```

### jsdelivr

Grid.js is available on [jsdelivr.com/package/npm/gridjs](https://www.jsdelivr.com/package/npm/gridjs).

```html title="gridjs.umd.js"
<script src="https://cdn.jsdelivr.net/npm/gridjs/dist/gridjs.umd.js"></script>
```

```html title="theme/mermaid.min.css"
<link href="https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css" rel="stylesheet" />
```
