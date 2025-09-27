import { Text, View } from "react-native"
import styles from "./card.styles";
import { noteColors, colors, sizes } from "@constants/index";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = ({ content, color = noteColors.default, isPinned = 0 }: { content: string, color?: string, isPinned?: 0 | 1 }) => {
    return (
        <View style={{ ...styles.container, backgroundColor: color, borderColor: color !== noteColors.default ? color : colors.BORDER }}>
            <Text numberOfLines={3} ellipsizeMode="tail" style={styles.textContent}>
                {content}
            </Text>
            {isPinned === 1 && <Icon name= "pin" size={sizes.FONT_XL} color={colors.ICON} /> }
        </View>
    )
}

export default Card;