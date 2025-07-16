import type { Transaction } from 'react-native-sqlite-storage';

export const createNotesTable = (tx: Transaction) => {
  tx.executeSql(`
    CREATE TABLE IF NOT EXISTS notes (
      id TEXT PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      content TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
  `);
};

export default createNotesTable;