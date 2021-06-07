---
title: Configuration 
---

In order to use a Grid.js instance, you need to configure it first. Grid.js accepts a configuration object which can be updated using:

 - `Grid` constructor
 - `updateConfig` method


## `Grid` constructor

Simply pass your configuration object to the `Grid` constructor to configure the instance. It is possible to update this
config later on.

```js
new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  ]
});
```

:::info
A full list of config object properties is defined in the [Config](./config/data.md) section of this document
:::


## `updateConfig`

It is also possible to create an empty Grid.js instance and update the configs later on (and before calling the `render` method):

```js
new Grid().updateConfig({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  ]
});
```

Or to just simply update an existing key in the config object:

```js
new Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    ['John', 'john@example.com', '(353) 01 222 3333'],
    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
  ]
}).updateConfig({
  // lets update the columns field only
  columns: ['First Name', 'Email', 'Phone']
});
```

:::tip
The [examples directory](./examples/hello-world.md) has an interactive editor that 
you can use to see the effect config properties live.
:::

