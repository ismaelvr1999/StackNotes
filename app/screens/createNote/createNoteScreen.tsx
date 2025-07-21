import { View, Pressable, TextInput, ScrollView } from "react-native";
import sizes from "@constants/sizes";
import colors from "@constants/colors";
import styles from "./createNoteScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Controller } from "react-hook-form";
import useNote from "./createNoteScreen.hook";
import FAB from "@components/fab/fab";
import React, { useRef } from 'react';

const CreateNote = () => {
    const { control, navigation, handleSubmit, onSubmit } = useNote();
        const inputRef = useRef<TextInput>(null);
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
                        <TextInput inputMode="text" style={styles.title} onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Untitle" />
                    )}
                />

                <Pressable  style={styles.textContainer} onPress={()=> inputRef.current?.focus()}>
                    <Controller control={control}
                        name="content"
                        rules={{ required: '' }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput multiline={true} style={styles.textContent} ref={inputRef} onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Enter text" />
                        )}
                    />
                </Pressable>
                <FAB nameIcon="save" accessibilityLabel="Add a new note" onPress={handleSubmit(onSubmit)} />
            </View>
        </SafeAreaView>
    )
}

export default CreateNote;