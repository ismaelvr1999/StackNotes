import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useState, useCallback } from "react";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList, DrawerParamList } from "@navigation/navigation.types";
import { getNotes, searchNote } from "@db/queries/notes.queries";
import mapRowsToArrays from "@utils/mapRowsToArray";
import { NoteType } from "@schemas/notes.schemas";
import showToast from "@utils/showToast";
import useDebouncedSearch from "@hooks/debouncedSearch.hook";
import { DrawerNavigationProp } from '@react-navigation/drawer';
import connection from "@db/connection";
type stackNavProp = NativeStackNavigationProp<HomeStackParamList, 'Home'>;
type drawerNavProp = DrawerNavigationProp<DrawerParamList, 'NotesStack'>;

const useHome = () => {
    const stackNav = useNavigation<stackNavProp>();
    const drawerNav = useNavigation<drawerNavProp>();
    const [notes, setNotes] = useState<NoteType[]>([]);
    const [listLayout, setListLayout] = useState<"row" | "column">("row");

    const fetchAndRefreshNotes = async () => {
        try {
            const db = await connection();
            const results = await getNotes(db);
            const mappedNotes = mapRowsToArrays<NoteType>(results);
            setNotes(mappedNotes);
        } catch (error) {
            console.error("Failed to fetch and refresh notes:", error);
            showToast("Error loading notes.  Try again.");
        }
    };

    const handlerSearchNote = async (searchValue: string) => {
        if (searchValue.trim() === '') {
            fetchAndRefreshNotes();
            return;
        }
        try {
            const db = await connection();
            const results = await searchNote(db, searchValue);
            const mappedNotes = mapRowsToArrays<NoteType>(results);
            setNotes(mappedNotes);
        } catch (error) {
            console.error("Failed to search note:", error);
            showToast("Error searching note.  Try again.");
        }
    };

    const toggleLayout = () => {
        setListLayout(value => value === "column" ? "row" : "column");
    }
    const { search, setSearch } = useDebouncedSearch(handlerSearchNote, 300);

    useFocusEffect(useCallback(() => {
        fetchAndRefreshNotes();
    }, []));

    return { notes, stackNav, drawerNav, search, setSearch, listLayout, toggleLayout };
}

export default useHome;