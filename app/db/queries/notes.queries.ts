import { SQLiteDatabase } from "react-native-sqlite-storage";
import { CUNoteFormData } from "@schemas/notes.schemas";
import uuid from 'react-native-uuid';
export const insertNote = async (db:SQLiteDatabase, note: CUNoteFormData) =>{
    note.id = uuid.v4();
    const query = "INSERT INTO notes (id, title, content) VALUES (?, ?, ?)";
    const params = [note.id, note.title, note.content];
    return await db.executeSql(query,params);
}

export const getNotes = async (db:SQLiteDatabase) =>{
    const query = "SELECT * FROM notes ORDER BY updated_at DESC";
    return await db.executeSql(query);
}
export const updateNote = async (db:SQLiteDatabase, note:CUNoteFormData) => {
    if(!note.id){
        throw new Error("Id is required");
    }
    const query = `UPDATE notes 
        SET title = '${note.title}', content = '${note.content}',updated_at = datetime('now') 
        WHERE id = '${note.id}'`;
    return await db.executeSql(query);
}