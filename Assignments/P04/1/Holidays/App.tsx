import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import HolidayContainer from './components/Holidays/HolidayContainer';



function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <HolidayContainer /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  }

});

export default App;
