import connection from "./connection"
import createNotesTable from "./tables/notes";

const initDB = async ()=>{
    const  db = await connection();
    await db.transaction((tx)=>{
        createNotesTable(tx);
    })
};

export default initDB;