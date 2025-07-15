import React from 'react';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './app/navigation/rootStack';

const App = () => {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
