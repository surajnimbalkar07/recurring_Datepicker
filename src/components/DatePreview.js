import React from 'react';
import { useDatePicker } from '../context/DatePickerContext';

const DatePreview = () => {
  const { startDate, endDate, recurrence, customRecurrence, calculateRecurrenceDates } = useDatePicker();

  // Call the calculateRecurrenceDates function from the context
  const recurringDates = calculateRecurrenceDates(startDate, endDate, recurrence, customRecurrence) || [];

  return (
    <div className="flex flex-col items-center p-4 border border-gray-300 shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Selected Dates:</h3>
      <p className="text-gray-700">
        {startDate?.toLocaleDateString()} - {endDate?.toLocaleDateString()}
      </p>
      <p className="text-gray-700">
        Recurrence: <span className="text-red-700 font-medium">{recurrence.charAt(0).toUpperCase() + recurrence.slice(1)}</span>
      </p>
  
      {/* Render the recurring dates in a flex container */}
      <div className="mt-4 w-full">
        <h4 className="text-lg font-semibold mt-4 text-gray-800">Recurring Dates:</h4>
        <div className="flex flex-wrap justify-center mt-2 space-x-4">
          {recurringDates.length > 0 ? (
            recurringDates.map((date, index) => (
              <div key={index} className="flex-shrink-0 bg-blue-300 border border-gray-300 p-2 text-center m-4">
                {date.toLocaleDateString()}
              </div>
            ))
          ) : (
            <div className="text-gray-500">No recurring dates available.</div>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default DatePreview;
