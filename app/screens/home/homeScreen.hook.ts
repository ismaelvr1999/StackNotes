import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "@navigation/navigation.types";
import { UseNoteContext } from "@/context/noteContext";
type NavigationProp = NativeStackNavigationProp<RootStackParamList,"Home">;
const useHome = ()=>{
    const {notes} = UseNoteContext();
    const navigation = useNavigation<NavigationProp>();

    return {notes,navigation};
}

export default useHome;