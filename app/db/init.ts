import connection from "./connection"
import createNotesTable from "./tables/notes";
import showToast from "@utils/showToast";
const initDB = async () => {
    try {
        const db = await connection();
        await db.transaction((tx) => {
            createNotesTable(tx);
        })
    } catch (error) {
        console.error("Failed to initialize database:", error);
        showToast("Error starting app.  Try again.");
    }
};

export default initDB;