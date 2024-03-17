import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../common/router';
import ReduxStateDecorator from './redux/StateDecorator';
import { HelmetProvider } from 'react-helmet-async';
import { hydrateRoot } from 'react-dom/client';

export default function RenderApp() {
  const supportsHistory = 'pushState' in window.history;
  const RootElement = document.getElementById('root') as HTMLElement;

  let preloadedState;
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-underscore-dangle
    preloadedState = (window as any).__PRELOADED_STATE__ || {};
  }

  hydrateRoot(
    RootElement,
    <HelmetProvider>
      <BrowserRouter forceRefresh={!supportsHistory}>
        <ReduxStateDecorator initialState={preloadedState}>
          <Router />
        </ReduxStateDecorator>
      </BrowserRouter>
    </HelmetProvider>
  );
}
