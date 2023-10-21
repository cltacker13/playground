import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function Nav({navigation}){
    const [visible, setVisible] = useState(true);

    function toggleVisibility(){
        return setVisible(!visible);
    };

    return(
        <View style={styles.navContainer}>
            <Pressable onPress={toggleVisibility}>
                <Text>Navigation Menu</Text>
            </Pressable>
            <View style={visible ? styles.showNavList : styles.hideNavList}>
                <Pressable style={styles.navButton} 
                    onPress={() =>
                        navigation.navigate('Home')
                    }
                    title="Go to Home Page"
                ><Text style={styles.buttonLabel}>Home</Text></Pressable>
                <Pressable style={styles.navButton} 
                    onPress={() =>
                        navigation.navigate('About')
                    }
                    title="Go to About Page"
                ><Text style={styles.buttonLabel}>About</Text></Pressable>
                <Pressable style={styles.navButton} 
                    onPress={() =>
                        navigation.navigate('Projects')
                    }
                    title="Go to Projects Page"
                ><Text style={styles.buttonLabel}>Projects</Text></Pressable>
            </View>
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
    hideNavList:{
        display: 'none',
        height: 10,
    },
    showNavList:{
        //display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 'auto',
        width: 300,
    },
    navButton:{
        borderRadius: 25, 
        height: 25,
        width: 100,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    buttonLabel:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
});