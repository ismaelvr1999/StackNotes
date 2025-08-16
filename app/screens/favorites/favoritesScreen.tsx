import { View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./favoritesScreen.styles";
import Header from "./components/header";
import useFavorites from "./favoritesScreen.hook";
import NoteList from "@components/noteList/noteList";

const Favorites = () => {
    const {
        favNotes,
        drawerNav,
        search,
        setSearch,
        toggleLayout,
        listLayout,
        goEditFavNote } = useFavorites();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header
                    searchValue={search}
                    setSearch={setSearch}
                    openDrawer={drawerNav.openDrawer}
                    toggleLayout={toggleLayout}
                    listLayout={listLayout}
                />

                <NoteList
                    notes={favNotes}
                    goEditNote={goEditFavNote}
                    layout={listLayout}
                />
            </View>
        </SafeAreaView>
    );
}

export default Favorites;