import { HomeStackParamList } from "@navigation/navigation.types";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View} from "react-native";
import styles from "./editNoteScreen.styles";
import useEditNote from "@hooks/editNote.hook";
import { Footer, Title, Hearder, Content } from "@components/notes/index";
import BottomSheetColors from "@/components/bottomSheetColors/bottomSheetColors";
type Props = NativeStackScreenProps<HomeStackParamList, 'EditNote'>;

const EditNote = ({ route, navigation }: Props) => {
    const note = route.params;
    const {
        control,
        onBack,
        favState,
        handlerDelete,
        handlerToggleFav,
        handleOpenBottomSheet,
        bottomSheetRef,
        handleChangeColor,
        noteColor } = useEditNote(note, navigation.goBack);
    
    return (
        <SafeAreaView style={{...styles.safeArea,backgroundColor:noteColor}}>
            <View style={styles.container}>
                <Hearder
                    onBack={onBack}
                    favorite={favState}
                    handlerDelete={handlerDelete}
                    handlerToggleFav={handlerToggleFav}
                />
                <Title control={control} />
                <Content control={control} />

                <Footer
                    editedDate={note.updated_at}
                    handleOpenSheet={handleOpenBottomSheet} />
                <BottomSheetColors handleChangeColor={handleChangeColor} noteColor={noteColor} bottomSheetRef={bottomSheetRef} />
            </View>
        </SafeAreaView>
    );
}

export default EditNote;