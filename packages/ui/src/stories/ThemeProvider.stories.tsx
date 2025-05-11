import React from 'react';
import { ThemeProvider } from '@components/ThemeProvider';
import { Provider } from 'react-redux';  // Import the Redux Provider
import { store } from '../../../../apps/vite-dashboard/src/store';  // Ensure this path is correct
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
    <Provider store={store}>  {/* Wrap ThemeProvider with Redux Provider */}
      <ThemeProvider>
        <div>This is themed content</div>
      </ThemeProvider>
    </Provider>
  ),
};

