import type { Meta, StoryObj } from '@storybook/react';
import ReduxExample from './ReduxExample';

const meta: Meta<typeof ReduxExample> = {
  component: ReduxExample,
  title: 'Pages/ReduxExample',
};
export default meta;

type Story = StoryObj<typeof ReduxExample>;
export const WithDefaults: Story = {
  args: {
    data: ['foo', 'bar'],
  },
};
