import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation.types';
import Home from '@screens/home/homeScreen';
import CreateNote from '@screens/createNote/createNoteScreen';
import EditNote from '@/screens/editNote/editNoteScreen';
import { NoteProvider } from '@context/noteContext';
const Stack = createNativeStackNavigator<RootStackParamList>();

const NotesStack = () => {
    return (
        <NoteProvider>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="CreateNote" component={CreateNote}/>
                <Stack.Screen name="EditNote" component={EditNote}/>
            </Stack.Navigator>
        </NoteProvider>
    );
};

export default NotesStack;

