// packages/ui/src/setupTests.ts
import { vi, beforeAll, afterAll } from 'vitest';
import '@testing-library/jest-dom'; // Ensure this is imported


// Mocking localStorage for tests that use it
vi.stubGlobal('localStorage', {
  getItem: vi.fn().mockReturnValue(null), // Set default return value
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
});

beforeAll(() => {
  console.log('Running tests in jsdom environment');
});

afterAll(() => {
  console.log('Tests completed');
});





  
