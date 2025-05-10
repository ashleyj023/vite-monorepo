import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

export interface SelectDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

export const SelectDropdown = ({
  label,
  options,
  value,
  onChange,
}: SelectDropdownProps) => {
  const labelId = `${label.replace(/\s+/g, '-').toLowerCase()}-label`;

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={`${labelId}-select`}
        label={label}
        value={value}
        onChange={onChange}
      >
        {options.map((opt) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};




