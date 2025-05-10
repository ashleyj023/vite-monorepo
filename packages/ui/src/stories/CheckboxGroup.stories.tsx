import React, { useState } from 'react';
import { CheckboxGroup } from '../components/CheckboxGroup';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Inputs/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <CheckboxGroup
        options={['Apples', 'Bananas', 'Cherries']}
        selected={selected}
        onChange={setSelected}
      />
    );
  },
};
