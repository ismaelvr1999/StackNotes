import { createDrawerNavigator } from '@react-navigation/drawer';
import NotesStack from './rootStack';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import type { DrawerContentComponentProps,  } from '@react-navigation/drawer';

export type DrawerParamList = {
  Notes: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Notes" 
    screenOptions={{ headerShown: false, 
    drawerStyle:{backgroundColor:"black"}, sceneStyle:{backgroundColor:"black"} }} 
    drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Notes" component={NotesStack} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View >
        <Text style={{color:"white"}} >Mi App</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerNavigator;
