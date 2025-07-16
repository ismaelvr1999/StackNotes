import { SQLiteDatabase } from "react-native-sqlite-storage";
import { Note } from "../types/note.types";
export const insertNote = async (db:SQLiteDatabase, note: Note) =>{
    const query = "INSERT INTO notes (id, title, content, created_at, updated_at) VALUES (?, ?, ?, ?, ?)";
    const params = [note.id, note.title, note.content, note.created_at, note.updated_at];
    await db.executeSql(query,params);
}