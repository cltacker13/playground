import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, Modal, useWindowDimensions } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { push, onValue } from 'firebase/database';
import auth from '../../firebase/Users';
import gamesDB from '../../firebase/Games';


onAuthStateChanged(auth, (user) => {
    if(user){
        console.log(`${user.displayName} is logged in.`);
    } else {
        console.log(`Not logged in.`);
    }
})

//project name and details
export const gameCollectionTitle = 'Game Collection List';
export const gameCollectionDesc = 'Starting point for a collection database of games and more. ';


//sample of game data
/*const gameList = [
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
];*/

//future feature edit existing entry in list & save edits to game db
//Scope issue: has to be outside of default function if called in Item Component
function editItem(id){
    console.log(`Edit ${id} clicked.`);
    onAuthStateChanged(auth, (user) => {
        if(user){
            console.log(user.displayName,`You have permission to edit ${id}.`);
        } else {
            console.log(`You don't have permission to edit.`);
        }
    })
    /*
    let userAccess = true;
    if(userAccess){
        console.log(`Edit ${id} clicked.`);
        return;
    }else{
        console.log(`You don't have permission to edit.`);
    }*/
};

/* future edit code.
        <Pressable onPress={() => editItem(id)}>
            <Text style={{fontStyle: 'italic'}}> Edit </Text>
        </Pressable>
*/
const Item = ({id,name,players}) => (
    <View key={id} style={styles.itemContainer}>
        <View style={styles.imageBox}></View>
        <View style={styles.itemDetailsColumn}>
            <Text style={styles.itemName}>{name} </Text>
            <Text style={styles.itemDetails}>({players} players)</Text>
        </View>
        {auth.currentUser ?
        <>
        <Pressable style={styles.editButton}
            onPress={() => {
                editItem(id), 
                alert(`Editing ${id}`)
            }}>
            <Text style={styles.editButtonText}> Edit </Text>
        </Pressable>
        </>
        : <></>}
    </View>
);

const Separator = () => <View style={styles.separator} />

export default function GameCollection({navigation}){
    const {height, width, scale, fontScale} = useWindowDimensions();
    const [visible, setVisible] = useState(true);
    const [addVisible, setAddVisible] = useState(false);
    const [gameData, setGameData] = useState([]);
    const [gameNameRef, setGameNameRef] = useState('');
    const [minPlayerRef, setMinPlayerRef] = useState('');
    const [maxPlayerRef, setMaxPlayerRef] = useState('');
    const currentUser = auth.currentUser;
    //console.log(currentUser);
    const [modalVisible, setModalVisible] = useState(false);

    //show up to date db data to screen
    useEffect(() => {
        (async () => {
            console.log('gamesDB: ', gamesDB);
            try {
                //get current "snapshot" of data from db
                //console.log('Local #: ',gameData.length);
                onValue(gamesDB, function(snapshot) {
                    let dbGamesArr = [];
                    //console.log("dbGamesArr: ",dbGamesArr)
                    let gamesSnapshot = Object.entries(snapshot.val()).map((game)=>{
                        dbGamesArr.push({
                            id: game[0],
                            gameID: game[1][0],
                            name: game[1][1].name,
                            players: game[1][1].players 
                        })
                    }); 
                    //console.log('game snapshot:',Object.entries(snapshot.val()));                 
                    //console.log('2db games list: ',dbGamesArr);
                    //console.log('db #: ',dbGamesArr.length);
                    
                    console.log(`Local #: ${gameData.length} & db #: ${dbGamesArr.length}. Making List.`);
                    //console.log('Made List: ',dbGamesArr);

                    //sort game list
                    dbGamesArr.sort((a,b) => {
                        const nameA = a.name.toUpperCase();
                        const nameB = b.name.toUpperCase();
                        if(nameA < nameB){
                            return -1;
                        }
                        if(nameA > nameB){
                            return 1;
                        }
                        return 0;
                    });
                    //console.log('Sorted List: ',dbGamesArr);

                    //update local list with db list
                    setGameData(dbGamesArr);
                }) 
            } catch (err) {
                // Handle error 
                console.log(err.message); 
            } 
        })();
      }, []);
    

    function toggleVisibility(){
        return setVisible(!visible);
    };

    function toggleAddVisibility(){
        return setAddVisible(!addVisible);
    };

    function renderItem({item}){
        return(
            <Item id={item.id} name={item.name} players={item.players} />
        );
    };

    //add new entry to game db
    function addItem(){
        //let userAccess = true;
        if(auth.currentUser !== null){
            //entry error handling.
            if(gameNameRef.trim() !== '' && minPlayerRef > 0 && maxPlayerRef >= minPlayerRef){
                let gamesByGameID = gameData.sort((a,b)=> a.gameID - b.gameID);
                let gameID = Number(gamesByGameID[gameData.length-1].gameID)+1;
                let name = gameNameRef;
                let players = '';
                if(minPlayerRef === maxPlayerRef){
                    players = `${minPlayerRef}`;
                }else{
                    players = `${minPlayerRef}-${maxPlayerRef}`;
                }
                const newGameData = [gameID,{name:name,players:players}]
                //save to db
                try {
                    push(gamesDB, newGameData);
                    alert(`Added: {${gameID}} ${name} (${players} players)`);
                    //console.log(`Added: {${gameID}} ${name} (${players} players)`);
                    resetRef();
                } catch (error) {
                    console.log(`Failed to Add: {${gameID}} ${name} (${players} players)`)
                };
                
            }else{
                console.log('Please enter valid Game Information.');
            };
            return;
        }else{
            console.log(`You don't have permission to add.`);
        };
    };


    function resetRef(){
        setGameNameRef('');
        setMinPlayerRef('');
        setMaxPlayerRef('');
    };


    return(
        <View style={styles.body}>
            <View>
                <Text style={styles.h1}>{gameCollectionTitle}</Text>
                <Text style={styles.descText}>{gameCollectionDesc}</Text>
            </View>
            <View style={visible ? styles.showGames : styles.hide}>
                {currentUser ?
                <>
                <Pressable style={[styles.button, styles.buttonOpen]}
                    onPress={()=> {toggleAddVisibility, setModalVisible(true)}}>
                    <Text style={styles.textStyle}>Add New Game</Text>
                </Pressable>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        alert('Edit Canceled.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
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
                                        setModalVisible(!modalVisible),
                                        addItem()
                                    }}>
                                    <Text style={styles.textStyle}>Save</Text>
                                </Pressable>
                                </View>
                        </View>
                    </Modal>
                </View>
                
                </>
                : <></>
                }
                <View style={styles.listContainer & {maxHeight: height, maxWidth: width}}>
                    <Text style={styles.h1}>Game List</Text>
                    <FlatList data={gameData}
                        renderItem={renderItem}
                        ItemSeparatorComponent={Separator}
                        nestedScrollEnabled/>
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
        marginBottom: 20,
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
        alignItems: 'center',
        marginVertical: 20,
    },
    inputLabel:{
        fontSize: 18,
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
        alignItems: 'center',
        minWidth: 300,
    },
    imageBox:{
        width: 60,
        height: 60,
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 1,
    },
    itemDetailsColumn:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        minWidth: 150,
        margin: 10,
    },
    itemName:{
        fontSize: 16,
        fontWeight: 'bold', 
        alignSelf: 'flex-start'
    },
    itemDetails:{
        fontSize: 16,
        //fontStyle: 'italic', //if in row, miss-aligns text
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
    separator:{
        borderBottomWidth: 1,
        borderBlockColor: 'black',
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
});