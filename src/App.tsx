import React, { useState } from 'react';
import Clock from './components/Clock';
import TimezoneSelector from './components/TimezoneSelector';
import './App.css';

function App() {
  const [selectedTimezones, setSelectedTimezones] = useState<string[]>([
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo'
  ]);

  const getTimezoneLabel = (timezone: string): string => {
    const labels: { [key: string]: string } = {
      'America/New_York': 'New York',
      'America/Los_Angeles': 'Los Angeles',
      'America/Chicago': 'Chicago',
      'Europe/London': 'London',
      'Europe/Paris': 'Paris',
      'Asia/Tokyo': 'Tokyo',
      'Asia/Shanghai': 'Shanghai',
      'Asia/Dubai': 'Dubai',
      'Australia/Sydney': 'Sydney',
      'UTC': 'UTC'
    };
    return labels[timezone] || timezone;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">🌍 World Clock</h1>
        <p className="app-subtitle">Track time across different timezones</p>
      </header>
      
      <TimezoneSelector
        selectedTimezones={selectedTimezones}
        onTimezoneChange={setSelectedTimezones}
      />
      
      <div className="clocks-container">
        {selectedTimezones.map((timezone) => (
          <Clock
            key={timezone}
            timezone={timezone}
            label={getTimezoneLabel(timezone)}
          />
        ))}
      </div>
      
      {selectedTimezones.length === 0 && (
        <div className="no-clocks-message">
          <p>Select at least one timezone to display clocks</p>
        </div>
      )}
    </div>
  );
}

export default App;
