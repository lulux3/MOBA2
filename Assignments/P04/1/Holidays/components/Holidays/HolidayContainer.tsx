// HolidayContainer.js (or HolidayContainer.tsx if using TypeScript)
import React from 'react';
import HolidayList from './HolidayList';
import holidaysData from './holidays.json'; // Adjust the path as necessary

const HolidayContainer = () => {
  // Since the data is now static, loading and error states can be removed or adapted as needed
  return <HolidayList holidays={holidaysData.holidays} loading={false} error={null} />;
};

export default HolidayContainer;
