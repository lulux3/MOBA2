import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {RootStackParamList} from '../types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      navigation.navigate('Results', {query});
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Search Query"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSearch}>
        Search
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
});

export default HomeScreen;
