import type { Transaction } from 'react-native-sqlite-storage';

export const createNotesTable = (tx: Transaction) => {
  tx.executeSql(`
    CREATE TABLE IF NOT EXISTS notes (
      id VARCHAR(36) PRIMARY KEY NOT NULL,
      title TEXT DEFAULT 'Untitle',
      content TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_DATE,
      updated_at DATETIME DEFAULT CURRENT_DATE
    );
  `);
};

export default createNotesTable;