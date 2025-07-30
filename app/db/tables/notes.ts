import type { Transaction } from 'react-native-sqlite-storage';

export const createNotesTable = (tx: Transaction) => {
  tx.executeSql(`
    CREATE TABLE IF NOT EXISTS notes (
      id TEXT PRIMARY KEY NOT NULL,
      title TEXT DEFAULT 'Untitle',
      content TEXT NOT NULL,
      favorite INTEGER NOT NULL DEFAULT 0,
      created_at DATETIME DEFAULT (datetime('now','localtime')),
      updated_at DATETIME DEFAULT (datetime('now','localtime'))
    );
  `);
};

export default createNotesTable;