import { Text, View } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./favoritesScreen.styles";
const Favorites = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Favorites</Text>
            </View>
        </SafeAreaView>
    );
}

export default Favorites;