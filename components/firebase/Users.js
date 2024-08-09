import firebaseApp from '../firebase/AppData';
import { getDatabase, ref } from 'firebase/database';
const database = getDatabase(firebaseApp);
const usersDB = ref(database, "Users");

export default usersDB;