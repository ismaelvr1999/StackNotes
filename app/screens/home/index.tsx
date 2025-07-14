import { Text, View, Pressable, FlatList } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from "../../navigation/types";
import styles from "./styles";
import Card from "../../components/card/card";
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from "../../constants/colors";
import sizes from "../../constants/sizes";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
    const notes = [{ id: "1", title: "Untitle", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit." },
    { id: "2", title: "Untitle", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit." },]
     const navigation = useNavigation<NavigationProp>(); 
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>My Notes</Text>
                <FlatList
                    numColumns={1}
                    data={notes}
                    /* columnWrapperStyle={{gap:5}} */
                    renderItem={({ item }) => <Card title={item.title} content={item.content} />} 
                    keyExtractor={item => item.id} 
                    ListEmptyComponent={<Text style={{ textAlign: 'center' }}>No notes yet</Text>}/>
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