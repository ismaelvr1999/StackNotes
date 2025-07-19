import { SQLiteDatabase } from "react-native-sqlite-storage";
import { CreateNoteFormData } from "@schemas/notes.schemas";
import uuid from 'react-native-uuid';
export const insertNote = async (db:SQLiteDatabase, note: CreateNoteFormData) =>{
    const id = uuid.v4();
    const query = "INSERT INTO notes (id, title, content) VALUES (?, ?, ?)";
    const params = [id, note.title, note.content];
    return await db.executeSql(query,params);
}

export const getNotes = async (db:SQLiteDatabase) =>{
    const query = "SELECT * FROM notes";
    return await db.executeSql(query);
}