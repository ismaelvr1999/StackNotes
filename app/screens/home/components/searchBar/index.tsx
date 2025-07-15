import colors from "@constants/colors";
import sizes from "@constants/sizes";
import { View, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";
const SearchBar = () => {
    return (
        <View style={styles.searchBarContainer}>
            <Icon name="search" size={sizes.FONT_LG} color={colors.ICON} />
            <TextInput placeholder="Search your notes" style={styles.searchBarInput} />
        </View>
    )
};

export default SearchBar;