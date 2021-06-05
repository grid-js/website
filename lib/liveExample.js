import { Grid, html, h, createRef as gCreateRef, Component as gComponent, PluginPosition, BaseComponent } from "gridjs";
import { esES, frFR } from "gridjs/dist/gridjs.lang.es";
import CodeBlock from "@theme/CodeBlock";
import React, {Component, useEffect, useRef} from "react";
import * as faker from 'faker';

export class LiveExample extends Component {
  render() {
    return (
      <CodeBlock
        children={this.props.children}
        transformCode={(code) =>
          `
function () {
  ${code}
 
  const wrapperRef = useRef(null);
   
  useEffect(() => {
    if (typeof (grid) == 'object' && wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {
      grid.render(wrapperRef.current);
    }
  });
  
  return (
    <div ref={wrapperRef} />
  );
}
` } live={true} scope={{ Grid, html, h, gCreateRef, gComponent, PluginPosition, BaseComponent, CodeBlock, useEffect, useRef, faker, esES, frFR, ...this.props.scope }} />
    )
  }
}
