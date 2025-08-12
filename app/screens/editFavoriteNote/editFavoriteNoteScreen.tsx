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
    const {  control, onBack, favState, handlerDelete, handlerToggleFav  } = useEditFavoriteNote(note.id,note.title,note.content,note.favorite);
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Hearder
                    onBack={onBack}
                    favorite={favState}
                    handlerDelete={handlerDelete}
                    handlerToggleFav={handlerToggleFav}
                /> 
                <Title control={control} />
                <Content control={control} />
                <Footer editedDate={note.updated_at} />
            </View>
        </SafeAreaView>
    );
}

export default EditFavoriteNote;