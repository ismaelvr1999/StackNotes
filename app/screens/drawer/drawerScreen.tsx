import React, { useEffect, useState } from 'react';
import {
  DrawerContentScrollView
} from '@react-navigation/drawer';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import DrawerItem from './components/drawerItem';
import { Text } from 'react-native';
import styles from './drawerScreen.styles';

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { navigation, state } = props;
  const [activeItemName, setActiveItemName] = useState(state.routeNames[state.index]);
  useEffect(()=>{
    setActiveItemName(state.routeNames[state.index]);
  },[state.index]);
  
  return (
    <DrawerContentScrollView {...props}>
      <Text style={styles.title}>Stack Notes</Text>
      <DrawerItem
        title='Notes'
        isActive={activeItemName === "Notes"}
        iconName='notes'
        handlerPress={() => navigation.navigate("Notes")} />
      <DrawerItem
        title='Favorites'
        isActive={activeItemName === "Favorites"}
        iconName='star-border'
        handlerPress={() => navigation.navigate("Favorites") } />

    </DrawerContentScrollView>
  );
};

export default DrawerContent;