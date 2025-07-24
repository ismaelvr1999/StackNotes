import { useState, createContext, useContext, JSX, ReactNode, useEffect } from "react";
import connection from "@db/connection";
import { getNotes } from "@db/queries/notes.queries";
import mapRowsToArrays from "@utils/mapRowsToArray";
import { NoteType } from "@schemas/notes.schemas";

type NoteContextType = {
    notes: NoteType[] | null;
    fetchAndRefreshNotes: () => Promise<void>;
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
        const db = await connection();
        const results = await getNotes(db);
        const notes = mapRowsToArrays<NoteType>(results);
        console.log(notes);
        setNotes(notes);
    };

    useEffect(() => {
        fetchAndRefreshNotes();
    }, []);

    return (
            <NoteContext.Provider value={{
                notes,
                fetchAndRefreshNotes
            }}>
                {children}
            </NoteContext.Provider>
        )
}