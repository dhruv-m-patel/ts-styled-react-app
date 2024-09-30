import type { Meta, StoryObj } from '@storybook/react';
import Error from './Error';

const meta: Meta<typeof Error> = {
  component: Error,
  title: 'Components/Error',
};
export default meta;

type Story = StoryObj<typeof Error>;
export const WithDefaults: Story = {
  args: {
    message: 'There was an unexpected error.',
  },
};
