import sizes from "@constants/sizes";
import colors from "@constants/colors";
import { StyleSheet, Text, View } from "react-native"
const Footer = ({editedDate}:{editedDate:string}) => {
    const date = new Date(editedDate);
    return (
        <View style={styles.footerContainer}> 
            <Text style={styles.editedDateText}>Edited {date.toDateString()}</Text>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    editedDateText: {
        color: colors.TEXT_SECONDARY,
        fontSize: sizes.FONT_XS,
    }
});

