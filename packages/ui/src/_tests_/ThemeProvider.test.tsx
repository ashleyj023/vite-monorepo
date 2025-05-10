/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../components/ThemeProvider';
import { store } from '../../../../apps/vite-dashboard/src/store';

describe('ThemeProvider', () => {
  it('renders children inside theme context', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <div>With Theme</div>
        </ThemeProvider>
      </Provider>
    );
    expect(screen.getByText('With Theme')).toBeInTheDocument();
  });
});



