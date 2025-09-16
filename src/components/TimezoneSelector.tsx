import React from 'react';
import './TimezoneSelector.css';

interface TimezoneSelectorProps {
  selectedTimezones: string[];
  onTimezoneChange: (timezones: string[]) => void;
}

const AVAILABLE_TIMEZONES = [
  { value: 'America/New_York', label: 'New York (EST/EDT)' },
  { value: 'America/Los_Angeles', label: 'Los Angeles (PST/PDT)' },
  { value: 'America/Chicago', label: 'Chicago (CST/CDT)' },
  { value: 'Europe/London', label: 'London (GMT/BST)' },
  { value: 'Europe/Paris', label: 'Paris (CET/CEST)' },
  { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
  { value: 'Asia/Shanghai', label: 'Shanghai (CST)' },
  { value: 'Asia/Dubai', label: 'Dubai (GST)' },
  { value: 'Australia/Sydney', label: 'Sydney (AEST/AEDT)' },
  { value: 'UTC', label: 'UTC' },
];

const TimezoneSelector: React.FC<TimezoneSelectorProps> = ({
  selectedTimezones,
  onTimezoneChange,
}) => {
  const handleTimezoneToggle = (timezone: string) => {
    if (selectedTimezones.includes(timezone)) {
      onTimezoneChange(selectedTimezones.filter(tz => tz !== timezone));
    } else {
      onTimezoneChange([...selectedTimezones, timezone]);
    }
  };

  return (
    <div className="timezone-selector">
      <h2>Select Timezones</h2>
      <div className="timezone-grid">
        {AVAILABLE_TIMEZONES.map(({ value, label }) => (
          <button
            key={value}
            className={`timezone-button ${
              selectedTimezones.includes(value) ? 'selected' : ''
            }`}
            onClick={() => handleTimezoneToggle(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimezoneSelector;