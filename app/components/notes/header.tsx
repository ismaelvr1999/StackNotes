import ButtonIcon from "@components/buttonIcon/buttonIcon";
import { StyleSheet, View, Pressable } from "react-native";
import {colors,sizes} from "@constants/index";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type HearderProps = {
    onBack: () => void;
    favorite: 0 | 1;
    pinned:  0 | 1;
    handlerDelete: () => Promise<void>;
    handlerToggleFav: () => Promise<void>;
    togglePin: () => Promise<void>;
};

const Hearder = ({ favorite,pinned, handlerToggleFav, handlerDelete, onBack, togglePin }: HearderProps) => {
    return (
        <View style={styles.container}>
            <ButtonIcon
                nameIcon="arrow-back"
                accessibilityLabel="go back"
                onPress={onBack}
            />
            <View style={styles.ActionBtnsContainer}>
                <ButtonIcon
                    nameIcon="delete"
                    accessibilityLabel="delete note"
                    onPress={handlerDelete}
                />
                <ButtonIcon
                    nameIcon={favorite === 1 ? "star" : "star-border"}
                    accessibilityLabel="add or remove favorites"
                    onPress={handlerToggleFav}
                />
                <Pressable
                    onPress={togglePin}
                    accessibilityRole="button"
                    accessibilityLabel="toggle pin"
                >
                    <Icon name={pinned === 1 ? "pin" : "pin-outline"} size={sizes.FONT_XL} color={colors.ICON} />
                </Pressable>
            </View>
        </View>

    );
};

export default Hearder;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    ActionBtnsContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    }
})