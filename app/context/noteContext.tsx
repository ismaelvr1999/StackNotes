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
    const [debouncedInput, setDebouncedInput] = useState<string>(search);

    const fetchAndRefreshNotes = async () => {
        const db = await connection();
        const results = await getNotes(db);
        const mappedNotes = mapRowsToArrays<NoteType>(results);
        setNotes(mappedNotes);
    };

    const handlerSearchNote = async (searchValue: string) => {
        const db = await connection();
        const results = await searchNote(db, searchValue);
        const mappedNotes = mapRowsToArrays<NoteType>(results);
        setNotes(mappedNotes);
    };

    useEffect(() => {
        const handlerTimeout = setTimeout(() => {
            setDebouncedInput(search);
        }, 200);
        return () => clearTimeout(handlerTimeout);
    }, [search]);

    useEffect(() => {
        const searchOrFetch = async () => {
            try {
                if (debouncedInput.trim() === '') {
                    await fetchAndRefreshNotes();
                    return;
                }
                await handlerSearchNote(debouncedInput);
            } catch (error) {
                showToast((error as Error).message)
            }
        };

        searchOrFetch();
    }, [debouncedInput]);

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