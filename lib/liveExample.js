import { Grid, html, h, createRef as gCreateRef, Component as gComponent } from "gridjs";
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
    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {
      grid.render(wrapperRef.current);
    }
  });
  
  return (
    <div ref={wrapperRef} />
  );
}
` } live={true} scope={{ Grid, html, h, gCreateRef, gComponent, CodeBlock, useEffect, useRef, faker, ...this.props.scope }} />
    )
  }
}
