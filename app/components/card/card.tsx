import { Text, View } from "react-native"
import styles from "./card.styles";
import { noteColors, colors } from "@constants/index";
const Card = ({ content, color = noteColors.default }: { content: string, color?: string }) => {
    return (
        <View style={{ ...styles.container, backgroundColor: color, borderColor: color !== noteColors.default ? color : colors.BORDER }}>
            <Text numberOfLines={3} ellipsizeMode="tail" style={styles.textContent}>
                {content}
            </Text>
        </View>
    )
}

export default Card;