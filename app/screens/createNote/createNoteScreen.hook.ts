import { useNavigation } from '@react-navigation/native';
import { useForm, } from "react-hook-form";
import connection from "@db/connection";
import { insertNote } from "@db/queries/notes.queries";
import { CUNoteFormData, CUNoteFormSchema } from "@schemas/notes.schemas";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "@navigation/navigation.types";
import showToast from "@utils/showToast";
import { zodResolver } from '@hookform/resolvers/zod';
import { UseNoteContext } from '@context/noteContext';
import { BackHandler } from "react-native";
import { useEffect } from 'react';
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'CreateNote'>;
const useCreateNote = () => {
    const { fetchAndRefreshNotes } = UseNoteContext();
    const navigation = useNavigation<NavigationProp>();
    const { control , watch } = useForm<CUNoteFormData>({
        resolver: zodResolver(CUNoteFormSchema),
        defaultValues: {
            title: "Untitle",
            content: ''
        }
    });
    const formValues = watch();
    const onBack = async () => {
        const result = await saveNote();
        if(result) {
            navigation.goBack();
        }
        return true;
    }

    const saveNote = async () => {
        try {
            if ( formValues.content !== '' || formValues.title !== 'Untitle') {
                const db = await connection();
                await insertNote(db, formValues);
                await fetchAndRefreshNotes();
                showToast('Note saved');
                return true;
            } else {
                showToast('Empty note discarted');
                return true;
            }
        } catch (error) {
            console.error("Failed to save note:", error);
            showToast("Error saving note. Try again.");
            return false;
        }
    }

    useEffect(() => {
        const handlerBackPress = () =>{
            onBack();
            return true;
        }
        const backHandler = BackHandler.addEventListener("hardwareBackPress", handlerBackPress);
        return () => backHandler.remove();
    }, [formValues]);
    return { control, onBack }
}

export default useCreateNote;