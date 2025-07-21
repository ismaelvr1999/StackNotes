import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from '@navigation/rootStack'
import initDB from '@db/init';
import { NoteProvider } from '@/context/noteContext';

const App = () => {
  useEffect(() => {
    initDB();
  }, []);
  return (
  <NoteProvider>
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  </NoteProvider>
  );
};

export default App;
