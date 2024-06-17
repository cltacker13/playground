import firebaseApp from '../firebase/AppData';
import { getDatabase, ref } from 'firebase/database';
const database = getDatabase(firebaseApp);
const gamesDB = ref(database, "Games");

export default gamesDB;