---
title: Plugin basics
---

Grid.js is a modular JavaScript framework which allows you to add custom plugins to it or remove the existing ones.
In this article, we talk about what is a Grid.js plugin and how to develop one.

## Introduction

Grid.js uses [Preact](https://preactjs.com/) under the hood to render the table and other components like search, pagination, etc. 
A Grid.js plugin is a [Preact Functional Component](https://preactjs.com/guide/v10/components/#functional-components) that render a Virtual Node. This interface is very similar to a React component. 

Once you have a component that can render an element, then you can add it to the list of Grid.js plugin and Grid.js will
take care of rendering your plugin.

A [Plugin](https://github.com/grid-js/gridjs/blob/master/src/plugin.ts) has following properties:

```ts
interface Plugin<T extends FunctionComponent> {
  id: string;
  position: PluginPosition;
  component: T;
  order?: number;
}
```

Where `id` is a unique string, `position` defines where that plugin should be rendered and there is an optional `order`
property to change the ordering of plugins in a specific plugin position (e.g. header).

## Plugin Position

Grid.js can render a plugin in different positions. Simply import `PluginPosition` enum from `gridjs` package and use it
when you are calling the `plugin.add(...)` function:

```js
import { PluginPosition } from "gridjs";
```

:::tip
If you need to render your plugin in a position that doesn't already exist, please open a GitHub issue and we will add
a new PluginPosition!
:::

## Adding a Plugin

Adding a plugin to a Grid.js instance is as easy as calling `gridjs_instance.plugin.add(...)`, for instance:

```js
grid.plugin.add({
  id: 'myplugin',
  component: MyPlugin,
  position: PluginPosition.Header,
});
```

Note that `position` and `id` are mandatory fields and `component` is the actual plugin function that we want to render.
You can render the same plugin multiple times by calling the `plugin.add()` function and passing an unqiue ID.

## Adding a Plugin using React Wrapper
Just use the ```plugins``` property to add all plugin that you want.

```js
<Grid
  ...
  plugins={[{
    id: 'myplugin',
    component: MyPlugin,
    position: PluginPosition.Header,
    order: 1
  }]}

/>
```

## Ordering of plugins

You can pass an optional `order` property to `plugin.add()` to define the ordering of your components:

```js
grid.plugin.add({
  id: 'myfirstplugin',
  component: MyPlugin,
  position: PluginPosition.Header,
  order: 1,
});

grid.plugin.add({
  id: 'mysecondplugin',
  component: MyPlugin,
  position: PluginPosition.Header,
  order: 2,
});
```

In above example, `myfirstplugin` renders first and then `mysecondplugin` will be rendered.


Now, let's take a look at writing a simple plugin.
