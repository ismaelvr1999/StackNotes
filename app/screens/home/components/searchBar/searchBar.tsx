import { View, TextInput } from "react-native";
import styles from "./searchBar.styles";
import { UseNoteContext } from "@context/noteContext";
import ButtonIcon from "@components/buttonIcon/buttonIcon";
const SearchBar = ({openDrawer}:{openDrawer: () => void}) => {
    const { search, setSearch } = UseNoteContext();
    return (
        <View style={styles.searchBarContainer}>
            <ButtonIcon nameIcon="menu" accessibilityLabel="open drawer" onPress={openDrawer} />
            <TextInput value={search} onChangeText={(text) => setSearch(text)} placeholder="Search your notes" style={styles.searchBarInput} />
        </View>
    )
};

export default SearchBar;