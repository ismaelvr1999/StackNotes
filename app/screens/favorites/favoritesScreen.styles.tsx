import { StyleSheet } from "react-native";
import { colors, sizes } from "@constants/index";
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.BACKGROUND,
        paddingHorizontal: 15
    },
    container: {
        flex: 1
    },
    title: {
        color: colors.TEXT,
        fontSize: sizes.FONT_LG,
        fontWeight: "bold"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: "10",
        marginBottom: 15
    },
    searchBarInput: {
        fontSize: sizes.FONT_MD,
        color: colors.TEXT,
        borderColor: colors.BORDER,
        borderWidth: 1,
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 15
    },

});
export default styles;