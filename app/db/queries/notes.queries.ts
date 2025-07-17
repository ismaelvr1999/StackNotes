import { SQLiteDatabase } from "react-native-sqlite-storage";
import { NoteModel } from "../types/note.types";

export const insertNote = async (db:SQLiteDatabase, note: NoteModel) =>{
    const query = "INSERT INTO notes (id, title, content, created_at, updated_at) VALUES (?, ?, ?, ?, ?)";
    const params = [note.id, note.title, note.content, note.created_at, note.updated_at];
    return await db.executeSql(query,params);
}

export const getNotes = async (db:SQLiteDatabase) =>{
    const query = "SELECT * FROM notes";
    return await db.executeSql(query);
}