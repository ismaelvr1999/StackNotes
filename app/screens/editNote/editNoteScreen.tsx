import { RootStackParamList } from "@navigation/navigation.types";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import styles from "./editNoteScreen.styles";
import useEditNote from "./editNoteScreen.hook";
import { Footer, Title, Hearder, Content } from "@components/notes/index";
type Props = NativeStackScreenProps<RootStackParamList, 'EditNote'>;

const EditNote = ({ route }: Props) => {
    const { id, title, content, updated_at } = route.params;
    const { control, onBack } = useEditNote(id, title, content);
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Hearder
                    onBack={onBack}
                    id={id}
                />
                <Title control={control} />
                <Content control={control} />
                <Footer editedDate={updated_at} />
            </View>
        </SafeAreaView>
    );
}

export default EditNote;