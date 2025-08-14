import { StyleSheet } from "react-native";
import {colors} from "@constants/index";
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    paddingHorizontal: 10
  },
  container: {
    flex: 1
  },
  notesList: {
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

export default styles;