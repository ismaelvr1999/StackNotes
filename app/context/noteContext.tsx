import { useState, createContext, useContext, JSX, ReactNode, useCallback } from "react";
import connection from "@db/connection";
import { getNotes, searchNote } from "@db/queries/notes.queries";
import mapRowsToArrays from "@utils/mapRowsToArray";
import { NoteType } from "@schemas/notes.schemas";
import showToast from "@utils/showToast";
import useDebouncedSearch from "@/hooks/debouncedSearch.hook";
import { useFocusEffect } from "@react-navigation/native";

type NoteContextType = {
    notes: NoteType[] | null;
    fetchAndRefreshNotes: () => Promise<void>;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    search: string;
} | null;

const NoteContext = createContext<NoteContextType>(null);

export const UseNoteContext = () => {
    const context = useContext(NoteContext);
    if (!context) throw new Error("UseNoteContext must be used within a NoteProvider");
    return context;
};

export const NoteProvider = ({ children }: { children: ReactNode }): JSX.Element => {
    const [notes, setNotes] = useState<NoteType[]>([]);

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
    const { search, setSearch } = useDebouncedSearch(handlerSearchNote, 300);

    useFocusEffect(useCallback(() => {
        fetchAndRefreshNotes();
    }, []));

    return (
        <NoteContext.Provider value={{
            notes,
            fetchAndRefreshNotes,
            search,
            setSearch
        }}>
            {children}
        </NoteContext.Provider>
    )
}