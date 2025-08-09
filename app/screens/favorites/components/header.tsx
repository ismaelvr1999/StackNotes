import { Text, View, TextInput, StyleSheet } from "react-native";
import { colors, sizes } from "@constants/index";
import ButtonIcon from "@components/buttonIcon/buttonIcon";
type props = {
    openDrawer: () => void;
    searchValue: string;
    setSearch: (text:string) => void;
}

const Header = ({searchValue,openDrawer,setSearch}:props) => {
    return (
        <View style={styles.header}>
            <ButtonIcon nameIcon="menu" accessibilityLabel="open drawer" onPress={openDrawer} />
            <Text style={styles.title}>Favorites</Text>
            <TextInput value={searchValue} onChangeText={(text) => setSearch(text)} placeholder="Search your notes" style={styles.searchBarInput} />
        </View>
    );
};
export default Header;

const styles = StyleSheet.create({
    title: {
        color: colors.TEXT,
        fontSize: sizes.FONT_LG,
        fontWeight: "bold"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
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