import { createDrawerNavigator } from '@react-navigation/drawer';
import NotesStack from './notesStack';
import DrawerContent from '@/screens/drawer/drawerScreen';
import { DrawerParamList } from './navigation.types';
import { Text, View } from 'react-native'; 

const Drawer = createDrawerNavigator<DrawerParamList>();

const Test = ()=>{
  return (
    <View style={{backgroundColor:"black", flex:1}}>
      <Text style={{color:"white"}}>test</Text>
    </View>
  )
}
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
    </Drawer.Navigator>
  );
};


export default DrawerNavigator;
