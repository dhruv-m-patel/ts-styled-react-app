import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './NotFound.stories';

const { WithDefaults } = composeStories(stories);

describe('NotFound', () => {
  test('it should render', () => {
    render(WithDefaults());

    expect(screen.queryByRole('heading', { level: 2 })).toHaveTextContent(
      'Page not found'
    );
    expect(screen.queryByTestId('message')).toHaveTextContent(
      'The page you are looking for has been moved or does not exist.'
    );
  });
});
