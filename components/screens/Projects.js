import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Nav from './Nav';
import SimpleCalc from './Projects/SimpleCalc';
import WildPet from './Projects/WildPet';

export default function Projects({navigation}){

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Nav navigation={navigation}/>
                <View style={styles.body}>
                    <Text style={styles.h1}>This is the Projects Page. </Text>
                    <View style={styles.entry}> <SimpleCalc/> </View>
                    <View style={styles.entry}> <WildPet/> </View>
                </View>
            </View>
            <StatusBar style="auto"></StatusBar>
        </SafeAreaView>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 'auto',
        backgroundColor: '#fff',
    },
    main:{
        flex: 1, 
        height: 'auto',
        alignItems: 'center', 
    },
    body:{
        margin: 10,
        paddingHorizontal: 15,
        textAlign: 'left',
        //justifyContent: 'flex-start',
    },
    h1:{
        fontWeight:"bold",
        fontSize: 18,
        textAlign: 'center',
    },
    entry:{
        marginTop: 10,
        marginHorizontal: 10,
        //width: 350,
    } 
    
});