import { loadableReady } from '@loadable/component';
import renderApp from './renderApp';

function render() {
  // @ts-ignore
  if (process.env.NODE_ENV === 'development' && import.meta.webpackHot) {
    // @ts-ignore
    import.meta.webpackHot.accept('./renderApp', () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
      const processHMR = require('./renderApp').default;
      processHMR();
    });
  }

  return renderApp();
}

loadableReady(() => {
  render();
});
