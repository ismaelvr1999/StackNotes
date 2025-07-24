import { View } from "react-native";
import styles from "./createNoteScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context"
import useNote from "./createNoteScreen.hook";
import FAB from "@components/fab/fab";
import Hearder from "@components/notes/header";
import Title from "@components/notes/title";
import Content from "@components/notes/content";

const CreateNote = () => {
    const { control, navigation, handleSubmit, onSubmit } = useNote();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Hearder onBack={() => navigation.goBack()} />
                <Title control={control} />
                <Content control={control}/>
                <FAB nameIcon="save" accessibilityLabel="Save note" onPress={handleSubmit(onSubmit)} />
            </View>
        </SafeAreaView>
    )
}

export default CreateNote;