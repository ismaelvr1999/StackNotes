import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  row: {
    flexDirection: "column",
    gap: 10,
    marginVertical: 5
  },
  title: {
    fontSize: 42,
    color: "white",
    fontWeight: "bold",
    marginBottom: 15
  },
  addNote:{
    backgroundColor: "green",
    color: "white",
    padding: 10,
    borderRadius:10,
    position: "absolute",
    right:0,
    bottom: 10
  }
});

export default styles;