import { NoteType } from "@schemas/notes.schemas";

export type HomeStackParamList = {
    Home: undefined,
    CreateNote: undefined,
    EditNote: NoteType,
}

export type DrawerParamList = {
  NotesStack: undefined;
  FavoritesStack: undefined;
};

export type FavoritesStackParamList = {
    Favorites: undefined,
    EditFavoriteNote: NoteType,
}