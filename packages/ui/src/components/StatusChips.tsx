import { Chip, ChipProps } from '@mui/material';

interface StatusChipProps {
  label: string;
  status?: 'success' | 'error' | 'warning' | 'info';
}

const colorMap: Record<NonNullable<StatusChipProps['status']>, ChipProps['color']> = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
};

export const StatusChip = ({ label, status = 'info' }: StatusChipProps) => {
  const chipColor = colorMap[status];
  return <Chip label={label} color={chipColor} size="small" />;
};


