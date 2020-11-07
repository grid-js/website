---
id: row-selection 
title: Row selection
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

import { LiveExample } from "../../lib/liveExample.js";
import { RowSelection } from "gridjs-selection";

:::tip
Install the `gridjs-selection` plugin if you haven't already. 
Follow the [installation manual](./examples/selection.md).
:::

## Example

Add a new column to your table definition and install the plugin. You need to define an `id` function for your selection
plugin. The `id` function must return a unique `string` for each row and is called to determine the identifier for each row.

<LiveExample children={
`
const grid = new Grid({
  columns: [
      {
        id: 'myCheckbox',
        name: 'Select',
        plugin: {
          // install the RowSelection plugin
          component: RowSelection,
          // RowSelection config
          props: {
            // use the "email" column as the row identifier
            id: (row) => row.cell(2).data
          }
        }
      },
      { 
        name: 'Name',
        formatter: (cell) => \`Name: \${cell}\`
      },
      'Email',
  ],
  sort: true,
  search: true,
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
  ])
});
`
} scope={{RowSelection}} />

:::note
In the example above, the 3rd cell (which is `row.cell(2).data`) has been selected as the row identifier which is 
the "Email" field. Note that the first cell is the checkbox column.
:::


## Selected rows

The selection plugin uses a Redux architecture and that means each selection instance has its own unique Store which keeps
the list of selected rows.

<LiveExample children={
`
const grid = new Grid({
  columns: [
      {
        id: 'selectRow',
        name: 'Select',
        // select all rows by default!
        data: () => true, 
        plugin: {
          component: RowSelection,
          props: {
            id: (row) => row.cell(2).data
          }
        }
      },
      { 
        name: 'Name',
        formatter: (cell) => \`Name: \${cell}\`
      },
      'Email',
  ],
  sort: true,
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
  ])
});
 
grid.on('ready', () => {
  // find the plugin with the give plugin ID
  const checkboxPlugin = grid.config.plugin.get('selectRow');
  // read the selected rows from the plugin's store
  console.log('selected rows:', checkboxPlugin.props.store.state);
})
`
} scope={{RowSelection}} />

## Row selection extension

Grid.js enables you to write custom plugins and extend the core functionality. In this example, we are developing a custom
plugin which listens to the Selection plugin events and populates a list of selected rows.


<LiveExample children={
`
class SelectionsList extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      selectedRows: []
    };
  }
  
  componentDidMount() {
     const grid = this.config.instance;
     
     grid.on('ready', () => {
       // find the plugin with the give plugin ID
       const checkboxPlugin = this.config.plugin.get('selectRow');
       
       // subscribe to the store events
       checkboxPlugin.props.store.on('updated', (state) => {
         this.setState({
           selectedRows: state.rowIds
         });
       });
    });
  }
  
  render() {
    if (!this.state.selectedRows.length) {
      return h('b', {}, 'Select some rows...');
    }
    
    return h(
      'ul', 
      {}, 
      this.state.selectedRows.map((rowId) => h('li', {}, rowId))
    );
  }
}
  
const grid = new Grid({
  columns: [
      {
        id: 'selectRow',
        name: 'Select',
        plugin: {
          component: RowSelection,
          props: {
            id: (row) => row.cell(2).data
          }
        }
      },
      { 
        name: 'Name',
        formatter: (cell) => \`Name: \${cell}\`
      },
      'Email',
  ],
  sort: true,
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
  ])
});
 
grid.plugin.add({
  id: 'selectionsList',
  component: SelectionsList,
  position: PluginPosition.Footer,
});
`
} scope={{RowSelection}} />

:::tip
Follow the [Advanced Plugin](./plugin/advanced-plugins.md) article to learn more about writing Grid.js plugins!
:::
