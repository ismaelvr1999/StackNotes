import { useNavigation } from '@react-navigation/native';
import { SubmitHandler, useForm, } from "react-hook-form";
import connection from "@db/connection";
import { updateNote } from "@db/queries/notes.queries";
import { CUNoteFormData, CUNoteFormSchema } from "@schemas/notes.schemas";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "@navigation/navigation.types";
import showToast from "@utils/showToast";
import { zodResolver } from '@hookform/resolvers/zod';
import { UseNoteContext } from '@context/noteContext';
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'CreateNote'>;

const useEditNote = (id:string,title:string,content:string) => {
    const {fetchAndRefreshNotes} = UseNoteContext();
    const navigation = useNavigation<NavigationProp>();
    const { control, handleSubmit } = useForm<CUNoteFormData>({
        resolver: zodResolver(CUNoteFormSchema),
        defaultValues:{
            id,
            title,
            content
        }
    });
    const onSubmit: SubmitHandler<CUNoteFormData> = async (d) => {
        const db = await connection();
        const result = await updateNote(db, d);
        await fetchAndRefreshNotes();
        showToast('Note saved');
    }
    return {navigation, onSubmit, control, handleSubmit}
}

export default useEditNote;