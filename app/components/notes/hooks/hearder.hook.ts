import { deleteNote, updateNoteFav } from "@db/queries/notes.queries";
import showToast from "@utils/showToast";
import connection from "@db/connection";
import { UseNoteContext } from "@context/noteContext";
import { deleteFavorite, insertFavorite } from "@db/queries/favorites.queries";
import { useState } from "react";
import { SQLiteDatabase } from "react-native-sqlite-storage";

const useHearder = (favorite: 0 | 1, onBack: () => void, id?: string) => {
    const { fetchAndRefreshNotes } = UseNoteContext();
    const [favState, setfavState] = useState(favorite);

    const handlerDelete = async () => {
        if (!id) {
            showToast("Nothing to delete");
            return;
        }
        try {
            const db = await connection();
            await deleteNote(db, id);
            showToast("Note deleted");
            fetchAndRefreshNotes();
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
        fetchAndRefreshNotes();
    };

    const handlerRemoveFav = async (db: SQLiteDatabase, id: string) => {
        await deleteFavorite(db, id);
        await updateNoteFav(db, id, 0);
        setfavState(0);
        showToast("Note removed from favorites");
        fetchAndRefreshNotes();
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
            handlerRemoveFav(db,id);
            return;

        } catch (error) {
            console.error("Failed added note to favorites", error);
            showToast("Error added note to favorites. Try again.");
        }
    };

    return { handlerToggleFav, favState, handlerDelete }
}

export default useHearder;