import React, { createContext, useContext, useState } from 'react';

// Context setup
const DatePickerContext = createContext();

export const DatePickerProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [recurrence, setRecurrence] = useState('none');
  const [customRecurrence, setCustomRecurrence] = useState({ every: '', nthDay: '' });

  const calculateRecurrenceDates = (startDate, endDate, recurrence, customRecurrence) => {
    const dates = [];
    let currentDate = new Date(startDate);

    // Stop if no startDate or recurrence type
    if (!startDate || recurrence === 'none') return dates;

    if (recurrence === 'daily') {
      // Daily recurrence logic
      while (currentDate <= endDate) {
        dates.push(new Date(currentDate)); // Add the current date to the list
        currentDate.setDate(currentDate.getDate() + (customRecurrence.every || 1)); // Move forward by 'every' days
      }
    } else if (recurrence === 'weekly' && customRecurrence.selectedDays?.length) {
      // Weekly recurrence logic
      while (currentDate <= endDate) {
        const currentDayIndex = currentDate.getDay();
        if (customRecurrence.selectedDays.includes(currentDayIndex)) {
          dates.push(new Date(currentDate)); // Add the current date to the list
        }
        currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
      }
    }else if (recurrence === 'monthly') {
      // Monthly recurrence logic
      let iterationCount = 0; // Counter to avoid infinite loops
      const maxIterations = 100; // Define a safe limit for iterations
      
      while (currentDate <= endDate && iterationCount < maxIterations) {
        // Set the current date to the nthDay of the current month
        currentDate.setDate(customRecurrence.nthDay || 1); // Default to the 1st if nthDay is not set
        
        // Push the current date to the list
        dates.push(new Date(currentDate));
    
        // Move forward by 'every' month
        currentDate.setMonth(currentDate.getMonth() + (customRecurrence.every || 1));
        
        // Log the new currentDate (correct way)
        console.log(currentDate);
        
        // Check if the nthDay is valid for the new month
        const lastDayOfNewMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        if (customRecurrence.nthDay > lastDayOfNewMonth) {
          // If nthDay exceeds the last day, set it to the last day of the month
          currentDate.setDate(lastDayOfNewMonth);
        } else {
          // Otherwise, set it to the nthDay
          currentDate.setDate(customRecurrence.nthDay);
        }
    
        iterationCount++; // Increment the counter
      }
      
      if (iterationCount >= maxIterations) {
        console.warn("Max iterations reached, check your recurrence settings.");
      }
    }
    
    
    

else if (recurrence === 'yearly') {
  while (currentDate <= endDate) {
    // Set the month based on the user's selection
    currentDate.setMonth(customRecurrence.month - 1); // Month is zero-based

    // Check if the nthDay is valid for the selected month
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    if (customRecurrence.nthDay > lastDayOfMonth) {
      currentDate.setDate(lastDayOfMonth); // Set to last valid day if nthDay is too high
    } else {
      currentDate.setDate(customRecurrence.nthDay || 1); // Default to 1 if nthDay not set
    }

    // Push the current date to the list
    dates.push(new Date(currentDate));

    // Move forward by 'every' year
    currentDate.setFullYear(currentDate.getFullYear() + (customRecurrence.every || 1));

    // Log the new currentDate (correct way)
    console.log(currentDate);
  }
}


    return dates;
  };


  return (
    <DatePickerContext.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        recurrence,
        setRecurrence,
        customRecurrence,
        setCustomRecurrence,
        calculateRecurrenceDates, // Make sure to expose the function here
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};

export const useDatePicker = () => useContext(DatePickerContext);
