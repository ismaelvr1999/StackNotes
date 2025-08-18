import { HomeStackParamList } from "@navigation/navigation.types";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, FlatList } from "react-native";
import styles from "./editNoteScreen.styles";
import useEditNote from "@hooks/editNote.hook";
import { Footer, Title, Hearder, Content } from "@components/notes/index";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Ref, useMemo } from "react";
import { sizes } from "@/constants";
import { ScrollView } from 'react-native-gesture-handler';
type Props = NativeStackScreenProps<HomeStackParamList, 'EditNote'>;

const EditNote = ({ route, navigation }: Props) => {
    const note = route.params;
    const snapPoints = useMemo(() => ['25%', '50%'], []);
    const {
        control,
        onBack,
        favState,
        handlerDelete,
        handlerToggleFav,
        handleOpenBottomSheet,
        bottomSheetRef } = useEditNote(note, navigation.goBack);
    const colors = ["blue", "black", "pink", "red", "purple", "gray", "green", "yellow"];
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

                <Footer
                    editedDate={note.updated_at}
                    handleOpenSheet={handleOpenBottomSheet}
                    bottomSheetRef={bottomSheetRef} />

                <BottomSheet
                    ref={bottomSheetRef}
                    index={-1}
                    backgroundStyle={{ backgroundColor: '#333333' }}
                    enablePanDownToClose>
                    <BottomSheetView style={{ padding: 10 }}>
                        <Text
                            style={{
                                color: "white",
                                fontSize: sizes.FONT_LG,
                                marginBottom: 10
                            }}
                        >
                            Color
                        </Text>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingRight: 10 }}
                        >
                            {colors.map((item) => (
                                <View
                                    key={item}
                                    style={{
                                        backgroundColor: item,
                                        borderColor: "white",
                                        borderWidth: 1,
                                        height: 50,
                                        width: 50,
                                        marginRight: 10,
                                    }}
                                />
                            ))}
                        </ScrollView>
                    </BottomSheetView>
                </BottomSheet>
            </View>
        </SafeAreaView>
    );
}

export default EditNote;