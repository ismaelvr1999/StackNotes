import { StyleSheet } from "react-native";
import { colors, sizes } from "@constants/index";
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
        color: colors.TEXT,
        fontSize: sizes.FONT_LG,
        fontWeight: "bold"
    }

});
export default styles;