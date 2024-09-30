import React from 'react';
import ThemeProvider from '../../src/common/components/ThemeProvider';

export const WithThemeProvider = (Story: any) => (
  <ThemeProvider theme="light">
    <Story />
  </ThemeProvider>
);
