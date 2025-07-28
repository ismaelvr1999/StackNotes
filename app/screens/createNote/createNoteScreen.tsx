import { View } from "react-native";
import styles from "./createNoteScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context"
import useNote from "./createNoteScreen.hook";
import Hearder from "@components/notes/header";
import Title from "@components/notes/title";
import Content from "@components/notes/content";

const CreateNote = () => {
    const { control, onBack } = useNote();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Hearder onBack={onBack} />
                <Title control={control} />
                <Content control={control}/>
            </View>
        </SafeAreaView>
    )
}

export default CreateNote;