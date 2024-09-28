// src/components/RecurrenceOptions.js
import React from 'react';
import { useDatePicker } from '../context/DatePickerContext';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useDatePicker();

  const options = ['None', 'Daily', 'Weekly', 'Monthly', 'Yearly'];

  return (
    <div className="my-4">
      <label htmlFor="recurrence" className="block text-sm font-medium text-gray-700">
        Recurrence:
      </label>
      <select
        id="recurrence" // Added id to associate with the label
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
        className="mt-1 block w-full border border-gray-300 bg-white py-2 px-3 rounded-md"
      >
        {options.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RecurrenceOptions;
