import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoritesStackParamList } from './navigation.types';
import Favorites from '@screens/favorites/favoritesScreen';
import EditFavoriteNote from '@screens/editFavoriteNote/editFavoriteNoteScreen';
const Stack = createNativeStackNavigator<FavoritesStackParamList>();

const FavoritesStack = () => {
    return (
        <Stack.Navigator initialRouteName="Favorites" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Favorites" component={Favorites} />
            <Stack.Screen name="EditFavoriteNote" component={EditFavoriteNote} />
        </Stack.Navigator>
    );
};

export default FavoritesStack;
