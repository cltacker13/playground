import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Nav from './Nav';

export default function Profile({navigation}){

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Nav navigation={navigation}/>
                <View style={styles.body}>
                    <Text>This is the Profile Page. </Text>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    main:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    body:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 'auto',
        margin: 10,
        paddingHorizontal: 15,
    },
    
});