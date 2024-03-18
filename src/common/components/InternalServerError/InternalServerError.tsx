import React from 'react';
import Page from '../Page';

export default function InternalServerError() {
  return (
    <Page>
      <h2>Oops!</h2>
      <p data-testid="message">Something went wrong. Please try again later.</p>
    </Page>
  );
}
