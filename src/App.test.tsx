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
  // Look for clocks by their clock-label class
  const clockLabels = document.querySelectorAll('.clock-label');
  const clockLabelTexts = Array.from(clockLabels).map(el => el.textContent);
  
  expect(clockLabelTexts).toContain('New York');
  expect(clockLabelTexts).toContain('London');
  expect(clockLabelTexts).toContain('Tokyo');
});
