import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './HomePage.stories';

const { WithDefaults } = composeStories(stories);

describe('HomePage', () => {
  test('it should render', () => {
    render(WithDefaults());

    expect(
      screen.getByText('This boilerplate app is built with:')
    ).toBeInTheDocument();
  });
});
