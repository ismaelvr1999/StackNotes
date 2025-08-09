import { useNavigation } from '@react-navigation/native';
import { useForm } from "react-hook-form";
import connection from "@db/connection";
import { updateNote } from "@db/queries/notes.queries";
import { CUNoteFormData, CUNoteFormSchema } from "@schemas/notes.schemas";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from "@navigation/navigation.types";
import showToast from "@utils/showToast";
import { zodResolver } from '@hookform/resolvers/zod';
import { UseNoteContext } from '@context/noteContext';
import { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
type NavigationProp = NativeStackNavigationProp<HomeStackParamList, 'CreateNote'>;

const useEditNote = (id: string, title: string, content: string) => {
    const { fetchAndRefreshNotes } = UseNoteContext();
    const [currentContent, setCurrentContent] = useState(content);
    const [currentTitle, setCurrentTitle] = useState(title);
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

    const onBack = async () => {
        const result = await debouncedSave(formValues);
        if(result){
            navigation.goBack();
        }
        return true;
    }

    const debouncedSave = async (formValues: CUNoteFormData) => {
        try {
            if (currentContent !== formValues.content || currentTitle !== formValues.title) {
                const db = await connection();
                await updateNote(db, formValues);
                await fetchAndRefreshNotes();
                setCurrentContent(formValues.content);
                setCurrentTitle(formValues.title);
            }
            return true;
        } catch (error) {
            console.error("Failed to update note:", error);
            showToast("Error updating note. Try again.");
            return false;
        }
    }

    useEffect(() => {
        const handlerTimeout = setTimeout(() => {
            debouncedSave(formValues);
        }, 1000);
        return () => clearTimeout(handlerTimeout);
    }, [formValues]);

    useEffect(() => {
        const handlerBackPress = () => {
            onBack();
            return true;
        };
        const backHandler = BackHandler.addEventListener("hardwareBackPress", handlerBackPress);
        return () => backHandler.remove();
    }, [formValues]);
    return { control, onBack }
}

export default useEditNote;