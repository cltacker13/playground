import React from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { useState } from 'react';

//sample of game data
const gameList = [
    {name: 'Catan', players: '2-4'},
    {name: 'Contagion', players: '2-5'},
    {name: 'Millebornes', players: '2-4'},
    {name: 'Monopoly', players: '2-6'},
    {name: 'Naruto', players: '2-4'},
    {name: 'Pandemic', players: '2-4'},
    {name: 'Red Rising', players: '1-5'},
    {name: 'Sorry', players: '2-4'},
    {name: 'Tsuro', players: '2-8'},
    {name: 'Villianous', players: '2-4'},
    {name: 'WingSpan', players: '1-5'},
];

//future update add edit button to each entry
const Item = ({name,players}) => (
    <View style={styles.itemContainer}>
        <Text style={styles.itemName}>{name} </Text>
        <Text style={styles.itemDetails}>({players} players)</Text>
    </View>
);

const Separator = () => <View style={styles.separator} />

export default function GameCollection(){
    const [visible, setVisible] = useState(false);
    const [gameRef, setGameRef] = useState('');

    function toggleVisibility(){
        return setVisible(!visible);
    };

    //future feature add new entry to list & save to game db
    function addItem(){
        var name = gameRef;
        var players = '2-4';
        console.log(`${name} (${players} players)`);
        return;
    };

    //future feature edit existing entry in list & save edits to game db
    function editItem(){return};

    function renderItem({item}){
        return(
            <Item name={item.name} players={item.players}/>
        );
    };


    return(
        <View style={styles.body}>
            <Pressable onPress={toggleVisibility}>
                <Text style={styles.h1}>Game Collection List</Text>
                <Text style={styles.descText}>Starting point for a collection database of games and more. </Text>
                <Text style={{fontStyle: 'italic'}}>Click to view.</Text>
            </Pressable>
            <View style={visible ? styles.showGames : styles.hide}>
                <Text style={{fontStyle: 'italic'}}>Upcoming feature: Add Game</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputbox}
                        value={gameRef}
                        placeholder="Type Game Name" 
                        inputMode="text"
                        onChangeText={(e)=>setGameRef(e)}
                    />
                    <Pressable style={styles.addButton} onPress={addItem}>
                        <Text style={styles.addButtonLabel}>+</Text>
                    </Pressable>
                </View>
                <View style={styles.listContainer}>
                    <FlatList data={gameList}
                        renderItem={renderItem}
                        ItemSeparatorComponent={Separator}/>
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
    showGames:{
        alignItems: 'center',
        height: 'auto',
        width: 350,
    },
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputbox:{
        margin: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'purple',
        padding: 2,
        fontSize: 20,
    },
    addButton:{
        borderRadius: 10, 
        height: 35,
        width: 35,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    addButtonLabel:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
    },
    listContainer:{
        height: 350,
    },
    itemContainer:{
        paddingHorizontal: 30,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemName:{
        fontSize: 16,
    },
    itemDetails:{
        fontSize: 16,
        //fontStyle: 'italic', //if in row, miss-aligns text
    },
    separator:{
        borderBottomWidth: 1,
        borderBlockColor: 'black',
    },
});