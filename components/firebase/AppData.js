//initialize firebase.
import { initializeApp } from 'firebase/app';
const appSettings = {
    apiKey: " AIzaSyCs-YGPKoQFV8GJvqP__Srjnv0DD63psxQ",
    authDomain: "collections-d0f5c.firebaseapp.com",
    databaseURL: "https://collections-d0f5c-default-rtdb.firebaseio.com/"
};
const firebaseApp = initializeApp(appSettings);

export default firebaseApp;