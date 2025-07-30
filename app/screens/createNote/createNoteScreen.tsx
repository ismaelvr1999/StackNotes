import { View } from "react-native";
import styles from "./createNoteScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context"
import useCreateNote from "./createNoteScreen.hook";
import { Footer, Content, Title, Hearder } from "@components/notes/index";
const CreateNote = () => {
    const { control, onBack } = useCreateNote();
    const date = new Date().toString();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Hearder onBack={onBack} favorite={0} />
                <Title control={control} />
                <Content control={control} />
                <Footer editedDate={date} />
            </View>
        </SafeAreaView>
    )
}

export default CreateNote;