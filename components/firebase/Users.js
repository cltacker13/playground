import firebaseApp from '../firebase/AppData';
//import { getAuth } from 'firebase/auth';
//const auth = getAuth(firebaseApp);

import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export default auth;

