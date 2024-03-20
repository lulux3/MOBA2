import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HolidayProps } from './types';


const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString('de-CH', options);
};

const Holiday: React.FC<HolidayProps> = ({ holiday }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.holidayName}>{holiday.name}</Text>
      <Text style={styles.holidayDetails}>{formatDate(holiday.date)} - Public: {holiday.public ? 'Yes' : 'No'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // for Android shadow effect
  },
  holidayName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  holidayDetails: {
    fontSize: 16,
  },
});

export default Holiday;
