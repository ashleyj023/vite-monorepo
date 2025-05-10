/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { StatusChip } from '../components/StatusChips';

describe('StatusChip', () => {
  it('renders label with correct text', () => {
    render(<StatusChip label="Active" status="success" />);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });
});

