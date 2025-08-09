import { createDrawerNavigator } from '@react-navigation/drawer';
import NotesStack from './notesStack';
import DrawerContent from '@/screens/drawer/drawerScreen';
import { DrawerParamList } from './navigation.types';
import FavoritesStack from './favoritesStack';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="NotesStack"
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "#1a1a1a" }, 
        sceneStyle: { backgroundColor: "black" },
        drawerType: 'slide',
      }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="NotesStack" component={NotesStack} />
      <Drawer.Screen name="FavoritesStack" component={FavoritesStack} />
    </Drawer.Navigator>
  );
};


export default DrawerNavigator;
