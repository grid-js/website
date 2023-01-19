---
id: react
title: React 
---

Grid.js has native React wrapper which can be used to create Grid.js instance in a React app. Use [gridjs-react](https://github.com/grid-js/gridjs-react)
package to integrate your React app with Grid.js.

## Install

```bash
npm install --save gridjs-react
```

Also, make sure you have Grid.js installed already as it's a peer dependency of `gridjs-react`:

```bash
npm install --save gridjs
```

## Usage

```js
import { Grid } from 'gridjs-react';
```

```jsx
<Grid
  data={[
    ['John', 'john@example.com'],
    ['Mike', 'mike@gmail.com']
  ]}
  columns={['Name', 'Email']}
  search={true}
  pagination={{
    limit: 1,
  }}
/>
```

Then you can pass all Grid.js configs to the `Grid` component. See [Grid.js Config](../config.md) for more details.

## Example

import { Grid } from 'gridjs-react';
import CodeBlock from "@theme/CodeBlock"
import { useEffect, useState } from "react";
import * as faker from 'faker';

<CodeBlock children={
`
function MyComponent(props) {
  const row = () => [faker.name.findName(), faker.internet.email()];
  const [data, setData] = useState([row()]);
  const update = () => {
    setData(data.slice(0).concat([row()]));
  }
  
  return (
    <div>
      <button onClick={update.bind(this)} className={"py-2 mb-4 px-4 border rounded-md text-white bg-blue-600"}>
        Add record
      </button>
      
      <Grid
        data={data}
        columns={['Name', 'Email']}
        pagination={{
          limit: 5,
        }}
      />
    </div>
  );
}
`
} live={true} scope={{ Grid, CodeBlock, useEffect, useState, faker }} />

