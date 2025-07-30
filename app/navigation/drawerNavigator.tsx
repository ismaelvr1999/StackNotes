import { createDrawerNavigator } from '@react-navigation/drawer';
import RootStack from './rootStack';

export type DrawerParamList = {
  RootStack: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="RootStack">
      <Drawer.Screen name="RootStack" component={RootStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
