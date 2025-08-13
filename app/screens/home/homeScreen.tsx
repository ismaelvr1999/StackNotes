import { Text, View, Pressable, FlatList, ScrollView } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./homeScreen.styles";
import Card from "@components/card/card";
import SearchBar from "./components/searchBar/searchBar";
import useHome from "./homeScreen.hook";
import FAB from "@components/fab/fab";

const Home = () => {
    const { notes, stackNav, drawerNav, search, setSearch, listLayout, toggleLayout } = useHome();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <SearchBar
                    openDrawer={drawerNav.openDrawer}
                    search={search}
                    setSearch={setSearch}
                    toggleLayout={toggleLayout}
                    listLayout={listLayout} />
                <FlatList
                    numColumns={1}
                    data={notes}
                    renderItem={({ item }) => {
                        return (
                            <Pressable
                                onPress={() => stackNav.navigate<'EditNote'>('EditNote', item)}
                                accessibilityRole="button"
                                accessibilityLabel="Edit note"
                            >
                                <Card content={item.content} />
                            </Pressable>
                        );
                    }
                    }
                    keyExtractor={item => item.id}
                    ListEmptyComponent={<Text style={{ textAlign: 'center', color: "white" }}>No notes found</Text>} />
{/*                 <ScrollView style={styles.notesList}>
                    {notes && notes.map((note, key) => {
                        return (
                            <Pressable
                                onPress={() => stackNav.navigate<'EditNote'>('EditNote', note)}
                                accessibilityRole="button"
                                accessibilityLabel="Edit note"
                                key={key}
                            >
                                <Card content={note.content} />
                            </Pressable>
                        );
                    })}
                    <Text style={{color:"white", borderColor:"white", borderWidth:1, padding: 10 } }> Esto es una pruebe</Text>
                    <Text style={{color:"white", borderColor:"white", borderWidth:1, padding: 10 } }> Esto es una pruebe</Text>
                </ScrollView> */}
                <FAB nameIcon="add" accessibilityLabel="Add a new note" onPress={() => stackNav.navigate<'CreateNote'>('CreateNote')} />
            </View>
        </SafeAreaView>
    )
};

export default Home;