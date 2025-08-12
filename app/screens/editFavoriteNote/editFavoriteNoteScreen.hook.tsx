import { useNavigation } from '@react-navigation/native';
import { useForm } from "react-hook-form";
import connection from "@db/connection";
import { updateNote, deleteNote, updateNoteFav } from "@db/queries/notes.queries";
import { deleteFavorite, insertFavorite } from "@db/queries/favorites.queries";
import { CUNoteFormData, CUNoteFormSchema } from "@schemas/notes.schemas";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FavoritesStackParamList } from "@navigation/navigation.types";
import showToast from "@utils/showToast";
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { SQLiteDatabase } from 'react-native-sqlite-storage';
type NavigationProp = NativeStackNavigationProp<FavoritesStackParamList, 'EditFavoriteNote'>;

const useEditFavoriteNote = (id: string, title: string, content: string, favorite: 0 | 1) => {
    const [favState, setfavState] = useState(favorite);
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
    };

    const debouncedSave = async (formValues: CUNoteFormData) => {
        try {
            if (currentContent !== formValues.content || currentTitle !== formValues.title) {
                const db = await connection();
                await updateNote(db, formValues);
                setCurrentContent(formValues.content);
                setCurrentTitle(formValues.title);
            }
            return true;
        } catch (error) {
            console.error("Failed to update note:", error);
            showToast("Error updating note. Try again.");
            return false;
        }
    };

    const handlerDelete = async () => {
        if (!id) {
            showToast("Nothing to delete");
            return;
        }
        try {
            const db = await connection();
            await deleteNote(db, id);
            showToast("Note deleted");
            onBack();
        } catch (error) {
            console.error("Failed deleted note", error);
            showToast("Error deleted note. Try again.");
        }

    }

    const handlerAddFav = async (db: SQLiteDatabase, id: string) => {
        await insertFavorite(db, id);
        await updateNoteFav(db, id, 1);
        setfavState(1);
        showToast("Note added to favorites");
    };

    const handlerRemoveFav = async (db: SQLiteDatabase, id: string) => {
        await deleteFavorite(db, id);
        await updateNoteFav(db, id, 0);
        setfavState(0);
        showToast("Note removed from favorites");
    };

    const handlerToggleFav = async () => {
        if (!id) {
            showToast("Nothing to add");
            return;
        }
        try {
            const db = await connection();
            if (favState === 0) {
                await handlerAddFav(db, id);
                return;
            }
            handlerRemoveFav(db, id);
            return;

        } catch (error) {
            console.error("Failed added note to favorites", error);
            showToast("Error added note to favorites. Try again.");
        }
    };

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
    return { control, onBack,favState,handlerToggleFav, handlerDelete }
}

export default useEditFavoriteNote;