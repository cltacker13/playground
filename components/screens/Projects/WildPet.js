import React from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';

export default function WildPet(){
    const [visible, setVisible] = useState(true);
   
    function toggleVisibility(){
        return setVisible(!visible);
    };

    const happyWolf = require('./assets/tempHappywolf.png');
    const sadWolf = require('./assets/tempSadwolf.png');  
    const angryWolf = require('./assets/tempAngrywolf.png');  

    const [happyStatus, setHappyStatus] = useState(80);
    const [fullStatus, setFullStatus] = useState(80);
    const [entertainedStatus, setEntertainedStatus] = useState(80);
    const [petMessage, setPetMessage] = useState("I am your pet!");
    const [mood, setMood] = useState(happyWolf);

    var myPet = {
        petName: 'Fido',
        //additional details to be added.
    };

    function updateMoodAndMessage () {
        if(fullStatus >= 70 
            && happyStatus >= 70 
            && entertainedStatus >= 70){
                setPetMessage("I am loved!");
                setMood(happyWolf);
                //console.log(mood);
        }else if(fullStatus < 70 
            || happyStatus < 70 
            || entertainedStatus < 70){
                setMood(sadWolf);
                setPetMessage("I miss you.");
                //console.log(mood);
            if(fullStatus < 50 
                || happyStatus < 50 
                || entertainedStatus < 50){
                    setMood(angryWolf);
                    setPetMessage("I need you.");
                    //console.log(mood);
            };
        };
        //addition outputs to be added.
        return;
    };

    function increaseValues (status, increment) {
        return ( Math.min(Math.max(status+increment,0),100) );
    }
    function decreaseValues (status, increment) {
        return ( Math.min(Math.max(status-increment,0),100) );
    }

    function pet () {
        setHappyStatus(
            increaseValues(happyStatus,10));
        setEntertainedStatus(
            increaseValues(entertainedStatus,5));
        updateMoodAndMessage();
        //console.log('Pet:',happyStatus,fullStatus,entertainedStatus);
        return;
    }
    function feed () {
        if(fullStatus < 100){
            setFullStatus(
                increaseValues(fullStatus,10));
            setHappyStatus(
                increaseValues(happyStatus,5));
            setEntertainedStatus(
                decreaseValues(entertainedStatus,5));
        }else{
            setHappyStatus(
                decreaseValues(happyStatus,10));
            setEntertainedStatus(
                decreaseValues(entertainedStatus,5));
        };
            updateMoodAndMessage();
            //console.log('Feed:',happyStatus,fullStatus,entertainedStatus);
        return;
    };
    function play () {
        setEntertainedStatus(
            increaseValues(entertainedStatus,10));
        setHappyStatus(
            increaseValues(happyStatus,5));
        setFullStatus(
            decreaseValues(fullStatus,5));
        updateMoodAndMessage();
        //console.log('Play:',happyStatus,fullStatus,entertainedStatus);
        return;
    };
 
    return(
        <View style={styles.body}>
            <Pressable onPress={toggleVisibility}>
                <Text style={styles.h1}>My Wild Pet</Text>
                <Text>Personal task, inspired by a popular digital pet game. </Text>
                <Text style={{fontStyle: 'italic'}}>Click to view.</Text>
            </Pressable>
            <View style={visible ? styles.showPet : styles.hide}>
                <View style={styles.petContainer}>
                    <Text>{myPet.petName}</Text>
                    <Text>{petMessage}</Text>
                    <Text>Happy: {happyStatus} | Full: {fullStatus} | Entertained: {entertainedStatus}</Text>
                    <View style={styles.petMood}>
                        <Image style={styles.img} source={mood}/>
                    </View>
                </View>
                <View style={styles.buttonRow}>
                    <Pressable style={styles.button} onPress={pet}>
                        <Text style={styles.buttonLabel}>Pet</Text>
                    </Pressable> 
                    <Pressable style={styles.button} onPress={feed}>
                        <Text style={styles.buttonLabel}>Feed</Text>
                    </Pressable> 
                    <Pressable style={styles.button} onPress={play}>
                        <Text style={styles.buttonLabel}>Play</Text>
                    </Pressable>
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
        fontSize: 18,
        textAlign: 'center',
    },
    hide:{
        display: 'none',
        height: 10,
    },
    showPet:{
        //display: 'flex',
        alignItems: 'center',
        height: 'auto',
        width: 300,
    },
    petContainer:{
        height: 200,
        width: 'auto',
        alignItems: 'center',
    },
    petMood:{
        backgroundColor: '#fff',
    },
    img:{
        height: 150,
        width: 150,
    },
    buttonRow:{
        flexDirection: 'row',
        height: 50,
        width: 'auto',
        alignItems: 'center',
    },
    button:{
        borderRadius: 10, 
        height: 25,
        width: 60,
        backgroundColor: 'blue',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 1,
    },
    buttonLabel: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },

});