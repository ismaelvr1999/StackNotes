import React from 'react';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './app/screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Note from './app/screens/note';
import { RootStackParamList } from './app/navigation/types';
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Note" component={Note} />
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
