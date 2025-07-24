import { useNavigation } from '@react-navigation/native';
import { SubmitHandler, useForm, } from "react-hook-form";
import connection from "@db/connection";
import { insertNote } from "@db/queries/notes.queries";
import { CUNoteFormData, CUNoteFormSchema } from "@schemas/notes.schemas";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "@navigation/navigation.types";
import showToast from "@utils/showToast";
import { zodResolver } from '@hookform/resolvers/zod';
import { UseNoteContext } from '@context/noteContext';
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'CreateNote'>;
const useNote = () => {
    const {fetchAndRefreshNotes} = UseNoteContext();
    const navigation = useNavigation<NavigationProp>();
    const { control, handleSubmit } = useForm<CUNoteFormData>({
        resolver: zodResolver(CUNoteFormSchema),
        defaultValues:{
            title: "Untitle"
        }
    });
    const onSubmit: SubmitHandler<CUNoteFormData> = async (d) => {
        const db = await connection();
        const result = await insertNote(db, d);
        await fetchAndRefreshNotes();
        showToast('Note saved');
    }
    return {navigation, onSubmit, control, handleSubmit}
}

export default useNote;