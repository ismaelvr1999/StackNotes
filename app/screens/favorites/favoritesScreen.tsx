import { View, FlatList, Pressable, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./favoritesScreen.styles";
import Header from "./components/header";
import Card from "@components/card/card";
import useFavorites from "./favoritesScreen.hook";

const Favorites = () => {
    const {favNotes, drawerNav} = useFavorites();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header openDrawer={drawerNav.openDrawer} />
                
                <FlatList
                    numColumns={1}
                    data={favNotes}
                   /*  columnWrapperStyle={{gap:5}} */ 
                    renderItem={({ item }) => {
                        return (
                            <Pressable
                                onPress={() => {}}
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
            </View>
        </SafeAreaView>
    );
}

export default Favorites;