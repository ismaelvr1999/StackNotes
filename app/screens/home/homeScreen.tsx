import { View } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./homeScreen.styles";
import SearchBar from "./components/searchBar/searchBar";
import useHome from "./homeScreen.hook";
import FAB from "@components/fab/fab";
import NoteList from "@components/noteList/noteList";


const Home = () => {
    const { 
        notes, 
        stackNav, 
        drawerNav, 
        search, 
        setSearch, 
        listLayout, 
        toggleLayout, 
        goEditNote } = useHome();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <SearchBar
                    openDrawer={drawerNav.openDrawer}
                    search={search}
                    setSearch={setSearch}
                    toggleLayout={toggleLayout}
                    listLayout={listLayout} />

                <NoteList
                    notes={notes}
                    goEditNote={goEditNote}
                    layout={listLayout}
                />
                <FAB nameIcon="add" accessibilityLabel="Add a new note" onPress={() => stackNav.navigate<'CreateNote'>('CreateNote')} />
            </View>
        </SafeAreaView>
    )
};

export default Home;