import { NoteType } from "@schemas/notes.schemas";
import { FlatList, Pressable, Text } from "react-native";
import Card from "@components/card/card";
type Props = {
    notes: NoteType[];
    goEditNote: (note: NoteType) => void;
    layout: 'column' | "row";
}
const NoteList = ({ notes, goEditNote, layout }: Props) => {
    return (
        <FlatList
            key={layout}
            numColumns={layout === "column" ? 2 : 1}
            columnWrapperStyle={layout === "column" ? { flex: 1, gap: 5 } : undefined}
            data={notes}
            renderItem={({ item:note }) => {
                return (
                    <Pressable
                        onPress={() => goEditNote(note)}
                        accessibilityRole="button"
                        accessibilityLabel="Edit note"
                        style={{ flex: 1 }}
                    >
                        <Card color={note.color} content={note.content} />
                    </Pressable>

                );
            }
            }
            keyExtractor={item => item.id}
            ListEmptyComponent={<Text style={{ textAlign: 'center', color: "white" }}>No notes found</Text>} />)
};

export default NoteList;