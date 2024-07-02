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
            <Pressable style={styles.navListHeader} 
                onPress={toggleVisibility}>
                <Text style={styles.headerText}>Navigation Menu</Text>
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
                <Pressable style={styles.navButton} 
                    onPress={() =>
                        navigation.navigate('Profile')
                    }
                    title="Go to Profile Page"
                ><Text style={styles.buttonLabel}>Profile</Text></Pressable>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navContainer:{
        //flex: 1,
        //height: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'flex-start',
        marginBottom: 5,
    },
    navListHeader:{
        height: 30,
        marginBottom: 5,
    },
    headerText:{
        fontSize: 20,
    },
    hideNavList:{
        display: 'none',
        height: 10,
    },
    showNavList:{
        //display: 'flex',
        flexDirection: 'row',
        //flex: 1,
        //alignItems: 'center',
        //height: 40,
        //width: 300,
    },
    navButton:{
        //flex: .3,
        borderRadius: 25, 
        height: 35,
        width: 120,
        backgroundColor: 'purple',
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