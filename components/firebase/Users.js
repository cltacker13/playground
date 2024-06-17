import firebaseApp from '../firebase/AppData';
/*import { getAuth } from 'firebase/auth';
const auth = getAuth(firebaseApp);*/

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default auth;

