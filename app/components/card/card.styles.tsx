import { StyleSheet } from "react-native";
import {colors,sizes} from "@constants/index";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: colors.BORDER,
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        overflow: "hidden",
        marginVertical: 5
    },
    title: {
        fontSize: sizes.FONT_MD,
        color: colors.TEXT,
        fontWeight: "bold",
    },
    textContent: {
        color: colors.TEXT,
        fontSize: sizes.FONT_SM
    }
});

export default styles;