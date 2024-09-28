import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RecurrenceOptions from '../../components/RecurrenceOptions'; // Adjust the import path as necessary


// Mock the context value to simulate the setRecurrence function
const mockSetRecurrence = jest.fn();

const mockUseDatePicker = {
  recurrence: 'none', // Initial value for recurrence
  setRecurrence: mockSetRecurrence,
};

// Mock the useDatePicker hook
jest.mock('../../context/DatePickerContext', () => ({
  useDatePicker: () => mockUseDatePicker,
}));

describe('DatePreview Component', () => {
  beforeEach(() => {
    render(<RecurrenceOptions/>);
  });


  it('renders the recurrence options correctly', () => {
    // Check if the label is rendered
    expect(screen.getByLabelText(/recurrence/i)).toBeInTheDocument();
    // Check for each option in the dropdown
    const options = ['None', 'Daily', 'Weekly', 'Monthly', 'Yearly'];
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
// Check if the select element has the correct options
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue('none'); // Initial value

    
  });
  it('calls setRecurrence when an option is selected', () => {
    const selectElement = screen.getByRole('combobox');
    
    // Change the selected option to 'Weekly'
    fireEvent.change(selectElement, { target: { value: 'weekly' } });

    // Verify that setRecurrence was called with the correct value
    expect(mockSetRecurrence).toHaveBeenCalledWith('weekly');
  });


});
