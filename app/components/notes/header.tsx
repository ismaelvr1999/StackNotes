import ButtonIcon from "@components/buttonIcon/buttonIcon";
import { StyleSheet, View } from "react-native";

type HearderProps = {
    onBack: () => void;
};

const Hearder = ({ onBack }: HearderProps) => {
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
                    accessibilityLabel="go back"
                    onPress={onBack}
                />
                <ButtonIcon
                    nameIcon="star-border"
                    accessibilityLabel="go back"
                    onPress={onBack}
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
        gap:10,
        alignItems: "center"
    }
})