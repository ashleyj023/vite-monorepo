import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
  it('renders the title and children', () => {
    render(
      <Card title="Test Card">
        <p>Hello from inside</p>
      </Card>
    );

    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('Hello from inside')).toBeInTheDocument();
  });
});
