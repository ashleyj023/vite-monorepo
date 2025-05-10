import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';

export interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const ToggleSwitch = ({ label, checked, onChange }: ToggleSwitchProps) => {
  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={(e) => onChange(e.target.checked)} />}
      label={label}
    />
  );
};
