import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Card, Text, Divider, Chip} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC<DetailScreenProps> = ({route}) => {
  const {result} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Title
          titleVariant="headlineSmall"
          title={result.title}
          subtitle={`Type: ${result.type}`}
        />
        <Card.Content>
          <View style={styles.row}>
            <Text variant="bodyMedium" style={styles.label}>
              Start Date:
            </Text>
            <Text variant="bodyMedium">{result.startDate}</Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.row}>
            <Text variant="bodyMedium" style={styles.label}>
              End Date:
            </Text>
            <Text variant="bodyMedium">{result.endDate}</Text>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.row}>
            <Text variant="bodyMedium" style={styles.label}>
              Nationwide:
            </Text>
            <Chip icon={result.nationwide ? 'check' : 'close'}>
              {result.nationwide ? 'Yes' : 'No'}
            </Chip>
          </View>
          {result.subdivisions && result.subdivisions.length > 0 && (
            <>
              <Divider style={styles.divider} />
              <Text variant="bodyMedium" style={styles.label}>
                Subdivisions:
              </Text>
              <View style={styles.chipContainer}>
                {result.subdivisions.map((subdivision, index) => (
                  <Chip key={index} style={styles.chip}>
                    {subdivision.shortName}
                  </Chip>
                ))}
              </View>
            </>
          )}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  label: {
    fontWeight: 'bold',
  },
  divider: {
    marginVertical: 8,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
});

export default DetailScreen;
