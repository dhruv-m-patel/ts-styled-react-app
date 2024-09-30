import { Preview } from '@storybook/react';
import { WithMemoryRouter, WithThemeProvider } from './decorators';

const preview: Preview = {
  decorators: [WithMemoryRouter, WithThemeProvider],
};

export default preview;
