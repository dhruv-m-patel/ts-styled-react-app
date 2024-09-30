import { render, screen } from '@testing-library/react';
import * as stories from './Error.stories';
import { composeStories } from '@storybook/react';

const { WithDefaults } = composeStories(stories);

describe('Error', () => {
  test('it should render', () => {
    render(WithDefaults());

    expect(
      screen.getByText(/There was an unexpected error/)
    ).toBeInTheDocument();
  });
});
