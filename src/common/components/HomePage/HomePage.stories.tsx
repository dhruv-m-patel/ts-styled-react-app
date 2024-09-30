import type { Meta, StoryObj } from '@storybook/react';
import { WithMemoryRouter } from '../../../../.storybook/decorators';
import HomePage from './HomePage';

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  title: 'Pages/HomePage',
  decorators: [WithMemoryRouter],
};
export default meta;

type Story = StoryObj<typeof HomePage>;
export const WithDefaults: Story = {
  args: {},
};
