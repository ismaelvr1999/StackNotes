import { Control, Controller } from "react-hook-form";
import { StyleSheet, TextInput } from "react-native";
import {colors,sizes} from "@constants/index";
import { CUNoteFormData } from "@schemas/notes.schemas";
type TitleProps = {
    control: Control<CUNoteFormData>
}

const Title = ({control}:TitleProps) => {
    return (
        <Controller control={control}
            name="title"
            rules={{ required: '' }}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput 
                    inputMode="text" 
                    style={styles.title} 
                    onChangeText={onChange} 
                    onBlur={onBlur} 
                    value={value} 
                    placeholder="Title" 
                    />
            )}
        />
    )
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: sizes.FONT_XL,
        color: colors.TEXT,
        fontWeight: "bold"
    }
});