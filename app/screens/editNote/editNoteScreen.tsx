import { RootStackParamList } from "@navigation/navigation.types";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import styles from "./editNoteScreen.styles";
import useEditNote from "./editNoteScreen.hook";
import FAB from "@components/fab/fab";
import Hearder from "@components/notes/header";
import Title from "@components/notes/title";
import Content from "@components/notes/content";
import Footer from "@components/notes/footer";
type Props = NativeStackScreenProps<RootStackParamList, 'EditNote'>;

const EditNote = ({route,navigation}:Props) =>{
    const {id,title,content,updated_at} = route.params;
    const { control, handleSubmit, onSubmit } = useEditNote(id,title,content);
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>  
                <Hearder 
                    onBack={() => navigation.goBack()} 
                    id={id}
                />
                <Title control={control} />
                <Content control={control} />
                <Footer editedDate={updated_at} />
                <FAB nameIcon="save" accessibilityLabel="Save note" onPress={handleSubmit(onSubmit)} />
            </View>
        </SafeAreaView>
    );
}
    
export default EditNote;