---
title: Advanced Plugins
---

import { LiveExample } from "../../lib/liveExample.js";

Now that we know how to write a basic Grid.js plugin, let's take a look at some complex examples.

## Using the pipeline

Grid.js has an internal pipeline which takes care of processing, filter and refining the raw data. You can get access to the current pipeline by using `config.pipeline` (via the `useConfig` hook) or you can use the `useSelector` hook to subscribe to a specific part of
Grid.js state.

In this example, we have a table of Name (string) and Salary (double) and our custom plugin is in charge of summing salaries
and displaying the total in the footer.

```js
import { useSelector } from "gridjs";
```

<LiveExample children={
`
function TotalSalaryPlugin() {
  const [total, setTotal] = useState(0);
  const data = useSelector((state) => state.data);
  
  useEffect(() => {
    if (!data) return;
    
    setTotal(data.toArray().reduce((prev, row) => prev + row[1], 0));
  }, [data]);
  
  return h('b', {}, \`Total: $\${total.toLocaleString()}\`);
}
const grid = new Grid({
  search: true,
  sort: true,
  columns: ['Name', 'Salary'],
  data: [
    ['John', Math.round(Math.random() * 100000)],
    ['Mark', Math.round(Math.random() * 100000)],
    ['Josh', Math.round(Math.random() * 100000)],
    ['Sara', Math.round(Math.random() * 100000)],
    ['Maria', Math.round(Math.random() * 100000)],
  ]
});
  
grid.plugin.add({
  id: 'salaryplugin',
  component: TotalSalaryPlugin,
  position: PluginPosition.Footer,
});
`
} />

## Using the translation

Likewise, you can get access to the Translator function using the `useTranslator` hook to localize strings in your Grid.js plugin:

```js
import { useTranslator } from "gridjs";
```

<LiveExample children={
`
function HelloPlugin() {
  const _ = useTranslator();
   
  return h('b', {}, _('hello'));
}
  
const grid = new Grid({
  columns: ['Name', 'Salary'],
  data: [
    ['John', Math.round(Math.random() * 100000)],
    ['Mark', Math.round(Math.random() * 100000)],
    ['Josh', Math.round(Math.random() * 100000)],
  ],
  language: {
    'hello': 'bonjour!!'
  }
});
  
grid.plugin.add({
  id: 'bonjour',
  component: HelloPlugin,
  position: PluginPosition.Header,
});
`
} />

## Hooks

Grid.js provides the following hooks. You can use them to build and customize the behavior of your plugin:

 - `useConfig`: Retrieve the current Grid.js config object
 - `useSelector`: Subscribe to a specific part of the Grid.js state (e.g. `useSelector(state => state.data)`)
 - `useTranslator`: Get the Grid.js Translator function
 - `useStore`: Retrieve the Grid.js internal Store object
