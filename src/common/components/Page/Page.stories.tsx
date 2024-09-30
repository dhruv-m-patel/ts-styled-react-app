import React, { Fragment } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Page from './Page';

const meta: Meta<typeof Page> = {
  component: Page,
  title: 'Components/Page',
};
export default meta;

type Story = StoryObj<typeof Page>;
export const WithDefaults: Story = {
  args: {
    children: (
      <Fragment>
        <p>Page content goes here</p>
      </Fragment>
    ),
  },
};
