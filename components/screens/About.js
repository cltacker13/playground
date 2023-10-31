import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Nav from './Nav';

export default function About({navigation}){

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Nav navigation={navigation}/>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>
                        Hello, My name is Chrystal. 
                        I am currently learning how to develop cross platform apps with React. 
                        Follow my discovery journey here and find links to various completed projects, as they become available. 
                    </Text>
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
});