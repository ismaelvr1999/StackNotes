import { StyleSheet } from "react-native";
import colors from "@constants/colors";
import sizes from "@constants/sizes";
const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.BORDER,
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    marginBottom: 15
  },
  searchBarInput: {
    fontSize: sizes.FONT_MD,
    flex:1,
    color: colors.TEXT
  }
});

export default styles;