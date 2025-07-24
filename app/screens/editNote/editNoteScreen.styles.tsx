import { StyleSheet } from "react-native";
import colors from "@constants/colors";
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.BACKGROUND,
        paddingHorizontal: 10
    },
    container: {
        flex: 1
    }
});
export default styles;