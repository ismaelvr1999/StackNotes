import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '@navigation/drawerNavigator';
import initDB from '@db/init';

const App = () => {
  useEffect(() => {
    initDB();
  }, []);
  return (
      <SafeAreaProvider>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
      </SafeAreaProvider>
  );
};

export default App;
