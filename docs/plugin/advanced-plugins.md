---
id: advanced-plugins
title: Advanced Plugin
---

import { LiveExample } from "../../lib/liveExample.js";

Now that we know how to write a basic plugin, let's take a look at some complex examples.

## Using the pipeline

Grid.js has an internal pipeline which is the brain of Grid.js and takes care of processing, filter and refining the data.
You can always get access to the current pipeline by using `this.config.pipeline` in your plugin component (make sure you have extended `BaseComponent`).

In this example, we have a table of Name (string) and Salary (double) and our custom plugin is in charge of summing salaries
and displaying the total in the footer.

<LiveExample children={
`
class TotalSalaryPlugin extends BaseComponent {
  constructor(...props) {
    super(...props);
    
    this.state = {
      total: 0
    };
  }
  
  setTotal() {
    this.config.pipeline.process().then(data => {
      this.setState({
        total: data.toArray().reduce((prev, row) => prev + row[1], 0)
      });
    });
  }
  
  componentDidMount() {
    // initial setState
    this.setTotal();
    this.config.pipeline.on('updated', this.setTotal.bind(this));
  }
  
  render() {
    return h('b', {}, \`Total: $\${this.state.total.toLocaleString()}\`);
  }
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
  component: h(TotalSalaryPlugin, {}),
  position: PluginPosition.Footer,
});
`
} />

## Using the translation

Likewise, you can get access to the Translator object and localize strings in your custom plugin:

<LiveExample children={
`
class HelloPlugin extends BaseComponent {
  render() {
    return h('b', {}, this._('hello'));
  }
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
  component: h(HelloPlugin, {}),
  position: PluginPosition.Header,
});
`
} />
