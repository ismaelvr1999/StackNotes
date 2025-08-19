import { StyleSheet } from "react-native";
import sizes from "@constants/sizes";
import colors from "@constants/colors";
const styles = StyleSheet.create({
    title: {
        color: colors.TEXT,
        fontSize: sizes.FONT_LG,
        marginBottom: 10
    },
    backgroundStyle: {
        backgroundColor: '#333333'
    },
    colorsListContainer: {
        padding: 5
    },
    colorContainer: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius:25,
        height: 50,
        width: 50,
        marginRight: 10,
    }
});
export default styles;