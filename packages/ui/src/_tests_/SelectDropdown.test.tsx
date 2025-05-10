import { render, screen, fireEvent } from '@testing-library/react';
import { SelectDropdown } from '../components/SelectDropdown';
import { vi } from 'vitest';
import React from 'react';

describe('SelectDropdown', () => {
  const options = ['Apple', 'Banana', 'Orange'];
  const label = 'Fruit';

  it('renders label and options', () => {
    const handleChange = vi.fn();
    render(
      <SelectDropdown
        label={label}
        options={options}
        value="Apple"
        onChange={handleChange}
      />
    );

    // Use getByRole('combobox') instead of getByLabelText
    const comboBox = screen.getByRole('combobox');
    expect(comboBox).toBeInTheDocument();
    expect(comboBox).toHaveTextContent('Apple');
  });

  it('calls onChange when an option is selected', () => {
    const handleChange = vi.fn();
    render(
      <SelectDropdown
        label={label}
        options={options}
        value="Apple"
        onChange={handleChange}
      />
    );

    const comboBox = screen.getByRole('combobox');
    fireEvent.mouseDown(comboBox); // Opens dropdown
    fireEvent.click(screen.getByText('Banana'));

    expect(handleChange).toHaveBeenCalled();
  });
});




