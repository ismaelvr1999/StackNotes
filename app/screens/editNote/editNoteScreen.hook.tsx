import { useNavigation } from '@react-navigation/native';
import { SubmitHandler, useForm, } from "react-hook-form";
import connection from "@db/connection";
import { updateNote } from "@db/queries/notes.queries";
import { CUNoteFormData, CUNoteFormSchema } from "@schemas/notes.schemas";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "@navigation/navigation.types";
import showToast from "@utils/showToast";
import { zodResolver } from '@hookform/resolvers/zod';
import { UseNoteContext } from '@context/noteContext';
import { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'CreateNote'>;

const useEditNote = (id: string, title: string, content: string) => {
    const { fetchAndRefreshNotes } = UseNoteContext();
    const [isSaved, setIsSaved] = useState(true);
    const navigation = useNavigation<NavigationProp>();
    const { control, watch } = useForm<CUNoteFormData>({
        resolver: zodResolver(CUNoteFormSchema),
        defaultValues: {
            id,
            title,
            content
        }
    });
    const formValues = watch();

    const onBack = () => {
        if (isSaved) {
            navigation.goBack();
            return true;
        }
        debouncedSave(formValues);
        navigation.goBack();
        return true;
    }

    const debouncedSave = async (formValues: CUNoteFormData) => {
        if (content !== formValues.content || title !== formValues.title) {
            const db = await connection();
            const result = await updateNote(db, formValues);
            await fetchAndRefreshNotes();
            setIsSaved(true);
        }
    }

    useEffect(() => {
        if (content !== formValues.content || title !== formValues.title) {
            setIsSaved(false);
        }
        const handlerTimeout = setTimeout(() => {
            debouncedSave(formValues);
        }, 1000);
        return () => clearTimeout(handlerTimeout);
    }, [formValues]);

    useEffect(() => {
        const backAction = () => {
            onBack();
            return true;
        };
        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => backHandler.remove();
    }, []);
    return { control, onBack }
}

export default useEditNote;