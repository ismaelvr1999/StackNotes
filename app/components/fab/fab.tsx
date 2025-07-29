import { Pressable } from "react-native";
import styles from "./fab.styles";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors,sizes} from "@constants/index";
import { GestureResponderEvent } from "react-native";
type FABProps ={
    nameIcon: string;
    accessibilityLabel:string;
    onPress:  ((event: GestureResponderEvent) => void) | null | undefined;
}

const FAB = ({ nameIcon,accessibilityLabel,onPress }: FABProps) => {
    return (
        <Pressable
            style={styles.fab}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel}
        >
            <Icon name={nameIcon} size={sizes.FONT_XXL} color={colors.ICON} />
        </Pressable>
    );
}

export default FAB;