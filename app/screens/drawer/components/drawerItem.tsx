import { StyleSheet, Pressable, Text } from "react-native";
import { colors,sizes } from "@constants/index";
import Icon from 'react-native-vector-icons/MaterialIcons';
type Props = {
    title: string;
    iconName: string;
    isActive: boolean; 
    handlerPress: () => void;
}

const DrawerItem = ({ title,iconName,isActive, handlerPress }: Props) => {
    return (
        <Pressable style={isActive?{...styles.item,...styles.activeItem}:styles.item} onPress={handlerPress}>
            <Icon name={iconName} size={sizes.FONT_XL} color={isActive?"black":"white"} />
            <Text style={isActive?{...styles.itemText,...styles.activeItemText}:styles.itemText}>{title}</Text>
        </Pressable>
    )
};
export default DrawerItem;
const styles = StyleSheet.create({
    item: {
        padding: 15,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    itemText: {
        color: colors.TEXT,
        fontSize: sizes.FONT_MD,

    },
    activeItem: {
        backgroundColor: "#d9d9d9",
    },
    activeItemText: {
        color: "black"
    }
});