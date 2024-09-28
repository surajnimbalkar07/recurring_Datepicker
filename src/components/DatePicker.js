// src/components/DatePicker.js
import React from 'react';
import { useDatePicker } from '../context/DatePickerContext';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import RecurrenceOptions from './RecurrenceOptions';
import RecurrenceCustomization from './RecurrenceCustomization';
import DatePreview from './DatePreview';

const DatePicker = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useDatePicker();

  const handleDateChange = (date) => {
    setStartDate(date[0]);
    if (date[1]) setEndDate(date[1]);
  };

  return (
    <div className="max-w-4xl mx-auto  p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4 text-center">Plan with Precision: Choose Your Recurring Dates</h2>
      <div className="flex justify-center mb-4"> {/* Center the calendar */}
        <Calendar
          onChange={handleDateChange}
          selectRange={true}
          value={[startDate, endDate]}
          className="calendar" // Optional: Add a custom class for additional styling if needed
        />
      </div>
      <RecurrenceOptions />
      <RecurrenceCustomization />
      <DatePreview />
    </div>
  );
};

export default DatePicker;
