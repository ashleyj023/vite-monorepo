import React from 'react';
import { ThemeProvider } from '@components/ThemeProvider';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ThemeProvider> = {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <div>This is themed content</div>
    </ThemeProvider>
  ),
};
