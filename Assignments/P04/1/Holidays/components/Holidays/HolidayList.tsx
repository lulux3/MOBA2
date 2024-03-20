import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import Holiday from './Holiday';
import {HolidayListProps} from './types';

const HolidayList: React.FC<HolidayListProps> = ({
  holidays,
  loading,
  error,
}) => {
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <ScrollView>
      <Text style={styles.headerText}>Holidays in Switzerland (2023)</Text>
      {holidays.map(holiday => (
        <Holiday key={holiday.uuid} holiday={holiday} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HolidayList;
