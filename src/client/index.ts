import React from 'react';
import { loadableReady } from '@loadable/component';
import renderApp from './renderApp';

function render() {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React, {
      trackAllPureComponents: true,
    });

    // @ts-ignore
    if (import.meta.webpackHot) {
      // @ts-ignore
      import.meta.webpackHot.accept('./renderApp', () => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
        const processHMR = require('./renderApp').default;
        processHMR();
      });
    }
  }

  return renderApp();
}

loadableReady(() => {
  render();
});
