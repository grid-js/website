---
id: install
title: Install
---

Grid.js comes in two formats, **UMD** and **ES module** and also in **production** and **development**:

 - gridjs.development.es.js
 - gridjs.development.js
 - gridjs.production.es.min.js
 - gridjs.production.min.js
 - theme/

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

```html title="gridjs.production.min.js"
<script src="https://unpkg.com/gridjs/dist/gridjs.production.min.js"></script>
```

```html title="theme/mermaid.min.css"
<link href="https://unpkg.com/gridjs/dist/theme/mermaid.min.css" rel="stylesheet" />
```

You can also import the Grid.js ES module directly in the browser:

```html
<script type="module">
  import {
    Grid,
    html
  } from "https://unpkg.com/gridjs/dist/gridjs.production.es.min.js";
</script>
```

### jsdelivr

Grid.js is available on [jsdelivr.com/package/npm/gridjs](https://www.jsdelivr.com/package/npm/gridjs).

```html title="gridjs.production.min.js"
<script src="https://cdn.jsdelivr.net/npm/gridjs/dist/gridjs.production.min.js"></script>
```

```html title="theme/mermaid.min.css"
<link href="https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css" rel="stylesheet" />
```

Visit the [Install](./install.md) page for more details.
