import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from '@navigation/rootStack'
import DrawerNavigator from '@navigation/drawerNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import initDB from '@db/init';
import { NoteProvider } from '@context/noteContext';

const App = () => {
  useEffect(() => {
    initDB();
  }, []);
  return (
    <NoteProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView  style={{ flex: 1 }}>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </NoteProvider>
  );
};

export default App;
