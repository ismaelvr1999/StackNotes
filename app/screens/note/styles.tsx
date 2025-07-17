import { StyleSheet } from "react-native";
import colors from "@constants/colors";
import sizes from "@constants/sizes";
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.BACKGROUND,
        paddingHorizontal: 10
    },
    container: {
        flex: 1
    },
    title: {
        fontSize: sizes.FONT_XL,
        color: colors.TEXT,
        fontWeight: "bold",
        marginBottom: 15
    },
    saveNote: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: colors.PRIMARY,
        borderRadius: 30,
        padding: 16
    },
    textContent:{
        fontSize: sizes.FONT_MD,
        color: colors.TEXT,

    },
    hearder: {
        marginBottom: 5
    }
});
export default styles;