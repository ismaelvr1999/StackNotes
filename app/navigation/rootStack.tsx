import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation.types';
import Home from '@screens/home/homeScreen';
import CreateNote from '@screens/createNote/createNoteScreen';
import EditNote from '@/screens/editNote/editNoteScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="CreateNote" component={CreateNote}/>
            <Stack.Screen name="EditNote" component={EditNote}/>
        </Stack.Navigator>
    );
};

export default RootStack;

