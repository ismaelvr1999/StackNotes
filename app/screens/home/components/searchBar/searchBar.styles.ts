import { StyleSheet } from "react-native";
import {colors,sizes} from "@constants/index";
const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.BORDER,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 15,
    paddingHorizontal: 15
  },
  searchBarInput: {
    fontSize: sizes.FONT_MD,
    flex:1,
    color: colors.TEXT,
    marginLeft: 5
  },

});

export default styles;