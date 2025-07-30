import { SQLiteDatabase } from "react-native-sqlite-storage";
import uuid from 'react-native-uuid';

export const insertFavorite = async (db:SQLiteDatabase, noteId:string) =>{
    const id = uuid.v4();
    const query = "INSERT INTO favorites (id,note_id) VALUES (?, ?)";
    const params = [id,noteId];
    return await db.executeSql(query,params);
};

export const deleteFavorite = async (db:SQLiteDatabase, noteId:string) =>{
    const query = "DELETE FROM favorites WHERE note_id = ?";
    const params = [noteId];
    return await db.executeSql(query,params);
};


