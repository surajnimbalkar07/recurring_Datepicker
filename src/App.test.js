import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DatePicker component', () => {
  render(<App />);
  
  // Check if DatePicker is rendered
  const datePickerElement = screen.getByRole('heading', { name: /Plan with Precision/i });
  expect(datePickerElement).toBeInTheDocument();
  
  // You can add more checks here based on what your DatePicker renders
});
