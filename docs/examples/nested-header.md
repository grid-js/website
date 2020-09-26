---
id: nested-header 
title: Nested Header 
keywords:
 - javascript
 - table
 - javascript table
 - gridjs
 - grid js
 - nested
 - nested header
 
---

import { LiveExample } from "../../lib/liveExample.js";

Grid.js supports nested headers. All you need to do is to define nested `columns` attribute in your column config:

<LiveExample children={
`
const grid = new Grid({
  columns: [
      { 
        name: 'Name',
        columns: [{
          name: 'First'
        }, {
          name: 'Last'
        }]
      },
      'Email',
      { 
        name: 'Address',
        columns: [{
          name: 'Country'
        }, {
          name: 'City',
          columns: [{
            name: 'Name'
          }]
        }]
      },
   ],
  data: Array(5).fill().map(x => [
    faker.name.firstName(),
    faker.name.lastName(),
    faker.internet.email(),
    faker.address.countryCode(),
    faker.address.city(),
  ])
});
`
} />

<br/>

You can also enable "sorting" when using nested headers:


<LiveExample children={
`
const grid = new Grid({
  sort: true,
  columns: [
      { 
        name: 'Name',
        columns: [{
          name: 'First'
        }, {
          name: 'Last'
        }]
      },
      'Email',
   ],
  data: Array(5).fill().map(x => [
    faker.name.firstName(),
    faker.name.lastName(),
    faker.internet.email(),
  ])
});
`
} />

<br/>

It can also be used with `fixedHeader` option:

<LiveExample children={
`
const grid = new Grid({
  sort: true,
  fixedHeader: true,
  height: '400px',
  columns: [
      { 
        name: 'Name',
        columns: [{
          name: 'First'
        }, {
          name: 'Last'
        }]
      },
      'Email',
   ],
  data: Array(50).fill().map(x => [
    faker.name.firstName(),
    faker.name.lastName(),
    faker.internet.email(),
  ])
});
`
} />
