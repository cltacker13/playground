import React from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { useState } from 'react';

//sample of game data
const gameList = [
    {id: '100001', name: 'Catan', players: '2-4'},
    {id: '100002', name: 'Contagion', players: '2-5'},
    {id: '100003', name: 'Millebornes', players: '2-4'},
    {id: '100004', name: 'Monopoly', players: '2-6'},
    {id: '100005', name: 'Naruto', players: '2-4'},
    {id: '100006', name: 'Pandemic', players: '2-4'},
    {id: '100007', name: 'Red Rising', players: '1-5'},
    {id: '100008', name: 'Sorry', players: '2-4'},
    {id: '100009', name: 'Tsuro', players: '2-8'},
    {id: '100010', name: 'Villianous', players: '2-4'},
    {id: '100011', name: 'WingSpan', players: '1-5'},
];

//future feature to sort list alphabetically by name
function sortListByName(list){
    var sortedList = [];

    return sortedList;
}

//future feature add new entry to list & save to game db
function addItem(){
    var id = Number(gameList[gameList.length-1].id)+1;
    var name = gameRef;
    var players = `${minPlayerRef}-${maxPlayerRef}`;
    gameList.push({'id': id, 'name': name, 'players': players});
    console.log(`{${id}} ${name} (${players} players)`);
    return;
};

//future feature edit existing entry in list & save edits to game db
function editItem(id){
    return console.log(`Edit ${id} clicked.`); //the onPress triggers automatically - bug.
};

//future update add edit button to each entry
const Item = ({id,name,players}) => (
    <View style={styles.itemContainer}>
        <Text style={styles.itemName}>{name} </Text>
        <Text style={styles.itemDetails}>({players} players)</Text>
        <Pressable onPress={editItem(id)}>
            <Text style={{fontStyle: 'italic'}}> Edit </Text>
        </Pressable>
    </View>
);

const Separator = () => <View style={styles.separator} />

export default function GameCollection(){
    const [visible, setVisible] = useState(false);
    const [addVisible, setAddVisible] = useState(false);
    const [gameRef, setGameRef] = useState('');
    const [minPlayerRef, setMinPlayerRef] = useState('');
    const [maxPlayerRef, setMaxPlayerRef] = useState('');

    function toggleVisibility(){
        return setVisible(!visible);
    };

    function toggleAddVisibility(){
        return setAddVisible(!addVisible);
    };

    function renderItem({item}){
        return(
            <Item id={item.id} name={item.name} players={item.players}/>
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
                <Pressable onPress={toggleAddVisibility}>
                    <Text style={{fontStyle: 'italic'}}>Click to Add New Game</Text>
                </Pressable>
                <View style={addVisible ? styles.inputContainer : styles.hide}>
                    <Text style={styles.inputLabel}>Game Name</Text>
                    <TextInput
                        style={styles.inputbox}
                        value={gameRef}
                        placeholder="Name" 
                        inputMode="text"
                        onChangeText={(e)=>setGameRef(e)}
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
        //flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputLabel:{
        fontSize: 18,
    },
    inputbox:{
        margin: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'purple',
        padding: 2,
        fontSize: 18,
    },
    inputRange:{
        flexDirection: 'row',
    },
    inputNumBox:{
        margin: 5,
        width: 60,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'purple',
        padding: 2,
        fontSize: 18,
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