import { FavoritesStackParamList } from "@navigation/navigation.types";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import styles from "./editFavoriteNoteScreen.styles"
import useEditFavoriteNote from "./editFavoriteNoteScreen.hook";
import { Footer, Title, Hearder, Content } from "@components/notes/index";
type Props = NativeStackScreenProps<FavoritesStackParamList, 'EditFavoriteNote'>;

const EditFavoriteNote = ({ route }: Props) => {
    const note = route.params;
    const { control, onBack } = useEditFavoriteNote(note.id,note.title,note.content);
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
{/*                 <Hearder
                    onBack={onBack}
                    favorite={note.favorite}
                />  */}
                <Title control={control} />
                <Content control={control} />
                <Footer editedDate={note.updated_at} />
            </View>
        </SafeAreaView>
    );
}

export default EditFavoriteNote;