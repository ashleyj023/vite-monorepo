/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { Card } from '@components/Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });
});


