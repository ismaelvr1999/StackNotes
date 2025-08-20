import { SQLiteDatabase } from "react-native-sqlite-storage";
import { CUNoteFormData } from "@schemas/notes.schemas";
import uuid from 'react-native-uuid';
export const insertNote = async (db:SQLiteDatabase, note: CUNoteFormData):Promise <CUNoteFormData> =>{
    note.id = uuid.v4();
    const query = "INSERT INTO notes (id, title, content, favorite, color) VALUES (?, ?, ?, ?, ?)";
    const params = [note.id, note.title, note.content, note.favorite,note.color];
    await db.executeSql(query,params);
    return note;
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
        SET title = '${note.title}', content = '${note.content}',updated_at = datetime('now','localtime') 
        WHERE id = '${note.id}'`;
    return await db.executeSql(query);
}

export const searchNote = async (db:SQLiteDatabase,searchValue:string) =>{
    const query = `SELECT * FROM notes 
        WHERE content LIKE '%${searchValue}%' OR title LIKE '%${searchValue}%'  
        ORDER BY updated_at DESC`;
    return await db.executeSql(query);
} 

export const deleteNote = async (db:SQLiteDatabase,id:string) =>{
    const query = `DELETE FROM notes WHERE id = '${id}'`;
    return await db.executeSql(query);
} 

export const updateNoteFav = async (db:SQLiteDatabase, id:string, favoriteState:number) =>{
        const query = `UPDATE notes 
        SET favorite = ${favoriteState} ,updated_at = datetime('now','localtime') 
        WHERE id = '${id}'`;
    return await db.executeSql(query);
}

export const updateNoteColor = async (db:SQLiteDatabase,id:string,color:string) => {
        const query = `UPDATE notes 
        SET color = '${color}' ,updated_at = datetime('now','localtime') 
        WHERE id = '${id}'`;
    return await db.executeSql(query);
}