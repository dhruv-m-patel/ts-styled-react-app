import type { Meta, StoryObj } from '@storybook/react';
import NotFound from './NotFound';

const meta: Meta<typeof NotFound> = {
  component: NotFound,
  title: 'Pages/NotFound',
};
export default meta;

type Story = StoryObj<typeof NotFound>;

export const WithDefaults: Story = {
  args: {},
};