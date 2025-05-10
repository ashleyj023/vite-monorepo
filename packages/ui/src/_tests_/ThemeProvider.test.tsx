/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../components/ThemeProvider';

describe('ThemeProvider', () => {
  it('renders children inside theme context', () => {
    render(
      <ThemeProvider>
        <div>With Theme</div>
      </ThemeProvider>
    );
    expect(screen.getByText('With Theme')).toBeInTheDocument();
  });
});


