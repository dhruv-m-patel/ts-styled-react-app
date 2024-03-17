import { loadableReady } from '@loadable/component';
import renderApp from './renderApp';

function render() {
  // @ts-ignore
  if (process.env.NODE_ENV === 'development' && import.meta) {
    // @ts-ignore
    import.meta.hot.accept('./renderApp', () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
      const rerenderApp = require('./renderApp');
      rerenderApp();
    });
  } else {
    renderApp();
  }
}

loadableReady(() => {
  render();
});
