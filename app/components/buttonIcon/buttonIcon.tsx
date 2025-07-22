import { GestureResponderEvent } from "react-native";
import { Pressable } from "react-native";
import sizes from "@constants/sizes";
import colors from "@/constants/colors";
import Icon from 'react-native-vector-icons/MaterialIcons';

type ButtonIconProps = {
    nameIcon: string;
    accessibilityLabel: string;
    onPress:  ((event: GestureResponderEvent) => void) | null | undefined;
}

const ButtonIcon = ({ nameIcon, accessibilityLabel, onPress }: ButtonIconProps) => {
    return (
        <Pressable
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel}
        >
            <Icon name={nameIcon} size={sizes.FONT_XL} color={colors.ICON} />
        </Pressable>
    )
};

export default ButtonIcon;