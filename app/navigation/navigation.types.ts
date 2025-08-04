import { NoteType } from "@schemas/notes.schemas";

export type RootStackParamList = {
    Home: undefined,
    CreateNote: undefined,
    EditNote: NoteType,
}

export type DrawerParamList = {
  Notes: undefined;
};