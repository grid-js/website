---
id: writing-plugin
title: Writing a Plugin
---

import { LiveExample } from "../../lib/liveExample.js";

In this section, we will explore different ways to write a Grid.js plugin. 

## Using a class

Grid.js has a `BaseComponent` class which is used everywhere to ensure that all components are receiving the same set of
internal properties and functions. Simply extend this class and add your own functionality to develop a new plugin.

First of all, import both `BaseComponent` and `BaseProps` from `gridjs`:

```js
import { BaseComponent, BaseProps, h } from "gridjs";
```

Then, create a new class and extend `BaseComponent`:

```js
class MyPlugin extends BaseComponent {
  render() {
    return h('h1', {}, 'Hello World!');
  }
}
```

<LiveExample children={
`
class MyPlugin extends BaseComponent {
  render() {
    return h('h1', {}, 'Hello World!');
  }
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
  component: h(MyPlugin, {}),
  position: PluginPosition.Header,
});
`
} />

## Using a function

You can also write a simple function that returns a VNode and renders the component:

```js
import { h } from "gridjs";
```

<LiveExample children={
`
function MyPlugin() {
  return h('h1', {}, 'Hello world!');
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
  component: h(MyPlugin, {}),
  position: PluginPosition.Header,
});
`
} />

