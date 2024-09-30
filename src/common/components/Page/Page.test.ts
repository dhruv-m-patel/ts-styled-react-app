import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Page.stories';

const { WithDefaults } = composeStories(stories);

describe('Page', () => {
  test('it should render', () => {
    render(WithDefaults());

    expect(screen.getByText('Page content goes here')).toBeInTheDocument();
  });
});
