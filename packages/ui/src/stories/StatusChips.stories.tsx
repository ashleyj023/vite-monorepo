import React from 'react';
import { StatusChip } from '@components/StatusChips';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StatusChip> = {
  title: 'Components/StatusChip',
  component: StatusChip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatusChip>;

export const Success: Story = {
  args: {
    label: 'Active',
    status: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Pending',
    status: 'warning',
  },
};

export const Error: Story = {
  args: {
    label: 'Failed',
    status: 'error',
  },
};

