import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { NoteType } from "@schemas/notes.schemas";
import connection from "@db/connection";
import { getFavorites, searchFavNote } from "@db/queries/favorites.queries";
import mapRowsToArrays from "@utils/mapRowsToArray";
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from "@navigation/navigation.types";
import showToast from "@/utils/showToast";
type drawerNavProp = DrawerNavigationProp<DrawerParamList, 'Favorites'>;

const useFavorites = () => {
    const [favNotes, setFavNotes] = useState<NoteType[]>();
    const drawerNav = useNavigation<drawerNavProp>();
    const [search, setSearch] = useState<string>('');

    const fetchAndRefreshFavNotes = async () => {
        try {
            const db = await connection();
            const results = await getFavorites(db);
            const mappedNotes = mapRowsToArrays<NoteType>(results);
            setFavNotes(mappedNotes);
        } catch (error) {
            console.error("Failed to search note:", error);
            showToast("Error searching note.  Try again.");
        }
    };

    const handlerSearchNote = async (searchValue: string) => {
        try {
            const db = await connection();
            const results = await searchFavNote(db, searchValue);
            const mappedNotes = mapRowsToArrays<NoteType>(results);
            setFavNotes(mappedNotes);
        } catch (error) {
            console.error("Failed to search note:", error);
            showToast("Error searching note.  Try again.");
        }
    };

    useEffect(() => {
        if (search.trim() === '') {
            fetchAndRefreshFavNotes();
            return;
        }
        const handlerTimeout = setTimeout(async () => {
            await handlerSearchNote(search);
        }, 200);
        return () => clearTimeout(handlerTimeout);
    }, [search]);

    return { favNotes, drawerNav, search, setSearch, fetchAndRefreshFavNotes };
}

export default useFavorites;