import { useNavigation, CompositeScreenProps } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, DrawerParamList } from "@navigation/navigation.types";
import { UseNoteContext } from "@context/noteContext";
import { DrawerNavigationProp } from '@react-navigation/drawer';
type stackNavProp = NativeStackNavigationProp<RootStackParamList,'Home'>;
type drawerNavProp = DrawerNavigationProp<DrawerParamList, 'Notes'>;

const useHome = ()=>{
    const {notes} = UseNoteContext();
    const stackNav = useNavigation<stackNavProp>();
    const drawerNav = useNavigation<drawerNavProp>();
    return {notes,stackNav,drawerNav};
}

export default useHome;