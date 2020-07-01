---
id: react-cells
title: React Component in cells
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - react
 - react component
---

import ReactDOM from 'react-dom';
import { LiveExample } from "../../lib/liveExample.js";

Grid.js uses Preact to render the elements and that means that you can take advantage of Preact's Virtual DOM and render
complex cells. In this example, we want to render React components in our cells.

First of all, let's import `Component` and `createRef` from Grid.js:
```js
import { 
  Grid,
  h,
  createRef as gCreateRef,
  Component as gComponent 
} from "gridjs";
```

:::info
`gComponent` and `gCreateRef` are both coming from Grid.js package. 
I have renamed them in this example to avoid naming conflicts with React. 
:::

Next, we can create a component named `ReactComponent`, that takes one input (our React component) mounts it to our table:

```js
class ReactComponent extends gComponent {
  ref = gCreateRef(null);
  
  componentDidMount() {
    ReactDOM.render(this.props.element, this.ref.current);
  }
  
  render() {
    return h('div', { ref: this.ref });
  }
}
```

Here is the finalized example:

<LiveExample children={
`
class ReactComponent extends gComponent {
  ref = gCreateRef(null);
  
  componentDidMount() {
    ReactDOM.render(this.props.element, this.ref.current)
  }
  
  render() {
    return h('div', { ref: this.ref });
  }
}
const grid = new Grid({
  columns: [
    'Name',
    'Email',
    'Actions'
  ],
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
    h(ReactComponent, { element: <b>Boom!!</b> })
  ])
});
`
} scope={{ ReactDOM }} />
