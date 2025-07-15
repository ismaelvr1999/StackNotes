import { View, Pressable, TextInput, ScrollView } from "react-native"
import sizes from "@constants/sizes"
import colors from "@constants/colors"
import styles from "./styles"
import { SafeAreaView } from "react-native-safe-area-context"
import Icon from 'react-native-vector-icons/MaterialIcons';
const Note = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TextInput style={styles.title} placeholder="Untitle"></TextInput>
                <ScrollView style={styles.container}>
                    <TextInput multiline={true} style={styles.textContent} placeholder="Enter text">
                    </TextInput>
                </ScrollView>

                <Pressable
                    style={styles.saveNote}
                    onPress={() => 0}
                    accessibilityRole="button"
                    accessibilityLabel="Add a new note"
                >
                    <Icon name="save" size={sizes.FONT_XXL} color={colors.ICON} />
                </Pressable>

            </View>
        </SafeAreaView>
    )
}

export default Note;