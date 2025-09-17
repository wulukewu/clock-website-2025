import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders world clock title', () => {
  render(<App />);
  const titleElement = screen.getByText(/world clock/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders timezone selector', () => {
  render(<App />);
  const selectorElement = screen.getByText(/select timezones/i);
  expect(selectorElement).toBeInTheDocument();
});

test('renders default clocks', () => {
  render(<App />);
  // Use Testing Library queries to find clock labels
  expect(screen.getByText('New York')).toBeInTheDocument();
  expect(screen.getByText('London')).toBeInTheDocument();
  expect(screen.getByText('Tokyo')).toBeInTheDocument();
});
