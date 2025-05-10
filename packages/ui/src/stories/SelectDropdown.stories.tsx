import React, { useState } from 'react';
import { SelectDropdown } from '@components/SelectDropdown';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SelectDropdown> = {
  title: 'Inputs/SelectDropdown',
  component: SelectDropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectDropdown>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('Apple');
    return (
      <SelectDropdown
        label="Fruit"
        options={['Apple', 'Banana', 'Orange']}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};




