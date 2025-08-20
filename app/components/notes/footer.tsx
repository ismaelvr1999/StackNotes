import { colors, sizes } from "@constants/index";
import { StyleSheet, Text, View } from "react-native"
import ButtonIcon from "@components/buttonIcon/buttonIcon";
type Props = {
    editedDate: string;
    handleOpenSheet: () => void;
}

const Footer = ({ editedDate, handleOpenSheet }: Props) => {
    const date = new Date(editedDate);
    return (
        <View>
            <View style={styles.footerContainer}>
                <ButtonIcon nameIcon="palette" accessibilityLabel="set-color" onPress={handleOpenSheet} />
                <Text style={styles.editedDateText}>Edited {date.toDateString()}</Text>
            </View>
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
        color: colors.TEXT,
        fontSize: sizes.FONT_XS,
        textAlign: "center"
    }
});

