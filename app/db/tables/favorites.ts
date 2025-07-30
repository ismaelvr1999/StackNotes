import type { Transaction } from 'react-native-sqlite-storage';

export const createFavoritesTable = (tx: Transaction) => {
  tx.executeSql(`
    CREATE TABLE IF NOT EXISTS favorites (
      id TEXT PRIMARY KEY NOT NULL,
      note_id TEXT NOT NULL,
      created_at DATETIME DEFAULT (datetime('now','localtime')),
      updated_at DATETIME DEFAULT (datetime('now','localtime')),
      FOREIGN KEY (note_id) REFERENCES notes(id)
    );
  `);
};

export default createFavoritesTable;