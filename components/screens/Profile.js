import auth from "../firebase/Users";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Nav from './Nav';

const validateEmail = (email) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
}
const validatePassword = (password) => {
    /*'Password must contain one digit from 1 to 9, (not from 0 - 9 ?)
    one lowercase letter, one uppercase letter, 
    one special character, no space, 
    and it must be 8-16 characters long.'*/
    var regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
    return regex.test(password)
}

export default function Profile({navigation}){
    const [email, onEmailChange] = useState('');
    const isEmailValid = validateEmail(email);
    const [password, onPasswordChange] = useState('');
    const isPasswordValid = validatePassword(password);
    const [isFormValid, updateIsFormValid] = useState(false);
    const [isLoggedIn, updateIsLoggedIn] = useState(false);
    console.log(auth);
    console.log(isEmailValid,isPasswordValid,isFormValid)
    const user = auth.currentUser;//maybe user instead of isLoggedIn for conditional render
    
    if(isEmailValid && isPasswordValid){
        updateIsFormValid(true);
    }

    const inlineEmailValidation = () => {
        if(!isEmailValid){
            console.log('Invalid Email:',email)
            //Alert.alert('Enter a Valid Email','Please type a valid email address. Ex: yourname@gmail.com');
        }
    }
    const inlinePasswordValidation = () => {
        if(!isPasswordValid){
            console.log('Invalid Password:',password)
            //Alert.alert('Enter a Valid Password','Please type a password with 8-16 characters, including one digit, one lowercase letter, one uppercase letter, one special character, and no spaces.');
        }
    }

    const signUp = async () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //Sign up
            const user = userCredential.user;
            updateIsLoggedIn(true);    
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    
    const logIn = async () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //Log in
            const user = userCredential.user;
            updateIsLoggedIn(true);    
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    
    const logOut = async () => {
        signOut(auth)
        .then(() => {
            //Log out success
            updateIsLoggedIn(false);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Nav navigation={navigation}/>
                <View style={styles.body}>
                    {isLoggedIn ? 
                    <Text style={styles.bodyText}>My Profile Page </Text>
                    :
                    <View>
                        <Text style={styles.bodyText}>Create Account or Log In </Text>
                        <Text style={styles.formLabel}>Email</Text>
                        <TextInput
                            style={styles.inputBox}
                            onChangeText={onEmailChange}//rendering too many times with onchange
                            value={email}
                            placeholder="Type your email"
                            keyboardType='email-address'
                            onEndEditing={inlineEmailValidation}
                        />
                        <Text style={styles.formLabel}>Password</Text>
                        <TextInput
                            style={styles.inputBox}
                            onChangeText={onPasswordChange}//rendering too many times with onchange
                            value={password}
                            placeholder="Type your pasword"
                            keyboardType='visible-password'
                            onEndEditing={inlinePasswordValidation}
                        />
                        <Pressable style={isFormValid ? styles.signUpButton : styles.invalidFormButton} 
                            onPress={() =>
                                console.log(email,password)
                            }
                            title="Create New Account"
                        >
                            <Text style={styles.buttonLabel}>Sign Up</Text>
                        </Pressable>
                
                    </View>
                    }
                </View>
            </View>
            <StatusBar style="auto"></StatusBar>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: 'auto',
        backgroundColor: '#fff',
    },
    main:{
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'flex-start', 
    }, 
    body:{
        margin: 10,
        paddingHorizontal: 15,
        textAlign: 'left',
    },
    bodyText:{
        fontSize: 18,
    },
    formContainer:{

    },
    formLabel:{
        fontSize: 16,
        margin: 2,
    },
    inputBox:{
        width: 200,
        height: 35,
        borderColor: 'black',
        borderWidth: 1,
        padding: 2,
        margin: 2,
    },
    signUpButton:{
        borderRadius: 10, 
        height: 35,
        width: 120,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    invalidFormButton:{
        borderRadius: 10, 
        height: 35,
        width: 120,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    buttonLabel:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
});