---
id: stock-market
title: Stock Market
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - formatting
 - stock market
 
---

import { LiveExample } from "../../lib/liveExample.js";
import Chartist from 'chartist';
import "chartist/dist/chartist.min.css";

Grid.js can render complex elements in the table cells. In this example, we will take advantage of the builtin Virtual DOM
and Chartist library to render line charts in cells.

```js
import { Grid, h, createRef as gCreateRef } from "gridjs";
import Chartist from 'chartist';
```

<LiveExample children={
`
// Chartist options
const opts = {
  height: '30px',
  showPoint: false,
  fullWidth:true,
  chartPadding: {top: 0,right: 0,bottom: 0,left: 0},
  axisX: {showGrid: false, showLabel: false, offset: 0},
  axisY: {showGrid: false, showLabel: false, offset: 0}
};
const grid = new Grid({
  sort: true,
  columns: [
    'Symbol',
    'Last price',
    { 
      name: 'Difference', 
      formatter: (cell) => {
        return h('b', { style: {
          'color': cell > 0 ? 'green' : 'red'
        }}, cell);
      }
    },
    {
      name: 'Trend',
      sort: false,
      width: '20%',
      formatter: (cell) => {
        const ref = gCreateRef();
        const chart = h('div', { ref: ref })
        
        // setTimeout to ensure that the chart wrapper is mounted
        setTimeout(() => {
          // render the chart based on cell data
          ref.current && new Chartist.Line(ref.current, {
            series: [cell]
          }, opts);
        }, 0);
        
        return chart;
      }
    }],
  data: [
    ['AAPL', 360.2, 20.19, [360, 363, 366, 361, 366, 350, 370]],
    ['ETSY', 102.1, 8.22, [90, 91, 92, 90, 94, 95, 99, 102]],
    ['AMZN', 2734.8, -30.01, [2779, 2786, 2792, 2780, 2750, 2765, 2740, 2734]],
    ['TSLA', 960.85, -40.91, [993, 990, 985, 983, 970, 985, 988, 960]],
  ]
});
`
} scope={{ Chartist }} />

