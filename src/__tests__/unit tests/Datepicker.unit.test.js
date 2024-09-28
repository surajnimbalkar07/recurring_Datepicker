// DatePicker.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DatePickerProvider } from '../../context/DatePickerContext';// Adjust the import path as necessary
import DatePicker from '../../components/DatePicker';// Adjust the import path as necessary

describe('DatePicker Component', () => {
  beforeEach(() => {
    render(
      <DatePickerProvider>
        <DatePicker />
      </DatePickerProvider>
    );
  });

  it('renders without crashing', () => {
    expect(screen.getByText(/Plan with Precision: Choose Your Recurring Dates/i)).toBeInTheDocument(); // Adjust based on actual text in your component
  });

  it('changes recurrence when a different option is selected', () => {
    const recurrenceSelect = screen.getByLabelText(/recurrence/i); // Adjust based on actual label
    fireEvent.change(recurrenceSelect, { target: { value: 'monthly' } });
    expect(recurrenceSelect.value).toBe('monthly'); // Ensure the selected value is 'monthly'
  });

 


  // Add more tests as needed for other functionalities
});


