import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../apps/vite-dashboard/src/store'; // Adjust store path as needed
import { ToggleSwitch } from '@components/ToggleSwitch';

describe('ToggleSwitch', () => {
  it('renders and toggles', () => {
    const handleChange = vi.fn();
    render(
      <Provider store={store}>
        <ToggleSwitch label="Enable" checked={false} onChange={handleChange} />
      </Provider>
    );
    fireEvent.click(screen.getByLabelText('Enable'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });
});

