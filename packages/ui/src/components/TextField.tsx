import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

export interface CustomTextFieldProps extends Omit<MuiTextFieldProps, 'label'> {
  label: string;
  errorText?: string;
}

export const TextField = ({ label, errorText, ...props }: CustomTextFieldProps) => {
  return (
    <MuiTextField
      label={label}
      error={!!errorText}
      helperText={errorText}
      fullWidth
      variant="outlined"
      {...props}
    />
  );
};

