import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ReduxExample from './ReduxExample';

describe('ReduxExample', () => {
  test('it should render loader when fetching data', () => {
    render(
      <MemoryRouter>
        <ReduxExample
          isFetching
          data={[]}
          fetchTestData={() => {}}
          error={undefined}
        />
      </MemoryRouter>
    );
    expect(screen.queryByText('Fetching data...')).toBeInTheDocument();
  });

  test('it should render data', () => {
    render(
      <MemoryRouter>
        <ReduxExample
          isFetching
          fetchTestData={() => {}}
          error={undefined}
          data={['John Doe', 'Jane Doe', 'Foo Bar', 'Bar Baz', 'Foo Baz']}
        />
      </MemoryRouter>
    );
    expect(screen.queryByRole('list')).toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(5);
  });

  test('it should render error', () => {
    render(
      <MemoryRouter>
        <ReduxExample
          isFetching
          data={[]}
          fetchTestData={() => {}}
          error="There was an error, please try later."
        />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/(There was an error, please try later.)/i)
    ).toBeInTheDocument();
  });
});
