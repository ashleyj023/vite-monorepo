/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { PageLayout } from '../components/PageLayout';
import { describe, it, expect } from 'vitest';


describe('PageLayout', () => {
  it('renders children inside layout', () => {
    render(<PageLayout title="Layout Title"><div>Content Here</div></PageLayout>);
    expect(screen.getByText('Layout Title')).toBeInTheDocument();
    expect(screen.getByText('Content Here')).toBeInTheDocument();
  });
});


