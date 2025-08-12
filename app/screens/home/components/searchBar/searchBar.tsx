import { View, TextInput } from "react-native";
import styles from "./searchBar.styles";
import ButtonIcon from "@components/buttonIcon/buttonIcon";
type Props = {
    openDrawer: () => void; 
    search:string;
   setSearch: (text:string) => void;
} 
const SearchBar = ({openDrawer,search,setSearch}:Props) => {
    return (
        <View style={styles.searchBarContainer}>
            <ButtonIcon nameIcon="menu" accessibilityLabel="open drawer" onPress={openDrawer} />
            <TextInput value={search} onChangeText={(text) => setSearch(text)} placeholder="Search your notes" style={styles.searchBarInput} />
        </View>
    )
};

export default SearchBar;