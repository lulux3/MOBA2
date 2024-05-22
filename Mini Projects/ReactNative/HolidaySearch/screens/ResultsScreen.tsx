import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {List} from 'react-native-paper';
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

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <List.Item title={item.title} description={item.description} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ResultsScreen;
