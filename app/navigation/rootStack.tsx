import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import Home from '@screens/home';
import Note from '@screens/note';
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Note" component={Note}/>
        </Stack.Navigator>
    );
};

export default RootStack;

