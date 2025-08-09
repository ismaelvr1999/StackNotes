import { useState, createContext, useContext, JSX, ReactNode, useEffect } from "react";
import connection from "@db/connection";
import { getNotes, searchNote } from "@db/queries/notes.queries";
import mapRowsToArrays from "@utils/mapRowsToArray";
import { NoteType } from "@schemas/notes.schemas";
import showToast from "@utils/showToast";

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
    const [search, setSearch] = useState<string>('');

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

    useEffect(() => {
        if(search.trim() === '') {
            fetchAndRefreshNotes();
            return ;
        }       
        const handlerTimeout = setTimeout( async () => {
            await handlerSearchNote(search);
        }, 300);
        return () => clearTimeout(handlerTimeout);
    }, [search]);

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