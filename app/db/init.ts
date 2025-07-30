import connection from "./connection"
import createFavoritesTable from "./tables/favorites";
import createNotesTable from "./tables/notes";
import showToast from "@utils/showToast";
const initDB = async () => {
    try {
        const db = await connection();
        await db.transaction((tx) => {
            tx.executeSql("PRAGMA foreign_keys = ON");
            createNotesTable(tx);
            createFavoritesTable(tx);
        })
    } catch (error) {
        console.error("Failed to initialize database:", error);
        showToast("Error starting app.  Try again.");
    }
};

export default initDB;