import { render, screen ,fireEvent} from '@testing-library/react';
import DatePicker from '../../components/DatePicker';
import { DatePickerProvider } from '../../context/DatePickerContext';

describe('DatePicker Component Integration Test', () => {
  test('renders DatePicker with recurrence options and customization', () => {
    render(
      <DatePickerProvider>
        <DatePicker />
      </DatePickerProvider>
    );

    // Check if the title is rendered
    expect(screen.getByText('Plan with Precision: Choose Your Recurring Dates')).toBeInTheDocument();

    // Check if the recurrence options are rendered
    expect(screen.getByLabelText('Recurrence:')).toBeInTheDocument();

    // Check if the customization section is not visible by default
    expect(screen.queryByLabelText(/Customize/i)).not.toBeInTheDocument();

    // Simulate selecting a weekly recurrence
    const select = screen.getByLabelText('Recurrence:');
    fireEvent.change(select, { target: { value: 'weekly' } });

    // Ensure customization options are displayed after selection
    
  });
});
