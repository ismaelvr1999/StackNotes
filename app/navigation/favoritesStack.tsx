import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoritesStackParamList } from './navigation.types';
import Favorites from '@screens/favorites/favoritesScreen';
import CreateNote from '@screens/createNote/createNoteScreen';
import EditNote from '@screens/editNote/editNoteScreen';
const Stack = createNativeStackNavigator<FavoritesStackParamList>();

const FavoritesStack = () => {
    return (
        <Stack.Navigator initialRouteName="Favorites" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Favorites" component={Favorites} />
            <Stack.Screen name="CreateNote" component={CreateNote} />
            <Stack.Screen name="EditNote" component={EditNote} />
        </Stack.Navigator>
    );
};

export default FavoritesStack;
