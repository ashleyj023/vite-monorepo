import React, { useState } from 'react';
import { ToggleSwitch } from '@components/ToggleSwitch';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Inputs/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <ToggleSwitch label="Enable Notifications" checked={checked} onChange={setChecked} />
    );
  },
};
