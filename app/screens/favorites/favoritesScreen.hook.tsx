import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { NoteType } from "@schemas/notes.schemas";
import connection from "@db/connection";
import { getFavorites } from "@db/queries/favorites.queries";
import mapRowsToArrays from "@utils/mapRowsToArray";
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from "@navigation/navigation.types";
type drawerNavProp = DrawerNavigationProp<DrawerParamList, 'Favorites'>;

const useFavorites = () => {
    const [favNotes, setFavNotes] = useState<NoteType[]>();
    const drawerNav = useNavigation<drawerNavProp>();
    const fetchFavNotes = async () => {
        const db = await connection();
        const results = await getFavorites(db);
        const mappedNotes = mapRowsToArrays<NoteType>(results);
        setFavNotes(mappedNotes);
    };
    useEffect(() => {
        fetchFavNotes();
    }, []);
    return {favNotes, drawerNav}
}

export default useFavorites;