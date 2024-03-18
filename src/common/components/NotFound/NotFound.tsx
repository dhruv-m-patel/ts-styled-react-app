import React from 'react';
import Page from '../Page';

export default function NotFound() {
  return (
    <Page>
      <h2>Page not found</h2>
      <p data-testid="message">
        The page you are looking for has been moved or does not exist.
      </p>
    </Page>
  );
}
