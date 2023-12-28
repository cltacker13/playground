import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Nav from './Nav';

export default function About({navigation}){

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Nav navigation={navigation}/>
                <View style={styles.body}>
                    <ScrollView style={{maxHeight: 600, padding:5}} indicatorStyle='black'>
                        <Text style={styles.bodyText}>
                            <Text style={{fontWeight: 'bold'}}>About Me & This Playground Space</Text>
                            <Text style={styles.bodyText}>
                            {'\n'}{'\n'}Hello, My name is Chrystal.
                            {'\n'}{'\n'}My coding journey started with HTML websites on my PC's webbrowser and editing MySpace profiles for myself and my friends. I found the coolest features and learned how to incorporate them into a cohesive design that my 'client' would enjoy.
                            {'\n'}{'\n'}Fast forward to 2019, I was working for an online retailer managing a team of copywriters when I started to learn PHP and SQL to better aid my data management tasks.
                            {'\n'}{'\n'}I learned enough to spark an interest in development work, but my career path took me in other directions. I followed this interest as a hobby for a few years. Solving Kata challenges on CodeWars and building a Connect 4 game with React Native.
                            {'\n'}{'\n'}Along with my family, we founded Yogi-Go, Inc. We created a mobile application to connect individuals and local fitness and yoga instructors, but the pandemic made this dream an uphill battle.
                            {'\n'}{'\n'}Following this experience of designing and managing a mobile application based business, I continued to create personal projects and learn more development skills.
                            {'\n'}{'\n'}Currently, I am completing a Coursera.org certification program taught by staff from Meta. The React Native specialization course touches JavaScript, React and React Native frameworks, Git and other version control, data management with APIs, AsyncStorage, and SQLite, as well as UI/UX design with Figma.
                            {'\n'}{'\n'}This project space includes a few of the projects I have created for the education program as well as personal projects for fun.
                            </Text>
                        </Text>
                    </ScrollView>
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
        paddingBottom: 10,
    },
    main:{
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'flex-start', 
        paddingBottom: 5,
    }, 
    body:{
        maxWidth: 600,
        margin: 10,
        paddingHorizontal: 15,
        textAlign: 'left',
        paddingBottom: 5,
    },
    bodyText:{
        fontSize: 18,
    },
});