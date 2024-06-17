import React, { useState, useCallback} from 'react';
import { StyleSheet, Text, View, Pressable, Linking } from 'react-native';

const connect4URL = 'https://cltacker13.github.io/theconnect4app/';

const OpenURLButton = ({url,children}) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if(supported){
            await Linking.openURL(url);
        }else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);
    return (<Pressable onPress={handlePress}>
                <Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>Click to Navigate to the Game.</Text>
            </Pressable>)
};

export const connect4AppTitle = 'The Connect 4 App';
export const connect4AppDesc = 'Started as a CodeWars kata challenge to create the backend functionality, then I made this basic user interface for it. ';

export default function Connect4App(){
    const [visible, setVisible] = useState(false);

    function toggleVisibility(){
        return setVisible(!visible);
    };

return(
        <View style={styles.body}>
            <Text style={styles.h1}>{connect4AppTitle}</Text>
            <Text style={styles.descText}>{connect4AppDesc}</Text>
            <OpenURLButton url={connect4URL}></OpenURLButton>
        </View>
    );
};

const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 'auto',
        marginTop: 10,
    },
    h1:{
        fontWeight:"bold",
        fontSize: 20,
        textAlign: 'center',
    },
    descText:{
        fontSize: 16,
    },
    hide:{
        display: 'none',
        height: 10,
    },
    show:{
        alignItems: 'center',
        height: 'auto',
        width: 350,
    },
});