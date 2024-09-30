import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Navbar.stories';

const { WithDarkTheme, WithLightTheme } = composeStories(stories);

describe('Navbar', () => {
  test('it should render with dark theme', () => {
    render(WithDarkTheme());

    expect(screen.queryByRole('heading', { level: 1 })).toHaveTextContent(
      'Typescript Styled React App'
    );
  });

  test('it should render with light theme', () => {
    render(WithLightTheme());

    expect(screen.queryByRole('heading', { level: 1 })).toHaveTextContent(
      'Typescript Styled React App'
    );
  });
});
