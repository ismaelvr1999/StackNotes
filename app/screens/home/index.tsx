import { Text, View, Pressable, FlatList } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from "@navigation/types";
import styles from "./styles";
import Card from "@components/card/card";
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from "@constants/colors";
import sizes from "@constants/sizes";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SearchBar from "./components/searchBar";
import { useEffect, useState } from "react";
import { getNotes } from "../../db/queries/notes.queries";
import connection from "../../db/connection";
import { NoteModel } from "../../db/types/note.types";
import mapRowsToArrays from "../../utils/mapRowsToArray";
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
    const [notes,setNotes] = useState<NoteModel[]>([]);
    useEffect(()=>{
        const fetchNotes = async () =>{
            const db = await connection();
            const results = await getNotes(db);
            const notes = mapRowsToArrays<NoteModel>(results);
            setNotes(notes);
            await db.close();
        };
        fetchNotes();    
    },[])

    const navigation = useNavigation<NavigationProp>(); 
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <SearchBar />
                <FlatList
                    numColumns={1}
                    data={notes}
                    /* columnWrapperStyle={{gap:5}} */
                    renderItem={({ item }) => <Card title={item.title} content={item.content} />} 
                    keyExtractor={item => item.id} 
                    ListEmptyComponent={<Text style={{ textAlign: 'center',color:"white" }}>No notes yet</Text>}/>
                <Pressable
                style={styles.addNote}
                onPress={() => navigation.navigate<'Note'>('Note')}
                accessibilityRole="button"
                accessibilityLabel="Add a new note"
                >
                    <Icon name="add" size={sizes.FONT_XXL} color={colors.ICON} />
                </Pressable>
            </View>
        </SafeAreaView>
    )
};

export default Home;