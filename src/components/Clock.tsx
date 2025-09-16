import React, { useState, useEffect } from 'react';
import './Clock.css';

interface ClockProps {
  timezone: string;
  label: string;
}

const Clock: React.FC<ClockProps> = ({ timezone, label }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date, tz: string) => {
    return date.toLocaleTimeString('en-US', {
      timeZone: tz,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date, tz: string) => {
    return date.toLocaleDateString('en-US', {
      timeZone: tz,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const timeString = formatTime(time, timezone);
  const dateString = formatDate(time, timezone);

  return (
    <div className="clock-container">
      <h2 className="clock-label">{label}</h2>
      <div className="time-display">{timeString}</div>
      <div className="date-display">{dateString}</div>
      <div className="timezone-display">{timezone}</div>
    </div>
  );
};

export default Clock;