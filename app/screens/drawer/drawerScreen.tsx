import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import styles from './drawerScreen.styles';

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
        <Text style={styles.title} >Stack Notes</Text>
        <DrawerItemList {...props} >
        </DrawerItemList>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;