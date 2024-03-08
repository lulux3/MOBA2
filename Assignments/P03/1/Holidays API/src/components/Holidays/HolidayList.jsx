import React from 'react';

const HolidayList = ({ holidays, loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Holidays in Switzerland (2023)</h1>
      <ul>
        {holidays.map(holiday => (
          <li key={holiday.uuid}>
            <strong>{holiday.name}</strong> ({holiday.date}) - Public: {holiday.public ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HolidayList;
