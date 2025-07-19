import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

let db: SQLiteDatabase | null = null;

const connection = async () => {
  if (db) {
    return db;
  }
  try {
    let db = await SQLite.openDatabase({ name: 'stacknotes.db', location: 'default' });
    console.log('Database opened');
    return db;
  } catch (error) {
    console.log('Error opening database', error);
    throw error;
  }
};

export const closeConnection = async () => {
  if (db) {
    try {
      await db.close();
      console.log('Database closed');
      db = null;
    } catch (error) {
      console.log('Error closing database', error);
    }
  }
};

export default connection;
