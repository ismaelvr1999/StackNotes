import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const connection = async () => {
  try {
    const db = await SQLite.openDatabase({ name: 'stacknotes.db', location: 'default' });
    console.log('Database opened');
    return db;
  } catch (error) {
    console.log('Error opening database', error);
    throw error;
  }
};

export default connection;
