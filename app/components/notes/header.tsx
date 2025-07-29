import { deleteNote } from "@db/queries/notes.queries";
import ButtonIcon from "@components/buttonIcon/buttonIcon";
import { StyleSheet, View } from "react-native";
import showToast from "@utils/showToast";
import connection from "@db/connection";
import { UseNoteContext } from "@context/noteContext";

type HearderProps = {
    onBack: () => void;
    id?: string;
};

const Hearder = ({ onBack,id }: HearderProps) => {
    const {fetchAndRefreshNotes} = UseNoteContext();
    const handlerDelete = async (id: string | undefined) => {
        if(!id){
            showToast("Nothing to delete");
            return;
        }
        try {
            const db = await connection();
            const result = await deleteNote(db,id);
            showToast("Note deleted");
            fetchAndRefreshNotes();
            onBack();
        } catch(error) {
            console.error("Failed deleted note",error);
            showToast("Error deleted note. Try again.")
        }

    }
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
                    onPress={()=> handlerDelete(id)}
                />
                <ButtonIcon
                    nameIcon="star-border"
                    accessibilityLabel="add to favorites"
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