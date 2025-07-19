import { useEffect, useState } from "react";
import { getNotes } from "../../db/queries/notes.queries";
import connection from "../../db/connection";
import { NoteType } from "@schemas/notes.schemas";
import mapRowsToArrays from "../../utils/mapRowsToArray";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "@navigation/navigation.types";
type NavigationProp = NativeStackNavigationProp<RootStackParamList,"Home">;
const useHome = ()=>{
    const [notes,setNotes] = useState<NoteType[]>([]);
    const navigation = useNavigation<NavigationProp>();
    useEffect(()=>{
        const fetchNotes = async () =>{
            const db = await connection();
            const results = await getNotes(db);
            const notes = mapRowsToArrays<NoteType>(results);
            setNotes(notes);
        };
        fetchNotes();    
    },[]);

    return {notes,navigation};
}

export default useHome;