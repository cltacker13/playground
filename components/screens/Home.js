import React, {useCallback} from 'react';
import { StyleSheet, Text, View, Pressable, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Nav from './Nav';

const linkedInPage = 'https://www.linkedin.com/in/chrystal-tacker/';

const OpenURLButton = ({url,children}) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if(supported){
            await Linking.openURL(url);
        }else {
            console.log(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);
    return (<Pressable onPress={handlePress}>
                <Text style={styles.bodyText}>linkedin.com/in/chrystal-tacker/</Text>
            </Pressable>)
};


export default function Home({navigation}){

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Nav navigation={navigation}/>
                <View style={styles.body}>
                    <Text style={styles.bodyHeaderText}>Hello and Welcome!</Text>
                    <Text style={styles.bodyText}>
                        {'\n'}{'\n'}My name is Chrystal. 
                        {'\n'}{'\n'}I have a voracious appetite to learn and a wildly expanding passion to create innovative solutions.
                        {'\n'}{'\n'}Follow my developer journey and find samples of my various projects. 
                        {'\n'}{'\n'}
                    </Text>
                    <Text style={styles.bodyHeaderText}>Contact Me</Text>
                    <Text style={styles.bodyText}>
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>Email: </Text>{'\n'}cltacker13@gmail.com
                        {'\n'}{'\n'} 
                        <Text style={{fontWeight: 'bold'}}>Phone: </Text>{'\n'}813-765-8783
                        {'\n'}{'\n'}
                        <Text style={{fontWeight: 'bold'}}>LinkedIn: </Text>
                    </Text>
                    <OpenURLButton url={linkedInPage}></OpenURLButton>
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
        maxWidth: 600,
        margin: 10,
        paddingHorizontal: 15,
        textAlign: 'left',
    },
    bodyHeaderText:{
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    bodyText:{
        fontSize: 18,
        textAlign: 'center',
    },
});