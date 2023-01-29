---
title: Writing a Plugin
---

import { LiveExample } from "../../lib/liveExample.js";

Grid.js Plugins are Preact Functional Components. Simply create a new functional component to render a plugin:

```js
import { h } from "gridjs";
```

```js
function MyPlugin () {
  return h('h1', {}, 'Hello World!');
}
```

:::tip
You don't have to use the `h` function to render elements if your bundler is set up to understand Preact JSX renderer:

```js
function MyPlugin () {
  return <h1>Hello World!</h1>;
}
```

See this guide for more details https://preactjs.com/guide/v10/getting-started#setting-up-jsx
:::

<LiveExample children={
`
function MyPlugin () {
  return h('h1', {}, 'Hello World!');
}
  
const grid = new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],
  ]
});
  
grid.plugin.add({
  id: 'myplugin',
  component: MyPlugin,
  position: PluginPosition.Header,
});
`
} />
