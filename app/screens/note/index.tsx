import { View, Pressable, TextInput, ScrollView, ToastAndroid } from "react-native"
import sizes from "@constants/sizes"
import colors from "@constants/colors"
import styles from "./styles"
import { SafeAreaView } from "react-native-safe-area-context"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "@navigation/types";
import { useNavigation } from '@react-navigation/native';
import { SubmitHandler, useForm, Controller } from "react-hook-form"
import connection from "../../db/connection";
import { insertNote } from "../../db/queries/notes.queries";
import uuid from 'react-native-uuid';
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Note'>;

type Inputs = {
    title: string
    content: string
}

const Note = () => {
    const navigation = useNavigation<NavigationProp>();
    const { control, handleSubmit } = useForm<Inputs>();
    const showToast = () => {
        ToastAndroid.show('Note saved', ToastAndroid.SHORT);
    };
    const onSubmit: SubmitHandler<Inputs> = async (d) => {
        const db = await connection();
        const newNote = {
            id: uuid.v4(),
            title: d.title,
            content: d.content,
            created_at: Date(),
            updated_at: Date()
        }
        const result = await insertNote(db, newNote);
        await db.close();
        showToast();
    }
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

export default Note;