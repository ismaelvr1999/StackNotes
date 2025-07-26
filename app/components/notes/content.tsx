import { Pressable, TextInput , StyleSheet } from "react-native";
import sizes from "@constants/sizes";
import colors from "@constants/colors";
import { Controller, Control } from "react-hook-form";
import { CUNoteFormData } from "@schemas/notes.schemas";
import { useRef } from "react";

type ContentProps = {
    control: Control<CUNoteFormData>
}
const Content = ({control}:ContentProps) => {
    const inputRef = useRef<TextInput>(null);
    return (
        <Pressable style={styles.container} onPress={() => inputRef.current?.focus()}>
            <Controller control={control}
                name="content"
                rules={{ required: 'Content is required' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput multiline={true} style={styles.textContent} ref={inputRef} onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Enter text" />
                )}
            />
        </Pressable>
    );
};

export default Content;

const styles = StyleSheet.create({
    textContent:{
        fontSize: sizes.FONT_MD,
        color: colors.TEXT
    },
    container: {
        flex: 1,
    }
});