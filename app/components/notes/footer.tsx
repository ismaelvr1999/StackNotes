import { colors, sizes } from "@constants/index";
import { StyleSheet, Text, View } from "react-native"
import ButtonIcon from "@components/buttonIcon/buttonIcon";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Ref, useMemo } from "react";
type Props = {
    editedDate: string;
    bottomSheetRef: Ref<BottomSheet> | undefined;
    handleOpenSheet: () => void;
}

const Footer = ({ editedDate, bottomSheetRef, handleOpenSheet }: Props) => {
    const date = new Date(editedDate);
    const snapPoints = useMemo(() => ['25%', '50%'], []);
    return (
        <View>
            <View style={styles.footerContainer}>
                <ButtonIcon nameIcon="color-lens" accessibilityLabel="set-color" onPress={handleOpenSheet} />
                <Text style={styles.editedDateText}>Edited {date.toDateString()}</Text>
            </View>
{/*             <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints} enablePanDownToClose>
                <BottomSheetView>
                    <Text style={{ color: "white" }}>Hello</Text>
                </BottomSheetView>
            </BottomSheet> */}
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center"
    },
    editedDateText: {
        flex: 1,
        color: colors.TEXT_SECONDARY,
        fontSize: sizes.FONT_XS,
        textAlign: "center"
    }
});

