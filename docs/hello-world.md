---
title: Hello World
---

Now that we have installed the library, let's write a simple example.

## Browser

You **don't need any build tools** to use Grid.js. Simply include the JavaScript and CSS files in your project and then
call the `Grid` class to create a new instance:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <link
      href="https://unpkg.com/gridjs/dist/theme/mermaid.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="wrapper"></div>

    <script src="https://unpkg.com/gridjs/dist/gridjs.umd.js"></script>
    <script src="src/index.js"></script>
  </body>
</html>

```

:::tip
Grid.js is available as `gridjs` in the global scope (e.g. `window.gridjs`)
:::

And then instantiate `gridjs.Grid` class in your `index.js` file:

```js title="src/index.js"
new gridjs.Grid({
  columns: ["Name", "Email", "Phone Number"],
  data: [
    ["John", "john@example.com", "(353) 01 222 3333"],
    ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
    ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
  ]
}).render(document.getElementById("wrapper"));
```

<a target="_blank" rel="noreferrer" href="https://codesandbox.io/s/gridjs-hello-world-o65fb?fontsize=14&hidenavigation=1&theme=dark">
  <img alt="Edit gridjs-hello-world" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
</a>


## Node.js module

You can import `gridjs` in your application using:

```js
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
```

### React

Here is an example of using Grid.js in a React app (without the `gridjs-react` wrapper)

```jsx
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

function helloWorld () {
  const wrapperRef = useRef(null);

  const grid = new Grid({
    columns: ['Name', 'Email', 'Phone Number'],
    data: [
      ['John', 'john@example.com', '(353) 01 222 3333'],
      ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
    ]
  });
  
  useEffect(() => {
    grid.render(wrapperRef.current);
  });
  
  return <div ref={wrapperRef} />;
}
```

:::tip
Above example is just to demonstrate how to import and initiate Grid.js. 
Please use the `gridjs-react` component instead. See [React integration](./integrations/react.md).
:::

