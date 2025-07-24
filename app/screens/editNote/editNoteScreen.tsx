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
type Props = NativeStackScreenProps<RootStackParamList, 'EditNote'>;

const EditNote = ({route,navigation}:Props) =>{
    const {id,title,content} = route.params;
    const { control, handleSubmit, onSubmit } = useEditNote(id,title,content);
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>  
                <Hearder 
                    onBack={() => navigation.goBack()} 
                />
                <Title control={control} />
                <Content control={control} />
                <FAB nameIcon="save" accessibilityLabel="Save note" onPress={handleSubmit(onSubmit)} />
            </View>
        </SafeAreaView>
    );
}
    
export default EditNote;