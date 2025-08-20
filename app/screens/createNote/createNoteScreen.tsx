import { View } from "react-native";
import styles from "./createNoteScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context"
import useCreateNote from "./createNoteScreen.hook";
import { Footer, Content, Title, Hearder } from "@components/notes/index";
import BottomSheetColors from "@components/bottomSheetColors/bottomSheetColors";
const CreateNote = () => {
    const { 
        control, 
        onBack, 
        favState, 
        handlerDelete, 
        handlerToggleFav, 
        handleOpenBottomSheet,
        handleChangeColor,
        noteColor,
        bottomSheetRef  } = useCreateNote();
    const date = new Date().toString();
    return (
        <SafeAreaView style={{...styles.safeArea,backgroundColor:noteColor}}>
            <View style={styles.container}>
                <Hearder 
                    onBack={onBack} 
                    favorite={favState} 
                    handlerToggleFav={handlerToggleFav}
                    handlerDelete={handlerDelete}
                    />
                <Title control={control} />
                <Content control={control} />
                <Footer handleOpenSheet={handleOpenBottomSheet} editedDate={date} />
                <BottomSheetColors handleChangeColor={handleChangeColor} noteColor={noteColor} bottomSheetRef={bottomSheetRef} />
            </View>
        </SafeAreaView>
    )
}

export default CreateNote;