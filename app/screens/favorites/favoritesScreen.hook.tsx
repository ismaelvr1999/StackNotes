import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NoteType } from "@schemas/notes.schemas";
import connection from "@db/connection";
import { getFavorites, searchFavNote } from "@db/queries/favorites.queries";
import mapRowsToArrays from "@utils/mapRowsToArray";
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList, FavoritesStackParamList } from "@navigation/navigation.types";
import showToast from "@/utils/showToast";
import useDebouncedSearch from "@/hooks/debouncedSearch.hook";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type drawerNavProp = DrawerNavigationProp<DrawerParamList, 'FavoritesStack'>;
type stackNavProp = NativeStackNavigationProp<FavoritesStackParamList, 'Favorites'>;

const useFavorites = () => {
    const [favNotes, setFavNotes] = useState<NoteType[]>();
    const drawerNav = useNavigation<drawerNavProp>();
    const stackNav = useNavigation<stackNavProp>();

    const fetchAndRefreshFavNotes = async () => {
        try {
            const db = await connection();
            const results = await getFavorites(db);
            const mappedNotes = mapRowsToArrays<NoteType>(results);
            console.log(mappedNotes);
            setFavNotes(mappedNotes);
        } catch (error) {
            console.error("Failed to search note:", error);
            showToast("Error searching note.  Try again.");
        }
    };

    const handlerSearchNote = async (searchValue: string) => {
        if (searchValue.trim() === '') {
            fetchAndRefreshFavNotes();
            return;
        }
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
    const { search, setSearch } = useDebouncedSearch(handlerSearchNote, 300);

    useFocusEffect(useCallback(() => {
        fetchAndRefreshFavNotes();
    }, []));

    return { favNotes, drawerNav, search, setSearch, fetchAndRefreshFavNotes, stackNav };
}

export default useFavorites;