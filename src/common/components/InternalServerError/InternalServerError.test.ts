import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './InternalServerError.stories';

const { WithDefaults } = composeStories(stories);

describe('InternalServerError', () => {
  test('it should render', () => {
    render(WithDefaults());

    expect(screen.queryByRole('heading', { level: 2 })).toHaveTextContent(
      'Oops!'
    );
    expect(screen.queryByTestId('message')).toHaveTextContent(
      'Something went wrong. Please try again later.'
    );
  });
});
