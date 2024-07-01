import React from 'react';
import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';

export const diceRollTitle = 'Dice Roll';
export const diceRollDesc = 'Personal task, roll the dice to determine player 1 or damage counts. ';

const Die = ({title}) => {
    return (
        <View style={styles.dice}>
            <Text style={styles.diceText}>{title}</Text>
        </View>
    )
}

export default function DiceRoll(){
    const [visible, setVisible] = useState(false);
   
    function toggleVisibility(){
        return setVisible(!visible);
    };

    const [diceCount, setDiceCount] = useState(1);
    const [diceSides, setDiceSides] = useState(6);
    const [diceResult, setDiceResult] = useState([]);

    if(diceCount<1){
        setDiceCount(1);
    }
    if(diceSides<1){
        setDiceSides(1);
    }

    const rollDice = () => {
        let result = [];
        for(let i=0;i<diceCount;i++){
            let min = Math.ceil(1);
            let max = Math.floor(diceSides);
            let die = (Math.floor(Math.random() * (max - min + 1)) + min);
            result.push({id:i,number:die});
        };
        setDiceResult(result);

    }



    return(
        <View style={styles.body}>
            <View>
                <Text style={styles.h1}>{diceRollTitle}</Text>
                <Text style={styles.descText}>{diceRollDesc}</Text>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.rollSpace}>
                <FlatList
                    data={diceResult}
                    renderItem={({item}) => <Die title={item.number} />}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    numColumns={4}
                />
                </View>
                <View style={styles.buttonRow}>
                    <Pressable style={styles.actionButton} onPress={rollDice}>
                        <Text style={styles.buttonLabel}>Roll the Dice!</Text>
                    </Pressable> 
                </View>
                <Pressable style={styles.optionsButton} onPress={toggleVisibility}>
                    <Text style={styles.optionText}>Dice Options</Text>
                </Pressable>
                <View style={visible ? styles.optionsContainer : styles.hide}>
                    <Text style={styles.optionText}>Edit # of Dice</Text>
                    <View style={styles.buttonRow}>
                        <Pressable style={styles.button} onPress={() => {setDiceCount(diceCount-1)}}>
                            <Text style={styles.buttonLabel}> - </Text>
                        </Pressable>
                        <Text style={styles.optionText}>{diceCount}</Text>
                        <Pressable style={styles.button} onPress={() => {setDiceCount(diceCount+1)}}>
                            <Text style={styles.buttonLabel}> + </Text>
                        </Pressable>  
                    </View>
                    <Text style={styles.optionText}>Edit # of Sides per Dice</Text> 
                    <View style={styles.buttonRow}>
                        <Pressable style={styles.button} onPress={() => {setDiceSides(diceSides-1)}}>
                            <Text style={styles.buttonLabel}> - </Text>
                        </Pressable>
                        <Text style={styles.optionText}>{diceSides}</Text>
                        <Pressable style={styles.button} onPress={() => {setDiceSides(diceSides+1)}}>
                            <Text style={styles.buttonLabel}> + </Text>
                        </Pressable>  
                    </View>   
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
    mainContainer:{
        height: 250,
        width: 'auto',
        alignItems: 'center',
    },
    optionsContainer:{
        //display: 'flex',
        alignItems: 'center',
        height: 'auto',
        width: 300,
        borderRadius: 10,
        borderWidth: 1, 
        borderColor: 'gray',
        padding: 10,
    },
    optionText:{
        minWidth: 50,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    rollSpace:{
        minHeight: 100,
        minWidth: 100,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },  
    dice:{
        width: 50,
        height: 50,
        borderWidth: 1, 
        borderColor: 'gray',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    diceText:{
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        verticalAlign: 'middle',
    },
    buttonRow:{
        flexDirection: 'row',
        //height: 60,
        width: 'auto',
        alignItems: 'center',
        marginVertical: 10,
    },
    button:{
        borderRadius: 10, 
        height: 35,
        width: 50,
        backgroundColor: 'gray',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    optionsButton:{
        borderRadius: 10,
        borderWidth: 1, 
        borderColor: 'gray',
        height: 35,
        width: 150,
        //backgroundColor: 'gray',
        alignContent: 'center',
        justifyContent: 'center',
        //margin: 1,
        marginVertical: 10,
    },
    actionButton:{
        borderRadius: 10, 
        height: 50,
        width: 200,
        backgroundColor: 'blue',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    buttonLabel: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },

});