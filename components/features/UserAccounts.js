import auth from "../firebase/Users";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //Sign up
        const user = userCredential.user;

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //Sign in
        const user = userCredential.user;

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

signOut(auth)
    .then(() => {
        //sign out success
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
