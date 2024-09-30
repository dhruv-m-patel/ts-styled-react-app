import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Navbar, { NavbarComponentProps } from './Navbar';
import ThemeProvider from '../ThemeProvider';

const ThemedNavbar = (args: NavbarComponentProps) => (
  <ThemeProvider theme={args.hasSwitchedToDarkMode ? 'dark' : 'light'}>
    <Navbar {...args} />
  </ThemeProvider>
);

const meta: Meta<typeof Navbar> = {
  component: ThemedNavbar,
  title: 'Components/Navbar',
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const WithDarkTheme: Story = {
  args: {
    hasSwitchedToDarkMode: true,
  },
};

export const WithLightTheme: Story = {
  args: {
    hasSwitchedToDarkMode: false,
  },
};
