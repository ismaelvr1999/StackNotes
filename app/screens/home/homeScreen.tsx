import { Text, View, Pressable, FlatList } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./homeScreen.styles";
import Card from "@components/card/card";
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from "@constants/colors";
import sizes from "@constants/sizes";
import SearchBar from "./components/searchBar/searchBar";
import useHome from "./homeScreen.hook";
const Home = () => {
    const {notes,navigation} = useHome();
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
                onPress={() => navigation.navigate<'CreateNote'>('CreateNote')}
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