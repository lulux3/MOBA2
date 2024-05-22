import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ResultsScreen from '../screens/ResultsScreen';
import DetailScreen from '../screens/DetailScreen';
import {RootStackParamList} from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="Results"
        component={ResultsScreen}
        options={{title: 'Results'}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{title: 'Detail'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
