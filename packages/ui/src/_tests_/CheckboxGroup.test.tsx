import { render, screen, fireEvent } from '@testing-library/react';
import { CheckboxGroup } from '@components/CheckboxGroup';

describe('CheckboxGroup', () => {
  it('renders options and toggles', () => {
    const handleChange = vi.fn();
    render(<CheckboxGroup options={['A', 'B']} selected={[]} onChange={handleChange} />);
    fireEvent.click(screen.getByLabelText('A'));
    expect(handleChange).toHaveBeenCalledWith(['A']);
  });
});
