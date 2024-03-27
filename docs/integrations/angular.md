---
id: angular
title: Angular
---

## Install

```bash
npm install gridjs gridjs-angular
```

## Usage

In your module

```ts
import { GridJsAngularModule } from 'gridjs-angular';

@NgModule({
  imports: [CommonModule,GridJsAngularModule],
  declarations: [...],
  exports: [...],
})
export class AppModule {}
```

In your component template

```ts
import { Component } from "@angular/core";
import { UserConfig } from "gridjs";

@Component({
  template: `
    <gridjs-angular
      [config]="gridConfig"
      (cellClick)="handleCellClick($event)"
      (rowClick)="handleRowClick($event)"
      (beforeLoad)="handleBeforeLoad($event)"
      (gridLoad)="handleGridLoad($event)"
    ></gridjs-angular>
  `,
})
class ExampleComponent {
  public gridConfig: UserConfig = {
    columns: ["Name", "Email", "Phone Number"],
    data: [
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
      ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
      ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
      ["Afshin", "afshin@mail.com", "(353) 22 87 8356"],
    ],
  };

  handleCellClick(event: any) {
    console.log("cellClicked", event);
  }

  handleRowClick(event: any) {
    console.log("rowClicked", event);
  }

  handleBeforeLoad(event: any) {
    console.log("beforeLoad", event);
  }

  handleGridLoad(event: any) {
    console.log("load", event);
  }
}
```

Finally don't forget to add gridjs theme in your index.html

```html
<link
  href="https://unpkg.com/gridjs/dist/theme/mermaid.min.css"
  rel="stylesheet"
/>
```

## Inputs

- You can pass all Grid.js configs to the `<gridjs-angular>` component as inputs. See [Grid.js Config](https://gridjs.io/docs/config) for more details.

- `config` You can pass Grid.js config as one object and it will be merged with other Grid.js inputs.

- `plugins` Grid.js plugins array. See [Grid.js Plugins](https://gridjs.io/docs/plugin/basics)

## Outputs

- You can pass all Grid.js events as outputs with a little difference `load` event renamed to `beforeLoad`. See [Grid.js Events](https://gridjs.io/docs/examples/event-handler)

## Can I use Grid.js rendering helpers? Yes

- Using `h` function is working fine. See this example plugin.

```ts
 {
    id: 'myplugin',
    component: h(() => h('h1', {}, 'Hello world!'), {}),
    position: PluginPosition.Header,
  }
```

- You can also use `html` in column formatter like this.

```ts
 {
    name: 'Email',
    formatter: (_, row) => html(
        `<a href='mailto:${row.cells[1].data}'>${row.cells[1].data}</a>`
      )
  }
```

## Can I use Angular components in plugins, formatters, etc? Yes!

```ts
import { AfterViewInit, Component, ElementRef, Input, TemplateRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import * as gridjs from 'gridjs';
import {TColumn} from 'gridjs/dist/src/types';

export interface IData {
  name: string;
}

@Component({standalone: true, template: `
  {{row?.name ?? 'no name'}}
`})
export class MyComponent{
  @Input()
  row?: IData;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <div #grid></div>
    <ng-template #myTemplate let-row="rowObj" >
      {{row.name ?? 'no name'}}
    </ng-template>
  `,
})
export class App implements AfterViewInit {
  @ViewChild('grid') grid!: ElementRef<HTMLElement>;
  @ViewChild('myTemplate') template!: TemplateRef<any>;

  readonly host = inject(ElementRef<HTMLElement>);
  readonly viewContainerRef = inject(ViewContainerRef);

  ngAfterViewInit() {
    const grid = new gridjs.Grid({
      columns: [{
        id: 'name',
        name: 'name (gridjs binding)'
      }, {
        id: 'angular-component-binding',
        name: 'name (angular component binding)',
        formatter: (cell, row) => {
          return this.createComponent(MyComponent, {row: this.createRowObject(row, grid)})
      }
      }, {
        id: 'angular-template-binding',
        name: 'name (angular template binding)',
        formatter: (cell, row) => this.createTemplate(this.template, {cell, row, rowObj: this.createRowObject(row, grid)})
      }],
      data: [{
        name: 'Joe'
      }]
    });
    grid.render(this.grid.nativeElement);
  }

  createRowObject(row: any, grid: gridjs.Grid) {
    return grid.config.columns.reduce((acc, col, i) => {
      (acc as Record<string, any>)[(col as TColumn).id!] = row.cells[i].data;
      return acc;
    }, {} as Record<string, any>);
  }

  createTemplate(templateRef: TemplateRef<any>, context: any = {}) {
    const ref = gridjs.createRef();
    const div = gridjs.h('div', {ref});
    setTimeout(() => {
      const wrapper = ref.current as HTMLDivElement;
      if (wrapper?.children.length === 0) {
        const tRef = this.viewContainerRef.createEmbeddedView(templateRef, context);
        wrapper.innerHTML = '';
        wrapper.append(...tRef.rootNodes);
      }
    })
    return div;
  }

  createComponent(componentType: any, bindInputs: Record<string, any> = {}) {
    const ref = gridjs.createRef();
    const div = gridjs.h('div', {ref});
    setTimeout(() => {
      const wrapper = ref.current as HTMLDivElement;
      if (wrapper?.children.length === 0) {
        const componentRef = this.viewContainerRef.createComponent(componentType);
        Object.entries(bindInputs).forEach(e => {
          componentRef.setInput(e[0], e[1]);
        })
        wrapper.appendChild(componentRef.location.nativeElement);
      }
    })
    return div;
  }
}

bootstrapApplication(App);
```

See this example on StackBlitz: <https://stackblitz.com/edit/stackblitz-starters-ng6gl4?file=src%2Fmain.ts>
