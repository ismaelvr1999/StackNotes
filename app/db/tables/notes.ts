import type { Transaction } from 'react-native-sqlite-storage';

export const createNotesTable = (tx: Transaction) => {
  tx.executeSql(`
    CREATE TABLE IF NOT EXISTS notes (
      id TEXT PRIMARY KEY NOT NULL,
      title TEXT DEFAULT 'Untitle',
      content TEXT NOT NULL,
      created_at DATETIME DEFAULT (datetime('now')),
      updated_at DATETIME DEFAULT (datetime('now'))
    );
  `);
};

export default createNotesTable;