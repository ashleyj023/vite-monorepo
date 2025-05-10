import { render, screen, fireEvent } from '@testing-library/react';
import { ToggleSwitch } from '@components/ToggleSwitch';

describe('ToggleSwitch', () => {
  it('renders and toggles', () => {
    const handleChange = vi.fn();
    render(<ToggleSwitch label="Enable" checked={false} onChange={handleChange} />);
    fireEvent.click(screen.getByLabelText('Enable'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });
});
