import connection from "./connection"
import createNotesTable from "./schemas/Note";

const initDB = async ()=>{
    const  db = await connection();
    await db.transaction((tx)=>{
        createNotesTable(tx);
    })
};

export default initDB;