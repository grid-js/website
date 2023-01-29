import { Grid, html, h, createRef as gCreateRef, Component as gComponent, PluginPosition, BaseComponent, useConfig, useTranslator, useSelector, useState, useEffect } from "gridjs";
import { esES, frFR } from "gridjs/l10n";
import CodeBlock from "@theme/CodeBlock";
import React, {Component, useRef, useEffect as reactUseEffect} from "react";
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
   
  reactUseEffect(() => {
    if (typeof (grid) == 'object' && wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {
      grid.render(wrapperRef.current);
    }
  });
  
  return (
    <div ref={wrapperRef} />
  );
}
` } live={true} scope={{
          Grid,
          html,
          h,
          reactUseEffect,
          gCreateRef,
          gComponent,
          PluginPosition,
          BaseComponent,
          CodeBlock,
          useEffect,
          useRef,
          faker,
          esES,
          frFR,
          useState,
          useConfig,
          useSelector,
          useTranslator,
          ...this.props.scope
        }} />
    )
  }
}
