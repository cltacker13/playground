import auth from "../firebase/Users";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";

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
    const isFormValid = (isEmailValid && isPasswordValid);
    const [isLoggedIn, updateIsLoggedIn] = useState(false);
    const [returningUser, toggleReturningUser] = useState(false);
    const currentUser = auth.currentUser;
    const [displayName, updateDisplayName] = (currentUser ? useState(currentUser.displayName) : useState(''));
    const [username, onUsernameChange] = (currentUser ? useState(currentUser.displayName) : useState(''));
    //console.log(currentUser);
    //console.log(isEmailValid,isPasswordValid,isFormValid)
    
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
        if(isFormValid){
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
        }else{
            console.log('Invalid Form Entry');
            alert('Invalid Form Entry');
        }
    }
    
    const logIn = async () => {
        if(isFormValid){
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //Log in
                const user = userCredential.user;
                updateIsLoggedIn(true);  
                updateDisplayName(user.displayName);  
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('Invalid Email/Password');
            });
        }else{
            console.log('Invalid Form Entry');
            alert('Invalid Form Entry');
        }
    }
    
    const logOut = async () => {
        signOut(auth)
        .then(() => {
            //Log out success
            console.log('Logged Out');
            updateIsLoggedIn(false);
            toggleReturningUser(true);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const updateAccount = async () => {
        if(username != ''){
            updateProfile(auth.currentUser, {
                displayName: username
            }).then(() => {
                // Profile updated!
                updateDisplayName(username);  
                console.log('updated username to:',username)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        }
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Nav navigation={navigation}/>
                <View style={styles.body}>
                    {(currentUser !== null || isLoggedIn) ? 
                    <>
                    <Text style={styles.h1}>My Profile Page</Text>
                    <Text style={styles.bodyText}>Welcome Back, {displayName}!</Text>
                    <Text style={styles.formLabel}>Username</Text>
                    <TextInput
                        style={styles.inputBox}
                        onChangeText={onUsernameChange}
                        value={username}
                        placeholder="Update your username"
                        keyboardType='default'
                    />
                    <Pressable style={styles.saveButton} 
                        onPress={() => {
                            console.log(username),
                            updateAccount()
                        }}
                        title="Update Account Info"
                    >
                        <Text style={styles.buttonLabel}>Save</Text>
                    </Pressable>
                    <Pressable style={styles.logOutButton} 
                        onPress={() => {
                            console.log(email,password),
                            logOut()
                        }}
                        title="Log Out of Account"
                    >
                        <Text style={styles.buttonLabel}>Log Out</Text>
                    </Pressable>
                    </>
                    :
                    <View style={styles.formContainer}>
                        <Text style={styles.h1}>Create Account or Log In </Text>
                        <Text style={styles.formLabel}>Email</Text>
                        <TextInput
                            style={styles.inputBox}
                            onChangeText={onEmailChange}
                            value={email}
                            placeholder="Type your email"
                            keyboardType='email-address'
                            onEndEditing={inlineEmailValidation}
                        />
                        <Text style={styles.formLabel}>Password</Text>
                        <TextInput
                            style={styles.inputBox}
                            onChangeText={onPasswordChange}
                            value={password}
                            placeholder="Type your pasword"
                            keyboardType='visible-password'
                            onEndEditing={inlinePasswordValidation}
                        />
                        {!returningUser ? 
                        <>
                        <Pressable style={isFormValid ? styles.signUpButton : styles.invalidFormButton} 
                            onPress={() => {
                                console.log(email,password),
                                signUp()
                            }}
                            title="Create New Account"
                        >
                            <Text style={styles.buttonLabel}>Sign Up</Text>
                        </Pressable>
                        <Pressable style={styles.textButton} 
                            onPress={() =>
                                toggleReturningUser(true)
                            }
                        >
                            <Text style={styles.bodyText}>Returning User?</Text>
                            <Text style={styles.bodyText}>Click to Log Back In.</Text>
                        </Pressable>
                        </>
                        :
                        <>
                        <Pressable style={isFormValid ? styles.logInButton : styles.invalidFormButton} 
                            onPress={() => {
                                console.log(email,password),
                                logIn()
                            }}
                            title="Log In to Account"
                        >
                            <Text style={styles.buttonLabel}>Log In</Text>
                        </Pressable>
                        <Pressable style={styles.textButton} 
                            onPress={() =>
                                toggleReturningUser(false)
                            }
                        >
                            <Text style={styles.bodyText}>New User?</Text>
                            <Text style={styles.bodyText}>Click to Sign Up.</Text>
                        </Pressable>
                        </>
                        }
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
    h1:{
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    bodyText:{
        fontSize: 18,
    },
    formContainer:{
        alignItems: 'center',
    },
    formLabel:{
        alignSelf: 'flex-start',
        fontSize: 16,
        margin: 2,
    },
    inputBox:{
        width: 250,
        height: 35,
        borderColor: 'black',
        borderWidth: 1,
        padding: 2,
        margin: 2,
    },
    logInButton:{
        borderRadius: 10, 
        height: 35,
        width: 120,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
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
    saveButton:{
        borderRadius: 10, 
        height: 35,
        width: 120,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    logOutButton:{
        borderRadius: 10, 
        height: 35,
        width: 120,
        backgroundColor: 'red',
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
    textButton:{
        height: 50,
        padding: 5,
        marginVertical: 5,
        textAlign: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderStyle: 'dashed',
    },
});