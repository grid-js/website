---
slug: gridjs-v3
title: Grid.js v3
author: Afshin Mehrabani
author_title: Maintainer of Grid.js
author_url: https://github.com/afshinm
author_image_url: https://avatars0.githubusercontent.com/u/314326?s=460&u=6e7cccefcba3691e96b4ee539c0f2288ff127fce&v=4
tags: [announcements]
---

Today, we have released the third major version of Grid.js. v3-beta1 is now available on NPM and CDNs.

## Selection plugin

Grid.js supports *row selection* now. A dedicated plugin for Grid.js is available now: `gridjs-selection`. 
This plugin is available on NPM and various CDNs.

Read more about the [selection plugin here](/docs/plugins/selection/index).

This is the first version of this plugin and more features such as cell selection, radio buttons, etc. will be added soon.
In order to integrate this plugin, I have changed the internal structure of the Plugin class and PluginRenderer.

## Lerna

Grid.js now uses [Lerna](https://lerna.js.org/) to manage the internal and external packages. This enhancement has enabled us 
to extend Grid.js easier and to release the core and plugin packages using a unified release pipeline.

<center>
    <img alt="Lerna" src="https://lerna.js.org/images/lerna-hero.svg" width="300px" />
</center>


`gridjs-selection` is the first external package and more will be added soon (e.g. cell editing, data export).

## Table width algorithm

I have also improved the table width calculator function. Previously, the `autoWidth` function had to render the entire table
**again** using a Shadow DOM in order to calculate the widths. 

With this change, the function takes a snapshot of the rendered table and resets the CSS attributes to guess 
the minimum width required to render each cell. This should improve the overall render time especially when `columns` is large.

And many other minor changes. Please read the changelog before upgrading to v3 since a few backward incompatible changes
have been introduced in this release.


Thank you folks!
