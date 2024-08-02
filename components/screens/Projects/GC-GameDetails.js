import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, Modal, useWindowDimensions } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, update, child, push, onValue } from 'firebase/database';
import auth from '../../firebase/Users';
import gamesDB from '../../firebase/Games';

onAuthStateChanged(auth, (user) => {
    if(user){
        console.log(`${user.displayName} is logged in.`);
    } else {
        console.log(`Not logged in.`);
    }
})

export default function GameDetails({navigation,route}){
    const {height, width, scale, fontScale} = useWindowDimensions();
    //const [gameData, setGameData] = useState([]);
    const currentUser = auth.currentUser;
    const thisGame = route.params.item; 
    const gameRefId = thisGame.id;
    const gameName = thisGame.name;
    //const gameDesc = thisGame.desc;
    const gamePlayers = thisGame.players;
    /*const gameMinPlayers = thisGame.minPlayers;
    const gameMaxPlayers = thisGame.maxPlayers;
    const gameMinTime = thisGame.minTime;
    const gameMaxTime = thisGame.maxTime;*/

    const [gameNameRef, setGameNameRef] = useState(gameName);
    const [newName, setNewName] = useState(gameNameRef);
    const [gameDescRef, setGameDescRef] = useState('');
    const [newDesc, setNewDesc] = useState(gameDescRef);
    const [minPlayerRef, setMinPlayerRef] = useState('');
    const [newMinPlayer, setNewMinPlayer] = useState(minPlayerRef);
    const [maxPlayerRef, setMaxPlayerRef] = useState('');
    const [newMaxPlayer, setNewMaxPlayer] = useState(maxPlayerRef);
    const [minTimeRef, setMinTimeRef] = useState('');
    const [maxTimeRef, setMaxTimeRef] = useState('');

    console.log('Game:',thisGame);
    const [editable, setEditable] = useState(false);

    function toggleEditFields(){
        if(currentUser){
            setEditable(!editable);
        }else{
            setEditable(false);
        }
    }

    function editItem(){
        /*Game Data structure reference:
            {[gameID,{name:name,players:players}]}
        */
        let updates = {};
        let changes = {};
        if(gameNameRef != newName){
            changes = {name:newName}
            console.log('new name:',newName);
        }
        /*if(gameDescRef != newDesc){
            changes += {description:newDesc}
        }
        if(minPlayerRef != newMinPlayer){
            
        }
        if(maxPlayerRef != newMaxPlayer){
            
        }*/
        updates[gameRefId] = changes;
        console.log(changes.name);
        //update(gamesDB,updates) // does not push update yet.
    }

    return(
        <View style={styles.body}>
            <View style={styles.showGames}>
                {/*currentUser*/ false ?
                <>
                    <Text style={styles.inputLabel}>Game Name</Text>
                    <TextInput
                        style={styles.inputbox}
                        value={gameNameRef}
                        placeholder="Name of New Game" 
                        inputMode="text"
                        onChangeText={(e)=>setGameNameRef(e)}
                    />
                    <Text style={styles.inputLabel}>Number of Players</Text>
                    <View style={styles.inputRange}>
                        <TextInput
                            style={styles.inputNumBox}
                            value={minPlayerRef}
                            placeholder="Min #" 
                            inputMode="numeric"
                            onChangeText={(e)=>setMinPlayerRef(e)}
                        />
                        <TextInput
                            style={styles.inputNumBox}
                            value={maxPlayerRef}
                            placeholder="Max #" 
                            inputMode="numeric"
                            onChangeText={(e)=>setMaxPlayerRef(e)}
                        />
                    </View>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                            console.log('edit clicked')
                            //editItem()
                        }}>
                        <Text style={styles.textStyle}>Save</Text>
                    </Pressable>                
                </>
                : <></>
                }
                <View style={styles.itemContainer & {maxHeight: height, maxWidth: width}}>
                    <View style={styles.imageBox}></View>
                    <View style={styles.headerRow}>
                        <Pressable style={styles.favoriteButton}
                            onPress={() => {
                                console.log('Fav Action Clicked')
                            }}>
                            <Text style={styles.editButtonText}>Star</Text>
                        </Pressable>
                        <View style={styles.itemName}>
                            { editable == false ?
                            <>
                                <Text style={styles.h1}>{gameName}</Text>
                            </>
                            :
                            <>
                                <TextInput
                                    style={styles.inputbox}
                                    value={newName}
                                    placeholder="Name of the Game" 
                                    inputMode="text"
                                    onChangeText={(e)=>setNewName(e)}
                                />
                            </>
                            }
                        </View>
                        <Pressable style={styles.editButton}
                            onPress={() => {
                                console.log('Edit Action Clicked'),
                                toggleEditFields()
                            }}>
                            <Text style={styles.editButtonText}>Edit</Text>
                        </Pressable>
                    </View>
                    <View style={styles.descSection}>
                        { editable == false ?
                            <>
                                <Text style={styles.descText}>{gameName} is a great game.</Text>
                            </>
                            :
                            <>
                                <TextInput
                                    style={styles.inputbox}
                                    value={newDesc}
                                    placeholder="Description of the Game" 
                                    inputMode="text"
                                    onChangeText={(e)=>setNewDesc(e)}
                                />
                            </>
                        }
                    </View>
                    { editable == false ?
                    <>
                        <View style={styles.highlightsRow}>
                            <View style={styles.subSection}>
                                <Text style={styles.descText}>{gamePlayers}</Text>
                                <Text style={styles.sectionLabel}>Player(s)</Text>
                            </View>
                            <View style={styles.subSection}>
                                <Text style={styles.descText}> #-# mins </Text>
                                <Text style={styles.sectionLabel}>Time</Text>
                            </View>
                        </View>
                    </>
                    :
                    <>
                        <View style={styles.subSection & styles.subSectionEdit}>
                            <View style={styles.inputRange}>
                                <TextInput
                                    style={styles.inputNumBox}
                                    value={minPlayerRef}
                                    placeholder="Min #" 
                                    inputMode="numeric"
                                    onChangeText={(e)=>setMinPlayerRef(e)}
                                />
                                <TextInput
                                    style={styles.inputNumBox}
                                    value={maxPlayerRef}
                                    placeholder="Max #" 
                                    inputMode="numeric"
                                    onChangeText={(e)=>setMaxPlayerRef(e)}
                                />
                            </View>
                            <Text style={styles.sectionLabel}>Player(s)</Text>
                        </View>
                        <View style={styles.subSection & styles.subSectionEdit}>
                            <View style={styles.inputRange}>
                                <TextInput
                                    style={styles.inputNumBox}
                                    value={minTimeRef}
                                    placeholder="Min #" 
                                    inputMode="numeric"
                                    onChangeText={(e)=>setMinTimeRef(e)}
                                />
                                <TextInput
                                    style={styles.inputNumBox}
                                    value={maxTimeRef}
                                    placeholder="Max #" 
                                    inputMode="numeric"
                                    onChangeText={(e)=>setMaxTimeRef(e)}
                                />
                            </View>
                            <Text style={styles.sectionLabel}>Time in minutes</Text>
                        </View>
                    </>
                    }
                    {editable ?
                    <>
                        <View style={styles.buttonRow}>
                            <Pressable
                                style={[styles.button, styles.saveButton]}
                                onPress={() => {
                                    console.log('Save clicked'),
                                    editItem(),
                                    toggleEditFields()
                                }}>
                                <Text style={styles.textStyle}>Save</Text>
                            </Pressable> 
                            <Pressable
                                style={[styles.button, styles.cancelButton]}
                                onPress={() => {
                                    console.log('Cancel clicked'),
                                    toggleEditFields()
                                }}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>
                        </View>
                    </> 
                    :
                    <></>
                    }
                </View>
            </View>
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
    showGames:{
        alignItems: 'center',
        height: 'auto',
        width: 350,
    },
    inputContainer:{
        //flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    inputLabel:{
        fontSize: 18,
        marginTop: 10,
    },
    inputbox:{
        minWidth: 175,
        textAlign: 'center',
        margin: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'purple',
        padding: 2,
        fontSize: 18,
    },
    inputRange:{
        flexDirection: 'row',
        alignSelf: 'center',
    },
    inputNumBox:{
        textAlign: 'center',
        margin: 5,
        width: 60,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'purple',
        padding: 2,
        fontSize: 18,
    },
    itemContainer:{
        paddingHorizontal: 30,
        paddingVertical: 12,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: 300,
        height: 350,
    },
    imageBox:{
        width: 250,
        height: 250,
        margin: 10,
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 1,
        alignSelf: 'center'
    },
    headerRow:{
        flexDirection: 'row',
        height: 60,
        alignContent: 'space-between',
        justifyContent: 'center',
        width: 350,
    },
    favoriteButton:{
        height: 45,
        width: 45,
        margin: 10,
        justifyContent: 'center',
    },
    itemName:{
        alignSelf: 'center',
        justifyContent: 'center',
        width: 200,
        margin: 10,
    },
    h1:{
        fontWeight:"bold",
        fontSize: 20,
        textAlign: 'center',
    },
    editButton:{
        height: 45,
        width: 45,
        margin: 10,
        justifyContent: 'center',
        //alignContent: 'center',
    },
    editButtonText:{
        fontStyle: 'italic',
        textAlign: 'center',
    },
    descSection:{
        alignContent: 'center',
        margin: 10,
    },
    descText:{
        textAlign: 'center',
        fontSize: 16,
    },
    highlightsRow:{
        flexDirection: 'row',
        height: 60,
        alignContent: 'space-between',
        justifyContent: 'center',
        width: 350,
    },
    subSection:{
        flexDirection: 'column',
        alignContent: 'space-between',
        justifyContent: 'center',
        marginHorizontal: 5,
        width: 100,
    },
    subSectionEdit:{
        width: 350,
        alignItems: 'center',
    },
    sectionLabel:{
        textAlign: 'center',
        fontSize: 16,
        fontStyle: 'italic',
    },
    buttonRow:{
        flexDirection: 'row',
        height: 60,
        alignContent: 'space-between',
        justifyContent: 'center',
        width: 350,
    }, 
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 100,
        justifyContent: 'center',
    },
    saveButton: {
        backgroundColor: 'green',
        margin: 10,
    },
    cancelButton: {
        backgroundColor: 'red',
        margin: 10,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});