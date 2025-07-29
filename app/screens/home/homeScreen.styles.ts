import { StyleSheet } from "react-native";
import {colors,sizes} from "@constants/index";
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    paddingHorizontal: 10
  },
  container: {
    flex: 1
  },
  addNote: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: colors.PRIMARY,
    borderRadius: 30,
    padding: 16
  },
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
    flex:1
  }
});

export default styles;