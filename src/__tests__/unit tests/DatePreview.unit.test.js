// DatePreview.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import DatePreview from '../../components/DatePreview'; // Adjust the import path as necessary

// Mock the context value to simulate various states
const mockUseDatePicker = {
  startDate: new Date(2024, 8, 28), 
  endDate: new Date(2024, 9, 5),    
  recurrence: 'weekly',
  customRecurrence: [],
  calculateRecurrenceDates: jest.fn(() => [
    new Date(2024, 8, 28),
    new Date(2024, 9, 5),
    new Date(2024, 9, 12)
  ])
};

// Mock the hook from the context
jest.mock('../../context/DatePickerContext', () => ({
  useDatePicker: () => mockUseDatePicker
}));

describe('DatePreview Component', () => {
  beforeEach(() => {
    render(<DatePreview />);
  });

  it('renders without crashing', () => {
    expect(screen.getByText(/Selected Dates:/i)).toBeInTheDocument();
  });
  
});
