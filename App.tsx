import React from 'react';
import {StyleSheet } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Home from './app/screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const App = () => {
  const temp = [1,2,3,4];
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 10
  },
});

export default App;
