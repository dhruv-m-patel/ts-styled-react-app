import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './ReduxExample.stories';

const { WithDefaults } = composeStories(stories);

describe('ReduxExample', () => {
  test('it should render loader when fetching data', () => {
    render(
      WithDefaults({
        isFetching: true,
      })
    );

    expect(screen.queryByText('Fetching data...')).toBeInTheDocument();
  });

  test('it should render data', () => {
    render(WithDefaults());

    expect(screen.queryByRole('list')).toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(2);
  });

  test('it should render error', () => {
    render(
      WithDefaults({
        error: 'There was an error, please try later.',
      })
    );

    expect(
      screen.getByText(/(There was an error, please try later.)/i)
    ).toBeInTheDocument();
  });
});
