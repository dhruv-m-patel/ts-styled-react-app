import type { Meta, StoryObj } from '@storybook/react';
import InternalServerError from './InternalServerError';

const meta: Meta<typeof InternalServerError> = {
  component: InternalServerError,
  title: 'Pages/InternalServerError',
};
export default meta;

type Story = StoryObj<typeof InternalServerError>;
export const WithDefaults: Story = {
  args: {},
};
