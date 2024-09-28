import React from 'react';
import { useDatePicker } from '../context/DatePickerContext';

const RecurrenceCustomization = () => {
  const { recurrence, customRecurrence, setCustomRecurrence } = useDatePicker();

  const handleCustomChange = (e) => {
    const { name, value } = e.target;
    const numericValue = parseInt(value, 10);

    setCustomRecurrence((prev) => ({
      ...prev,
      [name]: isNaN(numericValue) ? '' : numericValue,
    }));
  };

  if (recurrence === 'none') return null;

  return (
    <div className="my-4">
      <label className="block text-lg font-semibold text-gray-800 mb-2">
        Customize {recurrence} recurrence:
      </label>
      {recurrence === 'daily' && (
        <div>
          <input
            type="number"
            name="every"
            value={customRecurrence.every || ''}
            onChange={handleCustomChange}
            className="mt-1 block w-full border border-gray-300 py-2 px-3 rounded-md"
            placeholder="Every X days"
          />
        </div>
      )}
      {recurrence === 'weekly' && (
        <div>
         
          <input
            type="number"
            name="every"
            value={customRecurrence.every || ''}
            onChange={handleCustomChange}
            className="mt-1 block w-full border border-gray-300 py-2 px-3 rounded-md"
            placeholder="Every X weeks"
          />
         
         
          <label className="block text-lg font-semibold text-gray-800 mt-4">
            Select Days:
          </label>
          <div className="flex flex-wrap mt-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <div key={index} className="flex items-center  mr-4 mb-2">
                <input
                  type="checkbox"
                  name="selectedDays"
                  value={index}
                  checked={customRecurrence.selectedDays?.includes(index) || false}
                  onChange={(e) => {
                    const value = parseInt(e.target.value, 10);
                    setCustomRecurrence({
                      ...customRecurrence,
                      selectedDays: e.target.checked
                        ? [...(customRecurrence.selectedDays || []), value]
                        : customRecurrence.selectedDays.filter((d) => d !== value),
                    });
                  }}
                  className="accent-blue-600 w-5 h-5"
                />
                <label className="ml-2 text-gray-800">{day}</label>
              </div>
            ))}
          </div>
        </div>
      )}
       {recurrence === 'monthly' && (
        <div>
          <input
            type="number"
            name="every"
            value={customRecurrence.every || 1}
            onChange={handleCustomChange}
            className="mt-1 block w-full border border-gray-300 py-2 px-3 rounded-md"
            placeholder="Every X months"
          />
          <label className="block text-sm font-medium text-gray-700 mt-2">
            Select day of the month:
          </label>
          <input
            id="nday"
            type="number"
            name="nthDay"
            value={customRecurrence.nthDay || 1}
            onChange={handleCustomChange}
            className="mt-1 block w-full border border-gray-300 py-2 px-3 rounded-md"
            placeholder="Nth day of the month (1-31)"
            min="1"
            max="31"
          />
        </div>
      )}
    {recurrence === 'yearly' && (
  <div>
    <input
      type="number"
      name="every"
      value={customRecurrence.every || 1}
      onChange={handleCustomChange}
      className="mt-1 block w-full border border-gray-300 py-2 px-3 rounded-md"
      placeholder="Every X years"
    />
    <label className="block text-sm font-medium text-gray-700 mt-2">Select month:</label>
    <select
      name="month"
      value={customRecurrence.month || ''}
      onChange={handleCustomChange}
      className="mt-1 block w-full border border-gray-300 py-2 px-3 rounded-md"
    >
      {Array.from({ length: 12 }, (_, i) => (
        <option key={i} value={i + 1}>
          {new Date(0, i).toLocaleString('default', { month: 'long' })}
        </option>
      ))}
    </select>
    <label className="block text-sm font-medium text-gray-700 mt-2">Select day of the month:</label>
    <input
      type="number"
      name="nthDay"
      value={customRecurrence.nthDay || 1}
      onChange={handleCustomChange}
      className="mt-1 block w-full border border-gray-300 py-2 px-3 rounded-md"
      placeholder="Nth day of the month (1-31)"
      min="1"
      max="31"
    />
  </div>
)}

    </div>
  );
};

export default RecurrenceCustomization;
