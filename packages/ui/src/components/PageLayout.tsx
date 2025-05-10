import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import { Header } from './Header';

interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

export const PageLayout = ({ title, children }: PageLayoutProps) => (
  <Box>
    <Header title={title} />
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {children}
    </Container>
  </Box>
);
