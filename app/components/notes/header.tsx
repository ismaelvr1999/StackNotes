import ButtonIcon from "@components/buttonIcon/buttonIcon";
import { StyleSheet, View } from "react-native";

type HearderProps = {
    onBack: () => void;
    favorite: 0 | 1;
    handlerDelete: () => Promise<void>;
    handlerToggleFav: () => Promise<void>;
};

const Hearder = ({ favorite, handlerToggleFav, handlerDelete, onBack }: HearderProps) => {
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