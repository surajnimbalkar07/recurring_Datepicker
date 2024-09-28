// src/App.js
import React from 'react';

import DatePicker from './components/DatePicker';
import { DatePickerProvider } from './context/DatePickerContext';
import './App.css';
import './styles.css';

const App = () => {
  return (

    <div>
   
    <DatePickerProvider>
      <div className="App">
        <DatePicker />
      </div>
    </DatePickerProvider>
</div>
    
  );
};

export default App;
