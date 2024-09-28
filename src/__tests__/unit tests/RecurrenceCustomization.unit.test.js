import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import RecurrenceCustomization from '../../components/RecurrenceCustomization';

// Mocking the context for testing
const mockSetCustomRecurrence = jest.fn();
const mockUseDatePicker = {
  recurrence: 'weekly',
  customRecurrence: { every: '', selectedDays: [] },
  setCustomRecurrence: (update) => {
    mockSetCustomRecurrence(update);
    // Simulating the update to the customRecurrence state
    mockUseDatePicker.customRecurrence = { ...mockUseDatePicker.customRecurrence, ...update };
  },
};

jest.mock('../../context/DatePickerContext', () => ({
  useDatePicker: () => mockUseDatePicker,
}));

describe('RecurrenceCustomization', () => {
  test('renders correctly for weekly recurrence', () => {
    render(<RecurrenceCustomization />);
    
    // Check if the input for "Every X weeks" is displayed
    expect(screen.getByPlaceholderText(/every x weeks/i)).toBeInTheDocument();
  });

 
});
