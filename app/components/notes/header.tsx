import ButtonIcon from "@components/buttonIcon/buttonIcon";
import { StyleSheet, View } from "react-native";
import useHearder from "./hooks/hearder.hook";

type HearderProps = {
    onBack: () => void;
    id?: string;
    favorite: 0 | 1;
};

const Hearder = ({ onBack, id, favorite }: HearderProps) => {
    const {handlerDelete,handlerToggleFav,favState} = useHearder(favorite,onBack,id);
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
                    nameIcon={favState === 1 ? "star" : "star-border"}
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