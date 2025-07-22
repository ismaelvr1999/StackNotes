export type RootStackParamList = {
    Home: undefined,
    CreateNote: undefined,
    EditNote: {
        id:string,
        content: string,
        title: string
    },
}