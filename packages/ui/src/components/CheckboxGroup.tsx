import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export interface CheckboxGroupProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  selected,
  onChange,
}) => {
  const toggle = (option: string) => {
    const updated = selected.includes(option)
      ? selected.filter((s) => s !== option)
      : [...selected, option];
    onChange(updated);
  };

  return (
    <FormGroup>
      {options.map((option) => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              checked={selected.includes(option)}
              onChange={() => toggle(option)}
            />
          }
          label={option}
        />
      ))}
    </FormGroup>
  );
};


