import React from 'react';
import Page from '../Page';

export default function NotFound() {
  return (
    <Page>
      <h1>Page not found</h1>
      <p data-testid="message">
        The page you are looking for has been moved or does not exist.
      </p>
    </Page>
  );
}
