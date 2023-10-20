import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
/*
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView, initialWindowMetrics } from 'react-native-safe-area-context';
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import About from './components/screens/About';
*/

export default function Nav({navigation}){
    return(
        <View style={styles.navContainer}><Text>Navigation Menu</Text>
            <Pressable style={styles.navButton} 
                onPress={() =>
                    navigation.navigate('Home', { })
                }
                title="Go to Home Page"
            ><Text style={styles.buttonLabel}>Home</Text></Pressable>
            <Pressable style={styles.navButton} 
                onPress={() =>
                    navigation.navigate('Profile', { })
                }
                title="Go to Profile Page"
            ><Text style={styles.buttonLabel}>Profile</Text></Pressable>
            <Pressable style={styles.navButton} 
                onPress={() =>
                    navigation.navigate('About', { })
                }
                title="Go to About Page"
            ><Text style={styles.buttonLabel}>About</Text></Pressable>
            <Pressable style={styles.navButton} 
                onPress={() =>
                    navigation.navigate('Projects', { })
                }
                title="Go to Projects Page"
            ><Text style={styles.buttonLabel}>Projects</Text></Pressable>
            
        </View>
    );
};

const styles = StyleSheet.create({
    navContainer:{
        width: 150,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    }, 
    navButton: {
        borderRadius: 25, 
        height: 25,
        width: 100,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    buttonLabel: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
  });