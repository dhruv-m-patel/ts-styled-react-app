import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from '../common/router';
import ReduxStateDecorator from './redux/StateDecorator';
import { HelmetProvider } from 'react-helmet-async';

export default function RenderApp() {
  const supportsHistory = 'pushState' in window.history;
  const RootElement = document.getElementById('root') as HTMLElement;

  let preloadedState;
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-underscore-dangle
    preloadedState = (window as any).__PRELOADED_STATE__ || {};
    const stateData = document.getElementById('stateData') as HTMLElement;
    document.head.removeChild(stateData);
    // eslint-disable-next-line no-underscore-dangle
    delete (window as any).__PRELOADED_STATE__;
  }

  ReactDOM.hydrate(
    <HelmetProvider>
      <BrowserRouter forceRefresh={!supportsHistory}>
        <ReduxStateDecorator initialState={preloadedState}>
          <Router />
        </ReduxStateDecorator>
      </BrowserRouter>
    </HelmetProvider>,
    RootElement
  );
}
