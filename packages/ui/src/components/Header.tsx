// packages/ui/src/layout/Header.tsx
import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface HeaderProps {
  title: string;
  actions?: ReactNode;
}

export const Header = ({ title, actions }: HeaderProps) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={3}
      py={2}
      bgcolor="#f5f5f5"
      borderBottom="1px solid #e0e0e0"
    >
      <Typography variant="h5" fontWeight={600}>
        {title}
      </Typography>
      {actions}
    </Box>
  );
};
