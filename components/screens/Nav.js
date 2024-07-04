import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function Nav({navigation}){
    const [visible, setVisible] = useState(false);

    function toggleVisibility(){
        return setVisible(!visible);
    };

    return(
        <View style={styles.navContainer}>
            <View style={styles.mainRow}>
                <View style={styles.leftSide}>
                    <Pressable style={styles.navListHeader} 
                        onPress={toggleVisibility}>
                        <Text style={styles.headerText}>Menu</Text>
                    </Pressable>
                </View>
            </View>
            <View style={visible ? styles.showNavList : styles.hideNavList}>
                <View style={styles.firstRow}>
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
                <View style={styles.secondRow}>
                    <Pressable style={styles.profileButton} 
                        onPress={() =>
                            navigation.navigate('Profile')
                        }
                        title="Go to Profile Page"
                    ><Text style={styles.buttonLabel}>Profile</Text></Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navContainer:{
        //flex: 1,
        //height: 50,
        width: '100%',
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'flex-start',
        marginBottom: 5,
        flexDirection: 'column',
    },
    mainRow:{
        flex: 1,
        flexDirection: 'row',
        //alignItems: 'center',
        //alignContent: 'stretch',
        width: '100%'
    },
    leftSide:{
        //flex: 1,
        minWidth: 120,
        maxWidth: '50%',
        //alignSelf: 'flex-start',
        alignContent: 'flex-start',
        marginHorizontal: 10,
        //marginRight: 40,
        //paddingHorizontal: 10,
    },
    firstRow:{
        flexDirection: 'row'
    },  
    secondRow: {
        flexDirection: 'row' 
    },
    navListHeader:{
        marginTop: 5,
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
        flexDirection: 'column',
        //flex: 1,
        alignItems: 'center',
        //height: 40,
        //width: 300,
    },
    profileButton:{
        flexDirection: 'row',
        //alignSelf: 'flex-end',
        alignItems: 'center',
        borderRadius: 25, 
        height: 35,
        width: 120,
        backgroundColor: 'purple',
        justifyContent: 'center',
        margin: 1,
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