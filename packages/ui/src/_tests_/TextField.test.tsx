import { render, screen } from '@testing-library/react';
import { TextField } from '@components/TextField';

describe('TextField', () => {
  it('renders with label', () => {
    render(<TextField label="Name" />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  it('shows error text', () => {
    render(<TextField label="Email" errorText="Required" />);
    expect(screen.getByText('Required')).toBeInTheDocument();
  });
});
