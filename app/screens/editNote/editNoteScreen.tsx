import { HomeStackParamList } from "@navigation/navigation.types";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import styles from "./editNoteScreen.styles";
import useEditNote from "./editNoteScreen.hook";
import { Footer, Title, Hearder, Content } from "@components/notes/index";
type Props = NativeStackScreenProps<HomeStackParamList, 'EditNote'>;

const EditNote = ({ route }: Props) => {
    const note = route.params;
    const { control, onBack, favState, handlerDelete, handlerToggleFav } = useEditNote(note.id,note.title,note.content,note.favorite);
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

export default EditNote;