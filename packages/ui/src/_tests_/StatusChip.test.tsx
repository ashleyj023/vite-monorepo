/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../apps/vite-dashboard/src/store'; // Adjust store path as needed
import { StatusChip } from '../components/StatusChips';

describe('StatusChip', () => {
  it('renders label with correct text', () => {
    render(
      <Provider store={store}>
        <StatusChip label="Active" status="success" />
      </Provider>
    );
    expect(screen.getByText('Active')).toBeInTheDocument();
  });
});



