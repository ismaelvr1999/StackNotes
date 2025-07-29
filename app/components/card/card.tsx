import { Text, View } from "react-native"
import styles from "./card.styles";
const Card = ({content}:{content:string})=>{
    return (
        <View style={styles.container}>
            <Text numberOfLines={3} ellipsizeMode="tail" style={styles.textContent}>
                {content}
            </Text>
        </View>
    )
}

export default Card;