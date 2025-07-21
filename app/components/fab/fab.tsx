import { Pressable } from "react-native";
import styles from "./fab.styles";
import Icon from 'react-native-vector-icons/MaterialIcons';
import sizes from "@constants/sizes";
import colors from "@constants/colors";
import { GestureResponderEvent } from "react-native";
const FAB = ({ nameIcon,accessibilityLabel,onPress }: { nameIcon: string,accessibilityLabel:string, onPress: ((event: GestureResponderEvent) => void) | null | undefined }) => {
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