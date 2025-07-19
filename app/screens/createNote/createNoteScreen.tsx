import { View, Pressable, TextInput, ScrollView } from "react-native"
import sizes from "@constants/sizes"
import colors from "@constants/colors"
import styles from "./createNoteScreen.styles"
import { SafeAreaView } from "react-native-safe-area-context"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Controller } from "react-hook-form"
import useNote from "./createNoteScreen.hook"

const CreateNote = () => {
    const {control, navigation, handleSubmit, onSubmit} = useNote();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Pressable
                    style={styles.hearder}
                    onPress={() => navigation.goBack()}
                    accessibilityRole="button"
                    accessibilityLabel="Add a new note"
                >
                    <Icon name="arrow-back" size={sizes.FONT_XL} color={colors.ICON} />
                </Pressable>
                <Controller control={control}
                    name="title"
                    rules={{ required: '' }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput style={styles.title} onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Untitle" />
                    )}
                />

                <ScrollView style={styles.container}>
                    <Controller control={control}
                        name="content"
                        rules={{ required: '' }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput multiline={true} style={styles.textContent} onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Enter text" />
                        )}
                    />
                </ScrollView>

                <Pressable
                    style={styles.saveNote}
                    onPress={handleSubmit(onSubmit)}
                    accessibilityRole="button"
                    accessibilityLabel="Add a new note"
                >
                    <Icon name="save" size={sizes.FONT_XXL} color={colors.ICON} />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default CreateNote;