/// <reference types="vite/client" />
declare module '*.md' {
  const value: any;
  export default value;
}
interface Window {
  isLogin: boolean;
  ic?: any;
  badgeActor: any;
  userActor: any;
  Buffer: any;
}
declare module '*.md' {
  // "unknown" would be more detailed depends on how you structure frontmatter
  const attributes: Record<string, unknown>;

  // When "Mode.TOC" is requested
  const toc: { level: string; content: string }[];

  // When "Mode.HTML" is requested
  const html: string;

  // When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>
  import React from 'react';
  // When "Mode.Vue" is requested
  import { Component, ComponentOptions } from 'vue';
  const ReactComponent: React.VFC;

  const VueComponent: ComponentOptions;
  const VueComponentWith: (components: Record<string, Component>) => ComponentOptions;

  // Modify below per your usage
  export { attributes, toc, html, ReactComponent, VueComponent, VueComponentWith };
}

declare module 'ic-stoic-identity';

declare const Buffer: any;
