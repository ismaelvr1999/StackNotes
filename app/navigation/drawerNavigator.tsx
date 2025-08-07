import { createDrawerNavigator } from '@react-navigation/drawer';
import NotesStack from './notesStack';
import DrawerContent from '@/screens/drawer/drawerScreen';
import { DrawerParamList } from './navigation.types';
import Favorites from '@/screens/favorites/favoritesScreen';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Notes"
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "#1a1a1a" }, 
        sceneStyle: { backgroundColor: "black" },
        drawerType: 'slide',
      }}
      detachInactiveScreens={true}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Notes" component={NotesStack} />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
};


export default DrawerNavigator;
