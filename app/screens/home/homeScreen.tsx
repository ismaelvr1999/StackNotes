import { Text, View, Pressable, FlatList } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./homeScreen.styles";
import Card from "@components/card/card";
import SearchBar from "./components/searchBar/searchBar";
import useHome from "./homeScreen.hook";
import FAB from "@components/fab/fab";
import { DrawerNavigationProp } from '@react-navigation/drawer';
// TODO: https://reactnavigation.org/docs/typescript/#combining-navigation-props
type RootDrawerParamList = {
    Notes: undefined;
};

type Props = {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'Notes'>;
};

const Home = ({ navigation }: Props) => {
    const { notes, navigation:NotesNav } = useHome();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <SearchBar openDrawer={() => navigation.openDrawer()} />
                <FlatList
                    numColumns={1}
                    data={notes}
                    /* columnWrapperStyle={{gap:5}} */
                    renderItem={({ item }) => {
                        return (
                            <Pressable
                                onPress={() => NotesNav.navigate<'EditNote'>('EditNote',item)}
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
                <FAB nameIcon="add" accessibilityLabel="Add a new note" onPress={() => NotesNav.navigate<'CreateNote'>('CreateNote')} />
            </View>
        </SafeAreaView>
    )
};

export default Home;