import React from 'react';
import { Sidebar } from '@components/Sidebar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
    </div>
  ),
};
