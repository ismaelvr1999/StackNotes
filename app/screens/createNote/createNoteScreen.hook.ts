import { useNavigation } from '@react-navigation/native';
import { useForm, } from "react-hook-form";
import connection from "@db/connection";
import { insertNote } from "@db/queries/notes.queries";
import { CUNoteFormData, CUNoteFormSchema } from "@schemas/notes.schemas";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from "@navigation/navigation.types";
import showToast from "@utils/showToast";
import { zodResolver } from '@hookform/resolvers/zod';
import { BackHandler } from "react-native";
import { useEffect, useState } from 'react';
import { insertFavorite } from '@db/queries/favorites.queries';

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, 'CreateNote'>;
const useCreateNote = () => {
    const [favState, setfavState] = useState<0 |  1>(0);
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
    };

    const saveNote = async () => {
        try {
            if ( formValues.content !== '' || formValues.title !== 'Untitle') {
                const db = await connection();
                formValues.favorite = favState;
                const noteAdded =await insertNote(db, formValues);
                if(favState === 1 && noteAdded.id) {
                    await insertFavorite(db,noteAdded.id)
                }
                showToast('Note saved');
                return true;
            } else {
                showToast('Empty note discarded');
                return true;
            }
        } catch (error) {
            console.error("Failed to save note:", error);
            showToast("Error saving note. Try again.");
            return false;
        }
    }

    const handlerDelete = async ()=>{
        showToast("Note discarted");
        navigation.goBack();
    };

    const handlerToggleFav = async () =>{
        if(favState === 0){
            setfavState(1);
            return ;
        }
        setfavState(0);
    }

    useEffect(() => {
        const handlerBackPress = () =>{
            onBack();
            return true;
        }
        const backHandler = BackHandler.addEventListener("hardwareBackPress", handlerBackPress);
        return () => backHandler.remove();
    }, [formValues]);
    return { control, onBack, favState,handlerToggleFav,handlerDelete }
}

export default useCreateNote;