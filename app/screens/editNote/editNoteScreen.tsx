import { RootStackParamList } from "@/navigation/navigation.types";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Pressable, TextInput, ScrollView } from "react-native";
import styles from "./editNoteScreen.styles";
import React, { useRef } from 'react';
import useEditNote from "./editNoteScreen.hook";
import { Controller } from "react-hook-form";
import FAB from "@components/fab/fab";
import Hearder from "@components/notes/header";

type Props = NativeStackScreenProps<RootStackParamList, 'EditNote'> 
const EditNote = ({route,navigation}:Props) =>{
    const {id,title,content} = route.params;
    const { control, handleSubmit, onSubmit } = useEditNote(id,title,content);
    const inputRef = useRef<TextInput>(null);
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>  
                <Hearder 
                    onBack={() => navigation.goBack()} 
                />
                <Controller control={control}
                    name="title"
                    rules={{ required: '' }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput inputMode="text" style={styles.title} onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Title" />
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
    );
}
    
export default EditNote;