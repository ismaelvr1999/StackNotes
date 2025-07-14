import { Text, View } from "react-native"
import styles from "./styles";
const Card = ({title,content}:{title:string,content:string})=>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text numberOfLines={3} ellipsizeMode="tail" style={styles.textContent}>
                {content}
            </Text>
        </View>
    )
}

export default Card;