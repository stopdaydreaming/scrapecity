import lowdb from 'lowdb';
import FileSync from 'lowdb/adapaters/FileSync';

export default function getDB(){
  const adapter = new FileSync('../db.json');
  const db = low(adapter);
  return db;
}
