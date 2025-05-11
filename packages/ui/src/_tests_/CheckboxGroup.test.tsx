import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../apps/vite-dashboard/src/store'; // Adjust store path as needed
import { CheckboxGroup } from '@components/CheckboxGroup';

describe('CheckboxGroup', () => {
  it('renders options and toggles', () => {
    const handleChange = vi.fn();
    render(
      <Provider store={store}>
        <CheckboxGroup options={['A', 'B']} selected={[]} onChange={handleChange} />
      </Provider>
    );
    fireEvent.click(screen.getByLabelText('A'));
    expect(handleChange).toHaveBeenCalledWith(['A']);
  });
});

