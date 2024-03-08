import React, { useState, useEffect } from 'react';
import HolidayList from './HolidayList'; 

const HolidayContainer = () => {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHolidays = async () => {
      setLoading(true);
      try {
        const apiKey = "86f91c98-84b5-46ef-a8db-ad7bd8fdcd0d";
        const response = await fetch(`https://holidayapi.com/v1/holidays?pretty&key=${apiKey}&country=CH&year=2023`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setHolidays(data.holidays);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHolidays();
  }, []);

  return <HolidayList holidays={holidays} loading={loading} error={error} />;
};

export default HolidayContainer;
