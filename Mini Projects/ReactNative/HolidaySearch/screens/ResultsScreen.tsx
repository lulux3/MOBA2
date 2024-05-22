import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {fetchResults} from '../services/api';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, Result} from '../types';

type ResultsScreenProps = NativeStackScreenProps<RootStackParamList, 'Results'>;

const ResultsScreen: React.FC<ResultsScreenProps> = ({route, navigation}) => {
  const {query} = route.params;
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const getResults = async () => {
      const data = await fetchResults(query);
      setResults(data);
    };

    getResults();
  }, [query]);

  const handlePress = (result: Result) => {
    navigation.navigate('Detail', {result});
  };

  const renderItem = ({item}: {item: Result}) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">{item.title}</Text>
          <Text variant="bodyMedium">Start Date: {item.startDate}</Text>
          <Text variant="bodyMedium">End Date: {item.endDate}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  const itemSeparatorComponent = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparatorComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 8,
    padding: 8,
  },
  separator: {
    height: 8,
  },
});

export default ResultsScreen;
