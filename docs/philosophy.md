---
title: Philosophy
---

I'd like to explain why I spent my time to sort of reinvent the wheel. There are a lot of open-source table plugins available
but and I have used them personally, but I wanted to implement something different that can address multiple issues with the
existing solutions:

## No vendor lock-in

Means you can use Grid.js with React, Angular, Vue or even without any web frameworks. 
It has only *one external dependency* which is already baked in using Rollup, 
so you don't have to worry about managing dependencies if you don't use a package manager like NPM.

## Browser support

Grid.js works with all modern web browsers, and I will try to maintain and increase this coverage in the future. 


## React Native support

My objective when I started to develop this project was to write a plugin that can be used in web browsers and other JavaScript
environments like React Native.

Grid.js is designed to be **independent** of web browser context, and it is just a 
[data processing library](https://github.com/grid-js/gridjs/tree/master/src/pipeline). Although the first version
of Grid.js is primarily used to render web browser elements, I will work on React Native and other JavaScript enviroment
integrations. Stay tuned!

## Developer Friendly

Grid.js is written in TypeScript and has a lot of unit tests, integration tests and snapshot tests which helps you to
extend the library with confidence. And of course we use transpilers to build browser-friendly artifacts.
