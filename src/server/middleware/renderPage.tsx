import React from 'react';
import { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import path from 'path';
import { StaticRouter } from 'react-router-dom';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import configureStore from '../../client/redux/configureStore';
import Router from '../../common/router';
import ReduxStateDecorator from '../../client/redux/StateDecorator';
import { HelmetServerState, HelmetProvider } from 'react-helmet-async';

export default function render() {
  return function renderPage(req: Request, res: Response) {
    const routerContext: { url?: string; originalUrl?: string } = {};
    const helmetContext: { helmet: HelmetServerState } = {
      helmet: {} as HelmetServerState,
    };
    if (routerContext.url) {
      res.redirect(routerContext.url);
      return;
    }

    const request = req as any;

    const store = configureStore(request.initialState || {});
    const preloadedState = request.initialState || store.getState();
    if (!request.initialState) {
      request.initialState = preloadedState;
    }

    const statsFile = path.join(
      process.cwd(),
      './build-static/loadable-stats.json'
    );
    const extractor = new ChunkExtractor({
      statsFile,
      entrypoints: ['client'],
      publicPath: '/',
    });

    const html = renderToString(
      // @ts-ignore
      <ChunkExtractorManager extractor={extractor}>
        <HelmetProvider context={helmetContext}>
          <ReduxStateDecorator initialState={preloadedState}>
            <StaticRouter location={req.originalUrl} context={routerContext}>
              <Router />
            </StaticRouter>
          </ReduxStateDecorator>
        </HelmetProvider>
      </ChunkExtractorManager>
    );

    const { helmet } = helmetContext;

    res.send(`
<!DOCTYPE html>
<html lang="en-US" ${helmet.htmlAttributes.toString()}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" priority="1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>${request.config.get('title')}</title>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${extractor.getLinkTags()}
    ${helmet.style.toString()}
    ${extractor.getStyleTags()}
    ${helmet.script.toString()}
    ${extractor.getScriptTags({ defer: '' })}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <script id="stateData">
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
    </script>
  </head>
  <body ${helmet.bodyAttributes.toString()}>
    <div id="root">${html}</div>
  </body>
</html>
    `);
  };
}
