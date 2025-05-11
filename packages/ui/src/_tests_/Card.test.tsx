/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { Card } from '@components/Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card title="Test Title">Hello world</Card>);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});



