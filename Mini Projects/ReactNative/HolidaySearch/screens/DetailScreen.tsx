import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {RootStackParamList} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC<DetailScreenProps> = ({route}) => {
  const {result} = route.params;

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge">{result.title}</Text>
      <Text variant="bodyMedium">{result.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default DetailScreen;
